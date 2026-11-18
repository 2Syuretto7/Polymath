import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { NewtonTangentViz } from "@/components/viz/NewtonTangentViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.2.2",
  minutes: 90,
  links: {
    revisits: ["m19.2.1", "m2.4.1", "m6.6.3"],
    foreshadows: ["m19.2.3", "m19.6.2", "m19.5.3"],
  },

  puzzle: (
    <>
      <p>
        Babylonian scribes approximated √2 by repeatedly averaging a guess x with 2/x. From x = 1 they got 1.5, then
        1.41666…, then 1.41421568…, already correct to six digits. Why does such a simple rule work so astonishingly fast?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the iterations and watch the number of correct digits. Then try the cube root.</p>
      <NewtonTangentViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Newton’s method">
        <p>Replace f near the current point by its tangent line, and take the tangent&rsquo;s zero as the next point:</p>
        <MD>{"x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}."}</MD>
        <p>For f(x) = x² − 2 this is <M>{"x_{n+1} = \\tfrac12(x_n + 2/x_n)"}</M>, the Babylonian rule.</p>
      </Definition>

      <Theorem title="quadratic convergence">
        <p>
          Let f be twice continuously differentiable near a root r with <M>{"f'(r) \\ne 0"}</M>. Then for <M>{"x_0"}</M> close
          enough to r the iterates converge to r, and
        </p>
        <MD>{"\\lim_{n\\to\\infty} \\frac{x_{n+1} - r}{(x_n - r)^2} = \\frac{f''(r)}{2f'(r)}."}</MD>
        <p>
          Proof idea. Taylor&rsquo;s theorem gives{" "}
          <M>{"0 = f(r) = f(x_n) + f'(x_n)(r - x_n) + \\tfrac12 f''(\\xi_n)(r - x_n)^2"}</M>; dividing by <M>{"f'(x_n)"}</M> and
          rearranging gives <M>{"x_{n+1} - r = \\frac{f''(\\xi_n)}{2f'(x_n)}(x_n - r)^2"}</M>.
        </p>
      </Theorem>

      <Example title="digits double">
        <p>
          If the error is <M>{"10^{-3}"}</M>, the next is about <M>{"10^{-6}"}</M>, then <M>{"10^{-12}"}</M>: the number of
          correct digits roughly doubles each step. For Newton&rsquo;s cubic from x₀ = 3.5, six steps reach full double
          precision; bisection would need about fifty.
        </p>
      </Example>

      <Remark title="when it fails">
        <p>
          Convergence is only local. A poor start can send the iterates far away or into a cycle; where f′ is zero the step
          is undefined; for <M>{"f(x) = x^{1/3}"}</M> every step gives <M>{"x_{n+1} = -2x_n"}</M>, diverging from any nonzero
          start. At a multiple root convergence is only linear. Newton&rsquo;s method also needs the derivative, which may be
          expensive; the secant method replaces it by a difference quotient.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "formula",
      rung: "check",
      prompt: <p>What is the Newton step for solving f(x) = 0?</p>,
      answer: { kind: "choice", options: ["xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)", "xₙ₊₁ = xₙ − f′(xₙ)/f(xₙ)", "xₙ₊₁ = (xₙ + f(xₙ))/2", "xₙ₊₁ = xₙ f(xₙ)"], correct: [0] },
    },
    {
      key: "order",
      rung: "check",
      prompt: <p>Near a simple root, how does the error of Newton&rsquo;s method behave?</p>,
      answer: {
        kind: "choice",
        options: [
          "Each error is roughly a constant times the square of the previous one.",
          "It halves at each step.",
          "It decreases by a constant amount each step.",
          "It never gets below 10⁻³.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the cube root and start at 0.5. What is x₂?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "bab",
      rung: "apply",
      prompt: <p>Apply Newton&rsquo;s method to x² − 2 from x₀ = 1. What is x₂? Give four decimal places.</p>,
      answer: { kind: "numeric", value: 1.4167, tolerance: 0.0001 },
    },
    {
      key: "recip",
      rung: "apply",
      prompt: <p>Newton&rsquo;s method for f(x) = 1/x − a computes 1/a without division. What is the step?</p>,
      answer: { kind: "choice", options: ["xₙ₊₁ = xₙ(2 − a xₙ)", "xₙ₊₁ = xₙ/a", "xₙ₊₁ = 2xₙ − a", "xₙ₊₁ = a xₙ²"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Using Taylor&rsquo;s theorem, show that xₙ₊₁ − r = f″(ξₙ)(xₙ − r)²/(2f′(xₙ)) for some ξₙ between xₙ and r.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands 0 = f(r) = f(xₙ) + f′(xₙ)(r − xₙ) + ½f″(ξₙ)(r − xₙ)².",
          "Divides by f′(xₙ) and uses xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ) to rewrite the first two terms as r − xₙ₊₁.",
          "Rearranges to get xₙ₊₁ − r = f″(ξₙ)(xₙ − r)²/(2f′(xₙ)).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does Newton&rsquo;s method converge only linearly at the double root of f(x) = (x − 1)²?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the step: xₙ₊₁ − 1 = (xₙ − 1) − (xₙ − 1)²/(2(xₙ − 1)) = (xₙ − 1)/2.",
          "Notes that the error halves each step, which is linear convergence, because f′(1) = 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, orders of convergence: a precise way to compare bisection, Newton&rsquo;s method, the secant method and fixed-point
      iteration.
    </p>
  ),
};
