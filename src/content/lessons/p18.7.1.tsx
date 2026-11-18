import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["descriptive", "revisionary"];
const ITEMS: SortItem[] = [
  { text: "Aristotle’s account of substances as the primary beings", cat: "descriptive", why: "Strawson names Aristotle as a descriptive metaphysician: he articulates the scheme we already use." },
  { text: "Kant’s analysis of the conditions of any experience of objects", cat: "descriptive", why: "Kant is Strawson’s other model: the necessary structure of our thought about the world." },
  { text: "Descartes’s claim that minds and bodies are two wholly distinct substances", cat: "revisionary", why: "Strawson counts Descartes as revisionary: he proposes a better structure than the one we use." },
  { text: "Leibniz’s monads, windowless and without spatial relations", cat: "revisionary", why: "A radical replacement for the ordinary scheme of interacting bodies in space." },
  { text: "Berkeley’s claim that physical objects are collections of ideas", cat: "revisionary", why: "It tells us that our ordinary conception of objects is mistaken and must be revised." },
  { text: "Material bodies are the basic particulars for identification.", cat: "descriptive", why: "Strawson’s own thesis in Individuals, drawn from how we actually identify and reidentify things." },
  { text: "Persons are basic: both mental and physical predicates apply to one and the same thing.", cat: "descriptive", why: "Strawson’s concept of a person, which he argues our scheme takes as primitive." },
  { text: "Only events, not enduring things, really exist.", cat: "revisionary", why: "An event ontology would replace our scheme of enduring objects, so it is revisionary." },
];

export const lesson: LessonContent = {
  id: "p18.7.1",
  minutes: 80,
  links: {
    revisits: ["p18.6.3", "p18.5.3", "p11.5.1"],
    foreshadows: ["p18.7.2", "p18.7.3", "p27.5.1"],
  },

  puzzle: (
    <>
      <p>
        The logical positivists declared metaphysics meaningless, and ordinary language philosophers studied words, not the
        world. Yet in 1959 an Oxford philosopher published a book of metaphysics, about bodies, persons and the structure of
        our thought. What kind of metaphysics could survive those attacks?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each view by whether it describes our conceptual scheme or proposes to revise it.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Descriptive or revisionary?" />
    </>
  ),

  theory: (
    <>
      <Definition title="descriptive and revisionary metaphysics">
        <p>
          In <em>Individuals</em> (1959), P. F. Strawson distinguished <strong>descriptive</strong> metaphysics, which
          &ldquo;is content to describe the actual structure of our thought about the world&rdquo;, from{" "}
          <strong>revisionary</strong> metaphysics, which &ldquo;is concerned to produce a better structure&rdquo;. Descriptive
          metaphysics differs from ordinary conceptual analysis in its generality: it seeks the most general features of our
          conceptual scheme, which do not change with the history of thought.
        </p>
      </Definition>

      <Example title="basic particulars">
        <p>
          To talk about particular things, a speaker must enable the hearer to identify which one is meant, and we must be able
          to reidentify things over time. Strawson argued that this depends on a single spatio-temporal framework, and that
          material bodies, which occupy it and endure, are therefore the <strong>basic particulars</strong>: other particulars,
          such as events or private experiences, are identified through them, not the other way round.
        </p>
      </Example>

      <Definition title="persons">
        <p>
          The concept of a <strong>person</strong> is primitive: a type of entity to which both states of consciousness and
          corporeal characteristics apply. Against Cartesian dualism, Strawson argued that one can ascribe experiences to
          oneself only if one can ascribe them to others, which requires identifying others as bodily beings. Against the
          &ldquo;no-ownership&rdquo; view, he argued that experiences must be someone&rsquo;s.
        </p>
      </Definition>

      <Remark title="the sound world">
        <p>
          Strawson asked whether a being whose experience was purely auditory could have a concept of objective particulars.
          He suggested a &ldquo;master sound&rdquo; of varying pitch might supply an analogue of spatial position. The thought
          experiment tests which features of our scheme are necessary, and it began a revival of metaphysics within analytic
          philosophy, followed soon by Kripke and Lewis.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "desc",
      rung: "check",
      prompt: <p>What does descriptive metaphysics aim to do, according to Strawson?</p>,
      answer: {
        kind: "choice",
        options: [
          "Describe the most general features of the conceptual scheme we actually use.",
          "Replace our scheme with a better one.",
          "Show that metaphysics is meaningless.",
          "Analyse individual words one at a time.",
        ],
        correct: [0],
      },
    },
    {
      key: "basic",
      rung: "check",
      prompt: <p>Which particulars did Strawson argue are basic for identification?</p>,
      answer: { kind: "choice", options: ["Material bodies", "Sense data", "Events", "Numbers"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the views are revisionary?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "person",
      rung: "apply",
      prompt: <p>What is Strawson&rsquo;s argument against the Cartesian view of the self?</p>,
      answer: {
        kind: "choice",
        options: [
          "Ascribing experiences to oneself requires being able to ascribe them to others, identified as bodily beings.",
          "Minds do not exist.",
          "Descartes made a logical error in the cogito.",
          "Bodies are collections of ideas.",
        ],
        correct: [0],
      },
    },
    {
      key: "sound",
      rung: "apply",
      prompt: <p>What is the purpose of Strawson&rsquo;s purely auditory world?</p>,
      answer: {
        kind: "choice",
        options: [
          "To test whether thought about objective particulars requires space, or something that plays its role.",
          "To show that music is the basis of language.",
          "To prove that sounds are material bodies.",
          "To refute verificationism.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is descriptive metaphysics worth doing, if it only describes how we happen to think? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Strawson’s distinction and his claim that the most general features of our scheme are not historically variable.",
          "Considers an objection, such as that describing our scheme says nothing about reality, or that the scheme does change.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could a revisionary metaphysics, such as an ontology of events only, ever be justified against the descriptive scheme?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why the descriptive scheme seems to have priority, since revisions are stated within it.",
          "Considers a reason to revise, such as fit with physics.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Saul Kripke: rigid designation, necessary truths known a posteriori, and the return of essences.
    </p>
  ),
};
