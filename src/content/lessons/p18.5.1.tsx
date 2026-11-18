import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FamilyResemblanceViz } from "@/components/viz/FamilyResemblanceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.5.1",
  minutes: 80,
  links: {
    revisits: ["p18.3.1", "p18.3.2", "p18.4.3"],
    foreshadows: ["p18.5.2", "p18.5.3", "p18.6.1"],
  },

  puzzle: (
    <>
      <p>
        Try to say what all games have in common. Winning and losing? Not patience played alone. Skill? Not snakes and
        ladders. Amusement? Not a gruelling professional match. If nothing is common to all games, how do we manage to use
        the word &ldquo;game&rdquo; so easily and agree about new cases?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Select games and look for the features they all share.</p>
      <FamilyResemblanceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="against the Tractatus">
        <p>
          Wittgenstein returned to Cambridge in 1929 and came to reject much of his earlier book. The{" "}
          <em>Philosophical Investigations</em>, published in 1953 after his death, opens with Augustine&rsquo;s picture of
          language: words name objects, and sentences combine names. Wittgenstein grants that this describes a simple language,
          such as that of builders who call &ldquo;slab&rdquo; or &ldquo;block&rdquo; and are brought the item, but denies
          that it describes language as a whole.
        </p>
      </Definition>

      <Definition title="meaning as use and language games">
        <p>
          &ldquo;For a large class of cases, though not for all, the meaning of a word is its use in the language&rdquo;
          (§43). Words are like tools in a toolbox, with very different jobs. A <strong>language game</strong> is a practice of
          speaking together with the activities it is woven into: giving orders, describing, reporting, guessing riddles,
          thanking, praying. There is no single essence of language, and no hidden logical form for analysis to uncover.
        </p>
      </Definition>

      <Example title="family resemblance">
        <p>
          The games share no single feature but &ldquo;a complicated network of similarities overlapping and
          criss-crossing&rdquo; (§66), like the build, features, eye colour and temperament of members of a family. Many of
          our concepts work this way, and need no sharp definition to be usable. We can draw a boundary for a special purpose,
          but the concept does not wait on one.
        </p>
      </Example>

      <Remark title="rules and philosophy">
        <p>
          The Investigations also asks what it is to follow a rule, and argues against the possibility of a language whose
          words refer to the speaker&rsquo;s private sensations, which only the speaker could understand. Philosophy, on this
          view, does not discover new facts; its problems arise &ldquo;when language goes on holiday&rdquo;, and it works by
          reminding us how words are actually used, as a kind of therapy.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "use",
      rung: "check",
      prompt: <p>What does Wittgenstein say about meaning in §43 of the Investigations?</p>,
      answer: {
        kind: "choice",
        options: [
          "For a large class of cases, the meaning of a word is its use in the language.",
          "The meaning of a word is the object it names.",
          "The meaning of a word is a mental image.",
          "Meaning is the method of verification.",
        ],
        correct: [0],
      },
    },
    {
      key: "fam",
      rung: "check",
      prompt: <p>What is a family resemblance concept?</p>,
      answer: {
        kind: "choice",
        options: [
          "One whose instances are linked by overlapping similarities, with no feature common to all.",
          "One defined by a list of necessary and sufficient conditions.",
          "A concept used only within families.",
          "A concept with no instances.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, select only football, tennis and ball against a wall. How many features do they all share?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "all",
      rung: "apply",
      prompt: <p>In the visualisation, select all eight games. How many features do they all share?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "builders",
      rung: "apply",
      prompt: <p>What is the point of the builders&rsquo; language of &ldquo;slab&rdquo;, &ldquo;block&rdquo;, &ldquo;pillar&rdquo; and &ldquo;beam&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "Augustine’s picture fits a simple language like this, but not language as a whole.",
          "All language consists of orders.",
          "Words get their meaning from private sensations.",
          "Building is the origin of language.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Bernard Suits defined playing a game as &ldquo;the voluntary attempt to overcome unnecessary obstacles&rdquo;. Does this refute Wittgenstein on games? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Wittgenstein’s claim that games share no common feature and the role of family resemblance.",
          "Tests Suits’s definition against examples, or considers whether Wittgenstein’s point survives even if it works.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>How does the later view of meaning as use differ from the picture theory of the Tractatus?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes the picture theory: names stand for objects and propositions picture possible states of affairs.",
          "Contrasts this with meaning as use, many language games, and no single hidden logical form.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Gilbert Ryle: the concept of mind, category mistakes, and the attack on the &ldquo;ghost in the machine&rdquo;.
    </p>
  ),
};
