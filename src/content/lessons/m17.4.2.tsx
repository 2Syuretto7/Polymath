import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { FourierConvergeViz } from "@/components/viz/FourierConvergeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.4.2",
  minutes: 90,
  links: {
    revisits: ["m17.4.1", "m6.8.1", "m12.3.2"],
    foreshadows: ["m17.4.3", "m17.6.1", "m23.2.3"],
  },

  puzzle: (
    <>
      <p>
        Every continuous function on a circle has a Fourier series. Surely, then, the series of a continuous function
        converges back to it? In 1873 Paul du Bois-Reymond built a continuous function whose Fourier series diverges at a
        point. So in what sense, if any, does a Fourier series represent its function?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare partial sums with Fejér means for a jump, a corner and a smooth function. Watch both kinds of error.</p>
      <FourierConvergeViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Dirichlet’s theorem (pointwise convergence)">
        <p>
          If f is 2π-periodic and piecewise smooth, its Fourier series converges at every x to{" "}
          <M>{"\\tfrac12\\big(f(x^-) + f(x^+)\\big)"}</M>, the average of the one-sided limits. At points of continuity this
          is f(x). If f is also continuous, the convergence is uniform.
        </p>
      </Theorem>

      <Theorem title="mean-square convergence and Parseval">
        <p>For every square-integrable f, the partial sums <M>{"S_N f"}</M> satisfy</p>
        <MD>{"\\frac1\\pi\\int_{-\\pi}^{\\pi} |f - S_N f|^2\\,dx \\to 0, \\qquad \\frac1\\pi\\int_{-\\pi}^{\\pi} |f|^2\\,dx = \\frac{a_0^2}{2} + \\sum_{n\\ge1} (a_n^2 + b_n^2)."}</MD>
        <p>
          This is the statement that the trigonometric functions form a complete orthonormal basis of{" "}
          <M>{"L^2"}</M>. It holds even where pointwise convergence fails.
        </p>
      </Theorem>

      <Definition title="Fejér means">
        <p>
          The Cesàro averages <M>{"\\sigma_N = (S_0 + S_1 + \\cdots + S_N)/(N+1)"}</M> equal the convolution of f with the
          Fejér kernel, which is non-negative and has integral 1. Fejér proved in 1900 that for every continuous periodic f,
          the means <M>{"\\sigma_N f"}</M> converge to f uniformly. Averaging repairs what the partial sums cannot.
        </p>
      </Definition>

      <Example title="the square wave and Parseval">
        <p>
          For the square wave, <M>{"\\tfrac1\\pi\\int |f|^2 = 2"}</M> and <M>{"b_n^2 = 16/(n^2\\pi^2)"}</M> for odd n, so
          Parseval gives <M>{"\\sum_{n\\text{ odd}} 1/n^2 = \\pi^2/8"}</M>. From this one obtains Euler&rsquo;s{" "}
          <M>{"\\sum 1/n^2 = \\pi^2/6"}</M>.
        </p>
      </Example>

      <Remark title="a long story">
        <p>
          Kolmogorov found in 1926 an integrable function whose Fourier series diverges everywhere. Carleson proved in 1966
          that for square-integrable functions, including all continuous ones, the series converges almost everywhere. So
          du Bois-Reymond&rsquo;s divergence can occur only on a set of measure zero.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "jump",
      rung: "check",
      prompt: <p>For a piecewise smooth function, to what does the Fourier series converge at a jump?</p>,
      answer: { kind: "choice", options: ["The average of the left and right limits", "The left limit", "The right limit", "It always diverges there"], correct: [0] },
    },
    {
      key: "fejer",
      rung: "check",
      prompt: <p>What did Fejér prove about the Cesàro means of the Fourier series of a continuous periodic function?</p>,
      answer: { kind: "choice", options: ["They converge to it uniformly", "They diverge at some point", "They equal the partial sums", "They converge only in mean square"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the jump with partial sums and raise N. What happens to the two errors?</p>,
      answer: {
        kind: "choice",
        options: [
          "The root-mean-square error tends to 0, but the largest error stays near 1.",
          "Both errors tend to 0.",
          "Both errors stay near 1.",
          "The largest error tends to 0, but the root-mean-square error does not.",
        ],
        correct: [0],
      },
    },
    {
      key: "parseval",
      rung: "apply",
      prompt: <p>Parseval for the square wave gives the sum of 1/n² over odd n as π²/8. Give this to three decimal places.</p>,
      answer: { kind: "numeric", value: 1.234, tolerance: 0.001 },
    },
    {
      key: "euler",
      rung: "apply",
      prompt: <p>If the sum of 1/n² over odd n is π²/8, what fraction of the full sum of 1/n² is it?</p>,
      answer: { kind: "choice", options: ["3/4", "1/2", "2/3", "7/8"], correct: [0] },
    },
    {
      key: "basel",
      rung: "prove",
      prompt: <p>Deduce Euler&rsquo;s result that the sum of 1/n² over all n ≥ 1 is π²/6, from the sum over odd n being π²/8.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets S be the full sum and notes that the sum over even n is the sum of 1/(2m)², which is S/4.",
          "Writes S = π²/8 + S/4, so 3S/4 = π²/8.",
          "Concludes S = π²/6.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why might averaging the partial sums, as Fejér did, behave better than the partial sums themselves?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the Dirichlet kernel takes negative values and has growing integral of its absolute value, while the Fejér kernel is non-negative.",
          "Explains that convolution with a non-negative kernel of integral 1 is a weighted average, so it cannot overshoot and converges uniformly for continuous f.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the three ways a Fourier series can converge, pointwise, uniformly and in mean square, with Dirichlet's theorem, Parseval's identity and Fejér's theorem.",

  glimpse: (
    <p>
      Next, separation of variables: looking for solutions that are products of a function of x and a function of t or y,
      which turns a partial differential equation into ordinary ones and leads straight to Fourier series.
    </p>
  ),
};
