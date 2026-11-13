import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PathRateViz } from "@/components/viz/PathRateViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.2.3",
  minutes: 85,
  links: {
    revisits: ["m5.2.2", "m5.1.3", "m3.3.1"],
    foreshadows: ["m5.2.4", "m5.4.2", "m26.2.1"],
  },

  puzzle: (
    <>
      <p>
        A hiker walks across a hillside. The height of the ground depends on where they are, and where they are depends on
        the time. How fast is the hiker climbing at this moment? In one variable, the chain rule says to multiply
        derivatives. Here the height depends on two coordinates, each changing at its own rate, and the slope of the
        ground is different in every direction. What should be multiplied by what?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A walker crosses a heated plate along the dashed path. Slide the time and compare the rate predicted by the chain
        rule with the rate measured directly.
      </p>
      <PathRateViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the chain rule">
        <p>
          Let <M>{"g"}</M> be differentiable at <M>{"a"}</M> and <M>{"f"}</M> differentiable at <M>{"g(a)"}</M>. Then{" "}
          <M>{"f \\circ g"}</M> is differentiable at <M>{"a"}</M>, and
        </p>
        <MD>{"D(f \\circ g)(a) = Df(g(a)) \\circ Dg(a)."}</MD>
        <p>In matrices: the Jacobian of the composite is the product of the Jacobians, in the same order.</p>
      </Theorem>

      <Proof>
        <p>
          Write <M>{"A = Dg(a)"}</M>, <M>{"B = Df(g(a))"}</M>, and <M>{"k = g(a + h) - g(a) = Ah + \\|h\\|\\,\\varepsilon_1(h)"}</M>{" "}
          with <M>{"\\varepsilon_1 \\to 0"}</M>. Then <M>{"f(g(a) + k) - f(g(a)) = Bk + \\|k\\|\\,\\varepsilon_2(k)"}</M>{" "}
          with <M>{"\\varepsilon_2 \\to 0"}</M> as <M>{"k \\to 0"}</M>. Substituting,
        </p>
        <MD>{"f(g(a + h)) - f(g(a)) - BAh = \\|h\\|\\,B\\varepsilon_1(h) + \\|k\\|\\,\\varepsilon_2(k)."}</MD>
        <p>
          Divide by <M>{"\\|h\\|"}</M>. The first term tends to 0 because <M>{"B"}</M> is linear. For the second,{" "}
          <M>{"\\|k\\| \\le C\\|h\\|"}</M> for small <M>{"h"}</M>, for some constant <M>{"C"}</M>, and{" "}
          <M>{"k \\to 0"}</M>, so it tends to 0 as well.
        </p>
      </Proof>

      <Example title="along a path">
        <p>
          If <M>{"r : \\mathbb{R} \\to \\mathbb{R}^n"}</M> is a curve and <M>{"f : \\mathbb{R}^n \\to \\mathbb{R}"}</M>, the
          chain rule gives
        </p>
        <MD>{"\\frac{d}{dt} f(r(t)) = \\frac{\\partial f}{\\partial x_1}x_1'(t) + \\dots + \\frac{\\partial f}{\\partial x_n}x_n'(t) = \\nabla f(r(t)) \\cdot r'(t),"}</MD>
        <p>
          where <M>{"\\nabla f = (\\partial_1 f, \\dots, \\partial_n f)"}</M> is the gradient. Each coordinate contributes
          its own rate times how sensitive <M>{"f"}</M> is to it.
        </p>
      </Example>

      <Definition title="changing variables">
        <p>
          The chain rule converts derivatives between coordinate systems. In polar coordinates{" "}
          <M>{"x = r\\cos\\theta"}</M>, <M>{"y = r\\sin\\theta"}</M>, a function <M>{"f(x, y)"}</M> has
        </p>
        <MD>{"\\frac{\\partial f}{\\partial r} = f_x \\cos\\theta + f_y \\sin\\theta, \\qquad \\frac{\\partial f}{\\partial \\theta} = -f_x\\, r\\sin\\theta + f_y\\, r\\cos\\theta."}</MD>
      </Definition>

      <Remark title="why linear maps">
        <p>
          The chain rule is the main reason to think of the derivative as a linear map. Approximating each map by a linear
          one, the composite is approximated by the composite of the linear maps, which is matrix multiplication. Leibniz
          notation, <M>{"\\frac{dz}{dt} = \\frac{\\partial z}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial z}{\\partial y}\\frac{dy}{dt}"}</M>,
          records the same thing entry by entry. In machine learning, the chain rule applied through millions of composed
          functions is called backpropagation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "path",
      rung: "check",
      prompt: (
        <p>
          Let <M>{"T(x, y) = x^2y"}</M> and <M>{"r(t) = (\\cos t, \\sin t)"}</M>. Find <M>{"\\frac{d}{dt}T(r(t))"}</M> at{" "}
          <M>{"t = 0"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "order",
      rung: "check",
      prompt: <p>If <M>{"g : \\mathbb{R}^2 \\to \\mathbb{R}^3"}</M> and <M>{"f : \\mathbb{R}^3 \\to \\mathbb{R}"}</M>, what is the size of the matrix of <M>{"D(f \\circ g)"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["1 row and 2 columns", "3 rows and 2 columns", "2 rows and 1 column", "3 by 3"],
        correct: [0],
      },
    },
    {
      key: "polar",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"f(x, y) = x^2 + y^2"}</M>. Using the chain rule with <M>{"x = r\\cos\\theta"}</M>,{" "}
          <M>{"y = r\\sin\\theta"}</M>, find <M>{"\\partial f/\\partial r"}</M> at <M>{"r = 3"}</M>,{" "}
          <M>{"\\theta = 1"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "det",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"G(u, v) = (u + v, uv)"}</M> and <M>{"F(x, y) = (x^2, y)"}</M>. Find the determinant of the Jacobian of{" "}
          <M>{"F \\circ G"}</M> at <M>{"(u, v) = (1, 2)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: -6 },
    },
    {
      key: "level",
      rung: "apply",
      prompt: (
        <p>
          A curve <M>{"r(t)"}</M> stays on a level curve of <M>{"f"}</M>, so <M>{"f(r(t))"}</M> is constant. What does the
          chain rule tell you?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "∇f is zero along the curve.",
          "∇f(r(t)) · r′(t) = 0, so the gradient is perpendicular to the curve's velocity.",
          "The curve is a straight line.",
          "Nothing.",
        ],
        correct: [1],
      },
    },
    {
      key: "homog",
      rung: "prove",
      prompt: (
        <p>
          A differentiable function satisfies <M>{"f(tx, ty) = t^k f(x, y)"}</M> for all <M>{"t > 0"}</M>. Prove Euler&rsquo;s
          relation <M>{"x f_x + y f_y = k f"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Differentiates both sides with respect to t, using the chain rule on the left: x f_x(tx, ty) + y f_y(tx, ty) = k t^(k−1) f(x, y).",
          "Sets t = 1 to get x f_x + y f_y = k f.",
        ],
      },
    },
    {
      key: "laplace",
      rung: "stretch",
      prompt: (
        <p>
          Let <M>{"f(x, y) = g(r)"}</M> depend only on <M>{"r = \\sqrt{x^2 + y^2}"}</M>. Show that{" "}
          <M>{"f_{xx} + f_{yy} = g''(r) + g'(r)/r"}</M> away from the origin.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses r_x = x/r and r_y = y/r to get f_x = g′(r) x/r, and similarly for y.",
          "Differentiates again with the product and chain rules, adds, and simplifies using x² + y² = r².",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the chain rule in several variables as a product of Jacobian matrices, how it gives the rate of change along a path, and how it converts derivatives into polar coordinates.",

  glimpse: (
    <p>
      The next lesson studies the gradient that appeared here: the direction of steepest ascent, perpendicular to level
      curves.
    </p>
  ),
};
