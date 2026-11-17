import "server-only";
import { query } from "./db";
import { EXERCISES, GRAPH, LESSON_BY_ID } from "./curriculum";
import { checkAnswer, type CheckResult } from "./check";
import { BUILDS_ON } from "./graph";
import type { Answer } from "./types";
import type { ExerciseView } from "@/components/lesson/ExerciseCard";
import { PartonError, partonConnected, structured } from "./parton/claude";
import { toPlainText } from "./parton/plaintext";
import { renderParton } from "./parton/render";
import {
  RECALL_DRAFTS,
  RECALL_RULES,
  RECALL_SCHEMA,
  RECALL_SET_SIZE,
  REVIEW_MAX,
  REVIEW_MIN,
  SOLVE_SCHEMA,
  SOLVE_SYSTEM,
  fingerprint,
  interleave,
  reviewPlan,
  solverText,
  toAnswer,
  type DraftQuestion,
  type SolveOutput,
} from "./parton/recallPrompts";

/** Recall questions are stored with ids "recall:<n>", so they never collide with lesson exercises. */
export const RECALL_PREFIX = "recall:";
export const isRecallId = (id: string) => id.startsWith(RECALL_PREFIX);

/** How many earlier recall questions per source lesson Parton is shown, so it does not repeat them. */
const ASKED_LIMIT = 80;

type RecallRow = {
  id: number;
  lesson_id: string;
  source_lesson_id: string;
  prompt: string;
  answer: Answer;
  attempts: number;
  solved: boolean;
  /** For a review question, the spaced-review card it stands for. */
  review_card: string | null;
};

const COLUMNS = "id, lesson_id, source_lesson_id, prompt, answer, attempts, solved, review_card";

/** The mastered lessons that this one requires, revisits or applies: what recall draws on. */
export function recallSources(lessonId: string, mastered: Set<string>): string[] {
  return [
    ...new Set(
      GRAPH.edges
        .filter((e) => e.to === lessonId && BUILDS_ON.has(e.kind))
        .map((e) => e.from)
        .filter((id) => mastered.has(id) && LESSON_BY_ID.has(id)),
    ),
  ];
}

export type RecallView = ExerciseView & { promptHtml: string; sourceTitle: string };

function toRecallView(r: RecallRow): RecallView {
  const a = r.answer;
  return {
    id: `${RECALL_PREFIX}${r.id}`,
    rung: "check",
    kind: a.kind,
    options: a.kind === "choice" ? a.options : undefined,
    optionsHtml: a.kind === "choice" ? a.options.map(renderParton) : undefined,
    multiple: a.kind === "choice" ? a.correct.length > 1 : undefined,
    variables: a.kind === "expression" ? a.variables : undefined,
    solved: r.solved,
    response: null,
    verdict: null,
    feedbackHtml: null,
    promptHtml: renderParton(r.prompt),
    sourceTitle: GRAPH.nodes.get(r.source_lesson_id)?.title ?? "",
  };
}

export type RecallResult = { ok: true; questions: RecallView[] } | { ok: false; error: string; offline?: boolean };

// One generation per lesson at a time, so a double render does not write two sets.
const inFlight = new Map<string, Promise<RecallRow[]>>();

/**
 * The recall questions for this visit to a lesson. A set stays until every question in it has
 * been tried; after that, or when `fresh` is asked for, Parton writes a new set. Questions are
 * never repeated: each is new, and the database refuses one the learner has seen before.
 */
