import "server-only";
import { query } from "./db";
import { EXERCISES, GRAPH, LESSON_BY_ID } from "./curriculum";
import { checkAnswer, type CheckResult } from "./check";
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
  SOLVE_SCHEMA,
  SOLVE_SYSTEM,
  fingerprint,
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
};

/** The mastered lessons that this one requires, revisits or applies: what recall draws on. */
export function recallSources(lessonId: string, mastered: Set<string>): string[] {
  return [
    ...new Set(
      GRAPH.edges
        .filter((e) => e.to === lessonId && (e.kind === "requires" || e.kind === "revisits" || e.kind === "applies"))
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
      `SELECT id, lesson_id, source_lesson_id, prompt, answer, attempts, solved FROM recall_questions
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
  const asked = await query<{ source_lesson_id: string; prompt: string }>(
    `SELECT source_lesson_id, prompt FROM (
       SELECT source_lesson_id, prompt, created_at,
              row_number() OVER (PARTITION BY source_lesson_id ORDER BY created_at DESC) AS n
       FROM recall_questions WHERE source_lesson_id = ANY($1)
     ) recent WHERE n <= ${ASKED_LIMIT} ORDER BY created_at`,
    [sources],
  );

  const target = GRAPH.nodes.get(lessonId)!;
  const parts = [
    `The learner is about to start "${target.title}" (${target.course} ${target.courseTitle}). Write ${RECALL_DRAFTS} new recall questions on the earlier lessons below, spread across them.`,
  ];
  for (const id of sources) {
    const lesson = LESSON_BY_ID.get(id)!;
    const node = GRAPH.nodes.get(id)!;
    const practice = lesson.practice.map((e) => `- ${toPlainText(e.prompt)}`).join("\n");
    const before = asked.filter((a) => a.source_lesson_id === id).map((a) => `- ${a.prompt}`).join("\n");
    parts.push(
      [
        `# Earlier lesson ${id}: "${node.title}" (${node.course} ${node.courseTitle}, track ${node.track})`,
        `## What it teaches\n${toPlainText(lesson.theory)}`,
        `## Its practice questions, which the learner has already done (do not reuse)\n${practice}`,
        before ? `## Recall questions already asked on this lesson (never repeat or reword)\n${before}` : "",
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
  const candidates: { q: DraftQuestion; answer: Answer }[] = [];
  for (const q of draft.questions) {
    const answer = toAnswer(q);
    const print = fingerprint(q.prompt);
    if (!answer || !sources.includes(q.source_lesson_id) || !q.prompt.trim() || seen.has(print)) continue;
    seen.add(print);
    candidates.push({ q, answer });
  }

  if (candidates.length === 0) return [];

  // A second, independent pass answers the questions without seeing the answers; only questions
  // whose answer it confirms are kept, so a slip in a generated answer never marks the learner wrong.
  const solved = await structured<SolveOutput>({
    system: SOLVE_SYSTEM,
    schema: SOLVE_SCHEMA,
    effort: "medium",
    maxTokens: 16000,
    messages: [{ role: "user", content: candidates.map((c, i) => solverText(i + 1, c.q.prompt, c.answer)).join("\n\n") }],
  });
  const confirmed = candidates.filter((c, i) => {
    const reply = solved.answers.find((a) => a.number === i + 1)?.answer ?? "";
    return reply && reply !== "ambiguous" && checkAnswer(c.answer, reply).correct;
  });

  // Spread the set across lessons before taking a second question from any one of them.
  const picked: typeof confirmed = [];
  for (const round of [0, 1, 2, 3, 4]) {
    for (const id of sources) {
      const mine = confirmed.filter((c) => c.q.source_lesson_id === id);
      if (mine[round] && picked.length < RECALL_SET_SIZE) picked.push(mine[round]);
    }
  }

  const batch = (await query<{ b: number }>("SELECT coalesce(max(batch), 0)::int + 1 AS b FROM recall_questions WHERE lesson_id = $1", [lessonId]))[0].b;
  const rows: RecallRow[] = [];
  for (const c of picked) {
    const inserted = await query<RecallRow>(
      `INSERT INTO recall_questions (lesson_id, source_lesson_id, batch, prompt, answer, solution, fingerprint)
       VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (fingerprint) DO NOTHING
       RETURNING id, lesson_id, source_lesson_id, prompt, answer, attempts, solved`,
      [lessonId, c.q.source_lesson_id, batch, c.q.prompt.trim(), JSON.stringify(c.answer), c.q.solution, fingerprint(c.q.prompt)],
    );
    if (inserted[0]) rows.push(inserted[0]);
  }
  return rows;
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
export async function attemptRecall(id: string, input: string): Promise<CheckResult> {
  const n = Number(id.slice(RECALL_PREFIX.length));
  if (!Number.isInteger(n)) return { correct: false, message: "Unknown question." };
  const row = (await query<RecallRow>("SELECT id, lesson_id, source_lesson_id, prompt, answer, attempts, solved FROM recall_questions WHERE id = $1", [n]))[0];
  if (!row) return { correct: false, message: "Unknown question." };
  const result = checkAnswer(row.answer, input);
  if (result.message && !result.correct) return result;
  await query(
    `UPDATE recall_questions SET attempts = attempts + 1, solved = solved OR $2,
       first_correct = CASE WHEN attempts = 0 THEN $2 ELSE first_correct END, answered_at = now()
     WHERE id = $1`,
    [n, result.correct],
  );
  await query("INSERT INTO attempt_log (exercise_id, response, correct, context) VALUES ($1, $2, $3, 'recall')", [id, input.slice(0, 4000), result.correct]);
  return result;
}

