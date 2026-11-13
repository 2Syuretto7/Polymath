import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ChangeOfVariableViz } from "@/components/viz/ChangeOfVariableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.5.3",
  minutes: 90,
  links: {
    revisits: ["m9.3.3", "m2.6.4", "m5.5.3"],
    foreshadows: ["m9.5.4", "m9.7.2", "m12.5.2"],
  },

  puzzle: (
    <>
      <p>
        A square&rsquo;s side is chosen uniformly between 0 and 1. Is its area also uniform between 0 and 1? Small areas turn
        out to be much more likely than large ones. When a random quantity is pushed through a function, how exactly does its
        density change?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a transformation and watch where equal slices of probability land.</p>
      <ChangeOfVariableViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="change of variables in one dimension">
        <p>
          Let <M>{"X"}</M> have density <M>{"f_X"}</M>, and let <M>{"g"}</M> be differentiable and strictly monotone on the
          range of <M>{"X"}</M>. Then <M>{"Y = g(X)"}</M> has density
        </p>
        <MD>{"f_Y(y) = f_X(x)\\left|\\frac{dx}{dy}\\right|, \\qquad x = g^{-1}(y)."}</MD>
      </Theorem>

      <Proof>
        <p>Take <M>{"g"}</M> increasing. Then <M>{"F_Y(y) = P(g(X) \\le y) = P(X \\le g^{-1}(y)) = F_X(g^{-1}(y))"}</M>. Differentiate with the chain rule:</p>
        <MD>{"f_Y(y) = f_X(g^{-1}(y))\\,\\frac{d}{dy}g^{-1}(y)."}</MD>
        <p>For decreasing <M>{"g"}</M>, <M>{"F_Y(y) = 1 - F_X(g^{-1}(y))"}</M>, and the derivative of <M>{"g^{-1}"}</M> is negative, hence the absolute value.</p>
      </Proof>

      <Example title="the square's area">
        <p>
          If <M>{"X \\sim \\operatorname{Unif}(0, 1)"}</M> and <M>{"Y = X^2"}</M>, then <M>{"x = \\sqrt y"}</M> and{" "}
          <M>{"dx/dy = 1/(2\\sqrt y)"}</M>, so <M>{"f_Y(y) = 1/(2\\sqrt y)"}</M> on <M>{"(0, 1)"}</M>. It blows up near 0:
          small areas are common, because the squaring map crushes the interval near 0.
        </p>
      </Example>

      <Example title="the method of the CDF">
        <p>
          When <M>{"g"}</M> is not monotone, work with the CDF directly. If <M>{"Z \\sim N(0, 1)"}</M> then{" "}
          <M>{"P(Z^2 \\le y) = P(-\\sqrt y \\le Z \\le \\sqrt y) = 2\\Phi(\\sqrt y) - 1"}</M>, and differentiating gives the
          chi-squared density with one degree of freedom, <M>{"f(y) = e^{-y/2}/\\sqrt{2\\pi y}"}</M>.
        </p>
      </Example>

      <Theorem title="several variables">
        <p>
          If <M>{"(U, V) = T(X, Y)"}</M> for a smooth invertible <M>{"T"}</M>, then{" "}
          <M>{"f_{U,V}(u, v) = f_{X,Y}(x, y)\\,|J|"}</M>, where <M>{"J"}</M> is the Jacobian determinant of the inverse map,{" "}
          <M>{"\\partial(x, y)/\\partial(u, v)"}</M>. This is the change of variables formula for double integrals, read as a
          statement about probability.
        </p>
      </Theorem>

      <Remark title="convolution">
        <p>
          The density of a sum <M>{"X + Y"}</M> of independent continuous variables is the convolution{" "}
          <M>{"f_{X+Y}(s) = \\int f_X(x) f_Y(s - x)\\,dx"}</M>. For two independent uniforms on (0, 1) this gives a triangle on
          (0, 2), the shape seen earlier.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "linear",
      rung: "check",
      prompt: <p>X is uniform on (0, 1) and Y = 2X + 1. What is the density of Y on (1, 3)?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>Why does the formula f_Y(y) = f_X(x)|dx/dy| need the absolute value?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because densities can be negative.",
          "Because for a decreasing g the derivative dx/dy is negative, but a density must be non-negative.",
          "Because x might be negative.",
          "It is a convention with no reason.",
        ],
        correct: [1],
      },
    },
    {
      key: "sq",
      rung: "apply",
      prompt: <p>X is uniform on (0, 1) and Y = X². What is P(Y ≤ 0.25)?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "log",
      rung: "apply",
      prompt: <p>X is uniform on (0, 1). What is the distribution of Y = −ln X?</p>,
      answer: { kind: "choice", options: ["Uniform on (0, 1)", "Exponential with rate 1", "Standard normal", "Poisson with mean 1"], correct: [1] },
    },
    {
      key: "scale",
      rung: "apply",
      prompt: <p>X ~ Exp(1) and Y = 3X. What is the density of Y at y = 3, to four decimal places?</p>,
      answer: { kind: "numeric", value: Math.exp(-1) / 3, tolerance: 0.0005 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if X has density f and Y = aX + b with a &gt; 0, then f_Y(y) = f((y − b)/a)/a.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes F_Y(y) = P(aX + b ≤ y) = F_X((y − b)/a), using a > 0.",
          "Differentiates with the chain rule.",
          "Obtains f((y − b)/a) · (1/a).",
        ],
      },
    },
    {
      key: "area",
      rung: "stretch",
      prompt: <p>A circle&rsquo;s radius R is uniform on (0, 1). Find the density of its area A = πR², and say whether a small area or a large one is more likely.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Inverts to r = √(a/π) and computes dr/da = 1/(2√(πa)).",
          "Gives f_A(a) = 1/(2√(πa)) on (0, π).",
          "Interprets the density as largest near 0. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the density changes under a monotone transformation and why the factor |dx/dy| appears, the example of the square's area, the CDF method for Z², and the Jacobian version in several variables.",

  glimpse: (
    <p>
      The next lesson uses linear transformations of independent normals to build the multivariate normal. Analysis later
      proves the change of variables formula in full.
    </p>
  ),
};