export async function recallSet(lessonId: string, mastered: Set<string>, fresh = false): Promise<RecallResult> {
  const sources = recallSources(lessonId, mastered);
  if (sources.length === 0) return { ok: true, questions: [] };

  if (!fresh) {
    const open = await query<RecallRow>(
      `SELECT ${COLUMNS} FROM recall_questions
       WHERE lesson_id = $1 AND batch = (SELECT max(batch) FROM recall_questions WHERE lesson_id = $1)
       ORDER BY id`,
      [lessonId],
    );
    if (open.length > 0 && open.some((r) => r.attempts === 0)) return { ok: true, questions: open.map(toRecallView) };
  }

  if (!partonConnected()) {
    return { ok: false, offline: true, error: "Parton writes new recall questions each time, so recall needs Parton to be connected." };
  }

  let job = inFlight.get(lessonId);
  if (!job) {
    job = generate(lessonId, sources).finally(() => inFlight.delete(lessonId));
    inFlight.set(lessonId, job);
  }
  try {
    const rows = await job;
    if (rows.length === 0) return { ok: false, error: "Parton couldn't write new recall questions this time. Please try again." };
    return { ok: true, questions: rows.map(toRecallView) };
  } catch (error) {
    if (error instanceof PartonError) return { ok: false, error: error.message };
    throw error;
  }
}

async function generate(lessonId: string, allSources: string[]): Promise<RecallRow[]> {
  const struggles = await strugglesIn(allSources);
  // At most three earlier lessons per set, earlier struggles first, then a rotating choice.
  const shuffled = allSources.map((id) => ({ id, r: Math.random() })).sort((a, b) => a.r - b.r).map((x) => x.id);
  const sources = shuffled.sort((a, b) => Number(struggles.has(b)) - Number(struggles.has(a))).slice(0, 3);
  const target = GRAPH.nodes.get(lessonId)!;
  const confirmed = await writeQuestions(
    `The learner is about to start "${target.title}" (${target.course} ${target.courseTitle}). Write ${RECALL_DRAFTS} new recall questions on the earlier lessons below, spread across them.`,
    sources.map((id) => ({ id })),
    struggles,
  );

  // Spread the set across lessons before taking a second question from any one of them.
  const picked: Confirmed[] = [];
  for (const round of [0, 1, 2, 3, 4]) {
    for (const id of sources) {
      const mine = confirmed.filter((c) => c.q.source_lesson_id === id);
      if (mine[round] && picked.length < RECALL_SET_SIZE) picked.push(mine[round]);
    }
  }
  return store(lessonId, picked.map((c) => ({ ...c, card: null })));
}

type Confirmed = { q: DraftQuestion; answer: Answer };
type SourcePlan = { id: string; want?: number; ideas?: string[] };

/**
 * Parton drafts brand-new questions on the given lessons, never repeating a practice question or
 * any recall or review question asked before. A second, independent pass answers them without
 * seeing the answers; only questions whose answer it confirms are returned.
 */
