import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PrimesInProgressionViz } from "@/components/viz/PrimesInProgressionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.5.2",
  minutes: 90,
  links: {
    revisits: ["m34.5.1", "m34.1.1", "m7.2.1"],
    foreshadows: ["m35.3.1", "m35.3.2", "m35.3.3"],
  },

  puzzle: (
    <>
      <p>
        Euclid showed there are infinitely many primes. Are there infinitely many ending in 7? Infinitely many of the form
        100n + 1? Elementary tricks handle a few progressions, but in 1837 Dirichlet proved the answer is yes for every
        progression that could possibly contain more than one prime, using Fourier analysis on a finite group.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a modulus q and a bound X, and count the primes in each residue class.</p>
      <PrimesInProgressionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Dirichlet characters and L-functions">
        <p>
          A <strong>Dirichlet character</strong> mod q is a character of the group <M>{"(\\mathbb{Z}/q)^\\times"}</M>, of
          order φ(q), extended to all integers by 0 on those not coprime to q. Its <strong>L-function</strong> is{" "}
          <M>{"L(s, \\chi) = \\sum_{n \\ge 1} \\chi(n) n^{-s} = \\prod_p (1 - \\chi(p)p^{-s})^{-1}"}</M> for s &gt; 1, the
          product holding because χ is multiplicative.
        </p>
      </Definition>

      <Theorem title="Dirichlet (1837)">
        <p>
          If gcd(a, q) = 1, there are infinitely many primes p ≡ a mod q. Indeed{" "}
          <M>{"\\sum_{p \\equiv a} p^{-1}"}</M> diverges.
        </p>
      </Theorem>

      <Remark title="the proof">
        <p>
          By orthogonality,{" "}
          <M>{"\\sum_{p \\equiv a} p^{-s} = \\frac{1}{\\varphi(q)} \\sum_\\chi \\overline{\\chi(a)} \\sum_p \\chi(p) p^{-s}"}</M>.
          Taking logarithms of the Euler product, the inner sum is log L(s, χ) up to a bounded error. For the principal
          character this is essentially log ζ(s), which tends to ∞ as s → 1. For every other χ it stays bounded, provided{" "}
          <M>{"L(1, \\chi) \\ne 0"}</M>. So the left side diverges. The hard step is non-vanishing for real characters, which
          Dirichlet proved with his class number formula.
        </p>
      </Remark>

      <Example title="q = 4">
        <p>
          The nontrivial character mod 4 takes values 1, 0, −1, 0 on n ≡ 1, 2, 3, 0, and{" "}
          <M>{"L(1, \\chi) = 1 - \\tfrac13 + \\tfrac15 - \\tfrac17 + \\cdots = \\tfrac{\\pi}{4} \\ne 0"}</M>, by
          Leibniz&rsquo;s series. So there are infinitely many primes of each form 4n + 1 and 4n + 3.
        </p>
      </Example>

      <Remark title="beyond infinitude">
        <p>
          The prime number theorem for progressions says each class gets a share 1/φ(q) of the primes. Chebyshev noticed in
          1853 that primes ≡ 3 mod 4 usually lead: the race is biased towards non-residues. Rubinstein and Sarnak (1994)
          explained the bias, assuming the generalised Riemann hypothesis.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hard",
      rung: "check",
      prompt: <p>Which step of Dirichlet&rsquo;s proof is the hardest?</p>,
      answer: { kind: "choice", options: ["Showing L(1, χ) ≠ 0 for real nontrivial characters", "Showing ζ(s) → ∞ as s → 1", "Writing L(s, χ) as an Euler product", "Proving orthogonality of characters"], correct: [0] },
    },
    {
      key: "dir",
      rung: "check",
      prompt: <p>A Dirichlet character mod q is a character of which group?</p>,
      answer: { kind: "choice", options: ["The units (ℤ/q)ˣ", "The integers ℤ", "The additive group ℤ/q", "The circle"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with q = 4 and X = 10,000, how many primes are ≡ 3 mod 4?</p>,
      answer: { kind: "numeric", value: 619, tolerance: 0 },
    },
    {
      key: "phi",
      rung: "apply",
      prompt: <p>How many Dirichlet characters are there mod 10?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "leib",
      rung: "apply",
      prompt: <p>What is L(1, χ) for the nontrivial character mod 4, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.785, tolerance: 0.002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show, without L-functions, that there are infinitely many primes ≡ 3 mod 4.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes p₁, …, pₖ are all such primes and forms N = 4p₁⋯pₖ − 1.",
          "Notes that N ≡ 3 mod 4 and is odd, so not every prime factor can be ≡ 1 mod 4, since products of such are ≡ 1.",
          "Concludes that some prime factor is ≡ 3 mod 4 and is not among the pᵢ, a contradiction.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the term from the principal character diverges as s → 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that it is the sum of p⁻ˢ over primes not dividing q.",
          "Uses that the sum of 1/p over all primes diverges, and only finitely many primes divide q.",
          "Concludes the sum tends to ∞ as s → 1. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Dirichlet&rsquo;s proof turned a question about primes into one about analytic functions. That move founded a
        whole subject, which counts primes by studying ζ(s) and its relatives as functions of a complex variable.
      </p>
      <p>Next, the course on analytic number theory begins with averages.</p>
    </>
  ),
};
