import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["spectator view", "Dewey's view"];
const ITEMS: SortItem[] = [
  {
    text: "Knowing is like looking: the mind passively records a reality that is already fixed.",
    cat: "spectator view",
    why: "Dewey’s name for the tradition from Plato to Descartes: knowledge as contemplation.",
  },
  {
    text: "Knowing is a kind of doing: inquiry transforms a troubled situation into a settled one.",
    cat: "Dewey's view",
    why: "Inquiry begins in a problematic situation and ends when action can go on again.",
  },
  {
    text: "Certainty is the goal, and only the unchanging is fully real.",
    cat: "spectator view",
    why: "The quest for certainty, Dewey argued, made philosophy flee from the changing world of practice.",
  },
  {
    text: "Ideas are tools, judged by how well they resolve the problems that prompted them.",
    cat: "Dewey's view",
    why: "Dewey called his version of pragmatism instrumentalism.",
  },
  {
    text: "Pupils sit in rows and absorb facts from the teacher and the textbook.",
    cat: "spectator view",
    why: "Passive learning matches a passive theory of knowledge. Dewey thought it produced inert, unused knowledge.",
  },
  {
    text: "Pupils learn arithmetic by planning the costs of a real school garden.",
    cat: "Dewey's view",
    why: "Learning by doing: subject matter grows out of experience and returns to it.",
  },
  {
    text: "Values are settled in advance, and ethics only applies them.",
    cat: "spectator view",
    why: "For Dewey moral principles are hypotheses, tested and revised in the consequences of acting on them.",
  },
];

export const lesson: LessonContent = {
  id: "p9.7.3",
  minutes: 80,
  links: {
    revisits: ["p9.7.2", "p9.1.4", "p9.7.1"],
    foreshadows: ["p14.4.2", "p10.2.3", "p16.1.2"],
  },

  puzzle: (
    <>
      <p>
        John Dewey lived from the year Darwin published the Origin of Species to the Korean War. He wrote on logic, ethics,
        art, religion and politics, founded a laboratory school in Chicago, and helped found the American Civil Liberties Union.
        Behind it all was one idea: philosophy should stop asking how a mind can mirror the world and ask how intelligent
        action can improve it.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each claim by whether it belongs to the spectator theory Dewey attacked, or to his own view.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="The spectator view, or Dewey's?" />
    </>
  ),

  theory: (
    <>
      <Definition title="inquiry">
        <p>
          &ldquo;Inquiry is the controlled or directed transformation of an indeterminate situation into one that is so
          determinate in its constituent distinctions and relations as to convert the elements of the original situation into
          a unified whole.&rdquo; (Logic: The Theory of Inquiry, 1938.) Inquiry starts with a felt difficulty, defines the
          problem, proposes hypotheses, reasons out their consequences, and tests them in action.
        </p>
      </Definition>

      <Example title="against the quest for certainty">
        <p>
          In The Quest for Certainty (1929), Dewey argues that philosophy has sought a realm of fixed truths to escape the
          risks of practical life. The experimental sciences show a better way: knowledge grows by intervening in the world and
          watching what happens. Truth is better called warranted assertibility, the status a claim earns through inquiry.
        </p>
      </Example>

      <Example title="education">
        <p>
          In Democracy and Education (1916), learning is continuous with experience. The school should be a community where
          children pursue real problems together, not a place to receive finished results. Critics have blamed progressive
          education for neglecting knowledge; Dewey himself warned against mere activity without growth in understanding.
        </p>
      </Example>

      <Remark title="democracy as a way of life">
        <p>
          For Dewey, democracy is more than a system of voting: it is &ldquo;a mode of associated living, of conjoint
          communicated experience&rdquo;, in which people treat shared problems as matters for cooperative inquiry. This idea
          influenced later theories of deliberative democracy, and through B. R. Ambedkar, his student at Columbia, the
          thinking of the framer of India&rsquo;s constitution.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "spec",
      rung: "check",
      prompt: <p>What is the spectator theory of knowledge, which Dewey rejected?</p>,
      answer: {
        kind: "choice",
        options: [
          "That knowing is passive observation of a fixed reality.",
          "That knowledge comes from watching sports.",
          "That only scientists know anything.",
          "That knowledge is impossible.",
        ],
        correct: [0],
      },
    },
    {
      key: "instr",
      rung: "check",
      prompt: <p>What name did Dewey give to his view that ideas are tools for solving problems?</p>,
      answer: { kind: "choice", options: ["Instrumentalism", "Perspectivism", "Idealism", "Positivism"], correct: [0] },
    },
    {
      key: "start",
      rung: "apply",
      prompt: <p>According to Dewey, where does inquiry begin?</p>,
      answer: {
        kind: "choice",
        options: [
          "With universal doubt.",
          "With an indeterminate, troubled situation that blocks action.",
          "With self-evident axioms.",
          "With revelation.",
        ],
        correct: [1],
      },
    },
    {
      key: "warrant",
      rung: "apply",
      prompt: <p>What term did Dewey prefer to truth for the status of a well-tested claim?</p>,
      answer: { kind: "choice", options: ["Certainty", "Warranted assertibility", "Clear and distinct", "Coherence"], correct: [1] },
    },
    {
      key: "demo",
      rung: "apply",
      prompt: <p>Which statement fits Dewey&rsquo;s view of democracy?</p>,
      answer: {
        kind: "choice",
        options: [
          "Democracy is simply majority voting.",
          "Democracy is a way of associated living in which shared problems are met by cooperative inquiry.",
          "Democracy should be replaced by rule of experts.",
          "Democracy is a fixed set of institutions.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the spectator theory of knowledge really mistaken? Argue briefly, with an example.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the spectator theory and Dewey's alternative.",
          "Tests them on an example, such as astronomy, where we cannot intervene, or laboratory science, where we do.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "school",
      rung: "stretch",
      prompt: <p>Design one lesson for any subject that Dewey would approve of, and say what could go wrong with it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes a lesson that starts from a real problem and involves active inquiry.",
          "Explains why it fits Dewey's view of learning.",
          "Names a risk, such as activity without understanding. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Dewey's account of inquiry, his attack on the spectator theory and the quest for certainty, warranted assertibility, his philosophy of education, and his idea of democracy as a way of life.",

  glimpse: (
    <p>
      This completes Nineteenth-Century Philosophy. Political philosophy returns to Dewey in theories of deliberative
      democracy, epistemology weighs coherentism, and philosophy of science studies hypothesis testing.
    </p>
  ),
};
