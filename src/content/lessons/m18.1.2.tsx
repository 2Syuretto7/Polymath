import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { TStatViz } from "@/components/viz/TStatViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.1.2",
  minutes: 90,
  links: {
    revisits: ["m18.1.1", "m9.4.1", "m9.7.2"],
    foreshadows: ["m18.5.1", "m18.4.1", "m18.4.3"],
  },

  puzzle: (
    <>
      <p>
        In 1908 a chemist at the Guinness brewery in Dublin had to judge barley from samples of four or five plots. The
        usual rule, treating the sample mean as normal with the sample standard deviation in place of the true one, kept
        making him too confident. Writing as &ldquo;Student&rdquo;, William Gosset found the exact correction. What had
        the usual rule forgotten?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the t density with the normal density as the number of degrees of freedom changes.</p>
      <TStatViz />
    </>
  ),

  theory: (
    <>
      <Definition title="sampling distribution">
        <p>
          The <strong>sampling distribution</strong> of a statistic is its distribution over repeated samples. The standard
          deviation of an estimator&rsquo;s sampling distribution is its <strong>standard error</strong>; for{" "}
          <M>{"\\bar X"}</M> it is <M>{"\\sigma/\\sqrt n"}</M>.
        </p>
      </Definition>

      <Theorem title="normal samples">
        <p>
          If <M>{"X_1, \\dots, X_n"}</M> is a random sample from <M>{"N(\\mu, \\sigma^2)"}</M>, then
        </p>
        <MD>{"\\bar X \\sim N\\!\\left(\\mu, \\frac{\\sigma^2}{n}\\right), \\qquad \\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1},"}</MD>
        <p>
          and <M>{"\\bar X"}</M> and <M>{"S^2"}</M> are independent. Here <M>{"\\chi^2_k"}</M> is the distribution of a sum of
          k squared independent standard normals. Consequently
        </p>
        <MD>{"T = \\frac{\\bar X - \\mu}{S/\\sqrt n} \\sim t_{n-1},"}</MD>
        <p>Student&rsquo;s t distribution with n − 1 degrees of freedom, which no longer involves the unknown σ.</p>
      </Theorem>

      <Example title="the first claim by moment generating functions">
        <p>
          A normal variable has <M>{"M_X(s) = e^{\\mu s + \\sigma^2 s^2/2}"}</M>. By independence,{" "}
          <M>{"M_{\\bar X}(s) = M_X(s/n)^n = e^{\\mu s + \\sigma^2 s^2/(2n)}"}</M>, which is the moment generating function of{" "}
          <M>{"N(\\mu, \\sigma^2/n)"}</M>. Since a moment generating function determines the distribution, the claim follows.
        </p>
      </Example>

      <Remark title="when the data are not normal">
        <p>
          The independence of <M>{"\\bar X"}</M> and <M>{"S^2"}</M> holds only for normal samples. For other populations,
          the central limit theorem still makes <M>{"\\bar X"}</M> approximately normal for large n, and T approximately
          standard normal, but the exact t result is lost. How large n must be depends on how skewed the population is.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the sampling distribution of a statistic?</p>,
      answer: {
        kind: "choice",
        options: [
          "The distribution of its values over repeated random samples.",
          "The distribution of the data in one sample.",
          "The distribution of the population.",
          "A list of the samples that were drawn.",
        ],
        correct: [0],
      },
    },
    {
      key: "normal",
      rung: "check",
      prompt: <p>For a random sample of size n from N(μ, σ²), what is the distribution of the sample mean?</p>,
      answer: { kind: "choice", options: ["N(μ, σ²/n)", "N(μ, σ²)", "N(μ/n, σ²/n)", "t with n − 1 degrees of freedom"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with 4 degrees of freedom and cut-off 2, what is P(|T| &gt; 2)? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.12, tolerance: 0.01 },
    },
    {
      key: "se",
      rung: "apply",
      prompt: <p>A population has standard deviation 8. What is the standard error of the mean of a sample of 16?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "tails",
      rung: "apply",
      prompt: <p>Why does the t distribution have heavier tails than the standard normal?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because S is random and is sometimes much smaller than σ, which makes T large.",
          "Because the data are not normal.",
          "Because the sample mean is biased.",
          "Because n − 1 is smaller than n.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Using moment generating functions, show that the mean of a random sample from N(μ, σ²) is N(μ, σ²/n).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses independence to write the moment generating function of X̄ as that of X, evaluated at s/n, raised to the power n.",
          "Substitutes the normal moment generating function exp(μs + σ²s²/2) to get exp(μs + σ²s²/(2n)).",
          "Recognises this as the moment generating function of N(μ, σ²/n) and uses uniqueness to conclude.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Gosset worked with samples of four or five. Why did the difference between t and normal matter so much to him, and why does it matter little to a pollster with a thousand responses?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that with few degrees of freedom S varies a lot, so the t tails are much heavier than the normal ones.",
          "Notes that with large n, S is close to σ and the t distribution is close to the normal.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, order statistics: the smallest, the largest and the median of a sample, and their distributions.
    </p>
  ),
};
