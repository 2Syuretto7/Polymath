import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FourTruthsViz } from "@/components/viz/FourTruthsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.5.1",
  minutes: 85,
  links: {
    revisits: ["p20.1.3", "p20.3.3", "p20.4.2"],
    foreshadows: ["p20.5.2", "p20.5.3", "p20.5.5"],
  },

  puzzle: (
    <>
      <p>
        You get what you have wanted for years: the job, the house, the praise. Soon the pleasure fades, a new want appears,
        and you begin to worry about losing what you have. Is this just bad luck, or is there something in wanting itself that
        guarantees dissatisfaction? And if so, could it be cured?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the four truths, set beside the four tasks of a physician.</p>
      <FourTruthsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the four noble truths">
        <p>
          In his first sermon, at Sarnath, the Buddha (fifth century BCE) taught four truths. There is{" "}
          <strong>dukkha</strong>, suffering or unsatisfactoriness. It has an <strong>origin</strong>, craving (taṇhā). It has a{" "}
          <strong>cessation</strong>, nirvāṇa. And there is a <strong>path</strong> to that cessation, the noble eightfold path.
        </p>
      </Definition>

      <Example title="three kinds of dukkha">
        <p>
          Dukkha is not only pain. Later teachers distinguish the dukkha of plain pain; the dukkha of change, in which even
          pleasure is unsatisfying because it passes; and the dukkha of conditioned existence, the deep unease of being made
          of parts that arise and fall away. The claim is not that life contains no joy, but that nothing conditioned can be
          a final resting place.
        </p>
      </Example>

      <Definition title="the middle way and the eightfold path">
        <p>
          The path avoids both indulgence in pleasure and the self-torment of the ascetics the Buddha had practised with. Its
          eight factors are traditionally grouped under wisdom (right view, right intention), ethical conduct (right speech,
          action, livelihood) and meditation (right effort, mindfulness, concentration). They are cultivated together, not in
          strict sequence.
        </p>
      </Definition>

      <Remark title="practice, not speculation">
        <p>
          The Buddha refused to answer certain metaphysical questions, whether the world is eternal or what becomes of an
          awakened one after death, as not leading to the end of suffering. Someone shot with a poisoned arrow, he said, should
          not insist on learning who shot it before letting it be removed. Each truth comes with a task: dukkha is to be
          understood, craving abandoned, cessation realised, and the path developed.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cause",
      rung: "check",
      prompt: <p>According to the second noble truth, what is the origin of dukkha?</p>,
      answer: { kind: "choice", options: ["Craving (taṇhā)", "The body", "The gods", "Past lives alone"], correct: [0] },
    },
    {
      key: "dukkha",
      rung: "check",
      prompt: <p>Which best describes dukkha?</p>,
      answer: {
        kind: "choice",
        options: ["Suffering and unsatisfactoriness, including the passing of pleasures", "Physical pain only", "Sin against the gods", "The absence of all pleasure"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s medical analogy, which truth corresponds to the treatment?</p>,
      answer: { kind: "choice", options: ["The path (magga)", "Suffering (dukkha)", "Its origin (samudaya)", "Its cessation (nirodha)"], correct: [0] },
    },
    {
      key: "group",
      rung: "apply",
      prompt: <p>Right mindfulness belongs to which group of the eightfold path?</p>,
      answer: { kind: "choice", options: ["Meditation", "Wisdom", "Ethical conduct", "None"], correct: [0] },
    },
    {
      key: "arrow",
      rung: "apply",
      prompt: <p>What is the point of the parable of the poisoned arrow?</p>,
      answer: {
        kind: "choice",
        options: ["Speculative questions should not delay the practical work of ending suffering", "Violence is always wrong", "Physicians cannot be trusted", "Suffering is caused by others"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is craving really the cause of suffering? Argue briefly, using an example.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how craving can produce suffering, such as through clinging to what changes.",
          "Considers an objection, such as suffering from illness or injustice that seems not to come from craving.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If craving is the problem, is the wish to reach nirvāṇa itself a craving? How might a Buddhist answer?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recognises the apparent paradox.",
          "Considers a reply, such as distinguishing wholesome aspiration from craving, or the wish being dropped as the path matures.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Craving clings, and the deepest clinging is to a self: the sense that there is a me who owns my experiences and must
        be protected. The Buddha taught that no such permanent self can be found, in the body or in the mind.
      </p>
      <p>
        Next, no-self (anattā): the five aggregates, the argument that none of them is a self, the chariot of Nāgasena, and
        how there can be responsibility and rebirth without a self that persists.
      </p>
    </>
  ),
};
