import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { QuadIntegerViz } from "@/components/viz/QuadIntegerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m29.1.1",
  minutes: 90,
  links: {
    revisits: ["m24.3.1", "m14.1.2", "m11.6.4"],
    foreshadows: ["m29.1.2", "m29.2.1", "m29.3.3"],
  },

  puzzle: (
    <>
      <p>
        In ℤ[√−3], the number 4 factors as 2 · 2 and as (1 + √−3)(1 − √−3), and none of these factors breaks up further.
        Yet ω = (1 + √−3)/2 satisfies ω² − ω + 1 = 0, just as an integer satisfies x − n = 0. Perhaps ℤ[√−3] is the wrong
        ring. Which numbers in a field deserve to be called integers?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a squarefree d, and see the integers of ℚ(√d) laid out as a lattice.</p>
      <QuadIntegerViz />
    </>
  ),

  theory: (
    <>
      <Definition title="number fields and algebraic integers">
        <p>
          A <strong>number field</strong> K is a finite extension of ℚ. An element α of K is an{" "}
          <strong>algebraic integer</strong> if it is a root of a monic polynomial with coefficients in ℤ. The algebraic
          integers of K form the <strong>ring of integers</strong> <M>{"\\mathcal{O}_K"}</M>.
        </p>
      </Definition>

      <Theorem title="basic facts">
        <p>
          α is an algebraic integer exactly when its minimal polynomial over ℚ has integer coefficients. α is an algebraic
          integer exactly when ℤ[α] is a finitely generated ℤ-module, and from this sums and products of algebraic integers
          are algebraic integers, so <M>{"\\mathcal{O}_K"}</M> is a ring. Moreover <M>{"\\mathcal{O}_K \\cap \\mathbb{Q} = \\mathbb{Z}"}</M>,
          and every α in K has a multiple nα in <M>{"\\mathcal{O}_K"}</M> for some positive integer n.
        </p>
      </Theorem>

      <Theorem title="structure">
        <p>
          <M>{"\\mathcal{O}_K"}</M> is a free ℤ-module of rank n = [K : ℚ]; a ℤ-basis is called an{" "}
          <strong>integral basis</strong>. It is the integral closure of ℤ in K, and it is a Dedekind domain: Noetherian,
          integrally closed, with every non-zero prime ideal maximal.
        </p>
      </Theorem>

      <Example title="quadratic fields">
        <p>
          For squarefree d, the ring of integers of ℚ(√d) is <M>{"\\mathbb{Z}[\\sqrt d]"}</M> when d ≡ 2 or 3 (mod 4), and{" "}
          <M>{"\\mathbb{Z}\\left[\\tfrac{1 + \\sqrt d}{2}\\right]"}</M> when d ≡ 1 (mod 4). Indeed x + y√d has minimal
          polynomial <M>{"t^2 - 2xt + (x^2 - dy^2)"}</M>, so it is an integer exactly when 2x and{" "}
          <M>{"x^2 - dy^2"}</M> lie in ℤ, and checking cases modulo 4 gives the answer.
        </p>
      </Example>

      <Remark title="why the larger ring">
        <p>
          The ring <M>{"\\mathbb{Z}[\\sqrt{-3}]"}</M> is not integrally closed, and there unique factorisation fails. In{" "}
          <M>{"\\mathbb{Z}[\\omega]"}</M> it holds: 2 is prime there, and 1 ± √−3 are 2 times units. Other cyclotomic
          examples: the ring of integers of <M>{"\\mathbb{Q}(\\zeta_n)"}</M> is <M>{"\\mathbb{Z}[\\zeta_n]"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a complex number an algebraic integer?</p>,
      answer: { kind: "choice", options: ["When it is a root of a monic polynomial with integer coefficients", "When it is a root of any polynomial with rational coefficients", "When its real and imaginary parts are integers", "When its absolute value is an integer"], correct: [0] },
    },
    {
      key: "half",
      rung: "check",
      prompt: <p>Is ½ an algebraic integer?</p>,
      answer: { kind: "choice", options: ["No: the only rational algebraic integers are the integers", "Yes, it is a root of 2x − 1", "Yes, every rational number is", "Only in ℚ(√2)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose d = −7. What is the constant term of the minimal polynomial of ω = (1 + √−7)/2?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "five",
      rung: "apply",
      prompt: <p>What is the ring of integers of ℚ(√5)?</p>,
      answer: { kind: "choice", options: ["ℤ[(1 + √5)/2]", "ℤ[√5]", "ℤ", "ℚ[√5]"], correct: [0] },
    },
    {
      key: "rank",
      rung: "apply",
      prompt: <p>K has degree 3 over ℚ. What is the rank of its ring of integers as a ℤ-module?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that a rational number which is an algebraic integer is an integer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the number as p/q in lowest terms and substitutes it into a monic integer polynomial of degree n.",
          "Multiplies by qⁿ to find that q divides pⁿ.",
          "Uses that p and q are coprime to conclude q = ±1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that (1 + √5)/2 is an algebraic integer, and explain why (1 + √7)/2 is not.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds that (1 + √5)/2 is a root of x² − x − 1, which is monic with integer coefficients.",
          "Finds that the minimal polynomial of (1 + √7)/2 is x² − x − 3/2, which does not have integer coefficients.",
          "Uses that an algebraic integer has an integer minimal polynomial. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Multiplying an algebraic number by all its conjugates gives a rational number, its norm. The norm turns questions
        about factorisation in a number field into questions about ordinary integers.
      </p>
      <p>Next, norm, trace and discriminant.</p>
    </>
  ),
};
