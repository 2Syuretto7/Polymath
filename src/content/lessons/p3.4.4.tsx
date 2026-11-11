import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DecisionViz, type Decision } from "@/components/viz/DecisionViz";
import type { LessonContent } from "@/lib/types";

const DECISIONS: Decision[] = [
  {
    title: "The umbrella",
    states: ["it rains", "it stays dry"],
    acts: [
      { name: "take the umbrella", u: [-1, -1] },
      { name: "leave it at home", u: [-10, 0] },
    ],
    pMax: 1,
    p0: 0.3,
    unit: "in units of how much you care",
    note: "Carrying the umbrella costs a little whatever happens; getting soaked costs a lot. Find the chance of rain at which the choice flips.",
  },
  {
    title: "Insurance",
    states: ["the house burns", "it does not"],
    acts: [
      { name: "buy insurance", u: [-1.5, -1.5] },
      { name: "do not insure", u: [-200, 0] },
    ],
    pMax: 0.02,
    p0: 0.005,
    unit: "in thousands of rupees",
    note: "At realistic risks, insurance has the lower expected money: that is how insurers stay in business. Yet buying it can still be wise, because losing a house hurts far more than 133 premiums do.",
  },
  {
    title: "A bet",
    states: ["you win", "you lose"],
    acts: [
      { name: "take the bet", u: [10, -4] },
      { name: "decline", u: [0, 0] },
    ],
    pMax: 1,
    p0: 0.25,
    unit: "in rupees",
    note: "A bet is worth taking, by expected value, when the chance of winning times the prize beats the chance of losing times the stake.",
  },
];

