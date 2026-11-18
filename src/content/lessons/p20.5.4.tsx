import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const U = "ultimately real (paramattha)";
const C = "conventional (paññatti)";
const CATS = [U, C];
const ITEMS: SortItem[] = [
  { text: "A chariot", cat: C, why: "A name for parts in a certain arrangement; analysis finds only the parts." },
  { text: "A single moment of painful feeling", cat: U, why: "Feeling (vedanā) is one of the mental factors, a dharma in its own right." },
  { text: "Devadatta, a person", cat: C, why: "A designation for a stream of aggregates, not a further thing." },
  { text: "The hardness of the earth element at an instant", cat: U, why: "Matter is analysed into elements such as solidity; these count as ultimate." },
  { text: "A forest", cat: C, why: "A collection of trees, themselves collections; conventional twice over." },
  { text: "A moment of visual consciousness", cat: U, why: "Consciousness (citta) is the first of the four kinds of ultimate reality." },
  { text: "Nibbāna", cat: U, why: "The one unconditioned dharma, the fourth kind of ultimate reality." },
];

export const lesson: LessonContent = {
  id: "p20.5.4",
  minutes: 85,
  links: {
    revisits: ["p20.5.2", "p20.5.3", "p20.2.3"],
    foreshadows: ["p20.5.5", "p20.5.6", "p20.5.7"],
  },

  puzzle: (
    <>
      <p>
        A chemist says a table is &ldquo;really&rdquo; a cloud of atoms, a physicist that atoms are &ldquo;really&rdquo;
        fields. Each analysis seems to take us closer to what truly exists. Must analysis end somewhere, in things that are
        not made of anything else? And if so, what are they?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these as an Abhidharma teacher would: ultimately real, or a convenient name for something composite?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Ultimately real, or conventional?" />
    </>
  ),

  theory: (
    <>
      <Definition title="dharmas">
        <p>
          <strong>Abhidharma</strong>, &ldquo;higher teaching&rdquo;, is the systematic analysis of experience into{" "}
          <strong>dharmas</strong>: momentary, irreducible events, each with its characteristic mark. The Theravāda
          Abhidhamma lists four kinds of ultimate reality: consciousness (citta), 52 mental factors (cetasika) such as feeling
          and intention, 28 kinds of matter (rūpa), and nibbāna, the one unconditioned dharma.
        </p>
      </Definition>

      <Example title="the two truths">
        <p>
          Statements about persons, chariots and forests are <strong>conventionally true</strong> (sammuti): useful, and true
          within ordinary practice. Statements about dharmas are <strong>ultimately true</strong> (paramattha): they describe
          what survives analysis. The Buddha spoke of persons out of compassion and convenience; Abhidharma states the same
          teaching without them.
        </p>
      </Example>

      <Definition title="momentariness and own-nature">
        <p>
          Dharmas last only a moment; what seems to endure is a rapid series, like a flame. The Sarvāstivāda school held that
          each dharma has its own-nature (<strong>svabhāva</strong>), which exists in past, present and future (&ldquo;all
          exists&rdquo;), and only its activity is present. This explained memory and karma across time. The Sautrāntikas
          objected that only the present moment exists, and that past and future are mere names.
        </p>
      </Definition>

      <Remark title="a Buddhist atomism">
        <p>
          The project resembles the Vaiśeṣika list of categories, but with a crucial difference: there are no enduring
          substances, only events. Abhidharma also served meditation: to see experience as a flow of dharmas is to stop
          taking it as the property of a self. The idea of svabhāva became the target of Nāgārjuna&rsquo;s Madhyamaka, which
          argued that if things arise dependently, nothing has a nature of its own.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dharma",
      rung: "check",
      prompt: <p>What is a dharma in Abhidharma?</p>,
      answer: { kind: "choice", options: ["A momentary, irreducible event that survives analysis", "A moral duty", "A god", "An enduring substance"], correct: [0] },
    },
    {
      key: "two",
      rung: "check",
      prompt: <p>What is the status of the statement &ldquo;Devadatta is walking&rdquo;?</p>,
      answer: { kind: "choice", options: ["Conventionally true", "Ultimately true", "False", "Meaningless"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the seven items are ultimately real?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "four",
      rung: "apply",
      prompt: <p>Which is the only unconditioned dharma in the Theravāda list?</p>,
      answer: { kind: "choice", options: ["Nibbāna", "Consciousness", "Space", "The self"], correct: [0] },
    },
    {
      key: "sarva",
      rung: "apply",
      prompt: <p>What did the Sarvāstivādins claim?</p>,
      answer: {
        kind: "choice",
        options: ["Dharmas exist in past, present and future, with only their activity present", "Only the present exists", "Nothing exists", "Persons are ultimately real"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Must analysis end in ultimate constituents that are not made of anything else? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives a reason for an end point, such as that composites depend on what composes them.",
          "Considers the alternative, such as endless divisibility or Madhyamaka’s denial of own-nature.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The Sarvāstivādins said past dharmas still exist, to explain memory and karma. Is that a good reason to believe in the existence of the past?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why memory and karma seem to require the past to exist in some way.",
          "Considers the Sautrāntika reply, such as that present traces or seeds are enough.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Abhidharma found ultimate reality in dharmas with natures of their own. Nāgārjuna, in the second century, argued that
        this was a mistake: anything that arises dependently can have no own-nature, and so is empty, including the dharmas
        and even emptiness itself.
      </p>
      <p>
        Next, Nāgārjuna and emptiness: the Madhyamaka arguments against own-nature, the tetralemma, the two truths reread,
        and the charge that emptiness is nihilism.
      </p>
    </>
  ),
};
