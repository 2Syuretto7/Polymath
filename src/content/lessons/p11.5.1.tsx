import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PersistenceViz } from "@/components/viz/PersistenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.5.1",
  minutes: 80,
  links: {
    revisits: ["p4.1.2", "p11.3.2", "p1.4.1"],
    foreshadows: ["p11.5.2", "p11.5.3", "p11.6.2"],
  },

  puzzle: (
    <>
      <p>
        On Monday your banana is green; on Thursday it is yellow. It is the same banana, yet it has incompatible properties.
        How can one thing be both green and yellow? Saying &ldquo;at different times&rdquo; is the obvious answer, but what
        exactly does it mean?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Switch between the three views and move through the week. Notice what each says &ldquo;the banana&rdquo; refers to.</p>
      <PersistenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="endurance and perdurance">
        <p>
          A thing <strong>endures</strong> if it is wholly present at each time it exists. It <strong>perdures</strong> if it
          has different <strong>temporal parts</strong> at different times, as a road has different spatial parts in different
          places, and is wholly present at no single time.
        </p>
      </Definition>

      <Example title="the problem of temporary intrinsics">
        <p>
          Lewis argued that shape and colour are intrinsic properties, not relations. Endurantists must make them relations to
          times (green-at-Monday), which seems to deny they are intrinsic, or else say only the present exists. Perdurantists
          give the properties to different temporal parts, so no single thing has both.
        </p>
      </Example>

      <Remark title="stage theory">
        <p>
          Sider and Hawley propose that ordinary objects are momentary stages, and that a stage persists by having temporal
          counterparts at other times. &ldquo;This banana will be yellow&rdquo; is true if a later counterpart stage is yellow.
          This combines the four-dimensional ontology with the idea that the banana is wholly present now.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Against perdurance: it seems that you, not a part of you, are reading this sentence, and it is odd to think that
          you are mostly elsewhere in time. The view also seems to need eternalism. Against endurance: relativising properties
          to times threatens their intrinsic character, and adverbial alternatives such as being green Monday-ly are hard to
          understand.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "end",
      rung: "check",
      prompt: <p>What does it mean for an object to endure?</p>,
      answer: { kind: "choice", options: ["To last a long time", "To be wholly present at each time it exists", "To have temporal parts", "To never change"], correct: [1] },
    },
    {
      key: "perd",
      rung: "check",
      prompt: <p>What does it mean for an object to perdure?</p>,
      answer: {
        kind: "choice",
        options: ["To be wholly present at each time", "To have different temporal parts at different times", "To be eternal", "To be indestructible"],
        correct: [1],
      },
    },
    {
      key: "intr",
      rung: "apply",
      prompt: <p>How does a perdurantist resolve the problem of temporary intrinsics for the banana?</p>,
      answer: {
        kind: "choice",
        options: [
          "The banana is green relative to Monday",
          "Different temporal parts of the banana have the different colours",
          "Only the present colour is real",
          "Colours are not real",
        ],
        correct: [1],
      },
    },
    {
      key: "stage",
      rung: "apply",
      prompt: <p>On stage theory, what makes &ldquo;this banana will be yellow&rdquo; true?</p>,
      answer: {
        kind: "choice",
        options: [
          "The whole worm is yellow",
          "A later stage that is a temporal counterpart of this one is yellow",
          "The banana endures until it is yellow",
          "Nothing: it is false",
        ],
        correct: [1],
      },
    },
    {
      key: "obj",
      rung: "apply",
      prompt: <p>Which is an objection to perdurantism?</p>,
      answer: {
        kind: "choice",
        options: [
          "It makes colours relations to times.",
          "It seems that you, not a temporal part of you, are doing the reading now.",
          "It denies that things change.",
          "It requires presentism.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Do you endure or perdure? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the two views.",
          "Considers the problem of temporary intrinsics or an objection to one view.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "heraclitus",
      rung: "stretch",
      prompt: <p>Heraclitus said you cannot step into the same river twice. How would an endurantist and a perdurantist each respond?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an endurantist response, such as one river wholly present with changing water.",
          "Gives a perdurantist response, such as stepping into two temporal parts of one river.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between endurance and perdurance, the problem of temporary intrinsics and how each view answers it, stage theory, and an objection to each.",

  glimpse: (
    <p>
      The next lessons apply these views to puzzles about objects that seem to share their matter. The debate about which
      times exist, presentism or eternalism, follows soon after.
    </p>
  ),
};
