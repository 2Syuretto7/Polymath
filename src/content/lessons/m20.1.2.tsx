import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ConsequenceViz } from "@/components/viz/ConsequenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.1.2",
  minutes: 80,
  links: {
    revisits: ["m20.1.1", "m1.1.2", "m1.1.3"],
    foreshadows: ["m20.1.3", "m20.1.4", "m20.2.2"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;If it rains, the match is cancelled. The match is cancelled. So it rained.&rdquo; Something is wrong here,
        but what exactly? We want a precise definition of when a conclusion follows from premises, one that a machine could
        check, and that captures the sense in which this argument fails.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose an argument and check every row of its truth table.</p>
      <ConsequenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="truth assignments">
        <p>
          A <strong>truth assignment</strong> for a set S of sentence symbols is a function v : S → {"{"}T, F{"}"}. By unique
          readability there is exactly one extension <M>{"\\bar v"}</M> to all formulas built from S satisfying
        </p>
        <MD>{"\\bar v((\\neg\\alpha)) = T \\iff \\bar v(\\alpha) = F,\\qquad \\bar v((\\alpha\\wedge\\beta)) = T \\iff \\bar v(\\alpha) = \\bar v(\\beta) = T,"}</MD>
        <p>and similarly for ∨ and →. We say v <strong>satisfies</strong> α when <M>{"\\bar v(\\alpha) = T"}</M>.</p>
      </Definition>

      <Definition title="tautological implication">
        <p>
          Σ <strong>tautologically implies</strong> τ, written Σ ⊨ τ, if every truth assignment satisfying every member of Σ
          also satisfies τ. A <strong>tautology</strong> is a τ with ∅ ⊨ τ. Σ is <strong>satisfiable</strong> if some truth
          assignment satisfies all of it. Two formulas are tautologically equivalent if each implies the other.
        </p>
      </Definition>

      <Theorem title="decidability and a useful equivalence">
        <p>
          <M>{"\\bar v(\\alpha)"}</M> depends only on the values of v at the symbols occurring in α. So for finite Σ, whether
          Σ ⊨ τ can be decided by checking the <M>{"2^n"}</M> rows of a truth table, n being the number of symbols involved.
          Moreover Σ ⊨ τ if and only if Σ ∪ {"{"}¬τ{"}"} is unsatisfiable.
        </p>
      </Theorem>

      <Example title="expressive completeness">
        <p>
          Every function from <M>{"\\{T, F\\}^n"}</M> to <M>{"\\{T, F\\}"}</M>, of which there are{" "}
          <M>{"2^{2^n}"}</M>, is the truth function of some formula using only ¬, ∧ and ∨: take the disjunction, over the rows
          where the function is T, of the conjunction describing that row. This is the disjunctive normal form.
        </p>
      </Example>

      <Remark title="how hard is it?">
        <p>
          Truth tables take exponential time. Whether satisfiability can be decided in polynomial time is the P versus NP
          question: Cook and Levin proved in 1971 that SAT is NP-complete. In practice, modern SAT solvers handle formulas with
          millions of symbols, and are used to verify hardware and even to settle open problems in combinatorics.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does Σ ⊨ τ mean?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every truth assignment satisfying all of Σ satisfies τ.",
          "Some truth assignment satisfies Σ and τ.",
          "τ is a member of Σ.",
          "τ can be derived from Σ by rules of inference.",
        ],
        correct: [0],
      },
    },
    {
      key: "unsat",
      rung: "check",
      prompt: <p>Σ ⊨ τ is equivalent to which statement?</p>,
      answer: { kind: "choice", options: ["Σ ∪ {¬τ} is unsatisfiable.", "Σ ∪ {τ} is satisfiable.", "¬τ is a tautology.", "Σ is unsatisfiable."], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many rows are counterexamples to affirming the consequent?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many truth functions of three variables are there?</p>,
      answer: { kind: "numeric", value: 256 },
    },
    {
      key: "taut",
      rung: "apply",
      prompt: <p>Which of these is a tautology?</p>,
      answer: { kind: "choice", options: ["(A → B) ∨ (B → A)", "(A → B) → (B → A)", "A ∨ B", "(A ∧ ¬B) → B"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that Σ ⊨ τ if and only if Σ ∪ {"{"}¬τ{"}"} is unsatisfiable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Assumes Σ ⊨ τ and shows that any assignment satisfying Σ makes ¬τ false, so the union is unsatisfiable.",
          "Assumes the union is unsatisfiable and shows that any assignment satisfying Σ cannot satisfy ¬τ, so satisfies τ.",
          "Uses the clause for ¬ in the definition of the extended assignment.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why every truth function can be expressed with ¬ and ∧ alone.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Starts from disjunctive normal form using ¬, ∧ and ∨.",
          "Eliminates ∨ using De Morgan: α ∨ β is equivalent to ¬(¬α ∧ ¬β).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, compactness: an infinite set of formulas is satisfiable as soon as each of its finite parts is, with a proof
      that builds the assignment one symbol at a time.
    </p>
  ),
};
