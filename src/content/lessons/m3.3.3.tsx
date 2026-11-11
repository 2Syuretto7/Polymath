import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { LUViz } from "@/components/viz/LUViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.3.3",
  minutes: 75,
  links: {
    revisits: ["m3.2.1", "m3.3.2"],
    foreshadows: ["m3.3.4", "m19.5.1"],
  },

  puzzle: (
    <>
      <p>
        An engineer must solve <M>{"Ax = b"}</M> for the same large matrix A and a thousand different right-hand sides b,
        one for each load on a bridge. Elimination costs about <M>{"n^3/3"}</M> operations each time, and almost all of
        that work is spent on A, which never changes. Is there a way to do the expensive part once, keep a record of it,
        and reuse it for every b?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Elimination already keeps the record, if you write it down. Each step uses a multiplier. Store each multiplier in
        the position it was used, below the diagonal of an otherwise identity matrix L. When elimination ends with an upper
        triangular U, it turns out that A = LU exactly. Watch L fill in.
      </p>
      <LUViz />
    </>
  ),

  theory: (
    <>
      <Definition title="elimination matrices">
        <p>
          Subtracting <M>{"\\ell"}</M> times row j from row i is the same as multiplying on the left by the{" "}
          <strong>elimination matrix</strong> <M>{"E_{ij}"}</M>: the identity with <M>{"-\\ell"}</M> in position (i, j).
          Its inverse is the identity with <M>{"+\\ell"}</M> there: to undo subtracting, add back.
        </p>
      </Definition>

      <Theorem title="LU factorisation">
        <p>
          If elimination on a square matrix A needs no row swaps, then
        </p>
        <MD>{"A = LU,"}</MD>
        <p>
          where U is the upper triangular matrix that elimination produces, and L is lower triangular with 1s on the
          diagonal and the multiplier <M>{"\\ell_{ij}"}</M> in position (i, j) below it.
        </p>
      </Theorem>
      <p>
        For a 3 by 3 matrix, elimination says <M>{"E_{32}E_{31}E_{21}A = U"}</M>. So{" "}
        <M>{"A = E_{21}^{-1}E_{31}^{-1}E_{32}^{-1}U"}</M>. Each inverse is the identity with one multiplier in it, and
        multiplying them in this order simply drops each multiplier into its place, with no interference. That product is
        L. In the other order, the product <M>{"E_{32}E_{31}E_{21}"}</M> is messier, which is why L, not its inverse, is
        the natural thing to store.
      </p>

      <Example title="the first matrix in the visualisation">
        <MD>{"\\begin{bmatrix} 2 & 1 & 1 \\\\ 4 & -6 & 0 \\\\ -2 & 7 & 2 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ -1 & -1 & 1 \\end{bmatrix}\\begin{bmatrix} 2 & 1 & 1 \\\\ 0 & -8 & -2 \\\\ 0 & 0 & 1 \\end{bmatrix}."}</MD>
        <p>The multipliers were 2, &minus;1 and &minus;1, and they sit in L exactly where they were used.</p>
      </Example>

      <Definition title="solving with LU">
        <p>To solve <M>{"Ax = b"}</M>, that is <M>{"L(Ux) = b"}</M>, solve two triangular systems:</p>
        <ol>
          <li><strong>Forward substitution</strong>: solve <M>{"Lc = b"}</M> for c, top to bottom.</li>
          <li><strong>Back substitution</strong>: solve <M>{"Ux = c"}</M> for x, bottom to top.</li>
        </ol>
        <p>
          Each costs about <M>{"n^2/2"}</M> operations. So after paying <M>{"n^3/3"}</M> once for L and U, each new right-hand
          side costs only about <M>{"n^2"}</M>. For n = 1000, that is roughly a million operations per b instead of three
          hundred million.
        </p>
      </Definition>

      <Remark title="when there are row swaps">
        <p>
          If a zero appears in a pivot position, elimination must swap rows and plain LU fails. Doing all the swaps first
          fixes this: there is a permutation matrix P with <M>{"PA = LU"}</M> for every invertible A. The next lesson
          introduces permutation matrices. In practice, computers swap rows even when they need not, choosing the largest
          available pivot, because small pivots magnify rounding errors.
        </p>
      </Remark>

      <Remark title="LDU">
        <p>
          Dividing each row of U by its pivot pulls out a diagonal matrix D of pivots: <M>{"A = LDU"}</M>, with both L and
          the new U having 1s on the diagonal. In this form the factorisation is unique, and for a symmetric A it becomes{" "}
          <M>{"A = LDL^{\\mathsf T}"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "l21",
      rung: "check",
      prompt: (
        <p>
          For <M>{"A = \\begin{bmatrix} 3 & 1 \\\\ 6 & 4 \\end{bmatrix}"}</M>, what is the entry of L in row 2, column 1?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "u22",
      rung: "check",
      prompt: <p>For the same matrix, what is the entry of U in row 2, column 2?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "einv",
      rung: "apply",
      prompt: (
        <p>
          The elimination matrix E subtracts 5 times row 1 from row 3 of a 3 by 3 matrix. What is the entry in row 3,
          column 1 of <M>{"E^{-1}"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "fwd",
      rung: "apply",
      prompt: (
        <p>
          With L and U from the example in this lesson, solve <M>{"Lc = (5, -2, 9)"}</M> by forward substitution. What
          is the third component of c?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "cost",
      rung: "apply",
      prompt: (
        <p>
          With LU already computed for a 1000 by 1000 matrix, about how many times cheaper is solving for one new
          right-hand side than redoing elimination from scratch? Use <M>{"n^3/3"}</M> against <M>{"n^2"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 333, tolerance: 0.02 },
    },
    {
      key: "why",
      rung: "prove",
      prompt: (
        <p>
          For a 3 by 3 matrix, show that the product <M>{"E_{21}^{-1}E_{31}^{-1}E_{32}^{-1}"}</M> is the lower triangular
          matrix with the three multipliers in their positions. Then compute <M>{"E_{32}E_{31}E_{21}"}</M> and explain
          what extra entry appears.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes each inverse elimination matrix with +ℓ in its position.",
          "Multiplies them in the order given and shows each multiplier lands in place, with no products of multipliers.",
          "Computes the product in the other order and finds an extra term such as ℓ32ℓ21 in position (3, 1), explaining why L is the cleaner record. Accurate algebra with a brief explanation is enough.",
        ],
      },
    },
    {
      key: "noLU",
      rung: "stretch",
      prompt: (
        <p>
          Show that <M>{"\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}"}</M> has no factorisation LU with L lower
          triangular and U upper triangular, even though it is invertible. How does a row swap fix this?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes a general L and U and compares the (1, 1) entry: it is l11 u11 = 0, so l11 or u11 is zero.",
          "Shows that either choice forces a whole row of LU or a whole column of LU to be zero, contradicting the matrix.",
          "Notes that swapping the rows first gives the identity, which is trivially LU, so PA = LU works. A careful attempt earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how elimination can be recorded as A = LU, where the multipliers go, why this saves work when solving for many right-hand sides, and what to do when rows must be swapped.",

  glimpse: (
    <p>
      The next lesson brings in permutation matrices and transposes, giving PA = LU and, for symmetric matrices, A =
      LDLᵀ. Numerical Analysis studies LU with partial pivoting, the method used inside almost every linear solver.
    </p>
  ),
};
