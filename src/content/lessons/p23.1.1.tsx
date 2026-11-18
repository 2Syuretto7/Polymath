import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { StoneViz } from "@/components/viz/StoneViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p23.1.1",
  minutes: 85,
  links: {
    revisits: ["p1.5.1", "p11.3.1", "p0.4.4"],
    foreshadows: ["p23.1.2", "p23.2.1", "p23.3.1"],
  },

  puzzle: (
    <>
      <p>
        Can God make a stone so heavy that God cannot lift it? If yes, there is something God cannot do; if no, there is
        something God cannot do. The puzzle sounds like a schoolyard trick. But it forces a serious question: what exactly
        would it mean for any being to be all-powerful?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Follow the dilemma, then see which step each classic reply attacks.</p>
      <StoneViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the attributes of God">
        <p>
          The God of classical theism, in Judaism, Christianity and Islam, and in some Hindu traditions, is described as
          omnipotent, omniscient, perfectly good, eternal and the creator of all else. Philosophy of religion asks whether
          these attributes are each coherent, whether they fit together, and whether there is reason to think something has
          them. This chapter takes the first two questions.
        </p>
      </Definition>

      <Example title="analyses of omnipotence">
        <p>
          The simplest analysis, that an omnipotent being can do <em>anything</em>, falls to the stone. Aquinas&rsquo;s
          refinement: power to do whatever is <strong>logically possible</strong>. But some logically possible acts seem
          beyond God: sinning, forgetting, or making a stone that God did not make. So later analyses restrict to what is
          possible <em>for a being with God&rsquo;s other attributes</em>, or define omnipotence as power to bring about any
          state of affairs it is possible for anyone in that situation to bring about (Flint and Freddoso, 1983).
        </p>
      </Example>

      <Example title="can God sin?">
        <p>
          If God is essentially perfectly good, God cannot do evil. Is that a lack of power? One reply: the power to sin is
          not a power but a liability, a capacity to fail, as Anselm argued. Another: God could sin, but never will. Each has
          costs: the first makes moral perfection look like a restriction, the second makes God&rsquo;s goodness contingent.
        </p>
      </Example>

      <Remark title="what the paradoxes show">
        <p>
          Paradoxes of omnipotence rarely refute theism; they refine its concepts, as the liar paradox refines theories of
          truth. The cost of each refinement is a God who is less obviously &lsquo;able to do everything&rsquo;. Whether the
          refined attribute is still worthy of worship is part of the debate.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "aquinas",
      rung: "check",
      prompt: <p>How did Aquinas understand omnipotence?</p>,
      answer: { kind: "choice", options: ["As the power to do whatever is logically possible", "As the power to do absolutely anything, including contradictions", "As the power to do whatever God wills to do", "As the greatest power among creatures"], correct: [0] },
    },
    {
      key: "stone",
      rung: "check",
      prompt: <p>What does the paradox of the stone aim to show?</p>,
      answer: { kind: "choice", options: ["That the concept of omnipotence is incoherent, since either answer reveals something God cannot do", "That stones are heavy", "That God does not exist because of evil", "That God is not omniscient"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which reply holds that God can do even the logically impossible?</p>,
      answer: { kind: "choice", options: ["Descartes", "Aquinas", "Mavrodes", "Savage"], correct: [0] },
    },
    {
      key: "savage",
      rung: "apply",
      prompt: <p>According to Savage, what does &lsquo;God cannot create a stone God cannot lift&rsquo; really mean?</p>,
      answer: { kind: "choice", options: ["That God can lift any stone God creates", "That God is weak", "That stones do not exist", "That God cannot create"], correct: [0] },
    },
    {
      key: "sin",
      rung: "apply",
      prompt: <p>Which logically possible act raises a problem for defining omnipotence as power to do anything logically possible?</p>,
      answer: { kind: "choice", options: ["Sinning", "Making a square circle", "Creating the universe", "Knowing the future"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the paradox of the stone show that omnipotence is incoherent? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the dilemma.",
          "Considers at least one reply, such as Aquinas’s logical-possibility account or Savage’s.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is a being who cannot sin less powerful than one who can?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers whether the ability to sin is a power or a liability.",
          "Weighs a consideration on each side, such as Anselm’s view against the intuition that more abilities mean more power.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Omniscience raises its own puzzle. If God knew yesterday that you will choose tea tomorrow, and God cannot be
        wrong, it seems you cannot choose coffee. Divine foreknowledge looks incompatible with human freedom.
      </p>
      <p>
        Next, foreknowledge and freedom: Pike&rsquo;s argument, Boethius&rsquo;s eternity solution, Ockham&rsquo;s hard and
        soft facts, Molina&rsquo;s middle knowledge, and open theism.
      </p>
    </>
  ),
};
