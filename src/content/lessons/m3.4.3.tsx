import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { IndependenceViz } from "@/components/viz/IndependenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.4.3",
  minutes: 70,
  links: {
    revisits: ["m3.4.2", "m3.1.1", "m3.2.3"],
    foreshadows: ["m3.4.4", "m3.6.3", "m3.7.2"],
  },

  puzzle: (
    <>
      <p>
        Three vectors in space may span all of space, or only a plane, or only a line. When they span less than you might
        hope, one of them is wasted: it adds no new direction, because it is already a combination of the others. How can
        you tell, quickly and reliably, whether a list of vectors contains a wasted one?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        v₁ is fixed. Change v₂ and watch the grey dots, the combinations of v₁ and v₂ with whole number coefficients. When
        v₂ points in a new direction, they spread over the whole plane. When v₂ lines up with v₁, they all fall onto one
        line. Then add a third vector and see why three vectors in the plane can never all be needed.
      </p>
      <IndependenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="linear independence">
        <p>
          Vectors <M>{"v_1, \\dots, v_k"}</M> are <strong>linearly independent</strong> if the only combination giving the
          zero vector is the trivial one:
        </p>
        <MD>{"c_1v_1 + \\dots + c_kv_k = 0 \\implies c_1 = \\dots = c_k = 0."}</MD>
        <p>
          Otherwise they are <strong>dependent</strong>: some combination with coefficients not all zero gives 0.
        </p>
      </Definition>

      <Theorem title="dependence means redundancy">
        <p>
          The vectors are dependent if and only if one of them is a linear combination of the others.
        </p>
      </Theorem>
      <Proof>
        <p>
          If <M>{"c_1v_1 + \\dots + c_kv_k = 0"}</M> with, say, <M>{"c_j \\ne 0"}</M>, divide by <M>{"c_j"}</M> and solve
          for <M>{"v_j"}</M>. Conversely, if <M>{"v_j = \\sum_{i \\ne j} a_iv_i"}</M>, then{" "}
          <M>{"\\sum_{i \\ne j} a_iv_i - v_j = 0"}</M> is a non-trivial combination, since the coefficient of{" "}
          <M>{"v_j"}</M> is −1.
        </p>
      </Proof>

      <Theorem title="the matrix test">
        <p>
          Put the vectors as the columns of a matrix A. They are independent exactly when <M>{"N(A) = \\{0\\}"}</M>, that
          is, when elimination finds a pivot in every column and there are no free variables. Equivalently, the rank of A
          equals the number of columns.
        </p>
      </Theorem>
      <p>
        This is because <M>{"Ac = c_1v_1 + \\dots + c_kv_k"}</M>, so a non-zero c in the null space is precisely a
        non-trivial combination giving 0.
      </p>

      <Example title="a dependent triple">
        <p>Take (1, 0, 1), (0, 1, 1) and (1, 1, 2). Elimination on the matrix with these columns gives</p>
        <MD>{"\\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix} \\to \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix}."}</MD>
        <p>
          Column 3 is free, and the special solution (−1, −1, 1) says that{" "}
          <M>{"-v_1 - v_2 + v_3 = 0"}</M>, that is, <M>{"v_3 = v_1 + v_2"}</M>. The three vectors span only a plane.
        </p>
      </Example>

      <Theorem title="too many vectors">
        <p>Any n + 1 or more vectors in <M>{"\\mathbb{R}^n"}</M> are dependent.</p>
      </Theorem>
      <Proof>
        <p>
          The matrix with these vectors as columns has n rows and more than n columns. It has at most n pivots, one per row,
          so at least one column is free, and <M>{"Ac = 0"}</M> has a non-zero solution.
        </p>
      </Proof>

      <Remark title="special cases">
        <ul>
          <li>Any list containing the zero vector is dependent: <M>{"1 \\cdot 0 = 0"}</M>.</li>
          <li>Two vectors are dependent exactly when one is a multiple of the other.</li>
          <li>
            For n vectors in <M>{"\\mathbb{R}^n"}</M>, independence is the same as the square matrix being invertible, and
            the same as its determinant being non-zero. In the plane, the determinant is the signed area of the
            parallelogram the two vectors span.
          </li>
        </ul>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which statement says that v₁, v₂, v₃ are linearly independent?</p>,
      answer: {
        kind: "choice",
        options: [
          "No two of them are parallel.",
          "The only solution of c₁v₁ + c₂v₂ + c₃v₃ = 0 is c₁ = c₂ = c₃ = 0.",
          "They are all non-zero.",
          "They span a plane.",
        ],
        correct: [1],
      },
    },
    {
      key: "max",
      rung: "check",
      prompt: <p>What is the largest number of linearly independent vectors in ℝ⁴?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which lists are linearly independent? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "(1, 2) and (2, 4).",
          "(1, 0, 0), (1, 1, 0) and (1, 1, 1).",
          "(1, 2, 3), (0, 0, 0) and (4, 5, 6).",
          "(1, 1) and (1, −1).",
        ],
        correct: [1, 3],
      },
    },
    {
      key: "k",
      rung: "apply",
      prompt: <p>For which value of k are (1, 2) and (3, k) dependent?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "coef",
      rung: "apply",
      prompt: (
        <p>
          The vectors (1, 1, 0), (0, 1, 1) and (1, 3, 2) are dependent. In the relation{" "}
          <M>{"a(1,1,0) + b(0,1,1) - (1,3,2) = 0"}</M>, what is b?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "sub",
      rung: "prove",
      prompt: (
        <p>
          Prove that any non-empty subset of an independent list is independent, and that if v₁, …, vₖ are independent
          and w is not in their span, then v₁, …, vₖ, w are independent.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "For the subset: a non-trivial relation among some of the vectors extends, with zero coefficients for the rest, to a non-trivial relation among all of them.",
          "For adding w: in a relation c₁v₁ + … + cₖvₖ + dw = 0, argues d = 0, since otherwise w would be in the span.",
          "Then uses independence of the vᵢ to get all cᵢ = 0. A clear outline earns full credit.",
        ],
      },
    },
    {
      key: "funcs",
      rung: "stretch",
      prompt: (
        <p>
          In the space of functions, show that 1, x and x² are linearly independent. Then decide whether{" "}
          <M>{"\\sin^2 x"}</M>, <M>{"\\cos^2 x"}</M> and 1 are independent.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Argues that a + bx + cx² = 0 for every x forces a = b = c = 0, for example because a non-zero quadratic has at most two roots, or by substituting three values of x.",
          "Notices that sin²x + cos²x − 1 = 0 for all x, so the second list is dependent.",
          "Explains clearly what 'equals zero' means here, namely the zero function. Any sound reasoning earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what it means for vectors to be linearly independent, why dependence means one vector is redundant, how elimination tests it, and why three vectors in the plane are always dependent.",

  glimpse: (
    <p>
      An independent list that also spans is a basis, the subject of the next lesson. Determinants test independence of n
      vectors in one number, and diagonalisation depends on finding n independent eigenvectors.
    </p>
  ),
};
