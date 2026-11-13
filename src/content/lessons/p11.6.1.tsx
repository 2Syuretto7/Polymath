import { Definition, Remark } from "@/components/lesson/Blocks";
import { ABSeriesViz } from "@/components/viz/ABSeriesViz";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.6.1",
  minutes: 80,
  links: {
    revisits: ["p6.1.1", "p4.1.3", "p11.5.1"],
    foreshadows: ["p11.6.2", "p11.6.3", "p32.3.1"],
  },

  puzzle: (
    <>
      <p>
        Independence Day was once in the future, became present, and is now past. Yet it is always earlier than the moon
        landing. Time seems to have two faces: a flowing present, and a fixed order. In 1908 J. M. E. McTaggart argued that
        together they show time is unreal.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move &ldquo;now&rdquo; along the timeline. Watch which descriptions of an event change and which stay fixed.</p>
      <ABSeriesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the A series and the B series">
        <p>
          The <strong>A series</strong> orders events as past, present and future; an event&rsquo;s A-properties change. The{" "}
          <strong>B series</strong> orders events by the relations earlier than and later than; these never change. A{" "}
          <strong>C series</strong>, a mere ordering with no direction, gives the order without time.
        </p>
      </Definition>

      <ArgumentStepViz
        title="McTaggart's argument"
        steps={[
          { claim: "Time requires change.", kind: "premise", note: "Without change, nothing temporal would happen." },
          { claim: "Only the A series gives genuine change: the B series is fixed.", kind: "premise", note: "An event’s B-relations never alter; only its pastness, presentness and futurity do.", objection: "B-theorists say change is just having different properties at different times." },
          { claim: "But the A series is contradictory: every event is past, present and future.", kind: "premise", note: "These are incompatible properties.", objection: "No event has them all at once: it is future, then present, then past." },
          { claim: "Saying ‘at different times’ uses the A series again, so the contradiction recurs at the next level.", kind: "inference", note: "McTaggart’s regress: ‘is past at a present moment’, and so on." },
          { claim: "So time is unreal.", kind: "conclusion", note: "McTaggart accepted this conclusion." },
        ]}
      />

      <Remark title="A-theorists and B-theorists">
        <p>
          <strong>A-theorists</strong> accept real tense and passage, and reject the third premise, often by insisting that
          tense is basic and needs no further analysis. <strong>B-theorists</strong> reject the second premise: change is a
          thing&rsquo;s having different properties at different times, and the present is just the time at which a thought
          occurs, as &ldquo;here&rdquo; is the place of an utterance.
        </p>
      </Remark>

      <Remark title="tensed language">
        <p>
          B-theorists once hoped to translate &ldquo;the meeting is now&rdquo; into tenseless sentences. Prior&rsquo;s
          &ldquo;thank goodness that&rsquo;s over&rdquo; objection resisted this: your relief that the exam is past is not
          relief that it ends before some date. New B-theorists keep tensed beliefs but deny tensed facts.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "a",
      rung: "check",
      prompt: <p>Which ordering belongs to the A series?</p>,
      answer: { kind: "choice", options: ["Earlier than and later than", "Past, present and future", "Left and right", "Cause and effect"], correct: [1] },
    },
    {
      key: "b",
      rung: "check",
      prompt: <p>How do B-relations behave as time passes?</p>,
      answer: { kind: "choice", options: ["They change constantly", "They never change", "They reverse", "They disappear"], correct: [1] },
    },
    {
      key: "change",
      rung: "apply",
      prompt: <p>Why did McTaggart think the B series alone cannot give real time?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because B-relations are vague",
          "Because time needs change, and B-relations never change",
          "Because the B series has no order",
          "Because the B series is contradictory",
        ],
        correct: [1],
      },
    },
    {
      key: "regress",
      rung: "apply",
      prompt: <p>What is McTaggart&rsquo;s regress?</p>,
      answer: {
        kind: "choice",
        options: [
          "Explaining the incompatibility by ‘at different times’ reintroduces past, present and future at a higher level",
          "Every event has an earlier event",
          "Time has no beginning",
          "Causes go back for ever",
        ],
        correct: [0],
      },
    },
    {
      key: "thank",
      rung: "apply",
      prompt: <p>What does Prior&rsquo;s &ldquo;thank goodness that&rsquo;s over&rdquo; example aim to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That tensed attitudes cannot be captured by tenseless facts about dates",
          "That exams are bad",
          "That the past is unreal",
          "That time is circular",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does McTaggart&rsquo;s argument show that time is unreal? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the A series, the B series and the argument.",
          "Considers an A-theory or B-theory reply.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "here",
      rung: "stretch",
      prompt: <p>B-theorists say &ldquo;now&rdquo; is like &ldquo;here&rdquo;. Is there anything about the present that has no analogue for places?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the indexical view of ‘now’.",
          "Considers a disanalogy, such as the felt passage of time or the asymmetry of past and future.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend McTaggart's A series and B series, his argument that time is unreal including the regress, and how A-theorists and B-theorists respond.",

  glimpse: (
    <p>
      The next lesson asks which times exist: only the present, or past and future too. Then we ask whether time travel is
      possible, and philosophy of physics seeks the source of time&rsquo;s direction.
    </p>
  ),
};
