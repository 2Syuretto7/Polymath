import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ModFieldViz } from "@/components/viz/ModFieldViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.1.1",
  minutes: 70,
  links: {
    revisits: ["m0.1.5", "m1.3.3"],
    foreshadows: ["m7.6.1", "m7.6.4", "m6.1.1"],
  },

  puzzle: (
    <>
      <p>
        At school you learnt that a negative times a negative is a positive, that anything times 0 is 0, and that you may never
        divide by 0. You were probably told these as rules. But are they separate rules, or do they follow from something
        simpler?
      </p>
      <p>
        Here is a test. Suppose you only know that addition and multiplication behave in the familiar tidy ways: order does not
        matter, brackets do not matter, and multiplication spreads over addition. Can you prove that <M>{"a \\cdot 0 = 0"}</M>{" "}
        for every number a?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Calculus is about the real numbers, so this course begins by saying exactly what they are. Rather than building them
        from anything, we list their properties as <strong>axioms</strong> and derive everything else. The first group of
        axioms, the field axioms, says only how addition and multiplication behave. Every rule of school algebra follows from
        them.
      </p>
      <p>
        The real numbers are not the only system that satisfies these axioms. The rationals do, and so does clock arithmetic
        modulo some numbers n, though not others. Below is the multiplication table modulo n. A field needs every non-zero
        element to have an inverse, a partner that multiplies with it to give 1. Try n = 5, 6 and 7, and click a row to find
        its inverse.
      </p>
      <ModFieldViz />
      <p>
        When n is not prime, say <M>{"n = 6 = 2 \\times 3"}</M>, two non-zero numbers multiply to 0, and neither of them can
        then have an inverse. When n is prime, every non-zero number has one.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="field">
        <p>
          A <strong>field</strong> is a set F with two operations, + and &middot;, and two elements 0 and 1 with{" "}
          <M>{"0 \\ne 1"}</M>, such that for all a, b, c in F:
        </p>
        <ol>
          <li>
            (associativity) <M>{"(a + b) + c = a + (b + c)"}</M> and <M>{"(ab)c = a(bc)"}</M>;
          </li>
          <li>
            (commutativity) <M>{"a + b = b + a"}</M> and <M>{"ab = ba"}</M>;
          </li>
          <li>
            (identities) <M>{"a + 0 = a"}</M> and <M>{"a \\cdot 1 = a"}</M>;
          </li>
          <li>
            (negatives) there is an element <M>{"-a"}</M> with <M>{"a + (-a) = 0"}</M>;
          </li>
          <li>
            (inverses) if <M>{"a \\ne 0"}</M>, there is an element <M>{"a^{-1}"}</M> with <M>{"a a^{-1} = 1"}</M>;
          </li>
          <li>
            (distributivity) <M>{"a(b + c) = ab + ac"}</M>.
          </li>
        </ol>
        <p>
          We define subtraction by <M>{"a - b = a + (-b)"}</M> and division by <M>{"a / b = a b^{-1}"}</M> for{" "}
          <M>{"b \\ne 0"}</M>. Our first axiom about the real numbers is that <M>{"\\mathbb{R}"}</M> is a field.
        </p>
      </Definition>

      <Example title="fields and non-fields">
        <p>
          <M>{"\\mathbb{Q}"}</M> and <M>{"\\mathbb{R}"}</M> are fields. <M>{"\\mathbb{Z}"}</M> is not: 2 has no inverse in{" "}
          <M>{"\\mathbb{Z}"}</M>, since <M>{"2x = 1"}</M> has no integer solution. The integers modulo 5 form a field: the
          inverses of 1, 2, 3, 4 are 1, 3, 2, 4. The integers modulo 6 do not, since <M>{"2 \\cdot 3 = 0"}</M>.
        </p>
      </Example>

      <Theorem title="anything times zero is zero">
        <p>
          In any field, <M>{"a \\cdot 0 = 0"}</M> for every a.
        </p>
      </Theorem>
      <Proof>
        <p>
          By the identity axiom, <M>{"0 + 0 = 0"}</M>. Multiply by a and use distributivity:
        </p>
        <MD>{"a \\cdot 0 = a(0 + 0) = a \\cdot 0 + a \\cdot 0."}</MD>
        <p>
          Now add <M>{"-(a \\cdot 0)"}</M> to both sides. The left side becomes 0, and the right side becomes{" "}
          <M>{"a \\cdot 0"}</M>, using associativity and the negatives axiom. So <M>{"0 = a \\cdot 0"}</M>.
        </p>
      </Proof>

      <Remark title="why you cannot divide by zero">
        <p>
          Suppose 0 had an inverse x, so that <M>{"0 \\cdot x = 1"}</M>. By the theorem, <M>{"0 \\cdot x = 0"}</M>, so{" "}
          <M>{"1 = 0"}</M>, which the axioms forbid. This is a proof by contradiction: division by zero is not merely
          forbidden by a rule, it is impossible in any field.
        </p>
      </Remark>

      <Theorem title="signs">
        <p>
          In any field, <M>{"(-1)a = -a"}</M>, and <M>{"(-a)(-b) = ab"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          First, <M>{"a + (-1)a = 1 \\cdot a + (-1)a = (1 + (-1))a = 0 \\cdot a = 0"}</M>. So <M>{"(-1)a"}</M> is a negative of
          a. Negatives are unique: if <M>{"a + x = 0"}</M> and <M>{"a + y = 0"}</M>, then{" "}
          <M>{"x = x + (a + y) = (x + a) + y = y"}</M>. So <M>{"(-1)a = -a"}</M>. In particular{" "}
          <M>{"(-1)(-1) = -(-1)"}</M>, which is 1, since <M>{"(-1) + 1 = 0"}</M> shows 1 is a negative of <M>{"-1"}</M>.
          Finally, <M>{"(-a)(-b) = (-1)a(-1)b = (-1)(-1)ab = ab"}</M>.
        </p>
      </Proof>

      <Theorem title="no zero divisors">
        <p>
          In any field, if <M>{"ab = 0"}</M> then <M>{"a = 0"}</M> or <M>{"b = 0"}</M>.
        </p>
      </Theorem>
      <p>
        This is the fact you use whenever you solve <M>{"(x - 2)(x - 3) = 0"}</M> by setting each bracket to zero. You will
        prove it in the practice. It explains the visualisation: in the integers modulo 6, <M>{"2 \\cdot 3 = 0"}</M>, so they
        cannot form a field.
      </p>

      <Remark title="what the axioms do not say">
        <p>
          The field axioms say nothing about size. They cannot tell <M>{"\\mathbb{R}"}</M> from <M>{"\\mathbb{Q}"}</M>, or
          even from the five-element field. Two more groups of axioms will pin <M>{"\\mathbb{R}"}</M> down: the order axioms
          next, and then completeness.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "not-field",
      rung: "check",
      prompt: <p>Which of these is not a field, with the usual addition and multiplication?</p>,
      answer: { kind: "choice", options: ["the rationals", "the integers", "the real numbers", "the integers modulo 5"], correct: [1] },
    },
    {
      key: "inv-7",
      rung: "check",
      prompt: <p>In the integers modulo 7, what is the inverse of 3? Give a number from 1 to 6.</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "inv-11",
      rung: "apply",
      prompt: <p>In the integers modulo 11, what is the inverse of 2? Give a number from 1 to 10.</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "which-n",
      rung: "apply",
      prompt: <p>For which of these n do the integers modulo n form a field? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["4", "5", "6", "7", "9"], correct: [1, 3] },
    },
    {
      key: "zero-div",
      rung: "apply",
      prompt: <p>In the integers modulo 10, which of these products is 0?</p>,
      answer: { kind: "choice", options: ["3 · 7", "4 · 5", "3 · 3", "9 · 9"], correct: [1] },
    },
    {
      key: "no-zero-div",
      rung: "prove",
      prompt: (
        <p>
          Prove from the field axioms (and the theorem that <M>{"a \\cdot 0 = 0"}</M>) that if <M>{"ab = 0"}</M>, then{" "}
          <M>{"a = 0"}</M> or <M>{"b = 0"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Considers the case a ≠ 0 (the case a = 0 being immediate).",
          "Multiplies both sides of ab = 0 by the inverse of a.",
          "Uses associativity, the inverse and identity axioms, and a · 0 = 0 to conclude b = 0.",
        ],
      },
    },
    {
      key: "composite",
      rung: "stretch",
      prompt: (
        <p>
          Let n be a whole number with <M>{"n = rs"}</M>, where <M>{"1 < r, s < n"}</M>. Prove that the integers modulo n do
          not form a field.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that r and s are non-zero modulo n, since they lie strictly between 0 and n.",
          "Notes that rs = n is 0 modulo n.",
          "Uses the no-zero-divisors theorem (or directly the inverse of r) to reach a contradiction.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a field is, and use the axioms to show why a · 0 = 0 and why you cannot divide by zero.",

  glimpse: (
    <p>
      Fields are one of the central structures of algebra. Abstract Algebra I meets them again, alongside rings, where inverses
      may fail, and proves that the integers modulo n form a field exactly when n is prime. Real Analysis I goes further than
      axioms: it builds the real numbers out of the rationals and checks that the result satisfies every axiom of this chapter.
    </p>
  ),
};
