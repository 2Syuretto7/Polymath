import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RectangleDivisorsViz } from "@/components/viz/RectangleDivisorsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.4.1",
  minutes: 75,
  links: {
    revisits: ["m1.5.3", "m1.3.1", "m0.1.4"],
    foreshadows: ["m4.4.2", "m4.4.3", "m7.7.1"],
  },

  puzzle: (
    <>
      <p>
        Why is a 12 by 12 box of sweets so much easier to share out than a box of 13? Twelve sweets can be split equally
        among 2, 3, 4 or 6 children; thirteen only among 13, or 1. Which numbers divide which is the oldest question in
        number theory, and from it comes a simple statement about remainders that sits underneath every calculator, every
        calendar and every secure website.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Lay n tiles in rows of width d. When does a perfect rectangle appear, and what is left over when it does not?
      </p>
      <RectangleDivisorsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="divisibility">
        <p>
          For integers a and b, we say <strong>a divides b</strong>, written <M>{"a \\mid b"}</M>, if b = ak for some
          integer k. Then a is a <strong>divisor</strong> or <strong>factor</strong> of b, and b is a{" "}
          <strong>multiple</strong> of a. So <M>{"3 \\mid 12"}</M> and <M>{"-3 \\mid 12"}</M>, while{" "}
          <M>{"5 \\nmid 12"}</M>. Every integer divides 0, and 1 divides everything.
        </p>
      </Definition>

      <Theorem title="properties of divisibility">
        <p>For integers a, b, c, x and y:</p>
        <ol>
          <li>if <M>{"a \\mid b"}</M> and <M>{"b \\mid c"}</M> then <M>{"a \\mid c"}</M>;</li>
          <li>if <M>{"a \\mid b"}</M> and <M>{"a \\mid c"}</M> then <M>{"a \\mid bx + cy"}</M>;</li>
          <li>if <M>{"a \\mid b"}</M> and b ≠ 0 then |a| ≤ |b|.</li>
        </ol>
      </Theorem>
      <Proof>
        <p>
          For the second: b = ak and c = al, so bx + cy = a(kx + ly). The first is similar. For the third, b = ak with k ≠ 0,
          so |k| ≥ 1 and |b| = |a||k| ≥ |a|.
        </p>
      </Proof>

      <Theorem title="the division algorithm">
        <p>For any integer n and any positive integer d there are unique integers q and r with</p>
        <MD>{"n = qd + r, \\qquad 0 \\le r < d."}</MD>
      </Theorem>
      <Proof>
        <p>
          Existence: the set of non-negative numbers of the form n − kd is non-empty, so by the well-ordering principle it
          has a least element r = n − qd. If r ≥ d, then r − d would be a smaller element, so r &lt; d. Uniqueness: if qd + r
          = q′d + r′ with both remainders in [0, d), then d divides r − r′, which lies strictly between −d and d, so r = r′
          and then q = q′.
        </p>
      </Proof>

      <Example title="divisibility tests">
        <p>
          Since 10 leaves remainder 1 on division by 9, so does every power of 10. Hence a number leaves the same remainder
          on division by 9 as the sum of its digits: 7 + 3 + 8 = 18, so 738 is divisible by 9. Since 10 leaves remainder −1
          on division by 11, the alternating sum of the digits gives the test for 11: for 9,163, 3 − 6 + 1 − 9 = −11, so 11
          divides it. The modular arithmetic of a later lesson makes such arguments routine.
        </p>
      </Example>

      <Remark title="even and odd, and beyond">
        <p>
          With d = 2 the division algorithm says every integer is 2q or 2q + 1, even or odd, and never both. With d = 3,
          every integer is 3q, 3q + 1 or 3q + 2, which is how one proves, say, that a square leaves remainder 0 or 1 on
          division by 3: <M>{"(3q \\pm 1)^2 = 3(3q^2 \\pm 2q) + 1"}</M>. Splitting into cases by remainder is one of the
          most useful moves in number theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "div",
      rung: "check",
      prompt: <p>Which of these are true? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["7 | 91", "6 | 15", "−4 | 20", "5 | 0"], correct: [0, 2, 3] },
    },
    {
      key: "rem",
      rung: "check",
      prompt: <p>What is the remainder when 100 is divided by 7?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "neg",
      rung: "apply",
      prompt: <p>In the division algorithm, what is the remainder r when n = −17 and d = 5?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many positive divisors does 36 have?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "nine",
      rung: "apply",
      prompt: <p>What is the remainder when 123,456 is divided by 9?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "square",
      rung: "prove",
      prompt: <p>Prove that the square of every integer leaves remainder 0 or 1 on division by 4.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Splits into cases: the integer is even, 2k, or odd, 2k + 1.",
          "Computes (2k)² = 4k² and (2k + 1)² = 4(k² + k) + 1.",
          "Concludes the remainder is 0 or 1. Any correct case argument earns full credit.",
        ],
      },
    },
    {
      key: "three",
      rung: "stretch",
      prompt: <p>Prove that the product of any three consecutive integers is divisible by 6.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows one of the three is even, so 2 divides the product.",
          "Shows one of the three is a multiple of 3, by considering remainders on division by 3.",
          "Concludes, noting that 2 and 3 together give 6 (since they share no factor), or notes the product is 3! times a binomial coefficient. A clear proof earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what it means for one integer to divide another, the basic properties of divisibility, the division algorithm and why it is true, and how the digit-sum test for 9 works.",

  glimpse: (
    <p>
      The next lesson studies the numbers with no divisors but 1 and themselves, the primes. Abstract Algebra asks which
      other number systems have a division algorithm.
    </p>
  ),
};
