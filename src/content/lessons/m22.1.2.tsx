import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { MeasureLimitViz } from "@/components/viz/MeasureLimitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.1.2",
  minutes: 85,
  links: {
    revisits: ["m22.1.1", "m6.2.2", "m6.3.2"],
    foreshadows: ["m22.1.3", "m22.1.4", "m22.2.2"],
  },

  puzzle: (
    <>
      <p>
        The interval <M>{"[0, 1]"}</M> has length 1, and is a union of its points, each of length 0. Adding up lengths over
        uncountably many pieces gives nonsense. Over countably many pieces it seems to work: <M>{"[0, 1)"}</M> is the union of{" "}
        <M>{"[0, \\tfrac12), [\\tfrac12, \\tfrac34), \\dots"}</M>, whose lengths sum to 1. Where exactly should the line be
        drawn?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Follow three sequences of sets and compare the limit of their measures with the measure of their limit.</p>
      <MeasureLimitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="measures">
        <p>
          A <strong>measure</strong> on a measurable space <M>{"(X, \\mathcal{A})"}</M> is a function{" "}
          <M>{"\\mu : \\mathcal{A} \\to [0, \\infty]"}</M> with <M>{"\\mu(\\varnothing) = 0"}</M> and{" "}
          <strong>countable additivity</strong>: for pairwise disjoint <M>{"A_1, A_2, \\dots"}</M> in{" "}
          <M>{"\\mathcal{A}"}</M>,
        </p>
        <MD>{"\\mu\\Big(\\bigcup_{n} A_n\\Big) = \\sum_{n} \\mu(A_n)."}</MD>
        <p>
          A sum of non-negative terms does not depend on their order, so this makes sense. The triple{" "}
          <M>{"(X, \\mathcal{A}, \\mu)"}</M> is a <strong>measure space</strong>; if <M>{"\\mu(X) = 1"}</M> it is a probability
          space.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          <strong>Counting measure</strong> gives a set its number of elements, or <M>{"\\infty"}</M>. The{" "}
          <strong>point mass</strong> <M>{"\\delta_x"}</M> gives a set 1 if it contains <M>x</M> and 0 otherwise. On the
          countable-or-co-countable σ-algebra of <M>{"\\mathbb{R}"}</M>, giving countable sets 0 and co-countable sets 1 is a
          measure. Lebesgue measure on <M>{"\\mathbb{R}"}</M>, extending length, is the one we must work to construct.
        </p>
      </Example>

      <Theorem title="basic properties">
        <p>For measurable sets:</p>
        <ul>
          <li>if <M>{"A \\subseteq B"}</M> then <M>{"\\mu(A) \\le \\mu(B)"}</M> (monotonicity);</li>
          <li><M>{"\\mu(\\bigcup A_n) \\le \\sum \\mu(A_n)"}</M> for any sequence (countable subadditivity);</li>
          <li>if <M>{"A_1 \\subseteq A_2 \\subseteq \\cdots"}</M> then <M>{"\\mu(\\bigcup A_n) = \\lim \\mu(A_n)"}</M> (continuity from below);</li>
          <li>if <M>{"A_1 \\supseteq A_2 \\supseteq \\cdots"}</M> and <M>{"\\mu(A_1) < \\infty"}</M> then <M>{"\\mu(\\bigcap A_n) = \\lim \\mu(A_n)"}</M> (continuity from above).</li>
        </ul>
        <p>
          For continuity from below, apply additivity to the disjoint rings <M>{"A_n \\setminus A_{n-1}"}</M>. For continuity
          from above, apply it to the complements within <M>{"A_1"}</M>.
        </p>
      </Theorem>

      <Remark title="null sets and completeness">
        <p>
          A <strong>null set</strong> has measure 0. A measure is <strong>complete</strong> if every subset of a null set is
          measurable (and so null). Probability depends on all of this: &ldquo;almost surely&rdquo; means outside a null set,
          and Kolmogorov&rsquo;s axioms of 1933 are exactly the definition of a probability measure.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does countable additivity require?</p>,
      answer: {
        kind: "choice",
        options: ["The measure of a countable disjoint union is the sum of the measures", "The measure of any union is the sum of the measures", "Every set has finite measure", "The measure of a set equals that of its complement"],
        correct: [0],
      },
    },
    {
      key: "dirac",
      rung: "check",
      prompt: <p>For the point mass δ₂ on ℝ, what is the measure of [0, 1]?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is λ(A₄) for the growing sets [0, 1 − 1/n]?</p>,
      answer: { kind: "numeric", value: 0.75 },
    },
    {
      key: "fail",
      rung: "apply",
      prompt: <p>Why does continuity from above fail for the sets [n, ∞)?</p>,
      answer: { kind: "choice", options: ["Every set has infinite measure, so the finiteness condition fails", "The sets are not measurable", "The sets are not nested", "Lebesgue measure is not countably additive"], correct: [0] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>With counting measure on ℕ, let Aₙ = {"{n, n + 1, …}"}. What is the measure of the intersection of all the Aₙ?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove continuity from below: if A₁ ⊆ A₂ ⊆ … are measurable, then μ of their union is the limit of μ(Aₙ).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines disjoint sets B₁ = A₁ and Bₙ = Aₙ ∖ Aₙ₋₁, whose union is the union of the Aₙ.",
          "Notes Aₙ is the disjoint union of B₁ to Bₙ, so μ(Aₙ) is the partial sum.",
          "Applies countable additivity to conclude the measure of the union is the limit of the partial sums.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why would a measure that was additive over uncountable disjoint unions be useless for length on ℝ?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that each point has length 0 but [0, 1] is an uncountable union of points.",
          "Concludes uncountable additivity would force [0, 1] to have length 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        We still owe the most important example. To build Lebesgue measure, first measure every set from the outside, by
        covering it with countably many intervals, and then keep only those sets that this outer measure splits cleanly.
      </p>
      <p>
        Next, outer measure and Carathéodory&rsquo;s theorem: Lebesgue outer measure, why countable sets have outer measure
        zero, and Carathéodory&rsquo;s criterion, which turns any outer measure into a complete measure.
      </p>
    </>
  ),
};
