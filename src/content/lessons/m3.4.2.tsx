import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ColumnSpaceViz } from "@/components/viz/ColumnSpaceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.4.2",
  minutes: 75,
  links: {
    revisits: ["m3.4.1", "m3.2.2", "m3.2.3"],
    foreshadows: ["m3.4.5", "m3.5.3", "m8.1.3"],
  },

  puzzle: (
    <>
      <p>
        For a system Ax = b, two questions come first. For which right-hand sides b is there any solution at all? And
        when there is one, how much freedom is left in choosing it? Both answers turn out to be subspaces, one living
        where the b vectors live and one where the x vectors live. What are they, and how do you find them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose x on the left. On the right, Ax is built as x₁ times the first column plus x₂ times the second, drawn head
        to tail. When the columns point in different directions, Ax can reach anywhere. When they lie on one line, Ax is
        trapped on that line, and a whole line of x vectors is sent to zero.
      </p>
      <ColumnSpaceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="column space">
        <p>
          The <strong>column space</strong> C(A) of an m by n matrix A is the span of its columns, a subspace of{" "}
          <M>{"\\mathbb{R}^m"}</M>. Since <M>{"Ax = x_1a_1 + \\dots + x_na_n"}</M>, it is the set of all vectors Ax:
        </p>
        <MD>{"Ax = b \\text{ has a solution} \\iff b \\in C(A)."}</MD>
      </Definition>

      <Definition title="null space">
        <p>
          The <strong>null space</strong> N(A) is the set of all solutions of <M>{"Ax = 0"}</M>, a subspace of{" "}
          <M>{"\\mathbb{R}^n"}</M>. It is a subspace because <M>{"Ax = 0"}</M> and <M>{"Ay = 0"}</M> give{" "}
          <M>{"A(x + y) = 0"}</M> and <M>{"A(cx) = 0"}</M>.
        </p>
      </Definition>

      <Example title="special solutions">
        <p>
          To find N(A), reduce A to its reduced echelon form R; elimination does not change the solutions of{" "}
          <M>{"Ax = 0"}</M>. For each free variable, set it to 1 and the other free variables to 0, and solve for the pivot
          variables. The result is a <strong>special solution</strong>. Take
        </p>
        <MD>{"A = \\begin{bmatrix} 1 & 2 & 2 & 4 \\\\ 2 & 4 & 3 & 5 \\end{bmatrix} \\to R = \\begin{bmatrix} 1 & 2 & 0 & -2 \\\\ 0 & 0 & 1 & 3 \\end{bmatrix}."}</MD>
        <p>
          The pivots are in columns 1 and 3, so <M>{"x_2"}</M> and <M>{"x_4"}</M> are free. The two special solutions are
        </p>
        <MD>{"s_1 = (-2, 1, 0, 0), \\qquad s_2 = (2, 0, -3, 1),"}</MD>
        <p>and N(A) is their span: every solution of Ax = 0 is <M>{"x_2s_1 + x_4s_2"}</M>.</p>
      </Example>

      <Theorem title="the complete solution">
        <p>
          If <M>{"x_p"}</M> is any one solution of <M>{"Ax = b"}</M>, then the solutions are exactly{" "}
          <M>{"x_p + x_n"}</M> with <M>{"x_n"}</M> in N(A).
        </p>
      </Theorem>
      <Proof>
        <p>
          If <M>{"Ax_n = 0"}</M>, then <M>{"A(x_p + x_n) = b + 0 = b"}</M>. Conversely, if <M>{"Ax = b"}</M>, then{" "}
          <M>{"A(x - x_p) = b - b = 0"}</M>, so <M>{"x - x_p"}</M> lies in N(A).
        </p>
      </Proof>
      <p>
        So the solution set of <M>{"Ax = b"}</M>, when it is not empty, is the null space shifted to pass through{" "}
        <M>{"x_p"}</M>: a line, plane or point parallel to N(A). It is a subspace only when b = 0.
      </p>

      <Example title="the column space from elimination">
        <p>
          For the A above, the pivot columns of A, columns 1 and 3, span C(A). Here they are (1, 2) and (2, 3), which are
          independent, so C(A) is the whole plane and Ax = b is solvable for every b. Note that we take the columns of A,
          not of R: row operations change the column space, though not the null space.
        </p>
      </Example>

      <Remark title="the rank">
        <p>
          The number of pivots is the <strong>rank</strong> r. A has r pivot variables and n − r free variables, so there
          are n − r special solutions. A matrix of rank r has an r-dimensional column space and an (n − r)-dimensional null
          space, a statement that becomes precise once dimension is defined two lessons from now.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "where",
      rung: "check",
      prompt: <p>A is 5 by 3. In which space does its null space lie?</p>,
      answer: { kind: "choice", options: ["ℝ³", "ℝ⁵", "ℝ¹⁵", "ℝ²"], correct: [0] },
    },
    {
      key: "solv",
      rung: "check",
      prompt: <p>When does Ax = b have at least one solution?</p>,
      answer: {
        kind: "choice",
        options: ["When b is in the null space of A.", "When b is in the column space of A.", "Always.", "When A is square."],
        correct: [1],
      },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>A is 4 by 7 with rank 3. How many special solutions does Ax = 0 have?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "special",
      rung: "apply",
      prompt: (
        <p>
          <M>{"R = \\begin{bmatrix} 1 & 3 & 0 & 5 \\\\ 0 & 0 & 1 & -2 \\end{bmatrix}"}</M>. The special solution with{" "}
          <M>{"x_2 = 0"}</M> and <M>{"x_4 = 1"}</M> has which value of <M>{"x_1"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: -5 },
    },
    {
      key: "shift",
      rung: "apply",
      prompt: (
        <p>
          <M>{"A = \\begin{bmatrix} 1 & 1 \\\\ 2 & 2 \\end{bmatrix}"}</M>. Which describes the solutions of{" "}
          <M>{"Ax = (3, 6)"}</M>?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Exactly one point.",
          "No solutions.",
          "The line x₁ + x₂ = 3, which is the null space line x₁ + x₂ = 0 shifted.",
          "The whole plane.",
        ],
        correct: [2],
      },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: (
        <p>
          Prove that N(A) is a subspace, and that the solution set of <M>{"Ax = b"}</M> with <M>{"b \\ne 0"}</M> is never
          a subspace. Then prove that <M>{"N(A) \\subseteq N(BA)"}</M> for any B with as many columns as A has rows.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Checks that 0 is in N(A) and that N(A) is closed under addition and multiplication by scalars.",
          "Observes that 0 is not a solution of Ax = b when b ≠ 0, so the solution set misses the zero vector.",
          "Shows that Ax = 0 gives BAx = B0 = 0. A short clear proof earns full credit.",
        ],
      },
    },
    {
      key: "same",
      rung: "stretch",
      prompt: (
        <p>
          Row operations do not change the null space but can change the column space. Give a 2 by 2 example where A and
          its reduced echelon form R have different column spaces, and explain why the pivot columns of A, rather than
          those of R, form a basis for C(A).
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a valid example, such as A = [1 1; 1 1] with C(A) the line through (1, 1) and R = [1 1; 0 0] with C(R) the line through (1, 0).",
          "Explains that the columns of A and of R satisfy the same linear relations, since Ax = 0 and Rx = 0 have the same solutions.",
          "Concludes that because the pivot columns of R are independent and the others are combinations of them, the same holds for the corresponding columns of A. Any reasonable explanation earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the column space and null space of a matrix are, how they answer whether Ax = b is solvable and how many solutions it has, and how to find the special solutions from the reduced echelon form.",

  glimpse: (
    <p>
      Two more subspaces complete the picture in the lesson on the four fundamental subspaces. When Ax = b has no
      solution, least squares finds the point of C(A) nearest to b. Linear Algebra II calls the column space the range.
    </p>
  ),
};
