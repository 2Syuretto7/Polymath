import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PaperBudgetViz } from "@/components/viz/PaperBudgetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p35.2.1",
  minutes: 90,
  links: {
    revisits: ["p35.1.3", "p0.3.1", "p0.3.3"],
    foreshadows: ["p35.2.2", "p35.2.3", "p35.3.1"],
  },

  puzzle: (
    <>
      <p>
        A student essay asks you to discuss a question. A research paper asks more: to say something others in the field
        have not said, and to persuade them of it. What changes when the reader is not a teacher checking understanding but
        a sceptical expert deciding whether your argument is worth taking seriously?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set the length of the paper, choose a section, and see how many words it deserves.</p>
      <PaperBudgetViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the shape of a paper">
        <p>
          A philosophy research paper defends one thesis. Its <strong>introduction</strong> states the question, the
          thesis and the route. A short <strong>background</strong> section sets out only the parts of the literature the
          argument needs. The <strong>argument</strong> gives the positive case, with premises stated explicitly. A
          section of <strong>objections and replies</strong> raises the strongest challenges and answers them. The{" "}
          <strong>conclusion</strong> says what has been shown and what remains open.
        </p>
      </Definition>

      <Definition title="signposting and precision">
        <p>
          Readers should never wonder where they are. Say at the start what you will argue and how; say at each step what
          the step is for. Define technical terms once and use them consistently. Prefer plain, exact sentences to
          ornament: in philosophy, clarity is not a matter of style but of making the argument assessable.
        </p>
      </Definition>

      <Example title="the strongest objection">
        <p>
          The objections section is where papers succeed or fail. Choose the objection that a well-informed opponent would
          actually press, state it in its strongest form, and answer it directly. If you can only partly answer it, say so,
          and show what your thesis still achieves. Readers trust a paper that faces its hardest critic more than one that
          defeats only weak ones.
        </p>
      </Example>

      <Remark title="citation and honesty">
        <p>
          Cite every source you draw on, including for ideas you paraphrase, using one consistent style. Distinguish what
          others have argued from what you argue. Quote sparingly, and only when the exact words matter. A clear statement
          of whose view is whose is part of what makes a contribution visible.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "one",
      rung: "check",
      prompt: <p>How many central theses should a research paper defend?</p>,
      answer: { kind: "choice", options: ["One", "As many as possible", "None: it should only survey", "Exactly five"], correct: [0] },
    },
    {
      key: "bg",
      rung: "check",
      prompt: <p>What belongs in the background section?</p>,
      answer: { kind: "choice", options: ["Only the parts of the literature the argument needs", "A complete history of the topic", "Your personal biography", "Every paper you read"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the length to 8,000 words. About how many words go to objections and replies?</p>,
      answer: { kind: "numeric", value: 2000, tolerance: 0 },
    },
    {
      key: "obj",
      rung: "apply",
      prompt: <p>Which objection should a paper answer?</p>,
      answer: { kind: "choice", options: ["The strongest one a well-informed opponent would press", "The weakest one, since it is easiest to defeat", "None, to save space", "Only objections from non-philosophers"], correct: [0] },
    },
    {
      key: "sign",
      rung: "apply",
      prompt: <p>What is signposting?</p>,
      answer: { kind: "choice", options: ["Telling the reader what you will argue and what each step is for", "Adding pictures to the paper", "Putting the title on every page", "Citing many sources"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Using your working thesis, write a two-sentence opening that states the question and your answer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a question clearly.",
          "States a thesis that answers it.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>What is the strongest objection to your thesis, in one or two sentences?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States an objection that bears directly on the thesis.",
          "Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A draft is only the start. Before publication, papers face referees who look for every weakness. Here, the referee
        is Parton, and its reports are meant to make your argument stronger.
      </p>
      <p>Next, Parton as referee.</p>
    </>
  ),
};
