import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { RankViz } from "@/components/viz/RankViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.3.1",
  minutes: 90,
  links: {
    revisits: ["m26.2.2", "m12.4.3", "m5.4.2"],
    foreshadows: ["m26.3.2", "m26.3.3", "m26.3.4"],
  },

  puzzle: (
    <>
      <p>
        The curve t ↦ (t², t³) is smooth and one-to-one, yet its image has a sharp cusp at the origin. The figure eight has no
        corners, yet it crosses itself. What exactly goes wrong in each, and what is the right notion of a smooth curve
        sitting nicely in the plane?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a curve and slide t. The arrow is the velocity γ&prime;(t), the image of the unit vector under dγ. The rank of
        dγ is 1 when the velocity is non-zero and 0 when it vanishes.
      </p>
      <RankViz />
    </>
  ),

  theory: (
    <>
      <Definition title="immersions and submersions">
        <p>
          A smooth map <M>{"F: M \\to N"}</M> is an <strong>immersion</strong> if <M>{"dF_p"}</M> is injective at every p, and a{" "}
          <strong>submersion</strong> if <M>{"dF_p"}</M> is surjective at every p. The rank of F at p is the rank of{" "}
          <M>{"dF_p"}</M>; F has <strong>constant rank</strong> r if this is r everywhere. An immersion has rank dim M, a
          submersion rank dim N.
        </p>
      </Definition>

      <Theorem title="the constant rank theorem">
        <p>
          If F has constant rank r near p, there are charts around p and F(p) in which F takes the form{" "}
          <M>{"(x^1, \\dots, x^m) \\mapsto (x^1, \\dots, x^r, 0, \\dots, 0)"}</M>. In particular, an immersion locally looks like
          the inclusion <M>{"\\mathbb{R}^m \\to \\mathbb{R}^n"}</M>, and a submersion locally looks like the projection{" "}
          <M>{"\\mathbb{R}^m \\to \\mathbb{R}^n"}</M>.
        </p>
        <p>
          <strong>Proof idea.</strong> It is the rank theorem of multivariable calculus, applied in charts. The proof uses the
          inverse function theorem twice: once to straighten the domain, once to straighten the image.
        </p>
      </Theorem>

      <Example title="three curves">
        <p>
          The circle t ↦ (cos t, sin t) has velocity of length 1 everywhere: an immersion. The figure eight
          t ↦ (sin 2t, sin t) is also an immersion, but it is not injective. The cusp t ↦ (t², t³) is injective, but its
          velocity (2t, 3t²) vanishes at t = 0, so it is not an immersion there. An immersion can have no cusps; it can still
          cross itself.
        </p>
      </Example>

      <Definition title="embeddings">
        <p>
          An <strong>embedding</strong> is an immersion that is a homeomorphism onto its image, with the subspace topology.
          The circle is embedded. An injective immersion can still fail to be an embedding: the figure six, a line that winds
          into itself and approaches its own middle, has image topology different from the line&rsquo;s. For a compact domain,
          every injective immersion is an embedding.
        </p>
      </Definition>

      <Remark title="local and global">
        <p>
          Being an immersion or a submersion is a local condition on the differential. Being an embedding is global: it asks
          also that F is injective and that the topology matches. The constant rank theorem settles the local picture; the
          global picture needs more.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "imm",
      rung: "check",
      prompt: <p>When is F: M → N an immersion?</p>,
      answer: { kind: "choice", options: ["When dFₚ is injective at every p", "When F is injective", "When dFₚ is surjective at every p", "When F is a homeomorphism"], correct: [0] },
    },
    {
      key: "sub",
      rung: "check",
      prompt: <p>Which map is a submersion?</p>,
      answer: { kind: "choice", options: ["The projection ℝ³ → ℝ², (x, y, z) ↦ (x, y)", "The inclusion ℝ² → ℝ³", "A constant map ℝ² → ℝ²", "The cusp t ↦ (t², t³)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at what value of t does the cusp t ↦ (t², t³) have rank 0?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "eight",
      rung: "apply",
      prompt: <p>Why is the figure eight t ↦ (sin 2t, sin t), for t in [0, 2π), not an embedding?</p>,
      answer: { kind: "choice", options: ["It is not injective: t = 0 and t = π both go to the origin", "Its velocity vanishes somewhere", "It is not smooth", "Its image is not compact"], correct: [0] },
    },
    {
      key: "rank",
      rung: "apply",
      prompt: <p>What is the rank of F(x, y) = (x, x², x³) from ℝ² to ℝ³ at any point?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if F: M → N is an immersion, then dim M ≤ dim N; and if F is a submersion, then dim M ≥ dim N.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes dFₚ is a linear map from a space of dimension dim M to one of dimension dim N.",
          "Uses that an injective linear map cannot lower dimension, so dim M ≤ dim N.",
          "Uses that a surjective linear map cannot raise dimension, so dim M ≥ dim N.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The line t ↦ (t, αt) on the torus ℝ²/ℤ², with α irrational, is an injective immersion. Why is it not an embedding?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the image is dense in the torus.",
          "Argues points far apart on the line come arbitrarily close in the torus, so the topologies differ.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The image of an embedding is a subset of N that is a manifold in its own right, sitting inside N nicely. Such subsets
        can also arise as level sets of submersions, which is how most examples are found.
      </p>
      <p>Next, embedded submanifolds and the regular level set theorem.</p>
    </>
  ),
};
