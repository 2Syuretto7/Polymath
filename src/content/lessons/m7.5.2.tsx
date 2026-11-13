import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SimpleOrderViz } from "@/components/viz/SimpleOrderViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.5.2",
  minutes: 85,
  links: {
    revisits: ["m7.5.1", "m7.4.4", "m7.2.2"],
    foreshadows: ["m7.5.4", "m14.4.2", "m7.5.3"],
  },

  puzzle: (
    <>
      <p>
        Up to isomorphism there is exactly one group of order 15, the cyclic one. Nobody has to list all possible
        multiplication tables to see this; three lines of Sylow theory suffice. The same arithmetic shows that no group of
        order 30 is simple, and that among the orders up to 100 only the primes and the single number 60 can carry a simple
        group. How far can counting take us?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Click any order from 1 to 100 to see why a group of that order must, or need not, have a proper non-trivial normal
        subgroup.
      </p>
      <SimpleOrderViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="groups of order pq">
        <p>
          Let <M>{"p < q"}</M> be primes and <M>{"|G| = pq"}</M>. Then the Sylow <M>{"q"}</M>-subgroup is normal. If{" "}
          <M>{"p \\nmid q - 1"}</M>, then <M>{"G"}</M> is cyclic.
        </p>
      </Theorem>

      <Proof>
        <p>
          <M>{"n_q"}</M> divides <M>{"p"}</M> and is 1 mod <M>{"q"}</M>; since <M>{"p < q"}</M>, <M>{"n_q = 1"}</M>. Likewise{" "}
          <M>{"n_p"}</M> divides <M>{"q"}</M> and is 1 mod <M>{"p"}</M>, so it is 1 or <M>{"q"}</M>; if{" "}
          <M>{"p \\nmid q - 1"}</M> it is 1. Then both Sylow subgroups <M>{"P"}</M> and <M>{"Q"}</M> are normal and meet
          only in the identity, so their elements commute: for <M>{"x \\in P"}</M>, <M>{"y \\in Q"}</M>, the commutator{" "}
          <M>{"xyx^{-1}y^{-1}"}</M> lies in both. Hence <M>{"G \\cong P \\times Q \\cong \\mathbb{Z}_p \\times \\mathbb{Z}_q \\cong \\mathbb{Z}_{pq}"}</M>.
        </p>
      </Proof>

      <Example title="15, 35 and 21">
        <p>
          Groups of order 15 and 35 are cyclic, since 3 does not divide 4 and 5 does not divide 6. For 21, 3 divides 6, and
          indeed there is a non-abelian group of order 21, built from <M>{"x \\mapsto ax + b"}</M> with <M>{"a"}</M> a cube
          root of 1 mod 7.
        </p>
      </Example>

      <Theorem title="counting elements">
        <p>No group of order 30 is simple, and none of order 56.</p>
      </Theorem>

      <Proof>
        <p>
          Two distinct subgroups of prime order <M>{"p"}</M> meet only in the identity, so <M>{"n_p"}</M> of them contain{" "}
          <M>{"n_p(p - 1)"}</M> elements of order <M>{"p"}</M>. For 30: if neither <M>{"n_3"}</M> nor <M>{"n_5"}</M> were 1,
          they would be 10 and 6, giving <M>{"20 + 24 = 44"}</M> elements, more than 30. For 56: if <M>{"n_7 \\ne 1"}</M>, it
          is 8, giving 48 elements of order 7. The remaining 8 elements are exactly enough for one subgroup of order 8, so{" "}
          <M>{"n_2 = 1"}</M>.
        </p>
      </Proof>

      <Remark title="the embedding trick">
        <p>
          If a simple group has <M>{"n_p = k > 1"}</M>, its conjugation action on the Sylow subgroups has trivial kernel, so
          the group embeds in <M>{"S_k"}</M>, indeed in <M>{"A_k"}</M>. For order 12, <M>{"n_2"}</M> is 1 or 3, and 12 does
          not divide <M>{"3!/2 = 3"}</M>; so no group of order 12 is simple. The same argument handles 24, 36, 48, 72, 80 and
          96.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "n5",
      rung: "check",
      prompt: <p>In a group of order 15, how many Sylow 5-subgroups are there?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "cyclic",
      rung: "check",
      prompt: <p>Which of these orders force every group of that order to be cyclic? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["15", "21", "35", "6", "77"], correct: [0, 2, 4] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>If a group of order 30 has six Sylow 5-subgroups, how many elements of order 5 does it have?</p>,
      answer: { kind: "numeric", value: 24 },
    },
    {
      key: "left",
      rung: "apply",
      prompt: (
        <p>
          A group of order 56 with eight Sylow 7-subgroups has 48 elements of order 7. How many elements are left over,
          including the identity?
        </p>
      ),
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "embed",
      rung: "apply",
      prompt: <p>Why can no group of order 24 be simple?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because 24 is even.",
          "Because n₂ is 1 or 3, and a simple group with n₂ = 3 would embed in A₃, which has only 3 elements.",
          "Because every group of order 24 is abelian.",
          "Because 24 is a prime power.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every group of order 35 is cyclic. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows n₅ divides 7 and is 1 mod 5, so n₅ = 1; and n₇ divides 5 and is 1 mod 7, so n₇ = 1.",
          "Notes both Sylow subgroups are normal and meet trivially, so G is their direct product.",
          "Concludes G ≅ ℤ₅ × ℤ₇ ≅ ℤ₃₅.",
        ],
      },
    },
    {
      key: "o20",
      rung: "stretch",
      prompt: <p>Show that no group of order 20, 40 or 100 is simple, with one argument that covers all three.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that removing the power of 5 leaves 4, 8 and 4 respectively.",
          "Shows n₅ divides 4 or 8 and is 1 mod 5, which forces n₅ = 1.",
          "Concludes the Sylow 5-subgroup is normal and proper. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Sylow theory shows groups of order pq have a normal subgroup and are often cyclic, how counting elements rules out simple groups of order 30 and 56, and how the embedding trick handles orders like 12 and 24.",

  glimpse: (
    <p>
      The next lessons describe every finite abelian group and then turn to simple groups, where 60 is the first
      non-abelian case. In the second algebra course these arguments show that groups of many orders are solvable, which
      matters for solving polynomial equations.
    </p>
  ),
};
