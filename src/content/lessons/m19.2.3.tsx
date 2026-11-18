import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ConvergenceOrderViz } from "@/components/viz/ConvergenceOrderViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.2.3",
  minutes: 90,
  links: {
    revisits: ["m19.2.2", "m19.2.1", "m6.2.4"],
    foreshadows: ["m19.5.4", "m19.6.2", "m19.5.3"],
  },

  puzzle: (
    <>
      <p>
        Bisection gains one binary digit per step. Newton&rsquo;s method doubles the number of correct digits. The secant
        method, which needs no derivative, does something in between. How can such different behaviours be measured on one
        scale, and which method is really fastest when derivatives cost extra?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare four methods on the same equation. Read off the estimated order for each.</p>
      <ConvergenceOrderViz />
    </>
  ),

  theory: (
    <>
      <Definition title="order of convergence">
        <p>
          A sequence <M>{"x_n \\to r"}</M> with errors <M>{"e_n = |x_n - r|"}</M> converges with <strong>order p</strong> and
          rate C if
        </p>
        <MD>{"\\lim_{n\\to\\infty} \\frac{e_{n+1}}{e_n^{\\,p}} = C, \\qquad 0 < C < \\infty."}</MD>
        <p>
          Order 1 with C &lt; 1 is <strong>linear</strong> convergence: a fixed number of digits per step. Order 2 is{" "}
          <strong>quadratic</strong>. Order p roughly multiplies the number of correct digits by p each step. Bisection is
          not strictly of any order, but its error bound is linear with rate 1/2.
        </p>
      </Definition>

      <Theorem title="fixed-point iteration">
        <p>
          If g is continuously differentiable near a fixed point r = g(r) and <M>{"|g'(r)| < 1"}</M>, then{" "}
          <M>{"x_{n+1} = g(x_n)"}</M> converges to r from nearby starts, and{" "}
          <M>{"e_{n+1}/e_n \\to |g'(r)|"}</M>: linear convergence with rate |g′(r)|. If g′(r) = 0 the order is at least 2;
          Newton&rsquo;s method is the fixed-point iteration for g(x) = x − f(x)/f′(x), whose derivative vanishes at a simple
          root.
        </p>
      </Theorem>

      <Example title="the secant method">
        <p>
          Replacing f′ in Newton&rsquo;s method by the slope through the last two points gives{" "}
          <M>{"x_{n+1} = x_n - f(x_n)\\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}"}</M>. Its errors satisfy approximately{" "}
          <M>{"e_{n+1} \\approx C e_n e_{n-1}"}</M>, which gives order <M>{"\\varphi = (1+\\sqrt5)/2 \\approx 1.618"}</M>. With one
          function evaluation per step, against Newton&rsquo;s two, the secant method is often faster in practice.
        </p>
      </Example>

      <Remark title="estimating the order">
        <p>
          From three consecutive errors, <M>{"p \\approx \\log(e_{n+1}/e_n)/\\log(e_n/e_{n-1})"}</M>. The estimate is noisy at
          first and is ruined once errors reach the level of rounding, about <M>{"10^{-16}"}</M>, so read it in the middle of
          the run.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does convergence of order 2 mean?</p>,
      answer: {
        kind: "choice",
        options: [
          "Each error is roughly a constant times the square of the previous error.",
          "The error halves at each step.",
          "Two steps are needed for each digit.",
          "The method uses two starting points.",
        ],
        correct: [0],
      },
    },
    {
      key: "secant",
      rung: "check",
      prompt: <p>What is the order of the secant method at a simple root?</p>,
      answer: { kind: "choice", options: ["The golden ratio, about 1.618", "1", "2", "3"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose bisection. Roughly what order does the estimate give?</p>,
      answer: { kind: "choice", options: ["About 1", "About 1.6", "About 2", "About 3"], correct: [0] },
    },
    {
      key: "rate",
      rung: "apply",
      prompt: <p>The fixed-point iteration x ← ∛(2x + 5) has g′(r) = 2/(3∛(2r + 5)²). With r = 2.0946, what is the linear rate? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.15, tolerance: 0.01 },
    },
    {
      key: "digits",
      rung: "apply",
      prompt: <p>A method of order 3 has an error of 10⁻² at one step. Roughly what will its error be two steps later?</p>,
      answer: { kind: "choice", options: ["10⁻¹⁸", "10⁻⁶", "10⁻⁸", "10⁻⁴"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if g is continuously differentiable, g(r) = r and |g′(r)| &lt; 1, then eₙ₊₁/eₙ → |g′(r)| for iterates converging to r.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the mean value theorem: xₙ₊₁ − r = g(xₙ) − g(r) = g′(ξₙ)(xₙ − r) with ξₙ between xₙ and r.",
          "Notes that ξₙ → r because xₙ → r.",
          "Uses continuity of g′ to conclude eₙ₊₁/eₙ = |g′(ξₙ)| → |g′(r)|.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If evaluating f′ costs as much as evaluating f, compare Newton&rsquo;s method and the secant method per function evaluation.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that one Newton step costs two evaluations and multiplies digits by 2, so per evaluation the factor is √2 ≈ 1.41.",
          "Notes that one secant step costs one evaluation and multiplies digits by about 1.618, so the secant method is faster per evaluation.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, approximation: finding a polynomial that passes through given points, and why more points can make things
      worse.
    </p>
  ),
};
