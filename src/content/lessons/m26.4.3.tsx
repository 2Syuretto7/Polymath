import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { BracketLoopViz } from "@/components/viz/BracketLoopViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.4.3",
  minutes: 90,
  links: {
    revisits: ["m26.4.2", "m26.4.1", "m5.2.1"],
    foreshadows: ["m26.4.4", "m26.5.3", "m26.7.2"],
  },

  puzzle: (
    <>
      <p>
        Drive a car forward, steer, reverse, and steer back. You do not return to where you started: you have moved sideways,
        which is how you parallel park. The car can only roll and steer, yet combining them yields a third motion. The Lie
        bracket measures exactly this.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Flow along X for time ε, then Y, then back along X, then back along Y. Choose a pair of fields and shrink ε: the gap
        between the start and the end, divided by ε², approaches the bracket [X, Y] at p.
      </p>
      <BracketLoopViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Lie bracket">
        <p>
          For vector fields X and Y, the <strong>Lie bracket</strong> [X, Y] is the vector field acting on functions by{" "}
          <M>{"[X, Y] f = X(Yf) - Y(Xf)"}</M>. Each of XY and YX is a second-order operator, but the second-order terms cancel,
          so [X, Y] is again a derivation, hence a vector field. In coordinates,{" "}
          <M>{"[X, Y]^j = \\sum_i \\left( X^i \\, \\partial Y^j / \\partial x^i - Y^i \\, \\partial X^j / \\partial x^i \\right)"}</M>.
        </p>
      </Definition>

      <Theorem title="properties">
        <p>
          The bracket is bilinear over ℝ and antisymmetric, <M>{"[X, Y] = -[Y, X]"}</M>, and satisfies the{" "}
          <strong>Jacobi identity</strong> <M>{"[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0"}</M>. So the vector fields form a
          Lie algebra. It is not linear over functions: <M>{"[X, fY] = f[X, Y] + (Xf) Y"}</M>.
        </p>
      </Theorem>

      <Example title="coordinate fields commute">
        <p>
          <M>{"[\\partial / \\partial x^i, \\partial / \\partial x^j] = 0"}</M>, because mixed partial derivatives of smooth
          functions are equal. But <M>{"[\\partial_x, x \\partial_y] = \\partial_y"}</M>: flowing along x, then up at a rate
          that depends on x, then back, then down, leaves you displaced upward.
        </p>
      </Example>

      <Theorem title="brackets and flows">
        <p>
          If θ is the flow of X, then <M>{"[X, Y] = \\frac{d}{dt}\\big|_{t=0} (\\theta_{-t})_* Y"}</M>: the bracket is the{" "}
          <strong>Lie derivative</strong> <M>{"\\mathcal{L}_X Y"}</M>, the rate at which Y changes along the flow of X. Two complete
          fields have commuting flows, <M>{"\\theta_t \\circ \\psi_s = \\psi_s \\circ \\theta_t"}</M>, exactly when their bracket
          vanishes.
        </p>
      </Theorem>

      <Remark title="parking a car">
        <p>
          In the car&rsquo;s configuration space, &lsquo;roll&rsquo; and &lsquo;steer&rsquo; are two vector fields. Their
          bracket is a new direction, &lsquo;wriggle&rsquo;, and the bracket of roll with wriggle gives the sideways slide. This
          is why a car with only two controls can reach every position and heading.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How does [X, Y] act on a function f?</p>,
      answer: { kind: "choice", options: ["[X, Y]f = X(Yf) − Y(Xf)", "[X, Y]f = X(f) Y(f)", "[X, Y]f = X(Yf) + Y(Xf)", "[X, Y]f = (X + Y)f"], correct: [0] },
    },
    {
      key: "coord",
      rung: "check",
      prompt: <p>Why do the coordinate fields ∂/∂x and ∂/∂y have bracket zero?</p>,
      answer: { kind: "choice", options: ["Mixed partial derivatives of smooth functions are equal", "They are perpendicular", "They have length 1", "They are not vector fields"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose ∂x and x ∂y and a small ε. What does the second component of gap / ε² approach?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.05 },
    },
    {
      key: "comp",
      rung: "apply",
      prompt: <p>What is [x ∂/∂x, ∂/∂x] on ℝ?</p>,
      answer: { kind: "choice", options: ["−∂/∂x", "∂/∂x", "0", "x ∂/∂x"], correct: [0] },
    },
    {
      key: "anti",
      rung: "apply",
      prompt: <p>What is [X, X] for any vector field X?</p>,
      answer: { kind: "choice", options: ["0, by antisymmetry", "2X", "X", "It is undefined"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that [X, Y] satisfies the Leibniz rule [X, Y](fg) = f [X, Y]g + g [X, Y]f, so it is a vector field.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands X(Y(fg)) = X(f Yg + g Yf) into four terms by the Leibniz rule for X.",
          "Expands Y(X(fg)) likewise, and notes the cross terms Xf Yg and Xg Yf appear in both and cancel.",
          "Collects the rest as f [X, Y]g + g [X, Y]f.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>On a car, &lsquo;roll&rsquo; and &lsquo;steer&rsquo; generate a sideways motion through brackets. Why can a car still not slide sideways directly?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the allowed velocities at each moment are only combinations of roll and steer.",
          "Explains the sideways motion arises only from loops of allowed motions, to second order or higher.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If a family of planes is to be tangent to a family of surfaces, then flowing within the planes must keep you on the
        surface, so brackets of fields in the planes must stay in the planes. Frobenius showed this condition is also enough.
      </p>
      <p>Next, the Frobenius theorem.</p>
    </>
  ),
};
