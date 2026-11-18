import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { RepresentViz } from "@/components/viz/RepresentViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.4.2",
  minutes: 85,
  links: {
    revisits: ["m20.4.1", "m20.2.3", "m20.3.3"],
    foreshadows: ["m20.4.3", "m20.4.4", "m20.5.2"],
  },

  puzzle: (
    <>
      <p>
        A theory can be true of the natural numbers yet too weak to prove that addition is commutative. Can such a weak
        theory still prove every particular fact like 2 + 3 = 5, or 3 divides 12, or 7 is prime? And would that be enough to
        talk about its own proofs?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a relation and click any cell. Each cell is a separate theorem of Q.</p>
      <RepresentViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Robinson arithmetic Q">
        <p>
          Q has seven axioms in the language 0, S, +, ×: S is injective and never 0; every non-zero number is a successor;
          and the recursive equations <M>{"x + 0 = x"}</M>, <M>{"x + Sy = S(x + y)"}</M>, <M>{"x \\times 0 = 0"}</M>,{" "}
          <M>{"x \\times Sy = x \\times y + x"}</M>. It has no induction axiom. Write <M>{"\\bar n"}</M> for the numeral
          S…S0 with n copies of S.
        </p>
      </Definition>

      <Definition title="representability">
        <p>
          A relation R on numbers is <strong>represented</strong> in a theory T by a formula φ(x) when, for all n,{" "}
          if R(n) then <M>{"T \\vdash \\varphi(\\bar n)"}</M>, and if not R(n) then <M>{"T \\vdash \\neg\\varphi(\\bar n)"}</M>.
          A function f is represented by ψ(x, y) when, for each n, T proves ∀y (ψ(n̄, y) ↔ y = m̄) where m = f(n), a uniform version of the
          same idea.
        </p>
      </Definition>

      <Theorem title="representability theorem">
        <p>
          Every computable (recursive) relation and function is representable in Q, and so in every theory extending Q, such as
          Peano arithmetic.
        </p>
      </Theorem>

      <Example title="why weak is enough">
        <p>
          Q cannot prove ∀x ∀y (x + y = y + x). But it proves <M>{"\\bar 2 + \\bar 3 = \\bar 5"}</M> by unwinding the
          recursive equations, and it proves <M>{"\\neg\\, \\bar 2 + \\bar 3 = \\bar 6"}</M> using that S is injective and never
          zero. Representability only asks for such instances, one numeral at a time. The proof of the theorem shows that the
          basic functions are represented and that composition, primitive recursion and minimisation preserve
          representability; primitive recursion needs a coding of finite sequences, for which Gödel used the Chinese
          remainder theorem.
        </p>
      </Example>

      <Remark title="what this buys">
        <p>
          Since Prf(n, k) is computable, it is represented by a formula of arithmetic. So Q proves each true statement
          &ldquo;n codes a proof of k&rdquo; and refutes each false one. A theory extending Q can thereby reason, instance by
          instance, about its own proofs.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What must T do for φ(x) to represent R?</p>,
      answer: {
        kind: "choice",
        options: ["Prove φ(n̄) whenever R(n), and prove ¬φ(n̄) whenever not R(n)", "Prove ∀x φ(x)", "Prove φ(n̄) for some n", "Have a model in which φ defines R"],
        correct: [0],
      },
    },
    {
      key: "ind",
      rung: "check",
      prompt: <p>Which axiom scheme does Q lack, compared with Peano arithmetic?</p>,
      answer: { kind: "choice", options: ["Induction", "The successor axioms", "The equations for addition", "The equations for multiplication"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with &ldquo;m = 2n&rdquo;, how many cells in the row n = 2 show ⊢ φ?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "lt",
      rung: "apply",
      prompt: <p>With &ldquo;n &lt; m&rdquo; and the visualisation&rsquo;s grid, how many cells in the row n = 3 show ⊢ φ?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "ext",
      rung: "apply",
      prompt: <p>If R is represented in Q, is it represented in Peano arithmetic?</p>,
      answer: {
        kind: "choice",
        options: ["Yes: PA extends Q, so it proves everything Q proves", "No: PA has different axioms", "Only if R is finite", "Only if PA is complete"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that Q proves 1̄ + 1̄ = 2̄, where 1̄ is S0 and 2̄ is SS0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses x + Sy = S(x + y) to get S0 + S0 = S(S0 + 0).",
          "Uses x + 0 = x to get S0 + 0 = S0.",
          "Combines them with the equality rules to reach S0 + S0 = SS0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why might it be useful that the representability theorem holds already for a theory as weak as Q?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that incompleteness then applies to every consistent, effectively axiomatised extension of Q.",
          "Notes that Q is finitely axiomatised, which helps show undecidability of first-order logic.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        We now have coding, so arithmetic can mention formulas, and representability, so a theory can prove facts about
        those codes. One more ingredient, the diagonal lemma, produces a sentence that says of itself that it is not
        provable.
      </p>
      <p>
        Next, Gödel&rsquo;s incompleteness theorems: every consistent, effectively axiomatised theory extending Q leaves
        some sentence undecided, and none can prove its own consistency.
      </p>
    </>
  ),
};
