import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Proposition, Remark, Theorem } from "@/components/lesson/Blocks";
import { PowersViz } from "@/components/viz/PowersViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m0.7.5",
  minutes: 75,
  links: {
    revisits: ["m0.6.3", "m0.6.2"],
    foreshadows: ["m2.8.3", "m11.4.2", "m14.4.1"],
  },

  puzzle: (
    <>
      <p>
        Among the real numbers, <M>{"x^6 = 1"}</M> has just two solutions, 1 and <M>{"-1"}</M>. The fundamental theorem of
        algebra suggests an equation of degree six should have six. Where are the other four, and what does <M>i</M> have to
        do with them?
      </p>
      <p>And while you are at it: what is a square root of <M>i</M>?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        Describe a point of the plane not by across and up, but by how far it is from 0 and in which direction. In this{" "}
        <strong>polar</strong> description, multiplication of complex numbers is simple: lengths multiply and angles add.
      </p>
      <p>
        So taking powers of a number of length 1 is just walking round the unit circle in equal steps. If six steps of{" "}
        <M>{"60^\\circ"}</M> bring you back to 1, the number you started with is a sixth root of 1. The six solutions of the
        puzzle are the corners of a regular hexagon. Try it below: set the argument to <M>{"60^\\circ"}</M>.
      </p>
      <PowersViz />
    </>
  ),

  theory: (
    <>
      <Definition title="polar form">
        <p>
          Every non-zero complex number can be written as
        </p>
        <MD>{"z = r(\\cos\\theta + i\\sin\\theta),"}</MD>
        <p>
          where <M>{"r = |z|"}</M> is its modulus and <M>{"\\theta"}</M>, an <strong>argument</strong> of <M>z</M>, is the angle
          from the positive real axis to <M>z</M>. The argument is defined only up to adding whole turns.
        </p>
      </Definition>

      <Theorem title="rotations and the addition formulas">
        <p>
          For all angles <M>{"\\alpha"}</M> and <M>{"\\beta"}</M>, not just acute ones,{" "}
          <M>{"\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta"}</M> and{" "}
          <M>{"\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          Turn the whole plane by <M>{"\\alpha"}</M> about the origin. A turn carries parallelograms to parallelograms and
          keeps lengths, so it respects vector addition and scaling. It sends <M>{"(1, 0)"}</M> to{" "}
          <M>{"(\\cos\\alpha, \\sin\\alpha)"}</M> and <M>{"(0, 1)"}</M> to <M>{"(-\\sin\\alpha, \\cos\\alpha)"}</M>. Now{" "}
          <M>{"(\\cos\\beta, \\sin\\beta) = \\cos\\beta\\,(1, 0) + \\sin\\beta\\,(0, 1)"}</M>, so it goes to
        </p>
        <MD>{"\\cos\\beta\\,(\\cos\\alpha, \\sin\\alpha) + \\sin\\beta\\,(-\\sin\\alpha, \\cos\\alpha) = (\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta,\\ \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta)."}</MD>
        <p>
          But turning the point at angle <M>{"\\beta"}</M> by <M>{"\\alpha"}</M> gives the point at angle{" "}
          <M>{"\\alpha + \\beta"}</M>, which is <M>{"(\\cos(\\alpha+\\beta), \\sin(\\alpha+\\beta))"}</M>. This completes the
          proof promised in the lesson on identities.
        </p>
      </Proof>

      <Theorem title="multiplying in polar form">
        <MD>{"r(\\cos\\alpha + i\\sin\\alpha) \\cdot s(\\cos\\beta + i\\sin\\beta) = rs\\big(\\cos(\\alpha + \\beta) + i\\sin(\\alpha + \\beta)\\big)."}</MD>
        <p>To multiply complex numbers, multiply their moduli and add their arguments.</p>
      </Theorem>
      <Proof>
        <p>
          Multiply out: the real part is <M>{"rs(\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta)"}</M> and the imaginary
          part is <M>{"rs(\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta)"}</M>. These are the addition formulas.
        </p>
      </Proof>

      <Proposition title="de Moivre’s formula">
        <p>For every whole number <M>{"n \\ge 1"}</M>, <M>{"(\\cos\\theta + i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta"}</M>.</p>
      </Proposition>
      <Proof>
        <p>
          Each multiplication by <M>{"\\cos\\theta + i\\sin\\theta"}</M> keeps the modulus 1 and adds <M>{"\\theta"}</M> to
          the argument. After <M>n</M> of them the argument is <M>{"n\\theta"}</M>. (The next chapter makes &ldquo;after{" "}
          <M>n</M> of them&rdquo; precise, with induction.)
        </p>
      </Proof>

      <Definition title="roots of unity">
        <p>
          An <strong><M>n</M>th root of unity</strong> is a complex number <M>z</M> with <M>{"z^n = 1"}</M>. There are exactly{" "}
          <M>n</M> of them,
        </p>
        <MD>{"\\cos\\frac{2\\pi k}{n} + i\\sin\\frac{2\\pi k}{n}, \\qquad k = 0, 1, \\ldots, n - 1,"}</MD>
        <p>the corners of a regular <M>n</M>-gon inscribed in the unit circle, with one corner at 1.</p>
      </Definition>
      <p>
        By de Moivre, each of these has <M>n</M>th power <M>{"\\cos 2\\pi k + i\\sin 2\\pi k = 1"}</M>. Conversely, if{" "}
        <M>{"z^n = 1"}</M> then <M>{"|z|^n = 1"}</M>, so <M>{"|z| = 1"}</M>, and <M>n</M> times the argument must be a whole
        number of turns, which gives exactly this list.
      </p>

      <Example title="a square root of i">
        <p>
          The number <M>i</M> has modulus 1 and argument <M>{"90^\\circ"}</M>. Halve the argument: the number with modulus 1
          and argument <M>{"45^\\circ"}</M>, <M>{"\\tfrac{\\sqrt2}{2} + \\tfrac{\\sqrt2}{2}i"}</M>, squares to <M>i</M>. Its
          negative does too. And de Moivre with <M>{"n = 2"}</M> gives{" "}
          <M>{"\\cos 2\\theta + i\\sin 2\\theta = (\\cos\\theta + i \\sin\\theta)^2 = \\cos^2\\theta - \\sin^2\\theta + 2i\\sin\\theta\\cos\\theta"}</M>:
          both double angle formulas at once.
        </p>
      </Example>

      <Remark title="Euler’s formula">
        <p>
          In 1748 Leonhard Euler showed that <M>{"\\cos\\theta + i\\sin\\theta"}</M> behaves exactly like a power,{" "}
          <M>{"e^{i\\theta}"}</M>: multiplying adds the exponents, which is the theorem above. With <M>{"\\theta = \\pi"}</M>{" "}
          it gives
        </p>
        <MD>{"e^{i\\pi} + 1 = 0,"}</MD>
        <p>
          linking the five most important numbers in mathematics in one line. What <M>{"e"}</M> to an imaginary power should
          mean is made precise in Calculus, with infinite series.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "modulus",
      rung: "check",
      prompt: <p>What is the modulus of <M>{"1 + \\sqrt3\\, i"}</M>?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "argument",
      rung: "check",
      prompt: <p>What is the argument of <M>{"1 + \\sqrt3\\, i"}</M>, in degrees between 0 and 360?</p>,
      answer: { kind: "numeric", value: 60 },
    },
    {
      key: "eighth-power",
      rung: "apply",
      prompt: <p>Use polar form to find <M>{"(1 + i)^8"}</M>.</p>,
      answer: { kind: "numeric", value: 16 },
    },
    {
      key: "de-moivre",
      rung: "apply",
      prompt: <p>What is <M>{"(\\cos 20^\\circ + i\\sin 20^\\circ)^9"}</M>?</p>,
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "cube-root",
      rung: "apply",
      prompt: <p>The cube roots of unity are 1 and two others. What is the real part of each of the other two?</p>,
      answer: { kind: "numeric", value: -0.5 },
    },
    {
      key: "product-proof",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"|zw| = |z|\\,|w|"}</M> for all complex numbers <M>z</M> and <M>w</M>, using polar form.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Handles the case where z or w is 0 separately, since both sides are then 0.",
          "Writes z = r(cos α + i sin α) and w = s(cos β + i sin β) with r = |z| and s = |w|.",
          "Uses the multiplication theorem to write zw = rs(cos(α + β) + i sin(α + β)).",
          "Notes that the modulus of this is rs, since cos² + sin² = 1.",
        ],
      },
    },
    {
      key: "root-of-i",
      rung: "stretch",
      prompt: <p>One square root of <M>i</M> has positive real part. What is that real part, to four decimal places?</p>,
      answer: { kind: "numeric", value: 0.7071, tolerance: 0.0001 },
    },
  ],

  teachBack:
    "Explain to a friend why multiplying complex numbers multiplies their lengths and adds their angles, and why the sixth roots of 1 form a hexagon.",

  glimpse: (
    <p>
      This completes the plane. The last chapter of the course turns to sequences and counting, and to induction, which will
      make de Moivre&rsquo;s &ldquo;and so on&rdquo; rigorous. In Calculus, Euler&rsquo;s formula is proved from the series
      for sine, cosine and the exponential. Roots of unity reappear in Number Theory as primitive roots, and in Galois theory
      as the cyclotomic fields.
    </p>
  ),
};
