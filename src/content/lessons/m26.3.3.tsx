import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SardViz } from "@/components/viz/SardViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.3.3",
  minutes: 90,
  links: {
    revisits: ["m26.3.2", "m6.7.4", "m6.4.4"],
    foreshadows: ["m26.3.4", "m26.4.1", "m26.6.3"],
  },

  puzzle: (
    <>
      <p>
        The regular level set theorem needs a regular value. A smooth function can have a whole interval of critical points,
        or even a Cantor set of them. Could the critical values ever fill up an interval, so that regular values are hard to
        find? Sard&rsquo;s theorem says no: almost every value is regular.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Slide the level line. At a critical value it touches the graph where the slope is zero. Switch to the second function,
        whose critical points fill an interval, and notice how few critical values it has.
      </p>
      <SardViz />
    </>
  ),

  theory: (
    <>
      <Definition title="measure zero in a manifold">
        <p>
          A subset <M>{"A \\subseteq \\mathbb{R}^n"}</M> has <strong>measure zero</strong> if for every ε &gt; 0 it can be covered
          by countably many cubes of total volume less than ε. A smooth map between open subsets of <M>{"\\mathbb{R}^n"}</M> sends
          sets of measure zero to sets of measure zero, being locally Lipschitz. So it makes sense to say a subset of an
          n-manifold has measure zero: its image in every chart does.
        </p>
      </Definition>

      <Theorem title="Sard's theorem">
        <p>
          If <M>{"F: M \\to N"}</M> is smooth, the set of critical values of F has measure zero in N. In particular, regular values
          are dense in N, and for almost every c the level set <M>{"F^{-1}(c)"}</M> is an embedded submanifold, possibly empty.
        </p>
        <p>
          <strong>Proof idea.</strong> The easy case is dim M &lt; dim N, where every point is critical: then F(M) itself has
          measure zero, since F is locally the restriction of a smooth map on <M>{"M \\times \\mathbb{R}^{n-m}"}</M> to the
          measure zero slice <M>{"M \\times \\{0\\}"}</M>. The general case is an induction on dimension, splitting the critical
          points by how many derivatives vanish, and using Fubini&rsquo;s theorem.
        </p>
      </Theorem>

      <Example title="one variable">
        <p>
          For <M>{"f(x) = x^3 - 3x"}</M>, the critical points are ±1 and the critical values are ∓2: two points on the line. For
          a function that is constant on <M>{"[-0.6, 0.6]"}</M> and smooth elsewhere, the critical points have positive length,
          but their image is the single value 0. Sard does not bound the critical points, only their image.
        </p>
      </Example>

      <Remark title="how smooth?">
        <p>
          Sard&rsquo;s theorem needs enough derivatives: for <M>{"F: \\mathbb{R}^m \\to \\mathbb{R}^n"}</M>, class{" "}
          <M>{"C^k"}</M> with <M>{"k \\ge \\max(1, m - n + 1)"}</M> suffices. Whitney found a <M>{"C^1"}</M> function on{" "}
          <M>{"\\mathbb{R}^2"}</M> that is non-constant along an arc made entirely of critical points, so its critical values fill
          an interval. For smooth maps there is no such problem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does Sard&rsquo;s theorem say?</p>,
      answer: { kind: "choice", options: ["The critical values of a smooth map have measure zero", "The critical points of a smooth map have measure zero", "Every value of a smooth map is regular", "Every smooth map has a critical point"], correct: [0] },
    },
    {
      key: "low",
      rung: "check",
      prompt: <p>If dim M &lt; dim N, what does Sard&rsquo;s theorem say about the image F(M)?</p>,
      answer: { kind: "choice", options: ["It has measure zero, since every point of M is critical", "It is all of N", "It is open", "Nothing, since there are no critical points"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many critical values does f(x) = x³ − 3x have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "flat",
      rung: "apply",
      prompt: <p>In the visualisation, the second function has critical points filling [−0.6, 0.6]. What is the length of that interval?</p>,
      answer: { kind: "numeric", value: 1.2, tolerance: 0.01 },
    },
    {
      key: "fill",
      rung: "apply",
      prompt: <p>Why can no smooth curve γ: ℝ → ℝ² fill a square?</p>,
      answer: { kind: "choice", options: ["Its image has measure zero, by Sard, since every point of ℝ is critical for a map to ℝ²", "Curves are always bounded", "A square is not a manifold", "Smooth curves cannot cross themselves"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove directly that the image of a C¹ map γ: [0, 1] → ℝ² has measure zero.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that γ′ is bounded on [0, 1], so γ is Lipschitz with some constant L.",
          "Splits [0, 1] into N intervals of length 1/N, whose images lie in squares of side 2L/N.",
          "Bounds the total area by N · 4L²/N² = 4L²/N, which tends to 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Space-filling curves exist, such as Peano&rsquo;s. How is that compatible with Sard&rsquo;s theorem?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes space-filling curves are continuous but not differentiable, so neither Sard nor the Lipschitz bound applies.",
          "Contrasts this with the smooth or C¹ case, where the image has measure zero.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Sard&rsquo;s theorem is a tool for showing that good choices exist: most values are regular, so most directions, most
        perturbations, most projections are harmless. Its first great application is to embed every manifold in a Euclidean
        space of fixed dimension.
      </p>
      <p>Next, the Whitney embedding theorem.</p>
    </>
  ),
};
