import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ProductFormulaViz } from "@/components/viz/ProductFormulaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m29.4.2",
  minutes: 90,
  links: {
    revisits: ["m29.4.1", "m29.2.2", "m8.3.1"],
    foreshadows: ["m29.4.3", "m29.5.1", "m29.5.3"],
  },

  puzzle: (
    <>
      <p>
        12/5 is large in the usual sense, small at 2 and 3, and large at 5. Multiply its sizes at all these places:
        12/5 × 1/4 × 1/3 × 5 = 1. Is that a coincidence? And are the real and p-adic sizes the only ways to measure a
        rational number?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a fraction, and compare its absolute values at every place.</p>
      <ProductFormulaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="absolute values and valuations">
        <p>
          An <strong>absolute value</strong> on a field K is a map to [0, ∞) that is zero only at 0, multiplicative, and
          satisfies the triangle inequality. Two are <strong>equivalent</strong> if one is a positive power of the other,
          giving the same topology. A non-archimedean absolute value comes from a <strong>valuation</strong> v with{" "}
          <M>{"|x| = c^{-v(x)}"}</M> for some c &gt; 1.
        </p>
      </Definition>

      <Theorem title="Ostrowski’s theorem (1916)">
        <p>
          Every non-trivial absolute value on ℚ is equivalent to the usual one, <M>{"|\\cdot|_\\infty"}</M>, or to a p-adic
          one <M>{"|\\cdot|_p"}</M> for exactly one prime p. The equivalence classes are the <strong>places</strong> of ℚ.
        </p>
      </Theorem>

      <Theorem title="the product formula">
        <p>
          For every non-zero rational x, <M>{"\\prod_{v} |x|_v = 1"}</M>, the product over all places, with only finitely
          many factors different from 1. It suffices to check it for −1 and for primes q, where{" "}
          <M>{"|q|_\\infty = q"}</M>, <M>{"|q|_q = 1/q"}</M> and every other factor is 1.
        </p>
      </Theorem>

      <Example title="places of a number field">
        <p>
          For a number field K, the places are the non-zero prime ideals P of <M>{"\\mathcal{O}_K"}</M>, each with{" "}
          <M>{"|x|_P = N(P)^{-v_P(x)}"}</M>, together with the real embeddings and the pairs of complex ones. The
          completions <M>{"K_P"}</M> are finite extensions of <M>{"\\mathbb{Q}_p"}</M>, and{" "}
          <M>{"K \\otimes \\mathbb{Q}_p \\cong \\prod_{P \\mid p} K_P"}</M>, with <M>{"[K_P : \\mathbb{Q}_p] = e_P f_P"}</M>.
          The product formula holds again with suitably normalised absolute values.
        </p>
      </Example>

      <Remark title="local and global">
        <p>
          Studying K one place at a time is <strong>local</strong> number theory; the completions are easier, since a
          question in <M>{"\\mathbb{Q}_p"}</M> often reduces to finitely many congruences. The local-global principle asks
          when local solvability everywhere implies a global solution. It holds for quadratic forms (Hasse-Minkowski) and
          fails in general: Selmer&rsquo;s curve <M>{"3x^3 + 4y^3 + 5z^3 = 0"}</M> has points in ℝ and every{" "}
          <M>{"\\mathbb{Q}_p"}</M>, but no non-zero rational point.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ostrowski",
      rung: "check",
      prompt: <p>What does Ostrowski&rsquo;s theorem say?</p>,
      answer: { kind: "choice", options: ["Every non-trivial absolute value on ℚ is equivalent to the usual one or to a p-adic one", "There is only one absolute value on ℚ", "Every absolute value is archimedean", "p-adic absolute values are all equivalent"], correct: [0] },
    },
    {
      key: "product",
      rung: "check",
      prompt: <p>What does the product formula say for non-zero rational x?</p>,
      answer: { kind: "choice", options: ["The product of |x| over all places is 1", "The sum of |x| over all places is 0", "|x|ₚ = 1 for all p", "|x|∞ is the product of the |x|ₚ"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set x = 12/5. What is |x|₅?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "local",
      rung: "apply",
      prompt: <p>A prime p splits into two primes in a quadratic field K. What is K ⊗ ℚₚ?</p>,
      answer: { kind: "choice", options: ["ℚₚ × ℚₚ", "A quadratic extension of ℚₚ", "ℚₚ", "ℝ × ℝ"], correct: [0] },
    },
    {
      key: "hm",
      rung: "apply",
      prompt: <p>For which objects does the local-global principle hold, by the Hasse-Minkowski theorem?</p>,
      answer: { kind: "choice", options: ["Quadratic forms over ℚ", "All cubic curves", "All polynomial equations", "None"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the product formula for non-zero rational numbers.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes both sides are multiplicative in x, so it suffices to check x = −1 and x = a prime q.",
          "Checks that every absolute value of −1 is 1.",
          "For a prime q, finds |q|∞ = q, the q-adic value 1/q, and |q|ₚ = 1 for p ≠ q, with product 1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can no non-archimedean absolute value on ℚ satisfy |2| &gt; 1?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that |1| = 1 and the ultrametric inequality gives |n| ≤ 1 for every integer n by induction.",
          "Concludes |2| ≤ 1.",
          "Relates this to the integers lying in the unit ball. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        In ℚₚ, a root of a polynomial modulo p can often be refined, digit by digit, into an exact p-adic root, much as
        Newton&rsquo;s method refines an approximate real root.
      </p>
      <p>Next, Hensel&rsquo;s lemma.</p>
    </>
  ),
};
