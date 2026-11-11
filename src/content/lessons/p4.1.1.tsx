import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RarefactionViz } from "@/components/viz/RarefactionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.1.1",
  minutes: 60,
  links: {
    revisits: ["p0.1.2", "p0.1.1"],
    foreshadows: ["p4.1.5", "p4.5.4", "p16.7.2"],
  },

  puzzle: (
    <>
      <p>
        Look around: wood, stone, water, air, flesh, fire. The world seems to be made of countless different kinds of
        stuff, and they turn into one another. Wood burns to smoke and ash; water freezes and boils; bread becomes body.
      </p>
      <p>
        Around 600 BCE, in the Greek city of Miletus on the coast of what is now Turkey, a few people asked a new question.
        Could all this be one thing underneath, appearing in different forms? Their answers were wrong. Why do historians
        of philosophy and of science still begin with them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The Milesians looked for an <em>arche</em>, a source or principle: a single stuff from which everything comes and
        into which it returns, explained without appeal to the whims of gods. The third of them, Anaximenes, proposed air,
        and, more importantly, a mechanism: everything else is air thinned out or packed together. Turn the dial.
      </p>
      <RarefactionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Milesian question">
        <p>
          What is the basic stuff of the world, and how does it give rise to everything else? Our main source is
          Aristotle, writing about two centuries later, who read the Milesians as early seekers of what he called the
          material cause. None of their own writings survive except a single fragment of Anaximander, so we see them
          through later eyes.
        </p>
      </Definition>

      <Example title="Thales: water">
        <p>
          Thales is reported to have held that water is the origin of all things, and that the earth rests on water.
          Aristotle guesses at his reasons: that the nourishment of all things is moist, and that the seeds of all things
          have a moist nature. Later writers credit Thales with predicting an eclipse of the sun, usually dated to 585 BCE,
          and Aristotle reports his saying that all things are full of gods, which may mean that the world is alive
          through and through rather than run by Olympians.
        </p>
      </Example>

      <Example title="Anaximander: the boundless">
        <p>
          Anaximander, a younger Milesian, rejected water. If one of the familiar stuffs, which have opposite qualities
          such as wet and dry, hot and cold, were basic and unlimited, it would long ago have swallowed up its opposites. So
          the source must be something without any of these qualities: the <em>apeiron</em>, the boundless or
          indefinite. From it the opposites separate out, and in the one surviving fragment, as paraphrased by later
          writers, they pay penalty to one another for their injustice according to the ordering of time.
        </p>
        <p>
          He also argued, Aristotle reports, that the earth stays where it is not because something holds it up but
          because it is at the centre and equally related to all the extremes, so it has no reason to move one way rather
          than another. That is one of the first arguments from symmetry in history.
        </p>
      </Example>

      <Example title="Anaximenes: air, and a mechanism">
        <p>
          Anaximenes returned to a familiar stuff, air, but added what Anaximander lacked: a process. Thinned, air becomes
          fire; thickened, it becomes wind, then cloud, water, earth and stone. Every change of kind is a change of
          density. He is said to have pointed out that breath blown through pursed lips feels cold, and through an open
          mouth warm: an appeal to experience in support of a theory.
        </p>
      </Example>

      <Remark title="why they matter">
        <ul>
          <li><strong>Natural explanation</strong>: they explained the world by the world, not by the decisions of gods.</li>
          <li><strong>Unity behind variety</strong>: they expected a few principles to explain many appearances, the hope behind every later science.</li>
          <li><strong>Criticism</strong>: each corrected the last with an argument, not an appeal to authority. Anaximander&rsquo;s objection to water is the kind of reasoning this course will study throughout.</li>
        </ul>
        <p>
          Their answers are wrong; matter is not water or air. But the questions they asked, and the way they argued about
          them, are still ours.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "arche",
      rung: "check",
      prompt: <p>Match the thinker to the basic principle. Which is correct?</p>,
      answer: {
        kind: "choice",
        options: [
          "Thales: air; Anaximenes: water",
          "Thales: water; Anaximander: the boundless; Anaximenes: air",
          "Anaximander: fire; Thales: earth",
          "All three: atoms",
        ],
        correct: [1],
      },
    },
    {
      key: "source",
      rung: "check",
      prompt: <p>What is our main source for the views of Thales?</p>,
      answer: {
        kind: "choice",
        options: ["His own surviving books", "Aristotle and later writers", "Inscriptions in Miletus", "Plato's dialogues alone"],
        correct: [1],
      },
    },
    {
      key: "anaximander",
      rung: "apply",
      prompt: <p>What was Anaximander&rsquo;s reason for rejecting water as the basic stuff?</p>,
      answer: {
        kind: "choice",
        options: [
          "Water is too rare.",
          "A basic stuff with one of a pair of opposite qualities would have destroyed its opposites.",
          "The gods forbid it.",
          "Water cannot be seen at night.",
        ],
        correct: [1],
      },
    },
    {
      key: "mechanism",
      rung: "apply",
      prompt: <p>What did Anaximenes add that his predecessors lacked?</p>,
      answer: {
        kind: "choice",
        options: [
          "A belief in many gods.",
          "A process, thinning and thickening, by which one stuff becomes others.",
          "Mathematical proofs.",
          "The theory of atoms.",
        ],
        correct: [1],
      },
    },
    {
      key: "symmetry",
      rung: "apply",
      prompt: <p>Anaximander&rsquo;s explanation of why the earth does not fall rests on which principle?</p>,
      answer: {
        kind: "choice",
        options: [
          "What is heavier falls faster.",
          "Without a reason to move one way rather than another, a thing equally placed among the extremes stays put.",
          "Water holds the earth up.",
          "The gods hold the earth in place.",
        ],
        correct: [1],
      },
    },
    {
      key: "assess",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct Anaximander&rsquo;s argument against water as the basic stuff in standard form, supplying any
          unstated premise, and say which premise you find weakest.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States premises such as: water is wet (has one of a pair of opposites); the basic stuff is unlimited; an unlimited stuff with one quality would destroy its opposite; the opposites still exist.",
          "Concludes that water (or any stuff with one of the opposites) is not the basic stuff.",
          "Identifies and discusses a weak premise, for example that an unlimited stuff must destroy its opposite. Any thoughtful assessment is fine.",
        ],
      },
    },
    {
      key: "why",
      rung: "stretch",
      prompt: (
        <p>
          The Milesians were wrong about what the world is made of. In what sense, if any, were they right? Compare their
          project with a modern scientific theory of matter.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies a feature of their project that survives, such as explaining many kinds of stuff by one or a few underlying principles, or natural explanation.",
          "Compares with a modern theory, such as atoms and elements, or particles and fields, noting a similarity and a difference (for example, evidence and experiment).",
          "Reaches a balanced judgement. Many answers are possible.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what question Thales, Anaximander and Anaximenes asked, what each answered, and why their way of arguing matters more than their answers.",

  glimpse: (
    <p>
      The atomists at the end of this chapter give a very different answer to the Milesian question. Aristotle later
      fits the Milesians into his theory of four causes. Philosophy of Science asks what it is for one science to be
      explained by, or reduced to, another, the modern form of the search for unity behind variety.
    </p>
  ),
};
