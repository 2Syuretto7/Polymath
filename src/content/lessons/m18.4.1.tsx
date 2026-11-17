import { M, MD } from "@/components/Math";
import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PowerCurveViz } from "@/components/viz/PowerCurveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.4.1",
  minutes: 90,
  links: {
    revisits: ["m18.3.3", "m18.1.2", "m9.7.2"],
    foreshadows: ["m18.4.2", "m18.4.4", "m18.5.1"],
  },

  puzzle: (
    <>
      <p>
        A new fertiliser is tried on 25 plots, and the average gain in yield is 0.3 units. Plots vary, so even a useless
        fertiliser would show some gain or loss. How large must the gain be before you believe it is real, and how often will
        you be fooled either way?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the sample size, the significance level and the true mean. Watch the threshold and the power.</p>
      <PowerCurveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the set-up">
        <p>
          A <strong>null hypothesis</strong> <M>{"H_0"}</M> and an <strong>alternative</strong> <M>{"H_1"}</M> are claims
          about the parameter. A <strong>test</strong> is a rule that rejects <M>{"H_0"}</M> when the data fall in a{" "}
          <strong>rejection region</strong>, usually of the form T(X) &gt; c for a test statistic T.
        </p>
      </Definition>

      <Definition title="the two errors">
        <p>
          A <strong>type I error</strong> rejects a true null; a <strong>type II error</strong> fails to reject a false one.
          The <strong>size</strong> of the test is the largest chance of a type I error over the null. The{" "}
          <strong>power</strong> at a parameter value in the alternative is the chance of rejecting there, so 1 minus the chance
          of a type II error. One fixes the size at a level α, such as 0.05, and then seeks high power.
        </p>
      </Definition>

      <Example title="a normal mean">
        <p>
          With <M>{"X_i \\sim N(\\mu, 1)"}</M>, test <M>{"H_0: \\mu = 0"}</M> against <M>{"H_1: \\mu > 0"}</M> by rejecting
          when <M>{"\\bar X > c"}</M>. Since <M>{"\\bar X \\sim N(\\mu, 1/n)"}</M>, size α needs{" "}
          <M>{"c = z_\\alpha/\\sqrt n"}</M>, and the power at μ is
        </p>
        <MD>{"\\beta(\\mu) = 1 - \\Phi\\big((c - \\mu)\\sqrt n\\big) = \\Phi\\big(\\mu\\sqrt n - z_\\alpha\\big)."}</MD>
        <p>For n = 25 and α = 0.05, c = 1.645/5 ≈ 0.329, so the fertiliser&rsquo;s 0.3 would not quite count.</p>
      </Example>

      <Remark title="p-values and asymmetry">
        <p>
          The <strong>p-value</strong> is the smallest level at which the observed data would lead to rejection: the chance,
          under the null, of a result at least as extreme. The two hypotheses are not treated alike. Failing to reject is not
          evidence that the null is true; the test may simply lack power. By the central limit theorem, the same recipe works
          approximately for means of non-normal data when n is large.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "type1",
      rung: "check",
      prompt: <p>What is a type I error?</p>,
      answer: {
        kind: "choice",
        options: ["Rejecting the null hypothesis when it is true", "Failing to reject a false null hypothesis", "Choosing the wrong test statistic", "Miscalculating the p-value"],
        correct: [0],
      },
    },
    {
      key: "power",
      rung: "check",
      prompt: <p>What is the power of a test at a parameter value in the alternative?</p>,
      answer: {
        kind: "choice",
        options: ["The probability of rejecting the null there", "The probability that the null is true", "The significance level", "The p-value"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 50, α = 0.05 and μ = 0.5. What is the power? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.97, tolerance: 0.01 },
    },
    {
      key: "null",
      rung: "apply",
      prompt: <p>In the visualisation, what is the power when the true mean is μ = 0, with α = 0.05?</p>,
      answer: { kind: "numeric", value: 0.05, tolerance: 0.005 },
    },
    {
      key: "thresh",
      rung: "apply",
      prompt: <p>With n = 100 and α = 0.05, so that z is 1.645, what is the threshold c for the sample mean? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.1645, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For the normal-mean test in the lesson, show that the size is α and that the power increases with μ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses X̄ ∼ N(μ, 1/n) to write the power as 1 − Φ((c − μ)√n).",
          "Substitutes μ = 0 and c = z/√n, where z is the upper α point of N(0, 1), to get 1 − Φ(z) = α.",
          "Notes that (c − μ)√n decreases in μ and Φ is increasing, so the power increases with μ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>A study fails to reject the null at the 5% level. A journalist reports that it showed there is no effect. What is wrong with this?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that failing to reject is not evidence that the null is true, because the test may have low power.",
          "Mentions that power depends on sample size and effect size, so a small study can easily miss a real effect.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the Neyman-Pearson lemma: for testing one simple hypothesis against another, the most powerful test of a given
      size rejects when the likelihood ratio is large.
    </p>
  ),
};
