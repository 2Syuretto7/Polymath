import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["basic belief", "inferred belief"];
const ITEMS: SortItem[] = [
  {
    text: "I am in pain.",
    cat: "basic belief",
    why: "A classical foundationalist example: justified by the experience itself, and hard to be wrong about.",
  },
  {
    text: "It seems to me that I see something red.",
    cat: "basic belief",
    why: "A report of how things appear, not how they are. Classical foundationalists take such beliefs as certain.",
  },
  {
    text: "There is a ripe tomato on the table.",
    cat: "inferred belief",
    why: "For a classical foundationalist, inferred from how things look. Moderate foundationalists may count it as basic but fallible.",
  },
  {
    text: "The sun will rise tomorrow.",
    cat: "inferred belief",
    why: "Inferred inductively from past experience.",
  },
  {
    text: "If a = b and b = c, then a = c.",
    cat: "basic belief",
    why: "A self-evident truth of reason, grasped by understanding it.",
  },
  {
    text: "Electrons have negative charge.",
    cat: "inferred belief",
    why: "Inferred from experiments and theory, often through testimony.",
  },
  {
    text: "Other people have minds.",
    cat: "inferred belief",
    why: "Traditionally inferred from their behaviour, though some philosophers argue this belief is basic too.",
  },
];

export const lesson: LessonContent = {
  id: "p10.2.2",
  minutes: 80,
  links: {
    revisits: ["p10.2.1", "p7.1.1", "p7.5.1"],
    foreshadows: ["p10.2.3", "p10.5.1", "p18.6.1"],
  },

  puzzle: (
    <>
      <p>
        Descartes wanted to rebuild knowledge like a house, on foundations that could not be shaken. Many philosophers since
        have shared the picture: some beliefs support themselves, and the rest stand on them. Which beliefs could be the
        foundations, and how much can they hold up?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>For a traditional foundationalist, sort each belief by whether it is basic or must be inferred from others.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Basic or inferred, for a classical foundationalist?" />
    </>
  ),

  theory: (
    <>
      <Definition title="foundationalism">
        <p>
          There are <strong>basic beliefs</strong>, justified but not by inference from other beliefs, and every other justified
          belief is justified by a chain of inference that ends in basic beliefs. This stops the regress at the foundations.
        </p>
      </Definition>

      <Example title="classical foundationalism">
        <p>
          Descartes, and later empiricists such as C. I. Lewis, held that basic beliefs must be infallible or certain: beliefs
          about one&rsquo;s own mind, like seeming to see red, and self-evident truths of reason. Everything else must be
          deduced, or at least well supported, from these. The trouble is that so little can be derived from so little:
          neither the external world nor the past follows from how things seem now.
        </p>
      </Example>

      <Definition title="moderate foundationalism">
        <p>
          Basic beliefs need only be justified to some degree, and can be fallible. Perceptual beliefs, like that there is a
          tomato on the table, can be basic, justified by experience unless there are defeaters. Phenomenal conservatism holds
          that if it seems to you that p, you thereby have some justification for p.
        </p>
      </Definition>

      <Remark title="the Sellarsian dilemma">
        <p>
          Wilfrid Sellars attacked &ldquo;the myth of the given&rdquo;. If an experience has propositional content that can
          justify a belief, it seems to need justification itself; if it lacks such content, how can it justify anything? Either
          way the foundations seem to fail. Foundationalists reply that experiences can have content and justify without
          themselves needing justification, since they are not beliefs.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a basic belief, for a foundationalist?</p>,
      answer: {
        kind: "choice",
        options: [
          "A belief that is simple to state.",
          "A belief that is justified but not by inference from other beliefs.",
          "A belief everyone shares.",
          "An unjustified belief.",
        ],
        correct: [1],
      },
    },
    {
      key: "classical",
      rung: "check",
      prompt: <p>What does classical foundationalism require of basic beliefs?</p>,
      answer: { kind: "choice", options: ["That they be certain or infallible", "That they be popular", "That they be about physics", "Nothing at all"], correct: [0] },
    },
    {
      key: "problem",
      rung: "apply",
      prompt: <p>What is the main problem for classical foundationalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "It allows too many basic beliefs.",
          "Too little can be derived from certain foundations to support our ordinary beliefs about the world.",
          "It denies that experience matters.",
          "It accepts circular reasoning.",
        ],
        correct: [1],
      },
    },
    {
      key: "moderate",
      rung: "apply",
      prompt: <p>On moderate foundationalism, can the belief that there is a tomato on the table be basic?</p>,
      answer: {
        kind: "choice",
        options: [
          "No, only certain beliefs can be basic.",
          "Yes: it can be justified directly by perceptual experience, though it is fallible.",
          "Only if inferred from sense data.",
          "Only for experts.",
        ],
        correct: [1],
      },
    },
    {
      key: "sellars",
      rung: "apply",
      prompt: <p>What is the dilemma in Sellars&rsquo;s attack on the given?</p>,
      answer: {
        kind: "choice",
        options: [
          "Experience is either too vivid or too faint.",
          "If experience has content it seems to need justification; if it lacks content it cannot justify.",
          "Either we are dreaming or we are not.",
          "Beliefs are either true or false.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a fallible belief be a foundation? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the classical demand for certainty and its motivation.",
          "Considers the moderate view that fallible beliefs can still be justified non-inferentially.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "seem",
      rung: "stretch",
      prompt: <p>Phenomenal conservatism says that if it seems to you that p, you have some justification for p. Is this too permissive? Consider someone to whom it seems that their horoscope is reliable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the principle and its appeal.",
          "Applies it to the horoscope case, noting possible defeaters or the role of background beliefs.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend foundationalism and how it stops the regress, the difference between classical and moderate foundationalism with examples of basic beliefs, the problem of deriving enough from the foundations, and Sellars's attack on the given.",

  glimpse: (
    <p>
      The next lesson examines coherentism, which rejects foundations altogether. Later lessons ask how perception justifies
      belief, and analytic philosophy questions the distinction between experience and theory.
    </p>
  ),
};
