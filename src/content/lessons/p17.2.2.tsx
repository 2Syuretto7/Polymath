import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { CompactnessViz } from "@/components/viz/CompactnessViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.2.2",
  minutes: 85,
  links: {
    revisits: ["p17.2.1", "p17.1.2", "p2.5.1"],
    foreshadows: ["p17.2.3", "p22.3.2", "m20.3.3"],
  },

  puzzle: (
    <>
      <p>
        Surely we can describe the natural numbers: 0, its successor, the successor of that, and nothing else. Write down
        every true first-order sentence about them. Have we pinned them down, so that any structure satisfying all those
        sentences is just a copy of 0, 1, 2, …?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a finite subset of the sentences c &gt; 0, c &gt; 1, c &gt; 2, …, and find a number that satisfies it.</p>
      <CompactnessViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="compactness">
        <p>
          A set of first-order sentences has a model if and only if every finite subset of it has a model. Proof from
          completeness: if Γ has no model, then Γ ⊨ φ ∧ ¬φ, so Γ ⊢ φ ∧ ¬φ. A derivation uses only finitely many premises, so
          some finite subset of Γ derives a contradiction and, by soundness, has no model.
        </p>
      </Theorem>

      <Example title="nonstandard arithmetic">
        <p>
          Let Th(ℕ) be all first-order sentences true in the natural numbers, and add a new name c with the sentences
          c &gt; 0, c &gt; 1, c &gt; 2, …. Any finite subset is true in ℕ with c a large number, so by compactness the whole set
          has a model. In it c is greater than every standard number. This model satisfies exactly the same first-order
          sentences as ℕ, yet it is not a copy of ℕ: first-order logic cannot pin down the natural numbers.
        </p>
      </Example>

      <Definition title="limits of expressive power">
        <p>
          If a set of sentences has arbitrarily large finite models, it has an infinite model: add the sentences &ldquo;there
          are at least n things&rdquo; for every n and apply compactness. So no set of first-order sentences is true in
          exactly the finite structures; finiteness is not first-order expressible. Nor are &ldquo;the ordering is
          well-founded&rdquo; or &ldquo;the graph is connected&rdquo;.
        </p>
      </Definition>

      <Remark title="what this means">
        <p>
          Second-order logic, quantifying over properties, can characterise ℕ up to isomorphism, but it loses completeness
          and compactness. There is a trade-off between expressive power and good metatheory. Philosophers dispute whether
          our grasp of &ldquo;the natural numbers&rdquo; outruns every first-order theory, and if so, what secures it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "stmt",
      rung: "check",
      prompt: <p>What does the compactness theorem say?</p>,
      answer: {
        kind: "choice",
        options: ["A set of sentences has a model if every finite subset has one", "Every model is finite", "Every finite set of sentences is consistent", "Every theory is complete"],
        correct: [0],
      },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>Why does compactness follow from completeness and soundness?</p>,
      answer: {
        kind: "choice",
        options: ["Derivations are finite, so any contradiction uses only finitely many premises", "Every structure is countable", "Every sentence is decidable", "Models can be built from names"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with n = 10, what is the smallest natural number that c can be?</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "fin",
      rung: "apply",
      prompt: <p>Is there a set of first-order sentences true in exactly the finite structures?</p>,
      answer: {
        kind: "choice",
        options: [
          "No: any set with arbitrarily large finite models also has an infinite model.",
          "Yes: the sentence ‘there are finitely many things’.",
          "Yes, but only with identity.",
          "Only if the language has infinitely many names.",
        ],
        correct: [0],
      },
    },
    {
      key: "nonst",
      rung: "apply",
      prompt: <p>In a nonstandard model of arithmetic with element c, is c + 1 also nonstandard?</p>,
      answer: {
        kind: "choice",
        options: ["Yes: it is greater than c, so greater than every standard number", "No: c + 1 is standard", "It is undefined", "Only if c is even"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if a set of sentences Γ has models of every finite size, it has an infinite model.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes, for each n, a sentence λₙ saying there are at least n things, using identity.",
          "Notes that any finite subset of Γ ∪ {λ₁, λ₂, …} is true in a large enough finite model of Γ.",
          "Applies compactness to get a model of the whole set, which has at least n things for every n, so it is infinite.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If no first-order theory pins down the natural numbers, how do we manage to talk about them?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers answers such as second-order logic, an informal grasp of ‘and so on’, or the view that we never fully do.",
          "Weighs a cost of the chosen answer, such as the loss of completeness for second-order logic.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the compactness theorem, how it follows from completeness, why it gives nonstandard models of arithmetic, and why finiteness cannot be expressed in first-order logic.",

  glimpse: (
    <p>
      Next, the Löwenheim–Skolem theorems and Skolem&rsquo;s paradox: set theory proves there are uncountable sets, yet it
      has a countable model.
    </p>
  ),
};
