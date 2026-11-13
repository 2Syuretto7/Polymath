import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DiscreteFamiliesViz } from "@/components/viz/DiscreteFamiliesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.2.2",
  minutes: 90,
  links: {
    revisits: ["m9.2.1", "m4.1.3", "m2.9.4"],
    foreshadows: ["m9.2.3", "m9.7.2", "m18.1.1"],
  },

  puzzle: (
    <>
      <p>
        In 1898 Ladislaus Bortkiewicz counted the soldiers killed by horse kicks in fourteen Prussian cavalry corps over twenty
        years. The counts per corps per year, mostly 0, sometimes 1 or 2, rarely more, fitted a formula derived by Poisson
        sixty years earlier almost perfectly. Why should deaths from horse kicks obey a formula at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Explore three families of distributions. For the binomial, make n large and p small, and compare with the Poisson dots.</p>
      <DiscreteFamiliesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Bernoulli and binomial">
        <p>
          <M>{"X \\sim \\operatorname{Bern}(p)"}</M> takes value 1 with probability <M>{"p"}</M> and 0 otherwise, an indicator
          of success. The number of successes in <M>{"n"}</M> independent <M>{"\\operatorname{Bern}(p)"}</M> trials is{" "}
          <M>{"\\operatorname{Bin}(n, p)"}</M>:
        </p>
        <MD>{"P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\qquad k = 0, 1, \\dots, n."}</MD>
      </Definition>

      <Proof>
        <p>
          Each particular sequence with <M>{"k"}</M> successes has probability <M>{"p^k(1-p)^{n-k}"}</M> by independence, and
          there are <M>{"\\binom{n}{k}"}</M> such sequences. By the binomial theorem the probabilities sum to{" "}
          <M>{"(p + 1 - p)^n = 1"}</M>.
        </p>
      </Proof>

      <Definition title="geometric">
        <p>
          The number of independent <M>{"\\operatorname{Bern}(p)"}</M> trials up to and including the first success has the{" "}
          <strong>geometric</strong> distribution: <M>{"P(X = k) = (1-p)^{k-1}p"}</M> for <M>{"k = 1, 2, \\dots"}</M> It is{" "}
          <strong>memoryless</strong>: <M>{"P(X > m + k \\mid X > m) = P(X > k)"}</M>. (Some books count the failures before
          the first success instead.)
        </p>
      </Definition>

      <Definition title="Poisson">
        <p>
          <M>{"X \\sim \\operatorname{Pois}(\\lambda)"}</M> if{" "}
          <M>{"P(X = k) = e^{-\\lambda}\\lambda^k / k!"}</M> for <M>{"k = 0, 1, 2, \\dots"}</M>; the sum is 1 by the power
          series of <M>{"e^\\lambda"}</M>.
        </p>
      </Definition>

      <Theorem title="the Poisson limit">
        <p>If <M>{"n \\to \\infty"}</M> and <M>{"p \\to 0"}</M> with <M>{"np = \\lambda"}</M> fixed, then</p>
        <MD>{"\\binom{n}{k}p^k(1-p)^{n-k} \\to e^{-\\lambda}\\frac{\\lambda^k}{k!}."}</MD>
      </Theorem>

      <Proof>
        <p>
          Write the binomial probability as{" "}
          <M>{"\\frac{n(n-1)\\cdots(n-k+1)}{n^k}\\cdot\\frac{\\lambda^k}{k!}\\cdot\\left(1 - \\frac{\\lambda}{n}\\right)^{n}\\left(1 - \\frac{\\lambda}{n}\\right)^{-k}"}</M>.
          As <M>{"n \\to \\infty"}</M> the first factor tends to 1, the third to <M>{"e^{-\\lambda}"}</M>, the last to 1.
        </p>
      </Proof>

      <Example title="horse kicks">
        <p>
          Each soldier had a tiny chance of a fatal kick in a year, and there were many soldiers: a binomial with large{" "}
          <M>{"n"}</M> and small <M>{"p"}</M>. Bortkiewicz&rsquo;s data averaged 0.7 deaths per corps-year, and{" "}
          <M>{"\\operatorname{Pois}(0.7)"}</M> predicts about 50% zeros, 35% ones and 12% twos, close to what he found.
        </p>
      </Example>

      <Remark title="a family for each story">
        <p>
          Each distribution comes with a story: binomial for counting successes in a fixed number of trials, geometric for
          waiting until the first success, Poisson for counting rare events among many opportunities, such as typing errors per
          page or radioactive decays per second. Recognising the story is usually the hard part of a problem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "bin",
      rung: "check",
      prompt: <p>A fair coin is tossed 5 times. What is the probability of exactly 2 heads?</p>,
      answer: { kind: "numeric", value: 0.3125, tolerance: 0.001 },
    },
    {
      key: "story",
      rung: "check",
      prompt: <p>Which distribution fits the number of rolls of a die until the first six?</p>,
      answer: { kind: "choice", options: ["Binomial", "Geometric", "Poisson", "Bernoulli"], correct: [1] },
    },
    {
      key: "geo",
      rung: "apply",
      prompt: <p>What is the probability that the first six appears on the third roll of a fair die?</p>,
      answer: { kind: "numeric", value: 0.1157, tolerance: 0.001 },
    },
    {
      key: "pois",
      rung: "apply",
      prompt: <p>Typing errors occur at an average of 2 per page, following a Poisson distribution. What is the probability that a page has no errors?</p>,
      answer: { kind: "numeric", value: 0.1353, tolerance: 0.001 },
    },
    {
      key: "approx",
      rung: "apply",
      prompt: <p>1000 people each independently have a 0.003 chance of a rare reaction. Using the Poisson approximation, what is the probability that exactly 2 react?</p>,
      answer: { kind: "numeric", value: 0.224, tolerance: 0.002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the geometric distribution is memoryless: P(X &gt; m + k | X &gt; m) = P(X &gt; k).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows P(X > j) = (1 − p)ʲ, since the first j trials must all fail.",
          "Writes the conditional probability as P(X > m + k)/P(X > m), since the first event is contained in the second.",
          "Simplifies to (1 − p)ᵏ = P(X > k).",
        ],
      },
    },
    {
      key: "why",
      rung: "stretch",
      prompt: <p>Why might the number of goals in a football match be roughly Poisson? Where might the model fail?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the many-opportunities, small-chance story behind the Poisson.",
          "Names a way it could fail, such as goals changing the game, or teams of very different strength.",
          "Draws a conclusion about the model. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Bernoulli, binomial, geometric and Poisson distributions with the story behind each, why the binomial probabilities have the form they do, the memoryless property, and why the binomial tends to the Poisson.",

  glimpse: (
    <p>
      The next lesson defines expectation, the average value of a random variable. The central limit theorem later explains
      the bell shape of the binomial for large n, and statistics starts from random samples of such distributions.
    </p>
  ),
};
