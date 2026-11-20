import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { EulerProductViz } from "@/components/viz/EulerProductViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.1.3",
  minutes: 90,
  links: {
    revisits: ["m35.1.2", "m11.1.1", "m13.7.2"],
    foreshadows: ["m35.2.1", "m35.2.2", "m35.3.2"],
  },

  puzzle: (
    <>
      <p>
        Euclid proved there are infinitely many primes by building a new one. Euler found a proof of a different kind: if
        there were finitely many primes, a certain finite product would equal the harmonic series, which diverges. What
        is this product, and how much more does it reveal?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose s and a bound P, and compare the product over primes up to P with ζ(s).</p>
      <EulerProductViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Euler product (1737)">
        <p>
          For s &gt; 1, <M>{"\\zeta(s) = \\prod_p (1 - p^{-s})^{-1}"}</M>. Expanding each factor as{" "}
          <M>{"1 + p^{-s} + p^{-2s} + \\cdots"}</M> and multiplying the factors for p ≤ P gives the sum of{" "}
          <M>{"n^{-s}"}</M> over all n whose prime factors are at most P, each once, by unique factorisation. Letting P → ∞
          gives ζ(s).
        </p>
      </Theorem>

      <Definition title="multiplicative functions">
        <p>
          More generally, if a is multiplicative and the series converges absolutely, then{" "}
          <M>{"\\sum a(n) n^{-s} = \\prod_p \\big(1 + a(p)p^{-s} + a(p^2)p^{-2s} + \\cdots\\big)"}</M>. For completely
          multiplicative a, each factor is <M>{"(1 - a(p)p^{-s})^{-1}"}</M>.
        </p>
      </Definition>

      <Theorem title="Euler: the sum of 1/p diverges">
        <p>
          Taking logarithms, <M>{"\\log \\zeta(s) = \\sum_p p^{-s} + O(1)"}</M> as s → 1⁺. Since ζ(s) → ∞, so does the sum
          of <M>{"p^{-s}"}</M>, and hence <M>{"\\sum_p 1/p"}</M> diverges: the primes are not only infinite but fairly dense.
        </p>
      </Theorem>

      <Example title="Mertens’ theorems (1874)">
        <p>
          <M>{"\\sum_{p \\le x} 1/p = \\log\\log x + B + o(1)"}</M>, with B ≈ 0.2615, and{" "}
          <M>{"\\prod_{p \\le x}(1 - 1/p)^{-1} \\sim e^\\gamma \\log x"}</M>. The second is visible in the visualisation at
          s = 1.
        </p>
      </Example>

      <Remark title="why the product matters">
        <p>
          Because the product has no zero factors, ζ(s) ≠ 0 for Re s &gt; 1. Everything about primes that analytic number
          theory proves flows from pushing this non-vanishing to the line Re s = 1 and beyond.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "why",
      rung: "check",
      prompt: <p>Which fact makes the Euler product equal to ζ(s)?</p>,
      answer: { kind: "choice", options: ["Unique factorisation into primes", "The infinitude of primes", "Quadratic reciprocity", "The prime number theorem"], correct: [0] },
    },
    {
      key: "nz",
      rung: "check",
      prompt: <p>What does the Euler product show about ζ(s) for Re s &gt; 1?</p>,
      answer: { kind: "choice", options: ["It has no zeros there", "It is bounded there", "It is real there", "It has a pole there"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set s = 1 and P = 100. What is the product over primes up to 100, to two decimal places?</p>,
      answer: { kind: "numeric", value: 8.31, tolerance: 0.02 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>What is the Euler factor (1 − 2⁻²)⁻¹ at p = 2 and s = 2, to three decimal places?</p>,
      answer: { kind: "numeric", value: 1.333, tolerance: 0.002 },
    },
    {
      key: "rec",
      rung: "apply",
      prompt: <p>Using ζ(2) = π²/6, what is the product of (1 − 1/p²) over all primes, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.608, tolerance: 0.002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use the Euler product to show that there are infinitely many primes.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes finitely many primes, so the product of (1 − 1/p)⁻¹ is a finite number.",
          "Notes that the product over p ≤ P is at least the sum of 1/n for n ≤ P, by expanding the factors.",
          "Concludes the product is at least the harmonic series, which diverges, a contradiction.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that log ζ(s) and the sum of p⁻ˢ differ by a bounded amount as s → 1⁺.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes log ζ(s) as the sum over primes of −log(1 − p⁻ˢ), which is the sum over p and k ≥ 1 of p⁻ᵏˢ/k.",
          "Bounds the terms with k ≥ 2 by the sum over p of p⁻²/(1 − p⁻¹), which converges.",
          "Concludes the difference is bounded. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Euler showed the primes are infinite and fairly dense. How many are there up to x? Chebyshev found the right order
        of magnitude, half a century before anyone could prove the exact answer.
      </p>
      <p>Next, Chebyshev&rsquo;s estimates.</p>
    </>
  ),
};
