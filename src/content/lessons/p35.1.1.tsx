import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CitationTrailViz } from "@/components/viz/CitationTrailViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p35.1.1",
  minutes: 90,
  links: {
    revisits: ["p0.2.1", "p0.2.2", "p0.2.4"],
    foreshadows: ["p35.1.2", "p35.1.3", "p35.2.1"],
  },

  puzzle: (
    <>
      <p>
        You want to write about whether we can be responsible for our beliefs. A search returns hundreds of papers,
        many replying to others you have not read. You cannot read them all, and you do not yet know which matter. Where
        do you start, and how do you know when you have read enough to say something new?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Start from a recent survey, follow its references back, and see which papers you reach.</p>
      <CitationTrailViz />
    </>
  ),

  theory: (
    <>
      <Definition title="a literature">
        <p>
          A <strong>literature</strong> is the body of published work on a question: books, journal articles and
          encyclopaedia entries that respond to one another. To contribute, you must know its main positions, its central
          arguments and where it currently stands. Good entry points are the <em>Stanford Encyclopedia of Philosophy</em>,
          the <em>Internet Encyclopedia of Philosophy</em>, survey articles in journals such as <em>Philosophy Compass</em>,
          and PhilPapers, which indexes most of the field by topic.
        </p>
      </Definition>

      <Definition title="searching backwards and forwards">
        <p>
          <strong>Backward searching</strong> follows the references of a good recent source to the work it builds on;
          papers that many others cite are the anchors of the debate. <strong>Forward searching</strong> uses a citation
          index, such as Google Scholar&rsquo;s &ldquo;cited by&rdquo;, to find later work replying to a classic. Together
          they reveal the shape of a conversation. When new sources keep citing papers you already know, you are near{" "}
          <strong>saturation</strong>.
        </p>
      </Definition>

      <Example title="reading in passes">
        <p>
          Not every paper deserves the same attention. A first pass reads the abstract, introduction and conclusion to find
          the thesis and decide whether the paper matters to you. A second pass reconstructs the main argument, premise by
          premise. Only the handful of papers central to your question deserve a third, slow and charitable reading, in
          which you look for the strongest version of the view and the weakest point in it.
        </p>
      </Example>

      <Remark title="notes that will help later">
        <p>
          For every paper, record the full reference, its thesis in one sentence, its main argument, whom it responds to,
          and your own reaction, kept clearly separate from the author&rsquo;s claims. A single document or reference
          manager with these notes saves weeks later, and the reactions are often where a thesis begins.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "start",
      rung: "check",
      prompt: <p>What is usually the best place to start reading on a new philosophical topic?</p>,
      answer: { kind: "choice", options: ["A recent survey or encyclopaedia entry", "The newest paper you can find", "A random book from the library", "A social media thread"], correct: [0] },
    },
    {
      key: "forward",
      rung: "check",
      prompt: <p>What is forward searching?</p>,
      answer: { kind: "choice", options: ["Finding later work that cites a given paper", "Reading a paper from the end", "Following a paper’s own references", "Guessing future debates"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, go two steps back through the references. How many papers have you found?</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "anchor",
      rung: "apply",
      prompt: <p>A paper is cited by almost everything else you read. What should you do?</p>,
      answer: { kind: "choice", options: ["Read it closely: it anchors the debate", "Skip it, since everyone has already discussed it", "Cite it without reading it", "Read only its abstract"], correct: [0] },
    },
    {
      key: "satur",
      rung: "apply",
      prompt: <p>Which is a sign that you have read enough to begin writing?</p>,
      answer: { kind: "choice", options: ["New sources keep citing papers you already know", "You have read exactly one hundred papers", "You agree with everything you have read", "You have found no disagreement at all"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Choose a topic you care about. Name one source you would start from, and say in a sentence or two why.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Names a topic and a plausible starting source, such as an encyclopaedia entry or survey.",
          "Gives a reason the source is a good entry point.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why keep your own reactions separate from your summary of a paper?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the risk of misattributing views to an author.",
          "Notes that one’s reactions are a source of original ideas.",
          "Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Reading tells you who said what. To see where you can contribute, you need a map: which claims are in tension,
        which positions resolve the tension in which way, and where the open ground lies.
      </p>
      <p>Next, mapping a debate.</p>
    </>
  ),
};
