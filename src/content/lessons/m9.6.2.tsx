import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TotalVarianceViz } from "@/components/viz/TotalVarianceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.6.2",
  minutes: 90,
  links: {
    revisits: ["m9.6.1", "m9.2.4", "m9.1.3"],
    foreshadows: ["m9.7.1", "m18.6.1", "m27.4.2"],
  },

  puzzle: (
    <>
      <p>
        Exam marks in a large school vary a lot. Part of that is because some sections are taught better than others, and part
        is because students within each section differ. Can the total variation be split cleanly into these two parts, so that
        we can say how much is due to the sections?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the group means apart and change the spread within groups, and watch the two parts of the variance.</p>
      <TotalVarianceViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the law of total expectation">
        <MD>{"E(Y) = E\\big(E(Y \\mid X)\\big)."}</MD>
        <p>
          When <M>{"X"}</M> takes values <M>{"x_1, x_2, \\dots"}</M>, this reads{" "}
          <M>{"E(Y) = \\sum_i E(Y \\mid X = x_i) P(X = x_i)"}</M>, the expectation version of the law of total probability.
        </p>
      </Theorem>

      <Theorem title="the law of total variance">
        <MD>{"\\operatorname{Var}(Y) = E\\big(\\operatorname{Var}(Y \\mid X)\\big) + \\operatorname{Var}\\big(E(Y \\mid X)\\big)."}</MD>
        <p>The first term is the average variation within groups; the second, the variation between the group means.</p>
      </Theorem>

      <Proof>
        <p>
          Write <M>{"\\operatorname{Var}(Y \\mid X) = E(Y^2 \\mid X) - E(Y \\mid X)^2"}</M>. Taking expectations,
        </p>
        <MD>{"E(\\operatorname{Var}(Y \\mid X)) = E(Y^2) - E\\big(E(Y \\mid X)^2\\big)."}</MD>
        <p>By the tower property,</p>
        <MD>{"\\operatorname{Var}(E(Y \\mid X)) = E\\big(E(Y \\mid X)^2\\big) - E(Y)^2."}</MD>
        <p>Adding, the middle terms cancel, leaving <M>{"E(Y^2) - E(Y)^2 = \\operatorname{Var}(Y)"}</M>.</p>
      </Proof>

      <Example title="random sums">
        <p>
          Let <M>{"S = X_1 + \\cdots + X_N"}</M>, where the <M>{"X_i"}</M> are independent with mean <M>{"\\mu"}</M> and
          variance <M>{"\\sigma^2"}</M>, and <M>{"N"}</M> is an independent count. Given <M>{"N"}</M>,{" "}
          <M>{"E(S \\mid N) = N\\mu"}</M> and <M>{"\\operatorname{Var}(S \\mid N) = N\\sigma^2"}</M>. So
        </p>
        <MD>{"E(S) = \\mu E(N), \\qquad \\operatorname{Var}(S) = \\sigma^2 E(N) + \\mu^2 \\operatorname{Var}(N)."}</MD>
      </Example>

      <Remark title="explained variance">
        <p>
          The ratio <M>{"\\operatorname{Var}(E(Y \\mid X))/\\operatorname{Var}(Y)"}</M> is the fraction of variance
          &ldquo;explained&rdquo; by <M>{"X"}</M>. For bivariate normals it equals <M>{"\\rho^2"}</M>, the familiar{" "}
          <M>{"R^2"}</M> of regression. Explained here means accounted for statistically, not caused.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mix",
      rung: "check",
      prompt: <p>60% of a class are in section A with mean mark 70 and 40% in section B with mean mark 55. What is the overall mean mark?</p>,
      answer: { kind: "numeric", value: 64, tolerance: 0.001 },
    },
    {
      key: "parts",
      rung: "check",
      prompt: <p>In Var(Y) = E(Var(Y | X)) + Var(E(Y | X)), which term measures variation between the group means?</p>,
      answer: { kind: "choice", options: ["E(Var(Y | X))", "Var(E(Y | X))", "Neither", "Both"], correct: [1] },
    },
    {
      key: "within",
      rung: "apply",
      prompt: <p>In the same class, the variance of marks within each section is 100. Using the law of total variance, what is the overall variance? (The group means 70 and 55, with weights 0.6 and 0.4, have variance 54.)</p>,
      answer: { kind: "numeric", value: 154, tolerance: 0.01 },
    },
    {
      key: "rsum",
      rung: "apply",
      prompt: <p>The number of claims N has mean 10 and variance 10, and each claim is independent with mean 2 and variance 1 (in lakh rupees). What is the variance of the total?</p>,
      answer: { kind: "numeric", value: 50, tolerance: 0.01 },
    },
    {
      key: "r2",
      rung: "apply",
      prompt: <p>For a bivariate normal pair with ρ = 0.6, what fraction of Var(Y) is explained by X?</p>,
      answer: { kind: "numeric", value: 0.36, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the law of total variance from the tower property.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes Var(Y | X) = E(Y² | X) − E(Y | X)² and takes expectations using the tower property.",
          "Writes Var(E(Y | X)) = E(E(Y | X)²) − E(Y)², using E(E(Y | X)) = E(Y).",
          "Adds the two so the E(E(Y | X)²) terms cancel, giving E(Y²) − E(Y)².",
        ],
      },
    },
    {
      key: "nature",
      rung: "stretch",
      prompt: <p>A study finds that genes &ldquo;explain&rdquo; 60% of the variance in height in one country. Does it follow that 60% of each person&rsquo;s height is due to genes? Explain.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that explained variance is a property of variation in a population, not of individuals.",
          "Notes it can change with the environment or population studied.",
          "Draws a sensible conclusion. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the law of total expectation, the law of total variance with its within-group and between-group parts and its proof, the formulas for a random sum, and what explained variance does and does not mean.",

  glimpse: (
    <p>
      The final chapter of the course proves the law of large numbers and the central limit theorem. Regression in statistics
      and martingales in advanced probability both build on these laws.
    </p>
  ),
};
