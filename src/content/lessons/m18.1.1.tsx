import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { IidSampleViz } from "@/components/viz/IidSampleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.1.1",
  minutes: 90,
  links: {
    revisits: ["m9.7.1", "m9.2.4", "m9.2.3"],
    foreshadows: ["m18.1.2", "m18.2.4", "m18.5.2"],
  },

  puzzle: (
    <>
      <p>
        A pollster asks a thousand people a question and reports that 52 percent said yes. A different thousand would have
        given a different figure. If the answer changes every time we ask, in what sense does the survey tell us anything
        about the whole country?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Draw thousands of samples from a population and watch how their sample means and variances behave.</p>
      <IidSampleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="random samples and statistics">
        <p>
          A <strong>random sample</strong> of size n from a distribution F is a list of random variables{" "}
          <M>{"X_1, \\dots, X_n"}</M> that are independent and each have distribution F: they are{" "}
          <strong>independent and identically distributed</strong>. A <strong>statistic</strong> is any function of the
          sample that does not involve unknown parameters, such as the sample mean and the sample variance
        </p>
        <MD>{"\\bar X = \\frac1n\\sum_{i=1}^n X_i, \\qquad S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar X)^2."}</MD>
        <p>Before the data come in, a statistic is a random variable with a distribution of its own.</p>
      </Definition>

      <Theorem title="mean and variance of the sample mean">
        <p>
          If each <M>{"X_i"}</M> has mean μ and variance σ², then by linearity and independence
        </p>
        <MD>{"E[\\bar X] = \\mu, \\qquad \\operatorname{Var}(\\bar X) = \\frac{\\sigma^2}{n}, \\qquad E[S^2] = \\sigma^2."}</MD>
        <p>
          So <M>{"\\bar X"}</M> is centred on μ and its standard deviation <M>{"\\sigma/\\sqrt n"}</M> shrinks as the sample
          grows, which is what lies behind the weak law of large numbers.
        </p>
      </Theorem>

      <Example title="why n − 1">
        <p>
          The deviations <M>{"X_i - \\bar X"}</M> are measured from the sample mean, which sits closer to the data than μ does.
          In fact <M>{"\\sum (X_i - \\bar X)^2 = \\sum (X_i - \\mu)^2 - n(\\bar X - \\mu)^2"}</M>, whose expectation is{" "}
          <M>{"n\\sigma^2 - \\sigma^2 = (n-1)\\sigma^2"}</M>. Dividing by n would underestimate σ² by the factor (n − 1)/n.
          The deviations also sum to zero, so only n − 1 of them are free: the sample has n − 1 degrees of freedom.
        </p>
      </Example>

      <Remark title="when the model is only a model">
        <p>
          Polls sample without replacement from a finite population, so the draws are slightly dependent; when the
          population is much larger than the sample, this hardly matters. More serious failures come from who is reached and
          who answers. The formula <M>{"\\sigma/\\sqrt n"}</M> describes chance variation only, not bias in how the sample
          was drawn.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "iid",
      rung: "check",
      prompt: <p>What makes X₁, …, Xₙ a random sample from a distribution F?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are independent and each has distribution F.",
          "They are all equal.",
          "They are listed in increasing order.",
          "Their average equals the mean of F.",
        ],
        correct: [0],
      },
    },
    {
      key: "mean",
      rung: "check",
      prompt: <p>If each Xᵢ has mean μ and variance σ², what is the variance of the sample mean of n of them?</p>,
      answer: { kind: "choice", options: ["σ²/n", "σ²", "nσ²", "σ/√n"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which divisor gives an average of S² close to the population variance, for every population and sample size?</p>,
      answer: { kind: "choice", options: ["n − 1", "n", "n + 1", "Neither; it depends on the population"], correct: [0] },
    },
    {
      key: "die",
      rung: "apply",
      prompt: <p>A fair die has variance 35/12. What is the variance of the mean of 4 rolls? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.729, tolerance: 0.002 },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>Lifetimes have mean 1 and standard deviation 1. What is the standard deviation of the mean of 25 lifetimes?</p>,
      answer: { kind: "numeric", value: 0.2, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that E[S²] = σ², where S² uses the divisor n − 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes Σ(Xᵢ − X̄)² = Σ(Xᵢ − μ)² − n(X̄ − μ)², or equivalently ΣXᵢ² − nX̄².",
          "Takes expectations, using E[(Xᵢ − μ)²] = σ² and E[(X̄ − μ)²] = σ²/n, to get nσ² − σ² = (n − 1)σ².",
          "Divides by n − 1 to conclude.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>S² is an unbiased estimate of σ². Is S then an unbiased estimate of σ?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the square root is concave, so by Jensen’s inequality E[S] ≤ √E[S²] = σ.",
          "Concludes that S tends to underestimate σ, strictly unless S is constant.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, sampling distributions: the exact distribution of the sample mean and variance for normal data, and the t
      distribution that appears when σ is unknown.
    </p>
  ),
};
