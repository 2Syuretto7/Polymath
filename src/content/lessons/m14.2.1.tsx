import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { FiniteFieldViz } from "@/components/viz/FiniteFieldViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.2.1",
  minutes: 85,
  links: {
    revisits: ["m14.1.3", "m7.6.4", "m11.2.3"],
    foreshadows: ["m14.2.2", "m14.2.3", "m14.3.1"],
  },

  puzzle: (
    <>
      <p>
        The integers mod 5 form a field with 5 elements, but the integers mod 4 do not, since <M>{"2 \\cdot 2 = 0"}</M>. Is
        there any field with exactly 4 elements? With 6? Which sizes are possible at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Build small fields from polynomials mod an irreducible, and compare with a reducible modulus.</p>
      <FiniteFieldViz />
    </>
  ),

  theory: (
    <>
      <Definition title="characteristic and prime field">
        <p>
          The <strong>characteristic</strong> of a field is the least <M>{"p > 0"}</M> with{" "}
          <M>{"1 + 1 + \\cdots + 1 = 0"}</M> (<M>{"p"}</M> terms), or 0 if there is none. A finite field has prime
          characteristic <M>{"p"}</M>, and its smallest subfield is <M>{"\\mathbb{F}_p = \\mathbb{Z}/p"}</M>.
        </p>
      </Definition>

      <Theorem title="the size of a finite field">
        <p>A finite field has <M>{"q = p^n"}</M> elements, where <M>{"p"}</M> is its characteristic and <M>{"n = [F : \\mathbb{F}_p]"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          <M>{"F"}</M> is a vector space of some finite dimension <M>{"n"}</M> over <M>{"\\mathbb{F}_p"}</M>, so it has{" "}
          <M>{"p^n"}</M> elements. The characteristic is prime because if <M>{"p = ab"}</M> then{" "}
          <M>{"(a \\cdot 1)(b \\cdot 1) = 0"}</M> forces one factor to vanish.
        </p>
      </Proof>

      <Theorem title="existence and uniqueness">
        <p>
          For every prime power <M>{"q = p^n"}</M> there is a field with <M>{"q"}</M> elements, namely the splitting field of{" "}
          <M>{"x^q - x"}</M> over <M>{"\\mathbb{F}_p"}</M>, and any two fields with <M>{"q"}</M> elements are isomorphic. We
          write <M>{"\\mathbb{F}_q"}</M> or <M>{"\\mathrm{GF}(q)"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          In characteristic <M>{"p"}</M>, <M>{"(a + b)^p = a^p + b^p"}</M>, since the middle binomial coefficients are
          divisible by <M>{"p"}</M>. So the roots of <M>{"x^q - x"}</M> in its splitting field are closed under addition and
          multiplication, and under inverses: they form a field. The derivative is <M>{"q x^{q-1} - 1 = -1"}</M>, which has
          no common root with <M>{"x^q - x"}</M>, so the <M>{"q"}</M> roots are distinct. That field has exactly{" "}
          <M>{"q"}</M> elements. Conversely, in any field <M>{"F"}</M> with <M>{"q"}</M> elements, the non-zero elements form
          a group of order <M>{"q - 1"}</M>, so <M>{"a^{q-1} = 1"}</M> and <M>{"a^q = a"}</M> for every <M>{"a"}</M>.
          Thus <M>{"F"}</M> is a splitting field of <M>{"x^q - x"}</M>, and splitting fields are unique.
        </p>
      </Proof>

      <Example title="the field with 4 elements">
        <p>
          <M>{"x^2 + x + 1"}</M> has no root in <M>{"\\mathbb{F}_2"}</M>, so it is irreducible, and{" "}
          <M>{"\\mathbb{F}_4 = \\mathbb{F}_2[x]/(x^2 + x + 1) = \\{0, 1, x, x + 1\\}"}</M>, with{" "}
          <M>{"x^2 = x + 1"}</M> and <M>{"x(x + 1) = 1"}</M>.
        </p>
      </Example>

      <Remark title="the Frobenius map">
        <p>
          The map <M>{"a \\mapsto a^p"}</M> is an automorphism of <M>{"\\mathbb{F}_q"}</M> fixing exactly{" "}
          <M>{"\\mathbb{F}_p"}</M>. Its powers give all <M>{"n"}</M> automorphisms, so the Galois group of{" "}
          <M>{"\\mathbb{F}_{p^n}/\\mathbb{F}_p"}</M> is cyclic of order <M>{"n"}</M>. Note that <M>{"\\mathbb{F}_4"}</M> is
          not <M>{"\\mathbb{Z}/4"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "six",
      rung: "check",
      prompt: <p>Is there a field with 6 elements?</p>,
      answer: { kind: "choice", options: ["Yes", "No, 6 is not a prime power"], correct: [1] },
    },
    {
      key: "char",
      rung: "check",
      prompt: <p>What is the characteristic of a field with 81 elements?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "dim",
      rung: "apply",
      prompt: <p>What is the dimension of <M>{"\\mathbb{F}_{32}"}</M> over <M>{"\\mathbb{F}_2"}</M>?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: <p>In <M>{"\\mathbb{F}_4 = \\mathbb{F}_2[x]/(x^2 + x + 1)"}</M>, what is the inverse of <M>{"x"}</M>?</p>,
      answer: { kind: "choice", options: ["x + 1", "x", "1", "0"], correct: [0] },
    },
    {
      key: "frob",
      rung: "apply",
      prompt: <p>In characteristic 3, expand <M>{"(a + b)^3"}</M>.</p>,
      answer: { kind: "choice", options: ["a³ + b³", "a³ + 3a²b + 3ab² + b³", "a³ − b³", "3a³"], correct: [0] },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove that every finite field has a prime power number of elements.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows the characteristic is a prime p, since a factorisation p = ab would give zero divisors.",
          "Notes the field contains 𝔽ₚ and is a finite-dimensional vector space over it.",
          "Concludes a space of dimension n over 𝔽ₚ has pⁿ elements.",
        ],
      },
    },
    {
      key: "z4",
      rung: "stretch",
      prompt: <p>Explain why <M>{"\\mathbb{F}_4"}</M> and <M>{"\\mathbb{Z}/4"}</M> are not isomorphic even as additive groups.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes every element of 𝔽₄ satisfies a + a = 0, since the characteristic is 2.",
          "Notes 1 has additive order 4 in ℤ/4, so the groups differ.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why a finite field has prime power size, how to build one as 𝔽ₚ[x] modulo an irreducible polynomial, why the splitting field of x^q − x has exactly q elements, and what the Frobenius map does.",

  glimpse: (
    <p>
      The next lesson shows that the non-zero elements of a finite field form a cyclic group and describes all the subfields.
      Finite fields then power error-correcting codes.
    </p>
  ),
};
