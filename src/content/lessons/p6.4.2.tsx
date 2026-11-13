import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { WaysViz } from "@/components/viz/WaysViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p6.4.2",
  minutes: 85,
  links: {
    revisits: ["p6.4.1", "p6.2.2", "p1.5.1"],
    foreshadows: ["p6.4.3", "p23.2.2", "p7.2.5"],
  },

  puzzle: (
    <>
      <p>
        In a single article of the Summa Theologiae, barely two pages long, Aquinas sets out five ways of proving that God
        exists. Each starts from something anyone can observe: change, causation, things that come and go, degrees of
        goodness, purposeful behaviour in nature. Each ends with the words &ldquo;and this everyone calls God&rdquo;. They
        are among the most studied, and most misunderstood, arguments in philosophy. Are they valid, and what exactly do
        they claim?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a way and climb its chain of dependence. At the top, consider the question each way faces.
      </p>
      <WaysViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the shape of the ways">
        <p>
          Each way begins from an evident fact, finds that things of that kind depend on something else, and argues that
          the dependence cannot go on for ever, so there must be a first. The first three are{" "}
          <strong>cosmological</strong>: from motion, from efficient causation, and from contingency. The fourth argues
          from degrees of perfection to a maximum. The fifth, <strong>teleological</strong>, argues from the
          goal-directedness of things without minds to a directing intelligence.
        </p>
      </Definition>

      <Definition title="essentially ordered series">
        <p>
          The ways are often misread as saying the universe must have had a first moment. Aquinas thought reason could not
          prove that. The series he means are <strong>essentially ordered</strong>: each member acts only here and now
          through the one before it, as a hand moves a stick which moves a stone. Such a series needs a first member that
          has its causal power of itself, not from another, or nothing in the series would act at all. An{" "}
          <strong>accidentally ordered</strong> series, such as a line of ancestors, could in principle go back without
          limit, since a father can beget a son after his own father has died.
        </p>
      </Definition>

      <Example title="the first way">
        <p>
          By motion Aquinas means any change from potentiality to actuality, using Aristotle&rsquo;s terms. Wood that is
          potentially hot becomes actually hot only through something actually hot, such as fire. Nothing can be both
          potential and actual in the same respect at once, so nothing changes itself in that respect. Whatever is changed
          is changed by another. Since the series of changers here and now cannot be infinite, there is a first changer
          that is not itself changed: pure actuality.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Critics ask several things. Modern physics, with inertia, seems to undercut the first way, though defenders reply
          that Aquinas&rsquo;s motion is change in general, not local movement. Why should the first in each way be the
          same being? Aquinas argues for this later in the Summa, where he derives God&rsquo;s simplicity, goodness and
          unity from pure actuality. And does the final step, &ldquo;this everyone calls God&rdquo;, smuggle in more than
          has been shown? Darwin gave the fifth way its strongest rival. The ways remain at the centre of debates about
          natural theology.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kinds",
      rung: "check",
      prompt: <p>Which of the five ways are usually called cosmological? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["The way from motion", "The way from efficient causes", "The way from possibility and necessity", "The way from governance"],
        correct: [0, 1, 2],
      },
    },
    {
      key: "fifth",
      rung: "check",
      prompt: <p>What does the fifth way start from?</p>,
      answer: {
        kind: "choice",
        options: [
          "That things change.",
          "That things without knowledge act for an end.",
          "That things are more and less good.",
          "That the world began.",
        ],
        correct: [1],
      },
    },
    {
      key: "series",
      rung: "apply",
      prompt: <p>Which of these is an essentially ordered series of causes, in Aquinas&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "A grandparent, a parent and a child.",
          "A hand moving a stick that moves a stone, all at once.",
          "Yesterday's rain causing today's flood.",
          "A row of dominoes, each falling after the last has fallen.",
        ],
        correct: [1],
      },
    },
    {
      key: "beginning",
      rung: "apply",
      prompt: <p>Do the five ways try to prove that the universe had a first moment in time?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes, that is their main aim.",
          "No: Aquinas held this cannot be proved; the ways concern present dependence, not a beginning in time.",
          "Only the fifth way does.",
          "Only the fourth way does.",
        ],
        correct: [1],
      },
    },
    {
      key: "motion",
      rung: "apply",
      prompt: <p>What does Aquinas mean by motion in the first way?</p>,
      answer: {
        kind: "choice",
        options: [
          "Only movement from place to place.",
          "Any change from being potentially something to being actually it.",
          "The movement of the planets only.",
          "Thought.",
        ],
        correct: [1],
      },
    },
    {
      key: "same",
      rung: "prove",
      prompt: (
        <p>
          A critic says that even if each way succeeds, it might prove five different first beings, none of them God.
          Explain the objection and say how Aquinas might reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the objection: an unmoved mover, a first cause, a necessary being and so on need not be one being, nor have the attributes of God.",
          "Gives a reply, such as that each first must be pure actuality, and there can be only one such being, from which the divine attributes follow, and assesses it.",
        ],
      },
    },
    {
      key: "infinite",
      rung: "stretch",
      prompt: (
        <p>
          Why does Aquinas think an essentially ordered series cannot be infinite, though an accidentally ordered one can?
          Is the distinction convincing?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that in an essentially ordered series every intermediate member has its power only from the one before, so without a first, nothing would have the power at all.",
          "Assesses the distinction, with an argument for or against.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the shape of Aquinas's five ways, what each one starts from, the difference between essentially and accidentally ordered series, and the main objections.",

  glimpse: (
    <p>
      The next lesson turns from God to the human being: Aquinas&rsquo;s account of the soul as the form of the body.
    </p>
  ),
};
