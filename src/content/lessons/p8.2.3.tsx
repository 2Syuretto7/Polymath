import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TriangleSumViz } from "@/components/viz/TriangleSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.2.3",
  minutes: 85,
  links: {
    revisits: ["p8.1.2", "p8.2.1", "m0.5.1"],
    foreshadows: ["p18.1.1", "p10.5.4", "p32.1.3"],
  },

  puzzle: (
    <>
      <p>
        Give a philosopher the concept of a triangle and ask how its angles relate to a right angle, Kant says. The
        philosopher can analyse the concepts of line, angle and three for as long as they like and will find nothing new. Give
        the same question to a geometer, who at once begins to draw, extends a side, draws a parallel, and in a few steps
        reaches a conclusion that is evident and universal. What does the geometer have that the philosopher lacks?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Follow the geometer&rsquo;s construction step by step. Then change the triangle and see that the argument does not
        care which one you drew.
      </p>
      <TriangleSumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="construction in intuition">
        <p>
          Philosophical knowledge, for Kant, is knowledge from concepts; mathematical knowledge is knowledge from the{" "}
          <strong>construction of concepts</strong>. To construct a concept is to exhibit a priori the intuition that
          corresponds to it. The geometer draws a triangle, in imagination or on paper, guided only by the rule given in the
          concept, and attends only to what the act of construction determines. So a single figure yields knowledge of all
          triangles.
        </p>
      </Definition>

      <Definition title="geometry and arithmetic">
        <p>
          Geometry constructs its concepts in the pure intuition of space. Arithmetic, Kant suggests, rests on the successive
          addition of units in time, which is why <em>7 + 5 = 12</em> needs counting. Because space and time are the forms of
          all our intuition, whatever mathematics proves of them holds necessarily of every object we can experience. That
          answers the question of how pure mathematics can apply to nature: nature, as appearance, must take the forms
          mathematics describes.
        </p>
      </Definition>

      <Example title="the geometer's proof">
        <p>
          The viz follows Euclid I.32, which is the proof Kant describes. The parallel postulate gives a line through the top
          vertex parallel to the base; alternate angles transfer the base angles to the top; the three angles there fill a
          straight line. Each step is licensed by what we can construct in space, not by analysing the word
          &ldquo;triangle&rdquo;.
        </p>
      </Example>

      <Remark title="challenges">
        <p>
          In the nineteenth century, Gauss, Bolyai, Lobachevsky and Riemann developed consistent geometries in which the
          parallel postulate fails and angle sums differ from 180°. General relativity uses such a geometry for physical
          space. Einstein drew the moral: as far as the laws of mathematics refer to reality, they are not certain, and as far
          as they are certain, they do not refer to reality. Frege made arithmetic analytic, and Hilbert made geometry a matter
          of axioms rather than intuition. Some philosophers, such as Reichenbach, kept a relativised a priori; others think
          Kant&rsquo;s account of the pure intuition of space survives as a claim about our perceptual space, not the
          universe&rsquo;s.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "construct",
      rung: "check",
      prompt: <p>How does mathematical knowledge differ from philosophical knowledge, for Kant?</p>,
      answer: {
        kind: "choice",
        options: [
          "Mathematics is empirical, philosophy a priori.",
          "Mathematics proceeds by constructing its concepts in pure intuition; philosophy proceeds from concepts alone.",
          "Philosophy uses diagrams, mathematics does not.",
          "There is no difference.",
        ],
        correct: [1],
      },
    },
    {
      key: "angle",
      rung: "check",
      prompt: <p>A plane triangle has angles of 50° and 60°. What is the third angle, in degrees?</p>,
      answer: { kind: "numeric", value: 70 },
    },
    {
      key: "general",
      rung: "apply",
      prompt: <p>How can one drawn triangle give knowledge about all triangles, on Kant&rsquo;s account?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because all triangles look alike.",
          "Because the construction follows the general rule of the concept, and the proof uses only what that rule determines.",
          "Because we check many triangles.",
          "Because the drawing is perfectly accurate.",
        ],
        correct: [1],
      },
    },
    {
      key: "sphere",
      rung: "apply",
      prompt: (
        <p>
          On a sphere, the triangle bounded by the equator and two meridians 90° apart has three right angles. What is its angle
          sum, in degrees?
        </p>
      ),
      answer: { kind: "numeric", value: 270 },
    },
    {
      key: "einstein",
      rung: "apply",
      prompt: <p>What distinction does Einstein&rsquo;s remark about mathematics and reality draw?</p>,
      answer: {
        kind: "choice",
        options: [
          "Between arithmetic and geometry.",
          "Between pure mathematics, which is certain but not about the world, and applied mathematics, which is about the world but not certain.",
          "Between Kant and Hume.",
          "Between space and time.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, explain why, for Kant, geometry must apply to every object of outer experience.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says geometry describes the pure intuition of space, which is the form of outer sense.",
          "Says every object of outer experience must appear in space, so must conform to geometry. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "noneuclid",
      rung: "stretch",
      prompt: <p>Does the discovery of non-Euclidean geometry refute Kant&rsquo;s philosophy of mathematics? Give your view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Kant held Euclidean geometry to be synthetic a priori truth about space.",
          "Considers a defence, such as distinguishing perceptual space from physical space, or noting that consistency of other geometries does not show they are intuitable.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kant's distinction between philosophical and mathematical knowledge, how construction in intuition makes geometry and arithmetic synthetic a priori, and the challenges from non-Euclidean geometry and logic.",

  glimpse: (
    <p>
      The next chapter, the Transcendental Analytic, turns from intuition to concepts: the categories and Kant&rsquo;s
      deduction of their right to apply to experience. Frege&rsquo;s logicism in the History of Analytic Philosophy course
      challenges Kant on arithmetic, and the Philosophy of Physics course on geometry.
    </p>
  ),
};
