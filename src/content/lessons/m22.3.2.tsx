import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { IteratedSumViz } from "@/components/viz/IteratedSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.3.2",
  minutes: 90,
  links: {
    revisits: ["m22.3.1", "m5.5.2", "m22.2.3"],
    foreshadows: ["m22.3.3", "m22.4.2", "m22.5.3"],
  },

  puzzle: (
    <>
      <p>
        Fill an infinite grid with numbers. Add each row and total the row sums; then add each column and total the column
        sums. Both are ways of adding every entry once. Can they give different answers? If so, when can you trust either?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sum two infinite arrays by rows and by columns.</p>
      <IteratedSumViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Tonelli's theorem">
        <p>
          Let <M>{"\\mu"}</M> and <M>{"\\nu"}</M> be σ-finite and <M>{"f \\ge 0"}</M> measurable on <M>{"X \\times Y"}</M>.
          Then <M>{"x \\mapsto \\int f(x, y) \\, d\\nu(y)"}</M> is measurable, likewise in the other order, and
        </p>
        <MD>{"\\int_{X \\times Y} f \\, d(\\mu \\times \\nu) = \\int_X \\int_Y f \\, d\\nu \\, d\\mu = \\int_Y \\int_X f \\, d\\mu \\, d\\nu,"}</MD>
        <p>all three possibly infinite.</p>
      </Theorem>

      <Theorem title="Fubini's theorem">
        <p>
          If instead <M>f</M> is integrable on <M>{"X \\times Y"}</M>, then for almost every <M>x</M> the section{" "}
          <M>{"y \\mapsto f(x, y)"}</M> is integrable, the same holds in the other order, and the same three integrals agree.
        </p>
      </Theorem>

      <Example title="how to use them together">
        <p>
          To swap the order for a function of either sign, first apply Tonelli to <M>{"|f|"}</M>: if either iterated integral
          of <M>{"|f|"}</M> is finite, <M>f</M> is integrable, and Fubini applies. For instance, Tonelli with counting measure
          justifies rearranging any double series of non-negative terms, and with{" "}
          <M>{"f(x, t) = \\mathbf{1}_{\\{g(x) > t\\}}"}</M> it proves the layer-cake formula{" "}
          <M>{"\\int g \\, d\\mu = \\int_0^\\infty \\mu(\\{g > t\\}) \\, dt"}</M>.
        </p>
      </Example>

      <Remark title="when the orders disagree">
        <p>The visualisation&rsquo;s array gives 0 by rows and 1 by columns. On the unit square,</p>
        <MD>{"\\int_0^1 \\!\\! \\int_0^1 \\frac{x^2 - y^2}{(x^2 + y^2)^2} \\, dy \\, dx = \\frac{\\pi}{4}, \\qquad \\int_0^1 \\!\\! \\int_0^1 \\frac{x^2 - y^2}{(x^2 + y^2)^2} \\, dx \\, dy = -\\frac{\\pi}{4}."}</MD>
        <p>
          In both cases the integral of <M>{"|f|"}</M> is infinite. Without σ-finiteness, Tonelli can fail too, as the diagonal
          example with counting measure showed.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "tonelli",
      rung: "check",
      prompt: <p>What does Tonelli&rsquo;s theorem assume about f?</p>,
      answer: { kind: "choice", options: ["f is non-negative and measurable, on a product of σ-finite spaces", "f is integrable", "f is continuous", "f is bounded"], correct: [0] },
    },
    {
      key: "fubini",
      rung: "check",
      prompt: <p>Before swapping the order of integration for a function of either sign, what should you check?</p>,
      answer: { kind: "choice", options: ["That |f| has finite integral on the product, for example by Tonelli", "That f is continuous", "That both iterated integrals exist", "That f is bounded"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s first array, what is the total of the row sums?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "calc",
      rung: "apply",
      prompt: <p>Compute the integral of xy over [0, 1] × [0, 2].</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "why",
      rung: "apply",
      prompt: <p>Why does Fubini&rsquo;s theorem not apply to the visualisation&rsquo;s first array?</p>,
      answer: { kind: "choice", options: ["The sum of the absolute values of the entries is infinite", "The entries are not measurable", "Counting measure is not σ-finite on ℕ", "The rows are not finite"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use Tonelli&rsquo;s theorem to prove the layer-cake formula: for measurable g ≥ 0, the integral of g equals the integral over t from 0 to ∞ of μ(g &gt; t).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes g(x) as the integral over t from 0 to ∞ of the indicator that g(x) > t.",
          "Notes the function of (x, t) is non-negative and measurable on the product, with Lebesgue measure in t.",
          "Applies Tonelli to swap the order, so the inner x-integral gives μ(g > t).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the row sums and column sums of the first array differ, in terms of where the &lsquo;mass&rsquo; goes.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes each row cancels completely, while the first column keeps an uncancelled 1.",
          "Explains that the positive and negative parts each sum to infinity, so the total depends on the order of cancellation, as with conditionally convergent series.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Taking products of the line with itself gives measure on the plane, and on ℝⁿ. How does that measure behave under
        rotations, shears and stretches?
      </p>
      <p>
        Next, Lebesgue measure in ℝⁿ: completion of the product, translation invariance, the rule that a linear map scales
        volume by the absolute value of its determinant, and the Gaussian integral computed in polar coordinates.
      </p>
    </>
  ),
};
