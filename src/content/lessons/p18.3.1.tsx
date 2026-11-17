import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PicturePlaceViz } from "@/components/viz/PicturePlaceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.3.1",
  minutes: 80,
  links: {
    revisits: ["p18.2.2", "p18.1.2", "p15.3.2"],
    foreshadows: ["p18.3.2", "p18.4.1", "p18.5.1"],
  },

  puzzle: (
    <>
      <p>
        In 1914 Wittgenstein read of a Paris court case in which a road accident was reconstructed with toy cars and dolls.
        The toys could represent the accident because their arrangement could match the arrangement of the real cars and
        people. Could a sentence be a picture in the same way, even though it looks nothing like what it describes?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Arrange the names, then arrange the world. When does the picture say something true?</p>
      <PicturePlaceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the world and its facts">
        <p>
          The <em>Tractatus Logico-Philosophicus</em> (1921) opens: &ldquo;The world is all that is the case. The world is the
          totality of facts, not of things.&rdquo; Facts are made of <strong>states of affairs</strong>, combinations of
          simple <strong>objects</strong>. Objects are the fixed form of the world; what varies is how they are combined.
          This develops the logical atomism Wittgenstein had worked out with Russell.
        </p>
      </Definition>

      <Definition title="the picture theory">
        <p>
          We picture facts to ourselves. A <strong>picture</strong> consists of elements that stand for objects, and the
          fact that the elements are arranged in a certain way says that the objects are arranged likewise. An elementary
          proposition is such a picture: its names stand for objects, and their combination presents a possible state of
          affairs. The picture&rsquo;s <strong>sense</strong> is the state of affairs it presents, and it is true if that
          state of affairs obtains.
        </p>
      </Definition>

      <Example title="sense before truth">
        <p>
          Because the sense is fixed by the arrangement, we can understand a proposition without knowing whether it is true,
          and we can understand new propositions built from familiar names. A picture cannot be true <em>a priori</em>: to
          know whether it is true we must compare it with reality. Every complex proposition is a truth function of
          elementary ones, so the whole of language rests on picturing.
        </p>
      </Example>

      <Remark title="pictorial form">
        <p>
          A picture must share something with what it depicts: its <strong>pictorial form</strong>, and at the most general
          level <strong>logical form</strong>. But a picture cannot depict its own form; it displays it. This is the seed of
          the distinction between what can be said and what can only be shown.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "true",
      rung: "check",
      prompt: <p>On the picture theory, what makes a proposition true?</p>,
      answer: {
        kind: "choice",
        options: [
          "The state of affairs it presents actually obtains.",
          "It coheres with our other beliefs.",
          "It is useful to believe.",
          "It follows from the laws of logic.",
        ],
        correct: [0],
      },
    },
    {
      key: "world",
      rung: "check",
      prompt: <p>According to the opening of the Tractatus, the world is the totality of what?</p>,
      answer: { kind: "choice", options: ["Facts", "Things", "Sensations", "Words"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, fix any arrangement of the world. How many of the six pictures are true?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "four",
      rung: "apply",
      prompt: <p>If the shelf held four objects and the picture used four names in a row, how many different pictures would there be?</p>,
      answer: { kind: "numeric", value: 24 },
    },
    {
      key: "apriori",
      rung: "apply",
      prompt: <p>Why, for the Tractatus, can no picture be known to be true a priori?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its sense is fixed independently of reality, so its truth can be settled only by comparing it with reality.",
          "Pictures are always false.",
          "Only sensations can be known.",
          "A priori knowledge is impossible in mathematics too.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the picture theory give a good explanation of how we can understand sentences we have never heard before? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that on the theory the sense of a proposition is fixed by the meanings of its names and their arrangement.",
          "Assesses this, for instance by noting that ordinary sentences do not obviously contain names of simple objects.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why might a picture be unable to depict its own pictorial form?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that to depict something the picture must be able to be true or false of it, and so stand outside it.",
          "Explains that a picture cannot place itself outside its own form, since any depiction already uses that form.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, saying and showing: tautologies that say nothing, logical form that shows itself, and the Tractatus&rsquo;s claim
      that its own propositions are nonsense.
    </p>
  ),
};
