import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { LinearImageViz } from "@/components/viz/LinearImageViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.3.3",
  minutes: 90,
  links: {
    revisits: ["m22.3.2", "m22.1.4", "m3.6.3"],
    foreshadows: ["m22.4.3", "m22.5.2", "m22.4.1"],
  },

  puzzle: (
    <>
      <p>
        Push a deck of cards so that it leans: each card slides a little further than the one below. The deck changes shape,
        but its volume does not. Rotate it, and the volume still does not change. Double every side, and it grows eightfold.
        What single rule covers every linear change of shape?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Apply linear maps to a square and a disc, and compare their areas.</p>
      <LinearImageViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Lebesgue measure on ℝⁿ">
        <p>
          <strong>Lebesgue measure</strong> <M>{"\\lambda^n"}</M> is the completion of the n-fold product of Lebesgue measure
          on ℝ. A box <M>{"[a_1, b_1] \\times \\cdots \\times [a_n, b_n]"}</M> has measure{" "}
          <M>{"\\prod_i (b_i - a_i)"}</M>, and every measurable set can be approximated from outside by open sets and from
          inside by compact sets.
        </p>
      </Definition>

      <Theorem title="invariance and linear maps">
        <p>
          <M>{"\\lambda^n"}</M> is translation invariant, and for any linear map <M>T</M> and measurable <M>E</M>,
        </p>
        <MD>{"\\lambda^n(T(E)) = |\\det T| \\, \\lambda^n(E)."}</MD>
        <p>
          The proof: <M>{"E \\mapsto \\lambda^n(T(E))"}</M> is a translation-invariant measure for invertible <M>T</M>, so it
          is a constant multiple of <M>{"\\lambda^n"}</M>. Checking the constant on the unit cube for elementary matrices
          gives <M>{"|\\det T|"}</M>; singular <M>T</M> maps into a hyperplane, which is null.
        </p>
      </Theorem>

      <Example title="the Gaussian integral">
        <p>
          The smooth change of variables formula,{" "}
          <M>{"\\int_{\\Phi(U)} f \\, d\\lambda^n = \\int_U f(\\Phi(u)) \\, |\\det D\\Phi(u)| \\, du"}</M>, follows by applying
          the linear rule on small pieces. In polar coordinates, with Tonelli,
        </p>
        <MD>{"\\Big( \\int_{\\mathbb{R}} e^{-x^2} dx \\Big)^2 = \\int_{\\mathbb{R}^2} e^{-(x^2 + y^2)} \\, d\\lambda^2 = \\int_0^{2\\pi} \\!\\! \\int_0^\\infty e^{-r^2} r \\, dr \\, d\\theta = \\pi,"}</MD>
        <p>so <M>{"\\int_{\\mathbb{R}} e^{-x^2} dx = \\sqrt{\\pi}"}</M>.</p>
      </Example>

      <Remark title="scaling and the shrinking ball">
        <p>
          Taking <M>{"T = r I"}</M> gives <M>{"\\lambda^n(rE) = r^n \\lambda^n(E)"}</M>. The unit ball in ℝⁿ has volume{" "}
          <M>{"\\pi^{n/2} / \\Gamma(n/2 + 1)"}</M>, which is largest at n = 5 and tends to 0: in high dimensions almost all of
          the cube lies outside the inscribed ball. Up to a constant, <M>{"\\lambda^n"}</M> is the only translation-invariant
          measure on the Borel sets that is finite on compact sets, an instance of Haar measure.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "box",
      rung: "check",
      prompt: <p>What is the Lebesgue measure of a box in ℝⁿ?</p>,
      answer: { kind: "choice", options: ["The product of its side lengths", "The sum of its side lengths", "The length of its diagonal", "Its longest side to the power n"], correct: [0] },
    },
    {
      key: "lin",
      rung: "check",
      prompt: <p>By what factor does a linear map T multiply Lebesgue measure?</p>,
      answer: { kind: "choice", options: ["|det T|", "The trace of T", "The largest eigenvalue of T", "The rank of T"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the area of the image of the unit square under the shear?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "scale",
      rung: "apply",
      prompt: <p>A set E in ℝ² has measure 2. What is the measure of 3E?</p>,
      answer: { kind: "numeric", value: 18 },
    },
    {
      key: "gauss",
      rung: "apply",
      prompt: <p>What is the integral of e to the power −x² over ℝ?</p>,
      answer: { kind: "choice", options: ["√π", "π", "1", "2π"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that λⁿ(rE) = rⁿ λⁿ(E) for r &gt; 0, first for boxes and then for any measurable E.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks boxes: scaling each side by r multiplies the product of side lengths by rⁿ.",
          "Notes covers of E by boxes correspond exactly to covers of rE by scaled boxes, so the outer measures scale by rⁿ.",
          "Concludes for measurable E, or equally argues via uniqueness of translation-invariant measures.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the hyperplane where the last coordinate is 0 has Lebesgue measure 0 in ℝⁿ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Covers the part inside a large cube [−k, k]ⁿ⁻¹ by a thin box of height ε, with measure (2k)ⁿ⁻¹ε.",
          "Lets ε → 0, then takes the countable union over k.",
          "Any reasonable answer earns full credit, such as a Tonelli argument with null sections.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        So far measures have been non-negative. But charge can be positive or negative, and a difference of two measures is a
        natural object. What survives of measure theory when values can be negative?
      </p>
      <p>
        Next, signed measures: positive and negative sets, the Hahn decomposition of the space into a positive and a negative
        part, and the Jordan decomposition of a signed measure as a difference of two measures.
      </p>
    </>
  ),
};
