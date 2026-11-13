import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LatticeReciprocityViz } from "@/components/viz/LatticeReciprocityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.5.4",
  minutes: 100,
  links: {
    revisits: ["m11.5.3", "m11.5.2", "m0.7.1"],
    foreshadows: ["m11.6.4", "m29.2.2", "m34.5.2"],
  },

  puzzle: (
    <>
      <p>
        Whether 7 is a square modulo 11 and whether 11 is a square modulo 7 seem to be unrelated questions: one is about
        arithmetic modulo 11, the other modulo 7. Yet Euler noticed, and Gauss proved in 1796, that the answers are tied
        together by a simple rule. Gauss called it the golden theorem.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick two odd primes. Count the lattice points under and over the diagonal, and compare the parities with the Legendre symbols.</p>
      <LatticeReciprocityViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the law of quadratic reciprocity">
        <p>For distinct odd primes <M>{"p"}</M> and <M>{"q"}</M>,</p>
        <MD>{"\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2}\\cdot\\frac{q-1}{2}}."}</MD>
        <p>
          So the two symbols are equal unless both <M>{"p"}</M> and <M>{"q"}</M> are <M>{"3 \\bmod 4"}</M>, in which case they
          are opposite.
        </p>
      </Theorem>

      <Theorem title="Eisenstein's lemma">
        <p>For odd <M>{"a"}</M> not divisible by <M>{"p"}</M>, <M>{"\\left(\\frac{a}{p}\\right) = (-1)^{t}"}</M> with{" "}
          <M>{"t = \\sum_{k=1}^{(p-1)/2} \\lfloor ka/p \\rfloor"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          Write <M>{"ka = p\\lfloor ka/p \\rfloor + r_k"}</M>. Sum over <M>{"k"}</M>, using the notation of Gauss&rsquo;s lemma,
          where the <M>{"r_k"}</M> above <M>{"p/2"}</M> are replaced by <M>{"p - r_k"}</M> to give <M>{"1, \\dots, h"}</M>:
        </p>
        <MD>{"a\\sum k = p\\,t + \\sum r_k = p\\,t + \\sum_{k=1}^h k + 2\\sum_{r_k > p/2} r_k - p\\mu."}</MD>
        <p>
          Reduce modulo 2, with <M>{"a"}</M> and <M>{"p"}</M> odd: <M>{"\\sum k \\equiv t + \\sum k + \\mu"}</M>, so{" "}
          <M>{"t \\equiv \\mu"}</M>, and Gauss&rsquo;s lemma gives the result.
        </p>
      </Proof>

      <Proof>
        <p>
          <em>Reciprocity.</em> In the rectangle <M>{"0 < x < p/2"}</M>, <M>{"0 < y < q/2"}</M> there are{" "}
          <M>{"\\frac{p-1}{2}\\cdot\\frac{q-1}{2}"}</M> lattice points, none on the diagonal <M>{"y = qx/p"}</M>, since{" "}
          <M>{"py = qx"}</M> would force <M>{"p \\mid x"}</M>. Those below the diagonal number{" "}
          <M>{"\\sum_{k} \\lfloor qk/p \\rfloor"}</M>, counted column by column, and those above number{" "}
          <M>{"\\sum_{k} \\lfloor pk/q \\rfloor"}</M>, counted row by row. By Eisenstein&rsquo;s lemma these give{" "}
          <M>{"\\left(\\frac{q}{p}\\right)"}</M> and <M>{"\\left(\\frac{p}{q}\\right)"}</M>, and their product is{" "}
          <M>{"(-1)"}</M> to the total.
        </p>
      </Proof>

      <Example title="computing with reciprocity">
        <p>Is 19 a square modulo 43? Both are <M>{"3 \\bmod 4"}</M>, so</p>
        <MD>{"\\left(\\frac{19}{43}\\right) = -\\left(\\frac{43}{19}\\right) = -\\left(\\frac{5}{19}\\right) = -\\left(\\frac{19}{5}\\right) = -\\left(\\frac{4}{5}\\right) = -1."}</MD>
        <p>No. The symbols shrink like Euclid&rsquo;s algorithm, with no large powers needed.</p>
      </Example>

      <Remark title="many proofs">
        <p>
          Gauss gave eight proofs; there are now more than two hundred, by counting, by Gauss sums, by cyclotomic fields. The
          law is the first case of a vast pattern, reciprocity laws for higher powers and finally class field theory, which
          describes how primes split in abelian extensions of the rationals.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>When are <M>{"\\left(\\frac{p}{q}\\right)"}</M> and <M>{"\\left(\\frac{q}{p}\\right)"}</M> opposite?</p>,
      answer: { kind: "choice", options: ["Always", "When both p and q are 3 mod 4", "When both are 1 mod 4", "Never"], correct: [1] },
    },
    {
      key: "points",
      rung: "check",
      prompt: <p>In the lattice proof, how many points lie on the diagonal?</p>,
      answer: { kind: "choice", options: ["None", "One", "(p − 1)/2", "Depends on p and q"], correct: [0] },
    },
    {
      key: "three11",
      rung: "apply",
      prompt: <p>Use reciprocity to compute <M>{"\\left(\\frac{3}{11}\\right)"}</M>.</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "five23",
      rung: "apply",
      prompt: <p>Compute <M>{"\\left(\\frac{5}{23}\\right)"}</M>.</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0 },
    },
    {
      key: "seven31",
      rung: "apply",
      prompt: <p>Compute <M>{"\\left(\\frac{7}{31}\\right)"}</M>.</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Using quadratic reciprocity, prove that for a prime <M>{"p > 3"}</M>, 3 is a square modulo <M>{"p"}</M> if and only if <M>{"p \\equiv \\pm 1 \\pmod{12}"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes (3/p) = (−1)^((p−1)/2) (p/3) by reciprocity.",
          "Notes (p/3) = 1 exactly when p ≡ 1 mod 3, and (−1)^((p−1)/2) = 1 exactly when p ≡ 1 mod 4.",
          "Combines the cases to get (3/p) = 1 exactly when p ≡ ±1 mod 12.",
        ],
      },
    },
    {
      key: "count",
      rung: "stretch",
      prompt: <p>Why does counting the points below the diagonal column by column give <M>{"\\sum \\lfloor qk/p \\rfloor"}</M>?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that in column x = k the diagonal has height qk/p.",
          "Counts the integers y with 1 ≤ y < qk/p as ⌊qk/p⌋, and checks these all lie below q/2.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the law of quadratic reciprocity and when the two symbols differ, Eisenstein’s lemma, the lattice point proof, and how reciprocity computes a Legendre symbol quickly.",

  glimpse: (
    <p>
      The next chapter turns to Diophantine equations. Reciprocity returns with sums of squares, and in algebraic number theory it
      becomes a statement about how primes split in quadratic fields.
    </p>
  ),
};
