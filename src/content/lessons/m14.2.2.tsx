import { M } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PowerCycleViz } from "@/components/viz/PowerCycleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.2.2",
  minutes: 80,
  links: {
    revisits: ["m14.2.1", "m11.4.2", "m7.1.4"],
    foreshadows: ["m14.2.3", "m14.3.3", "m14.4.1"],
  },

  puzzle: (
    <>
      <p>
        Mod 7, the powers of 3 are 3, 2, 6, 4, 5, 1: they visit every non-zero residue. Gauss called such a number a primitive
        root. Does every finite field have an element whose powers reach everything?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a field and an element, and follow its powers round the non-zero elements.</p>
      <PowerCycleViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the multiplicative group is cyclic">
        <p>
          For any finite field <M>{"\\mathbb{F}_q"}</M>, the group <M>{"\\mathbb{F}_q^\\times"}</M> of non-zero elements is
          cyclic of order <M>{"q - 1"}</M>. More generally, every finite subgroup of the multiplicative group of a field is
          cyclic.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"G"}</M> have order <M>{"m"}</M>. For each divisor <M>{"d"}</M> of <M>{"m"}</M>, the elements of order{" "}
          <M>{"d"}</M> are roots of <M>{"x^d - 1"}</M>, which has at most <M>{"d"}</M> roots in a field. If there is one such
          element <M>{"g"}</M>, its powers are already <M>{"d"}</M> roots, so all elements of order <M>{"d"}</M> lie in{" "}
          <M>{"\\langle g \\rangle"}</M>, and there are exactly <M>{"\\varphi(d)"}</M> of them. So the number of elements of
          order <M>{"d"}</M> is 0 or <M>{"\\varphi(d)"}</M>. Since <M>{"\\sum_{d \\mid m} \\varphi(d) = m"}</M> and every
          element has some order, none of these counts can be 0. In particular there are <M>{"\\varphi(m) \\ge 1"}</M>{" "}
          elements of order <M>{"m"}</M>.
        </p>
      </Proof>

      <Theorem title="subfields">
        <p>
          The subfields of <M>{"\\mathbb{F}_{p^n}"}</M> are exactly the <M>{"\\mathbb{F}_{p^d}"}</M> with{" "}
          <M>{"d \\mid n"}</M>, one for each divisor, consisting of the roots of <M>{"x^{p^d} - x"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"K \\subseteq \\mathbb{F}_{p^n}"}</M> has degree <M>{"d"}</M> over <M>{"\\mathbb{F}_p"}</M>, the tower law
          gives <M>{"d \\mid n"}</M>, and <M>{"K"}</M> is the set of roots of <M>{"x^{p^d} - x"}</M>, so it is unique.
          Conversely if <M>{"d \\mid n"}</M>, then <M>{"p^d - 1"}</M> divides <M>{"p^n - 1"}</M>, so{" "}
          <M>{"x^{p^d} - x"}</M> divides <M>{"x^{p^n} - x"}</M> and all its roots lie in <M>{"\\mathbb{F}_{p^n}"}</M>.
        </p>
      </Proof>

      <Example title="𝔽₁₆">
        <p>
          The subfields of <M>{"\\mathbb{F}_{16}"}</M> are <M>{"\\mathbb{F}_2, \\mathbb{F}_4, \\mathbb{F}_{16}"}</M>, but not{" "}
          <M>{"\\mathbb{F}_8"}</M>, since 3 does not divide 4. Its multiplicative group is cyclic of order 15, with{" "}
          <M>{"\\varphi(15) = 8"}</M> generators.
        </p>
      </Example>

      <Remark title="irreducible polynomials">
        <p>
          A consequence: <M>{"x^{p^n} - x"}</M> is the product of all monic irreducible polynomials over{" "}
          <M>{"\\mathbb{F}_p"}</M> whose degree divides <M>{"n"}</M>. Counting degrees gives Gauss&rsquo;s formula for the
          number of irreducibles of each degree, roughly <M>{"p^n/n"}</M>, a finite-field cousin of the prime number theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "order",
      rung: "check",
      prompt: <p>What is the order of the group <M>{"\\mathbb{F}_{9}^\\times"}</M>?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "gens",
      rung: "check",
      prompt: <p>How many generators does <M>{"\\mathbb{F}_{13}^\\times"}</M> have?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "sub",
      rung: "apply",
      prompt: <p>How many subfields does <M>{"\\mathbb{F}_{2^{6}}"}</M> have, including itself?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "f8",
      rung: "apply",
      prompt: <p>Why does every non-zero element other than 1 generate <M>{"\\mathbb{F}_8^\\times"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its order is 7, a prime, so every element except 1 has order 7.",
          "Because 8 is a power of 2.",
          "Because 𝔽₈ has no subfields.",
          "It is not true.",
        ],
        correct: [0],
      },
    },
    {
      key: "prim7",
      rung: "apply",
      prompt: <p>Is 2 a primitive root mod 7?</p>,
      answer: { kind: "choice", options: ["Yes", "No: its order is 3"], correct: [1] },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove that a finite subgroup of the multiplicative group of a field is cyclic.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows the number of elements of each order d is 0 or φ(d), using that xᵈ − 1 has at most d roots.",
          "Uses Σ_{d | m} φ(d) = m to show no count is 0.",
          "Concludes there is an element of order m, so the group is cyclic.",
        ],
      },
    },
    {
      key: "sq",
      rung: "stretch",
      prompt: <p>Use cyclicity to show that, for odd <M>{"q"}</M>, exactly half of the non-zero elements of <M>{"\\mathbb{F}_q"}</M> are squares.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the group as the powers of a generator g of even order q − 1.",
          "Notes gᵏ is a square exactly when k is even.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the multiplicative group of a finite field is cyclic, how many generators it has, which subfields 𝔽_{pⁿ} contains, and how x^{pⁿ} − x factors into irreducibles.",

  glimpse: (
    <p>
      The next lesson uses finite fields to correct errors in transmitted data. Later, the Galois correspondence explains the
      subfield lattice by the cyclic Galois group generated by Frobenius.
    </p>
  ),
};
