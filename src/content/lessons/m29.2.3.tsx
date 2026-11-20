import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CyclotomicSplitViz } from "@/components/viz/CyclotomicSplitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m29.2.3",
  minutes: 90,
  links: {
    revisits: ["m29.2.2", "m29.1.2", "m14.4.1"],
    foreshadows: ["m29.3.1", "m29.5.2", "m29.5.3"],
  },

  puzzle: (
    <>
      <p>
        In ℤ[i], 2 = −i(1 + i)² is a square up to a unit, and in ℚ(√5), 5 = (√5)². Most primes split or stay prime, but
        these few appear squared. Why only these, and can a field other than ℚ avoid such primes altogether?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a cyclotomic field, and see how each prime below 100 decomposes in it.</p>
      <CyclotomicSplitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="ramified primes">
        <p>
          A prime p <strong>ramifies</strong> in K if some <M>{"e_i > 1"}</M> in{" "}
          <M>{"p\\mathcal{O}_K = \\prod P_i^{e_i}"}</M>. It is <strong>totally ramified</strong> if{" "}
          <M>{"p\\mathcal{O}_K = P^n"}</M>. Ramification is <strong>tame</strong> when p does not divide any{" "}
          <M>{"e_i"}</M>, and <strong>wild</strong> otherwise.
        </p>
      </Definition>

      <Theorem title="Dedekind’s discriminant theorem">
        <p>
          A prime p ramifies in K exactly when p divides the discriminant <M>{"d_K"}</M>. So only finitely many primes
          ramify. For a quadratic field this is visible directly: an odd p ramifies when <M>{"x^2 - d"}</M> has a repeated
          root mod p, that is when p divides d.
        </p>
      </Theorem>

      <Example title="cyclotomic fields">
        <p>
          In <M>{"\\mathbb{Q}(\\zeta_p)"}</M>, of degree p − 1, the prime p is totally ramified:{" "}
          <M>{"(p) = (1 - \\zeta)^{p-1}"}</M>, since <M>{"p = \\prod_{k=1}^{p-1}(1 - \\zeta^k)"}</M> and each quotient{" "}
          <M>{"(1 - \\zeta^k)/(1 - \\zeta)"}</M> is a unit. Every other prime q is unramified, with residue degree f equal
          to the order of q modulo p, and splits into (p − 1)/f primes. So q splits completely exactly when q ≡ 1 (mod p).
        </p>
      </Example>

      <Theorem title="Minkowski: ℚ has no unramified extensions">
        <p>
          Every number field other than ℚ has <M>{"|d_K| > 1"}</M>, and so some prime ramifies in it. This follows from the
          geometry of numbers in the next chapter, and contrasts with the many unramified coverings of a Riemann surface of
          positive genus.
        </p>
      </Theorem>

      <Remark title="the different">
        <p>
          Finer information is carried by the <strong>different</strong>, an ideal of <M>{"\\mathcal{O}_K"}</M> divisible
          exactly by the ramified primes, whose norm is <M>{"|d_K|"}</M>. It plays the role of the ramification divisor in
          the Riemann-Hurwitz formula.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When does a prime p ramify in a number field K?</p>,
      answer: { kind: "choice", options: ["When some prime ideal above p appears with exponent greater than 1", "When p stays prime", "When p splits into n primes", "When p is a unit"], correct: [0] },
    },
    {
      key: "disc",
      rung: "check",
      prompt: <p>Which primes ramify in K?</p>,
      answer: { kind: "choice", options: ["Exactly those dividing the discriminant", "Exactly those congruent to 1 mod 4", "All primes", "None"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose ℚ(ζ₇). Into how many prime ideals does 2 split?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "five",
      rung: "apply",
      prompt: <p>How many primes ramify in ℚ(ζ₅)?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "complete",
      rung: "apply",
      prompt: <p>Which primes q ≠ 11 split completely in ℚ(ζ₁₁)?</p>,
      answer: { kind: "choice", options: ["Those with q ≡ 1 (mod 11)", "Those with q ≡ −1 (mod 11)", "All of them", "None of them"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that (p) = (1 − ζ) to the p − 1 in ℚ(ζₚ).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Evaluates the cyclotomic polynomial 1 + x + ⋯ + x to the p − 1 at x = 1, giving p as the product of (1 − ζᵏ) for k = 1 to p − 1.",
          "Shows (1 − ζᵏ)/(1 − ζ) is an algebraic integer, and so is its inverse, so it is a unit.",
          "Concludes p is a unit times (1 − ζ) to the p − 1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does an odd prime p ramify in ℚ(√d), with d squarefree, exactly when p divides d?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies Dedekind-Kummer to x² − d modulo p, using that p does not divide the index of ℤ[√d] for odd p.",
          "Notes x² − d has a repeated factor mod p exactly when p divides d.",
          "Concludes that a repeated factor means a squared prime ideal. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Minkowski found that a ring of integers, viewed as a lattice in real space, must contain short vectors. That simple
        fact about volumes proves the class group is finite.
      </p>
      <p>Next, Minkowski&rsquo;s geometry of numbers.</p>
    </>
  ),
};
