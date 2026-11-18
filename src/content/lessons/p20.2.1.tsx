import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PramanaTableViz } from "@/components/viz/PramanaTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.2.1",
  minutes: 85,
  links: {
    revisits: ["p20.1.4", "p1.1.2", "p1.1.3"],
    foreshadows: ["p20.2.2", "p20.5.7", "p20.6.3"],
  },

  puzzle: (
    <>
      <p>
        You know there is no elephant in this room. You did not see the absence of an elephant; absences are not visible
        objects. Nor did you infer it from anything obvious. How do you know it? Indian philosophers argued about exactly this
        case for centuries.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Click a school to see which means of knowledge it accepts, and why.</p>
      <PramanaTableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="pramā and pramāṇa">
        <p>
          <strong>Pramā</strong> is true, non-accidental cognition: knowledge. A <strong>pramāṇa</strong> is a means or source
          of such cognition. Every Indian school had to state which pramāṇas it accepted, because arguments about the self or
          the world depend on what counts as evidence. A school&rsquo;s theory of pramāṇas is its epistemology.
        </p>
      </Definition>

      <Example title="the main candidates">
        <p>
          <strong>Perception</strong> (pratyakṣa): contact of a sense with its object. <strong>Inference</strong> (anumāna):
          knowledge of something through a sign invariably connected with it, like fire from smoke.{" "}
          <strong>Testimony</strong> (śabda): the word of a reliable speaker, or of scripture. <strong>Comparison</strong>{" "}
          (upamāna): learning what a word names through a described likeness. <strong>Postulation</strong> (arthāpatti):
          supposing what alone explains a fact. <strong>Non-apprehension</strong> (anupalabdhi): knowing an absence through not
          perceiving what would have been perceived.
        </p>
      </Example>

      <Definition title="validity: intrinsic or extrinsic">
        <p>
          Is a cognition valid by default, until defeated, or only once checked? Mīmāṃsā held{" "}
          <strong>svataḥ prāmāṇya</strong>: cognitions are intrinsically valid, and doubt needs a reason. Nyāya held{" "}
          <strong>parataḥ prāmāṇya</strong>: validity is established extrinsically, for example by successful action on the
          cognition. The debate anticipates modern disputes about default entitlement and justification.
        </p>
      </Definition>

      <Remark title="the Cārvāka challenge">
        <p>
          The materialist Cārvākas accepted only perception. Inference, they argued, needs a universal connection, such as
          &ldquo;wherever smoke, there fire&rdquo;, which no finite set of perceptions can establish, and which cannot be
          inferred without circularity. This is a problem of induction, stated well before Hume, and every other school had to
          answer it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pramana",
      rung: "check",
      prompt: <p>What is a pramāṇa?</p>,
      answer: { kind: "choice", options: ["A means of valid knowledge", "A ritual", "A school of philosophy", "A form of meditation"], correct: [0] },
    },
    {
      key: "carvaka",
      rung: "check",
      prompt: <p>Which pramāṇa did the Cārvākas accept?</p>,
      answer: { kind: "choice", options: ["Perception only", "Inference only", "Testimony only", "All six"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many pramāṇas does Nyāya accept?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "post",
      rung: "apply",
      prompt: <p>Devadatta is fat but never eats by day, so he must eat at night. Which pramāṇa is this, for the Mīmāṃsakas?</p>,
      answer: { kind: "choice", options: ["Postulation (arthāpatti)", "Perception", "Comparison", "Non-apprehension"], correct: [0] },
    },
    {
      key: "elephant",
      rung: "apply",
      prompt: <p>How do Bhāṭṭa Mīmāṃsakas and Advaitins say you know there is no elephant in the room?</p>,
      answer: { kind: "choice", options: ["By non-apprehension", "By testimony", "By comparison", "By inference from smoke"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the Cārvāka argument against inference a good one? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument: universal connections cannot be perceived or non-circularly inferred.",
          "Considers a reply, such as Nyāya’s appeal to repeated observation without counterexample, or the practical success of inference.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is testimony a separate source of knowledge, or just inference from a speaker&rsquo;s reliability?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the reductionist view, as in Vaiśeṣika or Buddhism.",
          "States a reason to treat testimony as basic, such as how children learn from others before checking reliability.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Nearly every school accepted inference, and Nyāya made it the centre of its philosophy. Its classic inference about
        fire on a hill has five members, and its key notion, pervasion, is the universal connection the Cārvākas doubted.
      </p>
      <p>
        Next, Nyāya inference: the five-membered argument, how pervasion is established, the fallacies of the reason, and how
        this logic compares with Aristotle&rsquo;s syllogism.
      </p>
    </>
  ),
};
