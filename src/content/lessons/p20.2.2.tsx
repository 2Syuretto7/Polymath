import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FiveMemberViz } from "@/components/viz/FiveMemberViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.2.2",
  minutes: 85,
  links: {
    revisits: ["p20.2.1", "p2.1.2", "p1.1.3"],
    foreshadows: ["p20.5.7", "p20.7.1", "p20.6.2"],
  },

  puzzle: (
    <>
      <p>
        You see smoke rising from a distant hill and conclude there is a fire. Now turn it around: you see fire on a hill.
        Should you conclude there is smoke? Most people sense that the first inference is good and the second is not. What
        exactly is the difference?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare three five-membered inferences, and find the one that fails.</p>
      <FiveMemberViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the terms of an inference">
        <p>
          The <strong>pakṣa</strong> is the subject, the hill. The <strong>sādhya</strong> is what is to be proved of it, fire.
          The <strong>hetu</strong> or liṅga is the reason or sign, smoke. The inference works when the hetu is present in the
          pakṣa and is <strong>pervaded</strong> by the sādhya: wherever the hetu is, the sādhya is. This relation is{" "}
          <strong>vyāpti</strong>.
        </p>
      </Definition>

      <Example title="the five members">
        <p>
          The Nyāya Sūtra gives an inference for others five members: thesis, reason, example, application and conclusion.
          The example states the pervasion with a positive instance (the kitchen) and often a negative one (the lake). Inference
          for oneself needs no such display; the five members are for persuading an opponent in debate.
        </p>
      </Example>

      <Definition title="conditions and fallacies">
        <p>
          A good hetu must be present in the pakṣa, present in some similar case, and absent from every dissimilar case.
          Fallacious reasons (hetvābhāsa) include the <strong>deviating</strong> reason, found where the sādhya is absent, as
          fire is found without smoke in a red-hot iron ball; the <strong>contradictory</strong>; the{" "}
          <strong>unestablished</strong>, not actually in the pakṣa; and the <strong>counterbalanced</strong>, where an equally
          strong reason proves the opposite.
        </p>
      </Definition>

      <Remark title="establishing pervasion">
        <p>
          Against the Cārvākas, Naiyāyikas held that vyāpti is known by repeated observation of co-presence and co-absence, with
          no counterexample, aided by a special perception of the universals smokeness and fireness, and by reductio (tarka)
          against doubts. Unlike Aristotle&rsquo;s syllogism, Nyāya inference is about properties located in things and always
          includes an example: logic and evidence are not separated.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "vyapti",
      rung: "check",
      prompt: <p>What is vyāpti?</p>,
      answer: {
        kind: "choice",
        options: ["The pervasion of the reason by what is to be proved: wherever the reason is, so is the property", "The subject of an inference", "A kind of perception", "The conclusion"],
        correct: [0],
      },
    },
    {
      key: "paksa",
      rung: "check",
      prompt: <p>In &ldquo;the hill has fire because it has smoke&rdquo;, what is the pakṣa?</p>,
      answer: { kind: "choice", options: ["The hill", "Fire", "Smoke", "The kitchen"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which inference is fallacious?</p>,
      answer: { kind: "choice", options: ["Smoke on the hill, because of fire", "Fire on the hill, because of smoke", "Sound is impermanent, because produced", "None"], correct: [0] },
    },
    {
      key: "members",
      rung: "apply",
      prompt: <p>How many members does an inference for others have in Nyāya?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "dev",
      rung: "apply",
      prompt: <p>What makes a reason deviating (savyabhicāra)?</p>,
      answer: {
        kind: "choice",
        options: ["It occurs where the property to be proved is absent", "It is not in the subject", "It proves the opposite", "It has no example"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does including an example make Nyāya inference better or worse than a purely formal syllogism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes what the example adds, such as evidence for the general premise.",
          "Notes a cost, such as mixing validity with evidential support, or argues there is no cost.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can repeated observation without counterexample ever establish a universal connection? How would a Naiyāyika answer Hume?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the challenge from finite observation.",
          "Describes a Nyāya resource, such as perception of universals or tarka, and assesses it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Inference connects properties located in things: smokeness in the smoke, fireness in the fire. What are these
        properties, and what are the things that bear them? Nyāya&rsquo;s sister school, Vaiśeṣika, gave a systematic answer.
      </p>
      <p>
        Next, the Vaiśeṣika categories: substance, quality, motion, universal, particularity, inherence and absence, an
        ontology meant to list every kind of thing that can be known and named.
      </p>
    </>
  ),
};
