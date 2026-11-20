import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ChebyshevPsiViz } from "@/components/viz/ChebyshevPsiViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.2.1",
  minutes: 90,
  links: {
    revisits: ["m35.1.3", "m11.1.3", "m11.1.2"],
    foreshadows: ["m35.2.2", "m35.2.3", "m35.5.1"],
  },

  puzzle: (
    <>
      <p>
        Gauss guessed from tables that there are about x/log x primes up to x. Fifty years later nobody could prove even
        that the count lies between two constant multiples of x/log x. Chebyshev did it in 1852 with nothing more than a
        binomial coefficient. How can a single number like the middle entry of a row of Pascal&rsquo;s triangle know so
        much about primes?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function and a value of x, and see how close each ratio stays to 1.</p>
      <ChebyshevPsiViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Chebyshev’s functions">
        <p>
          Let <M>{"\\theta(x) = \\sum_{p \\le x} \\log p"}</M> and <M>{"\\psi(x) = \\sum_{n \\le x} \\Lambda(n)"}</M>, where
          the von Mangoldt function <M>{"\\Lambda(n)"}</M> is log p when n is a power of a prime p and 0 otherwise. These
          weight each prime by its logarithm, which is exactly the weight that appears in{" "}
          <M>{"-\\zeta'(s)/\\zeta(s) = \\sum \\Lambda(n) n^{-s}"}</M>.
        </p>
      </Definition>

      <Theorem title="Chebyshev (1852)">
        <p>
          There are constants <M>{"0 < c < C"}</M> with <M>{"c\\,x \\le \\theta(x) \\le \\psi(x) \\le C\\,x"}</M> for all
          large x. Consequently <M>{"\\pi(x)"}</M> lies between constant multiples of <M>{"x/\\log x"}</M>.
        </p>
      </Theorem>

      <Remark title="the upper bound">
        <p>
          Every prime p with n &lt; p ≤ 2n divides <M>{"\\binom{2n}{n} = (2n)!/(n!)^2"}</M>, since it divides the numerator
          but not the denominator. The binomial coefficient is at most <M>{"4^n"}</M>, so{" "}
          <M>{"\\theta(2n) - \\theta(n) \\le n \\log 4"}</M>. Adding these over n, n/2, n/4, … gives{" "}
          <M>{"\\theta(x) \\le x \\log 4"}</M>.
        </p>
      </Remark>

      <Remark title="the lower bound">
        <p>
          By Legendre&rsquo;s formula the exponent of p in <M>{"\\binom{2n}{n}"}</M> is{" "}
          <M>{"\\sum_k (\\lfloor 2n/p^k \\rfloor - 2\\lfloor n/p^k \\rfloor)"}</M>, and each term is 0 or 1, so the prime
          power dividing it is at most 2n. Hence <M>{"\\binom{2n}{n} \\le (2n)^{\\pi(2n)}"}</M>. Since the middle entry is
          the largest of 2n + 1 entries summing to <M>{"4^n"}</M>, it is at least <M>{"4^n/(2n+1)"}</M>. Taking logarithms,{" "}
          <M>{"\\pi(2n) \\ge (n \\log 4 - \\log(2n+1))/\\log 2n"}</M>.
        </p>
      </Remark>

      <Theorem title="the three ratios move together">
        <p>
          As x → ∞, the ratios <M>{"\\psi(x)/x"}</M>, <M>{"\\theta(x)/x"}</M> and <M>{"\\pi(x)\\log x / x"}</M> have the
          same lim inf and the same lim sup. In particular, if any of them tends to a limit, all do, and Chebyshev showed
          that this limit can only be 1.
        </p>
      </Theorem>

      <Example title="Bertrand’s postulate">
        <p>
          Sharpening the same estimates, Chebyshev proved that for every n ≥ 1 there is a prime between n and 2n. His
          constants were about 0.92 and 1.11, close enough to 1 that the prime number theorem seemed within reach, but it
          took another 44 years and complex analysis to get there.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "binom",
      rung: "check",
      prompt: <p>Which number does Chebyshev&rsquo;s argument study?</p>,
      answer: { kind: "choice", options: ["The central binomial coefficient (2n)!/(n!)²", "The harmonic number 1 + 1/2 + ⋯ + 1/n", "The factorial n! alone", "The Fibonacci number with index n"], correct: [0] },
    },
    {
      key: "lambda",
      rung: "check",
      prompt: <p>What is the value of the von Mangoldt function at 8?</p>,
      answer: { kind: "choice", options: ["log 2", "log 8", "0", "3"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose π(x) log x / x and set x = 1,00,000. What value do you read, to two decimal places?</p>,
      answer: { kind: "numeric", value: 1.1, tolerance: 0.01 },
    },
    {
      key: "theta",
      rung: "apply",
      prompt: <p>Compute θ(10) = log 2 + log 3 + log 5 + log 7, to two decimal places.</p>,
      answer: { kind: "numeric", value: 5.35, tolerance: 0.01 },
    },
    {
      key: "psi",
      rung: "apply",
      prompt: <p>Compute ψ(10), which also counts the prime powers 4, 8 and 9, to two decimal places.</p>,
      answer: { kind: "numeric", value: 7.83, tolerance: 0.01 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that θ(2n) − θ(n) ≤ n log 4.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that each prime p with n < p ≤ 2n divides (2n)! but not (n!)², so divides the binomial coefficient.",
          "Deduces that the product of these primes is at most the binomial coefficient, which is at most 4ⁿ.",
          "Takes logarithms to get θ(2n) − θ(n) ≤ n log 4.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why ψ(x) − θ(x) is at most about √x log x.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the difference counts prime powers pᵏ ≤ x with k ≥ 2, which need p ≤ √x.",
          "Bounds the contribution of each such p by log x, since there are at most log x / log p powers, each adding log p.",
          "Concludes the difference is at most π(√x) log x ≤ √x log x. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Chebyshev trapped the ratio between two constants but could not make it converge. The missing ingredient was a fact
        about ζ on the line where its Euler product stops converging.
      </p>
      <p>Next, the prime number theorem proved.</p>
    </>
  ),
};
