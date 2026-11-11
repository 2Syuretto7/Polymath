import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { EigenViz } from "@/components/viz/EigenViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.7.1",
  minutes: 80,
  links: {
    revisits: ["m3.6.1", "m3.6.2", "m3.4.2"],
    foreshadows: ["m3.7.2", "m3.7.3", "m10.1.1"],
  },

  puzzle: (
    <>
      <p>
        A matrix moves almost every vector off its line: Ax points in a new direction. But a few special vectors are only
        stretched, shrunk or reversed. Along those directions, a complicated matrix behaves like a single number. How do
        you find these directions, and how many of them can there be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Turn the unit vector x and watch Ax. When the two arrows line up, x is an eigenvector and the stretching factor is
        its eigenvalue. Try each matrix: some have two eigenvector directions, one has a single direction, and the rotation
        has none at all.
      </p>
      <EigenViz />
    </>
  ),

  theory: (
    <>
      <Definition title="eigenvalues and eigenvectors">
        <p>
          A non-zero vector x is an <strong>eigenvector</strong> of a square matrix A, with <strong>eigenvalue</strong> λ, if
        </p>
        <MD>{"Ax = \\lambda x."}</MD>
        <p>
          The eigenvectors for λ, together with 0, form the null space of <M>{"A - \\lambda I"}</M>, called the{" "}
          <strong>eigenspace</strong>.
        </p>
      </Definition>

      <Theorem title="the characteristic equation">
        <p>λ is an eigenvalue of A exactly when</p>
        <MD>{"\\det(A - \\lambda I) = 0."}</MD>
      </Theorem>
      <Proof>
        <p>
          <M>{"Ax = \\lambda x"}</M> with x ≠ 0 says <M>{"(A - \\lambda I)x = 0"}</M> has a non-zero solution, which happens
          exactly when <M>{"A - \\lambda I"}</M> is singular, that is, when its determinant is zero.
        </p>
      </Proof>
      <p>
        By the big formula, <M>{"\\det(A - \\lambda I)"}</M> is a polynomial in λ of degree n, the{" "}
        <strong>characteristic polynomial</strong>. So an n by n matrix has n eigenvalues, counted with multiplicity, though
        some may be complex or repeated.
      </p>

      <Example title="a 2 by 2 example">
        <p>For <M>{"A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}"}</M>,</p>
        <MD>{"\\det\\begin{bmatrix} 2 - \\lambda & 1 \\\\ 1 & 2 - \\lambda \\end{bmatrix} = \\lambda^2 - 4\\lambda + 3 = (\\lambda - 1)(\\lambda - 3)."}</MD>
        <p>
          For λ = 3, <M>{"A - 3I = \\begin{bmatrix} -1 & 1 \\\\ 1 & -1 \\end{bmatrix}"}</M> has null space spanned by (1, 1).
          For λ = 1, <M>{"A - I"}</M> has null space spanned by (1, −1). These are the 45° and 135° directions in the
          visualisation.
        </p>
      </Example>

      <Theorem title="trace and determinant">
        <p>
          The sum of the eigenvalues equals the <strong>trace</strong>, the sum of the diagonal entries, and their product
          equals the determinant.
        </p>
      </Theorem>
      <Proof>
        <p>
          Factor the characteristic polynomial as <M>{"\\det(A - \\lambda I) = (\\lambda_1 - \\lambda)\\cdots(\\lambda_n - \\lambda)"}</M>.
          Putting λ = 0 gives <M>{"\\det A = \\lambda_1 \\cdots \\lambda_n"}</M>. The coefficient of{" "}
          <M>{"(-\\lambda)^{n-1}"}</M> is <M>{"\\lambda_1 + \\dots + \\lambda_n"}</M> on one side and, from the big
          formula, where only the product of the diagonal entries contributes, <M>{"a_{11} + \\dots + a_{nn}"}</M> on the other.
        </p>
      </Proof>

      <Remark title="useful facts">
        <ul>
          <li>The eigenvalues of a triangular matrix are its diagonal entries.</li>
          <li>A is singular exactly when 0 is an eigenvalue.</li>
          <li>
            If <M>{"Ax = \\lambda x"}</M>, then <M>{"A^kx = \\lambda^kx"}</M>, and <M>{"A^{-1}x = \\lambda^{-1}x"}</M> when A
            is invertible. The eigenvectors stay the same.
          </li>
          <li>
            A real matrix can have complex eigenvalues. A rotation of the plane through θ has eigenvalues{" "}
            <M>{"\\cos\\theta \\pm i\\sin\\theta"}</M>.
          </li>
          <li>Elimination changes eigenvalues: they are not read off from the pivots.</li>
        </ul>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "tri",
      rung: "check",
      prompt: <p>What are the eigenvalues of <M>{"\\begin{bmatrix} 4 & 7 \\\\ 0 & -1 \\end{bmatrix}"}</M>? Give the larger one.</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "zero",
      rung: "check",
      prompt: <p>A square matrix A has 0 as an eigenvalue. What follows?</p>,
      answer: {
        kind: "choice",
        options: ["A is singular.", "A is the zero matrix.", "A is symmetric.", "A has no eigenvectors."],
        correct: [0],
      },
    },
    {
      key: "char",
      rung: "apply",
      prompt: <p>Find the larger eigenvalue of <M>{"\\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}"}</M>.</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "trace",
      rung: "apply",
      prompt: <p>A 3 by 3 matrix has trace 6 and two of its eigenvalues are 1 and 2. What is its determinant?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "power",
      rung: "apply",
      prompt: <p>A has eigenvalue 2 with eigenvector x. What is the eigenvalue of <M>{"A^3 + A"}</M> for the same x?</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "transpose",
      rung: "prove",
      prompt: (
        <p>
          Prove that A and <M>{"A^{\\mathsf T}"}</M> have the same eigenvalues. Give a 2 by 2 example showing that their
          eigenvectors can be different.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses det(Aᵀ − λI) = det((A − λI)ᵀ) = det(A − λI), so the characteristic polynomials agree.",
          "Gives an example, such as A = [1 1; 0 2], whose eigenvector for λ = 2 is (1, 1) while Aᵀ has (0, 1).",
          "Checks the example. A clear answer earns full credit.",
        ],
      },
    },
    {
      key: "distinct",
      rung: "stretch",
      prompt: (
        <p>
          Prove that eigenvectors belonging to different eigenvalues are linearly independent. Start with two, and then
          explain how the argument extends.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "For two: from c₁x₁ + c₂x₂ = 0, applies A and subtracts λ₂ times the original to get c₁(λ₁ − λ₂)x₁ = 0, so c₁ = 0, then c₂ = 0.",
          "Describes the extension by induction, or by taking a shortest dependence relation and deriving a shorter one.",
          "Presents the steps clearly. A good sketch earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what eigenvalues and eigenvectors are, how det(A − λI) = 0 finds the eigenvalues, how to find the eigenvectors, and why the eigenvalues add up to the trace and multiply to the determinant.",

  glimpse: (
    <p>
      The next lesson uses eigenvectors as a basis to diagonalise a matrix and compute its powers. Symmetric matrices have
      especially well-behaved eigenvectors, and Ordinary Differential Equations solves linear systems with eigenvalues.
    </p>
  ),
};
