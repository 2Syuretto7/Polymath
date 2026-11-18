import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ExtDerivViz } from "@/components/viz/ExtDerivViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.5.3",
  minutes: 90,
  links: {
    revisits: ["m26.5.2", "m12.6.1", "m5.7.1"],
    foreshadows: ["m26.5.4", "m26.6.2", "m26.6.3"],
  },

  puzzle: (
    <>
      <p>
        Vector calculus has three derivatives: gradient, curl and divergence, with two curious identities, curl grad = 0 and
        div curl = 0. On a manifold there is no cross product and no preferred inner product, so none of them makes sense as
        stated. Yet behind all three is a single operation that needs no extra structure at all.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        For a 1-form ω in the plane, dω measures circulation per unit area. Choose a form and shrink the square: the
        circulation divided by the area approaches the coefficient of dω.
      </p>
      <ExtDerivViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the exterior derivative">
        <p>
          On every manifold there is a unique family of linear maps <M>{"d: \\Omega^k(M) \\to \\Omega^{k+1}(M)"}</M> such that: on
          functions, df is the differential; <M>{"d \\circ d = 0"}</M>; and{" "}
          <M>{"d(\\omega \\wedge \\eta) = d\\omega \\wedge \\eta + (-1)^k \\, \\omega \\wedge d\\eta"}</M> for ω of degree k. In
          coordinates, <M>{"d\\left( f \\, dx^{i_1} \\wedge \\dots \\wedge dx^{i_k} \\right) = df \\wedge dx^{i_1} \\wedge \\dots \\wedge dx^{i_k}"}</M>.
        </p>
        <p>
          <strong>Why d ∘ d = 0.</strong> On functions,{" "}
          <M>{"d(df) = \\sum_{i,j} \\partial^2 f / \\partial x^j \\partial x^i \\, dx^j \\wedge dx^i"}</M>; the second partials are
          symmetric and the wedge is antisymmetric, so the terms cancel in pairs.
        </p>
      </Theorem>

      <Theorem title="naturality">
        <p>
          d commutes with pullback: <M>{"F^*(d\\omega) = d(F^*\\omega)"}</M> for every smooth map F. This is why d needs no
          coordinates: any formula in one chart agrees with the formula in another.
        </p>
      </Theorem>

      <Example title="vector calculus">
        <p>
          In the plane, <M>{"d(P \\, dx + Q \\, dy) = (\\partial Q / \\partial x - \\partial P / \\partial y) \\, dx \\wedge dy"}</M>, the
          scalar curl. In ℝ³, d on 0-forms, 1-forms and 2-forms is gradient, curl and divergence, once 1-forms and 2-forms are
          matched with vector fields using the dot product. Then <M>{"d \\circ d = 0"}</M> becomes curl grad = 0 and div curl = 0.
        </p>
      </Example>

      <Definition title="closed and exact">
        <p>
          A form ω is <strong>closed</strong> if dω = 0 and <strong>exact</strong> if ω = dη for some η. Every exact form is
          closed, since d ∘ d = 0. The converse can fail: on the punctured plane,{" "}
          <M>{"\\omega = (-y \\, dx + x \\, dy)/(x^2 + y^2)"}</M> is closed, but it is not exact, because its integral round the
          unit circle is 2π, not 0. Locally it is <M>{"d\\theta"}</M>, but θ has no single-valued global choice.
        </p>
      </Definition>

      <Remark title="the Poincaré lemma">
        <p>
          On ℝⁿ, or any star-shaped open set, every closed form of positive degree is exact. So the failure of closed forms to
          be exact is a global phenomenon, detecting holes. Measuring that failure is de Rham cohomology.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dd",
      rung: "check",
      prompt: <p>What is d ∘ d?</p>,
      answer: { kind: "choice", options: ["0", "The identity", "d", "Multiplication by 2"], correct: [0] },
    },
    {
      key: "ce",
      rung: "check",
      prompt: <p>Which statement is always true?</p>,
      answer: { kind: "choice", options: ["Every exact form is closed", "Every closed form is exact", "Every 1-form is closed", "No 2-form is exact"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for ω = −y dx + x dy, what does circulation divided by area approach?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.01 },
    },
    {
      key: "compute",
      rung: "apply",
      prompt: <p>What is d(x² y dx)?</p>,
      answer: { kind: "choice", options: ["−x² dx ∧ dy", "x² dx ∧ dy", "2xy dx ∧ dy", "0"], correct: [0] },
    },
    {
      key: "r3",
      rung: "apply",
      prompt: <p>In ℝ³, which vector calculus identity is the statement d(dω) = 0 for a 1-form ω?</p>,
      answer: { kind: "choice", options: ["div curl = 0", "curl grad = 0", "div grad = Laplacian", "grad div = 0"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that ω = (−y dx + x dy)/(x² + y²) on the punctured plane is closed.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes ω = P dx + Q dy with P = −y/(x² + y²) and Q = x/(x² + y²), so dω = (∂Q/∂x − ∂P/∂y) dx ∧ dy.",
          "Computes ∂Q/∂x = (y² − x²)/(x² + y²)² and ∂P/∂y = (y² − x²)/(x² + y²)².",
          "Concludes the difference is 0, so dω = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does naturality, F*(dω) = d(F*ω), mean the coordinate formula for d is independent of the chart?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a change of charts is a diffeomorphism between open sets of ℝⁿ.",
          "Argues that pulling back along it commutes with d, so the two coordinate definitions give the same form.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        To integrate forms, we must know which way round counts as positive: which bases are right-handed. Some manifolds
        allow a consistent choice everywhere; the Möbius band does not.
      </p>
      <p>Next, orientation.</p>
    </>
  ),
};
