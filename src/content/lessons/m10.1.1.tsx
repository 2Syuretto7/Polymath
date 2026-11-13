import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { DirectionFieldViz } from "@/components/viz/DirectionFieldViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.1.1",
  minutes: 85,
  links: {
    revisits: ["m2.6.4", "m2.8.2", "m0.4.1"],
    foreshadows: ["m10.1.2", "m10.1.4", "m10.2.1"],
  },

  puzzle: (
    <>
      <p>
        A cup of tea cools, a population grows, a drug leaves the bloodstream. In each case we know how fast the quantity is
        changing in terms of its current value, but not the quantity itself. Can we recover a function from a rule about its
        derivative? And how many answers are there?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose an equation and a starting point, and watch the solution follow the field of slopes.</p>
      <DirectionFieldViz />
    </>
  ),

  theory: (
    <>
      <Definition title="ordinary differential equation">
        <p>
          A first-order ODE has the form <M>{"y' = f(x, y)"}</M>. A <strong>solution</strong> on an interval is a
          differentiable function <M>{"y(x)"}</M> with <M>{"y'(x) = f(x, y(x))"}</M> there. An <strong>initial value
          problem</strong> adds a condition <M>{"y(x_0) = y_0"}</M>.
        </p>
      </Definition>

      <Definition title="separable equation">
        <p>The equation is <strong>separable</strong> if <M>{"f(x, y) = g(x)h(y)"}</M>. Where <M>{"h(y) \\ne 0"}</M>,</p>
        <MD>{"\\frac{dy}{dx} = g(x)h(y) \\quad\\Longrightarrow\\quad \\int \\frac{dy}{h(y)} = \\int g(x)\\,dx + C."}</MD>
      </Definition>

      <Theorem title="why separation works">
        <p>
          If <M>{"y(x)"}</M> solves the equation, then <M>{"y'(x)/h(y(x)) = g(x)"}</M>. Let <M>{"H"}</M> be an antiderivative of{" "}
          <M>{"1/h"}</M>. By the chain rule, the left side is the derivative of <M>{"H(y(x))"}</M>, so{" "}
          <M>{"H(y(x)) = G(x) + C"}</M>. The informal step of &ldquo;multiplying by <M>{"dx"}</M>&rdquo; is just substitution
          in an integral.
        </p>
      </Theorem>

      <Example title="exponential growth and the logistic equation">
        <p>
          For <M>{"y' = ky"}</M>: <M>{"\\int dy/y = \\int k\\,dx"}</M> gives <M>{"\\ln|y| = kx + C"}</M>, so{" "}
          <M>{"y = Ae^{kx}"}</M>. For <M>{"y' = y(1 - y)"}</M>, partial fractions give{" "}
          <M>{"\\ln\\left|\\frac{y}{1 - y}\\right| = x + C"}</M>, so <M>{"y = \\frac{1}{1 + Ce^{-x}}"}</M>.
        </p>
      </Example>

      <Remark title="lost solutions">
        <p>
          Dividing by <M>{"h(y)"}</M> discards the constant solutions where <M>{"h(y) = 0"}</M>, such as <M>{"y = 0"}</M> and{" "}
          <M>{"y = 1"}</M> for the logistic equation. They are the <strong>equilibria</strong>. Always check for them
          separately.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sep",
      rung: "check",
      prompt: <p>Which of these equations is separable?</p>,
      answer: { kind: "choice", options: ["y′ = x + y", "y′ = x²y³", "y′ = sin(xy)", "y′ = x² + y²"], correct: [1] },
    },
    {
      key: "const",
      rung: "check",
      prompt: <p>How many arbitrary constants does the general solution of a first-order ODE usually have?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>Solve y′ = 3y with y(0) = 2. What is y(1), to three decimal places?</p>,
      answer: { kind: "numeric", value: 2 * Math.exp(3), tolerance: 0.01 },
    },
    {
      key: "xy",
      rung: "apply",
      prompt: <p>Solve y′ = 2xy with y(0) = 1. What is y(1), to three decimal places?</p>,
      answer: { kind: "numeric", value: Math.E, tolerance: 0.001 },
    },
    {
      key: "eq",
      rung: "apply",
      prompt: <p>Which constant functions are solutions of y′ = y(2 − y)?</p>,
      answer: { kind: "choice", options: ["y = 0", "y = 1", "y = 2", "y = −2"], correct: [0, 2] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Solve y′ = −x/y with y(0) = 2, and describe the solution curve.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Separates to y dy = −x dx and integrates to get y²/2 = −x²/2 + C.",
          "Uses y(0) = 2 to get x² + y² = 4.",
          "Takes the positive root y = √(4 − x²), the upper semicircle, valid for |x| < 2.",
        ],
      },
    },
    {
      key: "blow",
      rung: "stretch",
      prompt: <p>Solve y′ = y² with y(0) = 1. What happens at x = 1? What does this show about solutions of ODEs, even with very nice right-hand sides?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Separates to get −1/y = x + C, so y = 1/(1 − x).",
          "Notes the solution blows up as x approaches 1.",
          "Concludes that solutions may exist only on a limited interval. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a first-order ODE and an initial value problem are, how separating variables works and why it is justified by the chain rule, the exponential and logistic examples, and why equilibrium solutions must be checked separately.",

  glimpse: (
    <p>
      The next lesson solves linear equations with an integrating factor. Later lessons ask when solutions exist and are
      unique, which the blow-up of y′ = y² makes a real question.
    </p>
  ),
};
