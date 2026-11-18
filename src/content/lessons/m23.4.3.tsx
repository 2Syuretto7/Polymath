import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { NormAttainViz } from "@/components/viz/NormAttainViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.4.3",
  minutes: 85,
  links: {
    revisits: ["m23.4.2", "m23.3.1", "m22.5.3"],
    foreshadows: ["m23.5.2", "m23.6.2", "m23.6.3"],
  },

  puzzle: (
    <>
      <p>
        On a Hilbert space every bounded functional attains its norm, at its Riesz vector. Here is one that does not:
        φ(x) = x₁/2 + x₂/4 + x₃/8 + … on sequences tending to 0. It has norm 1, but no x of norm 1 gives φ(x) = 1. What
        property does ℓ² have, and this space lack?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Try to make φ(x) reach 1 with a sequence of norm 1.</p>
      <NormAttainViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the canonical embedding">
        <p>Each <M>{"x \\in X"}</M> defines a functional on <M>{"X^*"}</M> by evaluation:</p>
        <MD>{"J(x)(\\varphi) = \\varphi(x)."}</MD>
        <p>
          <M>{"J : X \\to X^{**}"}</M> is linear, and an isometry by Hahn-Banach. <M>X</M> is <strong>reflexive</strong> if{" "}
          <M>J</M> is onto. A reflexive space is complete, being isometric to a dual space.
        </p>
      </Definition>

      <Example title="which spaces are reflexive">
        <p>
          Finite-dimensional spaces, Hilbert spaces, and <M>{"L^p"}</M> for <M>{"1 < p < \\infty"}</M>, since{" "}
          <M>{"(L^p)^{**} = (L^q)^* = L^p"}</M>. Not reflexive: <M>{"c_0"}</M>, whose dual is <M>{"\\ell^1"}</M> and double
          dual <M>{"\\ell^\\infty"}</M>; <M>{"\\ell^1"}</M> and <M>{"L^1"}</M>; and <M>{"C[0, 1]"}</M>. Reflexivity is not just
          isomorphism to the double dual: James built a space isometric to its double dual by some other map, though not by{" "}
          <M>J</M>.
        </p>
      </Example>

      <Theorem title="characterisations">
        <p>
          <strong>Kakutani:</strong> <M>X</M> is reflexive exactly when its closed unit ball is weakly compact. Combined with
          Eberlein-Šmulian, every bounded sequence in a reflexive space has a weakly convergent subsequence.{" "}
          <strong>James:</strong> a Banach space is reflexive exactly when every bounded functional attains its norm on the
          closed unit ball.
        </p>
      </Theorem>

      <Remark title="the direct method">
        <p>
          In a reflexive space, a continuous convex functional that tends to infinity as ‖x‖ does attains its minimum: take a
          minimising sequence, which is bounded; extract a weakly convergent subsequence; and use weak lower semicontinuity of
          convex functionals. This is how solutions to many differential equations are found, in Sobolev spaces.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a normed space X reflexive?</p>,
      answer: { kind: "choice", options: ["When the canonical map J from X to its double dual is onto", "When X equals its dual", "When X is a Hilbert space", "When X is finite-dimensional"], correct: [0] },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these spaces is not reflexive?</p>,
      answer: { kind: "choice", options: ["c₀", "ℓ²", "L³[0, 1]", "ℝ⁵"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with three ones and then zeros, what is φ(x)?</p>,
      answer: { kind: "numeric", value: 0.875 },
    },
    {
      key: "james",
      rung: "apply",
      prompt: <p>What does the functional in the visualisation show about c₀, by James&rsquo;s theorem?</p>,
      answer: { kind: "choice", options: ["c₀ is not reflexive, since φ does not attain its norm", "c₀ is reflexive", "c₀ is not complete", "φ is unbounded"], correct: [0] },
    },
    {
      key: "lp",
      rung: "apply",
      prompt: <p>For which p is Lᵖ[0, 1] reflexive?</p>,
      answer: { kind: "choice", options: ["1 < p < ∞", "p = 1 only", "p = ∞ only", "All p"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that in a Hilbert space H, every bounded functional φ ≠ 0 attains its norm on the closed unit ball.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes φ = ⟨·, y⟩ by Riesz, with ‖φ‖ = ‖y‖.",
          "Takes x = y/‖y‖, which has norm 1.",
          "Computes φ(x) = ⟨y, y⟩/‖y‖ = ‖y‖ = ‖φ‖.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the φ of the visualisation never reaches 1 on the unit ball of c₀, even though its norm is 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Bounds |φ(x)| ≤ Σ |xₙ|/2ⁿ ≤ 1 when every |xₙ| ≤ 1, and notes values 1 − 2⁻ᴺ show the norm is 1.",
          "Notes x in c₀ tends to 0, so some |xₙ| < 1, making the sum strictly below 1.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        For a matrix, the eigenvalues tell you nearly everything. For an operator on an infinite-dimensional space, T − λI
        can fail to be invertible without λ being an eigenvalue at all.
      </p>
      <p>
        Next, the spectrum: the set of λ where T − λI has no bounded inverse, why it is a non-empty compact set, the shift
        operators, and Gelfand&rsquo;s formula for the spectral radius.
      </p>
    </>
  ),
};
