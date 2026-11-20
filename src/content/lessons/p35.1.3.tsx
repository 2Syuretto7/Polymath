import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { QuestionTestViz } from "@/components/viz/QuestionTestViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p35.1.3",
  minutes: 90,
  links: {
    revisits: ["p35.1.2", "p0.1.1", "p0.3.2"],
    foreshadows: ["p35.2.1", "p35.2.2", "p35.3.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Is there free will?&rdquo; is a great question and a terrible thesis topic: whole libraries have not settled
        it, and 15,000 words cannot. &ldquo;What did Hume say about causation?&rdquo; is answerable but adds nothing new.
        Somewhere between too big and too small lies a question worth months of work. How do you find it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a candidate question, and see which tests it passes.</p>
      <QuestionTestViz />
    </>
  ),

  theory: (
    <>
      <Definition title="four tests">
        <p>
          A good thesis question is <strong>open</strong>: competent people still disagree about it. It is{" "}
          <strong>focused</strong>: it can be answered properly within the length available. It is{" "}
          <strong>anchored</strong>: there is a literature to engage with, so the work joins an existing conversation. And
          it is <strong>yours</strong>: you can see something to add, whether a new argument, a new objection, a
          distinction, a neglected connection or a fresh case.
        </p>
      </Definition>

      <Definition title="narrowing">
        <p>
          Most good questions begin too broad and are narrowed by reading. Narrow by focusing on one argument rather than a
          whole view, on one author or one exchange, or on one application. &ldquo;Is there free will?&rdquo; becomes
          &ldquo;Do Frankfurt cases show that responsibility does not need alternative possibilities?&rdquo;, and then
          perhaps &ldquo;Do Frankfurt cases survive the dilemma defence?&rdquo;
        </p>
      </Definition>

      <Example title="kinds of contribution">
        <p>
          A thesis need not overturn a field. It can defend a neglected view against a standard objection, show that two
          debates bear on each other, reveal a hidden assumption, apply a framework to a new case, or sharpen a distinction
          that dissolves a confusion. Bringing a figure such as Ambedkar or Nāgārjuna into a debate that has ignored them
          can be both original and illuminating.
        </p>
      </Example>

      <Remark title="a working thesis">
        <p>
          Write your question, and a provisional answer, in one sentence each. The answer is a <strong>working
          thesis</strong>: you should expect to revise it as you write. If you cannot yet state an answer, keep reading in
          the area the question points to; if you cannot state the question, return to your map.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "tests",
      rung: "check",
      prompt: <p>Which set lists the four tests for a thesis question?</p>,
      answer: { kind: "choice", options: ["Open, focused, anchored and yours", "Long, difficult, famous and new", "Short, settled, popular and safe", "Broad, historical, technical and final"], correct: [0] },
    },
    {
      key: "broad",
      rung: "check",
      prompt: <p>What should you usually do with a question that is too broad?</p>,
      answer: { kind: "choice", options: ["Narrow it to one argument, author, exchange or application", "Make it broader still", "Abandon philosophy", "Answer it in one paragraph"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which candidate passes all four tests?</p>,
      answer: { kind: "choice", options: ["Can Ambedkar’s idea of fraternity ground political obligation?", "What is the meaning of life?", "In what year did Kant publish the Groundwork?", "Does Frankfurt’s case refute the principle of alternative possibilities?"], correct: [0] },
    },
    {
      key: "contrib",
      rung: "apply",
      prompt: <p>Which of these counts as an original contribution in a thesis?</p>,
      answer: { kind: "choice", options: ["Defending a neglected view against a standard objection", "Summarising a famous book", "Listing every view on a topic", "Quoting authorities at length"], correct: [0] },
    },
    {
      key: "work",
      rung: "apply",
      prompt: <p>What is a working thesis?</p>,
      answer: { kind: "choice", options: ["A provisional one-sentence answer you expect to revise", "A final conclusion that must never change", "The title of the thesis", "A list of sources"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Write a question you might pursue, and a one-sentence working thesis that answers it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a focused philosophical question.",
          "Gives a one-sentence provisional answer to it.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Which of the four tests does your question pass most weakly, and how could you strengthen it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Names one of the four tests.",
          "Suggests a way to improve the question. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With a question and a working thesis, the next step is to write. A research paper is the thesis in miniature: a
        single argument, set in its literature and defended against objections.
      </p>
      <p>Next, a research paper.</p>
    </>
  ),
};
