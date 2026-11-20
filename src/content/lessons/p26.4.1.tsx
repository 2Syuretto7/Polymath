import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { AllaisChoiceViz } from "@/components/viz/AllaisChoiceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p26.4.1",
  minutes: 90,
  links: {
    revisits: ["p26.3.4", "p0.4.1", "m1.6.3"],
    foreshadows: ["p26.4.2", "p26.4.4", "p30.4.1"],
  },

  puzzle: (
    <>
      <p>
        Would you rather have $1 million for certain, or a gamble with an 89% chance of $1 million, a 10% chance of $5
        million and a 1% chance of nothing? Now: would you rather have an 11% chance of $1 million, or a 10% chance of $5
        million? Many careful people take the sure thing first and the bigger prize second. A famous theorem says that
        pattern cannot come from maximising expected utility. Is the theorem wrong about rationality, or are the people?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Make your two choices, then search for a utility for $1 million that makes both maximise expected utility.</p>
      <AllaisChoiceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="lotteries and preferences">
        <p>
          A <strong>lottery</strong> assigns probabilities to outcomes. A mixture pL + (1 − p)M gives lottery L with
          chance p and M otherwise. An agent has a preference relation ≽ on lotteries: L ≽ M means L is at least as good
          as M.
        </p>
      </Definition>

      <Definition title="the von Neumann–Morgenstern axioms">
        <ul>
          <li><strong>Completeness:</strong> for any L and M, L ≽ M or M ≽ L.</li>
          <li><strong>Transitivity:</strong> if L ≽ M and M ≽ N, then L ≽ N.</li>
          <li><strong>Continuity:</strong> if L ≽ M ≽ N, some p makes pL + (1 − p)N exactly as good as M.</li>
          <li><strong>Independence:</strong> L ≽ M if and only if pL + (1 − p)N ≽ pM + (1 − p)N, for any N and p &gt; 0.</li>
        </ul>
      </Definition>

      <Theorem title="the representation theorem">
        <p>
          John von Neumann and Oskar Morgenstern, in the 1947 edition of their <em>Theory of Games and Economic Behavior</em>, proved that preferences satisfy the four axioms if and only if
          there is a utility function u on outcomes such that L ≽ M exactly when the expected utility of L is at least that
          of M. The function u is unique up to a positive affine transformation au + b with a &gt; 0. Leonard Savage later
          derived both utilities and subjective probabilities from preferences over acts, building on Frank Ramsey.
        </p>
      </Theorem>

      <Example title="the Allais paradox">
        <p>
          Choosing A over B and D over C violates independence. Remove a common 89% chance of $1 million from A and B and
          you get C and D. Kahneman and Tversky called the attraction of the sure thing the certainty effect. Daniel
          Ellsberg gave a related puzzle about unknown probabilities: people prefer bets on known odds even when this fits
          no single probability assignment.
        </p>
      </Example>

      <Remark title="readings of the theorem">
        <p>
          On a <strong>constructivist</strong> reading, utility is just a summary of coherent preferences, and expected
          utility is not a recipe anyone follows. On a <strong>normative</strong> reading, the axioms are requirements of
          rationality, defended by money pumps against intransitivity and by dynamic consistency arguments for
          independence. Lara Buchak&rsquo;s risk-weighted expected utility drops independence and lets rational agents
          care about the spread of outcomes, not only the average.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "allais",
      rung: "check",
      prompt: <p>Which axiom does the Allais pattern A and D violate?</p>,
      answer: { kind: "choice", options: ["Independence", "Completeness", "Transitivity", "Continuity"], correct: [0] },
    },
    {
      key: "unique",
      rung: "check",
      prompt: <p>Up to what is a von Neumann–Morgenstern utility function unique?</p>,
      answer: { kind: "choice", options: ["A positive affine transformation au + b with a > 0", "Any increasing transformation", "Nothing: it is unique", "Multiplication by −1"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at what value of u($1M) do A and B have equal expected utility? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.909, tolerance: 0.002 },
    },
    {
      key: "gamble",
      rung: "apply",
      prompt: <p>u(nothing) = 0, u(prize) = 1, and a sure outcome S has utility 0.4. Which does expected utility prefer: S, or a 50% chance of the prize?</p>,
      answer: { kind: "choice", options: ["The 50% chance of the prize", "S", "Neither: they tie", "It depends on risk attitude"], correct: [0] },
    },
    {
      key: "pump",
      rung: "apply",
      prompt: <p>A money pump exploits an agent who prefers A to B, B to C and C to A. Which axiom does it defend?</p>,
      answer: { kind: "choice", options: ["Transitivity", "Independence", "Continuity", "Completeness"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is choosing A and D in the Allais problem irrational? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why A with D conflicts with the independence axiom.",
          "Considers a defence of the pattern, such as the certainty effect, regret, or Buchak’s risk-weighting, or a defence of independence.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If utility is unique only up to au + b, can it say that you want one thing twice as much as another?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that ratios of utilities change under au + b, while ratios of utility differences do not.",
          "Draws a conclusion about what utility does or does not measure.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Expected utility tells us how to weigh outcomes by probabilities. But which probabilities: how likely a state is
        given what I do, or how likely my act is to cause it? Usually they agree. A strange predictor pulls them apart.
      </p>
      <p>Next, Newcomb&rsquo;s problem.</p>
    </>
  ),
};
