import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GaussianDivViz } from "@/components/viz/GaussianDivViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.7.1",
  minutes: 85,
  links: {
    revisits: ["m4.4.3", "m7.6.4", "m7.6.2"],
    foreshadows: ["m7.7.2", "m7.7.3", "m29.2.1"],
  },

  puzzle: (
    <>
      <p>
        Euclid&rsquo;s algorithm for the gcd rests on one fact: you can divide with a remainder smaller than the divisor.
        Polynomials over a field allow this too, with &ldquo;smaller&rdquo; meaning lower degree. Gauss noticed that the
        Gaussian integers <M>{"a + bi"}</M> allow it as well, and used this to decide which primes are sums of two squares.
        What exactly do these rings share?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose Gaussian integers <M>{"\\alpha"}</M> and <M>{"\\beta"}</M>. The multiples of <M>{"\\beta"}</M> form a square
        grid. Find the nearest grid point to <M>{"\\alpha"}</M>, and compare the size of the remainder with{" "}
        <M>{"\\beta"}</M>.
      </p>
      <GaussianDivViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Euclidean domain">
        <p>
          An integral domain <M>{"R"}</M> is <strong>Euclidean</strong> if there is a function{" "}
          <M>{"N : R \\setminus \\{0\\} \\to \\{0, 1, 2, \\dots\\}"}</M> such that for all <M>{"a"}</M> and all{" "}
          <M>{"b \\ne 0"}</M> there are <M>{"q, r"}</M> with
        </p>
        <MD>{"a = qb + r, \\qquad r = 0 \\text{ or } N(r) < N(b)."}</MD>
        <p>
          Examples: <M>{"\\mathbb{Z}"}</M> with <M>{"N(n) = |n|"}</M>; <M>{"F[x]"}</M> for a field <M>{"F"}</M>, with the
          degree; and the Gaussian integers <M>{"\\mathbb{Z}[i]"}</M>, with <M>{"N(a + bi) = a^2 + b^2"}</M>.
        </p>
      </Definition>

      <Theorem title="ℤ[i] is Euclidean">
        <p>For Gaussian integers α and β ≠ 0, there are q and r with α = qβ + r and N(r) ≤ N(β)/2.</p>
      </Theorem>

      <Proof>
        <p>
          Compute <M>{"\\alpha / \\beta = x + yi"}</M> in <M>{"\\mathbb{C}"}</M>, and round <M>{"x"}</M> and <M>{"y"}</M>{" "}
          to the nearest integers <M>{"m, n"}</M>, so <M>{"|x - m|, |y - n| \\le \\tfrac12"}</M>. Let{" "}
          <M>{"q = m + ni"}</M> and <M>{"r = \\alpha - q\\beta"}</M>, a Gaussian integer. Since the norm is multiplicative,
        </p>
        <MD>{"N(r) = N(\\beta)\\,|(x - m) + (y - n)i|^2 \\le N(\\beta)\\left(\\tfrac14 + \\tfrac14\\right)."}</MD>
      </Proof>

      <Example title="the Euclidean algorithm in ℤ[i]">
        <p>
          The gcd of <M>{"11 + 3i"}</M> and <M>{"1 + 8i"}</M>: divide, take the remainder, and repeat. One finds{" "}
          <M>{"11 + 3i = (1 - i)(1 + 8i) + (2 - 4i)"}</M>, then <M>{"1 + 8i = (-1 + i)(2 - 4i) + (-1 + 2i)"}</M>, and{" "}
          <M>{"2 - 4i = (-2)(-1 + 2i)"}</M>. So the gcd is <M>{"-1 + 2i"}</M>, up to the units <M>{"\\pm 1, \\pm i"}</M>.
        </p>
      </Example>

      <Remark title="why it matters">
        <p>
          In a Euclidean domain, gcds exist and can be computed, every ideal is principal, and factorisation into
          irreducibles is unique; the next lessons prove this chain. Not every ring is Euclidean: in{" "}
          <M>{"\\mathbb{Z}[\\sqrt{-5}]"}</M> the grid of multiples is a long thin rectangle, some points lie too far from it,
          and unique factorisation indeed fails.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "norm",
      rung: "check",
      prompt: <p>What is the norm N(3 + 4i) in the Gaussian integers?</p>,
      answer: { kind: "numeric", value: 25 },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these are Euclidean domains with the usual function? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["ℤ with |n|", "ℚ[x] with degree", "ℤ[i] with a² + b²", "ℤ₆"], correct: [0, 1, 2] },
    },
    {
      key: "quot",
      rung: "apply",
      prompt: (
        <p>
          Dividing <M>{"\\alpha = 7 + 4i"}</M> by <M>{"\\beta = 2 + i"}</M>, the quotient <M>{"\\alpha/\\beta"}</M> is{" "}
          <M>{"3.6 + 0.2i"}</M>. Rounding gives <M>{"q = 4"}</M>. What is the real part of the remainder{" "}
          <M>{"r = \\alpha - 4\\beta"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "rnorm",
      rung: "apply",
      prompt: <p>For that division, what is N(r)?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "units",
      rung: "apply",
      prompt: <p>How many units does ℤ[i] have?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the units of ℤ[i] are exactly the elements of norm 1. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "If uv = 1, then N(u)N(v) = N(1) = 1, and norms are positive integers, so N(u) = 1.",
          "If N(a + bi) = 1, then (a + bi)(a − bi) = 1, so a + bi is a unit.",
          "Concludes the units are ±1 and ±i.",
        ],
      },
    },
    {
      key: "sqrt2",
      rung: "stretch",
      prompt: (
        <p>
          Explain why <M>{"\\mathbb{Z}[\\sqrt{-2}]"}</M>, with <M>{"N(a + b\\sqrt{-2}) = a^2 + 2b^2"}</M>, is also Euclidean.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Rounds the real and imaginary coordinates of α/β to the nearest lattice point, as for ℤ[i].",
          "Bounds the error: N is at most 1/4 + 2 · 1/4 = 3/4 times N(β).",
          "Concludes N(r) < N(β), so the ring is Euclidean. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a Euclidean domain is, with ℤ, F[x] and ℤ[i] as examples, why rounding α/β proves ℤ[i] is Euclidean, and how the Euclidean algorithm finds gcds there.",

  glimpse: (
    <p>
      The next lesson shows that every Euclidean domain is a principal ideal domain, and the one after that every PID has
      unique factorisation. In algebraic number theory, where unique factorisation of elements fails, Dedekind restored it
      for ideals.
    </p>
  ),
};
