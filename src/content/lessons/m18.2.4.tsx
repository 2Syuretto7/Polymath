import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { EstimatorMseViz } from "@/components/viz/EstimatorMseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.2.4",
  minutes: 90,
  links: {
    revisits: ["m18.2.3", "m18.2.1", "m18.1.3"],
    foreshadows: ["m18.3.2", "m18.3.3", "m18.5.2"],
  },

  puzzle: (
    <>
      <p>
        Two archers aim at a target. The first scatters arrows widely, but their average lands exactly on the centre. The
        second groups every arrow tightly, a little to the left of the centre. Which archer is better? Estimators face the
        same question.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare three estimators of θ for uniform data on [0, θ]. Change the sample size and see which errors shrink fastest.</p>
      <EstimatorMseViz />
    </>
  ),

  theory: (
    <>
      <Definition title="bias, variance and mean squared error">
        <p>
          An estimator <M>{"\\hat\\theta"}</M> of θ has <strong>bias</strong> <M>{"E[\\hat\\theta] - \\theta"}</M>; it is{" "}
          <strong>unbiased</strong> if the bias is 0 for every θ. Its <strong>mean squared error</strong> is the expected
          squared distance from the truth:
        </p>
        <MD>{"\\operatorname{MSE}(\\hat\\theta) = E\\big[(\\hat\\theta - \\theta)^2\\big]."}</MD>
      </Definition>

      <Theorem title="the decomposition">
        <MD>{"\\operatorname{MSE}(\\hat\\theta) = \\operatorname{Var}(\\hat\\theta) + \\operatorname{bias}(\\hat\\theta)^2."}</MD>
        <p>
          Proof. Write <M>{"\\hat\\theta - \\theta = (\\hat\\theta - E\\hat\\theta) + (E\\hat\\theta - \\theta)"}</M>, square,
          and take expectations. The cross term vanishes because <M>{"E[\\hat\\theta - E\\hat\\theta] = 0"}</M>.
        </p>
      </Theorem>

      <Example title="uniform data">
        <p>
          For a sample of size n from the uniform distribution on [0, θ], with M the largest observation:
          the estimator <M>{"2\\bar X"}</M> is unbiased with MSE <M>{"\\theta^2/(3n)"}</M>; M has bias{" "}
          <M>{"-\\theta/(n+1)"}</M> and MSE <M>{"2\\theta^2/((n+1)(n+2))"}</M>; and <M>{"\\frac{n+1}{n}M"}</M> is unbiased
          with MSE <M>{"\\theta^2/(n(n+2))"}</M>. The first shrinks like 1/n, the others like 1/n², so using the maximum is
          far better for large samples.
        </p>
      </Example>

      <Remark title="trading bias for variance">
        <p>
          Unbiasedness is not sacred. For a normal sample, dividing the sum of squared deviations by n + 1 instead of n − 1
          gives a biased estimate of σ² with smaller mean squared error. Shrinking an estimate towards a fixed value, as a
          Bayes estimator does, adds bias but can remove more variance. This trade-off runs through statistics and machine
          learning.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "bias",
      rung: "check",
      prompt: <p>When is an estimator unbiased?</p>,
      answer: {
        kind: "choice",
        options: [
          "When its expected value equals the true parameter, whatever the parameter is.",
          "When it always equals the true parameter.",
          "When its variance is 0.",
          "When it is the maximum likelihood estimate.",
        ],
        correct: [0],
      },
    },
    {
      key: "decomp",
      rung: "check",
      prompt: <p>How does mean squared error decompose?</p>,
      answer: { kind: "choice", options: ["Variance plus bias squared", "Variance times bias", "Variance minus bias", "Bias plus standard deviation"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with n = 5, what is the mean squared error of the maximum? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.048, tolerance: 0.002 },
    },
    {
      key: "calc",
      rung: "apply",
      prompt: <p>An estimator has bias 0.3 and variance 0.16. What is its mean squared error?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>For n = 10 and θ = 1, which of the three uniform estimators has the smallest mean squared error?</p>,
      answer: { kind: "choice", options: ["(n + 1)/n times the maximum", "2X̄", "The maximum", "They are all equal"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the mean squared error of an estimator equals its variance plus the square of its bias.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes θ̂ − θ as (θ̂ − Eθ̂) + (Eθ̂ − θ).",
          "Squares and takes expectations, noting that Eθ̂ − θ is a constant.",
          "Shows the cross term is 2(Eθ̂ − θ)·E[θ̂ − Eθ̂] = 0, leaving Var(θ̂) + bias².",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should a scientist always prefer an unbiased estimator? Give an example where they should not.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that what matters in practice is the size of the error, which mean squared error measures.",
          "Gives an example, such as the maximum for uniform data or a shrinkage estimator, where a little bias buys a large fall in variance.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, sufficiency: when a statistic captures everything the sample has to say about the parameter.
    </p>
  ),
};
