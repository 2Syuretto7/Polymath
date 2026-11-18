import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ModalOntoViz } from "@/components/viz/ModalOntoViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p23.2.1",
  minutes: 90,
  links: {
    revisits: ["p23.1.3", "p11.3.1", "p2.4.4"],
    foreshadows: ["p23.2.2", "p23.4.1", "p23.5.1"],
  },

  puzzle: (
    <>
      <p>
        Most arguments for God start from something in the world: motion, order, experience. The ontological argument starts
        from nothing but a definition. If it works, an atheist who understands the word &lsquo;God&rsquo; contradicts
        themselves. Almost everyone feels it must fail somewhere. Where, exactly?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        In modal logic S5, what is possibly necessary is necessary. Grant that a maximally great being, one that exists and
        is perfect in every possible world, possibly exists, and watch what follows. Then grant the opposite premise.
      </p>
      <ModalOntoViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Anselm’s argument">
        <p>
          In the <em>Proslogion</em> (chapter 2), Anselm defines God as &lsquo;that than which nothing greater can be
          conceived&rsquo;. Even the fool who denies God understands the phrase, so God exists in the understanding. If God
          existed only in the understanding, something greater could be conceived: the same being existing in reality too.
          So God exists in reality. In chapter 3 he argues further that God cannot even be conceived not to exist, since a
          being that cannot be conceived not to exist is greater than one that can.
        </p>
      </Definition>

      <Example title="Gaunilo’s island">
        <p>
          The monk Gaunilo replied with a parody: think of the island than which no greater island can be conceived. By the
          same reasoning it must exist. Since it plainly need not, the form of the argument is bad. Anselm answered that the
          argument works only for a being greatest without qualification; islands have no intrinsic maximum, since one can
          always add another palm tree.
        </p>
      </Example>

      <Definition title="Kant’s objection">
        <p>
          Kant replied that &lsquo;existence is not a real predicate&rsquo;: it adds nothing to the concept of a thing. A
          hundred real thalers contain no more thalers than a hundred possible ones. So existence cannot be one of the
          perfections a greatest being must have, and the comparison Anselm relies on, between the being in the
          understanding and the same being in reality, does not pick out a greater concept. Frege recast the point: existence
          is a property of concepts (being instantiated), not of objects.
        </p>
      </Definition>

      <Definition title="Plantinga’s modal version">
        <p>
          Alvin Plantinga defines a being as <strong>maximally excellent</strong> in a world if it is omnipotent, omniscient
          and morally perfect there, and <strong>maximally great</strong> if it is maximally excellent in every world. The
          argument: (1) possibly, a maximally great being exists; (2) so in some world it is true that a maximally great
          being exists in every world; (3) in S5, whatever is possibly necessary is necessary; (4) so a maximally great being
          exists in every world, including ours. The argument is valid. Plantinga himself claimed only that it shows theism
          rationally acceptable, not proven.
        </p>
      </Definition>

      <Remark title="the symmetry problem">
        <p>
          Everything rests on premise (1). But in S5 the same reasoning runs in reverse: if it is possible that no maximally
          great being exists, then a maximally great being exists in no world. Since the concept is all or nothing, either it
          is necessarily exemplified or necessarily not. Our sense that God &lsquo;might&rsquo; exist is no better evidence
          for (1) than our sense that God &lsquo;might not&rsquo; exist is for its rival. Gödel&rsquo;s version, with
          positive properties, faces the same question: why believe the axioms that make the godlike property consistent?
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How does Anselm define God in the Proslogion?</p>,
      answer: { kind: "choice", options: ["That than which nothing greater can be conceived", "The first cause of motion", "The designer of the universe", "The necessary being"], correct: [0] },
    },
    {
      key: "kant",
      rung: "check",
      prompt: <p>What is Kant’s main objection?</p>,
      answer: { kind: "choice", options: ["Existence is not a real predicate that adds to a concept", "The idea of God is incoherent", "There could be a greater island", "The argument is circular because it assumes the Bible"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, keep the premise that a maximally great being possibly exists and apply maximal greatness and S5. In how many worlds does the being exist?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "s5",
      rung: "apply",
      prompt: <p>Which principle of S5 drives Plantinga’s argument?</p>,
      answer: { kind: "choice", options: ["What is possibly necessary is necessary", "What is actual is necessary", "What is possible is actual", "Nothing is necessary"], correct: [0] },
    },
    {
      key: "island",
      rung: "apply",
      prompt: <p>What is the best Anselmian reply to Gaunilo’s island?</p>,
      answer: { kind: "choice", options: ["Greatness for islands has no intrinsic maximum, unlike greatness without qualification", "Islands do exist", "Gaunilo misread the Bible", "Islands cannot be conceived"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is the possibility premise of the modal ontological argument any more credible than its rival, that possibly no maximally great being exists? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the symmetry: in S5 the rival premise yields that a maximally great being exists in no world.",
          "Considers a reason to prefer one premise, such as conceivability, simplicity, or Plantinga’s modest aim.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could an argument be valid, with premises a reasonable person accepts, and still give that person no reason to change their mind?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers whether the premise is accepted only by those already accepting the conclusion.",
          "Relates this to begging the question, or to Plantinga’s claim of rational acceptability.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The ontological argument fails or succeeds on the coherence of a concept. The other classical arguments start from
        the world, and ask what it would take to explain why there is anything at all.
      </p>
      <p>
        Next, the cosmological argument in depth: the principle of sufficient reason, contingency, and whether an
        explanation of everything must end in a necessary being.
      </p>
    </>
  ),
};
