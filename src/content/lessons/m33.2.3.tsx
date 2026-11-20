import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { RiemannProblemViz } from "@/components/viz/RiemannProblemViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.2.3",
  minutes: 90,
  links: {
    revisits: ["m33.2.1", "m33.2.2", "m17.2.2"],
    foreshadows: ["m33.3.1", "m33.4.1", "m33.5.2"],
  },

  puzzle: (
    <>
      <p>
        Cars on a road travel faster where traffic is light. A dense queue ahead of light traffic forms a sharp front that
        moves backwards; a queue released at a green light thins out gradually. The equation for traffic density is first
        order and smooth, yet one of these fronts is a jump. What equation does a jump satisfy, and which jumps are allowed?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set the left and right states, and see whether the jump becomes a shock or a rarefaction fan.</p>
      <RiemannProblemViz />
    </>
  ),

  theory: (
    <>
      <Definition title="conservation laws and weak solutions">
        <p>
          A scalar <strong>conservation law</strong> is <M>{"u_t + F(u)_x = 0"}</M> with <M>{"u = g"}</M> at t = 0. It says
          that the amount of u in any interval changes only by the flux F(u) through its ends. A bounded function u is an{" "}
          <strong>integral solution</strong> if
        </p>
        <p>
          <M>{"\\int_0^\\infty \\int_{\\mathbb{R}} (u \\, v_t + F(u) \\, v_x) \\, dx \\, dt + \\int_{\\mathbb{R}} g \\, v(x, 0) \\, dx = 0"}</M>
        </p>
        <p>
          for every smooth compactly supported test function v. Integrating by parts shows that smooth integral solutions
          are classical ones, but discontinuous u are now allowed.
        </p>
      </Definition>

      <Theorem title="the Rankine-Hugoniot condition">
        <p>
          If an integral solution is smooth on either side of a curve x = s(t), with limits <M>{"u_l"}</M> and{" "}
          <M>{"u_r"}</M> on the left and right, then the curve moves at speed{" "}
          <M>{"\\dot{s} = \\dfrac{F(u_l) - F(u_r)}{u_l - u_r}"}</M>. For Burgers&rsquo; equation, with{" "}
          <M>{"F(u) = u^2/2"}</M>, the speed is the average <M>{"(u_l + u_r)/2"}</M>.
        </p>
      </Theorem>

      <Example title="the Riemann problem for Burgers’ equation">
        <p>
          Take g equal to <M>{"u_l"}</M> for x &lt; 0 and <M>{"u_r"}</M> for x &gt; 0. Characteristics move at speed u. If{" "}
          <M>{"u_l > u_r"}</M> they collide, and a shock moves at speed <M>{"(u_l + u_r)/2"}</M>. If{" "}
          <M>{"u_l < u_r"}</M> they leave a wedge empty, filled by the <strong>rarefaction fan</strong> u = x/t. But a
          shock joining <M>{"u_l"}</M> to <M>{"u_r"}</M> also satisfies Rankine-Hugoniot in this case, so integral
          solutions are not unique.
        </p>
      </Example>

      <Theorem title="entropy solutions">
        <p>
          For convex F, Lax&rsquo;s <strong>entropy condition</strong> admits a shock only if{" "}
          <M>{"F'(u_l) > \\dot{s} > F'(u_r)"}</M>: characteristics must run into the shock from both sides, not out of it.
          Oleinik and Kružkov showed that there is exactly one integral solution satisfying an entropy condition, and for
          Burgers&rsquo; equation it is given by the Lax-Oleinik formula, the x-derivative of the Hopf-Lax solution of{" "}
          <M>{"w_t + w_x^2/2 = 0"}</M>.
        </p>
      </Theorem>

      <Remark title="where the jumps are real">
        <p>
          Shocks are physical: sonic booms, hydraulic jumps and traffic jams are all shocks of conservation laws. Systems of
          conservation laws, such as the Euler equations of gas dynamics, are much harder, and existence of solutions in
          several space dimensions remains largely open.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rh",
      rung: "check",
      prompt: <p>What is the Rankine-Hugoniot condition for a shock in uₜ + F(u)ₓ = 0?</p>,
      answer: { kind: "choice", options: ["The shock speed equals (F(uₗ) − F(uᵣ))/(uₗ − uᵣ)", "The shock is stationary", "The shock speed equals F′(uₗ)", "u is continuous across it"], correct: [0] },
    },
    {
      key: "speed",
      rung: "check",
      prompt: <p>At what speed do the characteristics of Burgers&rsquo; equation uₜ + (u²/2)ₓ = 0 move?</p>,
      answer: { kind: "choice", options: ["At speed u", "At speed 1", "At speed u²/2", "They do not move"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the left state to 2 and the right state to 0. What is the shock speed?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "speed2",
      rung: "apply",
      prompt: <p>For Burgers&rsquo; equation with uₗ = 3 and uᵣ = 1, what is the shock speed?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "fan",
      rung: "apply",
      prompt: <p>For Burgers&rsquo; equation with uₗ = 0 and uᵣ = 2, what is the entropy solution?</p>,
      answer: { kind: "choice", options: ["A rarefaction fan, u = x/t for 0 < x < 2t", "A shock moving at speed 1", "A stationary jump", "No solution exists"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive the Rankine-Hugoniot condition from the integral form of the conservation law.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes an interval [a, b] containing the discontinuity at s(t), and writes d/dt of the integral of u over [a, b] as F(u(a)) − F(u(b)).",
          "Splits the integral at s(t) and differentiates, picking up the boundary terms ṡuₗ − ṡuᵣ.",
          "Lets a and b tend to s(t) to conclude ṡ(uₗ − uᵣ) = F(uₗ) − F(uᵣ).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For Burgers&rsquo; equation with uₗ = 0 and uᵣ = 1, a jump moving at speed 1/2 satisfies Rankine-Hugoniot. Why is it rejected?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks that the jump satisfies the Rankine-Hugoniot condition.",
          "Notes that characteristics leave the jump on both sides instead of entering it, violating the entropy condition.",
          "Names the rarefaction fan as the entropy solution. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Integral solutions moved derivatives onto test functions so that jumps could be allowed. The same idea, applied to
        functions rather than equations, gives a derivative to functions that have none in the classical sense.
      </p>
      <p>Next, weak derivatives.</p>
    </>
  ),
};
