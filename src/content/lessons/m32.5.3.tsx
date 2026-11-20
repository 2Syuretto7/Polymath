import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { WeylCharViz } from "@/components/viz/WeylCharViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.5.3",
  minutes: 90,
  links: {
    revisits: ["m32.5.2", "m32.5.1", "m32.2.1"],
    foreshadows: ["m34.1.3", "m34.5.1", "m39.4.1"],
  },

  puzzle: (
    <>
      <p>
        The sum 1 + x² + x⁴ + ⋯ + x²ⁿ has n + 1 terms but collapses to one fraction, (x²ⁿ⁺² − 1)/(x² − 1). The character of a
        representation is also a long sum over weights. Could it too be a short quotient?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose n and an angle, and compare the sum over weights with Weyl&rsquo;s quotient.</p>
      <WeylCharViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the character">
        <p>
          The <strong>character</strong> of a finite-dimensional representation V is the function{" "}
          <M>{"\\chi_V(H) = \\operatorname{tr} \\exp(H) = \\sum_\\mu \\dim V_\\mu \\, e^{\\mu(H)}"}</M> on the Cartan
          subalgebra. As for finite groups, it determines V up to isomorphism. Let ρ be half the sum of the positive roots
          and, for w in the Weyl group W, let ε(w) = ±1 be the sign of w as a product of reflections.
        </p>
      </Definition>

      <Theorem title="Weyl's character formula">
        <p>
          <M>{"\\chi_{V(\\lambda)} = \\dfrac{\\sum_{w \\in W} \\varepsilon(w)\\, e^{w(\\lambda + \\rho)}}{\\sum_{w \\in W} \\varepsilon(w)\\, e^{w\\rho}}"}</M>
        </p>
      </Theorem>

      <Theorem title="Weyl's dimension formula">
        <p>
          Letting H tend to 0 gives{" "}
          <M>{"\\dim V(\\lambda) = \\prod_{\\alpha > 0} \\dfrac{(\\lambda + \\rho, \\alpha)}{(\\rho, \\alpha)}"}</M>.
        </p>
      </Theorem>

      <Example title="sl(2) and sl(3)">
        <p>
          For sl(2), W has two elements and ρ is half the single positive root. On diag(exp(iθ), exp(−iθ)) the formula reads{" "}
          <M>{"\\chi_n(\\theta) = \\dfrac{\\sin (n+1)\\theta}{\\sin \\theta}"}</M>, and the dimension is n + 1. For sl(3),
          with λ = aω₁ + bω₂, the three positive roots give{" "}
          <M>{"\\dim V(\\lambda) = \\tfrac12 (a+1)(b+1)(a+b+2)"}</M>: 8 for (1, 1), 27 for (2, 2).
        </p>
      </Example>

      <Remark title="where the formula lives">
        <p>
          Weyl proved it in 1925 for compact groups, by integrating characters over the group: the denominator, which
          equals <M>{"\\prod_{\\alpha > 0} (e^{\\alpha/2} - e^{-\\alpha/2})"}</M>, is the square root of the density in
          his integration formula. Orthogonality of characters on the compact group then forces the numerator. Kostant and
          Freudenthal turned the formula into rules for single multiplicities.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rho",
      rung: "check",
      prompt: <p>In Weyl&rsquo;s formula, what is ρ?</p>,
      answer: { kind: "choice", options: ["Half the sum of the positive roots", "The highest root", "The sum of the simple roots", "The highest weight"], correct: [0] },
    },
    {
      key: "zero",
      rung: "check",
      prompt: <p>What is the value of a character at H = 0?</p>,
      answer: { kind: "choice", options: ["The dimension of the representation", "0", "1", "The number of weights"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 4 and θ = 60°. What is the value of the character?</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0.01 },
    },
    {
      key: "dim",
      rung: "apply",
      prompt: <p>Use the sl(3) dimension formula to find the dimension of the representation with highest weight 2ω₁ + ω₂.</p>,
      answer: { kind: "numeric", value: 15, tolerance: 0 },
    },
    {
      key: "sl2",
      rung: "apply",
      prompt: <p>For sl(2), what does Weyl&rsquo;s dimension formula give for V(n)?</p>,
      answer: { kind: "choice", options: ["n + 1", "n", "2n", "n(n + 1)/2"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that xⁿ + xⁿ⁻² + ⋯ + x⁻ⁿ = (xⁿ⁺¹ − x⁻⁽ⁿ⁺¹⁾)/(x − x⁻¹), which is Weyl&rsquo;s formula for sl(2).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Multiplies the sum by x − x⁻¹.",
          "Observes that the terms cancel in pairs, leaving xⁿ⁺¹ − x⁻⁽ⁿ⁺¹⁾.",
          "Divides back, noting x − x⁻¹ is non-zero.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the dimension formula to list the irreducible representations of sl(3) of dimension at most 10.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Evaluates ½(a + 1)(b + 1)(a + b + 2) for small a and b.",
          "Finds dimensions 1, 3, 3, 6, 6, 8, 10, 10, from (0, 0), (1, 0), (0, 1), (2, 0), (0, 2), (1, 1), (3, 0), (0, 3).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Characters turned representations of compact groups into functions, and orthogonality into a tool. The circle is
        the simplest compact group; its characters are the functions exp(inθ), and expanding in them is Fourier analysis.
      </p>
      <p>Next, the course on harmonic analysis begins with convergence of Fourier series.</p>
    </>
  ),
};
