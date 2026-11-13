import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SingularStagesViz } from "@/components/viz/SingularStagesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.4.5",
  minutes: 90,
  links: {
    revisits: ["m8.4.4", "m8.4.3", "m3.8.3"],
    foreshadows: ["m18.6.2", "m19.5.3", "m23.5.2"],
  },

  puzzle: (
    <>
      <p>
        Every complex number is <M>{"re^{i\\theta}"}</M>: a stretch times a rotation. Can every operator be written as a
        stretch times a rigid motion? Remarkably, yes, and the stretch can be read off in perpendicular directions. Even the
        ugliest matrix becomes turn, stretch, turn.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a matrix, then step through the three stages that carry the unit circle to its image.</p>
      <SingularStagesViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="polar decomposition">
        <p>
          For every operator <M>{"T"}</M> on a finite-dimensional inner product space there is an isometry <M>{"S"}</M> with
        </p>
        <MD>{"T = S\\sqrt{T^*T}."}</MD>
      </Theorem>

      <Proof>
        <p>
          <M>{"T^*T"}</M> is positive, so it has a positive square root <M>{"R"}</M>. Then{" "}
          <M>{"\\|Rv\\|^2 = \\langle R^2 v, v \\rangle = \\langle T^*Tv, v \\rangle = \\|Tv\\|^2"}</M>. So the map{" "}
          <M>{"Rv \\mapsto Tv"}</M> is well defined and length-preserving from range <M>{"R"}</M> onto range <M>{"T"}</M>.
          These ranges have equal dimension, so their orthogonal complements do too, and we extend by any isometry between the
          complements.
        </p>
      </Proof>

      <Definition title="singular values">
        <p>
          The <strong>singular values</strong> of <M>{"T"}</M> are the eigenvalues of <M>{"\\sqrt{T^*T}"}</M>, listed with
          multiplicity in decreasing order <M>{"s_1 \\ge s_2 \\ge \\cdots \\ge s_n \\ge 0"}</M>. Equivalently, they are the
          square roots of the eigenvalues of <M>{"T^*T"}</M>.
        </p>
      </Definition>

      <Theorem title="singular value decomposition">
        <p>
          There are orthonormal bases <M>{"e_1, \\dots, e_n"}</M> and <M>{"f_1, \\dots, f_n"}</M> with
        </p>
        <MD>{"Tv = s_1 \\langle v, e_1 \\rangle f_1 + \\cdots + s_n \\langle v, e_n \\rangle f_n."}</MD>
        <p>
          In matrix form <M>{"A = U\\Sigma V^*"}</M>, with <M>{"U"}</M> and <M>{"V"}</M> isometries and <M>{"\\Sigma"}</M>{" "}
          diagonal. The same holds for maps between different spaces, with <M>{"\\Sigma"}</M> rectangular.
        </p>
      </Theorem>

      <Proof>
        <p>
          Take an orthonormal eigenbasis <M>{"e_k"}</M> of <M>{"\\sqrt{T^*T}"}</M> with eigenvalues <M>{"s_k"}</M>, by the
          spectral theorem, and let <M>{"f_k = Se_k"}</M> with <M>{"S"}</M> from the polar decomposition. Then{" "}
          <M>{"Tv = S\\sqrt{T^*T}\\sum \\langle v, e_k \\rangle e_k = \\sum s_k \\langle v, e_k \\rangle f_k"}</M>.
        </p>
      </Proof>

      <Example title="a shear">
        <p>
          For <M>{"A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}"}</M>,{" "}
          <M>{"A^{\\mathsf T}A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}"}</M> has eigenvalues{" "}
          <M>{"\\tfrac{3 \\pm \\sqrt5}{2}"}</M>, so the singular values are the golden ratio{" "}
          <M>{"\\tfrac{1 + \\sqrt5}{2} \\approx 1.618"}</M> and its reciprocal <M>{"\\approx 0.618"}</M>. Their product is{" "}
          <M>{"|\\det A| = 1"}</M>. Notice that the eigenvalues of <M>{"A"}</M>, both 1, say nothing of this stretching.
        </p>
      </Example>

      <Remark title="why it is everywhere">
        <p>
          The largest singular value is the norm of <M>{"T"}</M>, the most it stretches any vector. The number of nonzero
          singular values is the rank. Keeping only the <M>{"k"}</M> largest terms gives the best approximation of rank{" "}
          <M>{"k"}</M>, the Eckart-Young theorem, which underlies image compression, principal component analysis and
          recommendation systems. Ratios of singular values measure how sensitive a linear system is to errors.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "diag",
      rung: "check",
      prompt: <p>What are the singular values of diag(3, −2)?</p>,
      answer: { kind: "choice", options: ["3 and −2", "3 and 2", "9 and 4", "1 and 1"], correct: [1] },
    },
    {
      key: "det",
      rung: "check",
      prompt: <p>For the matrix [2, 1; 1, 3], what is the product of its two singular values?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "nilp",
      rung: "apply",
      prompt: <p>What is the largest singular value of [0, 2; 0, 0]?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "rank",
      rung: "apply",
      prompt: <p>How many nonzero singular values does [1, 2; 2, 4] have?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "shear",
      rung: "apply",
      prompt: <p>What is the largest singular value of [1, 1; 0, 1], to three decimal places?</p>,
      answer: { kind: "numeric", value: 1.618, tolerance: 0.002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every singular value of an isometry equals 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses S*S = I for an isometry S.",
          "Notes that the positive square root of I is I.",
          "Concludes the eigenvalues of √(S*S) are all 1.",
        ],
      },
    },
    {
      key: "compress",
      rung: "stretch",
      prompt: <p>A greyscale image is a 1000 by 1000 matrix. Explain how keeping only its 50 largest singular values compresses it, and why the picture can still look good.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the truncated sum needs only 50 values, 50 left and 50 right singular vectors, about 100,000 numbers instead of a million.",
          "Notes the truncation is the best rank 50 approximation.",
          "Explains that singular values of real images typically fall off quickly, so the discarded terms carry little. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the polar decomposition and its analogy with complex numbers, what singular values are, the singular value decomposition and its proof, and why low-rank approximation is useful.",

  glimpse: (
    <p>
      The next chapter returns to operators that cannot be diagonalised, starting with generalised eigenvectors. Statistics
      uses the decomposition for regression and principal components, and numerical analysis computes it reliably.
    </p>
  ),
};
