import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { WagerViz } from "@/components/viz/WagerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p23.4.1",
  minutes: 85,
  links: {
    revisits: ["p23.3.3", "p10.7.1", "p10.7.3"],
    foreshadows: ["p23.4.2", "p23.4.3", "p23.5.1"],
  },

  puzzle: (
    <>
      <p>
        Suppose reason cannot settle whether God exists. You must still live one way or the other. If you believe and are
        wrong, you lose a little; if you believe and are right, you gain everything. Is that a good reason to believe, or a
        trick that would make you believe anything?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Set the chance that God exists, the reward and the cost of a believing life, and compare the expected values. Then
        add a rival god.
      </p>
      <WagerViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the wager">
        <p>
          Blaise Pascal, in the <em>Pensées</em>: &lsquo;Let us weigh the gain and the loss in wagering that God is. If you
          gain, you gain all; if you lose, you lose nothing. Wager, then, without hesitation that he is.&rsquo; Since infinite
          happiness is at stake, any non-zero chance makes believing the better bet. Pascal did not offer this as a proof that
          God exists, but as a reason to choose belief when proofs fail. It is an early piece of decision theory.
        </p>
      </Definition>

      <Example title="from argument to belief">
        <p>
          Belief is not directly under the control of the will: you cannot believe at will that it is raining. Pascal knew
          this, and advised acting as believers do, taking holy water and having Masses said, so that belief would follow.
          Critics ask whether a belief cultivated for its payoff is the kind that a God worth the name would reward.
        </p>
      </Example>

      <Remark title="the many gods objection">
        <p>
          Pascal assumed two options, the Christian God or none. But one can imagine a god who rewards only Muslims, or only
          atheists who followed the evidence. With many possible gods, each offering infinite reward and penalty, every option
          faces an infinite gain and an infinite loss, and expected value gives no answer. Defenders reply that not all gods
          are equally probable, and that some hypotheses, like a god who rewards unbelief, are too contrived to count.
        </p>
      </Remark>

      <Remark title="infinity and the decision rule">
        <p>
          Alan Hájek pointed out that with infinite utilities, a mixed strategy, such as believing only if a coin lands heads,
          also has infinite expected value, so the wager cannot single out believing. Some reformulate it with large finite
          rewards, which avoids the paradoxes but loses Pascal&rsquo;s guarantee: for a small enough probability, the cost
          wins. Others question whether it is ever rational to act on tiny probabilities of vast payoffs, which is
          sometimes called Pascal&rsquo;s mugging.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pt",
      rung: "check",
      prompt: <p>What is the wager meant to show?</p>,
      answer: { kind: "choice", options: ["That it is rational to choose to believe in God, even without proof", "That God exists", "That belief is irrational", "That God rewards gamblers"], correct: [0] },
    },
    {
      key: "will",
      rung: "check",
      prompt: <p>What did Pascal advise someone convinced by the wager who still could not believe?</p>,
      answer: { kind: "choice", options: ["Act as believers do, and belief will follow", "Pretend to believe", "Study more proofs", "Give up"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the reward to 100, the chance to 0.1 and the cost to 10, with no rival god. What is the expected value of believing?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "rival",
      rung: "apply",
      prompt: <p>In the visualisation, with an infinite reward, what happens when you add the rival god?</p>,
      answer: { kind: "choice", options: ["Both options get an infinite gain and an infinite loss, so expected value gives no verdict", "Believing still wins", "Not believing wins", "Both have expected value zero"], correct: [0] },
    },
    {
      key: "mixed",
      rung: "apply",
      prompt: <p>What is Hájek&rsquo;s mixed strategy objection?</p>,
      answer: { kind: "choice", options: ["Believing with any non-zero probability also has infinite expected value, so the wager cannot favour believing outright", "Pascal mixed up two gods", "Belief comes in degrees", "The cost is infinite"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the many gods objection defeat Pascal&rsquo;s wager? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the objection: rival gods with infinite stakes make expected value indeterminate.",
          "Considers a reply, such as that some gods are more probable than others.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Would a God worth worshipping reward belief adopted because it was a good bet?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers whether motive matters to the value of belief or faith.",
          "Considers Pascal’s reply that the bet starts a process that ends in sincere belief.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Pascal accepted that belief in God could not be proved, and argued it was still rational to choose it. A different
        response denies that belief in God needs proof or evidence at all, any more than belief in other minds does.
      </p>
      <p>Next, reformed epistemology: Plantinga&rsquo;s claim that belief in God can be properly basic.</p>
    </>
  ),
};
