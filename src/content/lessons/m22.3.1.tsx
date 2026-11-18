import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { RectangleCoverViz } from "@/components/viz/RectangleCoverViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.3.1",
  minutes: 90,
  links: {
    revisits: ["m22.1.3", "m22.1.1", "m12.5.1"],
    foreshadows: ["m22.3.2", "m22.3.3", "m22.4.1"],
  },

  puzzle: (
    <>
      <p>
        A rectangle&rsquo;s area is its length times its width. From that one rule, can you say what the area of a disc is,
        or of a Cantor set crossed with an interval, or of any set at all? And if you slice a shape into lines and add up
        their lengths, must you get its area?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Squeeze a disc between unions of rectangles.</p>
      <RectangleCoverViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the product σ-algebra">
        <p>
          Given measure spaces <M>{"(X, \\mathcal{A}, \\mu)"}</M> and <M>{"(Y, \\mathcal{B}, \\nu)"}</M>, a{" "}
          <strong>measurable rectangle</strong> is <M>{"A \\times B"}</M> with <M>{"A \\in \\mathcal{A}"}</M> and{" "}
          <M>{"B \\in \\mathcal{B}"}</M>. The <strong>product σ-algebra</strong> <M>{"\\mathcal{A} \\otimes \\mathcal{B}"}</M>{" "}
          is the σ-algebra they generate.
        </p>
      </Definition>

      <Theorem title="product measure">
        <p>There is a measure <M>{"\\mu \\times \\nu"}</M> on <M>{"\\mathcal{A} \\otimes \\mathcal{B}"}</M> with</p>
        <MD>{"(\\mu \\times \\nu)(A \\times B) = \\mu(A) \\, \\nu(B),"}</MD>
        <p>
          using <M>{"0 \\cdot \\infty = 0"}</M>. If <M>{"\\mu"}</M> and <M>{"\\nu"}</M> are σ-finite, it is the only one. It
          is built by Carathéodory&rsquo;s method: finite disjoint unions of rectangles form an algebra, the rule above is a
          premeasure on it, and the outer measure it induces extends it.
        </p>
      </Theorem>

      <Example title="sections and Cavalieri">
        <p>
          For <M>{"E \\in \\mathcal{A} \\otimes \\mathcal{B}"}</M>, each section <M>{"E_x = \\{y : (x, y) \\in E\\}"}</M> is
          measurable, the map <M>{"x \\mapsto \\nu(E_x)"}</M> is measurable, and for σ-finite spaces
        </p>
        <MD>{"(\\mu \\times \\nu)(E) = \\int_X \\nu(E_x) \\, d\\mu(x)."}</MD>
        <p>
          For the disc of radius <M>r</M>, each section is an interval of length{" "}
          <M>{"2\\sqrt{r^2 - x^2}"}</M>, and integrating gives <M>{"\\pi r^2"}</M>: area as the sum of the lengths of its
          slices.
        </p>
      </Example>

      <Remark title="where care is needed">
        <p>
          The product of Lebesgue measure with itself is not complete: a non-measurable set <M>N</M> gives{" "}
          <M>{"\\{0\\} \\times N"}</M>, a subset of a null set that is not in the product σ-algebra. Completing it gives
          two-dimensional Lebesgue measure. And σ-finiteness matters: with Lebesgue measure on <M>{"[0, 1]"}</M> and counting
          measure on <M>{"[0, 1]"}</M>, the diagonal has vertical sections of count 1, total 1, but horizontal sections of
          length 0, total 0.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rect",
      rung: "check",
      prompt: <p>What is the product measure of a measurable rectangle A × B?</p>,
      answer: { kind: "choice", options: ["μ(A) times ν(B)", "μ(A) plus ν(B)", "The larger of μ(A) and ν(B)", "It depends on the σ-algebra"], correct: [0] },
    },
    {
      key: "gen",
      rung: "check",
      prompt: <p>What generates the product σ-algebra?</p>,
      answer: { kind: "choice", options: ["The measurable rectangles A × B", "All subsets of X × Y", "Open discs", "Graphs of functions"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the 4 × 4 grid, how many cells lie entirely inside the disc?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "box",
      rung: "apply",
      prompt: <p>What is the measure of [0, 2] × [1, 4] under Lebesgue measure times Lebesgue measure?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "line",
      rung: "apply",
      prompt: <p>What is the product measure of the segment {"{"}0{"}"} × [0, 1] in the plane?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if μ(A) = 0, then A × Y is a null set for μ × ν, where ν is σ-finite.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes Y as a countable union of sets Yₖ of finite ν-measure, or uses the convention 0 · ∞ = 0 directly.",
          "Computes the measure of each A × Yₖ as 0 · ν(Yₖ) = 0.",
          "Concludes by countable subadditivity, or directly, that A × Y has measure 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain the diagonal example: why do the two ways of slicing give different totals, and which hypothesis fails?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the vertical slices as single points with counting measure 1, integrating to 1 over [0, 1].",
          "Computes the horizontal slices as single points with Lebesgue measure 0, summing to 0.",
          "Any reasonable answer earns full credit, especially one noting counting measure on [0, 1] is not σ-finite.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Cavalieri&rsquo;s principle measures a set by its slices. Applied to the region under a graph, it says a double
        integral can be computed one variable at a time, and in either order.
      </p>
      <p>
        Next, the Fubini-Tonelli theorem: iterated integrals of non-negative functions always agree, integrable functions may
        be integrated in either order, and the classic examples where the orders disagree.
      </p>
    </>
  ),
};
