import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { KripkeForceViz } from "@/components/viz/KripkeForceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.4.2",
  minutes: 80,
  links: {
    revisits: ["p17.4.1", "p17.1.2", "p2.3.2"],
    foreshadows: ["p22.4.1", "p26.1.1", "p17.4.3"],
  },

  puzzle: (
    <>
      <p>
        Either the digit 7 occurs infinitely often in the decimal expansion of π, or it does not. Brouwer would refuse to
        assert this. Nobody has proved either alternative, and no computation of digits could settle it. Is it reasonable to
        withhold a law as basic as the excluded middle?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Click the worlds to establish p at some stages of knowledge, and check which formulas the root forces.</p>
      <KripkeForceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the BHK interpretation">
        <p>
          For Brouwer, mathematical truth is what can be constructed. Heyting and Kolmogorov made this precise: a proof of A ∧
          B is a proof of A and a proof of B; a proof of A ∨ B is a proof of one of them, together with which; a proof of A →
          B is a method turning any proof of A into a proof of B; and ¬A means A → ⊥, a method turning any proof of A into
          absurdity. On this reading A ∨ ¬A would require a method that decides every A, which we do not have.
        </p>
      </Definition>

      <Example title="what is lost and what is kept">
        <p>
          Intuitionistic logic, axiomatised by Heyting in 1930, drops excluded middle and double negation elimination ¬¬A →
          A. It keeps A → ¬¬A, ¬(A ∧ ¬A) and even ¬¬(A ∨ ¬A). Proof by contradiction of a negative statement, deriving ⊥
          from A to get ¬A, remains; deriving ⊥ from ¬A to get A does not. Existence proofs must construct a witness.
        </p>
      </Example>

      <Definition title="Kripke semantics (1965)">
        <p>
          A model is a set of stages of knowledge, ordered by &ldquo;may develop into&rdquo;, with atomic facts persisting
          upwards. A stage forces A ∨ B if it forces one of them; it forces ¬A if no later stage forces A; it forces A → B if
          every later stage that forces A forces B. Intuitionistic logic is sound and complete for these models. At a stage
          where p is not yet settled, neither p nor ¬p is forced.
        </p>
      </Definition>

      <Remark title="why it matters">
        <p>
          Intuitionistic proofs are programs: by the Curry–Howard correspondence, a proof of A → B is a function from evidence
          for A to evidence for B. Proof assistants such as Coq and Agda are built on this. Michael Dummett defended
          intuitionism on grounds of meaning: if meaning is given by conditions of proof, not by truth conditions that may
          outrun proof, then excluded middle is unjustified.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lem",
      rung: "check",
      prompt: <p>Which law is NOT valid in intuitionistic logic?</p>,
      answer: { kind: "choice", options: ["A ∨ ¬A", "A → A", "¬(A ∧ ¬A)", "A → ¬¬A"], correct: [0] },
    },
    {
      key: "bhk",
      rung: "check",
      prompt: <p>On the BHK interpretation, what is a proof of A ∨ B?</p>,
      answer: {
        kind: "choice",
        options: [
          "A proof of A or a proof of B, together with an indication of which.",
          "A proof that not both are false.",
          "A truth table.",
          "A proof of A and a proof of B.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set p true at w₁ and w₂ but not at w₀. Which formula does w₀ force?</p>,
      answer: { kind: "choice", options: ["¬¬p", "p", "¬p", "¬¬p → p"], correct: [0] },
    },
    {
      key: "neg",
      rung: "apply",
      prompt: <p>Which proof strategy is intuitionistically acceptable?</p>,
      answer: {
        kind: "choice",
        options: [
          "Assume A, derive a contradiction, conclude ¬A.",
          "Assume ¬A, derive a contradiction, conclude A.",
          "Show that ¬A is impossible and conclude that some object exists without constructing it.",
          "Assert A ∨ ¬A for any A.",
        ],
        correct: [0],
      },
    },
    {
      key: "kept",
      rung: "apply",
      prompt: <p>Which formula, a weakened excluded middle, is forced at every stage of every Kripke model?</p>,
      answer: { kind: "choice", options: ["¬¬(p ∨ ¬p)", "p ∨ ¬p", "¬p ∨ ¬¬p", "¬¬p → p"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Should we accept that either the digit 7 occurs infinitely often in π or it does not? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the intuitionist reason for withholding it, that truth requires a proof or a decision method.",
          "States the classical reply, such as that the digits are determined whether or not we compute them.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Dummett argued that the meaning of a statement must be given by what would count as proving it. If he is right, what follows for excluded middle?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that understanding is shown in use, and we cannot manifest a grasp of truth conditions that may transcend proof.",
          "Draws the consequence that A ∨ ¬A is not justified for undecided A, and considers a realist objection.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why intuitionists reject excluded middle, the BHK reading of the connectives, and how a Kripke model shows that p ∨ ¬p can fail.",

  glimpse: (
    <p>
      Next, relevance logic: the complaint that classical logic lets anything follow from a contradiction and a necessary
      truth follow from anything, and logics that demand the premises be relevant to the conclusion.
    </p>
  ),
};
