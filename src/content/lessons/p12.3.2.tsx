import { Definition, Remark } from "@/components/lesson/Blocks";
import { BlockheadViz } from "@/components/viz/BlockheadViz";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["Turing’s reply works well", "the objection still has force"];
const ITEMS: SortItem[] = [
  {
    text: "The theological objection: thinking is a function of an immortal soul, given by God only to humans.",
    cat: "Turing’s reply works well",
    why: "Turing replied that this limits God’s power, and that such arguments have failed before, as with Galileo.",
  },
  {
    text: "Lady Lovelace’s objection: a machine can only do what we tell it to, so it can never originate anything.",
    cat: "Turing’s reply works well",
    why: "Turing noted that machines often surprise their makers, and that learning machines could go beyond what they were explicitly told.",
  },
  {
    text: "The argument from consciousness: no machine could write a sonnet because of thoughts and emotions felt, not by chance.",
    cat: "the objection still has force",
    why: "Turing replied that we cannot know others feel either, except by behaviour. Critics say passing the test still leaves open whether anything is felt.",
  },
  {
    text: "Blockhead: a giant lookup table could pass any test of fixed length without thinking.",
    cat: "the objection still has force",
    why: "This came after Turing. It suggests that how behaviour is produced matters, not just the behaviour itself.",
  },
  {
    text: "The mathematical objection: Gödel showed there are truths a machine cannot prove.",
    cat: "Turing’s reply works well",
    why: "Turing replied that humans also have limits and make mistakes, so this does not show we surpass every machine.",
  },
];

export const lesson: LessonContent = {
  id: "p12.3.2",
  minutes: 80,
  links: {
    revisits: ["p12.3.1", "p1.2.2", "p12.2.1"],
    foreshadows: ["p12.3.3", "p12.7.3", "p17.3.3"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Can machines think?&rdquo; Alan Turing thought the question was too vague to answer. So in 1950 he replaced it
        with a game: an interrogator types questions to a person and a machine, hidden from view, and tries to tell which is
        which. If the machine regularly fools the interrogator, should we say it thinks?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Block&rsquo;s Blockhead passes the test by looking up answers. Estimate how large its table must be.</p>
      <BlockheadViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the imitation game">
        <p>
          In Turing&rsquo;s test, an interrogator converses by text with two hidden players, a human and a machine. The machine
          passes if the interrogator does no better than chance at identifying it. Turing proposed that a machine that passes
          should be counted as thinking, or at least that the question should then be treated as settled.
        </p>
      </Definition>

      <Remark title="why behaviour?">
        <p>
          Turing&rsquo;s point was that we credit other people with minds on the basis of what they say and do. It would be
          prejudice to demand more of a machine, such as a body of flesh. The test deliberately ignores appearance and the
          material inside.
        </p>
      </Remark>

      <p>Turing answered several objections in his paper. Sort them by whether his reply still seems adequate.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Does Turing’s reply, or the test, survive the objection?" />

      <Remark title="sufficient, necessary or neither?">
        <p>
          The test is not necessary for thinking: a clever being with a strange way of speaking, or a dog, would fail. Blockhead
          suggests it is not sufficient either, unless we add conditions on how the answers are produced. That makes the test
          good evidence, as Turing perhaps intended, rather than a definition.
        </p>
      </Remark>

      <Remark title="today">
        <p>
          Large language models now produce fluent conversation, and in some short trials people cannot reliably tell them from
          humans. Whether this means they think, understand or feel is exactly the question the test was meant to sidestep, and
          the following lessons take it up.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "game",
      rung: "check",
      prompt: <p>In the Turing test, when does the machine pass?</p>,
      answer: {
        kind: "choice",
        options: [
          "When it answers every question correctly.",
          "When the interrogator cannot reliably tell it from the human.",
          "When it proves a theorem.",
          "When it looks like a human.",
        ],
        correct: [1],
      },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>Why did Turing replace &ldquo;can machines think?&rdquo; with a test?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because he thought the original question too vague to answer usefully.",
          "Because machines cannot think.",
          "Because he wanted to build a machine.",
          "Because humans cannot think.",
        ],
        correct: [0],
      },
    },
    {
      key: "block",
      rung: "apply",
      prompt: <p>What does Blockhead suggest about the Turing test?</p>,
      answer: {
        kind: "choice",
        options: [
          "That passing it is not sufficient for thinking, since how the answers are produced matters.",
          "That no machine can pass it.",
          "That only humans can pass it.",
          "That it is too hard.",
        ],
        correct: [0],
      },
    },
    {
      key: "lovelace",
      rung: "apply",
      prompt: <p>What was Turing&rsquo;s reply to Lady Lovelace&rsquo;s objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "That machines are conscious.",
          "That machines often surprise their makers, and learning machines can go beyond what they were told.",
          "That Lovelace was wrong about mathematics.",
          "That God makes machines creative.",
        ],
        correct: [1],
      },
    },
    {
      key: "necessary",
      rung: "apply",
      prompt: <p>Why is passing the test not necessary for thinking?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because a thinking being might fail it, for example by not speaking like a human.",
          "Because every machine passes it.",
          "Because thinking is impossible.",
          "Because the test is too easy.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the Turing test a good test for thinking? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the test and Turing’s motivation.",
          "Considers an objection, such as Blockhead or the argument from consciousness.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "llm",
      rung: "stretch",
      prompt: <p>If a chatbot passed a long Turing test, what more, if anything, would you want to know before saying it thinks?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers how the behaviour is produced, or whether there is understanding or experience.",
          "Relates this to Blockhead, functionalism or the problem of other minds.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Turing’s imitation game and why he proposed it, some objections he answered, Block’s Blockhead and what it shows about the test, and whether the test is necessary, sufficient or good evidence for thinking.",

  glimpse: (
    <p>
      The next lesson presents Searle&rsquo;s Chinese room, which targets understanding rather than behaviour. The final chapter
      of this course returns to artificial minds today.
    </p>
  ),
};
