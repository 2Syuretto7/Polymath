import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Different cultures have different moral codes.",
    kind: "premise",
    note: "This is a claim about what people believe, and it is plainly true: anthropology and history are full of examples, from burial customs to marriage, punishment and the treatment of strangers.",
  },
  {
    claim: "If cultures disagree about a moral question, there is no objective truth about it.",
    kind: "premise",
    note: "This hidden premise is what the argument needs to get from beliefs to truth. Stated openly, it looks much less obvious than the first premise.",
    objection:
      "Disagreement does not in general show there is no truth. Some societies have believed the earth is flat and others that it is round; it does not follow that there is no fact about its shape. Why should morality be different?",
  },
  {
    claim: "So there is no objective truth in morality: right and wrong are only matters of opinion, and opinion varies from culture to culture.",
    kind: "conclusion",
    note: "This is the cultural differences argument, as James Rachels named it. Its conclusion might still be true, but this argument does not establish it.",
    objection:
      "Rachels points out that the conclusion is about what really is the case, while the premise is only about what people believe. The argument is invalid without the hidden premise, and unsound with it.",
  },
];

export const lesson: LessonContent = {
  id: "p5.1.1",
  minutes: 75,
  links: {
    revisits: ["p4.2.1", "p1.6.2", "p0.2.3"],
    foreshadows: ["p5.1.2", "p13.3.3", "p13.3.4"],
  },

  puzzle: (
    <>
      <p>
        Herodotus tells how the Persian king Darius once asked some Greeks what it would take for them to eat the bodies of
        their dead fathers. Nothing in the world, they said. He then asked some Callatians, who did eat their dead, what it
        would take for them to burn their fathers&rsquo; bodies, as the Greeks did. They cried out in horror. Each side was
        sure it was right. Does this show that right and wrong are simply what your culture says they are? And if so, could
        anyone ever criticise their own society, or anyone else&rsquo;s?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here is the most common argument for cultural relativism. Step through it, and check whether the conclusion
        really follows from the premises.
      </p>
      <ArgumentStepViz steps={STEPS} title="The cultural differences argument" />
    </>
  ),

  theory: (
    <>
      <Definition title="cultural relativism">
        <p>
          <strong>Cultural relativism</strong> is the view that there is no universal moral truth: an action is right or
          wrong only relative to the moral code of a particular society, and the code of one society has no special
          standing over another. Herodotus, after telling the story of Darius, approvingly quotes the poet Pindar to the
          effect that custom is king of all.
        </p>
      </Definition>

      <Remark title="what would follow">
        <p>
          Rachels draws out three consequences that many find hard to accept. We could no longer say that the customs of
          other societies are morally worse than our own, even a society that persecuted a minority or denied people
          freedom of speech. We could decide whether an act is right simply by consulting the standards of our own society.
          And the idea of moral progress would be in doubt: a reformer who opposed slavery in a slave-holding society
          would be, by definition, wrong.
        </p>
      </Remark>

      <Example title="less disagreement than it seems">
        <p>
          Some disagreement in customs hides agreement in values. Rachels imagines a culture where people will not eat cows
          because they believe that the soul of a dead grandparent may live in one. They do not value grandparents more or
          less than we do; they differ in a belief about the facts. Many practices that look shocking, Rachels argues, make
          sense in the circumstances of the people who follow them, and some values, such as caring for the young, telling
          the truth and not killing members of one&rsquo;s own group, are needed for any society to survive.
        </p>
      </Example>

      <Remark title="relativism and tolerance">
        <p>
          Relativism is often defended because it seems to support tolerance: who are we to judge others? But if
          relativism is true, tolerance is right only in tolerant societies. In an intolerant society, intolerance would be
          right. A universal duty to be tolerant is itself a non-relative moral claim. What relativism gets right is a
          warning: many of our practices are customs, not moral truths, and we should keep an open mind about them.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "claim",
      rung: "check",
      prompt: <p>What does cultural relativism claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Different cultures have different customs.",
          "Right and wrong are only relative to the moral code of a society; there is no universal moral truth.",
          "Every culture should be tolerant of every other.",
          "Our own culture's code is the correct one.",
        ],
        correct: [1],
      },
    },
    {
      key: "invalid",
      rung: "check",
      prompt: <p>What is Rachels&rsquo; main complaint about the cultural differences argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its premise is false: cultures do not really differ.",
          "Its conclusion, about what is true, does not follow from its premise, about what people believe.",
          "It relies on Herodotus, who is unreliable.",
          "It is circular.",
        ],
        correct: [1],
      },
    },
    {
      key: "darius",
      rung: "apply",
      prompt: <p>What does the story of Darius, the Greeks and the Callatians illustrate most directly?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the Greeks were right.",
          "That customs differ, and each group tends to think its own customs correct.",
          "That there is no truth about anything.",
          "That kings should decide moral questions.",
        ],
        correct: [1],
      },
    },
    {
      key: "follow",
      rung: "apply",
      prompt: <p>If cultural relativism were true, which of these would follow? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "A reformer who opposes their own society's moral code is always wrong.",
          "We cannot say that another society's practices are morally worse than ours.",
          "Every society ought to be tolerant.",
          "Moral progress is clearly possible.",
        ],
        correct: [0, 1],
      },
    },
    {
      key: "cows",
      rung: "apply",
      prompt: (
        <p>
          In Rachels&rsquo; example, one culture eats cows and another will not, believing a grandparent&rsquo;s soul may
          live in one. What does he conclude?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The cultures have different values.",
          "The cultures share a value but differ in a belief about the facts.",
          "One culture is irrational.",
          "There is no truth about cows.",
        ],
        correct: [1],
      },
    },
    {
      key: "reconstruct",
      rung: "prove",
      prompt: (
        <p>
          Set out the cultural differences argument with its hidden premise. Then construct an argument of the same form
          about a factual question, such as the shape of the earth, and use it to show that the form is invalid.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the premise that cultures differ in moral codes and the conclusion that there is no objective moral truth, and identifies the hidden premise linking disagreement to the absence of truth.",
          "Gives a parallel argument, for example that societies disagree about the shape of the earth, so there is no truth about its shape.",
          "Explains that the parallel argument has true premises and a false conclusion, so the form is invalid. A clear answer earns full credit.",
        ],
      },
    },
    {
      key: "tolerance",
      rung: "stretch",
      prompt: (
        <p>
          Many people are drawn to relativism because it seems to support tolerance. Does it? Consider what relativism
          would say about a society whose code is intolerant, and whether there is a better way to defend tolerance.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains why relativism seems to support tolerance.",
          "Notes that on relativism, intolerance is right in an intolerant society, so a universal duty of tolerance is a non-relative claim.",
          "Offers a view on how tolerance might be better defended, or why relativism still captures something. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what cultural relativism says, the cultural differences argument and why Rachels thinks it fails, the consequences of relativism for criticism and progress, and what relativism gets right.",

  glimpse: (
    <p>
      The next lesson considers a more personal version: that moral judgements express the feelings of the individual.
      Moral Philosophy asks in depth whether there are moral facts, with error theory and moral realism.
    </p>
  ),
};
