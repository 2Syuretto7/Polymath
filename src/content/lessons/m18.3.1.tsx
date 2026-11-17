import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { SufficiencyViz } from "@/components/viz/SufficiencyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.3.1",
  minutes: 90,
  links: {
    revisits: ["m18.2.4", "m18.2.2", "m9.5.1"],
    foreshadows: ["m18.3.2", "m18.3.3", "m18.4.2"],
  },

  puzzle: (
    <>
      <p>
        A friend tosses a coin six times to learn about its bias and reports only &ldquo;two heads&rdquo;. Have you lost
        anything by not being told which tosses were heads? Intuition says no. Can that intuition be made precise, and does it
        hold for other models?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the bias p and the number of heads k. Watch the conditional probabilities of the arrangements.</p>
      <SufficiencyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="sufficient statistic">
        <p>
          Let <M>{"X = (X_1, \\dots, X_n)"}</M> have a distribution depending on a parameter θ. A statistic T(X) is{" "}
          <strong>sufficient</strong> for θ if the conditional distribution of X given T(X) does not depend on θ. Once T is
          known, the rest of the data is noise whose distribution is fixed, so it carries no further information about θ.
        </p>
      </Definition>

      <Theorem title="the Fisher-Neyman factorisation theorem">
        <p>T is sufficient for θ if and only if the joint density or mass function factorises as</p>
        <MD>{"f(x;\\theta) = g\\big(T(x);\\theta\\big)\\,h(x),"}</MD>
        <p>where h does not involve θ. The factorisation is usually far easier to check than the definition.</p>
      </Theorem>

      <Example title="three standard cases">
        <p>
          For Bernoulli(p) trials, <M>{"f(x;p) = p^{\\sum x_i}(1-p)^{n - \\sum x_i}"}</M>, so the number of successes is
          sufficient. For Poisson(λ), <M>{"f(x;\\lambda) = e^{-n\\lambda}\\lambda^{\\sum x_i}\\big/\\prod x_i!"}</M>, so the
          sum is sufficient. For <M>{"N(\\mu, 1)"}</M>, expanding the square shows that the sample mean is sufficient for μ.
          For <M>{"N(\\mu, \\sigma^2)"}</M> with both unknown, the pair <M>{"(\\sum x_i, \\sum x_i^2)"}</M> is sufficient.
        </p>
      </Example>

      <Remark title="minimal sufficiency and the likelihood">
        <p>
          The whole sample is trivially sufficient, so the interest lies in reducing as far as possible. A{" "}
          <strong>minimal</strong> sufficient statistic is a function of every other sufficient statistic. By the
          factorisation, the likelihood depends on the data only through any sufficient statistic, so the maximum likelihood
          estimator is always a function of it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for T to be sufficient for θ?</p>,
      answer: {
        kind: "choice",
        options: [
          "The conditional distribution of the data given T does not depend on θ.",
          "T is an unbiased estimator of θ.",
          "T has the smallest variance of all statistics.",
          "T determines the data completely.",
        ],
        correct: [0],
      },
    },
    {
      key: "bern",
      rung: "check",
      prompt: <p>For n Bernoulli(p) trials, which statistic is sufficient for p?</p>,
      answer: {
        kind: "choice",
        options: ["The number of successes", "The result of the first trial", "The position of the first success", "The largest observation"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set k = 3. What is the conditional probability of each arrangement? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.05, tolerance: 0.005 },
    },
    {
      key: "pois",
      rung: "apply",
      prompt: <p>A Poisson sample is 2, 0, 3, 1, 4. What is the value of the sufficient statistic found in the lesson?</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "normal",
      rung: "apply",
      prompt: <p>For a sample from N(μ, σ²) with both parameters unknown, which statistic is sufficient?</p>,
      answer: {
        kind: "choice",
        options: ["The pair (Σxᵢ, Σxᵢ²)", "The sample mean alone", "The sample median", "The largest observation"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show directly from the definition that the number of heads T is sufficient for p in n Bernoulli trials.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that any particular sequence x with t heads has probability pᵗ(1 − p)ⁿ⁻ᵗ, and that P(T = t) = C(n, t) pᵗ(1 − p)ⁿ⁻ᵗ.",
          "Divides to get P(X = x | T = t) = 1/C(n, t) for sequences with t heads, and 0 otherwise.",
          "Concludes that this does not depend on p, so T is sufficient.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For a sample from the uniform distribution on [0, θ], find a sufficient statistic for θ and explain why.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the joint density as θ⁻ⁿ times the indicator that every xᵢ lies in [0, θ].",
          "Notes that this indicator equals 1{max xᵢ ≤ θ} times 1{min xᵢ ≥ 0}, so the factorisation holds with T = max xᵢ.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the Rao-Blackwell theorem: given any estimator, averaging it over the data with a sufficient statistic held fixed
      gives an estimator that is never worse.
    </p>
  ),
};
