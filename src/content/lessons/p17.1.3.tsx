import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { AdequacyViz } from "@/components/viz/AdequacyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.1.3",
  minutes: 80,
  links: {
    revisits: ["p17.1.2", "p2.2.2", "p2.2.1"],
    foreshadows: ["p17.4.1", "p17.2.1", "m20.1.1"],
  },

  puzzle: (
    <>
      <p>
        Sentential logic has a handful of connectives: not, and, or, if, if and only if. But there are infinitely many ways a
        sentence&rsquo;s truth could depend on the truth of its parts. Could some of them be impossible to express? And are
        five connectives more than we need?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose any truth function of P and Q, and see whether a given set of connectives can express it.</p>
      <AdequacyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="truth functions and adequacy">
        <p>
          An n-place <strong>truth function</strong> assigns T or F to each of the 2ⁿ rows of a truth table, so there are
          2 to the power 2ⁿ of them: 16 of two places. A set of connectives is <strong>expressively adequate</strong> if every truth
          function is expressed by some formula built with those connectives alone.
        </p>
      </Definition>

      <Theorem title="disjunctive normal form">
        <p>
          The set {"{¬, ∧, ∨}"} is adequate. For each row where the function is true, form the conjunction of the atoms true in
          that row and the negations of those false in it; then join these conjunctions with ∨. The result is true in exactly
          the chosen rows. If there are no such rows, P ∧ ¬P will do.
        </p>
      </Theorem>

      <Example title="smaller adequate sets">
        <p>
          Since A ∨ B is equivalent to ¬(¬A ∧ ¬B), the set {"{¬, ∧}"} is adequate; similarly {"{¬, ∨}"} and {"{¬, →}"}. Sheffer
          (1913) noticed that a single connective suffices: with A ↑ B meaning &ldquo;not both A and B&rdquo;, ¬A is A ↑ A and
          A ∧ B is (A ↑ B) ↑ (A ↑ B). The same holds for ↓, &ldquo;neither A nor B&rdquo;. Computer chips are built from NAND
          gates for this reason.
        </p>
      </Example>

      <Remark title="showing inadequacy">
        <p>
          To show a set is not adequate, find a property shared by all its formulas but not by every truth function. Every
          formula built from ∧ and ∨ alone is true when all its atoms are true, so {"{∧, ∨}"} cannot express ¬P. Such proofs
          are by induction on the construction of formulas, like the soundness proof.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for a set of connectives to be expressively adequate?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every truth function can be expressed using only those connectives.",
          "Every valid argument can be derived using them.",
          "Every formula built from them is valid.",
          "They can express every English sentence.",
        ],
        correct: [0],
      },
    },
    {
      key: "single",
      rung: "check",
      prompt: <p>Which single connective is expressively adequate on its own?</p>,
      answer: { kind: "choice", options: ["↑ (not both)", "∧", "∨", "→"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, make the function true exactly in the rows T F and F T (exclusive or) and choose {"{∧, ∨}"}. What does it report?</p>,
      answer: { kind: "choice", options: ["Not expressible", "P ∨ Q", "P ∧ Q", "(P ∧ ¬Q) ∨ (¬P ∧ Q)"], correct: [0] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many truth functions of three sentence letters are there?</p>,
      answer: { kind: "numeric", value: 256 },
    },
    {
      key: "nor",
      rung: "apply",
      prompt: <p>With A ↓ B meaning &ldquo;neither A nor B&rdquo;, which formula is equivalent to ¬P?</p>,
      answer: { kind: "choice", options: ["P ↓ P", "P ↓ ¬P", "(P ↓ P) ↓ (P ↓ P)", "P ↓ Q"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that {"{¬, →}"} is expressively adequate, using the adequacy of {"{¬, ∧, ∨}"}.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows A ∨ B is equivalent to ¬A → B, by checking the truth table or arguing case by case.",
          "Shows A ∧ B is equivalent to ¬(A → ¬B).",
          "Concludes that any formula in ¬, ∧ and ∨ can be rewritten with ¬ and →, so the set is adequate.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Expressive adequacy concerns truth functions. Does it show that sentential logic can express everything that &ldquo;and&rdquo;, &ldquo;or&rdquo; and &ldquo;if&rdquo; mean in English?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that adequacy covers only truth-functional meaning.",
          "Gives a case where English goes beyond truth functions, such as the temporal ‘and then’, or counterfactual ‘if’.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a truth function is, why disjunctive normal form shows that ¬, ∧ and ∨ are expressively adequate, why ↑ alone is adequate, and why ∧ and ∨ alone are not.",

  glimpse: (
    <p>
      Next, first-order metatheory: soundness and completeness for predicate logic, where Henkin&rsquo;s method must also
      supply witnesses for existential statements.
    </p>
  ),
};
