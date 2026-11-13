import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "No belief can be a reason for itself, either directly or through a chain that loops back to it.",
    kind: "premise",
    note: "Klein's principle of avoiding circularity. It rules out coherentism, at least in its linear form.",
  },
  {
    claim: "For every justified belief there is a reason available for it, and no reason is the last one available.",
    kind: "premise",
    note: "Klein's principle of avoiding arbitrariness. A belief with no reason behind it would be held arbitrarily.",
    objection: "A foundationalist: basic beliefs are not arbitrary, since experience supports them without being a further belief.",
  },
  {
    claim: "So any chain of reasons behind a justified belief never ends.",
    kind: "inference",
    note: "From the second principle: whenever a reason is reached, another is available behind it.",
  },
  {
    claim: "And it never repeats.",
    kind: "inference",
    note: "From the first principle: a repeat would make some belief a reason for itself.",
  },
  {
    claim: "A reason need only be available to the believer, not consciously thought of.",
    kind: "premise",
    note: "Klein compares this to knowing infinitely many arithmetic facts, such as that 1001 > 1000, without having considered them.",
    objection: "The finite mind objection: we cannot have infinitely many beliefs available as reasons, since we can grasp only finitely many thoughts.",
  },
  {
    claim: "So justification requires an infinite, non-repeating series of available reasons, and our beliefs can have it.",
    kind: "conclusion",
    note: "Klein adds that justification comes in degrees, growing as more of the chain is actually supplied.",
    objection: "The no-source objection: if no reason is justified to begin with, adding more unjustified reasons cannot create justification.",
  },
];

export const lesson: LessonContent = {
  id: "p10.2.4",
  minutes: 75,
  links: {
    revisits: ["p10.2.1", "p10.2.2", "p10.2.3"],
    foreshadows: ["p10.3.1", "p10.4.1", "p10.3.2"],
  },

  puzzle: (
    <>
      <p>
        A child keeps asking &ldquo;but why?&rdquo;, and you eventually say &ldquo;because I said so&rdquo;. Was that the moment
        your reasons ran out, or only your patience? Perhaps there is always another reason to give, and a belief is justified
        precisely because the questions could go on for ever.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Peter Klein&rsquo;s case for infinitism, and challenge the steps to hear the main objections.</p>
      <ArgumentStepViz steps={STEPS} title="Klein's argument for infinitism" />
    </>
  ),

  theory: (
    <>
      <Definition title="infinitism">
        <p>
          A belief is justified only if there is an infinite, non-repeating chain of reasons available for it. Of
          Agrippa&rsquo;s three horns, the infinitist grasps the second: the regress is real, and not vicious.
        </p>
      </Definition>

      <Example title="Klein's two principles">
        <p>
          Peter Klein revived infinitism in 1999. The principle of avoiding circularity rules out loops, and the principle of
          avoiding arbitrariness rules out stopping points. Together they leave only an infinite chain.
        </p>
      </Example>

      <Remark title="the finite mind objection">
        <p>
          We are finite creatures, so how can infinitely many reasons be available to us? Klein replies that availability is
          a disposition, not a list in the head: anyone who understands numbers can recognise infinitely many truths about
          them. Critics answer that most of the long reasons would be too complex for any human to grasp.
        </p>
      </Remark>

      <Remark title="the no-source objection">
        <p>
          A chain of reasons only transmits justification. If no link has it to begin with, an infinite chain is like an
          infinite line of people passing a bucket that was never filled. Klein replies that, for the infinitist,
          justification is not transmitted but emerges, and comes in degrees: the more of the chain one has actually worked
          through, the better justified the belief is. On this view, complete justification is never achieved.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does infinitism say about the chain of reasons behind a justified belief?</p>,
      answer: {
        kind: "choice",
        options: [
          "It ends in basic beliefs.",
          "It is infinite and never repeats.",
          "It loops back to the start.",
          "There is no chain at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "principles",
      rung: "check",
      prompt: <p>Which two principles does Klein use to argue for infinitism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Avoiding circularity",
          "Avoiding arbitrariness",
          "Avoiding scepticism",
          "Avoiding testimony",
        ],
        correct: [0, 1],
      },
    },
    {
      key: "finite",
      rung: "apply",
      prompt: <p>How does Klein answer the objection that a finite mind cannot have infinitely many reasons?</p>,
      answer: {
        kind: "choice",
        options: [
          "He says the mind is infinite.",
          "Reasons need only be available, like the infinitely many arithmetic truths we can recognise without having thought of them.",
          "He gives up the infinite chain.",
          "He says only God has knowledge.",
        ],
        correct: [1],
      },
    },
    {
      key: "source",
      rung: "apply",
      prompt: <p>What is the no-source objection to infinitism?</p>,
      answer: {
        kind: "choice",
        options: [
          "That reasons come from nowhere in particular.",
          "That if no reason in the chain is justified to begin with, the chain cannot create justification.",
          "That infinitism ignores testimony.",
          "That the chain must loop.",
        ],
        correct: [1],
      },
    },
    {
      key: "degree",
      rung: "apply",
      prompt: <p>On Klein&rsquo;s view, how does justification come in degrees?</p>,
      answer: {
        kind: "choice",
        options: [
          "It grows as more of the chain of reasons is actually supplied.",
          "It depends on how many people agree.",
          "It halves with each step of the chain.",
          "It does not come in degrees.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the no-source objection decisive against infinitism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the objection, for example with the empty bucket image.",
          "Considers Klein's reply that justification emerges and comes in degrees.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "child",
      rung: "stretch",
      prompt: <p>When you tell a child &ldquo;because I said so&rdquo;, which theory of justification best describes what has happened: foundationalism, coherentism or infinitism?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes what each theory would say about the conversation stopping.",
          "Distinguishes running out of reasons from running out of patience.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend infinitism, Klein's principles of avoiding circularity and arbitrariness, the finite mind objection with the reply about available reasons, and the no-source objection with the reply that justification comes in degrees.",

  glimpse: (
    <p>
      The next chapter turns from the structure of justification to what justification is: reliable processes, or fitting
      the evidence. Scepticism will later press the regress from a new direction.
    </p>
  ),
};
