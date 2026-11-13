import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { TrappingViz } from "@/components/viz/TrappingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.5.4",
  minutes: 90,
  links: {
    revisits: ["m10.5.3", "m10.5.1", "m10.5.2"],
    foreshadows: ["m36.5.3", "m36.1.1", "m15.4.5"],
  },

  puzzle: (
    <>
      <p>
        Most nonlinear systems cannot be solved, so how could we ever prove that one has a periodic solution? In the plane,
        there is a remarkable shortcut: trap a solution in a region with nowhere to rest, and it has no choice but to circle.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Adjust the two circles until the flow enters the annulus across both of them. Then the theorem below guarantees a
        closed orbit inside.
      </p>
      <TrappingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="trapping region">
        <p>
          A closed bounded region <M>{"R"}</M> is <strong>trapping</strong> (forward invariant) if every solution that starts
          in <M>{"R"}</M> stays in <M>{"R"}</M> for all later time. It is enough to check that on the boundary the vector
          field points into <M>{"R"}</M>.
        </p>
      </Definition>

      <Theorem title="Poincaré–Bendixson">
        <p>
          Let <M>{"x' = F(x)"}</M> be a planar system with <M>{"F"}</M> continuously differentiable. If <M>{"R"}</M> is a
          closed bounded trapping region containing no equilibria, then <M>{"R"}</M> contains a periodic orbit.
        </p>
      </Theorem>

      <Remark title="why it is true">
        <p>
          A solution trapped in <M>{"R"}</M> has limit points, and its <M>{"\\omega"}</M>-limit set is a non-empty closed
          invariant set in <M>{"R"}</M>. The proof shows, using the fact that a solution cannot cross itself in the plane, a
          consequence of the Jordan curve theorem, that this limit set must be a periodic orbit when there are no equilibria.
          The full proof is a gem of planar topology, beyond this first look.
        </p>
      </Remark>

      <Example title="an annulus">
        <p>
          For <M>{"r' = r(1 - r^2) + \\mu r\\cos\\theta"}</M>, <M>{"\\theta' = 1"}</M> with <M>{"0 < \\mu < 1"}</M>: on{" "}
          <M>{"r = r_1"}</M>, <M>{"r' \\ge r_1(1 - r_1^2 - \\mu) > 0"}</M> if <M>{"r_1 < \\sqrt{1 - \\mu}"}</M>; on{" "}
          <M>{"r = r_2"}</M>, <M>{"r' \\le r_2(1 - r_2^2 + \\mu) < 0"}</M> if <M>{"r_2 > \\sqrt{1 + \\mu}"}</M>. The only
          equilibrium is the origin, outside the annulus, so there is a closed orbit with radius between{" "}
          <M>{"\\sqrt{1 - \\mu}"}</M> and <M>{"\\sqrt{1 + \\mu}"}</M>.
        </p>
      </Example>

      <Remark title="only in the plane">
        <p>
          In three dimensions trajectories can weave around each other forever without closing up, as in the Lorenz system,
          whose trajectories wander on a strange attractor. The Poincaré–Bendixson theorem is why chaos needs at least three
          dimensions for continuous-time systems.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "trap",
      rung: "check",
      prompt: <p>What is a trapping region?</p>,
      answer: {
        kind: "choice",
        options: ["A region solutions can never enter", "A region that solutions starting inside never leave", "A region containing an equilibrium", "Any bounded region"],
        correct: [1],
      },
    },
    {
      key: "hyp",
      rung: "check",
      prompt: <p>Which hypothesis of Poincaré–Bendixson rules out solutions simply settling down?</p>,
      answer: {
        kind: "choice",
        options: ["The region contains no equilibria", "The region is bounded", "The system is planar", "F is differentiable"],
        correct: [0],
      },
    },
    {
      key: "inner",
      rung: "apply",
      prompt: <p>For the annulus example with <M>{"\\mu = 0.36"}</M>, below what inner radius is the flow guaranteed to point outwards?</p>,
      answer: { kind: "numeric", value: 0.8, tolerance: 0.001 },
    },
    {
      key: "outer",
      rung: "apply",
      prompt: <p>For the same example with <M>{"\\mu = 0.44"}</M>, above what outer radius is the flow guaranteed to point inwards?</p>,
      answer: { kind: "numeric", value: 1.2, tolerance: 0.001 },
    },
    {
      key: "3d",
      rung: "apply",
      prompt: <p>Why does Poincaré–Bendixson fail in three dimensions?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because there are no equilibria in three dimensions",
          "Because trajectories can wind around each other forever without closing, which planar topology forbids",
          "Because three-dimensional systems are linear",
          "Because bounded regions do not exist",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that for <M>{"r' = r(1 - r^2) + \\mu r\\cos\\theta"}</M> with <M>{"0 < \\mu < 1"}</M>, the flow points outwards on every circle <M>{"r = r_1"}</M> with <M>{"0 < r_1 < \\sqrt{1 - \\mu}"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses cos θ ≥ −1 to get r′ ≥ r₁(1 − r₁² − μ).",
          "Notes that 1 − r₁² − μ > 0 when r₁ < √(1 − μ).",
          "Concludes r′ > 0 on the whole circle.",
        ],
      },
    },
    {
      key: "eq",
      rung: "stretch",
      prompt: <p>Why must a periodic orbit in the plane enclose at least one equilibrium? How does this fit with the annulus having a hole?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States or argues that the region inside a closed orbit is trapping and so, by Poincaré–Bendixson or index theory, contains an equilibrium.",
          "Notes that the annulus's hole contains the equilibrium at the origin.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a trapping region is, what the Poincaré–Bendixson theorem says, how to use an annulus to prove a closed orbit exists, and why the theorem only works in the plane.",

  glimpse: (
    <p>
      The final chapter turns to series solutions and the Laplace transform. Dynamical systems later shows what replaces
      Poincaré–Bendixson in higher dimensions: chaos and strange attractors.
    </p>
  ),
};
