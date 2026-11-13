import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LevelSetViz } from "@/components/viz/LevelSetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.4.3",
  minutes: 80,
  links: {
    revisits: ["m5.4.2", "m5.4.1", "m5.3.3"],
    foreshadows: ["m26.1.1", "m16.2.2", "m26.3.1"],
  },

  puzzle: (
    <>
      <p>
        The surface of the earth is curved, yet every page of an atlas is flat. No single flat map shows the whole globe
        without tearing it, but each page shows one region faithfully, and where two pages overlap there is a rule for
        passing from one to the other. Which shapes can be described by an atlas of flat maps like this? And given an
        equation such as <M>{"x^2 + y^2 + z^2 = 1"}</M>, how can we tell whether its solutions form such a shape, or
        something with a crease, a crossing or a point?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Slide the level <M>{"c"}</M> and watch the curve <M>{"f(x, y) = c"}</M>. For most levels it is a smooth curve. At a
        few levels something goes wrong. Notice where the grey dots are, and when the curve passes through one.
      </p>
      <LevelSetViz />
    </>
  ),

  theory: (
    <>
      <Definition title="manifolds in Euclidean space">
        <p>
          A subset <M>{"S \\subseteq \\mathbb{R}^n"}</M> is a <strong>k-dimensional manifold</strong> (a smooth{" "}
          <M>{"k"}</M>-manifold) if every point of <M>{"S"}</M> has an open neighbourhood <M>{"U"}</M> in which, after
          perhaps reordering the coordinates, <M>{"S \\cap U"}</M> is the graph of a continuously differentiable function
          of <M>{"k"}</M> of the coordinates, giving the other <M>{"n - k"}</M>. So near each of its points, a manifold is a
          bent copy of a piece of <M>{"\\mathbb{R}^k"}</M>. A smooth curve is a 1-manifold; a smooth surface is a
          2-manifold.
        </p>
      </Definition>

      <Theorem title="the regular value theorem">
        <p>
          Let <M>{"F : \\mathbb{R}^n \\to \\mathbb{R}^m"}</M>, with <M>{"m < n"}</M>, have continuous first partials, and
          let <M>{"S = \\{p : F(p) = c\\}"}</M>. If the derivative <M>{"DF(p)"}</M> has rank <M>{"m"}</M> at every point{" "}
          <M>{"p"}</M> of <M>{"S"}</M>, then <M>{"S"}</M> is an <M>{"(n - m)"}</M>-dimensional manifold. When{" "}
          <M>{"m = 1"}</M> the condition says simply that <M>{"\\nabla F \\ne 0"}</M> on <M>{"S"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Take <M>{"p \\in S"}</M>. The <M>{"m \\times n"}</M> matrix <M>{"DF(p)"}</M> has rank <M>{"m"}</M>, so some{" "}
          <M>{"m"}</M> of its columns form an invertible <M>{"m \\times m"}</M> matrix. Call the corresponding variables{" "}
          <M>{"y"}</M> and the remaining <M>{"n - m"}</M> variables <M>{"x"}</M>. Then <M>{"D_yF(p)"}</M> is invertible,
          and the implicit function theorem gives a neighbourhood of <M>{"p"}</M> in which <M>{"F(x, y) = c"}</M> exactly
          when <M>{"y = g(x)"}</M>, for a continuously differentiable <M>{"g"}</M>. So near <M>{"p"}</M>,{" "}
          <M>{"S"}</M> is a graph over <M>{"n - m"}</M> coordinates.
        </p>
      </Proof>

      <Example title="spheres, circles and a cone">
        <p>
          For the sphere, <M>{"F = x^2 + y^2 + z^2"}</M> and <M>{"\\nabla F = 2(x, y, z)"}</M>, which vanishes only at the
          origin, not on the sphere. So the sphere is a 2-manifold. The circle where the sphere meets the plane{" "}
          <M>{"z = 0"}</M> is the level set of <M>{"F = (x^2 + y^2 + z^2,\\ z)"}</M>, whose derivative has rows{" "}
          <M>{"(2x, 2y, 2z)"}</M> and <M>{"(0, 0, 1)"}</M>. On the circle <M>{"(x, y) \\ne (0, 0)"}</M>, so the rows are
          independent and the circle is a 1-manifold in <M>{"\\mathbb{R}^3"}</M>. The cone <M>{"x^2 + y^2 = z^2"}</M>,
          by contrast, has <M>{"\\nabla F = 0"}</M> at its apex, and indeed it is not a manifold there: removing the apex
          splits any small piece of the cone around it into two, which never happens to a disc with its centre removed.
        </p>
      </Example>

      <Definition title="the tangent space">
        <p>
          At a point <M>{"p"}</M> of a level set <M>{"S = F^{-1}(c)"}</M> as in the theorem, the{" "}
          <strong>tangent space</strong> is
        </p>
        <MD>{"T_pS = \\ker DF(p) = \\{v \\in \\mathbb{R}^n : DF(p)\\,v = 0\\},"}</MD>
        <p>
          a subspace of dimension <M>{"n - m"}</M>. These are the velocities of curves that stay in <M>{"S"}</M>: if{" "}
          <M>{"F(\\gamma(t)) = c"}</M> for all <M>{"t"}</M> then <M>{"DF\\,\\gamma'(t) = 0"}</M>. For the sphere, the tangent
          plane at <M>{"p"}</M> is the set of vectors orthogonal to <M>{"p"}</M>.
        </p>
      </Definition>

      <Remark title="sufficient, not necessary">
        <p>
          The condition is enough to guarantee a manifold but is not required. The function{" "}
          <M>{"F = (x^2 + y^2 - 1)^2"}</M> has gradient zero all along its zero set, which is still the unit circle. Later
          courses define manifolds abstractly, without any surrounding space, as spaces covered by an atlas of charts
          whose overlaps are smooth: exactly the picture of the flat pages of an atlas of the curved earth.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dim",
      rung: "check",
      prompt: (
        <p>
          Two equations <M>{"F_1 = 0"}</M>, <M>{"F_2 = 0"}</M> in <M>{"\\mathbb{R}^5"}</M> have independent gradients at
          every common solution. What is the dimension of the solution set?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "levels",
      rung: "check",
      prompt: (
        <p>
          The gradient of <M>{"F = x^2 + y^2 - z^2"}</M> vanishes only at the origin. For which levels <M>{"c"}</M> does the
          theorem guarantee that <M>{"F = c"}</M> is a surface? Choose all that apply.
        </p>
      ),
      answer: { kind: "choice", options: ["c = 1", "c = 0", "c = −1", "c = 4"], correct: [0, 2, 3] },
    },
    {
      key: "tangent",
      rung: "apply",
      prompt: (
        <p>
          The tangent plane to the sphere <M>{"x^2 + y^2 + z^2 = 9"}</M> at <M>{"(1, 2, 2)"}</M> has the equation{" "}
          <M>{"x + 2y + 2z = d"}</M>. Find <M>{"d"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these subsets of the plane are 1-manifolds? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["The circle x² + y² = 1", "A figure eight", "The parabola y = x²", "The two crossing axes, xy = 0"],
        correct: [0, 2],
      },
    },
    {
      key: "critical",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"F(x, y) = x^3 - 3x + y^2"}</M>, find the positive level <M>{"c"}</M> at which the level set{" "}
          <M>{"F = c"}</M> contains a point where <M>{"\\nabla F = 0"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "sphere",
      rung: "prove",
      prompt: <p>Use the regular value theorem to prove that the unit sphere in <M>{"\\mathbb{R}^3"}</M> is a 2-manifold.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the sphere as the level set F = 1 of F = x² + y² + z², and computes ∇F = 2(x, y, z).",
          "Notes ∇F vanishes only at the origin, which is not on the sphere, so the theorem gives a manifold of dimension 3 − 1 = 2.",
        ],
      },
    },
    {
      key: "square",
      rung: "stretch",
      prompt: (
        <p>
          Let <M>{"F = (x^2 + y^2 - 1)^2"}</M>. Show that <M>{"\\nabla F = 0"}</M> at every point of the zero set{" "}
          <M>{"F = 0"}</M>, and explain what this shows about the regular value theorem.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes ∇F = 4(x² + y² − 1)(x, y), which is zero wherever x² + y² = 1.",
          "Notes the zero set is the unit circle, which is a 1-manifold all the same.",
          "Concludes that the condition on the gradient is sufficient for a manifold but not necessary.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a manifold in Euclidean space is, how the implicit function theorem shows that level sets with nonvanishing gradient are manifolds, and what the tangent space is.",

  glimpse: (
    <p>
      The next chapter turns from derivatives to integrals over regions of the plane and of space. Manifolds return in the
      vector field chapter, where curves and surfaces become places to integrate over, and in the course on smooth
      manifolds, which builds them without any surrounding space.
    </p>
  ),
};
