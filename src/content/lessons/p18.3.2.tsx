import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["says something", "says nothing", "nonsense"];
const ITEMS: SortItem[] = [
  { text: "It is raining in Vienna.", cat: "says something", why: "It pictures a possible state of affairs, and could be true or false." },
  { text: "Either it is raining or it is not raining.", cat: "says nothing", why: "A tautology: true however the world is, so it rules nothing out." },
  { text: "It is raining and it is not raining.", cat: "says nothing", why: "A contradiction: false however the world is, so it presents no possible situation." },
  { text: "Vienna is larger than Graz.", cat: "says something", why: "A contingent claim that could have been otherwise." },
  { text: "If p, and if p then q, then q.", cat: "says nothing", why: "A tautology. Its truth shows the logical form of the propositions, but it states no fact." },
  { text: "1 is a number.", cat: "nonsense", why: "It uses the formal concept ‘number’ as if it were a proper concept. What it tries to say shows itself in the symbol ‘1’." },
  { text: "There are objects.", cat: "nonsense", why: "‘Object’ is a formal concept. That there are objects shows itself in the use of names; it cannot be said." },
  { text: "The world is the totality of facts.", cat: "nonsense", why: "The Tractatus’s own opening tries to say something about the form of the world, and so by its own lights is nonsense." },
];

export const lesson: LessonContent = {
  id: "p18.3.2",
  minutes: 80,
  links: {
    revisits: ["p18.3.1", "p18.1.3", "p18.2.3"],
    foreshadows: ["p18.4.3", "p18.5.1", "p18.4.1"],
  },

  puzzle: (
    <>
      <p>
        Near its end the Tractatus says that anyone who understands its author will recognise its propositions as nonsense,
        and must throw away the ladder after climbing it. How can a book that is nonsense be understood, or teach anything at
        all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each sentence by its Tractarian status.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="What is its status?" />
    </>
  ),

  theory: (
    <>
      <Definition title="three statuses">
        <p>
          A proposition with <strong>sense</strong> pictures a possible state of affairs and can be true or false.
          Tautologies and contradictions are <strong>senseless</strong> (<em>sinnlos</em>): they are well-formed limiting
          cases of truth functions, but say nothing about the world. Strings that try to use formal concepts as though they
          were ordinary ones, or to speak about the relation between language and world, are <strong>nonsense</strong>{" "}
          (<em>unsinnig</em>).
        </p>
      </Definition>

      <Example title="what shows itself">
        <p>
          Logical form cannot be said, because any proposition about it would already have to use it. Instead it{" "}
          <strong>shows</strong> itself: that &ldquo;fa&rdquo; is about the object a shows in the occurrence of the name;
          that one proposition follows from another shows in their forms. So Frege&rsquo;s trouble with &ldquo;the concept
          horse&rdquo; and the need for Russell&rsquo;s theory of types are, for Wittgenstein, symptoms of trying to say what
          can only be shown.
        </p>
      </Example>

      <Definition title="the ladder">
        <p>
          &ldquo;My propositions serve as elucidations in the following way: anyone who understands me eventually recognises
          them as nonsensical, when he has used them as steps to climb up beyond them&rdquo; (6.54). The book ends: &ldquo;What
          we cannot speak about we must pass over in silence.&rdquo; Ethics, aesthetics and the meaning of life also lie
          beyond what can be said.
        </p>
      </Definition>

      <Remark title="two readings">
        <p>
          On the traditional, <strong>ineffability</strong> reading, there are deep truths about logical form that cannot be
          stated but are grasped. On the <strong>resolute</strong> reading of Cora Diamond and James Conant, nonsense is just
          nonsense, and the book&rsquo;s aim is to cure us of the illusion that there is anything there to grasp. The debate
          turns on whether &ldquo;what shows&rdquo; is a kind of content at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "taut",
      rung: "check",
      prompt: <p>What is the status of a tautology in the Tractatus?</p>,
      answer: {
        kind: "choice",
        options: [
          "Senseless: it says nothing, but it is not nonsense.",
          "Nonsense, like metaphysics.",
          "A proposition with sense that is always true.",
          "A picture of a necessary fact.",
        ],
        correct: [0],
      },
    },
    {
      key: "shows",
      rung: "check",
      prompt: <p>What, above all, shows itself but cannot be said?</p>,
      answer: { kind: "choice", options: ["Logical form", "Contingent facts", "Sensations", "Historical events"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the sentences say nothing, being tautologies or contradictions?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "ladder",
      rung: "apply",
      prompt: <p>What does the image of the ladder suggest about the Tractatus&rsquo;s own propositions?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are nonsense, but they help the reader reach a correct view of the world, after which they are discarded.",
          "They are tautologies.",
          "They are empirical hypotheses to be tested.",
          "They are the only propositions with sense.",
        ],
        correct: [0],
      },
    },
    {
      key: "types",
      rung: "apply",
      prompt: <p>Why did Wittgenstein think the theory of types was unnecessary?</p>,
      answer: {
        kind: "choice",
        options: [
          "A properly constructed notation would show the type of each symbol, so it need not and cannot be stated.",
          "Russell’s paradox is not a real problem.",
          "Types are empirical.",
          "Sets do not exist.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the Tractatus self-undermining? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why the book’s own propositions count as nonsense by its own criteria.",
          "Considers a response, such as the ladder, the ineffability reading or the resolute reading.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Choose between the ineffability reading and the resolute reading of the Tractatus. Which makes better sense of the book?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States both readings accurately.",
          "Gives a consideration for one, such as 6.54 or the difficulty of grasping ineffable truths.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the Vienna Circle: scientists and philosophers who read the Tractatus as a charter for doing away with
      metaphysics, and who set out to rebuild knowledge on logic and experience.
    </p>
  ),
};
