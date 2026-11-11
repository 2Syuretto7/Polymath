import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SlopeViz, type Slope } from "@/components/viz/SlopeViz";
import type { LessonContent } from "@/lib/types";

const SLOPES: Slope[] = [
  {
    title: "Retakes",
    start: "If students may retake one failed exam …",
    steps: [
      "students will demand retakes for every exam",
      "the university will give in to the demand",
      "nobody will prepare for first attempts",
      "degrees will become worthless",
    ],
    init: [0.6, 0.5, 0.4, 0.3],
  },
  {
    title: "A strong chain",
    start: "If the dam's spillway is blocked during the monsoon …",
    steps: [
      "the reservoir will rise above the safe level",
      "water will flow over the top of the dam",
      "the earth wall will erode",
      "the town below will flood",
    ],
    init: [0.95, 0.9, 0.85, 0.95],
  },
  {
    title: "Many small steps",
    start: "If one rule is relaxed slightly …",
    steps: ["a second follows", "a third follows", "a fourth follows", "a fifth follows", "a sixth follows", "everything is permitted"],
    init: [0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
  },
];

export const lesson: LessonContent = {
  id: "p3.2.3",
  minutes: 60,
  links: {
    revisits: ["p2.1.2", "p3.1.2"],
    foreshadows: ["p3.4.1", "p25.1.2", "p10.2.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;This newspaper always tells the truth. I know, because it says so in its own pages.&rdquo; The argument is
        valid: if the premise is true, so is the conclusion. Its premise may even be true. Yet it is worthless as a reason
        to trust the paper.
      </p>
      <p>
        Validity and true premises were supposed to be everything a deductive argument needs. What else can go wrong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A <em>fallacy of presumption</em> quietly assumes something it has no right to assume: the conclusion itself, that
        there are only two options, that one step must lead to the next. The slippery slope is the easiest to measure.
        Each link in the chain may look plausible, but the chance that every link holds is the product of their chances,
        and products of numbers less than 1 shrink fast. Move the sliders, and compare a weak chain with a strong one.
      </p>
      <SlopeViz slopes={SLOPES} />
    </>
  ),

  theory: (
    <>
      <Definition title="begging the question">
        <p>
          An argument <strong>begs the question</strong> when it assumes, openly or in disguise, the very thing it sets out
          to prove. Such an argument can be valid, and even sound, yet it cannot rationally persuade anyone who doubts the
          conclusion, since they will doubt the premise for the same reason. Disguised forms are the dangerous ones:
          &ldquo;Free trade is good for the country, because unrestricted commerce between nations benefits each of
          them&rdquo; restates its conclusion in longer words.
        </p>
      </Definition>
      <p>
        (In everyday speech, &ldquo;begs the question&rdquo; often means &ldquo;raises the question&rdquo;. In logic it
        keeps its older meaning.)
      </p>

      <Definition title="false dilemma">
        <p>
          A <strong>false dilemma</strong> presents two options as the only ones when there are others: &ldquo;either we
          ban cars from the city centre or the air will poison us.&rdquo; Some dilemmas are genuine: &ldquo;either the
          number is even or it is not&rdquo; leaves no third way. The test is to look for a third option, or a mixture of
          the two.
        </p>
      </Definition>

      <Definition title="slippery slope">
        <p>
          A <strong>slippery slope</strong> argument says that a first step will lead, through a chain of further steps,
          to something bad, and so the first step should not be taken. It is fallacious when the links are weak or not
          argued for. It is reasonable when each link is strong and supported by evidence.
        </p>
      </Definition>

      <Example title="measuring a slope">
        <p>
          Suppose each of four links holds with probability 0.8, given that the previous one did. Then the chance that the
          whole chain holds is <span className="mono">0.8 × 0.8 × 0.8 × 0.8 ≈ 0.41</span>. Even six links at 0.9 each give
          only about 0.53. A slope argument with many steps needs very strong links. The lesson on probability later in
          this course explains why the chances multiply.
        </p>
      </Example>

      <Definition title="complex question">
        <p>
          A <strong>complex question</strong> (or loaded question) has a presumption built into it, so that any direct
          answer accepts it. &ldquo;Have you stopped cheating in exams?&rdquo; Both &ldquo;yes&rdquo; and &ldquo;no&rdquo;
          admit to cheating. The fair reply is to reject the presumption, not to answer the question.
        </p>
      </Definition>

      <Remark title="why these are not formal mistakes">
        <p>
          None of these fallacies is a matter of invalid form. A question-begging argument is valid; a false dilemma is a
          valid disjunctive syllogism with a false premise; a slippery slope may be a valid chain of conditionals. The
          fault lies in a premise that is assumed without right, or in the argument&rsquo;s failure to do its job, which is
          to move someone from what they accept to what they do not yet accept.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "loaded",
      rung: "check",
      prompt: <p>&ldquo;Why do you always waste money?&rdquo; Which fallacy of presumption does this question commit?</p>,
      answer: { kind: "choice", options: ["complex question", "false dilemma", "slippery slope", "begging the question"], correct: [0] },
    },
    {
      key: "circular",
      rung: "check",
      prompt: <p>Which argument begs the question?</p>,
      answer: {
        kind: "choice",
        options: [
          "She is trustworthy, because she has never been caught lying in ten years of reporting.",
          "She is trustworthy, because she always tells the truth.",
          "She is trustworthy, because three independent colleagues vouch for her.",
          "She is trustworthy, because her past forecasts were mostly right.",
        ],
        correct: [1],
      },
    },
    {
      key: "chain",
      rung: "apply",
      prompt: (
        <p>
          A slippery slope has four links, each holding with probability 0.8 given the one before. What is the probability
          that all four hold? (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.4096, tolerance: 0.001 },
    },
    {
      key: "dilemma",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Either you support every proposal in this budget, or you don&rsquo;t care about the poor.&rdquo; Which reply
          best exposes the false dilemma?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "I do care about the poor, so I must support every proposal.",
          "One can care about the poor and still think some proposals are wasteful.",
          "You are only saying this because you wrote the budget.",
          "Most people disagree with the budget.",
        ],
        correct: [1],
      },
    },
    {
      key: "valid",
      rung: "apply",
      prompt: <p>Which statement about a question-begging argument is correct?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is always invalid.",
          "It always has a false conclusion.",
          "It can be valid, but cannot persuade someone who doubts its conclusion.",
          "It is a fallacy of relevance.",
        ],
        correct: [2],
      },
    },
    {
      key: "evaluate",
      rung: "prove",
      prompt: (
        <p>
          Evaluate this argument: &ldquo;If we let the children stay up late on Friday, they&rsquo;ll want to every night,
          they&rsquo;ll be tired at school, their marks will fall, and they won&rsquo;t get into a good university. So they
          must go to bed at eight on Friday.&rdquo; Estimate each link, and say whether the slope is slippery.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Lists the links of the chain separately.",
          "Gives a rough estimate or judgement of each link, noting that some (such as one late night leading to every night) are weak.",
          "Explains that the chance of the whole chain is the product of the links, so it is small, and concludes the slope is not very slippery. Any reasonable estimates are fine.",
        ],
      },
    },
    {
      key: "induction",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;Induction is reliable, because it has worked well in the past.&rdquo; This argument uses induction to
          defend induction. Does it beg the question? Is every circular argument useless? Give your view and defend it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notices that inferring future reliability from past success is itself an inductive step, so the argument assumes what it sets out to show.",
          "Considers whether such an argument could still have some value, for example by showing induction is self-consistent, or because some basic methods cannot be defended without using them.",
          "Takes and defends a view. Any thoughtful position is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how an argument can be valid and still beg the question, how to spot a false dilemma, and why a slippery slope with many steps needs very strong links.",

  glimpse: (
    <p>
      Later in this course, the rules of probability explain exactly why the links of a chain multiply. Applied Ethics
      meets slippery slope arguments in earnest, for instance in debates about euthanasia, where the strength of each link
      is a matter of evidence. Epistemology asks whether all justification must eventually rest on something, or go in a
      circle, or run back for ever.
    </p>
  ),
};
