import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Begin with pure being: the thought of what is, with no further determination at all.",
    kind: "premise",
    note: "Hegel wants a beginning that presupposes nothing. Being is the emptiest thought we can have.",
    objection: "Trendelenburg: can a beginning really presuppose nothing? Hegel already relies on the ideas of thinking, sameness and difference.",
  },
  {
    claim: "Pure being, having no content whatever, is the same as nothing.",
    kind: "inference",
    note: "If we try to think being without any determination, there is nothing to think. It is empty intuition, empty thought.",
    objection: "Surely 'there is something' and 'there is nothing' are opposites, not the same. Hegel replies that they differ only in meaning, a difference we cannot yet say.",
  },
  {
    claim: "Nothing, in turn, is thought of, and so has the same empty being.",
    kind: "inference",
    note: "Nothing is not simply absent; it is an object of thought, and so it is. Each passes over into the other.",
  },
  {
    claim: "The truth of being and nothing is becoming: the movement of each vanishing into the other.",
    kind: "inference",
    note: "Becoming contains both being and nothing as moments, coming-to-be and ceasing-to-be. Neither is true on its own.",
    objection: "Kierkegaard: logic cannot contain real movement. Becoming belongs to existence, not to concepts.",
  },
  {
    claim: "Becoming settles into determinate being: something, defined by what it is not.",
    kind: "conclusion",
    note: "From here the Logic develops quality, quantity and measure, then essence, then the concept, ending in the absolute idea.",
    objection: "Russell: the whole progression trades on confusing the 'is' of identity with the 'is' of predication.",
  },
];

export const lesson: LessonContent = {
  id: "p9.1.4",
  minutes: 90,
  links: {
    revisits: ["p9.1.2", "p8.4.2", "p9.1.1"],
    foreshadows: ["p9.1.5", "p9.2.3", "p18.2.1"],
  },

  puzzle: (
    <>
      <p>
        Kant found that reason, when it reaches beyond experience, falls into antinomies: equally good proofs of opposite
        conclusions. He took this as a sign to stop. Hegel took it as a sign of life. Contradiction, he wrote, is the root of
        all movement and vitality. His <em>Science of Logic</em> tries to show how our most basic concepts, starting from
        bare being, generate one another by their own instability. Is this deep, or a confusion?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the opening of Hegel&rsquo;s Logic, and challenge each step to hear the objections.</p>
      <ArgumentStepViz steps={STEPS} title="Being, nothing, becoming" />
    </>
  ),

  theory: (
    <>
      <Definition title="dialectic">
        <p>
          For Hegel, a concept thought through on its own terms turns out to contain its opposite; the two together are
          resolved in a richer concept that preserves what was true in each. The key word is{" "}
          <strong><em>Aufhebung</em></strong>, sublation, which means at once to cancel, to preserve and to lift up. The
          familiar formula of thesis, antithesis and synthesis is Fichte&rsquo;s vocabulary, not Hegel&rsquo;s, and it makes
          the movement sound more mechanical than it is.
        </p>
      </Definition>

      <Definition title="logic as metaphysics">
        <p>
          Hegel&rsquo;s logic is not formal logic. It is an account of the categories, the most general concepts by which
          anything can be thought, and since for Hegel the structure of thought is the structure of reality, it is also
          metaphysics. Its three books treat being, essence and the concept, and it ends with the absolute idea: thought that
          has made its own development its object.
        </p>
      </Definition>

      <Example title="the true infinite">
        <p>
          A finite thing is defined by its limit, and so points beyond itself. The &ldquo;bad infinite&rdquo; is the endless
          series of further finites, one after another, never complete. The &ldquo;true infinite&rdquo; is not another thing
          beyond the finite but the whole process in which the finite goes beyond itself, like a circle rather than a line.
          This model, of a whole that includes its own self-transcending parts, recurs throughout Hegel.
        </p>
      </Example>

      <Remark title="afterlife">
        <p>
          Marx claimed to find the dialectic standing on its head in Hegel and to set it on its feet, making material and
          economic life, not thought, the driver of change. British idealists such as Bradley and McTaggart developed Hegel,
          and the revolt of Russell and Moore against them helped found analytic philosophy. Later readers, such as Robert
          Brandom, read Hegel as a theorist of how concepts are made determinate by their use.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "start",
      rung: "check",
      prompt: <p>With what concept does Hegel&rsquo;s Science of Logic begin?</p>,
      answer: { kind: "choice", options: ["The absolute idea", "Pure being", "The thing in itself", "Substance"], correct: [1] },
    },
    {
      key: "auf",
      rung: "check",
      prompt: <p>What does Aufhebung, or sublation, mean?</p>,
      answer: {
        kind: "choice",
        options: [
          "Simply destroying a view.",
          "Cancelling, preserving and raising up at once.",
          "Repeating a view without change.",
          "Proving a view by deduction.",
        ],
        correct: [1],
      },
    },
    {
      key: "becoming",
      rung: "apply",
      prompt: <p>Why does Hegel say the truth of being and nothing is becoming?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because things change over time.",
          "Because each, thought on its own, passes into the other, and becoming is that movement.",
          "Because nothing exists.",
          "Because becoming is a third separate thing.",
        ],
        correct: [1],
      },
    },
    {
      key: "triad",
      rung: "apply",
      prompt: <p>Whose vocabulary is &ldquo;thesis, antithesis, synthesis&rdquo;?</p>,
      answer: { kind: "choice", options: ["Hegel's own", "Fichte's", "Kant's", "Marx's"], correct: [1] },
    },
    {
      key: "infinite",
      rung: "apply",
      prompt: <p>What does Hegel call the endless series of one finite thing after another?</p>,
      answer: { kind: "choice", options: ["The true infinite", "The bad infinite", "The absolute idea", "Essence"], correct: [1] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Hegel right that pure being is the same as nothing? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Hegel's reason: being without any determination has no content to distinguish it from nothing.",
          "Considers an objection, such as that existence and non-existence are plainly opposites.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "kant",
      rung: "stretch",
      prompt: <p>Kant saw the antinomies as a warning, Hegel as a source of progress. Who had the better view of contradiction?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Kant's view that contradiction shows reason has overreached its limits.",
          "Explains Hegel's view that contradiction drives concepts to richer, more adequate forms.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Hegel's Logic moves from being and nothing to becoming, what sublation means, why his logic is also metaphysics, and the difference between the bad and the true infinite.",

  glimpse: (
    <p>
      The next lesson turns to Hegel&rsquo;s Philosophy of Right, where the dialectic shapes his account of freedom, society
      and the state. Marx&rsquo;s historical materialism inverts the dialectic, and the revolt against British idealism
      helped launch analytic philosophy.
    </p>
  ),
};
