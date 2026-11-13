import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CRTGridViz } from "@/components/viz/CRTGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.6.3",
  minutes: 85,
  links: {
    revisits: ["m7.6.2", "m7.2.5", "m11.2.2"],
    foreshadows: ["m7.6.4", "m14.1.3", "m14.5.1"],
  },

  puzzle: (
    <>
      <p>
        Reducing mod 3 sends every integer to <M>{"\\mathbb{Z}_3"}</M> and respects both sums and products; this is why
        casting out nines checks arithmetic. Evaluating a polynomial at <M>{"x = 2"}</M> sends <M>{"\\mathbb{R}[x]"}</M> to{" "}
        <M>{"\\mathbb{R}"}</M>, again respecting both operations. What do such maps forget, and what do they remember? The
        answer is the same as for groups, with ideals in place of normal subgroups.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Send each <M>{"k"}</M> in <M>{"\\mathbb{Z}_{mn}"}</M> to the pair <M>{"(k \\bmod m, k \\bmod n)"}</M>. Move{" "}
        <M>{"k"}</M> and watch the path through the grid, then try <M>{"m"}</M> and <M>{"n"}</M> with a common factor.
      </p>
      <CRTGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="ring homomorphism">
        <p>
          A map <M>{"\\varphi : R \\to S"}</M> between rings is a <strong>homomorphism</strong> if
        </p>
        <MD>{"\\varphi(a + b) = \\varphi(a) + \\varphi(b), \\qquad \\varphi(ab) = \\varphi(a)\\varphi(b), \\qquad \\varphi(1) = 1."}</MD>
        <p>
          Its <strong>kernel</strong> is <M>{"\\ker \\varphi = \\{a : \\varphi(a) = 0\\}"}</M>.
        </p>
      </Definition>

      <Theorem title="kernels are ideals">
        <p>The kernel of a ring homomorphism is an ideal, and every ideal I is the kernel of the quotient map R → R/I.</p>
      </Theorem>

      <Proof>
        <p>
          The kernel is an additive subgroup, as for groups. If <M>{"\\varphi(a) = 0"}</M>, then{" "}
          <M>{"\\varphi(ra) = \\varphi(r) \\cdot 0 = 0"}</M>, so it absorbs multiplication. Conversely,{" "}
          <M>{"a \\mapsto a + I"}</M> is a homomorphism sending exactly the elements of <M>{"I"}</M> to the zero coset.
        </p>
      </Proof>

      <Theorem title="the first isomorphism theorem">
        <p>
          If <M>{"\\varphi : R \\to S"}</M> is a homomorphism, then{" "}
          <M>{"R / \\ker \\varphi \\cong \\operatorname{im} \\varphi"}</M>, by <M>{"a + \\ker\\varphi \\mapsto \\varphi(a)"}</M>.
        </p>
      </Theorem>

      <Example title="the Chinese remainder theorem">
        <p>
          The map <M>{"\\mathbb{Z} \\to \\mathbb{Z}_m \\times \\mathbb{Z}_n"}</M>, <M>{"k \\mapsto (k \\bmod m, k \\bmod n)"}</M>,
          is a ring homomorphism with kernel <M>{"(\\operatorname{lcm}(m, n))"}</M>. When <M>{"\\gcd(m, n) = 1"}</M>, the lcm
          is <M>{"mn"}</M>, so the image has <M>{"mn"}</M> elements and the map is onto:
        </p>
        <MD>{"\\mathbb{Z}_{mn} \\cong \\mathbb{Z}_m \\times \\mathbb{Z}_n \\quad \\text{as rings.}"}</MD>
        <p>
          Comparing units on each side gives <M>{"\\phi(mn) = \\phi(m)\\phi(n)"}</M> for Euler&rsquo;s function.
        </p>
      </Example>

      <Remark title="evaluation">
        <p>
          Evaluation at <M>{"c"}</M>, <M>{"\\mathbb{R}[x] \\to \\mathbb{R}"}</M>, is onto with kernel{" "}
          <M>{"(x - c)"}</M>, so <M>{"\\mathbb{R}[x]/(x - c) \\cong \\mathbb{R}"}</M>: this is the remainder theorem.
          Evaluation at <M>{"i"}</M>, <M>{"\\mathbb{R}[x] \\to \\mathbb{C}"}</M>, has kernel <M>{"(x^2 + 1)"}</M>, and gives{" "}
          <M>{"\\mathbb{R}[x]/(x^2 + 1) \\cong \\mathbb{C}"}</M>. Field theory builds new fields in exactly this way.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "image",
      rung: "check",
      prompt: <p>Under the CRT map ℤ₁₅ → ℤ₃ × ℤ₅, 11 goes to (a, b). What is a + b?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "hom",
      rung: "check",
      prompt: <p>Which of these are ring homomorphisms? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "ℤ → ℤ₅, k ↦ k mod 5",
          "ℝ[x] → ℝ, p ↦ p(3)",
          "ℤ → ℤ, k ↦ 2k",
          "ℂ → ℂ, z ↦ complex conjugate of z",
        ],
        correct: [0, 1, 3],
      },
    },
    {
      key: "solve",
      rung: "apply",
      prompt: <p>Find the k in ℤ₁₅ with k ≡ 2 mod 3 and k ≡ 4 mod 5.</p>,
      answer: { kind: "numeric", value: 14 },
    },
    {
      key: "hit",
      rung: "apply",
      prompt: <p>The map ℤ → ℤ₄ × ℤ₆, k ↦ (k mod 4, k mod 6), has image of what size?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "kernel",
      rung: "apply",
      prompt: <p>What is the kernel of evaluation at 2, from ℝ[x] to ℝ?</p>,
      answer: {
        kind: "choice",
        options: ["The constant polynomials", "The ideal (x − 2)", "The ideal (x + 2)", "Only the zero polynomial"],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the kernel of a ring homomorphism is an ideal. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows the kernel is closed under addition and negatives and contains 0, using additivity.",
          "Shows that if φ(a) = 0 then φ(ra) = φ(r)φ(a) = 0.",
          "Concludes the kernel is an ideal.",
        ],
      },
    },
    {
      key: "phi",
      rung: "stretch",
      prompt: <p>Use the Chinese remainder theorem to explain why φ(15) = φ(3)φ(5), where φ is Euler&rsquo;s function.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes φ(n) counts the units of ℤₙ.",
          "Notes a ring isomorphism ℤ₁₅ ≅ ℤ₃ × ℤ₅ matches units with units, and the units of a product are pairs of units.",
          "Concludes φ(15) = 2 × 4 = 8. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a ring homomorphism is, why kernels are ideals, what the first isomorphism theorem says for rings, and how it proves the Chinese remainder theorem and identifies ℝ[x]/(x² + 1) with ℂ.",

  glimpse: (
    <p>
      The next lesson asks when a quotient ring is an integral domain or a field, which leads to prime and maximal ideals.
      In field theory, quotients of polynomial rings build splitting fields, and in module theory homomorphisms and their
      kernels return in a more general setting.
    </p>
  ),
};
