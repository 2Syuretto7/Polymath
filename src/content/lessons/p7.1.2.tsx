import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Suppose an all-powerful deceiver is deceiving me about everything it can.",
    kind: "premise",
    note: "Descartes grants the most extreme doubt from the First Meditation, to see whether anything survives it.",
  },
  {
    claim: "Then I am being deceived, or at least I am doubting, or seeming to see and hear.",
    kind: "premise",
    note: "Even if what I seem to see is false, it is true that I seem to see it. Deception needs someone to deceive.",
  },
  {
    claim: "Doubting, being deceived and seeming to perceive are all kinds of thinking.",
    kind: "premise",
    note: "Descartes uses thought in a broad sense: whatever happens in us of which we are aware, including willing, imagining and sensing as it seems.",
  },
  {
    claim: "So I am thinking, and to doubt that I am thinking would itself be thinking.",
    kind: "inference",
    note: "The claim verifies itself. Any attempt to doubt it confirms it.",
  },
  {
    claim: "So I am, I exist, whenever I think it or say it.",
    kind: "conclusion",
    note: "In the Second Meditation this needs no general premise: it is seen to be true in the very act of thinking it.",
    objection:
      "Does it depend on a hidden premise, that whatever thinks exists? Then the premise needs to be certain too. Descartes replied that he grasped it by a simple intuition, not a syllogism.",
  },
  {
    claim: "I am a thing that thinks: that doubts, understands, affirms, denies, wills, refuses, imagines and senses.",
    kind: "inference",
    note: "Descartes asks what this I is, and finds that thinking is the one thing he cannot separate from himself.",
    objection:
      "Lichtenberg said Descartes was entitled only to 'it thinks', as we say 'it rains'. Is the I, a thing that persists through many thoughts, already assumed?",
  },
];

