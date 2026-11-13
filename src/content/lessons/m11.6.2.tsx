import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RationalPointsViz } from "@/components/viz/RationalPointsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.6.2",
  minutes: 80,
  links: {
    revisits: ["m11.1.1", "m0.6.2", "m11.6.1"],
    foreshadows: ["m11.6.4", "m30.1.1", "m13.1.1"],
  },

  puzzle: (
    <>
      <p>
        Masons and the Baudhayana Sulbasutra knew that a rope with sides 3, 4 and 5 makes a right angle, and so do 5, 12, 13
        and 8, 15, 17. Is there a recipe that produces every right triangle with whole-number sides?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Draw a line through the point (−1, 0) on the unit circle with rational slope m/n. It meets the circle again at a
        point with rational coordinates. Clear denominators and a Pythagorean triple appears.
      </p>
      <RationalPointsViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="primitive Pythagorean triples">
        <p>
          A triple <M>{"(a, b, c)"}</M> of positive integers with <M>{"a^2 + b^2 = c^2"}</M> and{" "}
          <M>{"\\gcd(a, b, c) = 1"}</M> is <strong>primitive</strong>. Up to swapping <M>{"a"}</M> and <M>{"b"}</M>, the
          primitive triples are exactly
        </p>
        <MD>{"a = n^2 - m^2, \\qquad b = 2mn, \\qquad c = n^2 + m^2,"}</MD>
        <p>
          where <M>{"n > m > 0"}</M> are coprime and of opposite parity. Every triple is a multiple of a primitive one.
        </p>
      </Theorem>

      <Proof>
        <p>
          In a primitive triple <M>{"a"}</M> and <M>{"b"}</M> are coprime, so not both even. They are not both odd either,
          since then <M>{"c^2 \\equiv 2 \\pmod 4"}</M>, which no square is. Say <M>{"b"}</M> is even and <M>{"a, c"}</M> odd.
          Then
        </p>
        <MD>{"\\left(\\frac{b}{2}\\right)^2 = \\frac{c - a}{2} \\cdot \\frac{c + a}{2}."}</MD>
        <p>
          The two factors on the right are integers, and any common divisor divides their sum <M>{"c"}</M> and difference{" "}
          <M>{"a"}</M>, so they are coprime. Their product is a square, so by unique factorisation each is a square:{" "}
          <M>{"\\tfrac{c + a}{2} = n^2"}</M> and <M>{"\\tfrac{c - a}{2} = m^2"}</M>. This gives{" "}
          <M>{"c = n^2 + m^2"}</M>, <M>{"a = n^2 - m^2"}</M> and <M>{"b = 2mn"}</M>. Coprimality and opposite parity of{" "}
          <M>{"m, n"}</M> follow from <M>{"a, c"}</M> being coprime and odd. Conversely, such <M>{"m, n"}</M> give a primitive
          triple, by direct expansion and a parity check.
        </p>
      </Proof>

      <Example title="the geometric view">
        <p>
          The line through <M>{"(-1, 0)"}</M> with slope <M>{"t = m/n"}</M> meets <M>{"x^2 + y^2 = 1"}</M> again at
        </p>
        <MD>{"\\left(\\frac{1 - t^2}{1 + t^2}, \\frac{2t}{1 + t^2}\\right) = \\left(\\frac{n^2 - m^2}{n^2 + m^2}, \\frac{2mn}{n^2 + m^2}\\right)."}</MD>
        <p>
          Every rational point except <M>{"(-1, 0)"}</M> arises this way, because the line joining it to{" "}
          <M>{"(-1, 0)"}</M> has rational slope. So rational points on the circle and Pythagorean triples are the same problem.
        </p>
      </Example>

      <Remark title="Fermat and descent">
        <p>
          Fermat showed that <M>{"x^4 + y^4 = z^2"}</M> has no solutions in positive integers, so neither does{" "}
          <M>{"x^4 + y^4 = z^4"}</M>. He used the parametrisation above to build, from any solution, a smaller one. An endless
          descent of positive integers is impossible, so there is no solution at all. This is the case n = 4 of Fermat&rsquo;s
          last theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "gen",
      rung: "check",
      prompt: <p>With <M>{"n = 3"}</M> and <M>{"m = 2"}</M>, what is the hypotenuse <M>{"c = n^2 + m^2"}</M>?</p>,
      answer: { kind: "numeric", value: 13, tolerance: 0 },
    },
    {
      key: "parity",
      rung: "check",
      prompt: <p>In a primitive Pythagorean triple, which statement is true?</p>,
      answer: {
        kind: "choice",
        options: ["All three numbers are odd.", "Exactly one of a and b is even.", "Both a and b are even.", "c is always even."],
        correct: [1],
      },
    },
    {
      key: "mn",
      rung: "apply",
      prompt: <p>Which coprime pair of opposite parity, <M>{"(n, m)"}</M>, produces the triple 20, 21, 29?</p>,
      answer: { kind: "choice", options: ["(5, 2)", "(4, 3)", "(5, 3)", "(7, 2)"], correct: [0] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: (
        <p>
          How many primitive triples have hypotenuse 65? Count the ways to write <M>{"65 = n^2 + m^2"}</M> with{" "}
          <M>{"n > m > 0"}</M> coprime and of opposite parity.
        </p>
      ),
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "point",
      rung: "apply",
      prompt: <p>The line through (−1, 0) with slope 1/2 meets the unit circle again at (x, y). What is x?</p>,
      answer: { kind: "numeric", value: 0.6, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that in any Pythagorean triple at least one of a and b is divisible by 3.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that squares are 0 or 1 modulo 3.",
          "Shows that if neither a nor b is divisible by 3, then c² ≡ 2 (mod 3), which is impossible.",
          "Concludes that 3 divides a or b.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a right triangle with whole-number sides have area that is a perfect square? Say what you suspect and why.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the area of a primitive triangle as mn(n² − m²) or similar.",
          "Suggests the answer is no, and links it to Fermat’s descent or to x⁴ − y⁴ = z².",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the recipe n² − m², 2mn, n² + m² for Pythagorean triples, why it gives every primitive triple, and how lines through (−1, 0) on the unit circle give the same answer.",

  glimpse: (
    <p>
      The next lessons ask which numbers are sums of two squares, and solve Pell&rsquo;s equation. Algebraic geometry studies
      rational points on curves in general, where circles are the easy case and elliptic curves are much harder.
    </p>
  ),
};
