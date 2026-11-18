import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PremiseRejectViz, type Premise } from "@/components/viz/PremiseRejectViz";
import type { LessonContent } from "@/lib/types";

const PREMISES: Premise[] = [
  { text: "Yesterday God believed that you will choose tea tomorrow.", who: "Boethius and Aquinas reject this", why: "God is timeless, so God did not believe anything ‘yesterday’. God knows your choice in an eternal present, as you know what you see happening now, and present knowledge does not constrain." },
  { text: "God’s past beliefs are now fixed: nobody can now make it the case that God did not believe this.", who: "Ockham rejects this", why: "‘God believed yesterday that you will choose tea’ is a soft fact about the past: it is partly about tomorrow. Unlike hard facts, it may depend on what you will do, so you may have power over it." },
  { text: "God’s beliefs cannot be mistaken, so if God believed you will choose tea, you will choose tea.", who: "Nobody in the classical tradition rejects this", why: "Denying it would deny omniscience outright. The premise is just what infallibility means." },
  { text: "If you cannot do otherwise, you do not choose freely.", who: "Compatibilists reject this", why: "Freedom may require only that you act from your own desires, without coercion, not that you could have done otherwise. Frankfurt cases support this." },
  { text: "There is a truth now about what you will freely choose tomorrow, which God could know.", who: "Open theists reject this", why: "Hasker and others: future free choices are not yet settled, so not even God can know them. God knows everything knowable, and this is not knowable." },
];

export const lesson: LessonContent = {
  id: "p23.1.2",
  minutes: 85,
  links: {
    revisits: ["p23.1.1", "p11.7.1", "p1.3.1"],
    foreshadows: ["p23.1.3", "p23.3.1", "p23.4.2"],
  },

  puzzle: (
    <>
      <p>
        If God knew, a thousand years ago, exactly what you would do this evening, and God cannot be wrong, then tonight you
        will do it, and nothing you could do would make God wrong. Then in what sense is tonight&rsquo;s choice up to you?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Lay out the argument for theological fatalism, and see who rejects which premise.</p>
      <PremiseRejectViz
        premises={PREMISES}
        conclusion="you cannot do otherwise than choose tea, so you do not choose freely."
        intro="The argument looks valid. To keep both omniscience and freedom, at least one premise must go."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="theological fatalism">
        <p>
          The argument goes back to Augustine and Boethius; Nelson Pike gave the modern version in &lsquo;Divine omniscience
          and voluntary action&rsquo; (1965). It does not say that God&rsquo;s knowledge <em>causes</em> what you do. It says
          that the fixity of the past, together with infallible past belief, leaves you no alternative. In that it resembles
          the consequence argument against free will under determinism, with God&rsquo;s past beliefs playing the part of the
          laws.
        </p>
      </Definition>

      <Example title="Boethius and the eternal present">
        <p>
          In the <em>Consolation of Philosophy</em> (around 524), Boethius argued that God is outside time. God does not
          foresee; God sees, all at once. Seeing someone walk does not make them walk; nor does God&rsquo;s eternal knowledge
          make you choose. Critics ask whether a timeless being can know what is happening now, a question for the next
          lesson.
        </p>
      </Example>

      <Example title="Ockham and Molina">
        <p>
          William of Ockham distinguished hard facts, wholly about the past, from soft facts, which are partly about the
          future. Facts about God&rsquo;s past beliefs are soft, so their fixity is not guaranteed. Luis de Molina added{" "}
          <strong>middle knowledge</strong>: God knows what any free creature would do in any circumstances, and creates in
          light of it. This also helps explain how God can be provident without determining free choices, but it faces the
          &lsquo;grounding objection&rsquo;: what makes such conditionals true before anyone acts?
        </p>
      </Example>

      <Remark title="open theism">
        <p>
          Open theists, such as William Hasker, accept the argument and give up exhaustive foreknowledge: future free choices
          are not yet there to be known. They argue this fits the biblical picture of a God who responds and changes plans. Their
          critics reply that this God is diminished, and cannot guarantee the outcome of history.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pike",
      rung: "check",
      prompt: <p>Who gave the modern version of the argument from foreknowledge to fatalism?</p>,
      answer: { kind: "choice", options: ["Nelson Pike (1965)", "Anselm", "Hume", "Kant"], correct: [0] },
    },
    {
      key: "cause",
      rung: "check",
      prompt: <p>Does the argument claim that God&rsquo;s knowledge causes your choice?</p>,
      answer: { kind: "choice", options: ["No: it relies on the fixity of the past and infallible belief", "Yes: God’s knowledge causes everything", "Yes, but only for good choices", "It makes no claim about God"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which premise number do open theists reject?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "soft",
      rung: "apply",
      prompt: <p>On Ockham&rsquo;s view, why might God&rsquo;s past belief not be fixed?</p>,
      answer: { kind: "choice", options: ["It is a soft fact, partly about the future", "Because God changes belief", "Because the past can be changed", "Because God has no beliefs"], correct: [0] },
    },
    {
      key: "molina",
      rung: "apply",
      prompt: <p>What does Molina&rsquo;s middle knowledge consist in?</p>,
      answer: { kind: "choice", options: ["Knowledge of what free creatures would do in any circumstances", "Knowledge of necessary truths", "Knowledge of the present only", "Knowledge of God’s own will"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Which response to the foreknowledge argument is most promising? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument, or the premise the chosen response targets.",
          "Explains one response and considers an objection to it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the foreknowledge problem any worse than the problem of freedom if the future is simply already true?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Compares theological fatalism with logical fatalism, where truths about the future alone seem to fix it.",
          "Considers whether God’s belief adds anything, such as a hard fact about the past.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Boethius&rsquo;s solution makes God timeless. But is a timeless being coherent? Can it act, respond to prayer, or
        know what time it is now?
      </p>
      <p>
        Next, eternity: timelessness against everlastingness, Stump and Kretzmann&rsquo;s eternal-temporal simultaneity, and
        how God&rsquo;s relation to time depends on the metaphysics of time itself.
      </p>
    </>
  ),
};
