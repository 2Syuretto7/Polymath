import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { TentNormsViz } from "@/components/viz/TentNormsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.1.3",
  minutes: 85,
  links: {
    revisits: ["m23.1.2", "m12.1.4", "m8.1.1"],
    foreshadows: ["m23.3.1", "m23.4.2", "m23.5.2"],
  },

  puzzle: (
    <>
      <p>
        In the plane, a bounded closed set is compact: any sequence in it has a convergent subsequence. Take infinitely many
        unit vectors, each at right angles to all the others. They are all at distance √2 from one another. Where could a
        subsequence converge to?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>See two ways infinite-dimensional spaces differ from ℝⁿ.</p>
      <TentNormsViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="all norms on ℝⁿ are equivalent">
        <p>For any norm on a finite-dimensional space there are constants with</p>
        <MD>{"c\\|x\\|_1 \\le \\|x\\| \\le C\\|x\\|_1."}</MD>
        <p>
          The upper bound is the triangle inequality on a basis expansion. For the lower, the norm is continuous on the{" "}
          <M>{"\\|\\cdot\\|_1"}</M> unit sphere, which is compact by Heine-Borel, so it has a positive minimum.
        </p>
      </Theorem>

      <Example title="consequences">
        <p>
          Every finite-dimensional normed space is complete; every finite-dimensional subspace of a normed space is closed;
          every linear map from a finite-dimensional space is bounded; and closed bounded sets in finite dimensions are
          compact.
        </p>
      </Example>

      <Theorem title="Riesz's lemma">
        <p>
          If <M>Y</M> is a closed proper subspace of a normed space <M>X</M> and <M>{"0 < \\theta < 1"}</M>, there is a unit
          vector <M>x</M> with <M>{"\\operatorname{dist}(x, Y) \\ge \\theta"}</M>. Applied repeatedly, it builds unit vectors
          at distance at least <M>{"\\theta"}</M> from each other, so: the closed unit ball of <M>X</M> is compact exactly when{" "}
          <M>X</M> is finite-dimensional.
        </p>
      </Theorem>

      <Remark title="discontinuous functionals">
        <p>
          Every infinite-dimensional normed space has unbounded linear functionals: take a Hamel basis of unit vectors, send
          the n-th of countably many of them to n and the rest to 0, and extend linearly. This uses the axiom of choice, and such functionals can never be written down explicitly on a
          Banach space. Infinite dimensions demand topology; pure linear algebra no longer suffices.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "equiv",
      rung: "check",
      prompt: <p>On a finite-dimensional space, how are any two norms related?</p>,
      answer: { kind: "choice", options: ["They are equivalent, bounded by constant multiples of each other", "They are equal", "They are unrelated", "Only the Euclidean norm is complete"], correct: [0] },
    },
    {
      key: "compact",
      rung: "check",
      prompt: <p>When is the closed unit ball of a normed space compact?</p>,
      answer: { kind: "choice", options: ["Exactly when the space is finite-dimensional", "Always", "Exactly when the space is complete", "Exactly when the norm comes from an inner product"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the ratio of the sup norm to the L¹ norm of the tent with n = 10?</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "dist",
      rung: "apply",
      prompt: <p>What is the distance between e₁ and e₂ in ℓ², to three decimal places?</p>,
      answer: { kind: "numeric", value: 1.414, tolerance: 0.002 },
    },
    {
      key: "closed",
      rung: "apply",
      prompt: <p>Which statement about finite-dimensional subspaces of a normed space is true?</p>,
      answer: { kind: "choice", options: ["They are always closed", "They are always dense", "They may fail to be closed", "They are never complete"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Let ‖·‖ be any norm on ℝⁿ. Prove that ‖x‖ ≤ C‖x‖₁ for some constant C.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes x as the sum of xᵢeᵢ over the standard basis.",
          "Applies the triangle inequality and homogeneity: ‖x‖ ≤ Σ|xᵢ|‖eᵢ‖.",
          "Takes C as the largest ‖eᵢ‖.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>On polynomials with the sup norm on [0, 1], show that p ↦ p′(1) is an unbounded linear functional.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks linearity.",
          "Uses xⁿ, which has sup norm 1 on [0, 1] and derivative n at 1, so no bound C works.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Some normed spaces have more geometry: an inner product, with angles and orthogonality. In them, the closest point of
        a closed convex set always exists, and that fact drives much of analysis.
      </p>
      <p>
        Next, Hilbert spaces and the projection theorem: inner products, the parallelogram law, orthogonal complements, and
        the best approximation from a closed subspace.
      </p>
    </>
  ),
};
