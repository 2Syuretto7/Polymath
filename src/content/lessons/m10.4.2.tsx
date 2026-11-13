import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MatrixExpViz } from "@/components/viz/MatrixExpViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.4.2",
  minutes: 90,
  links: {
    revisits: ["m10.4.1", "m2.9.4", "m3.7.2"],
    foreshadows: ["m10.4.3", "m10.5.1", "m10.6.2"],
  },

  puzzle: (
    <>
      <p>
        The equation <M>{"y' = ay"}</M> has solution <M>{"e^{at}y_0"}</M>. For a system <M>{"x' = Ax"}</M>, it is tempting
        to write <M>{"x = e^{tA}x_0"}</M>. But what could it mean to raise <M>{"e"}</M> to the power of a matrix, and would it
        work even when there are not enough eigenvectors?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Add terms of the series one at a time and watch the image of the unit square settle onto its exact position. Try the
        rotation with several values of <M>{"t"}</M>.
      </p>
      <MatrixExpViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the matrix exponential">
        <MD>{"e^{tA} = I + tA + \\frac{(tA)^2}{2!} + \\frac{(tA)^3}{3!} + \\cdots"}</MD>
        <p>
          The series converges for every square matrix: with any matrix norm satisfying <M>{"\\|AB\\| \\le \\|A\\|\\|B\\|"}</M>,
          the terms are bounded by those of <M>{"e^{|t|\\|A\\|}"}</M>.
        </p>
      </Definition>

      <Theorem title="it solves the system">
        <p>
          <M>{"\\frac{d}{dt}e^{tA} = Ae^{tA}"}</M>, so <M>{"x(t) = e^{tA}x_0"}</M> is the unique solution of{" "}
          <M>{"x' = Ax"}</M>, <M>{"x(0) = x_0"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          The differentiated series converges uniformly on bounded intervals, so we may differentiate term by term:{" "}
          <M>{"\\frac{d}{dt}\\sum \\frac{t^kA^k}{k!} = \\sum_{k \\ge 1} \\frac{t^{k-1}A^k}{(k-1)!} = A\\,e^{tA}"}</M>. At{" "}
          <M>{"t = 0"}</M> it is <M>{"I"}</M>. Uniqueness comes from the existence and uniqueness theorem.
        </p>
      </Proof>

      <Theorem title="rules of computation">
        <ul>
          <li>If <M>{"A = PDP^{-1}"}</M> with <M>{"D"}</M> diagonal, then <M>{"e^{tA} = Pe^{tD}P^{-1}"}</M>, and <M>{"e^{tD}"}</M> is diagonal with entries <M>{"e^{t\\lambda_i}"}</M>.</li>
          <li>If <M>{"AB = BA"}</M>, then <M>{"e^{A + B} = e^Ae^B"}</M>. This can fail when they do not commute.</li>
          <li>If <M>{"N^k = 0"}</M>, the series for <M>{"e^{tN}"}</M> stops after <M>{"k"}</M> terms.</li>
        </ul>
      </Theorem>

      <Example title="a defective matrix">
        <p>
          <M>{"A = \\begin{pmatrix} -1 & 1 \\\\ 0 & -1 \\end{pmatrix} = -I + N"}</M> with <M>{"N^2 = 0"}</M>. Since{" "}
          <M>{"-I"}</M> commutes with <M>{"N"}</M>,{" "}
          <M>{"e^{tA} = e^{-t}(I + tN) = e^{-t}\\begin{pmatrix} 1 & t \\\\ 0 & 1 \\end{pmatrix}"}</M>. The{" "}
          <M>{"te^{-t}"}</M> term is exactly what eigenvectors could not supply.
        </p>
      </Example>

      <Remark title="forcing">
        <p>
          For <M>{"x' = Ax + g(t)"}</M>, the same idea gives{" "}
          <M>{"x(t) = e^{tA}x_0 + \\int_0^t e^{(t - s)A}g(s)\\,ds"}</M>: variation of parameters for systems.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is <M>{"e^{tA}"}</M>?</p>,
      answer: { kind: "choice", options: ["The matrix with entries e^(t aᵢⱼ)", "I + tA + (tA)²/2! + …", "e^t times A", "The inverse of A"], correct: [1] },
    },
    {
      key: "zero",
      rung: "check",
      prompt: <p>What is <M>{"e^{tA}"}</M> at <M>{"t = 0"}</M>?</p>,
      answer: { kind: "choice", options: ["0", "A", "I", "e"], correct: [2] },
    },
    {
      key: "diag",
      rung: "apply",
      prompt: <p>For <M>{"A = \\begin{pmatrix} 2 & 0 \\\\ 0 & -1 \\end{pmatrix}"}</M>, what is the top-left entry of <M>{"e^{A}"}</M> (at <M>{"t = 1"}</M>)?</p>,
      answer: { kind: "numeric", value: Math.exp(2), tolerance: 0.01 },
    },
    {
      key: "nil",
      rung: "apply",
      prompt: <p>For <M>{"N = \\begin{pmatrix} 0 & 3 \\\\ 0 & 0 \\end{pmatrix}"}</M>, what is the top-right entry of <M>{"e^{2N}"}</M>?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0.001 },
    },
    {
      key: "defect",
      rung: "apply",
      prompt: <p>For <M>{"A = \\begin{pmatrix} -1 & 1 \\\\ 0 & -1 \\end{pmatrix}"}</M>, the solution with <M>{"x(0) = (0, 1)"}</M> has first component <M>{"te^{-t}"}</M>. What is it at <M>{"t = 1"}</M>?</p>,
      answer: { kind: "numeric", value: Math.exp(-1), tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"A = PDP^{-1}"}</M> then <M>{"e^{tA} = Pe^{tD}P^{-1}"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows A^k = PD^kP⁻¹ by induction or by cancelling P⁻¹P.",
          "Substitutes into the series and factors out P and P⁻¹.",
          "Concludes the identity.",
        ],
      },
    },
    {
      key: "commute",
      rung: "stretch",
      prompt: <p>Why does <M>{"e^{A + B} = e^Ae^B"}</M> need <M>{"AB = BA"}</M>? Look at the terms of degree 2.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands the degree 2 terms: (A + B)²/2 = (A² + AB + BA + B²)/2 against A²/2 + AB + B²/2.",
          "Notes these agree exactly when AB = BA.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the matrix exponential is defined, why x = e^(tA)x₀ solves x′ = Ax, how to compute it by diagonalising or with a nilpotent part, and why commuting matters.",

  glimpse: (
    <p>
      The next lesson draws every possible phase portrait of a planar linear system. The matrix exponential also governs
      linearisation near equilibria, and the Laplace transform offers another route to the same formulas.
    </p>
  ),
};
