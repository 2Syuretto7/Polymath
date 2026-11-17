import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { MomentFitViz } from "@/components/viz/MomentFitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.2.1",
  minutes: 90,
  links: {
    revisits: ["m18.1.3", "m18.1.1", "m9.7.1"],
    foreshadows: ["m18.2.2", "m18.2.4", "m18.3.3"],
  },

  puzzle: (
    <>
      <p>
        You know that some numbers were drawn uniformly from an interval, but not which interval. Their average is 4.5 and
        they are spread out with standard deviation about 1.4. Where does the interval begin and end? Before reading on,
        try to say what equations you would solve.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Fit an interval to uniform data by matching the mean and variance. Draw several samples and watch the dots.</p>
      <MomentFitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the method of moments">
        <p>
          Suppose the distribution has k unknown parameters θ₁, …, θₖ. Its moments <M>{"\\mu_j(\\theta) = E[X^j]"}</M> are
          functions of the parameters, and the sample moments <M>{"m_j = \\frac1n\\sum X_i^j"}</M> are computable from the
          data. The <strong>method of moments</strong> estimate solves the k equations
        </p>
        <MD>{"\\mu_j(\\hat\\theta) = m_j, \\qquad j = 1, \\dots, k."}</MD>
        <p>Central moments, such as the variance, may be used in place of raw ones when that is easier.</p>
      </Definition>

      <Example title="two examples">
        <p>
          For the uniform distribution on [0, θ], the mean is θ/2, so <M>{"\\hat\\theta = 2\\bar X"}</M>. For the uniform
          distribution on [a, b], matching the mean (a + b)/2 and the variance (b − a)²/12 to <M>{"\\bar X"}</M> and{" "}
          <M>{"\\hat\\sigma^2 = \\frac1n\\sum (X_i - \\bar X)^2"}</M> gives
        </p>
        <MD>{"\\hat a = \\bar X - \\sqrt3\\,\\hat\\sigma, \\qquad \\hat b = \\bar X + \\sqrt3\\,\\hat\\sigma."}</MD>
      </Example>

      <Theorem title="consistency">
        <p>
          By the law of large numbers each sample moment tends to the corresponding population moment as n grows. If the
          map from parameters to moments has a continuous inverse, the method of moments estimates therefore tend to the true
          parameters: they are <strong>consistent</strong>.
        </p>
      </Theorem>

      <Remark title="strengths and weaknesses">
        <p>
          The method is simple, needs only moments rather than the full distribution, and often gives a good starting point
          for other methods. But it can give impossible answers, such as an interval that excludes some of the data, as in
          the visualisation, or a negative variance. It also wastes information: for the uniform distribution on [0, θ] the
          largest observation says far more about θ than the average does.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "idea",
      rung: "check",
      prompt: <p>What does the method of moments do?</p>,
      answer: {
        kind: "choice",
        options: [
          "It chooses the parameters so that the population moments equal the sample moments.",
          "It chooses the parameters that make the data most probable.",
          "It averages the prior and the data.",
          "It chooses the parameters that minimise the largest observation.",
        ],
        correct: [0],
      },
    },
    {
      key: "unif",
      rung: "check",
      prompt: <p>For the uniform distribution on [0, θ], what is the method of moments estimate of θ?</p>,
      answer: { kind: "choice", options: ["2X̄", "X̄", "The largest observation", "X̄/2"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what can go wrong with the method of moments interval?</p>,
      answer: {
        kind: "choice",
        options: [
          "Some observations can lie outside [â, b̂], which is impossible if the estimates were right.",
          "The interval always has length exactly 5.",
          "The interval is never centred near 4.5.",
          "Nothing can go wrong for uniform data.",
        ],
        correct: [0],
      },
    },
    {
      key: "num",
      rung: "apply",
      prompt: <p>Data from the uniform distribution on [0, θ] have sample mean 3.2. What is the method of moments estimate of θ?</p>,
      answer: { kind: "numeric", value: 6.4, tolerance: 0.001 },
    },
    {
      key: "ab",
      rung: "apply",
      prompt: <p>Uniform data on [a, b] have X̄ = 5 and σ̂ = 1. What is the method of moments estimate of b? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 6.73, tolerance: 0.01 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>The exponential distribution with rate λ has mean 1/λ. Find the method of moments estimate of λ and show that it is consistent.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets 1/λ equal to X̄ and solves to get the estimate 1/X̄.",
          "Uses the law of large numbers: X̄ tends to 1/λ as n grows.",
          "Uses continuity of x ↦ 1/x at 1/λ > 0 to conclude that 1/X̄ tends to λ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For uniform data on [0, θ], would you rather estimate θ by 2X̄ or by something built from the largest observation? Why?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that 2X̄ can come out smaller than the largest observation, which is impossible.",
          "Notes that the maximum carries more information about θ, though on its own it is too small on average.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, maximum likelihood: choose the parameter value under which the observed data were most probable.
    </p>
  ),
};
