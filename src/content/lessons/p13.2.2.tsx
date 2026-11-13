import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["hedonism", "actual desire satisfaction", "informed desire satisfaction"];
const CASES = ["the experience machine", "the stranger on the train", "the grass counter", "the deceived businessman"];
const V: CaseVerdict[][] = [
  [
    { ok: false, why: "Plugging in is best for you if the machine gives more pleasure, which most people deny." },
    { ok: true, why: "You never learn whether the stranger recovered, so your life is unaffected. This seems right." },
    { ok: true, why: "If counting grass gives the person pleasure, their life goes well to that extent; the view is at least consistent." },
    { ok: false, why: "A businessman whose family and colleagues secretly despise him, but who never finds out, is said to be as well off as one who is truly loved. That seems wrong." },
  ],
  [
    { ok: true, why: "You want real achievements and real friends, so the machine frustrates your desires and is worse for you." },
    { ok: false, why: "Derek Parfit: you meet a stranger, hope they recover, and never see them again. On this view their recovery makes your life go better, which seems absurd." },
    { ok: false, why: "John Rawls imagined someone whose only desire is to count blades of grass. If satisfying it makes their life go well, the theory may be too permissive." },
    { ok: true, why: "He wants to be loved and respected, and he is not, so his desires are frustrated even though he never knows." },
  ],
  [
    { ok: true, why: "Fully informed, you would still want contact with reality, so the machine is worse for you." },
    { ok: false, why: "Even fully informed, you might still want the stranger to recover, so the problem remains. Some restrict the view to desires about one’s own life." },
    { ok: true, why: "With full information and reflection the person might not desire grass counting, so the view need not endorse that life. Critics doubt this always works." },
    { ok: true, why: "His informed desires are frustrated, so his life goes worse than it seems." },
  ],
];

export const lesson: LessonContent = {
  id: "p13.2.2",
  minutes: 75,
  links: {
    revisits: ["p13.2.1", "p5.2.1", "p12.6.1"],
    foreshadows: ["p13.2.3", "p33.2.1", "p26.4.4"],
  },

  puzzle: (
    <>
      <p>
        Economists usually measure how well off people are by how far they get what they prefer. It respects each person&rsquo;s
        own view of their life. But do you benefit when a stranger you met once, and will never see again, recovers from an
        illness you hoped they would survive?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test hedonism and two desire theories against four cases.</p>
      <CaseMatrixViz
        theories={THEORIES}
        cases={CASES}
        verdicts={V}
        prompt="Does the theory give a plausible verdict about wellbeing?"
        caption="Each verdict is contested. Ask whether you agree, and which cases matter most to you."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="desire satisfaction theories">
        <p>
          A life goes well for someone to the extent that their desires are satisfied: what they want actually happens. This
          differs from hedonism, because satisfaction is a state of the world, not a feeling. You can have your desire
          satisfied without knowing it, and feel satisfied when your desire is not.
        </p>
      </Definition>

      <Example title="informed desires">
        <p>
          Actual desires can be ill-informed: a thirsty traveller wants to drink from a glass of what is in fact petrol.
          Informed desire theories, developed by Richard Brandt and Peter Railton, count what you would want if fully informed
          and thinking clearly, or what a fully informed version of you would want you to want.
        </p>
      </Example>

      <Remark title="problems">
        <p>
          <strong>Scope:</strong> desires about distant strangers, or about events after one&rsquo;s death, seem not to affect
          one&rsquo;s wellbeing; Parfit proposed limiting the theory to desires about one&rsquo;s own life.{" "}
          <strong>Adaptive preferences:</strong> people in deprivation may lower their desires to what they can get, so
          satisfying them may hide real harm, a point stressed by Amartya Sen. <strong>Odd desires:</strong> the grass counter
          suggests that what someone wants may not be good for them.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>According to desire satisfaction theories, what makes a life go well?</p>,
      answer: {
        kind: "choice",
        options: ["Getting what one desires", "Feeling pleasure", "Having knowledge", "Obeying rules"],
        correct: [0],
      },
    },
    {
      key: "diff",
      rung: "check",
      prompt: <p>How does desire satisfaction differ from feeling satisfied?</p>,
      answer: {
        kind: "choice",
        options: [
          "A desire is satisfied when what you want actually happens, whether or not you know it.",
          "There is no difference.",
          "Satisfaction requires pleasure.",
          "Desires cannot be satisfied.",
        ],
        correct: [0],
      },
    },
    {
      key: "stranger",
      rung: "apply",
      prompt: <p>What problem does Parfit&rsquo;s stranger on the train raise?</p>,
      answer: {
        kind: "choice",
        options: [
          "Desires about matters remote from one’s own life seem not to affect one’s wellbeing.",
          "Strangers have no desires.",
          "Trains are unpleasant.",
          "Recovery is impossible to know.",
        ],
        correct: [0],
      },
    },
    {
      key: "informed",
      rung: "apply",
      prompt: <p>Why move from actual to informed desires?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because actual desires may rest on false beliefs, like wanting to drink petrol thought to be water.",
          "Because informed desires are easier to measure.",
          "Because actual desires do not exist.",
          "Because information is pleasant.",
        ],
        correct: [0],
      },
    },
    {
      key: "adaptive",
      rung: "apply",
      prompt: <p>What are adaptive preferences?</p>,
      answer: {
        kind: "choice",
        options: [
          "Desires lowered to fit limited options, which can mask deprivation.",
          "Preferences that change with the weather.",
          "Desires for adaptation.",
          "Rational preferences.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the deceived businessman worse off than he believes? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes the case.",
          "Compares the hedonist and desire theory verdicts.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can what happens after your death make your life go better or worse? Use a desire theory to answer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that desires about posthumous events can be satisfied or frustrated.",
          "Considers whether this is a strength or a problem for the theory.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the desire satisfaction theory of wellbeing, the move to informed desires, and the problems of the stranger on the train, the grass counter and adaptive preferences.",

  glimpse: (
    <p>
      The next lesson considers objective list theories, which say some things are good for you whether or not you want
      them. Sen&rsquo;s worry about adaptive preferences leads to the capabilities approach.
    </p>
  ),
};