export const lesson: LessonContent = {
  id: "p3.4.4",
  minutes: 65,
  links: {
    revisits: ["p3.4.1", "p3.4.2"],
    parallels: ["m9.2.3"],
    foreshadows: ["p23.4.1", "p5.2.1"],
  },

  puzzle: (
    <>
      <p>
        You are offered a game. A fair coin is tossed until it lands heads. If that happens on the first toss you win 2
        rupees, on the second 4, on the third 8, doubling each time. How much should you pay to play?
      </p>
      <p>
        On average, the game pays an infinite amount, as we will see. Yet almost nobody would pay even a hundred rupees.
        Are they being irrational, or is &ldquo;on average&rdquo; the wrong guide to choice?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Most choices are made without knowing how things will turn out. A sensible way to choose is to ask, for each
        option, how good each possible outcome would be and how likely it is, and to weigh the one by the other. Move the
        slider and watch the best choice change.
      </p>
      <DecisionViz decisions={DECISIONS} />
    </>
  ),

  theory: (
    <>
      <Definition title="the parts of a decision">
        <p>
          A decision problem has <strong>acts</strong> (what you can choose), <strong>states</strong> (how the world might
          be, which you do not control) and <strong>outcomes</strong> (what results from each act in each state). A table
          with acts as rows and states as columns lays it out.
        </p>
      </Definition>

      <Definition title="dominance">
        <p>
          One act <strong>dominates</strong> another if it is at least as good in every state and better in at least one.
          A dominated act should never be chosen, whatever the probabilities. Dominance needs one caution: the states must
          not depend on the act. &ldquo;Whether or not there will be an accident, not wearing a seat belt is more
          comfortable&rdquo; ignores that your choice affects how bad an accident would be.
        </p>
      </Definition>

      <Definition title="expected value">
        <p>
          The <strong>expected value</strong> of an act is the sum, over the states, of the probability of the state times
          the value of the outcome. For the bet in the visualisation with a 25% chance of winning,{" "}
          <span className="mono">0.25 × 10 + 0.75 × (−4) = −0.5</span>, so declining is better. The rule:{" "}
          <strong>choose the act with the highest expected value</strong>.
        </p>
      </Definition>

      <Example title="the doubling game">
        <p>
          The game in the puzzle pays 2 with probability 1/2, 4 with probability 1/4, 8 with probability 1/8, and so on.
          Each term contributes 1 to the expected value, and there are infinitely many terms, so the expected value is
          infinite. Daniel Bernoulli, writing in 1738 about what is now called the St Petersburg paradox, proposed that
          what matters is not money but its usefulness to us, which grows more slowly the more we have. A second million
          is worth less to you than the first.
        </p>
      </Example>

      <Definition title="expected utility">
        <p>
          <strong>Utility</strong> measures how good an outcome is for the chooser, rather than its money value. Choosing
          by <strong>expected utility</strong> rather than expected money explains insurance, and why most people turn down
          the doubling game: with money&rsquo;s utility levelling off, the huge prizes are worth far less than their face
          value. Someone with this attitude is <strong>risk averse</strong>.
        </p>
      </Definition>

      <Remark title="when probabilities are unknown">
        <p>
          Sometimes we cannot even estimate the probabilities. One proposal is <strong>maximin</strong>: choose the act
          whose worst outcome is least bad. It suits cases where disaster must be avoided at all costs, but taken strictly
          it is very timid: it would forbid crossing a road, since the worst outcome of crossing is death. Most theorists
          prefer to make the best estimates of probability one can, however rough.
        </p>
      </Remark>

      <Remark title="garbage in, garbage out">
        <p>
          Expected value is only as good as the numbers put into it. The probabilities may come from the base rates and
          Bayesian reasoning of the last two lessons; the values from honest reflection on what matters. The table does
          not make the choice for you. It makes clear what your choice depends on.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ev",
      rung: "check",
      prompt: (
        <p>
          A bet wins 10 rupees with probability 0.3 and loses 4 rupees otherwise. What is its expected value, in rupees?
        </p>
      ),
      answer: { kind: "numeric", value: 0.2, tolerance: 0.001 },
    },
    {
      key: "dominance",
      rung: "check",
      prompt: (
        <p>
          Act A gives 5 if it rains and 8 if not. Act B gives 3 if it rains and 8 if not. Act C gives 6 if it rains and 2 if
          not. Which act is dominated?
        </p>
      ),
      answer: { kind: "choice", options: ["A", "B", "C", "none"], correct: [1] },
    },
    {
      key: "breakeven",
      rung: "apply",
      prompt: (
        <p>
          In the umbrella table, taking it is worth −1 whatever happens, and leaving it is worth −10 if it rains and 0 if
          not. At what probability of rain are the two acts equally good?
        </p>
      ),
      answer: { kind: "numeric", value: 0.1 },
    },
    {
      key: "maximin",
      rung: "apply",
      prompt: (
        <p>
          Using maximin, which act is chosen? Act A: 100 or −50. Act B: 20 or 10. Act C: 60 or −5.
        </p>
      ),
      answer: { kind: "choice", options: ["A", "B", "C"], correct: [1] },
    },
    {
      key: "insurance",
      rung: "apply",
      prompt: <p>Why might it be rational to buy insurance with a negative expected money value?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because insurance companies always lose money.",
          "Because a large loss would reduce your wellbeing far more than the many small premiums, so expected utility can favour insuring.",
          "Because the probability of disaster is always high.",
          "It is never rational.",
        ],
        correct: [1],
      },
    },
    {
      key: "choose",
      rung: "prove",
      prompt: (
        <p>
          You can take a safe job paying 30 (in some unit of wellbeing) whatever happens, or start a business that gives
          100 if it succeeds and 0 if it fails. Find the probability of success at which the expected values are equal.
          Then say whether a risk-averse person should demand a higher or lower probability before starting the business,
          and why.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets 100p = 30 and finds p = 0.3.",
          "Explains that a risk-averse person values the sure 30 more than a gamble with the same expected value, so they would want a probability of success above 0.3.",
          "Reasoning may use utility rather than money. Small arithmetic slips with correct reasoning earn full credit.",
        ],
      },
    },
    {
      key: "pascal",
      rung: "stretch",
      prompt: (
        <p>
          Pascal argued roughly as follows. If God exists, belief brings an infinite reward and unbelief a great loss; if
          God does not, belief costs little. So, however small the probability, belief has the higher expected value. Set
          this out as a decision table, and give one objection to the argument.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Draws a table with acts (believe, do not believe) and states (God exists, does not), with an infinite value for believing if God exists.",
          "Explains why any positive probability makes believing come out ahead in expected value.",
          "Gives an objection, such as many possible gods (which one to believe in), doubts that belief can be chosen, or problems with infinite values. Any reasonable objection is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to set out a decision as acts, states and outcomes, how to use dominance and expected value, and why expected utility explains insurance and the doubling game.",

  glimpse: (
    <p>
      Philosophy of Religion examines Pascal&rsquo;s wager in detail, including the trouble that infinite values cause.
      Introduction to Ethics meets the utilitarians, who apply the idea of adding up expected wellbeing to the whole of
      morality, and the critics who think that some choices should not be made that way.
    </p>
  ),
};
