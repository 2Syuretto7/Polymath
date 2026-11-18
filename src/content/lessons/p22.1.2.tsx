import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { QuaLensViz } from "@/components/viz/QuaLensViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.1.2",
  minutes: 80,
  links: {
    revisits: ["p22.1.1", "m2.2.1", "m0.5.1"],
    foreshadows: ["p22.1.4", "p22.6.3", "p22.4.1"],
  },

  puzzle: (
    <>
      <p>
        You can always add one to a number, and always halve a line again. So in some sense the numbers and the divisions
        are infinite. But have you ever met an infinite collection, all there at once? Must mathematics assume that such a
        thing exists, or only that you can always go on?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Look at a rolling bronze ball through four lenses, and see what each keeps in view.</p>
      <QuaLensViz />
    </>
  ),

  theory: (
    <>
      <Definition title="abstraction">
        <p>
          Aristotle (384&ndash;322 BCE) denied that mathematical objects exist separately from physical things. In{" "}
          <em>Metaphysics</em> XIII and <em>Physics</em> II, the mathematician studies physical things, but not{" "}
          <em>as</em> physical: he considers them <strong>qua</strong> quantities, lines, planes or units, &lsquo;separating
          in thought&rsquo; (aphairesis) what is not separate in reality. The geometer studies the bronze sphere qua sphere.
        </p>
      </Definition>

      <Example title="why no falsehood follows">
        <p>
          If no perfectly straight line exists, is geometry false? Aristotle compares the geometer to someone who draws a line
          a foot long that is not a foot long: the argument does not depend on it. The geometer asserts only what follows from
          the line&rsquo;s being a line, and sets aside all else, so nothing false enters the proof. Modern readers compare
          the qua operator to restricting attention to one structure of a thing.
        </p>
      </Example>

      <Definition title="potential and actual infinity">
        <p>
          In <em>Physics</em> III, Aristotle holds that the infinite exists only <strong>potentially</strong>: a magnitude can
          always be divided further, and a number can always be increased, but no infinite collection is ever completed.
          Mathematicians, he says, do not need an actual infinite; they need only lines as long as they please. This view
          shaped mathematics until Cantor, and Gauss still protested in 1831 against &lsquo;the use of an infinite magnitude
          as a completed one&rsquo;.
        </p>
      </Definition>

      <Remark title="demonstrative science">
        <p>
          Aristotle&rsquo;s <em>Posterior Analytics</em> describes a demonstrative science: from first principles, some
          common to all sciences (axioms) and some proper to one (definitions and hypotheses), conclusions follow by
          syllogism. Euclid&rsquo;s <em>Elements</em>, written a generation later, has much this shape, with common notions,
          definitions and postulates.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "where",
      rung: "check",
      prompt: <p>Where do mathematical objects exist, for Aristotle?</p>,
      answer: { kind: "choice", options: ["In physical things, studied by abstraction", "In a separate realm of Forms", "Only in God’s mind", "Nowhere; mathematics is false"], correct: [0] },
    },
    {
      key: "inf",
      rung: "check",
      prompt: <p>What kind of infinity does Aristotle accept?</p>,
      answer: { kind: "choice", options: ["Potential infinity only", "Actual infinity only", "Both", "Neither"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many properties remain when the ball is considered qua solid figure?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "false",
      rung: "apply",
      prompt: <p>Why does an imperfectly drawn line not make the geometer&rsquo;s proof false, for Aristotle?</p>,
      answer: { kind: "choice", options: ["The proof uses only what follows from its being a line, not the drawing’s flaws", "Drawn lines are perfect", "Proofs are never about lines", "Geometry is only approximately true"], correct: [0] },
    },
    {
      key: "euclid",
      rung: "apply",
      prompt: <p>Which work most closely follows the model of demonstrative science from the Posterior Analytics?</p>,
      answer: { kind: "choice", options: ["Euclid’s Elements", "Plato’s Meno", "The Republic", "Zeno’s paradoxes"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can modern mathematics, which uses completed infinite sets, be reconciled with Aristotle&rsquo;s view? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the potential-actual distinction.",
          "Considers a case, such as the set of all natural numbers or the real numbers as a completed totality, and whether it can be read potentially.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If the universe is finite, there may be no physical object with 10¹⁰⁰ parts. What would Aristotle&rsquo;s view say about that number?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the threat: if numbers are abstracted from things, very large numbers may lack instances.",
          "Considers a reply, such as appeal to potential existence or possible divisions.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Plato and Aristotle asked what mathematics is about. Two thousand years later Kant asked a different question: how
        can mathematics tell us something new about the world, yet be known with certainty before any experience?
      </p>
      <p>
        Next, Kant on mathematics: analytic and synthetic judgements, why 7 + 5 = 12 is synthetic a priori, and the
        construction of concepts in the pure intuition of space and time.
      </p>
    </>
  ),
};
