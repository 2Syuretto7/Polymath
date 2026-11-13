import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { IsometryViz } from "@/components/viz/IsometryViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.4.4",
  minutes: 80,
  links: {
    revisits: ["m8.4.3", "m8.3.2", "m3.5.4"],
    foreshadows: ["m8.4.5", "m16.4.1", "m36.1.1"],
  },

  puzzle: (
    <>
      <p>
        A rigid motion of space keeps every length the same. Must it then keep every angle the same too? And which linear maps
        keep lengths: are there more than the rotations and reflections we can picture?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Apply a rotation, a reflection and a shear to the unit square, and compare the lengths of v and Tv.</p>
      <IsometryViz />
    </>
  ),

  theory: (
    <>
      <Definition title="isometry">
        <p>
          An operator <M>{"S"}</M> on an inner product space is an <strong>isometry</strong> if{" "}
          <M>{"\\|Sv\\| = \\|v\\|"}</M> for every <M>{"v"}</M>. On a complex space it is also called unitary, and on a real
          space orthogonal.
        </p>
      </Definition>

      <Theorem title="characterising isometries">
        <p>For an operator <M>{"S"}</M> on a finite-dimensional inner product space, the following are equivalent:</p>
        <ol>
          <li><M>{"S"}</M> is an isometry;</li>
          <li><M>{"\\langle Su, Sv \\rangle = \\langle u, v \\rangle"}</M> for all <M>{"u, v"}</M>;</li>
          <li><M>{"S"}</M> sends some, or every, orthonormal basis to an orthonormal list;</li>
          <li><M>{"S^*S = I"}</M>;</li>
          <li><M>{"S"}</M> is invertible with <M>{"S^{-1} = S^*"}</M>.</li>
        </ol>
      </Theorem>

      <Proof>
        <p>
          The step from 1 to 2 uses a <strong>polarisation identity</strong>, which recovers inner products from norms. In a
          real space,
        </p>
        <MD>{"\\langle u, v \\rangle = \\tfrac14\\big(\\|u + v\\|^2 - \\|u - v\\|^2\\big),"}</MD>
        <p>
          and the right side is unchanged when <M>{"S"}</M> is applied to <M>{"u"}</M> and <M>{"v"}</M>. (The complex identity
          has two more terms.) Then 2 says <M>{"\\langle S^*Su, v \\rangle = \\langle u, v \\rangle"}</M> for all{" "}
          <M>{"u, v"}</M>, which is 4. In finite dimensions a one-sided inverse is two-sided, giving 5, and 5 gives 1 via{" "}
          <M>{"\\|Sv\\|^2 = \\langle S^*Sv, v \\rangle"}</M>.
        </p>
      </Proof>

      <Theorem title="complex isometries">
        <p>
          On a complex space, <M>{"S"}</M> is an isometry exactly when there is an orthonormal basis of eigenvectors whose
          eigenvalues all have absolute value 1.
        </p>
      </Theorem>

      <Proof>
        <p>
          An isometry satisfies <M>{"S^*S = SS^* = I"}</M>, so it is normal, and the complex spectral theorem gives the
          orthonormal eigenbasis. If <M>{"Sv = \\lambda v"}</M> then <M>{"\\|v\\| = \\|Sv\\| = |\\lambda|\\,\\|v\\|"}</M>. The
          converse is a direct computation.
        </p>
      </Proof>

      <Example title="the plane">
        <p>
          In <M>{"\\mathbb{R}^2"}</M>, the first column of an isometry is a unit vector{" "}
          <M>{"(\\cos\\theta, \\sin\\theta)"}</M>, and the second is a unit vector perpendicular to it, which leaves two
          choices: <M>{"\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}"}</M>, a
          rotation with determinant 1, or{" "}
          <M>{"\\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ \\sin\\theta & -\\cos\\theta \\end{pmatrix}"}</M>, a
          reflection with determinant <M>{"-1"}</M>.
        </p>
      </Example>

      <Remark title="real isometries in general">
        <p>
          A real isometry need not have eigenvectors, but there is always an orthonormal basis in which its matrix is block
          diagonal, with <M>{"2 \\times 2"}</M> rotation blocks and entries <M>{"\\pm 1"}</M>. In <M>{"\\mathbb{R}^3"}</M>{" "}
          this says that an isometry with determinant 1 is a rotation about an axis, Euler&rsquo;s theorem. Gram-Schmidt says
          in matrix form that every invertible matrix is <M>{"QR"}</M>, an isometry times an upper-triangular matrix.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these operators on ℝ² are isometries? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Rotation by 30°", "Reflection in the line y = x", "The shear (x, y) ↦ (x + y, y)", "The map v ↦ −v"],
        correct: [0, 1, 3],
      },
    },
    {
      key: "abs",
      rung: "check",
      prompt: <p>If λ is an eigenvalue of an isometry, what is |λ|?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "norm",
      rung: "apply",
      prompt: <p>S is an isometry of ℝ² and v = (3, 4). What is ‖Sv‖?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "angle",
      rung: "apply",
      prompt: <p>The matrix [0.6, −0.8; 0.8, 0.6] is a rotation. Through how many degrees, to the nearest degree?</p>,
      answer: { kind: "numeric", value: 53, tolerance: 1 },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: <p>What is the inverse of an isometry S?</p>,
      answer: { kind: "choice", options: ["S itself", "S*", "−S", "It may not be invertible"], correct: [1] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>On a real inner product space, prove that an isometry preserves inner products: ⟨Su, Sv⟩ = ⟨u, v⟩.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the polarisation identity ⟨u, v⟩ = (‖u + v‖² − ‖u − v‖²)/4.",
          "Applies it to Su and Sv, using linearity: Su ± Sv = S(u ± v).",
          "Uses that S preserves norms to conclude the two inner products are equal.",
        ],
      },
    },
    {
      key: "euler",
      rung: "stretch",
      prompt: <p>Why must an isometry of ℝ³ with determinant 1 fix some line through the origin?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the characteristic polynomial has degree 3, so there is a real eigenvalue.",
          "Notes eigenvalues have absolute value 1, and the complex ones come in conjugate pairs with product 1.",
          "Concludes that the determinant 1 forces a real eigenvalue equal to 1, whose eigenvector spans a fixed line. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what an isometry is, the equivalent conditions including S*S = I, why preserving lengths means preserving angles, what the isometries of the plane are, and the spectral description of complex isometries.",

  glimpse: (
    <p>
      The next lesson combines isometries with positive operators to give the polar and singular value decompositions.
      Differential geometry studies isometries of curved spaces, and physics studies rotation groups.
    </p>
  ),
};
