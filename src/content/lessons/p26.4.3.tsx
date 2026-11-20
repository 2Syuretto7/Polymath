import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { NashMatrixViz } from "@/components/viz/NashMatrixViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p26.4.3",
  minutes: 90,
  links: {
    revisits: ["p26.4.2", "p26.4.1", "p26.3.1"],
    foreshadows: ["p26.4.4", "p30.1.2", "p28.3.1"],
  },

  puzzle: (
    <>
      <p>
        Two suspects are questioned apart. If both stay silent, each serves one year. If one confesses and the other does
        not, the confessor goes free and the other serves five. If both confess, each serves three. Whatever the other
        does, confessing is better for you. So both confess, and both are worse off than if both had kept quiet. Is
        rationality self-defeating?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Find the best responses in each game, and the cells where both players are best-responding at once.</p>
      <NashMatrixViz />
    </>
  ),

  theory: (
    <>
      <Definition title="games and equilibria">
        <p>
          A game in normal form lists players, their strategies, and a payoff for each player at each combination of
          strategies. A <strong>Nash equilibrium</strong> is a combination in which no player can do better by changing
          strategy alone. A <strong>mixed strategy</strong> chooses among pure strategies with fixed probabilities.
        </p>
      </Definition>

      <Theorem title="Nash's theorem">
        <p>
          John Nash proved in 1950 that every game with finitely many players and strategies has at least one equilibrium
          in mixed strategies. In a mixed equilibrium each player is indifferent between the pure strategies they mix,
          which pins down the other player&rsquo;s probabilities.
        </p>
      </Theorem>

      <Example title="three games">
        <ul>
          <li><strong>Prisoner&rsquo;s dilemma:</strong> defection strictly dominates, so the unique equilibrium is mutual defection, although mutual cooperation is better for both. Individual and collective rationality come apart.</li>
          <li><strong>Stag hunt:</strong> hunting stag together pays most, but hare is safe. Both (stag, stag) and (hare, hare) are equilibria. Rousseau&rsquo;s parable is about trust, not about conflicting interests.</li>
          <li><strong>Chicken:</strong> each wants the other to swerve. The pure equilibria are asymmetric, and the symmetric equilibrium is mixed.</li>
        </ul>
      </Example>

      <Remark title="common knowledge and rationality">
        <p>
          Why should players reach an equilibrium? One answer assumes common knowledge of rationality: each is rational,
          each knows this, each knows that each knows, and so on. In some games, such as the centipede game, this appears to
          recommend choices that seem plainly unwise, and philosophers including Bicchieri and Pettit have questioned
          whether the assumption is coherent off the equilibrium path.
        </p>
      </Remark>

      <Remark title="philosophical uses">
        <p>
          Hobbes&rsquo;s state of nature is often read as a prisoner&rsquo;s dilemma solved by a sovereign. David Lewis
          analysed conventions, including linguistic meaning, as equilibria in coordination games. Repeated games show how
          cooperation can be sustained by the shadow of the future, and Brian Skyrms used evolutionary game theory to study
          the stag hunt and the origins of social contract.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "nash",
      rung: "check",
      prompt: <p>What is a Nash equilibrium?</p>,
      answer: { kind: "choice", options: ["A strategy combination where no player gains by deviating alone", "The outcome best for everyone together", "A strategy that is best whatever others do", "Any outcome both players accept"], correct: [0] },
    },
    {
      key: "exist",
      rung: "check",
      prompt: <p>What did Nash prove about finite games?</p>,
      answer: { kind: "choice", options: ["Each has at least one equilibrium in mixed strategies", "Each has a pure equilibrium", "Each has a unique equilibrium", "Equilibria are always efficient"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, in the stag hunt, with what probability does each player hunt stag in the mixed equilibrium?</p>,
      answer: { kind: "numeric", value: 0.75, tolerance: 0.01 },
    },
    {
      key: "chicken",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s chicken game, how many pure Nash equilibria are there?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "dom",
      rung: "apply",
      prompt: <p>Why is mutual defection the only equilibrium of the prisoner&rsquo;s dilemma?</p>,
      answer: { kind: "choice", options: ["Defecting is strictly better for each player whatever the other does", "Cooperating is never possible", "The players cannot talk", "Mutual defection gives the highest total payoff"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the prisoner&rsquo;s dilemma show that rational self-interest is self-defeating? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why each player defects although both prefer mutual cooperation.",
          "Considers a response, such as repetition, a twin opponent, changed preferences, or enforcement.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The stag hunt has two equilibria. Which should rational players choose, and why?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes the payoff-dominant equilibrium (stag) from the risk-dominant one (hare).",
          "Discusses what trust, communication or common knowledge would add.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Game theory asks what individuals will choose. Social choice asks a different question: given everyone&rsquo;s
        preferences, what should the group prefer? A celebrated theorem says no method is perfect.
      </p>
      <p>Next, social choice and Arrow&rsquo;s theorem.</p>
    </>
  ),
};
