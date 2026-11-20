import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DensityEvolveViz } from "@/components/viz/DensityEvolveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m37.3.3",
  minutes: 90,
  links: {
    revisits: ["m37.3.2", "m37.1.1", "m37.2.3"],
    foreshadows: ["m37.5.1", "m37.4.1", "m37.5.2"],
  },

  puzzle: (
    <>
      <p>
        The heat equation describes how a drop of ink spreads through water. Brownian motion describes how a single ink
        particle wanders. One is a deterministic PDE, the other a random path. In what precise sense are they the same
        thing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Run many particles forward and compare their histogram with the exact density.</p>
      <DensityEvolveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="diffusions and their generators">
        <p>
          A <strong>diffusion</strong> is the solution of <M>{"dX = b(X)\\,dt + \\sigma(X)\\,dB"}</M> with Lipschitz
          coefficients. It is a strong Markov process with continuous paths. Its <strong>generator</strong> is{" "}
          <M>{"Lf = b f' + \\tfrac12\\sigma^2 f''"}</M>, for f of class C².
        </p>
      </Definition>

      <Theorem title="Dynkin's formula">
        <p>
          By Itô&rsquo;s formula, <M>{"f(X_t) - f(X_0) - \\int_0^t Lf(X_s)\\,ds = \\int_0^t f'(X_s)\\sigma(X_s)\\,dB_s"}</M>,
          a local martingale. For bounded f with bounded derivatives,{" "}
          <M>{"\\mathbb{E}_x f(X_t) = f(x) + \\mathbb{E}_x\\int_0^t Lf(X_s)\\,ds"}</M>.
        </p>
      </Theorem>

      <Theorem title="Kolmogorov's equations">
        <ul>
          <li>Backward: <M>{"u(t, x) = \\mathbb{E}_x f(X_t)"}</M> solves <M>{"\\partial_t u = Lu"}</M> with u(0, x) = f(x).</li>
          <li>Forward, or Fokker–Planck: the density p(t, y) of Xₜ solves <M>{"\\partial_t p = L^*p = -(bp)' + \\tfrac12(\\sigma^2 p)''"}</M>.</li>
          <li>A stationary density solves <M>{"L^*p = 0"}</M>. In one dimension, <M>{"p(y) \\propto \\frac{1}{\\sigma^2}\\exp\\int^y \\frac{2b}{\\sigma^2}"}</M>, when this is integrable.</li>
        </ul>
      </Theorem>

      <Example title="two cases">
        <p>
          For Brownian motion, <M>{"L = \\tfrac12\\frac{d^2}{dx^2}"}</M> and both equations are the heat equation, which
          answers the puzzle: the ink density is the law of one particle. For{" "}
          <M>{"dX = -X\\,dt + \\sqrt2\\,dB"}</M>, <M>{"L = -xf' + f''"}</M>, and the stationary density is proportional to{" "}
          <M>{"e^{-x^2/2}"}</M>, the standard normal.
        </p>
      </Example>

      <Remark title="hitting probabilities">
        <p>
          If φ solves Lφ = 0 on (a, c), then φ(X) is a local martingale up to the exit time. Optional stopping gives the
          probability of leaving at c as <M>{"(\\varphi(x) - \\varphi(a))/(\\varphi(c) - \\varphi(a))"}</M>. The function φ
          is the <strong>scale function</strong>; for Brownian motion it is the identity.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "gen",
      rung: "check",
      prompt: <p>What is the generator of dX = b(X) dt + σ(X) dB?</p>,
      answer: { kind: "choice", options: ["Lf = b f′ + ½σ² f″", "Lf = σ f′ + b f″", "Lf = f″", "Lf = b f"], correct: [0] },
    },
    {
      key: "fp",
      rung: "check",
      prompt: <p>Which equation does the density of Xₜ satisfy?</p>,
      answer: { kind: "choice", options: ["The forward, or Fokker–Planck, equation", "The backward equation in x", "Laplace’s equation", "The wave equation"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the drift −x, what does the variance of Xₜ tend to as t grows?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "bm",
      rung: "apply",
      prompt: <p>What is the generator of dX = √2 dB?</p>,
      answer: { kind: "choice", options: ["Lf = f″", "Lf = ½f″", "Lf = √2 f′", "Lf = 2f″"], correct: [0] },
    },
    {
      key: "stat",
      rung: "apply",
      prompt: <p>The diffusion dX = −2X dt + dB has a normal stationary distribution with mean 0. What is its variance?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that f(Xₜ) − ∫₀ᵗ Lf(Xₛ) ds is a local martingale for a diffusion X and f of class C².</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies Itô’s formula: df(X) = f′(X) dX + ½f″(X) σ(X)² dt.",
          "Substitutes dX = b dt + σ dB to get df(X) = Lf(X) dt + f′(X)σ(X) dB.",
          "Concludes the difference is f(X₀) plus a stochastic integral, hence a local martingale.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Brownian motion starts at x in (0, 1). What is the probability that it hits 1 before 0?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that B is a martingale, or that the scale function of Brownian motion is the identity.",
          "Applies optional stopping at the exit time to get the answer x.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Changing the drift of a diffusion changes its law. Remarkably, it can be undone by changing the probability
        measure instead, turning a Brownian motion with drift into a plain one.
      </p>
      <p>Next, Girsanov&rsquo;s theorem.</p>
    </>
  ),
};
