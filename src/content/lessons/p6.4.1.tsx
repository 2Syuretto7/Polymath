import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["reason alone", "both", "revelation alone"];
const ITEMS: SortItem[] = [
  {
    text: "The angles of a triangle add up to two right angles.",
    cat: "reason alone",
    why: "A truth of geometry, known by demonstration. Revelation does not teach it, and need not.",
  },
  {
    text: "God exists.",
    cat: "both",
    why: "A preamble of faith. Aquinas held that reason can prove it, through the five ways, but that it is also revealed, since few would otherwise reach it, after long effort, and with errors mixed in.",
  },
  {
    text: "God is three persons in one nature.",
    cat: "revelation alone",
    why: "The Trinity is an article of faith. Reason can show it is not contradictory, and find likenesses of it, but cannot prove it.",
  },
  {
    text: "The world had a beginning in time.",
    cat: "revelation alone",
    why: "Against both Averroes and many theologians, Aquinas argued that reason can prove neither that the world is eternal nor that it began. It is known only by faith.",
  },
  {
    text: "God is one, and not a body.",
    cat: "both",
    why: "Another preamble of faith: provable by philosophers, as Aristotle and Maimonides showed, and also revealed.",
  },
  {
    text: "Plants take in nourishment and grow.",
    cat: "reason alone",
    why: "A truth of natural philosophy, learned from experience and reasoning.",
  },
];

export const lesson: LessonContent = {
  id: "p6.4.1",
  minutes: 80,
  links: {
    revisits: ["p6.2.4", "p6.2.5", "p6.3.3"],
    foreshadows: ["p6.4.2", "p9.4.2", "p23.4.2"],
  },

  puzzle: (
    <>
      <p>
        In the 1200s, the complete works of Aristotle arrived in the universities of Latin Europe, with the commentaries of
        Averroes. They were dazzling, and dangerous: Aristotle taught that the world is eternal, and Averroes seemed to deny
        personal immortality. Paris banned them more than once. Thomas Aquinas, a Dominican friar from near Naples, took a
        different course. He studied them more carefully than anyone, and argued that faith had nothing to fear from
        reason. How can two sources of truth fit together?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Aquinas sorted truths about God and the world by how they can be known. Sort each claim as he would.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="How can each truth be known, according to Aquinas?" />
    </>
  ),

  theory: (
    <>
      <Definition title="two sources, one truth">
        <p>
          Aquinas distinguishes truths known by <strong>natural reason</strong>, starting from the senses and first
          principles, from truths known by <strong>revelation</strong>, accepted on God&rsquo;s authority. Since both come
          from God, who is truth itself, they cannot genuinely conflict. If a philosophical argument contradicts the faith,
          it must contain a mistake, which reason itself can expose.
        </p>
      </Definition>

      <Definition title="preambles and articles">
        <p>
          Some revealed truths, such as that God exists and is one, can also be proved. Aquinas calls these the{" "}
          <strong>preambles of faith</strong>. They are revealed anyway, because otherwise only a few people, after a long
          time and with many errors, would know them. Other truths, the <strong>articles of faith</strong>, such as the
          Trinity and the Incarnation, exceed reason: they cannot be proved, though they are not contrary to reason.
        </p>
      </Definition>

      <Example title="the eternity of the world">
        <p>
          Aquinas&rsquo;s treatment of the eternity of the world shows the method. Aristotle&rsquo;s arguments that the world
          had no beginning do not prove it. But the theologians&rsquo; arguments that it must have had a beginning do not
          prove that either. So the beginning of the world is known by faith alone. Aquinas thought it better to admit this
          than to defend the faith with weak arguments, which would expose it to ridicule.
        </p>
      </Example>

      <Remark title="grace perfects nature">
        <p>
          A guiding principle of Aquinas&rsquo;s thought is that grace does not destroy nature but perfects it. Philosophy is
          not a rival to theology but its servant and partner. This allowed him to use Aristotle throughout his great
          unfinished Summa Theologiae, written as questions, objections and replies in the style of the universities.
          Critics in his own time thought he conceded too much to Aristotle; later critics, from Luther to some modern
          philosophers, have questioned whether faith should be thought of as a kind of knowledge at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "conflict",
      rung: "check",
      prompt: <p>Why did Aquinas think reason and faith cannot really conflict?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because they concern different subjects entirely.",
          "Because both come from God, who is truth, so an apparent conflict shows a mistake.",
          "Because faith always gives way to reason.",
          "Because reason is unreliable.",
        ],
        correct: [1],
      },
    },
    {
      key: "preamble",
      rung: "check",
      prompt: <p>What is a preamble of faith?</p>,
      answer: {
        kind: "choice",
        options: [
          "A prayer said before study.",
          "A revealed truth that reason can also prove, such as that God exists.",
          "A truth that reason can never reach.",
          "A false belief.",
        ],
        correct: [1],
      },
    },
    {
      key: "why",
      rung: "apply",
      prompt: <p>Why, according to Aquinas, are provable truths about God revealed as well?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the proofs are invalid.",
          "Because otherwise few would know them, only after a long time, and with errors.",
          "Because reason is forbidden.",
          "Because they are not really true.",
        ],
        correct: [1],
      },
    },
    {
      key: "eternity",
      rung: "apply",
      prompt: <p>What did Aquinas conclude about whether the world had a beginning in time?</p>,
      answer: {
        kind: "choice",
        options: [
          "Reason proves it had a beginning.",
          "Reason proves it is eternal.",
          "Reason can prove neither, so it is known by faith.",
          "The question is meaningless.",
        ],
        correct: [2],
      },
    },
    {
      key: "article",
      rung: "apply",
      prompt: <p>Which of these are articles of faith for Aquinas, beyond the reach of proof? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["The Trinity", "That God exists", "The Incarnation", "That God is one"],
        correct: [0, 2],
      },
    },
    {
      key: "weak",
      rung: "prove",
      prompt: (
        <p>
          Aquinas warned against defending the faith with weak arguments. Explain his reasoning and say whether it is good
          advice for anyone defending a belief.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that a bad argument invites ridicule and suggests the belief rests on nothing better.",
          "Gives a reasoned view of whether the advice generalises, perhaps with an example.",
        ],
      },
    },
    {
      key: "compare",
      rung: "stretch",
      prompt: (
        <p>
          Compare Aquinas with Averroes on the relation of philosophy and revelation. Where do they agree, and where do
          they differ?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes agreement: truth does not contradict truth, and philosophy is legitimate and valuable.",
          "Notes a difference, such as Aquinas's articles of faith that exceed reason, against Averroes's view that demonstration reaches the highest truths and scripture is read to fit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Aquinas fitted faith and reason together, the difference between preambles and articles of faith, and his view on whether reason can prove the world had a beginning.",

  glimpse: (
    <p>
      The next lesson examines the most famous preambles: Aquinas&rsquo;s five ways of proving that God exists.
    </p>
  ),
};
