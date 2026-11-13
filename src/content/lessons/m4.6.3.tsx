import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { HatCheckViz } from "@/components/viz/HatCheckViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.6.3",
  minutes: 85,
  links: {
    revisits: ["m4.6.2", "m4.6.1", "m4.1.3"],
    foreshadows: ["m4.6.4", "m9.2.3", "p26.4.1"],
  },

  puzzle: (
    <>
      <p>
        At a party, everyone leaves their hat at the door. At the end of the night the attendant, who has lost the
        tickets, hands the hats back completely at random. On average, how many people get their own hat back? With ten
        guests the answer is 1. With a thousand guests it is still 1. Working that out directly means counting
        permutations with a given number of fixed points, which is hard. There is a beautiful shortcut.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Hand the hats back at random, then do it a hundred times and watch the average. Try it with different numbers of
        people.
      </p>
      <HatCheckViz />
    </>
  ),

  theory: (
    <>
      <Definition title="random variables and expectation">
        <p>
          A <strong>random variable</strong> is a function <M>{"X : \\Omega \\to \\mathbb{R}"}</M>, a number that depends
          on the outcome. Its <strong>expectation</strong>, or expected value, is the average of its values weighted by
          probability:
        </p>
        <MD>{"E[X] = \\sum_{\\omega \\in \\Omega} X(\\omega)\\,P(\\omega) = \\sum_x x\\,P(X = x)."}</MD>
        <p>
          For one roll of a fair die, <M>{"E[X] = (1 + 2 + \\dots + 6)/6 = 3.5"}</M>. The expected value need not be a
          possible value; it is the long-run average over many repetitions.
        </p>
      </Definition>

      <Theorem title="linearity of expectation">
        <p>For any random variables <M>{"X"}</M> and <M>{"Y"}</M> and constants <M>{"a, b"}</M>,</p>
        <MD>{"E[aX + bY] = a\\,E[X] + b\\,E[Y],"}</MD>
        <p>whether or not <M>{"X"}</M> and <M>{"Y"}</M> are independent.</p>
      </Theorem>

      <Proof>
        <p>Using the first form of the definition,</p>
        <MD>{"E[aX + bY] = \\sum_\\omega \\big(aX(\\omega) + bY(\\omega)\\big)P(\\omega) = a\\sum_\\omega X(\\omega)P(\\omega) + b\\sum_\\omega Y(\\omega)P(\\omega)."}</MD>
        <p>No independence was used: the sum simply splits.</p>
      </Proof>

      <Example title="the hat-check problem">
        <p>
          Let <M>{"I_k"}</M> be 1 if person <M>{"k"}</M> gets their own hat and 0 otherwise. Such a variable is called an{" "}
          <strong>indicator</strong>, and <M>{"E[I_k] = P(I_k = 1) = 1/n"}</M>, since each of the <M>{"n"}</M> hats is
          equally likely to reach person <M>{"k"}</M>. The number of people with their own hat is{" "}
          <M>{"X = I_1 + \\dots + I_n"}</M>, so by linearity
        </p>
        <MD>{"E[X] = n \\cdot \\frac1n = 1."}</MD>
        <p>
          The indicators are not independent, since if everyone but one has their own hat, so does the last; linearity does
          not care.
        </p>
      </Example>

      <Remark title="expectation is not everything">
        <p>
          Expected value guides decisions when a gamble is repeated many times. For a single large gamble it can mislead.
          In the St Petersburg game, a coin is tossed until it lands heads, and you win <M>{"2^k"}</M> rupees if that
          takes <M>{"k"}</M> tosses. The expected prize is <M>{"\\sum_k 2^k \\cdot 2^{-k} = 1 + 1 + \\dots"}</M>, which
          is infinite, yet nobody would pay much to play. Daniel Bernoulli proposed in 1738 that we value money by its
          usefulness to us, not its amount, an idea that led to expected utility theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "die",
      rung: "check",
      prompt: <p>What is the expected value of one roll of a fair six-sided die?</p>,
      answer: { kind: "numeric", value: 3.5 },
    },
    {
      key: "linear",
      rung: "check",
      prompt: <p>When does linearity of expectation, E[X + Y] = E[X] + E[Y], hold?</p>,
      answer: {
        kind: "choice",
        options: [
          "Only when X and Y are independent.",
          "Always, for any random variables X and Y.",
          "Only when X and Y take the same values.",
          "Only for indicator variables.",
        ],
        correct: [1],
      },
    },
    {
      key: "twodice",
      rung: "apply",
      prompt: <p>What is the expected sum when ten fair dice are rolled?</p>,
      answer: { kind: "numeric", value: 35 },
    },
    {
      key: "heads",
      rung: "apply",
      prompt: (
        <p>
          A coin that lands heads with probability 0.3 is tossed 50 times. What is the expected number of heads?
        </p>
      ),
      answer: { kind: "numeric", value: 15 },
    },
    {
      key: "runs",
      rung: "apply",
      prompt: (
        <p>
          A fair coin is tossed 11 times. Using indicators for each of the 10 adjacent pairs of tosses, find the expected
          number of times that a toss differs from the one before it.
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "birthdays",
      rung: "prove",
      prompt: (
        <p>
          In a group of <M>{"n"}</M> people with birthdays independent and uniform over 365 days, find the expected number
          of pairs of people who share a birthday. Justify your answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Defines an indicator for each of the n(n − 1)/2 pairs, equal to 1 when the two share a birthday, with expectation 1/365.",
          "Uses linearity to get n(n − 1)/(2 × 365).",
        ],
      },
    },
    {
      key: "coupon",
      rung: "stretch",
      prompt: (
        <p>
          A cereal packet contains one of <M>{"n"}</M> cards, each equally likely. Show that the expected number of packets
          needed to collect all <M>{"n"}</M> cards is <M>{"n(1 + 1/2 + \\dots + 1/n)"}</M>. You may use the fact that if
          each trial succeeds with probability <M>{"p"}</M>, the expected number of trials until the first success is{" "}
          <M>{"1/p"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Splits the total into stages: when k cards are held, a new card appears with probability (n − k)/n, so the stage takes n/(n − k) packets on average.",
          "Adds the stages by linearity to get n/n + n/(n − 1) + … + n/1 = n(1 + 1/2 + … + 1/n).",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a random variable and its expectation are, why linearity of expectation holds even without independence, and how indicators solve the hat-check problem.",

  glimpse: (
    <p>
      The next lesson turns expectation into a method of proof: to show that something exists, show that a random choice
      finds it with positive probability.
    </p>
  ),
};
