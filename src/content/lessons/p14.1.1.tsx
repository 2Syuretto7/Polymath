import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { StateOfNatureViz } from "@/components/viz/StateOfNatureViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p14.1.1",
  minutes: 80,
  links: {
    revisits: ["p5.3.4", "p1.6.1", "p13.1.3"],
    foreshadows: ["p14.1.4", "p14.2.1", "p26.4.3"],
  },

  puzzle: (
    <>
      <p>
        Imagine there were no government at all: no police, no courts, no laws. Would people live in peace, or in fear? Thomas
        Hobbes, writing during the English Civil War, answered that life would be a war of every one against every one, and
        concluded that almost any government is better than none. Was he right?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Play the state of nature as a game between neighbours, then add a sovereign who punishes invasion.</p>
      <StateOfNatureViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the state of nature">
        <p>
          The condition of people without a common power to keep them in awe. Hobbes held that people are roughly equal, since
          even the weakest can kill the strongest by plotting, and that they want to preserve themselves. Resources are
          scarce, and no one can be sure of others&rsquo; intentions.
        </p>
      </Definition>

      <Example title="the three causes of quarrel">
        <p>
          In <em>Leviathan</em> (1651) Hobbes names competition, which makes people invade for gain; diffidence, or distrust,
          which makes them invade for safety, striking first before being struck; and glory, which makes them invade for
          reputation. Even people who want only peace have reason to attack first.
        </p>
      </Example>

      <Definition title="the social contract">
        <p>
          The laws of nature, discovered by reason, tell everyone to seek peace and to lay down their right to all things,
          provided others do the same. But covenants without the sword are but words. So people agree to authorise a sovereign,
          with power to enforce the peace, and owe it obedience so long as it protects them.
        </p>
      </Definition>

      <Remark title="objections">
        <p>
          Locke asked why people who fear polecats and foxes would agree to be devoured by lions: an absolute sovereign may be
          worse than the state of nature. Others note that the state of nature describes no actual history, so the contract is
          at best hypothetical. Game theorists add that repeated interaction can sustain cooperation without a sovereign,
          as the iterated prisoner&rsquo;s dilemma shows.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the state of nature, for Hobbes?</p>,
      answer: {
        kind: "choice",
        options: [
          "Life in the countryside.",
          "The condition of people without a common power to keep them in awe.",
          "A society ruled by priests.",
          "Life before humans existed.",
        ],
        correct: [1],
      },
    },
    {
      key: "causes",
      rung: "check",
      prompt: <p>Which of these is not one of Hobbes&rsquo;s three causes of quarrel?</p>,
      answer: { kind: "choice", options: ["Competition", "Diffidence", "Glory", "Boredom"], correct: [3] },
    },
    {
      key: "diff",
      rung: "apply",
      prompt: <p>Why might even a peaceful person attack first in the state of nature?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because they enjoy fighting.",
          "Because, unsure of others’ intentions, striking first is the safest way to protect themselves.",
          "Because the sovereign orders it.",
          "Because the laws of nature require attack.",
        ],
        correct: [1],
      },
    },
    {
      key: "game",
      rung: "apply",
      prompt: <p>In the visualisation, what does the sovereign&rsquo;s penalty change?</p>,
      answer: {
        kind: "choice",
        options: [
          "It makes invading less rewarding, so holding back becomes each person’s best reply.",
          "It makes everyone richer.",
          "It removes the tax.",
          "It makes invasion compulsory.",
        ],
        correct: [0],
      },
    },
    {
      key: "locke",
      rung: "apply",
      prompt: <p>What is Locke&rsquo;s objection about polecats, foxes and lions?</p>,
      answer: {
        kind: "choice",
        options: [
          "That animals also have rights.",
          "That giving absolute power to a sovereign to escape danger from others may expose people to a greater danger.",
          "That the state of nature is peaceful.",
          "That sovereigns should be chosen by lot.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Hobbes show that people have reason to accept an absolute sovereign? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Hobbes’s argument from the state of nature to the sovereign.",
          "Raises an objection, such as Locke’s lions or the possibility of cooperation without a sovereign.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the relation between countries today a Hobbesian state of nature? What would that imply for international order?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the absence of a world sovereign and compares it with Hobbes’s picture.",
          "Considers a difference, such as repeated dealings, trade or international institutions.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Hobbes's state of nature and why it becomes a war of all against all, the three causes of quarrel, how the social contract creates a sovereign, and one objection.",

  glimpse: (
    <p>
      The next lessons give Locke&rsquo;s gentler state of nature and Rousseau&rsquo;s general will. Later lessons ask
      whether we have a duty to obey the law at all, and Rawls revives the contract to choose principles of justice.
    </p>
  ),
};
