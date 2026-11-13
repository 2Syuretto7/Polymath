import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "A body is set in motion only by being pushed by another body.",
    kind: "premise",
    note: "This is the mechanical philosophy, which Descartes himself held: no occult powers, only matter in motion, pushing by contact.",
  },
  {
    claim: "Pushing requires contact, and contact requires a surface, which requires extension.",
    kind: "premise",
    note: "Elisabeth's words: motion depends on the impulse of the thing moved, the manner in which it is pushed, and the qualification and shape of the surface of the thing that pushes.",
  },
  {
    claim: "The soul, as Descartes describes it, is a thinking thing with no extension at all.",
    kind: "premise",
    note: "This is the conclusion of the Sixth Meditation, which Elisabeth had read.",
  },
  {
    claim: "So the soul cannot push the body, and cannot move it.",
    kind: "inference",
    note: "From the first three premises. Yet we move our limbs at will every day.",
    objection:
      "Descartes replied that the union of soul and body is a primitive notion, not to be understood through the notions of thought or extension, and compared it with the way heaviness was once thought to move a stone without contact.",
  },
  {
    claim: "So either the soul does not move the body, or the soul is extended after all.",
    kind: "conclusion",
    note: "Elisabeth answered Descartes's reply: heaviness is a scholastic quality he had himself rejected, and it would be easier to grant matter and extension to the soul than the power to move a body to an immaterial thing.",
    objection:
      "Must all causation be by contact? Newton's gravity acts at a distance, and modern physics speaks of fields. If the first premise goes, does the problem go with it?",
  },
];

export const lesson: LessonContent = {
  id: "p7.1.5",
  minutes: 75,
  links: {
    revisits: ["p7.1.4", "p6.4.3", "p1.2.1"],
    foreshadows: ["p12.1.2", "p12.4.1", "p7.2.4"],
  },

  puzzle: (
    <>
      <p>
        In May 1643 Princess Elisabeth of Bohemia, then twenty-four and living in exile in The Hague, wrote to Descartes
        with a question he found hard to answer. She asked how the soul of a human being, being only a thinking substance,
        can determine the bodily spirits to perform voluntary actions. Their correspondence lasted until his death seven
        years later. Why was her question so difficult, and has anyone answered it since?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Elisabeth&rsquo;s argument, and open the objections at the last two steps.</p>
      <ArgumentStepViz steps={STEPS} title="Elisabeth's objection to interaction" />
    </>
  ),

  theory: (
    <>
      <Definition title="the interaction problem">
        <p>
          The <strong>interaction problem</strong> asks how two substances with nothing in common, an unextended mind and
          an extended body, can act on each other. Interaction runs both ways: decisions move limbs, and a pin in the foot
          produces pain. Elisabeth&rsquo;s version is especially sharp because it uses Descartes&rsquo;s own account of
          causation among bodies, by contact and impulse, against him.
        </p>
      </Definition>

      <Example title="Descartes's reply">
        <p>
          Descartes answered that there are three primitive notions: extension, by which we understand bodies; thought, by
          which we understand the mind; and the union of the two, by which we understand how the soul moves the body and
          the body affects the soul. The union is known best not by metaphysics but by ordinary life and the senses. He
          advised her to spend only a few hours a year on metaphysics. Elisabeth was polite but not satisfied: she could not
          see how what is understood obscurely through the senses could settle a question that the intellect finds
          incoherent.
        </p>
      </Example>

      <Definition title="the pineal gland">
        <p>
          In the Passions of the Soul, which grew out of the correspondence and was dedicated to Elisabeth&rsquo;s concerns,
          Descartes located the main seat of the soul in the pineal gland, a small single organ in the centre of the brain,
          which he thought could tilt to direct the flow of animal spirits through the nerves. He held that the soul does
          not change the total quantity of motion in the world, only its direction. Leibniz later pointed out that
          direction is conserved too, so even this change would break the laws of motion.
        </p>
      </Definition>

      <Remark title="after Elisabeth">
        <p>
          The problem shaped the next century. Malebranche&rsquo;s occasionalism said that neither mind nor body acts on the
          other: on the occasion of my will, God moves my arm. Spinoza made mind and body two aspects of one substance, and
          Leibniz proposed a harmony established in advance, like two clocks set to agree. Today the question takes the
          form of the causal closure of physics: if every physical event has a sufficient physical cause, what is left for
          the mind to do? Elisabeth is now read as a philosopher in her own right, not merely as Descartes&rsquo;s
          correspondent.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "question",
      rung: "check",
      prompt: <p>What did Elisabeth ask Descartes?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whether God exists.",
          "How a soul that is only a thinking substance can move the body to perform voluntary actions.",
          "Whether animals have souls.",
          "How to prove the cogito.",
        ],
        correct: [1],
      },
    },
    {
      key: "primitive",
      rung: "check",
      prompt: <p>Which three primitive notions did Descartes name in his reply?</p>,
      answer: {
        kind: "choice",
        options: [
          "Matter, form and purpose",
          "Extension, thought, and the union of mind and body",
          "God, soul and world",
          "Space, time and motion",
        ],
        correct: [1],
      },
    },
    {
      key: "heavy",
      rung: "apply",
      prompt: <p>Why did Elisabeth reject Descartes&rsquo;s comparison with heaviness?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because heavy things do not fall.",
          "Because heaviness, as a quality moving a body without contact, was a scholastic notion that Descartes himself had rejected.",
          "Because the soul is heavier than the body.",
          "Because she thought gravity was a myth.",
        ],
        correct: [1],
      },
    },
    {
      key: "pineal",
      rung: "apply",
      prompt: <p>What role did Descartes give the pineal gland?</p>,
      answer: {
        kind: "choice",
        options: [
          "It produces thoughts.",
          "It is the main seat of the soul, where the soul directs the flow of animal spirits.",
          "It stores memories.",
          "It proves that animals think.",
        ],
        correct: [1],
      },
    },
    {
      key: "occasion",
      rung: "apply",
      prompt: <p>How does occasionalism answer the interaction problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "Mind and body are the same thing.",
          "Neither acts on the other: God moves the body on the occasion of the will, and produces sensations on the occasion of bodily changes.",
          "The mind moves the body by contact.",
          "The body has no effect on the mind.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Set out Elisabeth&rsquo;s objection and say whether Descartes answers it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the objection: bodies move only by contact, contact needs extension, the soul is unextended, so it cannot move the body.",
          "Describes Descartes's reply about the primitive notion of union, and assesses it. Any reasonable assessment earns full credit.",
        ],
      },
    },
    {
      key: "contact",
      rung: "stretch",
      prompt: (
        <p>
          Elisabeth&rsquo;s objection assumes that bodies move only by contact. Does the interaction problem survive if we
          drop that assumption, as physics did? Argue briefly.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that the contact premise is false of modern physics, so the original form of the argument fails.",
          "Considers a surviving form, such as the causal closure of physics or the conservation of energy.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Elisabeth's objection to Descartes, his reply about the union of mind and body, the role of the pineal gland, and how later philosophers responded to the interaction problem.",

  glimpse: (
    <p>
      The next chapter meets Spinoza and Leibniz, who answered the problem in opposite ways: one mind-body substance, or
      none acting on the other at all. The Philosophy of Mind course returns to interaction as the problem of mental
      causation.
    </p>
  ),
};
