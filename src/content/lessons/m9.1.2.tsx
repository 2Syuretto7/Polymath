import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { BirthdayViz } from "@/components/viz/BirthdayViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.1.2",
  minutes: 80,
  links: {
    revisits: ["m9.1.1", "m4.1.2", "m4.1.3"],
    foreshadows: ["m9.1.3", "m9.2.2", "m21.4.3"],
  },

  puzzle: (
    <>
      <p>
        How many people must be in a room before it is more likely than not that two share a birthday? Most people guess
        around 180. The answer is 23. When all outcomes are equally likely, probability is just counting, but counting is
        harder than it looks.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the number of people and watch the chance of a shared birthday.</p>
      <BirthdayViz />
    </>
  ),

  theory: (
    <>
      <Definition title="naive probability">
        <p>
          If <M>{"S"}</M> is finite and all outcomes are equally likely, then
        </p>
        <MD>{"P(A) = \\frac{|A|}{|S|} = \\frac{\\text{number of outcomes favourable to } A}{\\text{total number of outcomes}}."}</MD>
        <p>
          This satisfies the axioms, but it applies only when symmetry justifies equal likelihood. A die is symmetric; whether
          it will rain tomorrow, with two outcomes, is not a fifty-fifty matter.
        </p>
      </Definition>

      <Theorem title="the counting tools">
        <p>
          Choosing <M>{"k"}</M> objects from <M>{"n"}</M>: in order with replacement, <M>{"n^k"}</M> ways; in order without
          replacement, <M>{"n(n-1)\\cdots(n-k+1)"}</M>; without order or replacement, <M>{"\\binom{n}{k}"}</M>; without order
          but with replacement, <M>{"\\binom{n+k-1}{k}"}</M>.
        </p>
      </Theorem>

      <Example title="the birthday problem">
        <p>
          With <M>{"k"}</M> people and 365 equally likely birthdays, there are <M>{"365^k"}</M> outcomes, of which{" "}
          <M>{"365 \\cdot 364 \\cdots (365 - k + 1)"}</M> have no repeat. So{" "}
          <M>{"P(\\text{match}) = 1 - \\frac{365 \\cdot 364 \\cdots (365-k+1)}{365^k}"}</M>, which first exceeds 1/2 at{" "}
          <M>{"k = 23"}</M>. With 23 people there are 253 pairs, each with a 1/365 chance of a match.
        </p>
      </Example>

      <Example title="a full house">
        <p>
          In a five-card poker hand from 52 cards, a full house has three cards of one rank and two of another. Choose the rank
          for the three in 13 ways and its suits in <M>{"\\binom43"}</M>; then the other rank in 12 ways and its suits in{" "}
          <M>{"\\binom42"}</M>. So{" "}
          <M>{"P = \\frac{13 \\cdot 4 \\cdot 12 \\cdot 6}{\\binom{52}{5}} = \\frac{3744}{2598960} \\approx 0.00144"}</M>.
        </p>
      </Example>

      <Remark title="choosing the sample space">
        <p>
          Many errors come from a sample space whose outcomes are not equally likely. Leibniz thought rolling 11 and 12 with two
          dice were equally likely, since each can be made in one way; but 11 arises as (5, 6) or (6, 5), and ordered outcomes
          are the equally likely ones. Labelling objects, even identical ones, is usually the safe choice.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dice",
      rung: "check",
      prompt: <p>Two fair dice are rolled. What is the probability that the sum is 7?</p>,
      answer: { kind: "numeric", value: 0.1667, tolerance: 0.002 },
    },
    {
      key: "when",
      rung: "check",
      prompt: <p>When does the naive definition P(A) = |A|/|S| apply?</p>,
      answer: {
        kind: "choice",
        options: ["Always", "When S is finite and all outcomes are equally likely", "When A is small", "When S is infinite"],
        correct: [1],
      },
    },
    {
      key: "eleven",
      rung: "apply",
      prompt: <p>With two fair dice, how many times more likely is a sum of 11 than a sum of 12?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "comm",
      rung: "apply",
      prompt: <p>A committee of 3 is chosen at random from 5 women and 4 men. What is the probability that all three are women?</p>,
      answer: { kind: "numeric", value: 0.119, tolerance: 0.002 },
    },
    {
      key: "bday",
      rung: "apply",
      prompt: <p>Three people are chosen at random. What is the probability that no two share a birthday, to four decimal places?</p>,
      answer: { kind: "numeric", value: 0.9918, tolerance: 0.0002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the naive definition P(A) = |A|/|S| satisfies the axioms of probability for a finite sample space.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes |A|/|S| ≥ 0 and |S|/|S| = 1.",
          "Notes that for disjoint events the counts add: |A ∪ B| = |A| + |B|.",
          "Concludes additivity, noting that a finite space has only finitely many nonempty disjoint events.",
        ],
      },
    },
    {
      key: "intuit",
      rung: "stretch",
      prompt: <p>Why do most people overestimate the number needed in the birthday problem? Explain in your own words.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes people often think of matches with their own birthday, which needs about 253 others.",
          "Explains that any pair can match, and the number of pairs grows like n².",
          "Connects this to the 253 pairs among 23 people. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the naive definition of probability and when it applies, the four basic counting formulas, the birthday problem, and how choosing a sample space with equally likely outcomes avoids errors.",

  glimpse: (
    <p>
      The next lesson shows how probabilities change when we learn something: conditional probability. Later lessons meet
      the binomial distribution, built from these counts, and probabilistic arguments in combinatorics.
    </p>
  ),
};
