import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LinearSystemViz } from "@/components/viz/LinearSystemViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.4.1",
  minutes: 90,
  links: {
    revisits: ["m10.3.1", "m3.7.1", "m3.7.2"],
    foreshadows: ["m10.4.2", "m10.4.3", "m10.5.1"],
  },

  puzzle: (
    <>
      <p>
        Two tanks of brine are connected by pipes, and salt flows back and forth. The amount in each tank changes at a rate
        depending on both. Can linear algebra, which handles many unknowns at once, do the same for many changing quantities?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each stroke shows the velocity <M>{"Ax"}</M> at a point. Choose a system and a starting point, and notice the special
        straight-line solutions along the dashed directions.
      </p>
      <LinearSystemViz />
    </>
  ),

  theory: (
    <>
      <Definition title="linear system">
        <p>
          A <strong>linear system</strong> with constant coefficients is <M>{"x' = Ax"}</M>, where{" "}
          <M>{"x(t) \\in \\mathbb{R}^n"}</M> and <M>{"A"}</M> is an <M>{"n \\times n"}</M> matrix. Its solutions form an{" "}
          <M>{"n"}</M>-dimensional vector space, one solution for each initial vector <M>{"x(0)"}</M>.
        </p>
      </Definition>

      <Example title="higher order as a system">
        <p>
          <M>{"y'' + by' + cy = 0"}</M> becomes, with <M>{"x_1 = y"}</M> and <M>{"x_2 = y'"}</M>,
        </p>
        <MD>{"\\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix}' = \\begin{pmatrix} 0 & 1 \\\\ -c & -b \\end{pmatrix}\\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix}."}</MD>
        <p>Its characteristic polynomial is <M>{"\\lambda^2 + b\\lambda + c"}</M>, the same as before.</p>
      </Example>

      <Theorem title="eigenvector solutions">
        <p>
          If <M>{"Av = \\lambda v"}</M>, then <M>{"x(t) = e^{\\lambda t}v"}</M> solves <M>{"x' = Ax"}</M>. If <M>{"A"}</M> has{" "}
          <M>{"n"}</M> independent eigenvectors <M>{"v_1, \\dots, v_n"}</M>, every solution is
        </p>
        <MD>{"x(t) = c_1e^{\\lambda_1t}v_1 + \\dots + c_ne^{\\lambda_nt}v_n."}</MD>
      </Theorem>

      <Proof>
        <p>
          <M>{"(e^{\\lambda t}v)' = \\lambda e^{\\lambda t}v = e^{\\lambda t}Av = A(e^{\\lambda t}v)"}</M>. The given sum
          solves the system by linearity. At <M>{"t = 0"}</M> it equals <M>{"\\sum c_iv_i"}</M>, which can be any vector since
          the <M>{"v_i"}</M> form a basis, so by uniqueness every solution has this form.
        </p>
      </Proof>

      <Example title="a saddle">
        <p>
          <M>{"A = \\begin{pmatrix} 1 & 1 \\\\ 4 & 1 \\end{pmatrix}"}</M> has eigenvalues 3 and <M>{"-1"}</M>, with
          eigenvectors <M>{"(1, 2)"}</M> and <M>{"(1, -2)"}</M>. So{" "}
          <M>{"x = c_1e^{3t}(1, 2) + c_2e^{-t}(1, -2)"}</M>: unless <M>{"c_1 = 0"}</M>, solutions end up growing along{" "}
          <M>{"(1, 2)"}</M>.
        </p>
      </Example>

      <Remark title="when eigenvectors are not enough">
        <p>
          Complex eigenvalues <M>{"\\alpha \\pm i\\omega"}</M> give real solutions from the real and imaginary parts of{" "}
          <M>{"e^{(\\alpha + i\\omega)t}v"}</M>, which spiral. If <M>{"A"}</M> lacks a full set of eigenvectors, as for{" "}
          <M>{"\\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}"}</M>, terms like <M>{"te^{\\lambda t}"}</M> appear. The matrix
          exponential handles every case at once.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "companion",
      rung: "check",
      prompt: <p>Which matrix turns <M>{"y'' + 3y' + 2y = 0"}</M> into a system for <M>{"(y, y')"}</M>?</p>,
      answer: { kind: "choice", options: ["[[0, 1], [−2, −3]]", "[[3, 2], [1, 0]]", "[[0, 1], [2, 3]]", "[[1, 0], [0, 1]]"], correct: [0] },
    },
    {
      key: "eig",
      rung: "check",
      prompt: <p>If <M>{"Av = \\lambda v"}</M>, which is a solution of <M>{"x' = Ax"}</M>?</p>,
      answer: { kind: "choice", options: ["λv", "e^(λt)v", "e^(t)λv", "tv"], correct: [1] },
    },
    {
      key: "diag",
      rung: "apply",
      prompt: <p>Solve <M>{"x' = \\begin{pmatrix} 2 & 0 \\\\ 0 & -3 \\end{pmatrix}x"}</M> with <M>{"x(0) = (1, 1)"}</M>, and give <M>{"x_1(1)"}</M>.</p>,
      answer: { kind: "numeric", value: Math.exp(2), tolerance: 0.01 },
    },
    {
      key: "saddle",
      rung: "apply",
      prompt: <p>For the saddle <M>{"A = \\begin{pmatrix} 1 & 1 \\\\ 4 & 1 \\end{pmatrix}"}</M> with <M>{"x(0) = (2, 0)"}</M>, find <M>{"x_1(1)"}</M>.</p>,
      answer: { kind: "numeric", value: Math.exp(3) + Math.exp(-1), tolerance: 0.01 },
    },
    {
      key: "center",
      rung: "apply",
      prompt: <p>What are the eigenvalues of <M>{"\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}"}</M>, and what do solutions do?</p>,
      answer: {
        kind: "choice",
        options: ["1 and −1; they form a saddle", "±i; they circle the origin", "0 twice; they stay still", "−1 twice; they decay"],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"Av = \\lambda v"}</M> then <M>{"e^{\\lambda t}v"}</M> solves <M>{"x' = Ax"}</M>, and that a solution starting on the line through <M>{"v"}</M> stays on it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Differentiates e^(λt)v to get λe^(λt)v and uses λv = Av.",
          "Notes that the solution with x(0) = cv is ce^(λt)v by uniqueness.",
          "Concludes it remains a multiple of v.",
        ],
      },
    },
    {
      key: "defect",
      rung: "stretch",
      prompt: <p>Solve <M>{"x' = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}x"}</M> directly. Why do eigenvectors alone not give every solution?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds x₂ constant and x₁ = x₁(0) + x₂(0)t.",
          "Notes there is only one independent eigenvector, (1, 0), so eigen-solutions span only one dimension.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how a system x′ = Ax arises, including from a second-order equation, why eigenvectors give straight-line solutions e^(λt)v, how they combine into the general solution, and what goes wrong without enough eigenvectors.",

  glimpse: (
    <p>
      The next lesson defines the matrix exponential, which solves every linear system. After that we classify phase
      portraits in the plane, and use them to study equilibria of nonlinear systems.
    </p>
  ),
};
