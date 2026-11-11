import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SvdViz } from "@/components/viz/SvdViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.8.3",
  minutes: 85,
  links: {
    revisits: ["m3.8.2", "m3.7.4", "m3.4.5"],
    foreshadows: ["m19.5.2", "m23.5.2", "m18.6.2"],
  },

  puzzle: (
    <>
      <p>
        Only some square matrices can be diagonalised, and rectangular matrices have no eigenvalues at all. Yet a
        photograph is a rectangular matrix of brightness values, and it can be compressed to a fraction of its size by
        keeping just a few numbers that measure how important each layer of the picture is. What are those numbers, and why
        does every matrix, of any shape, have them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Change the entries of A. However you set them, A sends the dashed unit circle to an ellipse, and two perpendicular
        directions on the circle go to the two perpendicular axes of the ellipse.
      </p>
      <SvdViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the singular value decomposition">
        <p>Every m by n matrix A of rank r can be factored as</p>
        <MD>{"A = U\\Sigma V^{\\mathsf T},"}</MD>
        <p>
          with U (m by m) and V (n by n) orthogonal, and Σ (m by n) zero except for the{" "}
          <strong>singular values</strong> <M>{"\\sigma_1 \\ge \\sigma_2 \\ge \\dots \\ge \\sigma_r > 0"}</M> on its
          diagonal. Column by column, <M>{"Av_i = \\sigma_iu_i"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          <M>{"A^{\\mathsf T}A"}</M> is symmetric and positive semidefinite, so it has orthonormal eigenvectors{" "}
          <M>{"v_1, \\dots, v_n"}</M> with eigenvalues <M>{"\\lambda_i \\ge 0"}</M>; exactly r are positive, since{" "}
          <M>{"A^{\\mathsf T}A"}</M> has the same rank as A. Put <M>{"\\sigma_i = \\sqrt{\\lambda_i}"}</M> and{" "}
          <M>{"u_i = Av_i/\\sigma_i"}</M> for i ≤ r. These are orthonormal:
        </p>
        <MD>{"u_i^{\\mathsf T}u_j = \\frac{v_i^{\\mathsf T}A^{\\mathsf T}Av_j}{\\sigma_i\\sigma_j} = \\frac{\\sigma_j^2\\,v_i^{\\mathsf T}v_j}{\\sigma_i\\sigma_j},"}</MD>
        <p>
          which is 1 if i = j and 0 otherwise. Extend the u&rsquo;s to an orthonormal basis of{" "}
          <M>{"\\mathbb{R}^m"}</M>. Then <M>{"AV = U\\Sigma"}</M>, and multiplying by <M>{"V^{\\mathsf T}"}</M> gives the
          theorem.
        </p>
      </Proof>

      <Example title="a 2 by 2 example">
        <p>
          For <M>{"A = \\begin{bmatrix} 3 & 0 \\\\ 4 & 5 \\end{bmatrix}"}</M>,{" "}
          <M>{"A^{\\mathsf T}A = \\begin{bmatrix} 25 & 20 \\\\ 20 & 25 \\end{bmatrix}"}</M>, with eigenvalues 45 and 5 and
          eigenvectors along (1, 1) and (−1, 1). So <M>{"\\sigma_1 = \\sqrt{45}"}</M> and <M>{"\\sigma_2 = \\sqrt5"}</M>.
          Their product is 15 = |det A|, as it must be, since U and V do not change areas.
        </p>
      </Example>

      <Definition title="the geometry, and a sum of layers">
        <p>
          Read from right to left, <M>{"U\\Sigma V^{\\mathsf T}"}</M> rotates (or reflects), stretches along the axes by the
          singular values, and rotates again. Multiplying out column by row,
        </p>
        <MD>{"A = \\sigma_1u_1v_1^{\\mathsf T} + \\sigma_2u_2v_2^{\\mathsf T} + \\dots + \\sigma_ru_rv_r^{\\mathsf T},"}</MD>
        <p>
          a sum of rank-one layers in order of importance. The columns <M>{"v_1, \\dots, v_r"}</M> span the row space,{" "}
          <M>{"u_1, \\dots, u_r"}</M> the column space, and the remaining columns of V and U the null space and left null
          space: the four fundamental subspaces, each with an orthonormal basis.
        </p>
      </Definition>

      <Remark title="why it matters">
        <p>
          The Eckart–Young theorem says that keeping the first k layers gives the closest matrix of rank k to A. This is
          how images are compressed and how principal component analysis finds the main directions of variation in data.
          The ratio <M>{"\\sigma_1/\\sigma_r"}</M>, the condition number, measures how sensitive Ax = b is to small errors.
          For a symmetric positive definite matrix the SVD is the spectral decomposition, but for every other matrix it is
          the right replacement for eigenvalues.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>The singular values of A are</p>,
      answer: {
        kind: "choice",
        options: [
          "the eigenvalues of A",
          "the square roots of the eigenvalues of AᵀA",
          "the diagonal entries of A",
          "the pivots of A",
        ],
        correct: [1],
      },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which matrices have a singular value decomposition?</p>,
      answer: {
        kind: "choice",
        options: ["Only symmetric matrices.", "Only invertible square matrices.", "Only diagonalisable matrices.", "Every matrix."],
        correct: [3],
      },
    },
    {
      key: "diag",
      rung: "apply",
      prompt: <p>What is the smaller singular value of <M>{"\\begin{bmatrix} 3 & 0 \\\\ 0 & -2 \\end{bmatrix}"}</M>?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "product",
      rung: "apply",
      prompt: (
        <p>
          What is <M>{"\\sigma_1\\sigma_2"}</M> for <M>{"A = \\begin{bmatrix} 3 & 0 \\\\ 4 & 5 \\end{bmatrix}"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 15 },
    },
    {
      key: "rank",
      rung: "apply",
      prompt: <p>A 3 by 4 matrix has singular values 4, 1 and 0. What is its rank?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "orth",
      rung: "prove",
      prompt: (
        <p>
          Let <M>{"v_1, \\dots, v_r"}</M> be orthonormal eigenvectors of <M>{"A^{\\mathsf T}A"}</M> with positive
          eigenvalues <M>{"\\sigma_i^2"}</M>. Prove that the vectors <M>{"u_i = Av_i/\\sigma_i"}</M> are orthonormal, and
          that <M>{"AA^{\\mathsf T}u_i = \\sigma_i^2u_i"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes uᵢᵀuⱼ = vᵢᵀAᵀAvⱼ/(σᵢσⱼ) = σⱼ²vᵢᵀvⱼ/(σᵢσⱼ), which is 1 when i = j and 0 otherwise.",
          "Computes AAᵀuᵢ = AAᵀAvᵢ/σᵢ = A(σᵢ²vᵢ)/σᵢ = σᵢ²uᵢ.",
          "Presents the steps clearly. Small slips do not matter if the idea is right.",
        ],
      },
    },
    {
      key: "compress",
      rung: "stretch",
      prompt: (
        <p>
          A greyscale image is a 1000 by 1000 matrix. Explain how keeping the first 20 terms of its SVD compresses it, how
          many numbers must be stored, and why the result is still a good picture when the singular values fall quickly.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that the image is approximated by the sum of the first 20 layers σᵢuᵢvᵢᵀ.",
          "Counts the storage: 20 × (1000 + 1000 + 1) = 40,020 numbers instead of 1,000,000.",
          "Explains that the discarded layers carry little because their singular values are small, mentioning Eckart–Young if possible. A reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the singular value decomposition A = UΣVᵀ says, how to find it from AᵀA, the picture of the unit circle going to an ellipse, and why keeping the largest singular values compresses data.",

  glimpse: (
    <p>
      This completes Linear Algebra I. Numerical Analysis computes the SVD in practice, Functional Analysis extends it to
      compact operators, and Mathematical Statistics uses it in regression and principal components.
    </p>
  ),
};
