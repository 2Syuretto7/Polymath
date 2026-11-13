import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["clearly about something", "debatable"];
const ITEMS: SortItem[] = [
  { text: "believing that the monsoon will be late", cat: "clearly about something", why: "A belief with a content, that the monsoon will be late, which may be true or false." },
  { text: "wanting a cup of chai", cat: "clearly about something", why: "A desire is directed at what is wanted, and is satisfied or not." },
  { text: "fearing the neighbour’s dog", cat: "clearly about something", why: "Fear has an object, here the dog." },
  { text: "seeing a banyan tree", cat: "clearly about something", why: "Perception represents the tree, and can be accurate or not." },
  { text: "a pain in the knee", cat: "debatable", why: "Representationalists say pain represents damage in the knee; others say it is a raw feeling with no content." },
  { text: "a vague, objectless anxiety", cat: "debatable", why: "It seems to be about nothing in particular, though some say it represents the world as threatening in general." },
  { text: "imagining a golden mountain", cat: "clearly about something", why: "It is about a golden mountain, though no such mountain exists. This is the puzzle of intentional inexistence." },
  { text: "feeling elated after a nap", cat: "debatable", why: "Moods seem to colour everything without being about anything specific." },
];

export const lesson: LessonContent = {
  id: "p12.6.1",
  minutes: 75,
  links: {
    revisits: ["p12.3.4", "p12.3.1", "p12.2.1"],
    foreshadows: ["p12.6.2", "p12.6.3", "p15.2.1"],
  },

  puzzle: (
    <>
      <p>
        You can think about Kanchenjunga, about next Tuesday, or about Sherlock Holmes, who never existed. A stone is not about
        anything. How can a state of a brain, a physical thing, be <em>about</em> something else, even something that does not
        exist?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each mental state by whether it is clearly about something.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Is this state clearly about something?" />
    </>
  ),

  theory: (
    <>
      <Definition title="intentionality and content">
        <p>
          <strong>Intentionality</strong> is the directedness or aboutness of mental states. Franz Brentano (1874) called it
          the mark of the mental and claimed that all and only mental phenomena have it. A state&rsquo;s{" "}
          <strong>content</strong> is what it represents, often given by a that-clause: the belief <em>that the monsoon will be
          late</em>. Contents have conditions of satisfaction: beliefs are true or false, desires fulfilled or not.
        </p>
      </Definition>

      <Example title="propositional attitudes">
        <p>
          Bertrand Russell called beliefs, desires, hopes and fears <strong>propositional attitudes</strong>: different
          attitudes to the same content. You can believe, hope or fear that it will rain. Folk psychology explains behaviour
          with them: she took an umbrella because she believed it would rain and wanted to stay dry.
        </p>
      </Example>

      <Remark title="two puzzles">
        <p>
          <strong>Intentional inexistence:</strong> we can think about things that do not exist, so intentionality cannot be a
          relation between a mind and an existing object in the ordinary way. <strong>Opacity:</strong> Lois Lane believes that
          Superman can fly but not that Clark Kent can, though they are the same person, so content is finer-grained than the
          things it is about.
        </p>
      </Remark>

      <Remark title="the naturalisation problem">
        <p>
          The computational theory of mind explains how symbols in the head can be processed according to their content. It
          does not by itself say what gives the symbols content. Saying how a physical state can be about something, in
          non-intentional terms, is the project of naturalising content, taken up two lessons ahead.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is intentionality?</p>,
      answer: {
        kind: "choice",
        options: ["Doing something on purpose.", "The aboutness or directedness of mental states.", "Having strong desires.", "Being conscious."],
        correct: [1],
      },
    },
    {
      key: "brentano",
      rung: "check",
      prompt: <p>What did Brentano claim about intentionality?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is an illusion.",
          "It is the mark of the mental: all and only mental phenomena have it.",
          "Only beliefs have it.",
          "It is a physical force.",
        ],
        correct: [1],
      },
    },
    {
      key: "attitude",
      rung: "apply",
      prompt: <p>&ldquo;Ravi hopes that the train is on time.&rdquo; What is the attitude here, and what is the content?</p>,
      answer: {
        kind: "choice",
        options: [
          "Attitude: hope. Content: that the train is on time.",
          "Attitude: the train. Content: hope.",
          "Attitude: Ravi. Content: the train.",
          "There is no content.",
        ],
        correct: [0],
      },
    },
    {
      key: "inexist",
      rung: "apply",
      prompt: <p>Why is thinking about Sherlock Holmes a puzzle for intentionality?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because Holmes is fictional, so the thought cannot be an ordinary relation to an existing object.",
          "Because thoughts about detectives are illegal.",
          "Because no one thinks about Holmes.",
          "Because Holmes is a physical object.",
        ],
        correct: [0],
      },
    },
    {
      key: "opaque",
      rung: "apply",
      prompt: <p>Lois believes Superman can fly but not that Clark Kent can. What does this show?</p>,
      answer: {
        kind: "choice",
        options: [
          "Lois is irrational.",
          "Belief contents are finer-grained than the objects they are about.",
          "Superman and Clark Kent are different people.",
          "Beliefs have no content.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is intentionality the mark of the mental? Consider pains and moods. Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Brentano’s thesis.",
          "Considers pains or moods as counterexamples and a representationalist reply.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>A map of Delhi is about Delhi. Does the map have intentionality in the same way that your thoughts do?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes derived intentionality, given by users, from original intentionality.",
          "Asks whether brains have original intentionality, and what gives it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what intentionality and content are, Brentano's thesis, propositional attitudes, and the puzzles of thinking about things that do not exist and of Lois Lane and Superman.",

  glimpse: (
    <p>
      The next lesson asks whether content is fixed inside the head, through Putnam&rsquo;s Twin Earth. After that come attempts
      to explain content in natural terms. Theories of reference in the philosophy of language face the same questions for
      words.
    </p>
  ),
};
