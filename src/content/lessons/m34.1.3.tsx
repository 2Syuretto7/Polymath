import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ParsevalSeriesViz } from "@/components/viz/ParsevalSeriesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.1.3",
  minutes: 90,
  links: {
    revisits: ["m34.1.2", "m23.2.3", "m22.5.2"],
    foreshadows: ["m34.2.2", "m34.5.1", "m33.3.1"],
  },

  puzzle: (
    <>
      <p>
        Euler found in 1734 that 1 + 1/4 + 1/9 + 1/16 + ⋯ = π²/6, by a daring argument that treated sin x as a polynomial
        with infinitely many roots. Fourier analysis gives the same value in two lines, by measuring the length of the
        function x in two ways. How?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function and vary N, and watch the energy of its Fourier coefficients approach the energy of the function.</p>
      <ParsevalSeriesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Hilbert space L²(𝕋)">
        <p>
          With <M>{"\\langle f, g\\rangle = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} f \\bar g"}</M>, the space{" "}
          <M>{"L^2(\\mathbb T)"}</M> is a Hilbert space, and the functions <M>{"e_n(x) = e^{inx}"}</M> are orthonormal.
          The Fourier coefficient <M>{"\\hat f(n) = \\langle f, e_n \\rangle"}</M> is the coordinate of f along{" "}
          <M>{"e_n"}</M>, and <M>{"S_N f"}</M> is the orthogonal projection of f onto the span of{" "}
          <M>{"e_{-N}, \\dots, e_N"}</M>.
        </p>
      </Definition>

      <Theorem title="completeness and Parseval">
        <p>
          The <M>{"e_n"}</M> form an orthonormal basis. Hence for every f in <M>{"L^2(\\mathbb T)"}</M>,{" "}
          <M>{"\\|S_N f - f\\|_2 \\to 0"}</M> and{" "}
          <M>{"\\frac{1}{2\\pi}\\int |f|^2 = \\sum_{n \\in \\mathbb Z} |\\hat f(n)|^2"}</M>.
        </p>
      </Theorem>

      <Remark title="why the basis is complete">
        <p>
          Fejér&rsquo;s theorem makes trigonometric polynomials uniformly dense in C(𝕋), and continuous functions are dense
          in <M>{"L^2"}</M>. So nothing is orthogonal to every <M>{"e_n"}</M> except 0.
        </p>
      </Remark>

      <Theorem title="Riesz–Fischer">
        <p>
          For every sequence <M>{"(c_n)"}</M> with <M>{"\\sum |c_n|^2 < \\infty"}</M> there is a unique f in{" "}
          <M>{"L^2(\\mathbb T)"}</M> with <M>{"\\hat f(n) = c_n"}</M>. So <M>{"f \\mapsto \\hat f"}</M> is a unitary
          isomorphism of <M>{"L^2(\\mathbb T)"}</M> onto <M>{"\\ell^2(\\mathbb Z)"}</M>.
        </p>
      </Theorem>

      <Example title="the Basel problem">
        <p>
          For f(x) = x on (−π, π), <M>{"\\hat f(0) = 0"}</M> and <M>{"|\\hat f(n)| = 1/|n|"}</M>. The left side of
          Parseval is <M>{"\\frac{1}{2\\pi}\\int x^2 = \\pi^2/3"}</M>, the right side <M>{"2\\sum_{n \\ge 1} 1/n^2"}</M>.
          So <M>{"\\sum 1/n^2 = \\pi^2/6"}</M>. Smoothness shows in the coefficients: if f is continuously differentiable,{" "}
          <M>{"\\widehat{f'}(n) = in\\hat f(n)"}</M>, so the coefficients of smoother functions decay faster.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "mean",
      rung: "check",
      prompt: <p>In what sense does the Fourier series of every square-integrable function converge to it?</p>,
      answer: { kind: "choice", options: ["In the L² norm, the mean square", "Uniformly", "At every point", "It need not converge in any sense"], correct: [0] },
    },
    {
      key: "rf",
      rung: "check",
      prompt: <p>What does the Riesz–Fischer theorem say?</p>,
      answer: { kind: "choice", options: ["Every square-summable sequence is the sequence of Fourier coefficients of some L² function", "Every bounded sequence is a sequence of Fourier coefficients", "Fourier coefficients tend to 0", "Fourier series converge almost everywhere"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose f(x) = x². What exact value does Parseval give for the sum of 1/n⁴, to four decimal places?</p>,
      answer: { kind: "numeric", value: 1.0823, tolerance: 0.0002 },
    },
    {
      key: "frac",
      rung: "apply",
      prompt: <p>The square wave has ‖f‖² = 1 and |f̂(±1)| = 2/π. What fraction of its energy lies in the terms n = ±1, to two decimal places?</p>,
      answer: { kind: "numeric", value: 0.81, tolerance: 0.01 },
    },
    {
      key: "deriv",
      rung: "apply",
      prompt: <p>If f is continuously differentiable and periodic, what is the n-th Fourier coefficient of f′?</p>,
      answer: { kind: "choice", options: ["in f̂(n)", "f̂(n)/(in)", "n² f̂(n)", "f̂(n + 1)"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Wirtinger&rsquo;s inequality: if f is periodic and continuously differentiable with average 0, then the average of |f|² is at most the average of |f′|².</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies Parseval to f and to f′, using f̂(0) = 0 and the coefficients in f̂(n) of f′.",
          "Compares the sums term by term: |f̂(n)|² ≤ n²|f̂(n)|² for n ≠ 0.",
          "Concludes the inequality.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use Parseval for f(x) = |x| to find the sum of 1/n⁴ over odd n.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds f̂(0) = π/2 and |f̂(n)| = 2/(πn²) for odd n, 0 for even n ≠ 0.",
          "Equates π²/3 with π²/4 + 2 × 4/π² × (sum over odd n of 1/n⁴), giving π⁴/96.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        On the circle, frequencies are whole numbers and Fourier series are sums. On the whole line every frequency occurs,
        and the series becomes an integral. The cleanest place to begin is a space of functions that decay faster than any
        power.
      </p>
      <p>Next, Schwartz space.</p>
    </>
  ),
};
