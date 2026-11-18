import { M } from "@/components/Math";
import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MultipleTestsViz } from "@/components/viz/MultipleTestsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.4.4",
  minutes: 90,
  links: {
    revisits: ["m18.4.1", "m18.4.3", "m9.7.2"],
    foreshadows: ["m18.5.1", "m18.5.2", "m18.6.1"],
  },

  puzzle: (
    <>
      <p>
        A team tests whether twenty different foods affect the risk of a disease. One of them, broccoli, gives p = 0.03, and a
        headline announces that broccoli protects against it. Nothing in the analysis was miscalculated. What has gone wrong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Every study here tests an effect that is not there. Count the &ldquo;discoveries&rdquo;.</p>
      <MultipleTestsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="what a p-value is">
        <p>
          For a test that rejects for large values of a statistic T, the <strong>p-value</strong> of an observed value t is{" "}
          <M>{"P_{H_0}(T \\ge t)"}</M>: the chance, if the null is true, of a result at least as extreme as the one observed.
          If the null is true and T is continuous, the p-value is uniformly distributed on [0, 1], so{" "}
          <M>{"P(p \\le \\alpha) = \\alpha"}</M>.
        </p>
      </Definition>

      <Example title="what it is not">
        <p>
          It is not the probability that the null is true; that would need a prior and Bayes&rsquo;s theorem. It is not the
          probability that the result is due to chance. It does not measure the size or importance of an effect: with enough
          data a trivial effect gives a tiny p-value. And p &gt; 0.05 does not show the null is true. The American Statistical
          Association&rsquo;s 2016 statement set out these points.
        </p>
      </Example>

      <Definition title="multiplicity">
        <p>
          With m independent tests of true nulls at level α, the chance of at least one rejection is{" "}
          <M>{"1 - (1-\\alpha)^m"}</M>, which is 0.64 for m = 20. The <strong>Bonferroni correction</strong> tests each at α/m,
          which keeps the <strong>family-wise error rate</strong> below α whether or not the tests are independent. The
          Benjamini-Hochberg procedure (1995) instead controls the expected proportion of false discoveries among the
          rejections.
        </p>
      </Definition>

      <Remark title="forking paths">
        <p>
          The same problem arises without many explicit tests: choosing which outcome, subgroup, transformation or stopping
          time to report after seeing the data, sometimes called p-hacking, makes small p-values far more common than the
          nominal rate. Remedies include pre-registration, reporting all analyses, estimating effect sizes with intervals,
          and replication.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a p-value?</p>,
      answer: {
        kind: "choice",
        options: [
          "The chance, if the null is true, of a result at least as extreme as the one observed.",
          "The probability that the null hypothesis is true.",
          "The probability that the result is due to chance.",
          "The size of the effect.",
        ],
        correct: [0],
      },
    },
    {
      key: "unif",
      rung: "check",
      prompt: <p>If the null is true and the test statistic is continuous, how is the p-value distributed?</p>,
      answer: { kind: "choice", options: ["Uniformly on [0, 1]", "Concentrated near 0", "Normally, with mean 0.5", "Concentrated near 1"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set m = 10 with each test at 0.05. What is the chance of at least one false positive? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.4, tolerance: 0.01 },
    },
    {
      key: "bonf",
      rung: "apply",
      prompt: <p>A study runs 25 tests and wants a family-wise error rate of 0.05. What threshold does the Bonferroni correction use for each test?</p>,
      answer: { kind: "numeric", value: 0.002, tolerance: 0.0001 },
    },
    {
      key: "big",
      rung: "apply",
      prompt: <p>A trial of a million people finds that a drug lowers blood pressure by 0.1 mmHg, with p = 0.0001. What should you conclude?</p>,
      answer: {
        kind: "choice",
        options: [
          "The effect is probably real but too small to matter; a small p-value does not mean a large effect.",
          "The drug is highly effective.",
          "The null hypothesis has probability 0.0001.",
          "The result must be a false positive.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that with m tests of true nulls, each at level α/m, the chance of at least one false rejection is at most α, whether or not the tests are independent.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets Aᵢ be the event that test i rejects, so P(Aᵢ) ≤ α/m.",
          "Uses the union bound: P(A₁ or … or Aₘ) ≤ P(A₁) + … + P(Aₘ).",
          "Concludes that the sum is at most m · α/m = α, with no independence needed.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Suppose only one in ten tested hypotheses is true, tests have power 0.8 and level 0.05. What fraction of significant results are false positives, and what does this suggest?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Out of 1000 hypotheses, computes 100 × 0.8 = 80 true positives and 900 × 0.05 = 45 false positives.",
          "Concludes that 45/125 = 36% of significant results are false, far more than 5%.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, confidence intervals: reporting a range of plausible values instead of a verdict, and what the confidence level
      does and does not mean.
    </p>
  ),
};
