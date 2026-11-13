import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CredenceCoherenceViz } from "@/components/viz/CredenceCoherenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p10.7.1",
  minutes: 75,
  links: {
    revisits: ["p3.4.3", "p10.6.2", "m9.1.1"],
    foreshadows: ["p10.7.2", "p28.2.1", "p28.2.3"],
  },

  puzzle: (
    <>
      <p>
        You do not simply believe or disbelieve that it will rain tomorrow. You are fairly confident, perhaps, but not sure.
        Traditional epistemology asks about all-or-nothing belief. Can we say anything precise about the degrees in between,
        and are there rules for how they must fit together?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Set your confidence in each of four claims below. Try to make the credences incoherent, then repair them. Notice which
        combinations feel obviously wrong once the checks point them out.
      </p>
      <CredenceCoherenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="credence">
        <p>
          A <strong>credence</strong> is a degree of belief, represented by a number from 0 to 1. Credence 1 is certainty that
          a claim is true, credence 0 certainty that it is false, and credence 0.5 is being evenly torn. We write Cr(A) for an
          agent&rsquo;s credence in A.
        </p>
      </Definition>

      <Definition title="probabilism">
        <p>
          <strong>Probabilism</strong> says a rational agent&rsquo;s credences obey the probability axioms: every credence lies
          between 0 and 1, every logical truth gets credence 1, and if A and B cannot both be true, then Cr(A or B) = Cr(A) +
          Cr(B). From these it follows, for instance, that Cr(not A) = 1 − Cr(A) and that a conjunction is never more credible
          than either conjunct.
        </p>
      </Definition>

      <Example title="the conjunction fallacy">
        <p>
          In a famous study, people told that Linda was a philosophy student concerned with social justice rated &ldquo;Linda
          is a bank teller and active in the feminist movement&rdquo; as more probable than &ldquo;Linda is a bank teller&rdquo;.
          Whatever we think of Linda, these credences break probabilism: the conjunction can be no more likely than the bank
          teller claim alone.
        </p>
      </Example>

      <Remark title="credence and belief">
        <p>
          How does full belief relate to credence? The <strong>Lockean thesis</strong> says to believe A is to have credence
          in A above some threshold, say 0.9. But the lottery paradox bites: you can have credence above 0.9 that each ticket
          in a large lottery loses, yet you know some ticket wins. Belief seems closed under conjunction, high credence is not.
          Some philosophers therefore treat belief and credence as separate states; others say only credence is real.
        </p>
      </Remark>

      <Remark title="why the axioms?">
        <p>
          Probabilism is a norm of coherence, like the demand that beliefs be consistent. It says nothing about which credence
          to have in a single claim. The next lessons look at how credences should change with evidence, and at the Dutch book
          and accuracy arguments for why they should obey the axioms at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does a credence of 0.5 in a claim represent?</p>,
      answer: {
        kind: "choice",
        options: ["Certainty that it is true", "Being evenly torn between it and its negation", "Having no view at all", "Half believing and half knowing"],
        correct: [1],
      },
    },
    {
      key: "neg",
      rung: "check",
      prompt: <p>Your credence that India wins the toss is 0.55. If you obey probabilism, what is your credence that India does not win the toss?</p>,
      answer: { kind: "numeric", value: 0.45, tolerance: 0.001 },
    },
    {
      key: "add",
      rung: "apply",
      prompt: <p>Cr(A) = 0.6, Cr(B) = 0.5 and Cr(A and B) = 0.3. What must Cr(A or B) be?</p>,
      answer: { kind: "numeric", value: 0.8, tolerance: 0.001 },
    },
    {
      key: "conj",
      rung: "apply",
      prompt: <p>Which set of credences violates probabilism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Cr(A) = 0.7, Cr(A and B) = 0.4",
          "Cr(A) = 0.3, Cr(A and B) = 0.5",
          "Cr(A) = 0.5, Cr(not A) = 0.5",
          "Cr(A or not A) = 1",
        ],
        correct: [1],
      },
    },
    {
      key: "lockean",
      rung: "apply",
      prompt: <p>With a threshold of 0.9, why does a 1000-ticket fair lottery trouble the Lockean thesis?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because no one should buy lottery tickets.",
          "Because you would believe of each ticket that it loses, yet also believe that some ticket wins.",
          "Because credences cannot exceed 0.9.",
          "Because the lottery might be rigged.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it irrational to judge a conjunction more likely than one of its conjuncts? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States that probabilism forbids it, since the conjunction is true only if the conjunct is.",
          "Considers a defence, for example that people read the question differently or judge representativeness.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "real",
      rung: "stretch",
      prompt: <p>Is belief just credence above a threshold, or something different? Use the lottery paradox in your answer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Lockean thesis.",
          "Explains the pressure from the lottery paradox.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a credence is, what probabilism requires, an example of incoherent credences such as the conjunction fallacy, and how the lottery paradox troubles the Lockean thesis.",

  glimpse: (
    <p>
      The next lesson asks how credences should change when evidence arrives. Graduate epistemology returns to Bayesian norms
      in depth, and asks whether rational credences must be sharp numbers at all.
    </p>
  ),
};
