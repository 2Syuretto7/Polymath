import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GaussPairViz } from "@/components/viz/GaussPairViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.6.5",
  minutes: 85,
  links: {
    revisits: ["p22.6.4", "p22.6.2", "m1.3.3"],
    foreshadows: ["p16.5.1", "p16.5.2", "p3.3.3"],
  },

  puzzle: (
    <>
      <p>
        You can prove that 1 + 2 + … + n = n(n + 1)/2 by induction, or by writing the sum twice, once backwards, and adding.
        Both proofs are valid, and each establishes the theorem with certainty. Yet many people feel only the second tells
        you why it is true. If a proof already makes a theorem certain, what more could explaining it add?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Prove the same formula by pairing and by induction, and ask which one explains.</p>
      <GaussPairViz />
    </>
  ),

  theory: (
    <>
      <Definition title="explanatory proofs">
        <p>
          Mathematicians distinguish proofs that show <em>that</em> a theorem holds from proofs that show <em>why</em>. The
          contrast is old: Aristotle separated demonstration of the fact from demonstration of the reason, and Bolzano sought
          proofs that follow the objective grounds of a truth. Proofs by exhaustive case-checking, by computer, or by
          contradiction are often felt to verify without explaining.
        </p>
      </Definition>

      <Example title="Steiner’s account">
        <p>
          Mark Steiner (1978) proposed that an explanatory proof makes use of a <strong>characterising property</strong> of an
          entity in the theorem: a property unique to it within a family. The proof should also generalise: varying the
          object while keeping the property yields a proof of a related theorem. Critics, such as Resnik and Kushner, found
          explanatory proofs with no evident characterising property, and Steiner&rsquo;s account struggles with proofs in
          which nothing is singled out.
        </p>
      </Example>

      <Example title="Lange on symmetry and unity">
        <p>
          Marc Lange argues that explanation is relative to what we find striking about a result. When the theorem has a
          symmetry, the explanatory proof is one that exploits the same symmetry, as pairing exploits the symmetry of
          reversing the sum. When the result is a striking coincidence, an explanation shows it is no coincidence, by deriving
          its parts from a common source.
        </p>
      </Example>

      <Remark title="explanation and existence">
        <p>
          The question matters beyond mathematics. The enhanced indispensability argument holds that mathematics explains
          physical facts, such as the prime life cycles of cicadas or why a honeycomb is hexagonal. If such explanations are
          genuine, and we should believe in what does explanatory work, mathematical objects earn a place in our ontology.
          Opponents reply that the mathematics represents the explanation, while the physical facts do the explaining.
          Philosophy of Mathematics ends with this question still open.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dist",
      rung: "check",
      prompt: <p>What distinction does this lesson draw between proofs?</p>,
      answer: { kind: "choice", options: ["Proofs that show why a theorem holds, and proofs that only show that it holds", "Valid and invalid proofs", "Long and short proofs", "Formal and informal proofs"], correct: [0] },
    },
    {
      key: "steiner",
      rung: "check",
      prompt: <p>On Steiner&rsquo;s account, what does an explanatory proof use?</p>,
      answer: { kind: "choice", options: ["A characterising property of an entity in the theorem", "A computer", "A contradiction", "Only axioms of set theory"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation with n = 6, how many dots does the full rectangle in the pairing proof have?</p>,
      answer: { kind: "numeric", value: 42 },
    },
    {
      key: "lange",
      rung: "apply",
      prompt: <p>According to Lange, why does the pairing proof explain?</p>,
      answer: { kind: "choice", options: ["It exploits the same symmetry that the result displays, reversing the order of the sum", "It is shorter", "It uses induction", "It was found by Gauss"], correct: [0] },
    },
    {
      key: "enh",
      rung: "apply",
      prompt: <p>How does mathematical explanation bear on the indispensability debate?</p>,
      answer: { kind: "choice", options: ["If mathematics genuinely explains physical facts, that may be a reason to believe in mathematical objects", "It shows mathematics is false", "It has no bearing", "It proves physics is a priori"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a proof by contradiction be explanatory? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why such proofs are often thought not to explain, since they show only that the denial is impossible.",
          "Considers an example or reply, such as Euclid’s proof of infinitely many primes, which many find explanatory and can be cast directly.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is mathematical explanation an objective feature of proofs, or only a matter of what helps us understand?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes an objective view, such as Steiner’s or Bolzano’s, from a pragmatic or psychological one.",
          "Considers evidence on either side, such as wide agreement among mathematicians, or Lange’s relativity to what is striking.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Philosophy of Mathematics is complete. It began with Plato&rsquo;s Forms and ended with whether proofs and numbers can
        explain the world; on the way, it met logicism, formalism, intuitionism, set theory and the debate over abstract
        objects.
      </p>
      <p>
        Questions about explanation lead straight to the philosophy of science: what makes any explanation good, whether laws
        or causes do the explaining, and how theories are confirmed.
      </p>
    </>
  ),
};
