import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SpreadViz } from "@/components/viz/SpreadViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.2.4",
  minutes: 85,
  links: {
    revisits: ["m9.2.3", "m9.2.2", "m9.1.5"],
    foreshadows: ["m9.4.2", "m9.5.2", "m9.7.2"],
  },

  puzzle: (
    <>
      <p>
        Two bus routes both take 30 minutes on average. On one the trip always takes between 28 and 32 minutes; on the other it
        is 20 minutes on a good day and 45 on a bad one. The averages agree, yet any commuter would choose the first. What
        number captures the difference, and why square the deviations rather than just averaging them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the mean, the spread and the weight in the tails, and watch which of them changes the variance.</p>
      <SpreadViz />
    </>
  ),

  theory: (
    <>
      <Definition title="variance and standard deviation">
        <p>If <M>{"X"}</M> has mean <M>{"\\mu = E(X)"}</M>, its <strong>variance</strong> and <strong>standard deviation</strong> are</p>
        <MD>{"\\operatorname{Var}(X) = E\\big((X - \\mu)^2\\big), \\qquad \\operatorname{SD}(X) = \\sqrt{\\operatorname{Var}(X)}."}</MD>
        <p>
          The plain average deviation <M>{"E(X - \\mu)"}</M> is always 0, since positive and negative deviations cancel;
          squaring stops the cancelling. The standard deviation returns to the units of <M>{"X"}</M>.
        </p>
      </Definition>

      <Theorem title="a computing formula">
        <MD>{"\\operatorname{Var}(X) = E(X^2) - \\big(E(X)\\big)^2."}</MD>
      </Theorem>

      <Proof>
        <p>Expand and use linearity, remembering that <M>{"\\mu"}</M> is a constant:</p>
        <MD>{"E(X^2 - 2\\mu X + \\mu^2) = E(X^2) - 2\\mu E(X) + \\mu^2 = E(X^2) - \\mu^2."}</MD>
      </Proof>

      <Theorem title="shifting and scaling">
        <p>For constants <M>{"a"}</M> and <M>{"b"}</M>, <M>{"\\operatorname{Var}(aX + b) = a^2\\operatorname{Var}(X)"}</M>. Shifting does nothing to the spread; scaling by <M>{"a"}</M> multiplies the standard deviation by <M>{"|a|"}</M>.</p>
      </Theorem>

      <Theorem title="sums of independent variables">
        <p>
          If <M>{"X"}</M> and <M>{"Y"}</M> are independent, <M>{"\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)"}</M>.
          Unlike linearity of expectation, this needs independence (or at least zero covariance). Note that{" "}
          <M>{"\\operatorname{Var}(X - Y)"}</M> is also the sum: subtracting an independent variable adds uncertainty.
        </p>
      </Theorem>

      <Example title="the named distributions">
        <p>
          A Bernoulli(<M>{"p"}</M>) indicator has <M>{"E(I^2) = E(I) = p"}</M>, so its variance is <M>{"p - p^2 = p(1-p)"}</M>.
          A binomial is a sum of <M>{"n"}</M> independent indicators, so <M>{"\\operatorname{Var} = np(1-p)"}</M>. A Poisson(<M>{"\\lambda"}</M>)
          has variance <M>{"\\lambda"}</M>, equal to its mean, and a geometric with success probability{" "}
          <M>{"p"}</M> has variance <M>{"(1-p)/p^2"}</M>.
        </p>
      </Example>

      <Remark title="averages are steadier">
        <p>
          If <M>{"X_1, \\dots, X_n"}</M> are independent with variance <M>{"\\sigma^2"}</M>, their average has variance{" "}
          <M>{"\\sigma^2/n"}</M> and standard deviation <M>{"\\sigma/\\sqrt n"}</M>. Averaging a hundred measurements makes the
          result ten times more precise, not a hundred. This square root is behind the law of large numbers and the central
          limit theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "die",
      rung: "check",
      prompt: <p>What is the variance of one roll of a fair die? Give it to three decimal places.</p>,
      answer: { kind: "numeric", value: 35 / 12, tolerance: 0.005 },
    },
    {
      key: "shift",
      rung: "check",
      prompt: <p>If Var(X) = 4, what is Var(X + 10)?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "scale",
      rung: "apply",
      prompt: <p>If Var(X) = 2, what is Var(3X − 1)?</p>,
      answer: { kind: "numeric", value: 18 },
    },
    {
      key: "bin",
      rung: "apply",
      prompt: <p>X ~ Bin(100, 0.2). What is the standard deviation of X?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0.001 },
    },
    {
      key: "diff",
      rung: "apply",
      prompt: <p>X and Y are independent with variances 4 and 9. What is Var(X − Y)?</p>,
      answer: { kind: "numeric", value: 13 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that Var(aX + b) = a² Var(X).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that E(aX + b) = aμ + b by linearity.",
          "Writes the deviation (aX + b) − (aμ + b) = a(X − μ).",
          "Squares and takes expectations to get a² E((X − μ)²) = a² Var(X).",
        ],
      },
    },
    {
      key: "maxp",
      rung: "stretch",
      prompt: <p>For a single Bernoulli(p) trial, which p makes the variance largest? Explain why that makes sense.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses Var = p(1 − p).",
          "Finds the maximum at p = 1/2, with variance 1/4.",
          "Gives an intuitive reason, such as that the outcome is least predictable then. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why we square deviations to measure spread, the formula Var(X) = E(X²) − E(X)², what shifting and scaling do to variance, why independent variances add, and why an average of n measurements has standard deviation σ/√n.",

  glimpse: (
    <p>
      The next chapter moves to continuous random variables, where sums become integrals. Chebyshev&rsquo;s inequality turns a
      variance into a guarantee, and covariance measures how two variables move together.
    </p>
  ),
};
