import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { WhitneyViz } from "@/components/viz/WhitneyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.3.4",
  minutes: 90,
  links: {
    revisits: ["m26.3.3", "m26.3.1", "m26.1.3"],
    foreshadows: ["m26.4.1", "m26.5.4", "m26.6.1"],
  },

  puzzle: (
    <>
      <p>
        We defined manifolds abstractly, by charts, so as not to depend on any surrounding space. Did we gain anything? Every
        example so far, from the sphere to SO(3), sits inside some ℝᴺ. Whitney showed this is no accident: every manifold can be
        found inside a Euclidean space, and one of only twice its dimension.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The proof first embeds M in some large ℝᴺ, then projects to one dimension lower, again and again. Choose n and N and see
        whether there is room for a good direction to project along.
      </p>
      <WhitneyViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="embedding in some ℝᴺ">
        <p>
          A compact n-manifold M embeds in some <M>{"\\mathbb{R}^N"}</M>. Cover M by finitely many charts{" "}
          <M>{"\\varphi_i: U_i \\to \\mathbb{R}^n"}</M>, i = 1, …, k, and choose bump functions <M>{"\\rho_i"}</M> supported in{" "}
          <M>{"U_i"}</M>, equal to 1 on open sets <M>{"V_i"}</M> that still cover M. Then{" "}
          <M>{"F = (\\rho_1 \\varphi_1, \\dots, \\rho_k \\varphi_k, \\rho_1, \\dots, \\rho_k): M \\to \\mathbb{R}^{k(n+1)}"}</M> is an
          injective immersion, and so an embedding, since M is compact.
        </p>
      </Theorem>

      <Theorem title="Whitney, easy version">
        <p>
          Every n-manifold embeds in <M>{"\\mathbb{R}^{2n+1}"}</M> and immerses in <M>{"\\mathbb{R}^{2n}"}</M>.
        </p>
        <p>
          <strong>Proof idea.</strong> Suppose M sits in <M>{"\\mathbb{R}^N"}</M>. Projecting along a direction v keeps the map
          injective unless v is parallel to some <M>{"x - y"}</M> with x ≠ y in M, and keeps it an immersion unless v is tangent
          to M somewhere. The bad directions are images of manifolds of dimension 2n and 2n − 1 in the (N − 1)-dimensional space
          of directions. If N − 1 &gt; 2n, Sard says they have measure zero, so a good v exists.
        </p>
      </Theorem>

      <Theorem title="Whitney, strong version">
        <p>
          With much more work, Whitney (1944) showed every n-manifold embeds in <M>{"\\mathbb{R}^{2n}"}</M>, and for n &gt; 1
          immerses in <M>{"\\mathbb{R}^{2n-1}"}</M>. The key new tool, the Whitney trick, removes pairs of intersection points.
        </p>
      </Theorem>

      <Example title="surfaces">
        <p>
          For n = 2 the easy theorem gives embeddings in <M>{"\\mathbb{R}^5"}</M>, the strong one in <M>{"\\mathbb{R}^4"}</M>. This is
          sharp: the Klein bottle and the real projective plane do not embed in <M>{"\\mathbb{R}^3"}</M>, though both immerse there.
          The projective plane immersed in <M>{"\\mathbb{R}^3"}</M> is Boy&rsquo;s surface.
        </p>
      </Example>

      <Remark title="why abstract manifolds, then?">
        <p>
          Embeddings exist but are not canonical, and many natural constructions, such as quotients, the space of lines through
          the origin, or spacetime in relativity, come with no preferred embedding. The intrinsic definition lets us state and
          prove what is true of the manifold itself.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "easy",
      rung: "check",
      prompt: <p>The easy Whitney theorem embeds every n-manifold in which Euclidean space?</p>,
      answer: { kind: "choice", options: ["ℝ²ⁿ⁺¹", "ℝⁿ⁺¹", "ℝ²ⁿ⁻¹", "ℝⁿ²"], correct: [0] },
    },
    {
      key: "tool",
      rung: "check",
      prompt: <p>Which theorem shows a good projection direction exists?</p>,
      answer: { kind: "choice", options: ["Sard’s theorem", "The hairy ball theorem", "The Brouwer fixed point theorem", "The regular level set theorem"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for a surface (n = 2), what is the smallest N for which the projection argument still gives an embedding in ℝᴺ?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "klein",
      rung: "apply",
      prompt: <p>What is the smallest N such that the Klein bottle embeds in ℝᴺ?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "secant",
      rung: "apply",
      prompt: <p>Projecting M ⊂ ℝᴺ along v fails to be injective exactly when&hellip;</p>,
      answer: { kind: "choice", options: ["v is parallel to x − y for some distinct x, y in M", "v is tangent to M at some point", "v is perpendicular to M everywhere", "v has length 1"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the map F = (ρ₁φ₁, …, ρₖφₖ, ρ₁, …, ρₖ) built from charts is injective.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes F(p) = F(q) and picks i with p in Vᵢ, so ρᵢ(p) = 1.",
          "Deduces ρᵢ(q) = 1, so q is in the support of ρᵢ, inside Uᵢ.",
          "Concludes φᵢ(p) = φᵢ(q), so p = q since φᵢ is injective on Uᵢ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the immersion version need only N − 1 &gt; 2n − 1, while the embedding version needs N − 1 &gt; 2n?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes an immersion only needs to avoid tangent directions, a (2n − 1)-dimensional family.",
          "Notes injectivity also needs to avoid secant directions, which come from pairs of points, a 2n-dimensional family.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        So far each tangent vector has lived alone at its point. A smooth choice of one at every point is a vector field, and
        vector fields turn out to be the derivations of the algebra of smooth functions.
      </p>
      <p>Next, vector fields.</p>
    </>
  ),
};
