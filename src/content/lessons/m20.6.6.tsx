import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ContinuumPositionViz } from "@/components/viz/ContinuumPositionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.6.6",
  minutes: 80,
  links: {
    revisits: ["m20.6.5", "m20.6.3", "m20.4.3"],
    foreshadows: ["m22.1.4", "m22.1.5", "m38.1.1"],
  },

  puzzle: (
    <>
      <p>
        The natural numbers are countable; the reals are not. Is there a set of reals of some size in between, bigger than ℕ
        but smaller than ℝ? Cantor spent years trying to prove there is not, and failed. Hilbert put the question first on
        his list of 23 problems in 1900.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a model of set theory and see where it places the size of ℝ.</p>
      <ContinuumPositionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the continuum hypothesis">
        <p>
          <strong>CH</strong>: every infinite set of reals is either countable or the same size as ℝ. Equivalently,{" "}
          <M>{"2^{\\aleph_0} = \\aleph_1"}</M>. The <strong>generalised</strong> hypothesis, GCH, says{" "}
          <M>{"2^{\\aleph_\\alpha} = \\aleph_{\\alpha+1}"}</M> for every α.
        </p>
      </Definition>

      <Theorem title="independence (Gödel 1938, Cohen 1963)">
        <p>
          If ZFC is consistent, so are ZFC + CH and ZFC + ¬CH. Gödel built the constructible universe L, the sets obtained by
          definable steps along the ordinals, and showed ZFC and GCH hold in it. Cohen invented <strong>forcing</strong>, a
          way of adding new sets, such as ℵ₂ new reals, to a model while preserving ZFC.
        </p>
      </Theorem>

      <Example title="what ZFC does settle">
        <p>
          ZFC proves <M>{"2^{\\aleph_0} > \\aleph_0"}</M> (Cantor) and that <M>{"2^{\\aleph_0}"}</M> does not have countable
          cofinality (König), so it is not <M>{"\\aleph_\\omega"}</M>. Closed and Borel sets of reals do satisfy CH: each is
          countable or has a perfect subset, so has the size of ℝ. Any counterexample must be wild.
        </p>
      </Example>

      <Remark title="does CH have an answer?">
        <p>
          The independence of CH is not like the incompleteness of arithmetic, where the Gödel sentence is plainly true.
          Pluralists hold that there are many equally good set-theoretic universes, and CH is true in some and false in others.
          Others seek new axioms, such as large cardinals or Woodin&rsquo;s proposals, that would settle it; Gödel himself
          thought CH false. The question has become a test case for what mathematical truth is.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the continuum hypothesis say?</p>,
      answer: {
        kind: "choice",
        options: ["Every infinite set of reals is countable or the size of ℝ", "ℝ is countable", "Every set is well-ordered", "There are no infinite sets"],
        correct: [0],
      },
    },
    {
      key: "indep",
      rung: "check",
      prompt: <p>What did Gödel and Cohen show together?</p>,
      answer: {
        kind: "choice",
        options: ["CH can be neither proved nor refuted in ZFC, if ZFC is consistent", "CH is true", "CH is false", "ZFC is inconsistent"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which aleph can never be the size of ℝ?</p>,
      answer: { kind: "choice", options: ["ℵω", "ℵ₁", "ℵ₂", "ℵ₃"], correct: [0] },
    },
    {
      key: "force",
      rung: "apply",
      prompt: <p>Which method did Cohen invent to show CH can fail?</p>,
      answer: { kind: "choice", options: ["Forcing", "Diagonalisation", "The constructible universe", "Compactness"], correct: [0] },
    },
    {
      key: "borel",
      rung: "apply",
      prompt: <p>An uncountable closed set of reals. What is its size?</p>,
      answer: { kind: "choice", options: ["The size of ℝ", "ℵ₀", "It depends on CH", "Finite"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Explain why the two consistency results together show ZFC neither proves nor refutes CH.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that if ZFC proved ¬CH, then ZFC + CH would be inconsistent, contradicting Gödel’s result.",
          "Notes that if ZFC proved CH, then ZFC + ¬CH would be inconsistent, contradicting Cohen’s result.",
          "States the assumption that ZFC is consistent, which both results need.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the continuum hypothesis have a determinate truth value, even though ZFC cannot settle it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a realist view, such as Gödel’s, that there is a fact to be found with new axioms.",
          "States a pluralist or formalist view.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        This completes the course in mathematical logic and set theory, from truth tables to forcing. Its ideas reappear
        throughout mathematics: compactness in model theory, choice in analysis, and the axioms of ZFC as the background of
        everything.
      </p>
      <p>
        Choice comes straight back in measure theory, where it produces a set of reals that has no sensible length. The next
        course you open, combinatorics, starts with a finite cousin of choice: Hall&rsquo;s theorem on when one can choose a
        distinct representative from each of a family of sets.
      </p>
    </>
  ),
};
