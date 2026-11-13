import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "The world is my representation.",
    kind: "premise",
    note: "Following Kant, everything we know as an object exists for a subject, shaped by space, time and causality. Schopenhauer opens his book with this sentence.",
    objection: "A realist: the world existed long before any subject, as geology shows. Schopenhauer replies that even the past is known only as represented.",
  },
  {
    claim: "Representation is governed by the principle of sufficient reason, which explains things only by their relations to other things.",
    kind: "premise",
    note: "Science tells us how things behave and connect, never what they are in themselves. Force, gravity and matter remain unexplained residues.",
  },
  {
    claim: "But I know one thing from inside as well as outside: my own body, through the experience of willing.",
    kind: "premise",
    note: "A movement of my arm is, from outside, a physical event; from inside, an act of will. These are not cause and effect but one thing known in two ways.",
    objection: "Is inner awareness of willing really free of the forms of representation? It still occurs in time, as Schopenhauer himself admits.",
  },
  {
    claim: "So will is what my body is in itself.",
    kind: "inference",
    note: "Here Schopenhauer claims to go beyond Kant, who said the thing in itself is unknowable. It is known, at least in part, in our own striving.",
    objection: "Kant would object that this applies a concept drawn from experience to what lies beyond experience.",
  },
  {
    claim: "By analogy, the inner nature of everything is will: blind, endless striving, in gravity, in plants, in animals, in us.",
    kind: "conclusion",
    note: "The world is the objectification of a single will, which takes on the many forms of individuals only in representation.",
    objection: "Why extend the analogy to stones and magnets? Critics find this a projection of human psychology onto nature.",
  },
];

export const lesson: LessonContent = {
  id: "p9.3.1",
  minutes: 85,
  links: {
    revisits: ["p8.1.3", "p8.3.4", "p9.1.1"],
    foreshadows: ["p9.3.2", "p9.6.3", "p20.1.1"],
  },

  puzzle: (
    <>
      <p>
        Arthur Schopenhauer published <em>The World as Will and Representation</em> in 1818 and waited decades for anyone to
        notice. He scheduled his Berlin lectures at the same hour as Hegel&rsquo;s, and almost nobody came. Yet he went on to
        influence Wagner, Nietzsche, Freud, Tolstoy and Wittgenstein. He claimed to have found what Kant declared unknowable,
        the thing in itself, and it was not reason. It was will.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Schopenhauer&rsquo;s argument, and challenge each step to hear the objections.</p>
      <ArgumentStepViz steps={STEPS} title="From representation to will" />
    </>
  ),

  theory: (
    <>
      <Definition title="the world as representation">
        <p>
          Schopenhauer accepts Kant&rsquo;s idealism but simplifies it: all the forms of knowledge reduce to the{" "}
          <strong>principle of sufficient reason</strong>, that everything has a ground, which appears as causality, logical
          grounds, space and time, and motives. The world so known is the &ldquo;veil of Maya&rdquo;, a phrase he takes from
          Indian philosophy: real as appearance, but not as the thing in itself. Individuation, the division into many
          separate things, belongs only to this side.
        </p>
      </Definition>

      <Definition title="the world as will">
        <p>
          The thing in itself is <strong>will</strong>: not conscious choice, but blind, aimless striving that never reaches
          a final goal. It is one, since plurality belongs to representation, and it shows itself in natural forces, in
          the growth of plants, in animal instinct and in human desire. Intellect is the will&rsquo;s servant, developed to
          help it get what it wants.
        </p>
      </Definition>

      <Example title="the body and the intellect">
        <p>
          Schopenhauer gives the body unusual philosophical importance: the teeth and gullet are hunger made visible, the
          genitals sexual desire made visible. He anticipates Freud in holding that much of what moves us is hidden from
          consciousness, and that reason often rationalises what the will has already decided.
        </p>
      </Example>

      <Remark title="Kant, Plato and India">
        <p>
          Between the single will and the many individuals stand the Platonic Ideas, the fixed grades of the will&rsquo;s
          objectification, which art can reveal. Schopenhauer was among the first Western philosophers to engage seriously
          with the Upanishads and Buddhism, which he read in early translations and found to agree with his conclusions.
          His understanding of them was partial, and scholars still debate how much they shaped his system.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "first",
      rung: "check",
      prompt: <p>What is the opening claim of The World as Will and Representation?</p>,
      answer: {
        kind: "choice",
        options: ["God is dead.", "The world is my representation.", "I think, therefore I am.", "Existence precedes essence."],
        correct: [1],
      },
    },
    {
      key: "thing",
      rung: "check",
      prompt: <p>What does Schopenhauer take the thing in itself to be?</p>,
      answer: { kind: "choice", options: ["Reason", "Matter", "Will", "God"], correct: [2] },
    },
    {
      key: "body",
      rung: "apply",
      prompt: <p>Why is the body central to Schopenhauer&rsquo;s argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because only bodies exist.",
          "Because it is the one thing known both as an object from outside and as will from inside.",
          "Because it is immortal.",
          "Because Kant ignored anatomy.",
        ],
        correct: [1],
      },
    },
    {
      key: "one",
      rung: "apply",
      prompt: <p>Why must the will be one, not many?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because there is only one person.",
          "Because plurality depends on space and time, which belong only to representation.",
          "Because God is one.",
          "Because the will is weak.",
        ],
        correct: [1],
      },
    },
    {
      key: "intellect",
      rung: "apply",
      prompt: <p>What is the relation between intellect and will, for Schopenhauer?</p>,
      answer: {
        kind: "choice",
        options: [
          "Intellect rules the will.",
          "Intellect is the servant of the will, developed to help it attain its ends.",
          "They are unrelated.",
          "The will is a product of the intellect.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Schopenhauer succeed in knowing the thing in itself, where Kant said we cannot? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Schopenhauer's route: inner awareness of willing in one's own body.",
          "Considers an objection, such as that inner awareness still occurs in time, or that the analogy to all nature is unsupported.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "freud",
      rung: "stretch",
      prompt: <p>In what ways does Schopenhauer anticipate later thinkers such as Darwin, Nietzsche or Freud?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies an anticipation, such as unconscious drives, the primacy of instinct, or intellect as a tool of survival.",
          "Notes a difference, such as Schopenhauer's metaphysical rather than scientific framework.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Schopenhauer's world as representation and the principle of sufficient reason, how the body leads him to will as the thing in itself, why the will is one, and how intellect serves it.",

  glimpse: (
    <p>
      The next lesson draws out Schopenhauer&rsquo;s pessimism and his routes to release: art, compassion and the denial of
      the will. Nietzsche transforms the will into the will to power, and the Indian Philosophy course studies the Upanishads
      on their own terms.
    </p>
  ),
};
