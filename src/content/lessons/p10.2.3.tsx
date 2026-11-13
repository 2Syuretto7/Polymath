import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CoherenceWebViz } from "@/components/viz/CoherenceWebViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p10.2.3",
  minutes: 80,
  links: {
    revisits: ["p10.2.2", "p10.2.1", "p9.7.3"],
    foreshadows: ["p10.2.4", "p18.6.1", "p10.3.2"],
  },

  puzzle: (
    <>
      <p>
        Otto Neurath compared us to sailors who must rebuild their ship on the open sea, never able to put it in dry dock and
        start again from the keel. Perhaps beliefs have no foundations at all, and each is held up by its fit with the others.
        But then what stops a beautifully consistent fairy tale from counting as justified?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Toggle beliefs in and out of the web. Each support link between two held beliefs adds to the coherence score; each
        conflict between two held beliefs costs twice as much. Then compare the detective with the fairy tale.
      </p>
      <CoherenceWebViz />
    </>
  ),

  theory: (
    <>
      <Definition title="coherentism">
        <p>
          A belief is justified by its membership in a <strong>coherent system</strong> of beliefs, not by resting on basic
          beliefs. Justification is holistic: no belief is privileged, and support runs in many directions at once, so the
          regress is answered without either foundations or a vicious circle.
        </p>
      </Definition>

      <Example title="what coherence is">
        <p>
          Coherence is more than consistency. Laurence BonJour counted logical consistency, probabilistic consistency, many
          inferential links among beliefs, few isolated subsystems, and few anomalies left unexplained. A detective&rsquo;s
          theory of a crime is a model case: the mud, the rain and the forced window explain one another, and the theory that
          the butler lied fits them all.
        </p>
      </Example>

      <Remark title="the isolation objection">
        <p>
          A coherent system might float free of the world. A good novelist can write a perfectly coherent story, and there may
          be many coherent systems incompatible with one another. If coherence alone justifies, it seems the fairy tale is as
          justified as the detective&rsquo;s theory. Coherentists reply that a real believer&rsquo;s system includes beliefs
          produced spontaneously by perception, and that coherence must be judged over such inputs.
        </p>
      </Remark>

      <Remark title="the input problem and access">
        <p>
          That reply raises the input problem: if experience matters only as it shows up in beliefs, the world gets no direct
          vote; if it matters directly, the view begins to look like foundationalism. A second worry is that judging coherence
          requires knowing what one believes, which needs justification of its own. BonJour himself later gave up coherentism
          for a form of foundationalism.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>According to coherentism, what justifies a belief?</p>,
      answer: {
        kind: "choice",
        options: [
          "Resting on a certain basic belief.",
          "Its place in a coherent system of beliefs.",
          "Being believed by many people.",
          "Nothing: no belief is justified.",
        ],
        correct: [1],
      },
    },
    {
      key: "neurath",
      rung: "check",
      prompt: <p>What does Neurath&rsquo;s ship represent?</p>,
      answer: {
        kind: "choice",
        options: [
          "That knowledge must be rebuilt from foundations.",
          "That we revise beliefs piece by piece while relying on the rest, with no fixed starting point.",
          "That beliefs drift aimlessly.",
          "That only sailors have knowledge.",
        ],
        correct: [1],
      },
    },
    {
      key: "more",
      rung: "apply",
      prompt: <p>Which of these does coherence require, beyond mere consistency?</p>,
      answer: {
        kind: "choice",
        options: [
          "Many inferential and explanatory links among beliefs",
          "Few unexplained anomalies",
          "That every belief be certain",
          "Few isolated subsystems",
        ],
        correct: [0, 1, 3],
      },
    },
    {
      key: "isolation",
      rung: "apply",
      prompt: <p>What is the isolation objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "Coherent believers are lonely.",
          "A coherent system might have no connection to the world, so coherence alone cannot make beliefs justified.",
          "Coherence is impossible to achieve.",
          "Basic beliefs are isolated from each other.",
        ],
        correct: [1],
      },
    },
    {
      key: "regress",
      rung: "apply",
      prompt: <p>How does coherentism answer the regress problem from the earlier lesson?</p>,
      answer: {
        kind: "choice",
        options: [
          "It accepts an infinite chain of reasons.",
          "It says justification is holistic, so it need not run in a single line that ends or circles.",
          "It finds certain foundations.",
          "It denies that any belief needs justification.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can coherentism answer the isolation objection? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the objection, for example with a coherent fiction.",
          "Considers a reply, such as including perceptual inputs, and its cost.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "detective",
      rung: "stretch",
      prompt: <p>Is a detective solving a case a coherentist or a foundationalist? What do clues play the role of?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes how the detective weighs fit among clues and hypotheses.",
          "Asks whether the clues, as observations, act as foundations.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend coherentism and how it answers the regress, what coherence involves beyond consistency, Neurath's ship, the isolation objection with a coherent fairy tale, and the input problem.",

  glimpse: (
    <p>
      The next lesson considers infinitism, the remaining answer to the regress. Later, Quine&rsquo;s web of belief carries
      holism into the philosophy of language, and evidentialism asks what it is to have evidence at all.
    </p>
  ),
};
