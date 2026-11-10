import { test } from "node:test";
import assert from "node:assert/strict";
import { chooseNextStep } from "../src/lib/scheduler.ts";
import type { LessonNode } from "../src/lib/graph.ts";

const node = (id: string, track: "mathematics" | "philosophy"): LessonNode => ({
  id, title: id, course: "X", courseTitle: "X", chapter: 1, chapterTitle: "c", index: 0, track, tier: 0, authored: true,
});
const m = node("m", "mathematics"), p = node("p", "philosophy");
const base = { openLesson: null, dueReviews: 0, frontier: [m, p], lastTrack: null, newLessonsToday: 0, pace: 2 };

test("an open lesson comes first, even with reviews due", () => {
  assert.equal(chooseNextStep({ ...base, openLesson: m, dueReviews: 5 }).kind, "continue");
});

test("due reviews come before new lessons", () => {
  assert.deepEqual(chooseNextStep({ ...base, dueReviews: 3 }), { kind: "review", count: 3 });
});

test("alternates tracks", () => {
  const step = chooseNextStep({ ...base, lastTrack: "mathematics" });
  assert.equal(step.kind === "begin" && step.lesson.id, "p");
});

test("falls back to the same track when the other has nothing unlocked", () => {
  const step = chooseNextStep({ ...base, frontier: [m], lastTrack: "mathematics" });
  assert.equal(step.kind === "begin" && step.lesson.id, "m");
});

test("respects the daily pace", () => {
  assert.deepEqual(chooseNextStep({ ...base, newLessonsToday: 2 }), { kind: "rest", reason: "pace" });
});

test("waits when nothing is unlocked", () => {
  assert.deepEqual(chooseNextStep({ ...base, frontier: [] }), { kind: "rest", reason: "waiting" });
});
