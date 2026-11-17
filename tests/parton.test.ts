import { test } from "node:test";
import assert from "node:assert/strict";
import { toPlainText } from "../src/lib/parton/plaintext.ts";
import { renderParton } from "../src/lib/parton/render.ts";
import { describeAnswer, rungFor, RUNGS, HINT_RULES, HINT_SCHEMA, NO_NUDGE, CHECK_SYSTEM, VOICE } from "../src/lib/parton/prompts.ts";
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

test("Parton judges whether the learner can solve it: no nudge if so, a hint towards the solution if not", () => {
  assert.ok(HINT_SCHEMA.required.includes("can_solve"));
  assert.match(HINT_RULES, /If you judge that they can solve it, do not nudge them towards the solution at all/);
  assert.match(HINT_RULES, /If you judge that they cannot solve it, nudge them towards the solution with a hint/);
  assert.match(NO_NUDGE, /Do not point them towards the solution in any way/);
});

test("Parton gives more hints and fewer solutions, and only what has been taught", () => {
  assert.match(HINT_RULES, /Give more hints and fewer solutions\. Always prefer a hint to a solution/);
  assert.match(CHECK_SYSTEM, /more hints and fewer solutions/);
  assert.doesNotMatch(HINT_RULES + CHECK_SYSTEM, /never solutions/);
  assert.match(VOICE, /Never use, assume or lean on an idea the learner has not been taught yet/);
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

test("dictated text joins onto what is already written", async () => {
  const { appendDictation } = await import("../src/components/ui/DictateButton.tsx");
  assert.equal(appendDictation("", "a prime"), "a prime");
  assert.equal(appendDictation("Let p be", "a prime"), "Let p be a prime");
  assert.equal(appendDictation("Let p be ", "a prime"), "Let p be a prime");
  assert.equal(appendDictation("Done.", ""), "Done.");
});

test("marking welcomes short and dictated answers", async () => {
  const { MARK_RULES } = await import("../src/lib/parton/prompts.ts");
  assert.match(MARK_RULES, /Brevity is welcome/);
  assert.match(MARK_RULES, /dictated by voice/);
});
