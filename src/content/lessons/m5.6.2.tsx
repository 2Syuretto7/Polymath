import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { WorkPathViz } from "@/components/viz/WorkPathViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.6.2",
  minutes: 85,
  links: {
    revisits: ["m5.6.1", "m5.2.4", "m2.6.3"],
    foreshadows: ["m5.7.1", "m5.7.2", "m26.6.3"],
  },

  puzzle: (
    <>
      <p>
        Carry a book from the floor to a shelf by any route you like: up the stairs, round the room, or straight up. Gravity
        does the same work on it every time, minus its weight times the height gained. Push the same book across a carpet
        and the work against friction depends on how far you go. What makes a field like gravity special, and can we
        recognise one without trying every path?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Compare the two fields along the three paths from <M>{"(1, 0)"}</M> to <M>{"(0, 1)"}</M>, and once round the
        closed circle.
      </p>
      <WorkPathViz fields={["gradient", "swirl"]} loop />
    </>
  ),

  theory: (
    <>
      <Theorem title="the fundamental theorem for line integrals">
        <p>
          If <M>{"f"}</M> has continuous partial derivatives and <M>{"C"}</M> runs from <M>{"A"}</M> to <M>{"B"}</M>, then
        </p>
        <MD>{"\\int_C \\nabla f \\cdot dr = f(B) - f(A)."}</MD>
      </Theorem>

      <Proof>
        <p>
          By the chain rule, <M>{"\\frac{d}{dt} f(r(t)) = \\nabla f(r(t)) \\cdot r'(t)"}</M>. So the line integral is{" "}
          <M>{"\\int_a^b \\frac{d}{dt} f(r(t))\\, dt"}</M>, which by the fundamental theorem of calculus is{" "}
          <M>{"f(r(b)) - f(r(a)) = f(B) - f(A)"}</M>.
        </p>
      </Proof>

      <Definition title="conservative fields">
        <p>
          A field <M>{"F"}</M> is <strong>conservative</strong> if <M>{"F = \\nabla f"}</M> for some function{" "}
          <M>{"f"}</M>, a <strong>potential</strong>. On a connected open set, three conditions are equivalent:{" "}
          <M>{"F"}</M> is conservative; <M>{"\\int_C F \\cdot dr"}</M> depends only on the endpoints of <M>{"C"}</M>; and{" "}
          <M>{"\\oint_C F \\cdot dr = 0"}</M> round every closed curve. Given path independence, a potential is{" "}
          <M>{"f(x) = \\int_{x_0}^{x} F \\cdot dr"}</M> along any path from a fixed point <M>{"x_0"}</M>.
        </p>
      </Definition>

      <Theorem title="the cross-partials test">
        <p>
          If <M>{"F = (P, Q)"}</M> is conservative with continuous partials, then <M>{"\\partial P/\\partial y = \\partial Q/\\partial x"}</M>,
          because both equal <M>{"\\partial^2 f/\\partial x\\, \\partial y"}</M>. In three dimensions the condition is{" "}
          <M>{"\\operatorname{curl} F = 0"}</M>. Conversely, if the condition holds on a region with no holes, such as the
          whole plane or a disc, then <M>{"F"}</M> is conservative.
        </p>
      </Theorem>

      <Example title="finding a potential">
        <p>
          For <M>{"F = (2xy + 1,\\ x^2 + 3y^2)"}</M>, <M>{"P_y = 2x = Q_x"}</M>. Integrating <M>{"P"}</M> in{" "}
          <M>{"x"}</M> gives <M>{"f = x^2 y + x + h(y)"}</M>; then <M>{"f_y = x^2 + h'(y)"}</M> must equal{" "}
          <M>{"x^2 + 3y^2"}</M>, so <M>{"h = y^3"}</M> and <M>{"f = x^2y + x + y^3"}</M>. The field <M>{"(-y, x)"}</M>{" "}
          fails the test, since <M>{"P_y = -1 \\ne 1 = Q_x"}</M>, which is why its work depends on the path.
        </p>
      </Example>

      <Remark title="the hole in the plane">
        <p>
          The field <M>{"F = \\left(\\frac{-y}{x^2 + y^2}, \\frac{x}{x^2 + y^2}\\right)"}</M> passes the test everywhere except
          the origin, where it is not defined. Yet its integral once round the unit circle is <M>{"2\\pi"}</M>, not{" "}
          <M>{"0"}</M>. Locally it is the gradient of the polar angle <M>{"\\theta"}</M>, but no single continuous angle
          function exists on the punctured plane. That the test can fail because of a hole is the first hint of de Rham
          cohomology, which uses such fields to detect the shape of a space. The name conservative comes from physics:
          for such forces, kinetic plus potential energy is conserved.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "grad",
      rung: "check",
      prompt: (
        <p>
          Find the work done by <M>{"F = \\nabla f"}</M>, with <M>{"f = x^2 + y^2"}</M>, along any path from{" "}
          <M>{"(0, 0)"}</M> to <M>{"(1, 2)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these fields are conservative on the whole plane? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["(y, x)", "(−y, x)", "(2x, 2y)", "(y, −x)"], correct: [0, 2] },
    },
    {
      key: "potential",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_C F \\cdot dr"}</M> for <M>{"F = (2xy + 1,\\ x^2 + 3y^2)"}</M> along any path from{" "}
          <M>{"(0, 0)"}</M> to <M>{"(1, 1)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "closed",
      rung: "apply",
      prompt: <p>Find the work done by <M>{"F = (y, x)"}</M> once round the unit circle.</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "three",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_C F \\cdot dr"}</M> for <M>{"F = (yz, xz, xy)"}</M> along any path from <M>{"(0, 0, 0)"}</M> to{" "}
          <M>{"(1, 2, 3)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "ftc",
      rung: "prove",
      prompt: <p>Prove that <M>{"\\int_C \\nabla f \\cdot dr = f(B) - f(A)"}</M> for a curve from <M>{"A"}</M> to <M>{"B"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the chain rule: d/dt f(r(t)) = ∇f(r(t)) · r′(t).",
          "Applies the fundamental theorem of calculus to get f(r(b)) − f(r(a)) = f(B) − f(A).",
        ],
      },
    },
    {
      key: "angle",
      rung: "stretch",
      prompt: (
        <p>
          For <M>{"F = \\left(\\frac{-y}{x^2 + y^2}, \\frac{x}{x^2 + y^2}\\right)"}</M>, check that{" "}
          <M>{"P_y = Q_x"}</M> away from the origin and that the integral once round the unit circle is <M>{"2\\pi"}</M>.
          Why is <M>{"F"}</M> not conservative on the punctured plane?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes P_y = Q_x = (y² − x²)/(x² + y²)².",
          "Computes the circle integral: on r = (cos t, sin t), F · r′ = 1, giving 2π.",
          "Explains that a conservative field has zero integral round every closed curve, so F is not conservative; the test fails to imply this because of the hole at the origin.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the fundamental theorem for line integrals, what a conservative field is and its equivalent descriptions, the cross-partials test, and why a hole in the region matters.",

  glimpse: (
    <p>
      The next lessons move from curves to surfaces. Green&rsquo;s theorem and Stokes&rsquo; theorem will explain the
      cross-partials test, by turning the work round a loop into an integral of the curl over the region inside.
    </p>
  ),
};
