import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { IntegralLadderViz } from "@/components/viz/IntegralLadderViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.7.3",
  minutes: 80,
  links: {
    revisits: ["p20.4.2", "p20.7.2", "p20.3.1"],
    foreshadows: ["p20.7.6", "p20.7.4", "p20.7.5"],
  },

  puzzle: (
    <>
      <p>
        Life arose from matter, and minds arose from living things. Is mind the last step? Darwin&rsquo;s theory sets no end
        point. Suppose evolution has a direction, and that what emerges was hidden in what came before. What might come after
        mind?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Climb the levels of consciousness, and read what each adds.</p>
      <IntegralLadderViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Aurobindo">
        <p>
          Aurobindo Ghose (1872&ndash;1950) was educated at Cambridge and became a leader of the radical wing of Indian
          nationalism. Imprisoned in 1908 in the Alipore bomb case, he had experiences in jail he described as realisations of
          the divine in all things. From 1910 he lived in Pondicherry, where he wrote <em>The Life Divine</em>,{" "}
          <em>The Synthesis of Yoga</em> and the epic poem <em>Savitri</em>.
        </p>
      </Definition>

      <Example title="involution and evolution">
        <p>
          Brahman, as being, consciousness and bliss (saccidānanda), descends by stages into matter, hiding itself: this is{" "}
          <strong>involution</strong>. Because consciousness is involved in matter, it can emerge: first as life, then as mind.
          This is <strong>evolution</strong>, and it is not finished. Above mind lies the <strong>supermind</strong>, a
          truth-consciousness that holds unity and multiplicity together.
        </p>
      </Example>

      <Definition title="against two denials">
        <p>
          Aurobindo rejected the &lsquo;materialist denial&rsquo;, that only matter is real, and the &lsquo;refusal of the
          ascetic&rsquo;, that the world is illusion to be escaped. He read Śaṅkara&rsquo;s māyā as the second. His{" "}
          <strong>integral yoga</strong> aims not at release from the world but at its transformation: the descent of the
          supermind into body, life and mind.
        </p>
      </Definition>

      <Remark title="assessment">
        <p>
          Aurobindo is often compared with Bergson and Teilhard de Chardin, who also saw evolution as spiritual. Critics ask
          what evidence could show that matter is involved spirit, and whether the supermind is a hypothesis or a promise.
          Defenders reply that he offered a metaphysics, tested by yoga rather than by laboratory, and one that takes the world
          more seriously than Advaita does.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "inv",
      rung: "check",
      prompt: <p>What does Aurobindo mean by involution?</p>,
      answer: { kind: "choice", options: ["The descent of spirit into matter, where it is hidden", "The emergence of life from matter", "The return of the soul to brahman", "The decline of civilisations"], correct: [0] },
    },
    {
      key: "two",
      rung: "check",
      prompt: <p>Which two views did Aurobindo call the materialist denial and the refusal of the ascetic?</p>,
      answer: { kind: "choice", options: ["That only matter is real, and that the world is an illusion to escape", "That God exists, and that the soul exists", "That evolution is true, and that karma is true", "That the Vedas are authored, and that they are eternal"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many levels lie strictly between Mind and Supermind?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "goal",
      rung: "apply",
      prompt: <p>What is the aim of Aurobindo&rsquo;s integral yoga?</p>,
      answer: { kind: "choice", options: ["To transform life through the descent of the supermind", "To escape the world of appearance", "To perform the Vedic sacrifices correctly", "To prove that only matter exists"], correct: [0] },
    },
    {
      key: "why",
      rung: "apply",
      prompt: <p>Why, for Aurobindo, can consciousness emerge from matter at all?</p>,
      answer: { kind: "choice", options: ["Because it was already involved in matter", "Because matter produces it by chance", "Because God adds it from outside", "Because it is an illusion"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Aurobindo&rsquo;s view, that what evolves must first have been involved, a good argument? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the principle that nothing emerges that was not already latent.",
          "Raises an objection, such as genuine emergence of new properties, or the lack of evidence for latent spirit.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Compare Aurobindo with Śaṅkara on the reality of the world. Which view better supports a life of action?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Śaṅkara’s view of the world as appearance, and Aurobindo’s that it is real and evolving.",
          "Says which supports action better, with a reason.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Aurobindo left politics for yoga. Another leader of the freedom movement made a practice of spiritual discipline the
        very means of politics, and staked a nation&rsquo;s struggle on non-violence.
      </p>
      <p>
        Next, Gandhi: satya and ahiṃsā, satyāgraha as truth-force, the Gītā read as a call to selfless action, and the
        debates over his views on caste and modernity.
      </p>
    </>
  ),
};
