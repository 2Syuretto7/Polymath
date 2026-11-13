import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GeneralityViz } from "@/components/viz/GeneralityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p10.3.1",
  minutes: 80,
  links: {
    revisits: ["p10.1.3", "p10.2.2", "p10.1.1"],
    foreshadows: ["p10.3.3", "p10.6.1", "p10.3.2"],
  },

  puzzle: (
    <>
      <p>
        Expert chicken sexers can sort day-old chicks into male and female with great accuracy, yet many cannot say what cues
        they are using. Are their verdicts justified? They have no reasons to offer. But their method works.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a case and a reliability threshold. Then look at how many different ways the same belief-forming event can be
        described.
      </p>
      <GeneralityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="process reliabilism">
        <p>
          Alvin Goldman (1979): a belief is justified if and only if it is produced by a <strong>reliable</strong>{" "}
          belief-forming process, one that tends to produce true beliefs, such as normal perception, memory and good
          reasoning. Wishful thinking, hasty generalisation and guessing are unreliable, so their products are unjustified,
          even when true.
        </p>
      </Definition>

      <Definition title="internalism and externalism">
        <p>
          <strong>Internalists</strong> hold that what justifies a belief must be accessible to the believer on reflection,
          such as their evidence or reasons. <strong>Externalists</strong> allow justifiers the believer may know nothing
          about. Reliabilism is the leading externalist view: the chicken sexer is justified because the process is reliable,
          whether or not they know it.
        </p>
      </Definition>

      <Example title="what it gets right">
        <p>
          Reliabilism explains why children and animals can have justified beliefs without being able to give reasons. It ties
          justification to truth, which seems to be its point, and it stops the regress: a reliable process can justify
          without needing a further justified belief.
        </p>
      </Example>

      <Remark title="Norman the clairvoyant">
        <p>
          Laurence BonJour imagined Norman, who has a perfectly reliable power of clairvoyance but no evidence for or against
          it. One day he simply finds himself believing that the President is in New York, and he is right. Reliabilism says
          Norman is justified; many find that he is being irrational, holding a belief that from his own point of view comes
          from nowhere. This is the worry that reliability is not sufficient.
        </p>
      </Remark>

      <Remark title="the generality problem">
        <p>
          Every belief comes from a single event, which is a token of many process types: vision, vision at dusk, identifying
          maples from a train. Their reliabilities differ. Reliabilism must say which type counts, without making it so broad
          that the verdicts are crude or so narrow that every true belief is justified. Earl Conee and Richard Feldman argued
          that no principled answer has been given.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>According to process reliabilism, what makes a belief justified?</p>,
      answer: {
        kind: "choice",
        options: [
          "Fitting the believer's evidence.",
          "Being produced by a process that tends to yield true beliefs.",
          "Being certain.",
          "Cohering with the believer's other beliefs.",
        ],
        correct: [1],
      },
    },
    {
      key: "ext",
      rung: "check",
      prompt: <p>Why is reliabilism a form of externalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "It concerns only the external world.",
          "What justifies the belief, the reliability of the process, need not be accessible to the believer.",
          "It relies on testimony from others.",
          "It denies that beliefs are mental.",
        ],
        correct: [1],
      },
    },
    {
      key: "sexer",
      rung: "apply",
      prompt: <p>What does reliabilism say about the chicken sexer who cannot explain their method?</p>,
      answer: {
        kind: "choice",
        options: [
          "Their beliefs are justified, because the process is reliable.",
          "Their beliefs are unjustified, because they lack reasons.",
          "Their beliefs are justified only if they know how it works.",
          "Reliabilism says nothing about such cases.",
        ],
        correct: [0],
      },
    },
    {
      key: "norman",
      rung: "apply",
      prompt: <p>What is BonJour&rsquo;s case of Norman the clairvoyant meant to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That clairvoyance is unreliable.",
          "That a belief from a reliable process can still seem unjustified when the believer has no reason to trust it.",
          "That reliabilism is too demanding.",
          "That knowledge is impossible.",
        ],
        correct: [1],
      },
    },
    {
      key: "gen",
      rung: "apply",
      prompt: <p>What is the generality problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "Reliabilism is stated too generally to be tested.",
          "Each belief-forming event falls under many process types with different reliabilities, and reliabilism must say which one counts.",
          "Most people are not reliable in general.",
          "General beliefs cannot be justified.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Norman&rsquo;s belief justified? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the case and the reliabilist verdict.",
          "Considers the internalist intuition that Norman is irrational, or a reliabilist reply such as adding a no-defeater condition.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "fix",
      rung: "stretch",
      prompt: <p>Suggest a way for the reliabilist to choose the right process type, and test it on the tree at dusk.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Proposes a rule, for example the narrowest type that is causally operative, or the type the believer's cognitive system actually uses.",
          "Applies it to the example and gives a verdict.",
          "Notes any weakness in the rule. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend process reliabilism, the difference between internalism and externalism, why chicken sexers make reliabilism attractive, BonJour's Norman the clairvoyant, and the generality problem.",

  glimpse: (
    <p>
      The next lesson presents the main internalist rival, evidentialism. After it, the new evil demon problem asks whether
      reliability is even necessary, and virtue epistemology refines reliabilism into an account of intellectual skill.
    </p>
  ),
};
