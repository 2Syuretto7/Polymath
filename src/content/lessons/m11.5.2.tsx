import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LegendreTableViz } from "@/components/viz/LegendreTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.5.2",
  minutes: 80,
  links: {
    revisits: ["m11.5.1", "m11.3.1", "m7.1.4"],
    foreshadows: ["m11.5.3", "m11.5.4", "m29.2.2"],
  },

  puzzle: (
    <>
      <p>
        Is 6 a square modulo 13? You could list all twelve squares. But if you already knew whether 2 and 3 are squares, could
        you decide for 6 at once? It turns out that &ldquo;being a square&rdquo; behaves like a sign: two non-squares multiply
        to a square, just as two negatives multiply to a positive.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Each cell shows whether a is a square modulo p. Look for patterns down the columns, and compare the columns for 2, 3 and 6.</p>
      <LegendreTableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Legendre symbol">
        <p>For an odd prime <M>{"p"}</M>,</p>
        <MD>{"\\left(\\frac{a}{p}\\right) = \\begin{cases} \\ \\ 0 & p \\mid a, \\\\ \\ \\ 1 & a \\text{ is a non-zero square modulo } p, \\\\ -1 & \\text{otherwise.} \\end{cases}"}</MD>
      </Definition>

      <Theorem title="properties">
        <p>For an odd prime <M>{"p"}</M> and integers <M>{"a, b"}</M>:</p>
        <MD>{"\\left(\\frac{a}{p}\\right) \\equiv a^{(p-1)/2} \\pmod p, \\qquad \\left(\\frac{ab}{p}\\right) = \\left(\\frac{a}{p}\\right)\\left(\\frac{b}{p}\\right), \\qquad \\left(\\frac{a}{p}\\right) = \\left(\\frac{a + p}{p}\\right)."}</MD>
        <p>In particular <M>{"\\left(\\frac{-1}{p}\\right) = (-1)^{(p-1)/2}"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          The first is Euler&rsquo;s criterion, with both sides 0 when <M>{"p \\mid a"}</M>. For the second,{" "}
          <M>{"(ab)^{(p-1)/2} = a^{(p-1)/2}\\,b^{(p-1)/2}"}</M>, so the two sides are congruent modulo <M>{"p"}</M>. Both are
          in <M>{"\\{-1, 0, 1\\}"}</M>, and distinct values there differ by at most 2, less than <M>{"p"}</M>, so they are
          equal. The third holds because <M>{"a"}</M> and <M>{"a + p"}</M> are the same residue.
        </p>
      </Proof>

      <Example title="is 6 a square modulo 13?">
        <p>
          <M>{"\\left(\\frac{6}{13}\\right) = \\left(\\frac{2}{13}\\right)\\left(\\frac{3}{13}\\right)"}</M>. By Euler,{" "}
          <M>{"2^6 = 64 \\equiv -1"}</M> and <M>{"3^6 = 729 \\equiv 1"}</M>. So the symbol is <M>{"-1"}</M>: 6 is not a square
          modulo 13. Indeed the squares are 1, 3, 4, 9, 10, 12.
        </p>
      </Example>

      <Remark title="a homomorphism">
        <p>
          Multiplicativity says <M>{"a \\mapsto \\left(\\frac{a}{p}\\right)"}</M> is a homomorphism from the cyclic group{" "}
          <M>{"(\\mathbb{Z}/p)^\\times"}</M> onto <M>{"\\{\\pm 1\\}"}</M>, whose kernel is the squares, a subgroup of index 2.
          To compute symbols, factor <M>{"a"}</M> into primes: everything reduces to <M>{"\\left(\\frac{-1}{p}\\right)"}</M>,{" "}
          <M>{"\\left(\\frac{2}{p}\\right)"}</M> and <M>{"\\left(\\frac{q}{p}\\right)"}</M> for odd primes <M>{"q"}</M>. The
          next two lessons handle the last two.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "zero",
      rung: "check",
      prompt: <p>What is <M>{"\\left(\\frac{a}{p}\\right)"}</M> when <M>{"p"}</M> divides <M>{"a"}</M>?</p>,
      answer: { kind: "choice", options: ["1", "−1", "0", "p"], correct: [2] },
    },
    {
      key: "mult",
      rung: "check",
      prompt: <p>If <M>{"a"}</M> and <M>{"b"}</M> are both non-residues modulo <M>{"p"}</M>, what is <M>{"\\left(\\frac{ab}{p}\\right)"}</M>?</p>,
      answer: { kind: "choice", options: ["−1", "0", "1", "It depends"], correct: [2] },
    },
    {
      key: "two7",
      rung: "apply",
      prompt: <p>Compute <M>{"\\left(\\frac{2}{7}\\right)"}</M>.</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "ten13",
      rung: "apply",
      prompt: <p>Compute <M>{"\\left(\\frac{10}{13}\\right)"}</M>, using <M>{"\\left(\\frac{2}{13}\\right) = -1"}</M>.</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "minus19",
      rung: "apply",
      prompt: <p>Compute <M>{"\\left(\\frac{-1}{19}\\right)"}</M>.</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that <M>{"\\left(\\frac{ab}{p}\\right) = \\left(\\frac{a}{p}\\right)\\left(\\frac{b}{p}\\right)"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses Euler’s criterion for each of the three symbols.",
          "Notes (ab)^((p−1)/2) = a^((p−1)/2) b^((p−1)/2), so the two sides are congruent modulo p.",
          "Concludes they are equal, since both lie in {−1, 0, 1} and p > 2.",
        ],
      },
    },
    {
      key: "hom",
      rung: "stretch",
      prompt: <p>Explain why the squares form a subgroup of index 2 in the units modulo <M>{"p"}</M>, and how this gives multiplicativity of the Legendre symbol.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the squares are closed under multiplication and inverses, and are exactly half the units.",
          "Explains that a subgroup of index 2 gives a homomorphism to {±1}, sending the subgroup to 1 and the other coset to −1.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Legendre symbol, why it can be computed by Euler’s criterion, why it is multiplicative and periodic, how this decides whether 6 is a square modulo 13, and why everything reduces to −1, 2 and odd primes.",

  glimpse: (
    <p>
      The next lesson proves Gauss&rsquo;s lemma, which settles when 2 is a square. Quadratic reciprocity then handles odd
      primes, and algebraic number theory uses the symbol to describe how primes split.
    </p>
  ),
};
