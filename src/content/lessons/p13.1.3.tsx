import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TransmitterViz } from "@/components/viz/TransmitterViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p13.1.3",
  minutes: 80,
  links: {
    revisits: ["p5.3.4", "p13.1.2", "p13.1.1"],
    foreshadows: ["p13.1.4", "p14.2.1", "p26.4.4"],
  },

  puzzle: (
    <>
      <p>
        If enough people each lose a tiny pleasure, does that add up to something worse than one person&rsquo;s agony? Adding
        welfare says yes, given big enough numbers. Many people find that monstrous. Is there a principled way to refuse?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the number of viewers and compare how summing welfare and contractualism decide.</p>
      <TransmitterViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Scanlon’s contractualism">
        <p>
          &ldquo;An act is wrong if its performance under the circumstances would be disallowed by any set of principles for
          the general regulation of behaviour that no one could reasonably reject as a basis for informed, unforced general
          agreement.&rdquo; Morality, on this view, is about what we owe to each other: acting on principles we can justify to
          everyone affected.
        </p>
      </Definition>

      <Example title="the individualist restriction">
        <p>
          Reasons to reject a principle must be personal: they concern how the principle affects some individual. So complaints
          are compared one person at a time. In the transmitter room, Jones&rsquo;s complaint against a principle that lets him
          suffer is far stronger than any viewer&rsquo;s complaint against interrupting the match, so we must rescue him, however
          many viewers there are.
        </p>
      </Example>

      <Remark title="contractualism and contractarianism">
        <p>
          Hobbesian contractarianism grounds morality in what self-interested people would agree to for mutual advantage, so
          those with nothing to offer may be left out. Scanlon&rsquo;s contractualism starts from the desire to justify oneself
          to others and includes everyone who can be wronged, whatever their bargaining power.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          <strong>Numbers:</strong> if one person can be saved from death or five from death, it seems we should save the five,
          but personal comparison alone treats them as tied. Scanlon uses a tie-breaking argument: saving the one would fail to
          give weight to the additional people. <strong>Redundancy:</strong> some argue that a principle is rejectable only
          because the act it permits is already wrong, so the contract adds nothing. <strong>Scope:</strong> it is unclear how
          the view covers animals or future generations.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>According to Scanlon, when is an act wrong?</p>,
      answer: {
        kind: "choice",
        options: [
          "When it fails to maximise welfare.",
          "When any principle permitting it could reasonably be rejected.",
          "When it breaks the law.",
          "When most people dislike it.",
        ],
        correct: [1],
      },
    },
    {
      key: "book",
      rung: "check",
      prompt: <p>What is the title of Scanlon&rsquo;s main book on contractualism?</p>,
      answer: { kind: "choice", options: ["What We Owe to Each Other", "A Theory of Justice", "Reasons and Persons", "The Methods of Ethics"], correct: [0] },
    },
    {
      key: "indiv",
      rung: "apply",
      prompt: <p>What does the individualist restriction rule out?</p>,
      answer: {
        kind: "choice",
        options: [
          "Adding up small complaints across many people to outweigh one serious complaint.",
          "Considering individuals at all.",
          "Any comparison of complaints.",
          "Personal reasons.",
        ],
        correct: [0],
      },
    },
    {
      key: "hobbes",
      rung: "apply",
      prompt: <p>How does Scanlon&rsquo;s view differ from Hobbesian contractarianism?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is based on justifying ourselves to others, not on mutual advantage among the self-interested.",
          "It denies that agreements matter.",
          "It is based on divine commands.",
          "There is no difference.",
        ],
        correct: [0],
      },
    },
    {
      key: "numbers",
      rung: "apply",
      prompt: <p>Why do the numbers seem to cause trouble for contractualism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Comparing complaints one at a time seems to treat saving one and saving five as a tie.",
          "Contractualists cannot count.",
          "Large groups cannot agree.",
          "Numbers are not moral.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Should the broadcast be interrupted to rescue Jones, whatever the number of viewers? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the summing and the contractualist verdicts.",
          "Considers a challenge to one of them.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can contractualism explain what we owe to people who will live centuries from now?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that future people cannot take part in agreements now.",
          "Considers whether principles can be justified to them hypothetically.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Scanlon's test of reasonable rejection, the individualist restriction with the transmitter room case, how contractualism differs from contractarianism, and the problem of numbers.",

  glimpse: (
    <p>
      The next lesson turns to virtue ethics, which looks at character rather than principles. Rawls&rsquo;s original position
      and the theory of social choice are other ways to derive principles from agreement.
    </p>
  ),
};
