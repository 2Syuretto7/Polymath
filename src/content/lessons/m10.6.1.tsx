import { M, MD } from "@/components/Math";
import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { SeriesSolutionViz } from "@/components/viz/SeriesSolutionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.6.1",
  minutes: 90,
  links: {
    revisits: ["m2.9.4", "m6.8.3", "m10.3.1"],
    foreshadows: ["m10.6.2", "m10.6.3", "m13.1.4"],
  },

  puzzle: (
    <>
      <p>
        The equation <M>{"y'' = xy"}</M> describes light near a rainbow and a quantum particle in a uniform field. Its
        coefficients are not constant, so characteristic equations are useless, and no elementary function solves it. Can we
        still compute its solutions to any accuracy we like?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose an equation and add terms of its power series solution. Watch the partial sums match the true solution over a
        wider and wider range.
      </p>
      <SeriesSolutionViz />
    </>
  ),

  theory: (
    <>
      <Remark title="the method">
        <p>
          Seek <M>{"y = \\sum_{n \\ge 0} a_nx^n"}</M>. Then <M>{"y' = \\sum na_nx^{n-1}"}</M> and{" "}
          <M>{"y'' = \\sum n(n-1)a_nx^{n-2}"}</M>. Substitute, shift indices so every sum runs over <M>{"x^n"}</M>, and set each
          coefficient to zero. This gives a recurrence for <M>{"a_n"}</M>; the free values <M>{"a_0 = y(0)"}</M> and{" "}
          <M>{"a_1 = y'(0)"}</M> are the two constants.
        </p>
      </Remark>

      <Example title="y″ + y = 0">
        <p>
          <M>{"\\sum (n+2)(n+1)a_{n+2}x^n + \\sum a_nx^n = 0"}</M>, so{" "}
          <M>{"a_{n+2} = -\\dfrac{a_n}{(n+2)(n+1)}"}</M>. With <M>{"a_0 = 1"}</M>, <M>{"a_1 = 0"}</M>:{" "}
          <M>{"y = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots = \\cos x"}</M>.
        </p>
      </Example>

      <Example title="Airy's equation">
        <p>For <M>{"y'' = xy"}</M>, matching coefficients gives <M>{"a_2 = 0"}</M> and</p>
        <MD>{"a_{n+2} = \\frac{a_{n-1}}{(n+2)(n+1)} \\quad (n \\ge 1)."}</MD>
        <p>
          So <M>{"a_3 = a_0/6"}</M>, <M>{"a_6 = a_0/180"}</M>, and so on: two series, one starting{" "}
          <M>{"1 + x^3/6 + \\cdots"}</M> and one starting <M>{"x + x^4/12 + \\cdots"}</M>. They define the Airy functions.
        </p>
      </Example>

      <Theorem title="ordinary points">
        <p>
          If <M>{"p"}</M> and <M>{"q"}</M> are analytic at <M>{"x_0"}</M>, with power series converging for{" "}
          <M>{"|x - x_0| < \\rho"}</M>, then every solution of <M>{"y'' + p(x)y' + q(x)y = 0"}</M> is analytic at{" "}
          <M>{"x_0"}</M>, and its power series converges at least for <M>{"|x - x_0| < \\rho"}</M>.
        </p>
      </Theorem>

      <Remark title="singular points">
        <p>
          At a point where <M>{"p"}</M> or <M>{"q"}</M> blows up, as at <M>{"x = 0"}</M> in Bessel&rsquo;s equation{" "}
          <M>{"x^2y'' + xy' + (x^2 - \\nu^2)y = 0"}</M>, plain power series may fail. Frobenius&rsquo;s method tries{" "}
          <M>{"y = x^r\\sum a_nx^n"}</M> instead, with <M>{"r"}</M> found from an indicial equation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "free",
      rung: "check",
      prompt: <p>In a power series solution <M>{"\\sum a_nx^n"}</M> of a second-order equation, what are <M>{"a_0"}</M> and <M>{"a_1"}</M>?</p>,
      answer: { kind: "choice", options: ["y(0) and y′(0)", "Always 1 and 0", "The roots of the characteristic equation", "y(1) and y′(1)"], correct: [0] },
    },
    {
      key: "shift",
      rung: "check",
      prompt: <p>What is the coefficient of <M>{"x^n"}</M> in <M>{"y'' = \\sum n(n-1)a_nx^{n-2}"}</M>?</p>,
      answer: { kind: "choice", options: ["n(n − 1)aₙ", "(n + 2)(n + 1)aₙ₊₂", "(n + 1)aₙ₊₁", "aₙ₋₂"], correct: [1] },
    },
    {
      key: "a4",
      rung: "apply",
      prompt: <p>For <M>{"y'' + y = 0"}</M> with <M>{"a_0 = 1"}</M>, <M>{"a_1 = 0"}</M>, what is <M>{"a_4"}</M>?</p>,
      answer: { kind: "numeric", value: 1 / 24, tolerance: 0.0005 },
    },
    {
      key: "airy",
      rung: "apply",
      prompt: <p>For Airy&rsquo;s equation with <M>{"a_0 = 1"}</M>, <M>{"a_1 = 0"}</M>, what is <M>{"a_6"}</M>?</p>,
      answer: { kind: "numeric", value: 1 / 180, tolerance: 0.0002 },
    },
    {
      key: "rec",
      rung: "apply",
      prompt: <p>What recurrence do you get for <M>{"y' = 2xy"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["a(n+1) = 2a(n−1)/(n + 1)", "a(n+1) = 2a(n)", "a(n+2) = −a(n)/(n + 2)", "a(n+1) = a(n)/(n + 1)"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive the recurrence <M>{"a_{n+2} = -a_n/(n + 2)"}</M> for <M>{"y'' + xy' + y = 0"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes y″ = Σ (n+2)(n+1)aₙ₊₂xⁿ and xy′ = Σ naₙxⁿ.",
          "Collects the coefficient of xⁿ: (n+2)(n+1)aₙ₊₂ + (n + 1)aₙ = 0.",
          "Divides by (n + 1) to get the recurrence.",
        ],
      },
    },
    {
      key: "radius",
      rung: "stretch",
      prompt: <p>For <M>{"(1 + x^2)y'' + y = 0"}</M>, how far from 0 must the series solutions converge, by the ordinary point theorem? Why might the real line be misleading here?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes q = 1/(1 + x²), whose series at 0 has radius 1.",
          "Explains the radius is limited by the complex singularities ±i, even though nothing blows up on the real line.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to find a power series solution by substituting, shifting indices and matching coefficients, work through y″ + y = 0 and Airy's equation, and say what the ordinary point theorem guarantees.",

  glimpse: (
    <p>
      The next lesson introduces the Laplace transform, which turns differential equations into algebra. Series return in
      Sturm–Liouville theory, and complex analysis explains their radii of convergence.
    </p>
  ),
};
