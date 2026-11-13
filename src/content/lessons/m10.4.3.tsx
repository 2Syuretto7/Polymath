import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TraceDetViz } from "@/components/viz/TraceDetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.4.3",
  minutes: 85,
  links: {
    revisits: ["m10.4.1", "m10.4.2", "m10.3.1"],
    foreshadows: ["m10.5.1", "m10.5.2", "m36.3.1"],
  },

  puzzle: (
    <>
      <p>
        A planar linear system has four numbers in its matrix. Yet its phase portraits come in only a handful of shapes. Is
        there a simple map showing which matrices give which pictures?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the point around the trace–determinant plane and watch the phase portrait change type as it crosses each boundary.</p>
      <TraceDetViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="eigenvalues from trace and determinant">
        <p>
          For a <M>{"2 \\times 2"}</M> matrix with trace <M>{"T"}</M> and determinant <M>{"D"}</M>, the eigenvalues are the
          roots of <M>{"\\lambda^2 - T\\lambda + D = 0"}</M>:
        </p>
        <MD>{"\\lambda = \\frac{T \\pm \\sqrt{T^2 - 4D}}{2}, \\qquad \\lambda_1 + \\lambda_2 = T, \\quad \\lambda_1\\lambda_2 = D."}</MD>
      </Theorem>

      <Proof>
        <p>
          <M>{"\\det\\begin{pmatrix} a - \\lambda & b \\\\ c & d - \\lambda \\end{pmatrix} = \\lambda^2 - (a + d)\\lambda + (ad - bc)"}</M>.
          The sum and product follow by comparing with <M>{"(\\lambda - \\lambda_1)(\\lambda - \\lambda_2)"}</M>.
        </p>
      </Proof>

      <Definition title="the classification">
        <ul>
          <li><M>{"D < 0"}</M>: real eigenvalues of opposite sign, a <strong>saddle</strong>.</li>
          <li><M>{"D > 0"}</M>, <M>{"T^2 > 4D"}</M>: real eigenvalues of the same sign, a <strong>node</strong>.</li>
          <li><M>{"D > 0"}</M>, <M>{"T^2 < 4D"}</M>: complex eigenvalues, a <strong>spiral</strong>, or a <strong>centre</strong> if <M>{"T = 0"}</M>.</li>
          <li>Stable if <M>{"T < 0"}</M> (and <M>{"D > 0"}</M>), unstable if <M>{"T > 0"}</M>.</li>
        </ul>
      </Definition>

      <Example title="reading off a portrait">
        <p>
          <M>{"A = \\begin{pmatrix} 1 & -5 \\\\ 1 & -3 \\end{pmatrix}"}</M> has <M>{"T = -2"}</M>, <M>{"D = 2"}</M>,{" "}
          <M>{"T^2 - 4D = -4 < 0"}</M>: a stable spiral, with eigenvalues <M>{"-1 \\pm i"}</M>. The direction of rotation can
          be read from one vector: at <M>{"(1, 0)"}</M> the velocity is <M>{"(1, 1)"}</M>, pointing upwards, so it turns
          anticlockwise.
        </p>
      </Example>

      <Remark title="borderline cases">
        <p>
          Saddles, nodes and spirals survive small changes in <M>{"A"}</M>: they are <strong>structurally stable</strong>.
          Centres, degenerate nodes on the parabola, and the line <M>{"D = 0"}</M> do not: an arbitrarily small change can turn
          a centre into a spiral. This is why, for nonlinear systems, linearisation decides only the robust cases.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "td",
      rung: "check",
      prompt: <p>What are the trace and determinant of <M>{"\\begin{pmatrix} 3 & 1 \\\\ 2 & -1 \\end{pmatrix}"}</M>?</p>,
      answer: { kind: "choice", options: ["T = 2, D = −5", "T = 2, D = −1", "T = 3, D = −3", "T = −2, D = 5"], correct: [0] },
    },
    {
      key: "saddle",
      rung: "check",
      prompt: <p>If <M>{"D < 0"}</M>, what kind of equilibrium is the origin?</p>,
      answer: { kind: "choice", options: ["A stable node", "A saddle", "A centre", "An unstable spiral"], correct: [1] },
    },
    {
      key: "classify",
      rung: "apply",
      prompt: <p>Classify the origin for <M>{"A = \\begin{pmatrix} -2 & 1 \\\\ 1 & -2 \\end{pmatrix}"}</M>.</p>,
      answer: { kind: "choice", options: ["Stable node", "Unstable node", "Saddle", "Stable spiral"], correct: [0] },
    },
    {
      key: "spiral",
      rung: "apply",
      prompt: <p>For <M>{"A = \\begin{pmatrix} 1 & -5 \\\\ 1 & -3 \\end{pmatrix}"}</M>, what is the real part of the eigenvalues?</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0.001 },
    },
    {
      key: "centre",
      rung: "apply",
      prompt: <p>For which value of <M>{"k"}</M> is the origin a centre for <M>{"A = \\begin{pmatrix} k & 2 \\\\ -3 & 1 \\end{pmatrix}"}</M>?</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"D > 0"}</M> and <M>{"T < 0"}</M>, every solution of <M>{"x' = Ax"}</M> tends to 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers real eigenvalues: product D > 0 means same sign, sum T < 0 means both negative.",
          "Considers complex eigenvalues: the real part is T/2 < 0.",
          "Concludes that every solution, a combination of terms with decaying exponentials, tends to 0.",
        ],
      },
    },
    {
      key: "robust",
      rung: "stretch",
      prompt: <p>Why is a centre fragile while a saddle is robust? What would this mean for a model whose linearisation is a centre?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a centre needs T = 0 exactly, while a saddle only needs D < 0, an open condition.",
          "Concludes that small changes or nonlinear terms can turn a centre into a spiral, so the model's prediction is unreliable.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the trace and determinant determine the eigenvalues of a 2 × 2 matrix, how they classify the phase portrait into saddles, nodes, spirals and centres, and why some types are robust and others fragile.",

  glimpse: (
    <p>
      The next lessons use this map near the equilibria of nonlinear systems, and then turn to stability without solving at
      all. Dynamical systems later studies hyperbolic fixed points in general.
    </p>
  ),
};
