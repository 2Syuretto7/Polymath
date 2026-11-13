import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DeliberationViz } from "@/components/viz/DeliberationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p14.4.2",
  minutes: 80,
  links: {
    revisits: ["p14.4.1", "p14.1.3", "p14.3.3"],
    foreshadows: ["p14.4.3", "p14.5.2", "p26.4.4"],
  },

  puzzle: (
    <>
      <p>
        If democracy is just counting votes, citizens never need to talk to each other: they could each press a button at
        home. Yet we think something is missing from a democracy without debate, newspapers and public argument. What does
        discussion add that counting does not?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the majority verdicts before and after deliberation, and try changing a group&rsquo;s ranking.</p>
      <DeliberationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="deliberative democracy">
        <p>
          Democratic legitimacy comes from free and equal citizens reasoning together, exchanging reasons that others can
          accept, rather than from the mere aggregation of private preferences. Voting still happens, but it follows
          deliberation, in which preferences can change.
        </p>
      </Definition>

      <Example title="Habermas and Cohen">
        <p>
          Jürgen Habermas grounded legitimacy in the ideal speech situation and &ldquo;the unforced force of the better
          argument&rdquo;: norms are valid if all affected could agree to them in rational discourse. Joshua Cohen described an
          ideal deliberative procedure: free, reasoned, among equals, aiming at consensus. Rawls&rsquo;s idea of public reason
          asks citizens to justify basic laws in terms all reasonable citizens can accept.
        </p>
      </Example>

      <Remark title="deliberation and social choice">
        <p>
          Social choice theory shows that majority voting can cycle, so the outcome may depend on the order of votes. John
          Dryzek and Christian List argued that deliberation can help by bringing citizens to agree on the dimension of the
          issue, making preferences single-peaked, which guarantees a majority winner. Citizens&rsquo; assemblies and
          deliberative polls, such as those of James Fishkin, test these ideas in practice.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Iris Marion Young argued that norms of calm, reasoned argument can privilege the educated and the powerful, and
          proposed including greeting, rhetoric and storytelling. Others warn that discussion can polarise groups, as Cass
          Sunstein found, or that deliberation takes time most citizens lack.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>On deliberative democracy, where does legitimacy come from?</p>,
      answer: {
        kind: "choice",
        options: [
          "Reasoned discussion among free and equal citizens.",
          "Counting private preferences only.",
          "The decisions of experts.",
          "Tradition.",
        ],
        correct: [0],
      },
    },
    {
      key: "hab",
      rung: "check",
      prompt: <p>Which phrase is associated with Habermas?</p>,
      answer: { kind: "choice", options: ["The unforced force of the better argument", "The veil of ignorance", "The general will", "The invisible hand"], correct: [0] },
    },
    {
      key: "cycle",
      rung: "apply",
      prompt: <p>In the before-deliberation preset, why is there no majority winner?</p>,
      answer: {
        kind: "choice",
        options: [
          "Majorities prefer A to B, B to C and C to A: a cycle.",
          "Because the groups are unequal.",
          "Because everyone prefers B.",
          "Because there is a tie in every vote.",
        ],
        correct: [0],
      },
    },
    {
      key: "sp",
      rung: "apply",
      prompt: <p>With options ordered A, B, C along one dimension, which ranking breaks single-peakedness?</p>,
      answer: { kind: "choice", options: ["C > A > B", "A > B > C", "B > C > A", "C > B > A"], correct: [0] },
    },
    {
      key: "young",
      rung: "apply",
      prompt: <p>What was Young&rsquo;s criticism of deliberative norms?</p>,
      answer: {
        kind: "choice",
        options: [
          "Norms of dispassionate argument can privilege the already powerful, so other forms of communication should count.",
          "Deliberation is too fast.",
          "Only experts should deliberate.",
          "Voting is unnecessary.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is a decision more legitimate if it follows public deliberation than if it follows a simple vote? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the deliberative view and what discussion adds.",
          "Considers an objection, such as exclusion, polarisation or cost.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "assembly",
      rung: "stretch",
      prompt: <p>Should randomly selected citizens&rsquo; assemblies make some decisions in place of elected representatives?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the deliberative case for assemblies chosen by lot.",
          "Considers an objection, such as accountability or the legitimacy of unelected bodies.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how deliberative democracy differs from aggregation, the ideas of Habermas, Cohen and public reason, how deliberation can remove majority cycles, and Young's criticism.",

  glimpse: (
    <p>
      The next lesson asks whether democracy tends to get the right answers, using Condorcet&rsquo;s jury theorem. Social
      choice theory and Arrow&rsquo;s theorem later show the limits of every voting rule.
    </p>
  ),
};
