import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ValidityTableViz } from "@/components/viz/ValidityTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p2.2.3",
  minutes: 65,
  links: {
    revisits: ["p2.1.2", "p2.1.3"],
    foreshadows: ["p17.1.2", "m20.1.4"],
  },

  puzzle: (
    <>
      <p>
        In the first chapter, to show an argument invalid you had to imagine a situation with true premises and a false
        conclusion. To show it valid you had to convince yourself that no such situation could exist, anywhere, ever. That
        second task seems impossible to do with certainty: how could you survey every possible situation?
      </p>
      <p>For arguments in sentential logic, there is a way. What makes it possible?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        In sentential logic, the truth of every sentence depends only on the truth values of its letters. So, as far as the
        argument is concerned, a &ldquo;possible situation&rdquo; is nothing more than a row of a truth table, and an argument
        with n letters has only <span className="mono">2ⁿ</span> rows. We can check them all.
      </p>
      <p>
        Below, each argument has a column for every premise and one for the conclusion. Highlight the rows where all the
        premises are true, then look at the conclusion in those rows. Click a row to read it.
      </p>
      <ValidityTableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="validity in sentential logic">
        <p>
          An argument with premises φ₁, &hellip;, φₙ and conclusion ψ is <strong>valid</strong> (in sentential logic) if
          there is no valuation that makes every premise true and the conclusion false. We then write
        </p>
        <p className="mono" style={{ textAlign: "center" }}>φ₁, &hellip;, φₙ ⊨ ψ</p>
        <p>
          and say the premises <strong>entail</strong> the conclusion. A row of the truth table that makes every premise true
          and the conclusion false is a <strong>counterexample</strong>.
        </p>
      </Definition>

      <Remark title="the test">
        <ol>
          <li>Write out every row for the sentence letters that occur.</li>
          <li>Compute the value of each premise and of the conclusion in each row.</li>
          <li>Look for a row with every premise T and the conclusion F. If there is one, the argument is invalid. If not, it is valid.</li>
        </ol>
        <p>
          Only the rows where all premises are true can be counterexamples, so with practice you can skip the rest. The test
          always ends with an answer: validity in sentential logic is <strong>decidable</strong>.
        </p>
      </Remark>

      <Example title="a chain of conditionals">
        <p>
          A → B, B → C ⊨ A → C. Of the eight rows, four make both premises true: TTT, FTT, FFT and FFF (giving A, B, C in that
          order). In each, A → C is true. No counterexample, so the argument is valid. This form, sometimes called
          hypothetical syllogism, is how a chain of reasoning links up.
        </p>
      </Example>

      <Example title="affirming the consequent, mechanically">
        <p>
          A → B, B ⊭ A. The row with A false and B true makes both premises true and the conclusion false. The truth table
          finds the counterexample that, in the first chapter, you had to invent: a situation where B holds for some other
          reason.
        </p>
      </Example>

      <Definition title="related notions">
        <ul>
          <li>
            A sentence ψ is a tautology exactly when <span className="mono">⊨ ψ</span>: it is entailed by no premises at all.
          </li>
          <li>
            A set of sentences is <strong>consistent</strong> (or satisfiable) if some valuation makes them all true, and{" "}
            <strong>inconsistent</strong> otherwise.
          </li>
          <li>φ and ψ are equivalent exactly when each entails the other.</li>
        </ul>
      </Definition>

      <Theorem title="validity and inconsistency">
        <p>
          φ₁, &hellip;, φₙ ⊨ ψ if and only if the set {"{"}φ₁, &hellip;, φₙ, ¬ψ{"}"} is inconsistent.
        </p>
      </Theorem>
      <p>
        A counterexample is precisely a valuation making the premises and ¬ψ all true. This simple fact turns every question
        of validity into a question of consistency, and it is the idea behind the truth trees of the next lesson.
      </p>

      <Remark title="explosion">
        <p>
          The argument A, ¬A ⊨ B is valid, because no row makes both premises true, as you saw in the first chapter. This
          principle, that anything follows from a contradiction, is called <em>ex falso quodlibet</em>, or explosion. Some
          logicians, called paraconsistent logicians, reject it, and build logics in which a contradiction does not entail
          everything.
        </p>
      </Remark>

      <Remark title="the cost of the test">
        <p>
          The test is certain but slow. With 10 letters there are 1,024 rows; with 30, over a billion. Whether there is a
          fundamentally faster method for deciding consistency is the P versus NP problem, one of the great open questions of
          mathematics and computer science.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "row",
      rung: "check",
      prompt: <p>Which kind of row shows that an argument is invalid?</p>,
      answer: {
        kind: "choice",
        options: [
          "a row with every premise true and the conclusion true",
          "a row with every premise true and the conclusion false",
          "a row with some premise false",
          "a row with the conclusion false",
        ],
        correct: [1],
      },
    },
    {
      key: "rows-needed",
      rung: "check",
      prompt: <p>How many rows are needed to test an argument whose sentences use the letters A, B, C and D?</p>,
      answer: { kind: "numeric", value: 16 },
    },
    {
      key: "test-1",
      rung: "apply",
      prompt: <p>Is the argument A → B, ¬B ∴ ¬A valid?</p>,
      answer: { kind: "choice", options: ["valid", "invalid"], correct: [0] },
    },
    {
      key: "test-2",
      rung: "apply",
      prompt: <p>Is the argument A ∨ B, A ∴ ¬B valid?</p>,
      answer: { kind: "choice", options: ["valid", "invalid"], correct: [1] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>For the argument A → B, B → C ∴ A → C, in how many of the eight rows are both premises true?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prove-test",
      rung: "prove",
      prompt: (
        <p>
          Use a truth table to decide whether (A ∧ B) → C ∴ (A → C) ∨ (B → C) is valid. Show the rows that matter, and state
          your conclusion with a reason.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets out all eight rows, or argues directly about the rows where the conclusion is false.",
          "Notes the conclusion is false only when A and B are true and C is false.",
          "Notes the premise is false in that row, so there is no counterexample.",
          "Concludes the argument is valid.",
        ],
      },
    },
    {
      key: "explosion",
      rung: "stretch",
      prompt: (
        <p>
          Explain why explosion (A, ¬A ∴ B) is valid by the definition, and then give one reason a logician might want a
          logic in which it fails. Does the truth-table definition leave room for such a logic?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that no valuation makes A and ¬A both true, so there is no counterexample.",
          "Gives a motivation, such as reasoning sensibly from an inconsistent database or theory without deriving everything.",
          "Recognises that avoiding explosion requires changing the semantics, for example by allowing a sentence to be both true and false.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how a truth table can prove that an argument is valid, and why this is possible in sentential logic but not for arguments in general.",

  glimpse: (
    <p>
      The double turnstile ⊨ is a notion of semantics: it is about truth. The next chapter introduces proofs, written ⊢. Logic
      II: Metalogic and Beyond proves that the two match exactly for sentential logic, the completeness theorem, and
      Mathematical Logic and Set Theory proves the same from a mathematician&rsquo;s point of view.
    </p>
  ),
};
