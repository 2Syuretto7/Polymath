import { test } from "node:test";
import assert from "node:assert/strict";
import { buildGraph, frontier, isUnlocked, prerequisitesOf, COURSES } from "../src/lib/graph.ts";

const authored = new Map([["m0.1.1", {}], ["m0.1.2", {}], ["p0.1.1", { parallels: ["m0.1.1"] }]]);
const g = buildGraph(authored);

test("covers the whole outline", () => {
  const total = COURSES.reduce((s, c) => s + c.chapters.reduce((t, ch) => t + ch.lessons.length, 0), 0);
  assert.equal(g.order.length, total);
  assert.ok(total > 1400);
});

test("lessons chain within a chapter and across chapters", () => {
  assert.deepEqual(g.requires.get("m0.1.2"), ["m0.1.1"]);
  assert.deepEqual(g.requires.get("m0.2.1"), ["m0.1.5"]);
});

test("a course starts after its required courses", () => {
  const m1Last = COURSES.find((c) => c.code === "M0")!.chapters.at(-1)!.lessons.at(-1)!.id;
  assert.ok(g.requires.get("m1.1.1")!.includes(m1Last));
});

test("frontier starts with the first lesson of each track", () => {
  assert.deepEqual(frontier(g, new Set()).map((n) => n.id), ["m0.1.1", "p0.1.1"]);
  assert.deepEqual(frontier(g, new Set(["m0.1.1"])).map((n) => n.id), ["m0.1.2", "p0.1.1"]);
  assert.equal(isUnlocked(g, "m0.1.3", new Set(["m0.1.1"])), false);
});

test("rejects links to unknown lessons and cycles", () => {
  assert.throws(() => buildGraph(new Map([["m0.1.1", { revisits: ["nope"] }]])), /unknown lesson/);
  assert.throws(() => buildGraph(new Map([["m0.1.1", { requires: ["m0.1.3"] }]])), /cycle/);
});

test("a lesson that revisits or applies another waits until that one is mastered", () => {
  const m1Last = COURSES.find((c) => c.code === "M1")!.chapters.at(-1)!.lessons.at(-1)!.id;
  const linked = buildGraph(new Map<string, object>([["m3.1.1", { revisits: ["m1.1.2"] }], ["m3.1.2", { applies: ["m1.1.3"] }]]));
  assert.ok(linked.requires.get("m3.1.1")!.includes("m1.1.2"));
  assert.equal(isUnlocked(linked, "m3.1.1", prerequisitesOf(linked, "m1.1.1")), false);
  assert.ok(prerequisitesOf(linked, "m3.1.2").has("m1.1.3"));
  assert.ok(!prerequisitesOf(linked, "m3.1.2").has(m1Last));
});

test("parallels and foreshadows never gate", () => {
  const linked = buildGraph(new Map<string, object>([["m3.1.1", { parallels: ["m1.1.2"], foreshadows: ["m3.2.1"] }]]));
  assert.ok(!(linked.requires.get("m3.1.1") ?? []).includes("m1.1.2"));
});

test("rejects a lesson that builds on a course which comes after its own", () => {
  assert.throws(() => buildGraph(new Map([["m1.1.1", { revisits: ["m6.1.1"] }]])), /comes after M1; use foreshadows/);
});
