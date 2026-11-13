import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { HighestGoodViz } from "@/components/viz/HighestGoodViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.5.4",
  minutes: 80,
  links: {
    revisits: ["p8.5.3", "p8.4.3", "p8.4.1"],
    foreshadows: ["p8.6.3", "p23.4.1", "p9.1.2"],
  },

  puzzle: (
    <>
      <p>
        Kant insists that we must do our duty whether or not it makes us happy. Yet he also thinks it would be monstrous if the
        virtuous were miserable for ever and the wicked flourished. A good person deserves to be happy. But nothing in nature
        sees to it. Must a moral person simply accept that, or does morality itself give reason to hope for more?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Set a person&rsquo;s virtue and happiness, and compare them with the line on which happiness exactly matches
        worthiness.
      </p>
      <HighestGoodViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the highest good">
        <p>
          Virtue is the <strong>supreme</strong> good, the condition of everything else being good. But it is not the{" "}
          <strong>complete</strong> good, which also includes happiness. The <strong>highest good</strong> is virtue together
          with happiness in exact proportion to it: happiness distributed according to worthiness to be happy. The moral law
          commands us to promote it.
        </p>
      </Definition>

      <Definition title="the antinomy of practical reason">
        <p>
          The connection between virtue and happiness cannot be analytic, as the Stoics thought, who identified happiness with
          being virtuous, or the Epicureans, who identified virtue with pursuing happiness. It must be synthetic, and causal.
          But the desire for happiness cannot cause virtue, and in nature virtue does not reliably cause happiness. So the
          highest good seems impossible, and the command to promote it seems empty.
        </p>
      </Definition>

      <Example title="the postulates">
        <p>
          Kant resolves the antinomy with three <strong>postulates of pure practical reason</strong>: propositions that cannot
          be proved theoretically, but must be assumed if the highest good is to be possible. <strong>Immortality</strong>,
          because complete conformity to the moral law, holiness, can be approached only in an endless progress.{" "}
          <strong>God</strong>, as a moral author of nature who brings happiness into proportion with virtue.{" "}
          <strong>Freedom</strong>, as the condition of the moral law itself. These ideas, empty for speculative reason, gain
          practical reality.
        </p>
      </Example>

      <Remark title="moral faith">
        <p>
          The result is a rational faith: not knowledge, and not a basis for morality, which would then become heteronomous,
          but a hope that morality itself makes rational. Kant summed up the interests of reason in three questions: what can
          I know, what ought I to do, what may I hope? Critics, from Schopenhauer onward, saw the postulates as a retreat from
          the purity of duty for duty&rsquo;s sake; others see them as a humane recognition that moral agents are also finite,
          needy creatures.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the highest good, for Kant?</p>,
      answer: {
        kind: "choice",
        options: [
          "Pleasure.",
          "Virtue together with happiness in exact proportion to it.",
          "Knowledge of God.",
          "Virtue alone, without happiness.",
        ],
        correct: [1],
      },
    },
    {
      key: "posts",
      rung: "check",
      prompt: <p>Which are Kant&rsquo;s postulates of pure practical reason? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Freedom", "Immortality of the soul", "God", "Absolute space"], correct: [0, 1, 2] },
    },
    {
      key: "stoic",
      rung: "apply",
      prompt: <p>What mistake did the Stoics and Epicureans share, according to Kant?</p>,
      answer: {
        kind: "choice",
        options: [
          "Both ignored happiness.",
          "Both treated the connection between virtue and happiness as analytic, identifying one with the other.",
          "Both believed in God.",
          "Both rejected virtue.",
        ],
        correct: [1],
      },
    },
    {
      key: "immortal",
      rung: "apply",
      prompt: <p>Why does Kant postulate the immortality of the soul?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because he proved it in the paralogisms.",
          "Because complete conformity of the will to the moral law can be approached only in an endless progress.",
          "Because it makes people happy.",
          "Because the Bible teaches it.",
        ],
        correct: [1],
      },
    },
    {
      key: "status",
      rung: "apply",
      prompt: <p>What is the status of the postulates?</p>,
      answer: {
        kind: "choice",
        options: [
          "Theoretically proven truths.",
          "Propositions that cannot be proved theoretically but must be assumed for the highest good to be possible: a rational faith.",
          "Empirical hypotheses.",
          "The foundation of the moral law.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, explain why Kant thinks we must postulate God.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says morality commands us to promote the highest good, so it must be possible.",
          "Says nature does not proportion happiness to virtue, so we must assume a moral author of nature who does. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "purity",
      rung: "stretch",
      prompt: <p>Do the postulates compromise Kant&rsquo;s insistence on duty for duty&rsquo;s sake? Give your view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the worry: hope of reward may seem to make morality depend on happiness.",
          "Considers Kant's answer, that the postulates follow from morality rather than ground it, and the motive remains respect for the law.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kant's idea of the highest good, the antinomy of practical reason, the postulates of freedom, immortality and God, and why they amount to a rational faith rather than knowledge.",

  glimpse: (
    <p>
      The next chapter turns to the Critique of Judgement, on beauty, the sublime and purpose in nature, where Kant tries to
      bridge nature and freedom. The Philosophy of Religion course considers other arguments that faith can be rational, such
      as Pascal&rsquo;s wager.
    </p>
  ),
};
