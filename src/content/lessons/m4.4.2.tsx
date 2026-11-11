import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SieveViz } from "@/components/viz/SieveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.4.2",
  minutes: 80,
  links: {
    revisits: ["m4.4.1", "m1.3.3", "m1.5.2"],
    foreshadows: ["m4.4.3", "m11.1.1", "m11.1.3"],
  },

  puzzle: (
    <>
      <p>
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47. The primes look like a random scatter, yet every whole
        number is built from them, in exactly one way. Some questions about them were settled by Euclid; others, such as
        whether there are infinitely many pairs of primes two apart, like 41 and 43, are still open after more than two
        thousand years.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Run the sieve of Eratosthenes. Each step finds a new prime and crosses out its multiples. Why can you stop after 7?
      </p>
      <SieveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="primes">
        <p>
          An integer p &gt; 1 is <strong>prime</strong> if its only positive divisors are 1 and p. An integer n &gt; 1 that
          is not prime is <strong>composite</strong>: it can be written n = ab with 1 &lt; a, b &lt; n. By convention 1 is
          neither, which keeps the factorisation theorem below clean.
        </p>
      </Definition>

      <Theorem title="prime factors">
        <p>
          Every integer n &gt; 1 has a prime divisor. If n is composite, it has a prime divisor at most{" "}
          <M>{"\\sqrt{n}"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          The least divisor d &gt; 1 of n is prime, since any divisor of d is also a divisor of n. If n = ab is composite
          with a ≤ b, then <M>{"a^2 \\le ab = n"}</M>, so <M>{"a \\le \\sqrt{n}"}</M>, and a prime divisor of a divides n.
          This is why the sieve up to 100 needs only the primes up to 10.
        </p>
      </Proof>

      <Theorem title="Euclid: there are infinitely many primes">
        <p>No finite list of primes contains them all.</p>
      </Theorem>
      <Proof>
        <p>
          Given primes <M>{"p_1, \\dots, p_k"}</M>, let <M>{"N = p_1 p_2 \\cdots p_k + 1"}</M>. N has a prime divisor p.
          If p were some <M>{"p_i"}</M>, it would divide both N and the product, so it would divide their difference, 1,
          which is impossible. So p is a prime not on the list.
        </p>
      </Proof>

      <Theorem title="the fundamental theorem of arithmetic">
        <p>
          Every integer n &gt; 1 can be written as a product of primes, and this factorisation is unique apart from the
          order of the factors.
        </p>
      </Theorem>
      <p>
        Existence follows by strong induction: a prime is its own factorisation, and a composite n = ab with a, b &lt; n
        multiplies the factorisations of a and b. Uniqueness rests on <strong>Euclid&rsquo;s lemma</strong>: if a prime p
        divides ab, then p divides a or p divides b. That is not obvious, and the next lesson proves it with the greatest
        common divisor. It fails in other number systems: in the numbers <M>{"a + b\\sqrt{-5}"}</M>,{" "}
        <M>{"6 = 2 \\cdot 3 = (1 + \\sqrt{-5})(1 - \\sqrt{-5})"}</M> in two genuinely different ways.
      </p>

      <Example title="gaps and patterns">
        <p>
          Primes can be far apart: <M>{"n! + 2, n! + 3, \\dots, n! + n"}</M> are n − 1 consecutive composite numbers,
          since k divides n! + k. Yet they can also be close: the <strong>twin prime conjecture</strong> says there are
          infinitely many pairs p, p + 2 both prime. In 2013 Yitang Zhang proved that some gap below 70 million occurs
          infinitely often, and the bound has since been brought down to 246. <strong>Goldbach&rsquo;s conjecture</strong>,
          that every even number greater than 2 is a sum of two primes, has been checked far beyond <M>{"10^{18}"}</M> but
          not proved.
        </p>
      </Example>

      <Remark title="how many primes?">
        <p>
          There are 25 primes up to 100, 168 up to 1,000 and 1,229 up to 10,000. The <strong>prime number theorem</strong>,
          proved in 1896, says the number of primes up to x is roughly <M>{"x / \\ln x"}</M>: near x, about one number in{" "}
          <M>{"\\ln x"}</M> is prime. The Riemann hypothesis, the most famous open problem in mathematics, is a precise
          statement about how good this approximation is.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these are prime? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["1", "51", "53", "91"], correct: [2] },
    },
    {
      key: "count",
      rung: "check",
      prompt: <p>How many primes are there below 30?</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "sqrt",
      rung: "apply",
      prompt: <p>To check whether 221 is prime, what is the largest prime you need to try as a divisor?</p>,
      answer: { kind: "numeric", value: 13 },
    },
    {
      key: "factor",
      rung: "apply",
      prompt: <p>What is the largest prime factor of 1,001?</p>,
      answer: { kind: "numeric", value: 13 },
    },
    {
      key: "euclid",
      rung: "apply",
      prompt: (
        <p>
          In Euclid&rsquo;s proof with the primes 2, 3, 5, 7, 11 and 13, N = 30,031. This is 59 × 509. What does the proof
          actually guarantee?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "That N is prime.",
          "That N has a prime factor not on the list, which need not be N itself.",
          "That 59 is the next prime after 13.",
          "Nothing, since N is composite.",
        ],
        correct: [1],
      },
    },
    {
      key: "infinite",
      rung: "prove",
      prompt: <p>Prove that there are infinitely many primes.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes finitely many primes, or takes any finite list, and forms their product plus 1.",
          "Notes that this number has a prime divisor, and that no prime on the list divides it, since it would then divide 1.",
          "Concludes there is a prime outside any finite list. A clear proof earns full credit.",
        ],
      },
    },
    {
      key: "fourk3",
      rung: "stretch",
      prompt: <p>Prove that there are infinitely many primes that leave remainder 3 on division by 4.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Given such primes p₁, …, pₖ, considers N = 4p₁⋯pₖ − 1, which leaves remainder 3 on division by 4.",
          "Argues that N is odd and that a product of numbers each leaving remainder 1 also leaves remainder 1, so some prime factor of N leaves remainder 3.",
          "Shows that factor is not on the list. A sound argument earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a prime is, why every number has a prime factor, why the sieve can stop at the square root, Euclid's proof that there are infinitely many primes, and what the fundamental theorem of arithmetic says.",

  glimpse: (
    <p>
      The next lesson brings the greatest common divisor and Euclid&rsquo;s algorithm, and with them the proof of unique
      factorisation. Elementary Number Theory studies how the primes are distributed.
    </p>
  ),
};
