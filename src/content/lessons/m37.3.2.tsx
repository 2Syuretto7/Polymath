import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { MeanRevertViz } from "@/components/viz/MeanRevertViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m37.3.2",
  minutes: 90,
  links: {
    revisits: ["m37.3.1", "m37.2.3", "m37.2.2"],
    foreshadows: ["m37.3.3", "m37.4.1", "m37.5.3"],
  },

  puzzle: (
    <>
      <p>
        A dust particle in still air is kicked by molecules and slowed by friction. Its velocity jitters for ever, yet it
        never runs off to infinity. What law does the velocity settle into, and how fast?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the strength θ of the pull back to 0 and watch the paths and the band.</p>
      <MeanRevertViz />
    </>
  ),

  theory: (
    <>
      <Definition title="linear SDEs">
        <p>
          A <strong>linear</strong> SDE has the form{" "}
          <M>{"dX = (a(t)X + c(t))\\,dt + (\\sigma(t)X + \\tau(t))\\,dB"}</M>. Two cases matter most: additive noise, where σ
          = 0, and multiplicative noise, where c = τ = 0. Both can be solved by an integrating factor and Itô&rsquo;s
          formula.
        </p>
      </Definition>

      <Theorem title="the Ornstein–Uhlenbeck process">
        <p>
          The equation <M>{"dX = -\\theta X\\,dt + \\sigma\\,dB"}</M>, with θ &gt; 0, has solution{" "}
          <M>{"X_t = e^{-\\theta t}X_0 + \\sigma\\int_0^t e^{-\\theta(t-s)}\\,dB_s"}</M>. Given X₀ = x, Xₜ is Gaussian with
          mean <M>{"e^{-\\theta t}x"}</M> and variance <M>{"\\frac{\\sigma^2}{2\\theta}(1 - e^{-2\\theta t})"}</M>. As t
          grows the law tends to <M>{"N(0, \\sigma^2/2\\theta)"}</M>, the stationary distribution.
        </p>
      </Theorem>

      <Theorem title="geometric Brownian motion">
        <p>
          The equation <M>{"dS = \\mu S\\,dt + \\sigma S\\,dB"}</M> has solution{" "}
          <M>{"S_t = S_0 \\exp\\big((\\mu - \\tfrac12\\sigma^2)t + \\sigma B_t\\big)"}</M>. Its mean is{" "}
          <M>{"S_0 e^{\\mu t}"}</M>, but almost surely <M>{"\\tfrac1t \\log S_t \\to \\mu - \\tfrac12\\sigma^2"}</M>.
        </p>
      </Theorem>

      <Example title="solving Ornstein–Uhlenbeck">
        <p>
          Apply Itô&rsquo;s formula to <M>{"Y_t = e^{\\theta t}X_t"}</M>. Since the function is linear in x, there is no
          second-order term: <M>{"dY = \\theta e^{\\theta t}X\\,dt + e^{\\theta t}\\,dX = \\sigma e^{\\theta t}\\,dB"}</M>.
          Integrate and multiply by <M>{"e^{-\\theta t}"}</M>. The variance follows from the Itô isometry:{" "}
          <M>{"\\sigma^2\\int_0^t e^{-2\\theta(t-s)}\\,ds"}</M>.
        </p>
      </Example>

      <Remark title="mean versus typical path">
        <p>
          For geometric Brownian motion with <M>{"0 < \\mu < \\sigma^2/2"}</M>, the mean grows exponentially while almost
          every path tends to 0. The mean is carried by ever rarer, ever larger paths. This gap matters for anyone who
          compounds a risky investment.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "stat",
      rung: "check",
      prompt: <p>What is the stationary distribution of dX = −θX dt + σ dB?</p>,
      answer: { kind: "choice", options: ["Normal with mean 0 and variance σ²/(2θ)", "Normal with variance σ²t", "Uniform", "There is none"], correct: [0] },
    },
    {
      key: "gbm",
      rung: "check",
      prompt: <p>What solves dS = μS dt + σS dB?</p>,
      answer: { kind: "choice", options: ["S₀ exp((μ − σ²/2)t + σBₜ)", "S₀ exp(μt + σBₜ)", "S₀ + μt + σBₜ", "S₀ exp(μt)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, σ = 1. With θ = 2, what is the stationary variance?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "mean",
      rung: "apply",
      prompt: <p>For dX = −X dt + dB with X₀ = 3, what is E[X₁]? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 1.104, tolerance: 0.002 },
    },
    {
      key: "rate",
      rung: "apply",
      prompt: <p>For geometric Brownian motion with μ = 0.05 and σ = 0.4, what is the almost sure growth rate of log Sₜ per unit time?</p>,
      answer: { kind: "numeric", value: -0.03, tolerance: 0.0005 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Solve dX = −θX dt + σ dB by applying Itô&rsquo;s formula to exp(θt) Xₜ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies Itô’s formula or the product rule to Y = exp(θt) X, noting there is no second-order term.",
          "Finds dY = σ exp(θt) dB, since the dt terms cancel.",
          "Integrates to get Xₜ = exp(−θt) X₀ + σ ∫₀ᵗ exp(−θ(t − s)) dBₛ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For geometric Brownian motion with 0 &lt; μ &lt; σ²/2, explain how E[Sₜ] can tend to infinity while Sₜ tends to 0 almost surely.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes E[Sₜ] = S₀ exp(μt), which grows.",
          "Notes log Sₜ / t tends to μ − σ²/2 < 0, so almost every path decays, and the mean is carried by rare large paths.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Every solution of an SDE with nice coefficients is a Markov process, and its behaviour is captured by a single
        differential operator. That operator links SDEs to partial differential equations.
      </p>
      <p>Next, diffusions.</p>
    </>
  ),
};
