import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { OrderStatViz } from "@/components/viz/OrderStatViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.1.3",
  minutes: 90,
  links: {
    revisits: ["m18.1.2", "m9.5.3", "m9.2.2"],
    foreshadows: ["m18.3.1", "m18.5.2", "m18.2.2"],
  },

  puzzle: (
    <>
      <p>
        Captured machines carry serial numbers 1, 2, 3, … up to some unknown total N. You see five of them, and the largest
        number among them is 60. How many machines are there likely to be? The answer is surely more than 60, but by how
        much?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a sample size and a rank, and see where the k-th smallest of n uniform numbers tends to fall.</p>
      <OrderStatViz />
    </>
  ),

  theory: (
    <>
      <Definition title="order statistics">
        <p>
          Sorting a sample gives the <strong>order statistics</strong> <M>{"X_{(1)} \\le X_{(2)} \\le \\dots \\le X_{(n)}"}</M>.
          The minimum is <M>{"X_{(1)}"}</M>, the maximum <M>{"X_{(n)}"}</M>, and the sample median is the middle one, or
          the average of the middle two. They are statistics, so they have sampling distributions.
        </p>
      </Definition>

      <Theorem title="the maximum and the minimum">
        <p>
          For a random sample with distribution function F, the maximum is at most x exactly when every observation is,
          and the minimum exceeds x exactly when every observation does. By independence,
        </p>
        <MD>{"P(X_{(n)} \\le x) = F(x)^n, \\qquad P(X_{(1)} > x) = \\big(1 - F(x)\\big)^n."}</MD>
      </Theorem>

      <Theorem title="the k-th order statistic">
        <p>
          The k-th smallest is at most x when at least k observations are, and the number that are is binomial with
          parameters n and F(x). So{" "}
          <M>{"P(X_{(k)} \\le x) = \\sum_{j=k}^n \\binom nj F(x)^j (1-F(x))^{n-j}"}</M>. For a density f, differentiating
          gives
        </p>
        <MD>{"f_{(k)}(x) = \\frac{n!}{(k-1)!\\,(n-k)!}\\, F(x)^{k-1}\\big(1-F(x)\\big)^{n-k} f(x)."}</MD>
        <p>
          The pattern reads off directly: k − 1 observations below x, one at x, and n − k above. For the uniform
          distribution on [0, 1] this is a beta density, with mean k/(n + 1).
        </p>
      </Theorem>

      <Example title="estimating the total">
        <p>
          In the puzzle, the n observed serial numbers split 1 to N into n + 1 gaps that are equal on average. The largest
          observation m is followed by one such gap, so a natural estimate is <M>{"m + m/n - 1"}</M>, which for m = 60 and
          n = 5 gives 71. Allied statisticians used this reasoning on captured German tanks in the Second World War, and
          their estimates of production proved far closer to the truth than intelligence reports.
        </p>
      </Example>

      <Remark title="robustness">
        <p>
          The sample median depends only on the middle of the ordered sample, so one wild observation can move it only a
          little, while it can drag the sample mean anywhere. The price is efficiency: for normal data the median varies
          about 25 percent more than the mean in standard deviation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "max",
      rung: "check",
      prompt: <p>For a random sample of size n with distribution function F, what is P(maximum ≤ x)?</p>,
      answer: { kind: "choice", options: ["F(x)ⁿ", "nF(x)", "1 − (1 − F(x))ⁿ", "F(x)/n"], correct: [0] },
    },
    {
      key: "mean",
      rung: "check",
      prompt: <p>For n independent uniform numbers on [0, 1], what is the expected value of the k-th smallest?</p>,
      answer: { kind: "choice", options: ["k/(n + 1)", "k/n", "(k − 1)/n", "1/2"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 5 and k = 4. What is P(X₍₄₎ ≤ 0.5)? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.19, tolerance: 0.01 },
    },
    {
      key: "bulbs",
      rung: "apply",
      prompt: <p>Three bulbs have independent exponential lifetimes with mean 1 year. What is the expected time until the first fails, in years? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.33, tolerance: 0.01 },
    },
    {
      key: "tank",
      rung: "apply",
      prompt: <p>Ten serial numbers are observed and the largest is 120. Using the estimate m + m/n − 1, how many machines are there?</p>,
      answer: { kind: "numeric", value: 131, tolerance: 0.5 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Find the distribution function and the density of the minimum of a random sample with distribution function F and density f.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the minimum exceeds x exactly when every observation exceeds x.",
          "Uses independence to get P(minimum > x) = (1 − F(x))ⁿ, so its distribution function is 1 − (1 − F(x))ⁿ.",
          "Differentiates to get the density n(1 − F(x))ⁿ⁻¹ f(x).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>When would you report the sample median rather than the sample mean, and what would it cost you?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the median resists outliers and heavy tails, for example with incomes or house prices.",
          "Notes the cost, for example that for normal data the median is less precise than the mean.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, estimation begins with the method of moments: choose the parameters so that the population moments match the
      sample moments.
    </p>
  ),
};
