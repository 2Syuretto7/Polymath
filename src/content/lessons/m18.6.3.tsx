import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { SlopeSamplingViz } from "@/components/viz/SlopeSamplingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.6.3",
  minutes: 90,
  links: {
    revisits: ["m18.6.2", "m18.5.1", "m18.4.1"],
    foreshadows: ["m27.2.1", "m23.2.1", "m27.1.2"],
  },

  puzzle: (
    <>
      <p>
        A study of ten towns finds that each extra kilometre from the coast goes with 0.4 mm less rain a day. Another sample
        of ten towns would give a different slope. How different, and could the true slope be zero?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Simulate many samples from the same line and see how the fitted slope varies with n and σ.</p>
      <SlopeSamplingViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the sampling distribution of the slope">
        <p>
          In the model <M>{"y_i = \\alpha + \\beta x_i + \\varepsilon_i"}</M> with independent errors of mean 0 and variance
          σ², the slope <M>{"\\hat\\beta = \\sum (x_i - \\bar x) y_i / S_{xx}"}</M> is a linear combination of the y values, so
        </p>
        <MD>{"E[\\hat\\beta] = \\beta, \\qquad \\operatorname{Var}(\\hat\\beta) = \\frac{\\sigma^2}{S_{xx}}."}</MD>
        <p>If the errors are normal, <M>{"\\hat\\beta"}</M> is exactly normal.</p>
      </Theorem>

      <Definition title="standard error and the t statistic">
        <p>
          σ is unknown, and is estimated by <M>{"s^2 = \\mathrm{RSS}/(n-2)"}</M>, dividing by the dimension of the residual
          space. The standard error is <M>{"\\operatorname{se}(\\hat\\beta) = s/\\sqrt{S_{xx}}"}</M>, and with normal errors
        </p>
        <MD>{"T = \\frac{\\hat\\beta - \\beta}{\\operatorname{se}(\\hat\\beta)} \\sim t_{n-2}."}</MD>
        <p>
          This gives the test of <M>{"H_0: \\beta = 0"}</M> and the interval{" "}
          <M>{"\\hat\\beta \\pm t_{n-2,\\,0.025}\\,\\operatorname{se}(\\hat\\beta)"}</M>.
        </p>
      </Definition>

      <Example title="the design matters">
        <p>
          With x = 1, 2, …, 10, <M>{"S_{xx} = 82.5"}</M>, so with σ = 1 the slope has standard deviation{" "}
          <M>{"1/\\sqrt{82.5} \\approx 0.110"}</M>. Doubling the number of points to 20 raises <M>{"S_{xx}"}</M> to 665 and cuts the
          standard deviation to about 0.039. Spreading the x values out helps as much as adding points.
        </p>
      </Example>

      <Remark title="assumptions">
        <p>
          The calculation assumes a straight-line mean, independent errors and constant variance; plots of residuals against
          fitted values are the usual check. Without normality, the t interval is still approximately right for large n, and
          the bootstrap, resampling cases or residuals, offers another route. A significant slope shows association in the
          data, not that changing x would change y.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "var",
      rung: "check",
      prompt: <p>What is the variance of the least-squares slope in the simple linear model?</p>,
      answer: { kind: "choice", options: ["σ²/Sxx", "σ²/n", "σ²", "Sxx/σ²"], correct: [0] },
    },
    {
      key: "df",
      rung: "check",
      prompt: <p>How many degrees of freedom does the t statistic for the slope have, with n points?</p>,
      answer: { kind: "choice", options: ["n − 2", "n − 1", "n", "2"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 20 and σ = 1. What standard deviation does theory give for the slope? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.039, tolerance: 0.001 },
    },
    {
      key: "se",
      rung: "apply",
      prompt: <p>A fit gives slope 0.40 with standard error 0.15 from 12 points. What is the t statistic for H₀: β = 0? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 2.67, tolerance: 0.01 },
    },
    {
      key: "spread",
      rung: "apply",
      prompt: <p>Which design gives the most precise slope, with five points and the same σ?</p>,
      answer: {
        kind: "choice",
        options: ["x = 0, 0, 10, 10, 10", "x = 4, 5, 5, 5, 6", "x = 5, 5, 5, 5, 5", "x = 1, 2, 3, 4, 5"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that β̂ = Σ(xᵢ − x̄)yᵢ / Sxx is unbiased and has variance σ²/Sxx.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes β̂ = Σcᵢyᵢ with cᵢ = (xᵢ − x̄)/Sxx, and notes Σcᵢ = 0 and Σcᵢxᵢ = 1.",
          "Computes E[β̂] = Σcᵢ(α + βxᵢ) = β.",
          "Uses independence to get Var(β̂) = σ²Σcᵢ² = σ²/Sxx.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is σ² estimated by RSS/(n − 2) rather than RSS/n?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the residual vector lies in an (n − 2)-dimensional space, since two parameters were fitted.",
          "Explains that E[RSS] = (n − 2)σ², so dividing by n − 2 gives an unbiased estimate.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      This completes mathematical statistics. Measure-theoretic probability later puts its limit theorems on a firm footing,
      and functional analysis generalises least squares to projection in Hilbert space.
    </p>
  ),
};
