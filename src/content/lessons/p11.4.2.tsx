import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PreemptionViz } from "@/components/viz/PreemptionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.4.2",
  minutes: 80,
  links: {
    revisits: ["p11.4.1", "p11.3.1", "p11.3.2"],
    foreshadows: ["p11.4.3", "p27.4.1", "p27.4.2"],
  },

  puzzle: (
    <>
      <p>
        Hume himself offered a second definition: a cause is an object such that, if it had not been, the effect would never
        have existed. If the match had not been struck, the fire would not have started. Can causation be analysed as this
        kind of difference-making?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Two people throw rocks at a bottle. Turn each throw on and off, and compare what the simple counterfactual test says
        with what seems true.
      </p>
      <PreemptionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="counterfactual dependence">
        <p>
          For Lewis, event e <strong>depends causally</strong> on a distinct event c if, had c not occurred, e would not have
          occurred. The counterfactual is true when, in the closest possible worlds where c does not occur, e does not occur
          either.
        </p>
      </Definition>

      <Definition title="Lewis's analysis (1973)">
        <p>
          c causes e if there is a chain of events c, d₁, …, dₙ, e, each depending causally on the one before. Causation is
          the ancestral of dependence, which makes it transitive.
        </p>
      </Definition>

      <Example title="early preemption">
        <p>
          Suzy and Billy both throw, and Suzy&rsquo;s rock arrives first. Had Suzy not thrown, Billy&rsquo;s rock would have
          broken the bottle, so the breaking does not depend on her throw. But there is a chain: the breaking depends on
          Suzy&rsquo;s rock being in flight at the last moment, which depends on her throw. Chains handle some preemption;
          cases of late preemption, where Billy&rsquo;s process is cut off only by the effect itself, remain hard.
        </p>
      </Example>

      <Remark title="further problems">
        <p>
          <strong>Overdetermination</strong>: two bullets hit at once and each is sufficient. Neither makes a difference, yet
          both seem causes. <strong>Transitivity</strong>: a bomb is planted, a hiker ducks, the hiker survives; ducking
          depends on the bomb, survival on the ducking, but did the bomb cause the survival?{" "}
          <strong>Omissions</strong>: the plant dies because the gardener did not water it, but then it equally depends on
          the Prime Minister not watering it. Lewis later revised the theory in terms of influence, and interventionists such
          as Woodward recast dependence in terms of causal models.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When does e depend causally on c, for Lewis?</p>,
      answer: { kind: "choice", options: ["When c regularly precedes e", "When, had c not occurred, e would not have occurred", "When c is a part of e", "When c and e are simultaneous"], correct: [1] },
    },
    {
      key: "chain",
      rung: "check",
      prompt: <p>Why did Lewis define causation using chains of dependence?</p>,
      answer: {
        kind: "choice",
        options: [
          "To make causation transitive and to handle some cases of preemption",
          "To avoid possible worlds",
          "To make causation symmetric",
          "To include omissions",
        ],
        correct: [0],
      },
    },
    {
      key: "preempt",
      rung: "apply",
      prompt: <p>Suzy&rsquo;s rock breaks the bottle; Billy&rsquo;s was a moment behind. What does the simple counterfactual test say about Suzy&rsquo;s throw?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is a cause, since the bottle broke",
          "It is not a cause, since the bottle would have broken anyway",
          "Both throws are causes",
          "Neither throw is relevant",
        ],
        correct: [1],
      },
    },
    {
      key: "over",
      rung: "apply",
      prompt: <p>Two bullets strike a target at the same instant, each sufficient alone. What is this called?</p>,
      answer: { kind: "choice", options: ["Preemption", "Overdetermination", "Omission", "Transitivity"], correct: [1] },
    },
    {
      key: "omit",
      rung: "apply",
      prompt: <p>Why do omissions trouble the counterfactual theory?</p>,
      answer: {
        kind: "choice",
        options: [
          "Omissions are not events.",
          "The plant’s death depends on countless people not watering it, not just the gardener.",
          "Plants do not die.",
          "Counterfactuals about omissions are always false.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is difference-making the heart of causation, or is preemption a decisive objection? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the counterfactual analysis.",
          "Explains preemption and a possible reply such as chains or influence.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "trans",
      rung: "stretch",
      prompt: <p>The bomb made the hiker duck, and ducking saved the hiker. Did the bomb cause the hiker&rsquo;s survival? What does your answer say about transitivity?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets out the chain of dependence.",
          "Considers whether causation is really transitive.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Lewis's counterfactual analysis of causation, how chains of dependence handle early preemption, and the problems of overdetermination, transitivity and omissions.",

  glimpse: (
    <p>
      The next lesson considers process theories, which look for a physical connection instead. Graduate metaphysics returns
      to Humean supervenience and to powers and dispositions.
    </p>
  ),
};
