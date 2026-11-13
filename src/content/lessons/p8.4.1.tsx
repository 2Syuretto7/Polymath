import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ParalogismViz } from "@/components/viz/ParalogismViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.4.1",
  minutes: 80,
  links: {
    revisits: ["p8.3.2", "p7.1.4", "p7.5.4"],
    foreshadows: ["p8.4.2", "p8.4.3", "p9.1.2"],
  },

  puzzle: (
    <>
      <p>
        Descartes argued from the I think to a thinking substance, simple, indivisible and distinct from any body. Leibniz and
        his followers built a whole science on it, rational psychology, which promised to prove the soul immortal by reason
        alone. Each step seems to follow from what it is to think. Kant thought the arguments looked valid, felt compelling,
        and proved nothing. Where do they go wrong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Read each of the four arguments of rational psychology. Then reveal Kant&rsquo;s diagnosis.
      </p>
      <ParalogismViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Transcendental Dialectic">
        <p>
          The <strong>Dialectic</strong> is Kant&rsquo;s logic of illusion. Reason seeks the unconditioned: a complete series
          of conditions for whatever is given. It forms three ideas of the unconditioned, the soul, the world as a whole, and
          God. Applying the categories to these ideas, beyond any possible experience, produces a{" "}
          <strong>transcendental illusion</strong>, which, like an optical illusion, does not disappear when we understand
          it.
        </p>
      </Definition>

      <Definition title="paralogism">
        <p>
          A <strong>paralogism</strong> is a formally fallacious syllogism. Kant finds four in rational psychology,
          corresponding to the four headings of the categories: the soul is a substance, simple, a person identical through
          time, and in a doubtful relation to outer objects. Each trades on an ambiguity, using the I of apperception, a mere
          form of thought, as if it were an intuition of an object.
        </p>
      </Definition>

      <Example title="the first paralogism">
        <p>
          &ldquo;What cannot be thought except as subject is substance; I cannot be thought except as subject; so I am a
          substance.&rdquo; In the first premise, &ldquo;subject&rdquo; means something given in intuition that persists, to
          which the category of substance, with its schema of permanence, applies. In the second, it means only the logical
          subject of judgements, the I that accompanies all my thoughts. That I must think of myself as subject tells me nothing
          about what kind of thing, if anything persistent, does the thinking.
        </p>
      </Example>

      <Remark title="what remains">
        <p>
          The result is not that the soul is mortal or material, which would be equally beyond our knowledge, but that
          neither can be proved. Kant thinks this protects morality: immortality returns as a postulate of practical reason.
          His diagnosis of the I as a formal unity rather than a known object influenced Fichte and Hegel, and anticipates later
          doubts about whether introspection reveals a self at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a paralogism, for Kant?</p>,
      answer: {
        kind: "choice",
        options: ["A paradox about infinity", "A formally fallacious syllogism, here about the soul", "A proof of God", "A category"],
        correct: [1],
      },
    },
    {
      key: "ideas",
      rung: "check",
      prompt: <p>Which are the three ideas of reason in the Dialectic? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["The soul", "The world as a whole", "God", "Space"], correct: [0, 1, 2] },
    },
    {
      key: "error",
      rung: "apply",
      prompt: <p>What is the common error in the paralogisms?</p>,
      answer: {
        kind: "choice",
        options: [
          "Assuming the soul is material.",
          "Treating the I of apperception, a form of thought, as an intuition of an object to which the categories apply.",
          "Using bad grammar.",
          "Denying that I think.",
        ],
        correct: [1],
      },
    },
    {
      key: "illusion",
      rung: "apply",
      prompt: <p>Why does Kant compare transcendental illusion to an optical illusion?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because both are caused by bad eyesight.",
          "Because both persist even after we understand that they are illusions.",
          "Because both involve light.",
          "Because both are rare.",
        ],
        correct: [1],
      },
    },
    {
      key: "balls",
      rung: "apply",
      prompt: <p>What does Kant&rsquo;s example of elastic balls passing on their motion show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That motion is relative.",
          "That consciousness of identity over time is compatible with a series of different substances passing their states along.",
          "That souls are elastic.",
          "That matter is infinitely divisible.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, explain Kant&rsquo;s diagnosis of the first paralogism.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says subject means a persisting thing given in intuition in one premise, and only the logical subject of thought in the other.",
          "Concludes the middle term is ambiguous, so the inference to a substantial soul fails. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "moral",
      rung: "stretch",
      prompt: <p>Kant says the failure of rational psychology helps morality. Why might he think so? Give your view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes neither materialism nor immortality can be proved, so neither undermines the other.",
          "Considers Kant's idea that immortality is a postulate of practical reason, believed on moral grounds rather than known.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the Transcendental Dialectic is about, what transcendental illusion is, the four paralogisms of rational psychology, and Kant's diagnosis of their shared error.",

  glimpse: (
    <p>
      The next lesson turns to the world as a whole and the antinomies, where reason proves both sides of a contradiction.
      After that, the ideal of pure reason examines the proofs of God, and Hegel takes up the self-consciousness that Kant
      left unknown.
    </p>
  ),
};
