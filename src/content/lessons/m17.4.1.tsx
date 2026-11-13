import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { FourierSquareViz } from "@/components/viz/FourierSquareViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.4.1",
  minutes: 90,
  links: {
    revisits: ["m8.3.2", "m17.3.1", "m17.2.1"],
    foreshadows: ["m17.4.2", "m17.4.3", "m17.6.1"],
  },

  puzzle: (
    <>
      <p>
        In 1807 Fourier claimed that any function on an interval, even one with corners and jumps, is a sum of sines and
        cosines. Lagrange objected: every sine is smooth, so how could a sum of them jump? Who was right?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Add terms one by one and watch the partial sums approach each function. Look closely near the jumps.</p>
      <FourierSquareViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Fourier series">
        <p>For an integrable function f on [−π, π], its Fourier coefficients are</p>
        <MD>{"a_n = \\frac1\\pi \\int_{-\\pi}^{\\pi} f(x)\\cos nx\\,dx, \\qquad b_n = \\frac1\\pi \\int_{-\\pi}^{\\pi} f(x)\\sin nx\\,dx,"}</MD>
        <p>and its Fourier series is</p>
        <MD>{"\\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\big(a_n \\cos nx + b_n \\sin nx\\big)."}</MD>
        <p>
          If f is odd, every <M>{"a_n"}</M> vanishes and only sines remain; if f is even, only cosines remain.
        </p>
      </Definition>

      <Theorem title="orthogonality">
        <p>For whole numbers m, n ≥ 1,</p>
        <MD>{"\\int_{-\\pi}^{\\pi} \\sin mx \\sin nx\\,dx = \\int_{-\\pi}^{\\pi} \\cos mx \\cos nx\\,dx = \\pi\\,\\delta_{mn}, \\qquad \\int_{-\\pi}^{\\pi} \\sin mx \\cos nx\\,dx = 0."}</MD>
        <p>
          So the functions <M>{"\\cos nx/\\sqrt\\pi"}</M> and <M>{"\\sin nx/\\sqrt\\pi"}</M> form an orthonormal family in{" "}
          <M>{"L^2[-\\pi,\\pi]"}</M>, and the coefficient formulas are exactly the projections onto them. If f equals its
          series, multiplying by sin nx and integrating picks out <M>{"\\pi b_n"}</M>, since all other terms integrate to 0.
        </p>
      </Theorem>

      <Example title="the square wave">
        <p>
          Let f = −1 on (−π, 0) and 1 on (0, π). It is odd, and <M>{"b_n = \\tfrac{2}{\\pi}\\int_0^\\pi \\sin nx\\,dx"}</M>, which
          is <M>{"4/(n\\pi)"}</M> for odd n and 0 for even n. So
        </p>
        <MD>{"f(x) = \\frac{4}{\\pi}\\Big(\\sin x + \\frac{\\sin 3x}{3} + \\frac{\\sin 5x}{5} + \\cdots\\Big)."}</MD>
        <p>
          Putting x = π/2 gives Leibniz&rsquo;s series <M>{"1 - \\tfrac13 + \\tfrac15 - \\cdots = \\tfrac{\\pi}{4}"}</M>. At the
          jump x = 0 every term vanishes, and the series converges to 0, the average of the two one-sided limits.
        </p>
      </Example>

      <Remark title="the Gibbs phenomenon">
        <p>
          Fourier was right: an infinite sum of smooth functions can jump, because the convergence is not uniform. Near a jump
          the partial sums overshoot by about 9% of the jump, and the overshoot narrows but never shrinks. Wilbraham noticed
          this in 1848; Gibbs explained it in 1899. When the coefficients decay like <M>{"1/n^2"}</M>, as for the triangle
          wave, the series converges uniformly and there is no overshoot.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "coef",
      rung: "check",
      prompt: <p>Which formula gives the sine coefficient bₙ of f on [−π, π]?</p>,
      answer: {
        kind: "choice",
        options: ["(1/π) ∫ f(x) sin nx dx over [−π, π]", "∫ f(x) sin nx dx over [0, 1]", "f(n) sin n", "(1/2π) ∫ f(x) cos nx dx over [−π, π]"],
        correct: [0],
      },
    },
    {
      key: "odd",
      rung: "check",
      prompt: <p>If f is an odd function, which terms appear in its Fourier series?</p>,
      answer: { kind: "choice", options: ["Only sines", "Only cosines", "Only the constant term", "Both sines and cosines"], correct: [0] },
    },
    {
      key: "b3",
      rung: "apply",
      prompt: <p>For the square wave, bₙ = 4/(nπ) for odd n. Give b₃ to two decimal places.</p>,
      answer: { kind: "numeric", value: 0.42, tolerance: 0.01 },
    },
    {
      key: "gibbs",
      rung: "apply",
      prompt: <p>In the visualisation, take the square wave with N = 60. What is the maximum of the partial sum on [0, π]? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 1.18, tolerance: 0.01 },
    },
    {
      key: "leibniz",
      rung: "apply",
      prompt: <p>Putting x = π/2 in the square-wave series gives 1 − 1/3 + 1/5 − 1/7 + ⋯. What is its sum, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.785, tolerance: 0.001 },
    },
    {
      key: "orth",
      rung: "prove",
      prompt: <p>Prove that ∫ sin mx sin nx dx over [−π, π] is 0 when m ≠ n and π when m = n, for whole numbers m, n ≥ 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the identity sin mx sin nx = ½[cos (m − n)x − cos (m + n)x].",
          "Notes that ∫ cos kx dx over [−π, π] is 0 for a non-zero whole number k, and 2π for k = 0.",
          "Concludes the value is 0 when m ≠ n and ½ · 2π = π when m = n.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why do the coefficients of the square wave shrink like 1/n, while those of the triangle wave shrink like 1/n²? What does the rate of decay tell you about a function?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Relates the triangle wave to the integral of the square wave, so its coefficients gain a factor 1/n.",
          "States that smoother functions have faster-decaying coefficients, and a jump forces decay no faster than 1/n.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a Fourier series is, how orthogonality gives the coefficient formulas, the series for the square wave, and the Gibbs phenomenon at a jump.",

  glimpse: (
    <p>
      Next, convergence of Fourier series: when the partial sums converge to f, pointwise, uniformly or in mean square, and
      the surprising examples of continuous functions whose Fourier series diverge.
    </p>
  ),
};
