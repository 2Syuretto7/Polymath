import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LLNPathViz } from "@/components/viz/LLNPathViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.2.1",
  minutes: 90,
  links: {
    revisits: ["m27.1.4", "m9.7.1", "m9.4.2"],
    foreshadows: ["m27.2.2", "m27.3.1", "m27.4.4"],
  },

  puzzle: (
    <>
      <p>
        Everyone believes that the proportion of heads in many tosses of a fair coin is close to one half. But there are
        two different claims here. One is about a large fixed number of tosses: a big deviation is unlikely. The other is
        about one infinite run of tosses: its running proportion actually converges to one half. Are both true, and is the
        second really stronger?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Twelve runs of a fair coin. Narrow the band and move n to see how many runs are outside it.</p>
      <LLNPathViz />
    </>
  ),

  theory: (
    <>
      <Definition title="modes of convergence">
        <p>
          <M>{"Y_n \\to Y"}</M> <strong>in probability</strong> if <M>{"P(|Y_n - Y| > \\varepsilon) \\to 0"}</M> for every ε &gt; 0.{" "}
          <M>{"Y_n \\to Y"}</M> <strong>almost surely</strong> if{" "}
          <M>{"P(\\{\\omega : Y_n(\\omega) \\to Y(\\omega)\\}) = 1"}</M>. Almost sure convergence implies convergence in
          probability, but not conversely.
        </p>
      </Definition>

      <Theorem title="the weak law">
        <p>
          If <M>{"X_1, X_2, \\dots"}</M> are independent with mean μ and variance <M>{"\\sigma^2 < \\infty"}</M>, and{" "}
          <M>{"S_n = X_1 + \\dots + X_n"}</M>, then <M>{"S_n / n \\to \\mu"}</M> in probability.
        </p>
        <p>
          <strong>Proof.</strong> <M>{"\\operatorname{Var}(S_n/n) = \\sigma^2 / n"}</M>, so by Chebyshev,{" "}
          <M>{"P(|S_n/n - \\mu| > \\varepsilon) \\le \\sigma^2 / (n \\varepsilon^2) \\to 0"}</M>. Khintchine showed that for
          identically distributed variables, a finite mean suffices.
        </p>
      </Theorem>

      <Theorem title="the strong law">
        <p>
          If <M>{"X_1, X_2, \\dots"}</M> are independent and identically distributed with <M>{"E|X_1| < \\infty"}</M> and mean μ,
          then <M>{"S_n / n \\to \\mu"}</M> almost surely. This is Kolmogorov&rsquo;s theorem; Etemadi gave a proof needing
          only pairwise independence.
        </p>
        <p>
          <strong>Proof with a fourth moment.</strong> Take μ = 0 and <M>{"E[X_1^4] < \\infty"}</M>. Expanding,{" "}
          <M>{"E[S_n^4] = n E[X_1^4] + 3n(n-1)\\sigma^4 \\le C n^2"}</M>, since terms with a lone factor vanish. By Markov,{" "}
          <M>{"P(|S_n/n| > \\varepsilon) \\le C / (n^2 \\varepsilon^4)"}</M>, which is summable. By the first Borel–Cantelli
          lemma, almost surely <M>{"|S_n/n| > \\varepsilon"}</M> only finitely often. Take ε = 1/k for every k.
        </p>
      </Theorem>

      <Example title="normal numbers">
        <p>
          Let the binary digits of a uniform ω in [0, 1] be the tosses. The strong law says that for almost every ω, the
          proportion of 1s among the first n digits tends to 1/2. Borel proved in 1909 that almost every number is normal in
          every base, though no one has proved that √2 or π is.
        </p>
      </Example>

      <Remark title="when the law fails">
        <p>
          The Cauchy distribution, with density <M>{"1/(\\pi(1 + x^2))"}</M>, has no mean. The average of n independent
          Cauchy variables is again Cauchy, so it never settles down. Some integrability condition is essential.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "modes",
      rung: "check",
      prompt: <p>Which mode of convergence does the strong law give?</p>,
      answer: { kind: "choice", options: ["Almost sure convergence", "Convergence in probability only", "Convergence in distribution only", "Uniform convergence on Ω"], correct: [0] },
    },
    {
      key: "cheb",
      rung: "check",
      prompt: <p>Which inequality proves the weak law with finite variance?</p>,
      answer: { kind: "choice", options: ["Chebyshev’s inequality", "Jensen’s inequality", "The Cauchy–Schwarz inequality", "Hölder’s inequality"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what happens to the number of red paths at n = 2000 as ε is made larger?</p>,
      answer: { kind: "choice", options: ["It can only stay the same or decrease", "It can only increase", "It is always 12", "It is always 0"], correct: [0] },
    },
    {
      key: "bound",
      rung: "apply",
      prompt: <p>For a fair coin, σ² = 1/4. Using Chebyshev, bound P(|Sₙ/n − 1/2| &gt; 0.1) when n = 100.</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "cauchy",
      rung: "apply",
      prompt: <p>Why does the law of large numbers fail for Cauchy variables?</p>,
      answer: { kind: "choice", options: ["They have no finite mean", "They are not independent", "Their variance is zero", "They are discrete"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the weak law of large numbers for independent variables with common mean μ and variance σ².</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes E[Sₙ/n] = μ and Var(Sₙ/n) = σ²/n, using independence for the variance.",
          "Applies Chebyshev’s inequality to get the bound σ²/(nε²).",
          "Concludes the probability tends to 0 for every ε > 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Give an example of random variables that converge to 0 in probability but not almost surely.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses, for example, independent events with P(Aₙ) = 1/n and Yₙ the indicator of Aₙ, or a typewriter sequence of indicators on [0, 1].",
          "Shows P(Yₙ ≠ 0) → 0, but Yₙ = 1 infinitely often almost surely or for every ω.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The strong law says that the time average of independent tosses equals their expected value. A deeper theorem says
        the same holds for any stationary process that cannot be split into separate invariant parts.
      </p>
      <p>Next, the ergodic theorem, a first look.</p>
    </>
  ),
};
