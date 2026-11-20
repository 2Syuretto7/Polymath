import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { HenselLiftViz } from "@/components/viz/HenselLiftViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m29.4.3",
  minutes: 90,
  links: {
    revisits: ["m29.4.2", "m29.4.1", "m11.5.1"],
    foreshadows: ["m29.5.1", "m29.5.3", "m30.2.3"],
  },

  puzzle: (
    <>
      <p>
        3² = 9 leaves remainder 2 on division by 7. Can you find a number whose square leaves remainder 2 on division by
        49? By 343? And if you can keep going for ever, what have you found?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a prime, an equation and a starting root, and watch the root gain one digit at each step.</p>
      <HenselLiftViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Hensel’s lemma">
        <p>
          Let f be a polynomial with coefficients in ℤₚ, and let a in ℤₚ satisfy <M>{"f(a) \\equiv 0 \\pmod p"}</M> and{" "}
          <M>{"f'(a) \\not\\equiv 0 \\pmod p"}</M>. Then f has exactly one root α in ℤₚ with{" "}
          <M>{"\\alpha \\equiv a \\pmod p"}</M>.
        </p>
      </Theorem>

      <Definition title="the lifting step">
        <p>
          If <M>{"f(a) \\equiv 0 \\pmod{p^k}"}</M>, Taylor expansion gives{" "}
          <M>{"f(a + tp^k) \\equiv f(a) + tp^k f'(a) \\pmod{p^{k+1}}"}</M>, since the remaining terms are divisible by{" "}
          <M>{"p^{2k}"}</M>. Writing <M>{"f(a) = p^k c"}</M>, the condition becomes <M>{"c + t f'(a) \\equiv 0 \\pmod p"}</M>,
          which has exactly one solution t modulo p because f&prime;(a) is invertible modulo p. Repeating gives a Cauchy
          sequence whose limit is α. Equivalently, Newton&rsquo;s iteration <M>{"a_{n+1} = a_n - f(a_n)/f'(a_n)"}</M>{" "}
          converges p-adically, doubling the number of correct digits at each step.
        </p>
      </Definition>

      <Example title="square roots">
        <p>
          Since 3² ≡ 2 modulo 7 and 2 · 3 is not divisible by 7, 2 has a square root in ℤ₇ beginning 3, 10, 108, 2166,
          and so on. Since 2² ≡ −1 modulo 5, −1 is a square in ℚ₅, so ℚ₅ contains a square root of −1 though ℝ does not. For
          odd p, a p-adic unit is a square exactly when it is a square modulo p. For p = 2 the derivative 2x is never a unit,
          and a stronger form is needed: a 2-adic unit is a square exactly when it is 1 modulo 8.
        </p>
      </Example>

      <Example title="roots of unity">
        <p>
          The polynomial <M>{"x^{p-1} - 1"}</M> has p − 1 distinct roots modulo p, by Fermat&rsquo;s little theorem, and
          its derivative <M>{"(p-1)x^{p-2}"}</M> is a unit at each of them. So ℤₚ contains p − 1 distinct (p − 1)-th roots
          of unity, one lifting each non-zero residue: the Teichmüller representatives.
        </p>
      </Example>

      <Remark title="a stronger form">
        <p>
          The same conclusion holds under the weaker hypothesis <M>{"|f(a)|_p < |f'(a)|_p^2"}</M>. Hensel&rsquo;s lemma
          makes questions in ℚₚ finite: whether an equation has a p-adic solution can be decided by checking congruences
          modulo a high enough power of p. This is what makes the local side of local-global arguments computable.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hyp",
      rung: "check",
      prompt: <p>Besides f(a) ≡ 0 modulo p, what does Hensel&rsquo;s lemma require of a?</p>,
      answer: { kind: "choice", options: ["f′(a) is not divisible by p", "f′(a) is divisible by p", "a is divisible by p", "f has degree 2"], correct: [0] },
    },
    {
      key: "sq5",
      rung: "check",
      prompt: <p>Does −1 have a square root in ℚ₅?</p>,
      answer: { kind: "choice", options: ["Yes, since 2² ≡ −1 modulo 5 and Hensel’s lemma lifts it", "No, since squares are never negative", "Only in ℚ₂", "Only if 5 ≡ 3 modulo 4"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take p = 7 and x² = 2, starting at 3. What is the lifted root modulo 49?</p>,
      answer: { kind: "numeric", value: 10, tolerance: 0 },
    },
    {
      key: "teich",
      rung: "apply",
      prompt: <p>How many distinct 6th roots of unity does ℤ₇ contain?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "three",
      rung: "apply",
      prompt: <p>Is 3 a square in ℚ₇?</p>,
      answer: { kind: "choice", options: ["No, since 3 is not a square modulo 7", "Yes, by Hensel’s lemma", "Yes, since every unit is a square", "It depends on the starting root"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Suppose f(a) ≡ 0 modulo pᵏ with k ≥ 1 and f′(a) not divisible by p. Show there is exactly one t modulo p with f(a + tpᵏ) ≡ 0 modulo pᵏ⁺¹.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands f(a + tpᵏ) as f(a) + tpᵏ f′(a) plus terms divisible by p²ᵏ, which vanish modulo pᵏ⁺¹.",
          "Writes f(a) = pᵏc and reduces the condition to c + t f′(a) ≡ 0 modulo p.",
          "Uses that f′(a) is invertible modulo p to find exactly one solution t.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why x² + 1 has a root in ℚ₅ but none in ℚ₃.</p>,
      answer: {
        kind: "written",
        rubric: [
          "For p = 5, notes 2² + 1 ≡ 0 modulo 5 with derivative 4 a unit, so Hensel’s lemma gives a root.",
          "For p = 3, notes a root would lie in ℤ₃ and reduce to a root modulo 3, but the squares modulo 3 are 0 and 1.",
          "Concludes. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Each completion sees one prime at a time. One function gathers every prime ideal of a number field together, and its
        behaviour at a single point records the class number and the regulator.
      </p>
      <p>Next, Dedekind zeta functions.</p>
    </>
  ),
};
