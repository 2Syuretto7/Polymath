import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "God is the most real being, possessing every reality, or perfection.",
    kind: "premise",
    note: "This is the concept of the ens realissimum, which reason forms as the ideal of a being that contains the ground of all possibility.",
  },
  {
    claim: "Existence is a reality, or perfection.",
    kind: "premise",
    note: "Descartes: existence can no more be separated from the essence of God than the equality of its angles to two right angles from a triangle.",
    objection: "Kant: being is obviously not a real predicate. It adds nothing to the concept of a thing. A hundred real thalers contain not a penny more than a hundred possible thalers; to say a thing exists is to posit it, with all its predicates, not to add one more.",
  },
  {
    claim: "So the concept of God contains existence.",
    kind: "inference",
    note: "If existence is among the realities, the concept of the being with all realities includes it.",
  },
  {
    claim: "To deny that God exists is to contradict oneself.",
    kind: "inference",
    note: "As it would be to deny that a triangle has three angles.",
    objection: "Kant: if you reject the triangle together with its three angles, there is no contradiction. Likewise, to deny that God exists is to reject the subject with all its predicates, and nothing is left to contradict.",
  },
  {
    claim: "So God necessarily exists.",
    kind: "conclusion",
    note: "The ontological argument claims to prove existence from a concept alone.",
    objection: "Kant adds that the cosmological argument, from contingent existence to a necessary being, and the physico-theological argument, from design, both rely in the end on this one, and so fall with it.",
  },
];

export const lesson: LessonContent = {
  id: "p8.4.3",
  minutes: 85,
  links: {
    revisits: ["p6.3.1", "p6.4.2", "p7.5.6"],
    foreshadows: ["p23.2.1", "p23.2.2", "p8.5.4"],
  },

  puzzle: (
    <>
      <p>
        Anselm, Descartes and Leibniz thought the existence of God could be proved from the mere concept of God. Aquinas and
        Clarke argued from the existence of a contingent world; Paley and the deists, from its design. Kant had himself
        published a proof of God in 1763. In the Critique he argued that there are only three possible proofs, and that none
        of them works. Was he right about all three, and what is left for religion?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through the ontological argument, and challenge the steps Kant attacks.
      </p>
      <ArgumentStepViz steps={STEPS} title="The ontological argument, with Kant's objections" />
    </>
  ),

  theory: (
    <>
      <Definition title="the ideal of pure reason">
        <p>
          Reason forms the idea of a being that contains all reality, the <strong>ens realissimum</strong>, as the ground of
          the possibility of all things. Treating this idea as an object, and then as a being that exists, is the third
          transcendental illusion. Kant calls it an ideal: an idea represented as an individual thing.
        </p>
      </Definition>

      <Definition title="the three proofs">
        <p>
          There are only three ways to prove God&rsquo;s existence by speculative reason. The{" "}
          <strong>ontological</strong> proof argues from the concept alone. The <strong>cosmological</strong> proof argues
          from the existence of something contingent to a necessary being. The <strong>physico-theological</strong> proof
          argues from the order and purpose in the world to a wise author. Kant argues that the second needs the first, to
          identify the necessary being with the most real being, and that the third needs the second, to get from a great
          architect to a necessary creator.
        </p>
      </Definition>

      <Example title="being is not a real predicate">
        <p>
          A real predicate adds to the content of a concept: red, heavy, wise. &ldquo;Exists&rdquo; does not. The concept of a
          hundred thalers is the same whether or not I have them; what differs is my financial position. So existence cannot be
          one of the perfections contained in the concept of God, and no analysis of the concept can yield it. Frege later
          expressed the point by treating existence as a property of concepts, that something falls under them, rather than
          of objects.
        </p>
      </Example>

      <Remark title="what remains">
        <p>
          Kant does not conclude that there is no God. Reason equally cannot prove that God does not exist. The ideal remains
          useful as a regulative principle, guiding inquiry towards systematic unity in nature, and God returns in the
          practical philosophy as a postulate of morality: &ldquo;I had to deny knowledge in order to make room for
          faith.&rdquo; Some philosophers, such as Plantinga with modal logic, have tried to revive the ontological argument
          against Kant&rsquo;s objection.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: <p>Which are the three speculative proofs of God that Kant examines? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Ontological", "Cosmological", "Physico-theological", "Moral"], correct: [0, 1, 2] },
    },
    {
      key: "pred",
      rung: "check",
      prompt: <p>What is Kant&rsquo;s main objection to the ontological argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "That God is not perfect.",
          "That being is not a real predicate: existence adds nothing to the concept of a thing.",
          "That the concept of God is contradictory.",
          "That Anselm misread scripture.",
        ],
        correct: [1],
      },
    },
    {
      key: "thalers",
      rung: "apply",
      prompt: <p>What does the example of the hundred thalers show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That money is not real.",
          "That a hundred real thalers contain no more in their concept than a hundred possible ones, so existence is not part of a concept's content.",
          "That God is rich.",
          "That possible things do not exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "depend",
      rung: "apply",
      prompt: <p>Why does Kant think the cosmological argument depends on the ontological?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it uses the word God.",
          "Because to identify the necessary being with the most real being, it must assume that the concept of the most real being implies necessary existence.",
          "Because it is about design.",
          "Because Aquinas wrote both.",
        ],
        correct: [1],
      },
    },
    {
      key: "faith",
      rung: "apply",
      prompt: <p>What does Kant conclude about God after rejecting the proofs?</p>,
      answer: {
        kind: "choice",
        options: [
          "That God does not exist.",
          "That God's existence can be neither proved nor disproved by speculative reason, but can be believed on practical, moral grounds.",
          "That God exists in space.",
          "That religion is meaningless.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, explain why Kant says that denying God&rsquo;s existence involves no contradiction.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a contradiction arises only if one keeps the subject and denies a predicate contained in it.",
          "Notes denying existence rejects the subject with all its predicates, so nothing remains to contradict, as with rejecting a triangle with its angles. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "frege",
      rung: "stretch",
      prompt: <p>Is existence a predicate? Assess Kant&rsquo;s claim, perhaps using Frege&rsquo;s view of existence as a property of concepts.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Kant's claim that existence does not add to a concept's content.",
          "Considers a development or objection, such as Frege's second-level reading, or that 'exists' does work grammatically like a predicate.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the three speculative proofs of God, Kant's objection that being is not a real predicate, why he thinks the other proofs depend on the ontological one, and what role God keeps in his philosophy.",

  glimpse: (
    <p>
      The next chapter turns to Kant&rsquo;s practical philosophy, where God, freedom and immortality return as postulates.
      The Philosophy of Religion course examines the ontological and cosmological arguments in their modern forms.
    </p>
  ),
};
