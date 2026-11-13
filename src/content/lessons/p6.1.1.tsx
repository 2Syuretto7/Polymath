import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PsalmViz } from "@/components/viz/PsalmViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p6.1.1",
  minutes: 80,
  links: {
    revisits: ["p4.7.5", "p4.1.4", "p4.1.3"],
    foreshadows: ["p6.1.3", "p8.2.2", "p32.3.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;What then is time? If nobody asks me, I know. If I want to explain it to someone who asks, I do not
        know.&rdquo; So wrote Augustine of Hippo around the year 400, in Book Eleven of his Confessions. The past no
        longer exists, the future does not yet exist, and the present, if it lasted, would not be time but eternity. Yet
        we measure times, and say one sermon was longer than another. What are we measuring, if most of it is not there?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Augustine&rsquo;s own example is reciting a hymn he knows by heart. Move the slider through the recitation of its
        opening line, and watch how much of it is held in memory, how much in attention, and how much in expectation.
      </p>
      <PsalmViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the problem">
        <p>
          Augustine sets out a dilemma. The past is no longer, and the future is not yet; only the present exists. But the
          present has no length: any stretch of time, a year or an hour, can be divided into a part already gone and a
          part still to come, so the present shrinks to an instant without extent. Then nothing that exists has any
          length. How can we measure lengths of time, and compare them, as we plainly do?
        </p>
      </Definition>

      <Definition title="a stretching of the mind">
        <p>
          His answer is that the past and the future exist in the mind. There are three presents: a present of past
          things, which is <strong>memory</strong>; a present of present things, which is <strong>attention</strong>; and
          a present of future things, which is <strong>expectation</strong>. When we measure time, we measure
          impressions that passing things leave in the mind and that stay there. Time is a{" "}
          <em>distentio animi</em>, a stretching out of the mind.
        </p>
      </Definition>

      <Example title="reciting a hymn">
        <p>
          Before Augustine starts the hymn, his expectation reaches over the whole of it. As he recites, the words pass
          through attention from expectation into memory, until the whole is in memory. He says the same is true of a
          whole life, and of the whole history of humanity, whose parts are lives. The display above keeps the total
          constant while its distribution changes: the mind holds the whole, stretched across three directions.
        </p>
      </Example>

      <Remark title="God, eternity, and the questions left">
        <p>
          The puzzle began with a taunt: what was God doing before creating heaven and earth? Augustine replies that
          there was no before. Time is part of creation, so God did not wait through empty ages; God is eternal, outside
          time, and to God all is present at once. His account of time has been admired by thinkers as different as
          Husserl and Wittgenstein. Critics ask whether it makes time merely subjective: did nothing last before there
          were minds to measure it? Augustine may only be explaining how we <em>measure</em> time, not what time is. The
          question of whether past and future exist returns in modern debates about time.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: <p>What are Augustine&rsquo;s three presents?</p>,
      answer: {
        kind: "choice",
        options: [
          "Morning, noon and night",
          "Memory, attention and expectation",
          "Past, eternity and future",
          "Body, soul and spirit",
        ],
        correct: [1],
      },
    },
    {
      key: "before",
      rung: "check",
      prompt: <p>How does Augustine answer the question of what God was doing before creation?</p>,
      answer: {
        kind: "choice",
        options: [
          "God was preparing the world.",
          "There was no before, because time itself was created with the world.",
          "God was resting.",
          "Nobody can ask the question.",
        ],
        correct: [1],
      },
    },
    {
      key: "present",
      rung: "apply",
      prompt: <p>Why does Augustine conclude that the present has no length?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because clocks are inaccurate.",
          "Because any stretch of time divides into a part already past and a part still to come.",
          "Because God is eternal.",
          "Because the present is only an illusion of the senses.",
        ],
        correct: [1],
      },
    },
    {
      key: "half",
      rung: "apply",
      prompt: (
        <p>
          Halfway through reciting a hymn, where is the first half, on Augustine&rsquo;s account?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["In expectation", "In memory", "Nowhere at all", "In the book"],
        correct: [1],
      },
    },
    {
      key: "measure",
      rung: "apply",
      prompt: <p>When we measure a length of time, what does Augustine say we are measuring?</p>,
      answer: {
        kind: "choice",
        options: [
          "The motion of the sun.",
          "An impression that the passing thing has left in the mind.",
          "The future directly.",
          "Nothing, since time is unreal.",
        ],
        correct: [1],
      },
    },
    {
      key: "subjective",
      rung: "prove",
      prompt: (
        <p>
          Does Augustine&rsquo;s account make time depend on minds? State the worry and give one way of answering it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the worry: if time is a stretching of the mind, it seems nothing lasted before there were minds.",
          "Gives a reply, such as that Augustine explains how we measure time rather than what time is, or that God's mind or creation grounds time.",
        ],
      },
    },
    {
      key: "clock",
      rung: "stretch",
      prompt: (
        <p>
          Augustine rejects the view that time simply is the motion of the heavenly bodies. Why might he reject it, and is
          he right?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains his reason: we could measure time even if the sun stood still, and we measure the motion of bodies by time, not the reverse.",
          "Reaches a reasoned view of whether time is more than any particular motion.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Augustine's puzzle about time, his answer that time is a stretching of the mind into memory, attention and expectation, and his reply to the question of what God was doing before creation.",

  glimpse: (
    <p>
      The next lesson follows Augustine on evil and free will. Boethius, a century later, uses the idea of eternity to
      reconcile God&rsquo;s foreknowledge with human freedom.
    </p>
  ),
};
