import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ConstrainedRayleighViz } from "@/components/viz/ConstrainedRayleighViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.6.3",
  minutes: 90,
  links: {
    revisits: ["m33.6.2", "m33.6.1", "m23.5.3"],
    foreshadows: ["m33.4.3", "m33.5.1", "m33.4.4"],
  },

  puzzle: (
    <>
      <p>
        Among all shapes of a vibrating string with the same total amount of displacement, which one stores the least
        bending energy? Minimising energy alone gives the flat string. Adding the constraint changes everything: the answer
        is the string&rsquo;s fundamental mode, and the energy at the minimum is its lowest frequency squared. Why should a
        constraint produce an eigenvalue?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Mix the first two modes, keeping the size fixed, and watch the energy.</p>
      <ConstrainedRayleighViz />
    </>
  ),

  theory: (
    <>
      <Definition title="integral constraints">
        <p>
          Let <M>{"I[w] = \\tfrac12\\int_U |Dw|^2\\,dx"}</M> and <M>{"J[w] = \\int_U G(w)\\,dx"}</M>. We minimise I over
          the set <M>{"\\mathcal{A} = \\{w \\in H^1_0(U) : J[w] = 0\\}"}</M>. The direct method still applies: a
          minimising sequence is bounded in <M>{"H^1_0"}</M>, and by the compactness of the embedding into{" "}
          <M>{"L^2"}</M>, a subsequence converges strongly in <M>{"L^2"}</M>, which keeps the limit in the constraint set.
        </p>
      </Definition>

      <Theorem title="the Lagrange multiplier">
        <p>
          If u minimises I over <M>{"\\mathcal{A}"}</M> and <M>{"g = G'"}</M> satisfies suitable growth bounds, with g(u)
          not identically zero, then there is a real number λ such that{" "}
          <M>{"\\int_U Du \\cdot Dv\\,dx = \\lambda \\int_U g(u)v\\,dx"}</M> for all v in <M>{"H^1_0"}</M>. That is, u is a
          weak solution of the nonlinear eigenvalue problem <M>{"-\\Delta u = \\lambda g(u)"}</M>. The proof perturbs u in
          two directions, using one to stay on the constraint, exactly as for the finite-dimensional multiplier rule.
        </p>
      </Theorem>

      <Example title="the first eigenvalue">
        <p>
          Take <M>{"G(z) = z^2 - 1"}</M>, so the constraint is <M>{"\\int u^2 = 1"}</M>. The minimiser satisfies{" "}
          <M>{"-\\Delta u = \\lambda u"}</M>, and testing with u shows <M>{"\\lambda = \\int|Du|^2"}</M>, the minimum value
          of the <strong>Rayleigh quotient</strong>. So <M>{"\\lambda_1 = \\min \\int|Du|^2 / \\int u^2"}</M>, the first
          Dirichlet eigenvalue. On (0, π) the minimiser is a multiple of sin x and λ₁ = 1; the minimiser can be chosen
          positive, and λ₁ is simple.
        </p>
      </Example>

      <Remark title="pointwise constraints and obstacles">
        <p>
          Constraints can also be pointwise. Requiring |u| = 1, for maps into a sphere, leads to the harmonic map equation
          with a multiplier |Du|². Requiring u ≥ ψ for an obstacle ψ leads to a <strong>variational inequality</strong>
          and a free boundary where u leaves the obstacle, a model for elastic membranes and for American options in
          finance.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mult",
      rung: "check",
      prompt: <p>What equation does a minimiser of ½∫|Du|² subject to ∫u² = 1 satisfy?</p>,
      answer: { kind: "choice", options: ["−Δu = λu for some real λ", "−Δu = 0", "Δu = 1", "u = 0"], correct: [0] },
    },
    {
      key: "rq",
      rung: "check",
      prompt: <p>What is the first Dirichlet eigenvalue in terms of the Rayleigh quotient?</p>,
      answer: { kind: "choice", options: ["The minimum of ∫|Du|² / ∫u² over non-zero u in H¹₀", "The maximum of ∫u²", "The average of all eigenvalues", "Always 1"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set θ = 45°. What is ∫u′²?</p>,
      answer: { kind: "numeric", value: 2.5, tolerance: 0.01 },
    },
    {
      key: "lam",
      rung: "apply",
      prompt: <p>What is the first Dirichlet eigenvalue of −d²/dx² on (0, 2π)?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "compact",
      rung: "apply",
      prompt: <p>Why does the limit of a minimising sequence still satisfy ∫u² = 1?</p>,
      answer: { kind: "choice", options: ["The embedding of H¹₀ into L² is compact, so a subsequence converges strongly in L²", "Weak limits always preserve norms", "The constraint is linear", "The sequence is constant"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if −u″ = λu on (0, π) with u(0) = u(π) = 0 and ∫u² = 1, then λ = ∫u′².</p>,
      answer: {
        kind: "written",
        rubric: [
          "Multiplies the equation by u and integrates over (0, π).",
          "Integrates −u″u by parts, using the boundary values, to get ∫u′².",
          "Concludes λ∫u² = ∫u′², so λ = ∫u′².",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the second eigenvalue can be found by minimising the Rayleigh quotient over functions orthogonal to the first eigenfunction.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that eigenfunctions of the Dirichlet Laplacian are orthogonal and form a basis.",
          "Expands u in the basis and writes the Rayleigh quotient as a weighted average of eigenvalues.",
          "Concludes that excluding the first mode leaves λ₂ as the minimum. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The course on graduate PDE is complete, and with it the mathematics track of Polymath. From counting and proof to
        Sobolev spaces and the calculus of variations, every course has been building a single habit: to ask what is true,
        and why.
      </p>
      <p>Next, revisit any course from the map, or continue with the philosophy track.</p>
    </>
  ),
};
