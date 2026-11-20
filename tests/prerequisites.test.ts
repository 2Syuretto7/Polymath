import { test } from "node:test";
import assert from "node:assert/strict";
import { LESSONS } from "../src/content/lessons/index.ts";
import { buildGraph, frontier, prerequisitesOf } from "../src/lib/graph.ts";
import { chooseNextStep } from "../src/lib/scheduler.ts";
import type { Track } from "../src/lib/types.ts";

const graph = buildGraph(new Map(LESSONS.map((l) => [l.id, l.links ?? {}])));
const authored = new Set(LESSONS.map((l) => l.id));

/** Press Learn again and again, mastering each new lesson it begins, until it has nothing left to offer. */
function walkLearnButton(): string[] {
  const mastered = new Set<string>();
  const taken: string[] = [];
  let lastTrack: Track | null = null;
  for (;;) {
    const step = chooseNextStep({ openLesson: null, frontier: frontier(graph, mastered), lastTrack, newLessonsToday: 0, pace: 1 });
    if (step.kind !== "begin") return taken;
    taken.push(step.lesson.id);
    mastered.add(step.lesson.id);
    lastTrack = step.lesson.track;
  }
}

const path = walkLearnButton();

test("the Learn button never begins a lesson before everything it builds on", () => {
  const seen = new Set<string>();
  for (const id of path) {
    for (const before of prerequisitesOf(graph, id)) {
      assert.ok(seen.has(before), `${id} was offered before ${before}, which it builds on`);
    }
    seen.add(id);
  }
});

test("every lesson that a written lesson revisits or applies comes before it", () => {
  const position = new Map(path.map((id, i) => [id, i]));
  for (const lesson of LESSONS) {
    if (!position.has(lesson.id)) continue;
    for (const kind of ["requires", "revisits", "applies"] as const) {
      for (const earlier of lesson.links?.[kind] ?? []) {
        assert.ok((position.get(earlier) ?? Infinity) < position.get(lesson.id)!, `${lesson.id} ${kind} ${earlier}, but meets it first`);
      }
    }
  }
});

test("only lessons waiting on unwritten lessons are left out of the path", () => {
  const offered = new Set(path);
  for (const id of authored) {
    if (offered.has(id)) continue;
    const waitingOn = [...prerequisitesOf(graph, id)].filter((p) => !authored.has(p));
    assert.ok(waitingOn.length > 0, `${id} is written and all it builds on is written, yet Learn never offers it`);
  }
});
