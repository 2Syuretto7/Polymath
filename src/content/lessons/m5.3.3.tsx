import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LagrangeViz } from "@/components/viz/LagrangeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.3.3",
  minutes: 85,
  links: {
    revisits: ["m5.3.2", "m5.2.4", "m5.2.3"],
    foreshadows: ["m5.4.2", "m5.4.3", "p26.4.1"],
  },

  puzzle: (
    <>
      <p>
        A household has a fixed budget and wants the best mix of food and rent. A company wants the largest output from a
        fixed amount of steel. Light travelling between two points chooses, among all paths, the one that takes least
        time. In each case we want the best value of one quantity while another is held fixed. Setting the gradient to
        zero no longer works, since the best point is usually not flat at all: it is only the best among the points we are
        allowed. What condition picks it out?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Move the point round the circle <M>{"x^2 + y^2 = 5"}</M> and watch the value of <M>{"f = x + 2y"}</M>. Compare
        the two gradients at the best point.
      </p>
      <LagrangeViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Lagrange multipliers">
        <p>
          Let <M>{"f"}</M> and <M>{"g"}</M> have continuous first partials, and suppose <M>{"f"}</M>, restricted to the
          level set <M>{"g = c"}</M>, has a local maximum or minimum at <M>{"a"}</M>, where{" "}
          <M>{"\\nabla g(a) \\ne 0"}</M>. Then there is a number <M>{"\\lambda"}</M>, the{" "}
          <strong>Lagrange multiplier</strong>, with
        </p>
        <MD>{"\\nabla f(a) = \\lambda\\, \\nabla g(a)."}</MD>
      </Theorem>

      <Proof>
        <p>
          We give the argument in the plane, assuming, as the implicit function theorem will justify, that near{" "}
          <M>{"a"}</M> the level curve can be parametrised by a differentiable curve <M>{"r(t)"}</M> with{" "}
          <M>{"r(0) = a"}</M> and <M>{"r'(0) \\ne 0"}</M>. Then <M>{"f(r(t))"}</M> has a local extremum at{" "}
          <M>{"t = 0"}</M>, so by the chain rule <M>{"\\nabla f(a) \\cdot r'(0) = 0"}</M>. Also{" "}
          <M>{"g(r(t)) = c"}</M>, so <M>{"\\nabla g(a) \\cdot r'(0) = 0"}</M>. Both gradients are perpendicular to the same
          nonzero vector in the plane, so they are parallel; since <M>{"\\nabla g(a) \\ne 0"}</M>,{" "}
          <M>{"\\nabla f(a) = \\lambda\\nabla g(a)"}</M> for some <M>{"\\lambda"}</M>.
        </p>
      </Proof>

      <Example title="the best point on a circle">
        <p>
          Maximise <M>{"x + 2y"}</M> on <M>{"x^2 + y^2 = 5"}</M>. The condition <M>{"(1, 2) = \\lambda(2x, 2y)"}</M> gives{" "}
          <M>{"x = 1/(2\\lambda)"}</M>, <M>{"y = 1/\\lambda"}</M>, and the constraint gives{" "}
          <M>{"5/(4\\lambda^2) = 5"}</M>, so <M>{"\\lambda = \\pm\\tfrac12"}</M>. The candidates are <M>{"(1, 2)"}</M>,
          where <M>{"f = 5"}</M>, and <M>{"(-1, -2)"}</M>, where <M>{"f = -5"}</M>. Since the circle is closed and bounded,{" "}
          <M>{"f"}</M> attains a maximum and a minimum on it, so these are they.
        </p>
      </Example>

      <Definition title="the meaning of λ">
        <p>
          If <M>{"M(c)"}</M> is the maximum value of <M>{"f"}</M> subject to <M>{"g = c"}</M>, then, under mild conditions,{" "}
          <M>{"M'(c) = \\lambda"}</M>: the multiplier measures how much the best value improves when the constraint is
          relaxed a little. Economists call it a <strong>shadow price</strong>: the value of one more unit of budget or
          steel.
        </p>
      </Definition>

      <Remark title="several constraints">
        <p>
          With constraints <M>{"g_1 = c_1, \\dots, g_k = c_k"}</M> whose gradients are independent at <M>{"a"}</M>, the
          condition becomes <M>{"\\nabla f = \\lambda_1\\nabla g_1 + \\dots + \\lambda_k\\nabla g_k"}</M>. The method only
          finds candidates. One must still compare their values, and check that a maximum or minimum exists at all, for
          instance because the constraint set is closed and bounded.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "circle",
      rung: "check",
      prompt: <p>What is the maximum of <M>{"x + 2y"}</M> on the circle <M>{"x^2 + y^2 = 5"}</M>?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "cond",
      rung: "check",
      prompt: <p>What does the Lagrange condition say geometrically?</p>,
      answer: {
        kind: "choice",
        options: [
          "The gradient of f is zero.",
          "The gradients of f and g are parallel, so the level set of f touches the constraint set.",
          "The gradients of f and g are perpendicular.",
          "g has a maximum.",
        ],
        correct: [1],
      },
    },
    {
      key: "xy",
      rung: "apply",
      prompt: <p>Find the maximum of <M>{"xy"}</M> subject to <M>{"x + y = 10"}</M>.</p>,
      answer: { kind: "numeric", value: 25 },
    },
    {
      key: "dist",
      rung: "apply",
      prompt: <p>Find the minimum of <M>{"x^2 + y^2"}</M> subject to <M>{"x + y = 4"}</M>.</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "lambda",
      rung: "apply",
      prompt: (
        <p>
          For the previous problem, the condition is <M>{"(2x, 2y) = \\lambda(1, 1)"}</M>. What is <M>{"\\lambda"}</M> at
          the minimum? (Check: the minimum value for <M>{"x + y = c"}</M> is <M>{"c^2/2"}</M>, whose derivative at{" "}
          <M>{"c = 4"}</M> should match.)
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "box",
      rung: "prove",
      prompt: (
        <p>
          Use Lagrange multipliers to show that, among rectangles with a given perimeter, the square has the largest area.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets up: maximise xy subject to 2x + 2y = P, giving (y, x) = λ(2, 2).",
          "Concludes x = y = P/4, and justifies that this is a maximum, for instance since the area is 0 at the ends of the allowed range.",
        ],
      },
    },
    {
      key: "amgm",
      rung: "stretch",
      prompt: (
        <p>
          Use Lagrange multipliers to maximise <M>{"xyz"}</M> subject to <M>{"x + y + z = 3"}</M> with{" "}
          <M>{"x, y, z > 0"}</M>, and deduce the inequality of arithmetic and geometric means for three positive numbers.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Solves (yz, xz, xy) = λ(1, 1, 1) to get x = y = z = 1, with maximum value 1, justified by the product being 0 on the boundary.",
          "Scales to deduce that for positive a, b, c, abc ≤ ((a + b + c)/3)³, which is the AM–GM inequality.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to find the best value of a function subject to a constraint, why the gradients must be parallel at the best point, how to use the method, and what the multiplier means.",

  glimpse: (
    <p>
      The next lesson asks when a map can be inverted near a point, which leads to the inverse and implicit function
      theorems that this lesson&rsquo;s proof relied on.
    </p>
  ),
};
