import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CoordinatesViz } from "@/components/viz/CoordinatesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.4.4",
  minutes: 80,
  links: {
    revisits: ["m3.4.3", "m3.4.1", "m3.3.2"],
    foreshadows: ["m3.4.5", "m3.8.2", "m8.1.1"],
  },

  puzzle: (
    <>
      <p>
        A plane through the origin in space is, everyone agrees, two-dimensional. But what does that mean? You can describe
        it as the span of two vectors, or of three, or of a hundred. Is there a number that does not depend on how you
        describe the plane, and how can you be sure that a different, cleverer description could not use fewer vectors?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The red point stays put. Change the basis and its coordinates change: they are the amounts of b₁ and b₂ needed to
        reach it, read off the slanted grid. Every basis of the plane has exactly two vectors, and with any of them each
        point has exactly one pair of coordinates.
      </p>
      <CoordinatesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="basis">
        <p>
          A <strong>basis</strong> of a vector space V is a list of vectors that is linearly independent and spans V. The
          standard basis of <M>{"\\mathbb{R}^n"}</M> is <M>{"e_1, \\dots, e_n"}</M>, the columns of the identity.
        </p>
      </Definition>

      <Theorem title="unique coordinates">
        <p>
          If <M>{"v_1, \\dots, v_n"}</M> is a basis of V, every vector in V can be written as{" "}
          <M>{"c_1v_1 + \\dots + c_nv_n"}</M> in exactly one way. The numbers <M>{"c_i"}</M> are its{" "}
          <strong>coordinates</strong> in that basis.
        </p>
      </Theorem>
      <Proof>
        <p>
          The combination exists because the basis spans V. If there were two,{" "}
          <M>{"\\sum c_iv_i = \\sum d_iv_i"}</M>, then <M>{"\\sum (c_i - d_i)v_i = 0"}</M>, and independence forces{" "}
          <M>{"c_i = d_i"}</M> for every i.
        </p>
      </Proof>

      <Theorem title="the replacement lemma">
        <p>
          If <M>{"w_1, \\dots, w_m"}</M> are independent vectors in the span of <M>{"v_1, \\dots, v_n"}</M>, then{" "}
          <M>{"m \\le n"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          Write each <M>{"w_j"}</M> as a combination of the <M>{"v_i"}</M>: <M>{"w_j = \\sum_i a_{ij}v_i"}</M>. The
          coefficients form an n by m matrix A. If m &gt; n, A has more columns than rows, so <M>{"Ac = 0"}</M> for some
          non-zero c. Then
        </p>
        <MD>{"\\sum_j c_jw_j = \\sum_j c_j\\sum_i a_{ij}v_i = \\sum_i (Ac)_iv_i = 0,"}</MD>
        <p>a non-trivial relation among the <M>{"w_j"}</M>, contradicting their independence.</p>
      </Proof>

      <Theorem title="dimension is well defined">
        <p>
          Any two bases of V have the same number of vectors. This number is the <strong>dimension</strong> of V.
        </p>
      </Theorem>
      <Proof>
        <p>
          If <M>{"v_1, \\dots, v_n"}</M> and <M>{"w_1, \\dots, w_m"}</M> are both bases, the w are independent and lie in
          the span of the v, so <M>{"m \\le n"}</M>; by symmetry <M>{"n \\le m"}</M>.
        </p>
      </Proof>

      <Example title="dimensions">
        <ul>
          <li><M>{"\\mathbb{R}^n"}</M> has dimension n. The zero space has dimension 0, with the empty basis.</li>
          <li>The plane <M>{"x + y + z = 0"}</M> has dimension 2, with basis (1, −1, 0), (1, 0, −1).</li>
          <li>Polynomials of degree at most 2 have dimension 3, with basis <M>{"1, x, x^2"}</M>.</li>
          <li>The 2 by 2 matrices have dimension 4. The symmetric ones have dimension 3.</li>
          <li>All polynomials together form an infinite-dimensional space: no finite list spans them.</li>
        </ul>
      </Example>

      <Theorem title="extending and trimming">
        <p>In a space of dimension n:</p>
        <ul>
          <li>any independent list can be extended to a basis, and any spanning list can be trimmed to a basis;</li>
          <li>n independent vectors automatically span, and n spanning vectors are automatically independent;</li>
          <li>a subspace has dimension at most n, with equality only for the whole space.</li>
        </ul>
      </Theorem>

      <Remark title="bases from elimination">
        <p>
          For a matrix A of rank r, the r pivot columns are a basis of C(A), and the n − r special solutions are a basis of
          N(A). So <M>{"\\dim C(A) = r"}</M> and <M>{"\\dim N(A) = n - r"}</M>, and the two dimensions add up to the
          number of columns. This is the first form of the rank–nullity theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which two conditions make a list of vectors a basis of V?</p>,
      answer: {
        kind: "choice",
        options: [
          "It spans V and is linearly independent.",
          "It spans V and contains the zero vector.",
          "Its vectors are perpendicular and of length 1.",
          "It has as many vectors as V has elements.",
        ],
        correct: [0],
      },
    },
    {
      key: "plane",
      rung: "check",
      prompt: <p>What is the dimension of the subspace of ℝ⁴ given by x₁ + x₂ + x₃ + x₄ = 0?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "coord",
      rung: "apply",
      prompt: (
        <p>
          In the basis b₁ = (1, 1), b₂ = (1, −1) of the plane, w = (5, 1) has coordinates [c₁, c₂]. What is c₁?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "upper",
      rung: "apply",
      prompt: <p>What is the dimension of the space of 3 by 3 upper triangular matrices?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "basisq",
      rung: "apply",
      prompt: <p>Which lists are bases of ℝ³? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "(1, 0, 0), (0, 1, 0)",
          "(1, 1, 0), (0, 1, 1), (1, 0, 1)",
          "(1, 2, 3), (2, 4, 6), (0, 0, 1)",
          "(1, 0, 0), (0, 1, 0), (0, 0, 1), (1, 1, 1)",
        ],
        correct: [1],
      },
    },
    {
      key: "auto",
      rung: "prove",
      prompt: (
        <p>
          Let V have dimension n. Using the replacement lemma, prove that n independent vectors in V must span V.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Supposes the n independent vectors do not span, and picks w in V outside their span.",
          "Uses the earlier fact that adding a vector outside the span keeps the list independent, giving n + 1 independent vectors.",
          "Derives a contradiction with the replacement lemma applied to a basis of n vectors. A clear argument earns full credit.",
        ],
      },
    },
    {
      key: "sum",
      rung: "stretch",
      prompt: (
        <p>
          For subspaces S and T of a finite-dimensional space, the formula{" "}
          <M>{"\\dim(S + T) = \\dim S + \\dim T - \\dim(S \\cap T)"}</M> holds. Check it for two different planes through
          the origin in ℝ³, and sketch a proof by starting from a basis of <M>{"S \\cap T"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Checks the example: two distinct planes meet in a line and together span ℝ³, so 3 = 2 + 2 − 1.",
          "Starts from a basis of S ∩ T, extends it to bases of S and of T, and combines them.",
          "Argues that the combined list spans S + T and is independent, and counts its length. A sketch with the main ideas earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a basis is, why coordinates in a basis are unique, why every basis of a space has the same number of vectors, and how the pivot columns and special solutions give bases for the column space and null space.",

  glimpse: (
    <p>
      The next lesson counts the dimensions of all four subspaces of a matrix. Change of basis, in the last chapter, asks
      how a matrix changes when the coordinates do, and Linear Algebra II proves the same theorems for any field.
    </p>
  ),
};
