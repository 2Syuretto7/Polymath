import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ShapesViz } from "@/components/viz/ShapesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p9.1.2",
  minutes: 90,
  links: {
    revisits: ["p9.1.1", "p8.3.2", "p8.1.3"],
    foreshadows: ["p9.1.3", "p9.1.4", "p19.1.1"],
  },

  puzzle: (
    <>
      <p>
        Hegel finished the <em>Phenomenology of Spirit</em> in Jena in 1806, he said, as Napoleon&rsquo;s armies arrived. It
        sets out to answer a question that seems to have no starting point: how can we test our knowledge without already
        assuming some standard of knowledge? Kant tried to examine the mind&rsquo;s powers before using them, which Hegel
        compared to learning to swim before going into the water. His alternative is to let each form of knowing examine
        itself.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Follow consciousness through its first four shapes. For each, see what it takes as true, how it fails by its own
        standard, and what that failure leaves behind.
      </p>
      <ShapesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the method">
        <p>
          A <strong>shape of consciousness</strong> is a way of taking the world, with its own idea of what is true. Hegel
          does not judge it from outside. He lets it compare its object with its own claim about that object; when the two
          fail to match, consciousness revises both, and a new shape arises. This failure is not a blank refutation but a{" "}
          <strong>determinate negation</strong>, with a definite content that the next shape inherits. The philosopher, says
          Hegel, need only look on.
        </p>
      </Definition>

      <Definition title="from sense-certainty to understanding">
        <p>
          Sense-certainty seems the richest knowledge, but when it tries to say what it knows, it can only say
          &ldquo;this&rdquo;, &ldquo;here&rdquo; and &ldquo;now&rdquo;, which are universals that apply to anything.
          Perception takes the object as a thing with properties, and cannot say whether the thing&rsquo;s unity lies in the
          thing or in the perceiver. Understanding posits forces and laws behind appearances, and discovers that this inner
          world is its own construction.
        </p>
      </Definition>

      <Example title="now is night">
        <p>
          Hegel asks us to write down a truth of sense-certainty, &ldquo;Now is night&rdquo;, and look at it again at noon:
          it has become stale. The now that survives is not this night but a universal now, indifferent to night or day. What
          we mean is the unique particular; what we say is always a universal. Language, Hegel remarks, is the more truthful.
        </p>
      </Example>

      <Remark title="the turn to self-consciousness">
        <p>
          The first part ends with consciousness discovering that in knowing objects it has been knowing itself. Here the
          book changes direction: self-consciousness is driven by desire, and finds that it can be satisfied only by another
          self-consciousness. The rest of the <em>Phenomenology</em> widens from individuals to communities, history, art and
          religion, ending in &ldquo;absolute knowing&rdquo;, spirit&rsquo;s comprehension of its own development.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "first",
      rung: "check",
      prompt: <p>What is the first shape of consciousness in the Phenomenology?</p>,
      answer: { kind: "choice", options: ["Self-consciousness", "Sense-certainty", "Reason", "Absolute knowing"], correct: [1] },
    },
    {
      key: "detneg",
      rung: "check",
      prompt: <p>What does Hegel mean by determinate negation?</p>,
      answer: {
        kind: "choice",
        options: [
          "Rejecting a view and starting again from nothing.",
          "A failure that has a definite result, which the next shape takes up.",
          "Denying that anything exists.",
          "A logical contradiction that ends inquiry.",
        ],
        correct: [1],
      },
    },
    {
      key: "night",
      rung: "apply",
      prompt: <p>What does the example of writing down &ldquo;Now is night&rdquo; show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That night is unreal.",
          "That sense-certainty, trying to state a pure particular, can only state a universal such as 'now'.",
          "That writing is unreliable.",
          "That time does not exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "swim",
      rung: "apply",
      prompt: <p>Why does Hegel compare Kant&rsquo;s critique to learning to swim before entering the water?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because Kant liked swimming.",
          "Because examining our powers of knowing before using them already requires using them.",
          "Because knowledge is like water.",
          "Because Kant ignored experience.",
        ],
        correct: [1],
      },
    },
    {
      key: "standard",
      rung: "apply",
      prompt: <p>Where does the standard come from by which each shape of consciousness is tested?</p>,
      answer: {
        kind: "choice",
        options: [
          "From the philosopher's own theory.",
          "From the shape itself, which compares its object with its own claim about that object.",
          "From sense experience alone.",
          "From God.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Hegel right that sense-certainty can only say universals? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Hegel's point: words like 'this' and 'now' apply to anything, so they do not capture the unique particular.",
          "Considers a reply, such as pointing, demonstratives with context, or Russell's knowledge by acquaintance.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "kant",
      rung: "stretch",
      prompt: <p>Compare Hegel&rsquo;s method with Kant&rsquo;s transcendental deduction. Which is more convincing?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Kant argues from the conditions of possible experience to fixed categories.",
          "Notes Hegel lets forms of knowing test and transform themselves historically, without a fixed starting point.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the problem Hegel's Phenomenology starts from, how each shape of consciousness is tested by its own standard, the example of 'Now is night', and how consciousness passes into self-consciousness.",

  glimpse: (
    <p>
      The next lesson reaches the most famous passage in the book, the struggle for recognition between lord and bondsman.
      Hegel&rsquo;s logic later makes the movement of determinate negation into a method, and Husserl&rsquo;s phenomenology
      gives the word a new sense.
    </p>
  ),
};
