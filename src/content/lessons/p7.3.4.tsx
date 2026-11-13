import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ManPersonViz } from "@/components/viz/ManPersonViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.3.4",
  minutes: 80,
  links: {
    revisits: ["p7.3.3", "p1.4.2", "p1.4.1"],
    foreshadows: ["p7.5.4", "p30.2.1", "p11.5.1"],
  },

  puzzle: (
    <>
      <p>
        Suppose the soul of a prince, carrying all his memories, entered the body of a cobbler as the cobbler&rsquo;s own
        soul departed. Locke asks who the resulting man would be. Everyone would see the cobbler. But the man would wake
        remembering a palace, and would hold himself responsible for the prince&rsquo;s deeds. Locke said he would be the
        same person as the prince. If so, a person is not the same thing as a human body, nor perhaps as a soul.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        For each of Locke&rsquo;s cases, decide whether we have the same man, the same person and the same substance, then
        reveal his answers. Notice how often the three come apart.
      </p>
      <ManPersonViz />
    </>
  ),

  theory: (
    <>
      <Definition title="three kinds of identity">
        <p>
          Locke holds that what counts as the same depends on the kind of thing. The same <strong>mass of matter</strong>{" "}
          needs the same particles. The same <strong>man</strong>, a human animal, needs the same continuing life, as an oak
          stays the same tree while its matter changes. The same <strong>person</strong> needs something else again.
        </p>
      </Definition>

      <Definition title="the memory criterion">
        <p>
          A <strong>person</strong> is a thinking, intelligent being that can consider itself as itself, the same thinking
          thing, in different times and places. What makes it the same person is <strong>consciousness</strong>: as far as
          consciousness can be extended backwards to any past action or thought, so far reaches the identity of that person.
          You are the person who did whatever you can remember doing, from the inside.
        </p>
      </Definition>

      <Example title="a forensic term">
        <p>
          Locke called person a <em>forensic</em> term, belonging to law and morality: it is about who deserves reward and
          punishment. So a man who in a drunken fit does what he cannot remember is, on Locke&rsquo;s strict view, not the
          same person, though human courts rightly punish him, since they cannot see into his mind; on the day of judgement,
          when all secrets are revealed, nobody will answer for what they know nothing of. Locke also allowed that one
          immaterial substance could support two persons, and that one person could, in principle, pass between substances.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Joseph Butler objected that memory presupposes identity: I can only truly remember what I myself did, so memory
          cannot be what makes it me. Thomas Reid offered the brave officer: as a boy he was flogged for stealing apples; as
          a young officer he remembered the flogging; as an old general he remembers taking a standard in battle but not the
          flogging. By Locke&rsquo;s criterion the general is the officer and the officer is the boy, but the general is not
          the boy, which breaks the logic of identity. Later theorists replaced direct memory with overlapping chains of
          psychological connection, which answers Reid, and Parfit asked whether identity is what matters at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "crit",
      rung: "check",
      prompt: <p>On Locke&rsquo;s view, what makes someone the same person over time?</p>,
      answer: {
        kind: "choice",
        options: [
          "The same body",
          "The same immaterial soul",
          "Consciousness extending back to past thoughts and actions, as in memory",
          "The same name",
        ],
        correct: [2],
      },
    },
    {
      key: "man",
      rung: "check",
      prompt: <p>What makes the same man, in Locke&rsquo;s sense of a human animal?</p>,
      answer: {
        kind: "choice",
        options: [
          "The same particles of matter",
          "Participation in the same continuing life of an organised body",
          "The same memories",
          "The same soul",
        ],
        correct: [1],
      },
    },
    {
      key: "prince",
      rung: "apply",
      prompt: (
        <p>
          In the prince and cobbler case, which of these does Locke say? Choose all that apply.
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The man who wakes is the same person as the prince.",
          "The man who wakes is the same man as the cobbler.",
          "The man who wakes is the same man as the prince.",
          "Nobody survives the swap.",
        ],
        correct: [0, 1],
      },
    },
    {
      key: "forensic",
      rung: "apply",
      prompt: <p>Why did Locke call person a forensic term?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is used in detective work.",
          "Because it concerns responsibility, reward and punishment for actions.",
          "Because persons are physical objects.",
          "Because only lawyers are persons.",
        ],
        correct: [1],
      },
    },
    {
      key: "reid",
      rung: "apply",
      prompt: <p>What does Reid&rsquo;s brave officer case show about Locke&rsquo;s criterion?</p>,
      answer: {
        kind: "choice",
        options: [
          "That memory is perfectly reliable.",
          "That it makes the general the same as the officer and the officer the same as the boy, but the general not the same as the boy, which identity cannot allow.",
          "That officers have no memories.",
          "That the body criterion is false.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          State Butler&rsquo;s circularity objection to the memory criterion, and give one reply. A short paragraph is
          plenty.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the objection: genuine memory of doing something already presupposes that I am the one who did it.",
          "Gives a reply, such as quasi-memory, which has the same causal source without assuming identity.",
          "Says whether the reply works. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "drunk",
      rung: "stretch",
      prompt: (
        <p>
          Should someone be punished for what they did while too drunk to remember it? Use Locke&rsquo;s view to frame your
          answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that on Locke's criterion the later person may not be the same person who acted.",
          "Notes Locke's own answer about human courts, or another consideration such as responsibility for getting drunk.",
          "Reaches a reasoned position. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Locke's distinction between the same man, the same person and the same substance, his memory criterion of personal identity, why he called person a forensic term, and the objections of Butler and Reid.",

  glimpse: (
    <p>
      The next lesson turns to Locke&rsquo;s political philosophy, where persons owning themselves becomes the basis of
      property and rights. Hume will doubt there is any self to remain the same, and Parfit, much later, will argue that
      identity is not what matters in survival.
    </p>
  ),
};
