import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { Sl3WeightViz } from "@/components/viz/Sl3WeightViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.5.2",
  minutes: 90,
  links: {
    revisits: ["m32.5.1", "m32.4.1", "m32.4.2"],
    foreshadows: ["m32.5.3", "m34.5.1", "p32.2.2"],
  },

  puzzle: (
    <>
      <p>
        In 1961 Murray Gell-Mann sorted the known particles by two quantum numbers and found them falling into hexagons of
        eight and triangles of ten. The pattern predicted a missing particle, found in 1964. Why should nature draw
        hexagons and triangles?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a highest weight for sl(3), and see the shape and multiplicities of the weights it forces.</p>
      <Sl3WeightViz />
    </>
  ),

  theory: (
    <>
      <Definition title="weights and highest weight vectors">
        <p>
          Let g be complex semisimple with Cartan subalgebra h and a choice of positive roots. In a representation V, the{" "}
          <strong>weight space</strong> of a linear form μ on h is{" "}
          <M>{"V_\\mu = \\{v : Hv = \\mu(H) v \\text{ for all } H \\in \\mathfrak h\\}"}</M>. A root vector of α sends{" "}
          <M>{"V_\\mu"}</M> into <M>{"V_{\\mu + \\alpha}"}</M>. A <strong>highest weight vector</strong> is a weight vector
          killed by every positive root vector.
        </p>
      </Definition>

      <Definition title="dominant integral weights">
        <p>
          For each simple root <M>{"\\alpha_i"}</M>, let <M>{"h_i"}</M> be the h of the copy of sl(2) it spans. A weight λ
          is <strong>dominant integral</strong> if every <M>{"\\lambda(h_i)"}</M> is a whole number ≥ 0. The{" "}
          <strong>fundamental weights</strong> <M>{"\\omega_i"}</M> are defined by{" "}
          <M>{"\\omega_i(h_j) = \\delta_{ij}"}</M>, so the dominant integral weights are the sums{" "}
          <M>{"a_1\\omega_1 + \\cdots + a_r\\omega_r"}</M> with whole <M>{"a_i \\ge 0"}</M>.
        </p>
      </Definition>

      <Theorem title="the theorem of the highest weight">
        <p>
          Each finite-dimensional irreducible representation has a unique highest weight, which is dominant integral, and
          sending a representation to its highest weight is a bijection onto the dominant integral weights. The weights of
          V(λ) are invariant under the Weyl group, lie in the convex hull of the Weyl orbit of λ, and differ from λ by sums
          of roots.
        </p>
      </Theorem>

      <Example title="sl(3)">
        <p>
          Here λ = aω₁ + bω₂. V(ω₁) is ℂ³ and V(ω₂) its dual; V(ω₁ + ω₂) is the adjoint representation, of dimension 8, whose
          zero weight space is the Cartan subalgebra, of dimension 2. V(3ω₁) has dimension 10. These are Gell-Mann&rsquo;s
          octet and decuplet, for the symmetry group SU(3) of the three lightest quarks.
        </p>
      </Example>

      <Remark title="why the weights are Weyl-invariant">
        <p>
          Restrict V to the copy of sl(2) belonging to a root α. V splits into strings V(n), each symmetric about 0. The
          reflection <M>{"s_\\alpha"}</M> flips each string, so it maps weights to weights and keeps multiplicities.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hwv",
      rung: "check",
      prompt: <p>What is a highest weight vector?</p>,
      answer: { kind: "choice", options: ["A weight vector killed by every positive root vector", "The weight vector of largest length", "Any eigenvector of the Killing form", "A vector fixed by the Weyl group"], correct: [0] },
    },
    {
      key: "label",
      rung: "check",
      prompt: <p>Which weights label the finite-dimensional irreducible representations of a complex semisimple Lie algebra?</p>,
      answer: { kind: "choice", options: ["The dominant integral weights", "All the roots", "All linear forms on the Cartan subalgebra", "The simple roots only"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set a = 2 and b = 2. What is the multiplicity of the zero weight?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "dec",
      rung: "apply",
      prompt: <p>What is the dimension of the sl(3) representation with highest weight 3ω₁?</p>,
      answer: { kind: "numeric", value: 10, tolerance: 0 },
    },
    {
      key: "adj",
      rung: "apply",
      prompt: <p>What is the highest weight of the adjoint representation of sl(3)?</p>,
      answer: { kind: "choice", options: ["ω₁ + ω₂, the highest root", "ω₁", "0", "2ω₁"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if v lies in the weight space of μ and x lies in the root space of α, then xv lies in the weight space of μ + α.</p>,
      answer: {
        kind: "written",
        rubric: [
          "For H in the Cartan subalgebra writes Hxv = [H, x]v + xHv.",
          "Uses [H, x] = α(H)x and Hv = μ(H)v.",
          "Concludes Hxv = (μ + α)(H) xv for every H.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the visualisation to guess for which a and b the zero weight occurs in the sl(3) representation aω₁ + bω₂.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Tries several cases, such as (1, 1), (3, 0) and (2, 1).",
          "Guesses that 0 occurs exactly when a − b is divisible by 3, perhaps linking this to λ being a sum of roots.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The highest weight fixes the representation, so it must fix the dimension and every multiplicity. Counting them in
        the visualisation was laborious. Weyl found a closed formula.
      </p>
      <p>Next, the Weyl character formula.</p>
    </>
  ),
};
