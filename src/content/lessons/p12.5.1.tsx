import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EchoViz } from "@/components/viz/EchoViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.5.1",
  minutes: 75,
  links: {
    revisits: ["p12.1.1", "p7.3.2", "p12.2.1"],
    foreshadows: ["p12.5.2", "p12.5.3", "p12.5.4"],
  },

  puzzle: (
    <>
      <p>
        A bat finds a moth in the dark by shouting and listening for the echo. We can measure every detail of how it does
        this. Do we then know what it is like for the bat?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Move the moth and see how the echo changes. Physics gives you the delay and the shift in pitch exactly. One line
        stays unanswered.
      </p>
      <EchoViz />
    </>
  ),

  theory: (
    <>
      <Definition title="phenomenal consciousness">
        <p>
          Thomas Nagel, in &ldquo;What Is It Like to Be a Bat?&rdquo; (1974), wrote that an organism has conscious mental
          states if and only if there is something it is like to be that organism, something it is like for the organism. This
          felt, first-person aspect is the <strong>subjective character</strong> of experience.
        </p>
      </Definition>

      <Example title="the bat">
        <p>
          Bats perceive by echolocation, a sense unlike any of ours. We can imagine flying, hanging upside down or eating
          insects, but that tells us what it would be like for us to behave like a bat, not what it is like for the bat. The
          bat&rsquo;s experience is tied to a point of view we cannot occupy.
        </p>
      </Example>

      <Remark title="objectivity">
        <p>
          Science progresses by moving away from particular points of view: it describes lightning as an electrical discharge,
          not by how it looks to us. Nagel argued that this method cannot work for experience, since experience just is how
          things are from a point of view. Removing the point of view removes the thing to be explained. So physicalism, though
          it may be true, is something we do not yet understand how it could be true.
        </p>
      </Remark>

      <Remark title="replies">
        <p>
          Some reply that not being able to imagine a bat&rsquo;s experience is a limit of our imagination, not a gap in the
          world. Others accept that there are subjective facts but hold that they are physical facts known in a special,
          first-person way, an idea developed in the next lesson.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "crit",
      rung: "check",
      prompt: <p>What is Nagel&rsquo;s mark of a conscious state?</p>,
      answer: {
        kind: "choice",
        options: [
          "It causes behaviour.",
          "There is something it is like to be in it.",
          "It can be reported in language.",
          "It is computed by a brain.",
        ],
        correct: [1],
      },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>Why did Nagel choose bats?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are clearly conscious but perceive by a sense very unlike ours.",
          "They are not conscious.",
          "They are easy to study.",
          "They are closely related to humans.",
        ],
        correct: [0],
      },
    },
    {
      key: "imagine",
      rung: "apply",
      prompt: <p>Imagining yourself with webbed arms flying at dusk tells you what?</p>,
      answer: {
        kind: "choice",
        options: [
          "What it is like for a bat to be a bat.",
          "What it would be like for you to behave as a bat does.",
          "Nothing at all.",
          "How echolocation works.",
        ],
        correct: [1],
      },
    },
    {
      key: "obj",
      rung: "apply",
      prompt: <p>Why does Nagel think the usual scientific method of reduction fails for experience?</p>,
      answer: {
        kind: "choice",
        options: [
          "Science cannot measure brains.",
          "Reduction removes the point of view, which is what experience consists in.",
          "Experience is too complex.",
          "Science is subjective.",
        ],
        correct: [1],
      },
    },
    {
      key: "verdict",
      rung: "apply",
      prompt: <p>What was Nagel&rsquo;s conclusion about physicalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is certainly false.",
          "It is certainly true.",
          "It may be true, but we cannot yet understand how it could be.",
          "It is meaningless.",
        ],
        correct: [2],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does our inability to imagine echolocation show that some facts are not physical? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Nagel’s point about subjective character and points of view.",
          "Considers the reply that this is a limit of imagination or concepts, not of the world.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could a blind person know what it is like to see red? Compare this with the bat case.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Draws the parallel with a missing sense.",
          "Considers what descriptions can and cannot convey.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Nagel's idea of what it is like to be something, why the bat example is chosen, and why he thought the objectivity of science struggles with subjective experience.",

  glimpse: (
    <p>
      The next lesson sharpens Nagel&rsquo;s worry into an argument: Mary, who knows everything physical about colour, sees
      red for the first time.
    </p>
  ),
};
