import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CechCircleViz } from "@/components/viz/CechCircleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.6.2",
  minutes: 90,
  links: {
    revisits: ["m30.6.1", "m30.3.1", "m25.3.3"],
    foreshadows: ["m30.6.3", "m39.4.3", "m38.5.1"],
  },

  puzzle: (
    <>
      <p>
        Cover a circle by overlapping arcs and try to choose a constant on each arc so that the differences on the overlaps
        are any values you like. On an interval you always can; on a circle the differences around the loop must add up to
        zero. This one missing degree of freedom is a cohomology class. Can such a count compute sheaf cohomology in general?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a circle or an interval and a number of arcs, and compute the Čech cohomology of constants.</p>
      <CechCircleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Čech complex">
        <p>
          Let <M>{"\\mathfrak{U} = (U_i)"}</M> be an open cover of X, with the indices ordered, and write{" "}
          <M>{"U_{i_0 \\cdots i_p}"}</M> for intersections. For a sheaf F, the Čech cochains are{" "}
          <M>{"C^p = \\prod_{i_0 < \\cdots < i_p} F(U_{i_0 \\cdots i_p})"}</M>, with differential{" "}
          <M>{"(\\delta c)_{i_0 \\cdots i_{p+1}} = \\sum_k (-1)^k c_{i_0 \\cdots \\widehat{i_k} \\cdots i_{p+1}}"}</M>, restricted
          to the smaller intersection. Its cohomology is <M>{"\\check{H}^p(\\mathfrak{U}, F)"}</M>, and <M>{"\\check{H}^0"}</M>{" "}
          is always the global sections, by the sheaf axiom.
        </p>
      </Definition>

      <Theorem title="Leray’s theorem">
        <p>
          If F has no higher cohomology on any finite intersection of the cover, then Čech cohomology of the cover equals
          sheaf cohomology. In particular, for a quasi-coherent sheaf on a separated scheme, any cover by affine open sets
          will do, since intersections of affines are then affine and Serre&rsquo;s vanishing applies.
        </p>
      </Theorem>

      <Example title="the projective line">
        <p>
          Cover ℙ¹ by <M>{"U_0 = \\operatorname{Spec} k[t]"}</M> and <M>{"U_1 = \\operatorname{Spec} k[t^{-1}]"}</M>, with{" "}
          <M>{"U_{01} = \\operatorname{Spec} k[t, t^{-1}]"}</M>. For the structure sheaf, δ(f, g) = g − f. Its kernel is the
          constants, and it is surjective because every Laurent polynomial is a polynomial in t plus one in{" "}
          <M>{"t^{-1}"}</M>. So <M>{"H^0 = k"}</M> and <M>{"H^1 = 0"}</M>. For <M>{"\\mathcal{O}(-2)"}</M> the twist leaves
          exactly one monomial, <M>{"t^{-1}"}</M>, out of the image, so <M>{"H^1 \\cong k"}</M>.
        </p>
      </Example>

      <Remark title="links with topology">
        <p>
          For two open sets the Čech complex gives the Mayer-Vietoris sequence. For the constant sheaf on a manifold with a
          good cover, where all intersections are contractible, Čech cohomology agrees with singular and de Rham cohomology;
          this is how Weil proved de Rham&rsquo;s theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "c0",
      rung: "check",
      prompt: <p>What are the zero-cochains of the Čech complex of a cover?</p>,
      answer: { kind: "choice", options: ["A choice of section of F on each open set of the cover", "A global section", "A section on each double overlap", "The stalks of F"], correct: [0] },
    },
    {
      key: "leray",
      rung: "check",
      prompt: <p>When does Čech cohomology of a cover agree with sheaf cohomology?</p>,
      answer: { kind: "choice", options: ["When F has no higher cohomology on the finite intersections of the cover", "Always, for every cover", "Only for covers with two sets", "Never"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for the circle with 5 arcs, what is the dimension of H¹?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "int",
      rung: "apply",
      prompt: <p>For the interval with 6 arcs, what is the dimension of H¹?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0 },
    },
    {
      key: "p1",
      rung: "apply",
      prompt: <p>Why is the first cohomology of the structure sheaf on ℙ¹ zero?</p>,
      answer: { kind: "choice", options: ["Every Laurent polynomial is a polynomial in t plus a polynomial in 1/t", "ℙ¹ is affine", "ℙ¹ has no open covers", "The structure sheaf has no sections"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Using the standard two-set cover, compute H⁰ and H¹ of the structure sheaf on ℙ¹.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the complex k[t] × k[1/t] → k[t, 1/t] with δ(f, g) = g − f.",
          "Finds the kernel: f = g must lie in both rings, so it is a constant, and H⁰ = k.",
          "Shows δ is surjective, splitting each Laurent polynomial into its parts, so H¹ = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Cover the circle by two arcs whose overlap has two components. Compute the Čech H¹ of the constant sheaf.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes C⁰ has dimension 2 and C¹ has dimension 2, one for each component of the overlap.",
          "Computes δ(a, b) = (b − a, b − a), of rank 1.",
          "Concludes H¹ has dimension 1, as for any cover. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        On a curve, cohomology has only two groups, and Serre duality ties them together. Their difference can be computed
        from the degree of a divisor and a single number, the genus.
      </p>
      <p>Next, Riemann-Roch for curves.</p>
    </>
  ),
};