export const lesson: LessonContent = {
  id: "p7.1.2",
  minutes: 80,
  links: {
    revisits: ["p7.1.1", "p6.2.2", "p1.1.1"],
    foreshadows: ["p7.1.3", "p7.1.4", "p7.5.4"],
  },

  puzzle: (
    <>
      <p>
        At the end of the First Meditation Descartes has doubted his senses, his body, and even arithmetic. He feels, he
        says, as if he had fallen into deep water and could neither touch the bottom nor swim to the top. Then he finds one
        thing that the deceiver, however powerful, cannot make false. What is it, and is it really as certain as he thinks?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through the argument of the Second Meditation, and open the objections where they appear.
      </p>
      <ArgumentStepViz steps={STEPS} title="From the deepest doubt to I exist" />
    </>
  ),

  theory: (
    <>
      <Definition title="the cogito">
        <p>
          In the Discourse on Method of 1637 Descartes wrote &ldquo;I think, therefore I am&rdquo;; in the Latin of the
          Principles, <em>cogito, ergo sum</em>. The Meditations put it more carefully: the proposition &ldquo;I am, I
          exist&rdquo; is necessarily true whenever it is put forward by me or conceived in my mind. This is the{" "}
          <strong>Archimedean point</strong> Descartes was looking for: one fixed and certain point from which, like
          Archimedes with his lever, he could move the world.
        </p>
      </Definition>

      <Example title="inference or performance">
        <p>
          The word therefore suggests an inference from a premise, whatever thinks exists. But Descartes denied that he
          relied on a general premise. In 1962 Jaakko Hintikka proposed that the cogito is a{" "}
          <strong>performance</strong>: the sentence &ldquo;I do not exist&rdquo; is not contradictory, but it defeats
          itself whenever I think or say it, just as &ldquo;I am not speaking&rdquo; does when spoken aloud. My thinking
          does not prove my existence as evidence proves a theory; it makes its denial impossible to sincerely assert.
        </p>
      </Example>

      <Definition title="what the I is">
        <p>
          The cogito tells me that I exist, not what I am. Descartes cannot yet say he is a body, which is still in doubt.
          He concludes that he is, strictly, a thinking thing. The piece of wax that follows makes the point: melt it by
          the fire and every quality the senses showed is gone, yet it is the same wax. So the wax is known by the
          understanding, not the senses, and the mind that knows it is better known than any body. Similar thoughts were
          not new: Augustine wrote &ldquo;if I am mistaken, I exist&rdquo;, and Avicenna&rsquo;s floating man knew his own
          existence without any knowledge of his body.
        </p>
      </Definition>

      <Remark title="objections">
        <p>
          Gassendi asked why not &ldquo;I walk, therefore I am&rdquo;. Descartes replied that walking can be doubted, since
          I might dream it; only the awareness of seeming to walk, which is a thought, will do. Lichtenberg doubted that the
          cogito shows there is a single persisting subject, rather than a passing thought, and Hume later looked within
          and found only a bundle of perceptions. And the certainty is thin: it holds only while I think, and it tells me
          nothing about the past or the world. The next lesson asks how Descartes hoped to get further.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "form",
      rung: "check",
      prompt: <p>How does the Second Meditation state the certainty Descartes reaches?</p>,
      answer: {
        kind: "choice",
        options: [
          "Everything that exists thinks.",
          "I am, I exist, is necessarily true whenever it is put forward by me or conceived in my mind.",
          "I have a body, therefore I exist.",
          "God exists, therefore I exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "walk",
      rung: "check",
      prompt: <p>Why can &ldquo;I walk, therefore I am&rdquo; not play the same role?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because walking is not an action.",
          "Because I might be dreaming that I walk, unless it means only that I seem to walk, which is a thought.",
          "Because walking proves only that legs exist.",
          "Because Descartes could not walk.",
        ],
        correct: [1],
      },
    },
    {
      key: "lichtenberg",
      rung: "apply",
      prompt: <p>What was Lichtenberg&rsquo;s objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "That Descartes was entitled only to say there is thinking going on, not that there is an I that thinks.",
          "That thinking does not exist.",
          "That the cogito contradicts itself.",
          "That Descartes copied Augustine.",
        ],
        correct: [0],
      },
    },
    {
      key: "perform",
      rung: "apply",
      prompt: (
        <p>
          On Hintikka&rsquo;s reading, &ldquo;I do not exist&rdquo; defeats itself when I assert it. Which of these is
          self-defeating in the same way?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["Snow is black.", "I am not speaking now, said aloud.", "I do not like cheese.", "It is raining."],
        correct: [1],
      },
    },
    {
      key: "wax",
      rung: "apply",
      prompt: <p>What does the example of the melting wax show, according to Descartes?</p>,
      answer: {
        kind: "choice",
        options: [
          "That bodies do not exist.",
          "That bodies are known through the understanding rather than the senses, and so the mind is better known than the body.",
          "That wax is a thinking thing.",
          "That the senses are always reliable.",
        ],
        correct: [1],
      },
    },
    {
      key: "inference",
      rung: "prove",
      prompt: (
        <p>
          Is the cogito an inference from a premise, or something else? Explain one reading of each kind and say which you
          prefer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes the inference reading, with the premise that whatever thinks exists, and its problem that the premise must itself be certain.",
          "Describes another reading, such as simple intuition or Hintikka's performative reading.",
          "States a preference with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "demon",
      rung: "stretch",
      prompt: (
        <p>
          Can the evil demon deceive me into thinking I exist when I do not? Explain, and say what the cogito leaves
          uncertain.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that to be deceived I must exist, so the demon cannot make the belief false.",
          "Names something still uncertain, such as my body, my past, the external world, or whether the I persists between thoughts.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Descartes reaches the cogito from the deepest doubt, the difference between reading it as an inference and as a performance, what he concludes about the I, and one objection.",

  glimpse: (
    <p>
      The next lesson asks how Descartes moves from his own existence to God and the world, through clear and distinct
      ideas. The lesson on dualism examines his claim that the mind is distinct from the body, and Hume will look for the
      self and claim not to find it.
    </p>
  ),
};
