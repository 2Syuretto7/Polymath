import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { AncestralViz } from "@/components/viz/AncestralViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.1.2",
  minutes: 80,
  links: {
    revisits: ["p18.1.1", "p2.4.2", "p2.4.1"],
    foreshadows: ["p18.1.3", "p18.2.2", "p18.3.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Every boy loves some girl&rdquo; can mean that each boy has a girl he loves, or that one girl is loved by every
        boy. For two thousand years logic, built on subject and predicate, could not represent the difference properly, nor
        prove simple things such as: if some girl is loved by every boy, then every boy loves some girl. A short book of
        1879 changed that. What did it do?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a person and grow, stage by stage, the set of those who follow them in the parent series.</p>
      <AncestralViz />
    </>
  ),

  theory: (
    <>
      <Definition title="function and argument">
        <p>
          In the <em>Begriffsschrift</em> (&ldquo;concept-script&rdquo;, 1879), Frege replaced the analysis of a sentence into
          subject and predicate with the analysis into <strong>function and argument</strong>. In &ldquo;Cato killed
          Cicero&rdquo;, &ldquo;… killed Cicero&rdquo;, &ldquo;Cato killed …&rdquo; and &ldquo;… killed …&rdquo; are all
          functions, and which one we pick out is a matter of interest, not of logic. Generality is expressed by a quantifier
          binding a variable, and quantifiers can be stacked in any order, which is what multiple generality needs.
        </p>
      </Definition>

      <Example title="a formal system">
        <p>
          The book gives a language with negation, the conditional and the universal quantifier as primitives, nine axioms,
          and rules of inference: modus ponens and a rule of substitution, with a rule for generality. Every step of a proof
          is checkable by its form, so no assumption can slip in unnoticed. Frege&rsquo;s aim was to see whether arithmetic
          needs anything beyond logic. Its two-dimensional notation never caught on, but the system is essentially
          second-order predicate logic, the first ever stated.
        </p>
      </Example>

      <Definition title="the ancestral">
        <p>
          Part III defines, for any relation R, what it is for y to <strong>follow x in the R-series</strong>: y has every
          property F that is hereditary in the R-series, meaning that whatever has F passes it to everything it bears R to,
          and that belongs to everything x bears R to. With R as successor, this defines being a natural number without
          appeal to counting, and proof by induction becomes a theorem of logic.
        </p>
      </Definition>

      <Remark title="significance">
        <p>
          Frege compared his script to a microscope: worse than the eye for everyday use, far better for exact work. Few
          read it at the time, and reviewers judged it inferior to Boole&rsquo;s algebra. Yet modern quantificational logic,
          and with it the idea of a formal proof that a machine could check, begins here.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fa",
      rung: "check",
      prompt: <p>What analysis of sentences did Frege put in place of subject and predicate?</p>,
      answer: {
        kind: "choice",
        options: ["Function and argument", "Substance and accident", "Sense and reference", "Form and matter"],
        correct: [0],
      },
    },
    {
      key: "multi",
      rung: "check",
      prompt: <p>What could Frege&rsquo;s quantifiers handle that subject and predicate logic could not?</p>,
      answer: {
        kind: "choice",
        options: [
          "Multiple generality, with several quantifiers nested in a definite order.",
          "Sentences with only one name.",
          "Arguments with two premises.",
          "Negation.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, start from Ada and run every stage. How many people follow Ada in the parent series?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "scope",
      rung: "apply",
      prompt: <p>Which formula says that one girl is loved by every boy?</p>,
      answer: {
        kind: "choice",
        options: ["∃y(Gy ∧ ∀x(Bx → Lxy))", "∀x(Bx → ∃y(Gy ∧ Lxy))", "∀x∀y(Lxy)", "∃x∃y(Bx ∧ Gy)"],
        correct: [0],
      },
    },
    {
      key: "anc",
      rung: "apply",
      prompt: <p>Why did the definition of the ancestral matter to Frege&rsquo;s logicism?</p>,
      answer: {
        kind: "choice",
        options: [
          "It defines following in a series without counting, so being a natural number and induction can be handled by logic alone.",
          "It shows that family trees are infinite.",
          "It replaces the conditional.",
          "It proves that every relation is transitive.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is a formal language like the Begriffsschrift better than ordinary language for doing philosophy? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what the formal language gains, such as clear scope of quantifiers and gapless proofs.",
          "Considers what it may lose, such as nuance, context or the ordinary meanings philosophers want to study.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Frege defined the ancestral by quantifying over all hereditary properties. Is that circular, given that the descendants form one such property?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the definition and notes that the property of being a descendant is among those quantified over.",
          "Considers whether this impredicativity is vicious, or harmless because the definition picks out an existing property rather than creating it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Frege&rsquo;s distinction between concept and object, and the puzzle of why &ldquo;the concept horse&rdquo;
      seems not to name a concept.
    </p>
  ),
};
