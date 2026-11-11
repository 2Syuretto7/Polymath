import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ThirdManViz } from "@/components/viz/ThirdManViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.4.2",
  minutes: 80,
  links: {
    revisits: ["p4.3.4", "p4.1.3", "p4.1.4"],
    foreshadows: ["p4.5.3", "p11.1.1", "p11.1.2"],
  },

  puzzle: (
    <>
      <p>
        Suppose all large things are large because they share in one Form, the Large itself. Plato often speaks as if the
        Large is itself large, the most perfectly large thing there is. Then consider the Large together with the large
        things. They are all large. By the same reasoning, shouldn&rsquo;t there be a further Form by which they are all
        large?
      </p>
      <p>
        In the <em>Parmenides</em>, Plato puts this objection, and several others, into the mouth of the great Eleatic
        himself, aimed at a young Socrates. Why would a philosopher attack his own most famous theory?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The objection is now called the <strong>third man</strong> argument, after Aristotle&rsquo;s name for a version
        about the Form of Man. It runs on three assumptions. Step through the regress, then drop each assumption in turn to
        see which ones it really needs.
      </p>
      <ThirdManViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the setting">
        <p>
          Parmenides, about 65, and Zeno, about 40, visit Athens, where a very young Socrates hears Zeno read his treatise.
          Zeno argues that if there are many things, they must be both like and unlike, which is impossible. Socrates
          replies with the Forms: a thing can share in both Likeness and Unlikeness, as he can be both one and many, being one
          man and having many parts. It would be astonishing only if Likeness itself turned out to be unlike. Parmenides
          admires the young man&rsquo;s eagerness and starts to question him.
        </p>
      </Definition>

      <Example title="the objections">
        <ol>
          <li>
            <strong>Which Forms?</strong> Socrates is sure there are Forms of Likeness, One, Just and Beautiful, unsure about
            Man, Fire and Water, and inclined to deny Forms of hair, mud and dirt. Parmenides says that when he is older he
            will not despise such things.
          </li>
          <li>
            <strong>The dilemma of participation.</strong> Does each thing share in the whole Form or in part of it? If the
            whole, the one Form is in many separate things and so is separate from itself. Socrates suggests it is like a day,
            which is in many places at once. Parmenides substitutes a sail spread over many people, and then each is covered
            by a different part, so the Form is divided. Then a thing would be large by a part of the Large smaller than
            the Large itself.
          </li>
          <li>
            <strong>The third man.</strong> The regress in the visualisation: each Form generates another, so, as Parmenides puts
            it, each Form will no longer be one but unlimited in number.
          </li>
          <li>
            <strong>Forms as thoughts.</strong> Perhaps each Form is a thought in the soul. But a thought must be a thought
            of something, one thing over many, and that thing is the Form again. Besides, things sharing in thoughts would
            all be thinking.
          </li>
          <li>
            <strong>Forms as patterns.</strong> Perhaps things share in Forms by resembling them, as copies resemble
            originals. But resemblance goes both ways: if the large thing is like the Large, the two share a character, and
            a further Form is needed again. A second regress.
          </li>
          <li>
            <strong>The greatest difficulty.</strong> If Forms are what they are in relation to each other, and things here
            in relation to each other, then Mastership itself is master of Slavery itself, not of us. Knowledge itself is of
            the Forms; our knowledge is of things here. So we cannot know the Forms, and the gods, who have knowledge itself,
            cannot know us.
          </li>
        </ol>
      </Example>

      <Remark title="Parmenides' verdict">
        <p>
          Yet Parmenides does not conclude that there are no Forms. If anyone denies them, he says, the mind will have
          nothing to fix on, and the power of discourse will be destroyed. Socrates&rsquo; trouble is that he has tried to
          define Forms too early, before training. The long second half of the dialogue is that training: a dense exercise
          deriving consequences from the hypotheses that the One is and that it is not.
        </p>
      </Remark>

      <Remark title="how to read the critique">
        <p>
          In 1954 Gregory Vlastos set out the third man with explicit premises, a version of the three in the
          visualisation, and argued that self-predication and non-identity cannot both be true: if the Large is large, and
          nothing is large by itself, then the Large is large by something other than itself. He thought Plato never saw
          this clearly. Others reply that self-predication was never meant literally: &ldquo;the Large is large&rdquo; may
          mean that being large is what the Large is, not that it has a size. Still others hold that the late dialogues
          quietly revise the theory, and some that Plato simply recorded objections he had not answered. The argument
          became a standard test for any theory of universals.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "who",
      rung: "check",
      prompt: <p>Who raises the objections to the Forms in the <em>Parmenides</em>?</p>,
      answer: {
        kind: "choice",
        options: ["Aristotle.", "Parmenides, against a young Socrates.", "Socrates, against Zeno.", "Theaetetus."],
        correct: [1],
      },
    },
    {
      key: "premises",
      rung: "check",
      prompt: <p>Which are premises of the third man argument as reconstructed in the visualisation? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["One over many.", "Self-predication.", "Non-identity.", "The soul is immortal."],
        correct: [0, 1, 2],
      },
    },
    {
      key: "drop",
      rung: "apply",
      prompt: (
        <p>
          A defender says the Large is not itself a large thing; it is what largeness is. Which premise does this reject?
        </p>
      ),
      answer: { kind: "choice", options: ["One over many.", "Self-predication.", "Non-identity.", "None."], correct: [1] },
    },
    {
      key: "sail",
      rung: "apply",
      prompt: <p>What is the point of Parmenides&rsquo; sail, in reply to Socrates&rsquo; day?</p>,
      answer: {
        kind: "choice",
        options: [
          "That Forms are made of cloth.",
          "That something spread over many things covers each with a different part, so the Form would be divided.",
          "That days are not real.",
          "That the Forms are in the sky.",
        ],
        correct: [1],
      },
    },
    {
      key: "greatest",
      rung: "apply",
      prompt: <p>What is the consequence of the &ldquo;greatest difficulty&rdquo;, if it succeeds?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the Forms do not exist.",
          "That we cannot know the Forms, and the gods cannot know our world.",
          "That there are infinitely many Forms of Large.",
          "That the soul is a Form.",
        ],
        correct: [1],
      },
    },
    {
      key: "regress",
      rung: "prove",
      prompt: (
        <p>
          State the third man argument in numbered steps, using the three premises, and show how an infinite regress
          follows. Then explain why the regress is a problem for the theory rather than a harmless curiosity.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the three premises clearly.",
          "Derives the first Form, then a second from self-predication and non-identity, and indicates the repetition.",
          "Explains the damage: the theory promised one Form for each character, and the regress produces infinitely many, or the explanation never finishes. Any reasoned answer earns full credit.",
        ],
      },
    },
    {
      key: "why",
      rung: "stretch",
      prompt: (
        <p>
          Why might Plato have written a dialogue attacking his own theory and then had Parmenides insist the Forms are
          still needed? Assess two readings: that Plato was revising the theory, and that he was showing how not to
          understand it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes the first reading, citing a feature such as the self-predication language of the middle dialogues.",
          "Describes the second reading, such as that the objections rely on treating Forms as things like their particulars.",
          "Weighs them using the text, for instance Parmenides' insistence that without Forms discourse is destroyed. Any thoughtful verdict earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the setting of the Parmenides, the third man argument and its three premises, the other objections to the Forms, and why Parmenides still says the Forms are needed.",

  glimpse: (
    <p>
      Aristotle reuses the third man against Plato and looks for forms inside things instead. Metaphysics revisits the
      question as the debate between realists, who accept universals, and nominalists, who do not.
    </p>
  ),
};
