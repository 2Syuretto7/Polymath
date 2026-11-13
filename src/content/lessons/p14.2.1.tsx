import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { VeilViz } from "@/components/viz/VeilViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p14.2.1",
  minutes: 80,
  links: {
    revisits: ["p14.1.3", "p5.3.4", "p13.1.3"],
    foreshadows: ["p14.2.2", "p14.2.4", "p26.4.1"],
  },

  puzzle: (
    <>
      <p>
        When two children must share a cake, a good rule is that one cuts and the other chooses. The cutter, not knowing which
        piece they will get, has every reason to cut fairly. Could the principles of justice for a whole society be chosen the
        same way, by people who do not know where in that society they will end up?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a society from behind the veil, under different decision rules. Then lift the veil and see where you land.</p>
      <VeilViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the original position">
        <p>
          John Rawls, in <em>A Theory of Justice</em> (1971), imagined representatives choosing principles for the basic
          structure of their society. They are rational and mutually disinterested, and they choose behind a veil of ignorance:
          they do not know their class, talents, sex, race, religion or conception of the good. The principles they would
          choose are the principles of justice.
        </p>
      </Definition>

      <Example title="why the veil">
        <p>
          The veil models fairness. Facts about yourself that are arbitrary from a moral point of view, such as being born rich
          or talented, should not shape the principles. Because no one can tailor the principles to their own advantage, the
          agreement is fair, and so is its outcome: justice as fairness.
        </p>
      </Example>

      <Definition title="the two principles">
        <p>
          Rawls argued that the parties would choose: first, that each person has an equal right to the most extensive scheme
          of basic liberties compatible with a similar scheme for all; second, that social and economic inequalities must be
          attached to positions open to all under fair equality of opportunity, and must be to the greatest benefit of the
          least advantaged. The first principle has priority.
        </p>
      </Definition>

      <Remark title="maximin and its critics">
        <p>
          Rawls argued that in so grave and uncertain a choice the parties would use maximin, securing the best worst case.
          John Harsanyi replied that rational people facing equal chances of every position would maximise expected
          utility, which leads to average utilitarianism. Rawls answered that the parties lack any basis for probabilities and
          cannot gamble with the basic liberties of the people they represent.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "veil",
      rung: "check",
      prompt: <p>Which of these is hidden from the parties behind the veil of ignorance?</p>,
      answer: {
        kind: "choice",
        options: [
          "Their own social class and talents.",
          "General facts about economics.",
          "That they are choosing principles of justice.",
          "That societies have scarce resources.",
        ],
        correct: [0],
      },
    },
    {
      key: "book",
      rung: "check",
      prompt: <p>In which book did Rawls present the original position?</p>,
      answer: { kind: "choice", options: ["A Theory of Justice", "Anarchy, State, and Utopia", "Leviathan", "The Social Contract"], correct: [0] },
    },
    {
      key: "maximin",
      rung: "apply",
      prompt: <p>In the visualisation, which society does maximin choose?</p>,
      answer: { kind: "choice", options: ["A", "B", "C", "D"], correct: [2] },
    },
    {
      key: "harsanyi",
      rung: "apply",
      prompt: <p>What did Harsanyi argue the parties would choose?</p>,
      answer: {
        kind: "choice",
        options: [
          "To maximise expected utility, leading to average utilitarianism.",
          "To maximise the worst-off position.",
          "Strict equality of income.",
          "Whatever the king prefers.",
        ],
        correct: [0],
      },
    },
    {
      key: "why",
      rung: "apply",
      prompt: <p>Why does Rawls hide people&rsquo;s talents and social position?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because these are morally arbitrary and should not shape the principles of justice.",
          "Because talents do not exist.",
          "Because the parties are forgetful.",
          "Because society has no classes.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Would rational people behind the veil choose maximin? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Rawls’s case for maximin, such as the gravity of the choice and the lack of probabilities.",
          "Considers Harsanyi’s expected utility reply.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should the parties behind the veil know which generation they belong to? What difference would it make to saving for the future or to climate policy?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that knowing one’s generation would let the parties favour it.",
          "Considers what principle of saving might be chosen if they do not know.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Rawls's original position and veil of ignorance, why the veil models fairness, the two principles of justice, and the dispute between maximin and expected utility.",

  glimpse: (
    <p>
      The next lesson examines the difference principle in detail. Luck egalitarians develop the idea that morally arbitrary
      facts should not shape our shares, and decision theory studies expected utility in its own right.
    </p>
  ),
};
