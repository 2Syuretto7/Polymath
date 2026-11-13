import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BuildersGameViz } from "@/components/viz/BuildersGameViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p15.3.3",
  minutes: 75,
  links: {
    revisits: ["p15.3.2", "p15.3.1", "p15.1.1"],
    foreshadows: ["p15.4.1", "p15.6.1", "p18.5.1"],
  },

  puzzle: (
    <>
      <p>
        What does &ldquo;hello&rdquo; mean? It does not stand for anything, and it is not true or false. Yet anyone who speaks
        English knows exactly what it means: they know how to use it, when meeting someone, on the phone, to get attention. Is
        all meaning like that?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Play Wittgenstein&rsquo;s builders&rsquo; game, then add numerals to it.</p>
      <BuildersGameViz />
    </>
  ),

  theory: (
    <>
      <Definition title="meaning as use">
        <p>
          In the <em>Philosophical Investigations</em> (1953), Ludwig Wittgenstein wrote that for a large class of cases the
          meaning of a word is its use in the language. Instead of asking what a word stands for, we should look at the{" "}
          <strong>language games</strong> in which it is used: giving orders, describing, reporting, telling jokes, thanking,
          praying. These are embedded in <strong>forms of life</strong>, the shared activities of the people who speak.
        </p>
      </Definition>

      <Example title="against the Augustinian picture">
        <p>
          The <em>Investigations</em> opens with Augustine&rsquo;s account of learning words by being shown objects: every word
          names something. The builders&rsquo; game fits that picture, but only because it is so small. Numerals,
          &ldquo;there&rdquo;, &ldquo;this&rdquo;, &ldquo;not&rdquo; and &ldquo;hello&rdquo; are not learnt by pointing at
          objects, and even pointing works only for someone who already knows what sort of thing is being named.
        </p>
      </Example>

      <Remark title="family resemblance">
        <p>
          Wittgenstein asked what all games have in common: board games, card games, ball games, solitaire. Not winning, not
          competition, not skill, not amusement. Instead there is a network of overlapping similarities, like resemblances in a
          family. A word like &ldquo;game&rdquo; need not have a definition by necessary and sufficient conditions to be used
          correctly.
        </p>
      </Remark>

      <Remark title="use theories after Wittgenstein">
        <p>
          Later philosophers made the idea more systematic. Inferentialists such as Robert Brandom hold that a sentence means
          what it can be inferred from and what follows from it. Conceptual role semantics says much the same about thoughts.
          Critics ask how use, which is a matter of what people do, could fix what words should mean, and whether use can
          explain compositionality as neatly as truth conditions do.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "slogan",
      rung: "check",
      prompt: <p>What did Wittgenstein say the meaning of a word is, for a large class of cases?</p>,
      answer: {
        kind: "choice",
        options: ["Its use in the language", "The object it names", "An image in the mind", "Its dictionary definition"],
        correct: [0],
      },
    },
    {
      key: "game",
      rung: "check",
      prompt: <p>What is a language game?</p>,
      answer: {
        kind: "choice",
        options: [
          "A pattern of activity in which words are used, such as giving orders or describing.",
          "A word puzzle.",
          "A formal language for logic.",
          "A game played only by philosophers.",
        ],
        correct: [0],
      },
    },
    {
      key: "slab",
      rung: "apply",
      prompt: <p>In the builders&rsquo; game, how does &ldquo;Slab!&rdquo; function?</p>,
      answer: {
        kind: "choice",
        options: [
          "As an order to bring a slab, whose meaning lies in that role.",
          "As a name describing a slab.",
          "As a question about slabs.",
          "As a meaningless noise.",
        ],
        correct: [0],
      },
    },
    {
      key: "num",
      rung: "apply",
      prompt: <p>Why do numerals cause trouble for the view that every word names an object?</p>,
      answer: {
        kind: "choice",
        options: [
          "Their meaning lies in the practice of counting, not in pointing at an object.",
          "Numerals are not words.",
          "Numbers are too large to point at.",
          "Numerals are always ambiguous.",
        ],
        correct: [0],
      },
    },
    {
      key: "family",
      rung: "apply",
      prompt: <p>What does the example of &ldquo;game&rdquo; show?</p>,
      answer: {
        kind: "choice",
        options: [
          "A word can be used correctly without any single feature shared by everything it applies to.",
          "Every word has a precise definition.",
          "Games are not real.",
          "Only competitive activities are games.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is meaning use? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the use theory with an example, such as “hello” or the builders.",
          "Considers an objection, such as the difficulty of explaining correctness or compositionality.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Try to define &ldquo;game&rdquo; with necessary and sufficient conditions. Does your attempt support or undermine Wittgenstein&rsquo;s claim?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Offers a definition, such as Bernard Suits’s voluntary attempt to overcome unnecessary obstacles.",
          "Tests it against examples, looking for things it wrongly includes or excludes.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Wittgenstein's view that meaning is use, language games and forms of life, his criticism of the picture that every word names an object, family resemblance, and one objection to use theories.",

  glimpse: (
    <p>
      The next chapter studies what we do with words, beginning with Austin&rsquo;s speech acts. Wittgenstein&rsquo;s remarks on
      following a rule, and the later Wittgenstein as a whole, come back in later lessons.
    </p>
  ),
};
