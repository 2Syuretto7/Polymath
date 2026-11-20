import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { NormTraceViz } from "@/components/viz/NormTraceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m29.1.2",
  minutes: 90,
  links: {
    revisits: ["m29.1.1", "m14.3.3", "m14.1.1"],
    foreshadows: ["m29.2.3", "m29.3.1", "m29.3.2"],
  },

  puzzle: (
    <>
      <p>
        Fermat found that an odd prime is a sum of two squares exactly when it leaves remainder 1 on division by 4. In ℤ[i],
        a² + b² is (a + bi)(a − bi). Which integers can be written as such a product of conjugates, and how does that
        question look in other rings of integers?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a field and an element, read its trace and norm, and see which integers up to 60 are norms.</p>
      <NormTraceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="embeddings, norm and trace">
        <p>
          A number field K of degree n has exactly n embeddings <M>{"\\sigma_1, \\dots, \\sigma_n"}</M> into ℂ. For α in K,
          the <strong>norm</strong> and <strong>trace</strong> are{" "}
          <M>{"N(\\alpha) = \\prod_i \\sigma_i(\\alpha)"}</M> and <M>{"\\operatorname{Tr}(\\alpha) = \\sum_i \\sigma_i(\\alpha)"}</M>,
          equivalently the determinant and trace of multiplication by α as a ℚ-linear map of K. The norm is multiplicative,
          the trace additive, and both are integers when α lies in <M>{"\\mathcal{O}_K"}</M>.
        </p>
      </Definition>

      <Theorem title="units">
        <p>
          α in <M>{"\\mathcal{O}_K"}</M> is a unit exactly when <M>{"N(\\alpha) = \\pm 1"}</M>. In ℚ(√2), 1 + √2 has norm −1,
          so its powers give infinitely many units.
        </p>
      </Theorem>

      <Definition title="the discriminant">
        <p>
          For a basis <M>{"\\alpha_1, \\dots, \\alpha_n"}</M> of K over ℚ,{" "}
          <M>{"\\operatorname{disc}(\\alpha_1, \\dots, \\alpha_n) = \\det(\\sigma_i(\\alpha_j))^2 = \\det(\\operatorname{Tr}(\\alpha_i\\alpha_j))"}</M>.
          Changing an integral basis multiplies it by the square of a determinant ±1, so the{" "}
          <strong>discriminant</strong> <M>{"d_K"}</M> of an integral basis depends only on K. For a sublattice of index m,
          the discriminant is <M>{"m^2 d_K"}</M>.
        </p>
      </Definition>

      <Example title="quadratic fields">
        <p>
          For squarefree d, <M>{"d_K = d"}</M> if d ≡ 1 (mod 4) and <M>{"d_K = 4d"}</M> otherwise. So ℚ(i) has discriminant
          −4, ℚ(√−3) has −3 and ℚ(√−5) has −20. The basis 1, √5 of ℚ(√5) has discriminant 20 = 2² · 5, reflecting index 2
          in the true ring of integers.
        </p>
      </Example>

      <Remark title="what the discriminant knows">
        <p>
          A basis of algebraic integers whose discriminant is squarefree must be an integral basis. Later the discriminant
          will reappear twice: the primes dividing it are exactly the ramified primes, and Minkowski&rsquo;s theorem shows{" "}
          <M>{"|d_K| > 1"}</M> for every K other than ℚ.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "norm",
      rung: "check",
      prompt: <p>What is the norm of α in a number field?</p>,
      answer: { kind: "choice", options: ["The product of its images under all the embeddings", "The sum of its images under all the embeddings", "Its absolute value", "Its degree over ℚ"], correct: [0] },
    },
    {
      key: "unit",
      rung: "check",
      prompt: <p>When is an algebraic integer α a unit of the ring of integers?</p>,
      answer: { kind: "choice", options: ["When N(α) = ±1", "When Tr(α) = 0", "When |α| = 1", "When α is rational"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose d = −1. How many of the integers from 1 to 60 are norms?</p>,
      answer: { kind: "numeric", value: 27, tolerance: 0 },
    },
    {
      key: "disc",
      rung: "apply",
      prompt: <p>What is the discriminant of ℚ(√−5)?</p>,
      answer: { kind: "numeric", value: -20, tolerance: 0 },
    },
    {
      key: "n322",
      rung: "apply",
      prompt: <p>What is the norm of 3 + 2√2 in ℚ(√2)?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that α in the ring of integers is a unit exactly when N(α) = ±1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "If αβ = 1 with β an algebraic integer, uses multiplicativity to get N(α)N(β) = 1 with both integers, so N(α) = ±1.",
          "Conversely, writes β = N(α)/α as ± the product of the other conjugates of α, an algebraic integer.",
          "Notes β lies in K, so β is in the ring of integers and αβ = ±1, making α a unit.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The basis 1, √d of ℚ(√d) has discriminant 4d. Why is the discriminant of the field only d when d ≡ 1 (mod 4)?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that ℤ[√d] then has index 2 in the ring of integers ℤ[(1 + √d)/2].",
          "Uses that a sublattice of index m has discriminant m² times the field discriminant.",
          "Concludes that 4d is 2² times the field discriminant, which is therefore d. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Unique factorisation into elements fails in ℤ[√−5], where 6 = 2 · 3 = (1 + √−5)(1 − √−5). Kummer and Dedekind
        rescued it by factorising ideals instead of numbers.
      </p>
      <p>Next, unique factorisation of ideals.</p>
    </>
  ),
};
