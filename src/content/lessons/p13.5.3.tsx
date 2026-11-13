import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TrackCasesViz } from "@/components/viz/TrackCasesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p13.5.3",
  minutes: 80,
  links: {
    revisits: ["p13.5.2", "p13.5.1", "p1.6.2"],
    foreshadows: ["p13.5.4", "p30.4.1", "p30.2.3"],
  },

  puzzle: (
    <>
      <p>
        Most people think you may pull a lever to send a runaway trolley away from five people towards one. Almost nobody
        thinks you may push a stranger off a bridge to stop it, though the numbers are the same. If both judgements are right,
        some principle separates them. Philosophers have spent fifty years trying to find it.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare four cases. For each, act, then look at the features that might explain the difference.</p>
      <TrackCasesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the trolley problem">
        <p>
          Philippa Foot introduced the case in 1967, with the driver of a trolley who can steer from five onto one, to compare
          it with a surgeon who could kill one to save five. Judith Jarvis Thomson added the bystander at the switch and the
          footbridge. The problem is to find a principle that explains why redirecting is permissible but pushing is not, or
          else to show that one of the judgements is mistaken.
        </p>
      </Definition>

      <Example title="candidate principles">
        <p>
          Double effect says the one on the side track dies as a side effect, while the person on the footbridge is used as a
          means. Thomson&rsquo;s early proposal was that one may redirect an existing threat but not create a new one. Kamm&rsquo;s
          principle of permissible harm says that harm may be caused by the greater good or by means that have the greater good
          as a non-causal flip side, but not by means that only cause the greater good.
        </p>
      </Example>

      <Remark title="the loop">
        <p>
          In Thomson&rsquo;s loop case the one person&rsquo;s body is needed to stop the trolley, so double effect seems to
          forbid turning, yet the only physical difference from the switch case is a short piece of track behind the one. Many
          find it hard to believe that this piece of track could matter morally. Thomson herself later argued that even in the
          switch case a bystander may not turn the trolley.
        </p>
      </Remark>

      <Remark title="debunking">
        <p>
          Joshua Greene used brain imaging to suggest that the footbridge judgement is driven by an emotional response to
          up-close personal force, not by a principle. If so, perhaps we should trust the utilitarian verdict. Critics reply that
          an emotional source does not show a judgement is unreliable, and that the imaging results have proved hard to
          replicate in detail.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "who",
      rung: "check",
      prompt: <p>Who first introduced the trolley case, in 1967?</p>,
      answer: { kind: "choice", options: ["Philippa Foot", "Judith Jarvis Thomson", "Peter Singer", "Joshua Greene"], correct: [0] },
    },
    {
      key: "diff",
      rung: "check",
      prompt: <p>What do the switch and footbridge cases have in common?</p>,
      answer: {
        kind: "choice",
        options: [
          "In both, acting kills one and saves five.",
          "In both, acting uses the one as a means.",
          "In both, nobody dies.",
          "In both, the agent is the driver.",
        ],
        correct: [0],
      },
    },
    {
      key: "dde",
      rung: "apply",
      prompt: <p>How does the doctrine of double effect separate the switch from the footbridge?</p>,
      answer: {
        kind: "choice",
        options: [
          "In the switch case the death is a foreseen side effect; in the footbridge case the person is used as a means.",
          "In the switch case more people die.",
          "It does not separate them.",
          "In the footbridge case the person consents.",
        ],
        correct: [0],
      },
    },
    {
      key: "loop",
      rung: "apply",
      prompt: <p>Why is the loop case troubling for double effect?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the doctrine seems to forbid turning, though the case differs from the switch only by a short piece of track.",
          "Because nobody dies in the loop case.",
          "Because the loop case involves a surgeon.",
          "Because double effect permits pushing.",
        ],
        correct: [0],
      },
    },
    {
      key: "greene",
      rung: "apply",
      prompt: <p>What does Greene&rsquo;s debunking argument claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the footbridge judgement reflects an emotional response to personal force, not a sound principle.",
          "That the switch case is impermissible.",
          "That emotions are always reliable.",
          "That trolley cases are too unrealistic to discuss.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is there a principled difference between the switch and footbridge cases? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the two judgements and a candidate principle, such as double effect or redirecting a threat.",
          "Tests it against a further case, such as the loop, or considers debunking.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Self-driving cars must be programmed in advance for unavoidable crashes. Does the trolley problem help in designing them?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes similarities, such as trading lives, and differences, such as uncertainty, policy-level choice and no single agent.",
          "Considers which principle, if any, should guide the design.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the switch and footbridge cases, two principles that try to separate them, the problem posed by the loop case, and Greene's debunking argument.",

  glimpse: (
    <p>
      The last lesson of this course asks how much morality can demand of us. Graduate ethics returns to choices about whole
      populations and to acting when unsure which principle is right.
    </p>
  ),
};
