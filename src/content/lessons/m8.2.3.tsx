import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { FlagViz } from "@/components/viz/FlagViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.2.3",
  minutes: 85,
  links: {
    revisits: ["m8.2.2", "m8.1.4", "m3.3.3"],
    foreshadows: ["m8.4.2", "m8.5.1", "m19.5.3"],
  },

  puzzle: (
    <>
      <p>
        Not every operator can be diagonalised; the shear has too few eigenvectors. What is the next best thing? Over the
        complex numbers there is always a basis in which the matrix is upper-triangular, with zeros below the diagonal. Then
        the eigenvalues can be read straight off the diagonal, and whether the operator is invertible is visible at a glance.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here are three operators, each described in a basis <M>{"u_1, u_2, u_3"}</M>. Reorder the basis and see when the
        matrix is upper-triangular, and how that matches invariance of the initial spans.
      </p>
      <FlagViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="triangular means a chain of invariant subspaces">
        <p>
          For a basis <M>{"v_1, \\dots, v_n"}</M>, the matrix of <M>{"T"}</M> is upper-triangular if and only if each{" "}
          <M>{"\\operatorname{span}(v_1, \\dots, v_k)"}</M> is invariant under <M>{"T"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Column <M>{"k"}</M> of the matrix holds the coordinates of <M>{"Tv_k"}</M>. Upper-triangular means these vanish
          below row <M>{"k"}</M>, that is, <M>{"Tv_k \\in \\operatorname{span}(v_1, \\dots, v_k)"}</M> for every{" "}
          <M>{"k"}</M>, which is the same as invariance of each initial span.
        </p>
      </Proof>

      <Theorem title="Schur's triangular form">
        <p>
          Every operator on a finite-dimensional complex vector space has an upper-triangular matrix with respect to some
          basis.
        </p>
      </Theorem>

      <Proof>
        <p>
          Induct on <M>{"\\dim V"}</M>. Take an eigenvector <M>{"v_1"}</M>, which exists over <M>{"\\mathbb{C}"}</M>, and
          let <M>{"U = \\operatorname{span}(v_1)"}</M>. <M>{"T"}</M> induces an operator on <M>{"V/U"}</M>, of smaller
          dimension, which by induction is upper-triangular in a basis <M>{"v_2 + U, \\dots, v_n + U"}</M>. Then{" "}
          <M>{"Tv_k \\in \\operatorname{span}(v_1, \\dots, v_k)"}</M> for each <M>{"k"}</M>, since modulo <M>{"U"}</M> it lies
          in the span of <M>{"v_2, \\dots, v_k"}</M>.
        </p>
      </Proof>

      <Example title="reading the diagonal">
        <p>
          If the matrix is upper-triangular, <M>{"T"}</M> is invertible exactly when every diagonal entry is non-zero, and
          the eigenvalues of <M>{"T"}</M> are exactly the diagonal entries. For the operator with matrix
        </p>
        <MD>{"\\begin{pmatrix} 4 & 1 & 0 \\\\ 0 & 4 & 1 \\\\ 0 & 0 & 4 \\end{pmatrix},"}</MD>
        <p>
          4 is the only eigenvalue, though it is not diagonalisable: the eigenvectors are only the multiples of the first
          basis vector.
        </p>
      </Example>

      <Remark title="over ℝ, and with inner products">
        <p>
          Over <M>{"\\mathbb{R}"}</M>, an operator has an upper-triangular matrix exactly when its eigenvalues, counted over{" "}
          <M>{"\\mathbb{C}"}</M>, are all real. With an inner product, the Gram-Schmidt process turns the triangularising
          basis into an orthonormal one, and the matrix stays triangular; this refined Schur form is the starting point of
          the spectral theorem, and of the QR algorithm for computing eigenvalues.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "eig",
      rung: "check",
      prompt: <p>An upper-triangular matrix has diagonal entries 3, −1 and 3. How many distinct eigenvalues does it have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "inv",
      rung: "check",
      prompt: <p>An upper-triangular matrix is invertible exactly when what holds?</p>,
      answer: {
        kind: "choice",
        options: ["Its top-right entry is non-zero", "Every diagonal entry is non-zero", "It is symmetric", "Its trace is non-zero"],
        correct: [1],
      },
    },
    {
      key: "det",
      rung: "apply",
      prompt: <p>What is the product of the eigenvalues, with multiplicity, of the upper-triangular matrix with diagonal 2, 5, −1?</p>,
      answer: { kind: "numeric", value: -10 },
    },
    {
      key: "orders",
      rung: "apply",
      prompt: <p>For operator A in the visualisation, how many of the six orderings of the basis give an upper-triangular matrix?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "real",
      rung: "apply",
      prompt: <p>Which real operators have an upper-triangular matrix in some basis of ℝ²? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["A shear", "Rotation by 90°", "A reflection in a line", "A diagonal scaling"],
        correct: [0, 2, 3],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if T has an upper-triangular matrix, then the first basis vector is an eigenvector. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the first column of the matrix has zeros below the first entry.",
          "So Tv₁ = a₁₁v₁.",
          "Concludes v₁ is an eigenvector with eigenvalue a₁₁, since v₁ ≠ 0.",
        ],
      },
    },
    {
      key: "diag",
      rung: "stretch",
      prompt: <p>Explain why an upper-triangular matrix with distinct diagonal entries is diagonalisable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the diagonal entries are the eigenvalues, so there are n distinct eigenvalues.",
          "Uses that eigenvectors for distinct eigenvalues are linearly independent.",
          "Concludes there are n independent eigenvectors, a basis, so the operator is diagonalisable. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why a matrix is upper-triangular exactly when each initial span of the basis is invariant, how quotient spaces prove every complex operator has a triangular form, and what the diagonal tells you.",

  glimpse: (
    <p>
      The next chapter adds inner products, length and angle. With them the triangular form leads to the spectral theorem
      for self-adjoint operators, and later generalised eigenvectors refine it into the Jordan form.
    </p>
  ),
};
