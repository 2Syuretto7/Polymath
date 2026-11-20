import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { WeierstrassPViz } from "@/components/viz/WeierstrassPViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m28.3.2",
  minutes: 90,
  links: {
    revisits: ["m28.3.1", "m28.2.2", "m13.4.1"],
    foreshadows: ["m28.3.3", "m28.4.1", "m28.4.4"],
  },

  puzzle: (
    <>
      <p>
        The obvious way to make a function with period lattice Λ is to add up translates: the sum of 1/(z − ω)² over all
        ω in Λ. But that series diverges. How can it be repaired, and what does the result look like?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the second period of a rectangular lattice, and watch ℘ along the real axis and its half-period values.</p>
      <WeierstrassPViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Weierstrass ℘-function">
        <p>
          <M>{"\\wp(z) = \\frac{1}{z^2} + \\sum_{\\omega \\ne 0}\\left(\\frac{1}{(z - \\omega)^2} - \\frac{1}{\\omega^2}\\right)"}</M>.
          The bracket is <M>{"O(|\\omega|^{-3})"}</M> for large ω, and <M>{"\\sum_{\\omega \\ne 0}|\\omega|^{-3}"}</M> converges,
          so the series converges uniformly on compact sets away from Λ. ℘ is even, has a double pole at each period, and
          is elliptic of order 2. Its derivative <M>{"\\wp'(z) = -2\\sum_\\omega (z - \\omega)^{-3}"}</M> is odd and elliptic
          of order 3.
        </p>
      </Definition>

      <Theorem title="the differential equation">
        <p>
          With the Eisenstein series <M>{"G_k = \\sum_{\\omega \\ne 0}\\omega^{-k}"}</M>, put{" "}
          <M>{"g_2 = 60G_4"}</M> and <M>{"g_3 = 140G_6"}</M>. Then{" "}
          <M>{"\\wp(z) = z^{-2} + \\tfrac{g_2}{20}z^2 + \\tfrac{g_3}{28}z^4 + \\cdots"}</M> and{" "}
          <M>{"(\\wp')^2 = 4\\wp^3 - g_2\\wp - g_3"}</M>. Proof: the difference of the two sides is elliptic, has no pole at
          0 by comparing Laurent expansions, so is constant, and vanishes at z = 0.
        </p>
      </Theorem>

      <Theorem title="all elliptic functions">
        <p>
          Every elliptic function for Λ is a rational function of ℘ and ℘′. Even elliptic functions are rational functions
          of ℘ alone: one divides out the zeros and poles using factors ℘(z) − ℘(a).
        </p>
      </Theorem>

      <Example title="the elliptic curve">
        <p>
          The map <M>{"z \\mapsto (\\wp(z), \\wp'(z))"}</M> sends <M>{"\\mathbb{C}/\\Lambda"}</M>, minus the point 0, onto the
          cubic curve <M>{"y^2 = 4x^3 - g_2x - g_3"}</M>, with 0 going to the point at infinity. The torus is an
          elliptic curve, and addition on the torus becomes the chord-and-tangent law on the curve.
        </p>
      </Example>

      <Remark title="half-periods">
        <p>
          ℘′ is odd and periodic, so it vanishes at the three half-periods ½, τ/2 and (1 + τ)/2. The values{" "}
          <M>{"e_1, e_2, e_3"}</M> of ℘ there are the roots of <M>{"4x^3 - g_2x - g_3"}</M>, and they are distinct, so the
          discriminant <M>{"g_2^3 - 27g_3^2"}</M> is non-zero. For the square lattice ℤ + ℤi, multiplying by i preserves Λ
          and forces <M>{"G_6 = 0"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "order",
      rung: "check",
      prompt: <p>What is the order of ℘ as an elliptic function?</p>,
      answer: { kind: "choice", options: ["2, with one double pole in each parallelogram", "1", "3", "It is not elliptic"], correct: [0] },
    },
    {
      key: "odd",
      rung: "check",
      prompt: <p>Which statement about ℘ and ℘′ is correct?</p>,
      answer: { kind: "choice", options: ["℘ is even and ℘′ is odd", "Both are even", "℘ is odd and ℘′ is even", "Both are odd"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set τ = i. What is ℘(½), to two decimal places?</p>,
      answer: { kind: "numeric", value: 6.88, tolerance: 0.01 },
    },
    {
      key: "zeros",
      rung: "apply",
      prompt: <p>How many points of ℂ/Λ are zeros of ℘′?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "curve",
      rung: "apply",
      prompt: <p>Which curve does z ↦ (℘(z), ℘′(z)) parametrise?</p>,
      answer: { kind: "choice", options: ["y² = 4x³ − g₂x − g₃", "x² + y² = 1", "y = x³", "y² = x² + 1"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that ℘′(½) = 0 for the lattice ℤ + ℤτ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that ℘′ has period 1, so ℘′(½) = ℘′(−½).",
          "Uses that ℘′ is odd, so ℘′(−½) = −℘′(½).",
          "Notes ½ is not a pole, and concludes ℘′(½) = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why are the three half-period values e₁, e₂ and e₃ distinct?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that ℘ − eᵢ vanishes at its half-period, doubly, since ℘′ vanishes there too.",
          "Uses that ℘ − eᵢ has order 2, so it has no other zeros in a parallelogram.",
          "Concludes that ℘ cannot take the value eᵢ at another half-period. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Rotating or rescaling a lattice gives the same torus. Which values of τ give the same lattice up to scale? The
        answer is a group of 2 × 2 integer matrices.
      </p>
      <p>Next, the modular group.</p>
    </>
  ),
};
