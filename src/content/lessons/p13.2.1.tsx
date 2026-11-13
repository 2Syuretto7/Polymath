import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ExperienceMachineViz } from "@/components/viz/ExperienceMachineViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p13.2.1",
  minutes: 75,
  links: {
    revisits: ["p4.7.1", "p5.2.1", "p13.1.1"],
    foreshadows: ["p13.2.2", "p13.2.3", "p33.2.1"],
  },

  puzzle: (
    <>
      <p>
        What makes a life go well for the person living it? The simplest answer is that what matters is how it feels: the more
        pleasure and the less pain, the better. Would you, then, plug into a machine that guaranteed a lifetime of wonderful
        experiences?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set the pleasures, say what else you care about, and decide.</p>
      <ExperienceMachineViz />
    </>
  ),

  theory: (
    <>
      <Definition title="hedonism about wellbeing">
        <p>
          A life goes well for the one who lives it exactly to the extent that it contains pleasure and lacks pain. This is a
          theory of <strong>wellbeing</strong>, or prudential value, not of morality: it says what is good <em>for</em>{" "}
          someone. Classical utilitarians combined it with the view that right acts maximise total wellbeing.
        </p>
      </Definition>

      <Example title="forms of hedonism">
        <p>
          Bentham counted pleasures by intensity and duration. Mill added quality: &ldquo;It is better to be a human being
          dissatisfied than a pig satisfied.&rdquo; Critics ask whether Mill&rsquo;s higher pleasures are still hedonism. Fred
          Feldman&rsquo;s <strong>attitudinal hedonism</strong> counts taking pleasure in states of affairs, such as being
          pleased that one&rsquo;s child is safe, rather than raw feelings. The Epicureans, earlier, prized tranquillity, the
          absence of pain, over intense pleasure.
        </p>
      </Example>

      <Remark title="the experience machine">
        <p>
          Robert Nozick argued that we want to do things, not just have the experience of doing them; to be a certain kind of
          person; and to be in contact with reality. Since the machine gives the experiences without these, most people would
          not plug in, which suggests wellbeing involves more than experience. Some hedonists reply that the reaction reflects
          status quo bias: people told they are already in a machine often prefer to stay.
        </p>
      </Remark>

      <Remark title="the attraction">
        <p>
          Hedonism explains why pain is bad and pleasure good without further argument, and satisfies the{" "}
          <strong>experience requirement</strong>: something can affect how well your life goes only if it affects your
          experience. Whether a stranger far away keeps a promise to you, unknown to you, seems not to make your life better
          or worse.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>According to hedonism about wellbeing, what makes a life go well?</p>,
      answer: {
        kind: "choice",
        options: ["Pleasure and the absence of pain", "Getting what you want", "Knowledge and friendship", "Doing your duty"],
        correct: [0],
      },
    },
    {
      key: "mill",
      rung: "check",
      prompt: <p>What did Mill add to Bentham&rsquo;s hedonism?</p>,
      answer: { kind: "choice", options: ["Distinctions of quality between pleasures", "A ban on pleasure", "Divine rewards", "Desire satisfaction"], correct: [0] },
    },
    {
      key: "machine",
      rung: "apply",
      prompt: <p>What does Nozick&rsquo;s experience machine aim to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That something besides experience matters to how well a life goes.",
          "That machines are dangerous.",
          "That pleasure is bad.",
          "That everyone is selfish.",
        ],
        correct: [0],
      },
    },
    {
      key: "bias",
      rung: "apply",
      prompt: <p>How do some hedonists explain the reluctance to plug in?</p>,
      answer: {
        kind: "choice",
        options: [
          "As status quo bias: people prefer to stay where they are, real or simulated.",
          "As proof that hedonism is false.",
          "As a fear of technology only.",
          "As irrational in every case.",
        ],
        correct: [0],
      },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>What is the experience requirement?</p>,
      answer: {
        kind: "choice",
        options: [
          "Something can affect your wellbeing only by affecting your experience.",
          "Only experienced people are happy.",
          "Experiences must be shared.",
          "All experience is pleasant.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Would you plug into the experience machine? What does your answer show about wellbeing? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States your choice and the reason for it.",
          "Connects it to hedonism or to Nozick’s three concerns.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>A person is happy all their life, but their friends secretly mock them behind their back. Is their life going as well as it seems?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the experience requirement.",
          "Considers whether deception affects wellbeing without affecting experience.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what hedonism about wellbeing claims, Bentham's and Mill's versions, Nozick's experience machine, and the reply from status quo bias.",

  glimpse: (
    <p>
      The next lessons consider two rivals: desire satisfaction theories and objective list theories. The capabilities approach
      later turns these questions towards public policy.
    </p>
  ),
};
