import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TSentenceViz } from "@/components/viz/TSentenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p15.3.2",
  minutes: 80,
  links: {
    revisits: ["p15.3.1", "p15.1.1", "p2.2.2"],
    foreshadows: ["p15.3.3", "p17.5.2", "p29.4.1"],
  },

  puzzle: (
    <>
      <p>
        You have never heard most of the sentences you understand today, including this one. A finite mind has learnt a finite
        stock of words and rules, yet understands endlessly many new sentences. What must a theory of meaning be like to explain
        that?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a sentence of a small fragment of German, and derive its truth condition from a few axioms.</p>
      <TSentenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="truth-conditional semantics">
        <p>
          Donald Davidson, in &ldquo;Truth and Meaning&rdquo; (1967), proposed that a theory of meaning for a language is a
          theory of truth for it in Tarski&rsquo;s style. From finitely many axioms, one for each word and each way of combining
          words, it derives for every sentence s a <strong>T-sentence</strong>: s is true if and only if p. For example,
          &ldquo;Schnee ist weiß&rdquo; is true if and only if snow is white. To know the truth conditions of a sentence is, on
          this view, to know what it means.
        </p>
      </Definition>

      <Example title="compositionality">
        <p>
          The theory is compositional: the truth condition of &ldquo;Schnee ist weiß und Gras ist grün&rdquo; is built from the
          axioms for &ldquo;Schnee&rdquo;, &ldquo;Gras&rdquo;, &ldquo;ist weiß&rdquo;, &ldquo;ist grün&rdquo; and
          &ldquo;und&rdquo;. A finite set of axioms yields T-sentences for infinitely many sentences, which is what learnability
          requires.
        </p>
      </Example>

      <Remark title="radical interpretation">
        <p>
          How could we tell that a truth theory is right for a speaker? Davidson imagined a <strong>radical
          interpreter</strong>, who knows nothing of the language and sees only when speakers hold sentences true. If a speaker
          holds &ldquo;Es regnet&rdquo; true when, and only when, it is raining near them, the interpreter tries &ldquo;Es
          regnet&rdquo; is true iff it is raining. Doing this requires the <strong>principle of charity</strong>: assume the
          speaker&rsquo;s beliefs are mostly true and consistent, since otherwise meaning and belief cannot be pulled apart.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          A T-sentence can be true without giving the meaning: &ldquo;Schnee ist weiß&rdquo; is true iff grass is green is also
          true, since both sides are true. Davidson replied that the whole theory, tested across all sentences and situations,
          must be lawlike, which weeds out such accidents. Others doubt that truth conditions capture meaning for questions,
          commands, or moral claims, and some think meaning must be explained by use rather than truth.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "t",
      rung: "check",
      prompt: <p>What is a T-sentence?</p>,
      answer: {
        kind: "choice",
        options: [
          "A statement of the form “s is true if and only if p”, giving the truth condition of a sentence s.",
          "A sentence that is always true.",
          "A tautology of logic.",
          "A sentence about time.",
        ],
        correct: [0],
      },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>Why did Davidson insist on a finite set of axioms?</p>,
      answer: {
        kind: "choice",
        options: [
          "So that a finite mind could learn a language with infinitely many sentences.",
          "To save paper.",
          "Because languages have finitely many sentences.",
          "To make every sentence true.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, make grass white. Is &ldquo;Schnee ist weiß und Gras ist grün&rdquo; then true?</p>,
      answer: { kind: "choice", options: ["No", "Yes", "It has no truth value", "Only in German"], correct: [0] },
    },
    {
      key: "charity",
      rung: "apply",
      prompt: <p>What does the principle of charity tell the radical interpreter to do?</p>,
      answer: {
        kind: "choice",
        options: [
          "Assume the speaker’s beliefs are mostly true and consistent.",
          "Give the speaker money.",
          "Assume the speaker is lying.",
          "Translate word by word with a dictionary.",
        ],
        correct: [0],
      },
    },
    {
      key: "grass",
      rung: "apply",
      prompt: <p>&ldquo;Schnee ist weiß&rdquo; is true iff grass is green. Why is this a problem for the simplest version of Davidson&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is a true T-sentence, but it does not give the meaning of the sentence.",
          "It is false.",
          "Grass is not green.",
          "It is not about German.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is knowing the truth conditions of a sentence enough to know its meaning? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Davidson’s view and its motivation.",
          "Considers an objection, such as the grass-is-green problem or non-declarative sentences.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>What should a truth-conditional theory say about the command &ldquo;Shut the door!&rdquo;, which is neither true nor false?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the command has no truth value, so it has no T-sentence in the ordinary sense.",
          "Considers a strategy, such as fulfilment conditions, or a truth-evaluable core like “you shut the door” plus a mood.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Davidson's idea that a theory of meaning is a theory of truth, what T-sentences are and why compositionality matters, radical interpretation and the principle of charity, and one objection.",

  glimpse: (
    <p>
      The next lesson considers the rival view that meaning is use. Tarski&rsquo;s theory of truth appears in its own right in
      philosophical logic, and deflationists argue that truth is a much thinner notion than Davidson needs.
    </p>
  ),
};
