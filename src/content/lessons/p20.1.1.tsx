import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { VedaLayersViz } from "@/components/viz/VedaLayersViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.1.1",
  minutes: 80,
  links: {
    revisits: ["p1.4.1", "p1.6.3", "p0.1.1"],
    foreshadows: ["p20.1.2", "p20.1.4", "p20.4.1"],
  },

  puzzle: (
    <>
      <p>
        A hymn in the oldest Indian text asks how the world began, and then ends: &ldquo;He who surveys it from the highest
        heaven, he surely knows; or perhaps he does not know.&rdquo; How does a tradition of ritual hymns come to produce
        philosophy, and doubt?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the four layers of a Veda, from hymn to inquiry.</p>
      <VedaLayersViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Vedas">
        <p>
          The <strong>Vedas</strong> (from <em>vid</em>, to know) are four collections, the Ṛg, Sāma, Yajur and Atharva
          Vedas, composed in early Sanskrit and transmitted orally with extraordinary precision for centuries before being
          written. Tradition calls them <strong>śruti</strong>, &ldquo;what was heard&rdquo;: not composed by any human or
          god but seen by ancient seers. Later works, such as the epics and law books, are <strong>smṛti</strong>,
          &ldquo;what is remembered&rdquo;, with lesser authority.
        </p>
      </Definition>

      <Example title="from ritual to reflection">
        <p>
          The hymns praise gods such as Agni, fire, and Indra, and serve the sacrifice. The Brāhmaṇas explain the sacrifice as
          a web of correspondences between ritual and cosmos. Some hymns already turn speculative: the Nāsadīya hymn (Ṛg Veda
          10.129) imagines a time before being and non-being, and the Puruṣa hymn (10.90) derives the world from the
          sacrifice of a cosmic person. In the Āraṇyakas, the ritual is meditated rather than performed.
        </p>
      </Example>

      <Definition title="the Upaniṣads">
        <p>
          The oldest Upaniṣads, the Bṛhadāraṇyaka and Chāndogya, perhaps 700 to 500 BCE, are dialogues between teachers and
          students, kings and priests, husbands and wives. Their central questions are what the self (<strong>ātman</strong>)
          is, what the ground of everything (<strong>brahman</strong>) is, and how they relate. They introduce ideas that
          shape later Indian thought: rebirth governed by action (karma), and liberation (mokṣa) through knowledge.
        </p>
      </Definition>

      <Remark title="debate as method">
        <p>
          Philosophy in the Upaniṣads is staged as argument. In the Bṛhadāraṇyaka, Yājñavalkya debates a series of
          challengers, including Gārgī Vācaknavī, who presses him on what everything is woven upon until he warns her not to
          ask too far. Maitreyī, his wife, asks whether wealth could make her immortal. This culture of public debate became
          the practice of the later schools, the darśanas, which argued with each other for two thousand years.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sruti",
      rung: "check",
      prompt: <p>What does it mean that the Vedas are śruti?</p>,
      answer: {
        kind: "choice",
        options: ["They are “heard”: taken as revealed, not authored by any person", "They were written down first", "They are remembered traditions of lesser authority", "They are law books"],
        correct: [0],
      },
    },
    {
      key: "up",
      rung: "check",
      prompt: <p>What are the central questions of the Upaniṣads?</p>,
      answer: {
        kind: "choice",
        options: ["What the self is, what ultimate reality is, and how they relate", "How to perform the sacrifice", "How to govern a kingdom", "How to count the stars"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which layers belong to the portion on knowledge (jñāna-kāṇḍa)?</p>,
      answer: { kind: "choice", options: ["Āraṇyaka and Upaniṣad", "Saṃhitā and Brāhmaṇa", "Only the Saṃhitā", "All four"], correct: [0] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many Vedas are there?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "nasadiya",
      rung: "apply",
      prompt: <p>What is striking about the end of the Nāsadīya hymn?</p>,
      answer: {
        kind: "choice",
        options: ["It doubts whether even the highest overseer knows how creation came about", "It names the exact date of creation", "It forbids questions", "It praises a king"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it right to call the Upaniṣads philosophy, rather than religion? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a philosophical feature, such as argument, debate, or questions about the self.",
          "Notes a religious feature, such as authority as revelation or the aim of liberation, or argues the distinction is unclear.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Gārgī is told not to ask too far, lest her head fall off. Are there questions philosophy should not ask?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Interprets the warning, for instance as a limit of what can be explained or a mark of the ultimate.",
          "Gives a reason for or against limits on inquiry.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The Upaniṣads ask what the self is, peeling away body, breath, mind and intellect to find what remains. Their boldest
        answer is that the self at the core of each person is identical with brahman, the ground of all that exists.
      </p>
      <p>
        Next, ātman and brahman: the great sayings such as &ldquo;You are that&rdquo; and &ldquo;I am brahman&rdquo;, the
        teaching of the five sheaths, and how Uddālaka teaches his son that the unseen essence pervades everything, like salt
        dissolved in water.
      </p>
    </>
  ),
};
