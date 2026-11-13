import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "The I think must be able to accompany all my representations.",
    kind: "premise",
    note: "Otherwise something would be represented in me that could not be thought at all, which is to say it would be nothing to me.",
  },
  {
    claim: "So all my representations belong to one self-consciousness.",
    kind: "inference",
    note: "Kant calls this the transcendental unity of apperception. It is not an experience of a self, but the condition of any experience being mine.",
    objection: "Hume looked within and found only a bundle of perceptions. Kant agrees that no impression of the self is found; his unity is a condition of thought, not an object of introspection.",
  },
  {
    claim: "This unity is possible only through an act of synthesis that combines the manifold according to rules.",
    kind: "premise",
    note: "Combination is never simply given in intuition. It is an act of the understanding, and it must follow rules if the representations are to belong together.",
  },
  {
    claim: "The rules of that synthesis are the categories.",
    kind: "premise",
    note: "The categories are just the functions of unity in judgement, applied to the manifold of intuition.",
    objection: "Why these rules? Even granting that synthesis needs rules, it is not obvious that it needs exactly the twelve categories of the table.",
  },
  {
    claim: "So the categories apply necessarily to every object of possible experience.",
    kind: "conclusion",
    note: "Whatever can be an object for me must be brought under the unity of apperception, and so under the categories.",
    objection: "Strawson's worry: the argument shows at most that experience must be of a world of objects distinct from our experiences of them, a weaker result than the full table, though perhaps still enough to answer the sceptic.",
  },
];

export const lesson: LessonContent = {
  id: "p8.3.2",
  minutes: 90,
  links: {
    revisits: ["p8.3.1", "p7.5.4", "p7.5.2"],
    foreshadows: ["p8.3.3", "p8.3.5", "p9.1.2"],
  },

  puzzle: (
    <>
      <p>
        Lawyers distinguish the question of fact, what happened, from the question of right, by what title someone holds what
        they hold. Kant borrowed the legal term: a deduction shows a right. The categories are concepts we did not get from
        experience. By what right do we apply them to experience at all? If they were merely our habits, as Hume said of
        causation, nature might ignore them. Kant said this section cost him more labour than any other, and he rewrote it
        entirely for the second edition.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through the core of the second-edition deduction, and challenge the steps that critics have pressed.
      </p>
      <ArgumentStepViz steps={STEPS} title="The transcendental deduction, in outline" />
    </>
  ),

  theory: (
    <>
      <Definition title="a transcendental argument">
        <p>
          The deduction is the model of a <strong>transcendental argument</strong>: it starts from something the sceptic
          cannot deny, that I have experiences and can be aware of them as mine, and argues that a further claim is a
          necessary condition of that. If the argument works, doubting the conclusion would undermine the very experience the
          doubt starts from.
        </p>
      </Definition>

      <Definition title="the unity of apperception">
        <p>
          <strong>Apperception</strong> is self-consciousness. Its <strong>transcendental unity</strong> is the fact that all
          my representations can be ascribed to one and the same I. This unity is not given in any representation; it is
          achieved by an act of <strong>synthesis</strong>, the combining of the manifold. Kant argues that this combination
          is possible only according to the categories, so whatever can be an object of experience for a self-conscious
          subject must fall under them.
        </p>
      </Definition>

      <Example title="objects and appearances">
        <p>
          Kant ties the unity of consciousness to the concept of an object. To think of my representations as of one object,
          a house, say, rather than as a loose succession of impressions, is to combine them by a rule that holds whether or
          not I attend to it. That rule-governed combination is what the categories supply. So the very idea of an object,
          distinct from my passing states, depends on the categories.
        </p>
      </Example>

      <Remark title="the cost and the legacy">
        <p>
          The conclusion holds only for appearances. Because nature, as appearance, is shaped by the understanding, Kant can
          say that the understanding prescribes laws to nature. Critics disagree about whether the argument succeeds, and in
          what form. Fichte and Hegel built on the unity of apperception; Strawson, in the 1960s, reconstructed the deduction
          as an argument about the concept of experience; and transcendental arguments against scepticism remain a live, and
          contested, strategy.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "quid",
      rung: "check",
      prompt: <p>In Kant&rsquo;s legal sense, what does a deduction establish?</p>,
      answer: { kind: "choice", options: ["A fact about history", "A right or entitlement", "A definition", "A probability"], correct: [1] },
    },
    {
      key: "ithink",
      rung: "check",
      prompt: <p>What must be able to accompany all my representations, according to Kant?</p>,
      answer: { kind: "choice", options: ["An image", "The I think", "A feeling of pleasure", "A cause"], correct: [1] },
    },
    {
      key: "trans",
      rung: "apply",
      prompt: <p>What is a transcendental argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "An argument that God transcends the world.",
          "An argument from something the sceptic accepts, such as having experience, to a necessary condition of it.",
          "An argument from authority.",
          "An argument by analogy.",
        ],
        correct: [1],
      },
    },
    {
      key: "synth",
      rung: "apply",
      prompt: <p>Why does Kant think the unity of apperception requires synthesis?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because combination is never simply given in intuition; it must be an act of the understanding.",
          "Because the self is a substance.",
          "Because we perceive the self directly.",
          "Because time is unreal.",
        ],
        correct: [0],
      },
    },
    {
      key: "scope",
      rung: "apply",
      prompt: <p>To what does the conclusion of the deduction apply?</p>,
      answer: {
        kind: "choice",
        options: ["Things in themselves", "Every object of possible experience", "God and the soul", "Only mathematical objects"],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, summarise the transcendental deduction as you understand it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Starts from the unity of self-consciousness: all my representations must be able to be mine.",
          "Says this unity requires synthesis according to rules, and these rules are the categories, so the categories apply to all objects of experience. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "sceptic",
      rung: "stretch",
      prompt: <p>Does the transcendental deduction answer Hume? Give your view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes what the deduction claims: categories such as cause are necessary conditions of experience, so they apply to it.",
          "Considers a limitation, such as that it holds only for appearances, or that a sceptic may doubt the premise, or that it may show only how we must think rather than how things are.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what question the transcendental deduction answers, the role of the unity of apperception and of synthesis, what a transcendental argument is, and why the conclusion holds only for appearances.",

  glimpse: (
    <p>
      The next lesson asks how pure concepts can apply to sensible intuitions at all: the schematism. The refutation of
      idealism later turns the deduction against Descartes, and Hegel develops the unity of self-consciousness into a whole
      philosophy.
    </p>
  ),
};
