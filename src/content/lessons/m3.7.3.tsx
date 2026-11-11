import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SpectralViz } from "@/components/viz/SpectralViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.7.3",
  minutes: 80,
  links: {
    revisits: ["m3.7.2", "m3.5.4", "m3.3.4"],
    foreshadows: ["m3.7.4", "m3.8.3", "m8.4.2"],
  },

  puzzle: (
    <>
      <p>
        A general real matrix can have complex eigenvalues, like a rotation, or too few eigenvectors, like a shear.
        Symmetric matrices, where <M>{"a_{ij} = a_{ji}"}</M>, never misbehave in either way. In statistics, physics and
        engineering, the matrices that matter most, covariance matrices, inertia tensors and stiffness matrices, are
        symmetric. What is it about symmetry that tames the eigenvalue problem?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Change the entries of the symmetric matrix S. Its eigenvectors always lie along two perpendicular axes, and S maps
        the unit circle to an ellipse with exactly those axes, stretched by the eigenvalues.
      </p>
      <SpectralViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="real eigenvalues">
        <p>Every eigenvalue of a real symmetric matrix is real.</p>
      </Theorem>
      <Proof>
        <p>
          Suppose <M>{"Sx = \\lambda x"}</M>, allowing complex λ and x. Take complex conjugates: <M>{"S\\bar{x} = \\bar{\\lambda}\\bar{x}"}</M>,
          since S is real. Then <M>{"\\bar{x}^{\\mathsf T}Sx = \\lambda\\bar{x}^{\\mathsf T}x"}</M>, and transposing the
          conjugate equation and using <M>{"S^{\\mathsf T} = S"}</M> gives{" "}
          <M>{"\\bar{x}^{\\mathsf T}Sx = \\bar{\\lambda}\\bar{x}^{\\mathsf T}x"}</M>. Since{" "}
          <M>{"\\bar{x}^{\\mathsf T}x = |x_1|^2 + \\dots + |x_n|^2 > 0"}</M>, we get <M>{"\\lambda = \\bar{\\lambda}"}</M>.
        </p>
      </Proof>

      <Theorem title="perpendicular eigenvectors">
        <p>Eigenvectors of a symmetric matrix for different eigenvalues are orthogonal.</p>
      </Theorem>
      <Proof>
        <p>
          Let <M>{"Sx = \\lambda x"}</M> and <M>{"Sy = \\mu y"}</M> with λ ≠ μ. Then{" "}
          <M>{"\\lambda x^{\\mathsf T}y = (Sx)^{\\mathsf T}y = x^{\\mathsf T}Sy = \\mu x^{\\mathsf T}y"}</M>, so{" "}
          <M>{"(\\lambda - \\mu)x^{\\mathsf T}y = 0"}</M> and <M>{"x^{\\mathsf T}y = 0"}</M>.
        </p>
      </Proof>

      <Theorem title="the spectral theorem">
        <p>Every real symmetric matrix S can be factored as</p>
        <MD>{"S = Q\\Lambda Q^{\\mathsf T},"}</MD>
        <p>
          with Q orthogonal, its columns orthonormal eigenvectors, and Λ real and diagonal. Conversely, every such product is
          symmetric.
        </p>
      </Theorem>
      <p>
        When the eigenvalues are distinct, this follows from the two results above: normalise the perpendicular
        eigenvectors. With repeated eigenvalues there are still enough eigenvectors, and Gram–Schmidt within each eigenspace
        makes them orthonormal; the full proof is usually done by induction on n, or by Schur&rsquo;s theorem that every
        matrix is <M>{"QTQ^{\\mathsf T}"}</M> with T triangular, which for symmetric S forces T to be diagonal.
      </p>

      <Example title="a sum of projections">
        <p>Multiplying out <M>{"Q\\Lambda Q^{\\mathsf T}"}</M> column by row gives</p>
        <MD>{"S = \\lambda_1q_1q_1^{\\mathsf T} + \\lambda_2q_2q_2^{\\mathsf T} + \\dots + \\lambda_nq_nq_n^{\\mathsf T}:"}</MD>
        <p>
          every symmetric matrix is a combination of projections onto perpendicular lines. For{" "}
          <M>{"S = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}"}</M>,
        </p>
        <MD>{"S = 3\\begin{bmatrix} \\tfrac12 & \\tfrac12 \\\\ \\tfrac12 & \\tfrac12 \\end{bmatrix} + 1\\begin{bmatrix} \\tfrac12 & -\\tfrac12 \\\\ -\\tfrac12 & \\tfrac12 \\end{bmatrix}."}</MD>
      </Example>

      <Remark title="principal axes">
        <p>
          The name comes from mechanics and geometry. In the coordinates given by the eigenvectors, the quadratic expression{" "}
          <M>{"x^{\\mathsf T}Sx"}</M> has no cross terms: it becomes <M>{"\\lambda_1y_1^2 + \\dots + \\lambda_ny_n^2"}</M>.
          So the eigenvectors are the principal axes of the ellipse or ellipsoid <M>{"x^{\\mathsf T}Sx = 1"}</M>, and of a
          spinning body. In statistics, the eigenvectors of a covariance matrix are the principal components of the data.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "real",
      rung: "check",
      prompt: <p>Which statements hold for every real symmetric matrix? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "Its eigenvalues are real.",
          "It is invertible.",
          "Eigenvectors for different eigenvalues are perpendicular.",
          "Its eigenvalues are positive.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "qt",
      rung: "check",
      prompt: <p>In <M>{"S = Q\\Lambda Q^{\\mathsf T}"}</M>, what is <M>{"Q^{-1}"}</M>?</p>,
      answer: { kind: "choice", options: ["Q", "Qᵀ", "Λ", "S"], correct: [1] },
    },
    {
      key: "eig",
      rung: "apply",
      prompt: <p>Find the larger eigenvalue of <M>{"\\begin{bmatrix} 5 & 2 \\\\ 2 & 2 \\end{bmatrix}"}</M>.</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "perp",
      rung: "apply",
      prompt: (
        <p>
          A symmetric 2 by 2 matrix has eigenvector (3, 4) for eigenvalue 5 and a different second eigenvalue. Its second
          eigenvector is a multiple of (4, c). What is c?
        </p>
      ),
      answer: { kind: "numeric", value: -3 },
    },
    {
      key: "build",
      rung: "apply",
      prompt: (
        <p>
          S has eigenvalues 4 and 0, with unit eigenvectors (1, 0) and (0, 1) rotated so that the first is{" "}
          <M>{"(1, 1)/\\sqrt2"}</M>. What is the entry <M>{"s_{12}"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: (
        <p>
          Prove that eigenvectors of a symmetric matrix belonging to different eigenvalues are orthogonal. Show by example
          that this fails for a non-symmetric matrix.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes λxᵀy = xᵀSy = μxᵀy using Sᵀ = S, and concludes xᵀy = 0 from λ ≠ μ.",
          "Gives a non-symmetric example, such as [3 1; 0 2] with eigenvectors (1, 0) and (1, −1).",
          "Checks the example's eigenvectors are not perpendicular. A clear answer earns full credit.",
        ],
      },
    },
    {
      key: "rank1",
      rung: "stretch",
      prompt: (
        <p>
          Use the spectral theorem to show that a symmetric matrix of rank r is a sum of r symmetric rank-one matrices
          <M>{"\\lambda_iq_iq_i^{\\mathsf T}"}</M>. What does the best rank-one approximation of S look like, if
          &ldquo;best&rdquo; means keeping the largest |λ|?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes S as the sum of λᵢqᵢqᵢᵀ and notes that exactly r eigenvalues are non-zero when the rank is r.",
          "Identifies the best rank-one approximation as λ₁q₁q₁ᵀ for the eigenvalue of largest absolute value.",
          "Connects this to principal components or to the singular value decomposition. A reasonable sketch earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why a real symmetric matrix has real eigenvalues and perpendicular eigenvectors, what the spectral theorem S = QΛQᵀ says, and how it writes S as a combination of projections onto principal axes.",

  glimpse: (
    <p>
      The next lesson asks when all the eigenvalues of a symmetric matrix are positive. The singular value decomposition
      extends the spectral theorem to every matrix, and Linear Algebra II proves it for operators on inner product spaces.
    </p>
  ),
};
