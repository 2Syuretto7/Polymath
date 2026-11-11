import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { OrthogonalViz } from "@/components/viz/OrthogonalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.5.1",
  minutes: 70,
  links: {
    revisits: ["m3.1.2", "m3.4.5", "m3.4.4"],
    foreshadows: ["m3.5.2", "m3.5.4", "m8.3.3"],
  },

  puzzle: (
    <>
      <p>
        The floor of a room and one of its walls are both planes, and they meet at a right angle. Yet they are not
        perpendicular in the sense of linear algebra: the line where they meet lies in both, and a vector cannot be
        perpendicular to itself. What, then, should it mean for two subspaces to be perpendicular, and which pairs of
        subspaces in ℝ³ can be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A has rows r and 2r, so its row space is the shaded line through r. Move x until r · x = 0. Then Ax = 0 too: the
        null space is exactly the dashed line of vectors perpendicular to the row space.
      </p>
      <OrthogonalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="orthogonal vectors">
        <p>
          Vectors x and y are <strong>orthogonal</strong> if <M>{"x^{\\mathsf T}y = 0"}</M>. The zero vector is orthogonal
          to every vector. By Pythagoras, x and y are orthogonal exactly when{" "}
          <M>{"\\|x + y\\|^2 = \\|x\\|^2 + \\|y\\|^2"}</M>, since{" "}
          <M>{"\\|x + y\\|^2 = \\|x\\|^2 + 2x^{\\mathsf T}y + \\|y\\|^2"}</M>.
        </p>
      </Definition>

      <Theorem title="orthogonal non-zero vectors are independent">
        <p>If <M>{"q_1, \\dots, q_k"}</M> are non-zero and each pair is orthogonal, they are linearly independent.</p>
      </Theorem>
      <Proof>
        <p>
          Suppose <M>{"c_1q_1 + \\dots + c_kq_k = 0"}</M>. Take the dot product with <M>{"q_i"}</M>: every term vanishes
          except <M>{"c_i q_i^{\\mathsf T}q_i = c_i\\|q_i\\|^2"}</M>, so <M>{"c_i\\|q_i\\|^2 = 0"}</M> and{" "}
          <M>{"c_i = 0"}</M>.
        </p>
      </Proof>

      <Definition title="orthogonal subspaces">
        <p>
          Subspaces V and W are <strong>orthogonal</strong> if every vector in V is orthogonal to every vector in W. Then
          they meet only in 0, because a vector in both is orthogonal to itself, and <M>{"v^{\\mathsf T}v = \\|v\\|^2 = 0"}</M>{" "}
          forces v = 0. That is why the floor and the wall are not orthogonal subspaces.
        </p>
      </Definition>

      <Definition title="orthogonal complement">
        <p>
          The <strong>orthogonal complement</strong> of a subspace V of <M>{"\\mathbb{R}^n"}</M> is the set of all vectors
          orthogonal to every vector in V:
        </p>
        <MD>{"V^{\\perp} = \\{w \\in \\mathbb{R}^n : v^{\\mathsf T}w = 0 \\text{ for all } v \\in V\\}."}</MD>
        <p>It is always a subspace, and <M>{"\\dim V + \\dim V^{\\perp} = n"}</M>.</p>
      </Definition>

      <Theorem title="the fundamental theorem, part two">
        <p>For an m by n matrix A,</p>
        <MD>{"N(A) = C(A^{\\mathsf T})^{\\perp} \\text{ in } \\mathbb{R}^n, \\qquad N(A^{\\mathsf T}) = C(A)^{\\perp} \\text{ in } \\mathbb{R}^m."}</MD>
      </Theorem>
      <Proof>
        <p>
          Ax = 0 says exactly that x is orthogonal to every row of A, hence to every combination of rows. So N(A) is the set
          of all vectors orthogonal to the row space. The second statement is the first applied to{" "}
          <M>{"A^{\\mathsf T}"}</M>.
        </p>
      </Proof>
      <p>
        The dimensions confirm it: r + (n − r) = n. Every x in <M>{"\\mathbb{R}^n"}</M> splits uniquely as{" "}
        <M>{"x = x_r + x_n"}</M>, with <M>{"x_r"}</M> in the row space and <M>{"x_n"}</M> in the null space, and then{" "}
        <M>{"Ax = Ax_r"}</M>: the null space part is invisible to A.
      </p>

      <Example title="a plane and its normal">
        <p>
          The plane <M>{"x + 2y - z = 0"}</M> in ℝ³ is the null space of the 1 by 3 matrix{" "}
          <M>{"A = \\begin{bmatrix} 1 & 2 & -1 \\end{bmatrix}"}</M>. Its orthogonal complement is the row space, the line
          through (1, 2, −1), the normal vector. Dimensions 2 + 1 = 3.
        </p>
      </Example>

      <Remark title="why this matters for solving equations">
        <p>
          Ax = b is solvable exactly when b lies in C(A), which is the same as b being orthogonal to the left null space.
          So for every y with <M>{"A^{\\mathsf T}y = 0"}</M> one needs <M>{"y^{\\mathsf T}b = 0"}</M>. This is the
          condition elimination finds when a row becomes zero: the combination of rows that gives 0 must also give 0 on the
          right-hand side.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "orth",
      rung: "check",
      prompt: <p>For which value of c are (1, c, 2) and (3, 1, −2) orthogonal?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "dim",
      rung: "check",
      prompt: <p>V is a 3-dimensional subspace of ℝ⁷. What is the dimension of V⊥?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which pairs of subspaces of ℝ³ can be orthogonal? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Two lines through 0.", "A line and a plane through 0.", "Two planes through 0.", "The zero subspace and all of ℝ³."],
        correct: [0, 1, 3],
      },
    },
    {
      key: "normal",
      rung: "apply",
      prompt: (
        <p>
          The orthogonal complement of the line through (2, −1, 3) is a plane <M>{"2x - y + cz = 0"}</M>. What is c?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "solv",
      rung: "apply",
      prompt: (
        <p>
          A has rows (1, 2), (2, 4) and (0, 1). The left null space contains y = (2, −1, 0). For Ax = (b₁, b₂, b₃) to be
          solvable, which must hold?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["b₁ = b₂", "2b₁ − b₂ = 0", "b₃ = 0", "b₁ + b₂ + b₃ = 0"],
        correct: [1],
      },
    },
    {
      key: "perpperp",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"V \\subseteq (V^{\\perp})^{\\perp}"}</M> for any subspace V of <M>{"\\mathbb{R}^n"}</M>, and use
          the dimension formula to deduce that they are equal.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Shows that each v in V is orthogonal to every w in V⊥, by the definition of V⊥, so v lies in (V⊥)⊥.",
          "Computes dim (V⊥)⊥ = n − dim V⊥ = n − (n − dim V) = dim V.",
          "Concludes equality from containment and equal dimension. A brief proof earns full credit.",
        ],
      },
    },
    {
      key: "split",
      rung: "stretch",
      prompt: (
        <p>
          Let <M>{"A = \\begin{bmatrix} 1 & 1 \\end{bmatrix}"}</M> and x = (3, 1). Split x into a row space part and a null
          space part, and check that A sends x and its row space part to the same place. Why does this show that A, restricted
          to its row space, is one-to-one?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Finds x_r = (2, 2) and x_n = (1, −1), and checks they are orthogonal and add to x.",
          "Checks Ax = Ax_r = 4.",
          "Argues that if two row space vectors had the same image, their difference would be in both the row space and the null space, hence zero. Any sound reasoning earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what it means for vectors and for subspaces to be orthogonal, why orthogonal non-zero vectors are independent, what an orthogonal complement is, and why the null space is the orthogonal complement of the row space.",

  glimpse: (
    <p>
      The next lesson finds the point of a subspace closest to a given vector by dropping a perpendicular. Linear Algebra
      II proves the same results in any inner product space, including spaces of functions.
    </p>
  ),
};
