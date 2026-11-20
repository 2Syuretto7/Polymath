import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ThesisPlanViz } from "@/components/viz/ThesisPlanViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p35.3.1",
  minutes: 90,
  links: {
    revisits: ["p35.2.3", "p35.1.3", "p0.3.1"],
    foreshadows: ["p35.1.1", "p35.1.2", "p35.2.2"],
  },

  puzzle: (
    <>
      <p>
        Fifteen thousand words is about the length of five long papers. A thesis of that length cannot be written in one
        sitting, or even in one month, and it cannot be a string of separate essays. How do you plan a single sustained
        argument, write it chapter by chapter, and then defend it against the hardest objections you can find?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose how many chapters to write and how fast, and see the plan that results.</p>
      <ThesisPlanViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the shape of a thesis">
        <p>
          A thesis defends one central claim through several chapters, each doing a distinct job. A common shape is: an
          introduction that states the question, the thesis and the plan; a chapter setting out the debate and the view to
          be defended; one or two chapters giving the main argument; a chapter on objections; and a conclusion that says
          what has been shown and what remains open. The chapters should be linked: each should end by saying what the
          next must do.
        </p>
      </Definition>

      <Definition title="writing chapter by chapter">
        <p>
          Begin with a one-page plan: the thesis in one sentence, and one sentence for the job of each chapter. Draft the
          central argument first, since everything else depends on it, and write the introduction last, when you know what
          the thesis actually argues. Treat each chapter as a research paper: draft it, have it refereed, and revise it
          before moving on, keeping a running list of changes the later chapters will need.
        </p>
      </Definition>

      <Example title="the defence">
        <p>
          A <strong>defence</strong>, or viva, is an oral examination in which examiners press the thesis&rsquo;s weakest
          points. Prepare by listing the five hardest objections you can think of, and writing a short reply to each. Use
          the Ask Parton panel to rehearse: state your thesis, ask for the strongest objection, reply, and ask for the next.
          The practice questions below are a small version of the same exercise, and Parton marks your written replies.
        </p>
      </Example>

      <Remark title="finishing">
        <p>
          A thesis is finished, not perfected. When every chapter does its job, the objections are faced, and the argument
          reads as one, stop. What you have learned along the way, how to read a literature, find a question, build an
          argument and revise it under criticism, is the real result, and it is yours for every question you take up next.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "one",
      rung: "check",
      prompt: <p>What should hold a thesis together?</p>,
      answer: { kind: "choice", options: ["One central claim, defended across linked chapters", "A different topic in each chapter", "A long list of quotations", "Its length"], correct: [0] },
    },
    {
      key: "intro",
      rung: "check",
      prompt: <p>When is it usually best to write the introduction?</p>,
      answer: { kind: "choice", options: ["Last, once you know what the thesis actually argues", "First, and never revise it", "Never", "Halfway through"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the pace to 1,500 words per week. How many weeks does a first draft take?</p>,
      answer: { kind: "numeric", value: 10, tolerance: 0 },
    },
    {
      key: "first",
      rung: "apply",
      prompt: <p>Which chapter is it usually wise to draft first?</p>,
      answer: { kind: "choice", options: ["The chapter with the central argument", "The conclusion", "The acknowledgements", "The bibliography"], correct: [0] },
    },
    {
      key: "viva",
      rung: "apply",
      prompt: <p>What is the best preparation for a defence?</p>,
      answer: { kind: "choice", options: ["Listing the hardest objections and rehearsing short replies to each", "Memorising the thesis word for word", "Avoiding thinking about objections", "Adding more chapters"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>State your thesis in one sentence, then answer the hardest objection to it in two or three sentences.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a thesis.",
          "States an objection to it.",
          "Gives a reply that addresses the objection.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Write the one-sentence job of each chapter in your planned thesis.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives a short plan of chapters, each with a purpose.",
          "Any reasonable plan earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        This is the last lesson of the curriculum. Every course, in mathematics and in philosophy, is now complete. What
        remains is to keep reviewing what you have learned, and to keep asking questions of your own.
      </p>
      <p>Next, return to any course on the map, or begin your own research.</p>
    </>
  ),
};