async function writeQuestions(intro: string, plan: SourcePlan[], struggles: Map<string, string[]>): Promise<Confirmed[]> {
  const sources = plan.map((p) => p.id);
  const asked = await query<{ source_lesson_id: string; prompt: string }>(
    `SELECT source_lesson_id, prompt FROM (
       SELECT source_lesson_id, prompt, created_at,
              row_number() OVER (PARTITION BY source_lesson_id ORDER BY created_at DESC) AS n
       FROM recall_questions WHERE source_lesson_id = ANY($1)
     ) recent WHERE n <= ${ASKED_LIMIT} ORDER BY created_at`,
    [sources],
  );

  const parts = [intro];
  for (const { id, want, ideas } of plan) {
    const lesson = LESSON_BY_ID.get(id)!;
    const node = GRAPH.nodes.get(id)!;
    const practice = lesson.practice.map((e) => `- ${toPlainText(e.prompt)}`).join("\n");
    const before = asked.filter((a) => a.source_lesson_id === id).map((a) => `- ${a.prompt}`).join("\n");
    parts.push(
      [
        `# Earlier lesson ${id}: "${node.title}" (${node.course} ${node.courseTitle}, track ${node.track})`,
        want ? `Write ${want} question${want > 1 ? "s" : ""} on this lesson.` : "",
        `## What it teaches\n${toPlainText(lesson.theory)}`,
        ideas?.length
          ? `## Ideas due for review\nTest these ideas, each with a new question. They are shown as the practice questions where the learner met them; never reuse or reword these.\n${ideas.map((i) => `- ${i}`).join("\n")}`
          : "",
        `## Its practice questions, which the learner has already done (do not reuse)\n${practice}`,
        before ? `## Questions already asked on this lesson (never repeat or reword)\n${before}` : "",
        struggles.get(id)?.length ? `## The learner's earlier struggles here\n${struggles.get(id)!.map((s) => `- ${s}`).join("\n")}` : "",
      ].filter(Boolean).join("\n\n"),
    );
  }

  const draft = await structured<{ questions: DraftQuestion[] }>({
    system: RECALL_RULES,
    schema: RECALL_SCHEMA,
    effort: "medium",
    maxTokens: 24000,
    messages: [{ role: "user", content: parts.join("\n\n") }],
  });

  // Keep well-formed questions on the named lessons that are not repeats of anything seen.
  const seen = new Set(asked.map((a) => fingerprint(a.prompt)));
  for (const id of sources) for (const e of LESSON_BY_ID.get(id)!.practice) seen.add(fingerprint(toPlainText(e.prompt)));
  const candidates: Confirmed[] = [];
  for (const q of draft.questions) {
    const answer = toAnswer(q);
    const print = fingerprint(q.prompt);
    if (!answer || !sources.includes(q.source_lesson_id) || !q.prompt.trim() || seen.has(print)) continue;
    seen.add(print);
    candidates.push({ q, answer });
  }

  if (candidates.length === 0) return [];

  // The second pass: a slip in a generated answer must never mark the learner wrong.
  const solved = await structured<SolveOutput>({
    system: SOLVE_SYSTEM,
    schema: SOLVE_SCHEMA,
    effort: "medium",
    maxTokens: 16000,
    messages: [{ role: "user", content: candidates.map((c, i) => solverText(i + 1, c.q.prompt, c.answer)).join("\n\n") }],
  });
  return candidates.filter((c, i) => {
    const reply = solved.answers.find((a) => a.number === i + 1)?.answer ?? "";
    return reply && reply !== "ambiguous" && checkAnswer(c.answer, reply).correct;
  });
}

/** Saves a set as the next batch for `setId`; the database refuses any question seen before. */
async function store(setId: string, picked: (Confirmed & { card: string | null })[]): Promise<RecallRow[]> {
  const batch = (await query<{ b: number }>("SELECT coalesce(max(batch), 0)::int + 1 AS b FROM recall_questions WHERE lesson_id = $1", [setId]))[0].b;
  const rows: RecallRow[] = [];
  for (const c of picked) {
    const inserted = await query<RecallRow>(
      `INSERT INTO recall_questions (lesson_id, source_lesson_id, batch, prompt, answer, solution, fingerprint, review_card)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ON CONFLICT (fingerprint) DO NOTHING
       RETURNING ${COLUMNS}`,
      [setId, c.q.source_lesson_id, batch, c.q.prompt.trim(), JSON.stringify(c.answer), c.q.solution, fingerprint(c.q.prompt), c.card],
    );
    if (inserted[0]) rows.push(inserted[0]);
  }
  return rows;
}

/* ---------- Review ---------- */

/** Review questions live beside recall questions, under this set id, so neither ever repeats the other. */
const REVIEW_SET = "review";

export type ReviewResult =
  | { ok: true; questions: RecallView[]; waiting: number }
  | { ok: false; error: string; offline?: boolean };

const latestReview = () =>
  query<RecallRow>(
    `SELECT ${COLUMNS} FROM recall_questions
     WHERE lesson_id = $1 AND batch = (SELECT max(batch) FROM recall_questions WHERE lesson_id = $1) ORDER BY id`,
    [REVIEW_SET],
  );

