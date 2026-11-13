import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { FactorMonoidViz } from "@/components/viz/FactorMonoidViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.1.1",
  minutes: 90,
  links: {
    revisits: ["m4.4.2", "m1.5.2", "m4.4.3"],
    foreshadows: ["m11.1.2", "m11.3.1", "m29.1.1"],
  },

  puzzle: (
    <>
      <p>
        Every whole number breaks into primes in only one way: 360 is 2 · 2 · 2 · 3 · 3 · 5 and nothing else. This feels too
        obvious to need proof. Yet in the even numbers, 60 = 2 · 30 = 6 · 10, and none of 2, 30, 6 or 10 is a product of two
        even numbers. What makes the integers different?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a number system and a number, and list every way of writing the number as a product of irreducibles of that
        system. Compare the positive integers with the Hilbert numbers.
      </p>
      <FactorMonoidViz />
    </>
  ),

  theory: (
    <>
      <Definition title="irreducible and prime">
        <p>
          An integer <M>{"p > 1"}</M> is <strong>irreducible</strong> if its only positive divisors are 1 and{" "}
          <M>{"p"}</M>. It has the <strong>prime property</strong> if whenever <M>{"p \\mid ab"}</M>, then{" "}
          <M>{"p \\mid a"}</M> or <M>{"p \\mid b"}</M>. In the integers the two coincide, and we call such numbers primes; the
          lemma below is exactly the claim that irreducibles have the prime property.
        </p>
      </Definition>

      <Theorem title="Euclid's lemma">
        <p>If <M>{"p"}</M> is irreducible and <M>{"p \\mid ab"}</M>, then <M>{"p \\mid a"}</M> or <M>{"p \\mid b"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          Suppose <M>{"p \\nmid a"}</M>. The only positive divisors of <M>{"p"}</M> are 1 and <M>{"p"}</M>, so{" "}
          <M>{"\\gcd(p, a) = 1"}</M>. By Bézout there are integers <M>{"x, y"}</M> with <M>{"px + ay = 1"}</M>. Multiply by{" "}
          <M>{"b"}</M>: <M>{"pbx + (ab)y = b"}</M>. Both terms on the left are divisible by <M>{"p"}</M>, so{" "}
          <M>{"p \\mid b"}</M>.
        </p>
      </Proof>

      <Theorem title="the fundamental theorem of arithmetic">
        <p>
          Every integer <M>{"n > 1"}</M> is a product of primes, and this product is unique apart from the order of the
          factors. Equivalently, <M>{"n = \\prod_p p^{v_p(n)}"}</M> for unique exponents <M>{"v_p(n) \\ge 0"}</M>, almost all
          zero.
        </p>
      </Theorem>

      <Proof>
        <p>
          <em>Existence</em>, by strong induction: if <M>{"n"}</M> is prime we are done; otherwise <M>{"n = ab"}</M> with{" "}
          <M>{"1 < a, b < n"}</M>, and both factor by hypothesis.
        </p>
        <p>
          <em>Uniqueness</em>: suppose <M>{"p_1 p_2 \\cdots p_r = q_1 q_2 \\cdots q_s"}</M>. Then <M>{"p_1"}</M> divides the
          right side, so by Euclid&rsquo;s lemma, applied repeatedly, <M>{"p_1 \\mid q_j"}</M> for some <M>{"j"}</M>, and since{" "}
          <M>{"q_j"}</M> is prime, <M>{"p_1 = q_j"}</M>. Cancel it from both sides and repeat. The factors pair off, so{" "}
          <M>{"r = s"}</M> and the lists agree up to order.
        </p>
      </Proof>

      <Example title="the Hilbert numbers">
        <p>
          The numbers <M>{"1, 5, 9, 13, \\dots"}</M>, of the form <M>{"4k + 1"}</M>, are closed under multiplication. Here 9,
          21 and 49 are irreducible, since 3 and 7 are not in the set. But
        </p>
        <MD>{"441 = 9 \\cdot 49 = 21 \\cdot 21."}</MD>
        <p>
          Existence still works; uniqueness fails, because 21 is irreducible but divides <M>{"9 \\cdot 49"}</M> without
          dividing either. There is no Bézout identity inside the Hilbert numbers, so Euclid&rsquo;s lemma fails.
        </p>
      </Example>

      <Remark title="what the exponents give">
        <p>
          Writing numbers by their exponents turns multiplication into addition: <M>{"v_p(ab) = v_p(a) + v_p(b)"}</M>. Then{" "}
          <M>{"a \\mid b"}</M> exactly when <M>{"v_p(a) \\le v_p(b)"}</M> for every <M>{"p"}</M>, and</p>
        <MD>{"\\gcd(a, b) = \\prod_p p^{\\min(v_p(a), v_p(b))}, \\qquad \\operatorname{lcm}(a, b) = \\prod_p p^{\\max(v_p(a), v_p(b))}."}</MD>
        <p>
          The number of divisors of <M>{"n = \\prod p^{e_p}"}</M> is <M>{"\\prod (e_p + 1)"}</M>. In later courses, rings
          where unique factorisation fails, such as <M>{"\\mathbb{Z}[\\sqrt{-5}]"}</M> with <M>{"6 = 2 \\cdot 3 = (1 + \\sqrt{-5})(1 - \\sqrt{-5})"}</M>, led to the theory of ideals.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lemma",
      rung: "check",
      prompt: <p>Which statement is Euclid&rsquo;s lemma?</p>,
      answer: {
        kind: "choice",
        options: [
          "There are infinitely many primes.",
          "If a prime divides a product, it divides one of the factors.",
          "Every number is a product of primes.",
          "If a divides b and b divides c, then a divides c.",
        ],
        correct: [1],
      },
    },
    {
      key: "hilbert",
      rung: "check",
      prompt: <p>Which of these Hilbert numbers is irreducible among the Hilbert numbers 1, 5, 9, 13, …?</p>,
      answer: { kind: "choice", options: ["45", "25", "33", "81"], correct: [2] },
    },
    {
      key: "divisors",
      rung: "apply",
      prompt: <p>How many positive divisors does 360 have?</p>,
      answer: { kind: "numeric", value: 24, tolerance: 0 },
    },
    {
      key: "gcd",
      rung: "apply",
      prompt: <p>Using exponents, find <M>{"\\gcd(2^3 \\cdot 3^2 \\cdot 7,\\ 2^2 \\cdot 3^5 \\cdot 5)"}</M>.</p>,
      answer: { kind: "numeric", value: 36, tolerance: 0 },
    },
    {
      key: "val",
      rung: "apply",
      prompt: <p>What is the exponent of 2 in the prime factorisation of <M>{"100!"}</M>?</p>,
      answer: { kind: "numeric", value: 97, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"\\gcd(a, b) = 1"}</M> and <M>{"ab"}</M> is a perfect square, then <M>{"a"}</M> and <M>{"b"}</M> are both perfect squares.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that every exponent in the factorisation of ab is even.",
          "Uses coprimality: each prime divides only one of a and b, so its exponent in that number equals its exponent in ab.",
          "Concludes all exponents of a and of b are even, so both are squares.",
        ],
      },
    },
    {
      key: "where",
      rung: "stretch",
      prompt: <p>In the even numbers, 60 = 2 · 30 = 6 · 10. Which step of the uniqueness proof breaks down there, and why?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies Euclid’s lemma as the failing step: 6 divides 2 · 30 but divides neither factor within the even numbers.",
          "Connects this to the lack of Bézout, or of the number 1, in the even numbers.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the fundamental theorem of arithmetic, why Euclid’s lemma is the heart of uniqueness and how Bézout proves it, the Hilbert numbers where uniqueness fails, and what the prime exponents tell you about divisors, gcd and lcm.",

  glimpse: (
    <p>
      The next lesson proves in several ways that the primes never run out. Multiplicative functions, later in this course, are
      built from the exponents, and algebraic number theory studies rings where unique factorisation fails.
    </p>
  ),
};
