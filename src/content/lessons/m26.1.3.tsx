import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { UnityPartitionViz } from "@/components/viz/UnityPartitionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.1.3",
  minutes: 85,
  links: {
    revisits: ["m26.1.2", "m12.5.3", "m15.3.3"],
    foreshadows: ["m26.3.4", "m26.6.1", "m26.6.3"],
  },

  puzzle: (
    <>
      <p>
        On each chart of a manifold you can easily define a metric, a measure, or an inner product on tangent vectors, by
        copying the one from ℝⁿ. But different charts give different answers on overlaps. How can local choices be averaged
        into one global object, smoothly and without seams?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Cover an interval by overlapping open sets and build one smooth bump inside each. Then divide each bump by their sum.
      </p>
      <UnityPartitionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="bump functions">
        <p>
          The function <M>{"f(t) = e^{-1/t}"}</M> for t &gt; 0, and 0 for t ≤ 0, is smooth. Then{" "}
          <M>{"h(t) = f(t)/(f(t) + f(1 - t))"}</M> is smooth, 0 for t ≤ 0 and 1 for t ≥ 1, and composing with |x| gives a smooth
          function on ℝⁿ equal to 1 on a ball and 0 outside a larger ball. Such <strong>bump functions</strong> exist on every
          manifold, around every point.
        </p>
      </Definition>

      <Definition title="partitions of unity">
        <p>
          Given an open cover <M>{"\\{U_\\alpha\\}"}</M> of M, a <strong>smooth partition of unity subordinate to it</strong>{" "}
          is a family of smooth functions <M>{"\\varphi_\\alpha: M \\to [0, 1]"}</M> with{" "}
          <M>{"\\operatorname{supp} \\varphi_\\alpha \\subseteq U_\\alpha"}</M>, locally finite supports (each point has a
          neighbourhood meeting only finitely many), and <M>{"\\sum_\\alpha \\varphi_\\alpha = 1"}</M>.
        </p>
      </Definition>

      <Theorem title="existence">
        <p>
          Every open cover of a smooth manifold has a subordinate smooth partition of unity.
        </p>
        <p>
          <strong>Proof idea.</strong> Second countability and local compactness give an exhaustion by compact sets, and hence a
          locally finite refinement of the cover by small coordinate balls. Put a bump in each ball, and divide by the sum, which
          is a locally finite sum of smooth functions and positive everywhere.
        </p>
      </Theorem>

      <Example title="applications">
        <p>
          Every manifold has a Riemannian metric: take <M>{"g = \\sum \\varphi_\\alpha g_\\alpha"}</M>, where{" "}
          <M>{"g_\\alpha"}</M> is pulled back from ℝⁿ by a chart; a convex combination of inner products is an inner product.
          Every closed subset of M is the zero set of some smooth function. Smooth functions on closed subsets extend. And
          integrals of forms are defined chart by chart and glued with a partition of unity.
        </p>
      </Example>

      <Remark title="what does not glue">
        <p>
          Not every local structure can be averaged. A Lorentzian metric or a nowhere-zero vector field cannot, because
          convex combinations of them can degenerate: the average of v and −v is 0. Whether such objects exist globally is a
          question of topology, as the hairy ball theorem shows.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sum",
      rung: "check",
      prompt: <p>What is the sum of the functions in a partition of unity, at any point?</p>,
      answer: { kind: "choice", options: ["1", "0", "The number of open sets", "It depends on the point"], correct: [0] },
    },
    {
      key: "locfin",
      rung: "check",
      prompt: <p>Why are the supports required to be locally finite?</p>,
      answer: { kind: "choice", options: ["So that near each point the sum is a finite sum of smooth functions, hence smooth", "So that there are finitely many functions in total", "So that the functions are bounded", "So that M is compact"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the normalised functions with 5 open sets. What do the functions add to at x = 3.7?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "metric",
      rung: "apply",
      prompt: <p>Why does gluing Riemannian metrics with a partition of unity work?</p>,
      answer: { kind: "choice", options: ["A convex combination of positive definite inner products is positive definite", "Metrics are linear", "Charts preserve distances", "Partitions of unity are metrics"], correct: [0] },
    },
    {
      key: "vf",
      rung: "apply",
      prompt: <p>Why can partitions of unity not be used to build a nowhere-zero vector field on S²?</p>,
      answer: { kind: "choice", options: ["Averages of non-zero vectors can be zero", "S² has no partitions of unity", "Vector fields are not smooth", "S² has only one chart"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that h(t) = f(t)/(f(t) + f(1 − t)), with f(t) = exp(−1/t) for t &gt; 0 and 0 otherwise, is smooth, 0 for t ≤ 0 and 1 for t ≥ 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the denominator is never zero, since f(t) or f(1 − t) is positive for every t.",
          "Concludes h is a quotient of smooth functions with non-vanishing denominator, so smooth.",
          "Checks h = 0 for t ≤ 0 (f(t) = 0) and h = 1 for t ≥ 1 (f(1 − t) = 0).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>In which other parts of mathematics have you seen local data glued into global data? What made the gluing possible there?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Names an example, such as integration over ℝⁿ, the Tietze extension theorem or the Mayer–Vietoris sequence.",
          "Identifies a condition that allowed gluing, such as convexity, linearity or agreement on overlaps.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With smooth maps and partitions of unity, the foundations are in place. The next step is linear algebra on a
        manifold: at each point, a vector space of directions.
      </p>
      <p>Next, tangent vectors, defined intrinsically as derivations on smooth functions.</p>
    </>
  ),
};
