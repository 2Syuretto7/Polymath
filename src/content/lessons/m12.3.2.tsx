import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { FejerViz } from "@/components/viz/FejerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.3.2",
  minutes: 90,
  links: {
    revisits: ["m6.8.4", "m12.3.1", "m12.1.4"],
    foreshadows: ["m12.3.3", "m17.4.1", "m17.4.2"],
  },

  puzzle: (
    <>
      <p>
        Weierstrass showed that polynomials approximate any continuous function on an interval. But why polynomials? Would
        sums of sines and cosines do on a circle, or polynomials in x and y on a square? Is there one reason behind all of
        these?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A continuous periodic function and a trigonometric polynomial that approximates it. Raise the degree and watch the
        largest error.
      </p>
      <FejerViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Stone–Weierstrass">
        <p>
          Let <M>{"X"}</M> be a compact metric space and <M>{"A \\subseteq C(X)"}</M> a subalgebra, closed under sums,
          products and scalar multiples, such that
        </p>
        <p>(1) <M>{"A"}</M> contains the constant functions, and</p>
        <p>
          (2) <M>{"A"}</M> <strong>separates points</strong>: for <M>{"x \\ne y"}</M> there is <M>{"f \\in A"}</M> with{" "}
          <M>{"f(x) \\ne f(y)"}</M>.
        </p>
        <p>Then <M>{"A"}</M> is dense in <M>{"C(X)"}</M> with the sup norm.</p>
      </Theorem>

      <Proof>
        <p>
          An outline. Let <M>{"\\overline{A}"}</M> be the closure, also an algebra. Using Weierstrass&rsquo;s theorem for{" "}
          <M>{"\\sqrt t"}</M> on <M>{"[0, 1]"}</M>, one shows <M>{"|f| \\in \\overline{A}"}</M> whenever{" "}
          <M>{"f \\in \\overline{A}"}</M>, hence <M>{"\\max(f, g) = \\tfrac12(f + g + |f - g|)"}</M> and{" "}
          <M>{"\\min(f, g)"}</M> are too. Separation and constants give, for any <M>{"x, y"}</M> and target values, a function
          in <M>{"A"}</M> taking those values at <M>{"x"}</M> and <M>{"y"}</M>. Fix <M>{"h \\in C(X)"}</M> and{" "}
          <M>{"\\varepsilon > 0"}</M>. For each <M>{"x"}</M>, taking a minimum of finitely many such functions, chosen by
          compactness, gives <M>{"g_x \\in \\overline{A}"}</M> with <M>{"g_x(x) = h(x)"}</M> and <M>{"g_x < h + \\varepsilon"}</M>
          everywhere. A maximum of finitely many <M>{"g_x"}</M>, again by compactness, is within <M>{"\\varepsilon"}</M> of{" "}
          <M>{"h"}</M> everywhere.
        </p>
      </Proof>

      <Example title="consequences">
        <p>
          Polynomials in <M>{"x_1, \\dots, x_n"}</M> are dense in <M>{"C(K)"}</M> for compact <M>{"K \\subseteq \\mathbb{R}^n"}</M>,
          since the coordinate functions separate points. Trigonometric polynomials{" "}
          <M>{"\\sum_{|k| \\le n} (a_k \\cos kt + b_k \\sin kt)"}</M> are dense in the continuous functions on the circle,
          since <M>{"\\cos t"}</M> and <M>{"\\sin t"}</M> separate points there, and products of sines and cosines are sums of
          sines and cosines. The Fejér means in the viz are one explicit way to find the approximations.
        </p>
      </Example>

      <Remark title="where it fails">
        <p>
          Even polynomials <M>{"p(x^2)"}</M> on <M>{"[-1, 1]"}</M> form an algebra with constants but do not separate{" "}
          <M>{"1"}</M> from <M>{"-1"}</M>; they cannot approximate <M>{"x"}</M>. For complex-valued functions, the algebra
          must also be closed under complex conjugation: polynomials in <M>{"z"}</M> on the unit circle cannot approximate{" "}
          <M>{"\\bar z"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>Besides being a subalgebra, what does Stone–Weierstrass require of A?</p>,
      answer: {
        kind: "choice",
        options: [
          "That it contains the constants and separates points.",
          "That it is finite-dimensional.",
          "That it contains only polynomials.",
          "That it is closed.",
        ],
        correct: [0],
      },
    },
    {
      key: "sep",
      rung: "check",
      prompt: <p>Which family separates the points of [−1, 1]?</p>,
      answer: { kind: "choice", options: ["The constants", "x²", "x", "cos(πx)"], correct: [2] },
    },
    {
      key: "even",
      rung: "apply",
      prompt: <p>What is the smallest sup distance from f(x) = x to any even function on [−1, 1]? Compare the values at x = 1 and x = −1.</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "trig",
      rung: "apply",
      prompt: <p>Write cos²t as a trigonometric polynomial a + b cos 2t. What is b?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "square",
      rung: "apply",
      prompt: <p>Which algebra is dense in C([0, 1]²)?</p>,
      answer: {
        kind: "choice",
        options: ["Polynomials in x only", "Polynomials in x and y", "Functions of x + y only", "Constant functions"],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that max(f, g) = ½(f + g + |f − g|), and explain why this matters in the proof.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks the cases f ≥ g and f < g.",
          "Notes that once |h| lies in the closure, so do max and min.",
          "Says that max and min let local approximations be glued together.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Are the functions e^(kx) for integers k ≥ 0, and their linear combinations, dense in C[0, 1]?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that products e^(jx)e^(kx) = e^((j+k)x) stay in the family, and k = 0 gives constants.",
          "Notes that eˣ separates points, so Stone–Weierstrass applies.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Stone–Weierstrass theorem, its two conditions, why polynomials and trigonometric polynomials satisfy them, and an algebra that fails to separate points.",

  glimpse: (
    <p>
      The next lesson uses completeness in a different way, through the Baire category theorem. Fourier analysis studies
      approximation by trigonometric polynomials in detail, including when the Fourier series itself converges.
    </p>
  ),
};
