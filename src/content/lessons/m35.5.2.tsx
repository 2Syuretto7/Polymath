import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { TwinPrimeSumViz } from "@/components/viz/TwinPrimeSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.5.2",
  minutes: 90,
  links: {
    revisits: ["m35.5.1", "m35.1.3", "m11.1.2"],
    foreshadows: ["m35.5.3", "m29.1.1", "m29.1.2"],
  },

  puzzle: (
    <>
      <p>
        The sum of 1/p over all primes diverges. Does the sum of 1/p over twin primes, such as 3, 5, 7, 11, 13, 17, 19,
        diverge too? If it did, there would have to be infinitely many twin primes. In 1919 Viggo Brun showed that it
        converges, and so proved nothing about infinitude, but he invented the modern sieve in doing so.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose x, and watch the sum of reciprocals of twin primes creep towards Brun&rsquo;s constant.</p>
      <TwinPrimeSumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Bonferroni truncation">
        <p>
          Let ω(d) be the number of prime factors of d. Truncating Legendre&rsquo;s sum to <M>{"\\omega(d) \\le k"}</M> gives
          an upper bound for S(x, z) when k is even and a lower bound when k is odd, because the partial sums of{" "}
          <M>{"\\sum_{j \\le k} (-1)^j \\binom{m}{j}"}</M> alternate around 0. The number of terms drops from{" "}
          <M>{"2^{\\pi(z)}"}</M> to about <M>{"\\pi(z)^k"}</M>.
        </p>
      </Definition>

      <Theorem title="Brun (1919)">
        <p>
          The number of twin prime pairs (p, p + 2) with p ≤ x is{" "}
          <M>{"O\\big(x (\\log\\log x)^2/(\\log x)^2\\big)"}</M>. Consequently{" "}
          <M>{"\\sum (1/p + 1/(p+2))"}</M> over twin primes converges. Its value, Brun&rsquo;s constant, is about 1.902.
        </p>
      </Theorem>

      <Remark title="the method">
        <p>
          Sieve the integers n ≤ x by removing, for each prime p ≤ z, the two classes n ≡ 0 and n ≡ −2 mod p. Twin primes
          above z survive. With truncation level k of size log log x and z a small power of x, the main term is about{" "}
          <M>{"x\\prod_{2 < p \\le z}(1 - 2/p) \\ll x/(\\log z)^2"}</M> and the error is under control. Selberg&rsquo;s sieve
          later removed the log log factors.
        </p>
      </Remark>

      <Example title="what is conjectured and known">
        <p>
          Hardy and Littlewood conjectured that the count is asymptotic to{" "}
          <M>{"2C_2\\int_2^x dt/(\\log t)^2"}</M> with <M>{"C_2 \\approx 0.6602"}</M>, which matches the data. Chen (1973)
          proved there are infinitely many primes p with p + 2 prime or a product of two primes. Zhang (2013), then Maynard
          and the Polymath project, proved that infinitely many pairs of primes differ by at most 246.
        </p>
      </Example>

      <Remark title="the parity problem">
        <p>
          Selberg showed that sieves alone cannot distinguish integers with an odd number of prime factors from those with an
          even number. This is why Chen gets &lsquo;prime or product of two primes&rsquo; and no further, and why the twin
          prime conjecture remains open.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "brun",
      rung: "check",
      prompt: <p>What did Brun prove about twin primes?</p>,
      answer: { kind: "choice", options: ["The sum of their reciprocals converges", "There are infinitely many of them", "There are finitely many of them", "They are as common as primes"], correct: [0] },
    },
    {
      key: "trunc",
      rung: "check",
      prompt: <p>What does Brun do to Legendre&rsquo;s inclusion–exclusion?</p>,
      answer: { kind: "choice", options: ["Truncates it to divisors with few prime factors, giving upper and lower bounds", "Evaluates every term exactly", "Replaces it with an integral", "Restricts it to prime moduli only"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set x = 10,00,000. How many twin prime pairs are there?</p>,
      answer: { kind: "numeric", value: 8169, tolerance: 0 },
    },
    {
      key: "hundred",
      rung: "apply",
      prompt: <p>How many twin prime pairs (p, p + 2) have p + 2 ≤ 100?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "gap",
      rung: "apply",
      prompt: <p>What is the best known bound for a gap between primes that occurs infinitely often?</p>,
      answer: { kind: "choice", options: ["246", "2", "70 million", "600"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Suppose the number of twin pairs up to x is at most Cx divided by (log x) to the power 1.5 for large x. Show that the sum of 1/p over twin primes converges.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Splits the twin primes into dyadic blocks between 2ᵏ and 2ᵏ⁺¹.",
          "Bounds each block by the count up to 2ᵏ⁺¹ divided by 2ᵏ, giving at most a constant times k to the power −1.5.",
          "Concludes the sum over k converges.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why sieve methods alone are not expected to prove the twin prime conjecture.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes the parity problem: sieves cannot tell an odd number of prime factors from an even number.",
          "Connects this to the need to tell primes, with one factor, apart from products of two primes.",
          "Mentions Chen’s theorem or bounded gaps as the limit of current methods. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Brun&rsquo;s sieve removes a few residue classes for each prime. When a set must avoid many classes for every prime,
        a different tool, built on Fourier analysis, gives sharper bounds.
      </p>
      <p>Next, the large sieve, a first look.</p>
    </>
  ),
};
