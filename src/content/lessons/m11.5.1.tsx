import { M, MD } from "@/components/Math";
import { Definition, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { QuadResidueViz } from "@/components/viz/QuadResidueViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.5.1",
  minutes: 90,
  links: {
    revisits: ["m11.4.2", "m11.2.4", "m11.1.2"],
    foreshadows: ["m11.5.2", "m11.5.4", "m11.6.4"],
  },

  puzzle: (
    <>
      <p>
        Square the numbers 1 to 12 modulo 13 and you get 1, 4, 9, 3, 12, 10, 10, 12, 3, 9, 4, 1. Only six values appear, each
        twice. Is 7 a square modulo 13? Is −1? Can you tell without listing every square?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Each number on top is sent to its square below. Choose a prime and a value a, and see whether a is hit.</p>
      <QuadResidueViz />
    </>
  ),

  theory: (
    <>
      <Definition title="quadratic residues">
        <p>
          For an odd prime <M>{"p"}</M> and <M>{"p \\nmid a"}</M>, <M>{"a"}</M> is a <strong>quadratic residue</strong> if{" "}
          <M>{"x^2 \\equiv a \\pmod p"}</M> has a solution, and a <strong>non-residue</strong> otherwise.
        </p>
      </Definition>

      <Theorem title="half are squares">
        <p>Exactly <M>{"(p - 1)/2"}</M> of the residues <M>{"1, \\dots, p - 1"}</M> are quadratic residues.</p>
      </Theorem>

      <Proof>
        <p>
          <M>{"x^2 \\equiv y^2"}</M> means <M>{"p \\mid (x - y)(x + y)"}</M>, so <M>{"y \\equiv \\pm x"}</M>, and{" "}
          <M>{"x \\not\\equiv -x"}</M> as <M>{"p"}</M> is odd. So squaring is two-to-one on the <M>{"p - 1"}</M> units.
        </p>
      </Proof>

      <Theorem title="Euler's criterion">
        <MD>{"a^{(p-1)/2} \\equiv \\begin{cases} \\ \\ 1 & \\text{if } a \\text{ is a quadratic residue,} \\\\ -1 & \\text{if } a \\text{ is a non-residue.} \\end{cases}"}</MD>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"g"}</M> be a primitive root and <M>{"a = g^k"}</M>. Then <M>{"a"}</M> is a square exactly when{" "}
          <M>{"k"}</M> is even: if <M>{"k = 2j"}</M>, <M>{"a = (g^j)^2"}</M>; conversely, if <M>{"a = (g^j)^2"}</M>, then{" "}
          <M>{"k \\equiv 2j \\pmod{p - 1}"}</M>, which is even. Now <M>{"g^{(p-1)/2} \\equiv -1"}</M>, since its square is 1 and
          it is not 1. So <M>{"a^{(p-1)/2} = (g^{(p-1)/2})^k \\equiv (-1)^k"}</M>.
        </p>
      </Proof>

      <Theorem title="when is −1 a square?">
        <p>
          <M>{"-1"}</M> is a quadratic residue modulo <M>{"p"}</M> exactly when <M>{"p \\equiv 1 \\pmod 4"}</M>, since{" "}
          <M>{"(-1)^{(p-1)/2} = 1"}</M> exactly when <M>{"(p - 1)/2"}</M> is even.
        </p>
      </Theorem>

      <Remark title="infinitely many primes 1 mod 4">
        <p>
          Given primes <M>{"p_1, \\dots, p_k"}</M>, let <M>{"N = (2p_1 \\cdots p_k)^2 + 1"}</M>. Any prime{" "}
          <M>{"q \\mid N"}</M> is odd and not on the list, and <M>{"-1"}</M> is a square modulo <M>{"q"}</M>, so{" "}
          <M>{"q \\equiv 1 \\pmod 4"}</M>. This completes the case left open with Euclid&rsquo;s method.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "seven",
      rung: "check",
      prompt: <p>Which set is the set of quadratic residues modulo 7?</p>,
      answer: { kind: "choice", options: ["{1, 2, 4}", "{1, 3, 5}", "{2, 3, 5}", "{1, 4, 6}"], correct: [0] },
    },
    {
      key: "minus",
      rung: "check",
      prompt: <p>For which prime is −1 a quadratic residue?</p>,
      answer: { kind: "choice", options: ["7", "11", "13", "19"], correct: [2] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many quadratic residues are there among 1, …, 30 modulo 31?</p>,
      answer: { kind: "numeric", value: 15, tolerance: 0 },
    },
    {
      key: "euler",
      rung: "apply",
      prompt: <p>Compute <M>{"2^6 \\bmod 13"}</M>. Is 2 a quadratic residue modulo 13? Enter the value of <M>{"2^6 \\bmod 13"}</M>.</p>,
      answer: { kind: "numeric", value: 12, tolerance: 0 },
    },
    {
      key: "root",
      rung: "apply",
      prompt: <p>Find the smallest positive <M>{"x"}</M> with <M>{"x^2 \\equiv -1 \\pmod{13}"}</M>.</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that there are infinitely many primes <M>{"p \\equiv 1 \\pmod 4"}</M>. You may use that <M>{"-1"}</M> is a square modulo an odd prime <M>{"q"}</M> only if <M>{"q \\equiv 1 \\pmod 4"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Builds N = (2p₁⋯pₖ)² + 1 from a finite list of such primes, or a similar number.",
          "Takes a prime q dividing N, shows it is odd and not on the list, and that −1 is a square modulo q.",
          "Concludes q ≡ 1 (mod 4), a new prime of the right form.",
        ],
      },
    },
    {
      key: "product",
      rung: "stretch",
      prompt: <p>Why is the product of two non-residues a residue? Explain using a primitive root.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that non-residues are odd powers of a primitive root and residues are even powers.",
          "Concludes that odd plus odd is even, so the product is a residue.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what quadratic residues are, why exactly half of the non-zero residues are squares, Euler’s criterion and its proof with a primitive root, when −1 is a square, and how this gives infinitely many primes 1 mod 4.",

  glimpse: (
    <p>
      The next lesson packages Euler&rsquo;s criterion into the Legendre symbol. Quadratic reciprocity then relates squares modulo
      p to squares modulo q, and sums of two squares use the square root of −1.
    </p>
  ),
};
