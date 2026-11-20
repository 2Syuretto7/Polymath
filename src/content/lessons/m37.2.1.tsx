import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { StepIntegrandViz } from "@/components/viz/StepIntegrandViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m37.2.1",
  minutes: 90,
  links: {
    revisits: ["m37.1.3", "m27.5.3", "m27.4.2"],
    foreshadows: ["m37.2.2", "m37.2.3", "m37.4.2"],
  },

  puzzle: (
    <>
      <p>
        A Riemann–Stieltjes integral ∫ f dg needs g to have bounded variation, and a Brownian path has infinite
        variation on every interval. Worse, sums for ∫ B dB that sample B at the left endpoints and at the right endpoints
        converge to different limits. Which sum should define the integral, and in what sense does it converge?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Increase the number of intervals and watch the sum settle, while the identity in the middle holds exactly.</p>
      <StepIntegrandViz />
    </>
  ),

  theory: (
    <>
      <Definition title="simple predictable integrands">
        <p>
          Fix a filtration to which B is adapted, with increments after t independent of <M>{"\\mathcal{F}_t"}</M>. A{" "}
          <strong>simple</strong> process is{" "}
          <M>{"H_s = \\sum_{i} \\xi_i \\mathbf{1}_{(t_i, t_{i+1}]}(s)"}</M>, where each <M>{"\\xi_i"}</M> is bounded and{" "}
          <M>{"\\mathcal{F}_{t_i}"}</M>-measurable. Its integral is{" "}
          <M>{"\\int_0^t H\\,dB = \\sum_i \\xi_i (B_{t_{i+1} \\wedge t} - B_{t_i \\wedge t})"}</M>.
        </p>
      </Definition>

      <Theorem title="extension by isometry">
        <p>
          For simple H, <M>{"\\mathbb{E}\\big[(\\int_0^T H\\,dB)^2\\big] = \\mathbb{E}\\int_0^T H_s^2\\,ds"}</M>. Simple
          processes are dense in the space of progressively measurable H with{" "}
          <M>{"\\mathbb{E}\\int_0^T H^2\\,ds < \\infty"}</M>. So if <M>{"H^{(n)} \\to H"}</M> there, the integrals form a
          Cauchy sequence in <M>{"L^2(\\Omega)"}</M>, and their limit, which does not depend on the sequence chosen, is the{" "}
          <strong>Itô integral</strong> of H.
        </p>
        <p>
          The process <M>{"t \\mapsto \\int_0^t H\\,dB"}</M> has a continuous version, and it is a square-integrable
          martingale started at 0.
        </p>
      </Theorem>

      <Example title="∫ B dB">
        <p>
          On a partition, the identity <M>{"b(a - b) = \\tfrac12(a^2 - b^2) - \\tfrac12(a - b)^2"}</M> telescopes to{" "}
          <M>{"\\sum B_{t_i}\\Delta B_i = \\tfrac12 B_t^2 - \\tfrac12 \\sum (\\Delta B_i)^2"}</M>. The sum of squares tends
          to t in L², so <M>{"\\int_0^t B\\,dB = \\tfrac12(B_t^2 - t)"}</M>. The ordinary calculus answer would be{" "}
          <M>{"\\tfrac12 B_t^2"}</M>.
        </p>
      </Example>

      <Remark title="why the left endpoint">
        <p>
          Sampling at the left endpoint means the integrand never looks ahead at the increment it multiplies. That is what
          makes the integral a martingale, and it is the right model for a gambler whose stake must be chosen before the
          next move. Sampling at midpoints gives the Stratonovich integral, which obeys the ordinary chain rule but is not a
          martingale.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "left",
      rung: "check",
      prompt: <p>Why does the Itô integral evaluate the integrand at the left endpoint of each interval?</p>,
      answer: { kind: "choice", options: ["So that the integrand uses no information about the increment it multiplies", "Because it gives a smaller answer", "Because Brownian paths are differentiable at left endpoints", "For no particular reason"], correct: [0] },
    },
    {
      key: "bdb",
      rung: "check",
      prompt: <p>What is the Itô integral of B against itself from 0 to t?</p>,
      answer: { kind: "choice", options: ["(Bₜ² − t)/2", "Bₜ²/2", "(Bₜ² + t)/2", "t/2"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for every n and every path, the sum ∫ Hₙ dB equals which quantity exactly?</p>,
      answer: { kind: "choice", options: ["Half of B₁² minus the sum of the squared increments", "(B₁² − 1)/2", "B₁²/2", "The sum of the squared increments"], correct: [0] },
    },
    {
      key: "mean",
      rung: "apply",
      prompt: <p>What is the expectation of ∫₀¹ B dB?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0.001 },
    },
    {
      key: "val",
      rung: "apply",
      prompt: <p>On a path where B₁ = 2, what is the value of ∫₀¹ B dB?</p>,
      answer: { kind: "numeric", value: 1.5, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that Σ B(tᵢ)(B(tᵢ₊₁) − B(tᵢ)) = ½B(t)² − ½Σ(B(tᵢ₊₁) − B(tᵢ))² for a partition of [0, t], and deduce the value of ∫₀ᵗ B dB.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses b(a − b) = ½(a² − b²) − ½(a − b)² for each interval.",
          "Telescopes the sum of ½(a² − b²) to ½B(t)², since B(0) = 0.",
          "Uses that the sum of squared increments tends to t in L² to get (B(t)² − t)/2.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>What do the sums Σ B(tᵢ₊₁)(B(tᵢ₊₁) − B(tᵢ)), sampled at right endpoints, converge to?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the right-endpoint sum as the left-endpoint sum plus the sum of squared increments.",
          "Concludes the limit is (B(t)² + t)/2.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The whole construction rests on one identity: the mean square of the integral equals the mean of the integral of
        the square. It deserves a careful proof and has many uses.
      </p>
      <p>Next, the Itô isometry.</p>
    </>
  ),
};
