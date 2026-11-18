import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FleeingNumberViz } from "@/components/viz/FleeingNumberViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.4.1",
  minutes: 85,
  links: {
    revisits: ["p22.3.1", "p17.4.2", "p22.1.3"],
    foreshadows: ["p22.4.2", "p22.4.3", "p22.5.3"],
  },

  puzzle: (
    <>
      <p>
        Take the number r whose decimal expansion is all zeros, unless some even number above 2 fails to be a sum of two
        primes, in which case a single 1 appears at that place. Every digit can be computed. Is r equal to 0 or not? A
        mathematician who says &lsquo;one of the two, obviously&rsquo; is claiming something. What exactly?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Check more and more even numbers, and ask whether you have yet earned the right to say r = 0 or r ≠ 0.</p>
      <FleeingNumberViz />
    </>
  ),

  theory: (
    <>
      <Definition title="intuitionism">
        <p>
          L. E. J. Brouwer, in his 1907 thesis and after, held that mathematics is a free, languageless activity of the
          mind. Its root is the <strong>intuition of time</strong>: a moment of life falls apart into two, one remembered and
          one present, and from this &lsquo;two-ity&rsquo;, repeated, come the natural numbers. A mathematical object exists
          when it has been constructed; a statement is true when it has been proved. Language and logic come afterwards, as
          imperfect records of constructions.
        </p>
      </Definition>

      <Example title="weak counterexamples">
        <p>
          On this view, &lsquo;A or not A&rsquo; asserts that we can either prove A or refute it. For an open problem we can
          do neither, so the law of excluded middle cannot be asserted in general. Brouwer showed this with numbers like the
          one in the visualisation: tie a real number to an unsolved problem, and &lsquo;r = 0 or r ≠ 0&rsquo; would settle
          the problem. Such a <strong>weak counterexample</strong> does not refute excluded middle; it shows we have no right
          to assert it. Even the trichotomy r &lt; 0, r = 0 or r &gt; 0 fails for real numbers in this sense.
        </p>
      </Example>

      <Definition title="choice sequences">
        <p>
          Brouwer&rsquo;s second act admits <strong>choice sequences</strong>: sequences of numbers chosen one by one, never
          finished, perhaps freely. A function defined on them can only use finitely many terms to decide any finite part of
          its output, since that is all that is ever available. From this Brouwer derived that every total function on the
          real numbers is continuous, a theorem that is false classically. Intuitionistic analysis is not a fragment of the
          classical one; it says things the classical one denies.
        </p>
      </Definition>

      <Remark title="the quarrel with Hilbert">
        <p>
          Hilbert said that taking excluded middle from the mathematician would be like taking the telescope from the
          astronomer, or the boxer&rsquo;s fists. In 1928 he had Brouwer removed from the editorial board of the{" "}
          <em>Mathematische Annalen</em>. Hermann Weyl, for a while, went over to Brouwer. The quarrel shaped Hilbert&rsquo;s
          programme, which aimed to show that classical mathematics, used as a formal game, could never lead to contradiction.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "truth",
      rung: "check",
      prompt: <p>For Brouwer, what makes a mathematical statement true?</p>,
      answer: { kind: "choice", options: ["That it has been proved, by a mental construction", "That it holds in a platonic realm", "That it follows from axioms by formal rules", "That most mathematicians accept it"], correct: [0] },
    },
    {
      key: "lem",
      rung: "check",
      prompt: <p>Why can the intuitionist not assert &lsquo;A or not A&rsquo; for every A?</p>,
      answer: { kind: "choice", options: ["It would claim we can prove A or refute it, which we cannot do for open problems", "Because A and not A are both true", "Because logic is meaningless", "Because there are only finitely many statements"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, after checking every even number up to 1000, to how many decimal places is r known to agree with 0?</p>,
      answer: { kind: "numeric", value: 1000 },
    },
    {
      key: "weak",
      rung: "apply",
      prompt: <p>What does a weak counterexample to excluded middle show?</p>,
      answer: { kind: "choice", options: ["That we have no right to assert an instance of it, not that the instance is false", "That excluded middle is contradictory", "That Goldbach’s conjecture is false", "That r is not a real number"], correct: [0] },
    },
    {
      key: "continuity",
      rung: "apply",
      prompt: <p>Which claim follows in Brouwer&rsquo;s analysis but is false classically?</p>,
      answer: { kind: "choice", options: ["Every total function on the reals is continuous", "Every bounded sequence has a convergent subsequence", "The reals are uncountable", "Every polynomial has a root"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Brouwer right that &lsquo;r = 0 or r ≠ 0&rsquo; cannot be asserted for the number in the visualisation? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Brouwer’s reason: asserting the disjunction claims a proof of one side, which would settle Goldbach’s conjecture.",
          "Considers the classical reply, that r already has a determinate value whether or not we know it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Brouwer called mathematics languageless. Can a mathematics that must be communicated in proofs really be languageless?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains what Brouwer meant: language records constructions but does not make them.",
          "Raises a difficulty, such as how others could check a construction they cannot see.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Brouwer distrusted formal logic, yet his own pupil wrote down its rules. In 1930 Arend Heyting gave axioms for the
        logic intuitionists actually use, and explained each connective by what counts as a proof of it.
      </p>
      <p>
        Next, Heyting: the formalisation of intuitionistic logic, the meaning of the connectives as proof conditions, his
        dialogue between a classical mathematician and an intuitionist, and the open sets of the line as a model.
      </p>
    </>
  ),
};
