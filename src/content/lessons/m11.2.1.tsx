import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LinearCongruenceViz } from "@/components/viz/LinearCongruenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.2.1",
  minutes: 90,
  links: {
    revisits: ["m4.4.4", "m4.4.3", "m2.1.1"],
    foreshadows: ["m11.2.2", "m11.2.3", "m11.6.1"],
  },

  puzzle: (
    <>
      <p>
        A tabla player loops a cycle of 16 beats and wants to land on beat 4 by striding in jumps of 6. Can they? With jumps of
        5 she can reach every beat; with jumps of 6 only the even ones. When does a congruence like <M>{"6x \\equiv 4 \\pmod{16}"}</M>{" "}
        have a solution, and how many?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose n, a and b. The diagram sends each residue x to ax mod n. Find settings where b is hit, and where it is missed.</p>
      <LinearCongruenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the integers modulo n">
        <p>
          <M>{"a \\equiv b \\pmod n"}</M> means <M>{"n \\mid a - b"}</M>. This is an equivalence relation, and its classes{" "}
          <M>{"\\bar 0, \\bar 1, \\dots, \\overline{n-1}"}</M> form <M>{"\\mathbb{Z}/n\\mathbb{Z}"}</M>. Addition and
          multiplication of classes are well defined: if <M>{"a \\equiv a'"}</M> and <M>{"b \\equiv b'"}</M>, then{" "}
          <M>{"ab - a'b' = a(b - b') + b'(a - a')"}</M> is divisible by <M>{"n"}</M>. So{" "}
          <M>{"\\mathbb{Z}/n\\mathbb{Z}"}</M> is a commutative ring.
        </p>
      </Definition>

      <Theorem title="linear congruences">
        <p>
          Let <M>{"g = \\gcd(a, n)"}</M>. The congruence <M>{"ax \\equiv b \\pmod n"}</M> has a solution if and only if{" "}
          <M>{"g \\mid b"}</M>, and then it has exactly <M>{"g"}</M> solutions modulo <M>{"n"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"ax - b = ny"}</M>, then <M>{"g"}</M> divides <M>{"ax - ny = b"}</M>. Conversely, Bézout gives{" "}
          <M>{"ar + ns = g"}</M>; if <M>{"b = gc"}</M>, then <M>{"x_0 = rc"}</M> satisfies <M>{"ax_0 \\equiv b"}</M>. Now{" "}
          <M>{"ax \\equiv ax_0"}</M> exactly when <M>{"n \\mid a(x - x_0)"}</M>, that is, when{" "}
          <M>{"\\tfrac{n}{g} \\mid \\tfrac{a}{g}(x - x_0)"}</M>; as <M>{"\\tfrac{a}{g}"}</M> and <M>{"\\tfrac{n}{g}"}</M> are
          coprime, when <M>{"x \\equiv x_0 \\pmod{n/g}"}</M>. That gives the <M>{"g"}</M> solutions{" "}
          <M>{"x_0, x_0 + \\tfrac ng, \\dots, x_0 + (g - 1)\\tfrac ng"}</M> modulo <M>{"n"}</M>.
        </p>
      </Proof>

      <Theorem title="units">
        <p>
          <M>{"\\bar a"}</M> has a multiplicative inverse in <M>{"\\mathbb{Z}/n\\mathbb{Z}"}</M> exactly when{" "}
          <M>{"\\gcd(a, n) = 1"}</M>. The units form a group <M>{"(\\mathbb{Z}/n\\mathbb{Z})^\\times"}</M>, and{" "}
          <M>{"\\mathbb{Z}/n\\mathbb{Z}"}</M> is a field exactly when <M>{"n"}</M> is prime.
        </p>
      </Theorem>

      <Example title="an inverse by Euclid's algorithm">
        <p>Solve <M>{"17x \\equiv 5 \\pmod{43}"}</M>. Run the algorithm and work back:</p>
        <MD>{"43 = 2 \\cdot 17 + 9,\\quad 17 = 9 + 8,\\quad 9 = 8 + 1 \\ \\Rightarrow\\ 1 = 9 - 8 = 2 \\cdot 9 - 17 = 2 \\cdot 43 - 5 \\cdot 17."}</MD>
        <p>
          So <M>{"17^{-1} \\equiv -5 \\equiv 38"}</M>, and <M>{"x \\equiv 5 \\cdot 38 = 190 \\equiv 18 \\pmod{43}"}</M>. Check:{" "}
          <M>{"17 \\cdot 18 = 306 = 7 \\cdot 43 + 5"}</M>.
        </p>
      </Example>

      <Remark title="divisibility tests">
        <p>
          Since <M>{"10 \\equiv 1 \\pmod 9"}</M>, a number is congruent to its digit sum modulo 9, which is why casting out
          nines checks arithmetic. Since <M>{"10 \\equiv -1 \\pmod{11}"}</M>, a number is congruent modulo 11 to the
          alternating sum of its digits, starting from the units digit.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "units",
      rung: "check",
      prompt: <p>How many units does <M>{"\\mathbb{Z}/12\\mathbb{Z}"}</M> have?</p>,
      answer: { kind: "choice", options: ["2", "4", "6", "11"], correct: [1] },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which congruence has no solution?</p>,
      answer: {
        kind: "choice",
        options: ["5x ≡ 3 (mod 7)", "6x ≡ 4 (mod 9)", "4x ≡ 6 (mod 10)", "3x ≡ 0 (mod 12)"],
        correct: [1],
      },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: <p>Find the inverse of 7 modulo 26, as a number from 0 to 25.</p>,
      answer: { kind: "numeric", value: 15, tolerance: 0 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many solutions modulo 30 does <M>{"12x \\equiv 18 \\pmod{30}"}</M> have?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "eleven",
      rung: "apply",
      prompt: <p>What is the remainder when 123456789 is divided by 11?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that <M>{"ax \\equiv b \\pmod n"}</M> has a solution if and only if <M>{"\\gcd(a, n)"}</M> divides <M>{"b"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows necessity: a solution gives b = ax − ny, which g divides.",
          "Shows sufficiency using Bézout: ar + ns = g, then scale by b / g.",
          "Checks that the scaled value really satisfies the congruence.",
        ],
      },
    },
    {
      key: "field",
      rung: "stretch",
      prompt: <p>Why can we not define division by 4 in <M>{"\\mathbb{Z}/12\\mathbb{Z}"}</M>, though we can divide by 5? What does this have to do with 12 not being prime?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that 4x ≡ 1 (mod 12) has no solution since gcd(4, 12) = 4, while 5 · 5 ≡ 1.",
          "Connects this with zero divisors, such as 4 · 3 ≡ 0, which only appear when n is composite.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why arithmetic modulo n is well defined, when ax ≡ b (mod n) can be solved and how many solutions it has, how to find an inverse with Euclid’s algorithm, and when the integers modulo n form a field.",

  glimpse: (
    <p>
      The next lesson solves several congruences at once with the Chinese remainder theorem. After that, Fermat and Euler show
      how powers behave modulo n, and Diophantine equations return to linear equations in whole numbers.
    </p>
  ),
};
