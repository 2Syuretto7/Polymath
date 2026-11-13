import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LyapunovViz } from "@/components/viz/LyapunovViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.5.2",
  minutes: 90,
  links: {
    revisits: ["m10.5.1", "m10.4.3", "m3.7.4"],
    foreshadows: ["m10.5.3", "m10.5.4", "m36.5.3"],
  },

  puzzle: (
    <>
      <p>
        A marble in a bowl loses energy to friction and settles at the bottom. We know this without solving any equation:
        energy can only go down, and the bottom is where it is least. Can this idea prove stability for systems that have no
        obvious energy?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a system and a starting point. Watch the solution cross the level curves of <M>{"V"}</M>, and the graph of{" "}
        <M>{"V"}</M> along it.
      </p>
      <LyapunovViz />
    </>
  ),

  theory: (
    <>
      <Definition title="stability">
        <p>
          An equilibrium <M>{"x^*"}</M> is <strong>stable</strong> if solutions starting close enough to it stay within any
          prescribed distance for all later time. It is <strong>asymptotically stable</strong> if, in addition, nearby solutions
          tend to <M>{"x^*"}</M>.
        </p>
      </Definition>

      <Definition title="Lyapunov function">
        <p>
          A continuously differentiable <M>{"V"}</M> on a neighbourhood of <M>{"x^*"}</M> with <M>{"V(x^*) = 0"}</M> and{" "}
          <M>{"V(x) > 0"}</M> otherwise. Its rate of change along solutions is
        </p>
        <MD>{"\\dot V(x) = \\nabla V(x) \\cdot F(x)."}</MD>
      </Definition>

      <Theorem title="Lyapunov's theorem">
        <p>
          If <M>{"\\dot V \\le 0"}</M> near <M>{"x^*"}</M>, then <M>{"x^*"}</M> is stable. If <M>{"\\dot V < 0"}</M> except at{" "}
          <M>{"x^*"}</M>, it is asymptotically stable.
        </p>
      </Theorem>

      <Proof>
        <p>
          Given <M>{"\\varepsilon > 0"}</M>, let <M>{"m"}</M> be the minimum of <M>{"V"}</M> on the circle{" "}
          <M>{"|x - x^*| = \\varepsilon"}</M>, which is positive. Choose <M>{"\\delta"}</M> so that <M>{"V < m"}</M> on{" "}
          <M>{"|x - x^*| < \\delta"}</M>. A solution starting there has <M>{"V"}</M> non-increasing, so <M>{"V < m"}</M>{" "}
          forever, and it can never reach the circle. For the second part, <M>{"V"}</M> decreases to a limit{" "}
          <M>{"c \\ge 0"}</M>; if <M>{"c > 0"}</M>, the solution stays in a region away from <M>{"x^*"}</M> where{" "}
          <M>{"\\dot V \\le -k < 0"}</M>, so <M>{"V"}</M> would eventually become negative, which is impossible.
        </p>
      </Proof>

      <Example title="a nonlinear system">
        <p>
          For <M>{"x' = -x + y^2"}</M>, <M>{"y' = -y - xy"}</M> with <M>{"V = x^2 + y^2"}</M>:{" "}
          <M>{"\\dot V = 2x(-x + y^2) + 2y(-y - xy) = -2(x^2 + y^2)"}</M>. So the origin is asymptotically stable, in fact
          globally: every solution tends to it.
        </p>
      </Example>

      <Remark title="LaSalle and the art of choosing V">
        <p>
          For the damped spring <M>{"x' = y"}</M>, <M>{"y' = -x - by"}</M> with <M>{"V = x^2 + y^2"}</M>,{" "}
          <M>{"\\dot V = -2by^2"}</M> vanishes on the whole <M>{"x"}</M>-axis. LaSalle&rsquo;s invariance principle still gives
          asymptotic stability, since no solution except the equilibrium stays on that axis. There is no general recipe for{" "}
          <M>{"V"}</M>: energy, quadratic forms <M>{"x^TPx"}</M> with <M>{"P"}</M> positive definite, and inspired guesses
          are the usual sources.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for an equilibrium to be asymptotically stable?</p>,
      answer: {
        kind: "choice",
        options: [
          "Nearby solutions stay nearby and tend to it",
          "All solutions are periodic",
          "The Jacobian is zero there",
          "Solutions move away from it slowly",
        ],
        correct: [0],
      },
    },
    {
      key: "vdot",
      rung: "check",
      prompt: <p>How is <M>{"\\dot V"}</M> computed without solving the equation?</p>,
      answer: { kind: "choice", options: ["∇V · F", "V · F", "The integral of V", "The determinant of DF"], correct: [0] },
    },
    {
      key: "calc",
      rung: "apply",
      prompt: <p>For <M>{"x' = -x^3"}</M>, <M>{"y' = -y"}</M> and <M>{"V = x^2 + y^2"}</M>, what is <M>{"\\dot V"}</M> at <M>{"(1, 1)"}</M>?</p>,
      answer: { kind: "numeric", value: -4, tolerance: 0.001 },
    },
    {
      key: "lin",
      rung: "apply",
      prompt: <p>For <M>{"x' = -x^3"}</M>, <M>{"y' = -y"}</M>, why can linearisation not settle the stability of the origin, while the Lyapunov function above can?</p>,
      answer: {
        kind: "choice",
        options: [
          "The Jacobian has eigenvalue 0, so the origin is not hyperbolic; but V̇ = −2x⁴ − 2y² < 0 away from 0.",
          "The Jacobian does not exist.",
          "The system is linear.",
          "V is not positive.",
        ],
        correct: [0],
      },
    },
    {
      key: "energy",
      rung: "apply",
      prompt: <p>For the undamped pendulum with <M>{"V = y^2/2 + 1 - \\cos x"}</M>, <M>{"\\dot V = 0"}</M>. What does Lyapunov&rsquo;s theorem give?</p>,
      answer: {
        kind: "choice",
        options: [
          "Stability, but not asymptotic stability",
          "Asymptotic stability",
          "Instability",
          "Nothing at all",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use <M>{"V = x^2 + y^2"}</M> to prove that the origin is asymptotically stable for <M>{"x' = -x + y"}</M>, <M>{"y' = -x - y^3"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes V̇ = 2x(−x + y) + 2y(−x − y³) = −2x² − 2y⁴.",
          "Notes V̇ < 0 except at the origin and V is positive definite.",
          "Applies Lyapunov's theorem.",
        ],
      },
    },
    {
      key: "find",
      rung: "stretch",
      prompt: <p>Lyapunov functions have no general recipe. Suggest how you might search for one for a mechanical system, and for a linear system <M>{"x' = Ax"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Suggests total energy for a mechanical system.",
          "Suggests a quadratic form xᵀPx, with P chosen so that AᵀP + PA is negative definite.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what stability and asymptotic stability mean, what a Lyapunov function is and how to compute V̇ without solving, the idea of the proof, and how LaSalle's principle helps when V̇ only vanishes on a set.",

  glimpse: (
    <p>
      The next lessons turn from equilibria to periodic orbits: limit cycles, and the Poincaré–Bendixson theorem that guarantees
      them. Lyapunov&rsquo;s idea of a decreasing quantity returns throughout dynamical systems.
    </p>
  ),
};
