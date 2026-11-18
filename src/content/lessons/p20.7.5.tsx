import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DhammaReadingViz } from "@/components/viz/DhammaReadingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.7.5",
  minutes: 85,
  links: {
    revisits: ["p20.5.1", "p20.1.3", "p20.5.2"],
    foreshadows: ["p20.7.6", "p14.5.4", "p31.3.2"],
  },

  puzzle: (
    <>
      <p>
        Suppose a religion teaches that your birth into a low station is the just result of deeds in a past life. Then the
        injustice you suffer is not injustice at all. If you reject that teaching, must you reject religion, or can you look
        for a religion that passes a moral test? And what would that test be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare a traditional reading of Buddhist teachings with Ambedkar&rsquo;s.</p>
      <DhammaReadingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Ambedkar">
        <p>
          Bhimrao Ramji Ambedkar (1891&ndash;1956), born into the Mahar community, which was treated as untouchable, studied at
          Columbia and the London School of Economics, led the struggle against caste, and chaired the committee that drafted
          India&rsquo;s constitution. In 1935 he announced that though he was born a Hindu, he would not die one.
        </p>
      </Definition>

      <Example title="a test for religion">
        <p>
          Ambedkar held that religion is necessary for social life, but must be judged. A religion worth having must accord
          with reason, make morality its core, and uphold liberty, equality and fraternity. He argued that Hinduism, as given
          in texts such as the <em>Manusmṛti</em>, sanctifies inequality by birth, and that the doctrine of karma serves to
          justify it.
        </p>
      </Example>

      <Definition title="Navayāna">
        <p>
          On 14 October 1956, at Nagpur, Ambedkar converted to Buddhism with hundreds of thousands of followers, giving
          twenty-two vows that renounced Hindu gods and caste. His <em>The Buddha and His Dhamma</em>, published after his
          death, presents a Buddhism later called <strong>Navayāna</strong>, the &lsquo;new vehicle&rsquo;: rational, ethical
          and social, with suffering understood chiefly as suffering people inflict on one another.
        </p>
      </Definition>

      <Remark title="interpretation and its critics">
        <p>
          Ambedkar doubted that the four noble truths, as usually stated, were the Buddha&rsquo;s own, and rejected a
          transmigrating soul. Traditional Buddhists objected that he dropped central doctrines; defenders reply that he did
          what every school did, reading the Buddha for its own time. The movement he began is one of the largest conversions
          of the twentieth century.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "test",
      rung: "check",
      prompt: <p>Which standards did Ambedkar think a religion must meet?</p>,
      answer: { kind: "choice", options: ["Reason, morality, and liberty, equality and fraternity", "Antiquity and authority", "Miracles and prophecy", "Ritual correctness"], correct: [0] },
    },
    {
      key: "convert",
      rung: "check",
      prompt: <p>Where and when did Ambedkar convert to Buddhism?</p>,
      answer: { kind: "choice", options: ["Nagpur, 1956", "Bombay, 1935", "Delhi, 1947", "Sarnath, 1950"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, why does Ambedkar say the Buddha left home?</p>,
      answer: { kind: "choice", options: ["He refused to take part in a war over river water", "He saw an old man, a sick man and a corpse", "He was banished for heresy", "He wished to study the Vedas"], correct: [0] },
    },
    {
      key: "karma",
      rung: "apply",
      prompt: <p>What did Ambedkar object to in the traditional doctrine of karma?</p>,
      answer: { kind: "choice", options: ["That it justified a person’s caste by deeds in past lives", "That it made actions have consequences", "That it was too complicated", "That it came from Buddhism"], correct: [0] },
    },
    {
      key: "dukkha",
      rung: "apply",
      prompt: <p>How did Ambedkar mainly understand suffering (dukkha)?</p>,
      answer: { kind: "choice", options: ["As social suffering, such as poverty and exploitation, that people can remove", "As the pain of rebirth only", "As an illusion", "As punishment from the gods"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Was Ambedkar entitled to reinterpret Buddhism so freely? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States one of Ambedkar’s reinterpretations, such as of karma, rebirth or suffering.",
          "Weighs fidelity to tradition against the claim that every school reads the Buddha for its time.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should religions be judged by moral standards from outside them, as Ambedkar judged them? Discuss.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Ambedkar’s test of reason, morality, liberty, equality and fraternity.",
          "Considers an objection, such as that the standards themselves need a source, or that faith is not answerable to them.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Ambedkar and Gandhi argued about how India should live. A quieter contemporary in Calcutta asked how Indian
        philosophy itself could live, freely, rather than as an imitation of the West or a museum of the past.
      </p>
      <p>
        Next, K. C. Bhattacharya: &lsquo;Swaraj in ideas&rsquo;, the subject as freedom, the grades by which the self frees
        itself from objects, and alternative absolutes.
      </p>
    </>
  ),
};
