import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ZombieTwinViz } from "@/components/viz/ZombieTwinViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.4.3",
  minutes: 75,
  links: {
    revisits: ["p12.4.1", "p12.1.2", "p12.1.1"],
    foreshadows: ["p12.5.2", "p12.5.3", "p12.5.5"],
  },

  puzzle: (
    <>
      <p>
        You touch a hot pan, feel pain, and pull your hand away. Surely the pain made you move. But the exclusion problem
        suggests the physical story, of nerves and muscles, is already complete. What if the pain is real but does nothing at
        all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Compare yourself with a twin who is physically identical but lacks the feeling. Choose a view of the mind and see what
        differs between the two of you.
      </p>
      <ZombieTwinViz />
    </>
  ),

  theory: (
    <>
      <Definition title="epiphenomenalism">
        <p>
          Mental properties, or at least conscious experiences, are caused by physical events in the brain but cause nothing
          physical themselves. They are by-products, like a shadow cast by a moving train.
        </p>
      </Definition>

      <Example title="Huxley’s steam whistle">
        <p>
          T. H. Huxley, in 1874, compared consciousness to the whistle of a steam engine: produced by the working of the engine
          but with no influence on it. The view respects the causal closure of the physical, which drives the exclusion
          problem, and still keeps experiences as something real and distinct from the brain.
        </p>
      </Example>

      <Remark title="Jackson’s epiphenomenal qualia">
        <p>
          Frank Jackson, in &ldquo;Epiphenomenal Qualia&rdquo; (1982), argued that the felt qualities of experience, qualia,
          are not physical, using the knowledge argument of a later lesson. Given causal closure, he concluded that qualia are
          epiphenomenal. He later abandoned the view, partly for the reasons below.
        </p>
      </Remark>

      <Definition title="the objections">
        <p>
          <strong>Self-knowledge.</strong> If pain causes nothing physical, it does not cause your saying or believing
          &ldquo;I am in pain&rdquo;. Your twin says exactly the same. Then your reports seem unconnected to the experiences
          they are about.
        </p>
        <p>
          <strong>Evolution.</strong> Natural selection acts only on what makes a difference to behaviour. If consciousness
          does nothing, it is hard to see why creatures that have it should have evolved. Epiphenomenalists reply that it may
          come along with brain states that were selected, as the weight of a polar bear&rsquo;s coat comes along with its
          warmth.
        </p>
      </Definition>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does epiphenomenalism say about conscious experiences?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are identical to brain states.",
          "They are caused by brain events but cause nothing physical.",
          "They cause brain events but are not caused by them.",
          "They do not exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "huxley",
      rung: "check",
      prompt: <p>What image did Huxley use for consciousness?</p>,
      answer: { kind: "choice", options: ["A ghost in a machine", "A steam engine’s whistle", "A beetle in a box", "A Chinese room"], correct: [1] },
    },
    {
      key: "motive",
      rung: "apply",
      prompt: <p>Which principle makes epiphenomenalism attractive to a property dualist?</p>,
      answer: {
        kind: "choice",
        options: [
          "The causal closure of the physical",
          "Leibniz’s law",
          "The principle of sufficient reason",
          "Ockham’s razor",
        ],
        correct: [0],
      },
    },
    {
      key: "self",
      rung: "apply",
      prompt: <p>Why does epiphenomenalism threaten our knowledge of our own experiences?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because experiences are unconscious.",
          "Because our beliefs and reports about experiences are not caused by them, so they would be the same without them.",
          "Because we cannot remember experiences.",
          "Because experiences are private.",
        ],
        correct: [1],
      },
    },
    {
      key: "evo",
      rung: "apply",
      prompt: <p>What is the best epiphenomenalist reply to the evolution objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "Evolution is false.",
          "Consciousness may be a by-product of brain states that were themselves selected for.",
          "Consciousness causes behaviour after all.",
          "Only humans are conscious.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the self-knowledge objection refute epiphenomenalism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the objection: reports and beliefs would be the same without the experience.",
          "Considers a reply, such as that knowing need not be causal, or that the experience is part of the belief.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If epiphenomenalism is true, how could anyone have written about consciousness? Is this a problem for the view?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the writing was caused by physical events alone.",
          "Asks whether the writing is then really about consciousness.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what epiphenomenalism says, why causal closure makes it tempting, Huxley's steam whistle, and the objections from self-knowledge and evolution.",

  glimpse: (
    <p>
      The next lessons turn to consciousness directly: what it is like to be a bat, Mary&rsquo;s room, and the zombie
      argument, which all ask whether experience can be physical.
    </p>
  ),
};