/** Due cards that the given set does not already cover. */
async function waitingBeyond(set: RecallRow[]): Promise<number> {
  const covered = set.map((r) => r.review_card).filter((c): c is string => Boolean(c));
  const rows = await query<{ n: number }>(
    "SELECT count(*)::int AS n FROM review_cards WHERE due <= now() AND NOT (exercise_id = ANY($1))",
    [covered],
  );
  return rows[0]?.n ?? 0;
}

/**
 * A spaced-review session: between REVIEW_MIN and REVIEW_MAX questions, each written new by Parton
 * on an idea that is due, and never a question the learner has seen before. A set stays until
 * every question in it has been tried; `fresh` asks for the next set at any time.
 */
export async function reviewSet(fresh = false): Promise<ReviewResult> {
  const open = await latestReview();
  if (!fresh && open.some((r) => r.attempts === 0)) {
    return { ok: true, questions: open.map(toRecallView), waiting: await waitingBeyond(open) };
  }

  const covered = fresh ? open.filter((r) => r.attempts === 0 && r.review_card).map((r) => r.review_card!) : [];
  // Cards not in the set being replaced come first, so "next questions" moves on to other ideas.
  const due = await query<CardRow>(
    `SELECT exercise_id, lesson_id FROM review_cards WHERE due <= now()
     ORDER BY (exercise_id = ANY($1)), due LIMIT ${REVIEW_MAX}`,
    [covered],
  );
  if (due.length === 0) return { ok: true, questions: [], waiting: 0 };

  if (!partonConnected()) {
    return { ok: false, offline: true, error: "Parton writes new review questions each time, so review needs Parton to be connected." };
  }

  let job = inFlight.get(REVIEW_SET);
  if (!job) {
    job = generateReview(due).finally(() => inFlight.delete(REVIEW_SET));
    inFlight.set(REVIEW_SET, job);
  }
  try {
    const rows = await job;
    if (rows.length < REVIEW_MIN) return { ok: false, error: "Parton couldn't write enough new review questions this time. Please try again." };
    return { ok: true, questions: rows.map(toRecallView), waiting: await waitingBeyond(rows) };
  } catch (error) {
    if (error instanceof PartonError) return { ok: false, error: error.message };
    throw error;
  }
}

type CardRow = { exercise_id: string; lesson_id: string };

async function generateReview(due: CardRow[]): Promise<RecallRow[]> {
  // With fewer than REVIEW_MIN cards due, the ideas due soonest after them fill the session.
  const cards = [...due];
  if (cards.length < REVIEW_MIN) {
    const soon = await query<CardRow>(
      `SELECT exercise_id, lesson_id FROM review_cards WHERE due > now() ORDER BY due LIMIT ${REVIEW_MIN - cards.length}`,
    );
    cards.push(...soon);
  }
  const usable = cards.filter((c) => LESSON_BY_ID.has(c.lesson_id) && GRAPH.nodes.has(c.lesson_id) && EXERCISES.has(c.exercise_id));
  if (usable.length === 0) return [];
  const want = reviewPlan(usable.map((c) => c.lesson_id));
  const lessons = [...want.keys()];
  const struggles = await strugglesIn(lessons);

  const picked: (Confirmed & { card: string | null })[] = [];
  const target = Math.max(REVIEW_MIN, Math.min(REVIEW_MAX, usable.length));
  // Two rounds at most: the second only tops the set up if the first left it short of the minimum.
  for (let round = 0; round < 2 && picked.length < REVIEW_MIN; round++) {
    const missing = round === 0 ? want : reviewPlan(lessons, REVIEW_MIN - picked.length);
    const plan: SourcePlan[] = [...missing].map(([id, n]) => ({
      id,
      want: n + 1,
      ideas: usable.filter((c) => c.lesson_id === id).map((c) => toPlainText(EXERCISES.get(c.exercise_id)!.exercise.prompt)),
    }));
    const total = plan.reduce((sum, p) => sum + (p.want ?? 0), 0);
    const confirmed = await writeQuestions(
      `The learner is reviewing earlier lessons on a spaced schedule, just before they would forget them. Write ${total} new review questions on the lessons below, as many on each as it asks for, on the ideas listed as due.`,
      plan,
      struggles,
    );
    const taken = new Set(picked.map((p) => fingerprint(p.q.prompt)));
    const fresh = confirmed.filter((c) => !taken.has(fingerprint(c.q.prompt)));
    // One question for each due card first, then spares on the same lessons up to the target.
    for (const card of usable) {
      if (picked.some((p) => p.card === card.exercise_id)) continue;
      const i = fresh.findIndex((c) => c.q.source_lesson_id === card.lesson_id);
      if (i >= 0 && picked.length < target) picked.push({ ...fresh.splice(i, 1)[0], card: card.exercise_id });
    }
    while (picked.length < target && fresh.length > 0) picked.push({ ...fresh.shift()!, card: null });
  }
  if (picked.length < REVIEW_MIN) return [];
  return store(REVIEW_SET, interleave(picked));
}

