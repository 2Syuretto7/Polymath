import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["reason against appetite", "spirit against appetite", "reason against spirit"];
const ITEMS: SortItem[] = [
  {
    text: "A thirsty man refuses a drink because he judges that it would harm him.",
    cat: "reason against appetite",
    why: "Plato's own first example. The thirst pulls one way; a calculation of what is best pulls the other.",
  },
  {
    text: "Leontius longs to look at the bodies of executed criminals, is angry with himself, and finally runs up and shouts at his eyes to look their fill.",
    cat: "spirit against appetite",
    why: "Plato's example. The anger is not a calculation; it is a sense of shame or indignation, siding with reason against the desire.",
  },
  {
    text: "Odysseus, enraged at his servants' treachery, strikes his breast and tells his heart to endure.",
    cat: "reason against spirit",
    why: "Plato quotes this from Homer to show that reason can restrain anger, so spirit is not the same as reason.",
  },
  {
    text: "You stop yourself snapping back at a rude colleague, because you can see it would make things worse.",
    cat: "reason against spirit",
    why: "The urge to hit back is spirited anger; seeing the consequences is reason.",
  },
  {
    text: "You feel disgusted with yourself for eating the whole packet of biscuits.",
    cat: "spirit against appetite",
    why: "Like Leontius, you are angry at your own appetite. The anger takes reason's side, after the event.",
  },
  {
    text: "You want a cigarette, but decide not to after reading about the risks.",
    cat: "reason against appetite",
    why: "A desire for a pleasure, overruled by a judgement of what is good for you overall.",
  },
];

