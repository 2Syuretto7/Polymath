import type { Answer } from "@/lib/types";

/**
 * Fresh recall questions. Parton writes new questions on the ideas a lesson rests on each time,
 * and never repeats one the learner has already seen: not a practice question from the earlier
 * lesson, and not an earlier recall question. Pure functions and constants, so they can be tested.
 */

export const RECALL_SET_SIZE = 3;
/** Parton drafts a few spare questions, because any whose answer a second pass cannot confirm is dropped. */
export const RECALL_DRAFTS = 5;

export const RECALL_RULES = `You write recall questions for Polymath, a private university for one learner studying mathematics and philosophy.

Before the learner starts a new lesson, a few short questions bring back the ideas from earlier lessons that the new one rests on. Your job is to write brand-new ones.

Rules:
- Every question must be new. Never reuse, reword or lightly vary a practice question from the earlier lessons or any question in the list of questions already asked. Change the situation, the numbers, the objects or the angle, so that remembering an old answer does not help; understanding does.
- Each question tests one central idea from the earlier lesson it names, at the level that lesson teaches.
- Use only what the learner has been taught: ideas in the lesson the question names, and in what that lesson says it builds on. Never use, assume or lean on an idea from a later lesson, even a familiar one such as sets, matrices or limits, in the question, its options or the expected answer.
- Short: answerable in a minute or two, without a calculator unless the numbers are friendly.
- Each question must have exactly one correct answer that a machine can check:
  - "numeric": a single number. Put it in numeric_value. Use exact values where you can; if the answer is irrational, ask for it to a stated number of decimal places and set tolerance to match (for example 0.005 for two places). Otherwise tolerance 0.
  - "expression": an algebraic expression in the listed variables, using + - * / ^ and sqrt, exp, ln, sin, cos, tan. Put it in expression and the variable names in variables. Say in the prompt which variables to use.
  - "choice": two to five options, with the zero-based indices of every correct option in correct. If more than one is correct, the prompt must say "Select all that apply". Options must be unambiguous: exactly the listed ones are correct under any careful reading.
- Philosophy questions are usually "choice": test understanding of an argument, a distinction or a position, never trivia such as dates or who said what.
- Write mathematics in TeX between dollar signs, for example $x^2 + 1$. British spelling as used in India. No emojis.
- In solution, work the question out in full, so the answer is checked before you commit to it.
- If you are told about the learner's earlier struggles, aim at least one question at them, from a fresh direction.`;

const answerFields = {
  kind: { type: "string", enum: ["numeric", "expression", "choice"] },
  numeric_value: { type: "number", description: "The answer, if kind is numeric. Otherwise 0." },
  tolerance: { type: "number", description: "Allowed relative error for a numeric answer; 0 for exact." },
  expression: { type: "string", description: "The answer, if kind is expression. Otherwise empty." },
  variables: { type: "array", items: { type: "string" }, description: "The variables of an expression answer. Otherwise empty." },
  options: { type: "array", items: { type: "string" }, description: "The options, if kind is choice. Otherwise empty." },
  correct: { type: "array", items: { type: "integer" }, description: "Zero-based indices of the correct options. Otherwise empty." },
} as const;

export const RECALL_SCHEMA = {
  type: "object",
  properties: {
    questions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          source_lesson_id: { type: "string", description: "The id of the earlier lesson this question recalls." },
          prompt: { type: "string" },
          solution: { type: "string", description: "A full worked solution. Never shown to the learner." },
          ...answerFields,
        },
        required: ["source_lesson_id", "prompt", "solution", ...Object.keys(answerFields)],
        additionalProperties: false,
      },
    },
  },
  required: ["questions"],
  additionalProperties: false,
} as const;

export type DraftQuestion = {
  source_lesson_id: string;
  prompt: string;
  solution: string;
  kind: "numeric" | "expression" | "choice";
  numeric_value: number;
  tolerance: number;
  expression: string;
  variables: string[];
  options: string[];
  correct: number[];
};

export const SOLVE_SYSTEM = `You are checking a set of short questions by answering them yourself. Work each one out carefully and independently.

Give each answer in the form asked for:
- a number question: just the number, as a decimal or a fraction such as 3/4;
- an expression question: the expression in plain text using + - * / ^ and functions such as sqrt, in the variables named;
- a choice question: the zero-based indices of every correct option, separated by commas, for example "1" or "0,2".
If a question is ambiguous or has no single right answer, set answer to "ambiguous".`;

export const SOLVE_SCHEMA = {
  type: "object",
  properties: {
    answers: {
      type: "array",
      items: {
        type: "object",
        properties: { number: { type: "integer" }, answer: { type: "string" } },
        required: ["number", "answer"],
        additionalProperties: false,
      },
    },
  },
  required: ["answers"],
  additionalProperties: false,
} as const;

export type SolveOutput = { answers: { number: number; answer: string }[] };

/** Turns a drafted question into a checkable answer, or null if the draft is malformed. */
export function toAnswer(q: DraftQuestion): Answer | null {
  if (q.kind === "numeric") {
    if (!Number.isFinite(q.numeric_value)) return null;
    const tolerance = Number.isFinite(q.tolerance) && q.tolerance > 0 ? Math.min(q.tolerance, 0.05) : undefined;
    return tolerance ? { kind: "numeric", value: q.numeric_value, tolerance } : { kind: "numeric", value: q.numeric_value };
  }
  if (q.kind === "expression") {
    const variables = [...new Set(q.variables.map((v) => v.trim()).filter((v) => /^[a-zA-Z]$/.test(v)))];
    if (!q.expression.trim() || variables.length === 0) return null;
    return { kind: "expression", value: q.expression.trim(), variables };
  }
  const options = q.options.map((o) => o.trim());
  const correct = [...new Set(q.correct)].filter((i) => Number.isInteger(i) && i >= 0 && i < options.length);
  if (options.length < 2 || options.length > 6 || correct.length === 0 || new Set(options).size !== options.length) return null;
  return { kind: "choice", options, correct: correct.sort((a, b) => a - b) };
}

/** How a question reads to the solver: the prompt and, for choices, the numbered options. */
export function solverText(n: number, prompt: string, answer: Answer): string {
  const lines = [`Question ${n}: ${prompt}`];
  if (answer.kind === "choice") lines.push(...answer.options.map((o, i) => `  ${i}. ${o}`));
  if (answer.kind === "numeric") lines.push("  (Answer with a number.)");
  if (answer.kind === "expression") lines.push(`  (Answer with an expression in ${answer.variables.join(", ")}.)`);
  return lines.join("\n");
}

/**
 * A fingerprint that ignores case, spacing, punctuation and TeX markup, so the same question
 * cannot slip back in with cosmetic changes.
 */
export function fingerprint(prompt: string): string {
  return prompt
    .toLowerCase()
    .replace(/\\[a-z]+/g, (m) => m.slice(1))
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
