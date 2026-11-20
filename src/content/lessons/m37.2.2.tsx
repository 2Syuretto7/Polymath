import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { IsometryMCViz } from "@/components/viz/IsometryMCViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m37.2.2",
  minutes: 90,
  links: {
    revisits: ["m37.2.1", "m27.4.1", "m27.3.1"],
    foreshadows: ["m37.2.3", "m37.3.1", "m37.4.2"],
  },

  puzzle: (
    <>
      <p>
        The integral ∫₀¹ s dBₛ adds up tiny Brownian increments, weighting early ones lightly and late ones heavily. It is
        a random number with mean 0. How spread out is it? Is it more or less variable than B₁ itself?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick an integrand and compare the average of I² with the exact value of E ∫ H² ds.</p>
      <IsometryMCViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Itô isometry">
        <p>
          For progressively measurable H with <M>{"\\mathbb{E}\\int_0^T H^2\\,ds < \\infty"}</M>,
        </p>
        <p>
          <M>{"\\mathbb{E}\\Big[\\Big(\\int_0^T H\\,dB\\Big)^2\\Big] = \\mathbb{E}\\int_0^T H_s^2\\,ds."}</M>
        </p>
        <p>
          So the Itô integral is a linear isometry from <M>{"L^2(\\Omega \\times [0, T])"}</M> into{" "}
          <M>{"L^2(\\Omega)"}</M>. By polarisation,{" "}
          <M>{"\\mathbb{E}\\big[\\int H\\,dB \\int K\\,dB\\big] = \\mathbb{E}\\int HK\\,ds"}</M>.
        </p>
      </Theorem>

      <Remark title="proof for simple integrands">
        <p>
          Let <M>{"I = \\sum_i \\xi_i \\Delta B_i"}</M>. Expanding the square, a cross term with i &lt; j is{" "}
          <M>{"\\mathbb{E}[\\xi_i \\Delta B_i \\xi_j \\, \\mathbb{E}[\\Delta B_j \\mid \\mathcal{F}_{t_j}]] = 0"}</M>. A
          diagonal term is <M>{"\\mathbb{E}[\\xi_i^2 \\Delta B_i^2] = \\mathbb{E}[\\xi_i^2]\\,\\Delta t_i"}</M>, since{" "}
          <M>{"\\Delta B_i"}</M> is independent of <M>{"\\mathcal{F}_{t_i}"}</M>. Summing gives{" "}
          <M>{"\\mathbb{E}\\int H^2\\,ds"}</M>. The general case follows by taking L² limits.
        </p>
      </Remark>

      <Theorem title="deterministic integrands">
        <p>
          If f is a deterministic function with <M>{"\\int_0^T f^2 < \\infty"}</M>, then{" "}
          <M>{"\\int_0^T f\\,dB \\sim N\\big(0, \\int_0^T f^2\\,ds\\big)"}</M>. For simple f it is a sum of independent
          Gaussians, and L² limits of Gaussians are Gaussian.
        </p>
      </Theorem>

      <Example title="two computations">
        <p>
          <M>{"\\int_0^1 s\\,dB_s \\sim N(0, 1/3)"}</M>, less spread than <M>{"B_1 \\sim N(0, 1)"}</M>. And{" "}
          <M>{"\\mathbb{E}[(\\int_0^1 B\\,dB)^2] = \\int_0^1 \\mathbb{E}[B_s^2]\\,ds = \\tfrac12"}</M>, which agrees with{" "}
          <M>{"\\tfrac14\\mathbb{E}[(B_1^2 - 1)^2] = \\tfrac14(3 - 2 + 1)"}</M>.
        </p>
      </Example>

      <Remark title="quadratic variation">
        <p>
          The isometry is the expectation of a pathwise fact: the martingale <M>{"M_t = \\int_0^t H\\,dB"}</M> has
          quadratic variation <M>{"\\langle M \\rangle_t = \\int_0^t H^2\\,ds"}</M>, so <M>{"M^2 - \\langle M \\rangle"}</M>{" "}
          is a martingale. Integrands that are only locally square-integrable are handled by stopping, giving local
          martingales.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "stmt",
      rung: "check",
      prompt: <p>What does the Itô isometry say?</p>,
      answer: { kind: "choice", options: ["E[(∫ H dB)²] = E ∫ H² ds", "∫ H dB = ∫ H ds", "E[∫ H dB] = E ∫ H ds", "(∫ H dB)² = ∫ H² ds on every path"], correct: [0] },
    },
    {
      key: "cross",
      rung: "check",
      prompt: <p>In the proof for simple integrands, why do the cross terms vanish?</p>,
      answer: { kind: "choice", options: ["The later increment has conditional mean 0 given everything known at its start", "The increments are always positive", "The integrand is deterministic", "Brownian motion has bounded variation"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose H = 2Bₛ. What is the exact value of E ∫₀¹ H² ds?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "var",
      rung: "apply",
      prompt: <p>What is the variance of ∫₀² s dBₛ? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 2.667, tolerance: 0.002 },
    },
    {
      key: "cov",
      rung: "apply",
      prompt: <p>What is the covariance of B₁ and ∫₀¹ s dBₛ?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the Itô isometry for a simple integrand H = Σ ξᵢ 1 on (tᵢ, tᵢ₊₁].</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands the square of Σ ξᵢ ΔBᵢ into diagonal and cross terms.",
          "Shows a cross term with i < j vanishes by conditioning on the information at tⱼ, where ΔBⱼ has mean 0.",
          "Shows a diagonal term equals E[ξᵢ²] Δtᵢ by independence, and sums to E ∫ H² ds.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that ∫₀¹ B dB is not a Gaussian random variable, even though it has mean 0 and finite variance.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses ∫₀¹ B dB = (B₁² − 1)/2.",
          "Notes it is never below −1/2, while a non-degenerate Gaussian takes arbitrarily negative values.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        We can now integrate, but computing integrals from the definition is slow. Calculus needed the chain rule; so
        does stochastic calculus, with a surprising extra term.
      </p>
      <p>Next, Itô&rsquo;s formula.</p>
    </>
  ),
};
