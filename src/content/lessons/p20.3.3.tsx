import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EightLimbsViz } from "@/components/viz/EightLimbsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.3.3",
  minutes: 80,
  links: {
    revisits: ["p20.3.2", "p20.3.1", "p1.2.1"],
    foreshadows: ["p20.5.4", "p20.5.6", "p20.7.3"],
  },

  puzzle: (
    <>
      <p>
        Try to keep your attention on your breath for one minute. Most people find thoughts arriving uninvited within
        seconds. If you cannot direct your own mind for a minute, in what sense is it yours? Patañjali&rsquo;s Yoga begins
        here.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the eight limbs, from conduct to absorption.</p>
      <EightLimbsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="yoga as stilling the mind">
        <p>
          The <em>Yoga Sūtras</em>, attributed to Patañjali and compiled around the early centuries CE, open with a definition:
          &ldquo;Yoga is the cessation of the fluctuations (vṛtti) of the mind (citta)&rdquo; (1.2). &ldquo;Then the seer
          abides in its own nature&rdquo; (1.3). Otherwise, the seer seems to take the form of the fluctuations.
        </p>
      </Definition>

      <Example title="the fluctuations and the means">
        <p>
          Patañjali lists five kinds of vṛtti: valid cognition, error, conceptualisation, sleep and memory. They are stilled by{" "}
          <strong>practice</strong> (abhyāsa), sustained effort over a long time, and <strong>dispassion</strong> (vairāgya),
          freedom from craving. Obstacles include illness, doubt, sloth and distraction; impressions (saṃskāra) left by past
          experience keep generating new fluctuations.
        </p>
      </Example>

      <Definition title="the eight limbs">
        <p>
          The second book sets out the eight limbs (aṣṭāṅga): restraints, observances, posture, breath control, withdrawal of the
          senses, concentration, meditation and absorption. The last three, applied together to an object, are{" "}
          <strong>saṃyama</strong>. Samādhi has stages, from absorption with an object to objectless absorption, which leads
          to kaivalya, the isolation of puruṣa.
        </p>
      </Definition>

      <Remark title="Yoga and Sāṃkhya">
        <p>
          Yoga adopts Sāṃkhya&rsquo;s metaphysics of puruṣa and prakṛti, but adds <strong>Īśvara</strong>, a special puruṣa
          untouched by affliction and karma, as an object of devotion and a teacher. Yoga is less a theory than a method: it
          shows how the discriminating knowledge Sāṃkhya prescribes might be reached. Modern postural yoga draws only lightly
          on the sūtras, which give posture a single verse.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How does Patañjali define yoga?</p>,
      answer: { kind: "choice", options: ["The cessation of the fluctuations of the mind", "A series of postures", "Union with God through ritual", "Breathing exercises"], correct: [0] },
    },
    {
      key: "means",
      rung: "check",
      prompt: <p>Which two means still the fluctuations?</p>,
      answer: { kind: "choice", options: ["Practice and dispassion", "Ritual and sacrifice", "Wealth and pleasure", "Logic and debate"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which number is the limb of withdrawal of the senses (pratyāhāra)?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "samyama",
      rung: "apply",
      prompt: <p>What is saṃyama?</p>,
      answer: { kind: "choice", options: ["Concentration, meditation and absorption together", "The five restraints", "A breathing technique", "A posture"], correct: [0] },
    },
    {
      key: "isvara",
      rung: "apply",
      prompt: <p>What does Yoga add to Sāṃkhya&rsquo;s metaphysics?</p>,
      answer: { kind: "choice", options: ["Īśvara, a special puruṣa", "A third principle of matter", "Atoms", "The Vedas as eternal"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a practice like Yoga give knowledge, or only a state of mind? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Yoga’s claim that stilling the mind reveals the seer’s true nature.",
          "Considers an objection, such as that calm is not knowledge, or a reply to it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should the ethical limbs come first, before meditation? What would be lost if they were skipped?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says why Patañjali might order them so, such as that a disturbed conscience disturbs the mind.",
          "Considers a case where meditation is practised without ethics.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Sāṃkhya and Yoga take the Vedas as authoritative but build their systems mostly from argument and practice. Mīmāṃsā is
        the school that takes the authority of the Vedas as its central topic, and to defend it develops a sophisticated
        philosophy of language.
      </p>
      <p>
        Next, Mīmāṃsā on language and authority: why the Vedas are taken to be authorless, why words are eternal, how
        injunctions differ from descriptions, and how a text should be interpreted.
      </p>
    </>
  ),
};
