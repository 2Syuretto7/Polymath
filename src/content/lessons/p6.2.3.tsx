import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CottonFireViz } from "@/components/viz/CottonFireViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p6.2.3",
  minutes: 80,
  links: {
    revisits: ["p6.2.2", "p4.5.4", "p1.1.3"],
    foreshadows: ["p6.2.4", "p7.5.2", "p27.4.2"],
  },

  puzzle: (
    <>
      <p>
        In 1095, Abu Hamid al-Ghazali was the most celebrated teacher in Baghdad. Then, by his own account, a crisis struck:
        he lost the power of speech, could not eat, and left his post to wander for years as a Sufi. Before that he had
        written The Incoherence of the Philosophers, a book that turned the philosophers&rsquo; own tools against them.
        Among its claims is one that seems absurd at first: we have never seen fire burn anything.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Increase the number of times fire is seen touching cotton, and look at what is actually observed. Then compare the
        philosophers&rsquo; account with al-Ghazali&rsquo;s.
      </p>
      <CottonFireViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the incoherence of the philosophers">
        <p>
          Al-Ghazali did not reject philosophy wholesale. He accepted logic and mathematics, and studied the philosophers
          carefully enough to summarise their views fairly in an earlier book. His target was their metaphysics, and
          above all twenty theses held by al-Farabi and Avicenna. Three of them, he argued, were not just mistaken but
          contrary to Islam: that the world has no beginning in time, that God knows particulars only in a universal way,
          and that there is no bodily resurrection. His method was to show that their arguments did not prove what they
          claimed, by their own standards of demonstration.
        </p>
      </Definition>

      <Definition title="causation without necessity">
        <p>
          In the seventeenth discussion, al-Ghazali denies that there is a <strong>necessary connection</strong> between
          what we call a cause and its effect. Whenever cotton meets fire, it burns; but observation shows only that the
          burning occurs with the contact, not through it. The real agent is God, who creates the burning on the occasion
          of the contact. The regularity we see is a <strong>custom</strong> or habit that God follows, and that God could
          break. This view is called <strong>occasionalism</strong>.
        </p>
      </Definition>

      <Example title="miracles">
        <p>
          The point matters for miracles. The Quran tells of Abraham thrown into a fire that did not burn him. If fire burns
          by necessity, this is impossible, and the philosophers had to explain it away. If the link is only a custom,
          nothing contradictory has happened: God simply did not create the burning. Al-Ghazali allows that the world is
          orderly and that we may rely on its regularities; he denies only that they are necessary.
        </p>
      </Example>

      <Remark title="replies and echoes">
        <p>
          Averroes replied that to deny natural causes is to deny that things have natures, and so to destroy knowledge
          itself: if fire might do anything, we could not know what fire is. Al-Ghazali anticipated a version of this, and
          worried about a world where a book left at home might turn into a horse. About 650 years later, David Hume argued
          that we never observe necessary connection between cause and effect, only constant conjunction. But Hume took the
          idea of necessity to come from our own habit of expectation, not from God. Al-Ghazali&rsquo;s criticism of
          philosophy did not end it in the Islamic world, but it shaped how it was practised there.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "book",
      rung: "check",
      prompt: <p>What was the main aim of The Incoherence of the Philosophers?</p>,
      answer: {
        kind: "choice",
        options: [
          "To reject logic and mathematics.",
          "To show that the philosophers' metaphysical arguments fail by their own standards of proof.",
          "To translate Aristotle into Arabic.",
          "To defend the eternity of the world.",
        ],
        correct: [1],
      },
    },
    {
      key: "occasion",
      rung: "check",
      prompt: <p>On al-Ghazali&rsquo;s view, what makes cotton burn when fire touches it?</p>,
      answer: {
        kind: "choice",
        options: ["The fire's nature", "God, who creates the burning on the occasion of contact", "Chance", "The cotton's own choice"],
        correct: [1],
      },
    },
    {
      key: "observe",
      rung: "apply",
      prompt: <p>According to al-Ghazali, what does repeated observation of fire and burning show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That fire necessarily burns.",
          "Only that burning happens together with contact, not that it happens because of the fire.",
          "That God does not exist.",
          "That cotton is not flammable.",
        ],
        correct: [1],
      },
    },
    {
      key: "three",
      rung: "apply",
      prompt: (
        <p>Which theses did al-Ghazali hold were contrary to Islam, not merely mistaken? Choose all that apply.</p>
      ),
      answer: {
        kind: "choice",
        options: [
          "That the world has no beginning in time.",
          "That logic is a reliable tool.",
          "That God knows particulars only in a universal way.",
          "That there is no bodily resurrection.",
        ],
        correct: [0, 2, 3],
      },
    },
    {
      key: "hume",
      rung: "apply",
      prompt: <p>How does Hume&rsquo;s view of causation differ from al-Ghazali&rsquo;s?</p>,
      answer: {
        kind: "choice",
        options: [
          "Hume thought we do observe necessary connections.",
          "Both deny we observe necessity, but Hume traces the idea of necessity to our habit of expectation rather than to God.",
          "Hume thought God causes everything.",
          "There is no difference.",
        ],
        correct: [1],
      },
    },
    {
      key: "averroes",
      rung: "prove",
      prompt: (
        <p>
          Averroes objected that denying necessary causes destroys knowledge, since things would have no natures. Set out
          the objection and give al-Ghazali&rsquo;s best reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the objection: knowing what fire is involves knowing what it does; without necessity, there are no stable natures to know.",
          "Gives a reply, such as that God's custom is reliable, so knowledge of regularities is secure though not necessary.",
        ],
      },
    },
    {
      key: "science",
      rung: "stretch",
      prompt: (
        <p>
          Is occasionalism compatible with doing natural science? Argue for an answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that science studies regularities, which occasionalism accepts as God's reliable custom.",
          "Reaches a reasoned view, considering for instance whether science needs real causal powers or only laws.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what al-Ghazali argued in The Incoherence of the Philosophers, his view that there is no necessary connection between cause and effect, and how it bears on miracles and compares with Hume.",

  glimpse: (
    <p>
      The next lesson meets Averroes, who answered al-Ghazali with The Incoherence of the Incoherence. Hume&rsquo;s version
      of the argument comes in the early modern course.
    </p>
  ),
};
