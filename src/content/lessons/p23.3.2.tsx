import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { NoseeumViz } from "@/components/viz/NoseeumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p23.3.2",
  minutes: 90,
  links: {
    revisits: ["p23.3.1", "p10.7.2", "p7.5.6"],
    foreshadows: ["p23.3.3", "p23.4.2", "p23.4.3"],
  },

  puzzle: (
    <>
      <p>
        Lightning strikes a dead tree in a distant forest. A fawn is trapped in the fire and dies slowly, in agony, seen by no
        one. Nobody learns from it, nobody grows, nobody chooses it. Can you think of any good that requires it? If not, is
        that evidence that there is none?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Treat &lsquo;we see no reason for this evil&rsquo; as evidence and update. Everything turns on how likely we would be
        to see God&rsquo;s reason if there were one.
      </p>
      <NoseeumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Rowe’s argument">
        <p>
          William Rowe (1979): (1) There probably are instances of intense suffering which an omnipotent, omniscient being
          could have prevented without losing some greater good or permitting some evil equally bad or worse. (2) Such a being,
          if wholly good, would prevent any such suffering. (3) So there probably is no such being. Premise (2) is widely
          accepted; the fight is over (1), which Rowe supported with the fawn and with a real case of a child&rsquo;s murder.
        </p>
      </Definition>

      <Definition title="the noseeum inference">
        <p>
          Rowe&rsquo;s support for (1) moves from &lsquo;no good we know of justifies this&rsquo; to &lsquo;no good at all
          justifies this&rsquo;. Stephen Wykstra called this a &lsquo;noseeum&rsquo; inference: from not seeing something, to
          its not being there. Such inferences are fine when we would expect to see the thing if it were there, as with an
          elephant in the room, and poor otherwise, as with a flea.
        </p>
      </Definition>

      <Example title="sceptical theism">
        <p>
          Sceptical theists such as Wykstra, Michael Bergmann and Peter van Inwagen argue that we have no reason to think the
          goods we know of are representative of all goods, or that we grasp the connections between goods and evils that an
          omniscient being would grasp. A parent&rsquo;s reasons for a painful injection are invisible to an infant. If so, the
          chance of seeing God&rsquo;s reasons is low, and the noseeum inference is weak.
        </p>
      </Example>

      <Remark title="the cost of scepticism">
        <p>
          Critics reply that sceptical theism proves too much. If we cannot judge whether an evil serves a hidden good, we
          cannot judge whether we should prevent it ourselves, which threatens moral paralysis; and we cannot judge that God
          would not deceive us, which threatens all knowledge of God&rsquo;s purposes. Paul Draper offered a different
          evidential argument: the pattern of pain and pleasure in the world is much more probable on the hypothesis of
          indifference, that nature cares nothing for us either way, than on theism.
        </p>
      </Remark>

      <Remark title="Hume’s Philo">
        <p>
          In Hume&rsquo;s Dialogues, Philo grants that evil may be consistent with God, but argues that we could never infer a
          good God from a world like this one. Rowe and Draper refine that thought: evil does not refute theism, but it
          lowers its probability.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rowe",
      rung: "check",
      prompt: <p>How does Rowe&rsquo;s argument differ from Mackie&rsquo;s?</p>,
      answer: { kind: "choice", options: ["It claims evil makes God improbable, not that the two are inconsistent", "It denies that evil exists", "It is about God’s omniscience only", "It assumes God exists"], correct: [0] },
    },
    {
      key: "noseeum",
      rung: "check",
      prompt: <p>When is a noseeum inference reliable?</p>,
      answer: { kind: "choice", options: ["When we would expect to see the thing if it were there", "Always", "Never", "When the thing is small"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with prior 0.5, chance 0.5 of seeing a reason and one apparently pointless evil, what is the posterior for theism?</p>,
      answer: { kind: "numeric", value: 0.3333, tolerance: 0.01 },
    },
    {
      key: "skep",
      rung: "apply",
      prompt: <p>A sceptical theist wants to blunt Rowe&rsquo;s argument. In the visualisation, what should they argue?</p>,
      answer: { kind: "choice", options: ["That the chance of seeing God’s reasons is low", "That the prior for theism is 1", "That there are no pointless-seeming evils", "That the likelihood without God is 0"], correct: [0] },
    },
    {
      key: "cost",
      rung: "apply",
      prompt: <p>What is the moral paralysis objection to sceptical theism?</p>,
      answer: { kind: "choice", options: ["If we cannot judge whether evils serve hidden goods, we cannot judge whether to prevent them", "Sceptical theists are immoral", "God would paralyse those who doubt", "Scepticism makes belief in God impossible"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is the fawn&rsquo;s suffering good evidence against the existence of God? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Rowe’s argument, or the noseeum inference behind its key premise.",
          "Weighs the sceptical theist reply, or an objection to it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If evil lowers the probability of God, could other evidence, such as fine-tuning or religious experience, raise it again? How should the evidence be weighed together?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Bayesian updating combines pieces of evidence, so evil is one input among several.",
          "Considers how strong each piece is, or whether they are independent.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Sceptical theism says we need not know God&rsquo;s reasons. Theodicists try to say what those reasons might be:
        freedom, growth, a reliable world, or a good beyond all comparison.
      </p>
      <p>Next, theodicies: Augustinian, Irenaean and natural law, and which evils each can and cannot explain.</p>
    </>
  ),
};
