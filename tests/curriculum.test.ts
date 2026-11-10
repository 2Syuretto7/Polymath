import { test } from "node:test";
import assert from "node:assert/strict";
import { chooseNextStep, OPENING_LESSONS } from "../src/lib/curriculum.ts";

test("begins with the first lesson when nothing is done", () => {
  const step = chooseNextStep([]);
  assert.equal(step.kind, "begin");
  assert.equal(step.kind === "begin" && step.lesson.id, "m0.1.1");
});

test("an open lesson always comes first", () => {
  const step = chooseNextStep([
    { lesson_id: "m0.1.1", status: "mastered" },
    { lesson_id: "m0.1.2", status: "in_progress" },
  ]);
  assert.equal(step.kind, "continue");
  assert.equal(step.kind === "continue" && step.lesson.id, "m0.1.2");
});

test("alternates mathematics and philosophy", () => {
  const step = chooseNextStep([{ lesson_id: "m0.1.1", status: "mastered" }]);
  assert.equal(step.kind === "begin" && step.lesson.track, "philosophy");
});

test("reports caught up when every seeded lesson is mastered", () => {
  const all = OPENING_LESSONS.map((l) => ({ lesson_id: l.id, status: "mastered" }));
  assert.equal(chooseNextStep(all).kind, "caught-up");
});
