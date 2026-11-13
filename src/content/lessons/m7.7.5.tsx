import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { IrreducibleTestViz } from "@/components/viz/IrreducibleTestViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.7.5",
  minutes: 85,
  links: {
    revisits: ["m7.7.4", "m7.7.3", "m11.2.1"],
    foreshadows: ["m14.1.2", "m14.1.4", "m14.2.1"],
  },

  puzzle: (
    <>
      <p>
        Over the rationals, is <M>{"x^4 + 1"}</M> a product of smaller polynomials? It has no rational roots, but that only
        rules out linear factors; it might be a product of two quadratics. Checking every possible pair of factors is
        hopeless in general. Yet whether a polynomial is irreducible decides whether a number like{" "}
        <M>{"\\sqrt[3]{2}"}</M> can be constructed with ruler and compass. We need tests.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a polynomial and a prime. See whether Eisenstein&rsquo;s criterion applies, and what the polynomial looks like
        mod <M>{"p"}</M>.
      </p>
      <IrreducibleTestViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the rational root test">
        <p>
          If <M>{"r/s"}</M>, in lowest terms, is a root of{" "}
          <M>{"a_nx^n + \\cdots + a_0 \\in \\mathbb{Z}[x]"}</M>, then <M>{"r \\mid a_0"}</M> and <M>{"s \\mid a_n"}</M>. A
          polynomial of degree 2 or 3 over a field is irreducible exactly when it has no root.
        </p>
      </Theorem>

      <Theorem title="Gauss's lemma">
        <p>
          A polynomial in <M>{"\\mathbb{Z}[x]"}</M> that factors over <M>{"\\mathbb{Q}"}</M> already factors over{" "}
          <M>{"\\mathbb{Z}"}</M>, into factors of the same degrees.
        </p>
      </Theorem>

      <Theorem title="Eisenstein's criterion">
        <p>
          Let <M>{"f = a_nx^n + \\cdots + a_0 \\in \\mathbb{Z}[x]"}</M>. If a prime <M>{"p"}</M> divides{" "}
          <M>{"a_0, \\dots, a_{n-1}"}</M>, does not divide <M>{"a_n"}</M>, and <M>{"p^2"}</M> does not divide{" "}
          <M>{"a_0"}</M>, then <M>{"f"}</M> is irreducible over <M>{"\\mathbb{Q}"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          By Gauss&rsquo;s lemma, suppose <M>{"f = gh"}</M> in <M>{"\\mathbb{Z}[x]"}</M> with both degrees positive. Reduce
          mod <M>{"p"}</M>: <M>{"\\bar f = \\bar a_n x^n"}</M>. Since <M>{"\\mathbb{Z}_p[x]"}</M> has unique factorisation,{" "}
          <M>{"\\bar g"}</M> and <M>{"\\bar h"}</M> are constant multiples of powers of <M>{"x"}</M>, both of positive degree,
          so both constant terms of <M>{"g"}</M> and <M>{"h"}</M> are divisible by <M>{"p"}</M>. Then <M>{"p^2"}</M> divides
          their product <M>{"a_0"}</M>, a contradiction.
        </p>
      </Proof>

      <Example title="cyclotomic polynomials">
        <p>
          For a prime <M>{"p"}</M>, <M>{"\\Phi_p(x) = x^{p-1} + \\cdots + x + 1"}</M> is irreducible. Eisenstein does not
          apply directly, but substitute <M>{"x + 1"}</M>: <M>{"\\Phi_p(x + 1) = ((x + 1)^p - 1)/x"}</M>, whose coefficients
          are the binomial coefficients <M>{"\\binom{p}{k}"}</M>, all divisible by <M>{"p"}</M> except the top one, with
          constant term exactly <M>{"p"}</M>. A factorisation of <M>{"\\Phi_p(x)"}</M> would give one of{" "}
          <M>{"\\Phi_p(x + 1)"}</M>.
        </p>
      </Example>

      <Remark title="reduction mod p, and its limits">
        <p>
          If the leading coefficient survives mod <M>{"p"}</M> and the reduction is irreducible, so is <M>{"f"}</M>. So{" "}
          <M>{"x^3 + x + 1"}</M> is irreducible over <M>{"\\mathbb{Q}"}</M>, having no root mod 2. But{" "}
          <M>{"x^4 + 1"}</M> is irreducible over <M>{"\\mathbb{Q}"}</M> although it factors mod every prime, so no single
          reduction can prove it. Substituting <M>{"x + 1"}</M> and applying Eisenstein at 2 does.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "eis",
      rung: "check",
      prompt: <p>At which prime does Eisenstein&rsquo;s criterion show x³ − 6x + 3 irreducible?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "cand",
      rung: "check",
      prompt: <p>By the rational root test, which of these could be roots of 2x³ − x + 3? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["3/2", "2/3", "−1", "1/2", "5"], correct: [0, 2, 3] },
    },
    {
      key: "irr",
      rung: "apply",
      prompt: <p>Which of these are irreducible over ℚ? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["x³ − 2", "x² − 4", "x⁴ − 5x² + 6", "x⁵ + 10x + 5", "x² + 1"], correct: [0, 3, 4] },
    },
    {
      key: "mod2",
      rung: "apply",
      prompt: <p>How many roots does x³ + x + 1 have in ℤ₂?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "shift",
      rung: "apply",
      prompt: (
        <p>
          <M>{"\\Phi_5(x + 1) = x^4 + 5x^3 + 10x^2 + 10x + 5"}</M>. What is its constant term divided by the prime used in
          Eisenstein&rsquo;s criterion?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that x³ + x + 1 is irreducible over ℚ. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a cubic factors over ℚ only if it has a linear factor, that is, a rational root.",
          "Uses the rational root test: the only candidates are ±1, and f(1) = 3, f(−1) = −1.",
          "Concludes there is no rational root, so the cubic is irreducible. Reducing mod 2 is equally fine.",
        ],
      },
    },
    {
      key: "x4",
      rung: "stretch",
      prompt: <p>Show that x⁴ + 1 is irreducible over ℚ by substituting x + 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes (x + 1)⁴ + 1 = x⁴ + 4x³ + 6x² + 4x + 2.",
          "Applies Eisenstein at 2: 2 divides 4, 6, 4, 2, not the leading 1, and 4 does not divide 2.",
          "Notes a factorisation of f(x) would give one of f(x + 1), so x⁴ + 1 is irreducible. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to test a polynomial over ℚ for irreducibility: the rational root test for low degree, Gauss's lemma, Eisenstein's criterion and why it works, substitution as in the cyclotomic polynomials, and reduction mod p with its limits.",

  glimpse: (
    <p>
      This completes the first course in abstract algebra. In the second, irreducible polynomials define field extensions,
      whose degrees decide which ruler-and-compass constructions are possible, and they build the finite fields of every
      prime power order.
    </p>
  ),
};
