import { M, MD } from "@/components/Math";
import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BootstrapViz } from "@/components/viz/BootstrapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.5.2",
  minutes: 90,
  links: {
    revisits: ["m18.5.1", "m18.1.2", "m18.2.4"],
    foreshadows: ["m18.6.3", "m18.6.1", "m18.6.2"],
  },

  puzzle: (
    <>
      <p>
        Fifteen commuters report their journey times, and you quote the median. How uncertain is it? For the mean there is a
        formula, σ/√n. For the median, the formula depends on the unknown shape of the distribution near its centre. Is there
        a way to find the uncertainty without a formula at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Resample the fifteen values with replacement many times, and watch the spread of the median.</p>
      <BootstrapViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the plug-in idea">
        <p>
          The sampling distribution of a statistic T depends on the unknown distribution F. The{" "}
          <strong>empirical distribution</strong> <M>{"\\hat F_n"}</M> puts mass 1/n on each observation, and is the best
          available estimate of F. The <strong>bootstrap</strong>, introduced by Bradley Efron in 1979, approximates the
          distribution of T under F by its distribution under <M>{"\\hat F_n"}</M>.
        </p>
      </Definition>

      <Definition title="the algorithm">
        <p>
          Draw B resamples <M>{"X^*_1, \\dots, X^*_n"}</M> from the data with replacement, compute the statistic on each to get{" "}
          <M>{"T^*_1, \\dots, T^*_B"}</M>, and use their spread. The bootstrap standard error is
        </p>
        <MD>{"\\widehat{\\operatorname{se}} = \\sqrt{\\frac{1}{B-1}\\sum_{b=1}^B \\big(T^*_b - \\bar T^*\\big)^2},"}</MD>
        <p>
          and the <strong>percentile interval</strong> runs from the 2.5% to the 97.5% point of the replicates. Large B removes
          the simulation error; it cannot remove the error from having only n observations.
        </p>
      </Definition>

      <Example title="what a resample looks like">
        <p>
          Each observation is left out of a given resample with probability <M>{"(1 - 1/n)^n"}</M>, which tends to{" "}
          <M>{"e^{-1} \\approx 0.368"}</M>. So a typical resample contains about 63% of the distinct original values, some of
          them repeated. For the sample in the visualisation the median is 4.1, and its bootstrap standard error is about
          0.5.
        </p>
      </Example>

      <Remark title="when it works and when it fails">
        <p>
          For smooth statistics such as means, medians and regression coefficients the bootstrap is consistent, and refined
          versions such as the BCa interval are accurate to higher order. It fails for some statistics that depend on the
          extremes: for the maximum of a sample from the uniform distribution on [0, θ], the resampled maximum equals the
          sample maximum with probability about 0.63, whatever n is.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "with",
      rung: "check",
      prompt: <p>How is a bootstrap resample drawn?</p>,
      answer: {
        kind: "choice",
        options: [
          "n values drawn from the observed data with replacement.",
          "n new observations from the population.",
          "n values drawn from the data without replacement.",
          "Half the data, chosen at random.",
        ],
        correct: [0],
      },
    },
    {
      key: "plug",
      rung: "check",
      prompt: <p>What does the bootstrap substitute for the unknown distribution F?</p>,
      answer: { kind: "choice", options: ["The empirical distribution of the data", "A normal distribution", "The uniform distribution", "The prior"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the median of the original sample?</p>,
      answer: { kind: "numeric", value: 4.1, tolerance: 0.01 },
    },
    {
      key: "left",
      rung: "apply",
      prompt: <p>With n = 15, what is the chance that a particular observation is left out of a resample? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.355, tolerance: 0.002 },
    },
    {
      key: "bigB",
      rung: "apply",
      prompt: <p>What does increasing the number of resamples B achieve?</p>,
      answer: {
        kind: "choice",
        options: [
          "It reduces the simulation error, but not the error from having only n observations.",
          "It makes the standard error go to 0.",
          "It increases the sample size.",
          "It removes bias from the statistic.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the probability that a given observation appears in a bootstrap resample of size n tends to 1 − 1/e.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that each of the n draws misses the given observation with probability 1 − 1/n, independently.",
          "Concludes that it is left out with probability (1 − 1/n)ⁿ.",
          "Uses (1 − 1/n)ⁿ → e⁻¹ to get that it appears with probability tending to 1 − 1/e ≈ 0.632.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the bootstrap fail for the maximum of a uniform sample on [0, θ]?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the resampled maximum equals the sample maximum whenever the largest observation is drawn, with probability about 0.632.",
          "Contrasts this with the true sampling distribution, which is continuous with no atom, so the bootstrap distribution cannot approximate it.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, regression: fitting a line to pairs of measurements by least squares, and what the slope does and does not
      tell you.
    </p>
  ),
};
