import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { LinearisationViz } from "@/components/viz/LinearisationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.5.1",
  minutes: 90,
  links: {
    revisits: ["m10.4.3", "m12.4.1", "m10.2.3"],
    foreshadows: ["m10.5.2", "m10.5.3", "m36.3.1"],
  },

  puzzle: (
    <>
      <p>
        A pendulum can hang straight down or balance straight up. Both are equilibria, but one is stable and the other is not.
        The pendulum equation cannot be solved in elementary terms. How can we still tell which equilibria are stable?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick an equilibrium and shrink the window around it. Compare the true trajectories with those of the linear system
        that best approximates it there.
      </p>
      <LinearisationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="equilibria and linearisation">
        <p>
          For <M>{"x' = F(x)"}</M> in <M>{"\\mathbb{R}^2"}</M>, an <strong>equilibrium</strong> is a point <M>{"x^*"}</M> with{" "}
          <M>{"F(x^*) = 0"}</M>. Near it, <M>{"F(x) \\approx J(x - x^*)"}</M>, where <M>{"J = DF(x^*)"}</M> is the Jacobian
          matrix of partial derivatives. The <strong>linearisation</strong> is <M>{"u' = Ju"}</M>, with <M>{"u = x - x^*"}</M>.
        </p>
      </Definition>

      <Example title="the damped pendulum">
        <p>For <M>{"x' = y"}</M>, <M>{"y' = -\\sin x - 0.3y"}</M>, the equilibria are <M>{"(k\\pi, 0)"}</M>, and</p>
        <MD>{"J = \\begin{pmatrix} 0 & 1 \\\\ -\\cos x & -0.3 \\end{pmatrix}."}</MD>
        <p>
          At <M>{"(0, 0)"}</M>, <M>{"T = -0.3"}</M> and <M>{"D = 1"}</M>: a stable spiral. At <M>{"(\\pi, 0)"}</M>,{" "}
          <M>{"D = -1"}</M>: a saddle.
        </p>
      </Example>

      <Theorem title="Hartman–Grobman, in the plane">
        <p>
          If no eigenvalue of <M>{"J"}</M> has zero real part, the equilibrium is <strong>hyperbolic</strong>, and near{" "}
          <M>{"x^*"}</M> the flow of <M>{"x' = F(x)"}</M> is a continuous deformation of the flow of <M>{"u' = Ju"}</M>.
          In particular, if every eigenvalue has negative real part, <M>{"x^*"}</M> is asymptotically stable; if one has
          positive real part, it is unstable.
        </p>
      </Theorem>

      <Remark title="why the proof works, and when it fails">
        <p>
          The error <M>{"F(x) - J(x - x^*)"}</M> is small compared with <M>{"|x - x^*|"}</M>, and hyperbolic behaviour, decay or
          growth at an exponential rate, is strong enough to dominate it. A centre has no such margin. For{" "}
          <M>{"x' = -y + xr^2"}</M>, <M>{"y' = x + yr^2"}</M>, the linearisation is a centre, but{" "}
          <M>{"r' = r^3"}</M>: the true solutions spiral out. Non-hyperbolic cases need other tools, such as Lyapunov
          functions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "eq",
      rung: "check",
      prompt: <p>What is an equilibrium of <M>{"x' = F(x)"}</M>?</p>,
      answer: { kind: "choice", options: ["A point where F(x) = 0", "A point where F is largest", "A periodic solution", "A point where J = 0"], correct: [0] },
    },
    {
      key: "hyp",
      rung: "check",
      prompt: <p>When is an equilibrium hyperbolic?</p>,
      answer: { kind: "choice", options: ["When no eigenvalue of the Jacobian has zero real part", "When the Jacobian is symmetric", "When it is a saddle", "When F is linear"], correct: [0] },
    },
    {
      key: "find",
      rung: "apply",
      prompt: <p>The system <M>{"x' = x(3 - x - 2y)"}</M>, <M>{"y' = y(2 - x - y)"}</M> has an equilibrium with both coordinates positive. What is its <M>{"x"}</M>-coordinate?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "jac",
      rung: "apply",
      prompt: <p>For <M>{"x' = y"}</M>, <M>{"y' = x - x^3"}</M>, what is the determinant of the Jacobian at <M>{"(1, 0)"}</M>?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "type",
      rung: "apply",
      prompt: <p>For the same system, what kind of equilibrium is <M>{"(0, 0)"}</M>?</p>,
      answer: { kind: "choice", options: ["A saddle", "A stable spiral", "A stable node", "Undecided by linearisation"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the linearisation of the undamped pendulum <M>{"x' = y"}</M>, <M>{"y' = -\\sin x"}</M> at the origin is a centre, and explain why this alone does not settle the nonlinear behaviour.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes J = [[0, 1], [−1, 0]] with eigenvalues ±i.",
          "Notes the equilibrium is not hyperbolic, so Hartman–Grobman does not apply.",
          "Mentions that another argument, such as conservation of energy, is needed.",
        ],
      },
    },
    {
      key: "bio",
      rung: "stretch",
      prompt: <p>In a model of two competing species, the coexistence equilibrium is a saddle. What does this predict about the species, and how much should we trust it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that a saddle is unstable: small disturbances lead away from coexistence, typically to one species winning.",
          "Notes that saddles are hyperbolic and robust, so the prediction survives small model errors.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to find equilibria and the Jacobian, how the linearisation classifies an equilibrium, what the Hartman–Grobman theorem guarantees for hyperbolic equilibria, and why a centre can mislead.",

  glimpse: (
    <p>
      The next lesson proves stability without linearising, using Lyapunov functions. After that come limit cycles, and later
      the general theory of hyperbolic fixed points.
    </p>
  ),
};
