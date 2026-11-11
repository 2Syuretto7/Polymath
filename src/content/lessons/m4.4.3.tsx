import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GcdViz } from "@/components/viz/GcdViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.4.3",
  minutes: 85,
  links: {
    revisits: ["m4.4.1", "m4.4.2", "m1.5.3"],
    foreshadows: ["m4.4.4", "m4.5.1", "m7.7.1"],
  },

  puzzle: (
    <>
      <p>
        A floor measures 21 metres by 15. What are the largest square tiles that will cover it exactly, with no cutting?
        You could list all the divisors of both numbers and compare. For numbers with hundreds of digits, as in modern
        cryptography, nobody can list their divisors. Yet a procedure in Euclid&rsquo;s <cite>Elements</cite>, more than
        two thousand years old and one of the oldest algorithms still in daily use, answers the question in a few hundred
        steps.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Cut the largest squares you can from the rectangle, then from what is left, and so on. Step through and watch the
        remainders shrink. Try a pair of consecutive Fibonacci numbers, such as 34 and 21.
      </p>
      <GcdViz />
    </>
  ),

  theory: (
    <>
      <Definition title="greatest common divisor">
        <p>
          For integers a and b, not both 0, the <strong>greatest common divisor</strong> gcd(a, b) is the largest integer
          dividing both. If gcd(a, b) = 1, a and b are <strong>coprime</strong>. The <strong>least common multiple</strong>{" "}
          lcm(a, b) is the smallest positive integer that both divide.
        </p>
      </Definition>

      <Theorem title="Euclid&rsquo;s algorithm">
        <p>If a = qb + r, then gcd(a, b) = gcd(b, r). Repeating, the remainders decrease until one is 0, and the last non-zero remainder is gcd(a, b).</p>
      </Theorem>
      <Proof>
        <p>
          Any common divisor of a and b divides r = a − qb, and any common divisor of b and r divides a = qb + r. So the
          two pairs have exactly the same common divisors, and the same greatest one. The remainders are non-negative and
          strictly decreasing, so the process stops, and gcd(g, 0) = g.
        </p>
      </Proof>

      <Example title="gcd(252, 198)">
        <MD>{"252 = 1 \\cdot 198 + 54,\\quad 198 = 3 \\cdot 54 + 36,\\quad 54 = 1 \\cdot 36 + 18,\\quad 36 = 2 \\cdot 18 + 0."}</MD>
        <p>
          So gcd(252, 198) = 18. Working backwards: 18 = 54 − 36 = 54 − (198 − 3 · 54) = 4 · 54 − 198 = 4(252 − 198) −
          198 = 4 · 252 − 5 · 198.
        </p>
      </Example>

      <Theorem title="Bézout&rsquo;s identity">
        <p>
          For integers a and b, not both 0, there are integers x and y with ax + by = gcd(a, b). In fact gcd(a, b) is the
          smallest positive number of the form ax + by.
        </p>
      </Theorem>
      <Proof>
        <p>
          Let d be the smallest positive value of ax + by, which exists by well-ordering. Divide a by d: a = qd + r with 0
          ≤ r &lt; d. Then r = a − q(ax + by) is also of the form ax′ + by′, and it is smaller than d, so it must be 0:
          d divides a. Likewise d divides b. And every common divisor of a and b divides ax + by = d. So d is the gcd.
        </p>
      </Proof>

      <Theorem title="Euclid&rsquo;s lemma">
        <p>If p is prime and <M>{"p \\mid ab"}</M>, then <M>{"p \\mid a"}</M> or <M>{"p \\mid b"}</M>.</p>
      </Theorem>
      <Proof>
        <p>
          Suppose p does not divide a. The only positive divisors of p are 1 and p, so gcd(p, a) = 1, and px + ay = 1 for
          some x, y. Multiply by b: b = pbx + aby. Now p divides both terms on the right, so p divides b. This completes the
          proof of unique factorisation: if two prime factorisations were equal, a prime on one side divides the product
          on the other, so it equals one of those primes, which can be cancelled, and induction finishes.
        </p>
      </Proof>

      <Remark title="how fast?">
        <p>
          Every two steps the remainder at least halves, so the number of steps grows only with the number of
          digits, not with the size of the numbers. Lamé showed in 1844 that the worst case is a pair of consecutive
          Fibonacci numbers, where every quotient is 1, and that the number of steps is never more than five times the
          number of digits of the smaller number. Also, gcd(a, b) · lcm(a, b) = ab for positive a and b, so the lcm is just as easy to find.
          Bézout&rsquo;s identity is also how computers find inverses in modular arithmetic, as the next lesson shows.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "gcd",
      rung: "check",
      prompt: <p>What is gcd(84, 36)?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "lcm",
      rung: "check",
      prompt: <p>What is lcm(12, 18)?</p>,
      answer: { kind: "numeric", value: 36 },
    },
    {
      key: "steps",
      rung: "apply",
      prompt: <p>Use Euclid&rsquo;s algorithm to find gcd(1071, 462).</p>,
      answer: { kind: "numeric", value: 21 },
    },
    {
      key: "bez",
      rung: "apply",
      prompt: <p>Find an integer x such that 7x + 5y = 1 for some integer y, with 0 ≤ x &lt; 5.</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "coins",
      rung: "apply",
      prompt: (
        <p>
          With only 6-rupee and 10-rupee coins, paying and receiving change, which amounts can be exchanged exactly?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["Any whole amount", "Exactly the even amounts", "Exactly the multiples of 6", "Exactly the multiples of 10"],
        correct: [1],
      },
    },
    {
      key: "lemma",
      rung: "prove",
      prompt: <p>Prove Euclid&rsquo;s lemma: if a prime p divides ab, then p divides a or p divides b. You may use Bézout&rsquo;s identity.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes p does not divide a and deduces gcd(p, a) = 1.",
          "Writes 1 = px + ay and multiplies through by b.",
          "Concludes p divides b since it divides both terms. A clear proof earns full credit.",
        ],
      },
    },
    {
      key: "fib",
      rung: "stretch",
      prompt: (
        <p>
          Prove that consecutive Fibonacci numbers are coprime, and count the division steps Euclid&rsquo;s algorithm takes
          on <M>{"F_{n+1}"}</M> and <M>{"F_n"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that F₍ₙ₊₁₎ = 1 · Fₙ + F₍ₙ₋₁₎, so each step replaces a consecutive pair with the previous one.",
          "Concludes by induction that the gcd equals gcd(F₂, F₁) = 1.",
          "Counts the steps, about n − 1 depending on the starting convention, each with quotient 1. Any reasonable count with the right idea earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the gcd is, how Euclid's algorithm finds it and why it works, Bézout's identity and how to find x and y by working backwards, and how Euclid's lemma gives unique factorisation.",

  glimpse: (
    <p>
      The next lesson builds arithmetic on remainders, where Bézout&rsquo;s identity finds inverses. The algorithms chapter
      measures how fast procedures like Euclid&rsquo;s run.
    </p>
  ),
};
