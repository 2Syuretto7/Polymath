import { test } from "node:test";
import assert from "node:assert/strict";
import { fingerprint, solverText, toAnswer, type DraftQuestion } from "../src/lib/parton/recallPrompts.ts";
import { checkAnswer } from "../src/lib/check.ts";

const base: DraftQuestion = {
  source_lesson_id: "m0.1.1",
  prompt: "What is $3 + 4$?",
  solution: "",
  kind: "numeric",
  numeric_value: 7,
  tolerance: 0,
  expression: "",
  variables: [],
  options: [],
  correct: [],
};

test("a numeric draft becomes an exact numeric answer", () => {
  assert.deepEqual(toAnswer(base), { kind: "numeric", value: 7 });
  const rounded = toAnswer({ ...base, numeric_value: 1.41, tolerance: 0.005 })!;
  assert.ok(checkAnswer(rounded, "1.414").correct);
});

test("an expression draft keeps only single-letter variables and needs one", () => {
  const a = toAnswer({ ...base, kind: "expression", expression: "2x + 1", variables: ["x", "bad name"] });
  assert.deepEqual(a, { kind: "expression", value: "2x + 1", variables: ["x"] });
  assert.equal(toAnswer({ ...base, kind: "expression", expression: "2", variables: [] }), null);
});

test("a choice draft must have distinct options and a valid correct index", () => {
  const a = toAnswer({ ...base, kind: "choice", options: ["A", "B", "C"], correct: [2, 2, 7] });
  assert.deepEqual(a, { kind: "choice", options: ["A", "B", "C"], correct: [2] });
  assert.equal(toAnswer({ ...base, kind: "choice", options: ["A", "A"], correct: [0] }), null);
  assert.equal(toAnswer({ ...base, kind: "choice", options: ["A", "B"], correct: [5] }), null);
});

test("the solver sees numbered options but never the answer", () => {
  const text = solverText(2, "Which is prime?", { kind: "choice", options: ["4", "5"], correct: [1] });
  assert.match(text, /Question 2: Which is prime\?/);
  assert.match(text, /0\. 4/);
  assert.doesNotMatch(text, /correct/i);
});

test("fingerprints catch cosmetic rewordings of the same question", () => {
  assert.equal(fingerprint("What is $\\frac{1}{2} + 3$?"), fingerprint("what is  \\frac{1}{2}+3 ?"));
  assert.notEqual(fingerprint("What is $3 + 4$?"), fingerprint("What is $3 + 5$?"));
});
