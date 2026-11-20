import { test } from "node:test";
import assert from "node:assert/strict";
import { decideUpdate } from "../src/lib/update.ts";

test("same build or no answer does nothing", () => {
  assert.equal(decideUpdate({ current: "a", live: "a", triedFor: null, dirty: false }), "none");
  assert.equal(decideUpdate({ current: "a", live: null, triedFor: null, dirty: false }), "none");
});

test("a new build reloads at once when nothing is typed", () => {
  assert.equal(decideUpdate({ current: "a", live: "b", triedFor: null, dirty: false }), "reload");
});

test("a new build waits while there is unsaved typing", () => {
  assert.equal(decideUpdate({ current: "a", live: "b", triedFor: null, dirty: true }), "wait");
});

test("never reloads twice towards the same build", () => {
  assert.equal(decideUpdate({ current: "a", live: "b", triedFor: "b", dirty: false }), "wait");
  assert.equal(decideUpdate({ current: "a", live: "c", triedFor: "b", dirty: false }), "reload");
});
