import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Through the intellect, a human being can know the natures of all bodies.",
    kind: "premise",
    note: "We can understand what stone is, what water is, what flesh is: in principle, any bodily nature.",
  },
  {
    claim: "Whatever can know certain things must not have any of them in its own nature.",
    kind: "premise",
    note: "Aquinas's analogy: a sick person's tongue, coated with bitterness, tastes everything as bitter. What is already filled with one nature cannot receive the others clearly.",
    objection: "The analogy is from the senses. Does it carry over to understanding? A brain is a body, yet perhaps it can represent all bodies.",
  },
  {
    claim: "So the intellect cannot be a body, nor operate through a bodily organ.",
    kind: "inference",
    note: "If it did, it would be limited by that organ's nature, as the eye is limited to colours.",
  },
  {
    claim: "What has an operation of its own, not shared with the body, has existence of its own.",
    kind: "premise",
    note: "A thing acts as it is. Heat does not warm by itself; the hot body does. If understanding belongs to the soul alone, the soul must subsist.",
    objection: "Could the soul depend on the brain for its materials, images, even if understanding itself is not bodily? Aquinas accepts this, which is why the separated soul is incomplete.",
  },
  {
    claim: "So the human soul is subsistent, and can survive the death of the body.",
    kind: "conclusion",
    note: "Yet it remains the form of a body, and is not a complete human being on its own. Aquinas says: my soul is not I.",
  },
];

export const lesson: LessonContent = {
  id: "p6.4.3",
  minutes: 85,
  links: {
    revisits: ["p4.5.5", "p4.3.2", "p6.2.2"],
    foreshadows: ["p6.4.4", "p7.1.4", "p1.2.1"],
  },

  puzzle: (
    <>
      <p>
        Plato taught that a human being is a soul using a body, as a sailor uses a ship. Aristotle taught that the soul is
        the form of a living body, as the shape of a statue is the form of the bronze, and seemed to imply that the soul
        dies with the body. Christian faith taught that the soul survives death, and that the body will rise again. Aquinas
        wanted Aristotle&rsquo;s unity of soul and body and the soul&rsquo;s survival. Can one have both?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Aquinas&rsquo;s argument that the human soul has an operation of its own, and so can exist without
        the body. Challenge the steps you doubt.
      </p>
      <ArgumentStepViz steps={STEPS} title="The intellect and the survival of the soul" />
    </>
  ),

  theory: (
    <>
      <Definition title="the soul as form">
        <p>
          Following Aristotle&rsquo;s <strong>hylomorphism</strong>, Aquinas holds that every material substance is a
          compound of <strong>matter</strong> and <strong>form</strong>. The soul is the form of a living body: what makes
          this matter a living, unified human being rather than a heap of chemicals. Plants have nutritive souls, animals
          sensitive souls, humans rational souls. There is only one soul in each human, which does all three jobs. So a
          human is not a soul plus a body, but one thing, an ensouled body.
        </p>
      </Definition>

      <Definition title="a subsistent form">
        <p>
          Most forms cannot exist apart from matter: the shape of a statue perishes when the bronze is melted. But the
          human soul, Aquinas argues, has one operation, understanding, that is not carried out by any bodily organ. A form
          with an operation of its own can exist on its own. So the human soul is unusual: it is the form of a body, yet{" "}
          <strong>subsistent</strong>, able to survive death.
        </p>
      </Definition>

      <Example title="my soul is not I">
        <p>
          After death, Aquinas says, the separated soul exists, but it is not a complete human being. It is in an
          unnatural state, lacking the body it is meant to inform, and it can no longer learn through the senses. Commenting
          on Paul, he wrote that &ldquo;my soul is not I&rdquo;: if only souls were saved, no human being would be. This is
          why the resurrection of the body matters to his view, and why it differs from Plato&rsquo;s.
        </p>
      </Example>

      <Remark title="assessment">
        <p>
          Aquinas&rsquo;s view sits between Plato&rsquo;s dualism and materialism. Unlike Descartes later, he does not face
          the problem of how two separate substances interact, since soul and body make one substance. But he faces
          others. Modern neuroscience shows that thinking depends closely on the brain, though Aquinas agreed that we
          cannot think without images, which need bodily organs. And it is hard to see how a form, which is the form of
          something, can exist with nothing to inform. Hylomorphism has had a revival in recent philosophy of mind.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "form",
      rung: "check",
      prompt: <p>For Aquinas, what is the soul?</p>,
      answer: {
        kind: "choice",
        options: [
          "A separate substance that uses the body like a sailor uses a ship.",
          "The form of a living body, which makes it a unified living thing.",
          "A part of the brain.",
          "An illusion.",
        ],
        correct: [1],
      },
    },
    {
      key: "one",
      rung: "check",
      prompt: <p>How many souls does a human being have, according to Aquinas?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "tongue",
      rung: "apply",
      prompt: <p>What is the point of Aquinas&rsquo;s example of the sick person&rsquo;s bitter tongue?</p>,
      answer: {
        kind: "choice",
        options: [
          "That illness affects thought.",
          "That a knower filled with one nature cannot receive others clearly, so the intellect, which can know all bodies, is not a body.",
          "That taste is unreliable.",
          "That the soul is bitter.",
        ],
        correct: [1],
      },
    },
    {
      key: "statue",
      rung: "apply",
      prompt: <p>How does the human soul differ from the shape of a bronze statue, on Aquinas&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is not a form at all.",
          "It has an operation of its own, understanding, so it can exist after the body perishes.",
          "It is made of bronze.",
          "It has no relation to matter.",
        ],
        correct: [1],
      },
    },
    {
      key: "notI",
      rung: "apply",
      prompt: <p>Why does Aquinas say &ldquo;my soul is not I&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because he denied the soul exists.",
          "Because a human being is a soul and body together, so a separated soul is not a complete human.",
          "Because the soul belongs to God.",
          "Because the self is an illusion.",
        ],
        correct: [1],
      },
    },
    {
      key: "brain",
      rung: "prove",
      prompt: (
        <p>
          Does modern neuroscience refute Aquinas&rsquo;s claim that understanding is not the act of a bodily organ? Argue
          for your answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes the evidence that thought depends on the brain, and Aquinas's own admission that we cannot think without images, which need organs.",
          "Reaches a reasoned view on whether dependence shows that understanding is itself bodily.",
        ],
      },
    },
    {
      key: "compare",
      rung: "stretch",
      prompt: (
        <p>
          Compare Aquinas&rsquo;s view of soul and body with Plato&rsquo;s and with Descartes&rsquo;s. Which problems does it
          avoid, and which new ones does it face?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Contrasts the views: for Plato and Descartes the person is essentially the soul, for Aquinas the soul and body form one substance.",
          "Names a problem avoided, such as interaction between two substances, and a problem faced, such as how a form can exist without matter.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Aquinas's view of the soul as the form of the body, his argument that the intellect is not a bodily organ, why the soul can survive death, and why he says my soul is not I.",

  glimpse: (
    <p>
      The next lesson turns to Aquinas&rsquo;s ethics and politics: natural law. Descartes&rsquo;s rival picture of the
      mind comes in the early modern course.
    </p>
  ),
};
