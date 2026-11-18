import { M } from "@/components/Math";
import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FreeBoundViz } from "@/components/viz/FreeBoundViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.2.1",
  minutes: 85,
  links: {
    revisits: ["m20.1.1", "m1.2.4", "m7.1.1"],
    foreshadows: ["m20.2.2", "m20.3.4", "m20.6.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Every number has a successor&rdquo; and &ldquo;every element has an inverse&rdquo; have the same shape: for
        all x there exists y such that something. Sentential logic cannot see that shape at all, since it treats each
        sentence as an unanalysed letter. What language can express the inner structure of mathematical statements, and
        what does it talk about?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a formula and see which variable occurrences are bound, by which quantifier, and which are free.</p>
      <FreeBoundViz />
    </>
  ),

  theory: (
    <>
      <Definition title="first-order languages">
        <p>
          The logical symbols are variables <M>{"v_1, v_2, \\ldots"}</M>, connectives, the quantifier ∀ (∃ abbreviates ¬∀¬),
          parentheses and usually =. The <strong>parameters</strong> fix the subject matter: constant symbols, function symbols
          and relation symbols, each with an arity. The language of groups has a binary function symbol ·, a constant e and a
          unary function symbol for inverse; the language of graphs has one binary relation symbol E.
        </p>
      </Definition>

      <Definition title="terms and formulas">
        <p>
          <strong>Terms</strong> are built from variables and constants by applying function symbols. <strong>Atomic
          formulas</strong> apply a relation symbol, or =, to terms. <strong>Formulas</strong> are built from atomic ones by
          ¬, → and ∀x. An occurrence of x is <strong>bound</strong> if it lies within the scope of a ∀x, and{" "}
          <strong>free</strong> otherwise. A <strong>sentence</strong> is a formula with no free variables. Unique
          readability holds, so we can define things by recursion on formulas.
        </p>
      </Definition>

      <Definition title="structures">
        <p>
          A <strong>structure</strong> 𝔄 for a language consists of a non-empty set |𝔄|, the universe, over which the
          quantifiers range, together with an element for each constant symbol, an n-ary function on |𝔄| for each n-ary
          function symbol, and an n-ary relation on |𝔄| for each n-ary relation symbol.
        </p>
      </Definition>

      <Example title="one language, many structures">
        <p>
          In the language with one binary relation symbol &lt;, the structures (ℕ, &lt;), (ℚ, &lt;) and a four-element
          directed graph are all structures. The sentence ∀x∀y(x &lt; y → ∃z(x &lt; z ∧ z &lt; y)) is false in the first, true
          in the second, and may be either in the third. A language says nothing on its own about which structure is meant.
        </p>
      </Example>

      <Remark title="why first order?">
        <p>
          Quantifiers range over elements of the universe, not over sets of elements or functions. This restriction is what
          makes the completeness and compactness theorems possible. It also has a price: as we will see, first-order
          sentences cannot pin down the natural numbers up to isomorphism, nor even say that a universe is finite.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sentence",
      rung: "check",
      prompt: <p>What is a sentence of a first-order language?</p>,
      answer: { kind: "choice", options: ["A formula with no free variables", "Any formula", "An atomic formula", "A term"], correct: [0] },
    },
    {
      key: "universe",
      rung: "check",
      prompt: <p>What must be true of the universe of a structure?</p>,
      answer: { kind: "choice", options: ["It is non-empty.", "It is finite.", "It is countable.", "It is a set of numbers."], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which variable is free in ∀x(Exy → ∃y Eyx)?</p>,
      answer: { kind: "choice", options: ["The first y only", "x", "Both occurrences of y", "None"], correct: [0] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many free occurrences of variables are there in (∀x Px) → Px?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "term",
      rung: "apply",
      prompt: <p>In the language with function symbols + and · and constants 0 and 1, which of these is a term?</p>,
      answer: { kind: "choice", options: ["(x + 1) · y", "x < y", "∀x (x + 0 = x)", "x = y"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Define the set FV(φ) of free variables of φ by recursion on formulas, and use your definition to show that ∀x∀y Exy is a sentence.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines FV of an atomic formula as the set of variables occurring in it.",
          "Gives the clauses FV(¬α) = FV(α), FV(α → β) = FV(α) ∪ FV(β), and FV(∀x α) = FV(α) minus {x}.",
          "Computes FV(∀x∀y Exy) = ∅ step by step.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can no first-order sentence in the language of groups say &ldquo;the group is finite&rdquo; in an obvious way?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a sentence can say ‘there are at most n elements’ for a fixed n, but quantifiers cannot range over numbers or sets.",
          "Suggests that saying ‘at most n for some n’ would need an infinite disjunction.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, truth: Tarski&rsquo;s definition of what it is for a formula to be satisfied in a structure, and what it means
      for a structure to be a model of a theory.
    </p>
  ),
};
