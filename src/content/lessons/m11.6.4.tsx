import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TwoSquaresViz } from "@/components/viz/TwoSquaresViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.6.4",
  minutes: 85,
  links: {
    revisits: ["m11.2.4", "m11.6.2", "m11.5.1"],
    foreshadows: ["m11.6.5", "m29.1.1", "m13.1.1"],
  },

  puzzle: (
    <>
      <p>
        5 = 1² + 2² and 13 = 2² + 3², but 3, 7 and 11 are not sums of two squares, however hard you try. Among the primes, the
        pattern depends only on the remainder after dividing by 4. Why should that be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The numbers from 1 to 200 that are sums of two squares are filled in. Click any number to see its factorisation and
        its representations.
      </p>
      <TwoSquaresViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Fermat’s two squares theorem">
        <p>
          An odd prime <M>{"p"}</M> is a sum of two squares if and only if <M>{"p \\equiv 1 \\pmod 4"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Squares are 0 or 1 modulo 4, so a sum of two squares is 0, 1 or 2 modulo 4, never 3. Now let{" "}
          <M>{"p \\equiv 1 \\pmod 4"}</M>. Wilson&rsquo;s theorem gives an <M>{"r"}</M> with{" "}
          <M>{"r^2 \\equiv -1 \\pmod p"}</M>, namely <M>{"r = \\left(\\tfrac{p-1}{2}\\right)!"}</M>. Let{" "}
          <M>{"s = \\lfloor \\sqrt p \\rfloor"}</M> and consider the <M>{"(s + 1)^2 > p"}</M> numbers <M>{"x - ry"}</M> with{" "}
          <M>{"0 \\le x, y \\le s"}</M>. By the pigeonhole principle two agree modulo <M>{"p"}</M>, so there are{" "}
          <M>{"a, b"}</M>, not both zero, with <M>{"|a|, |b| \\le s < \\sqrt p"}</M> and <M>{"a \\equiv rb \\pmod p"}</M>. Then
        </p>
        <MD>{"a^2 + b^2 \\equiv r^2b^2 + b^2 \\equiv 0 \\pmod p, \\qquad 0 < a^2 + b^2 < 2p,"}</MD>
        <p>so <M>{"a^2 + b^2 = p"}</M>. This argument is due to Thue.</p>
      </Proof>

      <Theorem title="which numbers are sums of two squares">
        <p>
          A positive integer <M>{"n"}</M> is a sum of two squares if and only if every prime{" "}
          <M>{"q \\equiv 3 \\pmod 4"}</M> occurs to an even power in its factorisation.
        </p>
      </Theorem>

      <Example title="the Brahmagupta–Fibonacci identity">
        <MD>{"(a^2 + b^2)(c^2 + d^2) = (ac - bd)^2 + (ad + bc)^2."}</MD>
        <p>
          So products of sums of two squares are sums of two squares. For example{" "}
          <M>{"65 = 5 \\cdot 13 = (1^2 + 2^2)(2^2 + 3^2) = 4^2 + 7^2"}</M>, and with the other sign choice,{" "}
          <M>{"8^2 + 1^2"}</M>. With the primes <M>{"p \\equiv 1 \\pmod 4"}</M>, the prime 2 = 1² + 1², and squares{" "}
          <M>{"q^2 = q^2 + 0^2"}</M>, this proves one direction of the theorem. In complex numbers the identity says{" "}
          <M>{"|z|^2|w|^2 = |zw|^2"}</M>.
        </p>
      </Example>

      <Remark title="four squares">
        <p>
          Lagrange proved in 1770 that every positive integer is a sum of four squares; for example{" "}
          <M>{"7 = 4 + 1 + 1 + 1"}</M>. Three squares are not enough: Legendre showed the exceptions are exactly the numbers
          of the form <M>{"4^a(8b + 7)"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these primes is a sum of two squares?</p>,
      answer: { kind: "choice", options: ["19", "23", "29", "31"], correct: [2] },
    },
    {
      key: "mod4",
      rung: "check",
      prompt: <p>What remainders modulo 4 can a sum of two squares have?</p>,
      answer: { kind: "choice", options: ["0, 1, 2", "1, 3", "0, 2", "Any remainder"], correct: [0] },
    },
    {
      key: "num",
      rung: "apply",
      prompt: <p>Which of these numbers is a sum of two squares?</p>,
      answer: { kind: "choice", options: ["21", "45", "63", "77"], correct: [1] },
    },
    {
      key: "bf",
      rung: "apply",
      prompt: (
        <p>
          Use <M>{"13 = 2^2 + 3^2"}</M>, <M>{"17 = 1^2 + 4^2"}</M> and the identity to write{" "}
          <M>{"221 = 10^2 + b^2"}</M>. What is b?
        </p>
      ),
      answer: { kind: "numeric", value: 11, tolerance: 0 },
    },
    {
      key: "root",
      rung: "apply",
      prompt: <p>Find r between 1 and 6 with r² ≡ −1 (mod 13). Give the smaller choice.</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that no number of the form 4k + 3 is a sum of two squares.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows squares are 0 or 1 modulo 4, by checking even and odd numbers.",
          "Lists the possible sums 0, 1 and 2 modulo 4.",
          "Concludes that 3 modulo 4 is impossible.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that 7 is not a sum of three squares. Can you see why the same holds for 15?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses squares modulo 8 being 0, 1 or 4.",
          "Shows no three of them add to 7 modulo 8.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend which primes are sums of two squares and why, how the Brahmagupta–Fibonacci identity builds bigger sums from smaller ones, and Lagrange's four squares theorem.",

  glimpse: (
    <p>
      The last lesson of the course is on continued fractions. In the Gaussian integers, primes p ≡ 1 (mod 4) split as (a +
      bi)(a − bi), and this is the beginning of algebraic number theory.
    </p>
  ),
};
