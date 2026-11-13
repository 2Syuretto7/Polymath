import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { DiffQuotientViz } from "@/components/viz/DiffQuotientViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.1.2",
  minutes: 90,
  links: {
    revisits: ["m6.5.1", "m2.4.1", "m13.1.1"],
    foreshadows: ["m13.1.3", "m13.2.3", "m13.5.3"],
  },

  puzzle: (
    <>
      <p>
        The real function <M>{"x|x|"}</M> has a derivative everywhere, but its derivative <M>{"2|x|"}</M> has a corner at 0.
        Real differentiability promises nothing about the second derivative. For functions of a complex variable, one complex
        derivative will force infinitely many. The difference starts with a single definition.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Shrink h and turn it round. For which functions does the difference quotient settle on one value?</p>
      <DiffQuotientViz />
    </>
  ),

  theory: (
    <>
      <Definition title="complex differentiability">
        <p>
          Let <M>{"U \\subseteq \\mathbb{C}"}</M> be open and <M>{"f: U \\to \\mathbb{C}"}</M>. Then <M>{"f"}</M> is
          complex differentiable at <M>{"z_0 \\in U"}</M> if the limit
        </p>
        <MD>{"f'(z_0) = \\lim_{h \\to 0} \\frac{f(z_0 + h) - f(z_0)}{h}"}</MD>
        <p>
          exists, where <M>{"h"}</M> tends to 0 through complex values, from every direction. If it exists at every point of{" "}
          <M>{"U"}</M>, <M>{"f"}</M> is holomorphic on <M>{"U"}</M>. A function holomorphic on all of{" "}
          <M>{"\\mathbb{C}"}</M> is entire.
        </p>
      </Definition>

      <Theorem title="the usual rules">
        <p>
          Sums, products, quotients (where the denominator is nonzero) and composites of holomorphic functions are holomorphic,
          with the familiar formulas. The proofs are word for word the real ones, since they use only the field operations and
          limits. So every polynomial is entire, with <M>{"(z^n)' = nz^{n-1}"}</M>, and rational functions are holomorphic
          away from the zeros of their denominators.
        </p>
      </Theorem>

      <Example title="a smooth map that is not holomorphic">
        <p>
          For <M>{"f(z) = \\bar z"}</M> the quotient is <M>{"\\bar h / h"}</M>. It equals 1 when <M>{"h"}</M> is real and{" "}
          <M>{"-1"}</M> when <M>{"h"}</M> is imaginary, so there is no limit anywhere, although as a map of the plane{" "}
          <M>{"f"}</M> is a reflection, as smooth as can be. For <M>{"|z|^2"}</M> the quotient is{" "}
          <M>{"\\bar z_0 + z_0 \\bar h/h + \\bar h"}</M>, which has a limit only when <M>{"z_0 = 0"}</M>.
        </p>
      </Example>

      <Remark title="why it is so strong">
        <p>
          Complex differentiability says the map looks, near <M>{"z_0"}</M>, like multiplication by the number{" "}
          <M>{"f'(z_0)"}</M>: a rotation and scaling, not a general linear map of the plane. This constraint, made precise by
          the Cauchy&ndash;Riemann equations in the next lesson, will lead to Cauchy&rsquo;s theorem, and from it to the fact
          that holomorphic functions are infinitely differentiable and equal to their Taylor series.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these functions is entire?</p>,
      answer: { kind: "choice", options: ["z³ − 2z", "z̄", "|z|", "Re z"], correct: [0] },
    },
    {
      key: "deriv",
      rung: "check",
      prompt: <p>Let <M>{"f(z) = z^2"}</M>. Give the real part of <M>{"f'(1 + 2i)"}</M>.</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "conj",
      rung: "apply",
      prompt: <p>For <M>{"f(z) = \\bar z"}</M>, what is the difference quotient when <M>{"h"}</M> is purely imaginary and nonzero?</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0.001 },
    },
    {
      key: "recip",
      rung: "apply",
      prompt: <p>Find the derivative of <M>{"1/z"}</M> at <M>{"z = 2"}</M>.</p>,
      answer: { kind: "numeric", value: -0.25, tolerance: 0.001 },
    },
    {
      key: "abs2",
      rung: "apply",
      prompt: <p>The function <M>{"|z|^2"}</M> is complex differentiable at exactly one point. What is its derivative there?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0.001 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove that <M>{"f(z) = \\bar z"}</M> is not complex differentiable at any point.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the difference quotient as h̄/h, independent of the point.",
          "Shows it is 1 along real h and −1 along imaginary h.",
          "Concludes the limit as h → 0 does not exist.",
        ],
      },
    },
    {
      key: "zre",
      rung: "stretch",
      prompt: <p>Where is <M>{"f(z) = z \\operatorname{Re} z"}</M> complex differentiable?</p>,
      answer: {
        kind: "written",
        rubric: [
          "At 0: the quotient is Re h, which tends to 0, so f′(0) = 0.",
          "Elsewhere the quotient depends on the direction of h (or the Cauchy–Riemann equations fail), so only at 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what it means for a function of a complex variable to be differentiable, why z̄ fails, and why this is a much stronger demand than having partial derivatives.",

  glimpse: (
    <p>
      The next lesson turns the definition into the Cauchy&ndash;Riemann equations. Later the Cauchy integral formula shows
      that holomorphic functions are infinitely differentiable, and the open mapping theorem shows how rigid they are.
    </p>
  ),
};
