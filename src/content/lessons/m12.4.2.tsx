import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { InverseIterViz } from "@/components/viz/InverseIterViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.4.2",
  minutes: 95,
  links: {
    revisits: ["m5.4.1", "m5.4.2", "m12.2.3"],
    foreshadows: ["m12.4.3", "m26.1.1", "m31.1.1"],
  },

  puzzle: (
    <>
      <p>
        If a map is approximately an invertible linear map near a point, is it actually invertible near that point? The answer
        is yes, and the proof is a clever use of the contraction mapping theorem: Newton&rsquo;s method with the slope frozen.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Solve x³ = y for y near f(a) by iterating with the fixed slope f′(a). Move a towards 0 and see the region where this
        works shrink.
      </p>
      <InverseIterViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the inverse function theorem">
        <p>
          Let <M>{"f : U \\to \\mathbb{R}^n"}</M> be <M>{"C^1"}</M> on an open <M>{"U \\subseteq \\mathbb{R}^n"}</M>, and let{" "}
          <M>{"Df(a)"}</M> be invertible. Then there are open <M>{"V \\ni a"}</M> and <M>{"W \\ni f(a)"}</M> such that{" "}
          <M>{"f : V \\to W"}</M> is a bijection, and its inverse is <M>{"C^1"}</M> with{" "}
          <M>{"D(f^{-1})(f(x)) = Df(x)^{-1}"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"A = Df(a)"}</M>. For a target <M>{"y"}</M>, define
        </p>
        <MD>{"T_y(x) = x - A^{-1}(f(x) - y),"}</MD>
        <p>
          whose fixed points are exactly the solutions of <M>{"f(x) = y"}</M>. Its derivative is{" "}
          <M>{"I - A^{-1}Df(x)"}</M>, which is 0 at <M>{"a"}</M>. By continuity of <M>{"Df"}</M>, choose a closed ball{" "}
          <M>{"\\overline{B}(a, r)"}</M> on which <M>{"\\|I - A^{-1}Df(x)\\| \\le \\tfrac12"}</M>; then <M>{"T_y"}</M> is a
          contraction there with constant <M>{"\\tfrac12"}</M>, by the mean value inequality. If{" "}
          <M>{"|A^{-1}(f(a) - y)| < r/2"}</M>, then <M>{"T_y"}</M> maps the ball into itself, since{" "}
          <M>{"|T_y(x) - a| \\le |T_y(x) - T_y(a)| + |T_y(a) - a| < r"}</M>. The ball is complete, so there is exactly one
          solution in it. This gives the local inverse; the estimates show it is continuous, and then differentiable with the
          stated derivative.
        </p>
      </Proof>

      <Theorem title="the implicit function theorem">
        <p>
          Let <M>{"F : \\mathbb{R}^n \\times \\mathbb{R}^m \\to \\mathbb{R}^m"}</M> be <M>{"C^1"}</M>, with{" "}
          <M>{"F(a, b) = 0"}</M> and the <M>{"m \\times m"}</M> matrix <M>{"D_yF(a, b)"}</M> invertible. Then near{" "}
          <M>{"(a, b)"}</M>, the solutions of <M>{"F(x, y) = 0"}</M> are exactly the graph of a <M>{"C^1"}</M> function{" "}
          <M>{"y = g(x)"}</M>, with <M>{"Dg = -(D_yF)^{-1} D_xF"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Apply the inverse function theorem to <M>{"\\Phi(x, y) = (x, F(x, y))"}</M>, whose derivative at{" "}
          <M>{"(a, b)"}</M> is block triangular with invertible diagonal blocks <M>{"I"}</M> and <M>{"D_yF"}</M>. Then{" "}
          <M>{"F(x, y) = 0"}</M> means <M>{"\\Phi(x, y) = (x, 0)"}</M>, so <M>{"(x, y) = \\Phi^{-1}(x, 0)"}</M>, which defines{" "}
          <M>{"g"}</M>. Differentiating <M>{"F(x, g(x)) = 0"}</M> by the chain rule gives the formula.
        </p>
      </Proof>

      <Example title="the circle">
        <p>
          <M>{"F(x, y) = x^2 + y^2 - 1"}</M> has <M>{"\\partial F/\\partial y = 2y"}</M>. Near any point with{" "}
          <M>{"y \\ne 0"}</M>, the circle is a graph <M>{"y = \\pm\\sqrt{1 - x^2}"}</M>, with{" "}
          <M>{"g'(x) = -x/y"}</M>. At <M>{"(\\pm1, 0)"}</M> it is not a graph over <M>{"x"}</M>, but it is a graph over{" "}
          <M>{"y"}</M>.
        </p>
      </Example>

      <Remark title="local, not global">
        <p>
          The map <M>{"(r, \\theta) \\mapsto (r\\cos\\theta, r\\sin\\theta)"}</M> has invertible derivative wherever{" "}
          <M>{"r > 0"}</M>, yet it is not injective, since <M>{"\\theta"}</M> and <M>{"\\theta + 2\\pi"}</M> give the same
          point. The theorem gives only local inverses.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hyp",
      rung: "check",
      prompt: <p>What is the key hypothesis of the inverse function theorem at the point a?</p>,
      answer: { kind: "choice", options: ["Df(a) is invertible", "f is bounded", "f(a) = 0", "f is linear"], correct: [0] },
    },
    {
      key: "deriv",
      rung: "check",
      prompt: <p>f(x) = x³ + x. What is (f⁻¹)′(2), using f(1) = 2?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "polar",
      rung: "apply",
      prompt: <p>What is the determinant of the derivative of (r, θ) ↦ (r cos θ, r sin θ)?</p>,
      answer: { kind: "choice", options: ["r", "1", "r²", "cos θ"], correct: [0] },
    },
    {
      key: "impl",
      rung: "apply",
      prompt: <p>The curve x³ + y³ = 9 passes through (1, 2). What is dy/dx there?</p>,
      answer: { kind: "numeric", value: -0.25, tolerance: 0.001 },
    },
    {
      key: "fail",
      rung: "apply",
      prompt: <p>f(x) = x³ is a bijection of ℝ. Why does the inverse function theorem not apply at 0?</p>,
      answer: {
        kind: "choice",
        options: [
          "f′(0) = 0, and indeed the inverse ∛x is not differentiable at 0.",
          "f is not continuous at 0.",
          "f is not injective.",
          "It does apply.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the fixed points of T(x) = x − A⁻¹(f(x) − y) are exactly the solutions of f(x) = y.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes T(x) = x if and only if A⁻¹(f(x) − y) = 0.",
          "Uses invertibility of A⁻¹ to get f(x) − y = 0.",
          "Concludes both directions.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Near which points can the equation x² − y² = 0 not be solved for y as a function of x? What does the set look like there?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds ∂F/∂y = −2y = 0 only at the origin on the set.",
          "Notes two lines cross there, so the set is not a graph near 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the inverse function theorem, how the contraction mapping theorem proves it, how the implicit function theorem follows, and why the inverse is only local.",

  glimpse: (
    <p>
      The next lesson extends these ideas to maps of constant rank. Manifolds are defined as spaces that look locally like
      ℝⁿ, and these theorems are how one shows that level sets are manifolds.
    </p>
  ),
};
