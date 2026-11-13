import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Time is not an empirical concept drawn from experience.",
    kind: "premise",
    note: "To perceive things as simultaneous or successive, I must already represent time. So the representation of time cannot be learnt from such perceptions.",
  },
  {
    claim: "Time is a necessary representation underlying all intuitions.",
    kind: "premise",
    note: "We can think of time empty of all appearances, but we cannot think time itself away.",
  },
  {
    claim: "Time is not a general concept but a pure form of intuition.",
    kind: "premise",
    note: "Different times are parts of one and the same time, not instances of a concept. And time is represented as infinite, every determinate length being a limitation of it.",
  },
  {
    claim: "So time is the form of inner sense: the way we intuit ourselves and our own states.",
    kind: "inference",
    note: "Space is the form of outer appearances only. But every representation, of outer things too, is a state of the mind, so time is the form of all appearances whatever.",
    objection: "Trendelenburg's neglected alternative: even if time is an a priori form of our intuition, why may things in themselves not be temporal too? Kant seems to overlook this possibility.",
  },
  {
    claim: "Time is empirically real but transcendentally ideal.",
    kind: "conclusion",
    note: "Every object of experience is in time. But time is nothing apart from the subject who intuits.",
    objection: "Lambert: changes are real, since I am aware of my own changing thoughts, and change is possible only in time. So time is real. Kant replies that he grants time empirical reality; the change is real as appearance, which is all the objection shows.",
  },
];

export const lesson: LessonContent = {
  id: "p8.2.2",
  minutes: 80,
  links: {
    revisits: ["p8.2.1", "p6.1.1", "p7.6.2"],
    foreshadows: ["p8.3.4", "p11.6.1", "p19.2.4"],
  },

  puzzle: (
    <>
      <p>
        Augustine said he knew what time was until someone asked him. Newton made time absolute, flowing equably without
        relation to anything external; Leibniz made it the order of successive things. Kant says time is something stranger
        still: not a feature of things in themselves at all, but the form of our own inner experience. If so, is the passing of
        time, which seems the most real thing of all, only how things look to us?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Kant&rsquo;s exposition of time, and challenge the steps where his critics pushed back.
      </p>
      <ArgumentStepViz steps={STEPS} title="Kant's exposition of time, with objections" />
    </>
  ),

  theory: (
    <>
      <Definition title="the form of inner sense">
        <p>
          <strong>Inner sense</strong> is the mind&rsquo;s awareness of its own states. Its form is time: whatever I find in
          myself, I find in an order of before and after. Since every representation, even of outer things, is a state of the
          mind, time is the formal condition of all appearances, immediately of inner ones and mediately of outer ones. Space
          is the form of outer sense only.
        </p>
      </Definition>

      <Definition title="the transcendental exposition">
        <p>
          The concepts of change and motion, alteration of place, are possible only through time. Two contradictory
          predicates, such as being and not being at a given place, can belong to one thing only at different times. So the
          a priori knowledge in the general theory of motion rests on time as a pure intuition. In the{" "}
          <em>Prolegomena</em>, Kant also ties arithmetic to time, through the successive addition of units.
        </p>
      </Definition>

      <Example title="Lambert's objection">
        <p>
          The mathematician Johann Lambert and others objected: I am directly aware that my representations change, and change
          requires time, so time is real. Kant answers that he never denied that time is real; it is empirically real, the
          form of all experience. What he denies is that time would remain if we abstracted from the subjective conditions of
          intuition. The changes I am aware of are real as appearances of myself to myself.
        </p>
      </Example>

      <Remark title="the neglected alternative">
        <p>
          Adolf Trendelenburg in the nineteenth century pressed a famous gap: Kant considers that time is either a feature of
          things in themselves or a form of our intuition, and argues for the second, but he neglects the possibility that it
          is both. Defenders reply that a priori necessity could not be guaranteed by a merely lucky match. The debate
          continues, as do later accounts of time: McTaggart&rsquo;s argument that time is unreal, and Heidegger&rsquo;s view
          of temporality as the structure of human existence.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "form",
      rung: "check",
      prompt: <p>Time, for Kant, is the form of which sense?</p>,
      answer: { kind: "choice", options: ["Outer sense", "Inner sense", "Common sense", "Moral sense"], correct: [1] },
    },
    {
      key: "all",
      rung: "check",
      prompt: <p>Why is time the form of all appearances, and not only of inner ones?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because outer things are really inside us.",
          "Because every representation, even of outer things, is a state of the mind, and so falls under inner sense.",
          "Because space is part of time.",
          "Because clocks measure everything.",
        ],
        correct: [1],
      },
    },
    {
      key: "lambert",
      rung: "apply",
      prompt: <p>What was Lambert&rsquo;s objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "That time is infinite.",
          "That we are aware of real changes in our own representations, and change requires time, so time is real.",
          "That time is a concept.",
          "That space and time are the same.",
        ],
        correct: [1],
      },
    },
    {
      key: "neglected",
      rung: "apply",
      prompt: <p>What is Trendelenburg&rsquo;s neglected alternative?</p>,
      answer: {
        kind: "choice",
        options: [
          "That time does not exist at all.",
          "That time might be both a form of our intuition and a feature of things in themselves.",
          "That time is learnt from experience.",
          "That time is the form of outer sense.",
        ],
        correct: [1],
      },
    },
    {
      key: "motion",
      rung: "apply",
      prompt: <p>Which a priori knowledge does the transcendental exposition say time makes possible?</p>,
      answer: {
        kind: "choice",
        options: [
          "Knowledge of things in themselves.",
          "The general theory of motion and change, since contradictory predicates can belong to one thing only at different times.",
          "Knowledge of God.",
          "Knowledge of the future.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, explain how Kant answers Lambert&rsquo;s objection.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says Kant grants that time is empirically real, so changes in our representations are real.",
          "Says this shows only that time is real as the form of appearances, not as a feature of things in themselves. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "compare",
      rung: "stretch",
      prompt: (
        <p>
          Augustine located time in the mind, as a stretching of the soul. How does Kant&rsquo;s view resemble his, and how
          does it differ?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes both tie time to the mind.",
          "Notes a difference, such as Augustine's psychological account of memory and expectation against Kant's a priori form that makes all experience possible and grounds necessary knowledge.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why Kant thinks time is an a priori form of intuition, why it is the form of all appearances, and the objections from Lambert and Trendelenburg with Kant's replies.",

  glimpse: (
    <p>
      The next lesson shows how space and time make mathematics possible. The Analogies of Experience later argue that the
      order of time in experience depends on causal laws, and the Metaphysics course takes up McTaggart&rsquo;s claim that
      time is unreal.
    </p>
  ),
};
