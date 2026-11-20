import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PointCountViz } from "@/components/viz/PointCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.4.3",
  minutes: 90,
  links: {
    revisits: ["m30.4.2", "m30.1.3", "m24.1.1"],
    foreshadows: ["m30.4.4", "m30.5.1", "m30.5.2"],
  },

  puzzle: (
    <>
      <p>
        The equation x² + y² = 1 has infinitely many real solutions, 4 solutions modulo 5, 8 modulo 7, and solutions in any
        ring you care to name. Is there one object, the circle over ℤ, that carries all of these solution sets at once, and
        in which each is just a set of maps?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a prime p, and count the points of the circle with coordinates modulo p.</p>
      <PointCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="morphisms and S-schemes">
        <p>
          A <strong>morphism of schemes</strong> is a morphism of locally ringed spaces. For a fixed scheme S, an{" "}
          <strong>S-scheme</strong> is a scheme X with a morphism X → S, and S-morphisms commute with these structure maps.
          Every scheme is a ℤ-scheme in exactly one way, and a scheme over a field k is a k-scheme.
        </p>
      </Definition>

      <Theorem title="maps into affine schemes">
        <p>
          For any scheme X and ring A, taking global sections gives a bijection{" "}
          <M>{"\\mathrm{Hom}(X, \\operatorname{Spec} A) \\cong \\mathrm{Hom}(A, \\mathcal{O}_X(X))"}</M>, natural in both. In
          particular Spec is an equivalence between the opposite of the category of rings and the category of affine schemes.
        </p>
      </Theorem>

      <Definition title="points with values in a ring">
        <p>
          For a scheme X and a ring R, the <strong>R-valued points</strong> of X are{" "}
          <M>{"X(R) = \\mathrm{Hom}(\\operatorname{Spec} R, X)"}</M>. If X = Spec ℤ[x, y]/(x² + y² − 1), a morphism from
          Spec R is a ring map from ℤ[x, y]/(x² + y² − 1) to R, which is a pair (a, b) in R with a² + b² = 1. A morphism
          Spec k → X from a field picks a point x of X together with an embedding of its residue field κ(x) into k.
        </p>
      </Definition>

      <Example title="counting modulo p">
        <p>
          For odd p, the circle has p − 1 points over 𝔽ₚ when −1 is a square modulo p, and p + 1 when it is not. One
          scheme thus packages the real circle, the complex circle and a finite circle for each prime.
        </p>
      </Example>

      <Remark title="the functor of points">
        <p>
          The assignment R ↦ X(R) is a functor from rings to sets. By the Yoneda lemma a scheme is determined by this
          functor, and Grothendieck often defined schemes by describing their functors, as with Grassmannians and moduli
          spaces. Important classes of morphisms include open and closed immersions and morphisms of finite type, locally
          given by finitely generated algebras.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "aff",
      rung: "check",
      prompt: <p>What are the morphisms from a scheme X to Spec A?</p>,
      answer: { kind: "choice", options: ["The ring maps from A to the global sections of X", "The ring maps from the global sections of X to A", "The points of Spec A", "The prime ideals of A"], correct: [0] },
    },
    {
      key: "pts",
      rung: "check",
      prompt: <p>What is a point of X with values in a ring R?</p>,
      answer: { kind: "choice", options: ["A morphism Spec R → X", "A morphism X → Spec R", "An element of R", "A prime ideal of R"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with p = 5, how many points does the circle have?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "f3",
      rung: "apply",
      prompt: <p>How many morphisms are there from Spec 𝔽₃ to Spec ℤ[x]/(x² + 1)?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0 },
    },
    {
      key: "field",
      rung: "apply",
      prompt: <p>What does a morphism from Spec of a field k to a scheme X amount to?</p>,
      answer: { kind: "choice", options: ["A point x of X with an embedding of its residue field into k", "A closed subscheme of X", "An open cover of X", "An element of k"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the R-valued points of Spec ℤ[x, y]/(x² + y² − 1) correspond to pairs (a, b) in R with a² + b² = 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that morphisms Spec R → Spec A correspond to ring maps A → R.",
          "Notes a ring map from ℤ[x, y] is determined by the images a and b of x and y, since ℤ is initial.",
          "Notes it factors through the quotient exactly when a² + b² − 1 maps to 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why x² + y² = 1 has p + 1 solutions modulo p when −1 is not a square modulo p.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses lines of slope t through (−1, 0), giving ((1 − t²)/(1 + t²), 2t/(1 + t²)).",
          "Notes 1 + t² is never 0 when −1 is not a square, so all p values of t give distinct points.",
          "Adds the point (−1, 0) itself to reach p + 1. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Points with values in a ring let us change the ground we stand on: from ℤ to 𝔽ₚ, from ℝ to ℂ. The construction that
        does this for whole schemes, not just points, is a pullback.
      </p>
      <p>Next, fibre products.</p>
    </>
  ),
};
