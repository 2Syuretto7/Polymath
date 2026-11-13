import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MarkTransmissionViz } from "@/components/viz/MarkTransmissionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.4.3",
  minutes: 75,
  links: {
    revisits: ["p11.4.1", "p11.4.2", "p7.5.2"],
    foreshadows: ["p32.3.1", "p27.4.2", "p16.5.1"],
  },

  puzzle: (
    <>
      <p>
        Regularity and counterfactual theories look at patterns and possibilities. But when a rock breaks a window, something
        seems to travel from one to the other: energy, momentum, a physical connection. Can causation be found in the
        physics of what happens, rather than in what would have happened?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Mark a cricket ball in flight, then mark a spot of light sweeping a wall. Which process carries the mark forward?
      </p>
      <MarkTransmissionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="causal processes">
        <p>
          Wesley Salmon distinguished <strong>causal processes</strong>, which can transmit a mark, from{" "}
          <strong>pseudo-processes</strong>, such as a moving shadow or spot of light, which cannot. A{" "}
          <strong>causal interaction</strong> is an intersection of processes in which both are changed.
        </p>
      </Definition>

      <Definition title="conserved quantity theory">
        <p>
          Phil Dowe, later with Salmon, defined a causal process as the world line of an object possessing a conserved
          quantity, such as energy, momentum or charge, and a causal interaction as an exchange of such a quantity. Causation
          is then whatever physics says is transferred.
        </p>
      </Definition>

      <Example title="faster than light?">
        <p>
          Sweep a torch across the sky, and its spot on a distant enough cloud moves faster than light. No law is broken,
          because the spot is a pseudo-process: nothing passes from one point of the spot to the next. The theory explains
          why relativity limits causal processes but not pseudo-processes.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          <strong>Omissions and prevention</strong>: the gardener&rsquo;s not watering kills the plant, but no conserved
          quantity passes from an absence. <strong>Explanatory relevance</strong>: when a cue ball hits a ball chalked blue,
          momentum and chalk both pass, but only the momentum matters for where the ball goes, and the theory does not say
          which is relevant. Some philosophers conclude that there are two concepts of cause: production and dependence.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What distinguishes a causal process from a pseudo-process, for Salmon?</p>,
      answer: {
        kind: "choice",
        options: ["Its speed", "Whether it can transmit a mark", "Whether it is visible", "Whether it is regular"],
        correct: [1],
      },
    },
    {
      key: "dowe",
      rung: "check",
      prompt: <p>On the conserved quantity theory, what is a causal interaction?</p>,
      answer: { kind: "choice", options: ["A regular succession", "An exchange of a conserved quantity", "A counterfactual dependence", "A change in appearance"], correct: [1] },
    },
    {
      key: "shadow",
      rung: "apply",
      prompt: <p>A shadow of a bird moves across a field. Which kind of process is the shadow&rsquo;s motion?</p>,
      answer: { kind: "choice", options: ["A causal process", "A pseudo-process", "A causal interaction", "An omission"], correct: [1] },
    },
    {
      key: "omit",
      rung: "apply",
      prompt: <p>Why do omissions trouble process theories?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because nothing is transferred from an absence",
          "Because omissions are too common",
          "Because omissions transmit marks",
          "Because omissions are faster than light",
        ],
        correct: [0],
      },
    },
    {
      key: "relev",
      rung: "apply",
      prompt: <p>A cue ball with blue chalk strikes a second ball, transferring momentum and chalk. What problem does this illustrate?</p>,
      answer: {
        kind: "choice",
        options: [
          "Pseudo-processes",
          "Explanatory relevance: the theory does not say which transferred quantity explains the motion",
          "Backwards causation",
          "Overdetermination",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is causation a physical connection, or difference-making? Argue briefly, using an example.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the process view and the counterfactual view.",
          "Uses an example such as omissions or preemption to test them.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "two",
      rung: "stretch",
      prompt: <p>Could there be two concepts of causation, production and dependence? What would this mean for the debate?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the two concepts.",
          "Considers whether pluralism dissolves or merely relocates the disagreement.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Salmon's distinction between causal processes and pseudo-processes, the conserved quantity theory, why a spot of light can move faster than light, and the problems of omissions and explanatory relevance.",

  glimpse: (
    <p>
      Next, Metaphysics asks how things persist through time. Philosophy of physics asks where the direction of causation
      comes from, and philosophy of science links causes to explanation.
    </p>
  ),
};
