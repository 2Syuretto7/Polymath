import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { CoverageViz } from "@/components/viz/CoverageViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.5.1",
  minutes: 90,
  links: {
    revisits: ["m18.4.1", "m18.1.2", "m9.7.2"],
    foreshadows: ["m18.5.2", "m18.6.1", "m18.6.2"],
  },

  puzzle: (
    <>
      <p>
        A survey reports that 52% of voters favour a policy, &ldquo;with a margin of error of 3 points&rdquo;. Does that mean
        there is a 95% chance that the true figure lies between 49% and 55%? Most people think so. A careful statistician
        would hesitate. Why?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Each line is an interval from a different sample. Change the level and the sample size, and draw again.</p>
      <CoverageViz />
    </>
  ),

  theory: (
    <>
      <Definition title="confidence interval">
        <p>
          A <strong>confidence interval</strong> at level 1 − α is a pair of statistics <M>{"(L(X), U(X))"}</M> such that, for
          every value of θ,
        </p>
        <MD>{"P_\\theta\\big(L(X) \\le \\theta \\le U(X)\\big) \\ge 1 - \\alpha."}</MD>
        <p>The randomness is in the endpoints, not in θ.</p>
      </Definition>

      <Example title="a normal mean">
        <p>
          For n observations from N(μ, σ²) with σ known,{" "}
          <M>{"(\\bar X - \\mu)\\sqrt n/\\sigma"}</M> is standard normal whatever μ is: a <strong>pivot</strong>. So{" "}
          <M>{"\\bar X \\pm z_{\\alpha/2}\\,\\sigma/\\sqrt n"}</M> is an exact interval; at 95%, z is 1.96. With σ unknown, use
          the sample standard deviation S and the t distribution with n − 1 degrees of freedom. For large samples from other
          distributions the central limit theorem makes the normal interval approximately right.
        </p>
      </Example>

      <Theorem title="duality with tests">
        <p>
          If, for each <M>{"\\theta_0"}</M>, there is a test of size α for <M>{"H_0: \\theta = \\theta_0"}</M>, then the set of{" "}
          <M>{"\\theta_0"}</M> not rejected by the data is a confidence set at level 1 − α. Conversely, a confidence set gives a
          test: reject <M>{"\\theta_0"}</M> when it lies outside. The likelihood ratio interval of the previous lessons is an
          example.
        </p>
      </Theorem>

      <Remark title="what the level means">
        <p>
          Before the data are seen, the interval will cover θ with probability 95%. Once it is computed, say as (49, 55), it
          either contains θ or does not; the 95% describes the procedure. A Bayesian <strong>credible interval</strong> does
          carry a probability statement about θ given the data, but it needs a prior. The margin of error in a poll is usually
          about <M>{"1.96\\sqrt{p(1-p)/n}"}</M>, about 3 points for n = 1000.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "meaning",
      rung: "check",
      prompt: <p>What does it mean that a procedure gives 95% confidence intervals?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whatever the true value, the random interval covers it with probability 95%.",
          "The true value lies in this particular interval with probability 95%.",
          "95% of the data lie in the interval.",
          "The estimate is 95% accurate.",
        ],
        correct: [0],
      },
    },
    {
      key: "pivot",
      rung: "check",
      prompt: <p>What is a pivot?</p>,
      answer: {
        kind: "choice",
        options: [
          "A function of the data and the parameter whose distribution does not depend on the parameter.",
          "A statistic that does not depend on the data.",
          "The midpoint of a confidence interval.",
          "A sufficient statistic.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with n = 25 at the 95% level, what is the half-width of each interval? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.392, tolerance: 0.001 },
    },
    {
      key: "quad",
      rung: "apply",
      prompt: <p>To halve the width of a normal-mean interval at a fixed level, by what factor must the sample size be multiplied?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "poll",
      rung: "apply",
      prompt: <p>A poll of 1000 finds a proportion close to 0.5. Using 1.96√(p(1 − p)/n), what is the margin of error, in percentage points? Give one decimal place.</p>,
      answer: { kind: "numeric", value: 3.1, tolerance: 0.1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For n observations from N(μ, 1), show that X̄ ± 1.96/√n covers μ with probability 0.95 for every μ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that X̄ ∼ N(μ, 1/n), so Z = (X̄ − μ)√n is standard normal whatever μ is.",
          "Rewrites the event that μ lies in X̄ ± 1.96/√n as |Z| ≤ 1.96.",
          "Concludes that its probability is Φ(1.96) − Φ(−1.96) = 0.95, for every μ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can a 95% interval computed from your data not be given a 95% probability of containing μ, without further assumptions?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that in the frequentist framework μ is fixed, so the computed interval either contains it or does not.",
          "Explains that a probability for μ given the data needs a prior, as in a Bayesian credible interval.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the bootstrap: estimating the sampling distribution of almost any statistic by resampling the data you already
      have.
    </p>
  ),
};
