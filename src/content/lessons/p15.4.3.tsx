import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["quantity", "quality", "relation", "manner"];
const ITEMS: SortItem[] = [
  {
    text: "A reference letter for a philosophy post reads in full: “Mr X’s command of English is excellent, and his attendance has been regular.”",
    cat: "quantity",
    why: "Grice’s own example. The writer says far less than is needed, and the reader infers that Mr X is no good at philosophy.",
  },
  {
    text: "“Some of the students passed.”",
    cat: "quantity",
    why: "Had all passed, a cooperative speaker would have said so. So the hearer infers that not all passed: a scalar implicature.",
  },
  {
    text: "After a friend betrays a secret: “You’re a fine friend.”",
    cat: "quality",
    why: "The speaker obviously does not believe what they say, so the hearer looks for a related meaning: irony.",
  },
  {
    text: "“Where is Ravi?” “There’s a yellow scooter outside Priya’s house.”",
    cat: "relation",
    why: "The reply seems irrelevant unless Ravi rides a yellow scooter, so the hearer infers he may be at Priya’s.",
  },
  {
    text: "“I’m out of petrol.” “There’s a pump round the corner.”",
    cat: "relation",
    why: "The reply is relevant only if the pump is open and sells petrol, which is therefore implicated.",
  },
  {
    text: "“Miss X produced a series of sounds corresponding closely to the score of a well-known song.”",
    cat: "manner",
    why: "Grice’s example. The long-winded way of saying “Miss X sang” implicates that her singing was very poor.",
  },
  {
    text: "“She got married and had a baby.”",
    cat: "manner",
    why: "The maxim to be orderly suggests the events happened in the order told, though “and” itself does not say so.",
  },
];

export const lesson: LessonContent = {
  id: "p15.4.3",
  minutes: 80,
  links: {
    revisits: ["p15.4.2", "p15.1.3", "p2.2.2"],
    foreshadows: ["p15.5.2", "p10.4.3", "p29.4.1"],
  },

  puzzle: (
    <>
      <p>
        You ask a colleague whether the new manager is good at the job, and they reply, &ldquo;Well, he&rsquo;s always very
        punctual.&rdquo; They have said nothing false and nothing about competence. Yet you know exactly what they think. How
        does a speaker convey what their words do not say?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>For each exchange, decide which of Grice&rsquo;s maxims the hearer relies on to work out what is meant.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which maxim generates the implicature?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the cooperative principle">
        <p>
          H. P. Grice, in &ldquo;Logic and Conversation&rdquo; (1975), proposed that conversation is governed by a{" "}
          <strong>cooperative principle</strong>: make your contribution such as is required, at the stage at which it occurs,
          by the accepted purpose of the talk. It unfolds into four maxims. <strong>Quantity</strong>: be as informative as
          required, and no more. <strong>Quality</strong>: say only what you believe true and have evidence for.{" "}
          <strong>Relation</strong>: be relevant. <strong>Manner</strong>: be clear, brief and orderly.
        </p>
      </Definition>

      <Example title="conversational implicature">
        <p>
          A speaker <strong>implicates</strong> q by saying p when the hearer must suppose the speaker thinks q in order to keep
          the assumption that they are cooperating. Sometimes a maxim is simply followed, as when &ldquo;some&rdquo; implicates
          &ldquo;not all&rdquo;. Sometimes it is <strong>flouted</strong>, blatantly broken, as in irony or a reference letter
          that says nothing relevant, and the hearer looks for what is really meant.
        </p>
      </Example>

      <Remark title="tests for implicature">
        <p>
          Implicatures are <strong>cancellable</strong>: &ldquo;Some of the students passed; in fact all did&rdquo; is not a
          contradiction, while &ldquo;Some passed, but none did&rdquo; is. They are <strong>calculable</strong>: the hearer can
          work them out from what is said, the maxims and the context. This lets the semantics stay simple. The truth-functional
          &ldquo;and&rdquo; and &ldquo;or&rdquo; of logic can be the literal meanings, with order and exclusiveness added by
          implicature.
        </p>
      </Remark>

      <Remark title="speaker meaning">
        <p>
          Grice also analysed what it is for a speaker to mean something: to utter x intending the audience to come to believe
          p through recognising that very intention. His work separated what is said from what is meant, and launched the field
          of pragmatics. Later theorists, such as Sperber and Wilson, reduced the maxims to a single principle of relevance.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "maxims",
      rung: "check",
      prompt: <p>Which of these is one of Grice&rsquo;s maxims?</p>,
      answer: {
        kind: "choice",
        options: ["Be relevant.", "Always speak politely.", "Use short words.", "Never ask questions."],
        correct: [0],
      },
    },
    {
      key: "implicature",
      rung: "check",
      prompt: <p>What is a conversational implicature?</p>,
      answer: {
        kind: "choice",
        options: [
          "Something a speaker conveys beyond what they literally say, which the hearer infers by assuming cooperation.",
          "A logical consequence of what is said.",
          "A grammatical rule.",
          "A lie.",
        ],
        correct: [0],
      },
    },
    {
      key: "some",
      rung: "apply",
      prompt: <p>Which maxim generates the inference from &ldquo;some students passed&rdquo; to &ldquo;not all passed&rdquo;?</p>,
      answer: { kind: "choice", options: ["Quantity", "Quality", "Relation", "Manner"], correct: [0] },
    },
    {
      key: "cancel",
      rung: "apply",
      prompt: <p>Which sentence shows that &ldquo;not all&rdquo; is only implicated by &ldquo;some&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "“Some of the students passed; indeed, all of them did.”",
          "“Some of the students passed, but none did.”",
          "“All of the students passed.”",
          "“No students passed.”",
        ],
        correct: [0],
      },
    },
    {
      key: "flout",
      rung: "apply",
      prompt: <p>What is it to flout a maxim?</p>,
      answer: {
        kind: "choice",
        options: [
          "To break it so openly that the hearer infers a further meaning.",
          "To break it secretly to mislead.",
          "To follow it exactly.",
          "To be unaware of it.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does &ldquo;and&rdquo; in English mean &ldquo;and then&rdquo;, or is the order only implicated? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the two views with an example such as “She got married and had a baby”.",
          "Uses a test, such as cancellability, or a consideration about simplicity of meaning.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Someone says something literally true but deliberately misleading by implicature. Have they lied?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes lying, saying what one believes false, from misleading by implicature.",
          "Considers whether the difference matters morally, with an example.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Grice's cooperative principle and the four maxims, what a conversational implicature is with examples of following and flouting a maxim, and how cancellability distinguishes implicature from what is said.",

  glimpse: (
    <p>
      The next chapter looks at how context fixes what is said, starting with indexicals. Implicature also matters in debates
      about how far meaning depends on context, and about whether truth is a substantial notion.
    </p>
  ),
};
