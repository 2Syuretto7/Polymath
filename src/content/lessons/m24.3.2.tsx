import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { GoingUpViz } from "@/components/viz/GoingUpViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.3.2",
  minutes: 90,
  links: {
    revisits: ["m24.3.1", "m24.2.2", "m24.2.1"],
    foreshadows: ["m24.3.3", "m24.4.1", "m24.4.4"],
  },

  puzzle: (
    <>
      <p>
        The prime 5 factors in the Gaussian integers as (2 + i)(2 − i), the prime 3 does not factor at all, and 2 becomes
        −i(1 + i)². Behind these three behaviours is a picture: the primes of ℤ[i] hang over the primes of ℤ. Is there always
        at least one hanging over each prime? Can two of them be nested?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a prime of ℤ and see which primes of ℤ[i] lie over it.</p>
      <GoingUpViz />
    </>
  ),

  theory: (
    <>
      <Definition title="lying over">
        <p>
          Let <M>{"A \\subseteq B"}</M> be rings. A prime <M>{"\\mathfrak{q}"}</M> of <M>B</M> <strong>lies over</strong> the
          prime <M>{"\\mathfrak{p}"}</M> of <M>A</M> if <M>{"\\mathfrak{q} \\cap A = \\mathfrak{p}"}</M>. Contraction always
          sends primes to primes, so every prime of <M>B</M> lies over exactly one prime of <M>A</M>; the question is the
          converse.
        </p>
      </Definition>

      <Theorem title="the Cohen-Seidenberg theorems (1946)">
        <p>Let <M>B</M> be integral over <M>A</M>.</p>
        <p>
          <strong>Lying over.</strong> Every prime <M>{"\\mathfrak{p}"}</M> of <M>A</M> has a prime of <M>B</M> lying over it.{" "}
          <strong>Incomparability.</strong> If <M>{"\\mathfrak{q} \\subseteq \\mathfrak{q}'"}</M> both lie over{" "}
          <M>{"\\mathfrak{p}"}</M>, they are equal. <strong>Going up.</strong> A chain{" "}
          <M>{"\\mathfrak{p}_1 \\subseteq \\mathfrak{p}_2"}</M> in <M>A</M>, with <M>{"\\mathfrak{q}_1"}</M> over{" "}
          <M>{"\\mathfrak{p}_1"}</M>, extends to <M>{"\\mathfrak{q}_1 \\subseteq \\mathfrak{q}_2"}</M> with{" "}
          <M>{"\\mathfrak{q}_2"}</M> over <M>{"\\mathfrak{p}_2"}</M>. Also, <M>{"\\mathfrak{q}"}</M> is maximal exactly when{" "}
          <M>{"\\mathfrak{q} \\cap A"}</M> is.
        </p>
      </Theorem>

      <Example title="the key lemma">
        <p>
          If <M>{"A \\subseteq B"}</M> are domains with <M>B</M> integral over <M>A</M>, then <M>B</M> is a field exactly when{" "}
          <M>A</M> is. For if <M>A</M> is a field and <M>{"b \\ne 0"}</M> satisfies a monic equation of least degree, its
          constant term is non-zero, and solving for it expresses <M>{"b^{-1}"}</M> as a polynomial in <M>b</M>. Localising
          at <M>{"\\mathfrak{p}"}</M> and passing to quotients turns lying over and incomparability into this lemma.
        </p>
      </Example>

      <Theorem title="going down">
        <p>
          If moreover <M>A</M> and <M>B</M> are domains, <M>A</M> is integrally closed and <M>B</M> is integral over it, then
          chains also lift downwards: given <M>{"\\mathfrak{p}_1 \\subseteq \\mathfrak{p}_2"}</M> and{" "}
          <M>{"\\mathfrak{q}_2"}</M> over <M>{"\\mathfrak{p}_2"}</M>, there is <M>{"\\mathfrak{q}_1 \\subseteq \\mathfrak{q}_2"}</M>{" "}
          over <M>{"\\mathfrak{p}_1"}</M>. Without integral closure, going down can fail.
        </p>
      </Theorem>

      <Remark title="dimension">
        <p>
          The <strong>Krull dimension</strong> of a ring is the supremum of lengths of chains of primes. Going up and
          incomparability together show that an integral extension has the same dimension as its base. With Noether
          normalisation, the dimension of a finitely generated <M>k</M>-domain is its transcendence degree over <M>k</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lo",
      rung: "check",
      prompt: <p>What does the lying over theorem guarantee for an integral extension A ⊆ B?</p>,
      answer: { kind: "choice", options: ["Every prime of A is the contraction of some prime of B", "Every prime of B is principal", "B is a field", "A and B have the same number of primes"], correct: [0] },
    },
    {
      key: "inc",
      rung: "check",
      prompt: <p>What does incomparability say?</p>,
      answer: { kind: "choice", options: ["Distinct primes of B over the same prime of A are never nested", "Primes of B are never nested", "No prime of B lies over (0)", "Every prime of A is maximal"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many primes of ℤ[i] lie over (13)?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "dim",
      rung: "apply",
      prompt: <p>ℤ has Krull dimension 1. What is the Krull dimension of ℤ[i]?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "max",
      rung: "apply",
      prompt: <p>In ℤ[i], the prime (2 + i) lies over (5). Is (2 + i) maximal, and why?</p>,
      answer: { kind: "choice", options: ["Yes, because it lies over the maximal ideal (5) in an integral extension", "No, because it is principal", "No, because it is contained in (5)", "Yes, because ℤ[i] is a field"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove: if A ⊆ B are domains, B is integral over A, and A is a field, then B is a field.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes non-zero b in B with a monic equation bⁿ + aₙ₋₁bⁿ⁻¹ + … + a₀ = 0 of least degree.",
          "Notes a₀ ≠ 0, since otherwise b times a lower-degree expression is 0 and, B being a domain, the degree could be reduced.",
          "Rearranges to b · (bⁿ⁻¹ + … + a₁) = −a₀ and divides by a₀ in the field A to exhibit an inverse of b.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Which primes p split into two primes in ℤ[i], and how does this connect with sums of two squares?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States that odd p splits exactly when p leaves remainder 1 on division by 4.",
          "Connects splitting p = (a + bi)(a − bi) with p = a² + b², Fermat’s two squares theorem.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Rings of integers in number fields are Noetherian, integrally closed and of dimension one. Those three properties are
        exactly what is needed for ideals, unlike numbers, to factor uniquely into primes.
      </p>
      <p>
        Next, Dedekind domains: Kummer&rsquo;s ideal numbers, the failure of unique factorisation in ℤ[√−5], unique
        factorisation of ideals, and the class group that measures how far ideals are from being principal.
      </p>
    </>
  ),
};
