import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["eternal law", "natural law", "human law", "divine law"];
const ITEMS: SortItem[] = [
  {
    text: "The plan in God's mind by which the whole universe is governed.",
    cat: "eternal law",
    why: "The eternal law is God's reason directing all things to their ends. Every other law shares in it.",
  },
  {
    text: "Good is to be done and pursued, and evil avoided.",
    cat: "natural law",
    why: "The first precept of the natural law, known to everyone, as the principle of non-contradiction is in theoretical reason.",
  },
  {
    text: "Preserve human life; raise and educate children; seek the truth; live in society.",
    cat: "natural law",
    why: "These follow the natural inclinations that humans share with all things, with animals, and as rational beings.",
  },
  {
    text: "Drive on the left side of the road.",
    cat: "human law",
    why: "Human law fixes details the natural law leaves open. That one must not endanger others is natural law; which side to drive on is a human determination.",
  },
  {
    text: "Murder is to be punished.",
    cat: "human law",
    why: "That murder is wrong is natural law. That it is punished, and how, is laid down by human law as a conclusion from it.",
  },
  {
    text: "The commandments revealed in scripture, such as those of the Old and New Testaments.",
    cat: "divine law",
    why: "Divine law is revealed, to direct humans to their supernatural end, which reason alone cannot reach, and to judge inner acts that human law cannot.",
  },
];

export const lesson: LessonContent = {
  id: "p6.4.4",
  minutes: 80,
  links: {
    revisits: ["p6.4.3", "p4.6.1", "p5.4.1"],
    foreshadows: ["p7.3.5", "p14.1.1", "p13.3.4"],
  },

  puzzle: (
    <>
      <p>
        In 1963, Martin Luther King Jr wrote from a jail in Birmingham, Alabama, defending his decision to break the
        segregation laws. How can one urge people to obey some laws and disobey others? He answered with Aquinas: an unjust
        law is no law at all, and a just law is one that squares with the moral law. A law that degrades human personality
        is unjust. But what is this higher law, and how do we know it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Aquinas distinguished four kinds of law. Sort each example into its kind.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which kind of law, in Aquinas's scheme?" />
    </>
  ),

  theory: (
    <>
      <Definition title="law and its kinds">
        <p>
          Aquinas defines a <strong>law</strong> as an ordinance of reason for the common good, made by whoever has care of
          the community, and promulgated. The <strong>eternal law</strong> is God&rsquo;s plan for the whole universe. The{" "}
          <strong>natural law</strong> is the rational creature&rsquo;s share in the eternal law: what human reason can know
          of how to live. <strong>Human law</strong> applies the natural law to particular circumstances.{" "}
          <strong>Divine law</strong> is revealed in scripture.
        </p>
      </Definition>

      <Definition title="the precepts of the natural law">
        <p>
          The first precept is that good is to be done and pursued, and evil avoided. What counts as good is shown by our
          natural inclinations. Like all substances, we tend to preserve our being; like animals, to reproduce and raise
          offspring; as rational beings, to know the truth, especially about God, and to live in society. Whatever serves
          these goods belongs to the natural law, and whatever attacks them is against it. The first principles are the same
          for all and cannot be erased from human hearts, though their detailed conclusions can be obscured by passion,
          bad custom or bad upbringing.
        </p>
      </Definition>

      <Example title="unjust laws">
        <p>
          Human law derives its force from the natural law. A human law that conflicts with it is &ldquo;no longer a law
          but a perversion of law&rdquo;. Laws can be unjust by going against the common good, by exceeding the
          lawmaker&rsquo;s authority, or by imposing burdens unequally. Such laws do not bind in conscience, though Aquinas
          allows that one may sometimes obey them to avoid scandal or disturbance. Laws that command what is against divine
          law must never be obeyed.
        </p>
      </Example>

      <Remark title="legacy and criticism">
        <p>
          Natural law theory shaped later thought on human rights, international law and civil disobedience, from Grotius
          to King. Critics raise several problems. Hume&rsquo;s worry about deriving an ought from an is applies to moving
          from natural inclinations to moral precepts. Darwin made it harder to read purposes into nature. And appeals to
          what is natural have often been used to defend prejudice. Defenders reply that Aquinas&rsquo;s inclinations are
          known by practical reason, not read off biology, and that the theory itself condemns laws that degrade persons.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How does Aquinas define law?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whatever the ruler commands.",
          "An ordinance of reason for the common good, made by whoever has care of the community, and promulgated.",
          "A custom of the people.",
          "A command backed by force.",
        ],
        correct: [1],
      },
    },
    {
      key: "first",
      rung: "check",
      prompt: <p>What is the first precept of the natural law?</p>,
      answer: {
        kind: "choice",
        options: [
          "Obey the ruler.",
          "Good is to be done and pursued, and evil avoided.",
          "Maximise happiness.",
          "Act only on universalisable maxims.",
        ],
        correct: [1],
      },
    },
    {
      key: "incl",
      rung: "apply",
      prompt: <p>Which of these are among the natural inclinations Aquinas lists? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["To preserve one's life", "To know the truth about God", "To accumulate wealth", "To live in society"],
        correct: [0, 1, 3],
      },
    },
    {
      key: "unjust",
      rung: "apply",
      prompt: <p>What does Aquinas say about a human law that conflicts with the natural law?</p>,
      answer: {
        kind: "choice",
        options: [
          "It must always be obeyed.",
          "It is not truly a law but a perversion of law, and does not bind in conscience.",
          "It becomes natural law.",
          "It is valid if most people agree.",
        ],
        correct: [1],
      },
    },
    {
      key: "road",
      rung: "apply",
      prompt: <p>Why is the rule to drive on one side of the road a matter of human law rather than natural law?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it has nothing to do with the common good.",
          "Because the natural law requires safety but leaves open which side; human law fixes the detail.",
          "Because it is revealed.",
          "Because it is unjust.",
        ],
        correct: [1],
      },
    },
    {
      key: "king",
      rung: "prove",
      prompt: (
        <p>
          Using Aquinas&rsquo;s theory, explain how King could consistently urge obedience to some laws and disobedience to
          others. Is the position coherent?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that just laws bind because they agree with the natural law, while unjust laws are not true laws and do not bind in conscience.",
          "Assesses the coherence, perhaps noting King's acceptance of the penalty as respect for law itself.",
        ],
      },
    },
    {
      key: "isought",
      rung: "stretch",
      prompt: (
        <p>
          Does natural law theory illegitimately derive an ought from an is, by moving from what humans naturally tend to do
          to what they ought to do? Argue for an answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the objection, that facts about inclinations do not by themselves yield obligations.",
          "Considers a reply, such as that the first precept is a self-evident practical principle and inclinations show what is good rather than prove it, and reaches a view.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Aquinas's definition of law, his four kinds of law, the first precept of the natural law and the natural inclinations, and what he says about unjust laws.",

  glimpse: (
    <p>
      The next chapter follows the late medieval critics of Aquinas, Scotus and Ockham. Natural law returns in Locke and
      in modern debates about law and morality.
    </p>
  ),
};
