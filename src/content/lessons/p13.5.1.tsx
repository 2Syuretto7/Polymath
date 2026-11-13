import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Smith will gain an inheritance if his young cousin dies. He drowns the child in the bath.",
    kind: "premise",
    note: "James Rachels’s first case: killing.",
  },
  {
    claim: "Jones will gain the same inheritance. He creeps in to drown the child, sees the child slip and fall face down in the water, and stands ready to push the head back under, but need not.",
    kind: "premise",
    note: "The second case: letting die. The motive, the outcome and the readiness to kill are the same.",
  },
  {
    claim: "Jones behaved no better than Smith.",
    kind: "premise",
    note: "Almost everyone agrees. It would be grotesque for Jones to plead that he only let the child die.",
    objection: "Both are vile, but for a reason the cases share: their murderous intent. An equal verdict in one pair does not show the distinction never matters, just as two sums can be equal although their terms differ.",
  },
  {
    claim: "The cases differ only in killing versus letting die.",
    kind: "inference",
    note: "Rachels built them to hold everything else fixed.",
  },
  {
    claim: "So the difference between killing and letting die is not in itself morally significant.",
    kind: "conclusion",
    note: "Rachels used this to criticise a medical position that allows withholding treatment but forbids active euthanasia.",
    objection: "Shelly Kagan calls the inference from one pair the additive assumption. Frances Kamm replies that contrasting factors can be masked in some cases and still matter in others, as when we may not kill one to save five but may let one die to save five.",
  },
];

export const lesson: LessonContent = {
  id: "p13.5.1",
  minutes: 80,
  links: {
    revisits: ["p13.1.1", "p5.2.2", "p13.4.3"],
    foreshadows: ["p13.5.2", "p13.5.3", "p13.5.4"],
  },

  puzzle: (
    <>
      <p>
        It seems far worse to poison someone than to fail to donate the money that would have saved a stranger&rsquo;s life.
        Yet the stranger is just as dead. Is there a deep moral difference between doing harm and allowing it, or is it a
        convenient excuse for doing too little?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through James Rachels&rsquo;s famous pair of cases, and challenge the steps you doubt.</p>
      <ArgumentStepViz title="Smith and Jones" steps={STEPS} />
    </>
  ),

  theory: (
    <>
      <Definition title="the doctrine of doing and allowing">
        <p>
          Harm that an agent does is harder to justify than harm the agent merely allows. Doing harm requires a strong
          justification; failing to prevent a similar harm may be permissible for weaker reasons, such as a significant cost to
          oneself.
        </p>
      </Definition>

      <Example title="drawing the line">
        <p>
          Philippa Foot and Warren Quinn located the difference in the agent&rsquo;s relation to the sequence that leads to
          harm. In doing, the agent starts or sustains a harmful sequence; in allowing, the agent fails to stop one already
          under way, or removes a barrier they themselves supplied. Hard cases include turning off a life-support machine one
          has set up, which looks like allowing, and the same act by a stranger, which looks like killing.
        </p>
      </Example>

      <Remark title="why it might matter">
        <p>
          Defenders appeal to the separateness of persons: if allowing were as bad as doing, our lives would be swallowed by
          the demands of preventing harm everywhere. Consequentialists, who judge acts by outcomes alone, deny that the
          distinction matters in itself, though they may value it as a useful rule.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does the doctrine of doing and allowing hold?</p>,
      answer: {
        kind: "choice",
        options: [
          "Doing harm is harder to justify than merely allowing a similar harm.",
          "Allowing harm is always worse than doing it.",
          "Only outcomes matter.",
          "Harm is never permissible.",
        ],
        correct: [0],
      },
    },
    {
      key: "who",
      rung: "check",
      prompt: <p>Who devised the Smith and Jones cases?</p>,
      answer: { kind: "choice", options: ["James Rachels", "Philippa Foot", "Derek Parfit", "Bernard Williams"], correct: [0] },
    },
    {
      key: "method",
      rung: "apply",
      prompt: <p>Why did Rachels keep motive and outcome the same in both cases?</p>,
      answer: {
        kind: "choice",
        options: [
          "To make the story more vivid.",
          "So that any moral difference could come only from the difference between killing and letting die.",
          "Because he thought motive never matters.",
          "To show that both men are innocent.",
        ],
        correct: [1],
      },
    },
    {
      key: "additive",
      rung: "apply",
      prompt: <p>What is the main reply to Rachels&rsquo;s argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "That Jones did nothing wrong.",
          "That a difference which makes no difference in one pair of cases may still matter in others, so one pair cannot show it never matters.",
          "That killing is always permitted.",
          "That the cases are impossible.",
        ],
        correct: [1],
      },
    },
    {
      key: "machine",
      rung: "apply",
      prompt: <p>A doctor switches off a life-support machine they set up, at the patient&rsquo;s request. On Foot&rsquo;s and Quinn&rsquo;s account, is this more like doing or allowing?</p>,
      answer: {
        kind: "choice",
        options: [
          "Doing, because they moved their hand.",
          "Allowing, because they withdraw a barrier they themselves supplied against a sequence already under way.",
          "Neither.",
          "Doing, because the patient dies.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the Smith and Jones pair show that killing is no worse than letting die? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Rachels’s argument and its method of holding other factors fixed.",
          "Considers the reply that one equal pair does not show the factor never matters.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If doing and allowing were morally equal, what would follow about how much we owe to distant strangers in need?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that failing to help would be as bad as harming.",
          "Considers whether this is a reductio or a demanding truth.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the doctrine of doing and allowing, Rachels's Smith and Jones argument against it, and the reply that a factor can matter in some cases without mattering in all.",

  glimpse: (
    <p>
      The next lesson considers a related distinction, between harm intended and harm merely foreseen. Trolley problems
      then test both, and the last lesson asks how much morality may demand of us.
    </p>
  ),
};
