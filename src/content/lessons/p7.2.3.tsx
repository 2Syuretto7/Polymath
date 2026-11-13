import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MonadViz } from "@/components/viz/MonadViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.2.3",
  minutes: 85,
  links: {
    revisits: ["p7.2.1", "p6.5.1", "p7.1.5"],
    foreshadows: ["p7.2.4", "p7.2.5", "p7.6.2"],
  },

  puzzle: (
    <>
      <p>
        Gottfried Wilhelm Leibniz invented the calculus independently of Newton, designed a calculating machine, worked as a
        diplomat, librarian and historian, and wrote to hundreds of correspondents. In 1714, two years before his death, he
        summed up his metaphysics in ninety short paragraphs, now called the Monadology. Its startling claim is that the world
        is made not of tiny material atoms but of simple, unextended substances, each of which perceives the whole universe
        and none of which can be affected by any other. What led him there?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each circle is a monad. Click one to take its point of view, and see how it represents the others.
      </p>
      <MonadViz />
    </>
  ),

  theory: (
    <>
      <Definition title="monads">
        <p>
          A <strong>monad</strong> is a simple substance, one with no parts. Leibniz argues: there are composite things, and a
          composite is only a collection of simples, so there must be simples. Whatever is extended can be divided, so the
          simples cannot be extended: they have no shape or size. They cannot come into being or perish naturally, by
          composition or decomposition, but only all at once, by creation or annihilation. Material atoms, extended but
          indivisible, are impossible.
        </p>
      </Definition>

      <Definition title="perception and appetition">
        <p>
          Monads differ only by their inner states. <strong>Perception</strong> is the representation of the many in the one:
          each monad represents the whole universe from its own point of view, as one town looks different from each side.{" "}
          <strong>Appetition</strong> is the striving by which a monad passes from one perception to the next. Monads
          &ldquo;have no windows through which anything could come in or go out&rdquo;: nothing passes between them. Each
          unfolds its states from within, according to its own law.
        </p>
      </Definition>

      <Example title="the mill and the sea">
        <p>
          Imagine a machine that thinks and feels, enlarged until you could walk inside it as into a mill. You would find only
          parts pushing one another, and never anything that explains a perception. So perception must be sought in simple
          substances, not in mechanisms. Most perceptions are unconscious: the roar of the sea is made of the sounds of
          countless waves, each too small to notice alone. These <strong>petites perceptions</strong> allow degrees: bare
          monads with only confused perceptions, souls with memory, and minds capable of reason and self-awareness.
        </p>
      </Example>

      <Remark title="indiscernibles and bodies">
        <p>
          By the <strong>identity of indiscernibles</strong>, no two monads are exactly alike, since nothing would explain
          their being two. Leibniz told of courtiers in the garden at Herrenhausen who searched in vain for two perfectly
          identical leaves. Bodies, for Leibniz, are aggregates of monads, &ldquo;well-founded phenomena&rdquo; rather than
          substances. Critics ask how windowless monads can make up one world at all; his answer, the pre-established
          harmony, is the subject of the next lesson. The mill argument is still discussed as an early version of the
          question whether consciousness can be explained mechanically.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "monad",
      rung: "check",
      prompt: <p>What is a monad?</p>,
      answer: {
        kind: "choice",
        options: ["A tiny material atom", "A simple substance with no parts, and so no extension", "A collection of bodies", "A single thought"],
        correct: [1],
      },
    },
    {
      key: "windows",
      rung: "check",
      prompt: <p>What does Leibniz mean by saying that monads have no windows?</p>,
      answer: {
        kind: "choice",
        options: [
          "That monads cannot perceive.",
          "That nothing can enter or leave a monad: no monad acts on another, and each unfolds its states from within.",
          "That monads are in darkness.",
          "That monads have no location.",
        ],
        correct: [1],
      },
    },
    {
      key: "mill",
      rung: "apply",
      prompt: <p>What does the mill argument conclude?</p>,
      answer: {
        kind: "choice",
        options: [
          "That machines can think.",
          "That perception cannot be explained by parts pushing one another, so it must belong to simple substances.",
          "That mills are monads.",
          "That the brain is the seat of the soul.",
        ],
        correct: [1],
      },
    },
    {
      key: "leaves",
      rung: "apply",
      prompt: <p>Which principle does the story of the search for two identical leaves illustrate?</p>,
      answer: {
        kind: "choice",
        options: ["The principle of sufficient reason", "The identity of indiscernibles", "Ockham's razor", "The conservation of motion"],
        correct: [1],
      },
    },
    {
      key: "sea",
      rung: "apply",
      prompt: <p>What does the roar of the sea illustrate?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the sea is a monad.",
          "That a conscious perception can be composed of many tiny perceptions, each too small to notice.",
          "That sound travels through water.",
          "That perception requires a body.",
        ],
        correct: [1],
      },
    },
    {
      key: "simples",
      rung: "prove",
      prompt: <p>Set out Leibniz&rsquo;s argument that there must be simple substances, and why they cannot be extended.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument: composites exist, a composite is a collection of simples, so simples exist.",
          "Explains that anything extended is divisible, so a simple, having no parts, cannot be extended.",
        ],
      },
    },
    {
      key: "machine",
      rung: "stretch",
      prompt: <p>Does the mill argument show that perception cannot be mechanical? Assess it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the argument: inspecting the parts of a machine reveals only pushes, never a perception.",
          "Gives a response, such as that perception might be a property of the whole system, as a function of its organisation, rather than of any visible part.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what monads are and why Leibniz thought there must be such simple substances, what perception and appetition are, the meaning of windowless, the mill argument, and the identity of indiscernibles.",

  glimpse: (
    <p>
      The next lesson explains how windowless monads agree, through a harmony set up by God, and why Leibniz thought this is
      the best of all possible worlds. His dispute with Newton&rsquo;s follower Clarke over space comes later in the course.
    </p>
  ),
};
