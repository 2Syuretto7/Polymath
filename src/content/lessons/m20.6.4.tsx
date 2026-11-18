import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { RecursionClauseViz } from "@/components/viz/RecursionClauseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.6.4",
  minutes: 80,
  links: {
    revisits: ["m20.6.2", "m1.5.2", "m1.5.3"],
    foreshadows: ["m20.6.5", "m20.6.6", "m38.1.1"],
  },

  puzzle: (
    <>
      <p>
        Ordinary induction climbs a ladder: prove P(0), and from P(n) prove P(n + 1). Then P holds for every natural number.
        But the ordinals do not end at ω, and ω is not n + 1 for any n. How do you get past a rung that has no rung directly
        below it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compute ω + β for different β and watch which clause of the definition applies.</p>
      <RecursionClauseViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="transfinite induction">
        <p>
          Let P be a property of ordinals. If for every ordinal α, P holds of all β &lt; α implies P holds of α, then P holds
          of every ordinal. Equivalently: prove P(0); prove P(α) implies P(α + 1); and for limit λ, prove that P(β) for all
          β &lt; λ implies P(λ).
        </p>
      </Theorem>

      <Definition title="the proof">
        <p>
          Suppose some ordinal fails P. The ordinals are well-ordered, so there is a least such α. Every β &lt; α satisfies P,
          so by the hypothesis α does too, a contradiction. Nothing more than well-ordering is used.
        </p>
      </Definition>

      <Theorem title="transfinite recursion">
        <p>
          For any class function G there is a unique F on the ordinals with <M>{"F(\\alpha) = G(F \\restriction \\alpha)"}</M>{" "}
          for every α: each value is determined by all earlier values. In practice one gives three clauses, for 0, successors
          and limits.
        </p>
      </Theorem>

      <Example title="definitions by recursion">
        <p>
          The cumulative hierarchy: <M>{"V_0 = \\varnothing"}</M>, <M>{"V_{\\alpha+1} = \\mathcal P(V_\\alpha)"}</M>,{" "}
          <M>{"V_\\lambda = \\bigcup_{\\beta<\\lambda} V_\\beta"}</M>. Ordinal addition: <M>{"\\alpha + 0 = \\alpha"}</M>,{" "}
          <M>{"\\alpha + (\\beta+1) = (\\alpha+\\beta)+1"}</M>, and α + λ is the supremum of α + β for β &lt; λ. Multiplication
          and exponentiation follow the same pattern.
        </p>
      </Example>

      <Remark title="well-founded induction">
        <p>
          The argument works for any well-founded relation, one with no infinite descending chain. Induction on formulas, on
          proofs and on the ∈ relation itself, which foundation makes well-founded, are all instances. Cantor first used the
          idea in iterating the derived set of a set of reals past ω.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cases",
      rung: "check",
      prompt: <p>Which case does transfinite induction add to ordinary induction?</p>,
      answer: { kind: "choice", options: ["The limit case", "The zero case", "The successor case", "A case for negative numbers"], correct: [0] },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>What property of the ordinals makes transfinite induction valid?</p>,
      answer: { kind: "choice", options: ["They are well-ordered", "They are countable", "They form a set", "They are closed under subtraction"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which clause computes ω + ω?</p>,
      answer: { kind: "choice", options: ["The limit clause", "The successor clause", "The zero clause", "None"], correct: [0] },
    },
    {
      key: "one",
      rung: "apply",
      prompt: <p>Using the clauses, what is 1 + ω?</p>,
      answer: { kind: "choice", options: ["ω", "ω + 1", "2", "ω · 2"], correct: [0] },
    },
    {
      key: "vn",
      rung: "apply",
      prompt: <p>How many elements does <M>{"V_2"}</M> have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove by transfinite induction that α ⊆ <M>{"V_\\alpha"}</M> for every ordinal α.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Handles 0: the empty set is a subset of anything.",
          "Handles successors: if α ⊆ V at α, then α ⊆ V at α + 1 since the stages grow, and α itself is a subset of the stage at α so belongs to the next stage.",
          "Handles limits: each β < λ lies in a stage below λ, hence in the union.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is the limit case not automatic? Give a property that holds at 0 and passes to successors but fails at ω.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an example such as ‘α is finite’ or ‘α is a successor or zero’.",
          "Explains that the limit case needs its own argument.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Transfinite recursion builds objects by choosing, at each stage, something new. Well-ordering a set lets one make those
        choices in sequence. But can every set be well-ordered, even the real numbers? That question leads to the most
        controversial axiom in mathematics.
      </p>
      <p>
        Next, the axiom of choice and Zorn&rsquo;s lemma: their equivalence with the well-ordering theorem, how Zorn gives
        bases for every vector space and maximal ideals in every ring, and the strange consequences that made choice
        controversial.
      </p>
    </>
  ),
};
