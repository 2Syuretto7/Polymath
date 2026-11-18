import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { KoshaViz } from "@/components/viz/KoshaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.1.2",
  minutes: 85,
  links: {
    revisits: ["p20.1.1", "p1.4.1", "p1.2.1"],
    foreshadows: ["p20.4.2", "p20.5.2", "p20.3.1"],
  },

  puzzle: (
    <>
      <p>
        You can see your hand, so you are not your hand. You can notice your thoughts come and go, so perhaps you are not
        your thoughts either. Keep going. Is there anything left that is you, and if so, what could it possibly be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Peel away the five sheaths of the Taittirīya Upaniṣad, one by one.</p>
      <KoshaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="ātman and brahman">
        <p>
          <strong>Ātman</strong> is the self: not the body or the personality, but what is innermost in a person, the
          subject of experience. <strong>Brahman</strong> is the ground of all that exists, that from which beings are born,
          by which they live, and into which they return. The Upaniṣads&rsquo; boldest claim is that these are one: the self
          at the core of each person is the reality at the core of everything.
        </p>
      </Definition>

      <Example title="the great sayings">
        <p>
          Later tradition gathers four <strong>mahāvākyas</strong>: &ldquo;Consciousness is brahman&rdquo; (Aitareya),
          &ldquo;I am brahman&rdquo; (Bṛhadāraṇyaka), &ldquo;You are that&rdquo; (Chāndogya), and &ldquo;This self is
          brahman&rdquo; (Māṇḍūkya). In the Chāndogya, Uddālaka Āruṇi asks his son Śvetaketu to dissolve salt in water: it
          cannot be seen, yet every sip is salty. So the subtle essence pervades everything unseen, &ldquo;and you are
          that&rdquo;.
        </p>
      </Example>

      <Definition title="the self as witness">
        <p>
          Yājñavalkya teaches that the self cannot be known as an object: &ldquo;You cannot see the seer of seeing, you cannot
          hear the hearer of hearing.&rdquo; It can be described only negatively, <em>neti neti</em>, &ldquo;not this, not
          this&rdquo;. The Māṇḍūkya analyses waking, dreaming and dreamless sleep, and points to a fourth, turīya, the pure
          awareness present through all three.
        </p>
      </Definition>

      <Remark title="how to read the identity">
        <p>
          Whether &ldquo;you are that&rdquo; means strict identity, or a part&rsquo;s relation to a whole, or a dependence
          of the self on brahman, became the great question of Vedānta. Śaṅkara read it as strict identity, with the world of
          many selves an appearance; Rāmānuja as the relation of a body to its soul; Madhva as difference with dependence. The
          disagreement is about the same few sentences.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "atman",
      rung: "check",
      prompt: <p>What is ātman?</p>,
      answer: {
        kind: "choice",
        options: ["The innermost self, the subject of experience", "The physical body", "A god of fire", "The breath alone"],
        correct: [0],
      },
    },
    {
      key: "tat",
      rung: "check",
      prompt: <p>In &ldquo;You are that&rdquo; (tat tvam asi), what does &ldquo;that&rdquo; refer to?</p>,
      answer: { kind: "choice", options: ["The subtle essence of everything, brahman", "Śvetaketu’s father", "The salt", "The water"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many sheaths are peeled away before the self remains?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "seer",
      rung: "apply",
      prompt: <p>Why can&rsquo;t the self be known as an object, according to Yājñavalkya?</p>,
      answer: {
        kind: "choice",
        options: ["It is the seer of seeing: whatever is seen is not the seer", "It is too small", "It does not exist", "It is hidden in the heart"],
        correct: [0],
      },
    },
    {
      key: "salt",
      rung: "apply",
      prompt: <p>What does the salt in water illustrate?</p>,
      answer: {
        kind: "choice",
        options: ["Something can pervade everything while remaining unseen", "Salt is brahman", "Water dissolves the self", "The self is material"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the &ldquo;not this, not this&rdquo; method show there is a self beyond body and mind? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the method: whatever is observed is set aside as not the observer.",
          "Considers an objection, such as the Buddhist reply that nothing remains, or a reply to it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If my self is identical with the ground of everything, is it still my self? What would follow for personal identity?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes the individual person from the self the Upaniṣads mean.",
          "Draws a consequence, for example for survival or for the separateness of persons.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If the self is unchanging awareness, why does it seem bound to a body, to a life of pleasure and pain, and to one
        life after another? The Upaniṣads answer with two ideas that run through almost all later Indian thought.
      </p>
      <p>
        Next, karma and mokṣa: action and its fruits, the cycle of rebirth called saṃsāra, and the release from it that every
        school treats as the highest human goal, though they disagree sharply about what it is and how it is won.
      </p>
    </>
  ),
};
