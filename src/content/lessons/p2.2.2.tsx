import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TruthFillViz } from "@/components/viz/TruthFillViz";
import type { LessonContent } from "@/lib/types";

const cell = { textAlign: "center" as const };

export const lesson: LessonContent = {
  id: "p2.2.2",
  minutes: 70,
  links: {
    revisits: ["p2.1.2"],
    parallels: ["m1.1.2"],
    foreshadows: ["p15.4.3", "p26.3.4"],
  },

  puzzle: (
    <>
      <p>
        A teacher announces: &ldquo;If you score above 90, you will get an A.&rdquo; Four students then take the test. Ayesha
        scores 95 and gets an A. Bilal scores 95 and gets a B. Chen scores 80 and gets an A, after a brilliant project. Dev
        scores 80 and gets a B.
      </p>
      <p>
        Which of the four results, if any, shows that the teacher&rsquo;s announcement was false? Most people pick out
        Bilal at once. But was the teacher wrong about Chen?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each connective of sentential logic is <strong>truth-functional</strong>: the truth value of the compound depends
        only on the truth values of its parts. So each connective can be defined by a small table listing every combination of
        values for its parts. With these tables, the truth value of any sentence, however long, can be worked out
        mechanically from the values of its letters.
      </p>
      <p>
        Fill in the last column of each table below by clicking its cells, then check. Start with A → B, and keep the
        puzzle in mind: the only student who could catch the teacher out is one who scored above 90 and did not get an A.
      </p>
      <TruthFillViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the characteristic truth tables">
        <p>Write T for true and F for false. The connectives are defined as follows.</p>
        <table className="table">
          <thead>
            <tr>
              <th style={cell}>φ</th><th style={cell}>ψ</th><th style={cell}>¬φ</th><th style={cell}>φ ∧ ψ</th>
              <th style={cell}>φ ∨ ψ</th><th style={cell}>φ → ψ</th><th style={cell}>φ ↔ ψ</th>
            </tr>
          </thead>
          <tbody>
            {[["T", "T", "F", "T", "T", "T", "T"], ["T", "F", "F", "F", "T", "F", "F"], ["F", "T", "T", "F", "T", "T", "F"], ["F", "F", "T", "F", "F", "T", "T"]].map((r, i) => (
              <tr key={i}>{r.map((v, j) => <td key={j} className="mono" style={cell}>{v}</td>)}</tr>
            ))}
          </tbody>
        </table>
        <p>
          In words: a negation flips the value; a conjunction is true when both parts are; a disjunction when at least one is;
          a biconditional when the parts agree; and a conditional is false only when its antecedent is true and its consequent
          false.
        </p>
      </Definition>

      <Remark title="the material conditional">
        <p>
          The arrow defined by this table is called the <strong>material conditional</strong>. Its last two rows say that
          φ → ψ is true whenever φ is false. In the puzzle, Chen and Dev scored below 90, so the teacher&rsquo;s promise said
          nothing about them: it was not broken, so we count it as kept. Only Bilal&rsquo;s case, true antecedent and false
          consequent, breaks it.
        </p>
        <p>
          This is the best a truth-functional &ldquo;if&rdquo; can do. Of the sixteen possible two-place truth tables, it is
          the only one that makes modus ponens valid, makes φ → φ always true, and is not simply ↔ (which would make
          &ldquo;if φ then ψ&rdquo; and &ldquo;if ψ then φ&rdquo; say the same). Still, it has odd consequences: &ldquo;If the moon is cheese, then 2 + 2 = 5&rdquo; comes out true,
          because the antecedent is false. Whether English &ldquo;if&rdquo; really works like this is a long-running debate.
        </p>
      </Remark>

      <Example title="a table for a compound">
        <p>
          To find the values of ¬A ∨ B, list all four rows for A and B, then work from the inside out: first ¬A, then the
          disjunction. The result is F only in the row where A is T and B is F, the same column as A → B. Two sentences with
          the same column are <strong>logically equivalent</strong>. A sentence with n letters needs 2<sup>n</sup> rows.
        </p>
      </Example>

      <Definition title="tautology, contradiction, contingency">
        <p>
          A sentence is a <strong>tautology</strong> if it is true in every row of its truth table, a{" "}
          <strong>contradiction</strong> if it is false in every row, and <strong>contingent</strong> otherwise. A ∨ ¬A is a
          tautology, A ∧ ¬A a contradiction, and A → B contingent. Two sentences φ and ψ are{" "}
          <strong>logically equivalent</strong> when φ ↔ ψ is a tautology.
        </p>
      </Definition>

      <Remark title="what a row is">
        <p>
          Each row of a truth table is a <strong>valuation</strong>: an assignment of T or F to every sentence letter. In
          sentential logic, valuations play the part that &ldquo;possible situations&rdquo; played in the definition of
          validity. That is the key to the next lesson, where truth tables become a test for validity.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond-false",
      rung: "check",
      prompt: <p>In which row is A → B false?</p>,
      answer: { kind: "choice", options: ["A true, B true", "A true, B false", "A false, B true", "A false, B false"], correct: [1] },
    },
    {
      key: "rows",
      rung: "check",
      prompt: <p>How many rows does the truth table of a sentence with four sentence letters have?</p>,
      answer: { kind: "numeric", value: 16 },
    },
    {
      key: "evaluate",
      rung: "apply",
      prompt: <p>Suppose A is true, B is false and C is true. Is (A ∧ B) → ¬C true or false?</p>,
      answer: { kind: "choice", options: ["true", "false"], correct: [0] },
    },
    {
      key: "count-true",
      rung: "apply",
      prompt: <p>In how many of the eight rows of its truth table is A ∧ (B ∨ C) true?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "classify",
      rung: "apply",
      prompt: <p>Which of these are tautologies? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["A → (B → A)", "(A → B) → A", "(A → B) ∨ (B → A)", "A ↔ ¬A"],
        correct: [0, 2],
      },
    },
    {
      key: "equivalent",
      rung: "prove",
      prompt: (
        <p>
          Use truth tables to show that ¬(A ∧ B) and ¬A ∨ ¬B are logically equivalent, and that ¬(A ∧ B) and ¬A ∧ ¬B are not.
          Explain in words what the difference amounts to.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives correct four-row tables for ¬(A ∧ B) and ¬A ∨ ¬B, and shows the columns match.",
          "Gives a row (A true, B false, or the reverse) where ¬(A ∧ B) and ¬A ∧ ¬B differ.",
          "Explains that 'not both' allows one to be true, while 'both not' requires both false.",
        ],
      },
    },
    {
      key: "material",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;If Shakespeare did not write Hamlet, someone else did&rdquo; seems true, while &ldquo;If Shakespeare had not
          written Hamlet, someone else would have&rdquo; seems false. Can the material conditional capture both? What does the
          pair suggest about English conditionals?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that both have a false antecedent, so the material conditional makes both true.",
          "Recognises the difference between indicative and counterfactual (subjunctive) conditionals.",
          "Concludes that at least the counterfactual is not truth-functional, so the material conditional cannot capture it, and offers a view on the indicative.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the truth table for 'if … then', and why a conditional with a false antecedent counts as true.",

  glimpse: (
    <p>
      The odd behaviour of the material conditional has two famous defences and one famous rival. Grice&rsquo;s theory of
      implicature, studied in Philosophy of Language, explains its oddities as things suggested rather than said. The
      conditional logics of Stalnaker and Lewis, in Modal Logic and Formal Methods, give counterfactuals a meaning of their own.
    </p>
  ),
};
