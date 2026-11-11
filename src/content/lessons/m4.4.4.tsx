import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ModClockViz } from "@/components/viz/ModClockViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.4.4",
  minutes: 85,
  links: {
    revisits: ["m4.4.3", "m1.6.2", "m2.1.1"],
    foreshadows: ["m11.2.1", "m11.2.3", "m11.4.4"],
  },

  puzzle: (
    <>
      <p>
        If today is Wednesday, what day of the week will it be in 1,000 days? Nobody counts a thousand days. You divide by
        7, keep the remainder, 6, and count six days on: Tuesday. Arithmetic with remainders, the arithmetic of clocks and
        calendars, turns out to be a complete number system of its own, with its own rules for addition, multiplication and
        division. It is the arithmetic that keeps your bank card secure.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The residues mod n sit on a clock. Adding a turns the clock; multiplying by a sends each residue somewhere else.
        For which a does multiplication hit every residue? Compare n = 12 with n = 13.
      </p>
      <ModClockViz />
    </>
  ),

  theory: (
    <>
      <Definition title="congruence">
        <p>
          Let n be a positive integer. Integers a and b are <strong>congruent modulo n</strong>, written{" "}
          <M>{"a \\equiv b \\pmod n"}</M>, if <M>{"n \\mid a - b"}</M>: equivalently, if they leave the same remainder on
          division by n. Congruence mod n is an equivalence relation, and its n classes are the{" "}
          <strong>residue classes</strong> <M>{"[0], [1], \\dots, [n-1]"}</M>. The set of them is written{" "}
          <M>{"\\mathbb{Z}/n\\mathbb{Z}"}</M>, or <M>{"\\mathbb{Z}_n"}</M>.
        </p>
      </Definition>

      <Theorem title="arithmetic respects congruence">
        <p>
          If <M>{"a \\equiv a'"}</M> and <M>{"b \\equiv b' \\pmod n"}</M>, then <M>{"a + b \\equiv a' + b'"}</M> and{" "}
          <M>{"ab \\equiv a'b' \\pmod n"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          Write a′ = a + kn and b′ = b + ln. Then a′ + b′ = a + b + (k + l)n, and a′b′ = ab + (al + bk + kln)n. So
          addition and multiplication of residue classes are well defined: we may replace any number by anything congruent
          to it, at any point in a calculation.
        </p>
      </Proof>

      <Example title="huge powers">
        <p>
          What is the last digit of <M>{"7^{100}"}</M>? Mod 10, <M>{"7^2 = 49 \\equiv -1"}</M>, so{" "}
          <M>{"7^4 \\equiv 1"}</M>, and <M>{"7^{100} = (7^4)^{25} \\equiv 1"}</M>. The last digit is 1. Similarly, since
          10 ≡ 1 mod 9, every number is congruent mod 9 to its digit sum, which is the divisibility test from the first
          lesson of this chapter in one line.
        </p>
      </Example>

      <Theorem title="inverses">
        <p>
          The class of a has a multiplicative inverse mod n, some x with <M>{"ax \\equiv 1 \\pmod n"}</M>, if and only if
          gcd(a, n) = 1. In particular, when p is prime every non-zero class has an inverse, and{" "}
          <M>{"\\mathbb{Z}/p\\mathbb{Z}"}</M> is a field.
        </p>
      </Theorem>
      <Proof>
        <p>
          If gcd(a, n) = 1, Bézout gives ax + ny = 1, so <M>{"ax \\equiv 1"}</M>. Conversely, if ax = 1 + kn, any common
          divisor of a and n divides 1. To find the inverse of 7 mod 31: Euclid gives 31 = 4 · 7 + 3 and 7 = 2 · 3 + 1, so
          1 = 7 − 2(31 − 4 · 7) = 9 · 7 − 2 · 31, and the inverse is 9.
        </p>
      </Proof>

      <Remark title="where this leads">
        <p>
          Without inverses, cancellation fails: <M>{"2 \\cdot 3 \\equiv 2 \\cdot 0 \\pmod 6"}</M> though 3 ≢ 0. For a
          prime p, <strong>Fermat&rsquo;s little theorem</strong> says <M>{"a^{p-1} \\equiv 1 \\pmod p"}</M> whenever p
          does not divide a, and the <strong>Chinese remainder theorem</strong> solves several congruences with coprime
          moduli at once. Together these are the engine of RSA, the public key system that secures much of the internet.
          Check digits use the same arithmetic: the last digit of a 10-digit ISBN is chosen so that
        </p>
        <MD>{"\\textstyle\\sum_{i=1}^{10} i\\, x_i \\equiv 0 \\pmod{11},"}</MD>
        <p>which catches every single wrong digit and every swap of two neighbouring digits.</p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cong",
      rung: "check",
      prompt: <p>Which of these are true? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["17 ≡ 5 (mod 12)", "−1 ≡ 6 (mod 7)", "25 ≡ 3 (mod 8)", "100 ≡ 0 (mod 9)"],
        correct: [0, 1],
      },
    },
    {
      key: "day",
      rung: "check",
      prompt: <p>What is 1,000 mod 7?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "last",
      rung: "apply",
      prompt: <p>What is the last digit of <M>{"3^{2026}"}</M>?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: <p>Find the inverse of 5 modulo 17, as a number from 0 to 16.</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "units",
      rung: "apply",
      prompt: <p>How many of the classes 0, 1, …, 11 have a multiplicative inverse modulo 12?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "welldef",
      rung: "prove",
      prompt: (
        <p>
          Prove that if <M>{"a \\equiv a'"}</M> and <M>{"b \\equiv b' \\pmod n"}</M>, then <M>{"ab \\equiv a'b' \\pmod n"}</M>.
          Deduce that a perfect square is never congruent to 2 modulo 3.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes a′ = a + kn and b′ = b + ln and expands the product to show n divides a′b′ − ab.",
          "Notes every integer is congruent to 0, 1 or 2 mod 3 and squares these to get 0, 1 and 4 ≡ 1.",
          "Concludes no square is 2 mod 3. A clear proof earns full credit.",
        ],
      },
    },
    {
      key: "wilson",
      rung: "stretch",
      prompt: (
        <p>
          Show that <M>{"(p-1)! \\equiv -1 \\pmod p"}</M> for p = 7 by pairing each number with its inverse, and explain why
          the same pairing works for every prime p.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Pairs 2 with 4 and 3 with 5 mod 7, leaving 1 · 6 ≡ −1.",
          "In general, notes every class 1, …, p − 1 has an inverse, and only 1 and p − 1 are their own inverses, since x² ≡ 1 means p divides (x − 1)(x + 1).",
          "Concludes the product is 1 · (p − 1) ≡ −1. A reasonable argument earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what congruence modulo n means, why addition and multiplication can be done on remainders, how to find the last digit of a huge power, and when and how a number has an inverse modulo n.",

  glimpse: (
    <p>
      The next chapter asks what an algorithm is and how fast it runs. Elementary Number Theory proves Fermat&rsquo;s and
      Euler&rsquo;s theorems and the Chinese remainder theorem, and builds RSA from them.
    </p>
  ),
};
