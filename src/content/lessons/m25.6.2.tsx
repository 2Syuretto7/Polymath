import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { FibrationViz } from "@/components/viz/FibrationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.6.2",
  minutes: 95,
  links: {
    revisits: ["m25.6.1", "m25.2.1", "m25.1.2"],
    foreshadows: ["m26.2.3", "m26.7.4", "m30.5.3"],
  },

  puzzle: (
    <>
      <p>
        A covering map has discrete fibres, and from it we computed π₁ of the circle. The Hopf map S³ → S² has circles as
        fibres. Is there a version of covering space theory for maps with fibres that are themselves spaces, and can it
        compute π₃(S²)?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a fibration and read its long exact sequence of homotopy groups.</p>
      <FibrationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="fibrations">
        <p>
          A map <M>{"p: E \\to B"}</M> has the <strong>homotopy lifting property</strong> for a space X if, given a homotopy{" "}
          <M>{"g_t: X \\to B"}</M> and a lift of <M>{"g_0"}</M> to E, there is a lift of the whole homotopy starting there. A{" "}
          <strong>(Serre) fibration</strong> has this for all discs. The fibre over b is <M>{"F = p^{-1}(b)"}</M>; over a
          path-connected base all fibres are homotopy equivalent.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          Covering maps (fibres discrete). Projections <M>{"B \\times F \\to B"}</M>. Fibre bundles, which are locally products,
          such as the Möbius band over the circle, the Hopf maps <M>{"S^1 \\to S^3 \\to S^2"}</M> and{" "}
          <M>{"S^3 \\to S^7 \\to S^4"}</M>, and the tangent sphere bundle of a manifold. The path fibration{" "}
          <M>{"\\Omega B \\to PB \\to B"}</M>, sending a path from the base point to its end, with fibre the loop space and a
          contractible total space.
        </p>
      </Example>

      <Theorem title="the long exact sequence">
        <p>For a fibration <M>{"F \\to E \\to B"}</M> with B path-connected, there is an exact sequence</p>
        <p>
          <M>{"\\cdots \\to \\pi_k(F) \\to \\pi_k(E) \\to \\pi_k(B) \\xrightarrow{\\partial} \\pi_{k-1}(F) \\to \\cdots \\to \\pi_0(E) \\to 0."}</M>
        </p>
        <p>
          <strong>Proof idea.</strong> A map <M>{"(D^k, S^{k-1}) \\to (B, b)"}</M> lifts, by homotopy lifting, to a map of the
          disc into E whose boundary lies in F: that defines ∂. One shows{" "}
          <M>{"\\pi_k(E, F) \\cong \\pi_k(B)"}</M> and uses the exact sequence of the pair (E, F).
        </p>
      </Theorem>

      <Example title="computations">
        <p>
          The Hopf fibration gives <M>{"\\pi_k(S^3) \\cong \\pi_k(S^2)"}</M> for k ≥ 3, so <M>{"\\pi_3(S^2) \\cong \\mathbb{Z}"}</M>.
          The path fibration gives <M>{"\\pi_k(\\Omega B) \\cong \\pi_{k+1}(B)"}</M>. The fibration{" "}
          <M>{"SO(n) \\to SO(n+1) \\to S^n"}</M> computes homotopy groups of rotation groups:{" "}
          <M>{"\\pi_1(SO(3)) \\cong \\mathbb{Z}/2"}</M>, the fact behind the belt trick and the spin of the electron.
        </p>
      </Example>

      <Remark title="where next">
        <p>
          The Serre spectral sequence computes the homology of E from that of F and B, and with it Serre found that the
          homotopy groups of spheres are finite except for πₙ(Sⁿ) and π₄ₖ₋₁(S²ᵏ). Fibrations and their cousins, vector bundles,
          lead into characteristic classes and the topology of manifolds.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hlp",
      rung: "check",
      prompt: <p>What property defines a fibration?</p>,
      answer: { kind: "choice", options: ["Homotopies in the base lift to the total space, given a lift at the start", "It is a local homeomorphism", "Its fibres are discrete", "It is injective"], correct: [0] },
    },
    {
      key: "path",
      rung: "check",
      prompt: <p>What is the fibre of the path fibration PB → B?</p>,
      answer: { kind: "choice", options: ["The loop space ΩB", "B itself", "A point", "The universal cover of B"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, π₇(S⁴) ≅ ℤ ⊕ ℤ/12. What is the order of its torsion subgroup?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "hopf",
      rung: "apply",
      prompt: <p>How does the Hopf fibration show π₃(S²) ≅ ℤ?</p>,
      answer: { kind: "choice", options: ["The fibre S¹ has πₖ = 0 for k ≥ 2, so π₃(S³) → π₃(S²) is an isomorphism", "S² is a quotient of S³", "H₃(S²) = ℤ", "S³ is contractible"], correct: [0] },
    },
    {
      key: "loop",
      rung: "apply",
      prompt: <p>Using the path fibration, what is π₂(ΩS³)?</p>,
      answer: { kind: "choice", options: ["ℤ, since it equals π₃(S³)", "0", "ℤ/2", "π₂(S³)"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use the long exact sequence of the covering ℤ → ℝ → S¹ to show π₁(S¹) ≅ ℤ as sets, and πₖ(S¹) = 0 for k ≥ 2.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes ℝ is contractible, so all its homotopy groups vanish.",
          "Uses exactness to make ∂: π₁(S¹) → π₀(ℤ) a bijection onto ℤ.",
          "Notes πₖ(ℤ) = 0 for k ≥ 1 forces πₖ(S¹) = 0 for k ≥ 2.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The tangent vectors of length 1 on S² form a space fibred over S² with circle fibres. It is ℝP³, not S² × S¹. How could homotopy groups tell these apart?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes π₁(ℝP³) = ℤ/2 while π₁(S² × S¹) = ℤ.",
          "Relates the difference to the connecting map π₂(S²) → π₁(S¹), multiplication by 2 here.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        This completes the course. From CW complexes and covering spaces through homology, cohomology and duality to homotopy
        groups and fibrations, you have the tools that the rest of geometry and topology take for granted.
      </p>
      <p>
        Next, these ideas meet calculus. Smooth manifolds bring tangent bundles, differential forms and de Rham cohomology,
        where Poincaré duality becomes integration.
      </p>
    </>
  ),
};
