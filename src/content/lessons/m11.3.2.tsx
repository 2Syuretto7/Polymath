import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MobiusSumViz } from "@/components/viz/MobiusSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.3.2",
  minutes: 90,
  links: {
    revisits: ["m11.3.1", "m1.4.1", "m11.2.3"],
    foreshadows: ["m11.3.3", "m13.7.2", "m35.2.2"],
  },

  puzzle: (
    <>
      <p>
        Add up <M>{"\\varphi(d)"}</M> over the divisors of 12: <M>{"1 + 1 + 2 + 2 + 2 + 4 = 12"}</M>. This always gives{" "}
        <M>{"n"}</M>. So <M>{"\\varphi"}</M> is hidden inside the identity function by summing over divisors. Can we undo the
        sum and get <M>{"\\varphi"}</M> back out?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose n and a sum. Watch which divisors contribute and which cancel.</p>
      <MobiusSumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Möbius function">
        <p>
          <M>{"\\mu(1) = 1"}</M>; <M>{"\\mu(n) = (-1)^r"}</M> if <M>{"n"}</M> is a product of <M>{"r"}</M> distinct primes; and{" "}
          <M>{"\\mu(n) = 0"}</M> if a square greater than 1 divides <M>{"n"}</M>. It is multiplicative.
        </p>
      </Definition>

      <Theorem title="the basic identity">
        <MD>{"\\sum_{d \\mid n} \\mu(d) = \\begin{cases} 1 & n = 1, \\\\ 0 & n > 1. \\end{cases}"}</MD>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"n > 1"}</M> have <M>{"r \\ge 1"}</M> distinct prime factors. Only squarefree divisors contribute, and there
          are <M>{"\\binom{r}{j}"}</M> with <M>{"j"}</M> primes, each contributing <M>{"(-1)^j"}</M>. So the sum is{" "}
          <M>{"\\sum_j \\binom{r}{j}(-1)^j = (1 - 1)^r = 0"}</M>.
        </p>
      </Proof>

      <Theorem title="Möbius inversion">
        <p>For arithmetic functions <M>{"f"}</M> and <M>{"F"}</M>,</p>
        <MD>{"F(n) = \\sum_{d \\mid n} f(d) \\ \\text{ for all } n \\quad\\Longleftrightarrow\\quad f(n) = \\sum_{d \\mid n} \\mu(d)\\,F(n/d) \\ \\text{ for all } n."}</MD>
      </Theorem>

      <Proof>
        <p>Assume the left side. Then</p>
        <MD>{"\\sum_{d \\mid n} \\mu(d) F(n/d) = \\sum_{d \\mid n} \\mu(d) \\sum_{e \\mid n/d} f(e) = \\sum_{e \\mid n} f(e) \\sum_{d \\mid n/e} \\mu(d) = f(n),"}</MD>
        <p>
          since the inner sum is 1 when <M>{"e = n"}</M> and 0 otherwise. The converse is similar. In the language of
          convolution: <M>{"F = f * 1"}</M> and <M>{"\\mu * 1 = \\varepsilon"}</M>, the identity, so{" "}
          <M>{"f = F * \\mu"}</M>.
        </p>
      </Proof>

      <Example title="Euler's function">
        <p>
          From <M>{"n = \\sum_{d \\mid n} \\varphi(d)"}</M>, inversion gives{" "}
          <M>{"\\varphi(n) = \\sum_{d \\mid n} \\mu(d)\\,\\frac{n}{d} = n \\prod_{p \\mid n}\\bigl(1 - \\tfrac1p\\bigr)"}</M>. For{" "}
          <M>{"n = 12"}</M>: <M>{"12 - 6 - 4 + 2 = 4"}</M>. This is inclusion and exclusion: remove multiples of 2 and of 3,
          then add back multiples of 6.
        </p>
      </Example>

      <Remark title="counting irreducible polynomials">
        <p>
          Over a field with <M>{"q"}</M> elements, every monic polynomial of degree <M>{"n"}</M> factors uniquely, which
          leads to <M>{"q^n = \\sum_{d \\mid n} d\\,N_d"}</M>, where <M>{"N_d"}</M> counts monic irreducibles of degree{" "}
          <M>{"d"}</M>. Inversion gives <M>{"N_n = \\frac1n \\sum_{d \\mid n} \\mu(d)\\,q^{n/d}"}</M>. Over{" "}
          <M>{"\\mathbb{F}_2"}</M> there are <M>{"(16 - 4)/4 = 3"}</M> irreducible quartics.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mu30",
      rung: "check",
      prompt: <p>What is <M>{"\\mu(30)"}</M>?</p>,
      answer: { kind: "choice", options: ["−1", "0", "1", "3"], correct: [0] },
    },
    {
      key: "mu12",
      rung: "check",
      prompt: <p>What is <M>{"\\mu(12)"}</M>?</p>,
      answer: { kind: "choice", options: ["−1", "0", "1", "2"], correct: [1] },
    },
    {
      key: "sum60",
      rung: "apply",
      prompt: <p>Compute <M>{"\\sum_{d \\mid 60} \\mu(d)"}</M>.</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0 },
    },
    {
      key: "phi30",
      rung: "apply",
      prompt: <p>Compute <M>{"\\sum_{d \\mid 30} \\mu(d) \\cdot \\frac{30}{d}"}</M>.</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "irr",
      rung: "apply",
      prompt: <p>Using <M>{"N_n = \\frac1n \\sum_{d \\mid n} \\mu(d)\\,q^{n/d}"}</M>, how many monic irreducible polynomials of degree 6 are there over <M>{"\\mathbb{F}_2"}</M>?</p>,
      answer: { kind: "numeric", value: 9, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that <M>{"\\sum_{d \\mid n} \\mu(d) = 0"}</M> for every <M>{"n > 1"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that only squarefree divisors contribute, and these are products of subsets of the r distinct primes of n.",
          "Counts the contribution of subsets of size j as C(r, j)(−1)^j.",
          "Sums to (1 − 1)^r = 0, using r ≥ 1.",
        ],
      },
    },
    {
      key: "ie",
      rung: "stretch",
      prompt: <p>Explain how the formula <M>{"\\varphi(n) = \\sum_{d \\mid n} \\mu(d)\\,n/d"}</M> is an instance of inclusion and exclusion.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Interprets n/d as the number of multiples of d up to n.",
          "Explains that squarefree d with an odd number of primes are subtracted and those with an even number added back, as inclusion and exclusion over the primes of n.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Möbius function, why its sum over divisors is 0 for n > 1, how Möbius inversion undoes a sum over divisors, how it recovers Euler’s formula for φ as inclusion and exclusion, and its use in counting irreducible polynomials.",

  glimpse: (
    <p>
      The next lesson studies perfect numbers through σ. In analytic number theory, μ appears as the coefficients of 1/ζ(s), and
      the size of its partial sums is tied to the prime number theorem and the Riemann hypothesis.
    </p>
  ),
};
