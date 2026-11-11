import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DetRowOpsViz } from "@/components/viz/DetRowOpsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.6.1",
  minutes: 80,
  links: {
    revisits: ["m3.2.1", "m3.3.3", "m3.3.4"],
    foreshadows: ["m3.6.2", "m3.6.3", "m3.7.1"],
  },

  puzzle: (
    <>
      <p>
        A square matrix is invertible or it is not. Elimination tells you which, but only at the end of a long
        calculation. Is there a single number, computed from the entries, that is zero exactly when the matrix is
        singular? For 2 by 2 matrices you may know one: ad − bc. What should replace it for larger matrices, and what
        properties should it have?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Apply row operations to the matrix and watch its determinant. Swapping rows flips the sign; scaling a row scales
        the determinant; adding a multiple of one row to another changes nothing. Reduce the matrix to upper triangular
        form and read off the determinant as the product of the diagonal.
      </p>
      <DetRowOpsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the three defining properties">
        <p>The determinant of an n by n matrix, det A or |A|, is the unique function of the rows satisfying:</p>
        <ol>
          <li><M>{"\\det I = 1"}</M>;</li>
          <li>exchanging two rows reverses the sign of the determinant;</li>
          <li>
            it is linear in each row separately, the others fixed: multiplying a row by t multiplies det by t, and if row 1
            is <M>{"u + v"}</M>, then det splits as the sum of the determinants with row 1 equal to u and to v.
          </li>
        </ol>
        <p>For 2 by 2 matrices these give</p>
        <MD>{"\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc."}</MD>
      </Definition>

      <Theorem title="consequences">
        <ol>
          <li value={4}>If two rows are equal, det A = 0.</li>
          <li>Subtracting a multiple of one row from another leaves det A unchanged.</li>
          <li>A matrix with a row of zeros has det A = 0.</li>
          <li>If A is triangular, det A is the product of its diagonal entries.</li>
          <li>det A = 0 exactly when A is singular.</li>
          <li><M>{"\\det AB = (\\det A)(\\det B)"}</M>.</li>
          <li><M>{"\\det A^{\\mathsf T} = \\det A"}</M>.</li>
        </ol>
      </Theorem>
      <Proof>
        <p>
          (4) Swapping the two equal rows leaves the matrix unchanged but reverses the sign, so det A = −det A = 0. (5) By
          linearity in row i, <M>{"\\det(\\dots, r_i - \\ell r_j, \\dots) = \\det(\\dots, r_i, \\dots) - \\ell\\det(\\dots, r_j, \\dots)"}</M>,
          and the second matrix has two equal rows. (6) Multiply the zero row by 2: the matrix is unchanged, but det doubles,
          so det = 0.
        </p>
        <p>
          (7) If no diagonal entry is zero, rule 5 clears the entries off the diagonal without changing det, leaving a
          diagonal matrix, whose determinant is <M>{"d_1 \\cdots d_n \\det I"}</M> by linearity. If some diagonal entry is
          zero, elimination produces a zero row. (8) Elimination reduces A to U with det A = ±det U. A is invertible exactly
          when U has n non-zero pivots, that is, when det U ≠ 0.
        </p>
      </Proof>

      <Example title="computing by elimination">
        <p>The matrix in the visualisation reduces, using only rule 5, to</p>
        <MD>{"\\begin{bmatrix} 2 & 1 & 1 \\\\ 4 & -6 & 0 \\\\ -2 & 7 & 2 \\end{bmatrix} \\to \\begin{bmatrix} 2 & 1 & 1 \\\\ 0 & -8 & -2 \\\\ 0 & 0 & 1 \\end{bmatrix},"}</MD>
        <p>
          so det A = 2 · (−8) · 1 = −16. If row exchanges are needed, as in PA = LU, each one contributes a factor −1:
          det A = ± (product of the pivots). This is how computers find determinants.
        </p>
      </Example>

      <Remark title="the product rule">
        <p>
          For fixed B with det B ≠ 0, the function <M>{"D(A) = \\det(AB)/\\det B"}</M> satisfies the three defining
          properties, so it must equal det A. If det B = 0, B is singular, so AB is singular and both sides are 0. Two quick
          consequences: <M>{"\\det A^{-1} = 1/\\det A"}</M>, and for an orthogonal matrix,{" "}
          <M>{"\\det Q = \\pm 1"}</M>, since <M>{"(\\det Q)^2 = \\det Q^{\\mathsf T}Q = 1"}</M>.
        </p>
      </Remark>

      <Remark title="a warning">
        <p>
          The determinant is not linear in the whole matrix: <M>{"\\det(A + B) \\ne \\det A + \\det B"}</M> in general, and{" "}
          <M>{"\\det 2A = 2^n \\det A"}</M>, since each of the n rows is doubled.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "two",
      rung: "check",
      prompt: <p>What is the determinant of <M>{"\\begin{bmatrix} 3 & 5 \\\\ 2 & 4 \\end{bmatrix}"}</M>?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "tri",
      rung: "check",
      prompt: <p>A is upper triangular with diagonal entries 2, −1, 3 and 5. What is det A?</p>,
      answer: { kind: "numeric", value: -30 },
    },
    {
      key: "scale",
      rung: "apply",
      prompt: <p>A is 3 by 3 with det A = 4. What is det(2A)?</p>,
      answer: { kind: "numeric", value: 32 },
    },
    {
      key: "prod",
      rung: "apply",
      prompt: <p>det A = 3 and det B = −2, both 4 by 4. What is <M>{"\\det(A^{\\mathsf T}B^{-1})"}</M>?</p>,
      answer: { kind: "numeric", value: -1.5 },
    },
    {
      key: "elim",
      rung: "apply",
      prompt: (
        <p>
          Find the determinant of <M>{"\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 3 & 8 & 14 \\end{bmatrix}"}</M> by
          elimination.
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "equal",
      rung: "prove",
      prompt: (
        <p>
          Using only the three defining properties, prove that a matrix with two equal rows has determinant 0, and that
          adding a multiple of one row to another does not change the determinant.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "For equal rows: exchanging them leaves the matrix unchanged but negates the determinant, so det = −det and det = 0.",
          "For the row operation: uses linearity in the changed row to split the determinant into the original plus a multiple of a determinant with two equal rows.",
          "Concludes the second term is zero. A clear argument earns full credit.",
        ],
      },
    },
    {
      key: "odd",
      rung: "stretch",
      prompt: (
        <p>
          A matrix is skew-symmetric if <M>{"A^{\\mathsf T} = -A"}</M>. Prove that every 3 by 3 skew-symmetric matrix is
          singular. Does the same hold for 2 by 2?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes det A = det Aᵀ = det(−A) = (−1)³ det A = −det A, so det A = 0.",
          "Concludes A is singular.",
          "For 2 by 2, gives a counterexample such as [0 1; −1 0] with determinant 1, noting that (−1)² = 1. Any sound reasoning earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the three properties that define the determinant, how they imply that row operations of the third kind leave it unchanged, why the determinant of a triangular matrix is the product of its diagonal, and why det A = 0 exactly when A is singular.",

  glimpse: (
    <p>
      The next lesson gives explicit formulas, cofactor expansions and Cramer&rsquo;s rule. After that, the determinant is
      seen as a volume, and in the Eigenvalues chapter the equation det(A − λI) = 0 finds eigenvalues.
    </p>
  ),
};
