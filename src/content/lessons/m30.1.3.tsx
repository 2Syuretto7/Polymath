import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { RationalParamViz } from "@/components/viz/RationalParamViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.1.3",
  minutes: 90,
  links: {
    revisits: ["m30.1.1", "m30.1.2", "m24.1.1"],
    foreshadows: ["m30.1.4", "m30.2.3", "m30.4.3"],
  },

  puzzle: (
    <>
      <p>
        The map t ↦ (t², t³) sends the line onto the curve y² = x³, hitting every point exactly once, and it is given by
        polynomials. Its inverse sends (x, y) to y/x, with t = 0 at the origin. Is the curve the same as a line, or not?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a curve, move t, and follow the point it is sent to.</p>
      <RationalParamViz />
    </>
  ),

  theory: (
    <>
      <Definition title="morphisms of affine varieties">
        <p>
          For affine varieties <M>{"X \\subseteq \\mathbb{A}^n"}</M> and <M>{"Y \\subseteq \\mathbb{A}^m"}</M>, a{" "}
          <strong>morphism</strong> <M>{"\\varphi : X \\to Y"}</M> is a map given by m polynomials in the coordinates with{" "}
          <M>{"\\varphi(X) \\subseteq Y"}</M>. It is an <strong>isomorphism</strong> if it has an inverse that is also a
          morphism. Composing with φ sends polynomial functions on Y to polynomial functions on X, giving a k-algebra
          homomorphism <M>{"\\varphi^* : k[Y] \\to k[X]"}</M> in the opposite direction.
        </p>
      </Definition>

      <Theorem title="varieties and their coordinate rings">
        <p>
          Over an algebraically closed field k, <M>{"\\varphi \\mapsto \\varphi^*"}</M> is a bijection between morphisms X →
          Y and k-algebra homomorphisms k[Y] → k[X]. So the category of affine varieties is equivalent to the opposite of the
          category of finitely generated reduced k-algebras. Two varieties are isomorphic exactly when their coordinate rings
          are.
        </p>
      </Theorem>

      <Example title="the cusp">
        <p>
          The map t ↦ (t², t³) from the line to <M>{"y^2 = x^3"}</M> is a bijective morphism. Its pullback sends x to t²
          and y to t³, so its image is <M>{"k[t^2, t^3]"}</M>, which does not contain t. The pullback is not surjective, so
          the map is not an isomorphism: the cusp is a singular point, and the line has none. A bijective morphism need not
          be an isomorphism.
        </p>
      </Example>

      <Example title="rational maps">
        <p>
          The line through (−1, 0) with slope t meets the circle again at{" "}
          <M>{"\\left(\\frac{1-t^2}{1+t^2}, \\frac{2t}{1+t^2}\\right)"}</M>, with inverse t = y/(x + 1). These are{" "}
          <strong>rational maps</strong>, defined away from a few points, and they show the circle is{" "}
          <strong>birational</strong> to the line. Rational t give the rational points of the circle, and with them every
          Pythagorean triple.
        </p>
      </Example>

      <Remark title="projective morphisms">
        <p>
          A morphism between projective varieties is given locally by homogeneous polynomials of a common degree with no
          common zero, such as the Veronese map <M>{"[s : t] \\mapsto [s^2 : st : t^2]"}</M> from the projective line onto a
          conic. The image of a projective variety under a morphism is always closed, a property that fails for affine
          varieties and that will return as properness.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pull",
      rung: "check",
      prompt: <p>What does a morphism φ : X → Y induce on coordinate rings?</p>,
      answer: { kind: "choice", options: ["A k-algebra homomorphism k[Y] → k[X]", "A k-algebra homomorphism k[X] → k[Y]", "An isomorphism of fields", "Nothing in general"], correct: [0] },
    },
    {
      key: "cusp",
      rung: "check",
      prompt: <p>Is t ↦ (t², t³) an isomorphism from the line onto y² = x³?</p>,
      answer: { kind: "choice", options: ["No: it is a bijective morphism whose inverse is not a morphism", "Yes, since it is bijective", "Yes, since it is given by polynomials", "No, since it is not surjective"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the circle and set t = 0.5. What is the x-coordinate of the point?</p>,
      answer: { kind: "numeric", value: 0.6, tolerance: 0.001 },
    },
    {
      key: "t01",
      rung: "apply",
      prompt: <p>Which value of t sends the line to the point (0, 1) of the circle?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "hyp",
      rung: "apply",
      prompt: <p>The hyperbola xy = 1 has coordinate ring k[x, 1/x]. Which variety is it isomorphic to?</p>,
      answer: { kind: "choice", options: ["The line with one point removed", "The line", "The plane", "A point"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that t ↦ (t², t³) is not an isomorphism from the line onto y² = x³.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes an isomorphism would make the pullback k[x, y]/(y² − x³) → k[t] an isomorphism.",
          "Computes that the pullback sends x to t² and y to t³, so its image is k[t², t³].",
          "Observes t is not in k[t², t³], so the pullback is not surjective and the map is not an isomorphism.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the parabola y = x² is isomorphic to the line.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives the morphisms x ↦ (x, x²) and (x, y) ↦ x.",
          "Checks both composites are the identity, or that k[x, y]/(y − x²) is isomorphic to k[x].",
          "Concludes. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A line has one degree of freedom and a plane two. For varieties with singular points, or made of several pieces, the
        count needs a definition, and there are several equivalent ones.
      </p>
      <p>Next, dimension.</p>
    </>
  ),
};
