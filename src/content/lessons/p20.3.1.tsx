import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TattvaViz } from "@/components/viz/TattvaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.3.1",
  minutes: 85,
  links: {
    revisits: ["p20.2.4", "p20.1.2", "p1.2.1"],
    foreshadows: ["p20.3.2", "p20.3.3", "p20.4.2"],
  },

  puzzle: (
    <>
      <p>
        Descartes put thought on one side and matter on the other. Sāṃkhya also divides reality in two, but draws the line
        somewhere startling: thinking, deciding and the sense of &ldquo;I&rdquo; all fall on the side of matter. What, then,
        is left on the other side?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Unfold prakṛti level by level, and count the principles.</p>
      <TattvaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="two principles">
        <p>
          Sāṃkhya, systematised in Īśvarakṛṣṇa&rsquo;s <em>Sāṃkhya Kārikā</em> (around 350 CE), recognises{" "}
          <strong>puruṣa</strong>, pure consciousness, and <strong>prakṛti</strong>, nature or matter. There are many
          puruṣas, one for each being. Puruṣa is inactive, unchanging and merely witnesses. Prakṛti is active, changing and
          unconscious, and evolves into the whole world, including the mind.
        </p>
      </Definition>

      <Example title="the twenty-five principles">
        <p>
          From prakṛti come <strong>buddhi</strong> (intellect), then <strong>ahaṃkāra</strong> (the I-maker), then mind, the
          five sense capacities, the five action capacities and the five subtle elements, and from these the five gross
          elements. With prakṛti and puruṣa, that makes twenty-five tattvas. Experience happens when the light of puruṣa is
          reflected in the material buddhi, which then seems conscious.
        </p>
      </Example>

      <Definition title="satkāryavāda">
        <p>
          Sāṃkhya holds that the <strong>effect pre-exists in its cause</strong>. Its arguments: what does not exist cannot be
          produced; a specific effect needs a specific material, oil from sesame and not from sand; and a cause can produce
          only what it is capable of. Creation is manifestation of what was latent, and dissolution its return to the
          unmanifest.
        </p>
      </Definition>

      <Remark title="liberation and an analogy">
        <p>
          Bondage is puruṣa&rsquo;s confusion of itself with prakṛti&rsquo;s activity. Liberation (kaivalya, isolation) is
          discriminating knowledge that &ldquo;I am not this&rdquo;. The Kārikā compares their union to a lame man who can see
          riding on the shoulders of a blind man who can walk. The view faces its own mind-body problem: how can an inactive
          consciousness be confused with anything, or be freed?
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "purusa",
      rung: "check",
      prompt: <p>What is puruṣa?</p>,
      answer: { kind: "choice", options: ["Pure, inactive consciousness, the witness", "Primal matter", "The intellect", "A god who creates the world"], correct: [0] },
    },
    {
      key: "buddhi",
      rung: "check",
      prompt: <p>On which side does Sāṃkhya place the intellect (buddhi)?</p>,
      answer: { kind: "choice", options: ["Prakṛti, matter", "Puruṣa, consciousness", "Neither", "Both"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many principles are there in all, counting puruṣa?</p>,
      answer: { kind: "numeric", value: 25 },
    },
    {
      key: "sat",
      rung: "apply",
      prompt: <p>What does satkāryavāda claim?</p>,
      answer: { kind: "choice", options: ["The effect pre-exists in its cause", "Effects are wholly new", "Nothing causes anything", "Causes come after effects"], correct: [0] },
    },
    {
      key: "lame",
      rung: "apply",
      prompt: <p>In the analogy of the lame and the blind, who is the lame man who can see?</p>,
      answer: { kind: "choice", options: ["Puruṣa", "Prakṛti", "Buddhi", "Ahaṃkāra"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it plausible that thinking is material but consciousness is not? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Sāṃkhya’s division, with thinking on the side of prakṛti.",
          "Considers a point for or against, such as the hard problem of consciousness or the interaction problem.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If puruṣa never acts or changes, how can it be bound or freed? Can Sāṃkhya answer?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the difficulty clearly.",
          "Considers an answer, such as that bondage and release belong to prakṛti and only appear to belong to puruṣa.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Prakṛti is not a uniform stuff. It is made of three strands, the guṇas, whose balance is disturbed at creation and
        whose shifting proportions explain the variety of the world and of human character.
      </p>
      <p>
        Next, the guṇas: sattva, rajas and tamas, how they combine in everything from food to temperament, and how the{" "}
        <em>Bhagavad Gītā</em> uses them to classify actions, faith and knowledge.
      </p>
    </>
  ),
};
