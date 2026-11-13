import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["domination with interference", "domination without interference", "interference without domination", "neither"];
const ITEMS: SortItem[] = [
  {
    text: "A tyrant jails critics at will.",
    cat: "domination with interference",
    why: "Arbitrary power, actually used.",
  },
  {
    text: "A kindly master never punishes his slave, but could whenever he liked.",
    cat: "domination without interference",
    why: "The republican’s central case: the slave is unfree even if never interfered with, because they live at the master’s mercy.",
  },
  {
    text: "A fairly made, publicly contestable law requires you to pay tax.",
    cat: "interference without domination",
    why: "The law interferes, but its power is controlled by those it governs and checked by courts, so it is not arbitrary.",
  },
  {
    text: "A worker who can be sacked on the employer’s whim, with no recourse, though the employer is pleasant.",
    cat: "domination without interference",
    why: "Republicans such as Pettit argue that labour protections reduce domination even when no boss misbehaves.",
  },
  {
    text: "A wife under coverture laws, whose husband happens to be generous.",
    cat: "domination without interference",
    why: "Mary Wollstonecraft’s point: a good husband does not make the legal power he holds any less arbitrary.",
  },
  {
    text: "Two neighbours, equal before the law, who leave each other alone.",
    cat: "neither",
    why: "No one interferes and no one holds arbitrary power over the other.",
  },
];

export const lesson: LessonContent = {
  id: "p14.3.2",
  minutes: 80,
  links: {
    revisits: ["p14.3.1", "p14.1.3", "p14.1.1"],
    foreshadows: ["p14.3.3", "p14.4.1", "p14.5.2"],
  },

  puzzle: (
    <>
      <p>
        A slave whose master is kind, and never interferes, has plenty of negative liberty. Yet no one thinks they are free:
        they must still flatter, watch the master&rsquo;s moods, and hope. What exactly do they lack?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each case by whether it involves domination, interference, both or neither.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Domination, interference, both or neither?" />
    </>
  ),

  theory: (
    <>
      <Definition title="freedom as non-domination">
        <p>
          You are <strong>dominated</strong> when someone has the capacity to interfere in your choices on an arbitrary
          basis: at will, without being forced to track your interests and opinions. Freedom, on the republican view, is the
          absence of domination: not living at the mercy of another.
        </p>
      </Definition>

      <Example title="two ways the concepts come apart">
        <p>
          Domination without interference: the kindly master. Interference without domination: a law made through fair
          procedures, open to contestation, that constrains you. Philip Pettit argues negative liberty gets both cases wrong,
          counting the slave as free and every law as a loss of freedom.
        </p>
      </Example>

      <Remark title="history and institutions">
        <p>
          Quentin Skinner traced this neo-Roman idea of liberty from Roman law through Machiavelli to the English
          commonwealthmen and the American revolutionaries, who objected to being subject to a Parliament that could tax them
          at will even when it did not. Republicans favour the rule of law, dispersal of power, and contestatory democracy, in
          which citizens can challenge decisions. Pettit proposes the eyeball test: citizens should be able to look one
          another in the eye without reason for fear or deference.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Some argue that non-domination is just a sophisticated negative liberty that counts the probability of future
          interference. Others ask which power counts as arbitrary, and whether the ideal demands too much, for instance
          reshaping workplaces and families.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is domination, on Pettit&rsquo;s account?</p>,
      answer: {
        kind: "choice",
        options: [
          "Any interference.",
          "The capacity to interfere in someone's choices on an arbitrary basis.",
          "Physical force.",
          "Winning an election.",
        ],
        correct: [1],
      },
    },
    {
      key: "slave",
      rung: "check",
      prompt: <p>Why is the slave of a kindly master unfree on the republican view?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the master interferes constantly.",
          "Because the slave lives at the master's mercy, even if never interfered with.",
          "Because the slave is poor.",
          "They are free on this view.",
        ],
        correct: [1],
      },
    },
    {
      key: "law",
      rung: "apply",
      prompt: <p>How can a law interfere without dominating?</p>,
      answer: {
        kind: "choice",
        options: [
          "If it is made and applied through procedures that force it to track citizens' interests and are open to challenge.",
          "If it is very old.",
          "If it is rarely enforced.",
          "It cannot.",
        ],
        correct: [0],
      },
    },
    {
      key: "eye",
      rung: "apply",
      prompt: <p>What is Pettit&rsquo;s eyeball test?</p>,
      answer: {
        kind: "choice",
        options: [
          "Citizens can look one another in the eye without reason for fear or deference.",
          "Judges must see defendants in person.",
          "Voters must read the laws.",
          "An eye test for officials.",
        ],
        correct: [0],
      },
    },
    {
      key: "history",
      rung: "apply",
      prompt: <p>Which historian traced the neo-Roman tradition of liberty?</p>,
      answer: { kind: "choice", options: ["Quentin Skinner", "Isaiah Berlin", "John Rawls", "Robert Nozick"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is someone unfree merely because another person could interfere with them at will? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the republican view with an example such as the kindly master.",
          "Considers the negative liberty reply, perhaps that only probable interference matters.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "work",
      rung: "stretch",
      prompt: <p>Does the republican ideal require changing how workplaces are run? Consider an employer who can dismiss workers at will.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the idea of arbitrary power to employment.",
          "Considers remedies such as labour protections or exit options, and an objection.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend freedom as non-domination, why the kindly master's slave is unfree, how a law can interfere without dominating, and the history and institutions republicans favour.",

  glimpse: (
    <p>
      The next lesson presents communitarian critiques of liberal individualism. Debates on democracy and feminist political
      philosophy take up the republican concern with power.
    </p>
  ),
};
