import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Christianity promises an eternal happiness that depends on a historical fact: that God appeared in time, in a particular man.",
    kind: "premise",
    note: "Johannes Climacus, Kierkegaard's pseudonym in the Philosophical Fragments and the Postscript, poses Lessing's question: can an eternal happiness be built on historical knowledge?",
  },
  {
    claim: "Historical knowledge is never more than an approximation.",
    kind: "premise",
    note: "Scholarship can make a historical claim more or less probable, but never certain, and it can always be revised by new research.",
    objection: "A historian: we are certain enough of many past events, such as the existence of Julius Caesar, to stake our lives on them.",
  },
  {
    claim: "An infinite, passionate concern for one's eternal happiness cannot rest on an approximation.",
    kind: "premise",
    note: "Waiting for the scholars to finish would postpone the decision forever. Faith cannot be a probability judgement.",
    objection: "Why not? We rest important decisions on probabilities all the time. Climacus answers that an absolute commitment differs in kind from a prudent bet.",
  },
  {
    claim: "Moreover, the God in time is an absolute paradox: the eternal becoming temporal, which reason cannot comprehend.",
    kind: "premise",
    note: "Reason meets the paradox and either takes offence or steps aside. Even a contemporary of Jesus had no advantage: seeing a man is not seeing God.",
    objection: "Hegelians: the incarnation is the highest expression of the unity of the divine and the human, which reason can grasp.",
  },
  {
    claim: "So faith is not a result of reasoning or evidence, but a passionate decision in the face of the absurd.",
    kind: "conclusion",
    note: "Faith believes by virtue of the absurd. It is a leap, renewed in every moment, made with full awareness of the uncertainty.",
    objection: "Critics ask whether a faith independent of reasons can be distinguished from arbitrary commitment, or from fanaticism.",
  },
];

export const lesson: LessonContent = {
  id: "p9.4.2",
  minutes: 85,
  links: {
    revisits: ["p9.4.1", "p6.4.1", "p23.4.1"],
    foreshadows: ["p9.4.3", "p19.6.1", "p19.2.3"],
  },

  puzzle: (
    <>
      <p>
        Medieval philosophers asked how far reason could lead towards faith. Aquinas thought it could prove that God exists,
        and that faith completed what reason began. Kierkegaard turned the question around: if faith could be proved, it
        would no longer be faith. Is a belief held against reason a failure of thinking, or the deepest form of commitment?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the argument of Johannes Climacus, and challenge each step to hear the objections.</p>
      <ArgumentStepViz steps={STEPS} title="Why faith cannot be reached by evidence" />
    </>
  ),

  theory: (
    <>
      <Definition title="the absolute paradox">
        <p>
          For Kierkegaard, the central claim of Christianity, that the eternal God existed as an individual human being in
          time, is not a mystery waiting to be explained but an <strong>absolute paradox</strong>. Reason, which seeks to
          understand, collides with something it cannot understand. The possible responses are{" "}
          <strong>offence</strong>, which rejects the paradox as foolish, and <strong>faith</strong>, which accepts it
          without understanding.
        </p>
      </Definition>

      <Definition title="infinite resignation and faith">
        <p>
          In <em>Fear and Trembling</em>, the <strong>knight of infinite resignation</strong> gives up what they love most,
          and finds peace in renouncing the finite for the eternal. The <strong>knight of faith</strong> makes the same
          movement of resignation, then a second movement: by virtue of the absurd, they receive the finite back again,
          believing that Abraham will keep Isaac. Johannes de Silentio can understand resignation; faith he can only admire.
        </p>
      </Definition>

      <Example title="the knight of faith looks like a tax collector">
        <p>
          Johannes imagines meeting a knight of faith and being disappointed: he looks just like a tax collector, enjoys his
          dinner, takes pleasure in the world. Faith does not show itself in any outward heroism. It is a wholly inward
          relation, which means no one can confirm from outside who has it.
        </p>
      </Example>

      <Remark title="fideism and its critics">
        <p>
          Kierkegaard is often called a fideist, holding that faith does not need rational support. Some readers think he
          meant only that faith outruns reason, not that it contradicts it. Camus later admired Kierkegaard&rsquo;s honesty
          about the absurd but called the leap of faith &ldquo;philosophical suicide&rdquo;, and insisted on living without
          appeal.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "paradox",
      rung: "check",
      prompt: <p>What is the absolute paradox, for Kierkegaard?</p>,
      answer: {
        kind: "choice",
        options: [
          "That God does not exist.",
          "That the eternal God existed as a human being in time.",
          "That knowledge is impossible.",
          "That ethics contradicts itself.",
        ],
        correct: [1],
      },
    },
    {
      key: "responses",
      rung: "check",
      prompt: <p>What are the two possible responses to the paradox?</p>,
      answer: { kind: "choice", options: ["Proof and disproof", "Offence and faith", "Hope and fear", "Reason and sense"], correct: [1] },
    },
    {
      key: "approx",
      rung: "apply",
      prompt: <p>Why can historical research not ground faith, according to Climacus?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because historians are dishonest.",
          "Because historical knowledge is always an approximation, and faith requires an infinite commitment.",
          "Because the past does not exist.",
          "Because faith is about the future.",
        ],
        correct: [1],
      },
    },
    {
      key: "knights",
      rung: "apply",
      prompt: <p>What does the knight of faith do that the knight of infinite resignation does not?</p>,
      answer: {
        kind: "choice",
        options: [
          "Gives up everything.",
          "After renouncing the finite, receives it back by virtue of the absurd.",
          "Becomes a hero in the world.",
          "Refuses to renounce anything.",
        ],
        correct: [1],
      },
    },
    {
      key: "camus",
      rung: "apply",
      prompt: <p>What did Camus call the leap of faith?</p>,
      answer: { kind: "choice", options: ["Bad faith", "Philosophical suicide", "The highest wisdom", "Infinite resignation"], correct: [1] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a commitment be rational if it goes beyond the evidence? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Kierkegaard's view that faith goes beyond, or against, evidence and reason.",
          "Considers a comparison, such as trust in a friend, or Pascal's wager, or James on the will to believe.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "fanatic",
      rung: "stretch",
      prompt: <p>If faith cannot be checked from outside, how can we tell a knight of faith from a fanatic?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Kierkegaard's claim that faith is inward and outwardly invisible.",
          "Considers what might distinguish faith from fanaticism, such as humility, fear and trembling, or the absence of certainty.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kierkegaard's absolute paradox, why historical evidence cannot ground faith, the difference between infinite resignation and faith, and the objections of critics such as Camus.",

  glimpse: (
    <p>
      The next lesson explores Kierkegaard&rsquo;s claim that truth is subjectivity. The existentialists take up anxiety and
      the absurd, and Camus responds directly to the leap of faith in The Myth of Sisyphus.
    </p>
  ),
};
