import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ZetaViz } from "@/components/viz/ZetaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.7.2",
  minutes: 90,
  links: {
    revisits: ["m13.7.1", "m11.1.3", "m13.4.2"],
    foreshadows: ["m13.7.3", "m35.1.3", "m35.4.3"],
  },

  puzzle: (
    <>
      <p>
        Euler found that <M>{"1 + \\tfrac14 + \\tfrac19 + \\tfrac1{16} + \\cdots = \\pi^2/6"}</M>, a sum over whole numbers
        equal to an expression with <M>{"\\pi"}</M>. He also found that the same sum is a product over the primes. How can a
        series about all numbers know about primes?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the partial sums over integers with the partial products over primes, for several values of s.</p>
      <ZetaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the zeta function">
        <p>For <M>{"\\operatorname{Re} s > 1"}</M>,</p>
        <MD>{"\\zeta(s) = \\sum_{n=1}^\\infty \\frac{1}{n^s}."}</MD>
        <p>
          Since <M>{"|n^{-s}| = n^{-\\operatorname{Re} s}"}</M>, the series converges absolutely and locally uniformly there,
          so <M>{"\\zeta"}</M> is holomorphic on that half-plane.
        </p>
      </Definition>

      <Theorem title="the Euler product">
        <p>For <M>{"\\operatorname{Re} s > 1"}</M>, with the product over all primes,</p>
        <MD>{"\\zeta(s) = \\prod_p \\frac{1}{1 - p^{-s}}."}</MD>
        <p>In particular <M>{"\\zeta(s) \\ne 0"}</M> there.</p>
      </Theorem>

      <Proof>
        <p>
          Each factor is a geometric series <M>{"1 + p^{-s} + p^{-2s} + \\cdots"}</M>. Multiplying these out for the primes up
          to <M>{"N"}</M> gives <M>{"\\sum n^{-s}"}</M> over all <M>{"n"}</M> whose prime factors are at most <M>{"N"}</M>,
          each exactly once by unique factorisation. That includes every <M>{"n \\le N"}</M>, so the difference from{" "}
          <M>{"\\zeta(s)"}</M> is at most <M>{"\\sum_{n > N} n^{-\\operatorname{Re} s} \\to 0"}</M>. A convergent product of
          non-zero factors is non-zero.
        </p>
      </Proof>

      <Theorem title="continuation and functional equation">
        <p>
          <M>{"\\zeta"}</M> extends to a meromorphic function on <M>{"\\mathbb{C}"}</M> whose only pole is a simple pole at{" "}
          <M>{"s = 1"}</M> with residue 1. With <M>{"\\xi(s) = \\pi^{-s/2}\\Gamma(s/2)\\zeta(s)"}</M>, Riemann proved{" "}
          <M>{"\\xi(s) = \\xi(1 - s)"}</M>.
        </p>
      </Theorem>

      <Example title="the first step of the continuation">
        <p>
          For <M>{"\\operatorname{Re} s > 1"}</M>, comparing the sum with an integral gives
        </p>
        <MD>{"\\zeta(s) = \\frac{s}{s - 1} - s\\int_1^\\infty \\frac{\\{x\\}}{x^{s+1}}\\, dx,"}</MD>
        <p>
          where <M>{"\\{x\\}"}</M> is the fractional part. The integral converges for <M>{"\\operatorname{Re} s > 0"}</M>, so
          this continues <M>{"\\zeta"}</M> to that half-plane and shows the simple pole at 1 with residue 1.
        </p>
      </Example>

      <Remark title="zeros">
        <p>
          The functional equation and the poles of <M>{"\\Gamma(s/2)"}</M> force zeros at <M>{"-2, -4, -6, \\dots"}</M>, the
          trivial zeros. All other zeros lie in the critical strip <M>{"0 \\le \\operatorname{Re} s \\le 1"}</M>. The Riemann
          hypothesis says they all lie on the line <M>{"\\operatorname{Re} s = 1/2"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "z2",
      rung: "check",
      prompt: <p>What is <M>{"\\zeta(2)"}</M>, to three decimal places?</p>,
      answer: { kind: "numeric", value: 1.6449, tolerance: 0.002 },
    },
    {
      key: "pole",
      rung: "check",
      prompt: <p>Where is the only pole of <M>{"\\zeta"}</M>?</p>,
      answer: { kind: "choice", options: ["s = 0", "s = 1", "s = 1/2", "s = −2"], correct: [1] },
    },
    {
      key: "factor",
      rung: "apply",
      prompt: <p>What is the Euler factor for the prime 2 at <M>{"s = 2"}</M>, that is, <M>{"1/(1 - 2^{-2})"}</M>?</p>,
      answer: { kind: "numeric", value: 1.3333, tolerance: 0.001 },
    },
    {
      key: "inf",
      rung: "apply",
      prompt: <p>As <M>{"s \\to 1^+"}</M>, <M>{"\\zeta(s) \\to \\infty"}</M>. Why does this show there are infinitely many primes?</p>,
      answer: {
        kind: "choice",
        options: [
          "With finitely many primes the Euler product would be a finite product, which stays bounded as s → 1.",
          "Because ζ(1) = 0.",
          "Because every prime divides ζ(s).",
          "It does not.",
        ],
        correct: [0],
      },
    },
    {
      key: "trivial",
      rung: "apply",
      prompt: <p>Which of these is a trivial zero of <M>{"\\zeta"}</M>?</p>,
      answer: { kind: "choice", options: ["−4", "−3", "1/2", "2"], correct: [0] },
    },
    {
      key: "euler",
      rung: "prove",
      prompt: <p>Prove the Euler product formula for real <M>{"s > 1"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands each factor as a geometric series and multiplies out over primes up to N.",
          "Uses unique factorisation to see each n with prime factors at most N appears once.",
          "Bounds the difference from ζ(s) by the tail sum over n > N, which tends to 0.",
        ],
      },
    },
    {
      key: "recip",
      rung: "stretch",
      prompt: <p>Use the Euler product to show that the sum of <M>{"1/p"}</M> over primes diverges.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes logarithms: log ζ(s) = −Σ log(1 − p⁻ˢ) = Σ p⁻ˢ + a bounded remainder.",
          "Lets s → 1 from above, where log ζ(s) → ∞, so Σ 1/p diverges.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the zeta function is defined, why it equals a product over primes, how it continues to the whole plane with a single pole at 1, where its zeros lie, and what the Riemann hypothesis says.",

  glimpse: (
    <p>
      The final lesson of the course outlines how the zeta function proves the prime number theorem. Analytic number theory
      later develops Euler products, Dirichlet series and the zeros in depth.
    </p>
  ),
};
