import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { NonIdentityViz } from "@/components/viz/NonIdentityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p30.2.2",
  minutes: 90,
  links: {
    revisits: ["p30.2.1", "p13.1.1", "p5.5.1"],
    foreshadows: ["p30.2.3", "p30.4.1", "p30.4.2"],
  },

  puzzle: (
    <>
      <p>
        A society chooses to burn its resources freely rather than conserve them. Two centuries later, life is noticeably
        worse. But a different policy would have changed who met whom and when children were conceived, so the people
        living then would never have existed. Is anyone worse off? And if not, what was wrong with the choice?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set the welfare of the two children who might be born, and compare the verdicts.</p>
      <NonIdentityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the time-dependence claim">
        <p>
          Parfit observed that if any particular person had not been conceived when they were, they would in fact never have
          existed: a different sperm and egg would have made a different person. So most choices that affect the distant
          future affect not only how well people live but which people live.
        </p>
      </Definition>

      <Definition title="the person-affecting view">
        <p>
          The narrow <strong>person-affecting view</strong> says that an outcome is worse only if it is worse for someone:
          if someone would have been better off under another choice. It captures the thought that morality is about what
          we do to people.
        </p>
      </Definition>

      <Example title="the non-identity problem">
        <p>
          A woman who conceives now has a child with a condition that lowers their quality of life; if she waits three
          months, she will have a different, healthier child. If the first child&rsquo;s life is worth living, it is not worse
          for them that she conceived now, since the only alternative was not existing. The person-affecting view finds
          nothing wrong, yet most people think she ought to wait. The same structure appears in the depletion of resources
          and in climate policy.
        </p>
      </Example>

      <Definition title="Parfit’s Q">
        <p>
          Parfit&rsquo;s <strong>Same Number Quality Claim</strong>: if in either of two outcomes the same number of people
          would ever live, it would be worse if those who live are worse off, or have a lower quality of life, than those who
          would have lived. Q is impersonal: it does not say the outcome is worse for anyone.
        </p>
      </Definition>

      <Remark title="other replies">
        <p>
          Some locate the wrong in rights or in the attitude of the agent rather than in outcomes. Seana Shiffrin argues that
          a person can be harmed by being caused to exist with serious burdens even if their life is worth living. David
          Boonin, in <em>The Non-Identity Problem and the Ethics of Future People</em> (2014), accepts the conclusion that
          the woman does nothing wrong.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pav",
      rung: "check",
      prompt: <p>What does the narrow person-affecting view say?</p>,
      answer: { kind: "choice", options: ["An outcome is worse only if it is worse for someone", "Only persons have moral status", "We should maximise the number of people", "Every person counts equally"], correct: [0] },
    },
    {
      key: "time",
      rung: "check",
      prompt: <p>What is the time-dependence claim?</p>,
      answer: { kind: "choice", options: ["Had a person been conceived at a different time, they would never have existed", "Future people matter less than present people", "Welfare changes over time", "Moral truths depend on the time"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the child conceived now to 40 and the child conceived later to 70. By how much is waiting better impersonally?</p>,
      answer: { kind: "numeric", value: 30, tolerance: 0 },
    },
    {
      key: "deplete",
      rung: "apply",
      prompt: <p>Why does the depletion policy seem to make no one worse off?</p>,
      answer: { kind: "choice", options: ["Because the future people who live under it would not have existed under conservation", "Because no one lives in the future", "Because resources do not matter", "Because everyone gains from it"], correct: [0] },
    },
    {
      key: "q",
      rung: "apply",
      prompt: <p>What kind of principle is Parfit&rsquo;s Q?</p>,
      answer: { kind: "choice", options: ["An impersonal principle comparing quality of life when numbers are equal", "A person-affecting principle", "A principle about rights", "A principle requiring more people to exist"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the woman who conceives now, rather than waiting, do anything wrong? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why the child conceived now is not made worse off.",
          "Considers an impersonal principle such as Q, or another reply such as rights or harm without comparison.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the non-identity problem weaken the case for acting on climate change?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that climate policy affects which people will exist in the future.",
          "Considers whether impersonal or other reasons still support acting.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Q handles choices with the same number of people. When numbers differ too, the most natural theories lead to a
        conclusion about vast populations of barely happy lives that Parfit called repugnant.
      </p>
      <p>Next, the repugnant conclusion.</p>
    </>
  ),
};
