import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SpectralViz } from "@/components/viz/SpectralViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.4.2",
  minutes: 90,
  links: {
    revisits: ["m8.4.1", "m3.7.3", "m8.2.3"],
    foreshadows: ["m8.4.3", "m23.5.3", "m19.5.3"],
  },

  puzzle: (
    <>
      <p>
        Most operators cannot be diagonalised, and even those that can usually need a slanted basis. Yet a whole class of
        operators can be diagonalised in a basis of perpendicular unit vectors, the best basis there is. Which operators are
        they? The answer is short, and it is one of the most used theorems in mathematics.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Adjust a symmetric matrix and watch the image of the unit circle. Then switch to any matrix and see what is lost.
      </p>
      <SpectralViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the real spectral theorem">
        <p>
          Let <M>{"T"}</M> be an operator on a finite-dimensional real inner product space <M>{"V"}</M>. The following are
          equivalent: <M>{"T"}</M> is self-adjoint; <M>{"V"}</M> has an orthonormal basis of eigenvectors of <M>{"T"}</M>;{" "}
          <M>{"T"}</M> has a diagonal matrix with respect to some orthonormal basis.
        </p>
      </Theorem>

      <Proof>
        <p>
          A diagonal matrix in an orthonormal basis equals its transpose, so the last two conditions give self-adjointness.
          For the converse, first show a self-adjoint <M>{"T"}</M> has an eigenvalue. Over <M>{"\\mathbb{R}"}</M> the minimal
          polynomial factors into linear factors and quadratics <M>{"x^2 + bx + c"}</M> with <M>{"b^2 < 4c"}</M>. Each such
          quadratic gives an invertible operator, because for <M>{"v \\ne 0"}</M>
        </p>
        <MD>{"\\langle (T^2 + bT + cI)v, v \\rangle \\ge \\|Tv\\|^2 - |b|\\,\\|Tv\\|\\,\\|v\\| + c\\|v\\|^2 = \\big(\\|Tv\\| - \\tfrac{|b|}{2}\\|v\\|\\big)^2 + \\big(c - \\tfrac{b^2}{4}\\big)\\|v\\|^2 > 0."}</MD>
        <p>
          So some linear factor <M>{"T - \\lambda I"}</M> must fail to be invertible, giving an eigenvector <M>{"u"}</M>, which
          we scale to length 1. If <M>{"w \\perp u"}</M> then{" "}
          <M>{"\\langle Tw, u \\rangle = \\langle w, Tu \\rangle = \\lambda \\langle w, u \\rangle = 0"}</M>, so{" "}
          <M>{"u^\\perp"}</M> is invariant, and <M>{"T"}</M> restricted to it is still self-adjoint. By induction on dimension,{" "}
          <M>{"u^\\perp"}</M> has an orthonormal basis of eigenvectors; add <M>{"u"}</M>.
        </p>
      </Proof>

      <Definition title="normal operator">
        <p>
          An operator is <strong>normal</strong> if <M>{"TT^* = T^*T"}</M>. Every self-adjoint operator is normal, and so is
          every rotation.
        </p>
      </Definition>

      <Theorem title="the complex spectral theorem">
        <p>
          On a finite-dimensional complex inner product space, <M>{"T"}</M> has an orthonormal basis of eigenvectors exactly
          when <M>{"T"}</M> is normal.
        </p>
      </Theorem>

      <Proof>
        <p>
          By Schur&rsquo;s theorem, Gram-Schmidt applied to the basis from the lesson on upper-triangular matrices gives an
          orthonormal basis in which <M>{"T"}</M> is upper-triangular. For a normal operator, compare{" "}
          <M>{"\\|Te_1\\|^2"}</M>, the squared length of the first column, with <M>{"\\|T^*e_1\\|^2"}</M>, the squared length
          of the first row. Normality makes them equal, so the first row has zeros off the diagonal. Repeat down the rows: the
          matrix is diagonal.
        </p>
      </Proof>

      <Example title="a symmetric matrix">
        <p>
          The matrix <M>{"\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}"}</M> has eigenvalues 3 and 1, with unit
          eigenvectors <M>{"\\tfrac{1}{\\sqrt2}(1, 1)"}</M> and <M>{"\\tfrac{1}{\\sqrt2}(1, -1)"}</M>, which are perpendicular.
          So the operator stretches by 3 along one diagonal and leaves the other alone.
        </p>
      </Example>

      <Example title="a rotation">
        <p>
          Rotation by a right angle, <M>{"\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}"}</M>, has no real eigenvalues,
          so the real theorem says nothing. It is normal, so over <M>{"\\mathbb{C}"}</M> it has the orthonormal eigenvectors{" "}
          <M>{"\\tfrac{1}{\\sqrt2}(1, -i)"}</M> and <M>{"\\tfrac{1}{\\sqrt2}(1, i)"}</M>, with eigenvalues <M>{"i"}</M> and{" "}
          <M>{"-i"}</M>.
        </p>
      </Example>

      <Remark title="principal axes">
        <p>
          A self-adjoint operator is a sum <M>{"\\sum \\lambda_k P_k"}</M> of eigenvalues times orthogonal projections onto
          perpendicular eigenspaces. This is why every quadric surface has perpendicular principal axes, why a vibrating
          system has independent normal modes, and why a covariance matrix has principal components.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which real matrices are guaranteed an orthonormal basis of eigenvectors of ℝ²? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["[3, 1; 1, 5]", "[1, 1; 0, 1]", "[0, 2; 2, 0]", "[0, −1; 1, 0]"],
        correct: [0, 2],
      },
    },
    {
      key: "big",
      rung: "check",
      prompt: <p>What is the larger eigenvalue of [2, 1; 1, 2]?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "swap",
      rung: "apply",
      prompt: <p>The matrix [0, 1; 1, 0] swaps coordinates. What is the product of its two eigenvalues?</p>,
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "normal",
      rung: "apply",
      prompt: <p>Is the shear [1, 1; 0, 1] normal?</p>,
      answer: {
        kind: "choice",
        options: ["Yes, since it is upper-triangular.", "No: TT* and T*T differ, so it has no orthonormal eigenbasis.", "Yes, since its eigenvalues are real.", "It depends on the field."],
        correct: [1],
      },
    },
    {
      key: "eig",
      rung: "apply",
      prompt: <p>What is the larger eigenvalue of [1, 2; 2, −2]?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that eigenvectors of a self-adjoint operator with different eigenvalues are orthogonal.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes Tu = λu and Tw = μw with λ ≠ μ, both real.",
          "Computes λ⟨u, w⟩ = ⟨Tu, w⟩ = ⟨u, Tw⟩ = μ⟨u, w⟩.",
          "Concludes (λ − μ)⟨u, w⟩ = 0, so ⟨u, w⟩ = 0.",
        ],
      },
    },
    {
      key: "axes",
      rung: "stretch",
      prompt: <p>The curve x² + xy + y² = 1 is an ellipse. Use the spectral theorem to find the directions of its axes and say which is longer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the form as ⟨Tv, v⟩ with T = [1, 1/2; 1/2, 1].",
          "Finds eigenvalues 3/2 along (1, 1) and 1/2 along (1, −1).",
          "Concludes the axes lie along the diagonals, with the longer one along (1, −1). Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the real and complex spectral theorems, why a self-adjoint operator has an eigenvalue and an invariant orthogonal complement, what a normal operator is, and an example of each theorem.",

  glimpse: (
    <p>
      The next lesson studies positive operators, the self-adjoint operators whose eigenvalues are all at least 0. Functional
      analysis extends the spectral theorem to compact operators, and numerical analysis computes eigenvalues with it.
    </p>
  ),
};
