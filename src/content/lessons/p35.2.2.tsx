import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RefereeReportViz } from "@/components/viz/RefereeReportViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p35.2.2",
  minutes: 90,
  links: {
    revisits: ["p35.2.1", "p0.3.3", "p0.4.2"],
    foreshadows: ["p35.2.3", "p35.3.1", "p35.1.2"],
  },

  puzzle: (
    <>
      <p>
        You have written a draft, and you think it works. But you are the worst person to judge: you know what you meant,
        so you read it in. Journals send every paper to referees, experts who look for every weakness before it is
        published. How do you get that kind of scrutiny for your own work, and how do you read a hard report without
        losing heart?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a draft, and read the referee&rsquo;s verdict on it.</p>
      <RefereeReportViz />
    </>
  ),

  theory: (
    <>
      <Definition title="peer review">
        <p>
          In <strong>peer review</strong>, an editor sends a submitted paper to one or more referees, usually anonymously.
          Each writes a <strong>report</strong>: a short summary showing they have understood the paper, the major problems
          that must be fixed, minor points, and a recommendation: accept, minor revisions, major revisions or reject. Most
          papers in philosophy are rejected or sent back for revision at least once; a revise-and-resubmit verdict is good
          news.
        </p>
      </Definition>

      <Definition title="what referees look for">
        <p>
          Referees ask whether the paper has a clear thesis, whether the argument is valid and its premises plausible,
          whether it engages the relevant literature fairly, whether it faces the strongest objections, and whether it
          contributes something new. A paper can fail on any one: a brilliant argument that ignores the obvious objection
          will not be accepted.
        </p>
      </Definition>

      <Example title="Parton as your referee">
        <p>
          On every lesson page, the Ask Parton panel lets you discuss what you are writing. Paste a paragraph of your
          argument and ask Parton to act as a referee: to summarise it back to you, name its weakest premise, and give the
          strongest objection a critic would raise. If its summary misses your point, your writing is not yet clear. When
          you submit a written practice answer, Parton marks it against a short checklist and tells you which parts are
          complete and what is missing.
        </p>
      </Example>

      <Remark title="reading a report well">
        <p>
          Read a report once, put it aside for a day, then read it again. Sort the comments into those that show a real
          flaw, those that show a misunderstanding, and those you disagree with. A misunderstanding is still information:
          if a careful reader misread you, others will too. Thank referees for their time, even when you think they are
          wrong, and answer every point.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "report",
      rung: "check",
      prompt: <p>What does a referee report usually contain?</p>,
      answer: { kind: "choice", options: ["A summary, major problems, minor points and a recommendation", "Only a grade out of ten", "A rewritten version of the paper", "Praise for the author"], correct: [0] },
    },
    {
      key: "rr",
      rung: "check",
      prompt: <p>How should you take a verdict of major revisions?</p>,
      answer: { kind: "choice", options: ["As good news: the paper can be accepted if the problems are fixed", "As a final rejection", "As a sign to abandon the topic", "As meaning no changes are needed"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what recommendation does Draft C receive?</p>,
      answer: { kind: "choice", options: ["Major revisions", "Accept", "Minor revisions", "Reject"], correct: [0] },
    },
    {
      key: "summary",
      rung: "apply",
      prompt: <p>You ask Parton to summarise your paragraph, and the summary misses your main point. What does that suggest?</p>,
      answer: { kind: "choice", options: ["The paragraph is not yet clear enough", "Parton is always wrong", "The point is too obvious to state", "The paragraph should be longer"], correct: [0] },
    },
    {
      key: "misread",
      rung: "apply",
      prompt: <p>A referee has misunderstood your argument. What is the best response?</p>,
      answer: { kind: "choice", options: ["Rewrite the passage so that careful readers cannot misread it", "Ignore the comment", "Complain to the editor", "Withdraw the paper"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Write the main comment a referee might make on your own working thesis, in one or two sentences.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies a specific weakness, objection or gap in a thesis.",
          "Says what would improve it.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why might a report you disagree with still be useful?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that disagreement can reveal unclear writing or an unanswered objection.",
          "Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A report in hand, you must decide what to change. Some objections should be rebutted, some should narrow your
        thesis, and some should be accepted outright.
      </p>
      <p>Next, revising after objections.</p>
    </>
  ),
};
