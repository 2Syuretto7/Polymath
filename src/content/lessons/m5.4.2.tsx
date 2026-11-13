import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ImplicitWindowViz } from "@/components/viz/ImplicitWindowViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.4.2",
  minutes: 85,
  links: {
    revisits: ["m5.4.1", "m2.4.4", "m5.3.3"],
    foreshadows: ["m5.4.3", "m16.2.2", "m26.2.1"],
  },

  puzzle: (
    <>
      <p>
        The equation <M>{"x^2 + y^2 = 1"}</M> describes a circle, but it does not tell you <M>{"y"}</M> as a function of{" "}
        <M>{"x"}</M>: there are two values of <M>{"y"}</M> for most <M>{"x"}</M>, and none for others. The equation{" "}
        <M>{"y^5 + y - x = 0"}</M> has exactly one solution <M>{"y"}</M> for each <M>{"x"}</M>, but no formula gives it.
        Implicit differentiation, met in calculus, happily computes <M>{"dy/dx"}</M> in such cases. When is that
        justified, and what exactly is being differentiated?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Move the point round the circle. Inside the small window, is the circle the graph of a function of{" "}
        <M>{"x"}</M>? Watch what happens near the left and right ends.
      </p>
      <ImplicitWindowViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the implicit function theorem">
        <p>
          Let <M>{"F(x, y)"}</M> have continuous first partials near <M>{"(a, b)"}</M>, with <M>{"F(a, b) = 0"}</M> and{" "}
          <M>{"\\partial F/\\partial y\\,(a, b) \\ne 0"}</M>. Then there are open intervals <M>{"I \\ni a"}</M>,{" "}
          <M>{"J \\ni b"}</M> and a unique function <M>{"g : I \\to J"}</M> with continuous derivative, such that for{" "}
          <M>{"x \\in I"}</M> and <M>{"y \\in J"}</M>, <M>{"F(x, y) = 0"}</M> exactly when <M>{"y = g(x)"}</M>. Moreover
        </p>
        <MD>{"g'(x) = -\\frac{F_x(x, g(x))}{F_y(x, g(x))}."}</MD>
      </Theorem>

      <Proof>
        <p>
          Apply the inverse function theorem to <M>{"\\Phi(x, y) = (x, F(x, y))"}</M>. Its Jacobian is{" "}
          <M>{"\\begin{pmatrix} 1 & 0 \\\\ F_x & F_y \\end{pmatrix}"}</M>, with determinant <M>{"F_y(a, b) \\ne 0"}</M>. So{" "}
          <M>{"\\Phi"}</M> has a differentiable inverse near <M>{"(a, 0)"}</M>, which must have the form{" "}
          <M>{"(x, w) \\mapsto (x, h(x, w))"}</M>. Then <M>{"g(x) = h(x, 0)"}</M> is the solution of <M>{"F(x, y) = 0"}</M>{" "}
          near <M>{"(a, b)"}</M>. Differentiating <M>{"F(x, g(x)) = 0"}</M> with the chain rule gives{" "}
          <M>{"F_x + F_y\\, g'(x) = 0"}</M>, hence the formula.
        </p>
      </Proof>

      <Example title="the circle and a quintic">
        <p>
          For <M>{"F = x^2 + y^2 - 1"}</M>, <M>{"F_y = 2y"}</M>, which is zero only at <M>{"(\\pm1, 0)"}</M>. Near any other
          point the circle is a graph, <M>{"y = \\sqrt{1 - x^2}"}</M> or <M>{"y = -\\sqrt{1 - x^2}"}</M>, with slope{" "}
          <M>{"-x/y"}</M>. For <M>{"F = y^5 + y - x"}</M>, <M>{"F_y = 5y^4 + 1 > 0"}</M> everywhere, so <M>{"y"}</M> is a
          differentiable function of <M>{"x"}</M> with <M>{"g'(x) = 1/(5g(x)^4 + 1)"}</M>, though no formula in radicals
          gives <M>{"g"}</M>.
        </p>
      </Example>

      <Definition title="the general form">
        <p>
          With <M>{"x \\in \\mathbb{R}^n"}</M>, <M>{"y \\in \\mathbb{R}^m"}</M> and <M>{"F : \\mathbb{R}^{n+m} \\to \\mathbb{R}^m"}</M>,
          the same holds when the <M>{"m \\times m"}</M> matrix <M>{"D_yF"}</M> of partial derivatives in the{" "}
          <M>{"y"}</M> variables is invertible: then <M>{"m"}</M> equations can be solved for <M>{"m"}</M> unknowns near the
          point, and <M>{"Dg = -(D_yF)^{-1}D_xF"}</M>. For example, a surface <M>{"F(x, y, z) = 0"}</M> is locally a graph{" "}
          <M>{"z = g(x, y)"}</M> wherever <M>{"F_z \\ne 0"}</M>.
        </p>
      </Definition>

      <Remark title="why it matters">
        <p>
          The theorem underlies much of what follows. It justified the parametrised level curve in the proof of Lagrange
          multipliers. It shows that the solution set of smooth equations with independent gradients looks, near each point,
          like a piece of <M>{"\\mathbb{R}^k"}</M>: the idea of a manifold. And in economics and physics it explains how
          equilibrium values shift when parameters change.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "slope",
      rung: "check",
      prompt: <p>On the circle <M>{"x^2 + y^2 = 1"}</M>, find <M>{"dy/dx"}</M> at <M>{"(0.6, 0.8)"}</M>.</p>,
      answer: { kind: "numeric", value: -0.75 },
    },
    {
      key: "fail",
      rung: "check",
      prompt: <p>At which points of the circle <M>{"x^2 + y^2 = 1"}</M> does the theorem fail to give <M>{"y"}</M> as a function of <M>{"x"}</M>? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["(1, 0)", "(0, 1)", "(−1, 0)", "(0, −1)"],
        correct: [0, 2],
      },
    },
    {
      key: "folium",
      rung: "apply",
      prompt: <p>The curve <M>{"x^3 + y^3 = 6xy"}</M> passes through <M>{"(3, 3)"}</M>. Find <M>{"dy/dx"}</M> there.</p>,
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "surface",
      rung: "apply",
      prompt: (
        <p>
          Near <M>{"(1, 2, 3)"}</M>, the sphere <M>{"x^2 + y^2 + z^2 = 14"}</M> is a graph <M>{"z = g(x, y)"}</M>. Find{" "}
          <M>{"\\partial g/\\partial x"}</M> at <M>{"(1, 2)"}</M>. Give a fraction or a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: -1 / 3, tolerance: 0.003 },
    },
    {
      key: "quintic",
      rung: "apply",
      prompt: <p>For <M>{"y^5 + y = x"}</M>, the solution through <M>{"(2, 1)"}</M> has what slope there? Give a fraction or a decimal.</p>,
      answer: { kind: "numeric", value: 1 / 6, tolerance: 0.003 },
    },
    {
      key: "formula",
      rung: "prove",
      prompt: (
        <p>
          Assuming <M>{"g"}</M> is differentiable and <M>{"F(x, g(x)) = 0"}</M> for all <M>{"x"}</M> near <M>{"a"}</M>,
          prove that <M>{"g'(a) = -F_x/F_y"}</M> at <M>{"(a, g(a))"}</M>, when <M>{"F_y \\ne 0"}</M> there.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Differentiates F(x, g(x)) = 0 with the chain rule to get F_x + F_y g′(x) = 0.",
          "Divides by F_y, which is nonzero, at x = a.",
        ],
      },
    },
    {
      key: "second",
      rung: "stretch",
      prompt: (
        <p>
          The equation <M>{"y^3 + y - x = 0"}</M> defines <M>{"y = g(x)"}</M> near the origin. Justify this, and compute{" "}
          <M>{"g'(0)"}</M> and <M>{"g''(0)"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Checks F(0, 0) = 0 and F_y = 3y² + 1 = 1 ≠ 0 at the origin, so the theorem applies.",
          "Differentiates 3g²g′ + g′ = 1 to get g′(0) = 1, and again to get 6g(g′)² + 3g²g″ + g″ = 0, so g″(0) = 0.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the implicit function theorem says, why the condition on ∂F/∂y matters, how the derivative of the implicit function is found, and how the theorem follows from the inverse function theorem.",

  glimpse: (
    <p>
      The next lesson uses these theorems to define manifolds: spaces that look, near each point, like a piece of
      Euclidean space.
    </p>
  ),
};
