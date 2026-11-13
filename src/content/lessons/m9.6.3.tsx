import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PredictorErrorViz } from "@/components/viz/PredictorErrorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.6.3",
  minutes: 85,
  links: {
    revisits: ["m9.6.1", "m9.5.4", "m3.5.3"],
    foreshadows: ["m9.7.3", "m18.6.1", "m18.6.2"],
  },

  puzzle: (
    <>
      <p>
        A weather service must forecast tomorrow&rsquo;s rainfall from today&rsquo;s pressure. It will be judged by the average
        squared error of its forecasts. Should it use a straight-line rule, a complicated curve, or just the long-run
        average? And how much can the pressure reading possibly help?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Try your own line, then compare it with the best constant, the best line and the conditional mean.</p>
      <PredictorErrorViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the best constant">
        <p>The constant <M>{"c"}</M> minimising <M>{"E\\big((Y - c)^2\\big)"}</M> is <M>{"c = E(Y)"}</M>, and the minimum is <M>{"\\operatorname{Var}(Y)"}</M>.</p>
      </Theorem>

      <Proof>
        <p>With <M>{"\\mu = E(Y)"}</M>, expand around the mean; the cross term has expectation 0:</p>
        <MD>{"E\\big((Y - c)^2\\big) = E\\big((Y - \\mu)^2\\big) + (\\mu - c)^2 = \\operatorname{Var}(Y) + (\\mu - c)^2."}</MD>
      </Proof>

      <Theorem title="the best predictor">
        <p>
          Among all functions <M>{"h"}</M>, <M>{"E\\big((Y - h(X))^2\\big)"}</M> is smallest for <M>{"h(X) = E(Y \\mid X)"}</M>.
          The proof is the same calculation done conditionally on <M>{"X"}</M>, followed by the tower property.
        </p>
      </Theorem>

      <Theorem title="the best linear predictor">
        <p>Among predictors <M>{"a + bX"}</M>, the mean squared error is smallest for</p>
        <MD>{"b = \\frac{\\operatorname{Cov}(X, Y)}{\\operatorname{Var}(X)}, \\qquad a = E(Y) - bE(X),"}</MD>
        <p>and the minimum is <M>{"(1 - \\rho^2)\\operatorname{Var}(Y)"}</M>.</p>
      </Theorem>

      <Example title="comparing them">
        <p>
          In the visual, <M>{"E(Y \\mid X) = X + X^2"}</M> is curved. The best line captures the linear part and misses the
          curvature; the constant misses both. The error falls from <M>{"\\operatorname{Var}(Y)"}</M> to{" "}
          <M>{"(1 - \\rho^2)\\operatorname{Var}(Y)"}</M> to the noise variance. For bivariate normals, the best line and the
          conditional mean coincide.
        </p>
      </Example>

      <Remark title="geometry and other losses">
        <p>
          The best linear predictor is a projection: its error is uncorrelated with <M>{"X"}</M>, just as least squares
          residuals are orthogonal to the columns of the design matrix. Change the loss and the answer changes: under absolute
          error <M>{"E|Y - c|"}</M>, the best constant is a median of <M>{"Y"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "const",
      rung: "check",
      prompt: <p>Which constant minimises the mean squared error of predicting Y?</p>,
      answer: { kind: "choice", options: ["The median of Y", "The mean of Y", "The mode of Y", "0"], correct: [1] },
    },
    {
      key: "abs",
      rung: "check",
      prompt: <p>Which constant minimises the mean absolute error E|Y − c|?</p>,
      answer: { kind: "choice", options: ["The mean", "A median", "The largest value", "The variance"], correct: [1] },
    },
    {
      key: "slope",
      rung: "apply",
      prompt: <p>Cov(X, Y) = 6 and Var(X) = 4. What is the slope of the best linear predictor of Y from X?</p>,
      answer: { kind: "numeric", value: 1.5, tolerance: 0.001 },
    },
    {
      key: "icpt",
      rung: "apply",
      prompt: <p>With that slope, E(X) = 2 and E(Y) = 10. What is the intercept?</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0.001 },
    },
    {
      key: "mse",
      rung: "apply",
      prompt: <p>Var(Y) = 25 and the correlation of X and Y is 0.8. What is the mean squared error of the best linear predictor?</p>,
      answer: { kind: "numeric", value: 9, tolerance: 0.01 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that E((Y − c)²) is smallest when c = E(Y).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes Y − c = (Y − μ) + (μ − c).",
          "Expands the square and notes the cross term has expectation 0.",
          "Concludes the error is Var(Y) + (μ − c)², smallest at c = μ.",
        ],
      },
    },
    {
      key: "loss",
      rung: "stretch",
      prompt: <p>A hospital must predict how many beds it needs tomorrow. Running short is far worse than having spare beds. Should it predict the mean of the demand distribution? What might it predict instead?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the mean is best only for squared error, which treats both errors alike.",
          "Suggests an asymmetric loss and a higher quantile of demand.",
          "Draws a sensible conclusion. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the mean is the best constant predictor under squared error, why E(Y | X) is the best predictor of all, the formulas for the best linear predictor and its error (1 − ρ²)Var(Y), and how the answer changes under absolute error.",

  glimpse: (
    <p>
      The next chapter proves the law of large numbers and the central limit theorem. Regression in statistics estimates the
      best linear predictor from data.
    </p>
  ),
};
