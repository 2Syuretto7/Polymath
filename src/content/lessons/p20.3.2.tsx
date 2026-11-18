import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GunaTriangleViz } from "@/components/viz/GunaTriangleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.3.2",
  minutes: 75,
  links: {
    revisits: ["p20.3.1", "p20.1.3", "p1.3.1"],
    foreshadows: ["p20.3.3", "p20.7.3", "p20.4.3"],
  },

  puzzle: (
    <>
      <p>
        Some mornings your mind is clear and calm; some afternoons you are restless and driven; some evenings you are heavy
        and dull. Is this just mood, or a clue to what the world is made of? Sāṃkhya says the same three tendencies run
        through everything material, minds included.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Adjust the proportions, or pick an example, and see which guṇa dominates.</p>
      <GunaTriangleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the three guṇas">
        <p>
          <strong>Sattva</strong> is lightness, clarity and illumination, and is felt as pleasure. <strong>Rajas</strong> is
          activity, passion and stimulation, and is felt as pain. <strong>Tamas</strong> is heaviness, inertia and obstruction,
          and is felt as dullness. The word guṇa also means &ldquo;strand&rdquo;: the guṇas are the constituents of prakṛti, not
          qualities attached to it.
        </p>
      </Definition>

      <Example title="always together">
        <p>
          The guṇas never occur alone; they dominate or recede, like the wick, oil and flame of a lamp, which differ yet work
          together to give light. In unmanifest prakṛti they are in equilibrium. Creation begins when the balance is disturbed,
          by the presence of puruṣa, and the evolutes differ in their mixtures: buddhi is predominantly sattva, the gross
          elements predominantly tamas.
        </p>
      </Example>

      <Definition title="the guṇas in the Gītā">
        <p>
          The <em>Bhagavad Gītā</em> classifies food, faith, sacrifice, knowledge, action, and even happiness by guṇa.
          Sattvic action is done from duty without attachment; rajasic action from desire for reward; tamasic action from
          delusion, without regard for consequences. The aim is to cultivate sattva and finally to go beyond all three.
        </p>
      </Definition>

      <Remark title="explanation or classification?">
        <p>
          The guṇa theory explains change as shifting proportions of three ever-present tendencies, which gives it great
          scope. Critics ask whether it explains anything, or just labels: if every outcome can be described as some mixture,
          what could count against it? Defenders reply that its role is to guide practice, as in Yoga, rather than to predict.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sattva",
      rung: "check",
      prompt: <p>Which guṇa is lightness, clarity and illumination?</p>,
      answer: { kind: "choice", options: ["Sattva", "Rajas", "Tamas", "None"], correct: [0] },
    },
    {
      key: "strand",
      rung: "check",
      prompt: <p>Why are the guṇas called strands?</p>,
      answer: {
        kind: "choice",
        options: ["They are constituents of prakṛti, twisted together like strands of a rope", "They are threads of fate", "They are nerves", "They are three gods"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what state is shown when the three guṇas are in equal proportion?</p>,
      answer: { kind: "choice", options: ["Unmanifest prakṛti, as in dissolution", "Pure sattva", "Liberation", "Anger"], correct: [0] },
    },
    {
      key: "gita",
      rung: "apply",
      prompt: <p>In the Gītā, action done from desire for reward is…</p>,
      answer: { kind: "choice", options: ["Rajasic", "Sattvic", "Tamasic", "Beyond the guṇas"], correct: [0] },
    },
    {
      key: "buddhi",
      rung: "apply",
      prompt: <p>Which guṇa predominates in buddhi?</p>,
      answer: { kind: "choice", options: ["Sattva", "Rajas", "Tamas", "None"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the guṇa theory explain the world, or only classify it? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States how the theory accounts for change as shifting proportions.",
          "Considers the objection that any outcome fits, or a reply to it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is it useful to classify your own actions by guṇa? Give an example and assess it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an example of an action classified as sattvic, rajasic or tamasic.",
          "Says what the classification reveals or hides.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Sāṃkhya says liberation comes through discriminating knowledge. Its partner school, Yoga, offers a method for reaching
        it: a disciplined practice of stilling the mind, set out in a few hundred aphorisms.
      </p>
      <p>
        Next, Patañjali&rsquo;s <em>Yoga Sūtras</em>: the definition of yoga as the cessation of the fluctuations of the
        mind, the eight limbs, the states of concentration, and the role of a supreme lord in an otherwise Sāṃkhya
        framework.
      </p>
    </>
  ),
};
