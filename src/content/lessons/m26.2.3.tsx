import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { BundleViz } from "@/components/viz/BundleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.2.3",
  minutes: 90,
  links: {
    revisits: ["m26.2.2", "m26.1.3", "m15.1.2"],
    foreshadows: ["m26.4.1", "m26.5.4", "m26.7.1"],
  },

  puzzle: (
    <>
      <p>
        A wind blowing over the Earth gives a tangent vector at every point. To say the wind varies smoothly, we must compare
        vectors at nearby points, which live in different tangent spaces. Gluing all the tangent spaces into one manifold
        solves this. For the circle the result is a cylinder; for the sphere it is something stranger.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A vector field on the circle assigns to each angle θ the tangent vector f(θ) times the unit tangent. Seen in the
        tangent bundle, it is a curve on the cylinder S¹ × ℝ crossing each vertical line once. Its zeros are where the curve
        meets the zero section.
      </p>
      <BundleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the tangent bundle">
        <p>
          The <strong>tangent bundle</strong> of an n-manifold M is the disjoint union{" "}
          <M>{"TM = \\bigsqcup_{p \\in M} T_pM"}</M>, with projection <M>{"\\pi: TM \\to M"}</M> sending a vector at p to p. A
          chart <M>{"(U, x^1, \\dots, x^n)"}</M> of M gives a chart on <M>{"\\pi^{-1}(U)"}</M>, sending{" "}
          <M>{"\\sum v^i \\, \\partial / \\partial x^i |_p"}</M> to <M>{"(x(p), v^1, \\dots, v^n) \\in \\mathbb{R}^{2n}"}</M>.
        </p>
      </Definition>

      <Theorem title="TM is a manifold">
        <p>
          These charts make TM a smooth manifold of dimension 2n, and π a smooth submersion. The transition maps are{" "}
          <M>{"(x, v) \\mapsto (\\tilde{x}(x), J(x) v)"}</M>, where J is the Jacobian of the transition map of M: smooth in x,
          linear in v. Hausdorffness and second countability come from those of M.
        </p>
      </Theorem>

      <Definition title="vector bundles and sections">
        <p>
          TM is the model <strong>vector bundle</strong> of rank n: locally it looks like <M>{"U \\times \\mathbb{R}^n"}</M>, with
          linear transition maps on the fibres. A <strong>section</strong> is a smooth map <M>{"X: M \\to TM"}</M> with{" "}
          <M>{"\\pi \\circ X = \\mathrm{id}"}</M>: a smooth vector field. The <strong>zero section</strong> picks the zero
          vector at each point. Partitions of unity let us glue local sections into global ones.
        </p>
      </Definition>

      <Example title="trivial and non-trivial">
        <p>
          The circle&rsquo;s unit tangent field never vanishes, and it gives a diffeomorphism{" "}
          <M>{"TS^1 \\cong S^1 \\times \\mathbb{R}"}</M>: the bundle is <strong>trivial</strong>. A rank n bundle is trivial
          exactly when it has n sections that are linearly independent at every point. The hairy ball theorem says every
          vector field on <M>{"S^2"}</M> vanishes somewhere, so <M>{"TS^2"}</M> is not trivial.
        </p>
      </Example>

      <Remark title="the differential, globally">
        <p>
          A smooth map <M>{"F: M \\to N"}</M> gives <M>{"dF: TM \\to TN"}</M>, equal to <M>{"dF_p"}</M> on each fibre. The
          chain rule becomes <M>{"d(G \\circ F) = dG \\circ dF"}</M>, so T is a functor from manifolds to manifolds.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dim",
      rung: "check",
      prompt: <p>If M is a 3-manifold, what is the dimension of TM?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "sec",
      rung: "check",
      prompt: <p>What is a section of the tangent bundle?</p>,
      answer: { kind: "choice", options: ["A smooth map X: M → TM with π ∘ X = id, that is, a smooth vector field", "A tangent space at one point", "A chart on TM", "The projection π"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with c = 0, a = 1 and k = 2, how many zeros does the field have?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "nonzero",
      rung: "apply",
      prompt: <p>In the visualisation, which setting gives a field with no zeros?</p>,
      answer: { kind: "choice", options: ["c = 1.5, a = 1", "c = 0, a = 1", "c = 0.5, a = 1", "c = 0, a = 2"], correct: [0] },
    },
    {
      key: "triv",
      rung: "apply",
      prompt: <p>Why is the tangent bundle of S² not trivial?</p>,
      answer: { kind: "choice", options: ["A trivialisation would give a nowhere vanishing vector field, which the hairy ball theorem forbids", "S² is not a manifold", "S² has dimension 3", "S² is not compact"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the transition maps of TM are smooth, given the transition maps of M are.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the change of basis rule ∂/∂xⁱ = Σ (∂x̃ʲ/∂xⁱ) ∂/∂x̃ʲ to find the new components.",
          "Writes the transition map as (x, v) ↦ (x̃(x), J(x)v).",
          "Notes each entry of J is a partial derivative of a smooth map, so the whole map is smooth.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The Möbius band is also a rank 1 bundle over the circle. Why is it not trivial, unlike TS¹?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a trivial line bundle has a nowhere vanishing section.",
          "Argues a section of the Möbius band must change sign going round once, so it has a zero.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With differentials in hand, we can classify smooth maps by the rank of dF. Injective differentials give immersions,
        surjective ones give submersions, and each has a normal form in suitable coordinates.
      </p>
      <p>Next, immersions and submersions, and the constant rank theorem.</p>
    </>
  ),
};
