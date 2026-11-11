import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TreeViz } from "@/components/viz/TreeViz";
import type { LessonContent } from "@/lib/types";

const rule = { fontFamily: "var(--font-mono)", fontSize: 13.5 };

export const lesson: LessonContent = {
  id: "p2.2.4",
  minutes: 80,
  links: {
    revisits: ["p0.4.4", "p2.2.2"],
    foreshadows: ["p2.5.3", "p17.1.1"],
  },

  puzzle: (
    <>
      <p>
        A truth table for an argument with eight sentence letters has 256 rows. Yet often a moment&rsquo;s thought settles the
        question: if the conclusion is A, and one premise is A ∧ (a very long sentence), the argument is plainly valid, and
        nearly all of those rows are wasted effort.
      </p>
      <p>
        Is there a method that is still mechanical and certain, but that looks only where a counterexample could hide?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A truth tree is a search for a counterexample. To test an argument, list the premises together with the negation of
        the conclusion, and ask: can these all be true at once? Then break each sentence into the simpler sentences that would
        make it true. A conjunction needs both parts, so they are added in a line. A disjunction needs one part or the other,
        so the tree branches. Each branch is one way of trying to make everything true.
      </p>
      <p>
        A branch that contains a sentence and its negation is impossible, and is <strong>closed</strong>. If every branch
        closes, there is no counterexample, and the argument is valid. A branch that stays open describes a counterexample.
        Step through the trees below.
      </p>
      <TreeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the decomposition rules">
        <p>
          Each rule applies to a sentence on an open branch, which is then ticked. A rule written with two columns branches;
          one written in a single column adds its sentences to the branch.
        </p>
        <table className="table">
          <thead>
            <tr><th>Sentence</th><th>Add</th><th>Sentence</th><th>Add</th></tr>
          </thead>
          <tbody>
            <tr><td style={rule}>φ ∧ ψ</td><td style={rule}>φ, ψ</td><td style={rule}>¬(φ ∧ ψ)</td><td style={rule}>¬φ | ¬ψ</td></tr>
            <tr><td style={rule}>φ ∨ ψ</td><td style={rule}>φ | ψ</td><td style={rule}>¬(φ ∨ ψ)</td><td style={rule}>¬φ, ¬ψ</td></tr>
            <tr><td style={rule}>φ → ψ</td><td style={rule}>¬φ | ψ</td><td style={rule}>¬(φ → ψ)</td><td style={rule}>φ, ¬ψ</td></tr>
            <tr><td style={rule}>φ ↔ ψ</td><td style={rule}>φ, ψ | ¬φ, ¬ψ</td><td style={rule}>¬(φ ↔ ψ)</td><td style={rule}>φ, ¬ψ | ¬φ, ψ</td></tr>
            <tr><td style={rule}>¬¬φ</td><td style={rule}>φ</td><td /><td /></tr>
          </tbody>
        </table>
        <p>
          The bar | marks a branch. Each rule simply reads off the truth table: φ → ψ is true when φ is false or ψ is true;
          ¬(φ → ψ) is true only when φ is true and ψ false.
        </p>
      </Definition>

      <Definition title="closing and finishing">
        <p>
          A branch <strong>closes</strong>, marked ×, when it contains some sentence and its negation. A branch is{" "}
          <strong>complete</strong> when every sentence on it that is not a letter or a negated letter has been decomposed. A
          sentence must be decomposed on every open branch that passes below it. A tree is finished when every branch is closed
          or complete.
        </p>
      </Definition>

      <Remark title="reading the result">
        <p>
          To test whether φ₁, &hellip;, φₙ ⊨ ψ, start the tree with φ₁, &hellip;, φₙ and ¬ψ. If every branch closes, the
          argument is valid. If some complete branch stays open, it is invalid, and the open branch gives a counterexample:
          make each letter on the branch true, each negated letter false, and any other letter whatever you like.
        </p>
      </Remark>

      <Remark title="two tips">
        <ul>
          <li>Apply non-branching rules before branching ones: trees stay smaller.</li>
          <li>Close a branch as soon as you can; there is no need to decompose anything else on it.</li>
        </ul>
      </Remark>

      <Example title="a valid argument in three lines">
        <p>
          A ∧ (B ∨ ¬C ∨ D ∨ E ∨ F) ∴ A. Start with the premise and ¬A. Decompose the conjunction: add A and the long
          disjunction. The branch now contains A and ¬A, and closes at once. The tree never needed to touch the long
          disjunction, where a truth table would have needed 64 rows.
        </p>
      </Example>

      <Remark title="trees as reductio">
        <p>
          A truth tree is a systematic reductio ad absurdum, the method you met in Thinking and Writing Philosophically: assume
          the premises are true and the conclusion false, and follow out every way this could happen. If every way ends in a
          contradiction, the assumption is impossible. Unlike an informal reductio, the tree is guaranteed to finish, because
          each rule replaces a sentence by shorter ones.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "start",
      rung: "check",
      prompt: <p>To test the argument A ∨ B, ¬B ∴ A with a tree, what goes at the top of the tree?</p>,
      answer: {
        kind: "choice",
        options: ["A ∨ B, ¬B, A", "A ∨ B, ¬B, ¬A", "¬(A ∨ B), B, A", "A ∨ B and nothing else"],
        correct: [1],
      },
    },
    {
      key: "branching",
      rung: "check",
      prompt: <p>Which of these sentences produce a branch when decomposed? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["φ ∧ ψ", "φ ∨ ψ", "φ → ψ", "¬(φ → ψ)", "¬(φ ∧ ψ)"], correct: [1, 2, 4] },
    },
    {
      key: "neg-cond",
      rung: "apply",
      prompt: <p>What does the rule for ¬(A → B) add to the branch?</p>,
      answer: { kind: "choice", options: ["¬A | B", "A, ¬B", "¬A, ¬B", "A | ¬B"], correct: [1] },
    },
    {
      key: "test-tree",
      rung: "apply",
      prompt: <p>A tree for A → B, ¬A ∴ ¬B has an open branch. Which valuation is a counterexample?</p>,
      answer: { kind: "choice", options: ["A true, B true", "A true, B false", "A false, B true", "A false, B false"], correct: [2] },
    },
    {
      key: "closes",
      rung: "apply",
      prompt: <p>Is the argument ¬(A ∨ B) ∴ ¬A valid? (Build its tree.)</p>,
      answer: { kind: "choice", options: ["valid", "invalid"], correct: [0] },
    },
    {
      key: "build",
      rung: "prove",
      prompt: (
        <p>
          Use a truth tree to test A → (B ∧ C), ¬C ∴ ¬A. Write out the tree with each step labelled, and state the result.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Starts with A → (B ∧ C), ¬C and ¬¬A (and decomposes ¬¬A to A).",
          "Branches on the conditional into ¬A and B ∧ C.",
          "Closes the ¬A branch against A, and the B ∧ C branch (after adding B and C) against ¬C.",
          "Concludes the argument is valid.",
        ],
      },
    },
    {
      key: "why-work",
      rung: "stretch",
      prompt: (
        <p>
          Explain why a finished tree with an open branch really does give a counterexample. In particular, why must every
          sentence on the open branch, including the long ones at the top, come out true on the valuation you read off?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that letters and negated letters on the branch are made true by construction, and that they cannot conflict because the branch is open.",
          "Argues that each decomposed sentence is true whenever the sentences its rule added are true, since the rules follow the truth tables.",
          "Concludes, working upwards from shorter to longer sentences (an induction on length), that every sentence on the branch is true, including the premises and the negated conclusion.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how a truth tree tests an argument for validity, what it means for a branch to close, and how to read a counterexample off an open branch.",

  glimpse: (
    <p>
      Trees extend to predicate logic later in this course, with rules for &ldquo;all&rdquo; and &ldquo;some&rdquo;, though there
      the search may run forever. The stretch exercise is the heart of a soundness and completeness proof for trees, carried
      out in full in Logic II: Metalogic and Beyond.
    </p>
  ),
};
