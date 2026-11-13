import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SubstratumViz } from "@/components/viz/SubstratumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.3.3",
  minutes: 75,
  links: {
    revisits: ["p7.3.2", "p4.5.3", "p7.2.1"],
    foreshadows: ["p7.4.2", "p7.5.4", "p11.1.3"],
  },

  puzzle: (
    <>
      <p>
        Locke tells the story of an Indian philosopher who said the world rested on a great elephant. Asked what held up the
        elephant, he said a tortoise. Asked what held up the tortoise, he said: something, he knew not what. Locke thought
        we are in the same position about substance. A piece of gold is yellow, heavy, malleable and soluble in aqua regia.
        These are qualities, and qualities cannot float free. What has them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Take the qualities away from the lump of gold one at a time, and see what you can still think of when they are gone.
        Then compare what the word &ldquo;gold&rdquo; means with what makes gold what it is.
      </p>
      <SubstratumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="substance in general">
        <p>
          Our idea of a particular substance, such as gold or a horse, is a collection of simple ideas that we find going
          constantly together. Not being able to imagine how they could exist by themselves, we suppose a{" "}
          <strong>substratum</strong> in which they subsist and from which they result. Of this pure substance in general,
          Locke says, we have no idea except of &ldquo;something, I know not what&rdquo;, the supposed support of qualities.
        </p>
      </Definition>

      <Definition title="nominal and real essence">
        <p>
          The <strong>nominal essence</strong> of gold is the complex idea the word stands for: yellow, heavy, malleable,
          fusible. We make it, and it fixes what we call gold. The <strong>real essence</strong> is the internal constitution
          of the insensible parts on which those qualities depend. Locke held that it exists but is unknown to us, so our
          sorting of things into kinds is made by us, from nominal essences, not read off nature.
        </p>
      </Definition>

      <Example title="the old and the new">
        <p>
          Aristotle made substance the primary being: Socrates, this horse. Descartes and Spinoza defined substance as what
          needs nothing else to exist. Locke&rsquo;s account is more modest and more empiricist: since all ideas come from
          experience, and we never experience a support as opposed to the qualities it supports, our idea of substance is
          obscure and relative. He does not deny that there is substance. He denies we know what it is.
        </p>
      </Example>

      <Remark title="where it led">
        <p>
          Berkeley asked why we should believe in an unknowable material substratum at all, when a thing can simply be a
          collection of ideas. Hume went further and applied the same doubt to the self, the substance supposed to support
          our perceptions. In modern metaphysics, the <strong>bundle theory</strong> holds that an object is nothing but its
          properties tied together, while <strong>substratum theory</strong> keeps a bare particular to hold them. On real
          essence, many think Locke was right that it is hidden but wrong that it is unknowable: chemistry found that gold is
          the element with 79 protons.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "know",
      rung: "check",
      prompt: <p>What, according to Locke, is our idea of substance in general?</p>,
      answer: {
        kind: "choice",
        options: [
          "A clear and distinct innate idea.",
          "The idea of something, we know not what, that supports qualities.",
          "The idea of extension.",
          "The idea of God.",
        ],
        correct: [1],
      },
    },
    {
      key: "nominal",
      rung: "check",
      prompt: <p>Which of these describes the nominal essence of gold?</p>,
      answer: {
        kind: "choice",
        options: [
          "The internal structure of its particles.",
          "The complex idea the word gold stands for, such as yellow, heavy and malleable.",
          "Its price.",
          "Its substratum.",
        ],
        correct: [1],
      },
    },
    {
      key: "elephant",
      rung: "apply",
      prompt: <p>What is the point of the story of the elephant and the tortoise?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the world is held up by animals.",
          "That positing a support for qualities, and then saying nothing about it, explains no more than the tortoise does.",
          "That Indian philosophy is mistaken.",
          "That substances are animals.",
        ],
        correct: [1],
      },
    },
    {
      key: "kinds",
      rung: "apply",
      prompt: <p>Why did Locke think our classifications of things into kinds are made by us?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because he thought nature has no structure.",
          "Because we sort by nominal essences, which we form, since real essences are unknown to us.",
          "Because God made the kinds.",
          "Because language is innate.",
        ],
        correct: [1],
      },
    },
    {
      key: "bundle",
      rung: "apply",
      prompt: <p>What does the bundle theory say an object is?</p>,
      answer: {
        kind: "choice",
        options: [
          "A bare substratum with no properties.",
          "Nothing but its properties, bound together.",
          "An idea in the mind of God.",
          "A collection of atoms in the void.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Do we need a substratum to hold an object&rsquo;s qualities together? Give one reason for and one against, and say
          which you find stronger.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a reason for, such as qualities seeming to need a bearer, or two exactly similar objects being distinct.",
          "Gives a reason against, such as the empiricist point that we never experience a bare substratum.",
          "States which is stronger. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "gold",
      rung: "stretch",
      prompt: (
        <p>
          Chemistry tells us gold is the element with atomic number 79. Has science discovered the real essence of gold, and
          does that refute Locke?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that atomic structure looks like a real essence in Locke's sense, the inner constitution behind the qualities.",
          "Considers whether Locke only said it was unknown, not unknowable, or whether science still leaves something hidden.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Locke's idea of substance as something we know not what, the difference between nominal and real essence, and how Berkeley, Hume and modern bundle theorists responded.",

  glimpse: (
    <p>
      The next lesson asks what makes a person the same over time, and Locke&rsquo;s answer sets substance aside entirely.
      Berkeley will abolish material substance, and Hume will treat the self as a bundle; the Metaphysics course takes up the
      bundle theory again in its study of tropes.
    </p>
  ),
};
