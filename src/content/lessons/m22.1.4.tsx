import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { FatCantorViz } from "@/components/viz/FatCantorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.1.4",
  minutes: 90,
  links: {
    revisits: ["m22.1.3", "m6.4.4", "m12.1.2"],
    foreshadows: ["m22.1.5", "m22.3.3", "m22.4.3"],
  },

  puzzle: (
    <>
      <p>
        Remove from <M>{"[0, 1]"}</M> an open middle interval of length <M>{"1/4"}</M>, then from each of the two pieces a
        middle interval of length <M>{"1/16"}</M>, then four of length <M>{"1/64"}</M>, and so on. What is left contains no
        interval at all: it is full of holes everywhere. Yet half of the length remains. How can a set so thin be so large?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the ordinary Cantor set with one whose gaps shrink faster.</p>
      <FatCantorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Lebesgue measure">
        <p>
          A set <M>{"A \\subseteq \\mathbb{R}"}</M> is <strong>Lebesgue measurable</strong> if it satisfies
          Carathéodory&rsquo;s criterion for the outer measure <M>{"\\lambda^*"}</M>, and then its{" "}
          <strong>Lebesgue measure</strong> is <M>{"\\lambda(A) = \\lambda^*(A)"}</M>. Every interval is measurable, so every
          Borel set is, and <M>{"\\lambda"}</M> extends length.
        </p>
      </Definition>

      <Theorem title="regularity">
        <p>For every measurable <M>A</M>,</p>
        <MD>{"\\lambda(A) = \\inf\\{\\lambda(U) : U \\supseteq A \\text{ open}\\} = \\sup\\{\\lambda(K) : K \\subseteq A \\text{ compact}\\}."}</MD>
        <p>
          So measurable sets are squeezed between open sets from outside and compact sets from inside. Equivalently, each
          measurable set differs from a Borel set by a null set: the Lebesgue σ-algebra is the completion of the Borel one.
        </p>
      </Theorem>

      <Example title="invariance">
        <p>
          Lebesgue measure is translation invariant, <M>{"\\lambda(A + x) = \\lambda(A)"}</M>, and scales by{" "}
          <M>{"\\lambda(cA) = |c| \\lambda(A)"}</M>, since both hold for intervals and hence for covers. Conversely, any
          translation-invariant measure on the Borel sets that gives <M>{"[0, 1]"}</M> a finite positive value is a constant
          multiple of <M>{"\\lambda"}</M>: length is essentially unique.
        </p>
      </Example>

      <Remark title="more Lebesgue sets than Borel sets">
        <p>
          The Cantor set is null, so every one of its subsets is measurable and null. It has as many points as{" "}
          <M>{"\\mathbb{R}"}</M>, so it has more subsets than <M>{"\\mathbb{R}"}</M> has points, while there are only as many
          Borel sets as real numbers. Hence most Lebesgue measurable sets are not Borel. The fat Cantor set shows another
          contrast: being small in the sense of topology (nowhere dense) and being small in measure are independent.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which sets are Lebesgue measurable?</p>,
      answer: { kind: "choice", options: ["Those satisfying Carathéodory’s criterion for Lebesgue outer measure", "Only the intervals", "Every subset of ℝ", "Only the open sets"], correct: [0] },
    },
    {
      key: "reg",
      rung: "check",
      prompt: <p>What does outer regularity say?</p>,
      answer: { kind: "choice", options: ["The measure of A is the infimum of the measures of open sets containing A", "Every set is open", "Every measurable set is compact", "Measure is unchanged by scaling"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the measure of the fat Cantor set left in the limit?</p>,
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "scale",
      rung: "apply",
      prompt: <p>What is λ(3A) if A = [0, 2] ∪ [5, 6]?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "irr",
      rung: "apply",
      prompt: <p>What is the Lebesgue measure of the irrational numbers in [0, 1]?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the middle-thirds Cantor set has Lebesgue measure 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the Cantor set is contained in the stage-n set, a union of 2ⁿ intervals of length 3⁻ⁿ.",
          "Uses monotonicity to bound its measure by (2/3)ⁿ for every n, or sums the removed lengths to 1.",
          "Concludes the measure is 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The fat Cantor set contains no interval but has positive measure. Can a set with positive measure contain no interval and also be open? Explain.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a non-empty open set in ℝ always contains an interval.",
          "Concludes such a set must be non-open, and that positive measure does not force an interval inside.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Lebesgue measure is defined on a huge σ-algebra, but not on every set. The proof that some set must escape uses the
        axiom of choice and a clever use of translation invariance, and its cousin, the Banach-Tarski paradox, is stranger
        still.
      </p>
      <p>
        Next, non-measurable sets: Vitali&rsquo;s construction, why it needs choice, Banach-Tarski, and Solovay&rsquo;s model
        in which every set of reals is measurable.
      </p>
    </>
  ),
};
