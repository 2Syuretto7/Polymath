import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["constative", "performative"];
const ITEMS: SortItem[] = [
  {
    text: "“I name this ship the Queen Elizabeth”, said while smashing a bottle on the bow.",
    cat: "performative",
    why: "Austin’s example. Saying it, in the right circumstances, is naming the ship, not reporting that one names it.",
  },
  {
    text: "“The cat is on the mat.”",
    cat: "constative",
    why: "A statement, true or false according to where the cat is.",
  },
  {
    text: "“I bet you ₹100 it will rain tomorrow.”",
    cat: "performative",
    why: "Saying it, if the bet is taken, is making the bet. It is not true or false.",
  },
  {
    text: "“I promise to return your book on Monday.”",
    cat: "performative",
    why: "To say this sincerely is to promise. Austin’s point: it is not a report of an inner act of promising.",
  },
  {
    text: "“Rahul promised to return the book.”",
    cat: "constative",
    why: "A report about someone else’s promise, true or false.",
  },
  {
    text: "“I do”, said by the bride or groom at a wedding.",
    cat: "performative",
    why: "Part of getting married. Said by a guest, or at a rehearsal, it misfires.",
  },
  {
    text: "“I warn you that the bridge is weak.”",
    cat: "performative",
    why: "It warns, but it also says something true or false about the bridge. Cases like this led Austin to give up the distinction.",
  },
];

export const lesson: LessonContent = {
  id: "p15.4.1",
  minutes: 75,
  links: {
    revisits: ["p15.3.3", "p15.3.2", "p15.1.3"],
    foreshadows: ["p15.4.2", "p15.4.3", "p18.5.3"],
  },

  puzzle: (
    <>
      <p>
        When a registrar says &ldquo;I now pronounce you married&rdquo;, they are not describing a marriage. Their words make
        it. Philosophers had treated language mainly as a way to state facts, true or false. But &ldquo;I promise&rdquo;,
        &ldquo;I resign&rdquo; and &ldquo;I apologise&rdquo; do things. What kind of thing is saying, if saying can be doing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each utterance as Austin first did: does it state something, or does it do something?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Constative or performative, on Austin’s first distinction?" />
    </>
  ),

  theory: (
    <>
      <Definition title="performatives">
        <p>
          In lectures published as <em>How to Do Things with Words</em> (1962), J. L. Austin distinguished{" "}
          <strong>constatives</strong>, which describe and are true or false, from <strong>performatives</strong>, in which
          saying something is doing something: naming, betting, promising, marrying. Performatives are not true or false, but
          they can go wrong.
        </p>
      </Definition>

      <Example title="infelicities">
        <p>
          A performative can <strong>misfire</strong>, so that the act is not done at all: a guest who says &ldquo;I name this
          ship&rdquo; has no authority, and no ship is named. It can also be an <strong>abuse</strong>: a promise made with no
          intention of keeping it is still a promise, but an insincere one. Austin listed the conditions for an act to come off,
          such as an accepted procedure, the right people and circumstances, and the right thoughts and later conduct.
        </p>
      </Example>

      <Definition title="locution, illocution, perlocution">
        <p>
          Austin later abandoned the constative and performative distinction, since statements can also misfire and warnings can
          be true. Instead, every utterance performs several acts at once. The <strong>locutionary</strong> act is saying
          something with a certain sense and reference. The <strong>illocutionary</strong> act is what is done in saying it:
          warning, asserting, promising. The <strong>perlocutionary</strong> act is what is done by saying it: frightening,
          persuading, amusing.
        </p>
      </Definition>

      <Remark title="significance">
        <p>
          Austin, with the later Wittgenstein, turned philosophy of language towards what speakers do. His work shaped later
          theories of speech acts, discussions of hate speech and silencing in political philosophy, and legal theory, where
          contracts and verdicts are performatives.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "perf",
      rung: "check",
      prompt: <p>What is a performative utterance?</p>,
      answer: {
        kind: "choice",
        options: [
          "One in which saying something is doing something, such as promising or naming.",
          "One spoken on stage.",
          "Any true statement.",
          "A question.",
        ],
        correct: [0],
      },
    },
    {
      key: "truth",
      rung: "check",
      prompt: <p>On Austin&rsquo;s first view, can &ldquo;I bet you ₹100&rdquo; be false?</p>,
      answer: {
        kind: "choice",
        options: ["No, it is not true or false, though it can go wrong.", "Yes, if it rains.", "Yes, if the speaker has no money.", "Only in court."],
        correct: [0],
      },
    },
    {
      key: "misfire",
      rung: "apply",
      prompt: <p>A wedding guest stands up and says &ldquo;I now pronounce you married.&rdquo; What has happened?</p>,
      answer: {
        kind: "choice",
        options: [
          "A misfire: the guest lacks the authority, so no marriage is made.",
          "An abuse: the guest is insincere.",
          "The couple are now married twice.",
          "A true statement.",
        ],
        correct: [0],
      },
    },
    {
      key: "illoc",
      rung: "apply",
      prompt: <p>Someone says &ldquo;The bull is about to charge&rdquo;, warning you, and you run. Which act is your running a result of?</p>,
      answer: {
        kind: "choice",
        options: ["The perlocutionary act", "The locutionary act alone", "The illocutionary act alone", "None"],
        correct: [0],
      },
    },
    {
      key: "abandon",
      rung: "apply",
      prompt: <p>Why did Austin give up the constative and performative distinction?</p>,
      answer: {
        kind: "choice",
        options: [
          "Statements can misfire like performatives, and performatives like warnings can be true or false.",
          "He found no performatives.",
          "All sentences turned out to be questions.",
          "Wittgenstein refuted it.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is stating a fact itself a kind of action? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Austin’s distinction and why he abandoned it.",
          "Gives a consideration, such as statements having felicity conditions or the illocutionary act of asserting.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Some philosophers argue that certain speech can silence others, by stopping their refusals from counting as refusals. Use Austin&rsquo;s ideas to explain what this could mean.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the idea in terms of illocutionary acts failing, a kind of misfire, rather than the speaker being unable to speak.",
          "Considers whether the uptake of the hearer is needed for an illocutionary act to succeed.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Austin's distinction between constatives and performatives, how performatives can misfire or be abused, why he gave up the distinction, and the locutionary, illocutionary and perlocutionary acts.",

  glimpse: (
    <p>
      The next lesson presents Searle&rsquo;s systematic theory of speech acts. Grice then explains how we mean more than we
      say, and a later lesson places Austin within ordinary language philosophy.
    </p>
  ),
};
