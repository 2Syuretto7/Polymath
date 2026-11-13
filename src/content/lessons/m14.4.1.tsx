import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CyclotomicViz } from "@/components/viz/CyclotomicViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.4.1",
  minutes: 85,
  links: {
    revisits: ["m14.3.4", "m14.1.4", "m11.4.2"],
    foreshadows: ["m14.4.2", "m14.4.3", "m29.2.2"],
  },

  puzzle: (
    <>
      <p>
        Gauss proved at nineteen that a regular 17-gon can be drawn with ruler and compass, but a regular 7-gon cannot. The
        vertices of a regular <M>{"n"}</M>-gon are the <M>{"n"}</M>th roots of unity. What is it about 17 that makes its
        roots of unity constructible?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose n, see the primitive roots, the cyclotomic polynomial, and how each automorphism permutes the roots.</p>
      <CyclotomicViz />
    </>
  ),

  theory: (
    <>
      <Definition title="cyclotomic polynomials">
        <p>
          Let <M>{"\\zeta_n = e^{2\\pi i/n}"}</M>. The primitive <M>{"n"}</M>th roots of unity are{" "}
          <M>{"\\zeta_n^k"}</M> with <M>{"\\gcd(k, n) = 1"}</M>, and the <strong>cyclotomic polynomial</strong> is
        </p>
        <MD>{"\\Phi_n(x) = \\prod_{\\gcd(k, n) = 1} (x - \\zeta_n^k), \\qquad x^n - 1 = \\prod_{d \\mid n} \\Phi_d(x)."}</MD>
        <p>By induction on <M>{"n"}</M>, <M>{"\\Phi_n"}</M> has integer coefficients and degree <M>{"\\varphi(n)"}</M>.</p>
      </Definition>

      <Theorem title="irreducibility">
        <p><M>{"\\Phi_n"}</M> is irreducible over <M>{"\\mathbb{Q}"}</M>, so <M>{"[\\mathbb{Q}(\\zeta_n) : \\mathbb{Q}] = \\varphi(n)"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          For prime <M>{"n = p"}</M>, apply Eisenstein to{" "}
          <M>{"\\Phi_p(x + 1) = ((x+1)^p - 1)/x"}</M>, whose non-leading coefficients are binomial coefficients divisible
          by <M>{"p"}</M>, with constant term <M>{"p"}</M>. In general, one shows that if <M>{"\\zeta"}</M> is a root of an
          irreducible factor <M>{"f"}</M> of <M>{"\\Phi_n"}</M> and <M>{"p \\nmid n"}</M> is prime, then{" "}
          <M>{"\\zeta^p"}</M> is also a root of <M>{"f"}</M>, by reducing mod <M>{"p"}</M> and using{" "}
          <M>{"g(x)^p \\equiv g(x^p)"}</M>. Repeating, every primitive root is a root of <M>{"f"}</M>.
        </p>
      </Proof>

      <Theorem title="the Galois group">
        <p>
          <M>{"\\mathbb{Q}(\\zeta_n)/\\mathbb{Q}"}</M> is Galois, and{" "}
          <M>{"\\mathrm{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q}) \\cong (\\mathbb{Z}/n)^\\times"}</M>, with{" "}
          <M>{"k"}</M> corresponding to <M>{"\\zeta_n \\mapsto \\zeta_n^k"}</M>. In particular it is abelian.
        </p>
      </Theorem>

      <Example title="the 17-gon">
        <p>
          <M>{"(\\mathbb{Z}/17)^\\times"}</M> is cyclic of order 16. It has a chain of subgroups of index 2 at each step,
          so by the Galois correspondence <M>{"\\mathbb{Q}(\\zeta_{17})"}</M> sits on a tower of quadratic extensions. Hence{" "}
          <M>{"\\cos(2\\pi/17)"}</M> is constructible. For <M>{"n = 7"}</M>, the degree <M>{"\\varphi(7) = 6"}</M> has a
          factor 3, and the real subfield <M>{"\\mathbb{Q}(\\cos 2\\pi/7)"}</M> has degree 3.
        </p>
      </Example>

      <Remark title="Kronecker-Weber">
        <p>
          Every finite abelian extension of <M>{"\\mathbb{Q}"}</M> lies inside some cyclotomic field. So cyclotomic fields
          describe all abelian Galois extensions of the rationals, a starting point for class field theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "deg",
      rung: "check",
      prompt: <p>What is the degree of <M>{"\\Phi_{12}"}</M>?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "phi4",
      rung: "check",
      prompt: <p>Which polynomial is <M>{"\\Phi_4"}</M>?</p>,
      answer: { kind: "choice", options: ["x² + 1", "x² − 1", "x⁴ − 1", "x + 1"], correct: [0] },
    },
    {
      key: "phi6",
      rung: "apply",
      prompt: <p>Which polynomial is <M>{"\\Phi_6"}</M>?</p>,
      answer: { kind: "choice", options: ["x² − x + 1", "x² + x + 1", "x⁶ − 1", "x² + 1"], correct: [0] },
    },
    {
      key: "gal",
      rung: "apply",
      prompt: <p>Is <M>{"\\mathrm{Gal}(\\mathbb{Q}(\\zeta_8)/\\mathbb{Q})"}</M> cyclic?</p>,
      answer: { kind: "choice", options: ["No: (ℤ/8)ˣ has every element of order at most 2", "Yes"], correct: [0] },
    },
    {
      key: "gon",
      rung: "apply",
      prompt: <p>What is <M>{"\\varphi(257)"}</M>, the degree that makes the regular 257-gon constructible?</p>,
      answer: { kind: "numeric", value: 256, tolerance: 0 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove that <M>{"\\Phi_p"}</M> is irreducible over <M>{"\\mathbb{Q}"}</M> for prime <M>{"p"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes Φₚ(x) = (xᵖ − 1)/(x − 1) and substitutes x + 1.",
          "Checks the coefficients of Φₚ(x + 1) are binomial coefficients divisible by p, with constant term p.",
          "Applies Eisenstein and notes irreducibility is preserved under x ↦ x + 1.",
        ],
      },
    },
    {
      key: "abelian",
      rung: "stretch",
      prompt: <p>Show that <M>{"\\mathbb{Q}(\\sqrt5) \\subseteq \\mathbb{Q}(\\zeta_5)"}</M>. (Hint: consider <M>{"\\zeta + \\zeta^4"}</M>.)</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets η = ζ + ζ⁴ = 2cos(2π/5) and uses 1 + ζ + ζ² + ζ³ + ζ⁴ = 0 to find η² + η − 1 = 0.",
          "Solves to get η = (−1 + √5)/2, so √5 lies in ℚ(ζ₅).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the cyclotomic polynomials, why Φₙ has degree φ(n) and is irreducible, why the Galois group of ℚ(ζₙ) is (ℤ/n)ˣ, and how this explains Gauss's 17-gon.",

  glimpse: (
    <p>
      The next lesson studies solvable groups, which describe the extensions built by adjoining roots. Algebraic number
      theory later studies how primes split in cyclotomic fields.
    </p>
  ),
};
