import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "All men are mortal; Socrates is a man; therefore Socrates is mortal.",
    kind: "premise",
    note: "The textbook syllogism, long taken as the model of reasoning.",
  },
  {
    claim: "We cannot know that all men are mortal unless we already know that Socrates is mortal.",
    kind: "inference",
    note: "If the general premise is true, it covers Socrates. So the syllogism seems to assume what it proves: a petitio principii.",
    objection: "A defender of logic: the major premise may be known by testimony or by a law of nature, without checking Socrates individually.",
  },
  {
    claim: "The real evidence is the deaths of many particular men in the past.",
    kind: "premise",
    note: "Our fathers, their fathers, and everyone we have records of died. That is the ground on which we expect Socrates to die.",
  },
  {
    claim: "So all genuine inference is from particulars to particulars.",
    kind: "inference",
    note: "The general proposition is a register of inferences already made and a formula for making more, a memorandum, not the source of the conclusion.",
    objection: "But then what licenses moving from past particulars to new ones? Hume's problem of induction remains.",
  },
  {
    claim: "Induction rests on the uniformity of nature, itself known by induction from the most extensive experience.",
    kind: "conclusion",
    note: "Mill accepts the circle: the principle is the widest and best-confirmed generalisation we have, and it is self-correcting.",
    objection: "Critics, from Whewell onward, say this cannot answer the sceptic, and that science needs ideas the mind brings to experience.",
  },
];

export const lesson: LessonContent = {
  id: "p9.5.1",
  minutes: 85,
  links: {
    revisits: ["p7.5.3", "p3.3.4", "p1.1.3"],
    foreshadows: ["p9.5.2", "p22.1.4", "p16.6.2"],
  },

  puzzle: (
    <>
      <p>
        John Stuart Mill was taught Greek at three and logic at twelve, in his father&rsquo;s experiment in education. His{" "}
        <em>System of Logic</em> of 1843 became the standard text on scientific method for half a century. Its aim was
        radical: to show that all knowledge, including logic and mathematics, comes from experience. If even{" "}
        2 + 2 = 4 is a generalisation from observation, what could ever be known a priori?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Mill&rsquo;s argument about the syllogism, and challenge each step to hear the objections.</p>
      <ArgumentStepViz steps={STEPS} title="Mill on what inference really is" />
    </>
  ),

  theory: (
    <>
      <Definition title="radical empiricism">
        <p>
          Mill denies that there is any a priori knowledge of the world. Hume had allowed &ldquo;relations of ideas&rdquo; and
          Kant synthetic a priori truths; Mill holds that the axioms of geometry and arithmetic are inductive
          generalisations, so well confirmed that we cannot imagine them false. That inconceivability, he argues, reflects
          our habits, not necessity.
        </p>
      </Definition>

      <Definition title="the methods of experimental inquiry">
        <p>
          Mill systematised the ways of finding causes. The <strong>method of agreement</strong> looks for the one
          circumstance common to all cases of an effect; the <strong>method of difference</strong> compares a case with the
          effect and one without, differing in a single circumstance. He added the joint method, the method of residues and
          the method of concomitant variations. The method of difference, as in a controlled experiment, is the strongest.
        </p>
      </Definition>

      <Example title="arithmetic from pebbles">
        <p>
          Why do we believe that two and two make four? Mill says: because whenever we put two pebbles with two more, we
          find four, in endlessly many cases. Frege later mocked this: who has ever seen a number like 1,000,000,000,000,
          and what observed facts underlie arithmetic with zero, or with very large numbers? Mill&rsquo;s view still has
          defenders, but most philosophers of mathematics reject it.
        </p>
      </Example>

      <Remark title="induction and its justification">
        <p>
          Mill grounds every induction in the principle that nature is uniform, which is itself known by induction, the
          most general of all. He thought the circularity harmless because the principle is constantly tested. Whewell
          replied that science requires the mind to bring ideas to the facts, a debate continued by later philosophers of
          science over observation and theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "book",
      rung: "check",
      prompt: <p>What was Mill&rsquo;s major work on logic and scientific method?</p>,
      answer: { kind: "choice", options: ["On Liberty", "A System of Logic", "Utilitarianism", "The Subjection of Women"], correct: [1] },
    },
    {
      key: "petitio",
      rung: "check",
      prompt: <p>What charge does Mill bring against the syllogism?</p>,
      answer: {
        kind: "choice",
        options: [
          "That it is invalid.",
          "That its general premise already assumes the conclusion, a petitio principii.",
          "That it has too many premises.",
          "That it is about Socrates.",
        ],
        correct: [1],
      },
    },
    {
      key: "diff",
      rung: "apply",
      prompt: <p>Two identical plants are given the same treatment, except one gets fertiliser, and only that one flowers. Which method does this illustrate?</p>,
      answer: { kind: "choice", options: ["Agreement", "Difference", "Residues", "Concomitant variations"], correct: [1] },
    },
    {
      key: "agree",
      rung: "apply",
      prompt: <p>Several people fall ill after different meals, but all ate the same salad. Which method points to the salad?</p>,
      answer: { kind: "choice", options: ["Agreement", "Difference", "Residues", "Concomitant variations"], correct: [0] },
    },
    {
      key: "maths",
      rung: "apply",
      prompt: <p>What is Mill&rsquo;s view of the truths of arithmetic?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are known a priori.",
          "They are very well confirmed generalisations from experience.",
          "They are true by convention.",
          "They are innate ideas.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is 2 + 2 = 4 known from experience, as Mill thought? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Mill's view and his reason, such as experience with collections of objects.",
          "Considers an objection, such as Frege's point about large numbers or the apparent necessity of arithmetic.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "circle",
      rung: "stretch",
      prompt: <p>Mill justifies induction by the uniformity of nature, known by induction. Is this circle vicious?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why the justification looks circular.",
          "Considers a defence, such as that the principle is self-correcting, or that no non-circular justification is possible for anyone.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Mill's radical empiricism, his argument that the syllogism begs the question and that inference is from particulars to particulars, his methods of experimental inquiry, and his account of arithmetic and its critics.",

  glimpse: (
    <p>
      The next lesson turns to Mill&rsquo;s On Liberty and the harm principle. The Philosophy of Mathematics course returns
      to his empiricism about number, and the philosophy of science weighs inductive arguments about the success of science.
    </p>
  ),
};
