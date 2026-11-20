import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { UltraproductPrimesViz } from "@/components/viz/UltraproductPrimesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.1.3",
  minutes: 90,
  links: {
    revisits: ["m38.1.2", "m20.6.5", "m20.3.3"],
    foreshadows: ["m38.5.2", "m38.5.1", "m38.2.3"],
  },

  puzzle: (
    <>
      <p>
        Every field 𝔽ₚ has prime characteristic. Can you glue all of them into a single field in which 1 + 1 + ⋯ + 1 is
        never zero, while every first-order statement true in &lsquo;most&rsquo; 𝔽ₚ remains true? To make
        &lsquo;most&rsquo; precise, you need a way of voting on sets of primes that never ties.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a sentence, and see for which primes p it holds in 𝔽ₚ.</p>
      <UltraproductPrimesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="ultrafilters">
        <p>
          An <strong>ultrafilter</strong> on a set I is a collection U of subsets, closed under finite intersections and
          supersets, not containing ∅, and containing exactly one of A and I ∖ A for every A. Principal ultrafilters consist
          of the sets containing a fixed point. By Zorn&rsquo;s lemma, every infinite I carries a{" "}
          <strong>non-principal</strong> ultrafilter, which contains every cofinite set.
        </p>
      </Definition>

      <Definition title="ultraproducts">
        <p>
          Given structures <M>{"M_i"}</M> for i in I and an ultrafilter U, the <strong>ultraproduct</strong>{" "}
          <M>{"\\prod M_i / U"}</M> consists of sequences <M>{"(a_i)"}</M> modulo the relation of agreeing on a set in U,
          with relations holding when they hold on a set in U. When all <M>{"M_i"}</M> equal M it is an{" "}
          <strong>ultrapower</strong>.
        </p>
      </Definition>

      <Theorem title="Łoś’s theorem">
        <p>
          For every formula φ, <M>{"\\prod M_i / U \\models \\varphi([a_i])"}</M> if and only if the set of i with{" "}
          <M>{"M_i \\models \\varphi(a_i)"}</M> belongs to U. The proof is an induction on formulas; the ultrafilter property
          handles negation, and the axiom of choice handles the existential step.
        </p>
      </Theorem>

      <Example title="applications">
        <p>
          Compactness: if every finite subset of T has a model, index models by finite subsets and choose an ultrafilter
          containing, for each sentence, the set of finite subsets that include it; the ultraproduct models T. A non-principal
          ultraproduct of the 𝔽ₚ has characteristic 0, since each statement 1 + ⋯ + 1 ≠ 0 fails for only one prime. An
          ultrapower of ℝ over ℕ gives the hyperreals of non-standard analysis.
        </p>
      </Example>

      <Remark title="transfer">
        <p>
          Łoś&rsquo;s theorem is a transfer principle: a first-order sentence true in all but finitely many factors holds in
          every non-principal ultraproduct. Ax used this in 1968 to study pseudo-finite fields, and it underlies the
          Ax-Grothendieck theorem later in this course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "uf",
      rung: "check",
      prompt: <p>What distinguishes an ultrafilter from a filter?</p>,
      answer: { kind: "choice", options: ["For every set A, it contains A or its complement", "It contains the empty set", "It is finite", "It contains only one set"], correct: [0] },
    },
    {
      key: "los",
      rung: "check",
      prompt: <p>What does Łoś&rsquo;s theorem say?</p>,
      answer: { kind: "choice", options: ["A formula holds in the ultraproduct exactly when the set of indices where it holds is in the ultrafilter", "Every ultraproduct is finite", "Ultraproducts are isomorphic to their factors", "A formula holds in the ultraproduct if it holds in one factor"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for how many primes below 100 does 1 + 1 ≠ 0 fail?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "char",
      rung: "apply",
      prompt: <p>What is the characteristic of a non-principal ultraproduct of the fields 𝔽ₚ?</p>,
      answer: { kind: "choice", options: ["0", "2", "The largest prime", "It is not a field"], correct: [0] },
    },
    {
      key: "zorn",
      rung: "apply",
      prompt: <p>What is used to show that non-principal ultrafilters exist on ℕ?</p>,
      answer: { kind: "choice", options: ["Zorn’s lemma, or a weak form of the axiom of choice", "Induction on ℕ", "The completeness theorem", "Nothing: one can be written down explicitly"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that a non-principal ultrafilter on ℕ contains every cofinite set.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a non-principal ultrafilter contains no singleton, so it contains the complement of each singleton.",
          "Writes a cofinite set as a finite intersection of complements of singletons.",
          "Uses closure under finite intersections to conclude.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is an ultrapower of a finite structure isomorphic to the structure itself?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a sequence takes finitely many values, so by the ultrafilter property exactly one value is taken on a set in U.",
          "Maps each class to that value, giving a bijection with the structure.",
          "Uses Łoś’s theorem, or checks directly, that relations are preserved. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Some theories are tame enough that every formula is equivalent to one without quantifiers. Then every definable set
        has an explicit description, and questions of truth can be decided mechanically.
      </p>
      <p>Next, quantifier elimination.</p>
    </>
  ),
};
