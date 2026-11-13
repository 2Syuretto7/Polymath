import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PmfCdfViz } from "@/components/viz/PmfCdfViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.2.1",
  minutes: 75,
  links: {
    revisits: ["m9.1.5", "m1.7.4", "m4.6.3"],
    foreshadows: ["m9.2.2", "m9.3.1", "m27.1.2"],
  },

  puzzle: (
    <>
      <p>
        We rarely care about the exact outcome of an experiment, the precise sequence of a hundred coin tosses, but about a
        number computed from it, such as how many heads. A random variable is such a number. It is neither random nor a
        variable in the usual sense. What is it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a random variable, then move x to see how the two descriptions of its distribution relate.</p>
      <PmfCdfViz />
    </>
  ),

  theory: (
    <>
      <Definition title="random variable">
        <p>
          A <strong>random variable</strong> is a function <M>{"X : S \\to \\mathbb{R}"}</M> from the sample space to the real
          numbers. The randomness is in the outcome <M>{"s"}</M>; once it is fixed, <M>{"X(s)"}</M> is a definite number.
          Events like <M>{"\\{X = 3\\}"}</M> are preimages: the set of outcomes <M>{"s"}</M> with <M>{"X(s) = 3"}</M>.
        </p>
      </Definition>

      <Definition title="distribution">
        <p>
          A random variable is <strong>discrete</strong> if it takes values in a finite or countable list{" "}
          <M>{"x_1, x_2, \\dots"}</M>. Its <strong>probability mass function</strong> is <M>{"p(x) = P(X = x)"}</M>, which is
          non-negative with <M>{"\\sum_j p(x_j) = 1"}</M>. The <strong>cumulative distribution function</strong> is{" "}
          <M>{"F(x) = P(X \\le x)"}</M>, for any random variable.
        </p>
      </Definition>

      <Theorem title="properties of a CDF">
        <p>
          <M>{"F"}</M> is non-decreasing, right-continuous, and <M>{"F(x) \\to 0"}</M> as <M>{"x \\to -\\infty"}</M>,{" "}
          <M>{"F(x) \\to 1"}</M> as <M>{"x \\to \\infty"}</M>. Conversely, every such function is the CDF of some random
          variable.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"x \\le y"}</M> then <M>{"\\{X \\le x\\} \\subseteq \\{X \\le y\\}"}</M>, so <M>{"F(x) \\le F(y)"}</M>. The
          limits and right-continuity follow from continuity of probability along increasing and decreasing sequences of
          events, a consequence of countable additivity.
        </p>
      </Proof>

      <Example title="sum of two dice">
        <p>
          On the 36 equally likely outcomes, <M>{"X(a, b) = a + b"}</M> takes values 2 to 12, with{" "}
          <M>{"P(X = k) = (6 - |k - 7|)/36"}</M>. So <M>{"F(4) = (1 + 2 + 3)/36 = 1/6"}</M>.
        </p>
      </Example>

      <Remark title="same distribution, different variables">
        <p>
          Two random variables can have the same distribution without being equal. If <M>{"X"}</M> is the number of heads in
          ten tosses and <M>{"Y"}</M> the number of tails, they have the same distribution, but <M>{"X + Y = 10"}</M> always,
          and <M>{"X = Y"}</M> only when there are exactly five of each. A distribution describes the probabilities of values,
          not the variable itself.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What is a random variable, formally?</p>,
      answer: {
        kind: "choice",
        options: ["A number chosen at random", "A function from the sample space to the real numbers", "An event", "A probability"],
        correct: [1],
      },
    },
    {
      key: "sum",
      rung: "check",
      prompt: <p>What is P(X = 7) for the sum X of two fair dice?</p>,
      answer: { kind: "numeric", value: 0.1667, tolerance: 0.002 },
    },
    {
      key: "cdf",
      rung: "apply",
      prompt: <p>For the sum of two fair dice, what is F(4) = P(X ≤ 4)?</p>,
      answer: { kind: "numeric", value: 0.1667, tolerance: 0.002 },
    },
    {
      key: "max",
      rung: "apply",
      prompt: <p>X is the larger of two fair dice. What is P(X ≤ 3)?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "range",
      rung: "apply",
      prompt: <p>The CDF of X has F(2) = 0.3 and F(5) = 0.8. What is P(2 &lt; X ≤ 5)?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every CDF is non-decreasing.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes x ≤ y.",
          "Notes the event {X ≤ x} is contained in {X ≤ y}.",
          "Concludes F(x) ≤ F(y) by monotonicity of probability.",
        ],
      },
    },
    {
      key: "same",
      rung: "stretch",
      prompt: <p>Give an example of two random variables on the same sample space with the same distribution that are never equal.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an example such as X = 1 for heads and 0 for tails, and Y = 1 − X, on one fair coin toss.",
          "Shows both have the same distribution.",
          "Shows they differ on every outcome. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a random variable is, the probability mass function and cumulative distribution function and their properties, the example of the sum of two dice, and why the same distribution does not mean the same variable.",

  glimpse: (
    <p>
      The next lesson meets the most important discrete distributions: Bernoulli, binomial, geometric and Poisson. Later
      lessons treat continuous random variables, and measure-theoretic probability gives the general definition.
    </p>
  ),
};
