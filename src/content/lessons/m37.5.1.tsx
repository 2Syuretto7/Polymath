import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { FeynmanKacViz } from "@/components/viz/FeynmanKacViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m37.5.1",
  minutes: 90,
  links: {
    revisits: ["m37.3.3", "m37.2.3", "m37.4.1"],
    foreshadows: ["m37.5.2", "m37.5.3", "m33.5.1"],
  },

  puzzle: (
    <>
      <p>
        Heat spreads through a rod, and part of it is absorbed along the way, faster in some places than others. The
        equation is a PDE. Could you solve it instead by releasing random walkers, letting the absorbing regions remove
        some of them, and counting what is left?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a potential and compare the PDE solution with path averages.</p>
      <FeynmanKacViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Feynman–Kac formula">
        <p>
          Let V be bounded below and f bounded and continuous. If u is a bounded solution of{" "}
          <M>{"\\partial_t u = \\tfrac12 u'' - Vu"}</M> with u(0, x) = f(x), then
        </p>
        <p>
          <M>{"u(t, x) = \\mathbb{E}_x\\Big[f(B_t)\\exp\\Big(-\\int_0^t V(B_s)\\,ds\\Big)\\Big]."}</M>
        </p>
        <p>
          For a diffusion with generator L the same holds with <M>{"\\tfrac12 u''"}</M> replaced by Lu.
        </p>
      </Theorem>

      <Remark title="proof">
        <p>
          Fix t and set <M>{"M_s = u(t - s, B_s)\\exp(-\\int_0^s V(B_r)\\,dr)"}</M> for s ≤ t. By Itô&rsquo;s formula,{" "}
          <M>{"dM = e^{-\\int V}\\big(-\\partial_t u + \\tfrac12 u'' - Vu\\big)ds + e^{-\\int V}u'\\,dB"}</M>, and the ds term
          vanishes by the PDE. So M is a martingale, and <M>{"M_0 = u(t, x)"}</M> equals{" "}
          <M>{"\\mathbb{E}_x M_t = \\mathbb{E}_x[f(B_t)e^{-\\int_0^t V}]"}</M>.
        </p>
      </Remark>

      <Example title="killing">
        <p>
          Read <M>{"\\exp(-\\int_0^t V(B_s)\\,ds)"}</M> as the probability that a particle killed at rate V(x) survives to
          time t. Then u(t, x) is the expected value of f over surviving particles. For constant V = c, the formula gives{" "}
          <M>{"u = e^{-ct}\\,\\mathbb{E}_x f(B_t)"}</M>.
        </p>
      </Example>

      <Remark title="pricing and physics">
        <p>
          In terminal-value form, <M>{"v(t, x) = \\mathbb{E}[g(X_T)e^{-\\int_t^T r\\,ds} \\mid X_t = x]"}</M> solves{" "}
          <M>{"\\partial_t v + Lv - rv = 0"}</M> with v(T, ·) = g. With geometric Brownian motion under the risk-neutral
          measure, this is the Black–Scholes equation. Mark Kac found the formula in 1949 while making sense of
          Feynman&rsquo;s path integrals for the Schrödinger equation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "form",
      rung: "check",
      prompt: <p>Which expectation does Feynman–Kac give for the solution of ∂u/∂t = ½u″ − Vu with u(0, ·) = f?</p>,
      answer: { kind: "choice", options: ["E[f(x + Bₜ) exp(−∫₀ᵗ V(x + Bₛ) ds)]", "E[f(x + Bₜ)] + ∫₀ᵗ V ds", "f(x) exp(−Vt)", "E[V(x + Bₜ)]"], correct: [0] },
    },
    {
      key: "kill",
      rung: "check",
      prompt: <p>How can the potential V be interpreted?</p>,
      answer: { kind: "choice", options: ["As a rate at which paths are killed", "As the drift of the paths", "As the volatility", "As the starting point"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with V = 0, the value at x = 0 is E[exp(−B₁²)]. What is its exact value? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.577, tolerance: 0.002 },
    },
    {
      key: "const",
      rung: "apply",
      prompt: <p>With V = 1, what is u(1, 0)? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.212, tolerance: 0.002 },
    },
    {
      key: "surv",
      rung: "apply",
      prompt: <p>A particle is killed at constant rate 2. What is the probability it survives to time 1? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.135, tolerance: 0.002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the Feynman–Kac formula, assuming u is smooth and bounded with bounded derivatives.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines M(s) = u(t − s, Bₛ) exp(−∫₀ˢ V(Bᵣ) dr) for s between 0 and t.",
          "Applies Itô’s formula and uses the PDE to cancel the ds terms, leaving a stochastic integral, so M is a martingale.",
          "Equates E M(0) = u(t, x) with E M(t) = E[f(Bₜ) exp(−∫₀ᵗ V)].",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain how the Black–Scholes price of an option is an instance of the Feynman–Kac formula.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the price as the discounted expectation of the payoff under the risk-neutral measure.",
          "Notes the stock follows geometric Brownian motion with drift r there, and the discount rate r plays the role of V.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Feynman–Kac computes the value of holding to a fixed time. Often one may choose when to stop, and the best choice
        depends on where the path has gone.
      </p>
      <p>Next, optimal stopping.</p>
    </>
  ),
};
