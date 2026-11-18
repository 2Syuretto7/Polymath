import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { GraphModelViz } from "@/components/viz/GraphModelViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.2.2",
  minutes: 85,
  links: {
    revisits: ["m20.2.1", "m1.2.3", "m7.2.4"],
    foreshadows: ["m20.2.4", "m20.3.3", "m20.4.4"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Snow is white&rdquo; is true if and only if snow is white. That sounds empty, yet Tarski turned it into a
        precise definition of truth for formal languages. How can truth for infinitely many sentences, with quantifiers
        nested to any depth, be defined by finitely many clauses?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the edges of the graph and watch which sentences become true or false.</p>
      <GraphModelViz />
    </>
  ),

  theory: (
    <>
      <Definition title="satisfaction">
        <p>
          A formula with free variables is not true or false outright; it needs values. An <strong>assignment</strong> s maps
          variables to elements of |𝔄|, and extends to terms in the obvious way. Tarski defines 𝔄 ⊨ φ[s], &ldquo;𝔄 satisfies
          φ with s&rdquo;, by recursion on φ:
        </p>
        <MD>{"\\mathfrak A \\vDash Rt_1\\ldots t_n[s] \\iff (\\bar s(t_1),\\ldots,\\bar s(t_n)) \\in R^{\\mathfrak A},\\qquad \\mathfrak A \\vDash \\forall x\\,\\varphi[s] \\iff \\mathfrak A \\vDash \\varphi[s(x\\mid d)] \\text{ for every } d \\in |\\mathfrak A|,"}</MD>
        <p>with the usual clauses for ¬ and →. Here s(x | d) is s changed to send x to d.</p>
      </Definition>

      <Theorem title="sentences and models">
        <p>
          Whether 𝔄 ⊨ φ[s] depends only on the values of s at the free variables of φ. So a sentence σ is simply true or
          false in 𝔄, written 𝔄 ⊨ σ. 𝔄 is a <strong>model</strong> of a set of sentences Σ if it satisfies every member. Σ{" "}
          <strong>logically implies</strong> σ, Σ ⊨ σ, if every model of Σ is a model of σ; σ is <strong>valid</strong> if
          true in every structure.
        </p>
      </Theorem>

      <Example title="groups as models">
        <p>
          The group axioms form a set of three sentences, and the groups are exactly their models. &ldquo;Every group of
          exponent 2 is abelian&rdquo; says that the axioms together with <M>{"\\forall x\\,(x\\cdot x = e)"}</M> logically
          imply <M>{"\\forall x\\,\\forall y\\,(x\\cdot y = y\\cdot x)"}</M>. Isomorphic structures satisfy exactly the same
          sentences, by induction on formulas.
        </p>
      </Example>

      <Remark title="truth is not proof">
        <p>
          Satisfaction quantifies over all elements of a possibly infinite universe, and logical implication over all
          structures, so neither is a finite check. Whether ⊨ can be captured by a proof system is the question of the
          completeness theorem; whether truth in the natural numbers can be defined within arithmetic itself is the question
          of Tarski&rsquo;s undefinability theorem. Both come later in this course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "model",
      rung: "check",
      prompt: <p>What is a model of a set of sentences Σ?</p>,
      answer: { kind: "choice", options: ["A structure in which every sentence of Σ is true", "A proof of Σ", "A sentence implied by Σ", "A subset of Σ"], correct: [0] },
    },
    {
      key: "assign",
      rung: "check",
      prompt: <p>Why does the definition of satisfaction need assignments?</p>,
      answer: {
        kind: "choice",
        options: ["To give values to free variables, which arise inside quantified formulas", "Because sentences have no truth value", "To count the elements of the universe", "To choose a language"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the starting graph (the cycle 0 → 1 → 2 → 3 → 0), how many of the six sentences are true?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "nat",
      rung: "apply",
      prompt: <p>Is ∃x ∀y ¬(y &lt; x) true in (ℕ, &lt;)? In (ℤ, &lt;)?</p>,
      answer: { kind: "choice", options: ["True in ℕ, false in ℤ", "False in both", "True in both", "False in ℕ, true in ℤ"], correct: [0] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many different structures for the language {"{E}"} have universe {"{0, 1, 2, 3}"}?</p>,
      answer: { kind: "numeric", value: 65536 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if h is an isomorphism from 𝔄 to 𝔅, then for every sentence σ, 𝔄 ⊨ σ if and only if 𝔅 ⊨ σ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Strengthens the claim to formulas: 𝔄 ⊨ φ[s] if and only if 𝔅 ⊨ φ[h ∘ s], for every assignment s.",
          "Proves the atomic case using that h preserves functions, constants and relations.",
          "Handles ∀x using that h is a bijection, so every element of 𝔅 is h(d) for some d.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Find a sentence true in (ℚ, &lt;) and false in (ℤ, &lt;), and explain why no isomorphism can exist between them.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives a density sentence such as ∀x∀y(x < y → ∃z(x < z ∧ z < y)).",
          "Concludes from the previous result that the structures are not isomorphic, though both are countable.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, deduction for first-order logic: the quantifier axioms, the danger of variable capture, and the generalisation
      theorem.
    </p>
  ),
};
