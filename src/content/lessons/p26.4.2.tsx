import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { NewcombViz } from "@/components/viz/NewcombViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p26.4.2",
  minutes: 90,
  links: {
    revisits: ["p26.4.1", "p26.3.4", "p0.4.1"],
    foreshadows: ["p26.4.3", "p28.2.1", "p30.1.2"],
  },

  puzzle: (
    <>
      <p>
        Two boxes sit before you. The clear one holds $1,000. The opaque one holds $1,000,000 or nothing. Yesterday a
        predictor with an excellent record put the million in only if it predicted you would take the opaque box alone.
        You may take the opaque box, or both. The money is already there or not. Do you take one box or two?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare what each theory recommends, and see what each one holds fixed.</p>
      <NewcombViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the problem">
        <p>
          The physicist William Newcomb devised the case; Robert Nozick published it in 1969, reporting that almost everyone
          finds the answer obvious, but people split almost evenly on which answer is obvious.
        </p>
      </Definition>

      <Definition title="evidential decision theory">
        <p>
          Evidential decision theory weighs each outcome by P(state | act), the probability of the state given that you
          perform the act. Taking one box is strong evidence that the million is there. With accuracy 0.9, one box has
          expected value $900,000 and two boxes $101,000. EDT recommends one box.
        </p>
      </Definition>

      <Definition title="causal decision theory">
        <p>
          Causal decision theory, developed by Gibbard, Harper, Lewis and Skyrms, weighs outcomes by how likely your act is
          to bring them about, often using counterfactuals: if I were to take both, what would happen? The contents are
          fixed, so in either state two boxes yield $1,000 more. Two-boxing dominates, and CDT recommends it.
        </p>
      </Definition>

      <Theorem title="the arguments">
        <ul>
          <li><strong>&lsquo;Why ain&rsquo;cha rich?&rsquo;</strong> One-boxers predictably walk away millionaires; two-boxers predictably do not.</li>
          <li><strong>Dominance.</strong> Whatever is in the box, taking the extra $1,000 leaves you better off. The predictor rewards a disposition, and you cannot change the past by choosing now.</li>
          <li><strong>Medical Newcomb cases.</strong> If a gene causes both smoking and cancer, but smoking itself is harmless, EDT seems to advise against smoking because smoking is evidence of the gene. That looks absurd, which supports CDT.</li>
        </ul>
      </Theorem>

      <Example title="replies">
        <p>
          Ellery Eells&rsquo;s tickle defence says a rational agent who knows their own beliefs and desires screens off the
          evidential link, so EDT also two-boxes in the medical cases. Others defend one-boxing by appeal to
          policies: functional decision theory asks which decision procedure, not which act, does best.
        </p>
      </Example>

      <Remark title="what is at stake">
        <p>
          Newcomb&rsquo;s problem shows that expected utility theory is incomplete until we say which probabilities to use.
          Similar structures appear in the prisoner&rsquo;s dilemma played against a twin, and in debates over free will and
          the fixity of the past.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "edt",
      rung: "check",
      prompt: <p>Which probabilities does evidential decision theory use?</p>,
      answer: { kind: "choice", options: ["P(state | act)", "Unconditional probabilities of states fixed independently of the act", "Equal probabilities for all states", "None"], correct: [0] },
    },
    {
      key: "cdt",
      rung: "check",
      prompt: <p>What does causal decision theory recommend in Newcomb&rsquo;s problem?</p>,
      answer: { kind: "choice", options: ["Take both boxes", "Take one box", "Randomise", "Refuse to choose"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, in evidential mode with accuracy 99%, what is the expected value of one-boxing in dollars?</p>,
      answer: { kind: "numeric", value: 990000, tolerance: 0 },
    },
    {
      key: "break",
      rung: "apply",
      prompt: <p>Above what predictor accuracy, in percent, does EDT recommend one box? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 50.05, tolerance: 0.01 },
    },
    {
      key: "medical",
      rung: "apply",
      prompt: <p>Why are medical Newcomb cases thought to favour causal decision theory?</p>,
      answer: { kind: "choice", options: ["EDT seems to advise against a harmless act merely because it is evidence of a bad cause", "They involve perfect predictors", "They show dominance always fails", "They concern money"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>One box or two? Give your strongest argument.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a choice and the main argument for it, such as dominance or ‘why ain’cha rich?’.",
          "Considers the strongest argument on the other side.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If the predictor were infallible, would that change your answer?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that with an infallible predictor two-boxers never find the million.",
          "Discusses whether this changes the dominance reasoning, or whether infallibility is coherent with free choice.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        In Newcomb&rsquo;s problem the predictor was a fixed feature of the world. When the other party is also an agent
        choosing in light of what you will do, decision theory becomes game theory.
      </p>
      <p>Next, game theory for philosophers.</p>
    </>
  ),
};
