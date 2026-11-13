import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["L₀", "L₁", "L₂", "no level"];
const ITEMS: SortItem[] = [
  { text: "Snow is white.", cat: "L₀", why: "It says nothing about truth, so it belongs to the object language." },
  { text: "‘Snow is white’ is true.", cat: "L₁", why: "It applies the truth predicate for L₀ to a sentence of L₀." },
  { text: "Some sentence of L₀ is true.", cat: "L₁", why: "It quantifies over sentences of L₀ and uses truth-in-L₀." },
  { text: "‘‘Snow is white’ is true’ is true.", cat: "L₂", why: "It applies truth to a sentence of L₁, which needs the predicate true-in-L₁." },
  { text: "Grass is green and ‘2 + 2 = 4’ is true.", cat: "L₁", why: "Its highest ingredient is truth for a sentence of L₀." },
  { text: "‘Some sentence of L₀ is true’ is true.", cat: "L₂", why: "It applies truth to a sentence of L₁." },
  { text: "This sentence is not true.", cat: "no level", why: "It would have to apply a truth predicate to a sentence of its own level, which the hierarchy forbids." },
  { text: "Every sentence at every level is true or not true.", cat: "no level", why: "It needs a truth predicate for all levels at once, which no level supplies." },
];

export const lesson: LessonContent = {
  id: "p17.5.2",
  minutes: 80,
  links: {
    revisits: ["p17.5.1", "p17.2.1", "p15.3.2"],
    foreshadows: ["p17.5.3", "m20.4.4", "p29.4.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Snow is white&rdquo; is true if and only if snow is white. This looks too obvious to be informative. Yet Alfred
        Tarski built a precise theory of truth on exactly this pattern, and in doing so proved that no rich enough language can
        contain its own truth predicate. How can a triviality lead to a deep theorem?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each sentence to the lowest level of Tarski&rsquo;s hierarchy at which it can be said.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Lowest level of the hierarchy?" />
    </>
  ),

  theory: (
    <>
      <Definition title="material adequacy">
        <p>
          In &ldquo;The Concept of Truth in Formalized Languages&rdquo; (1933) and &ldquo;The Semantic Conception of
          Truth&rdquo; (1944), Tarski required that an adequate definition of truth for a language L entail every instance of{" "}
          <strong>Convention T</strong>: S is true if and only if p, where S names a sentence of L and p translates it. The
          definition is stated in a <strong>metalanguage</strong> that can name the sentences of the object language L.
        </p>
      </Definition>

      <Example title="the recursive definition">
        <p>
          For a first-order language, truth is defined through <strong>satisfaction</strong> by assignments of objects to
          variables: an atomic formula is satisfied when the objects stand in the named relation; ¬A when A is not; A ∧ B when
          both are; ∀x A when A is satisfied however x is reassigned. A sentence is true when every assignment satisfies it.
          This is the definition of truth in a model used throughout logic.
        </p>
      </Example>

      <Theorem title="Tarski’s undefinability theorem">
        <p>
          No consistent language that can express its own syntax, such as arithmetic, can define its own truth predicate. If
          it could, diagonalisation would produce a sentence equivalent to &ldquo;this sentence is not true&rdquo;, and the
          liar argument would yield a contradiction. So truth for L must be defined in a richer language, giving a hierarchy:
          truth for L₀ in L₁, truth for L₁ in L₂, and so on.
        </p>
      </Theorem>

      <Remark title="limitations">
        <p>
          Natural languages are &ldquo;semantically closed&rdquo;, and Tarski thought them inconsistent. Kripke objected that the
          hierarchy fits ordinary talk badly: if Nixon says &ldquo;everything Dean says about Watergate is false&rdquo; and Dean
          says the same of Nixon, each needs a level above the other. Davidson later used Tarski&rsquo;s method, in reverse, as
          a theory of meaning for natural language.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "conv",
      rung: "check",
      prompt: <p>What does Tarski&rsquo;s Convention T require of a definition of truth for L?</p>,
      answer: {
        kind: "choice",
        options: [
          "It must entail every instance of: S is true if and only if p, where p translates S.",
          "It must say what truth is in every possible language.",
          "It must be stated in L itself.",
          "It must define truth as coherence.",
        ],
        correct: [0],
      },
    },
    {
      key: "undef",
      rung: "check",
      prompt: <p>What does Tarski&rsquo;s undefinability theorem say?</p>,
      answer: {
        kind: "choice",
        options: [
          "A consistent language that can express its own syntax cannot define its own truth predicate.",
          "Truth cannot be defined in any language.",
          "Every language is inconsistent.",
          "Arithmetic truth is decidable.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at which level does &ldquo;‘‘Snow is white’ is true’ is true&rdquo; first appear?</p>,
      answer: { kind: "choice", options: ["L₂", "L₀", "L₁", "No level"], correct: [0] },
    },
    {
      key: "sat",
      rung: "apply",
      prompt: <p>Why does Tarski define truth through satisfaction rather than directly?</p>,
      answer: {
        kind: "choice",
        options: [
          "Sentences are built from formulas with free variables, and the recursion must pass through those formulas.",
          "Because truth is not a property of sentences.",
          "Because satisfaction is a psychological notion.",
          "Because quantifiers do not appear in sentences.",
        ],
        correct: [0],
      },
    },
    {
      key: "nixon",
      rung: "apply",
      prompt: <p>What is Kripke&rsquo;s Nixon and Dean example meant to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "Ordinary statements about truth cannot always be assigned levels in advance, since their level depends on the facts.",
          "Nixon was a liar.",
          "Truth has no definition.",
          "The T-schema is false.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Tarski&rsquo;s hierarchy of languages a good response to the liar paradox? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States how the hierarchy blocks the liar: no sentence can apply truth to sentences of its own level.",
          "Gives an objection, such as the fit with natural language or the Nixon and Dean case.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does Tarski&rsquo;s definition tell us what truth is, or only which sentences are true?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the definition is a list of clauses for one language, with no general account across languages.",
          "Considers Field’s complaint that it reduces truth to primitive denotation without explaining it, or a deflationist reply that nothing more is needed.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Tarski’s Convention T, the recursive definition of truth through satisfaction, and his theorem that a language cannot define its own truth.",

  glimpse: (
    <p>
      Next, Kripke&rsquo;s theory of truth: a single language that contains its own truth predicate, built up in stages to a
      fixed point, with the liar left neither true nor false.
    </p>
  ),
};
