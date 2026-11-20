import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LOneViz } from "@/components/viz/LOneViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.3.2",
  minutes: 90,
  links: {
    revisits: ["m35.3.1", "m35.1.3", "m11.5.2"],
    foreshadows: ["m35.3.3", "m35.4.2", "m35.4.3"],
  },

  puzzle: (
    <>
      <p>
        Leibniz found that 1 − 1/3 + 1/5 − 1/7 + ⋯ = π/4. The signs follow a character mod 4, so this is the value at 1 of
        a twisted zeta function. Dirichlet needed to know that every such value is non-zero. Why should a statement about
        primes depend on an infinite series not vanishing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a real character and a cutoff N, and compare the series and the Euler product with the limit.</p>
      <LOneViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Dirichlet L-functions">
        <p>
          For a character χ mod q, <M>{"L(s, \\chi) = \\sum_{n \\ge 1} \\chi(n) n^{-s} = \\prod_p (1 - \\chi(p)p^{-s})^{-1}"}</M>,
          both converging absolutely for Re s &gt; 1; the product holds because χ is completely multiplicative. For the
          principal character, <M>{"L(s, \\chi_0) = \\zeta(s) \\prod_{p \\mid q}(1 - p^{-s})"}</M>, which has a simple pole at
          s = 1.
        </p>
      </Definition>

      <Theorem title="continuation to Re s > 0">
        <p>
          If χ is not principal, its partial sums satisfy <M>{"|\\sum_{n \\le x}\\chi(n)| \\le \\varphi(q)"}</M>. By partial
          summation the series for <M>{"L(s, \\chi)"}</M> converges for Re s &gt; 0 and defines a holomorphic function there.
          In particular <M>{"L(1, \\chi) = \\sum \\chi(n)/n"}</M> is a finite number.
        </p>
      </Theorem>

      <Theorem title="non-vanishing at 1">
        <p>
          For every non-principal χ, <M>{"L(1, \\chi) \\neq 0"}</M>. Let <M>{"F(s) = \\prod_\\chi L(s, \\chi)"}</M>. Taking
          logarithms and using orthogonality,{" "}
          <M>{"\\log F(s) = \\varphi(q) \\sum_{p^k \\equiv 1} \\frac{1}{k p^{ks}} \\ge 0"}</M>, so F(s) ≥ 1 for real s &gt; 1. F
          has a simple pole at 1 from <M>{"\\chi_0"}</M>. If <M>{"L(1, \\chi) = 0"}</M> for a complex χ, then also for{" "}
          <M>{"\\overline\\chi"}</M>, and two zeros would force F(s) → 0. Real characters need a separate and subtler argument,
          which Dirichlet supplied through his class number formula.
        </p>
      </Theorem>

      <Example title="values at 1">
        <p>
          <M>{"L(1, \\chi_{4}) = \\pi/4"}</M>, <M>{"L(1, \\chi_{3}) = \\pi/(3\\sqrt3)"}</M>, and for the Legendre symbol mod 5,{" "}
          <M>{"L(1, \\chi) = \\frac{2}{\\sqrt5}\\log\\frac{1+\\sqrt5}{2}"}</M>. Odd real characters give multiples of π, even
          ones give logarithms of units.
        </p>
      </Example>

      <Theorem title="the class number formula">
        <p>
          For the real character attached to an imaginary quadratic field of discriminant d &lt; 0,{" "}
          <M>{"L(1, \\chi_d) = \\frac{2\\pi h(d)}{w\\sqrt{|d|}}"}</M>, where h(d) is the class number and w the number of roots
          of unity in the field. Since h(d) ≥ 1, the value is positive.
        </p>
      </Theorem>

      <Remark title="Siegel zeros">
        <p>
          Knowing <M>{"L(1, \\chi) \\ne 0"}</M> is not the same as knowing how far from 0 it is. A real zero of{" "}
          <M>{"L(s, \\chi)"}</M> very close to 1, a Siegel zero, has never been ruled out, and its possible existence makes
          several error terms in the theory ineffective.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "conv",
      rung: "check",
      prompt: <p>Why does the series for L(s, χ) converge for real s between 0 and 1 when χ is not principal?</p>,
      answer: { kind: "choice", options: ["The partial sums of χ(n) are bounded", "The terms are all positive", "χ(n) = 0 for every prime n", "The Euler product converges absolutely there"], correct: [0] },
    },
    {
      key: "leib",
      rung: "check",
      prompt: <p>What is L(1, χ) for the non-principal character mod 4?</p>,
      answer: { kind: "choice", options: ["π/4", "log 2", "π²/6", "1"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose mod 3. What is the limit L(1, χ), to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.605, tolerance: 0.001 },
    },
    {
      key: "princ",
      rung: "apply",
      prompt: <p>For the principal character mod 4, L(s, χ₀) = ζ(s)(1 − 2 to the power −s). Compute L(2, χ₀) = π²/8, to three decimal places.</p>,
      answer: { kind: "numeric", value: 1.234, tolerance: 0.001 },
    },
    {
      key: "cnf",
      rung: "apply",
      prompt: <p>For d = −7 the class number is 1 and w = 2. Use the class number formula to compute L(1, χ) to three decimal places.</p>,
      answer: { kind: "numeric", value: 1.187, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that |χ(1) + χ(2) + ⋯ + χ(N)| ≤ φ(q) for every N, when χ is a non-principal character mod q.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Splits 1, …, N into complete blocks of q consecutive integers and a final incomplete block.",
          "Uses orthogonality: each complete block sums to 0.",
          "Bounds the incomplete block by the number of its terms coprime to q, which is at most φ(q).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why L(1, χ) ≠ 0 for a character χ that takes a non-real value.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers the product F(s) of L(s, χ) over all characters and shows F(s) ≥ 1 for real s > 1.",
          "Notes that L(1, χ) = 0 implies L(1, conj χ) = 0, giving two zeros against one pole.",
          "Concludes that F(s) would tend to 0 as s → 1⁺, a contradiction. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With characters to isolate a residue class and non-vanishing at 1 to control each twisted sum, Euler&rsquo;s proof
        that the primes are infinite can be run inside any arithmetic progression.
      </p>
      <p>Next, primes in arithmetic progressions.</p>
    </>
  ),
};
