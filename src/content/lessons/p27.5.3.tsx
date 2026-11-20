import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EasyOntologyViz } from "@/components/viz/EasyOntologyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.5.3",
  minutes: 90,
  links: {
    revisits: ["p27.5.2", "p27.5.1", "p27.1.1"],
    foreshadows: ["p29.4.1", "p28.1.1", "p32.1.1"],
  },

  puzzle: (
    <>
      <p>
        Philosophers have argued for more than two thousand years about whether numbers exist. Meanwhile a child who knows
        that there are eight planets can infer that the number of planets is eight, and so that there is a number. Has the
        child settled in a minute what Plato and his successors could not?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a chain of reasoning and step through it, from an everyday truth to an existence claim.</p>
      <EasyOntologyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="deflationism about ontology">
        <p>
          <strong>Deflationism</strong> holds that existence questions are not deep. Either they are answered by trivial
          means, or they turn on a choice of words, or they have no answer. Its forms include Carnap&rsquo;s
          internal–external distinction, Hirsch&rsquo;s quantifier variance, and the easy ontology of Amie Thomasson.
        </p>
      </Definition>

      <Definition title="easy ontology">
        <p>
          Thomasson (2015) argues that each general term has <strong>application conditions</strong>, rules of use that
          say when it applies. If the conditions for &lsquo;table&rsquo; are met wherever particles are arranged
          table-wise, then &lsquo;there is a table&rsquo; follows analytically from a truth the nihilist accepts. Existence
          questions are then easy, answered by conceptual competence plus ordinary observation, or else ill-formed.
        </p>
      </Definition>

      <Example title="neo-Fregean numbers">
        <p>
          Bob Hale and Crispin Wright take <strong>Hume&rsquo;s principle</strong> as a definition: the number of Fs is
          the number of Gs exactly when the Fs and the Gs can be paired off one to one. With logic, it yields the existence
          of numbers and all of arithmetic, as Frege showed, starting from facts about pairing.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          The <strong>bad company</strong> objection: some principles of the same form, like Frege&rsquo;s Basic Law V,
          are inconsistent, so a definition does not guarantee that its terms refer. Sider replies that a joint-carving
          quantifier, &lsquo;ontologese&rsquo;, makes existence questions hard again. Jonathan Schaffer accepts that
          existence is easy but moves the deep questions to grounding: tables exist, but what grounds what is the real
          business of metaphysics.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "easy",
      rung: "check",
      prompt: <p>What does easy ontology claim?</p>,
      answer: { kind: "choice", options: ["Existence questions are answered by trivial inferences from uncontroversial truths, or not at all", "Nothing exists", "Only physical objects exist", "Existence questions can only be answered by science"], correct: [0] },
    },
    {
      key: "hume",
      rung: "check",
      prompt: <p>What does Hume&rsquo;s principle say?</p>,
      answer: { kind: "choice", options: ["The number of Fs equals the number of Gs exactly when the Fs and Gs can be paired one to one", "Every event has a cause", "No ought follows from an is", "Numbers are ideas in the mind"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, in the Numbers chain, what licenses the second step?</p>,
      answer: { kind: "choice", options: ["Hume’s principle", "Existential generalisation", "Observation", "The special composition question"], correct: [0] },
    },
    {
      key: "bad",
      rung: "apply",
      prompt: <p>What is the bad company objection?</p>,
      answer: { kind: "choice", options: ["Some principles of the same form, such as Basic Law V, are inconsistent", "Deflationists keep bad company with sceptics", "Hume’s principle is false of finite sets", "Numbers are not abstract"], correct: [0] },
    },
    {
      key: "schaffer",
      rung: "apply",
      prompt: <p>Where does Schaffer locate the hard questions of metaphysics?</p>,
      answer: { kind: "choice", options: ["In what grounds what, since existence is easy", "In whether anything exists", "In the meaning of the word ‘exist’", "In physics alone"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is the question whether numbers exist an easy one? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the easy argument, from a pairing fact or a count to the existence of numbers.",
          "Considers an objection, such as bad company or a heavyweight sense of ‘exist’.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If ontology is easy, what, if anything, is left for metaphysics to do?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the deflationist claim that existence questions are easy or empty.",
          "Considers a remaining task, such as grounding, conceptual analysis or choosing between frameworks.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Metaphysics asked what there is and what depends on what. Epistemology asks how we could know any of it, and what
        knowing is. A bold recent answer takes knowledge itself as the basic notion.
      </p>
      <p>Next, the course on graduate epistemology begins with knowledge as the most general factive mental state.</p>
    </>
  ),
};
