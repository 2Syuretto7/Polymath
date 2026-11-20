import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { QVTrackViz } from "@/components/viz/QVTrackViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m37.1.3",
  minutes: 90,
  links: {
    revisits: ["m37.1.2", "m27.5.2", "m27.4.4"],
    foreshadows: ["m37.2.1", "m37.2.2", "m37.4.2"],
  },

  puzzle: (
    <>
      <p>
        Two traders watch the same kind of random price, but one market is twice as volatile. Watching a single path for
        an hour, could you tell which market you are in? The path&rsquo;s direction is pure noise. Is there anything in
        one path that measures its volatility exactly?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare a martingale M with its running sum of squared increments, for different volatilities σ.</p>
      <QVTrackViz />
    </>
  ),

  theory: (
    <>
      <Definition title="quadratic variation">
        <p>
          For a continuous process X, its <strong>quadratic variation</strong> <M>{"\\langle X \\rangle_t"}</M> is the
          limit in probability of <M>{"\\sum_j (X_{t_{j+1}} - X_{t_j})^2"}</M> over partitions of [0, t] with mesh tending
          to 0, when the limit exists. For Brownian motion, <M>{"\\langle B \\rangle_t = t"}</M>.
        </p>
      </Definition>

      <Theorem title="Doob–Meyer for continuous martingales">
        <p>
          If M is a continuous square-integrable martingale, then <M>{"\\langle M \\rangle"}</M> exists, is continuous,
          increasing and adapted, and it is the unique such process with <M>{"\\langle M \\rangle_0 = 0"}</M> making{" "}
          <M>{"M^2 - \\langle M \\rangle"}</M> a martingale. For Brownian motion this is the martingale{" "}
          <M>{"B_t^2 - t"}</M>.
        </p>
      </Theorem>

      <Example title="stochastic integrals">
        <p>
          For a deterministic or predictable integrand σ, <M>{"M_t = \\int_0^t \\sigma_s \\, dB_s"}</M> has{" "}
          <M>{"\\langle M \\rangle_t = \\int_0^t \\sigma_s^2 \\, ds"}</M>. So one observed path determines the volatility
          exactly: an observer with a fine enough clock can read σ off the path. This is the basis of realised volatility in
          finance.
        </p>
      </Example>

      <Theorem title="Lévy's characterisation">
        <p>
          A continuous martingale M with <M>{"M_0 = 0"}</M> and <M>{"\\langle M \\rangle_t = t"}</M> is a Brownian motion.
          Quadratic variation, together with continuity and the martingale property, is all it takes. A continuous
          martingale of finite variation is constant: its quadratic variation is 0, so <M>{"E[M_t^2] = 0"}</M>.
        </p>
      </Theorem>

      <Remark title="covariation">
        <p>
          For two processes, polarisation defines{" "}
          <M>{"\\langle X, Y \\rangle = \\tfrac{1}{4}(\\langle X + Y \\rangle - \\langle X - Y \\rangle)"}</M>. Independent
          Brownian motions have covariation 0. Together, <M>{"(dB)^2 = dt"}</M>,{" "}
          <M>{"dB \\, dt = 0"}</M> and <M>{"(dt)^2 = 0"}</M> are the multiplication table of Itô calculus.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "bm",
      rung: "check",
      prompt: <p>What is ⟨B⟩ₜ for Brownian motion?</p>,
      answer: { kind: "choice", options: ["t", "0", "Bₜ²", "√t"], correct: [0] },
    },
    {
      key: "levy",
      rung: "check",
      prompt: <p>What does Lévy&rsquo;s characterisation need, besides continuity and starting at 0?</p>,
      answer: { kind: "choice", options: ["M is a martingale with ⟨M⟩ₜ = t", "M has normal marginals", "M has independent increments", "M is bounded"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with σ(t) = 2t, what is ⟨M⟩₁? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 1.333, tolerance: 0.002 },
    },
    {
      key: "scale",
      rung: "apply",
      prompt: <p>If Mₜ = 3Bₜ, what is ⟨M⟩₂?</p>,
      answer: { kind: "numeric", value: 18, tolerance: 0 },
    },
    {
      key: "fv",
      rung: "apply",
      prompt: <p>A continuous martingale has finite variation on [0, t] and M₀ = 0. What is Mₜ?</p>,
      answer: { kind: "choice", options: ["0, almost surely", "Bₜ", "t", "It cannot be determined"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that Bₜ² − t is a martingale.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes Bₜ² = (Bₛ + (Bₜ − Bₛ))² and expands.",
          "Uses independence of the increment from Fₛ, its mean 0 and variance t − s, to get E[Bₜ² | Fₛ] = Bₛ² + t − s.",
          "Concludes E[Bₜ² − t | Fₛ] = Bₛ² − s.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that a continuous martingale M of finite variation with M₀ = 0 is identically 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Bounds Σ (ΔM)² by max |ΔM| times the total variation, which tends to 0 by uniform continuity.",
          "So ⟨M⟩ = 0, and M² is a martingale with mean 0, so E[Mₜ²] = 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With quadratic variation in hand, we can build the stochastic integral properly: first for simple integrands,
        then by an isometry for all reasonable ones.
      </p>
      <p>Next, the construction of the Itô integral.</p>
    </>
  ),
};
