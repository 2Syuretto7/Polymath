import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GaussLemmaViz } from "@/components/viz/GaussLemmaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.5.3",
  minutes: 90,
  links: {
    revisits: ["m11.5.2", "m11.2.4", "m11.2.3"],
    foreshadows: ["m11.5.4", "m11.6.4", "m29.2.2"],
  },

  puzzle: (
    <>
      <p>
        Euler&rsquo;s criterion needs a big power. Gauss found a way to read the Legendre symbol by counting instead: take the
        first half of the multiples of a, reduce them modulo p, and count how many land in the upper half. Why should a count
        of that kind detect squares?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose p and a. Count the multiples that land beyond p/2, and compare with whether a is a square.</p>
      <GaussLemmaViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Gauss's lemma">
        <p>
          Let <M>{"p"}</M> be an odd prime, <M>{"p \\nmid a"}</M>, and <M>{"h = (p - 1)/2"}</M>. Let <M>{"\\mu"}</M> be the
          number of <M>{"k \\in \\{1, \\dots, h\\}"}</M> for which the least positive residue of <M>{"ka"}</M> exceeds{" "}
          <M>{"p/2"}</M>. Then <M>{"\\left(\\frac{a}{p}\\right) = (-1)^\\mu"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"r_k"}</M> be the residue of <M>{"ka"}</M>, and put <M>{"s_k = r_k"}</M> if <M>{"r_k < p/2"}</M>, and{" "}
          <M>{"s_k = p - r_k"}</M> otherwise. Each <M>{"s_k"}</M> lies in <M>{"\\{1, \\dots, h\\}"}</M>. They are distinct: if{" "}
          <M>{"s_j = s_k"}</M> then <M>{"ja \\equiv \\pm ka"}</M>, so <M>{"j \\equiv \\pm k"}</M>, and as{" "}
          <M>{"1 \\le j, k \\le h"}</M>, <M>{"j = k"}</M>. So the <M>{"s_k"}</M> are <M>{"1, \\dots, h"}</M> in some order. Now
        </p>
        <MD>{"a^h\\, h! = \\prod_{k=1}^{h} ka \\equiv \\prod_k r_k \\equiv (-1)^\\mu \\prod_k s_k = (-1)^\\mu\\, h! \\pmod p."}</MD>
        <p>Cancel <M>{"h!"}</M> and apply Euler&rsquo;s criterion.</p>
      </Proof>

      <Theorem title="when is 2 a square?">
        <MD>{"\\left(\\frac{2}{p}\\right) = (-1)^{(p^2 - 1)/8} = \\begin{cases} \\ \\ 1 & p \\equiv \\pm 1 \\pmod 8, \\\\ -1 & p \\equiv \\pm 3 \\pmod 8. \\end{cases}"}</MD>
      </Theorem>

      <Proof>
        <p>
          The multiples <M>{"2, 4, \\dots, p - 1"}</M> are already reduced. Those exceeding <M>{"p/2"}</M> number{" "}
          <M>{"\\mu = h - \\lfloor p/4 \\rfloor"}</M>. Checking <M>{"p = 8k + 1, 8k + 3, 8k + 5, 8k + 7"}</M> gives{" "}
          <M>{"\\mu = 2k, 2k + 1, 2k + 1, 2k + 2"}</M>, which is even exactly for <M>{"p \\equiv \\pm 1 \\pmod 8"}</M>.
        </p>
      </Proof>

      <Example title="a = 3, p = 7">
        <p>
          <M>{"h = 3"}</M>, and the multiples <M>{"3, 6, 9"}</M> reduce to <M>{"3, 6, 2"}</M>. Only 6 exceeds 3.5, so{" "}
          <M>{"\\mu = 1"}</M> and <M>{"\\left(\\frac{3}{7}\\right) = -1"}</M>. Check: the squares modulo 7 are 1, 2, 4.
        </p>
      </Example>

      <Remark title="why it matters">
        <p>
          Gauss&rsquo;s lemma turns a question about squares into a question about counting, and counting can be done with
          floor functions and geometry. That is how Eisenstein proved quadratic reciprocity in the next lesson.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mu",
      rung: "check",
      prompt: <p>In Gauss&rsquo;s lemma, what does <M>{"\\mu"}</M> count?</p>,
      answer: {
        kind: "choice",
        options: [
          "The number of squares modulo p.",
          "How many of a, 2a, …, ((p − 1)/2)a have least residue greater than p/2.",
          "The number of primes below p.",
          "The order of a.",
        ],
        correct: [1],
      },
    },
    {
      key: "two",
      rung: "check",
      prompt: <p>For which primes is 2 a quadratic residue?</p>,
      answer: { kind: "choice", options: ["p ≡ 1 mod 4", "p ≡ ±1 mod 8", "p ≡ ±3 mod 8", "All odd primes"], correct: [1] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>For <M>{"a = 5"}</M> and <M>{"p = 11"}</M>, what is <M>{"\\mu"}</M>?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "two17",
      rung: "apply",
      prompt: <p>Compute <M>{"\\left(\\frac{2}{17}\\right)"}</M>.</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "two43",
      rung: "apply",
      prompt: <p>Compute <M>{"\\left(\\frac{2}{43}\\right)"}</M>.</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use Gauss&rsquo;s lemma to prove that 2 is a quadratic residue modulo every prime <M>{"p \\equiv 7 \\pmod 8"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the multiples 2, 4, …, p − 1 are already least residues.",
          "Counts those above p/2: with p = 8k + 7, there are (4k + 3) − (2k + 1) = 2k + 2.",
          "Concludes μ is even, so (2/p) = 1.",
        ],
      },
    },
    {
      key: "distinct",
      rung: "stretch",
      prompt: <p>In the proof of Gauss&rsquo;s lemma, why are the numbers <M>{"s_1, \\dots, s_h"}</M> all different?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows s_j = s_k implies ja ≡ ±ka, so j ≡ ±k modulo p, cancelling the unit a.",
          "Notes j + k cannot be divisible by p since 2 ≤ j + k ≤ p − 1, so j = k.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Gauss’s lemma and its proof by folding residues above p/2 back into the lower half, how it shows exactly when 2 is a square modulo p, and why counting is the bridge to quadratic reciprocity.",

  glimpse: (
    <p>
      The next lesson proves quadratic reciprocity by counting lattice points. Sums of two squares and the splitting of primes in
      number fields use these results.
    </p>
  ),
};
