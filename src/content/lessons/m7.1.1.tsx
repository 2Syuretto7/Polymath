import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CayleyTableViz } from "@/components/viz/CayleyTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.1.1",
  minutes: 80,
  links: {
    revisits: ["m4.4.4", "m1.7.3", "m3.3.2"],
    foreshadows: ["m7.1.2", "m7.1.3", "m7.3.1"],
  },

  puzzle: (
    <>
      <p>
        Adding integers, multiplying non-zero fractions, composing rotations of a square, multiplying invertible matrices,
        shuffling a pack of cards: these look like different activities. Yet in each you can combine two things to get a third,
        there is a do-nothing element, and every move can be undone. In 1832 the twenty-year-old Galois used such structures to
        settle which equations can be solved by radicals. What exactly do all these share?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here are four sets with operations, written as tables. Which are groups, and where do the others fail?
      </p>
      <CayleyTableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="group">
        <p>
          A <strong>group</strong> is a set <M>{"G"}</M> with an operation <M>{"\\ast"}</M> taking two elements to an element
          of <M>{"G"}</M>, such that:
        </p>
        <ul>
          <li>it is <strong>associative</strong>: <M>{"(a \\ast b) \\ast c = a \\ast (b \\ast c)"}</M>;</li>
          <li>there is an <strong>identity</strong> <M>{"e"}</M> with <M>{"e \\ast a = a \\ast e = a"}</M> for all{" "}
            <M>{"a"}</M>;</li>
          <li>every <M>{"a"}</M> has an <strong>inverse</strong> <M>{"a^{-1}"}</M> with{" "}
            <M>{"a \\ast a^{-1} = a^{-1} \\ast a = e"}</M>.</li>
        </ul>
        <p>
          It is <strong>abelian</strong> if also <M>{"a \\ast b = b \\ast a"}</M> for all <M>{"a, b"}</M>. The number of
          elements is the <strong>order</strong> of the group.
        </p>
      </Definition>

      <Theorem title="first consequences">
        <p>
          The identity is unique, each element has exactly one inverse, <M>{"(ab)^{-1} = b^{-1}a^{-1}"}</M>, and the
          cancellation laws hold: <M>{"ab = ac"}</M> implies <M>{"b = c"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"e"}</M> and <M>{"e'"}</M> are both identities, then <M>{"e = e e' = e'"}</M>. If <M>{"b"}</M> and{" "}
          <M>{"c"}</M> are both inverses of <M>{"a"}</M>, then <M>{"b = b(ac) = (ba)c = c"}</M>. For the product,{" "}
          <M>{"(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = e"}</M>. To cancel, multiply <M>{"ab = ac"}</M> on the left by{" "}
          <M>{"a^{-1}"}</M>. Cancellation means each row of a group table contains every element exactly once.
        </p>
      </Proof>

      <Example title="examples and non-examples">
        <p>
          <M>{"(\\mathbb Z, +)"}</M>, <M>{"(\\mathbb Q \\setminus \\{0\\}, \\times)"}</M> and{" "}
          <M>{"(\\mathbb Z_n, +)"}</M> are abelian groups. The invertible <M>{"n \\times n"}</M> matrices,{" "}
          <M>{"GL_n(\\mathbb R)"}</M>, form a non-abelian group under multiplication. The non-zero residues mod a prime{" "}
          <M>{"p"}</M> form a group under multiplication. <M>{"(\\mathbb Z, \\times)"}</M> is not a group, since 2 has no
          inverse, and <M>{"(\\mathbb Z, -)"}</M> is not, since subtraction is not associative.
        </p>
      </Example>

      <Remark title="why abstraction pays">
        <p>
          Whatever is proved from the three axioms holds in every group at once: integers, matrices, symmetries, card
          shuffles. Galois, Cayley and later Klein saw that symmetry in geometry, algebra and physics is described by groups.
          From now on we usually write the operation as multiplication, <M>{"ab"}</M>, and the identity as <M>{"e"}</M> or 1.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "axioms",
      rung: "check",
      prompt: <p>Which of these are among the group axioms? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Associativity", "Commutativity", "An identity element", "Inverses"], correct: [0, 2, 3] },
    },
    {
      key: "inv",
      rung: "check",
      prompt: <p>In the group ℤ₇ under addition, what is the inverse of 3?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these are groups? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["(ℤ, +)", "(ℤ, ×)", "(ℚ without 0, ×)", "(ℕ, +)", "{1, −1} under ×"],
        correct: [0, 2, 4],
      },
    },
    {
      key: "mod7",
      rung: "apply",
      prompt: <p>In the group {"{1, 2, 3, 4, 5, 6}"} under multiplication mod 7, what is the inverse of 3?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "socks",
      rung: "apply",
      prompt: (
        <p>
          In a group, what is <M>{"(ab)^{-1}"}</M>?
        </p>
      ),
      answer: { kind: "choice", options: ["a⁻¹b⁻¹", "b⁻¹a⁻¹", "ab", "ba"], correct: [1] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a group has only one identity element. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes e and e′ are both identities.",
          "Computes e e′ in two ways: it equals e′ because e is an identity, and e because e′ is, so e = e′.",
        ],
      },
    },
    {
      key: "square",
      rung: "stretch",
      prompt: (
        <p>
          Suppose every element of a group satisfies <M>{"a^2 = e"}</M>. Show that the group is abelian.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes each element is its own inverse.",
          "Writes ab = (ab)⁻¹ = b⁻¹a⁻¹ = ba. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the definition of a group, with examples and non-examples, why the identity and inverses are unique, and why a group table has every element once in each row.",

  glimpse: (
    <p>
      The next lesson meets the groups that started it all, groups of symmetries, and the first non-abelian examples. Later
      lessons study subgroups and cyclic groups, and the symmetric group of all permutations, which contains every finite
      group.
    </p>
  ),
};
