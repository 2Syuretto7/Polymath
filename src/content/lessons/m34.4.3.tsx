import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { HilbertTransformViz } from "@/components/viz/HilbertTransformViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.4.3",
  minutes: 90,
  links: {
    revisits: ["m34.4.2", "m34.1.3", "m23.2.3"],
    foreshadows: ["m34.5.1", "m34.5.2", "m23.6.3"],
  },

  puzzle: (
    <>
      <p>
        On the circle, cos nθ is the real part of the analytic function zⁿ, whose imaginary part is sin nθ. Turning cosines
        into sines is easy one frequency at a time. Is the operation that does it to a whole Fourier series bounded, and on
        which spaces?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function and a point, and read off the function and its Hilbert transform.</p>
      <HilbertTransformViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Hilbert transform">
        <p>
          <M>{"Hf(x) = \\frac{1}{\\pi}\\, \\mathrm{p.v.}\\int_{-\\infty}^{\\infty} \\frac{f(y)}{x - y}\\, dy = \\lim_{\\varepsilon \\to 0} \\frac1\\pi \\int_{|x - y| > \\varepsilon} \\frac{f(y)}{x - y}\\, dy"}</M>.
          On the Fourier side it multiplies by <M>{"-i\\,\\mathrm{sgn}(\\xi)"}</M>.
        </p>
      </Definition>

      <Theorem title="on L²">
        <p>
          Since the multiplier has modulus 1, H is an isometry of <M>{"L^2"}</M> by Plancherel, and{" "}
          <M>{"H^2 = -I"}</M>. If F is analytic in the upper half-plane with suitable decay and boundary values u + iv, then
          v = Hu.
        </p>
      </Theorem>

      <Theorem title="M. Riesz (1927) and Kolmogorov (1925)">
        <p>
          H is bounded on <M>{"L^p"}</M> for every 1 &lt; p &lt; ∞. It is of weak type (1, 1) but not bounded on{" "}
          <M>{"L^1"}</M>, and it is not bounded on <M>{"L^\\infty"}</M>. The kernel 1/(πx) satisfies the
          Calderón–Zygmund conditions, which gives a second proof.
        </p>
      </Theorem>

      <Example title="a box">
        <p>
          For f the indicator of [−1, 1], <M>{"Hf(x) = \\frac1\\pi \\log\\left|\\frac{x + 1}{x - 1}\\right|"}</M>, which is
          unbounded near ±1: a bounded function with an unbounded transform. And{" "}
          <M>{"H\\big(1/(1 + x^2)\\big) = x/(1 + x^2)"}</M>, the imaginary part of i/(z + i) on the real line.
        </p>
      </Example>

      <Remark title="Fourier series converge in Lᵖ">
        <p>
          The partial sum <M>{"S_N f"}</M> is a combination of the conjugate function applied to f multiplied by{" "}
          <M>{"e^{\\pm iN\\theta}"}</M>. So the boundedness of the conjugate function on <M>{"L^p(\\mathbb{T})"}</M> gives a
          bound on <M>{"S_N"}</M> independent of N, and hence <M>{"S_N f \\to f"}</M> in <M>{"L^p"}</M> for 1 &lt; p &lt; ∞.
          This fails for p = 1, as the unbounded Lebesgue constants showed.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mult",
      rung: "check",
      prompt: <p>Which Fourier multiplier defines the Hilbert transform?</p>,
      answer: { kind: "choice", options: ["−i sgn ξ", "|ξ|", "1/ξ", "exp(−|ξ|)"], correct: [0] },
    },
    {
      key: "sq",
      rung: "check",
      prompt: <p>What is H applied twice?</p>,
      answer: { kind: "choice", options: ["−I", "I", "0", "The Fourier transform"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the box and x = 3. What is Hf(3), to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.221, tolerance: 0.002 },
    },
    {
      key: "cos",
      rung: "apply",
      prompt: <p>The Hilbert transform of cos x is sin x. What is its value at x = π/2?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "p",
      rung: "apply",
      prompt: <p>For which p is H bounded on Lᵖ(ℝ)?</p>,
      answer: { kind: "choice", options: ["1 < p < ∞", "Only p = 2", "1 ≤ p ≤ ∞", "p ≥ 2 only"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that H is an isometry of L²(ℝ).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that the Fourier transform of Hf is −i sgn(ξ) times that of f.",
          "Notes that |−i sgn ξ| = 1 for ξ ≠ 0, a set of full measure.",
          "Applies Plancherel to conclude ‖Hf‖₂ = ‖f‖₂.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the box to show that H is not bounded on L∞.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the indicator of [−1, 1] has L∞ norm 1.",
          "Observes that its transform, (1/π) log |(x + 1)/(x − 1)|, tends to infinity as x → 1.",
          "Concludes no bound ‖Hf‖∞ ≤ C‖f‖∞ can hold. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Fourier analysis on the line and the circle rests on the characters of a group. On a finite abelian group there
        are only finitely many, and everything becomes linear algebra, with striking consequences for the primes.
      </p>
      <p>Next, finite abelian groups.</p>
    </>
  ),
};
