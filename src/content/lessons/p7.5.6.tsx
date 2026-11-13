import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "The world is like a great machine, made of lesser machines, each part adjusted to the others with exquisite accuracy.",
    kind: "premise",
    note: "Cleanthes points to the eye, to the fitting of means to ends throughout nature, as if contrived by an engineer.",
    objection: "Philo: the universe is just as like an animal or a vegetable, which grow by generation, not by design. Why choose the machine?",
  },
  {
    claim: "Machines are produced by intelligent designers.",
    kind: "premise",
    note: "We have seen houses built by architects and watches made by watchmakers, many times over.",
    objection: "Philo: we have experience of many houses being built, but of only one universe, and we never saw it made. An inference from a single case is weak.",
  },
  {
    claim: "Like effects have like causes.",
    kind: "premise",
    note: "This is the principle that makes the argument an argument from analogy, and so an argument from experience.",
  },
  {
    claim: "So the world probably has a cause resembling human intelligence, though greater in proportion to its work.",
    kind: "inference",
    note: "Cleanthes insists this is the only argument for God that experience can support.",
    objection: "Philo: by the same principle, the cause should resemble us in other ways. Perhaps many gods built the world, as many hands build a ship; perhaps an infant deity botched it, or an aged one has abandoned it.",
  },
  {
    claim: "And that intelligence is perfectly wise and good.",
    kind: "conclusion",
    note: "This is the step that religion needs.",
    objection: "Philo: from a world mixed with pain, disease and waste, we cannot infer a perfectly good cause. At most, an indifferent one. The argument cannot reach the God of theology.",
  },
];

export const lesson: LessonContent = {
  id: "p7.5.6",
  minutes: 85,
  links: {
    revisits: ["p7.5.2", "p1.5.2", "p7.5.3"],
    foreshadows: ["p23.4.4", "p8.6.3", "p23.2.2"],
  },

  puzzle: (
    <>
      <p>
        Hume worked on his <em>Dialogues Concerning Natural Religion</em> for twenty-five years and arranged for them to be
        published only after his death. Three characters debate: Cleanthes, who argues from the design of the world to a
        designer; Demea, who defends God by pure reason; and Philo, a sceptic. Which of them speaks for Hume has been argued
        over ever since. Can experience, which is all Hume allows us, tell us anything about the cause of the universe?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Cleanthes&rsquo;s argument, and challenge each step to hear Philo&rsquo;s objections.
      </p>
      <ArgumentStepViz steps={STEPS} title="Cleanthes's design argument, with Philo's replies" />
    </>
  ),

  theory: (
    <>
      <Definition title="the design argument as analogy">
        <p>
          Cleanthes&rsquo;s argument is an <strong>argument from analogy</strong>: the world resembles a human artefact, so
          its cause probably resembles a human artificer. Its strength therefore depends on how close the resemblance is,
          and on how much experience we have of causes of that kind. This makes it an empirical argument, and Hume&rsquo;s
          account of causation lets Philo test it on its own terms.
        </p>
      </Definition>

      <Definition title="Philo's objections">
        <p>
          The analogy is weak: the world is as much like an animal or a plant as a machine. The universe is a single,
          unique effect, so we have no experience of the constant conjunction of worlds and their causes. If we posit a mind
          to explain order, what explains the order in that mind? And the inference, pressed consistently, yields a cause
          that is finite, imperfect, perhaps plural and bodily: nothing like the God of religion.
        </p>
      </Definition>

      <Example title="the problem of evil">
        <p>
          In Parts 10 and 11, Philo turns to suffering. Is God willing to prevent evil but not able? Then God is impotent. Able
          but not willing? Then God is malevolent. Both able and willing? Then whence is evil? Philo grants that evil might be
          consistent with a good God already known on other grounds. But the design argument must infer God&rsquo;s character
          from the world as we find it, and from a world of mixed good and evil it can infer only indifference.
        </p>
      </Example>

      <Remark title="after Hume">
        <p>
          Hume also attacked the reports of miracles, arguing that testimony can never make a miracle more probable than the
          falsehood of the testimony. William Paley&rsquo;s famous watch, in 1802, revived the design argument; Darwin then
          offered a natural explanation of apparent design, which many think did more damage than any of Philo&rsquo;s
          objections. Modern fine-tuning arguments return to the theme, and Kant would argue that all such proofs exceed
          the limits of reason.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "who",
      rung: "check",
      prompt: <p>Which character in the Dialogues defends the argument from design?</p>,
      answer: { kind: "choice", options: ["Philo", "Cleanthes", "Demea", "Pamphilus"], correct: [1] },
    },
    {
      key: "kind",
      rung: "check",
      prompt: <p>What kind of argument is Cleanthes&rsquo;s design argument?</p>,
      answer: {
        kind: "choice",
        options: ["A deductive proof from definitions", "An argument from analogy, based on experience", "An appeal to revelation", "An ontological argument"],
        correct: [1],
      },
    },
    {
      key: "unique",
      rung: "apply",
      prompt: <p>Why does the uniqueness of the universe weaken the argument, on Hume&rsquo;s view of causation?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because unique things have no causes.",
          "Because causal inference rests on constant conjunction, and we have never observed worlds being made.",
          "Because the universe is infinite.",
          "Because God is unique too.",
        ],
        correct: [1],
      },
    },
    {
      key: "many",
      rung: "apply",
      prompt: <p>Why does Philo suggest that the argument might support many gods?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because he believed in many gods.",
          "Because large human works, such as ships and cities, are built by many hands, so like effects would suggest like causes.",
          "Because the Bible says so.",
          "Because one god cannot exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "evil",
      rung: "apply",
      prompt: <p>What can the design argument infer about the designer&rsquo;s goodness, according to Philo?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the designer is perfectly good.",
          "From a world of mixed good and evil, at most a cause indifferent to both.",
          "That the designer is wholly evil.",
          "Nothing could ever be inferred.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Which of Philo&rsquo;s objections to the design argument is strongest? Explain it and say why.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies an objection, such as the weak analogy, the unique effect, the regress of order, or the problem of evil.",
          "Explains how it undermines the argument.",
          "Gives a reason for ranking it highest. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "darwin",
      rung: "stretch",
      prompt: (
        <p>
          Did Darwin refute the design argument more effectively than Hume? Compare the two kinds of objection.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes Hume attacks the logic of the inference, while Darwin supplies an alternative explanation of apparent design.",
          "Considers whether design arguments survive in other forms, such as fine-tuning of physical constants.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the design argument as Cleanthes states it, why it is an argument from analogy, Philo's main objections including the problem of evil, and how the argument fared after Hume.",

  glimpse: (
    <p>
      The next chapter looks at Reid&rsquo;s reply to Hume&rsquo;s scepticism and at the debate over absolute space. The
      Philosophy of Religion course returns to miracles and to cosmological arguments, and Kant examines purpose in nature in
      the Critique of Judgement.
    </p>
  ),
};
