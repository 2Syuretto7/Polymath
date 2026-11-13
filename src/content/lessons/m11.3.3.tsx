import { M, MD } from "@/components/Math";
import { Definition, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PerfectNumberViz } from "@/components/viz/PerfectNumberViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.3.3",
  minutes: 80,
  links: {
    revisits: ["m11.3.1", "m11.1.1", "m11.1.2"],
    foreshadows: ["m11.4.1", "m11.4.4", "m11.6.3"],
  },

  puzzle: (
    <>
      <p>
        The divisors of 6 other than itself are 1, 2 and 3, and they add up to 6. The same happens for 28 = 1 + 2 + 4 + 7 + 14.
        The Greeks called such numbers perfect. Euclid found a recipe for them. Does his recipe give all of them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Plot σ(n)/n and look for numbers that land exactly on 2. Then switch to the table of Mersenne numbers.</p>
      <PerfectNumberViz />
    </>
  ),

  theory: (
    <>
      <Definition title="perfect numbers">
        <p>
          <M>{"n"}</M> is <strong>perfect</strong> if <M>{"\\sigma(n) = 2n"}</M>, that is, its proper divisors sum to{" "}
          <M>{"n"}</M>. It is <strong>abundant</strong> if <M>{"\\sigma(n) > 2n"}</M> and <strong>deficient</strong> if{" "}
          <M>{"\\sigma(n) < 2n"}</M>. A <strong>Mersenne prime</strong> is a prime of the form <M>{"2^p - 1"}</M>.
        </p>
      </Definition>

      <Theorem title="Euclid and Euler">
        <p>
          An even number <M>{"n"}</M> is perfect if and only if <M>{"n = 2^{p-1}(2^p - 1)"}</M> with <M>{"2^p - 1"}</M>{" "}
          prime.
        </p>
      </Theorem>

      <Proof>
        <p>
          <em>Euclid.</em> If <M>{"q = 2^p - 1"}</M> is prime, then, as <M>{"\\sigma"}</M> is multiplicative,{" "}
          <M>{"\\sigma(2^{p-1}q) = (2^p - 1)(q + 1) = (2^p - 1)2^p = 2n"}</M>.
        </p>
        <p>
          <em>Euler.</em> Let <M>{"n = 2^{k}m"}</M> be perfect with <M>{"k \\ge 1"}</M> and <M>{"m"}</M> odd. Then
        </p>
        <MD>{"2^{k+1} m = \\sigma(n) = (2^{k+1} - 1)\\,\\sigma(m)."}</MD>
        <p>
          Since <M>{"2^{k+1} - 1"}</M> is odd, it divides <M>{"m"}</M>: write <M>{"m = (2^{k+1} - 1)c"}</M>, so{" "}
          <M>{"\\sigma(m) = 2^{k+1}c = m + c"}</M>. But <M>{"m"}</M> and <M>{"c"}</M> are distinct divisors of <M>{"m"}</M>{" "}
          when <M>{"c < m"}</M>, so <M>{"\\sigma(m) \\ge m + c"}</M> with equality only if they are the only divisors. Hence{" "}
          <M>{"c = 1"}</M> and <M>{"m = 2^{k+1} - 1"}</M> is prime. Put <M>{"p = k + 1"}</M>.
        </p>
      </Proof>

      <Remark title="which exponents?">
        <p>
          If <M>{"p = ab"}</M> with <M>{"a, b > 1"}</M>, then <M>{"2^a - 1"}</M> divides <M>{"2^p - 1"}</M>, since{" "}
          <M>{"x - 1"}</M> divides <M>{"x^b - 1"}</M> with <M>{"x = 2^a"}</M>. So <M>{"p"}</M> must be prime. That is not
          enough: <M>{"2^{11} - 1 = 2047 = 23 \\cdot 89"}</M>. The Lucas–Lehmer test checks Mersenne numbers quickly, which is
          why the largest known primes are Mersenne primes, with tens of millions of digits.
        </p>
      </Remark>

      <Remark title="odd perfect numbers">
        <p>
          No odd perfect number is known, and none has been ruled out. One would have to exceed <M>{"10^{1500}"}</M> and have
          at least ten distinct prime factors. Whether there are infinitely many Mersenne primes, and so infinitely many
          perfect numbers, is also open.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is <M>{"n"}</M> perfect?</p>,
      answer: { kind: "choice", options: ["σ(n) = n", "σ(n) = 2n", "τ(n) = 2", "φ(n) = n − 1"], correct: [1] },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these numbers is perfect?</p>,
      answer: { kind: "choice", options: ["120", "496", "512", "1024"], correct: [1] },
    },
    {
      key: "fourth",
      rung: "apply",
      prompt: <p>Use Euclid&rsquo;s recipe with <M>{"p = 7"}</M> to find the fourth perfect number.</p>,
      answer: { kind: "numeric", value: 8128, tolerance: 0 },
    },
    {
      key: "amicable",
      rung: "apply",
      prompt: <p>Compute <M>{"\\sigma(220)"}</M>. (220 and 284 are an amicable pair: each is the sum of the other&rsquo;s proper divisors.)</p>,
      answer: { kind: "numeric", value: 504, tolerance: 0 },
    },
    {
      key: "factor",
      rung: "apply",
      prompt: <p>Which prime divides both <M>{"2^{15} - 1"}</M> and <M>{"2^3 - 1"}</M>?</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"2^p - 1"}</M> is prime, then <M>{"2^{p-1}(2^p - 1)"}</M> is perfect.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses multiplicativity of σ, as 2^(p−1) and 2^p − 1 are coprime.",
          "Computes σ(2^(p−1)) = 2^p − 1 and σ(2^p − 1) = 2^p, using that 2^p − 1 is prime.",
          "Multiplies to get 2^p(2^p − 1) = 2n.",
        ],
      },
    },
    {
      key: "prime",
      rung: "stretch",
      prompt: <p>Why must <M>{"p"}</M> be prime for <M>{"2^p - 1"}</M> to be prime? Is the converse true?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows that if p = ab with a, b > 1, then 2^a − 1 is a proper factor of 2^p − 1.",
          "Gives a counterexample to the converse, such as 2^11 − 1 = 23 · 89.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what perfect numbers are, Euclid’s recipe from Mersenne primes and why it works, Euler’s proof that every even perfect number has this form, why the exponent must be prime, and what is still unknown about odd perfect numbers.",

  glimpse: (
    <p>
      The next chapter studies the order of a number modulo n, the tool behind primitive roots. Mersenne numbers return as a test
      case for primality, and RSA needs large primes.
    </p>
  ),
};
