import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ACFProjectionViz } from "@/components/viz/ACFProjectionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.2.3",
  minutes: 90,
  links: {
    revisits: ["m38.2.1", "m38.1.3", "m7.6.4"],
    foreshadows: ["m38.5.1", "m38.3.3", "m30.1.2"],
  },

  puzzle: (
    <>
      <p>
        Over ℝ, the formula &lsquo;there is a y with y² = x&rsquo; picks out the half-line x ≥ 0. Over ℂ it is true of every
        x. Over ℂ, &lsquo;there is a y with xy = 1&rsquo; says just x ≠ 0. Is every formula about the complex numbers
        secretly a statement about finitely many polynomial equations and inequations?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a formula with a quantifier, and see its quantifier-free equivalent over ℂ and the set it defines.</p>
      <ACFProjectionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the theory ACF">
        <p>
          ACF is the theory, in the language of rings, of <strong>algebraically closed fields</strong>: the field axioms
          together with, for each n ≥ 1, the axiom that every polynomial <M>{"x^n + a_{n-1}x^{n-1} + \\cdots + a_0"}</M> has
          a root. Adding the sentences 1 + ⋯ + 1 ≠ 0 for every number of ones gives <M>{"\\mathrm{ACF}_0"}</M>; adding
          that p · 1 = 0 gives <M>{"\\mathrm{ACF}_p"}</M>.
        </p>
      </Definition>

      <Theorem title="quantifier elimination and completeness">
        <p>
          ACF has quantifier elimination (Tarski, and Chevalley in geometric form): every formula is equivalent modulo ACF to
          a quantifier-free one. Since a quantifier-free sentence only says which integers vanish, the characteristic decides
          every sentence, so <M>{"\\mathrm{ACF}_0"}</M> and each <M>{"\\mathrm{ACF}_p"}</M> are complete. Alternatively,
          algebraically closed fields of the same characteristic and the same uncountable size are isomorphic, by
          transcendence degree, and the Łoś-Vaught test applies.
        </p>
      </Theorem>

      <Example title="definable sets in one variable">
        <p>
          A quantifier-free formula in x with parameters is a Boolean combination of equations p(x) = 0. Each defines a
          finite set or, if p is the zero polynomial, everything; so every definable subset of an algebraically closed field
          is finite or cofinite. Such a theory is called <strong>strongly minimal</strong>. Geometrically, the image of a
          constructible set under a polynomial map is constructible: the projection of the hyperbola xy = 1 to the x-axis
          is the line with the origin removed.
        </p>
      </Example>

      <Theorem title="the Lefschetz principle">
        <p>
          For a sentence φ in the language of rings, the following are equivalent: φ holds in ℂ; φ holds in every
          algebraically closed field of characteristic 0; φ holds in <M>{"\\mathrm{ACF}_p"}</M> for all sufficiently large
          primes p. The last step uses compactness: a proof of φ from <M>{"\\mathrm{ACF}_0"}</M> uses only finitely many of
          the axioms 1 + ⋯ + 1 ≠ 0.
        </p>
      </Theorem>

      <Remark title="model completeness and the Nullstellensatz">
        <p>
          Abraham Robinson observed that quantifier elimination makes ACF model complete: if K ⊆ L are algebraically closed,
          K is an elementary substructure of L. So a system of polynomial equations over K with a solution in some larger
          field already has one in K, which is the heart of Hilbert&rsquo;s Nullstellensatz.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sm",
      rung: "check",
      prompt: <p>What can a definable subset of ℂ, in the language of rings with parameters, look like?</p>,
      answer: { kind: "choice", options: ["It is finite or cofinite", "It is any union of intervals", "It is always finite", "It can be any subset"], correct: [0] },
    },
    {
      key: "complete",
      rung: "check",
      prompt: <p>Which of these theories is complete?</p>,
      answer: { kind: "choice", options: ["The theory of algebraically closed fields of characteristic 0", "The theory of fields", "ACF, with no characteristic specified", "The theory of rings"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose ∃y (xy = 1 ∧ y² = 1). How many complex numbers x satisfy it?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "lefschetz",
      rung: "apply",
      prompt: <p>A sentence in the language of rings is true in ℂ. In which algebraically closed fields of characteristic p must it be true?</p>,
      answer: { kind: "choice", options: ["Those with p larger than some bound", "All of them", "None of them", "Only p = 2"], correct: [0] },
    },
    {
      key: "qf",
      rung: "apply",
      prompt: <p>Over ℂ, which quantifier-free formula is equivalent to ∃y (y² = x)?</p>,
      answer: { kind: "choice", options: ["x = x, which is always true", "x ≥ 0", "x ≠ 0", "x = 0"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that a quantifier-free formula φ(x) in the language of rings, with parameters from a field K, defines a finite or cofinite subset of K.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that an atomic formula in x is equivalent to p(x) = 0 for a polynomial p over K.",
          "Notes that this defines a finite set if p is non-zero, and all of K if p is zero.",
          "Concludes since finite and cofinite sets are closed under complements, finite unions and finite intersections.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the previous result to show that the real field does not have quantifier elimination in the language of rings.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that ∃y (y² = x) defines [0, ∞) in ℝ.",
          "Notes that this set is neither finite nor cofinite, so it has no quantifier-free definition in the ring language.",
          "Mentions that adding the order restores quantifier elimination. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        An element of a structure is described by all the formulas it satisfies. Collections of formulas that could describe
        an element, whether or not one exists, are the next object of study.
      </p>
      <p>Next, types.</p>
    </>
  ),
};
