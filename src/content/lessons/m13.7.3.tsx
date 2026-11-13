import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PrimeCountViz } from "@/components/viz/PrimeCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.7.3",
  minutes: 90,
  links: {
    revisits: ["m13.7.2", "m11.1.3", "m13.4.3"],
    foreshadows: ["m35.2.2", "m35.4.3", "m35.1.2"],
  },

  puzzle: (
    <>
      <p>
        Primes look scattered at random: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, … Yet when Gauss, as a teenager, counted them in
        blocks of a thousand, he noticed that near <M>{"x"}</M> roughly one number in <M>{"\\log x"}</M> is prime. How could
        complex analysis prove such a pattern?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the number of primes up to x with two approximations, for x up to a million.</p>
      <PrimeCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="counting primes">
        <p>
          Let <M>{"\\pi(x)"}</M> be the number of primes up to <M>{"x"}</M>, and{" "}
          <M>{"\\operatorname{Li}(x) = \\int_2^x \\frac{dt}{\\log t}"}</M>. Chebyshev&rsquo;s function{" "}
          <M>{"\\psi(x) = \\sum_{p^k \\le x} \\log p"}</M> weights each prime power by <M>{"\\log p"}</M>; it is easier to
          handle and <M>{"\\pi(x) \\sim x/\\log x"}</M> is equivalent to <M>{"\\psi(x) \\sim x"}</M>.
        </p>
      </Definition>

      <Theorem title="the prime number theorem">
        <MD>{"\\pi(x) \\sim \\frac{x}{\\log x} \\sim \\operatorname{Li}(x) \\quad \\text{as } x \\to \\infty."}</MD>
        <p>Proved independently by Hadamard and de la Vallée Poussin in 1896.</p>
      </Theorem>

      <Proof>
        <p>An outline of the route through Newman&rsquo;s simplified proof.</p>
        <p>
          1. Taking the logarithmic derivative of the Euler product gives, for <M>{"\\operatorname{Re} s > 1"}</M>,
        </p>
        <MD>{"-\\frac{\\zeta'(s)}{\\zeta(s)} = \\sum_{n} \\frac{\\Lambda(n)}{n^s} = s\\int_1^\\infty \\frac{\\psi(x)}{x^{s+1}}\\,dx,"}</MD>
        <p>
          where <M>{"\\Lambda(p^k) = \\log p"}</M>. The pole of <M>{"\\zeta"}</M> at 1 makes the left side behave like{" "}
          <M>{"1/(s - 1)"}</M>, matching <M>{"\\psi(x) \\approx x"}</M>.
        </p>
        <p>
          2. The key analytic fact is that <M>{"\\zeta(s) \\ne 0"}</M> on the line <M>{"\\operatorname{Re} s = 1"}</M>. Then{" "}
          <M>{"-\\zeta'/\\zeta - 1/(s - 1)"}</M> is holomorphic on a neighbourhood of the closed half-plane{" "}
          <M>{"\\operatorname{Re} s \\ge 1"}</M>.
        </p>
        <p>
          3. A Tauberian theorem, proved by Cauchy&rsquo;s integral formula on a cleverly chosen contour, turns this into the
          convergence of <M>{"\\int_1^\\infty (\\psi(x) - x)x^{-2}\\,dx"}</M>, and from that <M>{"\\psi(x) \\sim x"}</M>{" "}
          follows by an elementary argument.
        </p>
      </Proof>

      <Example title="no zeros on the line">
        <p>
          Mertens&rsquo;s trick uses <M>{"3 + 4\\cos\\theta + \\cos 2\\theta = 2(1 + \\cos\\theta)^2 \\ge 0"}</M> to show{" "}
          <M>{"|\\zeta(\\sigma)^3 \\zeta(\\sigma + it)^4 \\zeta(\\sigma + 2it)| \\ge 1"}</M> for <M>{"\\sigma > 1"}</M>. If{" "}
          <M>{"\\zeta(1 + it) = 0"}</M>, then as <M>{"\\sigma \\to 1"}</M> the triple pole would be beaten by a zero of order
          four, making the product tend to 0, a contradiction.
        </p>
      </Example>

      <Remark title="the error term">
        <p>
          The closer the zeros of <M>{"\\zeta"}</M> stay to the line <M>{"\\operatorname{Re} s = 1/2"}</M>, the smaller the
          error. The Riemann hypothesis is equivalent to{" "}
          <M>{"\\pi(x) = \\operatorname{Li}(x) + O(\\sqrt{x}\\log x)"}</M>. Elementary proofs without complex analysis were
          found by Selberg and Erdős in 1949, but the analytic route remains the one that reveals the role of the zeros.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pi100",
      rung: "check",
      prompt: <p>What is <M>{"\\pi(100)"}</M>, the number of primes up to 100?</p>,
      answer: { kind: "numeric", value: 25, tolerance: 0 },
    },
    {
      key: "density",
      rung: "check",
      prompt: <p>By the prime number theorem, roughly what fraction of numbers near <M>{"x"}</M> are prime?</p>,
      answer: { kind: "choice", options: ["1/log x", "1/x", "1/√x", "A fixed fraction"], correct: [0] },
    },
    {
      key: "est",
      rung: "apply",
      prompt: <p>Estimate <M>{"\\pi(10^6)"}</M> by <M>{"x/\\log x"}</M>, to the nearest thousand.</p>,
      answer: { kind: "numeric", value: 72382, tolerance: 600 },
    },
    {
      key: "key",
      rung: "apply",
      prompt: <p>Which fact about <M>{"\\zeta"}</M> is the heart of the analytic proof?</p>,
      answer: {
        kind: "choice",
        options: [
          "ζ has no zeros on the line Re s = 1.",
          "ζ(2) = π²/6.",
          "ζ has trivial zeros.",
          "ζ is bounded.",
        ],
        correct: [0],
      },
    },
    {
      key: "lambda",
      rung: "apply",
      prompt: <p>What is <M>{"\\Lambda(8)"}</M>, the von Mangoldt function at 8, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.6931, tolerance: 0.002 },
    },
    {
      key: "trig",
      rung: "prove",
      prompt: <p>Show that <M>{"3 + 4\\cos\\theta + \\cos 2\\theta \\ge 0"}</M> for all real <M>{"\\theta"}</M>, and say where it is used.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses cos 2θ = 2cos²θ − 1 to rewrite the expression as 2(1 + cos θ)².",
          "Concludes it is non-negative.",
          "Notes it is used to show ζ has no zeros on the line Re s = 1.",
        ],
      },
    },
    {
      key: "ratio",
      rung: "stretch",
      prompt: <p>The visualisation shows <M>{"\\pi(x)/(x/\\log x)"}</M> approaching 1 slowly from above. Using <M>{"\\operatorname{Li}(x) = x/\\log x + x/\\log^2 x + \\cdots"}</M>, explain why.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that π(x) is close to Li(x), which exceeds x/log x by about x/log² x.",
          "Concludes the ratio is about 1 + 1/log x, which tends to 1 only slowly.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the prime number theorem says, how the logarithmic derivative of zeta encodes the primes, why the absence of zeros on Re s = 1 is the key step, and how the Riemann hypothesis would sharpen the error.",

  glimpse: (
    <p>
      This completes the course. Analytic number theory later proves the theorem in full, extends it to primes in arithmetic
      progressions with Dirichlet series, and studies the zeros of zeta and the Riemann hypothesis.
    </p>
  ),
};
