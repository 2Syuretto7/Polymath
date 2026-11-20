import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { BrownianVariationViz } from "@/components/viz/BrownianVariationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.5.2",
  minutes: 90,
  links: {
    revisits: ["m27.5.1", "m27.2.1", "m22.4.4"],
    foreshadows: ["m27.5.3", "m37.1.2", "m37.1.3"],
  },

  puzzle: (
    <>
      <p>
        Measure a coastline with a shorter and shorter ruler and its length keeps growing. A Brownian path behaves the same
        way: the finer you sample it, the longer it gets, without limit. Yet one quantity built from its increments
        settles down to an exact, non-random value. Which?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sample one Brownian path on finer and finer grids, and compare two sums of increments.</p>
      <BrownianVariationViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="quadratic variation">
        <p>
          For partitions <M>{"0 = t_0 < \\cdots < t_m = t"}</M> with mesh tending to 0,{" "}
          <M>{"\\sum_j (B_{t_{j+1}} - B_{t_j})^2 \\to t"}</M> in <M>{"L^2"}</M>. <strong>Proof:</strong> the summands are
          independent with means <M>{"t_{j+1} - t_j"}</M> and variances <M>{"2(t_{j+1} - t_j)^2"}</M>, so the sum has mean t
          and variance at most 2t·mesh → 0. For dyadic partitions the convergence is almost sure, by Borel–Cantelli.
        </p>
      </Theorem>

      <Theorem title="unbounded variation">
        <p>
          Almost surely, B has infinite total variation on every interval. Indeed{" "}
          <M>{"\\sum (\\Delta B)^2 \\le \\max |\\Delta B| \\cdot \\sum |\\Delta B|"}</M>; the left side tends to t &gt; 0
          and max |ΔB| → 0 by uniform continuity, so <M>{"\\sum |\\Delta B| \\to \\infty"}</M>.
        </p>
      </Theorem>

      <Theorem title="nowhere differentiable (Paley, Wiener and Zygmund)">
        <p>
          Almost surely, <M>{"t \\mapsto B_t"}</M> is differentiable at no t. The path is Hölder continuous of every order
          less than 1/2 and of no order greater than 1/2; Lévy&rsquo;s modulus makes this exact:{" "}
          <M>{"\\limsup_{h \\to 0} \\sup_t |B_{t+h} - B_t| / \\sqrt{2h \\log(1/h)} = 1"}</M>.
        </p>
      </Theorem>

      <Example title="the law of the iterated logarithm">
        <p>
          At a single time the oscillations are slightly larger than √t:{" "}
          <M>{"\\limsup_{t \\to \\infty} B_t / \\sqrt{2t \\log \\log t} = 1"}</M> almost surely. So B crosses 0 infinitely
          often as t → ∞, and, by time inversion, also infinitely often in every interval (0, ε).
        </p>
      </Example>

      <Remark title="why this matters">
        <p>
          Because the total variation is infinite, <M>{"\\int f \\, dB"}</M> cannot be defined path by path as a
          Riemann–Stieltjes integral. Because the quadratic variation is finite and equal to t, a new calculus is possible,
          with <M>{"(dB)^2 = dt"}</M> as its central rule.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "qv",
      rung: "check",
      prompt: <p>What is the quadratic variation of Brownian motion on [0, t]?</p>,
      answer: { kind: "choice", options: ["t", "0", "∞", "√t"], correct: [0] },
    },
    {
      key: "diff",
      rung: "check",
      prompt: <p>At how many times is a Brownian path differentiable, almost surely?</p>,
      answer: { kind: "choice", options: ["None", "All but countably many", "Almost every time", "Only at t = 0"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with 1024 intervals, roughly what is the expected sum of absolute increments √(2m/π)? Give one decimal place.</p>,
      answer: { kind: "numeric", value: 25.5, tolerance: 0.2 },
    },
    {
      key: "qv3",
      rung: "apply",
      prompt: <p>What is the limit of Σ (ΔB)² over finer and finer partitions of [2, 5]?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "var",
      rung: "apply",
      prompt: <p>For a partition of [0, 1] into m equal pieces, what is the variance of Σ (ΔB)²?</p>,
      answer: { kind: "choice", options: ["2/m", "1/m", "2", "m"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the quadratic variation sums over [0, t] converge to t in L² as the mesh tends to 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes each (ΔB)² has mean Δt and variance 2(Δt)², and the terms are independent.",
          "Computes E[(Σ(ΔB)² − t)²] = Σ 2(Δt)² ≤ 2t·mesh.",
          "Concludes the expression tends to 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the quadratic variation to show that a Brownian path cannot be Lipschitz on [0, 1].</p>,
      answer: {
        kind: "written",
        rubric: [
          "If |ΔB| ≤ C·Δt, then Σ (ΔB)² ≤ C²·Σ (Δt)² ≤ C²·mesh → 0.",
          "This contradicts the limit 1, which holds almost surely along dyadic partitions.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        We would like to integrate against Brownian motion, to model a gain that accumulates from a strategy applied to a
        random price. The roughness of the path decides how that integral must be defined.
      </p>
      <p>Next, stochastic integration, a first look.</p>
    </>
  ),
};
