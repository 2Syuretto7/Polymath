import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GradientViz } from "@/components/viz/GradientViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.2.4",
  minutes: 80,
  links: {
    revisits: ["m5.2.3", "m5.1.1", "m3.1.3"],
    foreshadows: ["m5.3.2", "m5.3.3", "m16.2.2"],
  },

  puzzle: (
    <>
      <p>
        On a contour map, lines join points of equal height. Water running down a hillside crosses these lines at right
        angles, taking the steepest way down; a path that follows a contour neither climbs nor falls. A hiker who wants to
        climb as fast as possible should head straight across the contours. Why are these two directions, along the
        contour and steepest, always perpendicular?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        These ellipses are level curves of <M>{"f = x^2 + 2y^2"}</M>. Move the point and turn the direction <M>{"u"}</M>.
        Find the direction where the rate of change is largest, and the directions where it is zero.
      </p>
      <GradientViz />
    </>
  ),

  theory: (
    <>
      <Definition title="gradient and directional derivative">
        <p>
          For <M>{"f : \\mathbb{R}^n \\to \\mathbb{R}"}</M> differentiable at <M>{"a"}</M>, the <strong>gradient</strong> is
          the vector <M>{"\\nabla f(a) = (\\partial_1 f(a), \\dots, \\partial_n f(a))"}</M>. For a unit vector{" "}
          <M>{"u"}</M>, the <strong>directional derivative</strong> is the rate of change of <M>{"f"}</M> moving from{" "}
          <M>{"a"}</M> at unit speed in direction <M>{"u"}</M>:
        </p>
        <MD>{"D_u f(a) = \\frac{d}{dt} f(a + tu)\\Big|_{t = 0} = \\nabla f(a) \\cdot u,"}</MD>
        <p>the second equality by the chain rule along the line <M>{"a + tu"}</M>.</p>
      </Definition>

      <Theorem title="the gradient points uphill">
        <p>
          If <M>{"\\nabla f(a) \\ne 0"}</M>, then among all unit vectors <M>{"u"}</M>, <M>{"D_u f(a)"}</M> is largest when{" "}
          <M>{"u"}</M> points along <M>{"\\nabla f(a)"}</M>, where it equals <M>{"\\|\\nabla f(a)\\|"}</M>. And{" "}
          <M>{"\\nabla f(a)"}</M> is perpendicular to every curve through <M>{"a"}</M> lying in the level set of{" "}
          <M>{"f"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          By Cauchy–Schwarz, <M>{"D_u f(a) = \\nabla f(a) \\cdot u \\le \\|\\nabla f(a)\\|\\,\\|u\\| = \\|\\nabla f(a)\\|"}</M>,
          with equality exactly when <M>{"u"}</M> is a positive multiple of <M>{"\\nabla f(a)"}</M>. If{" "}
          <M>{"r(t)"}</M> is a curve in the level set with <M>{"r(0) = a"}</M>, then <M>{"f(r(t))"}</M> is constant, so by
          the chain rule <M>{"\\nabla f(a) \\cdot r'(0) = 0"}</M>.
        </p>
      </Proof>

      <Example title="tangent lines and planes">
        <p>
          The ellipse <M>{"x^2 + 2y^2 = 3"}</M> passes through <M>{"(1, 1)"}</M>, where <M>{"\\nabla f = (2, 4)"}</M>. So
          the tangent line is <M>{"2(x - 1) + 4(y - 1) = 0"}</M>, that is <M>{"x + 2y = 3"}</M>. In the same way, the
          tangent plane to a surface <M>{"F(x, y, z) = c"}</M> at a point has normal vector <M>{"\\nabla F"}</M> there.
        </p>
      </Example>

      <Remark title="gradient descent">
        <p>
          Since <M>{"-\\nabla f"}</M> is the direction of steepest descent, one can look for a minimum of <M>{"f"}</M> by
          repeatedly taking a small step against the gradient: <M>{"x_{k+1} = x_k - \\eta\\,\\nabla f(x_k)"}</M>. This
          simple idea, first proposed by Cauchy in 1847, is how most modern neural networks are trained, with{" "}
          <M>{"f"}</M> measuring the error on training data and <M>{"x"}</M> the network&rsquo;s millions of parameters.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "grad",
      rung: "check",
      prompt: <p>For <M>{"f = x^2 + 2y^2"}</M>, what is the second component of <M>{"\\nabla f(1, 1)"}</M>?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "dir",
      rung: "check",
      prompt: (
        <p>
          For the same <M>{"f"}</M>, find the directional derivative at <M>{"(1, 1)"}</M> in the direction of{" "}
          <M>{"(3, 4)"}</M>. Remember to use a unit vector.
        </p>
      ),
      answer: { kind: "numeric", value: 4.4 },
    },
    {
      key: "max",
      rung: "apply",
      prompt: <p>What is the greatest rate of increase of <M>{"f = x^2 + 2y^2"}</M> at <M>{"(1, 1)"}</M>? Give a decimal.</p>,
      answer: { kind: "numeric", value: Math.sqrt(20), tolerance: 0.001 },
    },
    {
      key: "tangent",
      rung: "apply",
      prompt: (
        <p>
          Find the tangent plane to the sphere <M>{"x^2 + y^2 + z^2 = 9"}</M> at <M>{"(1, 2, 2)"}</M>, in the form{" "}
          <M>{"x + 2y + 2z = d"}</M>. What is <M>{"d"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "zero",
      rung: "apply",
      prompt: <p>At a point where <M>{"\\nabla f = 0"}</M>, what can you say about the directional derivatives?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are all zero.",
          "They are all positive.",
          "They are undefined.",
          "Only the one along the x-axis is zero.",
        ],
        correct: [0],
      },
    },
    {
      key: "perp",
      rung: "prove",
      prompt: (
        <p>
          Prove that if <M>{"f : \\mathbb{R}^n \\to \\mathbb{R}"}</M> is differentiable and <M>{"\\nabla f(a) \\ne 0"}</M>,
          the direction of fastest decrease of <M>{"f"}</M> at <M>{"a"}</M> is <M>{"-\\nabla f(a)"}</M>, and find the rate.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes D_u f(a) = ∇f(a) · u and applies Cauchy–Schwarz to get D_u f(a) ≥ −‖∇f(a)‖.",
          "Notes that equality holds for u = −∇f(a)/‖∇f(a)‖, so the fastest rate of decrease is ‖∇f(a)‖.",
        ],
      },
    },
    {
      key: "descent",
      rung: "stretch",
      prompt: (
        <p>
          Water runs downhill on the surface <M>{"z = x^2 + 2y^2"}</M>, so its path in the plane satisfies{" "}
          <M>{"r'(t) = -\\nabla f(r(t))"}</M>. Starting from <M>{"(2, 1)"}</M>, find the path, and show it is part of a
          parabola.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Solves x′ = −2x and y′ = −4y to get x = 2e^(−2t), y = e^(−4t).",
          "Eliminates t to get y = x²/4, a parabola, crossing each level ellipse at right angles.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the gradient is, how it gives every directional derivative, why it points in the direction of steepest ascent, and why it is perpendicular to level curves.",

  glimpse: (
    <p>
      The next chapter uses second derivatives to tell maxima from minima and saddles, beginning with Taylor&rsquo;s theorem
      in several variables.
    </p>
  ),
};
