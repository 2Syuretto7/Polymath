import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { HatCheckViz } from "@/components/viz/HatCheckViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.2.3",
  minutes: 85,
  links: {
    revisits: ["m9.2.2", "m4.6.3", "m4.6.4"],
    foreshadows: ["m9.2.4", "m9.6.1", "m9.7.1"],
  },

  puzzle: (
    <>
      <p>
        At a party, n guests leave their hats at the door, and at the end the hats are handed back completely at random. On
        average, how many guests get their own hat back? With 3 guests? With a million? The answer is the same for every n,
        and it takes one line, once you know the right tool.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Return the hats many times, for small and large numbers of guests, and watch the average.</p>
      <HatCheckViz />
    </>
  ),

  theory: (
    <>
      <Definition title="expectation">
        <p>The <strong>expectation</strong> or mean of a discrete random variable <M>{"X"}</M> is</p>
        <MD>{"E(X) = \\sum_j x_j P(X = x_j),"}</MD>
        <p>
          provided the sum converges absolutely. It is the balance point of the distribution, and the long-run average of
          independent repetitions.
        </p>
      </Definition>

      <Theorem title="linearity">
        <p>
          For any random variables <M>{"X"}</M> and <M>{"Y"}</M> with finite expectations and any constant <M>{"c"}</M>,
        </p>
        <MD>{"E(X + Y) = E(X) + E(Y), \\qquad E(cX) = cE(X),"}</MD>
        <p>whether or not <M>{"X"}</M> and <M>{"Y"}</M> are independent.</p>
      </Theorem>

      <Proof>
        <p>
          On a discrete sample space, <M>{"E(X) = \\sum_s X(s)P(\\{s\\})"}</M>, grouping outcomes by value. Then
        </p>
        <MD>{"E(X + Y) = \\sum_s (X(s) + Y(s))P(\\{s\\}) = \\sum_s X(s)P(\\{s\\}) + \\sum_s Y(s)P(\\{s\\})."}</MD>
      </Proof>

      <Example title="indicator variables">
        <p>
          The indicator <M>{"I_A"}</M> of an event is 1 if <M>{"A"}</M> occurs and 0 otherwise, so{" "}
          <M>{"E(I_A) = P(A)"}</M>. Writing a count as a sum of indicators turns expectations into sums of probabilities. A
          binomial is a sum of <M>{"n"}</M> Bernoulli indicators, so <M>{"E(X) = np"}</M>, with no algebra.
        </p>
      </Example>

      <Example title="the hat check">
        <p>
          Let <M>{"I_k"}</M> indicate that guest <M>{"k"}</M> gets their own hat. A random hat is theirs with probability{" "}
          <M>{"1/n"}</M>, so <M>{"E(I_1 + \\cdots + I_n) = n \\cdot \\tfrac1n = 1"}</M>, for every <M>{"n"}</M>. The indicators
          are dependent, since if everyone but one gets their own hat so does the last, but linearity does not need
          independence.
        </p>
      </Example>

      <Theorem title="the law of the unconscious statistician">
        <p>
          For a function <M>{"g"}</M>, <M>{"E(g(X)) = \\sum_j g(x_j)P(X = x_j)"}</M>: one need not find the distribution of{" "}
          <M>{"g(X)"}</M> first. In general <M>{"E(g(X)) \\ne g(E(X))"}</M>; for instance{" "}
          <M>{"E(X^2) \\ne (E X)^2"}</M> unless <M>{"X"}</M> is constant.
        </p>
      </Theorem>

      <Remark title="when expectation misleads">
        <p>
          In the St Petersburg game, a coin is tossed until heads appears, and you win <M>{"2^k"}</M> rupees if that takes{" "}
          <M>{"k"}</M> tosses. The expected prize is <M>{"\\sum 2^k \\cdot 2^{-k} = \\infty"}</M>, yet no one would pay much to
          play. This paradox led Daniel Bernoulli to the idea of utility, and shows that an expectation need not be a fair
          price.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "die",
      rung: "check",
      prompt: <p>What is the expected value of one roll of a fair die?</p>,
      answer: { kind: "numeric", value: 3.5, tolerance: 0.001 },
    },
    {
      key: "lin",
      rung: "check",
      prompt: <p>Which statement about linearity of expectation is true?</p>,
      answer: {
        kind: "choice",
        options: [
          "It needs X and Y independent.",
          "E(X + Y) = E(X) + E(Y) holds for any X and Y with finite expectations.",
          "It holds only for discrete variables.",
          "E(XY) = E(X)E(Y) always.",
        ],
        correct: [1],
      },
    },
    {
      key: "dice",
      rung: "apply",
      prompt: <p>What is the expected total of 10 rolls of a fair die?</p>,
      answer: { kind: "numeric", value: 35 },
    },
    {
      key: "bin",
      rung: "apply",
      prompt: <p>X ~ Bin(40, 0.15). What is E(X)?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0.001 },
    },
    {
      key: "sq",
      rung: "apply",
      prompt: <p>For one roll X of a fair die, what is E(X²), to two decimal places?</p>,
      answer: { kind: "numeric", value: 15.17, tolerance: 0.01 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use indicators to prove that a Bin(n, p) random variable has expectation np.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes X = I₁ + ⋯ + Iₙ with Iₖ indicating success on trial k.",
          "Notes E(Iₖ) = P(success on trial k) = p.",
          "Applies linearity to get E(X) = np.",
        ],
      },
    },
    {
      key: "stp",
      rung: "stretch",
      prompt: <p>How much would you pay to play the St Petersburg game, and why, given that its expected prize is infinite?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why the expected prize is infinite.",
          "Gives a reason for paying only a modest amount, such as diminishing utility of money, the bank's finite wealth, or risk.",
          "States a price with a reason. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the definition of expectation, linearity and why it needs no independence, the method of indicators with the binomial and the hat check, the law of the unconscious statistician, and the St Petersburg paradox.",

  glimpse: (
    <p>
      The next lesson measures spread with the variance. Conditional expectation and the law of large numbers build directly
      on expectation.
    </p>
  ),
};
