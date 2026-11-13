import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { VerifyFalsifyViz } from "@/components/viz/VerifyFalsifyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.1.1",
  minutes: 80,
  links: {
    revisits: ["p15.3.1", "p7.5.3", "p1.1.3"],
    foreshadows: ["p16.1.3", "p16.2.1", "p16.4.3"],
  },

  puzzle: (
    <>
      <p>
        Scientists have tested &ldquo;all copper conducts electricity&rdquo; on countless samples, and it has never failed.
        Yet nobody has tested all the copper there is, or ever will be. In what sense has science shown the law to be true?
        And if no observation could ever show it, is the law even meaningful by the standards of those who said meaning is
        verifiability?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a claim, add observations, and see whether it is ever conclusively verified or falsified.</p>
      <VerifyFalsifyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="verification in science">
        <p>
          The logical empiricists of the Vienna Circle held that a synthetic statement is meaningful only if experience could
          verify it, and that science is the body of verified, or verifiable, statements. A statement is{" "}
          <strong>conclusively verifiable</strong> if some finite set of observation statements entails it.
        </p>
      </Definition>

      <Example title="the trouble with laws">
        <p>
          A universal law such as &ldquo;all copper conducts&rdquo; covers infinitely many, or at least unsurveyably many,
          cases, so no finite set of observations entails it. Conclusive verifiability would make laws of nature meaningless,
          which is absurd for a philosophy built to honour science. By contrast, the law is conclusively{" "}
          <em>falsifiable</em>: one non-conducting sample of copper would refute it. Existential claims show the opposite
          pattern.
        </p>
      </Example>

      <Definition title="from verification to confirmation">
        <p>
          A. J. Ayer retreated to <strong>weak verifiability</strong>: a statement is meaningful if observation can make it
          probable. Rudolf Carnap, in &ldquo;Testability and Meaning&rdquo; (1936-37), replaced verification by degrees of{" "}
          <strong>confirmation</strong>, and Carl Hempel worked on the logic of confirmation. A law is never proved by its
          instances, but each favourable instance confirms it, adding support.
        </p>
      </Definition>

      <Remark title="what was left">
        <p>
          The project raised three problems that shape the philosophy of science: what confirmation is, which leads to the
          raven paradox and Bayesianism; whether science is marked out by testability, the demarcation problem; and whether
          falsification rather than confirmation is the real method, as Karl Popper argued. Hume&rsquo;s problem of induction
          stands behind all three.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a statement conclusively verifiable?</p>,
      answer: {
        kind: "choice",
        options: [
          "When some finite set of observation statements entails it",
          "When it has been tested many times",
          "When scientists agree on it",
          "When it is logically true",
        ],
        correct: [0],
      },
    },
    {
      key: "law",
      rung: "check",
      prompt: <p>Why can&rsquo;t a universal law be conclusively verified?</p>,
      answer: {
        kind: "choice",
        options: [
          "It covers unsurveyably many cases, so no finite set of observations entails it.",
          "Because laws are false.",
          "Because observations are always mistaken.",
          "Because it is about the past.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which kind of claim is conclusively verified by a single observation?</p>,
      answer: {
        kind: "choice",
        options: ["There is a white raven", "All copper conducts", "Every metal melts at some temperature", "None of them"],
        correct: [0],
      },
    },
    {
      key: "mixed",
      rung: "apply",
      prompt: <p>Why is &ldquo;every metal melts at some temperature&rdquo; neither verifiable nor falsifiable by finitely many observations?</p>,
      answer: {
        kind: "choice",
        options: [
          "Untested metals remain, and a metal that has not melted yet might melt at a higher temperature.",
          "It is about metals.",
          "It is a definition.",
          "It is already known to be false.",
        ],
        correct: [0],
      },
    },
    {
      key: "weak",
      rung: "apply",
      prompt: <p>What did Ayer&rsquo;s weak verifiability require of a meaningful statement?</p>,
      answer: {
        kind: "choice",
        options: ["That observation can make it probable", "That it be proved", "That it be falsified", "That it be about the senses"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Should the inability to verify laws conclusively worry a scientist? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why universal laws cannot be conclusively verified by finitely many observations.",
          "Considers a response, such as confirmation by instances, probability, or falsifiability.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If falsifiability fits laws better than verifiability, should it replace verifiability as the test of meaning? Consider existential claims such as &ldquo;there is a white raven&rdquo;.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that existential claims are verifiable but not falsifiable, so a falsifiability test of meaning would exclude them.",
          "Considers whether falsifiability is better seen as a mark of science, as Popper intended, than as a test of meaning.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the logical empiricists' idea of verification, why universal laws cannot be conclusively verified though they can be falsified, and how Ayer, Carnap and Hempel moved to weaker notions of confirmation.",

  glimpse: (
    <p>
      Next, the hypothetico-deductive method describes how hypotheses are tested by their consequences. Then come the
      demarcation problem, Popper&rsquo;s falsificationism and Bayesian accounts of confirmation.
    </p>
  ),
};