export const lesson: LessonContent = {
  id: "p4.3.3",
  minutes: 80,
  links: {
    revisits: ["p4.2.1", "p4.2.4", "p1.6.1"],
    foreshadows: ["p4.3.5", "p4.6.1", "p14.1.1"],
  },

  puzzle: (
    <>
      <p>
        A shepherd named Gyges finds a ring that makes him invisible when he turns it on his finger. He uses it to enter
        the palace, seduce the queen, kill the king and take the throne. In Plato&rsquo;s <em>Republic</em>, Glaucon tells
        the story and asks: if you had such a ring, and could never be caught, would you still be just? If not, then
        justice is valuable only for its rewards and for avoiding punishment.
      </p>
      <p>
        Can anyone show that being just is good for the just person, even with the ring, even if no one ever finds out?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Plato&rsquo;s answer depends on a picture of the mind as having parts that can pull against each other: reason,
        which calculates what is best; spirit, the seat of anger, pride and shame; and appetite, the desires for food,
        drink, sex and money. He argues for the parts from cases of inner conflict. Sort these conflicts.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which two parts of the soul are in conflict in each case?" />
    </>
  ),

  theory: (
    <>
      <Example title="book 1: three views of justice">
        <ul>
          <li>
            <strong>Cephalus</strong>: justice is telling the truth and paying back what you owe. Socrates&rsquo;
            counterexample: you should not return a weapon to a friend who has gone mad.
          </li>
          <li>
            <strong>Polemarchus</strong>: justice is helping friends and harming enemies, refuted as you saw in the lesson
            on the elenchus.
          </li>
          <li>
            <strong>Thrasymachus</strong>: justice is the advantage of the stronger. Rulers make laws in their own
            interest and call obeying them &ldquo;just&rdquo;. Injustice, done on a large enough scale, pays better.
          </li>
        </ul>
      </Example>

      <Definition title="Glaucon's challenge">
        <p>
          Glaucon distinguishes goods valued for themselves, like harmless pleasures; for their consequences, like
          medicine; and for both, like health and sight. Most people, he says, think justice belongs in the second class: a
          compromise people agree to because they fear suffering injustice more than they enjoy doing it. He asks Socrates
          to show that justice belongs in the third class, by comparing a perfectly just person thought to be unjust with a
          perfectly unjust person thought to be just, and showing the first is better off.
        </p>
      </Definition>

      <Definition title="city and soul">
        <p>
          Socrates proposes to look for justice first in a city, where it is written in larger letters, and then in the
          individual. The ideal city has three classes: rulers, who must be wise; auxiliaries, the soldiers, who must be
          courageous; and producers. Justice in the city is each class doing its own work and not meddling in that of
          the others.
        </p>
      </Definition>

      <Definition title="the parts of the soul">
        <p>
          The argument rests on a principle: the same thing cannot do or undergo opposites in the same respect, in relation
          to the same thing, at the same time. When someone is both drawn to drink and held back from drinking, two
          different things in the soul must be at work. Using conflicts like the ones above, Socrates distinguishes
          reason, spirit and appetite.
        </p>
      </Definition>

      <Remark title="justice in the soul">
        <p>
          A person is just when each part of their soul does its own work: reason rules, with knowledge of what is good
          for the whole; spirit supports reason; and appetite is kept within bounds. Justice is then like health, a right
          order among the parts, and injustice like disease, a civil war in the soul. Since no one would choose to be
          diseased in exchange for any amount of wealth or power, the just person is better off, ring or no ring. Books 8
          and 9 develop this with portraits of unjust souls, ending with the tyrant, ruled by his appetites and the least
          happy of all.
        </p>
      </Remark>

      <Remark title="a gap?">
        <p>
          In 1963 David Sachs pointed out a possible gap. Glaucon asked about justice in the ordinary sense: not stealing,
          not breaking promises. Socrates answers about inner harmony. Does a harmonious soul always act justly in the
          ordinary sense, and does acting justly in the ordinary sense require a harmonious soul? Unless Plato can show
          that the two go together, he has praised something other than what Glaucon asked about.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "thrasy",
      rung: "check",
      prompt: <p>What does Thrasymachus say justice is?</p>,
      answer: {
        kind: "choice",
        options: [
          "Helping friends and harming enemies.",
          "The advantage of the stronger.",
          "Telling the truth and paying debts.",
          "Each part doing its own work.",
        ],
        correct: [1],
      },
    },
    {
      key: "parts",
      rung: "check",
      prompt: <p>Which are the three parts of the soul in the <em>Republic</em>? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["reason", "memory", "spirit", "appetite"], correct: [0, 2, 3] },
    },
    {
      key: "cephalus",
      rung: "apply",
      prompt: <p>What kind of objection is the case of returning a weapon to a friend who has gone mad?</p>,
      answer: {
        kind: "choice",
        options: [
          "A counterexample showing that paying back what you owe is not always just.",
          "A proof that justice is impossible.",
          "An example of the advantage of the stronger.",
          "An example of reason against spirit.",
        ],
        correct: [0],
      },
    },
    {
      key: "class",
      rung: "apply",
      prompt: <p>In which of Glaucon&rsquo;s classes of goods does Socrates want to place justice?</p>,
      answer: {
        kind: "choice",
        options: [
          "Good only for itself.",
          "Good only for its consequences.",
          "Good both for itself and for its consequences.",
          "Not a good at all.",
        ],
        correct: [2],
      },
    },
    {
      key: "principle",
      rung: "apply",
      prompt: <p>What does the principle of opposites let Socrates conclude from a case of inner conflict?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the person is irrational.",
          "That two different parts of the soul are at work.",
          "That the soul is immortal.",
          "That the desire will win.",
        ],
        correct: [1],
      },
    },
    {
      key: "division",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct in numbered steps the argument from the thirsty man who refuses to drink to the conclusion that
          reason and appetite are different parts of the soul. Then raise one objection to the principle of opposites as
          used here.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the principle of opposites and the case: the man is both drawn to drink and held back, at the same time and about the same drink.",
          "Concludes that the drawing and the holding back come from different parts, identified as appetite and reason.",
          "Raises an objection, for instance that one could be ambivalent as a whole, or that the argument would multiply parts endlessly. Any reasonable objection earns full credit.",
        ],
      },
    },
    {
      key: "gyges",
      rung: "stretch",
      prompt: (
        <p>
          Does Plato&rsquo;s account of justice as harmony in the soul answer Glaucon&rsquo;s challenge? Consider the gap
          that Sachs identified, and say whether a person with a harmonious soul could still use the ring of Gyges to do
          wrong.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States Glaucon's challenge and Plato's answer accurately.",
          "Explains the gap between ordinary justice and inner harmony.",
          "Argues whether the gap can be closed, for example by arguing that wrongdoing comes from appetite or spirit out of control. Any reasoned position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Glaucon's challenge and the ring of Gyges, the parts of the soul and how Plato argues for them, and his answer that justice is a kind of health of the soul.",

  glimpse: (
    <p>
      The <em>Republic</em> then asks what the rulers must know, which leads to the sun, the line and the cave. Aristotle
      grounds ethics in the function of a human being, and Political Philosophy revisits Glaucon&rsquo;s idea that justice
      is a compact made from fear, in Hobbes.
    </p>
  ),
};
