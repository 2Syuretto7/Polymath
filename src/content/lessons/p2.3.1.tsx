import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { JustifyViz } from "@/components/viz/JustifyViz";
import type { LessonContent } from "@/lib/types";

const rule = { fontFamily: "var(--font-mono)", fontSize: 13.5 };

export const lesson: LessonContent = {
  id: "p2.3.1",
  minutes: 70,
  links: {
    revisits: ["p2.1.3", "p2.2.3"],
    parallels: ["m1.3.1"],
    foreshadows: ["p17.1.1", "m20.2.3"],
  },

  puzzle: (
    <>
      <p>
        Truth tables decide validity, but they do not resemble reasoning. Nobody who concludes that the keys are on the table
        writes out sixteen rows. They think: the keys are in the bag or on the table; they are not in the bag; so they are on
        the table. One small step, then another.
      </p>
      <p>
        Can such step-by-step reasoning be made as exact as a truth table? What would the allowed steps be, and how would we
        know we had enough of them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A <strong>natural deduction</strong> system lists a few small steps, each obviously valid, and calls a chain of such
        steps a proof. Each connective gets rules for using a sentence that contains it (<em>elimination</em>) and for arriving
        at one (<em>introduction</em>). This chapter builds such a system, one group of rules at a time. Every proof is a list
        of numbered lines, each a premise or justified by a rule applied to earlier lines.
      </p>
      <p>
        Below are three finished proofs with the justifications removed. Using the rules in the theory section, work out which
        rule produced each line.
      </p>
      <JustifyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the first rules">
        <p>Here φ and ψ are any sentences. Each rule says: if the lines above the arrow appear earlier in the proof, you may write the line after it.</p>
        <table className="table">
          <thead><tr><th>Rule</th><th>From</th><th>Infer</th></tr></thead>
          <tbody>
            <tr><td>∧I (conjunction introduction)</td><td style={rule}>φ, ψ</td><td style={rule}>φ ∧ ψ</td></tr>
            <tr><td>∧E (conjunction elimination)</td><td style={rule}>φ ∧ ψ</td><td style={rule}>φ (or ψ)</td></tr>
            <tr><td>∨I (disjunction introduction)</td><td style={rule}>φ</td><td style={rule}>φ ∨ ψ (or ψ ∨ φ)</td></tr>
            <tr><td>DS (disjunctive syllogism)</td><td style={rule}>φ ∨ ψ, ¬φ</td><td style={rule}>ψ</td></tr>
            <tr><td>→E (modus ponens)</td><td style={rule}>φ → ψ, φ</td><td style={rule}>ψ</td></tr>
            <tr><td>↔E (biconditional elimination)</td><td style={rule}>φ ↔ ψ, φ</td><td style={rule}>ψ (and from ψ, φ)</td></tr>
            <tr><td>DN (double negation)</td><td style={rule}>¬¬φ</td><td style={rule}>φ</td></tr>
          </tbody>
        </table>
      </Definition>

      <Definition title="proof">
        <p>
          A <strong>proof</strong> of ψ from premises φ₁, &hellip;, φₙ is a finite sequence of numbered lines, ending in ψ, in
          which every line is either a premise or follows from earlier lines by a rule. Each line is written with its{" "}
          <strong>justification</strong>: the rule and the numbers of the lines it uses. If there is such a proof we write
        </p>
        <p className="mono" style={{ textAlign: "center" }}>φ₁, &hellip;, φₙ ⊢ ψ</p>
        <p>The single turnstile ⊢ means &ldquo;provable&rdquo;, in contrast to ⊨, &ldquo;true in every valuation&rdquo;.</p>
      </Definition>

      <Example title="the keys">
        <p>With K: the keys are in the bag, and T: they are on the table.</p>
        <table className="table">
          <tbody>
            <tr><td className="mono">1</td><td className="mono">K ∨ T</td><td className="mono-meta">premise</td></tr>
            <tr><td className="mono">2</td><td className="mono">¬K</td><td className="mono-meta">premise</td></tr>
            <tr><td className="mono">3</td><td className="mono">T</td><td className="mono-meta">DS 1, 2</td></tr>
          </tbody>
        </table>
      </Example>

      <Remark title="rules apply to whole lines">
        <p>
          A rule applies only to a whole line, matched by its main connective. From (A ∧ B) → C you may not infer A → C by
          ∧E: the main connective is →, and ∧E only applies to lines that are conjunctions. This is a common source of errors,
          and of invalid reasoning, so check the main connective before every step.
        </p>
      </Remark>

      <Remark title="soundness of the rules">
        <p>
          Each rule is valid by the truth tables: whenever the lines it uses are true, so is the line it produces. So anything
          provable is entailed: if φ₁, &hellip;, φₙ ⊢ ψ then φ₁, &hellip;, φₙ ⊨ ψ. The converse, that every valid argument can
          be proved, needs more rules, which the rest of this chapter supplies.
        </p>
      </Remark>

      <Quote source={<>Gerhard Gentzen, &ldquo;Investigations into Logical Deduction&rdquo; (1935; translated by M. E. Szabo)</>}>
        <p>
          My starting point was this: the formalization of logical deduction, especially as it has been developed by Frege,
          Russell, and Hilbert, is rather far removed from the forms of deduction used in practice in mathematical proofs.
        </p>
      </Quote>
      <p>
        Gentzen, and independently Jaśkowski, designed natural deduction to fix this. The format with indented subproofs used
        in this course is due to Frederic Fitch.
      </p>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>From A → B and A, which rule lets you infer B?</p>,
      answer: { kind: "choice", options: ["∧E", "→E", "DS", "∨I"], correct: [1] },
    },
    {
      key: "add",
      rung: "check",
      prompt: <p>From A alone, which of these can be inferred in one step by ∨I?</p>,
      answer: { kind: "choice", options: ["A ∧ B", "A ∨ B", "A → B", "¬¬A"], correct: [1] },
    },
    {
      key: "misuse",
      rung: "apply",
      prompt: <p>Which of these steps is a correct use of a rule?</p>,
      answer: {
        kind: "choice",
        options: [
          "From (A ∧ B) → C, infer A → C by ∧E",
          "From ¬(A ∧ B), infer ¬A by ∧E",
          "From (A ∨ B) ∧ C, infer C by ∧E",
          "From A ∨ B, infer A by ∨I",
        ],
        correct: [2],
      },
    },
    {
      key: "lines",
      rung: "apply",
      prompt: (
        <p>
          What is the fewest number of lines, counting the two premises, in a proof of B ∧ A from the premises A ∧ B and C?
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "ds",
      rung: "apply",
      prompt: <p>From (A ∨ B) ∨ C and ¬(A ∨ B), what does DS give in one step?</p>,
      answer: { kind: "choice", options: ["A", "B", "C", "A ∨ B"], correct: [2] },
    },
    {
      key: "build",
      rung: "prove",
      prompt: (
        <p>
          Give a proof, with every line justified, of D from the premises A ∧ (B → C), A → B and C → D.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gets A and B → C from the first premise by ∧E.",
          "Gets B from A → B and A by →E.",
          "Gets C by →E, then D by →E.",
          "Numbers each line and cites the rule and the lines used.",
        ],
      },
    },
    {
      key: "sound",
      rung: "stretch",
      prompt: (
        <p>
          Show, by a truth table or by reasoning about valuations, that the rule DS is truth-preserving. Then suggest a rule
          that looks plausible but is not, and show a valuation where it fails.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Checks that whenever φ ∨ ψ and ¬φ are both true, ψ is true.",
          "Proposes an unsound rule, such as from φ ∨ ψ and φ infer ¬ψ, or from φ → ψ and ψ infer φ.",
          "Gives a valuation making the premises true and the conclusion false.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a proof in natural deduction is, and walk through how modus ponens and disjunctive syllogism are used in one.",

  glimpse: (
    <p>
      The relation between ⊢ and ⊨ is the central question of metalogic. Logic II: Metalogic and Beyond proves that, with the
      full set of rules, they coincide; Mathematical Logic and Set Theory studies deduction as a mathematical object in its own
      right.
    </p>
  ),
};
