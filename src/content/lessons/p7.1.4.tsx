import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { LeibnizLawViz } from "@/components/viz/LeibnizLawViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.1.4",
  minutes: 80,
  links: {
    revisits: ["p7.1.2", "p7.1.3", "p1.2.1"],
    foreshadows: ["p7.1.5", "p12.1.1", "p12.5.3"],
  },

  puzzle: (
    <>
      <p>
        You stub your toe and feel pain; you decide to raise your hand and it rises. Mind and body seem as closely joined as
        anything could be. Yet in the Sixth Meditation Descartes argues that he is &ldquo;really distinct from my body, and
        can exist without it&rdquo;. How can anyone prove from an armchair that the mind is not the brain, and are his
        arguments any good?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Arguments for dualism usually point to a property the mind has and the body lacks. Test each candidate property:
        does it really show that they are two things?
      </p>
      <LeibnizLawViz />
    </>
  ),

  theory: (
    <>
      <Definition title="substance dualism">
        <p>
          A <strong>substance</strong>, for Descartes, is a thing that can exist on its own, needing nothing else but God.
          Each substance has one principal attribute, its essence. The essence of mind is <strong>thought</strong>; the
          essence of body is <strong>extension</strong> in length, breadth and depth. Shapes and motions are ways, or modes,
          of being extended; doubts and desires are modes of thinking. <strong>Substance dualism</strong> holds that
          minds and bodies are two different kinds of substance. The body, including the human body, is a machine running
          by mechanical laws; animals, Descartes thought, are only machines.
        </p>
      </Definition>

      <Example title="the real distinction">
        <p>
          The main argument runs: I can clearly and distinctly conceive of myself as a thinking thing that is not extended,
          and of body as an extended thing that does not think. Whatever I can clearly and distinctly conceive apart, God
          can make to exist apart. So mind and body can exist apart, and are therefore distinct. Arnauld objected with a
          triangle: someone could clearly conceive a right-angled triangle without knowing that the square on the
          hypotenuse equals the sum of the squares on the other sides, but the two cannot exist apart. Perhaps my conception
          of myself is likewise incomplete.
        </p>
      </Example>

      <Definition title="Leibniz's law and the masked man">
        <p>
          <strong>Leibniz&rsquo;s law</strong>, the indiscernibility of identicals, says that if x is y, whatever is true of
          x is true of y. In the Discourse Descartes seems to argue: I can doubt that my body exists, I cannot doubt that I
          exist, so I am not my body. This commits the <strong>masked man fallacy</strong>. Being doubted, known or
          believed is not a property of a thing in the required sense. Lois Lane believes that Superman can fly but not
          that Clark Kent can, though they are one person: one thing can be thought of in two ways. The Sixth Meditation adds an argument that
          avoids this: body is divisible, the mind is not, since it is one and the same mind that wills, senses and
          understands.
        </p>
      </Definition>

      <Remark title="the union and the legacy">
        <p>
          Descartes insisted that he is &ldquo;not merely present in my body as a sailor is present in a ship&rdquo;: a
          sailor sees damage to the ship, while I feel pain in my foot. Sensations, hunger and passions show that mind and
          body form a close union. How two such different substances could act on each other is the subject of the next
          lesson. The conceivability argument has a modern descendant, the zombie argument, which asks whether a being
          physically like us but without experience is conceivable, and so possible.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "essence",
      rung: "check",
      prompt: <p>What, for Descartes, is the essence of body?</p>,
      answer: { kind: "choice", options: ["Thought", "Extension", "Weight", "Colour"], correct: [1] },
    },
    {
      key: "masked",
      rung: "check",
      prompt: <p>What is the masked man fallacy?</p>,
      answer: {
        kind: "choice",
        options: [
          "Reasoning from a disguise to a crime.",
          "Applying Leibniz's law to what someone knows, believes or doubts about a thing, which can differ for one and the same thing described in two ways.",
          "Assuming that all men wear masks.",
          "Confusing a cause with its effect.",
        ],
        correct: [1],
      },
    },
    {
      key: "triangle",
      rung: "apply",
      prompt: <p>What does Arnauld&rsquo;s right-angled triangle show against the real distinction argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "That triangles are minds.",
          "That one can clearly conceive a thing without a property it necessarily has, so conceiving apart may not show that things can exist apart.",
          "That geometry is uncertain.",
          "That God cannot make triangles.",
        ],
        correct: [1],
      },
    },
    {
      key: "divide",
      rung: "apply",
      prompt: <p>Which property does the divisibility argument rely on?</p>,
      answer: {
        kind: "choice",
        options: [
          "Body is divisible into parts, but the mind is not, since the same whole mind wills, senses and understands.",
          "The mind can be divided into faculties.",
          "Bodies cannot be divided.",
          "Thought can be measured.",
        ],
        correct: [0],
      },
    },
    {
      key: "sailor",
      rung: "apply",
      prompt: (
        <p>
          Why does Descartes say he is not in his body merely as a sailor is in a ship?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Because the body can sink.",
          "Because he feels bodily damage as pain, rather than merely perceiving it, which shows a close union of mind and body.",
          "Because the mind steers the body by thought alone.",
          "Because sailors have no minds.",
        ],
        correct: [1],
      },
    },
    {
      key: "argument",
      rung: "prove",
      prompt: <p>Set out Descartes&rsquo;s conceivability argument for the real distinction, and identify the premise most open to doubt.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets out the steps: I clearly and distinctly conceive mind without body and body without mind; what I can so conceive apart, God can make apart; so they are distinct.",
          "Identifies a doubtful premise, such as the move from conceivability to possibility, or whether the conception of the mind is complete.",
        ],
      },
    },
    {
      key: "zombie",
      rung: "stretch",
      prompt: (
        <p>
          Is our ability to conceive of a mind without a body good evidence that a mind could exist without one? Argue
          briefly.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a reason for treating conceivability as evidence of possibility.",
          "Gives a reason against, such as Arnauld's triangle or examples like water and H₂O, where things seem conceivable apart but are not.",
          "Reaches a view. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Descartes's substance dualism says, his conceivability and divisibility arguments, the masked man fallacy, and the idea that mind and body form a close union.",

  glimpse: (
    <p>
      The next lesson presents Princess Elisabeth&rsquo;s challenge: how can an unextended mind move an extended body? The
      Philosophy of Mind course returns to dualism and to the zombie argument.
    </p>
  ),
};
