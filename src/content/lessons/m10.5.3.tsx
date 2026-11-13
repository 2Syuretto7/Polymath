import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LimitCycleViz } from "@/components/viz/LimitCycleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.5.3",
  minutes: 85,
  links: {
    revisits: ["m10.5.2", "m10.4.3", "m10.3.4"],
    foreshadows: ["m10.5.4", "m36.3.1", "m36.5.3"],
  },

  puzzle: (
    <>
      <p>
        A heart beats with the same rhythm whether it starts from a small flutter or a large jolt. A linear oscillator cannot
        do this: its amplitude depends on how it starts. What kind of equation produces one preferred oscillation that every
        start is drawn towards?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Start solutions inside and outside, and change μ. Notice that they all end on the same closed curve.</p>
      <LimitCycleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="limit cycle">
        <p>
          A <strong>periodic orbit</strong> is a closed trajectory, traced by a solution with <M>{"x(t + P) = x(t)"}</M>. A{" "}
          <strong>limit cycle</strong> is an isolated periodic orbit: nearby trajectories are not closed, but spiral towards it
          or away from it. It is <strong>stable</strong> if nearby trajectories approach it.
        </p>
      </Definition>

      <Example title="a cycle in polar coordinates">
        <p>
          The system <M>{"r' = r(1 - r^2)"}</M>, <M>{"\\theta' = 1"}</M> has <M>{"r' > 0"}</M> for <M>{"0 < r < 1"}</M> and{" "}
          <M>{"r' < 0"}</M> for <M>{"r > 1"}</M>. So the circle <M>{"r = 1"}</M> is a stable limit cycle, traversed with
          period <M>{"2\\pi"}</M>.
        </p>
      </Example>

      <Theorem title="linear systems have no limit cycles">
        <p>
          If <M>{"x' = Ax"}</M> has a nonconstant periodic solution, then every multiple of it is periodic too, so periodic
          orbits are never isolated.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"x(t)"}</M> is a solution, so is <M>{"cx(t)"}</M> for any constant <M>{"c"}</M>, by linearity. If{" "}
          <M>{"x"}</M> has period <M>{"P"}</M>, so does <M>{"cx"}</M>, and as <M>{"c"}</M> varies near 1 these orbits fill a
          band around the original. So none is isolated.
        </p>
      </Proof>

      <Example title="the van der Pol oscillator">
        <MD>{"x'' - \\mu(1 - x^2)x' + x = 0."}</MD>
        <p>
          For small <M>{"|x|"}</M> the damping term is negative, pumping energy in; for large <M>{"|x|"}</M> it is positive,
          draining energy. The balance produces a stable limit cycle for every <M>{"\\mu > 0"}</M>. It was found in the 1920s
          in valve radio circuits.
        </p>
      </Example>

      <Remark title="ruling cycles out">
        <p>
          Dulac&rsquo;s criterion: if, on a simply connected region, <M>{"\\nabla \\cdot (gF)"}</M> has one sign and is not
          identically zero for some function <M>{"g"}</M>, there is no periodic orbit there. Gradient systems{" "}
          <M>{"x' = -\\nabla V"}</M> also have none, since <M>{"V"}</M> strictly decreases along nonconstant solutions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a limit cycle?</p>,
      answer: { kind: "choice", options: ["Any periodic solution", "An isolated closed orbit", "An equilibrium", "A spiral"], correct: [1] },
    },
    {
      key: "linear",
      rung: "check",
      prompt: <p>Why can a linear system <M>{"x' = Ax"}</M> not have a limit cycle?</p>,
      answer: {
        kind: "choice",
        options: [
          "Linear systems have no periodic solutions",
          "Multiples of a periodic solution are periodic, so periodic orbits are not isolated",
          "Linear systems are always stable",
          "The trace is zero",
        ],
        correct: [1],
      },
    },
    {
      key: "radius",
      rung: "apply",
      prompt: <p>For <M>{"r' = r(4 - r^2)"}</M>, <M>{"\\theta' = 1"}</M>, what is the radius of the limit cycle?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "stab",
      rung: "apply",
      prompt: <p>For <M>{"r' = r(r^2 - 1)"}</M>, <M>{"\\theta' = 1"}</M>, is the cycle <M>{"r = 1"}</M> stable?</p>,
      answer: {
        kind: "choice",
        options: ["Yes, nearby solutions approach it", "No, nearby solutions move away from it", "It is not a cycle", "It depends on θ"],
        correct: [1],
      },
    },
    {
      key: "period",
      rung: "apply",
      prompt: <p>For <M>{"r' = r(1 - r^2)"}</M>, <M>{"\\theta' = 3"}</M>, what is the period of the limit cycle?</p>,
      answer: { kind: "numeric", value: (2 * Math.PI) / 3, tolerance: 0.005 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the gradient system <M>{"x' = -\\nabla V(x)"}</M> has no nonconstant periodic solutions.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes dV/dt = −|∇V|² ≤ 0 along solutions.",
          "Notes that on a periodic solution V returns to its starting value, so ∇V = 0 along it.",
          "Concludes the solution is constant.",
        ],
      },
    },
    {
      key: "heart",
      rung: "stretch",
      prompt: <p>Why is a stable limit cycle a better model for a heartbeat than a linear oscillator?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a linear oscillator's amplitude depends on its initial conditions and is not restored after a disturbance.",
          "Explains that a stable limit cycle returns to the same rhythm after disturbances.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a limit cycle is, an example in polar coordinates, why linear systems cannot have one, how the van der Pol oscillator produces one, and a way to rule cycles out.",

  glimpse: (
    <p>
      The next lesson gives a theorem that guarantees closed orbits in the plane. Dynamical systems later studies periodic
      orbits and chaos, which needs at least three dimensions in continuous time.
    </p>
  ),
};
