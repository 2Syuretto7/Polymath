import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ExactFlowViz } from "@/components/viz/ExactFlowViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.1.3",
  minutes: 85,
  links: {
    revisits: ["m10.1.2", "m5.6.2", "m5.2.1"],
    foreshadows: ["m10.1.4", "m10.5.1", "m26.4.2"],
  },

  puzzle: (
    <>
      <p>
        A ball rolling in a bowl without friction keeps its total energy fixed. So its path, plotted as position against
        velocity, lies on a curve where the energy is constant. Some differential equations hide a conserved quantity like
        this. How can we tell, and how do we find it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick an equation and a point, and see that the solution through it is a level curve of a function F.</p>
      <ExactFlowViz />
    </>
  ),

  theory: (
    <>
      <Definition title="exact equation">
        <p>
          Write a first-order equation as <M>{"M(x, y)\\,dx + N(x, y)\\,dy = 0"}</M>, meaning{" "}
          <M>{"M + Ny' = 0"}</M>. It is <strong>exact</strong> if there is a function <M>{"F"}</M> with{" "}
          <M>{"F_x = M"}</M> and <M>{"F_y = N"}</M>. Then the solutions are given implicitly by <M>{"F(x, y) = C"}</M>.
        </p>
      </Definition>

      <Theorem title="the test for exactness">
        <p>On a rectangle (or any simply connected region) where <M>{"M"}</M> and <M>{"N"}</M> have continuous partial derivatives,</p>
        <MD>{"M\\,dx + N\\,dy = 0 \\text{ is exact} \\iff \\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}."}</MD>
        <p>Necessity is the equality of mixed partials, <M>{"F_{xy} = F_{yx}"}</M>; sufficiency is the construction below.</p>
      </Theorem>

      <Example title="finding F">
        <p>
          For <M>{"(2x + y)\\,dx + (x + 2y)\\,dy = 0"}</M>, <M>{"M_y = 1 = N_x"}</M>. Integrate <M>{"M"}</M> in{" "}
          <M>{"x"}</M>: <M>{"F = x^2 + xy + g(y)"}</M>. Then <M>{"F_y = x + g'(y) = x + 2y"}</M> gives <M>{"g = y^2"}</M>. The
          solutions are the ellipses <M>{"x^2 + xy + y^2 = C"}</M>.
        </p>
      </Example>

      <Remark title="why solutions are level curves">
        <p>
          Along a solution <M>{"y(x)"}</M>, the chain rule gives{" "}
          <M>{"\\frac{d}{dx}F(x, y(x)) = F_x + F_y y' = M + Ny' = 0"}</M>, so <M>{"F"}</M> is constant. The vector{" "}
          <M>{"(N, -M)"}</M> is tangent to the level curves, which is what the visual follows.
        </p>
      </Remark>

      <Remark title="integrating factors and conservative fields">
        <p>
          A non-exact equation can sometimes be made exact by multiplying by a function <M>{"\\mu"}</M>; the linear equations of
          the last lesson are an example. The exactness test is the same as the test for a vector field <M>{"(M, N)"}</M> to be
          conservative, and <M>{"F"}</M> is its potential.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "test",
      rung: "check",
      prompt: <p>What is the test for M dx + N dy = 0 to be exact?</p>,
      answer: { kind: "choice", options: ["M = N", "∂M/∂y = ∂N/∂x", "∂M/∂x = ∂N/∂y", "M_x + N_y = 0"], correct: [1] },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Is (3x² + y) dx + (x + 4y) dy = 0 exact?</p>,
      answer: { kind: "choice", options: ["Yes", "No"], correct: [0] },
    },
    {
      key: "value",
      rung: "apply",
      prompt: <p>For (2x + y) dx + (x + 2y) dy = 0, the solution through (1, 1) is F(x, y) = C. What is C?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "find",
      rung: "apply",
      prompt: <p>For (3x² + y) dx + (x + 4y) dy = 0, which F works?</p>,
      answer: { kind: "choice", options: ["x³ + xy + 2y²", "x³ + y²", "3x²y + 4y", "x³ + xy"], correct: [0] },
    },
    {
      key: "ivp",
      rung: "apply",
      prompt: <p>Solve 2xy dx + (x² + 1) dy = 0 with y(0) = 2. What is y(1)?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if F_x = M and F_y = N, then F is constant along every solution of M + N y′ = 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Differentiates F(x, y(x)) with the chain rule to get F_x + F_y y′.",
          "Substitutes M and N to get M + N y′.",
          "Uses the equation to conclude the derivative is 0, so F is constant.",
        ],
      },
    },
    {
      key: "factor",
      rung: "stretch",
      prompt: <p>The equation y dx − x dy = 0 is not exact. Show that multiplying by 1/y² makes it exact, and find its solutions.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks M_y = 1 and N_x = −1, so not exact.",
          "After multiplying, M = 1/y and N = −x/y² satisfy M_y = N_x = −1/y².",
          "Finds F = x/y, so the solutions are lines y = kx through the origin. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend exact equations and why their solutions are level curves of a potential F, the test ∂M/∂y = ∂N/∂x and why it works, how to construct F by integrating, and the link with conservative vector fields and integrating factors.",

  glimpse: (
    <p>
      The next lesson builds models with first-order equations. Conserved quantities return in the study of nonlinear systems,
      and integral curves of vector fields are central in geometry.
    </p>
  ),
};
