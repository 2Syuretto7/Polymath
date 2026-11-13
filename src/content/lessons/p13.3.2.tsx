import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "If lying is wrong, then getting your little brother to lie is wrong.",
    kind: "premise",
    note: "Here “lying is wrong” is not asserted. It sits inside an “if”, so no one is expressing disapproval of lying by saying it.",
  },
  {
    claim: "Lying is wrong.",
    kind: "premise",
    note: "Asserted on its own. The expressivist says this expresses disapproval of lying: roughly, “Boo to lying!”",
  },
  {
    claim: "The phrase “lying is wrong” must mean the same in both premises.",
    kind: "inference",
    note: "Otherwise the argument equivocates, like “banks are by rivers; I keep money in banks”.",
    objection: "But if its meaning is the attitude it expresses, it means different things in the two premises, since only the second expresses disapproval.",
  },
  {
    claim: "So getting your little brother to lie is wrong.",
    kind: "conclusion",
    note: "The argument is plainly valid. Peter Geach, following Frege, asked how expressivism can explain that.",
    objection: "Simon Blackburn and Allan Gibbard reply that conditionals express higher-order attitudes, such as disapproving of approving one thing while not disapproving of the other, and that inconsistency in attitudes explains validity.",
  },
];

export const lesson: LessonContent = {
  id: "p13.3.2",
  minutes: 80,
  links: {
    revisits: ["p13.3.1", "p7.5.5", "p5.1.1"],
    foreshadows: ["p13.3.3", "p30.3.1", "p13.4.2"],
  },

  puzzle: (
    <>
      <p>
        When a football fan shouts &ldquo;Goal!&rdquo;, they are not describing anything; they are cheering. Perhaps
        &ldquo;cruelty is wrong&rdquo; works in the same way: not a report of a fact, but an expression of a feeling against
        cruelty. That would explain why moral words move us. But can a cheer appear inside an argument?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Geach&rsquo;s challenge. Each premise and the conclusion uses the same moral phrase.</p>
      <ArgumentStepViz title="The Frege–Geach problem" steps={STEPS} />
    </>
  ),

  theory: (
    <>
      <Definition title="non-cognitivism">
        <p>
          Moral judgements are not beliefs that represent the world as being a certain way, and so are not true or false in
          the ordinary sense. They express non-cognitive states: attitudes, feelings, commitments or plans.
        </p>
      </Definition>

      <Example title="emotivism and prescriptivism">
        <p>
          A. J. Ayer held that &ldquo;stealing is wrong&rdquo; expresses disapproval, as if one said &ldquo;stealing!&rdquo;
          in a shocked tone. C. L. Stevenson added that moral words aim to influence others. R. M. Hare held that moral
          judgements are universal prescriptions: to say that I ought to keep promises is to command that anyone in my
          position keep them.
        </p>
      </Example>

      <Remark title="its attractions">
        <p>
          Non-cognitivism explains the open question: no description of natural facts settles which attitude to take. It
          explains why sincerely judging something wrong tends to motivate. And it needs no strange moral facts, so it fits
          a scientific picture of the world.
        </p>
      </Remark>

      <Definition title="the Frege–Geach problem">
        <p>
          Moral sentences appear in unasserted contexts, such as conditionals, questions and negations, where nothing is
          expressed. An account of their meaning in terms of the attitude they express must explain their meaning there too,
          and explain why arguments like moral modus ponens are valid.
        </p>
      </Definition>

      <Remark title="quasi-realism">
        <p>
          Blackburn&rsquo;s programme tries to earn, from attitudes alone, the right to talk of moral truth, facts and
          knowledge, as realists do. If it succeeds, expressivism mimics realist talk while keeping a lean metaphysics. Critics
          ask whether the result is then distinguishable from realism at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>According to non-cognitivism, what does &ldquo;cruelty is wrong&rdquo; do?</p>,
      answer: {
        kind: "choice",
        options: [
          "Describes a non-natural property of cruelty.",
          "Expresses an attitude against cruelty, rather than stating a fact.",
          "Reports what most people believe.",
          "Says nothing at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "who",
      rung: "check",
      prompt: <p>Who held that moral judgements are universal prescriptions?</p>,
      answer: { kind: "choice", options: ["A. J. Ayer", "R. M. Hare", "G. E. Moore", "J. L. Mackie"], correct: [1] },
    },
    {
      key: "motiv",
      rung: "apply",
      prompt: <p>Which feature of moral judgement is non-cognitivism best placed to explain?</p>,
      answer: {
        kind: "choice",
        options: [
          "That moral claims are about physics.",
          "That sincerely judging something wrong tends to motivate the speaker.",
          "That moral claims can be proved like theorems.",
          "That everyone agrees about morality.",
        ],
        correct: [1],
      },
    },
    {
      key: "embed",
      rung: "apply",
      prompt: <p>In which sentence is &ldquo;eating meat is wrong&rdquo; unasserted?</p>,
      answer: {
        kind: "choice",
        options: [
          "Eating meat is wrong.",
          "If eating meat is wrong, then factory farming is wrong.",
          "I insist that eating meat is wrong.",
          "Eating meat is wrong, and I will not do it.",
        ],
        correct: [1],
      },
    },
    {
      key: "fg",
      rung: "apply",
      prompt: <p>What is the Frege–Geach problem, in a sentence?</p>,
      answer: {
        kind: "choice",
        options: [
          "Moral words cannot be translated into German.",
          "Non-cognitivism must explain the meaning of moral sentences where no attitude is expressed, and the validity of arguments using them.",
          "Moral facts are too strange to exist.",
          "No natural property is the same as goodness.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can non-cognitivism explain why moral modus ponens is valid? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the problem: the moral phrase seems to mean the same asserted and unasserted.",
          "Considers a reply, such as Blackburn’s higher-order attitudes or inconsistency of attitudes.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If quasi-realism lets an expressivist say that moral claims are true and that there are moral facts, does any difference from realism remain?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains what quasi-realism tries to earn.",
          "Identifies where a difference might lie, such as in the explanation of moral thought or in metaphysics.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what non-cognitivism says about moral language, why it is attractive, and the Frege–Geach problem with an example.",

  glimpse: (
    <p>
      The next lesson keeps the idea that moral claims describe the world but says they all fail: error theory. Graduate
      metaethics returns to the Frege–Geach problem, and later lessons ask whether moral judgement must motivate.
    </p>
  ),
};
