import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ShipHouseViz } from "@/components/viz/ShipHouseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.3.4",
  minutes: 85,
  links: {
    revisits: ["p8.3.3", "p7.5.2", "p8.2.2"],
    foreshadows: ["p8.3.5", "p11.4.1", "p32.3.1"],
  },

  puzzle: (
    <>
      <p>
        All my perceptions come one after another, whatever they are of. When I look over a house, I see the roof, then the
        walls, then the door; when I watch a ship drift downstream, I see it higher up, then lower down. Both are successions in
        my mind. Yet I take the house to be standing still and the ship to be moving. What in the perceptions themselves tells
        me that one succession is in the object and the other only in me?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Perceive the house in any order you like. Then try the same with the ship.
      </p>
      <ShipHouseViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the analogies of experience">
        <p>
          The <strong>analogies of experience</strong> are the principles of the categories of relation, applied through
          their schemata to time. Time itself cannot be perceived, so the temporal order of things must be determined by rules
          connecting appearances. There are three, one for each mode of time: duration, succession and coexistence.
        </p>
      </Definition>

      <Definition title="the three principles">
        <p>
          <strong>First analogy</strong>: in all change of appearances substance persists, and its quantity in nature is
          neither increased nor diminished. Without something permanent, change could not be perceived as change of one
          thing. <strong>Second analogy</strong>: all alterations take place in conformity with the law of cause and effect.{" "}
          <strong>Third analogy</strong>: all substances, so far as they can be perceived to coexist in space, are in thoroughgoing
          interaction.
        </p>
      </Definition>

      <Example title="the second analogy">
        <p>
          With the house, the order of my perceptions is up to me, so it tells me nothing about the object. With the ship, the
          order is bound: I could not have seen it downstream first. But what binds it is not given in the perceptions, which
          are just one after another in both cases. It can only be that I think of the event as following its preceding state
          according to a rule, which is the concept of cause. So the concept of cause is a condition of experiencing any
          objective event at all. Hume thought we learn of causes by seeing events regularly succeed one another; Kant argues
          that we could not even recognise an event without already applying the concept of cause.
        </p>
      </Example>

      <Remark title="assessments">
        <p>
          Many readers think the second analogy proves less than Kant wanted. Arthur Lovejoy and later Strawson objected to a
          non sequitur: the necessity of the order of my perceptions, given that the ship moves, is not the necessity of the
          ship&rsquo;s moving given its prior state. Defenders reply that the argument concerns how objective order can be
          known at all. Either way, Kant&rsquo;s principles were meant to ground Newtonian physics: conservation of matter,
          universal causation, and universal gravitation as interaction.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: <p>Which modes of time do the three analogies correspond to? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Duration", "Succession", "Coexistence", "Eternity"], correct: [0, 1, 2] },
    },
    {
      key: "second",
      rung: "check",
      prompt: <p>What does the second analogy state?</p>,
      answer: {
        kind: "choice",
        options: [
          "Substance persists in all change.",
          "All alterations take place in conformity with the law of cause and effect.",
          "All coexisting substances interact.",
          "Space is infinite.",
        ],
        correct: [1],
      },
    },
    {
      key: "house",
      rung: "apply",
      prompt: <p>Why does the order of my perceptions of a house not reveal an objective succession?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because houses do not exist.",
          "Because I could have perceived the parts in any order, so the order is in my apprehension only.",
          "Because houses never change.",
          "Because the house is a thing in itself.",
        ],
        correct: [1],
      },
    },
    {
      key: "first",
      rung: "apply",
      prompt: <p>Why does Kant think something must persist through all change?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because God sustains the world.",
          "Because change can only be perceived as change of something that remains, and time itself cannot be perceived.",
          "Because atoms are eternal.",
          "Because the soul is immortal.",
        ],
        correct: [1],
      },
    },
    {
      key: "hume",
      rung: "apply",
      prompt: <p>How does Kant&rsquo;s view of causation differ from Hume&rsquo;s?</p>,
      answer: {
        kind: "choice",
        options: [
          "Kant thinks we perceive causal power directly.",
          "Kant thinks the concept of cause is a condition of experiencing objective events, not learnt from regular succession.",
          "Kant denies that there are causes.",
          "There is no difference.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, explain the contrast between the house and the ship, and what Kant concludes from it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says the order of perceptions of the house is reversible, while that of the ship is fixed.",
          "Says the fixed order reflects an objective succession, which we can recognise only by thinking it under a rule, the concept of cause. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "lovejoy",
      rung: "stretch",
      prompt: <p>Is there a non sequitur in the second analogy, as Lovejoy and Strawson claimed? Give your view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the objection: the necessity of my perceptual order, given the event, is confused with the causal necessity of the event.",
          "Considers a reply, such as that Kant's question is how we can know objective order at all, which may require some rule.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the three analogies of experience, Kant's contrast between the house and the ship, how the second analogy answers Hume on causation, and the main objection to it.",

  glimpse: (
    <p>
      The next lesson uses the first analogy against Descartes: the refutation of idealism. The Metaphysics course returns to
      theories of causation, and the Philosophy of Physics course asks why time seems to have a direction at all.
    </p>
  ),
};
