import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { InverseSlopeViz } from "@/components/viz/InverseSlopeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.4.5",
  minutes: 80,
  links: {
    revisits: ["m0.6.4", "m1.7.3"],
    foreshadows: ["m2.8.1", "m2.8.2", "m5.4.1"],
  },

  puzzle: (
    <>
      <p>
        The function <M>{"f(x) = x^3 + x"}</M> is strictly increasing, so it has an inverse g: for each y there is exactly
        one x with <M>{"x^3 + x = y"}</M>. There is no tidy formula for g. Still, <M>{"f(1) = 2"}</M>, so{" "}
        <M>{"g(2) = 1"}</M>.
      </p>
      <p>How steep is the graph of g at the point <M>{"(2, 1)"}</M>? Can you find out without a formula for g?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        The graph of an inverse function is the graph of f reflected in the line <M>{"y = x"}</M>. Reflection swaps the
        horizontal and vertical directions, so a run of 1 and a rise of m becomes a run of m and a rise of 1. The slope m
        turns into <M>{"1/m"}</M>. At <M>{"(1, 2)"}</M> the graph of f has slope <M>{"f'(1) = 4"}</M>, so at{" "}
        <M>{"(2, 1)"}</M> the graph of g has slope <M>{"1/4"}</M>.
      </p>
      <InverseSlopeViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the derivative of an inverse">
        <p>
          Let f be continuous and strictly monotonic on an open interval I, with inverse <M>{"f^{-1}"}</M>. If f is
          differentiable at a in I with <M>{"f'(a) \\ne 0"}</M>, and <M>{"b = f(a)"}</M>, then <M>{"f^{-1}"}</M> is
          differentiable at b and
        </p>
        <MD>{"(f^{-1})'(b) = \\frac{1}{f'(a)} = \\frac{1}{f'(f^{-1}(b))}."}</MD>
        <p>
          In Leibniz&rsquo;s notation, with <M>{"y = f(x)"}</M>: <M>{"\\dfrac{dx}{dy} = 1 \\Big/ \\dfrac{dy}{dx}"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          We use one fact, proved in Real Analysis I: the inverse of a continuous, strictly monotonic function on an
          interval is continuous. For small <M>{"k \\ne 0"}</M>, let <M>{"h = f^{-1}(b + k) - a"}</M>. Then{" "}
          <M>{"h \\ne 0"}</M>, because <M>{"f^{-1}"}</M> is one to one, and <M>{"f(a + h) = b + k"}</M>. So
        </p>
        <MD>{"\\frac{f^{-1}(b + k) - f^{-1}(b)}{k} = \\frac{h}{f(a + h) - f(a)} = 1 \\Big/ \\frac{f(a + h) - f(a)}{h}."}</MD>
        <p>
          As <M>{"k \\to 0"}</M>, <M>{"h \\to 0"}</M> by continuity of <M>{"f^{-1}"}</M>, so the denominator tends to{" "}
          <M>{"f'(a)"}</M>, which is not 0. The quotient tends to <M>{"1/f'(a)"}</M>.
        </p>
      </Proof>

      <Remark title="a quicker argument, and its gap">
        <p>
          Differentiating <M>{"f(f^{-1}(x)) = x"}</M> with the chain rule gives{" "}
          <M>{"f'(f^{-1}(x)) \\cdot (f^{-1})'(x) = 1"}</M>, which is the same formula. This is the easy way to remember it,
          but it assumes that <M>{"f^{-1}"}</M> is differentiable, which is what needed proving. The same gap appeared in
          the last lesson, where rational powers were differentiated on the assumption that they were differentiable. The
          theorem now fills both gaps.
        </p>
      </Remark>

      <Example title="square roots and cube roots">
        <p>
          <M>{"\\sqrt{x}"}</M> is the inverse of <M>{"x^2"}</M> on <M>{"[0, \\infty)"}</M>. For <M>{"b > 0"}</M>, with{" "}
          <M>{"a = \\sqrt{b}"}</M>, the theorem gives <M>{"1/(2\\sqrt{b})"}</M>, as found from the definition earlier. The
          cube root is the inverse of <M>{"x^3"}</M>, whose derivative is 0 at 0. There the theorem does not apply, and
          indeed <M>{"\\sqrt[3]{x}"}</M> has a vertical tangent at 0 and no derivative.
        </p>
      </Example>

      <Example title="the inverse trigonometric functions">
        <p>
          arcsin is the inverse of sin on <M>{"[-\\pi/2, \\pi/2]"}</M>. For <M>{"-1 < x < 1"}</M>, let{" "}
          <M>{"\\theta = \\arcsin x"}</M>, so <M>{"\\sin\\theta = x"}</M> and <M>{"\\cos \\theta > 0"}</M>. Then
        </p>
        <MD>{"\\frac{d}{dx} \\arcsin x = \\frac{1}{\\cos \\theta} = \\frac{1}{\\sqrt{1 - \\sin^2\\theta}} = \\frac{1}{\\sqrt{1 - x^2}}."}</MD>
        <p>
          Likewise <M>{"\\dfrac{d}{dx}\\arccos x = -\\dfrac{1}{\\sqrt{1 - x^2}}"}</M>. For arctan, the inverse of tan on{" "}
          <M>{"(-\\pi/2, \\pi/2)"}</M>, use <M>{"\\tan' = 1/\\cos^2 = 1 + \\tan^2"}</M>:
        </p>
        <MD>{"\\frac{d}{dx} \\arctan x = \\frac{1}{1 + \\tan^2(\\arctan x)} = \\frac{1}{1 + x^2}."}</MD>
      </Example>

      <Remark title="a surprise">
        <p>
          The function arctan is not built from x by any algebra, yet its derivative <M>{"1/(1 + x^2)"}</M> is a plain
          fraction. Running this backwards, by integration, will produce a formula for <M>{"\\pi"}</M>. The same thing
          happens with the logarithm: once the exponential function is defined, with the property that it is its own
          derivative, the theorem gives <M>{"\\dfrac{d}{dx} \\ln x = \\dfrac{1}{x}"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "basic",
      rung: "check",
      prompt: (
        <p>
          f is invertible, <M>{"f(2) = 5"}</M> and <M>{"f'(2) = 4"}</M>. What is <M>{"(f^{-1})'(5)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.25 },
    },
    {
      key: "arctan",
      rung: "check",
      prompt: (
        <p>
          What is the derivative of <M>{"\\arctan x"}</M> at <M>{"x = 1"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "cubic",
      rung: "apply",
      prompt: (
        <p>
          Let g be the inverse of <M>{"f(x) = x^3 + x"}</M>. What is <M>{"g'(10)"}</M>? (First find the x with{" "}
          <M>{"f(x) = 10"}</M>.)
        </p>
      ),
      answer: { kind: "numeric", value: 1 / 13, tolerance: 0.001 },
    },
    {
      key: "fifth",
      rung: "apply",
      prompt: (
        <p>
          Let g be the inverse of <M>{"f(x) = x^5 + 2x + 1"}</M>. What is <M>{"g'(1)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "arcsin",
      rung: "apply",
      prompt: (
        <p>
          Differentiate <M>{"\\arcsin(2x)"}</M>, for <M>{"|x| < 1/2"}</M>.
        </p>
      ),
      answer: { kind: "expression", value: "2/sqrt(1 - 4x^2)", variables: ["x"] },
    },
    {
      key: "prove-arctan",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"\\dfrac{d}{dx}\\arctan x = \\dfrac{1}{1 + x^2}"}</M> for every real x, checking that the
          hypotheses of the theorem hold.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that tan is continuous and strictly increasing on (−π/2, π/2), with inverse arctan defined on all of ℝ.",
          "Notes that tan′(θ) = 1/cos²θ is never 0 there.",
          "Applies the theorem and rewrites 1/cos²θ as 1 + tan²θ to get 1/(1 + x²).",
        ],
      },
    },
    {
      key: "second",
      rung: "stretch",
      prompt: (
        <p>
          Suppose f is twice differentiable, invertible, and <M>{"f'"}</M> is never 0. Find a formula for the second
          derivative of <M>{"f^{-1}"}</M> at <M>{"b = f(a)"}</M> in terms of <M>{"f'(a)"}</M> and{" "}
          <M>{"f''(a)"}</M>. Check it on <M>{"f(x) = x^2"}</M> for <M>{"x > 0"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Differentiates (f⁻¹)′(y) = 1/f′(f⁻¹(y)) with the chain rule.",
          "Reaches (f⁻¹)″(b) = −f″(a)/f′(a)³.",
          "Checks it against the second derivative of √y, which is −1/(4 y^(3/2)).",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the slope of an inverse function is the reciprocal of the original slope, using the picture of reflecting a graph in the line y = x.",

  glimpse: (
    <p>
      The formula for arctan, run backwards, leads to a series for π later in the course, and the same reasoning gives the
      derivative of the logarithm. In Multivariable Calculus and Vector Analysis, the inverse function theorem says that a
      function of several variables can be inverted near a point whenever its derivative matrix can be.
    </p>
  ),
};
