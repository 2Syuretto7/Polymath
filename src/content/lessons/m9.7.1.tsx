import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RunningMeanViz } from "@/components/viz/RunningMeanViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.7.1",
  minutes: 90,
  links: {
    revisits: ["m9.4.2", "m9.2.4", "m9.1.1"],
    foreshadows: ["m9.7.2", "m9.8.3", "m18.1.1"],
  },

  puzzle: (
    <>
      <p>
        Everyone believes that if you toss a fair coin many times, the proportion of heads gets close to a half. Casinos and
        insurers stake their business on it. But no rule forbids a long run of heads, and the coin has no memory. What exactly
        does probability guarantee about long-run averages, and why?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Watch several runs of die rolls. Each curve is a running average.</p>
      <RunningMeanViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the weak law of large numbers">
        <p>
          Let <M>{"X_1, X_2, \\dots"}</M> be independent and identically distributed with mean <M>{"\\mu"}</M> and finite
          variance <M>{"\\sigma^2"}</M>, and let <M>{"\\bar X_n = (X_1 + \\cdots + X_n)/n"}</M>. Then for every{" "}
          <M>{"\\varepsilon > 0"}</M>,
        </p>
        <MD>{"P\\big(|\\bar X_n - \\mu| \\ge \\varepsilon\\big) \\to 0 \\quad \\text{as } n \\to \\infty."}</MD>
      </Theorem>

      <Proof>
        <p>
          By linearity <M>{"E(\\bar X_n) = \\mu"}</M>, and by independence{" "}
          <M>{"\\operatorname{Var}(\\bar X_n) = n\\sigma^2/n^2 = \\sigma^2/n"}</M>. Chebyshev&rsquo;s inequality gives
        </p>
        <MD>{"P\\big(|\\bar X_n - \\mu| \\ge \\varepsilon\\big) \\le \\frac{\\sigma^2}{n\\varepsilon^2} \\to 0."}</MD>
      </Proof>

      <Theorem title="the strong law">
        <p>
          Under the same assumptions (in fact, finite mean is enough), <M>{"P\\big(\\bar X_n \\to \\mu\\big) = 1"}</M>: with
          probability one the sequence of averages converges. The weak law says that at each large <M>{"n"}</M> a big deviation
          is unlikely; the strong law says that, almost surely, deviations eventually stop for good.
        </p>
      </Theorem>

      <Example title="Monte Carlo">
        <p>
          To estimate an integral <M>{"\\int_0^1 g(x)\\,dx = E(g(U))"}</M>, average <M>{"g"}</M> at many uniform random points.
          The law of large numbers says the average converges, and the variance calculation says the error shrinks like{" "}
          <M>{"1/\\sqrt n"}</M>, whatever the dimension. Choosing random points in a square and counting those inside a quarter
          circle estimates <M>{"\\pi/4"}</M>.
        </p>
      </Example>

      <Remark title="what it does not say">
        <p>
          The law does not say that heads become due after a run of tails: future tosses are independent of the past, and the
          excess is not cancelled, only diluted by the many tosses that follow. Nor does it hold without a finite mean: averages
          of Cauchy variables never settle down at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "var",
      rung: "check",
      prompt: <p>Independent X₁, …, X₁₀₀ each have variance 9. What is the variance of their average?</p>,
      answer: { kind: "numeric", value: 0.09, tolerance: 0.0001 },
    },
    {
      key: "says",
      rung: "check",
      prompt: <p>What does the weak law of large numbers say?</p>,
      answer: {
        kind: "choice",
        options: [
          "The sample average equals μ for large n.",
          "The probability that the sample average is far from μ tends to 0.",
          "After many tails, heads becomes more likely.",
          "Every sequence of tosses has exactly half heads.",
        ],
        correct: [1],
      },
    },
    {
      key: "cheb",
      rung: "apply",
      prompt: <p>For 1000 rolls of a fair die (σ² = 35/12), what upper bound does Chebyshev give for P(|average − 3.5| ≥ 0.1)? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 35 / 12 / 1000 / 0.01, tolerance: 0.002 },
    },
    {
      key: "gambler",
      rung: "apply",
      prompt: <p>A fair coin has landed tails ten times in a row. What is the probability of heads on the next toss?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "pi",
      rung: "apply",
      prompt: <p>Of 10,000 random points in the unit square, 7,850 land inside the quarter circle x² + y² ≤ 1. What estimate of π does this give?</p>,
      answer: { kind: "numeric", value: 3.14, tolerance: 0.005 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the weak law of large numbers for independent, identically distributed variables with finite variance.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes E(X̄ₙ) = μ by linearity.",
          "Computes Var(X̄ₙ) = σ²/n using independence.",
          "Applies Chebyshev to get a bound σ²/(nε²) that tends to 0.",
        ],
      },
    },
    {
      key: "insure",
      rung: "stretch",
      prompt: <p>Explain, using the law of large numbers, why an insurance company with a million policies can predict its payouts well, while a single policyholder cannot predict their own. What assumption might fail in a pandemic?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that the average claim over many independent policies is close to its expectation.",
          "Notes that one policy has high variance and no averaging.",
          "Identifies independence failing when claims are correlated. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the weak law of large numbers and its proof from Chebyshev, the difference between the weak and strong laws, Monte Carlo estimation, and why the law does not support the gambler's fallacy.",

  glimpse: (
    <p>
      The next lesson asks how the average fluctuates around μ, and finds the normal curve. Markov chains have their own law
      of large numbers, and statistics begins from samples whose averages behave this way.
    </p>
  ),
};
