import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Having a motivating reason is, among other things, having a goal.",
    kind: "premise",
    note: "If you go to the market to buy mangoes, buying mangoes is the goal your action aims at.",
  },
  {
    claim: "Having a goal is being in a state with which the world must fit.",
    kind: "premise",
    note: "A goal is satisfied when the world comes to match it, not the other way round.",
  },
  {
    claim: "States with which the world must fit are desires; states that must fit the world are beliefs.",
    kind: "premise",
    note: "This is the direction of fit. If the evidence shows the market is closed, the belief that it is open should go. A desire for mangoes need not go: you try to change the world instead.",
    objection: "Some say a single state could have both directions of fit, a “besire”, such as seeing that someone needs help in a way that already moves you. Humeans reply that the two directions pull apart and cannot belong to one state.",
  },
  {
    claim: "So having a motivating reason is, among other things, having a desire.",
    kind: "conclusion",
    note: "Michael Smith’s teleological argument for the Humean theory: belief alone never motivates; a desire must be present.",
    objection: "Thomas Nagel and John McDowell reply that when belief alone moves you, a desire is merely ascribed as a consequence of the motivation, not as its source. Beliefs about reasons might motivate on their own.",
  },
];

export const lesson: LessonContent = {
  id: "p13.4.2",
  minutes: 80,
  links: {
    revisits: ["p13.4.1", "p7.5.5", "p4.6.3"],
    foreshadows: ["p13.4.3", "p30.1.1", "p30.1.2"],
  },

  puzzle: (
    <>
      <p>
        Hume wrote that reason is, and ought only to be, the slave of the passions. Knowing that the train leaves at nine
        moves you to hurry only because you want to catch it. But when someone sees that a child is drowning and jumps in,
        is the wanting doing the work, or the seeing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Michael Smith&rsquo;s argument, and challenge the steps you doubt.</p>
      <ArgumentStepViz title="The teleological argument" steps={STEPS} />
    </>
  ),

  theory: (
    <>
      <Definition title="the Humean theory of motivation">
        <p>
          Every motivation to act requires a desire together with a means&ndash;end belief. Beliefs alone, however true, cannot
          move anyone to act. Beliefs and desires are distinct existences: any belief could be held with or without any desire.
        </p>
      </Definition>

      <Definition title="direction of fit">
        <p>
          A belief aims to fit the world: faced with contrary evidence, it should change. A desire aims to have the world fit
          it: faced with the fact that p is not so, a desire that p tends to persist and move one to make p so. G. E. M.
          Anscombe illustrated this with a shopping list used by a shopper and copied by a detective following them.
        </p>
      </Definition>

      <Example title="the moral problem">
        <p>
          Smith noted three plausible claims that seem inconsistent. Moral judgements are beliefs (cognitivism). Moral
          judgements necessarily motivate, at least in rational agents (motivational internalism). Motivation requires a desire
          distinct from any belief (the Humean theory). Non-cognitivists reject the first, externalists the second, and
          anti-Humeans the third.
        </p>
      </Example>

      <Remark title="the amoralist">
        <p>
          Externalists, such as David Brink, point to the amoralist: someone who seems sincerely to judge that cheating is
          wrong yet is not moved at all. If such a person is possible, moral judgement does not necessarily motivate, and the
          moral problem dissolves. Internalists reply that the amoralist uses moral words only in an inverted-commas sense.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does the Humean theory of motivation say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Beliefs alone can motivate.",
          "Motivation requires a desire together with a means–end belief.",
          "Desires are irrational.",
          "Only moral beliefs motivate.",
        ],
        correct: [1],
      },
    },
    {
      key: "fit",
      rung: "check",
      prompt: <p>Which state has the direction of fit &ldquo;the world must fit it&rdquo;?</p>,
      answer: { kind: "choice", options: ["A belief", "A desire", "A perception", "A memory"], correct: [1] },
    },
    {
      key: "evidence",
      rung: "apply",
      prompt: <p>You learn that the shop has run out of mangoes. Which state should change in response, by its direction of fit?</p>,
      answer: {
        kind: "choice",
        options: [
          "The belief that the shop has mangoes.",
          "The desire for mangoes.",
          "Neither.",
          "Both, equally.",
        ],
        correct: [0],
      },
    },
    {
      key: "problem",
      rung: "apply",
      prompt: <p>Which three claims make up Smith&rsquo;s moral problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "Moral judgements are beliefs; they necessarily motivate; motivation requires a distinct desire.",
          "Morality is false; reasons are external; desires are beliefs.",
          "Pleasure is good; pain is bad; God exists.",
          "Moral facts are natural; non-natural; and both.",
        ],
        correct: [0],
      },
    },
    {
      key: "amoral",
      rung: "apply",
      prompt: <p>Why do externalists appeal to the amoralist?</p>,
      answer: {
        kind: "choice",
        options: [
          "To show that moral judgement need not motivate, since the amoralist judges sincerely but is unmoved.",
          "To show that everyone is moral.",
          "To prove the Humean theory.",
          "To show that desires are beliefs.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a belief by itself ever motivate action? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Humean view and the direction of fit argument.",
          "Considers an anti-Humean reply, such as besires or desires ascribed as a consequence.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Someone in deep depression judges that they ought to call their friend, yet feels no pull to do it. What does the case show about the moral problem?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Connects the case to motivational internalism.",
          "Considers whether internalists can say that only rational or psychologically healthy agents are motivated.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Humean theory of motivation, the idea of direction of fit, Smith's teleological argument, and the moral problem formed by three plausible claims.",

  glimpse: (
    <p>
      The next lesson asks how luck bears on praise and blame. Graduate metaethics returns to reasons and to the requirements
      of rationality.
    </p>
  ),
};
