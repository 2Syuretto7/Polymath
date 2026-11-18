import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { VedantaViz } from "@/components/viz/VedantaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.4.3",
  minutes: 90,
  links: {
    revisits: ["p20.4.2", "p20.1.2", "p20.1.3"],
    foreshadows: ["p20.4.4", "p20.5.2", "p20.7.2"],
  },

  puzzle: (
    <>
      <p>
        A devotee prays to God with love and gratitude. If Advaita is right, the devotee and God are ultimately one, and the
        love between them belongs to the world of appearance. Can devotion survive that thought? Must one choose between
        oneness with God and a relation to God?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare how three Vedāntas picture brahman, selves and the world. Rāmānuja&rsquo;s view is in the middle.</p>
      <VedantaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="qualified non-dualism">
        <p>
          <strong>Viśiṣṭādvaita</strong> means the non-duality of the qualified. For Rāmānuja (traditionally 1017 to 1137),
          brahman is one, but it is not featureless: it is a personal God, Viṣṇu-Nārāyaṇa, possessed of infinite good
          qualities, and it is qualified by real selves (cit) and real matter (acit). Nothing exists apart from brahman, yet
          within that one reality there is real difference.
        </p>
      </Definition>

      <Example title="the body and the soul">
        <p>
          Rāmānuja&rsquo;s central analogy: selves and the world are the <strong>body</strong> of brahman, and brahman is their
          soul and inner controller (antaryāmin). A body is whatever a self supports, controls and uses for its purposes, and
          it cannot exist apart from that self. So the world depends wholly on brahman and is inseparable from it, but is not
          identical with it. When the Upaniṣad says &ldquo;You are that&rdquo;, &ldquo;you&rdquo; means brahman as embodied in
          you: the sentence states a real unity of different things, as &ldquo;this is that Devadatta&rdquo; does.
        </p>
      </Example>

      <Definition title="the objections to Advaita">
        <p>
          In his commentary on the Brahma Sūtras, Rāmānuja presses seven objections (the &ldquo;seven untenables&rdquo;) to
          Advaita&rsquo;s ignorance, avidyā. Among them: where does it reside, since it cannot be in brahman, which is pure
          knowledge, nor in individual selves, which ignorance is supposed to produce? What is its nature, if it is neither
          real nor unreal? And how could knowledge of an identity remove it, if all knowledge, he argues, is of something
          qualified by difference?
        </p>
      </Definition>

      <Remark title="devotion and grace">
        <p>
          Liberation, for Rāmānuja, comes through bhakti, loving meditation on God, culminating in prapatti, self-surrender,
          and God&rsquo;s grace. The liberated self does not dissolve into brahman. It shares brahman&rsquo;s bliss and
          knowledge while remaining a self, forever in relation to God. His Śrī Vaiṣṇava tradition joined Vedānta to the Tamil
          devotional poetry of the Āḻvārs.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "name",
      rung: "check",
      prompt: <p>What does Viśiṣṭādvaita mean?</p>,
      answer: { kind: "choice", options: ["Non-duality of the qualified", "Strict non-duality", "Dualism", "Non-violence"], correct: [0] },
    },
    {
      key: "body",
      rung: "check",
      prompt: <p>What, for Rāmānuja, is the relation of the world to brahman?</p>,
      answer: {
        kind: "choice",
        options: ["The world is brahman’s body: real, dependent and inseparable, but distinct", "The world is an illusion on brahman", "The world is wholly independent of brahman", "The world is identical with brahman"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which school draws selves and the world as dashed, meaning appearances?</p>,
      answer: { kind: "choice", options: ["Advaita", "Viśiṣṭādvaita", "Dvaita", "All three"], correct: [0] },
    },
    {
      key: "tattvam",
      rung: "apply",
      prompt: <p>How does Rāmānuja read &ldquo;You are that&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: ["As a unity of different aspects: brahman as embodied in you is brahman", "As strict identity of featureless consciousness", "As a metaphor with no literal content", "As a command to perform rituals"],
        correct: [0],
      },
    },
    {
      key: "seat",
      rung: "apply",
      prompt: <p>Which of these is one of Rāmānuja&rsquo;s objections to Advaita&rsquo;s ignorance?</p>,
      answer: {
        kind: "choice",
        options: ["It has no possible seat: not brahman, which is knowledge, nor selves, which it is meant to produce", "It is too obvious to discuss", "It contradicts the Vedas’ rituals", "It is the same as karma"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the body-soul analogy a good way to think about God and the world? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what the analogy captures, such as dependence, control and inseparability without identity.",
          "Notes a strain, such as whether God then suffers what the world suffers, or how selves inside the body stay free.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does a liberated self that remains distinct from God have anything that one merged with God lacks? Or the reverse?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers relational goods, such as love and enjoyment, that need two parties.",
          "Considers what Advaita would say: that distinctness is itself the limitation.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Rāmānuja kept difference within a single reality. Madhva, a century and a half later, went further and denied the
        unity: God, selves and matter are eternally distinct, and the difference between them is as real as anything is.
      </p>
      <p>
        Next, Madhva&rsquo;s Dvaita: the five differences, his defence of perception against Advaita, a hierarchy of selves,
        and the startling doctrine that some selves are never liberated.
      </p>
    </>
  ),
};
