import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { GirsanovViz } from "@/components/viz/GirsanovViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m37.4.1",
  minutes: 90,
  links: {
    revisits: ["m37.3.3", "m37.2.3", "m27.4.1"],
    foreshadows: ["m37.4.2", "m37.5.3", "m37.5.1"],
  },

  puzzle: (
    <>
      <p>
        You watch one path on [0, 1]. Was it drawn from Brownian motion, or from Brownian motion with a small upward
        drift? No single path settles it: every path possible under one is possible under the other, only more or less
        likely. Could you then simply reweight the probabilities and turn one process into the other?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a drift and then reweight each path by the density Z.</p>
      <GirsanovViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Girsanov's theorem">
        <p>
          Let θ be adapted with <M>{"\\mathbb{E}\\exp(\\tfrac12\\int_0^T \\theta_s^2\\,ds) < \\infty"}</M>, Novikov&rsquo;s
          condition. Put <M>{"Z_T = \\exp\\big(-\\int_0^T \\theta\\,dB - \\tfrac12\\int_0^T \\theta^2\\,ds\\big)"}</M> and{" "}
          <M>{"dQ = Z_T\\,dP"}</M>. Then <M>{"W_t = B_t + \\int_0^t \\theta_s\\,ds"}</M> is a standard Brownian motion under
          Q.
        </p>
      </Theorem>

      <Remark title="why it works">
        <p>
          By Itô&rsquo;s formula <M>{"dZ = -\\theta Z\\,dB"}</M>, so Z is a local martingale, and Novikov&rsquo;s condition
          makes it a true martingale with mean 1, so Q is a probability measure. A short computation with the product rule
          shows that ZW is a P-local martingale, so W is a Q-local martingale. Its quadratic variation is still t, and
          Lévy&rsquo;s characterisation then says W is a Q-Brownian motion.
        </p>
      </Remark>

      <Example title="removing a constant drift">
        <p>
          Under P let <M>{"X_t = B_t + \\mu t"}</M>. Take θ = μ, so <M>{"Z_T = \\exp(-\\mu B_T - \\tfrac12\\mu^2 T)"}</M>.
          Under Q, X is a standard Brownian motion. For example,{" "}
          <M>{"\\mathbb{E}_Q[e^{\\lambda X_1}] = \\mathbb{E}_P[e^{-\\mu B_1 - \\mu^2/2 + \\lambda B_1 + \\lambda\\mu}] = e^{\\lambda^2/2}"}</M>.
        </p>
      </Example>

      <Remark title="drift can change; volatility cannot">
        <p>
          Quadratic variation is computed path by path, so it is the same under every equivalent measure. Two diffusions
          with different volatilities have mutually singular laws: you can tell them apart from one path. This is why, in
          finance, moving to a risk-neutral measure changes the drift of a stock to the interest rate but leaves its
          volatility alone. Girsanov&rsquo;s theorem is also the basis of importance sampling for rare events.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What does a Girsanov change of measure alter?</p>,
      answer: { kind: "choice", options: ["The drift", "The volatility", "The quadratic variation", "The set of possible paths"], correct: [0] },
    },
    {
      key: "nov",
      rung: "check",
      prompt: <p>What is Novikov&rsquo;s condition for?</p>,
      answer: { kind: "choice", options: ["It ensures Z is a true martingale with mean 1, so Q is a probability measure", "It ensures θ is continuous", "It makes B a martingale under P", "It removes the volatility"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, after reweighting, what is the exact mean of X₁ under Q?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0.001 },
    },
    {
      key: "mean",
      rung: "apply",
      prompt: <p>What is the P-expectation of the density Z at time T?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "bq",
      rung: "apply",
      prompt: <p>With θ = μ constant, X = B + μt is a Q-Brownian motion. What is B itself under Q?</p>,
      answer: { kind: "choice", options: ["A Brownian motion with drift −μ", "A standard Brownian motion", "A Brownian motion with drift μ", "A constant"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For constant μ, show directly that X₁ = B₁ + μ is standard normal under Q, where dQ = exp(−μB₁ − μ²/2) dP.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the Q-expectation of exp(λX₁) as the P-expectation of exp(−μB₁ − μ²/2 + λB₁ + λμ).",
          "Uses that the P-expectation of exp(cB₁) is exp(c²/2), with c = λ − μ.",
          "Simplifies to exp(λ²/2), the moment generating function of N(0, 1).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can no change of measure turn Brownian motion into 2B, Brownian motion with volatility 2?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the quadratic variation over [0, t] is t for B and 4t for 2B, almost surely, and is computed path by path.",
          "Concludes the two laws are mutually singular, so neither has a density with respect to the other.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Girsanov changes which paths are likely. A complementary fact says that, in a world driven by one Brownian
        motion, every random payoff can be built from Brownian increments alone.
      </p>
      <p>Next, martingale representation.</p>
    </>
  ),
};
