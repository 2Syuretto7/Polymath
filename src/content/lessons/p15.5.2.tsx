import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GradableViz } from "@/components/viz/GradableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p15.5.2",
  minutes: 80,
  links: {
    revisits: ["p15.5.1", "p10.4.3", "p15.4.3"],
    foreshadows: ["p29.3.1", "p29.3.2", "p15.6.1"],
  },

  puzzle: (
    <>
      <p>
        Kiran is 172 cm tall. At a family gathering someone says &ldquo;Kiran is tall&rdquo;, and at a basketball trial someone
        says &ldquo;Kiran is not tall&rdquo;. Both seem right. Does &ldquo;tall&rdquo; change its meaning between the two rooms,
        or does the meaning stay put while something else shifts?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set Kiran&rsquo;s height and switch the comparison class, and see when &ldquo;Kiran is tall&rdquo; comes out true.</p>
      <GradableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="context sensitivity beyond indexicals">
        <p>
          An expression is <strong>context sensitive</strong> if what it contributes to the content of an utterance varies
          with the context of use. Indexicals are the clear cases. Many philosophers think the phenomenon is much wider: gradable
          adjectives such as &ldquo;tall&rdquo;, &ldquo;rich&rdquo; and &ldquo;flat&rdquo;, quantifiers like
          &ldquo;everyone&rdquo; in &ldquo;everyone came to the party&rdquo;, and perhaps &ldquo;knows&rdquo;.
        </p>
      </Definition>

      <Definition title="gradable adjectives">
        <p>
          A <strong>gradable adjective</strong> relates things to a scale, height for &ldquo;tall&rdquo;. A common semantic
          analysis has &ldquo;tall&rdquo; mean &ldquo;has a height above the standard&rdquo;, with the standard set by
          context, usually through a comparison class. On this view the character of &ldquo;tall&rdquo; is fixed, as with
          &ldquo;I&rdquo;, while the threshold, and so the content, varies.
        </p>
      </Definition>

      <Example title="tests for context sensitivity">
        <p>
          Herman Cappelen and Ernie Lepore proposed tests. If &ldquo;tall&rdquo; is context sensitive, then reporting
          &ldquo;Kiran said that Ravi is tall&rdquo; in a new context should sometimes misreport him, and two speakers in
          different contexts should be able to say &ldquo;Ravi is tall&rdquo; and &ldquo;Ravi is not tall&rdquo; without
          really disagreeing. Indexicals pass these tests clearly; gradable adjectives give mixed results.
        </p>
      </Example>

      <Remark title="three positions">
        <p>
          <strong>Minimalists</strong>, such as Cappelen and Lepore, hold that only a short list of expressions is context
          sensitive, and that the sentence expresses a minimal proposition while speakers convey more by pragmatics.{" "}
          <strong>Contextualists</strong> extend context sensitivity widely. <strong>Radical contextualists</strong>, such as
          Charles Travis and François Recanati, argue that almost any sentence, like &ldquo;the leaves are green&rdquo;, has
          truth conditions only relative to a context. The debate bears on contextualism about knowledge, and on vagueness.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What makes an expression context sensitive?</p>,
      answer: {
        kind: "choice",
        options: [
          "What it contributes to the content of an utterance varies with the context of use.",
          "It has two unrelated meanings.",
          "It is vague.",
          "It can only be used in some contexts.",
        ],
        correct: [0],
      },
    },
    {
      key: "grad",
      rung: "check",
      prompt: <p>On the common analysis, what does context supply for &ldquo;tall&rdquo;?</p>,
      answer: { kind: "choice", options: ["A standard, often via a comparison class", "A new meaning", "A speaker", "A time"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with Kiran at 172 cm, for how many of the four comparison classes is &ldquo;Kiran is tall&rdquo; true?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which sentence most plausibly contains a context-sensitive quantifier?</p>,
      answer: {
        kind: "choice",
        options: ["“Everyone has gone home”, said at the end of a party", "“Two plus two is four”", "“Water is H₂O”", "“Every prime above 2 is odd”"],
        correct: [0],
      },
    },
    {
      key: "test",
      rung: "apply",
      prompt: <p>Why does &ldquo;I am hungry&rdquo; fail the test of reporting it unchanged in a new context?</p>,
      answer: {
        kind: "choice",
        options: [
          "If Meera says it and I report “Meera said that I am hungry”, I misreport her, because “I” now picks out me.",
          "Because hunger is subjective.",
          "Because the report is too short.",
          "Because “hungry” is ambiguous.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is &ldquo;tall&rdquo; context sensitive in the same way as &ldquo;I&rdquo;? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how each would get its content from context: a speaker for “I”, a standard for “tall”.",
          "Notes a difference, such as the absence of a fixed rule for the standard, or mixed results on the tests, or vagueness.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>At a picnic someone says &ldquo;the leaves are green&rdquo; about red leaves painted green. Is it true? What does your answer suggest about radical contextualism?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the answer seems to depend on the purpose of the conversation, such as decorating or studying plants.",
          "Connects this to whether truth conditions need context beyond indexicals, as radical contextualists claim, or can be handled by pragmatics.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how context sensitivity may extend beyond indexicals, how a gradable adjective like “tall” gets a standard from context, the tests for context sensitivity, and the difference between minimalism and radical contextualism.",

  glimpse: (
    <p>
      Next, Wittgenstein asks what fixes the meaning of a word at all, through the puzzle of following a rule. Gradable
      adjectives return in the study of vagueness and the sorites paradox.
    </p>
  ),
};
