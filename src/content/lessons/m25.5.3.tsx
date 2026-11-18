import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CupViz } from "@/components/viz/CupViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.5.3",
  minutes: 95,
  links: {
    revisits: ["m25.5.2", "m25.5.1", "m25.3.3"],
    foreshadows: ["m25.5.4", "m25.6.1", "m25.6.2"],
  },

  puzzle: (
    <>
      <p>
        The torus and the wedge S¹ ∨ S¹ ∨ S² have exactly the same homology groups: ℤ, ℤ², ℤ. Yet they are surely different:
        on the torus, the two loops cross and together span the surface; in the wedge, the loops and the sphere just touch
        at a point. What algebra sees the difference?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose two degree-1 classes on the torus. Their cup product counts, with signs, the crossings of two curves that
        represent them.
      </p>
      <CupViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the cup product">
        <p>
          For cochains <M>{"\\varphi \\in C^p(X; R)"}</M> and <M>{"\\psi \\in C^q(X; R)"}</M>, with R a ring, define{" "}
          <M>{"\\varphi \\smile \\psi"}</M> on a (p+q)-simplex by evaluating φ on its front p-face and ψ on its back q-face:
        </p>
        <p>
          <M>{"(\\varphi \\smile \\psi)(\\sigma) = \\varphi(\\sigma|_{[v_0, \\dots, v_p]}) \\, \\psi(\\sigma|_{[v_p, \\dots, v_{p+q}]})."}</M>
        </p>
        <p>
          It satisfies <M>{"\\delta(\\varphi \\smile \\psi) = \\delta\\varphi \\smile \\psi + (-1)^p \\varphi \\smile \\delta\\psi"}</M>,
          so it passes to cohomology.
        </p>
      </Definition>

      <Theorem title="the cohomology ring">
        <p>
          The cup product makes <M>{"H^*(X; R) = \\bigoplus_n H^n(X; R)"}</M> a graded ring with identity, the class of the
          constant cochain 1. It is <strong>graded commutative</strong>:{" "}
          <M>{"a \\smile b = (-1)^{pq}\\, b \\smile a"}</M> for a of degree p and b of degree q. Maps induce ring homomorphisms,
          so the ring is a homotopy invariant.
        </p>
      </Theorem>

      <Example title="the torus against the wedge">
        <p>
          On the torus, with α and β dual to the two circles, <M>{"\\alpha \\smile \\beta"}</M> generates H², while{" "}
          <M>{"\\alpha \\smile \\alpha = 0"}</M>. On S¹ ∨ S¹ ∨ S², every product of degree-1 classes is 0, because the cup
          product on a wedge splits into the products on each piece, and a circle has no H². The rings differ, so the spaces
          are not homotopy equivalent.
        </p>
      </Example>

      <Example title="projective spaces">
        <p>
          <M>{"H^*(\\mathbb{R}P^n; \\mathbb{Z}/2) = (\\mathbb{Z}/2)[a]/(a^{n+1})"}</M> with a in degree 1, and{" "}
          <M>{"H^*(\\mathbb{C}P^n; \\mathbb{Z}) = \\mathbb{Z}[b]/(b^{n+1})"}</M> with b in degree 2. The second shows that ℂP²
          is not homotopy equivalent to S² ∨ S⁴, though their homology agrees, since b² ≠ 0.
        </p>
      </Example>

      <Remark title="Borsuk–Ulam by cup products">
        <p>
          An odd map <M>{"S^n \\to S^{n-1}"}</M> would induce a map <M>{"\\mathbb{R}P^n \\to \\mathbb{R}P^{n-1}"}</M> sending a to
          a. But <M>{"a^n \\neq 0"}</M> in the first ring and <M>{"a^n = 0"}</M> in the second: a contradiction. This gives the
          cleanest proof of the Borsuk–Ulam theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "deg",
      rung: "check",
      prompt: <p>If a has degree p and b has degree q, what is the degree of a ∪ b?</p>,
      answer: { kind: "choice", options: ["p + q", "pq", "p − q", "max(p, q)"], correct: [0] },
    },
    {
      key: "comm",
      rung: "check",
      prompt: <p>For classes a and b of degree 1, how does b ∪ a compare with a ∪ b?</p>,
      answer: { kind: "choice", options: ["b ∪ a = −(a ∪ b)", "They are equal", "b ∪ a = 0", "There is no relation"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set x = α + β and y = α − β. What multiple of γ is x ∪ y?</p>,
      answer: { kind: "numeric", value: -2 },
    },
    {
      key: "sq",
      rung: "apply",
      prompt: <p>On the torus, why is α ∪ α = 0?</p>,
      answer: { kind: "choice", options: ["Graded commutativity gives α ∪ α = −(α ∪ α), and H² of the torus is ℤ, which has no element of order 2", "Cup products always vanish", "α is zero", "Because H¹ is free of rank 2"], correct: [0] },
    },
    {
      key: "cp2",
      rung: "apply",
      prompt: <p>In H*(ℂP³; ℤ) = ℤ[b]/(b⁴), in which degree does b³ lie?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Explain why the torus and S¹ ∨ S¹ ∨ S² are not homotopy equivalent, though their homology groups agree.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a homotopy equivalence would induce an isomorphism of cohomology rings.",
          "States that on the torus α ∪ β generates H², a non-zero product of degree-1 classes.",
          "States that on the wedge all such products vanish, so the rings differ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The cup product on the torus counted crossings of curves. What might the corresponding statement be for a closed surface of genus 2?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Suggests four basic curves, a pair round each handle, with each pair crossing once.",
          "Suggests the cup product on H¹ is the intersection form, which pairs them up.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        On the torus, the cup product pairing of H¹ with itself into H² ≅ ℤ was perfect: it had determinant ±1. That is no
        accident of the torus. It holds for every closed orientable manifold.
      </p>
      <p>
        Next, Poincaré duality: on a closed orientable n-manifold, Hᵏ and Hₙ₋ₖ are isomorphic, and the cup product pairing is
        non-degenerate.
      </p>
    </>
  ),
};
