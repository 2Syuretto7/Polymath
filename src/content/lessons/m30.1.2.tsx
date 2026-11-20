import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ProjectiveChartViz } from "@/components/viz/ProjectiveChartViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.1.2",
  minutes: 90,
  links: {
    revisits: ["m30.1.1", "m25.1.1", "m15.1.2"],
    foreshadows: ["m30.1.3", "m30.2.2", "m30.2.3"],
  },

  puzzle: (
    <>
      <p>
        Parallel railway lines seem to meet at the horizon. A hyperbola runs off towards two directions, a parabola towards
        one, and a circle stays bounded. Is there a geometry in which these are all the same curve, seen from different
        places?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a conic and an affine chart, and see where it meets the line at infinity.</p>
      <ProjectiveChartViz />
    </>
  ),

  theory: (
    <>
      <Definition title="projective space">
        <p>
          <M>{"\\mathbb{P}^n"}</M> is the set of lines through 0 in <M>{"k^{n+1}"}</M>, written in homogeneous coordinates{" "}
          <M>{"[x_0 : \\dots : x_n]"}</M>, not all zero, with <M>{"[x] = [\\lambda x]"}</M> for λ ≠ 0. The sets{" "}
          <M>{"U_i = \\{x_i \\ne 0\\}"}</M> are copies of <M>{"\\mathbb{A}^n"}</M>, the <strong>affine charts</strong>, and
          the complement of <M>{"U_0"}</M> is a copy of <M>{"\\mathbb{P}^{n-1}"}</M>, the hyperplane at infinity.
        </p>
      </Definition>

      <Definition title="projective varieties">
        <p>
          A homogeneous polynomial F has a well-defined zero set in <M>{"\\mathbb{P}^n"}</M>, since{" "}
          <M>{"F(\\lambda x) = \\lambda^d F(x)"}</M>. Projective algebraic sets are common zero sets of homogeneous
          polynomials, corresponding to homogeneous radical ideals other than the irrelevant ideal{" "}
          <M>{"(x_0, \\dots, x_n)"}</M>. A <strong>projective variety</strong> is an irreducible one.
        </p>
      </Definition>

      <Theorem title="projective closure">
        <p>
          An affine variety V(f) in <M>{"\\mathbb{A}^n"}</M> has a <strong>projective closure</strong>, obtained by
          homogenising: replace f of degree d by <M>{"x_0^d f(x_1/x_0, \\dots, x_n/x_0)"}</M>. The added points, at{" "}
          <M>{"x_0 = 0"}</M>, are given by the top-degree part of f. Projective varieties over ℂ are compact, which is
          what makes counting theorems possible.
        </p>
      </Theorem>

      <Example title="conics">
        <p>
          The parabola y = x² closes to <M>{"yz = x^2"}</M>, adding the single point [0 : 1 : 0]. The hyperbola xy = 1
          closes to <M>{"xy = z^2"}</M>, adding [1 : 0 : 0] and [0 : 1 : 0]. The circle closes to{" "}
          <M>{"x^2 + y^2 = z^2"}</M>, adding [1 : ±i : 0]. Over ℂ every smooth conic is projectively equivalent to every
          other, and isomorphic to <M>{"\\mathbb{P}^1"}</M>.
        </p>
      </Example>

      <Remark title="lines">
        <p>
          In <M>{"\\mathbb{P}^2"}</M> any two distinct lines meet in exactly one point: parallel lines meet at infinity, at
          the point given by their common direction. This is the first case of Bézout&rsquo;s theorem, which counts the
          intersections of curves of degrees d and e as de.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "proj",
      rung: "check",
      prompt: <p>What is a point of projective space ℙⁿ?</p>,
      answer: { kind: "choice", options: ["A line through the origin in k to the n + 1", "A point of kⁿ", "A hyperplane in kⁿ", "A pair of points"], correct: [0] },
    },
    {
      key: "homog",
      rung: "check",
      prompt: <p>Why must polynomials defining projective varieties be homogeneous?</p>,
      answer: { kind: "choice", options: ["So that whether they vanish does not depend on the choice of homogeneous coordinates", "So that they have degree 1", "So that they are irreducible", "So that they have no zeros at infinity"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many real points at infinity does the hyperbola xy = z² have?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "lines",
      rung: "apply",
      prompt: <p>The parallel lines y = x and y = x + 1 meet in ℙ². At which point?</p>,
      answer: { kind: "choice", options: ["[1 : 1 : 0]", "[0 : 0 : 1]", "[1 : 0 : 0]", "They do not meet"], correct: [0] },
    },
    {
      key: "closure",
      rung: "apply",
      prompt: <p>What is the projective closure of the cubic y = x³?</p>,
      answer: { kind: "choice", options: ["yz² = x³", "y = x³z", "yz = x³", "y³ = x³"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that any two distinct lines in ℙ² meet in exactly one point.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the lines as ax + by + cz = 0 and a′x + b′y + c′z = 0 with non-proportional coefficients.",
          "Notes the solutions in k³ form a one-dimensional subspace, since the system has rank 2.",
          "Concludes this subspace is exactly one point of ℙ².",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does a circle have points at infinity over ℂ but not over ℝ?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets z = 0 in x² + y² = z² to get x² + y² = 0.",
          "Notes that over ℝ only x = y = 0 solves this, which is not a point of ℙ², while over ℂ, y = ±ix.",
          "Concludes the points [1 : ±i : 0], sometimes called the circular points. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        To compare varieties one needs maps between them. A morphism should be given locally by polynomials, and an
        isomorphism should preserve all the algebra.
      </p>
      <p>Next, morphisms.</p>
    </>
  ),
};
