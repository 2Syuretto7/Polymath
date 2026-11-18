import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { LikelihoodRatioViz } from "@/components/viz/LikelihoodRatioViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.4.3",
  minutes: 90,
  links: {
    revisits: ["m18.4.2", "m18.2.2", "m18.3.3"],
    foreshadows: ["m18.4.4", "m18.5.1", "m18.6.2"],
  },

  puzzle: (
    <>
      <p>
        A coin lands heads 32 times in 50. The best-fitting bias is 0.64, and a fair coin fits less well. But some loss of fit
        is expected by chance alone, since the best fit is tailored to the data. How large a loss should make you give up on
        fairness?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move k, n and the null value. Compare the drop in log-likelihood with the dashed line.</p>
      <LikelihoodRatioViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the generalised likelihood ratio">
        <p>
          To test <M>{"H_0: \\theta \\in \\Theta_0"}</M> inside a larger model Θ, compare the best fits:
        </p>
        <MD>{"\\Lambda = \\frac{\\sup_{\\theta\\in\\Theta} L(\\theta)}{\\sup_{\\theta\\in\\Theta_0} L(\\theta)} \\ge 1,"}</MD>
        <p>and reject when Λ is large. The numerator is the likelihood at the maximum likelihood estimate.</p>
      </Definition>

      <Theorem title="Wilks’s theorem (1938)">
        <p>
          Under regularity conditions, if <M>{"H_0"}</M> is true, then as n grows
        </p>
        <MD>{"2\\log\\Lambda \;\\to\; \\chi^2_d \\quad\\text{in distribution},"}</MD>
        <p>
          where d is the number of parameters fixed by the null, the difference in dimension between Θ and{" "}
          <M>{"\\Theta_0"}</M>. The idea: near the maximum the log-likelihood is close to a quadratic, and its curvature is the
          Fisher information, so twice the drop is a sum of d squared approximately standard normal variables.
        </p>
      </Theorem>

      <Example title="the coin">
        <p>
          With k heads in n tosses and <M>{"H_0: p = p_0"}</M>,{" "}
          <M>{"2\\log\\Lambda = 2\\big[k\\log\\tfrac{k}{np_0} + (n-k)\\log\\tfrac{n-k}{n(1-p_0)}\\big]"}</M>. For 32 heads in 50
          and <M>{"p_0 = 1/2"}</M> this is 3.97, just above the 5% point 3.84 of <M>{"\\chi^2_1"}</M>, so fairness is
          rejected, narrowly. The approximate p-value is 0.046.
        </p>
      </Example>

      <Remark title="inverting the test">
        <p>
          The null values that are not rejected form a confidence set:{" "}
          <M>{"\\{\\theta_0 : 2(\\ell(\\hat\\theta) - \\ell(\\theta_0)) \\le 3.84\\}"}</M> is an approximate 95% interval, the
          values within 1.92 of the peak of the log-likelihood. Many familiar tests, including the chi-squared test for
          contingency tables and F tests in regression, are likelihood ratio tests or close approximations to them.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does the generalised likelihood ratio compare?</p>,
      answer: {
        kind: "choice",
        options: [
          "The best likelihood over the whole model with the best likelihood under the null.",
          "The likelihood at two arbitrary points.",
          "The prior with the posterior.",
          "The sample mean with the sample median.",
        ],
        correct: [0],
      },
    },
    {
      key: "df",
      rung: "check",
      prompt: <p>In Wilks&rsquo;s theorem, what are the degrees of freedom of the limiting chi-squared distribution?</p>,
      answer: {
        kind: "choice",
        options: ["The number of parameters fixed by the null hypothesis", "The sample size", "Always 1", "The number of observations minus 1"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 100 and k = 60 with p₀ = 0.5. What is 2 log Λ? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 4.03, tolerance: 0.01 },
    },
    {
      key: "reject",
      rung: "apply",
      prompt: <p>With 14 heads in 20 tosses, 2 log Λ for a fair coin is 3.29. Is fairness rejected at the 5% level?</p>,
      answer: {
        kind: "choice",
        options: ["No, since 3.29 is below 3.84", "Yes, since 3.29 is above 1.92", "Yes, since 14 is more than half of 20", "It cannot be decided"],
        correct: [0],
      },
    },
    {
      key: "dim",
      rung: "apply",
      prompt: <p>A die is tested for fairness: the full model has probabilities for six faces summing to 1, and the null fixes them all. How many degrees of freedom does the chi-squared limit have?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For k heads in n tosses and null value p₀, derive the formula for 2 log Λ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the log-likelihood ℓ(p) = k log p + (n − k) log(1 − p), up to a constant, with maximum at p̂ = k/n.",
          "Computes 2 log Λ = 2(ℓ(p̂) − ℓ(p₀)).",
          "Simplifies to 2[k log(k/(np₀)) + (n − k) log((n − k)/(n(1 − p₀)))].",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why should 2 log Λ be approximately the square of a standard normal variable for the coin, when n is large?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands ℓ(p₀) about p̂ to second order: 2(ℓ(p̂) − ℓ(p₀)) ≈ nI(p̂)(p̂ − p₀)², with I(p) = 1/(p(1 − p)).",
          "Notes that (p̂ − p₀)√(nI) is approximately standard normal under the null, by the central limit theorem.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, p-values and their misuse: what a p-value is and is not, and how multiple testing and selective reporting turn
      chance into apparent discoveries.
    </p>
  ),
};
