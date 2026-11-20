import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ThreeGapViz } from "@/components/viz/ThreeGapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.1.1",
  minutes: 90,
  links: {
    revisits: ["m0.1.4", "m6.2.3", "m22.1.4"],
    foreshadows: ["m36.1.2", "m36.2.2", "m36.4.2"],
  },

  puzzle: (
    <>
      <p>
        Write down the leading digits of 1, 2, 4, 8, 16, 32, 64, 128, …. The digit 1 leads about 30% of the time and 9
        less than 5%. Every digit turns up infinitely often. Why should powers of 2 prefer small leading digits, and in
        exactly what proportions?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a rotation and add points of an orbit, and watch the gaps between them.</p>
      <ThreeGapViz />
    </>
  ),

  theory: (
    <>
      <Definition title="rotations of the circle">
        <p>
          A <strong>dynamical system</strong> here is a map T of a space X to itself, studied through its{" "}
          <strong>orbits</strong> <M>{"x, Tx, T^2x, \\dots"}</M>. The <strong>rotation</strong> by α on the circle{" "}
          <M>{"\\mathbb T = \\mathbb R/\\mathbb Z"}</M> is <M>{"R_\\alpha(x) = x + \\alpha \\bmod 1"}</M>. It is an
          isometry and preserves length.
        </p>
      </Definition>

      <Theorem title="rational and irrational rotations">
        <p>
          If α = p/q in lowest terms, every orbit is periodic with period q. If α is irrational, every orbit is dense
          (Jacobi&rsquo;s theorem): its points are distinct, so two of the first N + 1 lie within 1/N of each other, and the
          multiples of their difference step round the whole circle in steps under 1/N.
        </p>
      </Theorem>

      <Theorem title="Weyl's equidistribution theorem">
        <p>
          If α is irrational, then for every arc [a, b),{" "}
          <M>{"\\frac1N \\#\\{0 \\le k < N : k\\alpha \\bmod 1 \\in [a, b)\\} \\to b - a"}</M>. The proof uses Fourier
          analysis: for m ≠ 0,{" "}
          <M>{"\\left|\\frac1N \\sum_{k < N} e^{2\\pi i m k\\alpha}\\right| \\le \\frac{2}{N\\,|1 - e^{2\\pi i m\\alpha}|} \\to 0"}</M>,
          and trigonometric polynomials approximate the indicator of an arc.
        </p>
      </Theorem>

      <Example title="leading digits of powers of 2">
        <p>
          The leading digit of <M>{"2^n"}</M> is d exactly when{" "}
          <M>{"n \\log_{10} 2 \\bmod 1 \\in [\\log_{10} d, \\log_{10}(d + 1))"}</M>. Since <M>{"\\log_{10} 2"}</M> is
          irrational, Weyl&rsquo;s theorem gives frequency <M>{"\\log_{10}(1 + 1/d)"}</M>: about 0.301 for 1 and 0.046 for 9.
        </p>
      </Example>

      <Remark title="three gaps">
        <p>
          The visualisation shows a surprise. However many points of an irrational orbit are marked, the gaps between
          neighbours take at most three lengths, and when there are three the largest is the sum of the other two. This is
          the three-gap theorem, conjectured by Steinhaus and proved by Vera Sós and others in the late 1950s.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rat",
      rung: "check",
      prompt: <p>What are the orbits of a rotation by a rational angle p/q like?</p>,
      answer: { kind: "choice", options: ["Periodic, with period q", "Dense", "Convergent to a fixed point", "Unbounded"], correct: [0] },
    },
    {
      key: "eq",
      rung: "check",
      prompt: <p>What does it mean that the sequence kα mod 1 is equidistributed?</p>,
      answer: { kind: "choice", options: ["The proportion of its terms in any arc tends to the arc’s length", "Its terms are equally spaced", "It is periodic", "It converges to ½"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take α = (√5 − 1)/2 and N = 10. How many distinct gap lengths are there?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "seven",
      rung: "apply",
      prompt: <p>In the long run, what proportion of the powers of 2 begin with the digit 7, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.058, tolerance: 0.001 },
    },
    {
      key: "weyl",
      rung: "apply",
      prompt: <p>Why does the average of exp(2πimkα) over k &lt; N tend to 0 when α is irrational and m ≠ 0?</p>,
      answer: { kind: "choice", options: ["It is a geometric sum whose total stays bounded while N grows", "Each term is 0", "The terms tend to 0", "By the central limit theorem"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if α is irrational, the points kα mod 1 for k = 0, 1, 2, … are all distinct.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes jα and kα are equal mod 1 with j ≠ k.",
          "Deduces (j − k)α is an integer m.",
          "Concludes α = m/(j − k) is rational, a contradiction.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the pigeonhole principle to show that an orbit of an irrational rotation comes within 1/N of every point.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Places N + 1 distinct orbit points in N arcs of length 1/N, so two lie within 1/N.",
          "Uses their difference δ, a multiple of α mod 1 with 0 < |δ| < 1/N, whose multiples step round the circle.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A rotation moves points but keeps them the same distance apart, so its orbits are orderly. A map that stretches
        distances behaves very differently: nearby points race apart, and simple rules produce behaviour that looks random.
      </p>
      <p>Next, expanding maps.</p>
    </>
  ),
};
