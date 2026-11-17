import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { RaoBlackwellViz } from "@/components/viz/RaoBlackwellViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.3.2",
  minutes: 90,
  links: {
    revisits: ["m18.3.1", "m9.6.2", "m18.2.4"],
    foreshadows: ["m18.3.3", "m18.5.2", "m18.6.1"],
  },

  puzzle: (
    <>
      <p>
        Calls arrive at a help desk at a Poisson rate λ per minute, and you want the chance that a given minute is silent,{" "}
        <M>{"e^{-\\lambda}"}</M>. A lazy estimate looks only at the first minute: 1 if it was silent, 0 if not. It is
        unbiased, but crude. Is there a mechanical way to turn it into something much better, without any cleverness?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the spread of the crude estimator with the improved one as λ and n change.</p>
      <RaoBlackwellViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Rao-Blackwell theorem">
        <p>
          Let δ(X) be an estimator of g(θ) with finite variance, and let T be sufficient for θ. Define{" "}
          <M>{"\\delta^*(T) = E[\\delta(X) \\mid T]"}</M>. Then δ* is a statistic, has the same bias as δ, and
        </p>
        <MD>{"\\operatorname{MSE}(\\delta^*) \\le \\operatorname{MSE}(\\delta),"}</MD>
        <p>
          with equality only if δ is already a function of T. Sufficiency is what makes δ* a statistic: the conditional
          distribution of X given T is free of θ, so the conditional expectation can be computed without knowing θ.
        </p>
      </Theorem>

      <Example title="the silent minute">
        <p>
          With <M>{"\\delta = 1\\{X_1 = 0\\}"}</M> and <M>{"T = \\sum X_i"}</M>, given T = t the t calls are spread over the
          n minutes independently and uniformly, so the chance none falls in the first minute is{" "}
          <M>{"((n-1)/n)^t"}</M>. Hence <M>{"\\delta^* = (1 - 1/n)^T"}</M>, which is still unbiased. For λ = 1 and n = 10 the
          variance drops from about 0.233 to about 0.014.
        </p>
      </Example>

      <Definition title="completeness and the Lehmann-Scheffé theorem">
        <p>
          T is <strong>complete</strong> if E[φ(T)] = 0 for every θ forces φ(T) = 0 almost surely. If T is complete and
          sufficient, any unbiased estimator that is a function of T is the unique <strong>minimum variance unbiased
          estimator</strong>. So Rao-Blackwellising any unbiased estimator on a complete sufficient statistic gives the best
          unbiased one, whatever you started with.
        </p>
      </Definition>

      <Remark title="why it works">
        <p>
          The proof is the law of total variance:{" "}
          <M>{"\\operatorname{Var}(\\delta) = \\operatorname{Var}(E[\\delta\\mid T]) + E[\\operatorname{Var}(\\delta \\mid T)]"}</M>.
          Conditioning throws away the second term, which is pure noise once T is known.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What does Rao-Blackwellisation do to an estimator δ?</p>,
      answer: {
        kind: "choice",
        options: [
          "Replaces it by its conditional expectation given a sufficient statistic.",
          "Removes its bias.",
          "Replaces it by the maximum likelihood estimator.",
          "Multiplies it by a constant to reduce its variance.",
        ],
        correct: [0],
      },
    },
    {
      key: "suff",
      rung: "check",
      prompt: <p>Why must the conditioning statistic be sufficient?</p>,
      answer: {
        kind: "choice",
        options: [
          "Otherwise the conditional expectation could depend on θ and would not be a statistic.",
          "Otherwise the variance would increase.",
          "Otherwise the estimator would be biased.",
          "There is no need; any statistic works.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with λ = 1 and n = 10, what is the variance of the Rao-Blackwell estimator? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.014, tolerance: 0.001 },
    },
    {
      key: "crude",
      rung: "apply",
      prompt: <p>The crude estimator, 1 if the first minute is silent and 0 otherwise, is a Bernoulli variable with success chance e⁻¹ when λ = 1. What is its variance? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.233, tolerance: 0.001 },
    },
    {
      key: "bern",
      rung: "apply",
      prompt: <p>For Bernoulli(p) trials, start with the estimator X₁ of p and condition on T = ΣXᵢ. What do you get?</p>,
      answer: { kind: "choice", options: ["The sample proportion T/n", "X₁ again", "T", "1/2"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that Var(E[δ | T]) ≤ Var(δ), and that E[δ | T] has the same mean as δ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the tower property: E[E[δ | T]] = E[δ], so the mean (and the bias) is unchanged.",
          "Uses the law of total variance: Var(δ) = Var(E[δ | T]) + E[Var(δ | T)].",
          "Notes that E[Var(δ | T)] ≥ 0 and concludes the inequality.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the theorem never make an estimator worse, even if T is a poor choice of sufficient statistic, such as the whole sample?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that if T is the whole sample then E[δ | T] = δ, so nothing changes.",
          "Explains that a coarser sufficient statistic removes more noise, so the gain is largest for a minimal one.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the Cramér-Rao bound: a floor on the variance of every unbiased estimator, set by the Fisher information, which
      says how sharply the likelihood is peaked.
    </p>
  ),
};
