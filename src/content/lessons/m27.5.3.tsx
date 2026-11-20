import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ItoSumViz } from "@/components/viz/ItoSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.5.3",
  minutes: 90,
  links: {
    revisits: ["m27.5.2", "m27.4.2", "m22.5.2"],
    foreshadows: ["m37.2.1", "m37.2.2", "m37.2.3"],
  },

  puzzle: (
    <>
      <p>
        For a smooth function f with f(0) = 0, ∫₀¹ f df = f(1)²/2. Try the same with a Brownian path B. Approximate the
        integral by sums, evaluating B at the left end of each small interval, and the answer converges, but not to
        B₁²/2. Evaluate at the right end and you get a different limit. Which is the integral?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compute Riemann sums of B dB for one path, choosing where in each interval to evaluate B.</p>
      <ItoSumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="simple integrands">
        <p>
          A simple predictable process is <M>{"H_t = \\sum_j \\xi_j 1_{(t_j, t_{j+1}]}(t)"}</M>, where each{" "}
          <M>{"\\xi_j"}</M> is bounded and depends only on the path up to time <M>{"t_j"}</M>. Define{" "}
          <M>{"\\int_0^t H \\, dB = \\sum_j \\xi_j (B_{t_{j+1} \\wedge t} - B_{t_j \\wedge t})"}</M>: the gain from holding{" "}
          <M>{"\\xi_j"}</M> units over each interval, decided in advance.
        </p>
      </Definition>

      <Theorem title="the Itô isometry">
        <p>
          For simple predictable H, <M>{"E\\left[\\left(\\int_0^t H \\, dB\\right)^2\\right] = E\\left[\\int_0^t H_s^2 \\, ds\\right]"}</M>.
          Cross terms vanish because each increment is independent of what was decided before it. So the integral is an
          isometry from a subspace of <M>{"L^2(\\Omega \\times [0, t])"}</M> into <M>{"L^2(\\Omega)"}</M>, and it extends by
          completeness to all predictable H with <M>{"E\\int_0^t H_s^2 \\, ds < \\infty"}</M>. The integral is a martingale
          with mean 0.
        </p>
      </Theorem>

      <Example title="∫ B dB">
        <p>
          With left endpoints, <M>{"\\sum B_{t_j}(B_{t_{j+1}} - B_{t_j}) = \\tfrac{1}{2}B_t^2 - \\tfrac{1}{2}\\sum (\\Delta B)^2"}</M>,
          by the identity <M>{"a(b - a) = \\tfrac{1}{2}(b^2 - a^2) - \\tfrac{1}{2}(b - a)^2"}</M>. The quadratic variation
          term tends to t, so <M>{"\\int_0^t B \\, dB = \\tfrac{1}{2}B_t^2 - \\tfrac{1}{2}t"}</M>. The extra −t/2 keeps the
          mean at 0, as a martingale requires.
        </p>
      </Example>

      <Theorem title="Itô's formula, previewed">
        <p>
          For smooth f, <M>{"f(B_t) = f(B_0) + \\int_0^t f'(B_s) \\, dB_s + \\tfrac{1}{2}\\int_0^t f''(B_s) \\, ds"}</M>. The
          second-order term comes from <M>{"(dB)^2 = dt"}</M>. With <M>{"f(x) = x^2"}</M> this is the example above.
        </p>
      </Theorem>

      <Remark title="why the left endpoint">
        <p>
          Left endpoints make the integrand predictable: a trader must choose a position before the price moves. That is
          why the Itô integral is a martingale and the natural model of gains from trading. The midpoint rule gives the
          Stratonovich integral, which obeys the ordinary chain rule but is not a martingale.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ito",
      rung: "check",
      prompt: <p>What is the Itô integral ∫₀ᵗ B dB?</p>,
      answer: { kind: "choice", options: ["(Bₜ² − t)/2", "Bₜ²/2", "(Bₜ² + t)/2", "t/2"], correct: [0] },
    },
    {
      key: "iso",
      rung: "check",
      prompt: <p>What does the Itô isometry equate E[(∫ H dB)²] with?</p>,
      answer: { kind: "choice", options: ["E[∫ H² ds]", "(E ∫ H ds)²", "E[∫ H dB]²", "0"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, by how much do the right-endpoint and left-endpoint limits differ for t = 1?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "var",
      rung: "apply",
      prompt: <p>What is the variance of ∫₀¹ B dB? Use the Itô isometry and E[Bₛ²] = s.</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "mean",
      rung: "apply",
      prompt: <p>What is E[∫₀¹ B dB]?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the left-endpoint sums for ∫₀ᵗ B dB converge to (Bₜ² − t)/2.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses a(b − a) = (b² − a²)/2 − (b − a)²/2 on each interval.",
          "Telescopes the first part to Bₜ²/2.",
          "Uses quadratic variation: the sum of squared increments tends to t.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use Itô&rsquo;s formula with f(x) = x³ to express Bₜ³ as an Itô integral plus an ordinary integral.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes f′(x) = 3x² and f″(x) = 6x.",
          "Writes Bₜ³ = ∫ 3Bₛ² dBₛ + ∫ 3Bₛ ds.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Brownian motion and the Itô integral open a whole calculus: stochastic differential equations, diffusions, and
        the mathematics of option pricing.
      </p>
      <p>Next, the course on stochastic calculus begins with the Markov property.</p>
    </>
  ),
};
