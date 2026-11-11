import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RiverViz } from "@/components/viz/RiverViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.1.2",
  minutes: 60,
  links: {
    revisits: ["p1.4.1", "p0.2.1"],
    foreshadows: ["p4.3.4", "p11.5.1", "p11.5.2"],
  },

  puzzle: (
    <>
      <p>
        You stand in a river. A minute later you stand in it again. Is it the same river? The water around your ankles is
        entirely new. The banks, the name and the course are the same.
      </p>
      <p>
        Heraclitus of Ephesus, around 500 BCE, built a philosophy on puzzles like this. He has been read as saying that
        everything changes and nothing stays the same. Is that what he meant, and could it even be true?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Watch the water in a stretch of river. After a few minutes none of the original water is left, yet nobody thinks
        the river has gone. Perhaps the river is not the water but the steady pattern the water keeps making. Heraclitus
        seems to have thought the whole world is like this: constant change, held in balance by a rule.
      </p>
      <RiverViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the sources">
        <p>
          Heraclitus wrote a book, now lost, in short, striking sayings. About a hundred survive as quotations in later
          writers, often out of context. Ancient readers called him &ldquo;the obscure&rdquo;, and interpreting him has
          always meant reading slowly and charitably, the skills from Thinking and Writing Philosophically.
        </p>
      </Definition>

      <Example title="the river, carefully">
        <p>
          The famous saying &ldquo;you cannot step into the same river twice&rdquo; comes to us through Plato&rsquo;s
          paraphrase. A fragment that may preserve Heraclitus&rsquo;s own words says something subtler: that on those who
          step into the same rivers, different and different waters flow. On this reading the river <em>is</em> the same,
          and it stays the same precisely because its waters change. A river whose water stopped flowing would be a pond.
          Later, his follower Cratylus is said to have gone further and claimed you cannot step into the same river even
          once.
        </p>
      </Example>

      <Definition title="the unity of opposites">
        <p>
          Many fragments say that opposites are in some way one. The road up and the road down are one and the same.
          Seawater is the purest and the foulest: drinkable and life-giving for fish, undrinkable and deadly for people.
          Illness makes health sweet, hunger makes fullness good. These sayings make different points, which careful
          readers separate: the same thing can have opposite properties from different points of view, or in relation to
          different things; some opposites can only be understood through each other; and some pass into each other over
          time, as hot things cool.
        </p>
      </Definition>

      <Definition title="the logos and fire">
        <p>
          Heraclitus speaks of a <em>logos</em>, an account or rule, common to all things, which most people fail to grasp
          even when it is explained to them. The world, he says, is an ever-living fire, kindled and quenched in measures.
          Fire is a good emblem for his view: a flame keeps its shape only by constantly consuming and changing its fuel.
          The measures matter: the change is not chaos but follows a proportion.
        </p>
      </Definition>

      <Remark title="identity through change">
        <p>
          Heraclitus raises a question that has never gone away. What makes something the same thing over time when its
          parts are replaced? Your body&rsquo;s matter is largely replaced over the years, as the river&rsquo;s is over
          minutes. Introduction to Philosophy asked what makes you you; here is the question at its origin. Plato, worried
          that a world of constant change could not be known, looked for unchanging objects of knowledge, the Forms.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "river",
      rung: "check",
      prompt: <p>On the reading given in this lesson, what does the river fragment suggest?</p>,
      answer: {
        kind: "choice",
        options: [
          "Nothing ever stays the same in any sense.",
          "A river remains the same river because, not in spite of, its waters changing.",
          "Rivers do not exist.",
          "Water never changes.",
        ],
        correct: [1],
      },
    },
    {
      key: "source",
      rung: "check",
      prompt: <p>How has Heraclitus&rsquo;s thought come down to us?</p>,
      answer: {
        kind: "choice",
        options: ["A complete book.", "Short quotations in later writers.", "A dialogue by Plato in which he is the main speaker.", "Nothing survives."],
        correct: [1],
      },
    },
    {
      key: "sea",
      rung: "apply",
      prompt: <p>What point is best illustrated by &ldquo;seawater is purest and foulest&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "Opposite properties can belong to the same thing in relation to different beings.",
          "Seawater is always harmful.",
          "Everything is water.",
          "Fish are purer than people.",
        ],
        correct: [0],
      },
    },
    {
      key: "fire",
      rung: "apply",
      prompt: <p>Why is fire an apt emblem for Heraclitus&rsquo;s view of the world?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because fire is the hottest element.",
          "Because a flame keeps a stable form only by constantly changing its material, in measure.",
          "Because fire was sacred in Ephesus.",
          "Because fire never changes.",
        ],
        correct: [1],
      },
    },
    {
      key: "cratylus",
      rung: "apply",
      prompt: <p>Cratylus claimed you cannot step into the same river even once. Which assumption would lead to this?</p>,
      answer: {
        kind: "choice",
        options: [
          "A thing is identical to its matter, and the matter changes at every instant.",
          "Rivers have no banks.",
          "Stepping takes no time.",
          "The river's name changes every day.",
        ],
        correct: [0],
      },
    },
    {
      key: "opposites",
      rung: "prove",
      prompt: (
        <p>
          Take two of the unity-of-opposites sayings from this lesson and explain how they make different points. Does
          either amount to a contradiction?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains each saying in its own terms, for example relativity to different beings (seawater) and sameness of a thing under two descriptions (the road up and down).",
          "Distinguishes the kinds of unity involved.",
          "Argues whether either is a real contradiction, for instance noting that a thing having opposite properties in different respects is not one. A thoughtful answer either way is fine.",
        ],
      },
    },
    {
      key: "ship",
      rung: "stretch",
      prompt: (
        <p>
          A ship&rsquo;s planks are replaced one by one until none of the originals remain, and someone builds a second ship
          from the old planks. Which is the original ship? Use the idea of a thing as a pattern in changing matter to
          defend an answer, and give the best objection to it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies the two candidates and the tension between continuity of form or function and sameness of matter.",
          "Defends an answer using the pattern idea from the lesson, or another principled view.",
          "States a serious objection and replies to it. Any carefully argued position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the two readings of Heraclitus's river saying, what the unity of opposites might mean, and the question about identity through change that he left behind.",

  glimpse: (
    <p>
      Plato answers Heraclitus with the theory of Forms, unchanging objects of knowledge behind the changing world.
      Metaphysics takes up identity over time directly: do things endure whole from moment to moment, or are they spread
      out in time like a road is spread out in space? And how can a statue and its clay be in the same place at once?
    </p>
  ),
};
