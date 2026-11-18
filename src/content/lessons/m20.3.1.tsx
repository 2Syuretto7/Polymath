import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { HenkinViz } from "@/components/viz/HenkinViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.3.1",
  minutes: 90,
  links: {
    revisits: ["m20.2.4", "m20.1.4", "m1.8.2"],
    foreshadows: ["m20.3.2", "m20.3.4", "m20.6.5"],
  },

  puzzle: (
    <>
      <p>
        You are given a set of sentences and told only that no contradiction can be derived from it. You must produce a
        structure in which every sentence is true. But you have no universe, no elements, nothing to build with except the
        symbols themselves. Can symbols be the elements?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the four stages of the construction for a small example.</p>
      <HenkinViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="model existence">
        <p>
          Every consistent set Γ of sentences in a countable language has a countable model. The proof has three steps.
        </p>
      </Theorem>

      <Definition title="step 1: witnesses">
        <p>
          Add countably many new constant symbols. Enumerate the pairs (x, φ) of variables and formulas, and for each add the
          sentence <M>{"\\neg\\forall x\\,\\varphi \\to \\neg\\varphi^x_c"}</M> with c a constant not used before: if something
          fails φ, then c fails it. Each addition keeps consistency: if <M>{"\\Gamma \\vdash \\neg\\theta"}</M> for the new
          sentence θ, generalisation on the new constant c gives a contradiction already in Γ.
        </p>
      </Definition>

      <Definition title="step 2: completeness (Lindenbaum)">
        <p>
          Enumerate all sentences and, one by one, add each or its negation while keeping consistency. The union Δ is
          consistent and <strong>complete</strong>: for every sentence σ, σ ∈ Δ or ¬σ ∈ Δ. It is also deductively closed.
        </p>
      </Definition>

      <Definition title="step 3: the term model">
        <p>
          Let the universe be the closed terms, with t ~ u when t = u ∈ Δ; the equality axioms make ~ a congruence. Interpret a
          relation symbol R by: R holds of the classes of <M>{"t_1, \\ldots, t_n"}</M> when{" "}
          <M>{"Rt_1\\ldots t_n \\in \\Delta"}</M>, and function symbols by applying them to terms. Then by induction on
          sentences, 𝔄 ⊨ σ if and only if σ ∈ Δ. The quantifier step uses the witnesses: if ∀x φ ∉ Δ, its witness gives a
          term t with ¬φ(t) ∈ Δ.
        </p>
      </Definition>

      <Example title="why the constants must be new">
        <p>
          Take Γ = {"{"}Pa, ¬∀x Px{"}"}, which is consistent. Using the old constant a as the witness would add ¬∀x Px → ¬Pa,
          and with Γ derive ¬Pa, a contradiction. A fresh constant c says only &ldquo;whatever fails P, call it c&rdquo;,
          which commits Γ to nothing new.
        </p>
      </Example>

      <Remark title="history">
        <p>
          Gödel proved completeness in his 1929 doctoral thesis by a different route. Leon Henkin&rsquo;s 1949 proof, given
          here, became standard because it generalises: to uncountable languages, using Zorn&rsquo;s lemma, and to many other
          logics. It is a model of a common move in mathematics, building an object from the description it is supposed to
          satisfy.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "wit",
      rung: "check",
      prompt: <p>What are the witness constants for?</p>,
      answer: {
        kind: "choice",
        options: ["To ensure every existential claim in Δ has a named instance, so quantifiers come out right", "To make the language finite", "To prove Γ is consistent", "To avoid using equality"],
        correct: [0],
      },
    },
    {
      key: "elems",
      rung: "check",
      prompt: <p>What are the elements of the term model?</p>,
      answer: { kind: "choice", options: ["Classes of closed terms under provable equality", "Natural numbers", "Sentences of Δ", "Real numbers"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s term model, is P true of a?</p>,
      answer: { kind: "choice", options: ["No, since ¬Pa ∈ Δ", "Yes", "It is undecided", "Only if a = c₁"], correct: [0] },
    },
    {
      key: "size",
      rung: "apply",
      prompt: <p>If the language is countable, how large is the model the construction gives?</p>,
      answer: { kind: "choice", options: ["Countable (finite or countably infinite)", "Uncountable", "Always finite", "Of size continuum"], correct: [0] },
    },
    {
      key: "complete",
      rung: "apply",
      prompt: <p>Why must Δ be complete before building the term model?</p>,
      answer: {
        kind: "choice",
        options: ["So that every atomic sentence is decided, which fixes the interpretation of every symbol", "To make Δ finite", "So that Δ is inconsistent", "To remove the witnesses"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if Γ is consistent and c does not occur in Γ or φ, then Γ ∪ {"{"}¬∀x φ → ¬φ with c for x{"}"} is consistent.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes the union inconsistent, so Γ proves the negation of the added sentence, hence both ¬∀x φ and φ with c for x.",
          "Uses generalisation on the new constant c (replacing c by a fresh variable) to get Γ ⊢ ∀x φ.",
          "Concludes Γ proves both ∀x φ and ¬∀x φ, contradicting the consistency of Γ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the term model use equivalence classes of terms rather than the terms themselves, when the language has =?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that Δ may contain t = u for distinct terms, which must denote the same element.",
          "Explains that the equality axioms make ~ an equivalence relation respected by every symbol, so the quotient is well defined.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Gödel&rsquo;s completeness theorem follows in a few lines: whatever is true in every model of Γ can be deduced
      from Γ.
    </p>
  ),
};
