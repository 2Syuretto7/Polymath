import { test } from "node:test";
import assert from "node:assert/strict";
import { REVIEW_MAX, REVIEW_MIN, fingerprint, interleave, reviewPlan, solverText, toAnswer, type DraftQuestion } from "../src/lib/parton/recallPrompts.ts";
import { reviewSessionSize } from "../src/lib/scheduler.ts";
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

const sum = (m: Map<string, number>) => [...m.values()].reduce((a, b) => a + b, 0);

test("a review session always has three to five questions", () => {
  assert.equal(REVIEW_MIN, 3);
  assert.equal(REVIEW_MAX, 5);
  for (let due = 1; due <= 20; due++) {
    const n = reviewSessionSize(due);
    assert.ok(n >= 3 && n <= 5, `${due} due gives ${n}`);
  }
  assert.equal(sum(reviewPlan(["a"])), 3);
  assert.equal(sum(reviewPlan(["a", "b"])), 3);
  assert.equal(sum(reviewPlan(["a", "a", "b", "c"])), 4);
  assert.equal(sum(reviewPlan(["a", "b", "c", "d", "e", "f", "g"])), 5);
});

test("the review plan asks one question per due card, topping up across lessons", () => {
  assert.deepEqual(reviewPlan(["a", "a", "b", "c"]), new Map([["a", 2], ["b", 1], ["c", 1]]));
  assert.deepEqual(reviewPlan(["a", "b"]), new Map([["a", 2], ["b", 1]]));
  assert.deepEqual(reviewPlan(["a", "b"], 2), new Map([["a", 1], ["b", 1]]));
  assert.equal(reviewPlan([]).size, 0);
});

test("review questions alternate between lessons", () => {
  const item = (id: string, n: number) => ({ q: { source_lesson_id: id }, n });
  const order = interleave([item("a", 1), item("a", 2), item("a", 3), item("b", 1), item("c", 1)]);
  assert.deepEqual(order.map((o) => `${o.q.source_lesson_id}${o.n}`), ["a1", "b1", "c1", "a2", "a3"]);
});
