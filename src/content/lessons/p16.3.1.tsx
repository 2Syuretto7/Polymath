import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ParadigmViz } from "@/components/viz/ParadigmViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.3.1",
  minutes: 85,
  links: {
    revisits: ["p16.2.1", "p16.1.3", "p16.2.2"],
    foreshadows: ["p16.3.2", "p16.3.3", "p16.6.1"],
  },

  puzzle: (
    <>
      <p>
        Textbooks tell the history of science as steady progress: each generation adds facts and corrects errors. Yet
        scientists after a revolution often seem to live in a different world from those before it, using the same words,
        &ldquo;mass&rdquo; or &ldquo;planet&rdquo;, for different things. Is the history of science really cumulative?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Work through puzzles in a paradigm, watch anomalies pile up, and decide when to change paradigms.</p>
      <ParadigmViz />
    </>
  ),

  theory: (
    <>
      <Definition title="paradigms and normal science">
        <p>
          In <em>The Structure of Scientific Revolutions</em> (1962), Thomas Kuhn described mature science as governed by a{" "}
          <strong>paradigm</strong>: shared exemplary achievements, together with the laws, methods, instruments and values
          they carry. <strong>Normal science</strong> is puzzle-solving within the paradigm. It does not test the paradigm;
          when a puzzle fails, the scientist is blamed, not the theory.
        </p>
      </Definition>

      <Example title="anomaly, crisis and revolution">
        <p>
          Anomalies accumulate. Most are shelved, but some resist so long that confidence erodes, and a{" "}
          <strong>crisis</strong> sets in, during which rival frameworks are proposed and fundamentals debated. A{" "}
          <strong>revolution</strong> replaces the old paradigm with a new one, as Copernican astronomy replaced Ptolemaic,
          or Einstein&rsquo;s mechanics replaced Newton&rsquo;s. Then normal science resumes under new rules.
        </p>
      </Example>

      <Definition title="incommensurability">
        <p>
          Kuhn argued that successive paradigms are <strong>incommensurable</strong>: they lack a common measure. Key terms
          change their meaning, as &ldquo;mass&rdquo; does from Newton to Einstein; the problems counted as important change;
          and observation is shaped by theory. So the choice between paradigms cannot be settled by a neutral algorithm. Kuhn
          compared it to a gestalt switch, and to a change of political allegiance.
        </p>
      </Definition>

      <Remark title="relativism?">
        <p>
          Critics accused Kuhn of making science irrational, a matter of mob psychology. In later work Kuhn denied this. He
          listed values all scientists share, accuracy, consistency, scope, simplicity and fruitfulness, but held that they
          guide choice without dictating it, since scientists weigh them differently. He also allowed that later paradigms
          solve more puzzles, so science progresses, though not towards a final truth.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "normal",
      rung: "check",
      prompt: <p>What is normal science, for Kuhn?</p>,
      answer: {
        kind: "choice",
        options: ["Puzzle-solving within an accepted paradigm", "Trying to refute the paradigm", "Science done by ordinary people", "Collecting data without theory"],
        correct: [0],
      },
    },
    {
      key: "incomm",
      rung: "check",
      prompt: <p>What does it mean to say two paradigms are incommensurable?</p>,
      answer: {
        kind: "choice",
        options: [
          "They lack a common measure, so no neutral algorithm decides between them",
          "One is simply false",
          "They make the same predictions",
          "They cannot both be taught",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what happens to a paradigm during normal science when a puzzle resists?</p>,
      answer: {
        kind: "choice",
        options: ["It is recorded as an anomaly, and the paradigm is kept", "The paradigm is rejected at once", "The puzzle is solved anyway", "The community splits"],
        correct: [0],
      },
    },
    {
      key: "popper",
      rung: "apply",
      prompt: <p>How does Kuhn&rsquo;s account of normal science conflict with Popper&rsquo;s?</p>,
      answer: {
        kind: "choice",
        options: [
          "Normal scientists do not try to refute their basic theory, and failures are blamed on the scientist.",
          "Kuhn thinks science never changes.",
          "Kuhn denies there are experiments.",
          "Popper thinks paradigms are incommensurable.",
        ],
        correct: [0],
      },
    },
    {
      key: "values",
      rung: "apply",
      prompt: <p>Which of these is one of the shared values Kuhn listed for theory choice?</p>,
      answer: { kind: "choice", options: ["Fruitfulness", "Popularity", "Age", "Elegance of the author’s prose"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does incommensurability make the choice between paradigms irrational? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains incommensurability: changes of meaning, problems and standards.",
          "Considers Kuhn’s reply that shared values guide choice without dictating it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If &ldquo;mass&rdquo; means something different for Newton and for Einstein, do their theories even contradict each other? What do you think?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how a change of meaning would mean the two theories talk past each other.",
          "Considers a response, such as shared reference despite different descriptions, or overlap in predictions.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kuhn's paradigms and normal science, the cycle of anomaly, crisis and revolution, incommensurability, and why critics worried that Kuhn made science irrational.",

  glimpse: (
    <p>
      Next, Lakatos tries to reconcile Popper&rsquo;s rationality with Kuhn&rsquo;s history, and Feyerabend argues that no
      method fits it at all. Later, the debate over scientific realism asks whether science gets closer to the truth.
    </p>
  ),
};
