import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CartesianCircleViz } from "@/components/viz/CartesianCircleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.1.3",
  minutes: 85,
  links: {
    revisits: ["p7.1.2", "p6.3.1", "p6.4.2"],
    foreshadows: ["p7.1.4", "p7.2.5", "p10.2.2"],
  },

  puzzle: (
    <>
      <p>
        After the cogito, Descartes is certain that he exists as a thinking thing, and of nothing else. To get any further
        he needs a guarantee that his best reasoning is not the work of a deceiver. He notices that what makes the cogito
        certain is simply that he perceives it very clearly and distinctly. Can that be trusted as a general rule? Only, he
        argues, if he can prove from inside his own mind that a perfect God exists, who would not deceive him. Can that be
        done without assuming the very rule it is meant to secure?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The worry, raised in Descartes&rsquo;s lifetime, is that the argument goes in a circle. Look at the two claims and
        the arrows between them, then at each reply.
      </p>
      <CartesianCircleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="clear and distinct perception">
        <p>
          In the Principles, Descartes calls a perception <strong>clear</strong> when it is present and open to an attentive
          mind, as objects are clear to the eye when they stand before it in good light. It is <strong>distinct</strong>{" "}
          when it is also so sharply separated from everything else that it contains only what is clear. A pain can be clear
          without being distinct, when we confuse it with a judgement about the injured body. The{" "}
          <strong>truth rule</strong> says that whatever I clearly and distinctly perceive is true.
        </p>
      </Definition>

      <Example title="the trademark argument">
        <p>
          The Third Meditation argues from the idea of God. Ideas, as pictures of things, have what Descartes calls
          objective reality, and their cause must contain at least as much reality as the idea represents, just as the cause
          of a detailed drawing of a machine must contain the skill to design it. I have an idea of an infinite, perfect
          being. I am finite and imperfect, since I doubt. So the idea can only have been caused by an infinite, perfect
          being, who placed it in me like a craftsman&rsquo;s mark stamped on their work. Critics asked whether we really
          have a positive idea of the infinite, or only the negation of the finite, and whether the causal principle is as
          evident as Descartes claims.
        </p>
      </Example>

      <Example title="the ontological argument">
        <p>
          The Fifth Meditation gives a second proof, close to Anselm&rsquo;s. Existence belongs to the essence of a supremely
          perfect being, as having angles equal to two right angles belongs to the essence of a triangle. A God without
          existence is no more conceivable than a mountain without a valley. Gassendi replied that existence is not a
          perfection or a property at all, but the condition of having any; Kant later pressed the same point.
        </p>
      </Example>

      <Definition title="God and error">
        <p>
          If God is no deceiver, why do I ever go wrong? The Fourth Meditation answers that my understanding is finite but my
          will, my power to affirm or deny, is unlimited. Error comes when I let the will run ahead of the understanding and
          affirm what I do not clearly perceive. The cure is to withhold judgement until perception is clear, the method of
          doubt made into a habit.
        </p>
      </Definition>

      <Remark title="the circle">
        <p>
          Antoine Arnauld put the difficulty in the Fourth Objections: the truth rule needs God, and the proof of God needs
          the truth rule. Descartes&rsquo;s reply was that God is needed only to guarantee conclusions we remember having
          proved, not perceptions we are attending to now. Whether this saves the argument, and whether a foundation of
          knowledge can ever be secured without some circle, remain live questions for epistemology.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "distinct",
      rung: "check",
      prompt: <p>When, according to Descartes, is a perception distinct?</p>,
      answer: {
        kind: "choice",
        options: [
          "When it is vivid and strong.",
          "When it is clear and also so sharply separated from everything else that it contains only what is clear.",
          "When many people share it.",
          "When it comes from the senses.",
        ],
        correct: [1],
      },
    },
    {
      key: "cause",
      rung: "check",
      prompt: <p>Which principle does the trademark argument rely on?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whatever is conceivable is possible.",
          "A cause must contain at least as much reality as its effect, including the reality an idea represents.",
          "Everything that begins to exist has a cause in time.",
          "The simplest explanation is best.",
        ],
        correct: [1],
      },
    },
    {
      key: "error",
      rung: "apply",
      prompt: <p>How does the Fourth Meditation explain human error, if God is no deceiver?</p>,
      answer: {
        kind: "choice",
        options: [
          "Error is an illusion.",
          "The will, which is unlimited, affirms things the finite understanding does not clearly perceive.",
          "God deceives us for our own good.",
          "The senses are always wrong.",
        ],
        correct: [1],
      },
    },
    {
      key: "mountain",
      rung: "apply",
      prompt: <p>In the Fifth Meditation, what is a God without existence compared to?</p>,
      answer: {
        kind: "choice",
        options: ["A ship without a sailor", "A mountain without a valley", "A wax without shape", "A dream without a dreamer"],
        correct: [1],
      },
    },
    {
      key: "arnauld",
      rung: "apply",
      prompt: <p>What exactly is circular, according to Arnauld?</p>,
      answer: {
        kind: "choice",
        options: [
          "Descartes proves he exists by assuming he exists.",
          "The truth of clear and distinct perceptions is secured by God, and God's existence is proved by trusting clear and distinct perceptions.",
          "God is defined as perfect and perfection as God.",
          "The cogito assumes the method of doubt.",
        ],
        correct: [1],
      },
    },
    {
      key: "trademark",
      rung: "prove",
      prompt: <p>Set out the trademark argument in a few steps, and give one objection to it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the main steps: I have an idea of an infinite, perfect being; the cause of an idea must have as much reality as the idea represents; I cannot be that cause; so God exists.",
          "Gives an objection, such as doubting that we have a positive idea of the infinite, or doubting the causal principle.",
        ],
      },
    },
    {
      key: "escape",
      rung: "stretch",
      prompt: <p>Does Descartes escape the Cartesian circle? Assess one reply on his behalf.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the circle: the truth rule depends on God and the proof of God depends on the truth rule.",
          "Describes a reply, such as the memory reply or the distinction between certainty and lasting knowledge, and says what it gives up or assumes.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what clear and distinct perception is, Descartes's two proofs of God, how he explains error, and the Cartesian circle with one reply.",

  glimpse: (
    <p>
      With God as guarantor, the next lesson returns to the body and argues that mind and body are distinct things. Leibniz
      will later rest his own philosophy on the principle of sufficient reason, and epistemology asks whether any foundation
      can avoid a circle.
    </p>
  ),
};
