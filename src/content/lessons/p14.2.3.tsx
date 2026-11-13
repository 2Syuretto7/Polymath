import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { WiltViz } from "@/components/viz/WiltViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p14.2.3",
  minutes: 80,
  links: {
    revisits: ["p14.2.2", "p14.1.2", "p9.5.2"],
    foreshadows: ["p14.2.4", "p14.3.1", "p14.5.1"],
  },

  puzzle: (
    <>
      <p>
        Rawls judged a distribution by its shape: how much the worst off have. Robert Nozick, his Harvard colleague, asked a
        different question: how did people come to have what they hold? If every step was fair, does the final shape matter
        at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Start from an equal distribution, let fans pay a star player to watch, and then try to restore equality.</p>
      <WiltViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the entitlement theory">
        <p>Nozick&rsquo;s theory in Anarchy, State, and Utopia (1974) has three principles.</p>
        <ul>
          <li><strong>Justice in acquisition:</strong> how unowned things may justly come to be owned.</li>
          <li><strong>Justice in transfer:</strong> how holdings may justly pass from one person to another, by gift or voluntary exchange.</li>
          <li><strong>Rectification:</strong> how to repair past violations of the first two.</li>
        </ul>
        <p>A distribution is just if everyone is entitled to what they hold under these principles, whatever its shape.</p>
      </Definition>

      <Definition title="historical and patterned principles">
        <p>
          A <strong>historical</strong> principle judges a distribution by how it came about. A <strong>patterned</strong>{" "}
          principle judges it by whether holdings match some feature, such as need, merit or equality. An{" "}
          <strong>end-state</strong> principle, like utilitarianism or the difference principle, looks only at the final
          outcome.
        </p>
      </Definition>

      <Example title="the Wilt Chamberlain argument">
        <p>
          Start with your favourite pattern, D1. A famous basketball player agrees to play if each spectator drops 25 cents
          into a box for him; a million people pay, and he ends far richer than anyone else, in D2. Everyone entered D2
          voluntarily from a just starting point. If D1 was just, how can D2 be unjust? Preserving the pattern would require
          forbidding capitalist acts between consenting adults, or continually taking holdings away.
        </p>
      </Example>

      <Remark title="taxation and the minimal state">
        <p>
          Nozick concluded that only a minimal state, limited to protection against force, theft and fraud and to enforcing
          contracts, is justified. Taxing earnings for redistribution is, he said, on a par with forced labour, since it takes
          the fruits of hours worked. The theory draws on Locke&rsquo;s account of property, with a proviso that acquisition
          must not leave others worse off.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Critics ask whether original acquisition was ever just: most actual holdings trace back to conquest and theft, so
          rectification could demand large redistribution. Others say people in D1 cannot foresee the effects of many small
          transfers on the background conditions of fairness, which Rawls thought the basic structure must protect. G. A.
          Cohen questioned whether self-ownership supports such strong property rights in external things.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: <p>Which is <em>not</em> one of Nozick&rsquo;s three principles of justice in holdings?</p>,
      answer: {
        kind: "choice",
        options: ["Justice in acquisition", "Justice in transfer", "Rectification", "Distribution according to need"],
        correct: [3],
      },
    },
    {
      key: "hist",
      rung: "check",
      prompt: <p>What kind of principle is the entitlement theory?</p>,
      answer: { kind: "choice", options: ["Historical and unpatterned", "Patterned", "End-state", "Utilitarian"], correct: [0] },
    },
    {
      key: "wilt",
      rung: "apply",
      prompt: <p>What is the Wilt Chamberlain argument meant to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That sport should be free.",
          "That liberty upsets patterns: voluntary transfers from a just distribution disturb any pattern, so keeping it requires interference.",
          "That inequality is always just.",
          "That fans are irrational.",
        ],
        correct: [1],
      },
    },
    {
      key: "tax",
      rung: "apply",
      prompt: <p>Why did Nozick compare redistributive taxation of earnings to forced labour?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because taxed people must work in factories.",
          "Because taking the earnings of some hours of work is like forcing someone to work those hours for others.",
          "Because taxes are too low.",
          "Because the state owns all labour.",
        ],
        correct: [1],
      },
    },
    {
      key: "rect",
      rung: "apply",
      prompt: <p>Why might the principle of rectification support a lot of redistribution in practice?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because many present holdings descend from past injustices such as conquest and theft.",
          "Because Nozick favoured equality.",
          "Because all transfers are unjust.",
          "Because it applies only to the rich.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the Wilt Chamberlain argument refute the difference principle? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument and the claim that liberty upsets patterns.",
          "Considers a reply, such as that Rawls applies the principle to institutions with background taxes known in advance.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If no present holdings can be traced to a just original acquisition, what is left of the entitlement theory?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the dependence of the theory on just acquisition and rectification.",
          "Considers what rectification would demand, or whether a patterned rule could approximate it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Nozick's entitlement theory and its three principles, the difference between historical and patterned principles, the Wilt Chamberlain argument, and one objection.",

  glimpse: (
    <p>
      The next lesson presents luck egalitarianism, which tries to combine equality with Nozick&rsquo;s emphasis on choice.
      Later lessons take up liberty itself, and Marxist critiques of private property.
    </p>
  ),
};
