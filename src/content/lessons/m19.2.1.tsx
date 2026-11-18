import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { BisectionErrorViz } from "@/components/viz/BisectionErrorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.2.1",
  minutes: 90,
  links: {
    revisits: ["m19.1.2", "m2.3.2", "m6.1.2"],
    foreshadows: ["m19.2.2", "m19.2.3", "m19.5.3"],
  },

  puzzle: (
    <>
      <p>
        Newton used the equation x³ − 2x − 5 = 0 to show off his method in 1669. It has no tidy solution, but f(2) = −1 and
        f(3) = 16. Without any calculus, how could you pin down the root to six decimal places, and how many function
        evaluations would it take?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Increase the number of steps and compare the guaranteed bound with the true error.</p>
      <BisectionErrorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the bisection method">
        <p>
          Let f be continuous on [a, b] with f(a) and f(b) of opposite signs. Let c = (a + b)/2. If f(c) = 0, stop; if f(a)
          and f(c) have opposite signs, replace b by c; otherwise replace a by c. Repeat. By the intermediate value theorem,
          each interval contains a root.
        </p>
      </Definition>

      <Theorem title="the error bound">
        <p>
          After n steps the interval has width <M>{"(b - a)/2^n"}</M>, and its midpoint <M>{"c_n"}</M> satisfies
        </p>
        <MD>{"|c_n - r| \\le \\frac{b - a}{2^{n+1}}"}</MD>
        <p>
          for some root r. So to guarantee an error below ε takes about <M>{"\\log_2((b-a)/\\varepsilon)"}</M> steps, one
          function evaluation each. The nested intervals converge by completeness of the real numbers.
        </p>
      </Theorem>

      <Example title="Newton’s cubic">
        <p>
          Starting from [2, 3], the midpoints are 2.5, 2.25, 2.125, 2.0625, …, and after 20 steps the root 2.0945515 is known
          to within <M>{"2^{-21} \\approx 4.8 \\times 10^{-7}"}</M>. Each step gains one binary digit, about 0.3 of a decimal
          digit.
        </p>
      </Example>

      <Remark title="strengths and weaknesses">
        <p>
          Bisection needs only continuity and a sign change, never fails, and its error bound is known in advance. It cannot
          find a root of even multiplicity, such as that of x², where f does not change sign, and it ignores the size of
          f(c), which faster methods exploit. In floating point the interval stops shrinking once its endpoints are adjacent
          numbers, at a relative width of about u. Practical solvers such as Brent&rsquo;s method combine bisection&rsquo;s
          safety with faster steps.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "need",
      rung: "check",
      prompt: <p>What does the bisection method need in order to work on [a, b]?</p>,
      answer: {
        kind: "choice",
        options: [
          "f continuous, with f(a) and f(b) of opposite signs.",
          "f differentiable with nonzero derivative.",
          "f a polynomial.",
          "A good starting guess near the root.",
        ],
        correct: [0],
      },
    },
    {
      key: "rate",
      rung: "check",
      prompt: <p>By what factor does the bisection error bound shrink at each step?</p>,
      answer: { kind: "choice", options: ["2", "10", "It squares", "It depends on f"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the midpoint at step 4?</p>,
      answer: { kind: "numeric", value: 2.0625, tolerance: 0.0001 },
    },
    {
      key: "steps",
      rung: "apply",
      prompt: <p>Starting from an interval of width 1, how many halvings are needed to make the width less than 10⁻⁶?</p>,
      answer: { kind: "numeric", value: 20 },
    },
    {
      key: "even",
      rung: "apply",
      prompt: <p>Why can bisection not find the root of f(x) = (x − 1)²?</p>,
      answer: {
        kind: "choice",
        options: [
          "f never changes sign, so no starting interval has endpoints of opposite signs.",
          "f is not continuous.",
          "The root is irrational.",
          "f grows too fast.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the bisection midpoints converge to a root of f.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the left endpoints increase, the right endpoints decrease, and the widths (b − a)/2ⁿ tend to 0, so both converge to a common limit r.",
          "Uses continuity: f(aₙ)f(bₙ) ≤ 0 for all n gives f(r)² ≤ 0, so f(r) = 0.",
          "Concludes that the midpoints, squeezed between aₙ and bₙ, converge to r.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If f has several roots in [a, b], which one does bisection find? Can you predict it in advance?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that bisection finds some root at which f changes sign, depending on the signs at the midpoints.",
          "Explains that it cannot generally be predicted without evaluating f, though it is always a root with a sign change.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Newton&rsquo;s method: using the derivative to aim straight at the root, doubling the correct digits at every
      step when it works.
    </p>
  ),
};
