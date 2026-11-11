import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { RowOpsViz } from "@/components/viz/RowOpsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.2.2",
  minutes: 75,
  links: {
    revisits: ["m3.2.1"],
    foreshadows: ["m3.2.3", "m3.4.2", "m3.4.4"],
  },

  puzzle: (
    <>
      <p>
        Two students row reduce the same matrix. One starts by swapping rows; the other starts by halving the first row.
        Their intermediate matrices look completely different. Can they end in different places? If the method allows
        so many choices, how could its result tell us anything definite about the system?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Elimination stops at a staircase. If you keep going, scaling every pivot to 1 and clearing the entries above the
        pivots as well as below, you reach a shape with nothing left to simplify. Do it yourself below, in any order you
        like, and compare your final matrix with someone else&rsquo;s.
      </p>
      <RowOpsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="echelon form">
        <p>A matrix is in <strong>(row) echelon form</strong> if</p>
        <ol>
          <li>all zero rows are at the bottom, and</li>
          <li>the leading entry of each non-zero row, its <strong>pivot</strong>, is in a column strictly to the right of the pivot of the row above.</li>
        </ol>
        <p>It follows that every entry below a pivot is zero. Gaussian elimination produces an echelon form.</p>
      </Definition>

      <Definition title="reduced echelon form">
        <p>An echelon form is <strong>reduced</strong> if in addition</p>
        <ol start={3}>
          <li>every pivot is 1, and</li>
          <li>each pivot is the only non-zero entry in its column.</li>
        </ol>
        <p>
          To get there from an echelon form, divide each pivot row by its pivot, then work from the bottom pivot upwards,
          clearing the entries above each one. This whole procedure is <strong>row reduction</strong>, or Gauss&ndash;Jordan
          elimination.
        </p>
      </Definition>

      <Example title="matrix B from the visualisation">
        <p>Row reduction takes</p>
        <MD>{"\\left[\\begin{array}{ccc|c} 0 & 2 & 4 & 6 \\\\ 1 & 1 & 1 & 2 \\\\ 2 & 4 & 6 & 10 \\end{array}\\right] \\quad\\text{to}\\quad \\left[\\begin{array}{ccc|c} 1 & 0 & -1 & -1 \\\\ 0 & 1 & 2 & 3 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right]."}</MD>
        <p>
          The pivots are in columns 1 and 2. Column 3 has no pivot, so <M>{"x_3"}</M> is a <strong>free variable</strong>:
          choose it to be any number t. The rows then say <M>{"x_1 = -1 + t"}</M> and <M>{"x_2 = 3 - 2t"}</M>, so the
          solutions are
        </p>
        <MD>{"(x_1, x_2, x_3) = (-1, 3, 0) + t\\,(1, -2, 1),"}</MD>
        <p>a line in space. The zero row came from an equation that was a combination of the others, so it added nothing.</p>
      </Example>

      <Definition title="pivot and free variables">
        <p>
          In the reduced echelon form of an augmented matrix, the unknowns whose columns contain pivots are{" "}
          <strong>pivot variables</strong>; the others are <strong>free variables</strong>. If the system has solutions,
          each pivot variable equals its row&rsquo;s right-hand side minus a combination of the free variables, and the
          free variables can be anything.
        </p>
      </Definition>

      <Theorem title="uniqueness of the reduced echelon form">
        <p>
          Every matrix can be row reduced to exactly one reduced echelon form, whatever sequence of row operations is used.
        </p>
      </Theorem>
      <p>
        Here is the idea. Row operations never change which combinations of the columns equal zero, since they do not
        change the solutions of the system with right-hand side zero. In a reduced echelon form, those combinations can be
        read off: a column with no pivot is a specific combination of the pivot columns before it, with coefficients equal
        to its entries. So every non-pivot column, and which columns are pivot columns, is fixed by the original matrix,
        and that fixes the whole reduced form. The two students in the puzzle must agree.
      </p>

      <Remark title="echelon forms are not unique">
        <p>
          An echelon form that is not reduced is not unique: scaling a row or adding a lower row to a higher one changes it
          but keeps it in echelon form. What every echelon form of a matrix shares is the <em>positions</em> of its pivots,
          because they are the pivot positions of the one reduced form. The number of pivots is the{" "}
          <strong>rank</strong> of the matrix, one of the most important numbers in linear algebra.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "isech",
      rung: "check",
      prompt: <p>Which of these matrices are in echelon form? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "[1 2 3; 0 0 4; 0 0 0]",
          "[1 2 3; 0 0 0; 0 0 4]",
          "[0 1 2; 1 0 0; 0 0 0]",
          "[2 1 0; 0 3 1; 0 0 5]",
        ],
        correct: [0, 3],
      },
    },
    {
      key: "isred",
      rung: "check",
      prompt: <p>Which of these are in reduced echelon form? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["[1 0 2; 0 1 3]", "[1 2 0; 0 0 1]", "[1 1 0; 0 1 0]", "[2 0 0; 0 1 0]"],
        correct: [0, 1],
      },
    },
    {
      key: "free",
      rung: "apply",
      prompt: (
        <p>
          A system in four unknowns has reduced echelon form with pivots in columns 1 and 3, and it has solutions. How many
          free variables are there?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "rank",
      rung: "apply",
      prompt: <p>What is the rank of the matrix [1 2 3; 2 4 6; 1 1 1], that is, how many pivots does it have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "read",
      rung: "apply",
      prompt: (
        <p>
          The reduced echelon form of an augmented matrix is [1 0 3 | 4; 0 1 &minus;1 | 2; 0 0 0 | 0]. If the free
          variable <M>{"x_3"}</M> is set to 1, what is <M>{"x_1"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "unique",
      rung: "prove",
      prompt: (
        <p>
          Show that every 2 by 2 matrix whose first column is not zero has exactly one reduced echelon form. Consider the
          cases where the rows are multiples of each other and where they are not.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that the first column has a pivot, so the first row of the reduced form begins with 1.",
          "If the rows are not multiples of each other (ad − bc ≠ 0), shows the reduced form must be the identity, since a second pivot exists and clears everything else.",
          "If the rows are multiples, shows the reduced form is [1 b/a; 0 0] (or the analogue after a swap), determined by the matrix. A careful case argument is enough.",
        ],
      },
    },
    {
      key: "rankbound",
      rung: "stretch",
      prompt: (
        <p>
          Explain why the rank of an m by n matrix is at most the smaller of m and n. A system has 3 equations and 5
          unknowns, and it has at least one solution. What can you say about the number of solutions, and why?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Each pivot needs its own row and its own column, so there are at most m and at most n pivots.",
          "With 5 unknowns and at most 3 pivots, at least 2 variables are free.",
          "Concludes that a consistent system then has infinitely many solutions, a family with at least two free parameters.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between echelon form and reduced echelon form, how to read off all the solutions from the reduced form using pivot and free variables, and why everyone who row reduces the same matrix gets the same reduced form.",

  glimpse: (
    <p>
      The next lesson uses the pivots to decide, before solving anything, whether a system has no solution, one, or
      infinitely many. The Vector spaces chapter turns the free variables into a basis for the null space, and the rank
      into the dimension of the column space.
    </p>
  ),
};
