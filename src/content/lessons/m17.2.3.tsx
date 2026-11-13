import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { WaveEnergyViz } from "@/components/viz/WaveEnergyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.2.3",
  minutes: 85,
  links: {
    revisits: ["m17.2.2", "m17.2.1", "m10.5.2"],
    foreshadows: ["m17.3.2", "m17.5.2", "m17.4.4"],
  },

  puzzle: (
    <>
      <p>
        A vibrating string changes shape in complicated ways. Yet some single number about it stays fixed for ever, and that
        number is powerful enough to prove that the motion is completely determined by how it starts. What is it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Watch the kinetic and potential energy of a plucked string over one period.</p>
      <WaveEnergyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="energy">
        <p>For a solution of <M>{"u_{tt} = c^2 u_{xx}"}</M> on an interval [0, L], define</p>
        <MD>{"E(t) = \\frac12\\int_0^L \\big(u_t^2 + c^2 u_x^2\\big)\\,dx,"}</MD>
        <p>
          the sum of kinetic and potential energy, up to the density. The potential energy is the stretching of the string.
        </p>
      </Definition>

      <Theorem title="conservation of energy">
        <p>If u = 0 at both ends, or the string is infinite and u vanishes far out, then E is constant. Indeed</p>
        <MD>{"E'(t) = \\int_0^L \\big(u_t u_{tt} + c^2 u_x u_{xt}\\big)\\,dx = \\int_0^L c^2\\big(u_t u_{xx} + u_x u_{xt}\\big)\\,dx = c^2\\big[u_t u_x\\big]_0^L = 0,"}</MD>
        <p>since the integrand is the x-derivative of <M>{"u_t u_x"}</M>, and <M>{"u_t = 0"}</M> at fixed ends.</p>
      </Theorem>

      <Example title="uniqueness by energy">
        <p>
          Suppose u and v solve the same problem, with the same initial and boundary data. Then w = u − v solves the wave
          equation with zero data, so its energy is 0 at t = 0 and hence always. So <M>{"w_t = w_x = 0"}</M> everywhere, w is
          constant, and since w = 0 initially, w = 0: the solutions agree.
        </p>
      </Example>

      <Remark title="beyond the string">
        <p>
          Energy methods need no formula for the solution, so they work for variable coefficients, higher dimensions and many
          nonlinear equations. With damping, <M>{"u_{tt} + \\gamma u_t = c^2 u_{xx}"}</M>, the same computation gives{" "}
          <M>{"E' = -\\gamma\\int u_t^2 \\le 0"}</M>: energy decreases, like a Lyapunov function.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does the energy of a vibrating string measure?</p>,
      answer: {
        kind: "choice",
        options: ["The sum of kinetic energy, from uₜ, and potential energy, from uₓ", "The maximum displacement", "The length of the string", "The frequency of the fundamental"],
        correct: [0],
      },
    },
    {
      key: "use",
      rung: "check",
      prompt: <p>What does conservation of energy prove about the wave equation with fixed ends?</p>,
      answer: { kind: "choice", options: ["Uniqueness of solutions", "Existence of solutions", "That every solution is periodic", "That the string never moves"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, pluck the string at 0.50. What is the total energy? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.02 },
    },
    {
      key: "ke0",
      rung: "apply",
      prompt: <p>In the visualisation, what is the kinetic energy at t = 0, and why?</p>,
      answer: { kind: "choice", options: ["0, because the string is released from rest", "Half the total, by symmetry", "The total, because the string is moving fastest", "It depends on where the string is plucked"], correct: [0] },
    },
    {
      key: "sin",
      rung: "apply",
      prompt: <p>Compute the energy of u = sin x cos t on [0, π], with c = 1. Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.79, tolerance: 0.01 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the wave equation on [0, L] with u = 0 at both ends has at most one solution with given initial position and velocity.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes two solutions and lets w be their difference, which has zero initial and boundary data.",
          "Uses conservation of energy: E(t) = E(0) = 0, so wₜ = wₓ = 0 everywhere.",
          "Concludes that w is constant and hence 0, so the solutions agree.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For the damped equation <M>{"u_{tt} + \\gamma u_t = c^2 u_{xx}"}</M> with fixed ends, show that the energy cannot increase.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Differentiates E and substitutes u_tt = c²uₓₓ − γuₜ.",
          "Integrates by parts as before to get E′ = −γ∫uₜ² dx ≤ 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the energy of a vibrating string, why it is conserved when the ends are fixed, and how conservation of energy proves that solutions are unique.",

  glimpse: (
    <p>
      Next, the heat equation, where energy methods and a new tool, the maximum principle, show how diffusion smooths
      everything out.
    </p>
  ),
};
