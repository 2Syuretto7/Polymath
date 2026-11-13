import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { IncongruentViz } from "@/components/viz/IncongruentViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.2.1",
  minutes: 85,
  links: {
    revisits: ["p8.1.3", "p7.6.2", "m0.5.1"],
    foreshadows: ["p8.2.3", "p32.1.1", "p32.1.3"],
  },

  puzzle: (
    <>
      <p>
        Newton thought space a real container, existing whether or not anything filled it. Leibniz thought it nothing but the
        order of relations among things. Kant, who had held each view in turn, came to think both mistaken. Your right and left
        hands agree in every measurement, yet no turning will make a right glove fit a left hand. In 1768 Kant took this simple
        fact as evidence against Leibniz. By 1781 he had a stranger view: space belongs neither to things nor to their
        relations, but to us.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Try to rotate the hand until it lands exactly on its mirror image. Then allow it to leave the page.
      </p>
      <IncongruentViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the metaphysical exposition">
        <p>
          In the Transcendental Aesthetic, Kant argues that space is not an empirical concept drawn from outer experience,
          since to represent things as outside me and beside one another I must already represent them in space. It is a
          necessary representation: I can think of space empty of objects, but not of no space at all. It is not a general
          concept but an <strong>intuition</strong>: there is only one space, and particular spaces are parts of it, not
          instances falling under it. And it is represented as an infinite given magnitude, which no concept could be.
        </p>
      </Definition>

      <Definition title="the transcendental exposition">
        <p>
          Geometry determines the properties of space synthetically and a priori. This is possible only if space is a pure
          intuition, present in the mind before any object, and the form of outer sense, the way in which we are affected by
          objects outside us. So space is <strong>empirically real</strong>, holding of every object we can meet in outer
          experience, and <strong>transcendentally ideal</strong>: it is nothing at all apart from the conditions of our
          sensibility.
        </p>
      </Definition>

      <Example title="incongruent counterparts">
        <p>
          A right hand and a left hand are <strong>incongruent counterparts</strong>: alike in every internal relation of their
          parts, yet they cannot be made to coincide. If space were only a system of relations among the parts of things, as
          Leibniz held, the two hands would be indistinguishable. In 1768 Kant concluded that space is absolute. In the{" "}
          <em>Prolegomena</em> of 1783, he concluded instead that the difference can be grasped only in intuition, not by
          concepts, which suits his view that space is a form of intuition.
        </p>
      </Example>

      <Remark title="questions it raises">
        <p>
          If space is ours, are things in themselves not spatial at all? Kant says we cannot know, and seems to hold that they
          are not. Critics asked why space could not be both a form of our intuition and a feature of things, a worry that
          becomes pressing in the next lesson. Philosophers of physics still debate whether handedness tells against
          relationalism, and general relativity makes the geometry of physical space an empirical question.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What is space, according to the Transcendental Aesthetic?</p>,
      answer: {
        kind: "choice",
        options: [
          "A real container existing independently of us.",
          "An order of relations among things in themselves.",
          "The form of outer sense, a pure intuition.",
          "A concept abstracted from experience.",
        ],
        correct: [2],
      },
    },
    {
      key: "hands",
      rung: "check",
      prompt: <p>What is Kant&rsquo;s standard example of incongruent counterparts?</p>,
      answer: { kind: "choice", options: ["Two equal triangles", "A right hand and a left hand", "Two clocks", "The sun and the moon"], correct: [1] },
    },
    {
      key: "intuition",
      rung: "apply",
      prompt: <p>Why does Kant say space is an intuition rather than a concept?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is vague.",
          "Because there is only one space, and particular spaces are parts of it rather than instances under it.",
          "Because space is learnt from seeing.",
          "Because concepts are always false.",
        ],
        correct: [1],
      },
    },
    {
      key: "leibniz",
      rung: "apply",
      prompt: <p>Why are incongruent counterparts a problem for Leibniz&rsquo;s view of space?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because Leibniz denied that hands exist.",
          "Because the two hands share all internal relations, yet differ, so the difference is not captured by relations among parts.",
          "Because Leibniz thought space is three-dimensional.",
          "Because hands are made of monads.",
        ],
        correct: [1],
      },
    },
    {
      key: "ideal",
      rung: "apply",
      prompt: <p>What does it mean to call space transcendentally ideal?</p>,
      answer: {
        kind: "choice",
        options: [
          "That space is an illusion and objects are not really in it.",
          "That space is nothing apart from the conditions of our sensibility, though it holds of every object we can experience.",
          "That space is perfect.",
          "That space exists only in geometry books.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, give one of Kant&rsquo;s arguments that our representation of space is a priori.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an argument, such as: representing things as outside me presupposes space, so it cannot be learnt from such experience; or we can think space empty but not think it away.",
          "Concludes that space is not derived from experience. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "physics",
      rung: "stretch",
      prompt: (
        <p>
          General relativity says the geometry of physical space is curved and depends on matter. Does this refute Kant on
          space? Give your view.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes Kant took Euclidean geometry to describe the form of outer intuition a priori.",
          "Considers a reply, such as separating the form of intuition from the metric of physical space, or accepting that Kant was wrong about geometry.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kant's arguments that space is an a priori intuition, what it means for space to be empirically real but transcendentally ideal, and how incongruent counterparts bear on the debate between Newton and Leibniz.",

  glimpse: (
    <p>
      The next lesson treats time as the form of inner sense. After that, Kant explains how geometry and arithmetic can be
      synthetic a priori, and the Philosophy of Physics course returns to Newton, Leibniz and the spacetime of relativity.
    </p>
  ),
};
