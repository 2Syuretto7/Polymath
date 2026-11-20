import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DirichletSeriesViz } from "@/components/viz/DirichletSeriesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.1.2",
  minutes: 90,
  links: {
    revisits: ["m35.1.1", "m11.3.2", "m13.1.4"],
    foreshadows: ["m35.1.3", "m35.4.1", "m35.3.2"],
  },

  puzzle: (
    <>
      <p>
        Power series turn a sequence into a function, and multiplying power series adds exponents. Number theory cares
        about multiplying integers, not adding them. Is there a kind of series in which multiplying two series multiplies
        the indices?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose coefficients and a real s, and watch the partial sums settle on their limit or fail to.</p>
      <DirichletSeriesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Dirichlet series">
        <p>
          For an arithmetic function a, its <strong>Dirichlet series</strong> is{" "}
          <M>{"F(s) = \\sum_{n \\ge 1} a(n) n^{-s}"}</M>, with s complex, <M>{"s = \\sigma + it"}</M>. The simplest is the{" "}
          <strong>Riemann zeta function</strong> <M>{"\\zeta(s) = \\sum n^{-s}"}</M>.
        </p>
      </Definition>

      <Theorem title="half-planes of convergence">
        <p>
          If the series converges at <M>{"s_0"}</M>, it converges for every s with <M>{"\\sigma > \\sigma_0 = \\mathrm{Re}\\, s_0"}</M>,
          uniformly on compact sets, so F is holomorphic there. The region of absolute convergence is also a half-plane,
          and the two abscissae differ by at most 1.
        </p>
      </Theorem>

      <Theorem title="multiplication is convolution">
        <p>
          For absolutely convergent series,{" "}
          <M>{"\\Big(\\sum a(n) n^{-s}\\Big)\\Big(\\sum b(n) n^{-s}\\Big) = \\sum (a * b)(n) n^{-s}"}</M>, with{" "}
          <M>{"(a * b)(n) = \\sum_{de = n} a(d) b(e)"}</M>, the Dirichlet convolution.
        </p>
      </Theorem>

      <Example title="a dictionary">
        <p>
          Since d = 1 * 1, the series of d(n) is <M>{"\\zeta(s)^2"}</M>. Möbius inversion says μ * 1 is 1 at n = 1 and 0
          elsewhere, so the series of μ(n) is <M>{"1/\\zeta(s)"}</M>. Since φ = μ * id, the series of φ(n) is{" "}
          <M>{"\\zeta(s - 1)/\\zeta(s)"}</M>. Identities between arithmetic functions become algebra.
        </p>
      </Example>

      <Remark title="from the series back to the sum">
        <p>
          The average of a(n) is governed by the singularities of F. Perron&rsquo;s formula recovers{" "}
          <M>{"\\sum_{n \\le x} a(n)"}</M> as a contour integral of <M>{"F(s) x^s / s"}</M>, and a pole of F at s = 1 produces
          the main term. The double pole of <M>{"\\zeta^2"}</M> at 1 gives the x log x of the divisor problem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "conv",
      rung: "check",
      prompt: <p>What does multiplying two Dirichlet series do to their coefficients?</p>,
      answer: { kind: "choice", options: ["Takes their Dirichlet convolution", "Adds them", "Multiplies them term by term", "Takes their ordinary convolution"], correct: [0] },
    },
    {
      key: "mu",
      rung: "check",
      prompt: <p>Which function has the Möbius function as its Dirichlet coefficients?</p>,
      answer: { kind: "choice", options: ["1/ζ(s)", "ζ(s)²", "ζ(s − 1)", "log ζ(s)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose aₙ = d(n) and s = 2. What is the limit, to three decimal places?</p>,
      answer: { kind: "numeric", value: 2.706, tolerance: 0.002 },
    },
    {
      key: "z2",
      rung: "apply",
      prompt: <p>What is ζ(2) = π²/6, to three decimal places?</p>,
      answer: { kind: "numeric", value: 1.645, tolerance: 0.002 },
    },
    {
      key: "eta",
      rung: "apply",
      prompt: <p>The alternating series 1 − 1/2 + 1/3 − ⋯ is the η series at s = 1. What is its sum, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.693, tolerance: 0.002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that, for s &gt; 1, ζ(s)² is the Dirichlet series of d(n).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Multiplies the absolutely convergent series and groups terms with de = n.",
          "Notes that the coefficient of n⁻ˢ is the number of pairs (d, e) with de = n, which is d(n).",
          "Justifies the rearrangement by absolute convergence for s > 1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that ζ(s) diverges at s = 1 but converges for every real s &gt; 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that at s = 1 it is the harmonic series, which diverges.",
          "Compares with the integral of x⁻ˢ from 1 to ∞, which is finite for s > 1.",
          "Concludes by the integral test. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The zeta function has a second formula, a product over primes. It is the bridge between the integers and the
        primes, and Euler used it to give a new proof that there are infinitely many primes.
      </p>
      <p>Next, Euler products.</p>
    </>
  ),
};
