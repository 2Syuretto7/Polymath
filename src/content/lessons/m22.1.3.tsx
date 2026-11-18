import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { RationalCoverViz } from "@/components/viz/RationalCoverViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.1.3",
  minutes: 90,
  links: {
    revisits: ["m22.1.2", "m6.4.2", "m6.4.4"],
    foreshadows: ["m22.1.4", "m22.1.5", "m22.3.1"],
  },

  puzzle: (
    <>
      <p>
        The rationals in <M>{"[0, 1]"}</M> are dense: every interval, however small, contains some. So any finite collection of
        intervals covering them must cover all of <M>{"[0, 1]"}</M> except finitely many points, and has total length at least
        1. Yet with countably many intervals, you can cover them all using total length 0.001. How?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Cover the rationals one by one, each with a shorter interval than the last, and watch the total.</p>
      <RationalCoverViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Lebesgue outer measure">
        <p>For any set <M>{"A \\subseteq \\mathbb{R}"}</M>, let</p>
        <MD>{"\\lambda^*(A) = \\inf \\Big\\{ \\sum_{k} \\ell(I_k) : A \\subseteq \\bigcup_k I_k,\\ I_k \\text{ open intervals} \\Big\\},"}</MD>
        <p>
          the infimum over countable covers. It is defined for every set, is monotone, and is countably subadditive. Every
          countable set has outer measure 0, by the covering in the visualisation.
        </p>
      </Definition>

      <Example title="intervals get their length">
        <p>
          Clearly <M>{"\\lambda^*([a, b]) \\le b - a + \\varepsilon"}</M> for every <M>{"\\varepsilon > 0"}</M>. The reverse
          inequality needs compactness: by Heine-Borel, any open cover of <M>{"[a, b]"}</M> has a finite subcover, and finitely
          many intervals covering <M>{"[a, b]"}</M> must have total length at least <M>{"b - a"}</M>. So{" "}
          <M>{"\\lambda^*([a, b]) = b - a"}</M>. The Cantor set, covered at stage <M>n</M> by <M>{"2^n"}</M> intervals of length{" "}
          <M>{"3^{-n}"}</M>, has outer measure 0 though it is uncountable.
        </p>
      </Example>

      <Theorem title="Carathéodory's theorem (1914)">
        <p>
          Let <M>{"\\mu^*"}</M> be any outer measure: monotone, countably subadditive, with <M>{"\\mu^*(\\varnothing) = 0"}</M>.
          Call <M>A</M> <strong>measurable</strong> if, for every set <M>E</M>,
        </p>
        <MD>{"\\mu^*(E) = \\mu^*(E \\cap A) + \\mu^*(E \\setminus A)."}</MD>
        <p>
          Then the measurable sets form a σ-algebra, and <M>{"\\mu^*"}</M> restricted to them is a complete measure.
        </p>
      </Theorem>

      <Remark title="why the criterion">
        <p>
          Outer measure is only subadditive, so additivity can fail: Vitali&rsquo;s sets are pieces that the outer measure
          cannot split cleanly. Carathéodory&rsquo;s test keeps exactly the sets that cut every other set additively. Applied
          to <M>{"\\lambda^*"}</M>, it yields Lebesgue measure, whose measurable sets include every Borel set. The same
          construction builds probability measures from distribution functions, and Hausdorff measures of fractional
          dimension.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How is the Lebesgue outer measure of a set defined?</p>,
      answer: {
        kind: "choice",
        options: ["The infimum of total lengths of countable covers by open intervals", "The supremum of lengths of intervals inside it", "The number of its points", "The length of the smallest interval containing it"],
        correct: [0],
      },
    },
    {
      key: "count",
      rung: "check",
      prompt: <p>Why must countably many intervals be allowed, rather than finitely many?</p>,
      answer: {
        kind: "choice",
        options: ["With finite covers, a dense countable set like the rationals in [0, 1] would get size 1", "Finite covers do not exist", "Countable covers are always shorter", "To make every set measurable"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>As in the visualisation, what is the outer measure of the rationals in [0, 1]?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "cantor",
      rung: "apply",
      prompt: <p>At stage n, the Cantor set is covered by 2ⁿ intervals of length 3⁻ⁿ. What is the first stage n at which their total length is below 0.2?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "carath",
      rung: "apply",
      prompt: <p>What does Carathéodory&rsquo;s theorem produce from an outer measure?</p>,
      answer: { kind: "choice", options: ["A σ-algebra of measurable sets on which it is a complete measure", "A topology", "A metric", "An integral on all functions"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every countable subset of ℝ has Lebesgue outer measure 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lists the set as x₁, x₂, … and fixes ε > 0.",
          "Covers xₖ by an open interval of length ε/2ᵏ, so the total length is at most ε.",
          "Concludes the outer measure is at most every ε > 0, hence 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does proving λ*([0, 1]) ≥ 1 need compactness? What could go wrong with a countable cover if we did not use it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a countable cover cannot be summed by an easy finite argument, since intervals may overlap in complicated ways.",
          "Explains that Heine-Borel reduces to a finite subcover, where lengths can be compared directly.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Carathéodory&rsquo;s theorem turns Lebesgue outer measure into a measure on a large σ-algebra. We still need to know
        that this σ-algebra is rich enough, containing all intervals and hence all Borel sets, and that the result behaves
        well under translation and scaling.
      </p>
      <p>
        Next, Lebesgue measure: intervals are measurable, regularity by open and compact sets, translation invariance, and
        the uniqueness of length as a translation-invariant Borel measure.
      </p>
    </>
  ),
};
