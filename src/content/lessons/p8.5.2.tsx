import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["autonomy", "heteronomy"];
const ITEMS: SortItem[] = [
  { text: "I keep my promise because breaking it could not be willed as a universal law.", cat: "autonomy", why: "The will acts on a law it gives itself as a rational being, independent of any desire." },
  { text: "I keep my promise because I fear what people will say if I break it.", cat: "heteronomy", why: "The law comes from outside the will, through a desire to avoid disapproval." },
  { text: "I help a stranger because their humanity is an end in itself.", cat: "autonomy", why: "The reason is one any rational being could recognise, without appeal to inclination." },
  { text: "I help a stranger because it makes me feel good.", cat: "heteronomy", why: "Kind, perhaps admirable, but the will is moved by a feeling, so its law is borrowed from nature." },
  { text: "I obey this rule because God commands it, and I want to be rewarded.", cat: "heteronomy", why: "The principle depends on an external authority and a hope of reward, so for Kant it is heteronomous." },
  { text: "I tell the truth because I respect the moral law, whether or not it pays.", cat: "autonomy", why: "Respect for the law itself, which the will legislates, is the moral motive." },
  { text: "I am honest because honesty is the best policy for success.", cat: "heteronomy", why: "A hypothetical imperative: honesty serves an end I happen to want." },
];

export const lesson: LessonContent = {
  id: "p8.5.2",
  minutes: 80,
  links: {
    revisits: ["p8.5.1", "p8.4.2", "p7.5.5"],
    foreshadows: ["p8.5.3", "p13.1.2", "p13.4.1"],
  },

  puzzle: (
    <>
      <p>
        If morality is a set of commands, someone must give them. God? Society? Our own nature, seeking happiness? Kant thought
        every earlier moral philosophy failed for the same reason: it found the source of the moral law outside the will, so
        that we obey it only because we want something else. His alternative sounds paradoxical: we are bound only by laws we
        give ourselves. How can a law I make for myself bind me at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Sort each reason for acting: does the will give itself the law, or does it take its law from something outside it?
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Is each reason autonomous or heteronomous?" />
    </>
  ),

  theory: (
    <>
      <Definition title="autonomy and heteronomy">
        <p>
          <strong>Autonomy</strong> of the will is its property of being a law to itself, independently of any object of
          desire. <strong>Heteronomy</strong> is the will taking its law from outside, from inclination, from the pursuit of
          happiness, from fear or from an external authority. Heteronomy can only yield hypothetical imperatives: do this, if
          you want that. Only autonomy yields a categorical one.
        </p>
      </Definition>

      <Definition title="the formulas of autonomy and the kingdom of ends">
        <p>
          The <strong>formula of autonomy</strong> says: act so that your will can regard itself as giving universal law
          through its maxim. The <strong>kingdom of ends</strong> is a systematic union of rational beings under common laws
          they themselves make, each treating every other as an end. In it, everything has either a price, for which something
          equivalent could be substituted, or a <strong>dignity</strong>, which is above all price. Rational beings have
          dignity.
        </p>
      </Definition>

      <Example title="why a self-given law binds">
        <p>
          The law I give myself is not arbitrary, as a personal resolution would be. It is the law that I give as a rational
          being, which any rational being would give: the categorical imperative itself. So autonomy is not doing as I please.
          Doing as I please, following my strongest desire, is heteronomy, since my desires come from nature. To be autonomous
          is to act on principles I can will as laws for all.
        </p>
      </Example>

      <Remark title="autonomy and freedom">
        <p>
          Kant ends the Groundwork by linking autonomy to freedom: a will that is a law to itself must be free in the positive
          sense, determined by reason rather than by natural causes. He admits that he cannot prove we are free, only that we
          must act under the idea of freedom. The ideal of autonomy became central to modern ethics and politics, from
          Rawls&rsquo;s contract to debates about informed consent.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is autonomy of the will, for Kant?</p>,
      answer: {
        kind: "choice",
        options: [
          "Doing whatever one wants.",
          "The will's being a law to itself, independently of any object of desire.",
          "Living alone.",
          "Following the law of the state.",
        ],
        correct: [1],
      },
    },
    {
      key: "dignity",
      rung: "check",
      prompt: <p>In the kingdom of ends, what has a dignity rather than a price?</p>,
      answer: { kind: "choice", options: ["Gold", "Skill at work", "Rational beings", "Pleasure"], correct: [2] },
    },
    {
      key: "hetero",
      rung: "apply",
      prompt: <p>Why does Kant think theories that base morality on happiness are heteronomous?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because happiness is bad.",
          "Because the will then takes its law from an object of desire, yielding only hypothetical imperatives.",
          "Because happiness is impossible.",
          "Because they are religious.",
        ],
        correct: [1],
      },
    },
    {
      key: "please",
      rung: "apply",
      prompt: <p>Is following one&rsquo;s strongest desire an example of autonomy, for Kant?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes, because one chooses it.",
          "No: desires come from nature, so following them is heteronomy.",
          "Yes, if the desire is strong enough.",
          "Only for adults.",
        ],
        correct: [1],
      },
    },
    {
      key: "kingdom",
      rung: "apply",
      prompt: <p>What is the kingdom of ends?</p>,
      answer: {
        kind: "choice",
        options: [
          "A heavenly kingdom after death.",
          "A systematic union of rational beings under common laws they give themselves, each treated as an end.",
          "Kant's ideal state with a king.",
          "The world of appearances.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, explain how a law I give myself can still bind me.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the law is given by the will as rational, not by personal choice or desire.",
          "Notes it is the same law any rational being would give, the categorical imperative, so it is not arbitrary. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "god",
      rung: "stretch",
      prompt: <p>Kant says that even a command of God would be heteronomous if obeyed because God commands it. Does this make morality independent of religion? Give your view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that for Kant the moral law must be recognised by reason, not accepted on authority.",
          "Considers a response, such as that a believer may see God's commands as coinciding with reason, or the Euthyphro dilemma.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kant's ideas of autonomy and heteronomy, the formulas of autonomy and the kingdom of ends, the distinction between price and dignity, and why a self-given law is not arbitrary.",

  glimpse: (
    <p>
      The next lesson follows Kant into the Critique of Practical Reason, where the moral law becomes a fact of reason that
      reveals our freedom. The Moral Philosophy course traces how autonomy shapes contemporary Kantian ethics.
    </p>
  ),
};
