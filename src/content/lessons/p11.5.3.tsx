import { Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { StatueClayViz } from "@/components/viz/StatueClayViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.5.3",
  minutes: 80,
  links: {
    revisits: ["p11.5.2", "p11.5.1", "p11.3.2"],
    foreshadows: ["p11.6.2", "p27.3.1", "p27.3.2"],
  },

  puzzle: (
    <>
      <p>
        A sculptor shapes a lump of clay into a statue of Goliath. On the shelf there seems to be one object. Yet the lump
        existed before the statue, and would survive being squashed, while the statue would not. Are there one thing or two on
        the shelf?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the ordinary story with Gibbard&rsquo;s, in which the statue and the lump begin and end together.</p>
      <StatueClayViz />
    </>
  ),

  theory: (
    <>
      <ArgumentStepViz
        title="The argument for two objects"
        steps={[
          { claim: "The lump can survive being squashed.", kind: "premise", note: "Squashing changes its shape, not its matter." },
          { claim: "The statue cannot survive being squashed.", kind: "premise", note: "A squashed statue of Goliath is no statue.", objection: "Perhaps the statue is just the lump, described as a statue." },
          { claim: "Things with different properties are distinct.", kind: "premise", note: "Leibniz’s law." },
          { claim: "So the statue is not the lump: two objects share one place.", kind: "conclusion", note: "The constitution view accepts this." },
        ]}
      />

      <Example title="Gibbard's Lumpl and Goliath">
        <p>
          Gibbard imagined the statue and the lump created at the same moment, by joining two halves, and destroyed together.
          Now they share every part and every moment. Only modal properties differ. Gibbard concluded they are one object, and
          that modal predicates such as &ldquo;could survive squashing&rdquo; depend on how the object is described.
        </p>
      </Example>

      <Remark title="replies">
        <p>
          <strong>Constitution theorists</strong>, such as Lynne Rudder Baker, say the clay constitutes the statue without
          being identical to it. <strong>Counterpart theorists</strong> agree with Gibbard: &ldquo;statue&rdquo; and
          &ldquo;lump&rdquo; invoke different counterpart relations. <strong>Four-dimensionalists</strong> say that in the
          ordinary story the worms differ but share a stage, and in Gibbard&rsquo;s story they are one worm.{" "}
          <strong>Nihilists</strong> deny statues and lumps altogether.
        </p>
      </Remark>

      <Remark title="the anti-coincidence intuition">
        <p>
          Behind the puzzle lies a principle many find compelling: two material objects cannot be in exactly the same place at
          the same time. Each response either keeps the principle at some cost, or gives it up and explains why it seemed
          true.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "diff",
      rung: "check",
      prompt: <p>Which property seems to distinguish the lump from the statue?</p>,
      answer: { kind: "choice", options: ["Their weight", "Their colour", "Whether they could survive being squashed", "Their location"], correct: [2] },
    },
    {
      key: "gib",
      rung: "check",
      prompt: <p>What is special about Gibbard&rsquo;s version of the story?</p>,
      answer: {
        kind: "choice",
        options: [
          "The statue is made of bronze",
          "The statue and the lump begin and end at the same moments",
          "There is no sculptor",
          "The lump is destroyed first",
        ],
        correct: [1],
      },
    },
    {
      key: "gibview",
      rung: "apply",
      prompt: <p>What did Gibbard conclude?</p>,
      answer: {
        kind: "choice",
        options: [
          "That statue and lump are two objects",
          "That they are one object, and modal predicates depend on how it is described",
          "That neither exists",
          "That modal properties are intrinsic",
        ],
        correct: [1],
      },
    },
    {
      key: "4d",
      rung: "apply",
      prompt: <p>In the ordinary story, how does a four-dimensionalist see the statue and the lump?</p>,
      answer: {
        kind: "choice",
        options: [
          "As identical worms",
          "As different worms that share the temporal parts during which the statue exists",
          "As two endurers",
          "As one momentary stage",
        ],
        correct: [1],
      },
    },
    {
      key: "anti",
      rung: "apply",
      prompt: <p>Which principle does the constitution view give up?</p>,
      answer: {
        kind: "choice",
        options: [
          "Leibniz’s law",
          "That two material objects cannot be in exactly the same place at the same time",
          "That statues exist",
          "That clay can be squashed",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In Gibbard&rsquo;s story, is there one object on the shelf, or two? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the modal difference and Leibniz’s law argument.",
          "Considers Gibbard’s reply that modal predicates depend on description.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "weight",
      rung: "stretch",
      prompt: <p>If the statue and the lump are two objects, each weighing 2 kilograms, why does the shelf hold only 2 kilograms?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the objects share all their matter.",
          "Considers how the constitution view explains not double counting.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the puzzle of the statue and the clay, the Leibniz's law argument for two objects, Gibbard's version in which only modal properties differ, and how constitution theorists, counterpart theorists, four-dimensionalists and nihilists respond.",

  glimpse: (
    <p>
      Next, Metaphysics turns to time itself: McTaggart&rsquo;s argument and the question of which times exist. Graduate
      metaphysics returns to composition in depth.
    </p>
  ),
};
