import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TransientViz } from "@/components/viz/TransientViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.1.2",
  minutes: 85,
  links: {
    revisits: ["m10.1.1", "m2.6.3", "m3.4.2"],
    foreshadows: ["m10.3.2", "m10.3.3", "m10.4.1"],
  },

  puzzle: (
    <>
      <p>
        A room is heated by a radiator that switches on and off through the day. Whatever temperature the room starts at, after
        a while it follows the same daily rhythm. Why does the starting temperature stop mattering, and how can we compute the
        rhythm it settles into?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the starting value and the decay rate, and watch every solution fall into step.</p>
      <TransientViz />
    </>
  ),

  theory: (
    <>
      <Definition title="first-order linear equation">
        <p>An equation of the form</p>
        <MD>{"y' + p(x)y = q(x)."}</MD>
        <p>It is <strong>homogeneous</strong> if <M>{"q = 0"}</M>.</p>
      </Definition>

      <Theorem title="the integrating factor">
        <p>Let <M>{"\\mu(x) = e^{\\int p(x)\\,dx}"}</M>. Then the solutions are</p>
        <MD>{"y = \\frac{1}{\\mu(x)}\\left(\\int \\mu(x)q(x)\\,dx + C\\right)."}</MD>
      </Theorem>

      <Proof>
        <p>
          Since <M>{"\\mu' = p\\mu"}</M>, multiplying the equation by <M>{"\\mu"}</M> gives{" "}
          <M>{"\\mu y' + \\mu' y = \\mu q"}</M>, whose left side is <M>{"(\\mu y)'"}</M> by the product rule. Integrate both
          sides and divide by <M>{"\\mu"}</M>.
        </p>
      </Proof>

      <Example title="a worked case">
        <p>
          For <M>{"y' + 2y = 4"}</M>: <M>{"\\mu = e^{2x}"}</M>, so <M>{"(e^{2x}y)' = 4e^{2x}"}</M> and{" "}
          <M>{"e^{2x}y = 2e^{2x} + C"}</M>. Thus <M>{"y = 2 + Ce^{-2x}"}</M>: every solution tends to the equilibrium 2.
        </p>
      </Example>

      <Theorem title="structure of solutions">
        <p>
          The general solution is <M>{"y = y_p + y_h"}</M>: one particular solution plus the general solution{" "}
          <M>{"Ce^{-\\int p}"}</M> of the homogeneous equation. The difference of two solutions solves the homogeneous
          equation. This is linear algebra: the solution set is a translate of a one-dimensional subspace.
        </p>
      </Theorem>

      <Remark title="transients and steady states">
        <p>
          When <M>{"p"}</M> is a positive constant <M>{"k"}</M>, the homogeneous part <M>{"Ce^{-kx}"}</M> decays: it is the{" "}
          <strong>transient</strong>. What remains is a <strong>steady state</strong> driven by <M>{"q"}</M>, the same for all
          initial conditions. This is the room settling into its daily rhythm.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mu",
      rung: "check",
      prompt: <p>What is the integrating factor for y′ + 3y = x?</p>,
      answer: { kind: "choice", options: ["e^(3x)", "e^(−3x)", "3x", "e^x"], correct: [0] },
    },
    {
      key: "lin",
      rung: "check",
      prompt: <p>Which of these equations are linear in y?</p>,
      answer: { kind: "choice", options: ["y′ + x²y = sin x", "y′ = y²", "x y′ + y = eˣ", "y′ = cos y"], correct: [0, 2] },
    },
    {
      key: "lim",
      rung: "apply",
      prompt: <p>Every solution of y′ + 2y = 4 tends to what value as x → ∞?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "ivp",
      rung: "apply",
      prompt: <p>Solve y′ + y = 1 with y(0) = 3. What is y(1), to three decimal places?</p>,
      answer: { kind: "numeric", value: 1 + 2 * Math.exp(-1), tolerance: 0.001 },
    },
    {
      key: "xy",
      rung: "apply",
      prompt: <p>Solve x y′ + y = 2x for x &gt; 0 with y(1) = 3. What is y(2)?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if y₁ and y₂ both solve y′ + p(x)y = q(x), then y₁ − y₂ solves the homogeneous equation, and deduce the form of the general solution.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Subtracts the two equations to get (y₁ − y₂)′ + p(y₁ − y₂) = 0.",
          "Solves the homogeneous equation as Ce^(−∫p).",
          "Concludes every solution is y_p + Ce^(−∫p) for a fixed particular solution y_p.",
        ],
      },
    },
    {
      key: "bern",
      rung: "stretch",
      prompt: <p>The Bernoulli equation y′ + y = y² is not linear. Show that the substitution v = 1/y makes it linear, and solve it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes v′ = −y′/y² and rewrites the equation as v′ − v = −1.",
          "Solves to get v = 1 + Ceˣ.",
          "Concludes y = 1/(1 + Ceˣ). Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend first-order linear equations, how the integrating factor turns the left side into a derivative of a product, the structure of solutions as a particular solution plus the homogeneous solutions, and transients and steady states.",

  glimpse: (
    <p>
      The next lesson meets exact equations, another route to a first integral. Undetermined coefficients and variation of
      parameters extend the particular-plus-homogeneous idea to higher order and to systems.
    </p>
  ),
};
