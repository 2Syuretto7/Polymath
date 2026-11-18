import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { LiarTruthViz } from "@/components/viz/LiarTruthViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.4.4",
  minutes: 75,
  links: {
    revisits: ["m20.4.3", "m20.2.2", "m20.4.1"],
    foreshadows: ["m20.5.3", "m20.6.1", "m20.6.6"],
  },

  puzzle: (
    <>
      <p>
        Arithmetic can express &ldquo;σ is provable&rdquo; by a formula about codes. Can it also express &ldquo;σ is
        true&rdquo;? Truth in ℕ seems the most natural property of sentences there is. Yet if arithmetic could say it, a
        sentence could say of itself &ldquo;I am not true&rdquo;.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Assume a truth formula exists, then follow each case to its end.</p>
      <LiarTruthViz />
    </>
  ),

  theory: (
    <>
      <Definition title="definability of truth">
        <p>
          A formula True(x) <strong>defines arithmetical truth</strong> if for every sentence σ of arithmetic, ℕ ⊨ True(⌜σ⌝)
          if and only if ℕ ⊨ σ. Equivalently, every instance of the T-schema <M>{"\\mathrm{True}(\\ulcorner\\sigma\\urcorner) \\leftrightarrow \\sigma"}</M>{" "}
          is true in ℕ.
        </p>
      </Definition>

      <Theorem title="Tarski's undefinability theorem (1933, 1936)">
        <p>
          No formula of the language of arithmetic defines arithmetical truth. More generally, no consistent theory extending
          Q proves all instances of the T-schema for a formula of its own language.
        </p>
      </Theorem>

      <Example title="the proof">
        <p>
          Suppose True(x) defines truth. Apply the diagonal lemma to ¬True(x) to get L with ℕ ⊨ L ↔ ¬True(⌜L⌝). By the
          T-schema, ℕ ⊨ L ↔ True(⌜L⌝). Then L is true in ℕ if and only if it is not, which is impossible. This is the liar
          paradox, turned from a puzzle into a theorem.
        </p>
      </Example>

      <Remark title="truth and provability compared">
        <p>
          The provable sentences of an effectively axiomatised theory form a definable set: Prov(x) defines them. The true
          sentences do not. So the two sets differ, which gives a second proof of incompleteness: no such theory proves exactly
          the truths. Tarski&rsquo;s fix is a hierarchy: truth for a language can be defined in a richer metalanguage, as his
          inductive definition of satisfaction does, but never inside the language itself.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does Tarski&rsquo;s theorem say?</p>,
      answer: {
        kind: "choice",
        options: ["No formula of arithmetic defines the set of true arithmetical sentences", "No sentence of arithmetic is true", "Truth is the same as provability", "Every true sentence is provable"],
        correct: [0],
      },
    },
    {
      key: "tool",
      rung: "check",
      prompt: <p>Which lemma supplies the liar sentence L?</p>,
      answer: { kind: "choice", options: ["The diagonal lemma", "Zorn’s lemma", "König’s lemma", "The deduction theorem"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many steps does each case take to reach a contradiction?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prov",
      rung: "apply",
      prompt: <p>Why does the same argument not show that provability is undefinable?</p>,
      answer: {
        kind: "choice",
        options: ["Prov does not satisfy the T-schema: unprovable sentences can be true", "Provability is not about sentences", "The diagonal lemma fails for Prov", "Prov is not a formula"],
        correct: [0],
      },
    },
    {
      key: "meta",
      rung: "apply",
      prompt: <p>Where, according to Tarski, can truth for a language be defined?</p>,
      answer: { kind: "choice", options: ["In a richer metalanguage", "In the language itself", "Nowhere", "Only in natural language"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use Tarski&rsquo;s theorem to show that the true sentences of arithmetic are not the theorems of any effectively axiomatised theory.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the theorems of an effectively axiomatised theory are defined by a formula Prov.",
          "Supposes the theorems are exactly the truths, so Prov would define truth.",
          "Concludes this contradicts Tarski’s theorem.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>English seems able to talk about the truth of its own sentences. Does Tarski&rsquo;s theorem show English is inconsistent?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the liar arises in English and that Tarski thought natural language semantically closed and so inconsistent.",
          "Considers an alternative, such as truth-value gaps or Kripke’s theory of truth.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Gödel and Tarski showed what formal theories cannot do. To make that precise for algorithms in general, one needs a
        definition of what an algorithm is. In 1936 Alan Turing gave one by analysing a human clerk calculating with pencil
        and paper.
      </p>
      <p>
        Next, Turing machines: a tape, a head, a finite table of rules, and the claim that nothing more is needed for any
        computation at all, including a universal machine that runs every other.
      </p>
    </>
  ),
};
