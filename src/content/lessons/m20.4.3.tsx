import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { GodelSentenceViz } from "@/components/viz/GodelSentenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.4.3",
  minutes: 95,
  links: {
    revisits: ["m20.4.2", "m20.4.1", "m20.3.2"],
    foreshadows: ["m20.4.4", "m20.5.3", "m20.6.6"],
  },

  puzzle: (
    <>
      <p>
        Consider the sentence &ldquo;This sentence is not provable.&rdquo; If it were provable, something false would be
        provable. If it is not provable, then it is true. Either way, proof falls short of truth. But can arithmetic, which
        speaks only about numbers, really contain such a sentence?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the construction of the Gödel sentence G.</p>
      <GodelSentenceViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="diagonal lemma">
        <p>
          For every formula φ(x) with one free variable there is a sentence σ such that{" "}
          <M>{"Q \\vdash \\sigma \\leftrightarrow \\varphi(\\ulcorner \\sigma \\urcorner)"}</M>.
        </p>
      </Theorem>

      <Definition title="proof of the diagonal lemma">
        <p>
          Let diag be the computable function taking the code of a formula ψ(x) to the code of ψ(⌜ψ⌝), and let D(x, y)
          represent it in Q. Put θ(x) = ∃y (D(x, y) ∧ φ(y)), and σ = θ(⌜θ⌝). Then diag(⌜θ⌝) = ⌜σ⌝, so Q proves that
          θ(⌜θ⌝) is equivalent to φ(⌜σ⌝): that is, σ ↔ φ(⌜σ⌝). The trick mirrors Cantor&rsquo;s diagonal argument: apply a
          formula to its own code.
        </p>
      </Definition>

      <Theorem title="first incompleteness theorem (Gödel 1931, Rosser 1936)">
        <p>
          If T is a consistent, effectively axiomatised theory extending Q, then there is a sentence G such that T proves
          neither G nor ¬G.
        </p>
      </Theorem>

      <Example title="the proof">
        <p>
          Apply the diagonal lemma to ¬Prov(x) to get G with T ⊢ G ↔ ¬Prov(⌜G⌝). If T ⊢ G, then some n codes a proof of G;
          by representability T ⊢ Prf(n̄, ⌜G⌝), so T ⊢ Prov(⌜G⌝), and also T ⊢ ¬Prov(⌜G⌝): inconsistent. So T does not
          prove G, and G is true in ℕ. Showing T does not prove ¬G needs slightly more: Gödel assumed ω-consistency, and Rosser
          removed the assumption with the sentence &ldquo;for any proof of me, there is a shorter proof of my negation&rdquo;.
        </p>
      </Example>

      <Theorem title="second incompleteness theorem">
        <p>
          If T is consistent, effectively axiomatised and extends Peano arithmetic, then T does not prove Con(T), the sentence
          ¬Prov(⌜0 = S0⌝). The proof formalises the first theorem inside T: T proves Con(T) → G, so if T proved Con(T) it
          would prove G.
        </p>
      </Theorem>

      <Remark title="what it does not say">
        <p>
          The theorems do not say that some truths are unknowable, or that minds outdo machines. They say that no single
          consistent, effectively axiomatised theory of this strength captures all arithmetical truth, and that such a theory
          cannot certify its own consistency. Adding G as an axiom gives a new theory, with a new Gödel sentence of its own.
          Hilbert&rsquo;s programme, to prove the consistency of mathematics by finitary means within mathematics, could not
          succeed in its original form.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "first",
      rung: "check",
      prompt: <p>What does the first incompleteness theorem say?</p>,
      answer: {
        kind: "choice",
        options: ["A consistent, effectively axiomatised theory extending Q leaves some sentence undecided", "Arithmetic is inconsistent", "First-order logic is not complete", "Every true sentence is provable"],
        correct: [0],
      },
    },
    {
      key: "second",
      rung: "check",
      prompt: <p>What does the second incompleteness theorem say?</p>,
      answer: {
        kind: "choice",
        options: ["Such a theory, extending PA, cannot prove its own consistency sentence", "Such a theory proves its own inconsistency", "Consistency cannot be expressed in arithmetic", "No theory is consistent"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, where does G lie?</p>,
      answer: { kind: "choice", options: ["Among the true sentences, outside the provable ones", "Among the provable sentences", "Outside the true sentences", "Nowhere"], correct: [0] },
    },
    {
      key: "eff",
      rung: "apply",
      prompt: <p>Why can&rsquo;t you escape incompleteness by taking T to be all true sentences of arithmetic?</p>,
      answer: {
        kind: "choice",
        options: ["That T is complete but not effectively axiomatised", "That T is inconsistent", "That T does not extend Q", "That T has no models"],
        correct: [0],
      },
    },
    {
      key: "add",
      rung: "apply",
      prompt: <p>You add G to T as a new axiom. What happens?</p>,
      answer: {
        kind: "choice",
        options: ["The new theory is still incomplete, with its own Gödel sentence", "The new theory is complete", "The new theory is inconsistent", "G becomes false"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Assuming T is consistent, show that T does not prove G, where T ⊢ G ↔ ¬Prov(⌜G⌝).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes T ⊢ G and takes n coding such a proof.",
          "Uses representability of Prf to get T ⊢ Prov(⌜G⌝).",
          "Uses the equivalence to get T ⊢ ¬Prov(⌜G⌝), so T is inconsistent, a contradiction.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Some have argued that, since we can see G is true, human minds are not machines. Is the argument good?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that we see G is true only given that T is consistent.",
          "Asks whether we can know our own reasoning is consistent, or otherwise weighs the argument.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The diagonal lemma gives a sentence saying &ldquo;I am not provable&rdquo;. What about &ldquo;I am not true&rdquo;?
        If arithmetic could define its own truth, the lemma would produce the liar sentence, and arithmetic would be
        inconsistent.
      </p>
      <p>
        Next, Tarski&rsquo;s theorem: arithmetical truth is not arithmetically definable. Provability can be expressed but is
        incomplete; truth is complete but cannot be expressed. The gap between them is exactly where G lives.
      </p>
    </>
  ),
};
