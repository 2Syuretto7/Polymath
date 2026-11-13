import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { AbelianListViz } from "@/components/viz/AbelianListViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.5.3",
  minutes: 90,
  links: {
    revisits: ["m7.1.4", "m7.2.5", "m11.2.2"],
    foreshadows: ["m14.5.3", "m8.5.4", "m7.5.4"],
  },

  puzzle: (
    <>
      <p>
        How many abelian groups of order 72 are there? For groups in general, such questions are very hard: there are 50
        groups of order 72 and nearly fifty billion of order 1024. For abelian groups the answer is a short calculation,
        because every finite abelian group is built from cyclic groups in an essentially unique way.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose an order. The table lists every abelian group of that order, written in two standard ways.
      </p>
      <AbelianListViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="splitting a cyclic group">
        <p>
          If <M>{"\\gcd(m, n) = 1"}</M>, then <M>{"\\mathbb{Z}_{mn} \\cong \\mathbb{Z}_m \\times \\mathbb{Z}_n"}</M>. If not,
          the right side has no element of order <M>{"mn"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          The map <M>{"k \\mapsto (k \\bmod m, k \\bmod n)"}</M> is a homomorphism. Its kernel is the multiples of{" "}
          <M>{"\\operatorname{lcm}(m, n) = mn"}</M>, so it is injective, and both sides have <M>{"mn"}</M> elements. This is
          the Chinese remainder theorem. If <M>{"\\gcd > 1"}</M>, every element has order dividing the lcm, which is less
          than <M>{"mn"}</M>.
        </p>
      </Proof>

      <Theorem title="the structure theorem">
        <p>
          Every finitely generated abelian group is isomorphic to
        </p>
        <MD>{"\\mathbb{Z}^r \\times \\mathbb{Z}_{d_1} \\times \\cdots \\times \\mathbb{Z}_{d_k}, \\qquad d_1 \\mid d_2 \\mid \\cdots \\mid d_k,"}</MD>
        <p>
          with <M>{"d_1 > 1"}</M>, and <M>{"r"}</M> and the <M>{"d_i"}</M> are uniquely determined. Equivalently, the finite
          part is a product of cyclic groups of prime power order, unique up to the order of the factors.
        </p>
      </Theorem>

      <Proof>
        <p>
          A sketch for a finite abelian group <M>{"G"}</M>. Every subgroup is normal, so each Sylow subgroup{" "}
          <M>{"G_p"}</M> is unique, and <M>{"G"}</M> is their direct product. In a <M>{"p"}</M>-group, an element of largest
          order generates a cyclic subgroup with a complement; induction on the order splits the rest. Uniqueness follows by
          counting, for each <M>{"k"}</M>, the elements with <M>{"p^k x = 0"}</M>, which the factors determine and which
          determine the factors.
        </p>
      </Proof>

      <Example title="order 72">
        <p>
          <M>{"72 = 2^3 \\cdot 3^2"}</M>. The 2-part is <M>{"\\mathbb{Z}_8"}</M>, <M>{"\\mathbb{Z}_4 \\times \\mathbb{Z}_2"}</M>{" "}
          or <M>{"\\mathbb{Z}_2^3"}</M>, one for each way to write 3 as a sum: 3, 2 + 1, 1 + 1 + 1. The 3-part is{" "}
          <M>{"\\mathbb{Z}_9"}</M> or <M>{"\\mathbb{Z}_3^2"}</M>. That gives <M>{"3 \\times 2 = 6"}</M> groups. For example,{" "}
          <M>{"\\mathbb{Z}_4 \\times \\mathbb{Z}_2 \\times \\mathbb{Z}_9 \\cong \\mathbb{Z}_2 \\times \\mathbb{Z}_{36}"}</M> in
          invariant factor form.
        </p>
      </Example>

      <Remark title="a pattern to come">
        <p>
          The proof works for modules over any principal ideal domain, not just over the integers. Over the polynomial ring{" "}
          <M>{"F[x]"}</M>, the same theorem gives the rational canonical form of a matrix, and over <M>{"\\mathbb{C}[x]"}</M>{" "}
          the Jordan form. Abelian groups are the simplest case of a very general phenomenon.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "eight",
      rung: "check",
      prompt: <p>How many abelian groups of order 8 are there, up to isomorphism?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "iso",
      rung: "check",
      prompt: <p>Which of these pairs are isomorphic? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["ℤ₆ and ℤ₂ × ℤ₃", "ℤ₄ and ℤ₂ × ℤ₂", "ℤ₁₅ and ℤ₃ × ℤ₅", "ℤ₉ and ℤ₃ × ℤ₃"],
        correct: [0, 2],
      },
    },
    {
      key: "seventy",
      rung: "apply",
      prompt: <p>How many abelian groups of order 72 are there?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "thousand",
      rung: "apply",
      prompt: (
        <p>
          How many abelian groups of order <M>{"1000 = 2^3 \\cdot 5^3"}</M> are there?
        </p>
      ),
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: <p>What is the invariant factor form of ℤ₂ × ℤ₄ × ℤ₃?</p>,
      answer: { kind: "choice", options: ["ℤ₂₄", "ℤ₂ × ℤ₁₂", "ℤ₆ × ℤ₄", "ℤ₂ × ℤ₂ × ℤ₆"], correct: [1] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that ℤ₄ and ℤ₂ × ℤ₂ are not isomorphic. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes ℤ₄ has an element of order 4, such as 1.",
          "Notes every element of ℤ₂ × ℤ₂ satisfies 2x = 0, so has order 1 or 2.",
          "Concludes they are not isomorphic, since an isomorphism preserves the orders of elements.",
        ],
      },
    },
    {
      key: "squarefree",
      rung: "stretch",
      prompt: (
        <p>
          For which <M>{"n"}</M> is every abelian group of order <M>{"n"}</M> cyclic? Explain using the structure theorem.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Answers: exactly when n is squarefree, that is, no prime appears squared.",
          "Explains that then each exponent is 1, which has one partition, so the group is a product of ℤ_p for distinct primes, which is cyclic.",
          "Notes that if p² divides n, then ℤ_p × ℤ_p × (the rest) is a non-cyclic example. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend when ℤ_mn splits as ℤ_m × ℤ_n, what the structure theorem for finitely generated abelian groups says, and how to count the abelian groups of a given order.",

  glimpse: (
    <p>
      The next lesson turns from abelian groups, which are built from cyclic pieces, to simple groups, the pieces from which
      all finite groups are built. The structure theorem returns as the theory of modules over a principal ideal domain,
      and it yields the rational canonical form in the second linear algebra course.
    </p>
  ),
};
