import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PowerCycleViz } from "@/components/viz/PowerCycleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.4.1",
  minutes: 90,
  links: {
    revisits: ["m11.2.3", "m7.1.4", "m11.1.2"],
    foreshadows: ["m11.4.2", "m11.4.3", "m11.5.1"],
  },

  puzzle: (
    <>
      <p>
        The decimal for 1/7 repeats every 6 digits: 0.142857142857…. The decimal for 1/13 repeats every 6 digits too, but 1/17
        repeats every 16, and 1/11 every 2. What decides the length of the cycle?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose n and a. Follow the powers of a around the circle until they return to 1.</p>
      <PowerCycleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="order">
        <p>
          If <M>{"\\gcd(a, n) = 1"}</M>, the <strong>order</strong> of <M>{"a"}</M> modulo <M>{"n"}</M>, written{" "}
          <M>{"\\operatorname{ord}_n(a)"}</M>, is the least <M>{"k \\ge 1"}</M> with <M>{"a^k \\equiv 1 \\pmod n"}</M>. It exists
          by Euler&rsquo;s theorem.
        </p>
      </Definition>

      <Theorem title="the order divides every exponent that gives 1">
        <p>
          Let <M>{"d = \\operatorname{ord}_n(a)"}</M>. Then <M>{"a^k \\equiv 1 \\pmod n"}</M> if and only if{" "}
          <M>{"d \\mid k"}</M>. In particular <M>{"d \\mid \\varphi(n)"}</M>, and <M>{"a^j \\equiv a^k"}</M> exactly when{" "}
          <M>{"j \\equiv k \\pmod d"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Divide: <M>{"k = qd + r"}</M> with <M>{"0 \\le r < d"}</M>. Then <M>{"a^k = (a^d)^q a^r \\equiv a^r"}</M>. If{" "}
          <M>{"a^k \\equiv 1"}</M> then <M>{"a^r \\equiv 1"}</M>, and minimality of <M>{"d"}</M> forces <M>{"r = 0"}</M>. The
          converse is clear. Euler&rsquo;s theorem gives <M>{"a^{\\varphi(n)} \\equiv 1"}</M>, so <M>{"d \\mid \\varphi(n)"}</M>.
        </p>
      </Proof>

      <Theorem title="orders of powers">
        <MD>{"\\operatorname{ord}_n(a^k) = \\frac{\\operatorname{ord}_n(a)}{\\gcd\\bigl(k, \\operatorname{ord}_n(a)\\bigr)}."}</MD>
      </Theorem>

      <Example title="decimal periods">
        <p>
          For a prime <M>{"p \\ne 2, 5"}</M>, the period of the decimal for <M>{"1/p"}</M> is{" "}
          <M>{"\\operatorname{ord}_p(10)"}</M>: the remainders of long division are <M>{"1, 10, 10^2, \\dots"}</M> modulo{" "}
          <M>{"p"}</M>, and the digits repeat when the remainder returns to 1. So <M>{"\\operatorname{ord}_7(10) = 6"}</M>,{" "}
          <M>{"\\operatorname{ord}_{11}(10) = 2"}</M>, and the period always divides <M>{"p - 1"}</M>.
        </p>
      </Example>

      <Remark title="factors of Fermat numbers">
        <p>
          If a prime <M>{"q"}</M> divides <M>{"F_m = 2^{2^m} + 1"}</M>, then <M>{"2^{2^m} \\equiv -1"}</M> and{" "}
          <M>{"2^{2^{m+1}} \\equiv 1"}</M>, so <M>{"\\operatorname{ord}_q(2) = 2^{m+1}"}</M>, which divides{" "}
          <M>{"q - 1"}</M>. Every prime factor of <M>{"F_5"}</M> is therefore <M>{"1 \\bmod 64"}</M>, and Euler had only a few
          candidates to try before finding <M>{"641 = 10 \\cdot 64 + 1"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ord27",
      rung: "check",
      prompt: <p>What is <M>{"\\operatorname{ord}_7(2)"}</M>?</p>,
      answer: { kind: "choice", options: ["2", "3", "6", "7"], correct: [1] },
    },
    {
      key: "divides",
      rung: "check",
      prompt: <p>What must the order of a unit modulo n always divide?</p>,
      answer: { kind: "choice", options: ["n", "φ(n)", "n + 1", "a"], correct: [1] },
    },
    {
      key: "o13",
      rung: "apply",
      prompt: <p>What is <M>{"\\operatorname{ord}_{17}(2)"}</M>?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "pow",
      rung: "apply",
      prompt: <p>Given that <M>{"\\operatorname{ord}_{13}(2) = 12"}</M>, what is <M>{"\\operatorname{ord}_{13}(2^9)"}</M>?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "dec",
      rung: "apply",
      prompt: <p>How long is the repeating block of the decimal for 1/13?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"d = \\operatorname{ord}_n(a)"}</M>, then <M>{"a^k \\equiv 1 \\pmod n"}</M> if and only if <M>{"d \\mid k"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes k = qd + r with 0 ≤ r < d.",
          "Shows a^k ≡ a^r, so a^k ≡ 1 gives a^r ≡ 1, and minimality forces r = 0.",
          "Proves the converse: if d divides k then a^k = (a^d)^(k/d) ≡ 1.",
        ],
      },
    },
    {
      key: "period",
      rung: "stretch",
      prompt: <p>Explain why the decimal period of <M>{"1/p"}</M> is <M>{"\\operatorname{ord}_p(10)"}</M>, and deduce that it divides <M>{"p - 1"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Relates the remainders in long division to the powers of 10 modulo p.",
          "Notes the digits repeat exactly when the remainder returns to 1, and applies the theorem that the order divides φ(p) = p − 1.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the order of a modulo n is, why a^k ≡ 1 exactly when the order divides k, why the order divides φ(n), the formula for the order of a power, and how orders explain decimal periods and the factors of Fermat numbers.",

  glimpse: (
    <p>
      The next lesson asks when some a has the largest possible order, φ(n): a primitive root. Then discrete logarithms run the
      powers backwards, and orders help decide which numbers are squares modulo p.
    </p>
  ),
};
