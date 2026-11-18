import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { IntegralCheckViz } from "@/components/viz/IntegralCheckViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.3.1",
  minutes: 90,
  links: {
    revisits: ["m24.2.4", "m7.7.3", "m14.5.2"],
    foreshadows: ["m24.3.2", "m24.3.3", "m24.4.1"],
  },

  puzzle: (
    <>
      <p>
        The golden ratio (1 + √5)/2 is not in ℤ[√5], yet it satisfies x² = x + 1, an equation with integer coefficients and
        leading coefficient 1, just like √5 does. Should it count as an integer of ℚ(√5)? And if α and β each satisfy such an
        equation, must α + β and αβ too?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test seven algebraic numbers: which are roots of monic polynomials with integer coefficients?</p>
      <IntegralCheckViz />
    </>
  ),

  theory: (
    <>
      <Definition title="integral elements">
        <p>
          Let <M>{"A \\subseteq B"}</M> be commutative rings. An element <M>{"b \\in B"}</M> is <strong>integral</strong> over{" "}
          <M>A</M> if <M>{"b^n + a_{n-1} b^{n-1} + \\cdots + a_0 = 0"}</M> for some <M>{"a_i \\in A"}</M>. <M>B</M> is{" "}
          <strong>integral over</strong> <M>A</M> if every element is. The <strong>integral closure</strong> of <M>A</M> in{" "}
          <M>B</M> is the set of elements of <M>B</M> integral over <M>A</M>; a domain is <strong>integrally closed</strong>{" "}
          if it equals its integral closure in its field of fractions.
        </p>
      </Definition>

      <Theorem title="the module criterion">
        <p>
          For <M>{"b \\in B"}</M>, these are equivalent: <M>b</M> is integral over <M>A</M>; <M>{"A[b]"}</M> is a finitely
          generated <M>A</M>-module; <M>b</M> lies in a subring of <M>B</M> that is a finitely generated <M>A</M>-module.
          The proof of the last step is the determinant trick: if <M>b</M> multiplies generators{" "}
          <M>{"m_1, \\ldots, m_n"}</M> by a matrix <M>T</M> over <M>A</M>, then <M>{"\\det(bI - T)"}</M> kills every{" "}
          <M>{"m_i"}</M>, hence kills 1, and expanding it gives a monic equation for <M>b</M>.
        </p>
      </Theorem>

      <Theorem title="consequences">
        <p>
          If <M>b</M> and <M>c</M> are integral, then <M>{"A[b, c]"}</M> is finitely generated as a module, so{" "}
          <M>{"b + c"}</M> and <M>{"bc"}</M> are integral: the integral closure is a ring. Integrality is transitive: if{" "}
          <M>C</M> is integral over <M>B</M> and <M>B</M> over <M>A</M>, then <M>C</M> is integral over <M>A</M>. And every
          unique factorisation domain is integrally closed, by the rational root argument.
        </p>
      </Theorem>

      <Example title="rings of integers">
        <p>
          The <strong>ring of integers</strong> of a number field <M>K</M> is the integral closure of ℤ in <M>K</M>. For{" "}
          <M>{"K = \\mathbb{Q}(\\sqrt{d})"}</M> with <M>d</M> square-free, it is <M>{"\\mathbb{Z}[\\sqrt{d}]"}</M> when{" "}
          <M>{"d \\equiv 2, 3 \\pmod 4"}</M>, and <M>{"\\mathbb{Z}[(1 + \\sqrt{d})/2]"}</M> when <M>{"d \\equiv 1 \\pmod 4"}</M>.
          So the golden ratio is an integer of ℚ(√5), and (1 + √3)/2 is not an integer of ℚ(√3).
        </p>
      </Example>

      <Remark title="Noether normalisation">
        <p>
          Every finitely generated algebra <M>B</M> over a field <M>k</M> is integral over a polynomial ring{" "}
          <M>{"k[y_1, \\ldots, y_d]"}</M> inside it. Geometrically, every variety maps onto affine <M>d</M>-space with finite
          fibres, and <M>d</M> is its dimension. This gives a quick route to Zariski&rsquo;s lemma and the Nullstellensatz.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is b integral over A?</p>,
      answer: { kind: "choice", options: ["When b is a root of a monic polynomial with coefficients in A", "When b is in A", "When b is a unit", "When b is a root of any non-zero polynomial over A"], correct: [0] },
    },
    {
      key: "module",
      rung: "check",
      prompt: <p>Which condition on A[b] is equivalent to b being integral over A?</p>,
      answer: { kind: "choice", options: ["A[b] is a finitely generated A-module", "A[b] is a field", "A[b] is Noetherian", "A[b] equals A"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>How many of the seven numbers in the visualisation are integral over ℤ?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "ring",
      rung: "apply",
      prompt: <p>What is the ring of integers of ℚ(√−3)?</p>,
      answer: { kind: "choice", options: ["ℤ[(1 + √−3)/2]", "ℤ[√−3]", "ℤ", "ℚ(√−3)"], correct: [0] },
    },
    {
      key: "closed",
      rung: "apply",
      prompt: <p>Which of these rings is integrally closed?</p>,
      answer: { kind: "choice", options: ["ℤ, since it is a unique factorisation domain", "ℤ[√5], since it contains √5", "ℤ[√−3]", "ℤ[2i]"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a rational number integral over ℤ is an integer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the number as p/q in lowest terms and substitutes into a monic equation with integer coefficients.",
          "Multiplies through by qⁿ, so that every term except pⁿ is a multiple of q, and hence q divides pⁿ.",
          "Concludes q = ±1, since p and q share no prime factor.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show directly that √2 + √3 is integral over ℤ by finding a monic polynomial it satisfies.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Squares to get x² = 5 + 2√6, so (x² − 5)² = 24.",
          "Concludes that x⁴ − 10x² + 1 = 0, a monic integer polynomial.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        In an integral extension, the primes of the bigger ring sit over the primes of the smaller one in a disciplined way:
        every prime has something above it, chains lift, and nothing above a prime is nested.
      </p>
      <p>
        Next, the Cohen-Seidenberg theorems: lying over, incomparability, going up and going down, and why integral
        extensions preserve dimension.
      </p>
    </>
  ),
};
