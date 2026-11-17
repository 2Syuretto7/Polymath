import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { LikelihoodViz } from "@/components/viz/LikelihoodViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.2.2",
  minutes: 90,
  links: {
    revisits: ["m18.2.1", "m9.2.2", "m9.3.2"],
    foreshadows: ["m18.2.3", "m18.3.3", "m18.4.3"],
  },

  puzzle: (
    <>
      <p>
        A coin is tossed ten times and lands heads seven times. If you had to name one value for its chance of heads, you
        would probably say 0.7. Why? Is there a principle behind that answer which also tells you what to do with data that
        are not coin tosses?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set the number of tosses and heads, then move the candidate value of p and watch the likelihood.</p>
      <LikelihoodViz />
    </>
  ),

  theory: (
    <>
      <Definition title="likelihood">
        <p>
          For data <M>{"x_1, \\dots, x_n"}</M> from a model with density or probability function <M>{"f(x \\mid \\theta)"}</M>,
          the <strong>likelihood</strong> is the joint probability of the data, viewed as a function of θ:
        </p>
        <MD>{"L(\\theta) = \\prod_{i=1}^n f(x_i \\mid \\theta), \\qquad \\ell(\\theta) = \\log L(\\theta) = \\sum_{i=1}^n \\log f(x_i \\mid \\theta)."}</MD>
        <p>
          The <strong>maximum likelihood estimate</strong> <M>{"\\hat\\theta"}</M> is the value of θ that maximises L, or
          equivalently ℓ. The likelihood is not a probability distribution for θ: it need not integrate to 1.
        </p>
      </Definition>

      <Example title="coins and normal data">
        <p>
          For k heads in n tosses, <M>{"\\ell(p) = k\\log p + (n-k)\\log(1-p)"}</M>. Setting{" "}
          <M>{"\\ell'(p) = k/p - (n-k)/(1-p) = 0"}</M> gives <M>{"\\hat p = k/n"}</M>. For a normal sample with unknown mean
          and variance, the same steps give <M>{"\\hat\\mu = \\bar X"}</M> and{" "}
          <M>{"\\hat\\sigma^2 = \\frac1n\\sum (X_i - \\bar X)^2"}</M>, with divisor n rather than n − 1.
        </p>
      </Example>

      <Theorem title="invariance and large samples">
        <p>
          If <M>{"\\hat\\theta"}</M> is the maximum likelihood estimate of θ, then <M>{"g(\\hat\\theta)"}</M> is the maximum
          likelihood estimate of g(θ): the standard deviation is estimated by <M>{"\\hat\\sigma"}</M>. Under regularity
          conditions, as n grows the estimate is consistent and approximately normal, with variance close to the smallest
          possible. That bound is the subject of a later lesson.
        </p>
      </Theorem>

      <Remark title="when calculus fails">
        <p>
          For the uniform distribution on [0, θ], <M>{"L(\\theta) = \\theta^{-n}"}</M> when θ is at least every observation
          and 0 otherwise. This decreases in θ, so the maximum is at the boundary: <M>{"\\hat\\theta = \\max X_i"}</M>. The
          derivative is never zero there, so always look at the shape of the likelihood, not only at its critical points.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the likelihood function?</p>,
      answer: {
        kind: "choice",
        options: [
          "The probability or density of the observed data, regarded as a function of the parameter.",
          "The probability that the parameter takes a given value.",
          "The sample mean of the data.",
          "The prior distribution of the parameter.",
        ],
        correct: [0],
      },
    },
    {
      key: "coin",
      rung: "check",
      prompt: <p>With k heads in n tosses, what is the maximum likelihood estimate of p?</p>,
      answer: { kind: "choice", options: ["k/n", "(k + 1)/(n + 2)", "1/2", "k/(n − k)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with 10 tosses and 7 heads, what is the log-likelihood at p = 0.5? Give two decimal places.</p>,
      answer: { kind: "numeric", value: -6.93, tolerance: 0.01 },
    },
    {
      key: "unif",
      rung: "apply",
      prompt: <p>A sample from the uniform distribution on [0, θ] is 2.1, 4.7, 3.3, 0.8. What is the maximum likelihood estimate of θ?</p>,
      answer: { kind: "numeric", value: 4.7, tolerance: 0.001 },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: <p>The maximum likelihood estimate of a normal variance is 9. What is the maximum likelihood estimate of the standard deviation?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Find the maximum likelihood estimate of λ from a sample of size n from the exponential distribution with density λ exp(−λx).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the log-likelihood n log λ − λΣxᵢ.",
          "Differentiates and sets n/λ − Σxᵢ = 0, giving λ̂ = n/Σxᵢ = 1/X̄.",
          "Checks it is a maximum, for example since the second derivative −n/λ² is negative.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>With 3 tosses and 3 heads, the maximum likelihood estimate of p is 1. Is that a sensible estimate? What would you do instead?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that p̂ = 1 says tails is impossible, which three tosses cannot show.",
          "Suggests a remedy, such as adding prior information or reporting an interval rather than a single value.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Bayesian estimators: put a prior distribution on the parameter, update it with the data, and summarise the
      posterior.
    </p>
  ),
};
