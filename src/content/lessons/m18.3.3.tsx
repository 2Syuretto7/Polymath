import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { FisherInfoViz } from "@/components/viz/FisherInfoViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.3.3",
  minutes: 90,
  links: {
    revisits: ["m18.3.2", "m18.2.2", "m9.4.2"],
    foreshadows: ["m18.4.3", "m18.5.1", "m18.4.2"],
  },

  puzzle: (
    <>
      <p>
        You estimate the bias of a coin by the proportion of heads in 25 tosses. Could some ingenious unbiased estimator do
        better, or is there a limit to how precise any unbiased estimate from 25 tosses can be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change n and p. Compare the bound with the error of a slightly biased estimator.</p>
      <FisherInfoViz />
    </>
  ),

  theory: (
    <>
      <Definition title="score and Fisher information">
        <p>
          For a single observation with density f(x; θ), the <strong>score</strong> is{" "}
          <M>{"s(\\theta) = \\partial_\\theta \\log f(X;\\theta)"}</M>. Under regularity conditions it has mean 0, and its
          variance is the <strong>Fisher information</strong>
        </p>
        <MD>{"I(\\theta) = E\\big[s(\\theta)^2\\big] = -E\\big[\\partial_\\theta^2 \\log f(X;\\theta)\\big]."}</MD>
        <p>For n independent observations the information adds up to nI(θ).</p>
      </Definition>

      <Theorem title="the Cramér-Rao bound">
        <p>If T is an unbiased estimator of θ from n independent observations, then, under regularity conditions,</p>
        <MD>{"\\operatorname{Var}(T) \\ge \\frac{1}{n I(\\theta)}."}</MD>
        <p>
          Proof sketch. Unbiasedness gives <M>{"\\operatorname{Cov}(T, S) = 1"}</M>, where S is the total score. By the
          Cauchy-Schwarz inequality, <M>{"1 \\le \\operatorname{Var}(T)\\operatorname{Var}(S) = \\operatorname{Var}(T)\\, nI(\\theta)"}</M>.
        </p>
      </Theorem>

      <Example title="the coin">
        <p>
          For Bernoulli(p), <M>{"I(p) = 1/(p(1-p))"}</M>, so every unbiased estimator has variance at least{" "}
          <M>{"p(1-p)/n"}</M>. The sample proportion has exactly this variance, so it is <strong>efficient</strong>. For
          N(μ, σ²) with σ known, the bound is σ²/n, attained by the sample mean.
        </p>
      </Example>

      <Remark title="what the bound does not say">
        <p>
          It constrains only unbiased estimators. The estimator (k + 1)/(n + 2) in the visualisation is biased towards 1/2 and
          beats the bound near p = 1/2, at the price of doing worse near 0 and 1. The bound also needs regularity: for the
          uniform distribution on [0, θ] the support depends on θ, and the maximum does far better than 1/n. Asymptotically,
          the maximum likelihood estimator attains the bound, which is the sense in which it is optimal.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "bound",
      rung: "check",
      prompt: <p>What does the Cramér-Rao bound say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every unbiased estimator has variance at least 1/(nI(θ)).",
          "Every estimator has mean squared error at least 1/(nI(θ)).",
          "The maximum likelihood estimator is always unbiased.",
          "The Fisher information is at most 1.",
        ],
        correct: [0],
      },
    },
    {
      key: "info",
      rung: "check",
      prompt: <p>What is the Fisher information of one Bernoulli(p) observation?</p>,
      answer: { kind: "choice", options: ["1/(p(1 − p))", "p(1 − p)", "p", "1/p"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 100 and p = 0.5. What is the Cramér-Rao bound? Give four decimal places.</p>,
      answer: { kind: "numeric", value: 0.0025, tolerance: 0.0001 },
    },
    {
      key: "normal",
      rung: "apply",
      prompt: <p>Sixteen observations come from N(μ, 4) with the variance known. What is the Cramér-Rao bound for unbiased estimators of μ?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "beat",
      rung: "apply",
      prompt: <p>How can (k + 1)/(n + 2) have smaller error than the bound near p = 1/2?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is biased, and the bound applies only to unbiased estimators.",
          "It uses more data.",
          "The bound is wrong for the binomial.",
          "It has larger variance but smaller bias.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Compute the Fisher information of one Bernoulli(p) observation.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes log f(x; p) = x log p + (1 − x) log(1 − p), with score x/p − (1 − x)/(1 − p).",
          "Computes E[score²] = p · (1/p²) + (1 − p) · (1/(1 − p)²), or uses the second derivative.",
          "Simplifies to 1/p + 1/(1 − p) = 1/(p(1 − p)).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does a sharply peaked log-likelihood mean high Fisher information, and why should that make precise estimation possible?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Relates I(θ) to the expected curvature, minus the second derivative of the log-likelihood.",
          "Explains that a sharp peak means nearby parameter values fit the data noticeably worse, so the data discriminate between them.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, hypothesis tests: deciding between two accounts of the data, the two kinds of error that can be made, and the
      power to detect a real effect.
    </p>
  ),
};
