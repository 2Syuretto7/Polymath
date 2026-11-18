import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { CountermodelViz } from "@/components/viz/CountermodelViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.3.2",
  minutes: 85,
  links: {
    revisits: ["m20.3.1", "m20.2.4", "m20.1.4"],
    foreshadows: ["m20.3.3", "m20.4.3", "m20.5.3"],
  },

  puzzle: (
    <>
      <p>
        Validity is about every structure, of every size, including uncountable ones that no one could ever list. Proof is
        about finite strings of symbols checked by rules. Why should these two notions agree? It would be no surprise if some
        sentence were true in every structure for reasons too subtle for any finite proof to capture.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a claim. The visualisation searches every structure with up to three elements for a countermodel. Where it finds
        none, a short deduction exists.
      </p>
      <CountermodelViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="completeness (Gödel, 1929)">
        <p>
          For every set Γ of sentences and every sentence σ, if <M>{"\\Gamma \\models \\sigma"}</M> then{" "}
          <M>{"\\Gamma \\vdash \\sigma"}</M>. With soundness, <M>{"\\Gamma \\models \\sigma"}</M> if and only if{" "}
          <M>{"\\Gamma \\vdash \\sigma"}</M>.
        </p>
      </Theorem>

      <Definition title="the proof from model existence">
        <p>
          Suppose Γ does not prove σ. Then Γ ∪ {"{"}¬σ{"}"} is consistent: if it proved a contradiction, then by reductio Γ
          would prove ¬¬σ and hence σ. By the model existence theorem of the last lesson, Γ ∪ {"{"}¬σ{"}"} has a model. That
          model makes Γ true and σ false, so Γ does not entail σ. Contraposing gives completeness.
        </p>
      </Definition>

      <Example title="the dichotomy">
        <p>
          For any claim, exactly one of two things happens: there is a deduction, or there is a countermodel. The claim that
          ∀x ∃y Exy entails ∃y ∀x Exy fails in the two-element structure where each element is related only to itself. The
          reverse entailment has a three-line proof. There is no third case where a claim is valid but unprovable.
        </p>
      </Example>

      <Remark title="enumerable but not decidable">
        <p>
          Proofs are finite strings, so a machine can list all of them, and with them every valid sentence. Thus the valid
          sentences are <strong>effectively enumerable</strong>. But this does not decide validity: if σ is not valid, the
          listing never produces it, and you can never be sure you have waited long enough. Church and Turing showed in 1936
          that no algorithm decides validity in first-order logic with a binary relation symbol. Countermodels may need to be
          infinite, so the search through finite structures cannot fill the gap.
        </p>
      </Remark>

      <Remark title="two senses of complete">
        <p>
          Completeness of the <em>logic</em>, proved here, says every valid consequence is provable. Completeness of a{" "}
          <em>theory</em> says it decides every sentence. Gödel proved the first in 1929 and, two years later, that
          arithmetic fails the second. The words are the same; the theorems are about different things.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the completeness theorem say?</p>,
      answer: {
        kind: "choice",
        options: ["Every semantic consequence of Γ is provable from Γ", "Every theory decides every sentence", "Every provable sentence is true in all structures", "Validity is decidable"],
        correct: [0],
      },
    },
    {
      key: "decide",
      rung: "check",
      prompt: <p>Does completeness give an algorithm that decides whether a sentence is valid?</p>,
      answer: {
        kind: "choice",
        options: ["No: valid sentences can be listed, but there is no way to confirm a sentence will never appear", "Yes: search all proofs", "Yes: search all finite structures", "Only for sentences without quantifiers in arithmetic"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many elements does the countermodel for &ldquo;∀∃ to ∃∀&rdquo; have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many structures for a single binary relation symbol have universe {"{"}0, 1{"}"}?</p>,
      answer: { kind: "numeric", value: 16 },
    },
    {
      key: "dich",
      rung: "apply",
      prompt: <p>A claim has no countermodel of any size. What follows?</p>,
      answer: {
        kind: "choice",
        options: ["It is valid, so by completeness it has a deduction", "It may still be unprovable", "It is false in some infinite structure", "It is a tautology of propositional logic"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive the completeness theorem from the model existence theorem.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Assumes Γ does not prove σ and shows Γ ∪ {¬σ} is consistent, since a contradiction would give Γ ⊢ σ by reductio.",
          "Applies model existence to get a model of Γ ∪ {¬σ}.",
          "Concludes this model makes Γ true and σ false, so Γ does not entail σ, and contraposes.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can&rsquo;t you decide validity by running a proof search and a countermodel search side by side?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the proof search halts on valid sentences.",
          "Notes that some invalid sentences have only infinite countermodels, which no search through finite structures finds.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Completeness turns a fact about proofs into a fact about models. Proofs are finite, so any proof from Γ uses only
        finitely many members of Γ. Translate that through completeness and you get a startling statement about models
        alone: if every finite part of Γ has a model, then Γ itself has one.
      </p>
      <p>
        That is the compactness theorem, next. It sounds innocent and is not. It shows that no first-order theory can pin
        down the natural numbers, and that finiteness cannot be expressed in first-order logic.
      </p>
    </>
  ),
};
