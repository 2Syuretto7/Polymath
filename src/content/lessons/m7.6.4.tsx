import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MultMapViz } from "@/components/viz/MultMapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.6.4",
  minutes: 85,
  links: {
    revisits: ["m7.6.3", "m11.1.1", "m2.1.1"],
    foreshadows: ["m7.7.1", "m14.1.2", "m14.2.1"],
  },

  puzzle: (
    <>
      <p>
        In the integers, if <M>{"ab = 0"}</M> then <M>{"a = 0"}</M> or <M>{"b = 0"}</M>; this is how you solve{" "}
        <M>{"(x - 2)(x - 3) = 0"}</M>. In <M>{"\\mathbb{Z}_6"}</M> it fails, and <M>{"x^2 - 5x + 6"}</M> has four roots. In{" "}
        <M>{"\\mathbb{Z}_7"}</M> you can even divide. Which quotient rings behave like the integers, and which like the
        rationals? The answer depends on a property of the ideal you divide by.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Multiplication by <M>{"a"}</M> sends each element of <M>{"\\mathbb{Z}_n"}</M> to another. See when the arrows hit
        every element, and when two of them collide.
      </p>
      <MultMapViz />
    </>
  ),

  theory: (
    <>
      <Definition title="integral domains and fields">
        <p>
          A commutative ring with <M>{"1 \\ne 0"}</M> is an <strong>integral domain</strong> if it has no zero divisors, and
          a <strong>field</strong> if every non-zero element is a unit. Every field is an integral domain. In a domain we may
          cancel: if <M>{"ab = ac"}</M> and <M>{"a \\ne 0"}</M>, then <M>{"a(b - c) = 0"}</M>, so <M>{"b = c"}</M>.
        </p>
      </Definition>

      <Theorem title="finite domains are fields">
        <p>Every finite integral domain is a field. In particular ℤₙ is a field exactly when n is prime.</p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"a \\ne 0"}</M>. By cancellation, <M>{"x \\mapsto ax"}</M> is injective, and an injective map from a finite
          set to itself is onto. So <M>{"ax = 1"}</M> for some <M>{"x"}</M>. If <M>{"n = rs"}</M> with{" "}
          <M>{"1 < r, s < n"}</M>, then <M>{"rs = 0"}</M> in <M>{"\\mathbb{Z}_n"}</M>; if <M>{"n"}</M> is prime, Euclid&rsquo;s
          lemma rules out zero divisors.
        </p>
      </Proof>

      <Definition title="prime and maximal ideals">
        <p>
          A proper ideal <M>{"P"}</M> is <strong>prime</strong> if <M>{"ab \\in P"}</M> implies <M>{"a \\in P"}</M> or{" "}
          <M>{"b \\in P"}</M>. A proper ideal <M>{"M"}</M> is <strong>maximal</strong> if no ideal lies strictly between{" "}
          <M>{"M"}</M> and <M>{"R"}</M>.
        </p>
      </Definition>

      <Theorem title="the two correspondences">
        <p>
          <M>{"R/P"}</M> is an integral domain exactly when <M>{"P"}</M> is prime, and <M>{"R/M"}</M> is a field exactly when{" "}
          <M>{"M"}</M> is maximal. So every maximal ideal is prime.
        </p>
      </Theorem>

      <Proof>
        <p>
          The first is a translation: <M>{"(a + P)(b + P) = 0"}</M> in <M>{"R/P"}</M> means <M>{"ab \\in P"}</M>. For the
          second, if <M>{"M"}</M> is maximal and <M>{"a \\notin M"}</M>, the ideal <M>{"M + (a)"}</M> is larger than{" "}
          <M>{"M"}</M>, so it is <M>{"R"}</M>, and <M>{"1 = m + ra"}</M>; then <M>{"r + M"}</M> inverts <M>{"a + M"}</M>.
          Conversely, in a field the only ideals are 0 and everything, and ideals of <M>{"R/M"}</M> correspond to ideals
          between <M>{"M"}</M> and <M>{"R"}</M>.
        </p>
      </Proof>

      <Example title="examples">
        <p>
          In <M>{"\\mathbb{Z}"}</M>, <M>{"(p)"}</M> is maximal for each prime <M>{"p"}</M>, and <M>{"(0)"}</M> is prime but
          not maximal, since <M>{"\\mathbb{Z}/(0) = \\mathbb{Z}"}</M> is a domain but not a field. In{" "}
          <M>{"\\mathbb{R}[x]"}</M>, <M>{"(x^2 + 1)"}</M> is maximal, giving <M>{"\\mathbb{C}"}</M>. In{" "}
          <M>{"\\mathbb{Z}[x]"}</M>, <M>{"(x)"}</M> is prime but not maximal, since the quotient is <M>{"\\mathbb{Z}"}</M>.
        </p>
      </Example>

      <Remark title="fields of fractions">
        <p>
          Every integral domain sits inside a field, built from fractions <M>{"a/b"}</M> with <M>{"b \\ne 0"}</M>, just as{" "}
          <M>{"\\mathbb{Q}"}</M> is built from <M>{"\\mathbb{Z}"}</M>. And there is a finite field of every prime power
          order, not only of prime order, though for <M>{"p^k"}</M> with <M>{"k > 1"}</M> it is not{" "}
          <M>{"\\mathbb{Z}_{p^k}"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "inv7",
      rung: "check",
      prompt: <p>What is the inverse of 3 in the field ℤ₇?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "fields",
      rung: "check",
      prompt: <p>Which of these are fields? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["ℤ₁₁", "ℤ₉", "ℚ", "ℤ", "ℝ[x]/(x² + 1)"], correct: [0, 2, 4] },
    },
    {
      key: "roots",
      rung: "apply",
      prompt: <p>How many roots does x² − 5x + 6 have in ℤ₆?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prime",
      rung: "apply",
      prompt: <p>Which of these ideals of ℤ are prime? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["(0)", "(6)", "(7)", "(9)", "(13)"], correct: [0, 2, 4] },
    },
    {
      key: "notmax",
      rung: "apply",
      prompt: <p>In ℤ[x], why is the ideal (x) prime but not maximal?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because ℤ[x]/(x) ≅ ℤ, which is an integral domain but not a field.",
          "Because x is a unit.",
          "Because (x) contains 1.",
          "Because ℤ[x]/(x) has zero divisors.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a field has no zero divisors. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes ab = 0 with a ≠ 0.",
          "Multiplies by a⁻¹ to get b = a⁻¹ab = a⁻¹ · 0 = 0.",
          "Concludes there are no zero divisors, so a field is an integral domain.",
        ],
      },
    },
    {
      key: "four",
      rung: "stretch",
      prompt: (
        <p>
          Show that <M>{"\\mathbb{Z}_2[x]/(x^2 + x + 1)"}</M> is a field with four elements. Why is it not{" "}
          <M>{"\\mathbb{Z}_4"}</M>?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Lists the elements 0, 1, x, x + 1, and notes x² = x + 1 in the quotient.",
          "Checks each non-zero element has an inverse, for example x(x + 1) = x² + x = 1, or notes x² + x + 1 has no root in ℤ₂ so the ideal is maximal.",
          "Notes 1 + 1 = 0 here, while in ℤ₄ 1 + 1 ≠ 0, and ℤ₄ has the zero divisor 2. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between an integral domain and a field, why a finite integral domain is a field, what prime and maximal ideals are, and how they correspond to quotients that are domains and fields.",

  glimpse: (
    <p>
      The next chapter asks which integral domains have division with remainder and unique factorisation, as the integers
      do. In field theory, maximal ideals of polynomial rings produce field extensions, and finite fields of every prime
      power order are built this way.
    </p>
  ),
};
