import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { IdealFactorViz } from "@/components/viz/IdealFactorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.3.3",
  minutes: 95,
  links: {
    revisits: ["m24.3.2", "m7.7.3", "m24.2.3"],
    foreshadows: ["m24.4.1", "m24.4.2", "m24.4.3"],
  },

  puzzle: (
    <>
      <p>
        In ℤ[√−5], 6 = 2 · 3 = (1 + √−5)(1 − √−5), and all four factors are irreducible. Unique factorisation, the
        bedrock of arithmetic, has collapsed. In the 1840s Kummer, facing the same collapse in cyclotomic integers, proposed
        that the factors themselves split into &lsquo;ideal numbers&rsquo; that do not exist in the ring. What could such
        phantoms be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Take each factorisation of 6 and refine it into prime ideals.</p>
      <IdealFactorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Dedekind domains">
        <p>
          A <strong>Dedekind domain</strong> is a Noetherian, integrally closed domain in which every non-zero prime ideal is
          maximal, that is, of Krull dimension at most one. Examples: every principal ideal domain, and by the last two
          lessons the ring of integers of every number field, since it is integral over ℤ.
        </p>
      </Definition>

      <Theorem title="unique factorisation of ideals">
        <p>
          In a Dedekind domain every non-zero proper ideal is a product of prime ideals, uniquely up to order. Conversely, a
          domain with this property is Dedekind. For ideals, to contain is to divide: <M>{"I \\supseteq J"}</M> exactly when{" "}
          <M>{"J = IK"}</M> for some ideal <M>K</M>.
        </p>
      </Theorem>

      <Example title="the proof in outline">
        <p>
          The key is that every non-zero ideal is <strong>invertible</strong>: for a prime <M>{"\\mathfrak{p}"}</M>, the set{" "}
          <M>{"\\mathfrak{p}^{-1} = \\{x \\in K : x\\mathfrak{p} \\subseteq R\\}"}</M> of the fraction field satisfies{" "}
          <M>{"\\mathfrak{p}\\mathfrak{p}^{-1} = R"}</M>. Showing that <M>{"\\mathfrak{p}^{-1}"}</M> is strictly larger than{" "}
          <M>R</M> uses dimension one; showing the product is not still <M>{"\\mathfrak{p}"}</M> uses integral closure, via the
          determinant trick. Existence of factorisations then follows by Noetherian induction, and uniqueness by cancelling
          invertible primes.
        </p>
      </Example>

      <Definition title="the class group">
        <p>
          The fractional ideals of a Dedekind domain form a group under multiplication; the principal ones form a subgroup. The
          quotient is the <strong>ideal class group</strong>. It is trivial exactly when the ring is a principal ideal domain,
          which for a Dedekind domain is the same as being a unique factorisation domain. For ℤ[√−5] the class group has order
          2: <M>P</M> is not principal, but <M>{"P^2 = (2)"}</M> is.
        </p>
      </Definition>

      <Remark title="finiteness, and Fermat">
        <p>
          For rings of integers the class group is always finite, by Minkowski&rsquo;s geometry of numbers. Kummer proved
          Fermat&rsquo;s last theorem for primes p not dividing the class number of the p-th cyclotomic integers, the regular
          primes. Lamé&rsquo;s earlier &lsquo;proof&rsquo; of 1847 had silently assumed unique factorisation of elements.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which three conditions define a Dedekind domain?</p>,
      answer: { kind: "choice", options: ["Noetherian, integrally closed, and every non-zero prime is maximal", "Principal, finite, and a field", "Unique factorisation, Euclidean, and local", "Artinian, reduced, and graded"], correct: [0] },
    },
    {
      key: "factor",
      rung: "check",
      prompt: <p>What factors uniquely in a Dedekind domain?</p>,
      answer: { kind: "choice", options: ["Non-zero proper ideals, into prime ideals", "Elements, into irreducibles", "Units, into primes", "Fields, into subfields"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, counting with multiplicity, how many prime ideals appear in the factorisation of (6)?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "norm",
      rung: "apply",
      prompt: <p>What is the norm of 1 + √−5 in ℤ[√−5]?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "class",
      rung: "apply",
      prompt: <p>What is the order of the class group of ℤ[√−5]?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that 2 is irreducible in ℤ[√−5].</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the multiplicative norm N(a + b√−5) = a² + 5b², with N(2) = 4.",
          "Notes that a factorisation 2 = xy into non-units needs N(x) = N(y) = 2.",
          "Shows a² + 5b² = 2 has no integer solutions, so no such factorisation exists.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that P = (2, 1 + √−5) is not principal in ℤ[√−5].</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that P² = (2), so a generator would have norm 2, or uses that P is proper and contains 2 and 1 + √−5.",
          "Shows no element has norm 2, since a² + 5b² = 2 has no integer solutions.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Ideals are modules, and quotients are modules too. To compare how modules fit inside each other, algebraists track
        chains of maps where each image is exactly the next kernel, a bookkeeping device that runs through all of modern
        algebra.
      </p>
      <p>
        Next, exact sequences: short exact sequences, splitting, the five lemma and the snake lemma, and diagram chasing.
      </p>
    </>
  ),
};
