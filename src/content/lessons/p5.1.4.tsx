import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EgoismViz } from "@/components/viz/EgoismViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p5.1.4",
  minutes: 80,
  links: {
    revisits: ["p5.1.3", "p1.6.1", "p4.3.3"],
    foreshadows: ["p5.2.1", "p5.3.4", "p14.1.1"],
  },

  puzzle: (
    <>
      <p>
        A story is told of Abraham Lincoln. Riding in a coach, he argued that everyone acts from selfishness. Then he saw
        some piglets drowning in a ditch, stopped the coach, and pulled them out. Asked how that fitted his theory, he said
        it was selfishness itself: he would have had no peace of mind all day if he had left them. Is every act, however
        kind, really done for one&rsquo;s own sake? And if it is not, should it be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Two traders each care only for their own gain. Choose what each does, then let both reason as egoists. Who comes
        out ahead?
      </p>
      <EgoismViz />
    </>
  ),

  theory: (
    <>
      <Definition title="two kinds of egoism">
        <p>
          <strong>Psychological egoism</strong> is a theory of human nature: every person in fact always acts to promote
          their own interests. <strong>Ethical egoism</strong> is a theory of morality: each person ought to promote their
          own interests exclusively. Helping others is right only when, and because, it serves oneself. The first says how
          we do act, the second how we should.
        </p>
      </Definition>

      <Example title="arguments for psychological egoism, and replies">
        <p>
          The first argument: we always do what we most want to do, so we always act selfishly. But this trades on two
          meanings. Doing what you want is not selfish when what you want is someone else&rsquo;s good. The second: helping
          others makes us feel good, so that feeling is our real aim. Joseph Butler answered this in the eighteenth century.
          We feel satisfaction in helping only because we already cared about the person helped; the pleasure presupposes
          an unselfish desire rather than replacing it. Lincoln would have had no peace leaving the piglets only because he
          cared what happened to them.
        </p>
      </Example>

      <Definition title="arguments for ethical egoism">
        <p>
          Some defend ethical egoism by arguing that altruism is self-defeating: we know our own needs best, and charity
          can be intrusive or degrading. Ayn Rand held that the individual&rsquo;s life is of supreme value, and that an
          ethics of self-sacrifice treats the individual as worthless. A third argument, going back to Hobbes, says that
          the familiar rules of morality, such as keeping promises and not harming others, are justified because following
          them serves each person&rsquo;s interest in a world of other people.
        </p>
      </Definition>

      <Remark title="objections">
        <p>
          The game above shows one difficulty. If each pursues their own interest, both may end worse off than if both had
          held back; Derek Parfit called such a theory collectively self-defeating. Hobbes&rsquo;s answer is an agreement,
          backed by a sovereign, which leads towards contract theories. James Rachels argued that ethical egoism is
          arbitrary in the way racism is: it divides people into two groups, oneself and everyone else, and counts the
          interests of the first group as more important, without any relevant difference to justify it. Kurt Baier
          objected that egoism cannot settle conflicts of interest, which is part of what morality is for.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kinds",
      rung: "check",
      prompt: <p>What is the difference between psychological and ethical egoism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Psychological egoism says how people do act; ethical egoism says how they ought to act.",
          "Psychological egoism is about feelings; ethical egoism is about actions.",
          "They are two names for the same view.",
          "Ethical egoism is about groups; psychological egoism is about individuals.",
        ],
        correct: [0],
      },
    },
    {
      key: "butler",
      rung: "check",
      prompt: <p>What is Butler&rsquo;s reply to the claim that we help others only for the pleasure it gives us?</p>,
      answer: {
        kind: "choice",
        options: [
          "Helping others never gives pleasure.",
          "The pleasure of helping presupposes that we already cared about the other person.",
          "Pleasure is always bad.",
          "God commands us to help others.",
        ],
        correct: [1],
      },
    },
    {
      key: "game",
      rung: "apply",
      prompt: (
        <p>
          In the trading game, how much more does each trader get if both keep the bargain than if both cheat?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "lincoln",
      rung: "apply",
      prompt: <p>What does the reply to the Lincoln story suggest about his saving the piglets?</p>,
      answer: {
        kind: "choice",
        options: [
          "It was purely selfish.",
          "His peace of mind depended on his caring about the piglets, so he had an unselfish motive.",
          "It was a mistake.",
          "It was done for fame.",
        ],
        correct: [1],
      },
    },
    {
      key: "rachels",
      rung: "apply",
      prompt: <p>Why does Rachels compare ethical egoism to racism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Both are popular.",
          "Both treat one group's interests as more important than another's without a relevant difference to justify it.",
          "Both were defended by Ayn Rand.",
          "Both are forms of psychological egoism.",
        ],
        correct: [1],
      },
    },
    {
      key: "equivocation",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct the argument &ldquo;we always do what we most want to do, so we always act selfishly&rdquo;.
          Identify the step where it goes wrong, and explain the two meanings involved.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the premise that every voluntary action is done because the agent wants to do it, and the conclusion that every action is selfish.",
          "Identifies the hidden premise that acting on one's own wants is selfish.",
          "Distinguishes acting on one's own desire from acting on a desire for one's own benefit, and shows the argument confuses them. A clear answer earns full credit.",
        ],
      },
    },
    {
      key: "selfdefeat",
      rung: "stretch",
      prompt: (
        <p>
          Does the trading game refute ethical egoism? Consider whether an egoist could accept rules of cooperation, as
          Hobbes thought, and whether a theory can be faulted for being collectively self-defeating if it is not
          individually self-defeating.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains why mutual egoism leads both traders to a worse outcome than cooperation.",
          "Considers the egoist reply that cooperation, enforced by agreement or a sovereign, serves self-interest, and the distinction between individual and collective self-defeat.",
          "Reaches a reasoned verdict. Any thoughtful position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between psychological and ethical egoism, why the arguments for psychological egoism fail, with Butler's reply, the arguments for ethical egoism, and the objections from the trading game and from arbitrariness.",

  glimpse: (
    <p>
      The next chapter turns to utilitarianism, which counts everyone&rsquo;s happiness equally. Contractarianism, later in
      the course, develops Hobbes&rsquo;s idea, and Political Philosophy begins with his state of nature.
    </p>
  ),
};
