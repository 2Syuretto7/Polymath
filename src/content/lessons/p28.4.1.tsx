import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { StakesThresholdViz } from "@/components/viz/StakesThresholdViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p28.4.1",
  minutes: 90,
  links: {
    revisits: ["p28.3.2", "p28.1.1", "p10.6.1"],
    foreshadows: ["p28.4.2", "p30.1.1", "p29.1.1"],
  },

  puzzle: (
    <>
      <p>
        On a Friday, Hannah and her partner pass the bank. The queue is long. Hannah says, &lsquo;I know it&rsquo;s open
        tomorrow; I was there two Saturdays ago.&rsquo; Now suppose a cheque bounces unless they deposit before Monday, and
        her partner points out that banks change their hours. Does Hannah still know, though her evidence is exactly the
        same?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set Hannah&rsquo;s credence and the cost of being wrong, and see whether acting on her belief is rational.</p>
      <StakesThresholdViz />
    </>
  ),

  theory: (
    <>
      <Definition title="pragmatic encroachment">
        <p>
          <strong>Pragmatic encroachment</strong> is the view that whether someone knows, or is justified, depends partly on
          their practical situation: what is at stake for them if they are wrong. Jason Stanley&rsquo;s{" "}
          <em>Knowledge and Practical Interests</em> (2005) and John Hawthorne&rsquo;s <em>Knowledge and Lotteries</em>{" "}
          (2004) defend versions of it.
        </p>
      </Definition>

      <Definition title="the knowledge–action principle">
        <p>
          Jeremy Fantl and Matthew McGrath argue that if you know p, then p is warranted enough to be a reason for you to
          act. In the high-stakes bank case, Hannah may not act as if the bank is open, so she does not know it is, although
          in the low-stakes case, with the same evidence, she does.
        </p>
      </Definition>

      <Example title="contextualism compared">
        <p>
          Keith DeRose introduced bank cases (1992) to support <strong>contextualism</strong>: the truth of &lsquo;S
          knows&rsquo; depends on the standards of the speaker&rsquo;s context. Pragmatic encroachment instead makes knowing
          itself depend on the subject&rsquo;s stakes, whoever is speaking.
        </p>
      </Example>

      <Remark title="objections and moral encroachment">
        <p>
          Critics note odd consequences: knowledge could be lost by raising a bet, and someone unaware of high stakes would
          fail to know without any change in their evidence. Others extend the view: Rima Basu, Sarah Moss and James Fritz
          argue for <strong>moral encroachment</strong>, on which the moral risks of a belief, such as one about a person
          based on statistics about their group, raise the evidence it needs.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pe",
      rung: "check",
      prompt: <p>What does pragmatic encroachment claim?</p>,
      answer: { kind: "choice", options: ["Whether one knows depends partly on what is at stake for one", "Knowledge depends only on evidence", "Practical reasoning never uses knowledge", "Only experts can know"], correct: [0] },
    },
    {
      key: "ctx",
      rung: "check",
      prompt: <p>How does pragmatic encroachment differ from contextualism?</p>,
      answer: { kind: "choice", options: ["It makes knowledge depend on the subject’s stakes, not on the speaker’s standards", "It denies that bank cases matter", "It says knowledge never changes", "It makes knowledge depend on the speaker’s stakes"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the cost if wrong to 9. What is the threshold credence for acting?</p>,
      answer: { kind: "numeric", value: 0.9, tolerance: 0.001 },
    },
    {
      key: "low",
      rung: "apply",
      prompt: <p>With gain 1 and cost if wrong 1, what is the threshold credence?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "fm",
      rung: "apply",
      prompt: <p>What principle do Fantl and McGrath use?</p>,
      answer: { kind: "choice", options: ["If you know p, p is warranted enough to be a reason for you to act", "If you act on p, you know p", "Knowledge requires certainty", "Stakes never affect rational action"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does whether you know something depend on what is at stake for you? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes a bank case or a similar pair of cases.",
          "Considers a view such as pragmatic encroachment, contextualism or purism, with a reason for or against it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a belief wrong someone, even when it is supported by the evidence?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains moral encroachment or the idea that beliefs can wrong.",
          "Considers an objection, such as that only actions can wrong.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If practical stakes can shape what we may believe, should epistemic norms themselves be judged by their results?
        One view says the right belief is the one that does the most epistemic good.
      </p>
      <p>Next, epistemic consequentialism.</p>
    </>
  ),
};
