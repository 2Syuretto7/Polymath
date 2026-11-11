import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { BasisChangeViz } from "@/components/viz/BasisChangeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.8.2",
  minutes: 80,
  links: {
    revisits: ["m3.8.1", "m3.4.4", "m3.7.2"],
    foreshadows: ["m3.8.3", "m8.5.3", "m19.5.3"],
  },

  puzzle: (
    <>
      <p>
        The matrix <M>{"\\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}"}</M> looks as if it mixes x and y together. But
        tilt your head by 45°, and the same map just triples one direction and leaves the perpendicular one alone. The map
        has not changed, only the coordinates used to describe it. How do the numbers in a matrix depend on the basis, and
        what stays the same whatever basis you choose?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The map is fixed. Choose a basis, and set the coordinates of v in that basis. The grid shows the new coordinate
        lines, and the table shows the matrix that describes the map in those coordinates.
      </p>
      <BasisChangeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="coordinates in a basis">
        <p>
          Let <M>{"b_1, \\dots, b_n"}</M> be a basis of <M>{"\\mathbb{R}^n"}</M>, and B the matrix with these columns. The{" "}
          <strong>coordinates</strong> of v in this basis are the numbers c with{" "}
          <M>{"v = c_1b_1 + \\dots + c_nb_n"}</M>, that is
        </p>
        <MD>{"v = Bc, \\qquad c = B^{-1}v."}</MD>
        <p>B is invertible because its columns are a basis. It converts new coordinates into standard ones.</p>
      </Definition>

      <Theorem title="change of basis">
        <p>
          If a linear map has matrix A in the standard basis, its matrix in the basis given by the columns of B is
        </p>
        <MD>{"B^{-1}AB."}</MD>
      </Theorem>
      <Proof>
        <p>
          Start with new coordinates c. Then Bc is the vector in standard coordinates, ABc is its image, and{" "}
          <M>{"B^{-1}ABc"}</M> is that image in new coordinates. So <M>{"B^{-1}AB"}</M> does in new coordinates what A does
          in standard ones.
        </p>
      </Proof>

      <Example title="the eigenvector basis">
        <p>
          For <M>{"A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}"}</M>, take <M>{"b_1 = (1, 1)"}</M> and{" "}
          <M>{"b_2 = (-1, 1)"}</M>, eigenvectors with eigenvalues 3 and 1. Then
        </p>
        <MD>{"B^{-1}AB = \\begin{bmatrix} 3 & 0 \\\\ 0 & 1 \\end{bmatrix}."}</MD>
        <p>
          Diagonalising a matrix is exactly choosing the eigenvectors as the basis. When the eigenvectors are orthonormal,
          as for a symmetric matrix, B is orthogonal and <M>{"B^{-1} = B^{\\mathsf T}"}</M>, the spectral theorem again.
        </p>
      </Example>

      <Definition title="similar matrices">
        <p>
          Matrices A and <M>{"B^{-1}AB"}</M> are <strong>similar</strong>. They describe one linear map in two bases, so
          everything that belongs to the map, not to the coordinates, is the same for both: the eigenvalues, the
          characteristic polynomial, the trace, the determinant and the rank.
        </p>
      </Definition>

      <Remark title="the best basis">
        <p>
          Much of linear algebra is the search for a basis in which a map looks simple. A diagonal matrix is best, but not
          every matrix is similar to one: <M>{"\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}"}</M> is not. The Jordan
          form, in Linear Algebra II, is the simplest form that every square matrix can reach. If the basis may be chosen
          separately for the input and the output space, even more is possible: that is the singular value decomposition,
          in the next lesson.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "shared",
      rung: "check",
      prompt: <p>Which of these do A and <M>{"B^{-1}AB"}</M> always share? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["eigenvalues", "determinant", "trace", "the entry in the top left corner"],
        correct: [0, 1, 2],
      },
    },
    {
      key: "coords",
      rung: "check",
      prompt: <p>If the columns of B are a basis, what are the coordinates of v in that basis?</p>,
      answer: { kind: "choice", options: ["Bv", "B⁻¹v", "Bᵀv", "v"], correct: [1] },
    },
    {
      key: "c1",
      rung: "apply",
      prompt: (
        <p>
          In the basis <M>{"b_1 = (1, 1)"}</M>, <M>{"b_2 = (1, -1)"}</M>, the vector (5, 1) has coordinates{" "}
          <M>{"(c_1, c_2)"}</M>. What is <M>{"c_1"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "trace",
      rung: "apply",
      prompt: (
        <p>
          Without computing it, what is the trace of <M>{"B^{-1}AB"}</M> for{" "}
          <M>{"A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}"}</M> and any invertible B?
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "projbasis",
      rung: "apply",
      prompt: (
        <p>
          P projects the plane onto the line y = x. What is its matrix in the basis <M>{"b_1 = (1, 1)"}</M>,{" "}
          <M>{"b_2 = (1, -1)"}</M>?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["[1 0; 0 0]", "[1/2 1/2; 1/2 1/2]", "[0 1; 1 0]", "[1 0; 0 1]"],
        correct: [0],
      },
    },
    {
      key: "charpoly",
      rung: "prove",
      prompt: (
        <p>
          Prove that similar matrices have the same characteristic polynomial, and deduce that they have the same
          eigenvalues, trace and determinant.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes B⁻¹AB − λI = B⁻¹(A − λI)B.",
          "Takes determinants: det(B⁻¹) det(A − λI) det(B) = det(A − λI).",
          "Deduces equal eigenvalues, and trace and determinant from the coefficients or from the earlier results. A clear argument earns full credit.",
        ],
      },
    },
    {
      key: "notsimilar",
      rung: "stretch",
      prompt: (
        <p>
          Show that <M>{"\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}"}</M> and the identity have the same eigenvalues,
          trace and determinant, but are not similar. What does this say about the list of things similar matrices share?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Checks that both have eigenvalue 1 twice, trace 2 and determinant 1.",
          "Shows that B⁻¹IB = I for every B, so only the identity is similar to the identity.",
          "Concludes that sharing these invariants does not guarantee similarity. A reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the coordinates of a vector in a basis are, why the matrix of a map in a new basis is B⁻¹AB, how diagonalisation is a change to the eigenvector basis, and what similar matrices have in common.",

  glimpse: (
    <p>
      The last lesson of the course allows different bases for input and output, and finds the singular value
      decomposition. Linear Algebra II reaches the Jordan form, and Numerical Analysis computes eigenvalues by changing
      basis step by step.
    </p>
  ),
};
