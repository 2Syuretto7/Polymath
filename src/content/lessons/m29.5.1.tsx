import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { IdealCountViz } from "@/components/viz/IdealCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m29.5.1",
  minutes: 90,
  links: {
    revisits: ["m29.3.3", "m29.3.2", "m11.5.2"],
    foreshadows: ["m29.5.2", "m29.5.3", "m30.6.3"],
  },

  puzzle: (
    <>
      <p>
        Count the Gaussian integers a + bi, up to units, with a² + b² at most a million. The answer is close to 785,398, and
        785,398 is very close to a million times π/4. Why should π appear when counting ideals, and what else can such a
        count reveal?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a quadratic field, and watch the number of ideals of norm at most X, divided by X, settle down.</p>
      <IdealCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Dedekind zeta function">
        <p>
          For a number field K, the <strong>Dedekind zeta function</strong> is{" "}
          <M>{"\\zeta_K(s) = \\sum_{I} N(I)^{-s} = \\prod_{P} \\bigl(1 - N(P)^{-s}\\bigr)^{-1}"}</M>, the sum over non-zero
          ideals of the ring of integers and the product over non-zero prime ideals, converging for Re s &gt; 1. The Euler
          product is unique factorisation of ideals in analytic form. For K = ℚ it is the Riemann zeta function.
        </p>
      </Definition>

      <Theorem title="the analytic class number formula">
        <p>
          <M>{"\\zeta_K"}</M> extends to a meromorphic function on ℂ with a single simple pole at s = 1, where the residue is{" "}
          <M>{"\\displaystyle \\frac{2^{r_1} (2\\pi)^{r_2}\\, h\\, R}{w \\sqrt{|d|}}"}</M>, with <M>{"r_1"}</M> real and{" "}
          <M>{"r_2"}</M> pairs of complex embeddings, class number h, regulator R, w roots of unity and discriminant d.
          Equivalently, the number of ideals of norm at most X is asymptotic to this residue times X.
        </p>
      </Theorem>

      <Example title="quadratic fields">
        <p>
          For a quadratic field of discriminant D with character <M>{"\\chi(n) = \\left(\\frac{D}{n}\\right)"}</M>, the
          Euler factors at split, inert and ramified primes give <M>{"\\zeta_K(s) = \\zeta(s) L(s, \\chi)"}</M>, and the
          number of ideals of norm n is the sum of χ(d) over divisors d of n. For an imaginary field the formula becomes{" "}
          <M>{"h = \\dfrac{w \\sqrt{|D|}}{2\\pi} L(1, \\chi)"}</M>. For ℚ(i), Leibniz&rsquo;s series gives{" "}
          <M>{"L(1, \\chi) = 1 - \\tfrac13 + \\tfrac15 - \\cdots = \\tfrac{\\pi}{4}"}</M>, and h = 4 · 2 · (π/4)/(2π) = 1.
        </p>
      </Example>

      <Remark title="primes and densities">
        <p>
          The pole at s = 1 says that prime ideals are plentiful: the number of prime ideals of norm at most X is asymptotic
          to X/log X, the prime ideal theorem. Since <M>{"L(1, \\chi) \\neq 0"}</M>, exactly half the primes split in a
          quadratic field, in the sense of density. Dirichlet&rsquo;s theorem on primes in arithmetic progressions comes
          from the same non-vanishing for all characters modulo m.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "euler",
      rung: "check",
      prompt: <p>The Euler product for the Dedekind zeta function runs over what?</p>,
      answer: { kind: "choice", options: ["The non-zero prime ideals of the ring of integers", "The rational primes only", "The units of the field", "The embeddings of the field"], correct: [0] },
    },
    {
      key: "residue",
      rung: "check",
      prompt: <p>Which invariants appear in the residue at s = 1?</p>,
      answer: { kind: "choice", options: ["Class number, regulator, roots of unity, discriminant and the numbers of real and complex embeddings", "Only the degree of the field", "Only the class number", "The Galois group"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what limit does the ratio approach for ℚ(√−5), to two decimal places?</p>,
      answer: { kind: "numeric", value: 1.4, tolerance: 0.01 },
    },
    {
      key: "norm5",
      rung: "apply",
      prompt: <p>How many ideals of norm 5 are there in ℤ[i]?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "h3",
      rung: "apply",
      prompt: <p>For D = −3, with w = 6 and L(1, χ) = π/(3√3), what class number does the formula give?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>In a quadratic field, show that the number of ideals of norm p, for a prime p, is 1 + χ(p).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that an ideal of norm p is prime, lying above p with residue degree 1.",
          "Counts: two such primes if p splits, one if p ramifies, none if p is inert (the prime above has norm p²).",
          "Matches these with χ(p) = 1, 0 and −1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the Euler factors of a quadratic field multiply out to give ζ(s)L(s, χ).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Split p gives (1 − p⁻ˢ)⁻², which is (1 − p⁻ˢ)⁻¹(1 − χ(p)p⁻ˢ)⁻¹ with χ(p) = 1.",
          "Inert p gives (1 − p⁻²ˢ)⁻¹ = (1 − p⁻ˢ)⁻¹(1 + p⁻ˢ)⁻¹, matching χ(p) = −1; ramified p gives (1 − p⁻ˢ)⁻¹, matching χ(p) = 0.",
          "Multiplies over all p. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Whether a prime splits in a quadratic field depends only on the prime modulo the discriminant, as it does in a
        cyclotomic field. That is no accident: every quadratic field lies inside a cyclotomic one, and so does every abelian
        extension of ℚ.
      </p>
      <p>Next, the Kronecker-Weber theorem.</p>
    </>
  ),
};
