import { M, MD } from "@/components/Math";
import { Definition, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TrigSeriesViz } from "@/components/viz/TrigSeriesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.8.3",
  minutes: 85,
  links: {
    revisits: ["m2.2.3", "m2.4.2"],
    foreshadows: ["m2.9.4", "m10.3.4", "m13.1.1"],
  },

  puzzle: (
    <>
      <p>
        Every fact about sine and cosine so far has rested on pictures: a point going round a circle, an angle measured by
        arc length. The key limit <M>{"\\sin h / h \\to 1"}</M> was proved by comparing areas in a diagram. But what is the
        length of an arc, before calculus defines it?
      </p>
      <p>
        The logarithm and exponential have now been built from nothing but integrals. Can sine and cosine be built the same
        way, so that every property, even the value of π, is proved rather than seen?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Sine and cosine are the functions that differentiate into each other: <M>{"\\sin' = \\cos"}</M> and{" "}
        <M>{"\\cos' = -\\sin"}</M>. A polynomial that obeyed these rules, with <M>{"\\cos 0 = 1"}</M> and{" "}
        <M>{"\\sin 0 = 0"}</M>, would have to have coefficients <M>{"1, 0, -\\tfrac{1}{2!}, 0, \\tfrac{1}{4!}, \\ldots"}</M>.
        No polynomial can go on for ever, but a series can. Add terms below and watch the polynomials wrap themselves round
        the waves.
      </p>
      <TrigSeriesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="sine and cosine">
        <MD>{"\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots = \\sum_{k=0}^\\infty \\frac{(-1)^k x^{2k}}{(2k)!}, \\qquad \\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots = \\sum_{k=0}^\\infty \\frac{(-1)^k x^{2k+1}}{(2k+1)!}."}</MD>
      </Definition>
      <p>
        Two facts about these series are proved in the next chapter: they converge for every real x, and they may be
        differentiated term by term. Granting them, differentiating each term gives{" "}
        <M>{"\\sin' = \\cos"}</M> and <M>{"\\cos' = -\\sin"}</M> at once. Everything else follows from these two
        equations and the values at 0, by the kind of argument already used for the exponential.
      </p>

      <Theorem title="the Pythagorean identity">
        <p>
          <M>{"\\sin^2 x + \\cos^2 x = 1"}</M> for all x.
        </p>
      </Theorem>
      <Proof>
        <p>
          Let <M>{"g = \\sin^2 + \\cos^2"}</M>. Then <M>{"g' = 2\\sin\\cos - 2\\cos\\sin = 0"}</M>, so g is constant, and{" "}
          <M>{"g(0) = 0 + 1 = 1"}</M>.
        </p>
      </Proof>

      <Theorem title="uniqueness">
        <p>
          If <M>{"f'' = -f"}</M>, then <M>{"f(x) = f(0)\\cos x + f'(0)\\sin x"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          Let <M>{"h = f - f(0)\\cos - f'(0)\\sin"}</M>. Then <M>{"h'' = -h"}</M> and <M>{"h(0) = h'(0) = 0"}</M>. The
          quantity <M>{"E = h^2 + (h')^2"}</M> has <M>{"E' = 2hh' + 2h'h'' = 2hh' - 2h'h = 0"}</M>, so E is constant, and
          equal to <M>{"E(0) = 0"}</M>. A sum of squares that is 0 has both squares 0, so <M>{"h = 0"}</M>.
        </p>
      </Proof>

      <Theorem title="the addition formulas">
        <MD>{"\\sin(x + y) = \\sin x \\cos y + \\cos x \\sin y, \\qquad \\cos(x + y) = \\cos x \\cos y - \\sin x \\sin y."}</MD>
      </Theorem>
      <Proof>
        <p>
          Fix y and let <M>{"f(x) = \\sin(x + y)"}</M>. Then <M>{"f'' = -f"}</M>, with <M>{"f(0) = \\sin y"}</M> and{" "}
          <M>{"f'(0) = \\cos y"}</M>. By uniqueness, <M>{"f(x) = \\sin y \\cos x + \\cos y \\sin x"}</M>. Differentiating in
          x gives the formula for cosine.
        </p>
      </Proof>

      <Definition title="π">
        <p>
          cos is 1 at 0, and the series shows that <M>{"\\cos 2 < 0"}</M>: at <M>{"x = 2"}</M> its terms after the
          first three pair off into negative amounts, so <M>{"\\cos 2 < 1 - 2 + \\tfrac{2}{3} = -\\tfrac{1}{3}"}</M>. So by the intermediate value theorem cos
          has a zero between 0 and 2. Define <M>{"\\pi/2"}</M> to be the smallest positive zero of cos.
        </p>
      </Definition>
      <p>
        From here the familiar facts follow by calculation. Since <M>{"\\sin' = \\cos > 0"}</M> on{" "}
        <M>{"[0, \\pi/2)"}</M>, sin rises from 0 to <M>{"\\sin(\\pi/2) = 1"}</M>. The addition formulas then give{" "}
        <M>{"\\sin(x + \\pi/2) = \\cos x"}</M> and <M>{"\\cos(x + \\pi/2) = -\\sin x"}</M>, and applying these four times,{" "}
        <M>{"\\sin(x + 2\\pi) = \\sin x"}</M>: both functions have period <M>{"2\\pi"}</M>.
      </p>

      <Remark title="back to the circle">
        <p>
          The point <M>{"(\\cos t, \\sin t)"}</M> lies on the unit circle, by the Pythagorean identity, and moves with speed{" "}
          <M>{"\\sqrt{\\sin^2 t + \\cos^2 t} = 1"}</M>. So the arc it traces in time t has length t, which is exactly the
          old definition of the angle in radians. The pictures were right all along; now they are theorems. The arc length
          formula behind this sentence is the subject of the last chapter.
        </p>
      </Remark>

      <Remark title="a single function">
        <p>
          Put ix into the exponential series and separate the real and imaginary parts: the result is{" "}
          <M>{"e^{ix} = \\cos x + i \\sin x"}</M>, Euler&rsquo;s formula. The exponential and the trigonometric functions,
          which looked unrelated, are one function seen from two directions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "coef",
      rung: "check",
      prompt: (
        <p>
          What is the coefficient of <M>{"x^4"}</M> in the series for <M>{"\\cos x"}</M>? (Give a decimal or a fraction.)
        </p>
      ),
      answer: { kind: "numeric", value: 1 / 24, tolerance: 0.001 },
    },
    {
      key: "deriv",
      rung: "check",
      prompt: <p>Differentiating the series for sin term by term gives which series?</p>,
      answer: { kind: "choice", options: ["the series for cos", "the series for −cos", "the series for −sin", "the series for sin"], correct: [0] },
    },
    {
      key: "approx",
      rung: "apply",
      prompt: (
        <p>
          Use the first three terms of the cosine series to estimate <M>{"\\cos 1"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 1 - 0.5 + 1 / 24, tolerance: 0.001 },
    },
    {
      key: "solve",
      rung: "apply",
      prompt: (
        <p>
          A function satisfies <M>{"f'' = -f"}</M>, <M>{"f(0) = 2"}</M> and <M>{"f'(0) = 3"}</M>. Find f.
        </p>
      ),
      answer: { kind: "expression", value: "2cos(x) + 3sin(x)", variables: ["x"] },
    },
    {
      key: "even",
      rung: "apply",
      prompt: <p>From the series alone, which of these hold for every x? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["cos(−x) = cos x", "sin(−x) = −sin x", "sin(−x) = sin x", "cos(−x) = −cos x"], correct: [0, 1] },
    },
    {
      key: "double",
      rung: "prove",
      prompt: (
        <p>
          Using the uniqueness theorem, prove that <M>{"\\cos(-x) = \\cos x"}</M>, and then derive{" "}
          <M>{"\\cos 2x = \\cos^2 x - \\sin^2 x"}</M> from the addition formula.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Lets f(x) = cos(−x), checks f″ = −f with f(0) = 1 and f′(0) = 0, and concludes f = cos.",
          "Puts y = x in the addition formula for cosine.",
          "States the result clearly. Using the series directly for the first part is also acceptable.",
        ],
      },
    },
    {
      key: "pi",
      rung: "stretch",
      prompt: (
        <p>
          Show that <M>{"\\cos 2 < 0"}</M> using the series: after <M>{"1 - \\tfrac{x^2}{2!} + \\tfrac{x^4}{4!}"}</M>, group
          the terms in pairs, <M>{"-\\left(\\tfrac{x^6}{6!} - \\tfrac{x^8}{8!}\\right)"}</M>, and so on, and show that at{" "}
          <M>{"x = 2"}</M> each bracket is positive. Conclude that <M>{"\\pi < 4"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that a bracket x^(2m)/(2m)! − x^(2m+2)/(2m+2)! is positive when x² < (2m+1)(2m+2), which holds at x = 2 for m ≥ 3.",
          "Concludes that cos 2 < 1 − 2 + 16/24 = −1/3, or reaches a negative value by another correct grouping.",
          "Concludes that the first positive zero of cos is less than 2, so π/2 < 2. Any argument with the right idea is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how sine and cosine can be defined by series, how their derivatives follow, and how the identity sin² + cos² = 1 and the number π come out of the definitions.",

  glimpse: (
    <p>
      The next chapter proves that power series converge and can be differentiated term by term, completing the
      construction. In Ordinary Differential Equations, f″ = −f describes every simple oscillation, from a pendulum to an
      electrical circuit. Complex Analysis makes Euler&rsquo;s formula the centre of everything.
    </p>
  ),
};
