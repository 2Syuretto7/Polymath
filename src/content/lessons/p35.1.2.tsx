import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { InconsistentTriadViz } from "@/components/viz/InconsistentTriadViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p35.1.2",
  minutes: 90,
  links: {
    revisits: ["p35.1.1", "p0.2.3", "p1.3.2"],
    foreshadows: ["p35.1.3", "p35.2.1", "p35.2.3"],
  },

  puzzle: (
    <>
      <p>
        After weeks of reading, you have notes on thirty papers. Each makes sense on its own, but together they feel like
        noise: authors talk past each other, use the same word differently, and reply to objections you have not seen.
        How can you turn a pile of papers into a picture of the debate, clear enough to see where you stand?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose which of three plausible claims to reject, and see which position you have taken.</p>
      <InconsistentTriadViz />
    </>
  ),

  theory: (
    <>
      <Definition title="an argument map">
        <p>
          A <strong>map of a debate</strong> sets out its central question, the main answers, the arguments for each, the
          objections to those arguments and the replies. It can be a diagram or a structured outline. Its value is in
          forcing precision: each box must be a single claim, and each arrow must say whether one claim supports or
          attacks another.
        </p>
      </Definition>

      <Definition title="inconsistent sets">
        <p>
          Many philosophical problems take the form of a small set of claims, each plausible, that cannot all be true. The
          free will problem, the problem of evil and the mind-body problem can all be framed this way. Each position in the
          debate rejects one claim, and its main arguments try to show that this claim is the weakest. Mapping a debate as
          an inconsistent set shows at once what each side must give up.
        </p>
      </Definition>

      <Example title="disambiguating terms">
        <p>
          Apparent disagreements often turn out to be verbal. If one author uses &ldquo;free&rdquo; to mean uncaused and
          another to mean acting on one&rsquo;s own reasons, they may not disagree at all. A map should fix each key term,
          note where authors use it differently, and separate genuine disputes from merely verbal ones. Drawing such
          distinctions is often a contribution in its own right.
        </p>
      </Example>

      <Remark title="finding the gaps">
        <p>
          Once mapped, a debate shows its open ground: an objection no one has answered, a position no one has defended,
          an assumption all sides share, or a connection to another literature that no one has noticed. These gaps are
          where a thesis question can live.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "map",
      rung: "check",
      prompt: <p>What does a map of a debate set out?</p>,
      answer: { kind: "choice", options: ["The question, the main answers, their arguments, objections and replies", "A list of authors in alphabetical order", "Only the conclusion you favour", "The dates of publication"], correct: [0] },
    },
    {
      key: "incons",
      rung: "check",
      prompt: <p>What is an inconsistent set of claims?</p>,
      answer: { kind: "choice", options: ["Claims that are each plausible but cannot all be true together", "Claims that are each false", "Claims that are unrelated", "Claims that all say the same thing"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, reject the claim that responsibility requires being able to do otherwise. Which position results?</p>,
      answer: { kind: "choice", options: ["Compatibilism", "Libertarianism", "Hard determinism", "Fatalism"], correct: [0] },
    },
    {
      key: "verbal",
      rung: "apply",
      prompt: <p>Two authors disagree about whether we are &ldquo;free&rdquo;, but one means uncaused and the other means acting on one&rsquo;s own reasons. What is the best response?</p>,
      answer: { kind: "choice", options: ["Distinguish the two senses, since the dispute may be partly verbal", "Pick the author you prefer", "Ignore both", "Conclude that freedom is meaningless"], correct: [0] },
    },
    {
      key: "gap",
      rung: "apply",
      prompt: <p>Which of these is a gap in a debate that a thesis could address?</p>,
      answer: { kind: "choice", options: ["An objection that no one has yet answered", "A paper with many citations", "A view everyone accepts and no one questions", "A typographical error in a classic"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>State a philosophical problem you know as three or four claims that cannot all be true.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives three or four claims on one problem, such as the problem of evil.",
          "The claims are plausibly jointly inconsistent.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For your set of claims, which one would you give up, and why?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Chooses a claim to reject.",
          "Gives a reason. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A map shows where you might contribute. Now you must choose: a question open enough to matter, small enough to
        answer, and one on which you have something of your own to say.
      </p>
      <p>Next, choosing a question worth a thesis.</p>
    </>
  ),
};
