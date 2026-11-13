import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["true or false", "no truth value"];
const ITEMS: SortItem[] = [
  {
    text: "“The present King of France is bald”, said in 1950.",
    cat: "no truth value",
    why: "Nothing answers to the description, so the presupposition fails and the question of truth does not arise.",
  },
  {
    text: "“The King of France is wise”, said in 1670.",
    cat: "true or false",
    why: "Said under Louis XIV, the same sentence makes a claim about a real man, true or false. The sentence is not true or false; uses of it are.",
  },
  {
    text: "“All John’s children are asleep”, when John has no children.",
    cat: "no truth value",
    why: "Strawson’s own example: the existence of John’s children is presupposed, not asserted.",
  },
  {
    text: "“The table is covered with books”, said in a room with one table.",
    cat: "true or false",
    why: "There are many tables in the world, but the context fixes which one is meant. For Strawson, reference is done by speakers in context.",
  },
  {
    text: "“The largest prime number is odd.”",
    cat: "no truth value",
    why: "There is no largest prime, so the description refers to nothing and the statement lacks a truth value.",
  },
  {
    text: "“The tallest mountain on Earth is in Asia.”",
    cat: "true or false",
    why: "The presupposition holds, since Everest exists and is uniquely tallest, so the statement is simply true.",
  },
];

export const lesson: LessonContent = {
  id: "p15.1.3",
  minutes: 75,
  links: {
    revisits: ["p15.1.2", "p15.1.1", "p2.2.2"],
    foreshadows: ["p15.4.3", "p15.5.1", "p18.7.1"],
  },

  puzzle: (
    <>
      <p>
        If someone says to you, quite seriously, &ldquo;The present King of France is wise&rdquo;, would you reply
        &ldquo;That&rsquo;s false&rdquo;? Peter Strawson thought not. You would say there is no King of France, so the question of
        whether he is wise does not arise. Was Russell wrong about what such a sentence says?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>For Strawson, sort each use of a sentence by whether it is true or false, or fails to get a truth value at all.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="True or false, or no truth value, for Strawson?" />
    </>
  ),

  theory: (
    <>
      <Definition title="presupposition">
        <p>
          In &ldquo;On Referring&rdquo; (1950), Strawson argued that a speaker who uses &ldquo;the F&rdquo; does not assert that
          there is exactly one F. They <strong>presuppose</strong> it. A statement presupposes p when its having a truth value
          at all requires that p be true. If the presupposition fails, the statement is neither true nor false: there is a{" "}
          <strong>truth-value gap</strong>.
        </p>
      </Definition>

      <Example title="sentences and their uses">
        <p>
          Strawson distinguished a sentence, its use on an occasion, and its utterance. &ldquo;The King of France is wise&rdquo;
          was used to say something true or false under Louis XIV and is used to say nothing true or false now, yet the sentence
          has the same meaning throughout. Meaning belongs to sentences, as rules for their use; reference and truth belong to
          uses. Russell, he said, confused the two.
        </p>
      </Example>

      <Remark title="Russell&rsquo;s reply and later work">
        <p>
          Russell answered that Strawson was describing ordinary usage, not logic, and that a gap gives up bivalence for little
          gain. Strawson himself later noticed that &ldquo;The exhibition was visited by the King of France&rdquo; sounds simply
          false, so intuitions depend on what the sentence is about. Keith Donnellan added that descriptions have two uses: an{" "}
          <strong>attributive</strong> use, about whoever is the F, and a <strong>referential</strong> use, picking out someone
          even if they are not in fact the F, as in &ldquo;The man drinking a martini is a philosopher&rdquo; said of a man whose
          glass holds water.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "presup",
      rung: "check",
      prompt: <p>For Strawson, what is the status of &ldquo;There is a King of France&rdquo; when someone says &ldquo;The King of France is wise&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: ["It is presupposed, not asserted.", "It is part of what is asserted.", "It is irrelevant.", "It is implied to be false."],
        correct: [0],
      },
    },
    {
      key: "gap",
      rung: "check",
      prompt: <p>What truth value does Strawson give to &ldquo;The present King of France is bald&rdquo; today?</p>,
      answer: { kind: "choice", options: ["Neither true nor false", "False", "True", "Both true and false"], correct: [0] },
    },
    {
      key: "use",
      rung: "apply",
      prompt: <p>Why did Strawson say that sentences are not themselves true or false?</p>,
      answer: {
        kind: "choice",
        options: [
          "The same sentence can be used on different occasions to say something true, something false, or nothing true or false.",
          "Sentences are meaningless.",
          "Only beliefs can be true.",
          "Truth is relative to the listener.",
        ],
        correct: [0],
      },
    },
    {
      key: "table",
      rung: "apply",
      prompt: <p>How does Strawson handle &ldquo;The table is covered with books&rdquo;, given that there are many tables?</p>,
      answer: {
        kind: "choice",
        options: [
          "The speaker uses the description in a context that fixes which table is meant.",
          "The sentence is false, since there is more than one table.",
          "It has no truth value.",
          "It refers to the largest table.",
        ],
        correct: [0],
      },
    },
    {
      key: "donnellan",
      rung: "apply",
      prompt: <p>Someone says &ldquo;The man drinking a martini is a philosopher&rdquo; of a man drinking water. On Donnellan&rsquo;s referential use, what have they talked about?</p>,
      answer: {
        kind: "choice",
        options: [
          "The man they had in mind, even though he is not drinking a martini.",
          "Whoever is in fact drinking a martini.",
          "Nobody.",
          "Every philosopher.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Who is right about the present King of France, Russell or Strawson? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Russell’s falsity verdict and Strawson’s truth-value gap.",
          "Gives a consideration on one side, such as ordinary intuitions, bivalence, or the exhibition example.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does Donnellan&rsquo;s referential use show that Russell&rsquo;s theory is wrong, or only that speakers can communicate more than they literally say?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the attributive and referential uses with an example.",
          "Considers the reply that the referential use is a matter of what the speaker means, not of semantics.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Strawson's objection to Russell, presupposition and truth-value gaps, the distinction between a sentence and its use, and Donnellan's two uses of descriptions.",

  glimpse: (
    <p>
      Grice later separated what is said from what is implied, which bears on presupposition and on Donnellan&rsquo;s cases.
      Indexicals show how context fixes reference, and Strawson went on to describe the basic structure of our thought about the
      world.
    </p>
  ),
};
