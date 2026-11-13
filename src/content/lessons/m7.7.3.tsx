import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { NormFactorViz } from "@/components/viz/NormFactorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.7.3",
  minutes: 90,
  links: {
    revisits: ["m7.7.2", "m11.1.1", "m7.6.1"],
    foreshadows: ["m7.7.4", "m7.7.5", "m29.2.1"],
  },

  puzzle: (
    <>
      <p>
        In 1847 Gabriel Lam&eacute; announced a proof of Fermat&rsquo;s Last Theorem to the Paris Academy. It factored{" "}
        <M>{"x^n + y^n"}</M> using complex roots of unity and assumed that factorisation into primes was unique there, as in
        the integers. Liouville objected at once, and Kummer had already found that the assumption fails. In{" "}
        <M>{"\\mathbb{Z}[\\sqrt{-5}]"}</M> it fails for a number as small as 6. What makes factorisation unique, when it is?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a number and see two factorisations in <M>{"\\mathbb{Z}[\\sqrt{-5}]"}</M>. The norm{" "}
        <M>{"a^2 + 5b^2"}</M> shows that none of the factors can be broken down further.
      </p>
      <NormFactorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="irreducibles, primes and associates">
        <p>
          In an integral domain, a non-zero non-unit <M>{"p"}</M> is <strong>irreducible</strong> if <M>{"p = ab"}</M>{" "}
          forces <M>{"a"}</M> or <M>{"b"}</M> to be a unit, and <strong>prime</strong> if <M>{"p \\mid ab"}</M> forces{" "}
          <M>{"p \\mid a"}</M> or <M>{"p \\mid b"}</M>. Elements are <strong>associates</strong> if one is a unit times the
          other. Every prime is irreducible; the converse can fail.
        </p>
      </Definition>

      <Definition title="unique factorisation domain">
        <p>
          A <strong>UFD</strong> is an integral domain in which every non-zero non-unit is a product of irreducibles, and
          any two such factorisations agree up to order and associates.
        </p>
      </Definition>

      <Theorem title="every PID is a UFD">
        <p>In a principal ideal domain, factorisations into irreducibles exist and are unique.</p>
      </Theorem>

      <Proof>
        <p>
          Existence: if some <M>{"a"}</M> had no factorisation, it would be a product of two non-units, one of which has no
          factorisation either, and so on, giving a strictly increasing chain{" "}
          <M>{"(a) \\subsetneq (a_1) \\subsetneq (a_2) \\subsetneq \\cdots"}</M>, which cannot happen in a PID. Uniqueness: if{" "}
          <M>{"p_1 \\cdots p_m = q_1 \\cdots q_n"}</M>, then <M>{"p_1"}</M> is prime by Euclid&rsquo;s lemma, so it divides
          some <M>{"q_j"}</M>, and being irreducible, <M>{"q_j"}</M> is an associate of <M>{"p_1"}</M>. Cancel and repeat.
        </p>
      </Proof>

      <Example title="ℤ[√−5]">
        <p>
          The norm <M>{"N(a + b\\sqrt{-5}) = a^2 + 5b^2"}</M> is multiplicative and never equals 2 or 3. So 2, 3 and{" "}
          <M>{"1 \\pm \\sqrt{-5}"}</M>, of norms 4, 9 and 6, are irreducible: any factorisation would need a factor of norm 2
          or 3. The units are <M>{"\\pm 1"}</M>, so these are not associates, and
        </p>
        <MD>{"6 = 2 \\cdot 3 = (1 + \\sqrt{-5})(1 - \\sqrt{-5})"}</MD>
        <p>
          are two different factorisations. Here 2 is irreducible but not prime: it divides the product{" "}
          <M>{"(1 + \\sqrt{-5})(1 - \\sqrt{-5})"}</M> but neither factor.
        </p>
      </Example>

      <Remark title="ideal numbers">
        <p>
          Kummer rescued unique factorisation by adding &ldquo;ideal numbers&rdquo;, which Dedekind recast as ideals. In{" "}
          <M>{"\\mathbb{Z}[\\sqrt{-5}]"}</M>, the ideal <M>{"(6)"}</M> factors uniquely into prime ideals, such as{" "}
          <M>{"(2, 1 + \\sqrt{-5})^2"}</M> times two others. How far rings of integers are from being UFDs is measured by the
          class group, a central object of algebraic number theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "norm",
      rung: "check",
      prompt: <p>What is the norm of 1 + √−5, where N(a + b√−5) = a² + 5b²?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "def",
      rung: "check",
      prompt: <p>Which statement is true in every integral domain?</p>,
      answer: {
        kind: "choice",
        options: ["Every irreducible is prime.", "Every prime is irreducible.", "Every element is a unit.", "Factorisation is unique."],
        correct: [1],
      },
    },
    {
      key: "assoc",
      rung: "apply",
      prompt: <p>How many associates does 3 + 2i have in ℤ[i], counting itself?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "nine",
      rung: "apply",
      prompt: <p>In ℤ[√−5], 9 = 3 · 3 = (2 + √−5)(2 − √−5). What is N(2 + √−5)?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "ufd",
      rung: "apply",
      prompt: <p>Which of these are unique factorisation domains? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["ℤ", "ℤ[i]", "ℤ[√−5]", "ℚ[x]", "ℤ[x]"], correct: [0, 1, 3, 4] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that in an integral domain, every prime element is irreducible. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes p = ab with p prime; then p ∣ ab, so p ∣ a, say a = pc.",
          "Substitutes to get p = pcb, and cancels in the domain to get cb = 1.",
          "Concludes b is a unit, so p is irreducible.",
        ],
      },
    },
    {
      key: "notprime",
      rung: "stretch",
      prompt: <p>Show that 2 is not prime in ℤ[√−5]. What does this tell you about whether ℤ[√−5] is a PID?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes 2 divides 6 = (1 + √−5)(1 − √−5), but (1 ± √−5)/2 is not in the ring, so 2 divides neither factor.",
          "Notes 2 is irreducible, so irreducible does not imply prime here.",
          "Concludes ℤ[√−5] is not a PID, since in a PID irreducibles are prime. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between irreducible and prime elements, what a unique factorisation domain is, why every PID is a UFD, and how 6 = 2 · 3 = (1 + √−5)(1 − √−5) shows that unique factorisation can fail.",

  glimpse: (
    <p>
      The next lesson shows that polynomial rings over a UFD are again UFDs, through Gauss&rsquo;s lemma, and then turns to
      tests for irreducibility. Dedekind&rsquo;s ideals and the class group return in algebraic number theory, where unique
      factorisation of ideals replaces that of numbers.
    </p>
  ),
};
