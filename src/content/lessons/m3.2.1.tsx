import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { EliminationViz } from "@/components/viz/EliminationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.2.1",
  minutes: 75,
  links: {
    revisits: ["m0.2.2", "m3.1.3"],
    foreshadows: ["m3.2.2", "m3.3.3", "m19.5.1"],
  },

  puzzle: (
    <>
      <p>
        Solve these three equations together:
      </p>
      <MD>{"\\begin{aligned} x + 2y + z &= 2 \\\\ 3x + 8y + z &= 12 \\\\ 4y + z &= 2 \\end{aligned}"}</MD>
      <p>
        At school you might substitute, or add multiples of equations, in whatever order looks easiest. That works for
        three equations if you are lucky and careful. A weather forecast solves systems with millions of unknowns. What
        recipe works every time, needs no luck, and could be followed by a machine?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Use the first equation to remove x from every equation below it. Then use the new second equation to remove y
        from the one below that. What is left is a staircase: the last equation has one unknown, the one above it two, and
        so on. Solve from the bottom up. Step through it, and try the other two systems to see what can go wrong.
      </p>
      <EliminationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the augmented matrix">
        <p>
          A linear system is determined by its coefficients and right-hand sides, so we write only those, in a grid called
          the <strong>augmented matrix</strong>. The puzzle&rsquo;s system becomes
        </p>
        <MD>{"\\left[\\begin{array}{ccc|c} 1 & 2 & 1 & 2 \\\\ 3 & 8 & 1 & 12 \\\\ 0 & 4 & 1 & 2 \\end{array}\\right]."}</MD>
        <p>Each row is one equation; each of the first three columns belongs to one unknown.</p>
      </Definition>

      <Definition title="elimination">
        <p>
          A <strong>pivot</strong> is the first non-zero entry in a row that is used to clear the entries below it. To
          clear the entry <M>{"a_{ij}"}</M> below the pivot <M>{"a_{kj}"}</M>, subtract <M>{"\\ell = a_{ij} / a_{kj}"}</M>{" "}
          times row k from row i. The number <M>{"\\ell"}</M> is the <strong>multiplier</strong>. Work column by column,
          left to right, until the matrix is <strong>upper triangular</strong>: all zeros below the diagonal.
        </p>
      </Definition>

      <Example title="the puzzle, solved">
        <p>
          The first pivot is 1. Subtract 3 times row 1 from row 2, giving <M>{"(0, 2, -2 \\mid 6)"}</M>. Row 3 already has a
          0 in the first column. The second pivot is 2; subtract 2 times the new row 2 from row 3, giving{" "}
          <M>{"(0, 0, 5 \\mid -10)"}</M>. The system is now
        </p>
        <MD>{"x + 2y + z = 2, \\qquad 2y - 2z = 6, \\qquad 5z = -10."}</MD>
        <p>
          <strong>Back substitution</strong>: z = &minus;2, then <M>{"2y = 6 + 2z = 2"}</M> so y = 1, then{" "}
          <M>{"x = 2 - 2y - z = 2"}</M>. The three planes meet at (2, 1, &minus;2).
        </p>
      </Example>

      <Theorem title="row operations do not change the solutions">
        <p>
          Subtracting a multiple of one equation from another, swapping two equations, or multiplying an equation by a
          non-zero number gives a system with exactly the same solutions.
        </p>
      </Theorem>
      <p>
        Any solution of the old system satisfies the new equations, since they are combinations of the old ones. Each
        operation can be undone by an operation of the same kind: add the multiple back, swap again, divide by the
        number. So any solution of the new system satisfies the old one too. That is why elimination is safe: it simplifies
        the system without gaining or losing a solution.
      </p>

      <Remark title="when elimination breaks down">
        <ul>
          <li>
            <strong>A zero in the pivot position.</strong> If a row below has a non-zero entry in that column, swap the rows
            and carry on. This is only a temporary breakdown.
          </li>
          <li>
            <strong>No pivot available at all.</strong> If every entry in the column at and below the pivot position is
            zero, the column has no pivot. Then the system has either no solution or infinitely many, depending on the
            right-hand side. The next two lessons sort this out completely.
          </li>
        </ul>
      </Remark>

      <Remark title="cost">
        <p>
          Clearing below one pivot in an n by n system costs about <M>{"n^2"}</M> multiplications, and there are n pivots,
          so elimination takes about <M>{"n^3/3"}</M> multiplications in all. Doubling n multiplies the work by eight. Every
          large-scale solver is a refinement of this method, organised to save time and control rounding errors. The
          method is old: a Chinese text from about two thousand years ago, the <em>Nine Chapters on the Mathematical
          Art</em>, solves systems by the same column operations on a counting board.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mult",
      rung: "check",
      prompt: (
        <p>
          The first pivot is 2 and the entry below it is 6. What multiplier clears the entry below?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "ops",
      rung: "check",
      prompt: <p>Which of these operations never change the solutions of a system? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "Subtract 4 times one equation from another.",
          "Swap two equations.",
          "Multiply an equation by 0.",
          "Multiply an equation by −2.",
        ],
        correct: [0, 1, 3],
      },
    },
    {
      key: "two",
      rung: "apply",
      prompt: (
        <p>
          Solve <M>{"x + y = 5"}</M>, <M>{"2x + 3y = 13"}</M> by elimination. What is y?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "three",
      rung: "apply",
      prompt: (
        <p>
          Solve <M>{"x + y + z = 6"}</M>, <M>{"2x + 3y + z = 11"}</M>, <M>{"x + 2y + 3z = 14"}</M>. What is z?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "swap",
      rung: "apply",
      prompt: (
        <p>
          In the system <M>{"y + z = 5"}</M>, <M>{"x + y + z = 6"}</M>, <M>{"2x + y + 3z = 13"}</M>, the first pivot position
          holds a 0. After swapping the first two rows and finishing the elimination, what is x?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "undo",
      rung: "prove",
      prompt: (
        <p>
          Prove that if row 2 is replaced by (row 2) &minus; <M>{"\\ell"}</M>(row 1), the new system has exactly the same
          solutions as the old one. Why is a row operation that multiplies a row by 0 not allowed?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Shows that a solution of the old system satisfies the new second equation, since it is a combination of equations it satisfies.",
          "Shows the converse by undoing the operation: adding ℓ(row 1) back recovers the old row 2, so a solution of the new system satisfies the old one.",
          "Explains that multiplying by 0 cannot be undone and throws away an equation, so it can gain solutions. A clear informal argument is enough.",
        ],
      },
    },
    {
      key: "count",
      rung: "stretch",
      prompt: (
        <p>
          Count the multiplications needed to clear everything below the first pivot of an n by n system, including the
          right-hand side. Use this to explain why elimination costs roughly <M>{"n^3/3"}</M> multiplications, and estimate
          how much longer a system with 2000 unknowns takes than one with 1000.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Counts about n − 1 rows below the pivot, each needing about n multiplications, so roughly n² for the first column.",
          "Adds the stages, roughly n² + (n − 1)² + … + 1², and recognises this sum as about n³/3.",
          "Concludes that doubling n multiplies the work by about 8. Approximate reasoning is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Gaussian elimination turns a system into a staircase, what a pivot and a multiplier are, why the row operations keep the solutions the same, and how back substitution finishes the job.",

  glimpse: (
    <p>
      The next lesson finishes elimination into a standard shape, the reduced echelon form, which shows every solution at
      once. In the Matrices chapter the multipliers reappear as a matrix L, and elimination becomes the factorisation A =
      LU. Numerical Analysis asks how to choose pivots so that rounding errors do not grow.
    </p>
  ),
};
