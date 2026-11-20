import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SummabilityViz } from "@/components/viz/SummabilityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.1.2",
  minutes: 90,
  links: {
    revisits: ["m34.1.1", "m12.3.2", "m6.8.4"],
    foreshadows: ["m34.1.3", "m34.4.1", "m33.1.1"],
  },

  puzzle: (
    <>
      <p>
        The series 1 − 1 + 1 − 1 + ⋯ has partial sums 1, 0, 1, 0, …, which never settle. Their running averages, 1, ½,
        ⅔, ½, ⅗, …, tend to ½. Could averaging rescue Fourier series that refuse to converge?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a kernel and vary n, and test it against the three properties of a good kernel.</p>
      <SummabilityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="good kernels">
        <p>
          A sequence of integrable functions <M>{"K_n"}</M> on 𝕋 is a family of <strong>good kernels</strong>, or an
          approximate identity, if
        </p>
        <p>
          <M>{"\\frac{1}{2\\pi}\\int K_n = 1, \\quad \\sup_n \\frac{1}{2\\pi}\\int |K_n| < \\infty, \\quad \\int_{\\delta \\le |x| \\le \\pi} |K_n| \\to 0 \\text{ for each } \\delta > 0."}</M>
        </p>
      </Definition>

      <Theorem title="approximation">
        <p>
          If <M>{"K_n"}</M> are good kernels and f is continuous on 𝕋, then <M>{"K_n * f \\to f"}</M> uniformly. If f is
          only integrable, <M>{"K_n * f \\to f"}</M> in the mean.
        </p>
      </Theorem>

      <Example title="Fejér and Poisson">
        <p>
          The <strong>Cesàro means</strong> <M>{"\\sigma_N f = \\frac{1}{N + 1}(S_0 f + \\cdots + S_N f)"}</M> equal{" "}
          <M>{"F_N * f"}</M> with the <strong>Fejér kernel</strong>{" "}
          <M>{"F_N(x) = \\dfrac{1}{N + 1}\\left(\\dfrac{\\sin \\frac{(N + 1)x}{2}}{\\sin \\frac{x}{2}}\\right)^{2} \\ge 0"}</M>.
          The Abel means <M>{"\\sum r^{|n|} \\hat f(n) e^{inx}"}</M> equal <M>{"P_r * f"}</M> with the{" "}
          <strong>Poisson kernel</strong> <M>{"P_r(x) = \\dfrac{1 - r^2}{1 - 2r\\cos x + r^2}"}</M>, as r → 1. Both are
          good. The Dirichlet kernels are not, since their absolute averages grow like log N.
        </p>
      </Example>

      <Theorem title="Fejér's theorem and its consequences">
        <p>
          For every continuous f, <M>{"\\sigma_N f \\to f"}</M> uniformly. Hence trigonometric polynomials are dense in
          C(𝕋), which is Weierstrass&rsquo;s theorem for periodic functions; and a continuous function whose Fourier
          coefficients all vanish is identically zero.
        </p>
      </Theorem>

      <Remark title="positivity">
        <p>
          Because <M>{"F_N \\ge 0"}</M>, if <M>{"m \\le f \\le M"}</M> then <M>{"m \\le \\sigma_N f \\le M"}</M>: the Cesàro
          means never overshoot, so there is no Gibbs phenomenon for them. The Poisson integral <M>{"P_r * f"}</M>, as a
          function of <M>{"re^{ix}"}</M>, is the harmonic function in the disc with boundary values f.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fej",
      rung: "check",
      prompt: <p>What are the Fejér means of a Fourier series?</p>,
      answer: { kind: "choice", options: ["The averages of the first N + 1 partial sums", "The partial sums with only even terms", "The coefficients multiplied by n", "The limits of the partial sums"], correct: [0] },
    },
    {
      key: "fail",
      rung: "check",
      prompt: <p>Which property of a good kernel do the Dirichlet kernels fail?</p>,
      answer: { kind: "choice", options: ["Their absolute averages are not bounded", "Their averages are not 1", "They are not integrable", "They are not periodic"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the Fejér kernel with n = 30. What is the mass outside |x| &lt; 0.3, to two decimal places?</p>,
      answer: { kind: "numeric", value: 0.07, tolerance: 0.01 },
    },
    {
      key: "ces",
      rung: "apply",
      prompt: <p>What is the Cesàro sum of 1 − 1 + 1 − 1 + ⋯?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "uniq",
      rung: "apply",
      prompt: <p>A continuous periodic f has every Fourier coefficient equal to 0. What follows from Fejér&rsquo;s theorem?</p>,
      answer: { kind: "choice", options: ["f is identically 0", "f is constant but maybe not 0", "Nothing, since the series may diverge", "f is a trigonometric polynomial of high degree"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the Fejér kernel has average 1 over a period.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the Fejér kernel as the average of the first N + 1 Dirichlet kernels.",
          "Notes that each Dₖ is a sum of exponentials whose average is 1, from the n = 0 term alone.",
          "Concludes that the average of N + 1 functions of average 1 has average 1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that if a sequence sₙ converges to s, then its running averages also converge to s.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Splits the average into the first M terms and the rest, with |sₖ − s| < ε for k ≥ M.",
          "Shows the first part tends to 0 as N grows and the rest is at most ε.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Pointwise convergence is delicate. Convergence in the mean square is not: in the Hilbert space of square-integrable
        functions, Fourier series behave exactly like coordinates in an orthonormal basis.
      </p>
      <p>Next, L² theory.</p>
    </>
  ),
};
