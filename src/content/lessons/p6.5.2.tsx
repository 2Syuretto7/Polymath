import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RazorViz } from "@/components/viz/RazorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p6.5.2",
  minutes: 80,
  links: {
    revisits: ["p6.5.1", "p6.3.2", "p6.3.3"],
    foreshadows: ["p6.5.3", "p11.1.2", "p16.6.1"],
  },

  puzzle: (
    <>
      <p>
        William of Ockham, an English Franciscan, was summoned to the papal court at Avignon in 1324 to answer charges of
        heresy. He fled in 1328, was excommunicated, and spent his last twenty years under the protection of the Holy Roman
        Emperor in Munich, writing against the pope. His name survives today in a principle used by scientists, doctors and
        detectives: do not multiply entities beyond necessity. What did he use it to cut away, and is it a good rule?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each theory accounts for the same observations about a loaf of bread. Compare what each posits, and see which one
        the razor prefers.
      </p>
      <RazorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the razor">
        <p>
          <strong>Ockham&rsquo;s razor</strong> is the principle of parsimony: plurality should not be posited without
          necessity. The famous phrasing, entities are not to be multiplied beyond necessity, is not found in his writings,
          but the idea runs through them. For Ockham, we may posit something only if it is self-evident, known by
          experience, or required by the authority of scripture. The razor is not a claim that the world is simple, and
          Ockham, as a theologian, insisted that God could do many things in ways we cannot see.
        </p>
      </Definition>

      <Definition title="nominalism">
        <p>
          Ockham held that everything that exists outside the mind is individual. There are no universals in things, and
          no common natures with Scotus&rsquo;s formal distinction, which Ockham thought incoherent: if the nature and the
          haecceity are distinct, they are two things; if not, they are one. A universal is a <strong>sign</strong>, a
          concept in the mind that naturally signifies many individuals, as smoke signifies fire. Words such as human are
          conventional signs subordinated to these natural mental signs.
        </p>
      </Definition>

      <Example title="cutting categories">
        <p>
          Aristotle listed ten categories of being, including quantity, relation and place. Ockham argued that only
          substances and some qualities are real things. Relations are not further entities: Socrates is similar to Plato
          simply because Socrates is white and Plato is white. Quantity is not a thing over and above extended
          substances. He used the razor, together with arguments that God could make the supposed entities exist apart, to
          shrink the furniture of the world.
        </p>
      </Example>

      <Remark title="the razor today">
        <p>
          The razor is now a general rule of theory choice, used in science when two theories fit the evidence equally:
          prefer the one with fewer assumptions. Why should simpler theories be more likely true? Some say simplicity is
          only a practical convenience; others give probabilistic reasons, since a theory with fewer adjustable parts is
          less likely to fit the data by accident. Ockham&rsquo;s logic, with its theory of how terms stand for things,
          also anticipated much of modern philosophy of language.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "razor",
      rung: "check",
      prompt: <p>What does Ockham&rsquo;s razor say?</p>,
      answer: {
        kind: "choice",
        options: [
          "The simplest theory is always true.",
          "Plurality should not be posited without necessity.",
          "Only God exists.",
          "Every word names a thing.",
        ],
        correct: [1],
      },
    },
    {
      key: "nominalism",
      rung: "check",
      prompt: <p>What, for Ockham, is a universal?</p>,
      answer: {
        kind: "choice",
        options: [
          "A real thing shared by many individuals.",
          "A sign, a concept in the mind that signifies many individuals.",
          "A Platonic Form.",
          "A haecceity.",
        ],
        correct: [1],
      },
    },
    {
      key: "relation",
      rung: "apply",
      prompt: <p>How does Ockham explain that Socrates is similar to Plato?</p>,
      answer: {
        kind: "choice",
        options: [
          "By a real relation of similarity existing between them.",
          "Simply by each being white, with no further entity needed.",
          "By the universal whiteness.",
          "He denies they are similar.",
        ],
        correct: [1],
      },
    },
    {
      key: "posit",
      rung: "apply",
      prompt: <p>According to Ockham, which are legitimate grounds for positing something? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["It is self-evident.", "It is known by experience.", "It makes a theory more elegant.", "It is required by scripture."],
        correct: [0, 1, 3],
      },
    },
    {
      key: "formal",
      rung: "apply",
      prompt: <p>Why did Ockham reject Scotus&rsquo;s formal distinction between common nature and haecceity?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because he thought it was too simple.",
          "Because either the two are distinct things or they are one; there is no third option.",
          "Because it was condemned by the pope.",
          "Because he thought only universals exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "why",
      rung: "prove",
      prompt: (
        <p>
          Why should we prefer simpler theories, if the world might be complicated? Give one reason for the razor and one
          worry about it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a reason, such as that unnecessary posits have no evidence for them, or that simpler theories are less likely to fit data by accident.",
          "Gives a worry, such as that the razor assumes the world is simple, or that simplicity is hard to measure, and reaches a view.",
        ],
      },
    },
    {
      key: "trinity",
      rung: "stretch",
      prompt: (
        <p>
          Ockham accepted the doctrine of the Trinity, which seems to need more distinctions than his nominalism allows.
          How might he reconcile them, and does this show a limit to the razor?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that Ockham allowed scripture and church authority as grounds for positing, so the razor does not cut revealed truths.",
          "Assesses whether this makes the razor a defeasible rule rather than a principle about reality, and reaches a view.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Ockham's razor says and what Ockham used it for, his nominalist account of universals as signs, and why people still use the razor today.",

  glimpse: (
    <p>
      The final lesson of the medieval course asks how the late medieval debates prepared the way for modern philosophy and
      science.
    </p>
  ),
};
