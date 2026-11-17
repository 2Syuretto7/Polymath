import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { NeurathBoatViz } from "@/components/viz/NeurathBoatViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.4.1",
  minutes: 80,
  links: {
    revisits: ["p18.3.2", "p15.3.1", "p17.3.1"],
    foreshadows: ["p18.4.2", "p18.4.3", "p18.6.1"],
  },

  puzzle: (
    <>
      <p>
        In 1929 a group of philosophers, physicists and mathematicians in Vienna published a manifesto declaring that there
        are no deep questions unanswerable in principle: every meaningful question can be settled by logic or by experience,
        and the rest is not false but empty. Were they right to think metaphysics could be swept away so cleanly?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Rebuild the boat while keeping it afloat.</p>
      <NeurathBoatViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Circle">
        <p>
          The Vienna Circle met from 1924 round Moritz Schlick. Its members included Rudolf Carnap, Otto Neurath, Hans Hahn,
          Herbert Feigl and Friedrich Waismann, and Kurt Gödel attended. Their manifesto, <em>The Scientific Conception of
          the World</em> (1929), called for a unified science, built from logic and observation, and for an end to
          metaphysics. Schlick&rsquo;s murder in 1936 and the annexation of Austria in 1938 scattered the members, many to
          America and Britain.
        </p>
      </Definition>

      <Definition title="the main doctrines">
        <p>
          Every meaningful statement is either <strong>analytic</strong>, true or false in virtue of logic and meaning, or{" "}
          <strong>empirical</strong>, testable by experience. The new logic of Frege, Russell and the Tractatus showed how
          mathematics could be analytic without being about anything, which removed the empiricist&rsquo;s old trouble with
          necessary truths. Metaphysical sentences, which are neither, lack cognitive meaning. Philosophy is not a body of
          doctrine but the activity of logically clarifying the sentences of science.
        </p>
      </Definition>

      <Example title="eliminating metaphysics">
        <p>
          In 1932 Carnap took Heidegger&rsquo;s &ldquo;the Nothing itself nothings&rdquo; as a specimen. It is grammatical
          but, Carnap argued, logically ill-formed: it treats &ldquo;nothing&rdquo;, a quantifier, as a name, and no
          observation could bear on it. Metaphysics, he suggested, expresses an attitude to life, as music does, but
          confusedly, in the form of theory.
        </p>
      </Example>

      <Remark title="the protocol sentence debate">
        <p>
          What are the basic statements that test all the others? Schlick held that observation reports give certain
          foundations. Neurath denied that any sentence is immune from revision: protocol sentences are themselves part of
          the system and can be rejected. &ldquo;We are like sailors who must rebuild their ship on the open sea.&rdquo; This
          anti-foundationalist image was later taken up by Quine.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "meta",
      rung: "check",
      prompt: <p>What did the Vienna Circle hold about metaphysical sentences?</p>,
      answer: {
        kind: "choice",
        options: [
          "They lack cognitive meaning, being neither analytic nor empirically testable.",
          "They are true but unknowable.",
          "They are false.",
          "They are the foundation of science.",
        ],
        correct: [0],
      },
    },
    {
      key: "boat",
      rung: "check",
      prompt: <p>What is the point of Neurath&rsquo;s boat?</p>,
      answer: {
        kind: "choice",
        options: [
          "There is no foundation outside our body of beliefs; we revise it piece by piece while relying on the rest.",
          "Science will eventually reach a final, complete theory.",
          "Observation reports are certain.",
          "Philosophy should be done in isolation from science.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, launch a new boat, then replace plank 1, then plank 2, then plank 1 again. How many original planks are left?</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "logic",
      rung: "apply",
      prompt: <p>How did the new logic help the Vienna Circle&rsquo;s empiricism?</p>,
      answer: {
        kind: "choice",
        options: [
          "It suggested that mathematics and logic are analytic, so their necessity needs no non-empirical knowledge of the world.",
          "It proved that every truth is empirical.",
          "It showed that metaphysics is true.",
          "It replaced observation altogether.",
        ],
        correct: [0],
      },
    },
    {
      key: "protocol",
      rung: "apply",
      prompt: <p>In the protocol sentence debate, what did Neurath hold?</p>,
      answer: {
        kind: "choice",
        options: [
          "Protocol sentences can be revised like any others.",
          "Protocol sentences are certain foundations.",
          "There are no observation sentences.",
          "Only physics has protocol sentences.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the claim that every meaningful statement is analytic or empirically testable itself meaningful by its own standard? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the claim seems neither analytic nor empirically testable.",
          "Considers a reply, such as treating it as a proposal for how to use ‘meaningful’, or as an analysis of scientific practice.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The Vienna Circle took inspiration from the Tractatus, yet Wittgenstein kept his distance from them. What might he have objected to?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the Tractatus places ethics and the mystical beyond what can be said, but treats them as important.",
          "Contrasts this with the Circle’s view that what cannot be said is simply empty.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Carnap&rsquo;s <em>Aufbau</em>: an attempt to construct the whole world of science from elementary experiences and
      a single relation of remembered similarity.
    </p>
  ),
};
