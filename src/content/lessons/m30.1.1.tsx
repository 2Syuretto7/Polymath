import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ImplicitCurveViz } from "@/components/viz/ImplicitCurveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.1.1",
  minutes: 90,
  links: {
    revisits: ["m24.2.4", "m24.2.3", "m24.2.1"],
    foreshadows: ["m30.1.2", "m30.1.3", "m30.4.1"],
  },

  puzzle: (
    <>
      <p>
        The parabola y = x² and the circle x² + y² = 2 are each the zero set of one polynomial. Their union is the zero
        set of the product, and their intersection is the zero set of the pair. Geometry seems to turn into algebra. How
        far does the dictionary go, and where does it need care?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a polynomial, and see its zero set, its components and its singular points.</p>
      <ImplicitCurveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="affine varieties">
        <p>
          Let k be an algebraically closed field and <M>{"\\mathbb{A}^n = k^n"}</M>. For a set S of polynomials in{" "}
          <M>{"k[x_1, \\dots, x_n]"}</M>, <M>{"V(S)"}</M> is the set of common zeros. Sets of this form are{" "}
          <strong>algebraic sets</strong>, and they are the closed sets of the <strong>Zariski topology</strong>. For a set
          X of points, <M>{"I(X)"}</M> is the ideal of polynomials vanishing on X.
        </p>
      </Definition>

      <Theorem title="the dictionary">
        <p>
          By the Hilbert basis theorem every algebraic set is cut out by finitely many polynomials. By the Nullstellensatz,{" "}
          <M>{"I(V(J)) = \\sqrt J"}</M>. So V and I are inverse bijections between algebraic sets and radical ideals,
          reversing inclusion. Points correspond to maximal ideals, and{" "}
          <M>{"V(J_1) \\cup V(J_2) = V(J_1J_2)"}</M>, <M>{"V(J_1) \\cap V(J_2) = V(J_1 + J_2)"}</M>.
        </p>
      </Theorem>

      <Definition title="irreducibility">
        <p>
          An algebraic set is <strong>irreducible</strong> if it is not the union of two smaller algebraic sets, exactly when
          its ideal is prime. An <strong>affine variety</strong> is an irreducible algebraic set. Every algebraic set is a
          finite union of irreducible components, uniquely. Its <strong>coordinate ring</strong>{" "}
          <M>{"k[X] = k[x_1, \\dots, x_n]/I(X)"}</M> is the ring of polynomial functions on X.
        </p>
      </Definition>

      <Example title="curves in the plane">
        <p>
          V(f) for a non-constant f in k[x, y] is a plane curve; its components are the zero sets of the irreducible factors
          of f. A point where f and both partial derivatives vanish is singular: y² = x³ + x² has a node at the origin and
          y² = x³ a cusp.
        </p>
      </Example>

      <Remark title="why algebraically closed">
        <p>
          Over ℝ, <M>{"x^2 + y^2 + 1"}</M> has no zeros, so V forgets the polynomial entirely, and the dictionary breaks. The
          pictures in the visualisation show only real points; the varieties themselves live in ℂ², where a plane curve is
          a real surface.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "null",
      rung: "check",
      prompt: <p>What does the Nullstellensatz give for an ideal J over an algebraically closed field?</p>,
      answer: { kind: "choice", options: ["I(V(J)) is the radical of J", "I(V(J)) = J always", "V(J) is never empty", "J is always prime"], correct: [0] },
    },
    {
      key: "irr",
      rung: "check",
      prompt: <p>When is an algebraic set irreducible?</p>,
      answer: { kind: "choice", options: ["When its ideal is prime", "When its ideal is maximal", "When it is a single point", "When it is defined by one polynomial"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at how many real points does the parabola y = x² meet the circle x² + y² = 2?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "union",
      rung: "apply",
      prompt: <p>V(x) ∪ V(y) in the plane equals which algebraic set?</p>,
      answer: { kind: "choice", options: ["V(xy)", "V(x + y)", "V(x, y)", "V(x² + y²)"], correct: [0] },
    },
    {
      key: "points",
      rung: "apply",
      prompt: <p>To which ideals of k[x, y] do the points of the plane correspond?</p>,
      answer: { kind: "choice", options: ["The maximal ideals (x − a, y − b)", "All prime ideals", "The principal ideals", "The radical ideals"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that V(J₁) ∪ V(J₂) = V(J₁J₂) for ideals J₁ and J₂.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows a point of V(J₁) or V(J₂) kills every product fg with f in J₁ and g in J₂.",
          "Conversely, takes a point not in V(J₁) or V(J₂), with f in J₁ and g in J₂ not vanishing there.",
          "Notes fg does not vanish at it, so it is not in V(J₁J₂).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the correspondence between algebraic sets and radical ideals fail over ℝ?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an example such as x² + y² + 1, whose real zero set is empty.",
          "Notes the radical ideal it generates is proper, yet V of it equals V of the whole ring.",
          "Concludes V is not injective on radical ideals. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Two distinct lines in the plane meet in one point, unless they are parallel. Adding points at infinity removes the
        exception, and gives the right setting for counting intersections.
      </p>
      <p>Next, projective varieties.</p>
    </>
  ),
};
