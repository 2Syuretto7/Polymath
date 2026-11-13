import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EternityViz } from "@/components/viz/EternityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p6.1.3",
  minutes: 80,
  links: {
    revisits: ["p6.1.1", "p6.1.2", "p1.3.1"],
    foreshadows: ["p23.1.2", "p6.3.1", "p8.2.2"],
  },

  puzzle: (
    <>
      <p>
        In 524, Boethius sat in a prison in Pavia awaiting execution. He had been the most powerful official in the
        Ostrogothic kingdom of Italy, a translator of Aristotle, and a scholar of mathematics and music. Accused of
        treason, he wrote a book in which Lady Philosophy visits him in his cell and consoles him. The Consolation of
        Philosophy became one of the most read books of the Middle Ages. Near its end he asks a question that still has
        no agreed answer: if God already knows everything I will do, how can I be free to do otherwise?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Move the present moment along Boethius&rsquo;s life, as a knower in time sees it. Then switch to the eternal
        view, and compare what each can see.
      </p>
      <EternityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the problem of foreknowledge">
        <p>
          The argument runs like this. God knows everything, including what I will do tomorrow. Knowledge cannot be
          mistaken, so if God knows I will sit, I will sit. Then I cannot do otherwise than sit, and an act I cannot avoid
          is not free. But if our acts are not free, rewards and punishments are unjust, and prayer and hope are
          pointless. Either God does not know the future, or we are not free.
        </p>
      </Definition>

      <Definition title="eternity">
        <p>
          Lady Philosophy&rsquo;s answer turns on what God is. God is <strong>eternal</strong>, and eternity is, in
          Boethius&rsquo;s famous definition, &ldquo;the complete possession all at once of illimitable life&rdquo;. A
          being in time lives its life piece by piece, losing the past and not yet having the future. God does not. So
          God&rsquo;s knowledge is not really <em>fore</em>knowledge at all: God sees all of time as present, the way we
          see what is happening before our eyes.
        </p>
      </Definition>

      <Example title="seeing someone walk">
        <p>
          When you watch someone walking, you know that they are walking, and your knowledge cannot be wrong. Yet your
          seeing does not make them walk; they walk freely. God&rsquo;s eternal vision is like this, only it takes in
          every moment at once. Boethius adds a distinction. It is necessary that if God sees me sitting, I am sitting:
          this is <strong>conditional necessity</strong>, and it is harmless. It is not necessary that I sit, which would
          be <strong>simple necessity</strong>, of the kind by which the sun rises or all humans are mortal.
        </p>
      </Example>

      <Remark title="the knowledge depends on the knower">
        <p>
          Behind the answer lies a principle: things are known according to the capacity of the knower, not the nature of
          the thing known. The senses grasp a shape, imagination a picture, reason a universal, and intelligence, the
          divine way of knowing, sees everything in one simple glance. Critics have asked whether the idea of a timeless
          being that knows temporal events is coherent, and whether, since the future is fixed for God, it is any less
          fixed for us. Others, from Aquinas onwards, have found it the best answer available. The debate continues in the
          philosophy of religion.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How does Boethius define eternity?</p>,
      answer: {
        kind: "choice",
        options: [
          "Time that goes on for ever.",
          "The complete possession all at once of illimitable life.",
          "The time before creation.",
          "The life of the soul after death.",
        ],
        correct: [1],
      },
    },
    {
      key: "setting",
      rung: "check",
      prompt: <p>Where did Boethius write the Consolation of Philosophy?</p>,
      answer: {
        kind: "choice",
        options: ["In a monastery", "In prison, awaiting execution", "At the court in Constantinople", "In Athens"],
        correct: [1],
      },
    },
    {
      key: "fore",
      rung: "apply",
      prompt: <p>Why does Boethius say that God&rsquo;s knowledge is not strictly foreknowledge?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because God does not know the future.",
          "Because God, being eternal, sees all times as present rather than in advance.",
          "Because the future is unreal.",
          "Because God guesses.",
        ],
        correct: [1],
      },
    },
    {
      key: "cond",
      rung: "apply",
      prompt: <p>Which of these is a case of conditional necessity, in Boethius&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "All humans are mortal.",
          "If I see you walking, then you are walking.",
          "The sun rises.",
          "Two and two make four.",
        ],
        correct: [1],
      },
    },
    {
      key: "walk",
      rung: "apply",
      prompt: <p>What is the point of the example of watching someone walk?</p>,
      answer: {
        kind: "choice",
        options: [
          "That walking is good exercise.",
          "That certain knowledge of an act need not cause it or make it unfree.",
          "That sight is unreliable.",
          "That God does not see us.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Set out the argument that divine foreknowledge rules out human freedom, and explain how Boethius&rsquo;s idea of
          eternity is meant to answer it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the argument: God knows what I will do, knowledge cannot be wrong, so I cannot do otherwise.",
          "Explains the reply: God is outside time and sees all as present, so the knowledge does not come before the act or make it necessary, perhaps using the walking example or conditional necessity.",
        ],
      },
    },
    {
      key: "fixed",
      rung: "stretch",
      prompt: (
        <p>
          A critic says: even if God sees my future timelessly, it is already true that I will sit tomorrow, so I still
          cannot do otherwise. Does Boethius have a good reply?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the worry: the problem seems to come from the truth about the future, not from God's position in time.",
          "Considers a reply, such as conditional necessity, or the view that my future act makes the statement true and not the other way round, and reaches a view.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the problem of divine foreknowledge and human freedom, Boethius's idea of eternity, his example of watching someone walk, and the distinction between simple and conditional necessity.",

  glimpse: (
    <p>
      The next chapter follows philosophy into the Islamic world, where al-Farabi, Avicenna and others carried forward
      Greek thought. Anselm, later in this course, builds on Boethius, and the Philosophy of Religion course returns to
      foreknowledge.
    </p>
  ),
};
