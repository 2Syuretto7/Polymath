import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["realism", "conceptualism", "nominalism"];
const ITEMS: SortItem[] = [
  {
    text: "Humanity is one real thing, wholly present in Socrates and wholly present in Plato at the same time.",
    cat: "realism",
    why: "This is the material essence realism of William of Champeaux: the universal is a real thing shared by individuals, which differ only by accidents.",
  },
  {
    text: "Universals are mere words, the breath of the voice. Only individual things exist.",
    cat: "nominalism",
    why: "Roscelin of Compiègne was reported to hold this view, that a universal is a flatus vocis, a puff of air.",
  },
  {
    text: "A universal is a general concept that the mind forms by attending to what individuals are like, leaving their differences aside.",
    cat: "conceptualism",
    why: "Conceptualism places universals in the mind, as concepts, but grounds them in real likenesses between things. Boethius's solution points this way.",
  },
  {
    text: "Redness exists in its own right, apart from any red thing, and red things are red by sharing in it.",
    cat: "realism",
    why: "This is Platonic realism: universals exist independently, as Forms.",
  },
  {
    text: "The word human is predicated of many things, but there is no thing, human, besides the individual humans.",
    cat: "nominalism",
    why: "Generality belongs only to words, or signs, not to anything in the world. Ockham later developed this view in detail.",
  },
  {
    text: "Socrates and Plato agree in being human, though this agreement is not itself some further thing.",
    cat: "conceptualism",
    why: "Abelard's view: there is a real status, being human, that grounds the general concept, but it is not a thing. Some call him a nominalist, some a conceptualist.",
  },
];

export const lesson: LessonContent = {
  id: "p6.3.2",
  minutes: 80,
  links: {
    revisits: ["p4.3.4", "p4.5.1", "p6.1.3"],
    foreshadows: ["p6.3.3", "p6.5.2", "p11.1.1"],
  },

  puzzle: (
    <>
      <p>
        Around the year 270, the Neoplatonist Porphyry wrote a short introduction to Aristotle&rsquo;s Categories. Near the
        start he raised three questions and declined to answer them, as too deep for a beginner. Do genera and species,
        such as animal and human, exist in reality, or only in the mind? If they exist, are they bodies or not? And are
        they separate from sensible things, or in them? Boethius translated the passage into Latin, and for six centuries
        it set medieval philosophers arguing.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each claim by the view of universals it expresses.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each claim: realism, conceptualism or nominalism." />
    </>
  ),

  theory: (
    <>
      <Definition title="the problem of universals">
        <p>
          A <strong>universal</strong> is what can be said of, or shared by, many things: humanity, redness, triangularity.
          A <strong>particular</strong> is an individual, such as Socrates. Many things seem to share features: Socrates
          and Plato are both human. The problem is to say what this sharing consists in. Does it require a real common
          thing, or is generality only in our words and thoughts?
        </p>
      </Definition>

      <Definition title="three answers">
        <p>
          <strong>Realism</strong> says universals exist outside the mind, either apart from things, as Plato&rsquo;s Forms,
          or in them, as Aristotle held. <strong>Nominalism</strong> says only particulars exist, and generality belongs to
          words. <strong>Conceptualism</strong>, often treated as a moderate nominalism, says universals are concepts in
          the mind, though grounded in real resemblances. Boethius suggested that the mind can consider in abstraction what
          does not exist in abstraction, as one can think of a line without a body, though no line exists without one.
        </p>
      </Definition>

      <Example title="a debate in Paris">
        <p>
          Around 1100, William of Champeaux taught in Paris that humanity is one and the same essence wholly present in
          each human. His student Peter Abelard objected: then the same thing would be in Socrates in Rome and in Plato in
          Athens at once. Worse, the one essence animal would be in a rational human and in an irrational donkey,
          so it would be both rational and irrational at once. William retreated to the view that humans
          share humanity not by identity but by indifference, being not different. Abelard attacked that too.
        </p>
      </Example>

      <Remark title="why it matters">
        <p>
          The question is not only abstract. If universals are real, science discovers natures; if they are only names, our
          classifications may reflect our interests. Theologians cared too: the doctrine of the Trinity, three persons in
          one God, seemed to need some account of how many can share one nature. The debate returned with Ockham, and lives
          on in modern metaphysics as the debate between realists and nominalists about properties.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "universal",
      rung: "check",
      prompt: <p>Which of these is a universal?</p>,
      answer: {
        kind: "choice",
        options: ["Socrates", "The Eiffel Tower", "Redness", "This particular apple"],
        correct: [2],
      },
    },
    {
      key: "porphyry",
      rung: "check",
      prompt: <p>Who first posed the three questions that began the medieval debate?</p>,
      answer: {
        kind: "choice",
        options: ["Anselm", "Porphyry, in his introduction to Aristotle's Categories", "Augustine", "Ockham"],
        correct: [1],
      },
    },
    {
      key: "nominal",
      rung: "apply",
      prompt: <p>What does a nominalist say about the universal human?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is a Form existing apart from humans.",
          "It is one essence wholly present in every human.",
          "Only individual humans exist; generality belongs to the word.",
          "It is a divine idea only.",
        ],
        correct: [2],
      },
    },
    {
      key: "william",
      rung: "apply",
      prompt: <p>What was Abelard&rsquo;s main objection to William of Champeaux&rsquo;s realism?</p>,
      answer: {
        kind: "choice",
        options: [
          "That universals are bodies.",
          "That one thing wholly present in many individuals would be in many places at once and have contrary properties.",
          "That Plato never existed.",
          "That words have no meaning.",
        ],
        correct: [1],
      },
    },
    {
      key: "boethius",
      rung: "apply",
      prompt: <p>How did Boethius suggest the mind can grasp universals without their existing apart?</p>,
      answer: {
        kind: "choice",
        options: [
          "By sensing them directly.",
          "By considering in abstraction what does not exist in abstraction, as one thinks of a line apart from a body.",
          "By remembering them from a past life.",
          "By inventing them freely.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          A nominalist must explain why Socrates and Plato are both called human, if there is no humanity they share. Give
          the best nominalist explanation you can, and say whether it succeeds.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a nominalist account, such as resemblance between individuals, or a common concept or word applied for a reason.",
          "Assesses it, for example by asking whether resemblance itself is a universal.",
        ],
      },
    },
    {
      key: "science",
      rung: "stretch",
      prompt: (
        <p>
          Does science need realism about universals? Consider natural kinds such as gold or electrons, and argue for an
          answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains why realism seems to help: laws of nature appear to concern kinds and properties, not just individuals.",
          "Considers a nominalist reply and reaches a reasoned view.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the problem of universals, Porphyry's questions, the realist, conceptualist and nominalist answers, and the debate between William of Champeaux and Abelard.",

  glimpse: (
    <p>
      The next lesson follows Abelard himself: his logic, his ethics of intention, and his turbulent life.
    </p>
  ),
};
