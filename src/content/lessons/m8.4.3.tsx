import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PositiveViz } from "@/components/viz/PositiveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.4.3",
  minutes: 80,
  links: {
    revisits: ["m8.4.2", "m3.7.4", "m8.3.1"],
    foreshadows: ["m8.4.4", "m8.4.5", "m8.7.1"],
  },

  puzzle: (
    <>
      <p>
        Every non-negative number has a non-negative square root. Which operators behave like non-negative numbers? The
        question sounds whimsical, but the answer gives square roots of operators, and with them the polar and singular value
        decompositions.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Adjust a symmetric matrix and watch the values of <M>{"\\langle Tv, v \\rangle"}</M> around the unit circle. Look for
        when red appears.
      </p>
      <PositiveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="positive operator">
        <p>
          An operator <M>{"T"}</M> on an inner product space is <strong>positive</strong> if it is self-adjoint and{" "}
          <M>{"\\langle Tv, v \\rangle \\ge 0"}</M> for every <M>{"v"}</M>. (Matrix books often say positive semidefinite.)
        </p>
      </Definition>

      <Definition title="square root">
        <p>
          An operator <M>{"R"}</M> is a <strong>square root</strong> of <M>{"T"}</M> if <M>{"R^2 = T"}</M>.
        </p>
      </Definition>

      <Theorem title="characterising positive operators">
        <p>For an operator <M>{"T"}</M> on a finite-dimensional inner product space, the following are equivalent:</p>
        <ol>
          <li><M>{"T"}</M> is positive;</li>
          <li><M>{"T"}</M> is self-adjoint and all its eigenvalues are at least 0;</li>
          <li><M>{"T"}</M> has a positive square root;</li>
          <li><M>{"T = R^* R"}</M> for some operator <M>{"R"}</M>.</li>
        </ol>
      </Theorem>

      <Proof>
        <p>
          (1 to 2) If <M>{"Tv = \\lambda v"}</M> then <M>{"0 \\le \\langle Tv, v \\rangle = \\lambda \\|v\\|^2"}</M>. (2 to
          3) By the spectral theorem take an orthonormal eigenbasis with <M>{"Te_k = \\lambda_k e_k"}</M>, and define{" "}
          <M>{"Re_k = \\sqrt{\\lambda_k}\\, e_k"}</M>. It is self-adjoint with non-negative eigenvalues, and{" "}
          <M>{"R^2 = T"}</M>. (3 to 4) A positive <M>{"R"}</M> is self-adjoint, so <M>{"T = R^2 = R^*R"}</M>. (4 to 1){" "}
          <M>{"(R^*R)^* = R^*R"}</M>, and
        </p>
        <MD>{"\\langle R^*Rv, v \\rangle = \\langle Rv, Rv \\rangle = \\|Rv\\|^2 \\ge 0."}</MD>
      </Proof>

      <Theorem title="uniqueness">
        <p>
          Every positive operator has exactly one positive square root, written <M>{"\\sqrt T"}</M>. It acts on each
          eigenspace of <M>{"T"}</M> for the eigenvalue <M>{"\\lambda"}</M> as multiplication by{" "}
          <M>{"\\sqrt\\lambda"}</M>.
        </p>
      </Theorem>

      <Example title="a square root">
        <p>
          For <M>{"T = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}"}</M>, the eigenvalues are 3 and 1 along the diagonals,
          so <M>{"\\sqrt T"}</M> multiplies by <M>{"\\sqrt3"}</M> along <M>{"(1, 1)"}</M> and by 1 along{" "}
          <M>{"(1, -1)"}</M>:
        </p>
        <MD>{"\\sqrt T = \\frac12 \\begin{pmatrix} \\sqrt3 + 1 & \\sqrt3 - 1 \\\\ \\sqrt3 - 1 & \\sqrt3 + 1 \\end{pmatrix}."}</MD>
      </Example>

      <Example title="many square roots, one positive">
        <p>
          The identity on <M>{"\\mathbb{R}^2"}</M> has infinitely many square roots, such as every reflection, for instance{" "}
          <M>{"\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}"}</M>. Only <M>{"I"}</M> itself is positive.
        </p>
      </Example>

      <Remark title="where they appear">
        <p>
          Gram matrices <M>{"(\\langle v_j, v_k \\rangle)"}</M> and covariance matrices are positive, since they have the form{" "}
          <M>{"R^*R"}</M>. A point is a local minimum of a smooth function when its Hessian is positive definite. In physics,
          kinetic energy is a positive quadratic form in the velocities.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "test",
      rung: "check",
      prompt: <p>Is the operator with matrix [1, 2; 2, 1] positive?</p>,
      answer: {
        kind: "choice",
        options: ["Yes, all its entries are positive.", "No: its eigenvalues are 3 and −1.", "Yes, it is symmetric.", "No, it is not self-adjoint."],
        correct: [1],
      },
    },
    {
      key: "rstar",
      rung: "check",
      prompt: <p>True or false: for every operator R, the operator R*R is positive.</p>,
      answer: { kind: "choice", options: ["True", "False"], correct: [0] },
    },
    {
      key: "root",
      rung: "apply",
      prompt: <p>T has matrix diag(4, 9) in the standard basis. What is the trace of its positive square root?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "least",
      rung: "apply",
      prompt: <p>For which smallest value of a is the matrix [a, 1; 1, 1] positive?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "form",
      rung: "apply",
      prompt: <p>For T = [2, 1; 1, 2] and v = (1, −1), compute ⟨Tv, v⟩.</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that R*R is positive for every operator R.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows R*R is self-adjoint, using (R*R)* = R*(R*)* = R*R.",
          "Computes ⟨R*Rv, v⟩ = ⟨Rv, Rv⟩.",
          "Concludes this equals ‖Rv‖² ≥ 0.",
        ],
      },
    },
    {
      key: "roots",
      rung: "stretch",
      prompt: <p>Give two different self-adjoint square roots of the identity on ℝ², and explain why only one of them is positive.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives two examples, such as I and a reflection like diag(1, −1) or [0, 1; 1, 0].",
          "Notes that a reflection has eigenvalue −1, so it is not positive.",
          "Connects this to uniqueness of the positive square root. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a positive operator is, the four equivalent conditions and why they are equivalent, how to compute the positive square root, and an operator with several square roots.",

  glimpse: (
    <p>
      The next lesson studies isometries, the operators that preserve length. Positive operators and isometries together give
      the polar decomposition, the operator version of writing a complex number as r times e to the iθ.
    </p>
  ),
};
