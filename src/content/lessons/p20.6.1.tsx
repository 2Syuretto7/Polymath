import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ElephantViz } from "@/components/viz/ElephantViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.6.1",
  minutes: 85,
  links: {
    revisits: ["p20.5.5", "p20.1.4", "p1.1.2"],
    foreshadows: ["p20.6.2", "p20.7.4", "p20.7.6"],
  },

  puzzle: (
    <>
      <p>
        The Vedāntins say reality is permanent and unchanging; the Buddhists say it is a flow of momentary events. Each side
        has strong arguments, and each finds the other plainly wrong. What if both are describing something real, but from
        different standpoints, and the error lies only in claiming to have said everything?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Let each blind man touch his part of the elephant, then step back to see the whole.</p>
      <ElephantViz />
    </>
  ),

  theory: (
    <>
      <Definition title="many-sidedness">
        <p>
          <strong>Anekāntavāda</strong>, the doctrine of non-one-sidedness, is the Jaina view that reality is complex, with
          infinitely many aspects (ananta-dharma). No single assertion captures a thing fully. A view becomes false only when it
          is held as the whole truth, excluding all others. The roots go back to Mahāvīra (sixth to fifth century BCE); the
          doctrine was systematised by Siddhasena Divākara, Samantabhadra and later Haribhadra.
        </p>
      </Definition>

      <Example title="substance and modes">
        <p>
          A gold bracelet melted and recast as a necklace has changed in its mode (paryāya) and stayed the same in its substance
          (dravya), the gold. From the standpoint of substance, reality is permanent, as the Vedāntins say; from the standpoint
          of modes, it is changing at every moment, as the Buddhists say. Each school is right about one aspect and wrong to
          deny the other.
        </p>
      </Example>

      <Definition title="standpoints">
        <p>
          The theory of <strong>nayas</strong>, or standpoints, classifies the partial perspectives from which claims are made.
          Jaina texts list seven, from the everyday standpoint that takes things in a loose, general way, through the standpoint
          of the present moment only, to the standpoints of words and their exact etymological sense. A naya is a partial truth;
          a durnaya, or bad standpoint, is a partial view taken for the whole.
        </p>
      </Definition>

      <Remark title="intellectual non-violence">
        <p>
          Jainas link anekāntavāda to ahiṃsā, non-violence: to insist that one&rsquo;s own view is the only truth is a kind of
          violence in thought. Gandhi cited the doctrine as a source of his own respect for opponents. Critics ask whether
          anekāntavāda applies to itself; Jainas answer that it does, being itself true from a standpoint, which they regard as
          consistent rather than self-defeating.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does anekāntavāda hold?</p>,
      answer: { kind: "choice", options: ["Reality has many aspects, and each claim captures only some of them", "Nothing can be known", "Only one view is true", "Reality is a single undivided whole"], correct: [0] },
    },
    {
      key: "false",
      rung: "check",
      prompt: <p>When does a view become false, on this doctrine?</p>,
      answer: { kind: "choice", options: ["When it is held as the whole truth, excluding all others", "When it is held from a standpoint", "When it is about change", "Never"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what does the man touching the leg say an elephant is like?</p>,
      answer: { kind: "choice", options: ["A pillar", "A snake", "A wall", "A rope"], correct: [0] },
    },
    {
      key: "gold",
      rung: "apply",
      prompt: <p>In the bracelet example, what stays the same when it is recast as a necklace?</p>,
      answer: { kind: "choice", options: ["The substance, gold", "The mode, its shape", "Both", "Neither"], correct: [0] },
    },
    {
      key: "naya",
      rung: "apply",
      prompt: <p>What is a durnaya?</p>,
      answer: { kind: "choice", options: ["A partial standpoint mistaken for the whole truth", "A correct standpoint", "A sacred text", "A kind of perception"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is anekāntavāda self-refuting, since it seems to assert one view as the whole truth? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the objection that the doctrine itself is a one-sided claim.",
          "Considers the Jaina reply that anekāntavāda is itself true only from a standpoint.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can every disagreement be resolved by finding the standpoints from which each side is right? Think of a case where it cannot.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives a case, such as a contradiction about the same aspect at the same time, or a moral dispute.",
          "Considers what a Jaina would say about it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If every claim holds only in some respect, the Jainas needed a logic to match: a way of qualifying each assertion and
        of combining existence, non-existence and inexpressibility.
      </p>
      <p>
        Next, syādvāda, the doctrine of &lsquo;in some respect&rsquo;: the sevenfold predication, the four respects of substance,
        place, time and form, and Śaṅkara&rsquo;s objection that it asserts contradictions.
      </p>
    </>
  ),
};
