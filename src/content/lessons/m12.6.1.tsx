import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { OneFormViz } from "@/components/viz/OneFormViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.6.1",
  minutes: 95,
  links: {
    revisits: ["m5.7.4", "m12.4.1", "m3.6.1"],
    foreshadows: ["m12.6.2", "m26.5.2", "m26.5.3"],
  },

  puzzle: (
    <>
      <p>
        Green&rsquo;s theorem, Stokes&rsquo;s theorem and the divergence theorem look like three separate facts, each with its
        own curl or divergence. Differential forms unify them into one statement. What is a form, and what is its derivative?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a 1-form, a point and a vector. The form returns a number; its exterior derivative is shaded in the background.</p>
      <OneFormViz />
    </>
  ),

  theory: (
    <>
      <Definition title="forms on ℝⁿ">
        <p>
          A <strong>k-form</strong> on an open <M>{"U \\subseteq \\mathbb{R}^n"}</M> assigns to each point an alternating
          multilinear function of <M>{"k"}</M> vectors. Every k-form is a sum
        </p>
        <MD>{"\\omega = \\sum_{i_1 < \\dots < i_k} f_{i_1 \\dots i_k} \\, dx_{i_1} \\wedge \\dots \\wedge dx_{i_k},"}</MD>
        <p>
          where <M>{"dx_i(v) = v_i"}</M> and <M>{"(dx \\wedge dy)(v, w) = v_1 w_2 - v_2 w_1"}</M>, the signed area of the
          parallelogram. The wedge product is anticommutative on 1-forms: <M>{"dx \\wedge dy = -dy \\wedge dx"}</M>, so{" "}
          <M>{"dx \\wedge dx = 0"}</M>.
        </p>
      </Definition>

      <Definition title="the exterior derivative">
        <p>
          For a function, <M>{"df = \\sum \\partial_i f \\, dx_i"}</M>. In general{" "}
          <M>{"d(f \\, dx_{i_1} \\wedge \\dots) = df \\wedge dx_{i_1} \\wedge \\dots"}</M>. In the plane,
        </p>
        <MD>{"d(P \\, dx + Q \\, dy) = \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dx \\wedge dy."}</MD>
      </Definition>

      <Theorem title="d² = 0">
        <p>For every form <M>{"\\omega"}</M> with <M>{"C^2"}</M> coefficients, <M>{"d(d\\omega) = 0"}</M>.</p>
      </Theorem>

      <Proof>
        <p>For a function,</p>
        <MD>{"d(df) = \\sum_{i, j} \\partial_j \\partial_i f \\, dx_j \\wedge dx_i = \\sum_{i < j} (\\partial_i \\partial_j f - \\partial_j \\partial_i f) \\, dx_i \\wedge dx_j = 0,"}</MD>
        <p>
          by symmetry of mixed partial derivatives and anticommutativity. The general case follows from the product rule{" "}
          <M>{"d(\\alpha \\wedge \\beta) = d\\alpha \\wedge \\beta \\pm \\alpha \\wedge d\\beta"}</M>.
        </p>
      </Proof>

      <Example title="the old operators">
        <p>
          In <M>{"\\mathbb{R}^3"}</M>, identify 1-forms and 2-forms with vector fields. Then <M>{"d"}</M> on functions is the
          gradient, on 1-forms the curl, and on 2-forms the divergence. The identity <M>{"d^2 = 0"}</M> becomes{" "}
          <M>{"\\operatorname{curl} \\operatorname{grad} = 0"}</M> and <M>{"\\operatorname{div} \\operatorname{curl} = 0"}</M>.
        </p>
      </Example>

      <Remark title="closed and exact">
        <p>
          A form is <strong>closed</strong> if <M>{"d\\omega = 0"}</M> and <strong>exact</strong> if{" "}
          <M>{"\\omega = d\\eta"}</M>. Exact forms are closed. The converse holds on convex sets (the Poincaré lemma) but fails
          on the punctured plane, as the next lesson shows; this failure is the start of de Rham cohomology.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "eval",
      rung: "check",
      prompt: <p>Evaluate (dx ∧ dy)(v, w) for v = (2, 1) and w = (1, 3).</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "anti",
      rung: "check",
      prompt: <p>What is dy ∧ dx in terms of dx ∧ dy?</p>,
      answer: { kind: "choice", options: ["−dx ∧ dy", "dx ∧ dy", "0", "2 dx ∧ dy"], correct: [0] },
    },
    {
      key: "d1",
      rung: "apply",
      prompt: <p>For ω = x²y dx + xy dy, dω = c dx ∧ dy. What is c at the point (1, 2)? (c = ∂Q/∂x − ∂P/∂y.)</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "closed",
      rung: "apply",
      prompt: <p>Which 1-form is closed on ℝ²?</p>,
      answer: { kind: "choice", options: ["y dx + x dy", "−y dx + x dy", "x dy", "y² dx"], correct: [0] },
    },
    {
      key: "grad",
      rung: "apply",
      prompt: <p>In ℝ³, which classical identity is d² = 0 applied to a function?</p>,
      answer: { kind: "choice", options: ["curl(grad f) = 0", "div(grad f) = 0", "grad(div F) = 0", "curl(curl F) = 0"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that d(df) = 0 for a C² function f(x, y) on the plane.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes df = f_x dx + f_y dy.",
          "Computes d(df) = (f_yx − f_xy) dx ∧ dy, with care over the order.",
          "Uses equality of mixed partials to conclude it is 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>What is dx ∧ dy ∧ dz evaluated on three vectors in ℝ³? Relate it to something from linear algebra.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies it as the determinant of the matrix with the three vectors as columns.",
          "Notes it is the signed volume of the parallelepiped.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a k-form is, how the wedge product measures signed area, what the exterior derivative does, why d² = 0, and how grad, curl and div appear as d.",

  glimpse: (
    <p>
      The next lesson integrates forms over curves, surfaces and chains. Forms on manifolds and the exterior derivative are
      the basic tools of differential geometry and topology.
    </p>
  ),
};
