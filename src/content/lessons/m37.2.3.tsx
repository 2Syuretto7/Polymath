import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ItoCorrectionViz } from "@/components/viz/ItoCorrectionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m37.2.3",
  minutes: 90,
  links: {
    revisits: ["m37.2.2", "m37.1.3", "m27.5.3"],
    foreshadows: ["m37.3.2", "m37.4.1", "m37.5.1"],
  },

  puzzle: (
    <>
      <p>
        Ordinary calculus says d(B²) = 2B dB. Integrate: Bₜ² = 2∫₀ᵗ B dB. The right side is an Itô integral, so its mean
        is 0. But E[Bₜ²] = t. Where did the t come from?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare f(Bₜ) with the chain rule alone and with the chain rule plus a correction.</p>
      <ItoCorrectionViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Itô's formula">
        <p>For f twice continuously differentiable,</p>
        <p>
          <M>{"f(B_t) = f(B_0) + \\int_0^t f'(B_s)\\,dB_s + \\frac12\\int_0^t f''(B_s)\\,ds."}</M>
        </p>
        <p>
          More generally, for an Itô process <M>{"dX = \\mu\\,dt + \\sigma\\,dB"}</M> and f(t, x) of class C¹ in t and C² in
          x, <M>{"df(t, X_t) = f_t\\,dt + f_x\\,dX + \\tfrac12 f_{xx}\\,\\sigma^2\\,dt"}</M>.
        </p>
      </Theorem>

      <Remark title="why the extra term">
        <p>
          Expand to second order on a partition:{" "}
          <M>{"f(B_{t_{i+1}}) - f(B_{t_i}) = f'(B_{t_i})\\Delta B_i + \\tfrac12 f''(B_{t_i})(\\Delta B_i)^2 + o((\\Delta B_i)^2)"}</M>.
          The first terms sum to the Itô integral. Because the quadratic variation of B is t, the second terms sum to{" "}
          <M>{"\\tfrac12\\int f''(B)\\,ds"}</M>, not to 0. The remainders vanish in the limit. In short, the rules are{" "}
          <M>{"dB\\,dB = dt"}</M>, <M>{"dB\\,dt = 0"}</M> and <M>{"dt\\,dt = 0"}</M>.
        </p>
      </Remark>

      <Example title="moments">
        <p>
          <M>{"d(B^2) = 2B\\,dB + dt"}</M>, which resolves the puzzle. And <M>{"d(B^4) = 4B^3\\,dB + 6B^2\\,dt"}</M>, so
          taking expectations, <M>{"\\mathbb{E}[B_t^4] = 6\\int_0^t s\\,ds = 3t^2"}</M>.
        </p>
      </Example>

      <Example title="the exponential martingale">
        <p>
          Let <M>{"X_t = \\exp(\\sigma B_t - \\sigma^2 t/2)"}</M>. With <M>{"f(t, x) = \\exp(\\sigma x - \\sigma^2 t/2)"}</M>{" "}
          we have <M>{"f_t = -\\tfrac12\\sigma^2 f"}</M>, <M>{"f_x = \\sigma f"}</M> and <M>{"f_{xx} = \\sigma^2 f"}</M>. The{" "}
          dt terms cancel, leaving <M>{"dX = \\sigma X\\,dB"}</M>. So X is a stochastic integral and a martingale, with{" "}
          <M>{"\\mathbb{E}[e^{\\sigma B_t}] = e^{\\sigma^2 t/2}"}</M>. This is geometric Brownian motion without drift.
        </p>
      </Example>

      <Remark title="the product rule">
        <p>
          Applied to xy, the two-dimensional formula gives <M>{"d(XY) = X\\,dY + Y\\,dX + dX\\,dY"}</M>. The last term is
          the covariation, which ordinary calculus never sees.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "corr",
      rung: "check",
      prompt: <p>What term does Itô&rsquo;s formula add to the ordinary chain rule for f(Bₜ)?</p>,
      answer: { kind: "choice", options: ["½ f″(Bₜ) dt", "f″(Bₜ) dB", "f′(Bₜ) dt", "Nothing"], correct: [0] },
    },
    {
      key: "table",
      rung: "check",
      prompt: <p>In the multiplication rules of stochastic calculus, what is dB · dB?</p>,
      answer: { kind: "choice", options: ["dt", "0", "dB", "2 dB"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with f(x) = x², what does the chain rule alone give at t = 1, up to discretisation error?</p>,
      answer: { kind: "choice", options: ["f(B₁) − 1", "f(B₁)", "f(B₁) + 1", "0"], correct: [0] },
    },
    {
      key: "four",
      rung: "apply",
      prompt: <p>What is E[B₂⁴]?</p>,
      answer: { kind: "numeric", value: 12, tolerance: 0.001 },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>What is E[exp(B₁)]? Give four decimal places.</p>,
      answer: { kind: "numeric", value: 1.6487, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use Itô&rsquo;s formula to show that Xₜ = exp(σBₜ − σ²t/2) satisfies dX = σX dB.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the time-dependent formula to f(t, x) = exp(σx − σ²t/2).",
          "Computes the partial derivatives: ∂f/∂t = −½σ²f, ∂f/∂x = σf and ∂²f/∂x² = σ²f.",
          "Shows the dt terms cancel, leaving dX = σX dB.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use Itô&rsquo;s formula to find E[Bₜ⁶].</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes d(B⁶) = 6B⁵ dB + 15B⁴ dt.",
          "Takes expectations and uses E[Bₛ⁴] = 3s² to get 15 ∫ 3s² ds = 15t³.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With integrals and the chain rule in hand, we can write equations driven by noise, dX = b(X) dt + σ(X) dB, and
        ask when they have solutions.
      </p>
      <p>Next, existence and uniqueness for stochastic differential equations.</p>
    </>
  ),
};
