import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PlaneFieldViz } from "@/components/viz/PlaneFieldViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.4.1",
  minutes: 90,
  links: {
    revisits: ["m26.2.3", "m26.2.1", "m5.2.1"],
    foreshadows: ["m26.4.2", "m26.4.3", "m26.7.2"],
  },

  puzzle: (
    <>
      <p>
        A tangent vector at a point differentiates functions at that point. A vector field, a tangent vector at every point,
        should therefore differentiate a function everywhere at once, turning f into a new function Xf. Is every such
        operation on functions a vector field?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a field and a point p. The value (Xf)(p) is the rate of change of f = x² + y² along the arrow at p: zero when the
        arrow runs along a level circle.
      </p>
      <PlaneFieldViz />
    </>
  ),

  theory: (
    <>
      <Definition title="vector fields">
        <p>
          A <strong>vector field</strong> on M is a smooth section of the tangent bundle: a smooth map{" "}
          <M>{"X: M \\to TM"}</M> with <M>{"X_p \\in T_pM"}</M> for every p. In a chart,{" "}
          <M>{"X = \\sum_i X^i \\, \\partial / \\partial x^i"}</M>, and X is smooth exactly when the component functions{" "}
          <M>{"X^i"}</M> are. The vector fields form a vector space <M>{"\\mathfrak{X}(M)"}</M>, and a module over{" "}
          <M>{"C^\\infty(M)"}</M>: we can multiply a field by a function.
        </p>
      </Definition>

      <Definition title="acting on functions">
        <p>
          A field X acts on <M>{"f \\in C^\\infty(M)"}</M> by <M>{"(Xf)(p) = X_p f"}</M>. In coordinates,{" "}
          <M>{"Xf = \\sum_i X^i \\, \\partial f / \\partial x^i"}</M>, which is smooth. The map{" "}
          <M>{"f \\mapsto Xf"}</M> is linear and satisfies <M>{"X(fg) = f \\, Xg + g \\, Xf"}</M>: it is a{" "}
          <strong>derivation</strong> of the algebra <M>{"C^\\infty(M)"}</M>.
        </p>
      </Definition>

      <Theorem title="fields are derivations">
        <p>
          Every derivation <M>{"D: C^\\infty(M) \\to C^\\infty(M)"}</M> is <M>{"f \\mapsto Xf"}</M> for exactly one vector field X.
          Define <M>{"X_p f = (Df)(p)"}</M>; this is a derivation at p, so a tangent vector, and the components{" "}
          <M>{"X^i = D(x^i)"}</M> (with a bump function) are smooth.
        </p>
      </Theorem>

      <Example title="spheres">
        <p>
          On <M>{"S^{2k-1} \\subset \\mathbb{R}^{2k}"}</M>, the field{" "}
          <M>{"X(x) = (-x_2, x_1, -x_4, x_3, \\dots, -x_{2k}, x_{2k-1})"}</M> is tangent, since <M>{"X(x) \\cdot x = 0"}</M>, and
          has length 1. So odd-dimensional spheres carry nowhere vanishing fields. Even-dimensional spheres do not: this is the
          hairy ball theorem, which follows from the Euler characteristic being 2.
        </p>
      </Example>

      <Remark title="pushing fields forward">
        <p>
          A smooth map <M>{"F: M \\to N"}</M> moves tangent vectors, but not fields in general: two points may go to one, or none
          to some. When F is a diffeomorphism, <M>{"F_*X = dF \\circ X \\circ F^{-1}"}</M> is a field on N. More generally, X and Y
          are <strong>F-related</strong> if <M>{"dF(X_p) = Y_{F(p)}"}</M> for all p.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a vector field on M?</p>,
      answer: { kind: "choice", options: ["A smooth section of the tangent bundle", "A tangent vector at one point", "A smooth function on M", "A chart of M"], correct: [0] },
    },
    {
      key: "leib",
      rung: "check",
      prompt: <p>Which rule does f ↦ Xf satisfy?</p>,
      answer: { kind: "choice", options: ["X(fg) = f Xg + g Xf", "X(fg) = Xf · Xg", "X(f + g) = Xf · Xg", "X(f) = f"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the saddle field and p = (1, 2). What is (Xf)(p)?</p>,
      answer: { kind: "numeric", value: -6 },
    },
    {
      key: "rot",
      rung: "apply",
      prompt: <p>Why is (Xf)(p) = 0 at every point for the rotation field and f = x² + y²?</p>,
      answer: { kind: "choice", options: ["The arrows run along the circles, the level sets of f", "The field is zero", "f is constant", "The rotation field is not smooth"], correct: [0] },
    },
    {
      key: "s3",
      rung: "apply",
      prompt: <p>Which sphere has no nowhere vanishing vector field?</p>,
      answer: { kind: "choice", options: ["S⁴", "S¹", "S³", "S⁵"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that X(x) = (−x₂, x₁, −x₄, x₃) is a nowhere vanishing vector field on S³ ⊂ ℝ⁴.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes X(x) · x = −x₂x₁ + x₁x₂ − x₄x₃ + x₃x₄ = 0, so X(x) is tangent to the sphere.",
          "Computes |X(x)| = |x| = 1, so X never vanishes on S³.",
          "Notes X is smooth, being the restriction of a linear map.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can a smooth map F: M → N not push every vector field on M to a vector field on N?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that if F(p) = F(q) the vectors dF(Xₚ) and dF(X_q) may disagree.",
          "Notes that points of N outside the image of F get no vector at all.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A vector field says how fast and in which direction to move at each point. Following the arrows gives curves, and
        moving every point along its curve for time t gives a family of diffeomorphisms of M: the flow of the field.
      </p>
      <p>Next, integral curves and flows.</p>
    </>
  ),
};
