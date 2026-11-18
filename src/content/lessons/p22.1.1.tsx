import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DoubleSquareViz } from "@/components/viz/DoubleSquareViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.1.1",
  minutes: 80,
  links: {
    revisits: ["m0.5.1", "p0.1.4", "m0.1.4"],
    foreshadows: ["p22.6.1", "p22.6.4", "p22.5.3"],
  },

  puzzle: (
    <>
      <p>
        Draw a circle as carefully as you can. It is not perfectly round, and yet geometry proves things about the perfectly
        round circle with complete certainty. What is that theorem about, if not about any circle you have ever seen? And
        how do you know anything about it at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Help Meno&rsquo;s boy find a square with double the area of a 2 by 2 square.</p>
      <DoubleSquareViz />
    </>
  ),

  theory: (
    <>
      <Definition title="mathematical objects as Forms">
        <p>
          For Plato (about 428&ndash;348 BCE), the objects of mathematics are not the drawn figures or the counted pebbles,
          which are imperfect and changing, but <strong>Forms</strong> or things like them: abstract, perfect, eternal, and
          known by reason rather than the senses. A geometer &lsquo;draws a square and a diagonal&rsquo;, says the{" "}
          <em>Republic</em>, but reasons &lsquo;for the sake of the square itself and the diagonal itself&rsquo;.
        </p>
      </Definition>

      <Example title="recollection in the Meno">
        <p>
          How can anyone come to know what they did not know before? In the <em>Meno</em>, Socrates leads a boy, by questions
          alone, from two false answers to the truth that the square on the diagonal is double. Since the boy was never
          taught geometry, Plato concludes that he recollected it: the soul knew the Forms before birth, and learning is
          remembering. Mathematics is the showcase, because there understanding seems to come from within.
        </p>
      </Example>

      <Definition title="the divided line">
        <p>
          In <em>Republic</em> VI, Plato divides cognition into four levels: images, beliefs about visible things,{" "}
          <strong>thought</strong> (dianoia), and <strong>understanding</strong> (noēsis). Mathematics belongs to thought:
          it uses visible diagrams, and reasons down from hypotheses, such as the odd and the even or the three kinds of angle,
          which it does not itself justify. Only dialectic climbs to an unhypothetical first principle.
        </p>
      </Definition>

      <Remark title="education and influence">
        <p>
          In <em>Republic</em> VII, arithmetic, geometry, astronomy and harmonics are studied to turn the soul from what
          becomes to what is. A later story says the Academy bore the inscription &lsquo;let no one ignorant of geometry
          enter&rsquo;. Aristotle reports that Plato also posited &lsquo;intermediates&rsquo;, many perfect circles between
          the one Form and the drawn ones, since geometry speaks of two circles meeting. Modern platonism, from Frege to
          Gödel, inherits the core: mathematical objects exist independently of us, and mathematicians discover them.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "objects",
      rung: "check",
      prompt: <p>What, for Plato, are the objects of geometry?</p>,
      answer: { kind: "choice", options: ["Abstract, perfect, eternal objects known by reason", "The figures drawn in sand", "Ideas in individual minds", "Useful fictions"], correct: [0] },
    },
    {
      key: "meno",
      rung: "check",
      prompt: <p>What does Plato conclude from the boy&rsquo;s success in the Meno?</p>,
      answer: { kind: "choice", options: ["Learning is recollection of what the soul already knew", "Socrates secretly taught him", "Geometry is learned from the senses", "The boy was lucky"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the area of the square on the diagonal of the 2 by 2 square?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "line",
      rung: "apply",
      prompt: <p>On the divided line, why does mathematics fall short of understanding?</p>,
      answer: { kind: "choice", options: ["It uses visible diagrams and unproved hypotheses", "It is about physical objects", "It is uncertain", "It uses numbers"], correct: [0] },
    },
    {
      key: "inter",
      rung: "apply",
      prompt: <p>Why, according to Aristotle&rsquo;s report, did Plato posit mathematical intermediates?</p>,
      answer: { kind: "choice", options: ["Geometry speaks of many perfect circles, but there is only one Form of circle", "To explain motion", "Because drawn circles are perfect", "To avoid Forms altogether"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the Meno&rsquo;s geometry lesson show that the boy already knew the answer? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Plato’s argument: the boy reached the truth by questions alone, so the knowledge came from within.",
          "Considers a reply, such as that Socrates’s leading questions and diagram did the teaching, or that the capacity to reason is innate but the knowledge is not.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If numbers are abstract objects outside space and time, how could we ever come to know about them?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the tension between causal or perceptual contact and abstract objects.",
          "Considers an answer, such as recollection, a faculty of rational intuition, or knowledge through proof alone.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Plato&rsquo;s greatest student rejected the separate Forms. If there is no circle apart from round things, what is
        geometry about, and how can its claims be exact?
      </p>
      <p>
        Next, Aristotle: mathematical objects as abstractions from physical things, the geometer who studies bronze spheres
        qua spheres, and the distinction between potential and actual infinity.
      </p>
    </>
  ),
};
