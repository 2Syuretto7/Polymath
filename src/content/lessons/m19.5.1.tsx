import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { PivotingViz } from "@/components/viz/PivotingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.5.1",
  minutes: 85,
  links: {
    revisits: ["m3.3.3", "m3.2.1", "m19.1.2"],
    foreshadows: ["m19.5.2", "m19.5.3", "m19.5.4"],
  },

  puzzle: (
    <>
      <p>
        The system εx + y = 1, x + y = 2 is perfectly well conditioned: its solution is close to x = y = 1 for every small
        ε. Gaussian elimination, done exactly as taught, produces x = 0 on a computer once ε is small enough. The algorithm
        is correct and the problem is easy. What went wrong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Shrink ε and compare elimination with and without a row swap.</p>
      <PivotingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="LU with partial pivoting">
        <p>
          At step k, choose the row r ≥ k whose entry in column k has the largest absolute value, swap it into row k, and
          eliminate below it. Recording the swaps in a permutation matrix P and the multipliers in a unit lower triangular L
          gives
        </p>
        <MD>{"PA = LU,\\qquad |l_{ij}| \\le 1."}</MD>
        <p>
          Every invertible A has such a factorisation, since an invertible matrix always has a non-zero entry in the
          remaining part of the column. Solving Ax = b then costs one forward and one back substitution.
        </p>
      </Definition>

      <Theorem title="backward stability (Wilkinson)">
        <p>
          The computed solution <M>{"\\hat x"}</M> of Gaussian elimination with partial pivoting satisfies{" "}
          <M>{"(A + \\delta A)\\hat x = b"}</M> with
        </p>
        <MD>{"\\frac{\\|\\delta A\\|_\\infty}{\\|A\\|_\\infty} \\le c\\,n^3\\rho\\,u,"}</MD>
        <p>
          where <M>{"\\rho"}</M> is the <strong>growth factor</strong>, the largest entry produced during elimination divided by
          the largest entry of A. Without pivoting <M>{"\\rho"}</M> can be as large as 1/ε, as in the puzzle. With partial
          pivoting <M>{"\\rho \\le 2^{n-1}"}</M>, and in practice it is almost always small.
        </p>
      </Theorem>

      <Example title="the puzzle, step by step">
        <p>
          Without pivoting the multiplier is 1/ε and the second row becomes{" "}
          <M>{"(1 - 1/\\varepsilon)y = 2 - 1/\\varepsilon"}</M>. In floating point both sides round to{" "}
          <M>{"-1/\\varepsilon"}</M> once ε is tiny, so y = 1, and then x = (1 − y)/ε = 0. The information in the original
          second row, the 1 and the 2, has been rounded away. Swapping first gives multiplier ε, a second row{" "}
          <M>{"(1-\\varepsilon)y = 1 - 2\\varepsilon"}</M>, and x = 2 − y, accurate to full precision.
        </p>
      </Example>

      <Remark title="cost and alternatives">
        <p>
          The factorisation costs about <M>{"\\tfrac23 n^3"}</M> flops, and each further right-hand side only{" "}
          <M>{"2n^2"}</M>, so one should factor once and solve many times, never form <M>{"A^{-1}"}</M>. Complete pivoting
          searches the whole remaining block and has a much smaller growth bound but costs more searching. For symmetric
          positive definite matrices, Cholesky factorisation needs no pivoting at all and half the work.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "choose",
      rung: "check",
      prompt: <p>Which pivot does partial pivoting choose at step k?</p>,
      answer: {
        kind: "choice",
        options: [
          "The entry of largest absolute value in column k, on or below the diagonal",
          "The largest entry in the whole matrix",
          "The diagonal entry, whatever it is",
          "The smallest non-zero entry in column k",
        ],
        correct: [0],
      },
    },
    {
      key: "mult",
      rung: "check",
      prompt: <p>With partial pivoting, how large can a multiplier be in absolute value?</p>,
      answer: { kind: "choice", options: ["At most 1", "At most 2", "At most n", "Unbounded"], correct: [0] },
    },
    {
      key: "m",
      rung: "apply",
      prompt: <p>Without pivoting, what is the multiplier in the puzzle when ε = 10⁻⁴?</p>,
      answer: { kind: "numeric", value: 10000 },
    },
    {
      key: "flops",
      rung: "apply",
      prompt: <p>Roughly how many flops does LU factorisation of a 1000 × 1000 matrix take? Give the answer in units of 10⁸.</p>,
      answer: { kind: "numeric", value: 6.67, tolerance: 0.15 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, from which ε does the computed x without pivoting become exactly 0?</p>,
      answer: { kind: "choice", options: ["1e−17", "1e−4", "1e−8", "1e−12"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every invertible n × n matrix A has a factorisation PA = LU with L unit lower triangular and U upper triangular.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Argues by induction on the elimination steps, or on n.",
          "Shows that a non-zero pivot always exists in the current column, since otherwise the remaining block, and so A, would be singular.",
          "Explains why the row swaps made at later steps can be moved past the earlier elimination steps by permuting the multipliers.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Wilkinson&rsquo;s example has growth factor <M>{"2^{n-1}"}</M> under partial pivoting. Why is Gaussian elimination with partial pivoting still the standard method?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that matrices with large growth are extremely rare in practice and in random experiments.",
          "Mentions that growth can be monitored cheaply, with alternatives such as QR or complete pivoting kept for bad cases.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, QR factorisation: Householder reflections give a factorisation that is backward stable with no growth at all,
      and the right tool for least squares.
    </p>
  ),
};
