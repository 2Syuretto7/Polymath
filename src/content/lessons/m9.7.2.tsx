import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SumHistogramViz } from "@/components/viz/SumHistogramViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.7.2",
  minutes: 95,
  links: {
    revisits: ["m9.7.1", "m9.4.1", "m9.3.2"],
    foreshadows: ["m9.7.3", "m18.1.2", "m27.3.1"],
  },

  puzzle: (
    <>
      <p>
        Heights, measurement errors, exam totals and the number of heads in a thousand tosses all have histograms shaped like
        the same bell. These quantities have nothing to do with one another. Why should one curve keep turning up?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose the distribution of a single draw, then add more and more draws together.</p>
      <SumHistogramViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the central limit theorem">
        <p>
          Let <M>{"X_1, X_2, \\dots"}</M> be independent and identically distributed with mean <M>{"\\mu"}</M> and variance{" "}
          <M>{"0 < \\sigma^2 < \\infty"}</M>, and <M>{"S_n = X_1 + \\cdots + X_n"}</M>. Then for every <M>{"z"}</M>,
        </p>
        <MD>{"P\\left(\\frac{S_n - n\\mu}{\\sigma\\sqrt n} \\le z\\right) \\to \\Phi(z),"}</MD>
        <p>the standard normal CDF. Equivalently, <M>{"\\bar X_n"}</M> is approximately <M>{"N(\\mu, \\sigma^2/n)"}</M> for large <M>{"n"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          A sketch, assuming the MGF <M>{"M"}</M> of <M>{"Y = (X - \\mu)/\\sigma"}</M> exists. Then{" "}
          <M>{"M(t) = 1 + t^2/2 + o(t^2)"}</M>, since <M>{"E(Y) = 0"}</M> and <M>{"E(Y^2) = 1"}</M>. The standardised sum{" "}
          <M>{"Z_n = (Y_1 + \\cdots + Y_n)/\\sqrt n"}</M> has MGF
        </p>
        <MD>{"M\\!\\left(\\tfrac{t}{\\sqrt n}\\right)^{n} = \\left(1 + \\frac{t^2}{2n} + o\\!\\left(\\tfrac1n\\right)\\right)^{n} \\to e^{t^2/2},"}</MD>
        <p>the MGF of <M>{"N(0, 1)"}</M>. A continuity theorem for MGFs then gives convergence of the CDFs.</p>
      </Proof>

      <Example title="the normal approximation to the binomial">
        <p>
          The number of heads in 400 fair tosses has mean 200 and standard deviation 10. So{" "}
          <M>{"P(\\text{at least } 220 \\text{ heads}) \\approx P(Z \\ge 2) \\approx 0.023"}</M>, and with the continuity
          correction, using 219.5, <M>{"P(Z \\ge 1.95) \\approx 0.026"}</M>.
        </p>
      </Example>

      <Remark title="why the normal">
        <p>
          The proof shows that only the mean and variance of each summand survive the limit; every other feature of their
          shape washes out. Quantities built from many small, roughly independent contributions are therefore close to normal.
          The theorem needs finite variance: sums of Cauchy variables never become normal, and heavy-tailed sums can be
          dominated by a few huge terms.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "scale",
      rung: "check",
      prompt: <p>For large n, the average of n independent draws with standard deviation σ has approximately what standard deviation?</p>,
      answer: { kind: "choice", options: ["σ", "σ/n", "σ/√n", "σ√n"], correct: [2] },
    },
    {
      key: "need",
      rung: "check",
      prompt: <p>Which assumption does the classical central limit theorem need?</p>,
      answer: { kind: "choice", options: ["The draws are normal", "The draws have finite variance", "The draws are discrete", "n is at least 30"], correct: [1] },
    },
    {
      key: "coins",
      rung: "apply",
      prompt: <p>Toss a fair coin 400 times. Using the normal approximation without continuity correction, what is the probability of at least 220 heads? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.023, tolerance: 0.002 },
    },
    {
      key: "dice",
      rung: "apply",
      prompt: <p>The total of 100 fair dice has mean 350. What is its standard deviation, to two decimal places?</p>,
      answer: { kind: "numeric", value: Math.sqrt(100 * 35 / 12), tolerance: 0.01 },
    },
    {
      key: "bulbs",
      rung: "apply",
      prompt: <p>Bulb lifetimes are independent with mean 1000 hours and standard deviation 1000 hours. Approximately what is the probability that the average of 100 bulbs exceeds 1200 hours? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.023, tolerance: 0.002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if Y has mean 0 and variance 1 and MGF M, then M(t/√n)ⁿ tends to e^(t²/2).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands M(s) = 1 + s²/2 + o(s²) using E(Y) = 0 and E(Y²) = 1.",
          "Substitutes s = t/√n to get (1 + t²/(2n) + o(1/n))ⁿ.",
          "Uses the limit (1 + a/n + o(1/n))ⁿ → eᵃ with a = t²/2.",
        ],
      },
    },
    {
      key: "heights",
      rung: "stretch",
      prompt: <p>Adult heights are close to normal, but incomes are very far from normal. Using the central limit theorem, suggest why the two differ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes height as a sum of many small, roughly independent effects.",
          "Suggests incomes grow multiplicatively or are dominated by a few large effects, so the theorem's conditions fail.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the central limit theorem and the standardisation in it, the sketch of its proof with moment generating functions, the normal approximation to the binomial, and why the normal curve appears so widely but not always.",

  glimpse: (
    <p>
      The next lesson puts both limit theorems to work in polls, quality control and simulation. Statistics builds confidence
      intervals on them, and measure-theoretic probability proves them in full generality.
    </p>
  ),
};
