import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RingTableViz } from "@/components/viz/RingTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.6.1",
  minutes: 80,
  links: {
    revisits: ["m7.1.1", "m11.2.1", "m2.1.1"],
    foreshadows: ["m7.6.2", "m7.7.4", "m29.1.1"],
  },

  puzzle: (
    <>
      <p>
        Groups have one operation. But the integers, the polynomials, the square matrices and the integers mod{" "}
        <M>{"n"}</M> all have two, addition and multiplication, linked by the distributive law. In{" "}
        <M>{"\\mathbb{Z}_6"}</M>, <M>{"2 \\cdot 3 = 0"}</M>, although neither factor is 0. In the ring of 2 by 2 matrices,{" "}
        <M>{"AB"}</M> need not equal <M>{"BA"}</M>. What do these systems have in common, and what can differ?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here are the tables of <M>{"\\mathbb{Z}_n"}</M>. Change <M>{"n"}</M> and watch which elements have inverses and which
        multiply to 0.
      </p>
      <RingTableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="ring">
        <p>
          A <strong>ring</strong> is a set <M>{"R"}</M> with two operations, <M>{"+"}</M> and <M>{"\\cdot"}</M>, such that{" "}
          <M>{"(R, +)"}</M> is an abelian group with identity 0, multiplication is associative with an identity 1, and the
          distributive laws hold:
        </p>
        <MD>{"a(b + c) = ab + ac, \\qquad (a + b)c = ac + bc."}</MD>
        <p>
          The ring is <strong>commutative</strong> if <M>{"ab = ba"}</M> always. A <strong>unit</strong> is an element with a
          multiplicative inverse; the units form a group <M>{"R^\\times"}</M>.
        </p>
      </Definition>

      <Theorem title="consequences of the axioms">
        <p>
          In any ring, <M>{"0 \\cdot a = 0"}</M>, <M>{"(-a)b = -(ab)"}</M> and <M>{"(-a)(-b) = ab"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          <M>{"0 \\cdot a = (0 + 0)a = 0 \\cdot a + 0 \\cdot a"}</M>; subtract <M>{"0 \\cdot a"}</M> from both sides. Then{" "}
          <M>{"ab + (-a)b = (a + (-a))b = 0 \\cdot b = 0"}</M>, so <M>{"(-a)b = -(ab)"}</M>. Applying this twice gives{" "}
          <M>{"(-a)(-b) = -(-(ab)) = ab"}</M>. So the rule that a minus times a minus is a plus is forced by distributivity.
        </p>
      </Proof>

      <Example title="a gallery">
        <p>
          <M>{"\\mathbb{Z}"}</M>, <M>{"\\mathbb{Q}"}</M>, <M>{"\\mathbb{R}"}</M> and <M>{"\\mathbb{C}"}</M>. The integers mod{" "}
          <M>{"n"}</M>, whose units are the <M>{"a"}</M> with <M>{"\\gcd(a, n) = 1"}</M>. Polynomials <M>{"R[x]"}</M> with
          coefficients in a ring. The Gaussian integers <M>{"\\mathbb{Z}[i] = \\{a + bi\\}"}</M>. Continuous functions on{" "}
          <M>{"[0, 1]"}</M>, added and multiplied pointwise. And, not commutative, the <M>{"n \\times n"}</M> matrices{" "}
          <M>{"M_n(\\mathbb{R})"}</M>, and the quaternions.
        </p>
      </Example>

      <Remark title="zero divisors">
        <p>
          A non-zero <M>{"a"}</M> is a <strong>zero divisor</strong> if <M>{"ab = 0"}</M> for some non-zero <M>{"b"}</M>. In{" "}
          <M>{"\\mathbb{Z}_n"}</M>, every non-zero element is either a unit or a zero divisor. A unit is never a zero
          divisor: if <M>{"ab = 0"}</M> and <M>{"a"}</M> is a unit, then <M>{"b = a^{-1}ab = 0"}</M>. Rings without zero
          divisors, the integral domains, behave much more like the integers.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "units6",
      rung: "check",
      prompt: <p>How many units does ℤ₁₂ have?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these are commutative rings? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["ℤ", "ℤ₆", "The 2 × 2 real matrices", "The polynomials ℝ[x]", "The even integers, which lack a 1"],
        correct: [0, 1, 3],
      },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: <p>What is the inverse of 5 in ℤ₁₂?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "zd",
      rung: "apply",
      prompt: <p>How many zero divisors does ℤ₁₀ have?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "gauss",
      rung: "apply",
      prompt: (
        <p>
          In the Gaussian integers, compute <M>{"(2 + i)(2 - i)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that in any ring, 0 · a = 0. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes 0 · a = (0 + 0) · a.",
          "Uses distributivity to get 0 · a = 0 · a + 0 · a.",
          "Subtracts 0 · a, or adds its negative, to conclude 0 · a = 0.",
        ],
      },
    },
    {
      key: "trivial",
      rung: "stretch",
      prompt: <p>Show that if 1 = 0 in a ring, the ring has only one element. Why do many authors require 1 ≠ 0?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows a = a · 1 = a · 0 = 0 for every a.",
          "Concludes the ring is {0}, the zero ring.",
          "Suggests a reason, for example so that fields and integral domains exclude this degenerate case. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a ring is, with several examples including a non-commutative one, why (−a)(−b) = ab follows from the axioms, and the difference between units and zero divisors in ℤₙ.",

  glimpse: (
    <p>
      The next lesson introduces ideals, which play the part for rings that normal subgroups play for groups, and the
      quotient rings they produce. Polynomial rings get a chapter of their own, and rings of algebraic integers such as the
      Gaussian integers are the subject of algebraic number theory.
    </p>
  ),
};
