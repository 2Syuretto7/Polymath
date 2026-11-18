import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ParseTreeViz } from "@/components/viz/ParseTreeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.1.1",
  minutes: 80,
  links: {
    revisits: ["m1.1.1", "m1.5.4", "m1.5.1"],
    foreshadows: ["m20.1.2", "m20.2.1", "m20.4.1"],
  },

  puzzle: (
    <>
      <p>
        Does &ldquo;A ∧ B → C&rdquo; mean &ldquo;(A ∧ B) → C&rdquo; or &ldquo;A ∧ (B → C)&rdquo;? The two have different
        truth tables. In everyday mathematics we lean on conventions and good sense. But if logic itself is to be studied
        mathematically, a formula must be an exact object with exactly one reading. How can we define formulas so that
        this is a theorem, not a hope?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a string of symbols and watch the count of open parentheses as it is read.</p>
      <ParseTreeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="expressions and formulas">
        <p>
          The symbols are the sentence symbols <M>{"A_1, A_2, \\ldots"}</M> (we write A, B, C), the connectives ¬, ∧, ∨, →,
          and the parentheses. An <strong>expression</strong> is a finite sequence of symbols. Define the formation operations{" "}
          <M>{"\\mathcal E_\\neg(\\alpha) = (\\neg\\alpha)"}</M> and{" "}
          <M>{"\\mathcal E_\\square(\\alpha,\\beta) = (\\alpha\\,\\square\\,\\beta)"}</M> for each binary connective □. The{" "}
          <strong>well-formed formulas</strong> are the smallest set of expressions containing every sentence symbol and
          closed under the formation operations: the intersection of all such sets.
        </p>
      </Definition>

      <Theorem title="induction on formulas">
        <p>
          If a property holds for every sentence symbol and is preserved by each formation operation, it holds for every
          formula, since the formulas having it form a closed set and so contain the smallest one. For example, every formula
          has as many left as right parentheses, and the number of sentence-symbol occurrences is one more than the number of
          binary connectives.
        </p>
      </Theorem>

      <Theorem title="unique readability">
        <p>
          Every formula is exactly one of: a sentence symbol; <M>{"(\\neg\\alpha)"}</M> for a unique formula α; or{" "}
          <M>{"(\\alpha\\,\\square\\,\\beta)"}</M> for a unique connective □ and unique formulas α, β. The key lemma, proved by
          induction, is that every proper initial segment of a formula has more left than right parentheses, so no formula is
          a proper initial segment of another. If <M>{"(\\alpha\\,\\square\\,\\beta) = (\\gamma\\,\\triangle\\,\\delta)"}</M>,
          then one of α, γ is an initial segment of the other, so α = γ, and the rest follows.
        </p>
      </Theorem>

      <Example title="why it matters">
        <p>
          Unique readability is what licenses definitions by recursion on formulas: the truth value of a formula, the set of
          its sentence symbols, its length. Without it, a recursive definition could assign two values to one formula through
          two different parse trees.
        </p>
      </Example>

      <Remark title="other notations">
        <p>
          Łukasiewicz&rsquo;s Polish notation writes the connective first, as →∧ABC, and needs no parentheses at all, yet
          still reads uniquely. Textbooks often drop outer parentheses and adopt precedence conventions; these are
          abbreviations for official formulas, which remain fully parenthesised.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "wff",
      rung: "check",
      prompt: <p>Which of these is a well-formed formula in the official notation?</p>,
      answer: { kind: "choice", options: ["(A ∧ (¬B))", "A ∧ ¬B", "(A ∧ B ∧ C)", "(¬A B)"], correct: [0] },
    },
    {
      key: "ur",
      rung: "check",
      prompt: <p>What does the unique readability theorem guarantee?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every formula is built in exactly one way from its immediate parts.",
          "Every formula is true or false.",
          "Every formula has a unique truth table.",
          "Every expression is a formula.",
        ],
        correct: [0],
      },
    },
    {
      key: "len",
      rung: "apply",
      prompt: <p>How many symbols does the formula ((A ∧ B) → C) contain?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>A formula with no ¬ contains 6 occurrences of sentence symbols. How many binary connectives does it contain?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the open-parenthesis count just after the main connective of ((A → B) → ((¬B) → (¬A))) is read?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove by induction that every formula has the same number of left and right parentheses.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks the base case: a sentence symbol has none of either.",
          "Shows that each formation operation adds one left and one right parenthesis to balanced inputs.",
          "Concludes by the principle of induction on formulas.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does Polish notation read uniquely without any parentheses?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines a weight, such as +1 for a sentence symbol, −1 for a binary connective and 0 for ¬, read from the left or the right.",
          "Shows that the sum over a formula is fixed and that proper initial or final segments do not reach it, so the parts can be found.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, semantics: truth assignments, how they extend to every formula, and what it means for one formula to follow
      from others.
    </p>
  ),
};
