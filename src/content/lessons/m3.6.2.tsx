import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CofactorViz } from "@/components/viz/CofactorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.6.2",
  minutes: 80,
  links: {
    revisits: ["m3.6.1", "m3.3.2", "m3.3.4"],
    foreshadows: ["m3.6.3", "m3.7.1", "m4.1.1"],
  },

  puzzle: (
    <>
      <p>
        Elimination computes a determinant quickly, but it gives no formula: you cannot see from it how det A depends on a
        single entry. Is there an explicit formula in terms of the entries, the way ad − bc is for 2 by 2? And if so, can
        it give explicit formulas for the inverse matrix and for the solution of Ax = b?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Expand a 3 by 3 determinant along any row or column. Each entry is multiplied by its cofactor: the determinant of
        what is left when its row and column are struck out, with a sign from the chessboard pattern. Try all six lines:
        the total never changes.
      </p>
      <CofactorViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the big formula">
        <p>
          The determinant is a sum of n! terms, one for each permutation σ of the columns, each a product of one entry from
          every row and every column:
        </p>
        <MD>{"\\det A = \\sum_{\\sigma} \\operatorname{sign}(\\sigma)\\, a_{1\\sigma(1)}a_{2\\sigma(2)}\\cdots a_{n\\sigma(n)}."}</MD>
        <p>
          The sign is +1 if the permutation is even and −1 if it is odd. For n = 3 there are six terms:
        </p>
        <MD>{"a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} - a_{13}a_{22}a_{31}."}</MD>
      </Theorem>
      <Proof>
        <p>
          Write each row as a combination of the standard rows <M>{"e_j"}</M> and expand by linearity in every row. This
          gives <M>{"n^n"}</M> terms, each a product of entries times the determinant of a matrix whose rows are standard
          rows. If two of these rows repeat, that determinant is 0. Otherwise it is a permutation matrix, whose determinant is
          ±1 according to the parity of the number of row exchanges needed to reach I.
        </p>
      </Proof>

      <Definition title="cofactors">
        <p>
          The <strong>minor</strong> <M>{"M_{ij}"}</M> is the determinant of the matrix with row i and column j removed.
          The <strong>cofactor</strong> is <M>{"C_{ij} = (-1)^{i+j}M_{ij}"}</M>. Grouping the terms of the big formula by
          the entry they use from row i gives the <strong>cofactor expansion</strong>:
        </p>
        <MD>{"\\det A = a_{i1}C_{i1} + a_{i2}C_{i2} + \\dots + a_{in}C_{in},"}</MD>
        <p>and the same holds down any column, since <M>{"\\det A^{\\mathsf T} = \\det A"}</M>.</p>
      </Definition>

      <Theorem title="the inverse from cofactors">
        <p>
          Let C be the matrix of cofactors. Then <M>{"AC^{\\mathsf T} = (\\det A)I"}</M>, so when det A ≠ 0,
        </p>
        <MD>{"A^{-1} = \\frac{C^{\\mathsf T}}{\\det A}."}</MD>
      </Theorem>
      <Proof>
        <p>
          Entry (i, i) of <M>{"AC^{\\mathsf T}"}</M> is <M>{"\\sum_j a_{ij}C_{ij}"}</M>, the expansion of det A along row i.
          Entry (i, k) with k ≠ i is <M>{"\\sum_j a_{ij}C_{kj}"}</M>: the expansion along row k of the matrix in which row k
          has been replaced by row i. That matrix has two equal rows, so this entry is 0.
        </p>
      </Proof>

      <Example title="2 by 2">
        <p>
          For <M>{"A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}"}</M> the cofactors are{" "}
          <M>{"C_{11} = d, C_{12} = -c, C_{21} = -b, C_{22} = a"}</M>, so
        </p>
        <MD>{"A^{-1} = \\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix},"}</MD>
        <p>the familiar formula.</p>
      </Example>

      <Theorem title="Cramer's rule">
        <p>
          If det A ≠ 0, the solution of Ax = b is <M>{"x_j = \\det B_j / \\det A"}</M>, where <M>{"B_j"}</M> is A with
          column j replaced by b.
        </p>
      </Theorem>
      <Proof>
        <p>
          Replace column j of the identity by x. Multiplying by A gives A times that matrix equals <M>{"B_j"}</M>, since Ax =
          b. The determinant of the modified identity is <M>{"x_j"}</M>, by expanding along row j. Take determinants:{" "}
          <M>{"(\\det A)x_j = \\det B_j"}</M>.
        </p>
      </Proof>

      <Remark title="formulas versus algorithms">
        <p>
          The big formula has n! terms: for n = 20 that is more than 2 × 10¹⁸. Cofactor expansion is no cheaper unless the
          matrix has many zeros, and Cramer&rsquo;s rule needs n + 1 determinants. For computation, elimination wins by far,
          with about n³/3 operations. The formulas earn their place in theory: they show that det A, A⁻¹ and the solution
          depend smoothly on the entries, and they give the eigenvalue equation its polynomial form.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "terms",
      rung: "check",
      prompt: <p>How many terms does the big formula have for a 4 by 4 determinant?</p>,
      answer: { kind: "numeric", value: 24 },
    },
    {
      key: "sign",
      rung: "check",
      prompt: <p>What is the sign attached to the minor M₂₃ in the cofactor C₂₃?</p>,
      answer: { kind: "choice", options: ["+", "−"], correct: [1] },
    },
    {
      key: "expand",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\det\\begin{bmatrix} 2 & 0 & 1 \\\\ 3 & 0 & 4 \\\\ 5 & 6 & 7 \\end{bmatrix}"}</M>, expanding down column 2.
        </p>
      ),
      answer: { kind: "numeric", value: -30 },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"A = \\begin{bmatrix} 4 & 7 \\\\ 2 & 6 \\end{bmatrix}"}</M>, what is the entry in row 1, column 2 of{" "}
          <M>{"A^{-1}"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: -0.7 },
    },
    {
      key: "cramer",
      rung: "apply",
      prompt: <p>Use Cramer&rsquo;s rule to find y in the system 2x + y = 5, x + 3y = 10.</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "three",
      rung: "prove",
      prompt: (
        <p>
          Derive the six-term formula for a 3 by 3 determinant by cofactor expansion along the first row, and check that
          its six terms correspond to the six permutations of the columns, with the right signs.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Expands as a₁₁(a₂₂a₃₃ − a₂₃a₃₂) − a₁₂(a₂₁a₃₃ − a₂₃a₃₁) + a₁₃(a₂₁a₃₂ − a₂₂a₃₁).",
          "Matches each of the six products with a permutation of (1, 2, 3).",
          "Checks that even permutations get + and odd ones −. A clear account earns full credit.",
        ],
      },
    },
    {
      key: "integer",
      rung: "stretch",
      prompt: (
        <p>
          A has integer entries and det A = ±1. Prove that <M>{"A^{-1}"}</M> has integer entries. Conversely, if A and{" "}
          <M>{"A^{-1}"}</M> both have integer entries, show that det A = ±1.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that cofactors of an integer matrix are integers, so Cᵀ/det A is an integer matrix when det A = ±1.",
          "For the converse, uses det A · det A⁻¹ = 1 with both determinants integers.",
          "Concludes both must be ±1. A clear argument earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the big formula for the determinant, how cofactor expansion works along any row or column, how cofactors give the inverse, and Cramer's rule, and why none of these is used for large computations.",

  glimpse: (
    <p>
      The next lesson shows what the determinant measures: volume. In the Eigenvalues chapter, the big formula shows that
      det(A − λI) is a polynomial of degree n. Counting the n! permutations is a first exercise in Discrete Mathematics.
    </p>
  ),
};
