import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ChartsViz } from "@/components/viz/ChartsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.1.1",
  minutes: 90,
  links: {
    revisits: ["m5.4.3", "m15.3.2", "m15.3.1"],
    foreshadows: ["m26.1.2", "m26.2.1", "m26.5.4"],
  },

  puzzle: (
    <>
      <p>
        You first met manifolds as surfaces sitting inside ℝ³, cut out by equations. But spacetime in general relativity,
        or the set of all rotations of space, or the set of all lines through the origin, do not come sitting inside anything.
        How can calculus be done on a space that is only locally like ℝⁿ, with no surrounding space to borrow derivatives
        from?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The circle has no single coordinate that works everywhere. Two stereographic charts cover it. Move the point and
        watch both coordinates, and how they are related where both are defined.
      </p>
      <ChartsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="topological manifolds">
        <p>
          A <strong>topological n-manifold</strong> is a second countable Hausdorff space in which every point has a
          neighbourhood homeomorphic to an open subset of ℝⁿ. Such a homeomorphism{" "}
          <M>{"\\varphi: U \\to \\varphi(U) \\subseteq \\mathbb{R}^n"}</M> is a <strong>chart</strong>, and a collection of
          charts covering M is an <strong>atlas</strong>. Hausdorff rules out the line with two origins; second countability
          rules out spaces too large to embed in any ℝᴺ, such as the long line.
        </p>
      </Definition>

      <Definition title="smooth structures">
        <p>
          Two charts <M>{"(U, \\varphi)"}</M> and <M>{"(V, \\psi)"}</M> are <strong>smoothly compatible</strong> if the
          transition map <M>{"\\psi \\circ \\varphi^{-1}: \\varphi(U \\cap V) \\to \\psi(U \\cap V)"}</M> is a diffeomorphism
          of open subsets of ℝⁿ. A <strong>smooth atlas</strong> has all its charts compatible, and a{" "}
          <strong>smooth structure</strong> is a maximal smooth atlas. Every smooth atlas lies in a unique maximal one, so in
          practice one gives a small atlas.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          ℝⁿ and its open subsets, with one chart. The sphere Sⁿ, with two stereographic charts whose transition map is{" "}
          <M>{"u \\mapsto u/|u|^2"}</M>. Products of manifolds. The real projective space ℝPⁿ, with n + 1 charts{" "}
          <M>{"x_i \\neq 0"}</M>. Matrix groups such as GL(n, ℝ), an open subset of <M>{"\\mathbb{R}^{n^2}"}</M>. Level sets{" "}
          <M>{"f^{-1}(c)"}</M> of a smooth map at a regular value, by the implicit function theorem.
        </p>
      </Example>

      <Theorem title="exotic structures">
        <p>
          A topological manifold can have more than one smooth structure, even up to diffeomorphism. Milnor showed in 1956 that
          S⁷ has exotic smooth structures (there are 28 on S⁷), and ℝ⁴, alone among the ℝⁿ, has uncountably many. Some
          topological manifolds, in dimension 4 and above, have none at all.
        </p>
      </Theorem>

      <Remark title="why abstract">
        <p>
          Whitney&rsquo;s theorem says every smooth manifold embeds in some ℝᴺ, so nothing is lost by the extrinsic picture.
          But the intrinsic definition is cleaner, makes clear what does not depend on the embedding, and is how the
          manifolds of physics and geometry actually arise.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which conditions, besides being locally Euclidean, does a topological manifold satisfy?</p>,
      answer: { kind: "choice", options: ["Hausdorff and second countable", "Compact and connected", "Simply connected", "Metrisable and complete"], correct: [0] },
    },
    {
      key: "compat",
      rung: "check",
      prompt: <p>When are two charts smoothly compatible?</p>,
      answer: { kind: "choice", options: ["When the transition map between them is a diffeomorphism on the overlap", "When their domains are disjoint", "When they are both linear", "When they have the same domain"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, the chart from N gives u = 2 at some point. What does the chart from S give there?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.01 },
    },
    {
      key: "rp",
      rung: "apply",
      prompt: <p>How many charts does the standard atlas of ℝP³ have?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>The line with two origins is locally Euclidean and second countable. Why is it not a manifold?</p>,
      answer: { kind: "choice", options: ["It is not Hausdorff: the two origins cannot be separated", "It is not connected", "It is not compact", "It has no charts"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the two stereographic charts on S¹ are smoothly compatible.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the charts u = x/(1 − y) and v = x/(1 + y).",
          "Computes uv = x²/(1 − y²) = 1 on the overlap, so the transition map is u ↦ 1/u.",
          "Notes u ↦ 1/u is smooth with smooth inverse on ℝ minus 0, so the charts are compatible.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why might a physicist prefer to describe spacetime by an atlas of charts rather than as a surface inside a larger space?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes there is no observed larger space for spacetime to sit in.",
          "Notes physical laws should not depend on an arbitrary embedding, only on what charts agree on.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With charts in hand, smoothness can be transported from ℝⁿ: a function on a manifold is smooth if it looks smooth in
        every chart. Compatibility of charts is exactly what makes this independent of the chart chosen.
      </p>
      <p>Next, smooth maps between manifolds, and diffeomorphisms.</p>
    </>
  ),
};
