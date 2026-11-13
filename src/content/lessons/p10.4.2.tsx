import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "I do not know that I am not a handless brain in a vat.",
    kind: "premise",
    note: "Everything would seem the same if I were, so nothing in my experience rules it out.",
    objection: "Moore: I know I have hands, and so I know by simple inference that I am not a handless brain in a vat.",
  },
  {
    claim: "If I know that p, and I competently deduce q from p, then I know that q.",
    kind: "premise",
    note: "The closure principle: knowledge is extended by deduction. Without it, how could proofs give knowledge?",
    objection: "Dretske and Nozick: knowledge is not closed. I can know I have hands without knowing every sceptical alternative is false.",
  },
  {
    claim: "That I have hands entails that I am not a handless brain in a vat, and I can see that it does.",
    kind: "premise",
    note: "This is just logic: no handless being has hands.",
  },
  {
    claim: "So if I knew that I have hands, I would know that I am not a handless brain in a vat.",
    kind: "inference",
    note: "From closure and the entailment.",
  },
  {
    claim: "So I do not know that I have hands.",
    kind: "conclusion",
    note: "By modus tollens from the previous step and the first premise. The same argument works for nearly any belief about the world.",
    objection: "Moore turns it round: I know I have hands, so by the same steps I know I am not a brain in a vat. One philosopher's modus tollens is another's modus ponens.",
  },
];

export const lesson: LessonContent = {
  id: "p10.4.2",
  minutes: 80,
  links: {
    revisits: ["p10.4.1", "p10.1.3", "p10.3.1"],
    foreshadows: ["p10.4.3", "p10.4.4", "p10.6.1"],
  },

  puzzle: (
    <>
      <p>
        At the zoo you see a striped horse-like animal in the pen marked &ldquo;zebras&rdquo;. Surely you know it is a zebra.
        It follows that it is not a mule cleverly painted to look like one. But do you know that? You have not checked for
        paint. Something has to give: your knowledge, your logic, or the link between them.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the sceptic&rsquo;s argument from closure, challenging steps to see where philosophers resist.</p>
      <ArgumentStepViz steps={STEPS} title="The closure argument for scepticism" />
    </>
  ),

  theory: (
    <>
      <Definition title="the closure principle">
        <p>
          If a person knows that p, and competently deduces q from p while keeping their knowledge of p, then they know that
          q. Closure seems obviously right: it explains how reasoning extends what we know.
        </p>
      </Definition>

      <Example title="the sceptic's use of it">
        <p>
          Let O be an ordinary belief and SH a sceptical hypothesis incompatible with it. If I know O then, by closure, I can
          know not-SH. But I cannot know not-SH. So I do not know O. Every ordinary belief has some such SH, so scepticism
          spreads to all of them.
        </p>
      </Example>

      <Remark title="denying closure">
        <p>
          Fred Dretske (1970) used the zebra case to argue that knowing p does not require knowing everything p entails.
          Robert Nozick (1981) explained why: knowledge requires <strong>sensitivity</strong>, that if p were false you would
          not believe it. If the animal were not a zebra, it would most likely be another animal and you would notice, so your
          belief is sensitive. But if it were a painted mule you would still believe it was not one, so that belief is not
          sensitive. On this view you know it is a zebra without knowing it is not a painted mule.
        </p>
      </Remark>

      <Remark title="the cost">
        <p>
          Keith DeRose called the result an abominable conjunction: &ldquo;I know I have hands, but I do not know I am not a
          handless brain in a vat.&rdquo; Many find denying closure worse than the disease. Safety theorists, who ask instead
          whether a belief could easily have been false, keep closure and say that we do know we are not brains in vats,
          since that could not easily be false.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does the closure principle say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Knowledge must be closed to doubt.",
          "If you know p and competently deduce q from it, you know q.",
          "Nobody knows anything for sure.",
          "Knowledge is closed under testimony.",
        ],
        correct: [1],
      },
    },
    {
      key: "form",
      rung: "check",
      prompt: <p>The sceptic reasons: if I know O then I know not-SH; I do not know not-SH; so I do not know O. Which rule of inference is this?</p>,
      answer: { kind: "choice", options: ["Modus ponens", "Modus tollens", "Disjunctive syllogism", "Induction"], correct: [1] },
    },
    {
      key: "moore",
      rung: "apply",
      prompt: <p>How does Moore respond to the same premises?</p>,
      answer: {
        kind: "choice",
        options: [
          "He accepts that he does not know he has hands.",
          "He argues from knowing he has hands, by closure, to knowing he is not a brain in a vat.",
          "He denies that logic applies to knowledge.",
          "He says brains in vats have hands.",
        ],
        correct: [1],
      },
    },
    {
      key: "sens",
      rung: "apply",
      prompt: <p>Why is the belief &ldquo;this is not a painted mule&rdquo; insensitive, in Nozick&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is false.",
          "Because if it were a painted mule, you would still believe it was not one.",
          "Because mules cannot be painted.",
          "Because you inferred it.",
        ],
        correct: [1],
      },
    },
    {
      key: "abom",
      rung: "apply",
      prompt: <p>Which statement is the &ldquo;abominable conjunction&rdquo; that denying closure seems to allow?</p>,
      answer: {
        kind: "choice",
        options: [
          "I know I have hands, and I know I am not a brain in a vat.",
          "I know I have hands, but I do not know I am not a handless brain in a vat.",
          "I do not know I have hands, and I do not know I am not a brain in a vat.",
          "I am a brain in a vat with hands.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Should we give up closure to answer the sceptic? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the closure argument for scepticism.",
          "Weighs the cost of denying closure, such as abominable conjunctions, against an alternative such as Moore's reply.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "lottery",
      rung: "stretch",
      prompt: <p>You know you cannot afford a holiday this year. It follows that you will not win the lottery you entered. Do you know that? What does this case suggest about closure?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the tension between knowing the ordinary claim and not knowing you will lose the lottery.",
          "Connects it to closure, sensitivity or safety.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the closure principle, how the sceptic uses it with modus tollens, Moore's reversal, Dretske's zebra and Nozick's sensitivity condition for denying closure, and the abominable conjunction.",

  glimpse: (
    <p>
      The next lesson offers contextualism, which keeps closure by letting the standards for &ldquo;know&rdquo; shift with the
      conversation. After it comes Moore&rsquo;s defence of common sense in full.
    </p>
  ),
};
