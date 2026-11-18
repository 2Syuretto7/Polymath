import { test } from "node:test";
import assert from "node:assert/strict";
import { masteryFromSolved } from "../src/lib/mastery.ts";
import type { Exercise } from "../src/lib/types.ts";

const ex = (key: string, written = false): Exercise => ({
  key,
  rung: written ? "prove" : "check",
  prompt: key,
  answer: written ? { kind: "written", rubric: ["r"] } : { kind: "numeric", value: 1 },
});
const set = (keys: string[]) => (key: string) => keys.includes(key);
const required = [ex("a"), ex("b"), ex("c"), ex("d"), ex("e"), ex("p", true)];

test("a partial set never masters a lesson, even at 80 percent", () => {
  const r = masteryFromSolved(required, set(["a", "b", "c", "d", "p"]));
  assert.equal(r.score, 0.8);
  assert.equal(r.mastered, false);
  assert.deepEqual([r.solved, r.total], [5, 6]);
});

test("all auto-checked questions without the written proof is still partial", () => {
  const r = masteryFromSolved(required, set(["a", "b", "c", "d", "e"]));
  assert.equal(r.writtenDone, false);
  assert.equal(r.mastered, false);
});

test("the complete set masters the lesson", () => {
  const r = masteryFromSolved(required, set(["a", "b", "c", "d", "e", "p"]));
  assert.equal(r.mastered, true);
  assert.equal(r.score, 1);
});

test("nothing solved is not mastery", () => {
  assert.equal(masteryFromSolved(required, set([])).mastered, false);
});
