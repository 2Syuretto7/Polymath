import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Nothing is so without a sufficient reason why it is so rather than otherwise.",
    kind: "premise",
    note: "The principle of sufficient reason. Leibniz calls it, with the principle of contradiction, one of the two great principles of reasoning.",
    objection: "Is the principle itself known? It is not a logical truth, and Hume will argue that we cannot even show that every event has a cause.",
  },
  {
    claim: "Each thing in the world is contingent: it could have failed to exist, and its existence is not explained by its own nature.",
    kind: "premise",
    note: "A book exists because it was copied from an earlier book, and that from another, but no copy explains itself.",
  },
  {
    claim: "Even an infinite series of contingent things, each explained by an earlier one, does not explain why the whole series exists rather than none.",
    kind: "inference",
    note: "Leibniz's example: however far back the copies of the geometry book go, we never learn why there is such a book at all.",
    objection: "Hume replied that if each member of the series is explained, the whole is explained: the whole is nothing over and above its parts.",
  },
  {
    claim: "So the sufficient reason for the series must lie outside it, in a being whose existence is necessary and carries its own reason.",
    kind: "inference",
    note: "Only a necessary being can end the demand for reasons, because its existence follows from its essence.",
  },
  {
    claim: "So there exists a necessary being, the ultimate reason of things, which we call God.",
    kind: "conclusion",
    note: "This is Leibniz's cosmological argument. It differs from Aquinas's ways by not denying an infinite past.",
    objection: "If the necessary being's choice of this world is itself necessary, then everything is necessary, as Spinoza held. If it is not, what is the reason for it?",
  },
];

export const lesson: LessonContent = {
  id: "p7.2.5",
  minutes: 80,
  links: {
    revisits: ["p7.2.4", "p6.4.2", "p7.2.1"],
    foreshadows: ["p7.5.2", "p7.6.2", "p11.4.1"],
  },

  puzzle: (
    <>
      <p>
        Why is there something rather than nothing? Leibniz thought this was the first question we have a right to ask, and
        that it has an answer. Behind it lies a principle he used everywhere, in physics, in theology and in his dispute with
        Newton: nothing happens without a reason. It sounds like common sense. Followed strictly, it seems to prove the
        existence of God, rule out empty space, and perhaps make everything necessary. Should we accept it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Leibniz&rsquo;s argument from the principle to a necessary being, and challenge the steps you doubt.</p>
      <ArgumentStepViz steps={STEPS} title="From sufficient reason to a necessary being" />
    </>
  ),

  theory: (
    <>
      <Definition title="two great principles">
        <p>
          The <strong>principle of contradiction</strong> governs truths of reason, which are necessary: their opposite is
          impossible, and analysis reduces them to identities, as in mathematics. The{" "}
          <strong>principle of sufficient reason</strong> governs truths of fact, which are contingent: that Caesar crossed the
          Rubicon. Their opposite is possible, but there is still a reason why they are so rather than otherwise, which may
          require an infinite analysis only God can complete.
        </p>
      </Definition>

      <Example title="the principle at work">
        <p>
          Archimedes assumed that a balance with equal weights at equal distances stays level, because there is no reason for
          it to tip either way. Leibniz argued against Newton&rsquo;s absolute space: if space were a real container, God
          would have had no reason to place the world here rather than three feet to the left, since all places are alike. So
          space is only the order of coexisting things. The <strong>identity of indiscernibles</strong> follows too: God would
          have no reason to create two exactly similar things in different places.
        </p>
      </Example>

      <Definition title="contingency and analysis">
        <p>
          On Leibniz&rsquo;s view of truth, the predicate of a true proposition is contained in the concept of its subject.
          The complete concept of Caesar contains crossing the Rubicon. Does that make it necessary? Leibniz says no: for
          contingent truths the containment can be shown only by an infinite analysis, like an irrational ratio that never
          comes out exactly. Necessary truths reach an identity in finitely many steps.
        </p>
      </Definition>

      <Remark title="strength and weakness">
        <p>
          The principle drives explanation: science looks for reasons and does not stop at brute facts. But in its strong form
          it is hard to keep from collapsing into necessitarianism. If the reason for this world is God&rsquo;s choice, and the
          reason for the choice is God&rsquo;s nature, the world seems to follow necessarily. Hume, Kant and much of modern
          philosophy rejected the principle in full generality; some recent philosophers defend it again. Quantum mechanics
          suggests to many that some events have no sufficient reason at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "psr",
      rung: "check",
      prompt: <p>What does the principle of sufficient reason say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every contradiction is false.",
          "Nothing is so without a reason why it is so rather than otherwise.",
          "Every belief needs evidence.",
          "The simplest explanation is true.",
        ],
        correct: [1],
      },
    },
    {
      key: "two",
      rung: "check",
      prompt: <p>Which kind of truth does the principle of contradiction govern, for Leibniz?</p>,
      answer: { kind: "choice", options: ["Truths of fact", "Truths of reason, which are necessary", "Truths of faith", "Truths about the future"], correct: [1] },
    },
    {
      key: "space",
      rung: "apply",
      prompt: <p>How did Leibniz use the principle against absolute space?</p>,
      answer: {
        kind: "choice",
        options: [
          "He showed that space is infinite.",
          "If all places are alike, God would have had no reason to put the world here rather than elsewhere, so absolute space is not real.",
          "He showed that space is made of monads.",
          "He measured space with a balance.",
        ],
        correct: [1],
      },
    },
    {
      key: "books",
      rung: "apply",
      prompt: <p>What is the point of Leibniz&rsquo;s example of the geometry book copied from earlier copies?</p>,
      answer: {
        kind: "choice",
        options: [
          "That books are contingent.",
          "That even an infinite series of explanations within the world does not explain why the series exists at all.",
          "That geometry is necessary.",
          "That copying introduces errors.",
        ],
        correct: [1],
      },
    },
    {
      key: "hume",
      rung: "apply",
      prompt: <p>What was Hume&rsquo;s reply to the argument that the whole series needs a reason outside it?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the series is finite.",
          "That once each member is explained, the whole is explained, since the whole is nothing over and above its members.",
          "That God is the series.",
          "That nothing needs explaining.",
        ],
        correct: [1],
      },
    },
    {
      key: "cosmo",
      rung: "prove",
      prompt: <p>Set out Leibniz&rsquo;s cosmological argument and say which premise is weakest.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the main steps: the principle of sufficient reason, the contingency of each thing and of the series, a reason outside the series, a necessary being.",
          "Identifies a weak premise with a reason, such as the principle itself, or Hume's reply about the whole and its parts.",
        ],
      },
    },
    {
      key: "necessity",
      rung: "stretch",
      prompt: <p>Does the principle of sufficient reason lead to the conclusion that everything is necessary? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the worry: if every fact has a sufficient reason, and the ultimate reason is a necessary being, the world seems to follow necessarily.",
          "Considers Leibniz's answer, such as infinite analysis or reasons that incline without necessitating, and judges it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Leibniz's two great principles, his cosmological argument from sufficient reason, how he used the principle against absolute space, and the worry that it makes everything necessary.",

  glimpse: (
    <p>
      The next chapter turns to John Locke and the empiricist claim that all ideas come from experience. Hume will later
      question whether we can know that every event has a cause, and Leibniz&rsquo;s quarrel over space with Newton&rsquo;s
      follower Clarke closes the course.
    </p>
  ),
};
