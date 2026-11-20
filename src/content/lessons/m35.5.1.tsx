import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LegendreSieveViz } from "@/components/viz/LegendreSieveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.5.1",
  minutes: 90,
  links: {
    revisits: ["m35.4.3", "m11.3.2", "m11.1.3"],
    foreshadows: ["m35.5.2", "m35.5.3", "m29.1.1"],
  },

  puzzle: (
    <>
      <p>
        The sieve of Eratosthenes finds the primes up to x by crossing out multiples of the primes up to √x. Legendre turned
        it into an exact formula for the number of survivors. So why can&rsquo;t that formula simply be evaluated to prove
        the prime number theorem, or to count twin primes?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose x and how many primes to sieve by, and compare the survivors with the main term of Legendre&rsquo;s formula.</p>
      <LegendreSieveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the sifting function">
        <p>
          Let <M>{"P(z) = \\prod_{p \\le z} p"}</M>. The sifting function S(x, z) counts the integers n ≤ x with{" "}
          <M>{"\\gcd(n, P(z)) = 1"}</M>, that is, with no prime factor up to z. For <M>{"z = \\sqrt x"}</M> the survivors
          are 1 and the primes in <M>{"(\\sqrt x, x]"}</M>.
        </p>
      </Definition>

      <Theorem title="Legendre’s identity">
        <p>
          Since <M>{"\\sum_{d \\mid m}\\mu(d)"}</M> is 1 when m = 1 and 0 otherwise,{" "}
          <M>{"S(x, z) = \\sum_{n \\le x}\\sum_{d \\mid (n, P(z))}\\mu(d) = \\sum_{d \\mid P(z)} \\mu(d) \\left\\lfloor \\frac xd \\right\\rfloor"}</M>.
        </p>
      </Theorem>

      <Remark title="main term and error">
        <p>
          Replacing <M>{"\\lfloor x/d \\rfloor"}</M> by x/d gives the main term{" "}
          <M>{"x\\prod_{p \\le z}(1 - 1/p)"}</M>, with an error at most the number of terms,{" "}
          <M>{"2^{\\pi(z)}"}</M>. By Mertens, <M>{"\\prod_{p \\le z}(1 - 1/p) \\sim e^{-\\gamma}/\\log z"}</M>. With z of size
          log x the error is harmless and gives <M>{"\\pi(x) \\ll x/\\log\\log x"}</M>, but for larger z the error explodes.
        </p>
      </Remark>

      <Example title="the main term can be wrong">
        <p>
          Even ignoring the error, at <M>{"z = \\sqrt x"}</M> the main term is about{" "}
          <M>{"2e^{-\\gamma} x/\\log x \\approx 1.12\\,x/\\log x"}</M>, while the prime number theorem says the truth is{" "}
          <M>{"x/\\log x"}</M>. The rounding errors, each less than 1, conspire to shift the answer by 12 per cent. Sieves
          work only when z is a small power of x.
        </p>
      </Example>

      <Remark title="what sieves are for">
        <p>
          Sieve methods give upper bounds of the right order for many problems, such as twin primes or primes of the form
          n² + 1, where L-functions say nothing. The art, begun by Brun, lies in truncating inclusion–exclusion so that the
          error stays small while the main term stays accurate.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mobius",
      rung: "check",
      prompt: <p>Which property of the Möbius function underlies Legendre&rsquo;s identity?</p>,
      answer: { kind: "choice", options: ["The sum of μ(d) over divisors d of m is 1 if m = 1 and 0 otherwise", "μ(p) = −1 for every prime p", "μ is completely multiplicative", "μ(n) = 0 for every even n"], correct: [0] },
    },
    {
      key: "terms",
      rung: "check",
      prompt: <p>How many terms does Legendre&rsquo;s formula have when sieving by the primes up to z?</p>,
      answer: { kind: "choice", options: ["2 to the power π(z)", "π(z)", "z", "z squared"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set x = 1,000 and sieve by the primes up to 31. How many survivors are there?</p>,
      answer: { kind: "numeric", value: 158, tolerance: 0 },
    },
    {
      key: "hundred",
      rung: "apply",
      prompt: <p>How many integers from 1 to 100 have no prime factor among 2, 3, 5 and 7? (There are 25 primes up to 100.)</p>,
      answer: { kind: "numeric", value: 22, tolerance: 0 },
    },
    {
      key: "mertens",
      rung: "apply",
      prompt: <p>Compute (1 − 1/2)(1 − 1/3)(1 − 1/5)(1 − 1/7), to three decimal places.</p>,
      answer: { kind: "numeric", value: 0.229, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Legendre&rsquo;s identity S(x, z) = Σ over d dividing P(z) of μ(d) ⌊x/d⌋.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the indicator of gcd(n, P(z)) = 1 as the sum of μ(d) over d dividing gcd(n, P(z)).",
          "Sums over n ≤ x and swaps the order of summation, so d runs over divisors of P(z).",
          "Counts the n ≤ x divisible by d as ⌊x/d⌋.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the main term of Legendre&rsquo;s sieve give the wrong answer at z = √x?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the main term using Mertens’s theorem as about 2e to the −γ times x/log x.",
          "Compares it with the prime number theorem and notes the factor of about 1.12.",
          "Attributes the discrepancy to the accumulated rounding errors of exponentially many terms. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Legendre&rsquo;s sieve is exact but useless at the range that matters. Brun found that cutting the inclusion–exclusion
        short, in a carefully chosen way, gives inequalities that still have content.
      </p>
      <p>Next, Brun&rsquo;s sieve.</p>
    </>
  ),
};
