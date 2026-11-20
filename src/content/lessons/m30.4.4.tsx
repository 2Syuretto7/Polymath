import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SchemeFibreViz } from "@/components/viz/SchemeFibreViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.4.4",
  minutes: 90,
  links: {
    revisits: ["m30.4.3", "m24.4.3", "m24.1.2"],
    foreshadows: ["m30.5.1", "m30.5.2", "m30.6.1"],
  },

  puzzle: (
    <>
      <p>
        The Gaussian integers ℤ[i] form a scheme lying over Spec ℤ. Above the prime 5 sit two points, above 3 just one,
        and above 2 a single point that is somehow doubled. How do you cut out the part of a scheme lying over one point,
        and why does it look so different from prime to prime?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a prime, and see the fibre of Spec ℤ[i] over it.</p>
      <SchemeFibreViz />
    </>
  ),

  theory: (
    <>
      <Definition title="fibre products">
        <p>
          Given morphisms X → S and Y → S, a <strong>fibre product</strong> <M>{"X \\times_S Y"}</M> is an S-scheme with
          projections to X and Y such that for every scheme T, pairs of S-morphisms T → X and T → Y correspond to morphisms{" "}
          <M>{"T \\to X \\times_S Y"}</M>. In other words it is the pullback in the category of schemes, so it is unique up to
          unique isomorphism.
        </p>
      </Definition>

      <Theorem title="existence">
        <p>
          Fibre products of schemes always exist. In the affine case,{" "}
          <M>{"\\operatorname{Spec} A \\times_{\\operatorname{Spec} R} \\operatorname{Spec} B = \\operatorname{Spec}(A \\otimes_R B)"}</M>
          , because Spec reverses arrows and the tensor product is the pushout of commutative rings. In general one glues the
          affine pieces.
        </p>
      </Theorem>

      <Definition title="fibres and base change">
        <p>
          The <strong>fibre</strong> of f : X → S over a point s is <M>{"X_s = X \\times_S \\operatorname{Spec} \\kappa(s)"}</M>
          , a scheme over the residue field. More generally, for S′ → S the <strong>base change</strong>{" "}
          <M>{"X \\times_S S'"}</M> is X viewed over S′: the circle over ℤ base-changed to 𝔽ₚ is the circle modulo p.
        </p>
      </Definition>

      <Example title="the Gaussian integers">
        <p>
          The fibre of Spec ℤ[i] over (p) is <M>{"\\operatorname{Spec}(\\mathbb{Z}[i] \\otimes \\mathbb{F}_p) = \\operatorname{Spec} \\mathbb{F}_p[x]/(x^2 + 1)"}</M>
          . It has two points when p ≡ 1 modulo 4, one point with a residue field of p² elements when p ≡ 3 modulo 4, and
          over 2 one point whose ring <M>{"\\mathbb{F}_2[x]/((x + 1)^2)"}</M> has a nilpotent: the prime 2 ramifies.
        </p>
      </Example>

      <Remark title="not the product of sets">
        <p>
          The points of a fibre product are not pairs of points. Spec ℂ ×<sub>Spec ℝ</sub> Spec ℂ is Spec(ℂ ⊗<sub>ℝ</sub> ℂ)
          = Spec(ℂ × ℂ), which has two points, though each factor has one. A point of the fibre product is a pair of points
          together with a way of fitting their residue fields into a common field.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "aff",
      rung: "check",
      prompt: <p>What is the fibre product of Spec A and Spec B over Spec R?</p>,
      answer: { kind: "choice", options: ["Spec of A ⊗ B over R", "Spec of A × B", "Spec of A ⊕ B as modules", "The product of the underlying sets"], correct: [0] },
    },
    {
      key: "fib",
      rung: "check",
      prompt: <p>What is the fibre of X → S over a point s?</p>,
      answer: { kind: "choice", options: ["The fibre product of X with Spec of the residue field at s", "The preimage of s as a set, with no scheme structure", "The stalk of X at s", "The closure of s"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many points does the fibre over 13 have?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "cc",
      rung: "apply",
      prompt: <p>How many points does Spec ℂ ×<sub>Spec ℝ</sub> Spec ℂ have?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "res",
      rung: "apply",
      prompt: <p>How many elements does the residue field of the point of Spec ℤ[i] over (3) have?</p>,
      answer: { kind: "numeric", value: 9, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that ℂ ⊗<sub>ℝ</sub> ℂ is isomorphic to ℂ × ℂ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes ℂ ≅ ℝ[x]/(x² + 1), so ℂ ⊗ ℂ ≅ ℂ[x]/(x² + 1).",
          "Factors x² + 1 = (x − i)(x + i) over ℂ, with coprime factors.",
          "Applies the Chinese remainder theorem to get ℂ × ℂ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the fibre of Spec ℤ[i] over (2) is not reduced.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies the fibre as Spec 𝔽₂[x]/(x² + 1).",
          "Notes x² + 1 = (x + 1)² in characteristic 2.",
          "Concludes x + 1 is a non-zero nilpotent. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With fibre products in hand, the line with two origins can finally be ruled out by a clean condition on its diagonal,
        and compactness gets an algebraic replacement.
      </p>
      <p>Next, separated and proper morphisms.</p>
    </>
  ),
};