/** Per source lesson: misconceptions Parton noted, and recall or practice questions missed. */
async function strugglesIn(sources: string[]): Promise<Map<string, string[]>> {
  const out = new Map<string, string[]>();
  const add = (id: string, s: string) => out.set(id, [...(out.get(id) ?? []), s]);
  const notes = await query<{ lesson_id: string; body: string }>(
    "SELECT lesson_id, body FROM parton_notes WHERE kind = 'misconception' AND lesson_id = ANY($1) ORDER BY at DESC LIMIT 12",
    [sources],
  );
  for (const n of notes) add(n.lesson_id, n.body);
  const missed = await query<{ exercise_id: string }>(
    `SELECT exercise_id FROM attempt_log WHERE NOT correct AND split_part(exercise_id, ':', 1) = ANY($1)
     GROUP BY exercise_id HAVING count(*) >= 2`,
    [sources],
  );
  for (const m of missed) {
    const ref = EXERCISES.get(m.exercise_id);
    if (ref) add(ref.lessonId, `Missed more than once: ${toPlainText(ref.exercise.prompt)}`);
  }
  const recallMisses = await query<{ source_lesson_id: string; prompt: string }>(
    "SELECT source_lesson_id, prompt FROM recall_questions WHERE source_lesson_id = ANY($1) AND attempts > 0 AND NOT first_correct ORDER BY created_at DESC LIMIT 12",
    [sources],
  );
  for (const r of recallMisses) add(r.source_lesson_id, `Missed a recall question: ${r.prompt}`);
  return out;
}

/** Checks an answer to a recall question and records it. */
export async function attemptRecall(
  id: string,
  input: string,
  context: "recall" | "review",
): Promise<{ result: CheckResult; reviewCard?: string }> {
  const n = Number(id.slice(RECALL_PREFIX.length));
  if (!Number.isInteger(n)) return { result: { correct: false, message: "Unknown question." } };
  const row = (await query<RecallRow>(`SELECT ${COLUMNS} FROM recall_questions WHERE id = $1`, [n]))[0];
  if (!row || (row.lesson_id === REVIEW_SET) !== (context === "review")) return { result: { correct: false, message: "Unknown question." } };
  const result = checkAnswer(row.answer, input);
  if (result.message && !result.correct) return { result };
  await query(
    `UPDATE recall_questions SET attempts = attempts + 1, solved = solved OR $2,
       first_correct = CASE WHEN attempts = 0 THEN $2 ELSE first_correct END, answered_at = now()
     WHERE id = $1`,
    [n, result.correct],
  );
  await query("INSERT INTO attempt_log (exercise_id, response, correct, context) VALUES ($1, $2, $3, $4)", [id, input.slice(0, 4000), result.correct, context]);
  // The first answer to a review question decides when its idea comes back.
  return { result, reviewCard: row.attempts === 0 && row.review_card ? row.review_card : undefined };
}

