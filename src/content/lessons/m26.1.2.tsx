import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SmoothnessViz } from "@/components/viz/SmoothnessViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.1.2",
  minutes: 85,
  links: {
    revisits: ["m26.1.1", "m12.4.1", "m5.2.3"],
    foreshadows: ["m26.2.2", "m26.3.1", "m26.7.1"],
  },

  puzzle: (
    <>
      <p>
        The function x³ from ℝ to ℝ is a smooth homeomorphism. Its inverse, the cube root, is not differentiable at 0. Is
        the real line with the usual chart the same smooth manifold as the real line with the chart x ↦ x³? They have
        different smooth functions, yet there is a sense in which they are the same.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Smoothness comes in grades. Compare each function with its first two derivatives.</p>
      <SmoothnessViz />
    </>
  ),

  theory: (
    <>
      <Definition title="smooth maps">
        <p>
          A map <M>{"F: M \\to N"}</M> between smooth manifolds is <strong>smooth</strong> if for every p there are charts{" "}
          <M>{"(U, \\varphi)"}</M> at p and <M>{"(V, \\psi)"}</M> at F(p), with <M>{"F(U) \\subseteq V"}</M>, such that the
          coordinate representation <M>{"\\psi \\circ F \\circ \\varphi^{-1}"}</M> is smooth as a map between open subsets of
          Euclidean spaces. By compatibility, this then holds for all such charts. A smooth function is a smooth map to ℝ;
          they form an algebra <M>{"C^\\infty(M)"}</M>.
        </p>
      </Definition>

      <Definition title="diffeomorphisms">
        <p>
          A <strong>diffeomorphism</strong> is a smooth bijection with smooth inverse. Diffeomorphic manifolds are the same as
          far as smooth geometry can tell. A smooth homeomorphism need not be a diffeomorphism: x ↦ x³ on ℝ is one example.
        </p>
      </Definition>

      <Example title="the cube chart">
        <p>
          Let <M>{"\\tilde{\\mathbb{R}}"}</M> be ℝ with the single chart <M>{"\\psi(x) = x^3"}</M>. The identity map from ℝ is
          not a diffeomorphism, since in coordinates it is <M>{"x \\mapsto x^3"}</M>, whose inverse is not smooth. So the two
          smooth structures are different. But <M>{"x \\mapsto x^{1/3}"}</M>, from <M>{"\\tilde{\\mathbb{R}}"}</M> to ℝ, is in
          coordinates <M>{"x \\mapsto x"}</M>: a diffeomorphism. Different structures, same smooth manifold up to
          diffeomorphism.
        </p>
      </Example>

      <Theorem title="properties">
        <p>
          Compositions of smooth maps are smooth. Inclusions of open submanifolds and projections from products are smooth. A
          map into a product is smooth exactly when its components are. Smoothness is local: a map is smooth if it is smooth
          near every point.
        </p>
      </Theorem>

      <Remark title="why C∞">
        <p>
          One could use Cᵏ manifolds for finite k, but derivatives of a Cᵏ map are only Cᵏ⁻¹, so the class is not stable under
          the operations of geometry. Smooth (C∞) is stable, and there are enough smooth functions to separate points and
          build bumps, unlike analytic functions, which are determined everywhere by their behaviour near one point.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How is smoothness of a map between manifolds defined?</p>,
      answer: { kind: "choice", options: ["Its coordinate representations in charts are smooth", "It is continuous", "It is a homeomorphism", "It is linear in each chart"], correct: [0] },
    },
    {
      key: "diffeo",
      rung: "check",
      prompt: <p>Why is x ↦ x³ on ℝ (with the usual chart) not a diffeomorphism?</p>,
      answer: { kind: "choice", options: ["Its inverse, the cube root, is not differentiable at 0", "It is not a bijection", "It is not smooth", "It is not continuous"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, x²|x| is Cᵏ for which largest k?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "flat",
      rung: "apply",
      prompt: <p>Why is the function equal to exp(−1/x) for x &gt; 0 and 0 otherwise not analytic at 0?</p>,
      answer: { kind: "choice", options: ["All its derivatives at 0 vanish, so its Taylor series is 0, but the function is not 0 for x > 0", "It is not continuous at 0", "Its derivative does not exist at 0", "It is not bounded"], correct: [0] },
    },
    {
      key: "comp",
      rung: "apply",
      prompt: <p>F: M → N and G: N → P are smooth. What can be said of G ∘ F?</p>,
      answer: { kind: "choice", options: ["It is smooth, by the chain rule in coordinates", "It need not be continuous", "It is a diffeomorphism", "It is smooth only if M = P"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the smoothness of F at p does not depend on the charts chosen.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the representation in other charts as (ψ′ ∘ ψ⁻¹) ∘ (ψ ∘ F ∘ φ⁻¹) ∘ (φ ∘ φ′⁻¹).",
          "Notes the outer maps are transition maps, smooth by compatibility.",
          "Concludes by the chain rule that the new representation is smooth.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why would analytic manifolds, with analytic transition maps, make partitions of unity impossible?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes an analytic function vanishing on an open set vanishes on its whole connected domain.",
          "Concludes there are no analytic bump functions, which partitions of unity need.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Smooth functions on a manifold are plentiful precisely because non-analytic smooth functions exist: one can make a
        function that is 1 here and 0 there, smoothly.
      </p>
      <p>Next, bump functions and partitions of unity, the tool that glues local constructions into global ones.</p>
    </>
  ),
};
