import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Smith and Jones have applied for the same job.",
    kind: "premise",
    note: "Gettier's first case, from Is Justified True Belief Knowledge? (1963).",
  },
  {
    claim: "Smith has strong evidence that Jones will get the job, and that Jones has ten coins in his pocket.",
    kind: "premise",
    note: "The company president told Smith that Jones would be selected, and Smith counted the coins in Jones's pocket ten minutes ago.",
  },
  {
    claim: "Smith infers, and believes: the man who will get the job has ten coins in his pocket.",
    kind: "inference",
    note: "A valid inference from a justified belief. Gettier assumes that justification carries over through clearly valid deduction.",
    objection: "Does justification really transfer through deduction from a false belief? This is where the no-false-lemmas response will press.",
  },
  {
    claim: "Unknown to Smith, he himself will get the job, and he himself happens to have ten coins in his pocket.",
    kind: "premise",
    note: "So the belief that the man who will get the job has ten coins is true, though not because of Jones.",
  },
  {
    claim: "So Smith has a justified true belief that the man who will get the job has ten coins.",
    kind: "inference",
    note: "True, believed and justified: all three conditions hold.",
  },
  {
    claim: "But Smith does not know it. So justified true belief is not sufficient for knowledge.",
    kind: "conclusion",
    note: "What makes the belief true is quite disconnected from what makes it justified. Its truth is a matter of luck.",
    objection: "A few philosophers, and some experimental studies of ordinary people, question the intuition that Smith lacks knowledge, but it is very widely shared.",
  },
];

export const lesson: LessonContent = {
  id: "p10.1.2",
  minutes: 75,
  links: {
    revisits: ["p10.1.1", "p1.1.2", "p0.4.2"],
    foreshadows: ["p10.1.3", "p10.3.1", "p28.1.1"],
  },

  puzzle: (
    <>
      <p>
        In 1963 Edmund Gettier, a young philosopher who needed a publication for tenure, wrote a paper of under three pages.
        It is among the most famous papers in philosophy, and it is said he never published another. It shows that someone can
        have a justified true belief and still not know. How?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Gettier&rsquo;s first case, and challenge the steps where responses would later push back.</p>
      <ArgumentStepViz steps={STEPS} title="Gettier's ten coins" />
    </>
  ),

  theory: (
    <>
      <Definition title="a Gettier case">
        <p>
          A case in which a subject has a justified true belief, but the belief is true only by luck, in a way disconnected
          from the justification. The recipe: start with a justified belief that could be false; make it false, or make the
          route to the conclusion go astray; then add a coincidence that makes the conclusion true anyway.
        </p>
      </Definition>

      <Example title="Gettier's second case">
        <p>
          Smith has good evidence that Jones owns a Ford. He infers the disjunction: either Jones owns a Ford or Brown is in
          Barcelona, though he has no idea where Brown is. Jones does not own a Ford, but by chance Brown is in Barcelona. The
          disjunction is justified and true, but Smith does not know it.
        </p>
      </Example>

      <Example title="the stopped clock and the sheep">
        <p>
          Bertrand Russell had described a man who looks at a stopped clock that happens to show the right time; he is
          justified, and right, but does not know the time. Roderick Chisholm described someone who sees a dog disguised as a
          sheep and believes there is a sheep in the field, which is true because a real sheep is hidden behind a rock.
        </p>
      </Example>

      <Remark title="earlier versions">
        <p>
          Similar cases appear much earlier: the eighth-century Indian philosopher Dharmottara described a traveller who sees a
          mirage of water, infers there is water, and finds water under a rock there. Gettier&rsquo;s contribution was to aim
          such cases directly at the standard analysis. The paper set off decades of attempts to add a fourth condition, the
          subject of the next lesson.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "shows",
      rung: "check",
      prompt: <p>What do Gettier&rsquo;s cases show about the analysis of knowledge as justified true belief?</p>,
      answer: {
        kind: "choice",
        options: [
          "That justification is not necessary.",
          "That the three conditions together are not sufficient.",
          "That truth is not necessary.",
          "That knowledge is impossible.",
        ],
        correct: [1],
      },
    },
    {
      key: "luck",
      rung: "check",
      prompt: <p>What feature do Gettier cases share?</p>,
      answer: {
        kind: "choice",
        options: [
          "The belief is false.",
          "The belief is true only by luck, disconnected from the justification.",
          "The subject has no evidence.",
          "The subject does not believe the proposition.",
        ],
        correct: [1],
      },
    },
    {
      key: "clock",
      rung: "apply",
      prompt: <p>Why is Russell&rsquo;s stopped clock a Gettier-style case?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the belief is false.",
          "Because the belief is justified and true, but true only because the clock happened to stop at the right time.",
          "Because the man does not believe the time.",
          "Because clocks are unreliable in general.",
        ],
        correct: [1],
      },
    },
    {
      key: "build",
      rung: "apply",
      prompt: <p>Which scenario is a Gettier case?</p>,
      answer: {
        kind: "choice",
        options: [
          "Priya reads a reliable thermometer showing 30 degrees, and it is 30 degrees.",
          "Priya guesses it is 30 degrees, and it is.",
          "Priya reads a broken thermometer stuck at 30 degrees, and by chance it is 30 degrees.",
          "Priya reads a reliable thermometer showing 30 degrees, but it is 25.",
        ],
        correct: [2],
      },
    },
    {
      key: "barcelona",
      rung: "apply",
      prompt: <p>In the Barcelona case, what makes Smith&rsquo;s belief true?</p>,
      answer: {
        kind: "choice",
        options: [
          "That Jones owns a Ford.",
          "That Brown happens to be in Barcelona.",
          "Smith's evidence about Jones.",
          "Nothing; the belief is false.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Smith in the ten coins case really lack knowledge? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States why Smith seems to lack knowledge, such as the role of luck.",
          "Considers a reason to doubt the intuition, or to resist it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "own",
      rung: "stretch",
      prompt: <p>Invent your own Gettier case, and explain why it works.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes a justified belief with a defect, such as false evidence or a faulty instrument.",
          "Adds a coincidence that makes the belief true.",
          "Explains why the belief is justified and true but not knowledge. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Gettier's two cases, why they count as justified true belief without knowledge, the general recipe for such cases, and the earlier examples from Russell and Dharmottara.",

  glimpse: (
    <p>
      The next lesson surveys attempts to repair the analysis. Reliabilist epistemology and the view that knowledge is a
      basic mental state both grew out of the failure of those attempts.
    </p>
  ),
};
