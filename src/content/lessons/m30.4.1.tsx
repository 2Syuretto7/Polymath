import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SpecIntegersViz } from "@/components/viz/SpecIntegersViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.4.1",
  minutes: 90,
  links: {
    revisits: ["m30.3.3", "m24.2.1", "m24.2.4"],
    foreshadows: ["m30.4.2", "m30.4.3", "m30.5.2"],
  },

  puzzle: (
    <>
      <p>
        The Nullstellensatz matches points of a variety with maximal ideals of its coordinate ring. But a ring such as ℤ
        has no field to take coordinates in, and ℤ/12 has an element, 6, which is non-zero but whose square is zero. If
        every commutative ring is to have a geometry, what should its points be, and where do such elements live?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose n, and see which points of Spec ℤ make up Spec ℤ/n.</p>
      <SpecIntegersViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the prime spectrum">
        <p>
          For a commutative ring A, <M>{"\\operatorname{Spec} A"}</M> is the set of prime ideals of A. For an ideal I, the
          set <M>{"V(I)"}</M> of primes containing I is closed, and these closed sets form the <strong>Zariski topology</strong>.
          The sets <M>{"D(f) = \\{\\mathfrak{p} : f \\notin \\mathfrak{p}\\}"}</M> form a basis of open sets. An element f
          of A is regarded as a function whose value at <M>{"\\mathfrak{p}"}</M> is its image in the residue field{" "}
          <M>{"\\kappa(\\mathfrak{p})"}</M>, the fraction field of <M>{"A/\\mathfrak{p}"}</M>.
        </p>
      </Definition>

      <Theorem title="the structure sheaf">
        <p>
          There is a unique sheaf of rings <M>{"\\mathcal{O}"}</M> on Spec A with <M>{"\\mathcal{O}(D(f)) = A_f"}</M>, the
          localisation at the powers of f. Its stalk at <M>{"\\mathfrak{p}"}</M> is <M>{"A_\\mathfrak{p}"}</M>, and its
          global sections are A itself. The pair (Spec A, <M>{"\\mathcal{O}"}</M>) is an <strong>affine scheme</strong>, and
          ring homomorphisms A → B correspond to morphisms Spec B → Spec A.
        </p>
      </Theorem>

      <Example title="Spec ℤ and Spec k[x]">
        <p>
          Spec ℤ has a closed point (p) for each prime and a <strong>generic point</strong> (0), whose closure is the whole
          space. Spec k[x] over an algebraically closed field has a closed point for each a in k, the ideal (x − a), and a
          generic point (0). Spec of <M>{"\\mathbb{R}[x]"}</M> has, besides real points, closed points such as{" "}
          <M>{"(x^2 + 1)"}</M>, corresponding to conjugate pairs of complex numbers.
        </p>
      </Example>

      <Remark title="nilpotents">
        <p>
          A nilpotent element vanishes at every point, since it lies in every prime, yet it is not zero. Spec of{" "}
          <M>{"k[x]/(x^2)"}</M> has a single point, but its ring remembers a tangent direction: a{" "}
          <strong>double point</strong>. Such non-reduced structure records multiplicities, as when a line is tangent to a
          parabola and their intersection is Spec <M>{"k[x]/(x^2)"}</M>. The nilradical is exactly the intersection of all
          prime ideals.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pts",
      rung: "check",
      prompt: <p>What are the points of Spec A?</p>,
      answer: { kind: "choice", options: ["The prime ideals of A", "The maximal ideals only", "The elements of A", "The units of A"], correct: [0] },
    },
    {
      key: "generic",
      rung: "check",
      prompt: <p>What is the closure of the generic point (0) of Spec ℤ?</p>,
      answer: { kind: "choice", options: ["All of Spec ℤ", "The point (0) alone", "The point (2)", "The empty set"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 60. How many points does Spec ℤ/60 have?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "real",
      rung: "apply",
      prompt: <p>Which ideal is a closed point of Spec ℝ[x] that is not of the form (x − a)?</p>,
      answer: { kind: "choice", options: ["(x² + 1)", "(x²)", "(0)", "(x² − 1)"], correct: [0] },
    },
    {
      key: "nil",
      rung: "apply",
      prompt: <p>Why does a nilpotent element vanish at every point of Spec A?</p>,
      answer: { kind: "choice", options: ["Because it lies in every prime ideal", "Because it is zero", "Because Spec A has one point", "Because it is a unit"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the sets V(I) satisfy the axioms for the closed sets of a topology.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes V(0) is everything and V(A) is empty.",
          "Shows the intersection of the V(Iⱼ) is V of the sum of the Iⱼ.",
          "Shows V(I) ∪ V(J) = V(IJ), using that a prime containing IJ contains I or J.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Describe Spec ℤ/12, and say what its ring knows that its set of points does not.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds the primes of ℤ/12, corresponding to (2) and (3).",
          "Notes the nilpotent element 6, so the ring is not reduced.",
          "Says that at (2) the structure is thickened, since 4 divides 12. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Affine schemes are the local pieces. Just as manifolds are glued from open balls, general schemes are glued from
        affine ones, and the projective line appears as two affine lines glued together.
      </p>
      <p>Next, schemes.</p>
    </>
  ),
};
