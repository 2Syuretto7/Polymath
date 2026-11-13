import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { RuleSoundViz } from "@/components/viz/RuleSoundViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.1.1",
  minutes: 80,
  links: {
    revisits: ["p2.3.1", "p2.2.3", "p2.3.4"],
    foreshadows: ["p17.1.2", "p17.2.1", "m20.1.1"],
  },

  puzzle: (
    <>
      <p>
        In Logic I you learned two ways of showing that an argument is valid: truth tables, which look at meanings, and
        derivations, which push symbols around by rules. Why should the second agree with the first? What guarantees that a
        rule of proof never leads from truths to a falsehood?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a rule of inference and check, row by row, whether it can lead from true premises to a false conclusion.</p>
      <RuleSoundViz />
    </>
  ),

  theory: (
    <>
      <Definition title="syntax and semantics">
        <p>
          Write Γ ⊢ φ when φ can be derived from the premises Γ by the rules of a proof system, and Γ ⊨ φ when every valuation
          making all of Γ true makes φ true. The first is a <strong>syntactic</strong> notion, about strings and rules; the
          second is <strong>semantic</strong>, about truth. Metalogic studies how they are related.
        </p>
      </Definition>

      <Definition title="soundness">
        <p>
          A proof system is <strong>sound</strong> if whenever Γ ⊢ φ, also Γ ⊨ φ. Every derivable argument is valid: the rules
          never lead from true premises to a false conclusion.
        </p>
      </Definition>

      <Example title="the proof of soundness">
        <p>
          The proof is by <strong>induction on the length of derivations</strong>. Show that every line of a derivation is a
          semantic consequence of the premises and assumptions in force at that line. A premise or assumption trivially is.
          For the inductive step, check each rule: for instance, if Γ ⊨ φ → ψ and Γ ⊨ φ, then any valuation making Γ true makes
          φ and φ → ψ true, hence ψ, so Γ ⊨ ψ. Rules that discharge assumptions, such as conditional proof, need a little more
          care: if Γ, φ ⊨ ψ, then Γ ⊨ φ → ψ.
        </p>
      </Example>

      <Theorem title="consistency">
        <p>
          A corollary: the system cannot derive a contradiction from no premises. If ⊢ φ ∧ ¬φ, soundness would give
          ⊨ φ ∧ ¬φ, but no valuation makes φ ∧ ¬φ true. So soundness shows the system is consistent.
        </p>
      </Theorem>

      <Remark title="is the justification circular?">
        <p>
          The soundness proof itself uses deductive reasoning, including modus ponens. Susan Haack and others have asked
          whether this makes the justification of deduction circular. A common reply is that the proof is not meant to
          persuade someone who doubts modus ponens, but to show that the formal system matches the semantic notion it was
          designed to capture.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for a proof system to be sound?</p>,
      answer: {
        kind: "choice",
        options: ["If Γ ⊢ φ then Γ ⊨ φ", "If Γ ⊨ φ then Γ ⊢ φ", "Every formula is derivable", "Every valid argument has a short proof"],
        correct: [0],
      },
    },
    {
      key: "method",
      rung: "check",
      prompt: <p>How is soundness usually proved?</p>,
      answer: {
        kind: "choice",
        options: ["By induction on the length of derivations, checking each rule", "By building a maximal consistent set", "By a single truth table", "By listing all derivations"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which of these rules is not truth-preserving?</p>,
      answer: { kind: "choice", options: ["Affirming the consequent", "Modus tollens", "Disjunctive syllogism", "Hypothetical syllogism"], correct: [0] },
    },
    {
      key: "rows",
      rung: "apply",
      prompt: <p>In the visualisation, choose denying the antecedent. How many rows have true premises and a false conclusion?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "unsound",
      rung: "apply",
      prompt: <p>A student adds affirming the consequent as a rule to the proof system. What follows?</p>,
      answer: {
        kind: "choice",
        options: [
          "The system becomes unsound: it can derive conclusions that do not follow from the premises.",
          "The system becomes complete.",
          "Nothing changes, since the rule is never used.",
          "The system becomes inconsistent with no premises at all.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the case of the soundness proof for conditional proof: if Γ, φ ⊨ ψ, then Γ ⊨ φ → ψ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes any valuation making every member of Γ true.",
          "Considers two cases: if it makes φ false, φ → ψ is true; if it makes φ true, then by Γ, φ ⊨ ψ it makes ψ true, so φ → ψ is true.",
          "Concludes that φ → ψ is true in every valuation making Γ true, so Γ ⊨ φ → ψ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The soundness proof uses modus ponens in the metalanguage. Does that make it circular, and if so, does it matter?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the proof reasons deductively about deduction, using the very rules it vindicates.",
          "Considers what the proof is for: convincing a sceptic, or showing that the system matches the semantics.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between Γ ⊢ φ and Γ ⊨ φ, what soundness says, how it is proved by induction on derivations, and why it implies that the proof system is consistent.",

  glimpse: (
    <p>
      Next, completeness, the converse of soundness: every valid argument can be derived, proved by extending a consistent set
      to a maximal one.
    </p>
  ),
};
