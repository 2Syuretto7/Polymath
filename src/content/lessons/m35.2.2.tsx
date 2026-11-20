import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ZetaModulusViz } from "@/components/viz/ZetaModulusViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.2.2",
  minutes: 90,
  links: {
    revisits: ["m35.2.1", "m13.4.3", "m13.7.3"],
    foreshadows: ["m35.2.3", "m35.3.3", "m35.4.3"],
  },

  puzzle: (
    <>
      <p>
        In 1896 Hadamard and de la Vallée Poussin independently proved that π(x) is asymptotic to x/log x. Both proofs
        turned on one fact: ζ(s) has no zeros on the line Re s = 1. Why should the location of zeros of a complex function
        decide how primes are spread along the real line?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a vertical line Re s = σ, and see where |ζ(s)| comes close to zero as the height t grows.</p>
      <ZetaModulusViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the prime number theorem">
        <p>
          <M>{"\\pi(x) \\sim x/\\log x"}</M>, or equivalently <M>{"\\theta(x) \\sim x"}</M>, or <M>{"\\psi(x) \\sim x"}</M>.
        </p>
      </Theorem>

      <Theorem title="no zeros on the line Re s = 1">
        <p>
          For real t ≠ 0, <M>{"\\zeta(1 + it) \\neq 0"}</M>. The proof uses{" "}
          <M>{"3 + 4\\cos\\phi + \\cos 2\\phi = 2(1 + \\cos\\phi)^2 \\ge 0"}</M>. Applying it to the Euler product gives{" "}
          <M>{"|\\zeta(\\sigma)^3 \\zeta(\\sigma + it)^4 \\zeta(\\sigma + 2it)| \\ge 1"}</M> for σ &gt; 1. If ζ(1 + it) were
          0, then as σ → 1⁺ the triple pole of <M>{"\\zeta(\\sigma)^3"}</M> would be outweighed by the zero of order at least
          4 of <M>{"\\zeta(\\sigma + it)^4"}</M>, and the product would tend to 0.
        </p>
      </Theorem>

      <Theorem title="Newman’s analytic theorem (1980)">
        <p>
          Let f be bounded and locally integrable on [0, ∞), and suppose{" "}
          <M>{"g(z) = \\int_0^\\infty f(t) e^{-zt}\\,dt"}</M>, defined for Re z &gt; 0, extends holomorphically to a
          neighbourhood of Re z ≥ 0. Then <M>{"\\int_0^\\infty f(t)\\,dt"}</M> converges and equals g(0). The proof is a
          single contour integral and Cauchy&rsquo;s theorem.
        </p>
      </Theorem>

      <Remark title="the proof in outline">
        <p>
          Let <M>{"\\Phi(s) = \\sum_p \\log p \\cdot p^{-s}"}</M>. Comparing it with{" "}
          <M>{"-\\zeta'/\\zeta"}</M> shows that <M>{"\\Phi(s) - 1/(s-1)"}</M> extends holomorphically to Re s ≥ 1, and
          this is exactly where the absence of zeros is needed. Apply Newman&rsquo;s theorem to{" "}
          <M>{"f(t) = \\theta(e^t)e^{-t} - 1"}</M>, which is bounded by Chebyshev. It gives the convergence of{" "}
          <M>{"\\int_1^\\infty (\\theta(x) - x)\\,x^{-2}\\,dx"}</M>. If <M>{"\\theta(x) \\ge \\lambda x"}</M> for some λ &gt; 1
          and arbitrarily large x, the integral over [x, λx] would be bounded below by a fixed positive number, contradicting
          convergence; the case λ &lt; 1 is the same. So <M>{"\\theta(x) \\sim x"}</M>.
        </p>
      </Remark>

      <Definition title="the critical strip">
        <p>
          ζ has no zeros with Re s &gt; 1 by the Euler product, and none on Re s = 1 by the theorem above. Its other
          non-real zeros lie in the critical strip 0 &lt; Re s &lt; 1. The first few, shown in the visualisation, have real
          part ½ and heights 14.13, 21.02, 25.01, …
        </p>
      </Definition>

      <Example title="why zeros matter">
        <p>
          A zero of ζ is a pole of <M>{"\\zeta'/\\zeta"}</M>, whose coefficients are <M>{"\\Lambda(n)"}</M>. A pole at
          1 + it would produce a term <M>{"x^{1+it}"}</M> in ψ(x), an oscillation as large as x itself, and ψ(x)/x could not
          converge. Keeping zeros off the line is exactly what lets the main term x win.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "key",
      rung: "check",
      prompt: <p>Which fact about ζ is the heart of the proof?</p>,
      answer: { kind: "choice", options: ["ζ(1 + it) ≠ 0 for real t ≠ 0", "ζ(2) = π²/6", "ζ has a pole at s = 0", "All zeros of ζ are real"], correct: [0] },
    },
    {
      key: "trig",
      rung: "check",
      prompt: <p>Which identity drives the proof that ζ does not vanish on Re s = 1?</p>,
      answer: { kind: "choice", options: ["3 + 4 cos φ + cos 2φ = 2(1 + cos φ)²", "cos² φ + sin² φ = 1", "cos 2φ = 1 − 2 sin² φ", "e to the iφ = cos φ + i sin φ"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose σ = 0.5. How many zeros of ζ does it find with 0 &lt; t &lt; 40?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "first",
      rung: "apply",
      prompt: <p>What is the height t of the lowest zero on the line σ = ½, to two decimal places?</p>,
      answer: { kind: "numeric", value: 14.13, tolerance: 0.01 },
    },
    {
      key: "order",
      rung: "apply",
      prompt: <p>Suppose ζ(1 + it) = 0. Then ζ(σ)³ ζ(σ + it)⁴ ζ(σ + 2it) tends to 0 at least as fast as (σ − 1) raised to which power?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that 3 + 4 cos φ + cos 2φ ≥ 0 for every real φ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses cos 2φ = 2 cos² φ − 1.",
          "Rewrites the expression as 2 + 4 cos φ + 2 cos² φ = 2(1 + cos φ)².",
          "Concludes that it is a square times 2, so non-negative.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why π(x) ~ x/log x follows from θ(x) ~ x.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes θ(x) ≤ π(x) log x, giving a lower bound for π(x) log x / x.",
          "For an upper bound, uses only primes above x to the power 1 − ε, each with log p ≥ (1 − ε) log x, so θ(x) ≥ (1 − ε) log x (π(x) − x to the 1 − ε).",
          "Lets x → ∞ and then ε → 0. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Knowing that the ratio tends to 1 says nothing about how fast. The size of the error is governed by how far the
        zeros of ζ stay from the line Re s = 1.
      </p>
      <p>Next, error terms.</p>
    </>
  ),
};
