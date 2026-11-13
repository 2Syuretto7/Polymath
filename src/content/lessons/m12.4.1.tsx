import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DirectionalDerivViz } from "@/components/viz/DirectionalDerivViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.4.1",
  minutes: 90,
  links: {
    revisits: ["m5.2.1", "m12.2.1", "m12.1.1"],
    foreshadows: ["m12.4.2", "m12.4.3", "m31.1.1"],
  },

  puzzle: (
    <>
      <p>
        A function on the plane can have a slope in every direction at the origin and still fail to have a tangent plane
        there. So what should &ldquo;the derivative&rdquo; of a function of several variables be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Turn the direction and compare the directional derivative with what a linear map built from the partial derivatives
        would predict.
      </p>
      <DirectionalDerivViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the total derivative">
        <p>
          Let <M>{"U \\subseteq \\mathbb{R}^n"}</M> be open and <M>{"f : U \\to \\mathbb{R}^m"}</M>. Then <M>{"f"}</M> is{" "}
          <strong>differentiable</strong> at <M>{"a"}</M> if there is a linear map{" "}
          <M>{"Df(a) : \\mathbb{R}^n \\to \\mathbb{R}^m"}</M> with
        </p>
        <MD>{"\\lim_{h \\to 0} \\frac{|f(a + h) - f(a) - Df(a)h|}{|h|} = 0."}</MD>
        <p>
          If it exists it is unique, and its matrix is the Jacobian <M>{"\\left(\\partial f_i / \\partial x_j\\right)"}</M>. The
          directional derivative along <M>{"v"}</M> is then <M>{"Df(a)v"}</M>, which is linear in <M>{"v"}</M>.
        </p>
      </Definition>

      <Theorem title="continuous partials suffice">
        <p>
          If all partial derivatives of <M>{"f"}</M> exist near <M>{"a"}</M> and are continuous at <M>{"a"}</M>, then{" "}
          <M>{"f"}</M> is differentiable at <M>{"a"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Take <M>{"m = 1"}</M>, <M>{"n = 2"}</M>; the general case is the same. Write
        </p>
        <MD>{"f(a + h) - f(a) = [f(a_1 + h_1, a_2 + h_2) - f(a_1, a_2 + h_2)] + [f(a_1, a_2 + h_2) - f(a_1, a_2)]."}</MD>
        <p>
          By the mean value theorem the brackets are <M>{"\\partial_1 f(\\xi) h_1"}</M> and <M>{"\\partial_2 f(\\eta) h_2"}</M>{" "}
          with <M>{"\\xi, \\eta \\to a"}</M> as <M>{"h \\to 0"}</M>. By continuity of the partials, the difference from{" "}
          <M>{"\\partial_1 f(a) h_1 + \\partial_2 f(a) h_2"}</M> is <M>{"o(|h|)"}</M>.
        </p>
      </Proof>

      <Theorem title="the chain rule">
        <p>
          If <M>{"f"}</M> is differentiable at <M>{"a"}</M> and <M>{"g"}</M> at <M>{"f(a)"}</M>, then{" "}
          <M>{"D(g \\circ f)(a) = Dg(f(a)) \\, Df(a)"}</M>: the derivative of a composite is the composite of the linear maps,
          or the product of the Jacobian matrices.
        </p>
      </Theorem>

      <Example title="a directional trap">
        <p>
          For <M>{"f(x, y) = \\dfrac{x^2 y}{x^2 + y^2}"}</M>, <M>{"f(0, 0) = 0"}</M>, both partials at the origin are 0, so a
          derivative would have to be 0. Yet along <M>{"v = (1, 1)/\\sqrt2"}</M>, <M>{"f(tv)/t = 1/(2\\sqrt2)"}</M>. So{" "}
          <M>{"f"}</M> is continuous with every directional derivative but is not differentiable.
        </p>
      </Example>

      <Remark title="why linear maps">
        <p>
          The derivative is best thought of as a linear map, not as a list of numbers. This view survives into infinite
          dimensions, where there are no coordinates, and onto manifolds, where the derivative maps tangent spaces to tangent
          spaces.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "jac",
      rung: "check",
      prompt: <p>For f(x, y) = (x²y, x + y), what is the entry ∂f₁/∂x of the Jacobian at (1, 2)?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the total derivative of f at a?</p>,
      answer: {
        kind: "choice",
        options: [
          "A linear map L with f(a + h) = f(a) + Lh + o(|h|).",
          "The list of partial derivatives, whether or not they fit together.",
          "The largest directional derivative.",
          "The gradient's length.",
        ],
        correct: [0],
      },
    },
    {
      key: "dir",
      rung: "apply",
      prompt: <p>f(x, y) = x² + 3xy is differentiable. What is its directional derivative at (1, 1) along v = (0.6, 0.8)?</p>,
      answer: { kind: "numeric", value: 5.4, tolerance: 0.001 },
    },
    {
      key: "chain",
      rung: "apply",
      prompt: <p>g(u, v) = uv and f(t) = (cos t, sin t). What is (g ∘ f)′(0)?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "trap",
      rung: "apply",
      prompt: <p>Why is x²y/(x² + y²) not differentiable at the origin?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its directional derivatives a²b are not linear in the direction (a, b).",
          "It is not continuous.",
          "Its partial derivatives do not exist.",
          "It is unbounded.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a function differentiable at a is continuous at a.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes f(a + h) − f(a) = Df(a)h + r(h) with r(h)/|h| → 0.",
          "Notes that Df(a)h → 0 since linear maps on ℝⁿ are bounded, and r(h) → 0.",
          "Concludes f(a + h) → f(a).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>What is the derivative of the map A ↦ A² on n × n matrices? Hint: expand (A + H)².</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands (A + H)² = A² + AH + HA + H².",
          "Identifies the linear part H ↦ AH + HA and notes |H²| = o(|H|).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the total derivative as a linear approximation, why having all directional derivatives is not enough, why continuous partials suffice, and the chain rule as composition of linear maps.",

  glimpse: (
    <p>
      The next lesson proves the inverse and implicit function theorems with the contraction mapping theorem. In Riemannian
      geometry, derivatives become maps between tangent spaces of curved spaces.
    </p>
  ),
};
