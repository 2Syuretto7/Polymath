import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PrimeRaceViz } from "@/components/viz/PrimeRaceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.3.3",
  minutes: 90,
  links: {
    revisits: ["m35.3.2", "m35.2.2", "m11.1.2"],
    foreshadows: ["m35.4.1", "m35.4.3", "m35.5.3"],
  },

  puzzle: (
    <>
      <p>
        Simple tricks in the style of Euclid show that there are infinitely many primes ending in 3 or 7, but no such trick
        is known for every progression. In 1837 Dirichlet proved that every progression a, a + q, a + 2q, … with a and q
        coprime contains infinitely many primes, and founded analytic number theory in doing so. How do the characters and
        L-functions fit together into a proof?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a modulus, and watch the race between the two classes of primes as x grows.</p>
      <PrimeRaceViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Dirichlet’s theorem (1837)">
        <p>
          If gcd(a, q) = 1, then <M>{"\\sum_{p \\equiv a \\,(q)} 1/p"}</M> diverges. In particular there are infinitely many
          primes congruent to a mod q.
        </p>
      </Theorem>

      <Remark title="the proof">
        <p>
          For s &gt; 1, orthogonality gives{" "}
          <M>{"\\sum_{p \\equiv a} p^{-s} = \\frac{1}{\\varphi(q)} \\sum_\\chi \\overline{\\chi(a)} \\sum_p \\chi(p) p^{-s}"}</M>.
          Taking logarithms of the Euler product, <M>{"\\sum_p \\chi(p)p^{-s} = \\log L(s, \\chi) + O(1)"}</M>. For{" "}
          <M>{"\\chi_0"}</M> this is <M>{"\\log\\frac{1}{s-1} + O(1)"}</M>. For every other χ it stays bounded as s → 1⁺,
          because <M>{"L(1, \\chi)"}</M> is finite and non-zero. So the left side grows like{" "}
          <M>{"\\frac{1}{\\varphi(q)}\\log\\frac{1}{s-1}"}</M>, which tends to infinity.
        </p>
      </Remark>

      <Theorem title="the prime number theorem for progressions">
        <p>
          De la Vallée Poussin extended his 1896 proof: <M>{"\\pi(x; q, a) \\sim \\frac{\\operatorname{li}(x)}{\\varphi(q)}"}</M>.
          Each of the <M>{"\\varphi(q)"}</M> admissible classes receives an equal share of the primes. The proof needs{" "}
          <M>{"L(1 + it, \\chi) \\ne 0"}</M> for all real t, by the same 3-4-1 argument as for ζ.
        </p>
      </Theorem>

      <Definition title="uniformity in q">
        <p>
          The Siegel–Walfisz theorem gives the asymptotic uniformly for q up to any power of log x, but with an ineffective
          constant because of possible Siegel zeros. Linnik proved that the least prime in the class a mod q is at most{" "}
          <M>{"q^L"}</M> for an absolute constant L; L = 5 is now known to suffice.
        </p>
      </Definition>

      <Example title="Chebyshev’s bias">
        <p>
          Equal shares in the limit do not mean a fair race. Primes ≡ 3 mod 4 lead those ≡ 1 mod 4 for most x; the lead
          first changes at 26,861. Rubinstein and Sarnak (1994), assuming the generalised Riemann hypothesis and a
          hypothesis on the independence of zeros, showed that the class of 3 leads on a set of logarithmic density about
          0.9959.
        </p>
      </Example>

      <Remark title="longer patterns">
        <p>
          Dirichlet&rsquo;s theorem fixes one progression and asks for primes in it. Green and Tao (2004) answered a
          different question: the primes themselves contain arithmetic progressions of every finite length.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ingr",
      rung: "check",
      prompt: <p>Which fact about L-functions is essential in Dirichlet&rsquo;s proof?</p>,
      answer: { kind: "choice", options: ["L(1, χ) ≠ 0 for every non-principal χ", "L(s, χ) has a pole at 1 for every χ", "L(s, χ) = ζ(s) for every χ", "All zeros of L(s, χ) are real"], correct: [0] },
    },
    {
      key: "share",
      rung: "check",
      prompt: <p>In the long run, what proportion of primes end in the digit 7?</p>,
      answer: { kind: "choice", options: ["1/4", "1/10", "1/2", "1/5"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, mod 4, at which x does the class of 1 first take the lead?</p>,
      answer: { kind: "numeric", value: 26861, tolerance: 0 },
    },
    {
      key: "twelve",
      rung: "apply",
      prompt: <p>What proportion of primes are congruent to 5 mod 12, in the long run? Give a decimal.</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>Why does the progression 2, 6, 10, 14, … contain only one prime?</p>,
      answer: { kind: "choice", options: ["Every term is even, so gcd(2, 4) ≠ 1", "Its L-function vanishes at 1", "The terms grow too quickly", "There are only finitely many primes mod 4"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that there are infinitely many primes congruent to 3 mod 4, without L-functions.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes p₁, …, pₖ are all such primes and considers N = 4p₁⋯pₖ − 1.",
          "Notes N ≡ 3 mod 4 and is odd, so not all its prime factors are ≡ 1 mod 4, since a product of such primes is ≡ 1 mod 4.",
          "Concludes N has a prime factor ≡ 3 mod 4 different from every pᵢ, a contradiction.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain the role of orthogonality of characters in Dirichlet&rsquo;s proof.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says orthogonality writes the indicator of the class a mod q as an average of characters.",
          "Explains that this turns the sum over primes in the class into a combination of sums of χ(p)/pˢ, each tied to log L(s, χ).",
          "Notes that only the principal character contributes a divergent term. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        So far ζ and its relatives have lived on the half-plane where their series converge, or just beyond it. Riemann
        showed that ζ extends to the whole complex plane, apart from one pole.
      </p>
      <p>Next, analytic continuation.</p>
    </>
  ),
};
