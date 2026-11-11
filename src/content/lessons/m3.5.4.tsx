import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GramSchmidtViz } from "@/components/viz/GramSchmidtViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.5.4",
  minutes: 80,
  links: {
    revisits: ["m3.5.2", "m3.5.3", "m3.3.3"],
    foreshadows: ["m3.7.3", "m8.3.2", "m19.1.1"],
  },

  puzzle: (
    <>
      <p>
        In the standard basis, finding the coordinates of a vector is free: they are its entries. In a slanted basis you
        have to solve a system of equations. Yet some slanted bases are as easy as the standard one, namely those whose
        vectors are perpendicular and of length one. Can every subspace be given such a basis, and what does the process of
        finding one say about the original matrix?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Start with two independent vectors a and b. Normalise a; take away from b the part that points along a; normalise
        what is left. Step through the process and watch the triangular matrix R record what was done.
      </p>
      <GramSchmidtViz />
    </>
  ),

  theory: (
    <>
      <Definition title="orthonormal vectors">
        <p>
          Vectors <M>{"q_1, \\dots, q_n"}</M> are <strong>orthonormal</strong> if <M>{"q_i^{\\mathsf T}q_j = 0"}</M> for{" "}
          <M>{"i \\ne j"}</M> and <M>{"q_i^{\\mathsf T}q_i = 1"}</M>. A matrix Q with orthonormal columns satisfies{" "}
          <M>{"Q^{\\mathsf T}Q = I"}</M>. If Q is also square, it is called an <strong>orthogonal matrix</strong>, and{" "}
          <M>{"Q^{-1} = Q^{\\mathsf T}"}</M>. Rotations, reflections and permutation matrices are examples.
        </p>
      </Definition>

      <Theorem title="why orthonormal bases are convenient">
        <ul>
          <li>Coordinates are dot products: if <M>{"b = c_1q_1 + \\dots + c_nq_n"}</M>, then <M>{"c_i = q_i^{\\mathsf T}b"}</M>.</li>
          <li>Q preserves lengths and angles: <M>{"\\|Qx\\| = \\|x\\|"}</M> and <M>{"(Qx)^{\\mathsf T}(Qy) = x^{\\mathsf T}y"}</M>.</li>
          <li>Projection onto C(Q) is <M>{"P = QQ^{\\mathsf T}"}</M>, and least squares becomes <M>{"\\hat{x} = Q^{\\mathsf T}b"}</M>.</li>
        </ul>
      </Theorem>
      <Proof>
        <p>
          Take the dot product of <M>{"b = \\sum c_jq_j"}</M> with <M>{"q_i"}</M>; only the i-th term survives. For lengths,{" "}
          <M>{"\\|Qx\\|^2 = x^{\\mathsf T}Q^{\\mathsf T}Qx = x^{\\mathsf T}x"}</M>. For projections, put{" "}
          <M>{"Q^{\\mathsf T}Q = I"}</M> into <M>{"A(A^{\\mathsf T}A)^{-1}A^{\\mathsf T}"}</M>.
        </p>
      </Proof>

      <Definition title="the Gram–Schmidt process">
        <p>
          Given independent vectors <M>{"a_1, \\dots, a_n"}</M>, for each j in turn subtract from <M>{"a_j"}</M> its
          components along the q vectors already found, and normalise:
        </p>
        <MD>{"A_j = a_j - (q_1^{\\mathsf T}a_j)q_1 - \\dots - (q_{j-1}^{\\mathsf T}a_j)q_{j-1}, \\qquad q_j = \\frac{A_j}{\\|A_j\\|}."}</MD>
        <p>
          Each <M>{"A_j"}</M> is orthogonal to the earlier q vectors, and is not zero because <M>{"a_j"}</M> is not a
          combination of the earlier vectors. At every stage, <M>{"q_1, \\dots, q_j"}</M> span the same subspace as{" "}
          <M>{"a_1, \\dots, a_j"}</M>.
        </p>
      </Definition>

      <Example title="three vectors">
        <p>Take a = (1, −1, 0), b = (2, 0, −2), c = (3, −3, 3).</p>
        <ul>
          <li><M>{"\\|a\\| = \\sqrt{2}"}</M>, so <M>{"q_1 = (1, -1, 0)/\\sqrt{2}"}</M>.</li>
          <li>
            <M>{"q_1^{\\mathsf T}b = \\sqrt{2}"}</M>, so <M>{"B = b - \\sqrt{2}q_1 = (1, 1, -2)"}</M> and{" "}
            <M>{"q_2 = (1, 1, -2)/\\sqrt{6}"}</M>.
          </li>
          <li>
            <M>{"q_1^{\\mathsf T}c = 6/\\sqrt{2}"}</M> and <M>{"q_2^{\\mathsf T}c = -6/\\sqrt{6}"}</M>, so the
            components to remove are <M>{"3(1, -1, 0)"}</M> and <M>{"-(1, 1, -2)"}</M>. Then{" "}
            <M>{"C = (3, -3, 3) - (3, -3, 0) + (1, 1, -2) = (1, 1, 1)"}</M> and <M>{"q_3 = (1, 1, 1)/\\sqrt{3}"}</M>.
          </li>
        </ul>
      </Example>

      <Theorem title="A = QR">
        <p>
          Every matrix A with independent columns factors as <M>{"A = QR"}</M>, where Q has orthonormal columns and R is
          upper triangular and invertible, with <M>{"r_{ij} = q_i^{\\mathsf T}a_j"}</M> for <M>{"i \\le j"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          Rearranging the Gram–Schmidt formula, <M>{"a_j = (q_1^{\\mathsf T}a_j)q_1 + \\dots + (q_{j-1}^{\\mathsf T}a_j)q_{j-1} + \\|A_j\\|q_j"}</M>,
          a combination of <M>{"q_1, \\dots, q_j"}</M> only. These coefficients are column j of R, with zeros below the
          diagonal and <M>{"r_{jj} = \\|A_j\\| > 0"}</M>.
        </p>
      </Proof>

      <Remark title="least squares with QR">
        <p>
          Substituting A = QR into <M>{"A^{\\mathsf T}A\\hat{x} = A^{\\mathsf T}b"}</M> gives{" "}
          <M>{"R^{\\mathsf T}R\\hat{x} = R^{\\mathsf T}Q^{\\mathsf T}b"}</M>, so <M>{"R\\hat{x} = Q^{\\mathsf T}b"}</M>, solved by
          back substitution. Software computes Q and R by variants of Gram–Schmidt, or by reflections, which are more stable
          against rounding errors than the classical process.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "inv",
      rung: "check",
      prompt: <p>Q is a square matrix with orthonormal columns. What is its inverse?</p>,
      answer: { kind: "choice", options: ["Q itself", "Qᵀ", "−Q", "It may not have one."], correct: [1] },
    },
    {
      key: "len",
      rung: "check",
      prompt: <p>Q is orthogonal and x has length 5. What is the length of Qx?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "coord",
      rung: "apply",
      prompt: (
        <p>
          q₁ = (3, 4)/5 and q₂ = (−4, 3)/5 form an orthonormal basis of the plane. What is the coordinate of b = (5, 10)
          along q₁?
        </p>
      ),
      answer: { kind: "numeric", value: 11 },
    },
    {
      key: "B",
      rung: "apply",
      prompt: (
        <p>
          Apply Gram–Schmidt to a = (1, 0, 0) and b = (2, 3, 4). What is the length of B, the part of b orthogonal to a?
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "R",
      rung: "apply",
      prompt: (
        <p>
          For the vectors a = (1, −1, 0), b = (2, 0, −2) of the worked example, what is the entry <M>{"r_{22}"}</M> of R, to
          three decimal places?
        </p>
      ),
      answer: { kind: "numeric", value: 2.449, tolerance: 0.001 },
    },
    {
      key: "span",
      rung: "prove",
      prompt: (
        <p>
          Prove by induction that, in Gram–Schmidt, each <M>{"A_j"}</M> is orthogonal to <M>{"q_1, \\dots, q_{j-1}"}</M>, and
          that it is not the zero vector when the a vectors are independent.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes q_iᵀA_j = q_iᵀa_j − (q_iᵀa_j)(q_iᵀq_i) = 0 using orthonormality of the earlier q's.",
          "Argues that if A_j = 0, then a_j is a combination of q_1, …, q_{j−1}, which span the same space as a_1, …, a_{j−1}, contradicting independence.",
          "Frames the argument as an induction on j. A clear outline earns full credit.",
        ],
      },
    },
    {
      key: "unique",
      rung: "stretch",
      prompt: (
        <p>
          Show that the factorisation A = QR, with R having positive diagonal entries, is unique. Hint: if{" "}
          <M>{"Q_1R_1 = Q_2R_2"}</M>, consider <M>{"Q_2^{\\mathsf T}Q_1 = R_2R_1^{-1}"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that R₂R₁⁻¹ is upper triangular with positive diagonal, while Q₂ᵀQ₁ has orthonormal columns when A has full column rank.",
          "Argues that an upper triangular matrix with orthonormal columns and positive diagonal is the identity, column by column.",
          "Concludes R₁ = R₂ and hence Q₁ = Q₂. A good sketch earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what orthonormal vectors are and why they make coordinates, projections and least squares easy, how the Gram–Schmidt process works, and how it gives the factorisation A = QR.",

  glimpse: (
    <p>
      Symmetric matrices, in the Eigenvalues chapter, always have an orthonormal basis of eigenvectors. Linear Algebra II
      runs Gram–Schmidt in spaces of functions, producing orthogonal polynomials, and Numerical Analysis studies why the
      classical version loses orthogonality in floating point arithmetic.
    </p>
  ),
};
