import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TwoLinesViz } from "@/components/viz/TwoLinesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.2.3",
  minutes: 70,
  links: {
    revisits: ["m3.2.2", "m3.1.3", "m0.7.2"],
    foreshadows: ["m3.3.2", "m3.4.2", "m3.4.5"],
  },

  puzzle: (
    <>
      <p>
        A system of linear equations can have exactly one solution, like two lines crossing. It can have none, like two
        parallel lines. It can have infinitely many, like a line drawn twice. Can it have exactly two solutions? Exactly
        five? And can you tell which case you are in without solving the system?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Keep the line x + y = 2 fixed and move the red one by changing its equation. Watch the second row of the eliminated
        system. As long as it has a pivot, there is one crossing point. When the pivot disappears, everything depends on
        the right-hand side: either the row is a false statement, 0 = something non-zero, or it is the empty truth 0 = 0.
      </p>
      <TwoLinesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="consistent and inconsistent">
        <p>
          A system is <strong>consistent</strong> if it has at least one solution and <strong>inconsistent</strong> if it
          has none.
        </p>
      </Definition>

      <Theorem title="existence">
        <p>
          A linear system is consistent if and only if the echelon form of its augmented matrix has no row of the form
        </p>
        <MD>{"\\left[\\begin{array}{ccc|c} 0 & \\cdots & 0 & b \\end{array}\\right], \\qquad b \\ne 0."}</MD>
        <p>Equivalently, the last column, the right-hand side, is not a pivot column.</p>
      </Theorem>
      <Proof>
        <p>
          Such a row is the equation <M>{"0 = b"}</M>, which nothing satisfies, so the system has no solution. If there is
          no such row, row reduce further to the reduced form, set every free variable to 0, and each non-zero row gives
          the value of its pivot variable directly. That is a solution. Row operations do not change the solutions, so the
          original system has the same answer.
        </p>
      </Proof>

      <Theorem title="uniqueness">
        <p>
          A consistent system has exactly one solution if every column of the coefficient matrix has a pivot, that is, if
          there are no free variables. Otherwise it has infinitely many.
        </p>
      </Theorem>
      <Proof>
        <p>
          In the reduced form, each pivot variable equals a fixed number minus a combination of the free variables. With
          no free variables, every unknown is pinned to one value. With at least one, each choice of its value gives a
          different solution, and there are infinitely many real numbers to choose.
        </p>
      </Proof>

      <Remark title="so never exactly two">
        <p>
          The answer to the puzzle is no. A linear system has no solutions, one, or infinitely many. Here is a second way to
          see it: if p and q are two different solutions of <M>{"Ax = b"}</M>, then so is{" "}
          <M>{"p + t(q - p)"}</M> for every number t, because
        </p>
        <MD>{"A\\big(p + t(q - p)\\big) = Ap + t(Aq - Ap) = b + t(b - b) = b."}</MD>
        <p>The whole line through p and q consists of solutions.</p>
      </Remark>

      <Example title="counting the possibilities">
        <p>
          Let a system have m equations, n unknowns and r pivots in its coefficient matrix. Then r is at most m and at most
          n.
        </p>
        <ul>
          <li>If r = n, there are no free variables: at most one solution.</li>
          <li>If r = m, every row has a pivot, so there is no row of zeros and no 0 = b row: at least one solution, for every right-hand side.</li>
          <li>If r = m = n, the matrix is square and there is exactly one solution for every right-hand side. Such matrices are called invertible, the subject of the next chapter.</li>
          <li>If n &gt; m, there are free variables, so the system has no solution or infinitely many, never exactly one.</li>
        </ul>
      </Example>

      <Remark title="homogeneous systems">
        <p>
          A system with right-hand side zero, <M>{"Ax = 0"}</M>, is <strong>homogeneous</strong>. It is always consistent,
          since x = 0 is a solution. It has other solutions exactly when there is a free variable. In particular, a
          homogeneous system with more unknowns than equations always has a non-zero solution, a fact used again and again
          in the rest of this course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "possible",
      rung: "check",
      prompt: <p>How many solutions can a system of linear equations have? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["none", "exactly one", "exactly two", "infinitely many"], correct: [0, 1, 3] },
    },
    {
      key: "bad",
      rung: "check",
      prompt: <p>An echelon form of an augmented matrix has the row [0 0 0 | 7]. What does this tell you?</p>,
      answer: {
        kind: "choice",
        options: ["The system has no solution.", "z = 7.", "There are infinitely many solutions.", "There was an arithmetic mistake."],
        correct: [0],
      },
    },
    {
      key: "k",
      rung: "apply",
      prompt: (
        <p>
          For which value of k does the system <M>{"x + 2y = 3"}</M>, <M>{"2x + ky = 6"}</M> have infinitely many
          solutions?
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "h",
      rung: "apply",
      prompt: (
        <p>
          The system <M>{"x + 2y = 3"}</M>, <M>{"2x + 4y = h"}</M> has no solution unless h takes one particular value.
          What is it?
        </p>
      ),
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "shape",
      rung: "apply",
      prompt: (
        <p>
          A system has 4 equations in 6 unknowns. Which statements must be true? Choose all that apply.
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "It cannot have exactly one solution.",
          "It must have a solution.",
          "If the right-hand side is zero, it has a non-zero solution.",
          "It has at most 4 pivots.",
        ],
        correct: [0, 2, 3],
      },
    },
    {
      key: "line",
      rung: "prove",
      prompt: (
        <p>
          Suppose p and q are different solutions of the system <M>{"Ax = b"}</M>. Prove that{" "}
          <M>{"\\tfrac{1}{2}(p + q)"}</M> is a solution, and that <M>{"2p - q"}</M> is a solution. Deduce that the system
          cannot have exactly two solutions.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses linearity: A(½p + ½q) = ½Ap + ½Aq = ½b + ½b = b, and similarly A(2p − q) = 2b − b = b.",
          "Notes that ½(p + q) differs from both p and q when p ≠ q, so a third solution exists.",
          "Concludes that two different solutions force infinitely many, for instance via p + t(q − p). The key is the use of linearity.",
        ],
      },
    },
    {
      key: "planes",
      rung: "stretch",
      prompt: (
        <p>
          Three planes in space have equations forming a 3 by 3 system. Describe, in terms of the pivots of the
          coefficient matrix and the augmented matrix, each of these pictures: three planes meeting in a point; three
          planes sharing a line; three planes forming a tent with no common point; three parallel planes.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "A point: three pivots in the coefficient matrix.",
          "A shared line: two pivots and a consistent system, so one free variable. A tent: two pivots in the coefficient matrix but a pivot in the last column of the augmented matrix.",
          "Parallel planes: one pivot in the coefficient matrix, with the right-hand side producing 0 = b rows. A sensible attempt at the correspondence earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to tell from an echelon form whether a system has no solution, one, or infinitely many, and why it can never have exactly two.",

  glimpse: (
    <p>
      The Matrices chapter studies the square case with a pivot in every column, where A has an inverse and{" "}
      <M>{"x = A^{-1}b"}</M>. The Vector spaces chapter recasts existence as &ldquo;is b in the column space?&rdquo; and
      uniqueness as &ldquo;is the null space just zero?&rdquo;, and the four fundamental subspaces tie these together.
    </p>
  ),
};
