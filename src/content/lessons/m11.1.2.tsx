import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { EuclidNumberViz } from "@/components/viz/EuclidNumberViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.1.2",
  minutes: 90,
  links: {
    revisits: ["m11.1.1", "m4.4.2", "m2.9.2"],
    foreshadows: ["m11.1.3", "m11.5.1", "m34.5.2"],
  },

  puzzle: (
    <>
      <p>
        Euclid proved that the primes never run out. But some kinds of prime may be rarer than others. Are there infinitely
        many primes that are 3 more than a multiple of 4? And can we say not only that there are infinitely many primes, but
        that there are &ldquo;a lot&rdquo; of them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a finite list of primes. Build Euclid&rsquo;s number from them and factor it. Then switch to the variant for primes of the form 4k + 3.</p>
      <EuclidNumberViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Euclid">
        <p>Given any finite list of primes, there is a prime not on the list.</p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"N = p_1 p_2 \\cdots p_k + 1"}</M>. Since <M>{"N > 1"}</M>, it has a prime factor <M>{"q"}</M>. Each{" "}
          <M>{"p_i"}</M> leaves remainder 1 on dividing <M>{"N"}</M>, so <M>{"q \\ne p_i"}</M>. This is a direct
          construction, not a proof by contradiction, and <M>{"N"}</M> itself need not be prime.
        </p>
      </Proof>

      <Theorem title="primes of the form 4k + 3">
        <p>There are infinitely many primes <M>{"p \\equiv 3 \\pmod 4"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          Given primes <M>{"p_1, \\dots, p_k"}</M>, all <M>{"\\equiv 3 \\pmod 4"}</M>, let <M>{"N = 4p_1 \\cdots p_k - 1"}</M>.
          It is odd and <M>{"N \\equiv 3 \\pmod 4"}</M>. A product of numbers that are all <M>{"1 \\bmod 4"}</M> is{" "}
          <M>{"1 \\bmod 4"}</M>, so some prime factor <M>{"q"}</M> of <M>{"N"}</M> is <M>{"3 \\bmod 4"}</M>. Each{" "}
          <M>{"p_i"}</M> divides <M>{"N + 1"}</M>, so it cannot divide <M>{"N"}</M>. Hence <M>{"q"}</M> is a new prime of the
          required form.
        </p>
      </Proof>

      <Example title="Fermat numbers">
        <p>
          Let <M>{"F_m = 2^{2^m} + 1"}</M>: 3, 5, 17, 257, 65537, …. By induction,{" "}
          <M>{"F_0 F_1 \\cdots F_{m-1} = F_m - 2"}</M>. So a common divisor of <M>{"F_j"}</M> and <M>{"F_m"}</M>, with{" "}
          <M>{"j < m"}</M>, divides 2, and both are odd: the Fermat numbers are pairwise coprime. Each has its own prime
          factors, which gives infinitely many primes again. Fermat guessed all <M>{"F_m"}</M> are prime; Euler found{" "}
          <M>{"F_5 = 641 \\cdot 6700417"}</M>.
        </p>
      </Example>

      <Theorem title="Euler">
        <MD>{"\\sum_{p \\text{ prime}} \\frac{1}{p} = \\frac12 + \\frac13 + \\frac15 + \\frac17 + \\cdots \\text{ diverges.}"}</MD>
      </Theorem>

      <Proof>
        <p>
          Every <M>{"n \\le x"}</M> is a product of primes <M>{"p \\le x"}</M>, so expanding geometric series and using unique
          factorisation,
        </p>
        <MD>{"\\prod_{p \\le x} \\Bigl(1 - \\frac1p\\Bigr)^{-1} = \\prod_{p \\le x} \\Bigl(1 + \\frac1p + \\frac1{p^2} + \\cdots\\Bigr) \\ \\ge\\ \\sum_{n \\le x} \\frac1n \\ \\ge\\ \\ln x."}</MD>
        <p>
          Take logarithms. Since <M>{"-\\ln(1 - t) \\le t + t^2"}</M> for <M>{"0 \\le t \\le \\tfrac12"}</M>, we get{" "}
          <M>{"\\sum_{p \\le x} (1/p + 1/p^2) \\ge \\ln \\ln x"}</M>. The sum of <M>{"1/p^2"}</M> is less than 1, so{" "}
          <M>{"\\sum_{p \\le x} 1/p \\ge \\ln \\ln x - 1"}</M>, which tends to infinity.
        </p>
      </Proof>

      <Remark title="what Euler adds">
        <p>
          The squares are infinite too, yet <M>{"\\sum 1/n^2"}</M> converges. So Euler&rsquo;s theorem says the primes are
          denser than the squares, a quantitative fact that Euclid&rsquo;s argument cannot give. Dirichlet extended
          Euler&rsquo;s method to prove that every progression <M>{"a, a + d, a + 2d, \\dots"}</M> with{" "}
          <M>{"\\gcd(a, d) = 1"}</M> contains infinitely many primes.
        </p>
      </Remark>

      <Definition title="Euclid numbers">
        <p>
          The numbers <M>{"p_1 p_2 \\cdots p_k + 1"}</M> for the first <M>{"k"}</M> primes are 3, 7, 31, 211, 2311, and then{" "}
          <M>{"30031 = 59 \\cdot 509"}</M>. Whether infinitely many of them are prime is unknown.
        </p>
      </Definition>
    </>
  ),

  practice: [
    {
      key: "direct",
      rung: "check",
      prompt: <p>In Euclid&rsquo;s argument, why can no prime on the list divide <M>{"p_1 \\cdots p_k + 1"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the number is prime.",
          "Because each listed prime leaves remainder 1.",
          "Because the number is even.",
          "Because the list contains every prime.",
        ],
        correct: [1],
      },
    },
    {
      key: "fermat",
      rung: "check",
      prompt: <p>Why do the Fermat numbers give infinitely many primes?</p>,
      answer: { kind: "choice", options: ["They are all prime.", "They are pairwise coprime.", "They grow slowly.", "They are all 1 mod 4."], correct: [1] },
    },
    {
      key: "e6",
      rung: "apply",
      prompt: <p>What is the smallest prime factor of <M>{"2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 + 1"}</M>?</p>,
      answer: { kind: "numeric", value: 59, tolerance: 0 },
    },
    {
      key: "prod",
      rung: "apply",
      prompt: <p>Compute <M>{"F_0 F_1 F_2 F_3"}</M>.</p>,
      answer: { kind: "numeric", value: 65535, tolerance: 0 },
    },
    {
      key: "four",
      rung: "apply",
      prompt: <p>Starting from the list 3, 7, the argument for primes 3 mod 4 builds <M>{"4 \\cdot 3 \\cdot 7 - 1"}</M>. What is its prime factor that is 3 mod 4?</p>,
      answer: { kind: "numeric", value: 83, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that there are infinitely many primes of the form <M>{"6k + 5"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Builds N = 6p₁⋯pₖ − 1 from a finite list of such primes, and notes N ≡ 5 mod 6.",
          "Argues that N has a prime factor ≡ 5 mod 6, since primes other than 2 and 3 are 1 or 5 mod 6, 2 and 3 do not divide N, and a product of numbers ≡ 1 mod 6 is ≡ 1.",
          "Shows this factor is not on the list, since each listed prime divides N + 1.",
        ],
      },
    },
    {
      key: "plus",
      rung: "stretch",
      prompt: <p>Why does the same trick not prove directly that there are infinitely many primes of the form <M>{"4k + 1"}</M>?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a number ≡ 1 mod 4 can be a product of primes that are all 3 mod 4, such as 21 = 3 · 7.",
          "So knowing N ≡ 1 mod 4 does not force a prime factor ≡ 1 mod 4; a different idea is needed.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Euclid’s proof that primes never run out and why it is a construction, the variant for primes of the form 4k + 3, the Fermat numbers argument, and Euler’s proof that the sum of 1/p diverges.",

  glimpse: (
    <p>
      The next lesson asks how many primes there are up to x, and meets the prime number theorem. Quadratic residues later give
      infinitely many primes 1 mod 4, and Dirichlet&rsquo;s theorem handles every progression.
    </p>
  ),
};
