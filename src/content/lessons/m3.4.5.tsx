import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { FourSubspacesViz } from "@/components/viz/FourSubspacesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.4.5",
  minutes: 85,
  links: {
    revisits: ["m3.4.2", "m3.4.4", "m3.3.4"],
    foreshadows: ["m3.5.1", "m3.5.3", "m3.8.3"],
  },

  puzzle: (
    <>
      <p>
        A 3 by 4 matrix has three rows and four columns. Its rows span a subspace of ℝ⁴; its columns span a subspace of
        ℝ³. These look unrelated: they live in different spaces. Yet they always have the same dimension. The number of
        independent rows equals the number of independent columns, for every matrix whatsoever. Why should that be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a matrix. The table computes a basis for each of its four subspaces from reduced echelon forms. Look at the
        dimensions: the same number r appears twice, and in each of the two spaces the dimensions add up to the whole.
      </p>
      <FourSubspacesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the four subspaces">
        <p>An m by n matrix A of rank r has four fundamental subspaces:</p>
        <ul>
          <li>the <strong>column space</strong> C(A), in <M>{"\\mathbb{R}^m"}</M>;</li>
          <li>the <strong>null space</strong> N(A), in <M>{"\\mathbb{R}^n"}</M>;</li>
          <li>the <strong>row space</strong> <M>{"C(A^{\\mathsf T})"}</M>, the span of the rows, in <M>{"\\mathbb{R}^n"}</M>;</li>
          <li>the <strong>left null space</strong> <M>{"N(A^{\\mathsf T})"}</M>, the solutions of <M>{"A^{\\mathsf T}y = 0"}</M>, or equivalently <M>{"y^{\\mathsf T}A = 0"}</M>, in <M>{"\\mathbb{R}^m"}</M>.</li>
        </ul>
      </Definition>

      <Theorem title="the fundamental theorem, part one">
        <MD>{"\\dim C(A) = \\dim C(A^{\\mathsf T}) = r, \\qquad \\dim N(A) = n - r, \\qquad \\dim N(A^{\\mathsf T}) = m - r."}</MD>
      </Theorem>
      <Proof>
        <p>
          Reduce A to R by row operations. Each row of R is a combination of rows of A, and since row operations can be
          undone, each row of A is a combination of rows of R. So A and R have the same row space. The r non-zero rows of R
          span it, and they are independent, because each has a 1 in a pivot column where the others have 0. So the row
          space has dimension r.
        </p>
        <p>
          The column space has dimension r because the pivot columns of A are a basis for it, and the null space has
          dimension n − r because the special solutions are a basis, as shown in the last lesson. Finally,{" "}
          <M>{"A^{\\mathsf T}"}</M> is n by m and has rank r, since its column space is the row space of A; so its null
          space has dimension m − r.
        </p>
      </Proof>
      <p>
        The equation <M>{"\\dim C(A^{\\mathsf T}) = \\dim C(A)"}</M> is the statement <strong>row rank equals column
        rank</strong>. The equation <M>{"r + (n - r) = n"}</M> is the <strong>rank–nullity theorem</strong>.
      </p>

      <Example title="a worked case">
        <p>For the first matrix in the visualisation,</p>
        <MD>{"A = \\begin{bmatrix} 1 & 2 & 0 & 1 \\\\ 0 & 0 & 1 & 1 \\\\ 1 & 2 & 1 & 2 \\end{bmatrix} \\to R = \\begin{bmatrix} 1 & 2 & 0 & 1 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix}."}</MD>
        <p>
          The rank is 2. The row space in ℝ⁴ has basis (1, 2, 0, 1), (0, 0, 1, 1). The null space has basis (−2, 1, 0, 0),
          (−1, 0, −1, 1). The column space in ℝ³ has basis (1, 0, 1), (0, 1, 1), columns 1 and 3 of A. The left null space
          is spanned by (−1, −1, 1), recording that row 3 = row 1 + row 2.
        </p>
      </Example>

      <Theorem title="the fundamental theorem, part two">
        <p>
          The null space is perpendicular to the row space: every x in N(A) has dot product zero with every row of A. The
          left null space is perpendicular to the column space in the same way.
        </p>
      </Theorem>
      <Proof>
        <p>
          <M>{"Ax = 0"}</M> says, entry by entry, that each row of A has dot product zero with x. A combination of rows
          therefore also has dot product zero with x. Apply the same argument to <M>{"A^{\\mathsf T}"}</M>.
        </p>
      </Proof>

      <Remark title="the big picture">
        <p>
          In <M>{"\\mathbb{R}^n"}</M>, the row space and the null space are perpendicular, with dimensions r and n − r adding
          up to n. In <M>{"\\mathbb{R}^m"}</M>, the column space and the left null space are perpendicular, with
          dimensions r and m − r adding up to m. A sends its row space onto its column space, and sends the null space to
          zero. The next chapter shows these pairs are orthogonal complements: each is everything perpendicular to the
          other. Gilbert Strang, whose textbooks made this picture famous, calls it the fundamental theorem of linear
          algebra.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "where",
      rung: "check",
      prompt: <p>A is 6 by 4. Which of its four subspaces lie in ℝ⁶? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["The column space.", "The null space.", "The row space.", "The left null space."],
        correct: [0, 3],
      },
    },
    {
      key: "dims",
      rung: "check",
      prompt: <p>A is 5 by 9 with rank 3. What is the dimension of its left null space?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "null",
      rung: "apply",
      prompt: <p>A is 7 by 10, and its null space has dimension 4. What is the dimension of its row space?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "impossible",
      rung: "apply",
      prompt: <p>Which of these are impossible? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "A 3 by 5 matrix whose null space has dimension 1.",
          "A 4 by 4 matrix whose row space and null space are both 2-dimensional.",
          "A 3 by 2 matrix whose column space is all of ℝ³.",
          "A 2 by 3 matrix whose left null space is {0}.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "left",
      rung: "apply",
      prompt: (
        <p>
          The rows of A are (1, 2), (3, 4) and (4, 6). A vector y = (1, 1, c) lies in the left null space, recording a
          relation among the rows. What is c?
        </p>
      ),
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "perp",
      rung: "prove",
      prompt: (
        <p>
          Prove that if x is in N(A) and y is in <M>{"C(A^{\\mathsf T})"}</M>, then <M>{"x \\cdot y = 0"}</M>. Deduce that
          the only vector in both the row space and the null space is 0.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes y = Aᵀz for some z, and computes x · y = xᵀAᵀz = (Ax)ᵀz = 0, or argues row by row.",
          "For the second part, takes x in both, so x · x = 0, and concludes x = 0 since x · x is the squared length.",
          "Presents the steps clearly. A short proof earns full credit.",
        ],
      },
    },
    {
      key: "rank1",
      rung: "stretch",
      prompt: (
        <p>
          Show that a matrix has rank 1 exactly when it can be written as <M>{"uv^{\\mathsf T}"}</M> for non-zero column
          vectors u and v. Describe all four subspaces of <M>{"uv^{\\mathsf T}"}</M> in terms of u and v.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Shows uvᵀ has every column a multiple of u, so rank 1; conversely a rank 1 matrix has every column a multiple of one column u, with the multiples forming v.",
          "Identifies the column space as the line through u and the row space as the line through v.",
          "Identifies the null space as the vectors perpendicular to v, and the left null space as those perpendicular to u. Any sound reasoning earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the four fundamental subspaces of a matrix, where each lives, their dimensions in terms of the rank, why row rank equals column rank, and why the null space is perpendicular to the row space.",

  glimpse: (
    <p>
      The next chapter makes the perpendicularity exact with orthogonal complements and uses it for least squares. The
      singular value decomposition, at the end of the course, chooses perfect bases for all four subspaces at once.
    </p>
  ),
};
