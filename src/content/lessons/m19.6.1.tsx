import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { OdeStepperViz } from "@/components/viz/OdeStepperViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.6.1",
  minutes: 90,
  links: {
    revisits: ["m19.4.2", "m2.8.2", "m2.9.5"],
    foreshadows: ["m19.6.2", "m10.5.2", "m26.4.2"],
  },

  puzzle: (
    <>
      <p>
        A pendulum without friction swings for ever with the same amplitude. Simulate it with the most natural method,
        stepping forward along the tangent, and the simulated pendulum swings higher and higher, gaining energy from nowhere.
        Smaller steps only slow the gain. How can a simulation be made faithful?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Solve x″ = −x with three methods. Change the number of steps per period and compare the orbits.</p>
      <OdeStepperViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Euler’s method">
        <p>
          For <M>{"y' = f(t, y)"}</M>, <M>{"y(t_0) = y_0"}</M>, step along the tangent:
        </p>
        <MD>{"y_{k+1} = y_k + hf(t_k, y_k)."}</MD>
        <p>
          By Taylor&rsquo;s theorem the <strong>local error</strong>, made in one step from the exact solution, is{" "}
          <M>{"\\tfrac12h^2y''(\\xi)"}</M>.
        </p>
      </Definition>

      <Theorem title="convergence of Euler’s method">
        <p>
          If f is Lipschitz in y with constant L and y″ is bounded by M, the global error <M>{"e_k = |y(t_k) - y_k|"}</M>{" "}
          satisfies <M>{"e_{k+1} \\le (1 + hL)e_k + \\tfrac12Mh^2"}</M>, and summing the geometric growth,
        </p>
        <MD>{"e_k \\le \\frac{Mh}{2L}\\left(e^{L(t_k - t_0)} - 1\\right)."}</MD>
        <p>
          The global error is O(h): one order lower than the local error, because about 1/h local errors accumulate.
        </p>
      </Theorem>

      <Definition title="Runge–Kutta methods">
        <p>
          A Runge–Kutta method evaluates f at several stages within the step and combines them. Heun&rsquo;s method uses{" "}
          <M>{"k_1 = f(t_k, y_k)"}</M> and <M>{"k_2 = f(t_k + h, y_k + hk_1)"}</M>, then{" "}
          <M>{"y_{k+1} = y_k + \\tfrac h2(k_1 + k_2)"}</M>, the trapezium rule with a predicted endpoint: order 2. The classical
          fourth-order method uses four stages:
        </p>
        <MD>{"y_{k+1} = y_k + \\tfrac h6(k_1 + 2k_2 + 2k_3 + k_4),"}</MD>
        <p>
          with <M>{"k_2, k_3"}</M> evaluated at the midpoint and <M>{"k_4"}</M> at the end. When f does not depend on y it
          reduces to Simpson&rsquo;s rule.
        </p>
      </Definition>

      <Example title="Euler on the oscillator">
        <p>
          For x′ = v, v′ = −x, one Euler step maps (x, v) to (x + hv, v − hx), so{" "}
          <M>{"x^2 + v^2"}</M> is multiplied by exactly <M>{"1 + h^2"}</M>. After one period, 2π/h steps, the energy has grown
          by about <M>{"(1+h^2)^{2\\pi/h} \\approx e^{2\\pi h}"}</M>: the outward spiral in the visualisation.
        </p>
      </Example>

      <Remark title="in practice">
        <p>
          Production codes use embedded pairs, such as Dormand–Prince, which compute a fourth- and fifth-order answer from
          shared stages, estimate the error from their difference, and adjust h step by step. For long simulations of
          mechanical systems, symplectic methods such as Störmer–Verlet keep energy errors bounded for very long times.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "order",
      rung: "check",
      prompt: <p>What is the order of the global error of Euler&rsquo;s method?</p>,
      answer: { kind: "choice", options: ["h", "h²", "h⁴", "1"], correct: [0] },
    },
    {
      key: "stages",
      rung: "check",
      prompt: <p>How many evaluations of f does one step of classical Runge–Kutta 4 take?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "euler",
      rung: "apply",
      prompt: <p>Use Euler&rsquo;s method with h = 0.5 on y′ = y, y(0) = 1, to estimate y(1).</p>,
      answer: { kind: "numeric", value: 2.25, tolerance: 0.0001 },
    },
    {
      key: "heun",
      rung: "apply",
      prompt: <p>Take one step of Heun&rsquo;s method with h = 1 on y′ = y, y(0) = 1.</p>,
      answer: { kind: "numeric", value: 2.5, tolerance: 0.0001 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, halving h divides the Runge–Kutta 4 error by about what?</p>,
      answer: { kind: "numeric", value: 16, tolerance: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if the errors satisfy <M>{"e_{k+1} \\le (1 + hL)e_k + Ch^2"}</M> with <M>{"e_0 = 0"}</M>, then <M>{"e_k \\le \\frac{Ch}{L}(e^{Lkh} - 1)"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Unrolls the recursion into a geometric sum of powers of (1 + hL) times Ch².",
          "Sums the geometric series to get Ch²((1 + hL)ᵏ − 1)/(hL).",
          "Uses 1 + hL ≤ e to the power hL to conclude.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The backward Euler method uses <M>{"y_{k+1} = y_k + hf(t_{k+1}, y_{k+1})"}</M>. What does it do to the energy of the oscillator?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Solves the step to find the new (x, v) in terms of the old.",
          "Shows that x² + v² is divided by 1 + h² each step, so the orbit spirals inwards.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, stiffness: equations where explicit methods need absurdly small steps, and implicit methods such as backward
      Euler come into their own.
    </p>
  ),
};
