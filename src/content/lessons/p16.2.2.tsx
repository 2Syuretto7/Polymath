import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SeverityViz } from "@/components/viz/SeverityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.2.2",
  minutes: 80,
  links: {
    revisits: ["p16.2.1", "p16.1.1", "p1.1.3"],
    foreshadows: ["p16.3.2", "p16.4.1", "p16.4.3"],
  },

  puzzle: (
    <>
      <p>
        An engineer must choose between two theories to design a bridge. One has survived many severe tests, the other has
        never been tested. Popper says neither is shown true or even probable. Is it still rational to prefer the first, and
        if so, what is the reason?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Mark which tests the theory passes and see how much each one adds.</p>
      <SeverityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="corroboration">
        <p>
          Popper&rsquo;s <strong>degree of corroboration</strong> is an appraisal of how well a theory has stood up to tests up
          to now. It increases when a theory passes a <strong>severe test</strong>: one whose result would be improbable on
          background knowledge without the theory. It is not a probability, and Popper insisted it is not a measure of how
          likely the theory is to be true.
        </p>
      </Definition>

      <Example title="severity">
        <p>
          The 1919 eclipse expeditions tested a prediction that Newtonian background knowledge made very unlikely: starlight
          bent by twice the Newtonian amount. Passing it counted for much more than predicting that stones fall. Mercury&rsquo;s
          perihelion, already known when general relativity was formulated, raises the question of whether old evidence can
          corroborate at all.
        </p>
      </Example>

      <Definition title="the problem of rational prediction">
        <p>
          Wesley Salmon pressed the bridge-builder&rsquo;s question. Corroboration is a report on past performance. If it gives
          no reason to expect future success, it cannot explain why we should rely on the best-corroborated theory for
          practical prediction. If it does give such a reason, it is an inductive inference after all, the very thing Popper
          claimed to have done without.
        </p>
      </Definition>

      <Remark title="responses">
        <p>
          Popper replied that preferring the best-tested theory is rational because it is the best we have critically
          examined, not because it is likely true. Others think the reply concedes too much or too little. Bayesian accounts
          take the idea of severe tests and turn it into probability: a result that was improbable without the theory raises
          its probability more. Deborah Mayo&rsquo;s error-statistical philosophy develops severity as the central notion of
          evidence.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does Popper&rsquo;s degree of corroboration measure?</p>,
      answer: {
        kind: "choice",
        options: [
          "How well a theory has survived severe tests so far",
          "The probability that the theory is true",
          "How many instances support the theory",
          "How simple the theory is",
        ],
        correct: [0],
      },
    },
    {
      key: "severe",
      rung: "check",
      prompt: <p>When is a test severe, in Popper&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "When its result would be improbable on background knowledge without the theory",
          "When it is expensive",
          "When it is repeated many times",
          "When the theory is likely to pass",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, mark only the test about dropped stones. What is the corroboration? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.001, tolerance: 0.0005 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which test would corroborate a theory most?</p>,
      answer: {
        kind: "choice",
        options: [
          "A precise prediction no rival theory made, which turns out right",
          "A prediction everyone already expected",
          "A result known before the theory was proposed and used to build it",
          "A vague prediction that something will happen",
        ],
        correct: [0],
      },
    },
    {
      key: "salmon",
      rung: "apply",
      prompt: <p>What is Salmon&rsquo;s objection to corroboration?</p>,
      answer: {
        kind: "choice",
        options: [
          "If corroboration only reports past performance, it gives no reason to rely on a theory for future predictions.",
          "Corroboration is too easy to calculate.",
          "No theory has ever been corroborated.",
          "Corroboration ignores mathematics.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it rational to build a bridge using the best-corroborated theory, if corroboration says nothing about the future? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the problem: corroboration reports past success, not future reliability.",
          "Considers Popper’s reply, or an inductive or Bayesian alternative.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Mercury&rsquo;s perihelion was known before general relativity was proposed. Should explaining it count in the theory&rsquo;s favour? What do you think?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the result was not improbable on background knowledge when the theory was proposed, so it seems not to be a severe test.",
          "Considers why it still seemed to support the theory, such as not being used to construct it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Popper's notion of corroboration, why severe tests count for more, why corroboration is not probability, and Salmon's problem of rational prediction.",

  glimpse: (
    <p>
      Next, Kuhn&rsquo;s history of science challenges the picture of scientists as tireless refuters, and Lakatos builds a
      compromise. Bayesian confirmation returns to the question of how evidence supports theories.
    </p>
  ),
};
