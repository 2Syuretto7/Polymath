import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PermutationViz } from "@/components/viz/PermutationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.3.4",
  minutes: 70,
  links: {
    revisits: ["m3.3.3", "m3.1.2", "m0.8.4"],
    foreshadows: ["m3.5.3", "m3.7.3", "m3.6.1"],
  },

  puzzle: (
    <>
      <p>
        Swapping two rows of a matrix is a row operation. Doing several swaps reorders the rows. Can every reordering be
        written as multiplication by a matrix, and if so, what is the inverse of that matrix? The answer turns out to be
        surprisingly cheap: you get it by flipping the matrix over its diagonal. Why should flipping have anything to do
        with undoing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Apply swaps to the identity matrix and you get a permutation matrix P. Multiplying any A on the left by P reorders
        the rows of A in the same way. Now look at the transpose of P, its mirror image across the diagonal: it sends every
        row back where it came from.
      </p>
      <PermutationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="transpose">
        <p>
          The <strong>transpose</strong> of an m by n matrix A is the n by m matrix <M>{"A^{\\mathsf T}"}</M> whose rows
          are the columns of A: <M>{"(A^{\\mathsf T})_{ij} = a_{ji}"}</M>. For column vectors x and y, the dot product
          is <M>{"x \\cdot y = x^{\\mathsf T} y"}</M>, a 1 by 1 matrix.
        </p>
      </Definition>

      <Theorem title="rules for transposes">
        <ul>
          <li><M>{"(A + B)^{\\mathsf T} = A^{\\mathsf T} + B^{\\mathsf T}"}</M> and <M>{"(A^{\\mathsf T})^{\\mathsf T} = A"}</M>.</li>
          <li><M>{"(AB)^{\\mathsf T} = B^{\\mathsf T}A^{\\mathsf T}"}</M>.</li>
          <li><M>{"(A^{-1})^{\\mathsf T} = (A^{\\mathsf T})^{-1}"}</M> for invertible A.</li>
        </ul>
      </Theorem>
      <Proof>
        <p>
          For the product rule, entry (i, j) of <M>{"(AB)^{\\mathsf T}"}</M> is entry (j, i) of AB, which is{" "}
          <M>{"\\sum_k a_{jk}b_{ki}"}</M>. Entry (i, j) of <M>{"B^{\\mathsf T}A^{\\mathsf T}"}</M> is{" "}
          <M>{"\\sum_k (B^{\\mathsf T})_{ik}(A^{\\mathsf T})_{kj} = \\sum_k b_{ki}a_{jk}"}</M>, the same. For the inverse
          rule, transpose <M>{"AA^{-1} = I"}</M> to get <M>{"(A^{-1})^{\\mathsf T}A^{\\mathsf T} = I"}</M>.
        </p>
      </Proof>

      <Theorem title="the transpose moves across a dot product">
        <p>
          <M>{"(Ax) \\cdot y = x \\cdot (A^{\\mathsf T}y)"}</M> for all x and y. Indeed both equal{" "}
          <M>{"x^{\\mathsf T}A^{\\mathsf T}y"}</M>. This is the deeper meaning of the transpose, and the reason it
          appears all through the rest of the course.
        </p>
      </Theorem>

      <Definition title="symmetric matrices">
        <p>
          A is <strong>symmetric</strong> if <M>{"A^{\\mathsf T} = A"}</M>, that is, <M>{"a_{ij} = a_{ji}"}</M>. For any
          matrix R, rectangular or not, <M>{"R^{\\mathsf T}R"}</M> is square and symmetric, since{" "}
          <M>{"(R^{\\mathsf T}R)^{\\mathsf T} = R^{\\mathsf T}(R^{\\mathsf T})^{\\mathsf T} = R^{\\mathsf T}R"}</M>. Its
          entries are the dot products of the columns of R with each other. These matrices are central to least squares
          and to the spectral theorem.
        </p>
      </Definition>

      <Definition title="permutation matrices">
        <p>
          A <strong>permutation matrix</strong> is the identity with its rows reordered. Each row and each column contains
          a single 1. PA is A with its rows reordered in the same way. There are <M>{"n!"}</M> permutation matrices of size
          n, one for each ordering of the rows.
        </p>
      </Definition>

      <Theorem title="the inverse of a permutation matrix is its transpose">
        <p><M>{"P^{-1} = P^{\\mathsf T}"}</M>.</p>
      </Theorem>
      <Proof>
        <p>
          Entry (i, j) of <M>{"P^{\\mathsf T}P"}</M> is the dot product of columns i and j of P. Each column has a single 1,
          and different columns have their 1s in different rows. So the dot product is 1 when i = j and 0 otherwise:{" "}
          <M>{"P^{\\mathsf T}P = I"}</M>.
        </p>
      </Proof>

      <Example title="PA = LU">
        <p>
          The matrix <M>{"A = \\begin{bmatrix} 0 & 2 \\\\ 3 & 4 \\end{bmatrix}"}</M> has a zero in the first pivot position.
          With <M>{"P = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}"}</M>,
        </p>
        <MD>{"PA = \\begin{bmatrix} 3 & 4 \\\\ 0 & 2 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}\\begin{bmatrix} 3 & 4 \\\\ 0 & 2 \\end{bmatrix}."}</MD>
        <p>
          In general, every invertible matrix has a factorisation <M>{"PA = LU"}</M>: do all the needed row swaps first,
          and elimination then runs without trouble.
        </p>
      </Example>

      <Remark title="even and odd">
        <p>
          A permutation can be reached by many different sequences of swaps, but the number of swaps is always even or
          always odd for a given permutation. This parity becomes the sign of the determinant: swapping two rows changes
          the sign of the determinant.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "tsize",
      rung: "check",
      prompt: <p>A is 2 by 5. How many rows does <M>{"A^{\\mathsf T}"}</M> have?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "count",
      rung: "check",
      prompt: <p>How many 4 by 4 permutation matrices are there?</p>,
      answer: { kind: "numeric", value: 24 },
    },
    {
      key: "sym",
      rung: "apply",
      prompt: <p>Which matrices are always symmetric? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["A + Aᵀ, for square A", "AᵀA, for any A", "AB, for symmetric A and B", "A − Aᵀ, for square A"],
        correct: [0, 1],
      },
    },
    {
      key: "rta",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"R = \\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\\\ 1 & 0 \\end{bmatrix}"}</M>. What is the entry in row 1, column
          2 of <M>{"R^{\\mathsf T}R"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "cycle",
      rung: "apply",
      prompt: (
        <p>
          P moves row 1 to row 2, row 2 to row 3, and row 3 to row 1. How many times must P be applied before every row is
          back in place, so that <M>{"P^k = I"}</M> for the first time?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "prodT",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"(ABC)^{\\mathsf T} = C^{\\mathsf T}B^{\\mathsf T}A^{\\mathsf T}"}</M>, and that if A is symmetric
          then <M>{"B^{\\mathsf T}AB"}</M> is symmetric for any B of compatible size.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Applies the two-factor rule twice, for example (ABC)ᵀ = Cᵀ(AB)ᵀ = CᵀBᵀAᵀ.",
          "Computes (BᵀAB)ᵀ = BᵀAᵀ(Bᵀ)ᵀ = BᵀAB, using Aᵀ = A.",
          "Presents both steps clearly. Brief algebra is enough.",
        ],
      },
    },
    {
      key: "skew",
      rung: "stretch",
      prompt: (
        <p>
          Show that every square matrix is the sum of a symmetric matrix and a matrix S with{" "}
          <M>{"S^{\\mathsf T} = -S"}</M>, and that this splitting is unique. What are the diagonal entries of S?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes A = ½(A + Aᵀ) + ½(A − Aᵀ) and checks the symmetry properties of each part.",
          "Proves uniqueness: if A = S₁ + K₁ = S₂ + K₂, then S₁ − S₂ = K₂ − K₁ is both symmetric and skew, hence zero.",
          "Notes that the diagonal of a skew-symmetric matrix is zero, since s_ii = −s_ii. A sound outline earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the transpose is, why (AB)ᵀ = BᵀAᵀ, why AᵀA is always symmetric, what a permutation matrix does, and why its inverse is its transpose.",

  glimpse: (
    <p>
      The matrix AᵀA is the heart of least squares in the Orthogonality chapter. Symmetric matrices have real eigenvalues
      and perpendicular eigenvectors, the spectral theorem. The parity of permutations returns as the sign in the
      determinant.
    </p>
  ),
};
