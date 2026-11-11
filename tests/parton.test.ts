import { test } from "node:test";
import assert from "node:assert/strict";
import { toPlainText } from "../src/lib/parton/plaintext.ts";
import { renderParton } from "../src/lib/parton/render.ts";
import { describeAnswer, rungFor, RUNGS } from "../src/lib/parton/prompts.ts";
import { lesson as counting } from "../src/content/lessons/m0.1.1.tsx";
import { lesson as questions } from "../src/content/lessons/p0.1.1.tsx";

test("plain text keeps the lesson's words and its TeX", () => {
  const theory = toPlainText(counting.theory);
  assert.match(theory, /Peano/);
  assert.match(theory, /\$[^$]*S\([^$]*\$/, "inline maths is kept as TeX between dollar signs");
  assert.doesNotMatch(theory, /class=|<span|katex/, "no rendered HTML leaks into the text");
  assert.ok(theory.length > 1500, "the whole theory section is read");
});

test("plain text turns visualisations into a placeholder rather than failing", () => {
  const text = [counting.puzzle, counting.intuition, counting.theory, questions.intuition, questions.theory].map(toPlainText).join("\n");
  assert.match(text, /\[an interactive visualisation\]/);
});

test("every exercise prompt reads as text", () => {
  for (const l of [counting, questions]) {
    for (const e of l.practice) assert.ok(toPlainText(e.prompt).length > 10, `${l.id}:${e.key}`);
  }
});

test("Parton's replies render maths, emphasis and lists, and escape HTML", () => {
  const html = renderParton("What is $S(0)$?\n\n- **First**, look\n- then *think*\n\n$$a + 0 = a$$\n\n<script>x</script>");
  assert.match(html, /class="katex"/);
  assert.match(html, /<ul><li><strong>First<\/strong>, look<\/li><li>then <em>think<\/em><\/li><\/ul>/);
  assert.match(html, /katex-display/);
  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /&lt;script&gt;/);
});

test("bad TeX falls back to code instead of throwing", () => {
  assert.match(renderParton("Look at $\\frac{1}{$ here"), /<code>/);
});

test("the hint ladder climbs one rung per hint and stops at five", () => {
  assert.equal(RUNGS.length, 5);
  assert.deepEqual([0, 1, 2, 3, 4, 5, 9].map(rungFor), [1, 2, 3, 4, 5, 5, 5]);
});

test("protected answers are described for the reviewing pass", () => {
  assert.equal(describeAnswer({ kind: "numeric", value: 4 }), "The answer is 4.");
  assert.match(describeAnswer({ kind: "choice", options: ["a", "b", "c"], correct: [0, 2] }), /options are: "a", "c"/);
  assert.match(describeAnswer({ kind: "written", rubric: ["One", "Two"] }), /1\. One\n2\. Two/);
});

test("written work is accepted exactly when Parton judges it complete", async () => {
  const { isAccepted, MARK_RULES, MARK_SCHEMA } = await import("../src/lib/parton/prompts.ts");
  assert.equal(isAccepted({ complete: true }), true);
  assert.equal(isAccepted({ complete: false }), false);
  assert.ok(MARK_SCHEMA.required.includes("complete"));
  assert.match(MARK_RULES, /fair, friendly and lenient/);
  assert.match(MARK_RULES, /Accept every complete proof or argument; reject only partial ones/);
});
