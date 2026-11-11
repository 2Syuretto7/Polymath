import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { QuadFormViz } from "@/components/viz/QuadFormViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.7.4",
  minutes: 80,
  links: {
    revisits: ["m3.7.3", "m3.6.1", "m3.3.3"],
    foreshadows: ["m3.8.3", "m5.1.1", "m18.1.1"],
  },

  puzzle: (
    <>
      <p>
        At the bottom of a bowl, every direction leads upwards. At the centre of a saddle, some directions lead up and
        others down. Near a critical point, a smooth function of two variables looks like{" "}
        <M>{"ax^2 + 2bxy + cy^2"}</M>. How can you tell, from a, b and c, whether that is a bowl, a saddle or an upside-down
        bowl? The answer turns out to be a question about the eigenvalues of a symmetric matrix, with three quick tests that
        always agree.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The symmetric matrix <M>{"S = \\begin{bmatrix} a & b \\\\ b & c \\end{bmatrix}"}</M> gives the quadratic form{" "}
        <M>{"x^{\\mathsf T}Sx = ax^2 + 2bxy + cy^2"}</M>. The solid curve is where it equals 1, the dashed curve where it
        equals −1. Change the entries and compare the three tests in the table.
      </p>
      <QuadFormViz />
    </>
  ),

  theory: (
    <>
      <Definition title="positive definite">
        <p>
          A symmetric matrix S is <strong>positive definite</strong> if <M>{"x^{\\mathsf T}Sx > 0"}</M> for every non-zero
          vector x, and <strong>positive semidefinite</strong> if <M>{"x^{\\mathsf T}Sx \\ge 0"}</M> for every x.
        </p>
      </Definition>

      <Theorem title="equivalent tests">
        <p>For a symmetric matrix S, the following are equivalent:</p>
        <ol>
          <li>S is positive definite;</li>
          <li>all eigenvalues of S are positive;</li>
          <li>all pivots of S, in elimination without row exchanges, are positive;</li>
          <li>all leading determinants, of the upper left 1 by 1, 2 by 2, …, n by n submatrices, are positive;</li>
          <li><M>{"S = A^{\\mathsf T}A"}</M> for some matrix A with independent columns.</li>
        </ol>
      </Theorem>
      <Proof>
        <p>
          (1) ⇔ (2): write <M>{"x = Qy"}</M> using the spectral theorem. Then{" "}
          <M>{"x^{\\mathsf T}Sx = y^{\\mathsf T}\\Lambda y = \\lambda_1y_1^2 + \\dots + \\lambda_ny_n^2"}</M>, which is positive
          for every y ≠ 0 exactly when every <M>{"\\lambda_i > 0"}</M>.
        </p>
        <p>
          (1) ⇒ (5) via (2): take <M>{"A = \\sqrt{\\Lambda}Q^{\\mathsf T}"}</M>. (5) ⇒ (1):{" "}
          <M>{"x^{\\mathsf T}A^{\\mathsf T}Ax = \\|Ax\\|^2"}</M>, which is positive when x ≠ 0 because A has independent
          columns. The pivot and determinant tests are linked because the k-th pivot is the ratio of the k-th and (k−1)-th
          leading determinants; the 2 by 2 case is worked out below.
        </p>
      </Proof>

      <Example title="the 2 by 2 case">
        <p>Completing the square,</p>
        <MD>{"ax^2 + 2bxy + cy^2 = a\\left(x + \\tfrac{b}{a}y\\right)^2 + \\frac{ac - b^2}{a}y^2."}</MD>
        <p>
          The coefficients are the pivots a and <M>{"(ac - b^2)/a"}</M>. The form is positive for all (x, y) ≠ 0 exactly
          when a &gt; 0 and <M>{"ac - b^2 > 0"}</M>. For example <M>{"2x^2 + 2xy + 2y^2"}</M> is positive definite, while{" "}
          <M>{"x^2 + 4xy + y^2"}</M> is not: at (1, −1) it equals −2.
        </p>
      </Example>

      <Remark title="indefinite and semidefinite">
        <p>
          If S has eigenvalues of both signs, it is <strong>indefinite</strong>: the level sets are hyperbolas and the
          graph is a saddle. If its eigenvalues are positive and zero, it is semidefinite, and the bowl has a flat valley
          along the null space. Every <M>{"A^{\\mathsf T}A"}</M> is at least semidefinite, which is why least squares always
          has a minimum.
        </p>
      </Remark>

      <Remark title="the second derivative test">
        <p>
          At a critical point of f(x, y), the matrix of second derivatives, the Hessian, plays the role of S. If it is
          positive definite, the point is a minimum; negative definite, a maximum; indefinite, a saddle. In optimisation,
          physics and statistics, positive definite matrices measure energy, curvature and variance, quantities that cannot
          be negative.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which condition defines a positive definite symmetric matrix S?</p>,
      answer: {
        kind: "choice",
        options: [
          "All entries of S are positive.",
          "xᵀSx > 0 for every non-zero vector x.",
          "det S > 0.",
          "S is invertible.",
        ],
        correct: [1],
      },
    },
    {
      key: "test",
      rung: "check",
      prompt: <p>Which matrices are positive definite? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["[2 1; 1 2]", "[1 2; 2 1]", "[−1 0; 0 −3]", "[3 0; 0 1]"],
        correct: [0, 3],
      },
    },
    {
      key: "b",
      rung: "apply",
      prompt: (
        <p>
          <M>{"\\begin{bmatrix} 4 & b \\\\ b & 9 \\end{bmatrix}"}</M> is positive definite exactly when |b| is less than
          what number?
        </p>
      ),
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "pivot",
      rung: "apply",
      prompt: (
        <p>
          What is the second pivot of <M>{"\\begin{bmatrix} 2 & 1 \\\\ 1 & 3 \\end{bmatrix}"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 2.5 },
    },
    {
      key: "saddle",
      rung: "apply",
      prompt: (
        <p>
          The function <M>{"f(x, y) = x^2 + 6xy + y^2"}</M> has a critical point at the origin. What kind is it?
        </p>
      ),
      answer: { kind: "choice", options: ["a minimum", "a maximum", "a saddle point"], correct: [2] },
    },
    {
      key: "ata",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"A^{\\mathsf T}A"}</M> is positive semidefinite for every matrix A, and that it is positive
          definite exactly when the columns of A are independent.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Shows AᵀA is symmetric.",
          "Computes xᵀAᵀAx = ‖Ax‖² ≥ 0.",
          "Argues ‖Ax‖² = 0 only when Ax = 0, which forces x = 0 exactly when the columns are independent. A clear proof earns full credit.",
        ],
      },
    },
    {
      key: "sum",
      rung: "stretch",
      prompt: (
        <p>
          Prove that the sum of two positive definite matrices is positive definite, and that the inverse of a positive
          definite matrix is positive definite. Is the product of two positive definite matrices always positive definite?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "For the sum, uses xᵀ(S + T)x = xᵀSx + xᵀTx > 0.",
          "For the inverse, notes S⁻¹ is symmetric with eigenvalues 1/λᵢ > 0.",
          "For the product, observes it need not even be symmetric, so it need not be positive definite, possibly with an example. Any sound answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a positive definite matrix is, the tests by eigenvalues, pivots, leading determinants and AᵀA, why they agree in the 2 by 2 case by completing the square, and how this decides between a minimum and a saddle.",

  glimpse: (
    <p>
      The singular value decomposition, in the last chapter, is built from the positive semidefinite matrices AᵀA and AAᵀ.
      Multivariable Calculus uses the Hessian test, and Mathematical Statistics relies on covariance matrices, which are
      always positive semidefinite.
    </p>
  ),
};
