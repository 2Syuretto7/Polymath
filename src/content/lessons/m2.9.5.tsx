import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TaylorRemainderViz } from "@/components/viz/TaylorRemainderViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.9.5",
  minutes: 90,
  links: {
    revisits: ["m2.5.1", "m2.7.1"],
    foreshadows: ["m6.6.3", "m5.3.1", "m19.3.1"],
  },

  puzzle: (
    <>
      <p>
        A calculator shows <M>{"\\sin(0.5) = 0.4794255386"}</M> in an instant. It cannot draw a circle. All it can do is add
        and multiply. So it must be evaluating a polynomial, and the polynomial must be close to sine.
      </p>
      <p>
        Which polynomial, and how close? And if a function has a power series at all, are its coefficients forced, or
        could two different series give the same function?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        If <M>{"f(x) = c_0 + c_1 x + c_2 x^2 + \\cdots"}</M>, then putting x = 0 gives <M>{"c_0 = f(0)"}</M>.
        Differentiate and put x = 0 again: <M>{"c_1 = f'(0)"}</M>. Again: <M>{"2c_2 = f''(0)"}</M>. Each coefficient is
        fixed by one derivative at 0. Truncating gives the best polynomial match near 0; the question is how fast the match
        improves, and whether it improves at all. Try four functions below.
      </p>
      <TaylorRemainderViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Taylor polynomials and series">
        <p>If f has n derivatives at a, its Taylor polynomial of degree n at a is</p>
        <MD>{"T_n(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x - a)^k."}</MD>
        <p>
          It is the only polynomial of degree at most n whose value and first n derivatives at a agree with those of f. If
          f has derivatives of every order, the infinite sum is its <strong>Taylor series</strong>; at <M>{"a = 0"}</M> it
          is often called a Maclaurin series.
        </p>
      </Definition>

      <Theorem title="Taylor's theorem, with Lagrange's remainder">
        <p>
          If f has n + 1 derivatives on an interval containing a and x, then for some c between a and x,
        </p>
        <MD>{"f(x) - T_n(x) = \\frac{f^{(n+1)}(c)}{(n + 1)!}(x - a)^{n+1}."}</MD>
      </Theorem>
      <Proof>
        <p>
          A form with an integral is quicker. For n = 0 it is the fundamental theorem:{" "}
          <M>{"f(x) = f(a) + \\int_a^x f'(t)\\,dt"}</M>. Integrate by parts, with <M>{"u = f'(t)"}</M> and{" "}
          <M>{"dv = dt"}</M>, choosing <M>{"v = t - x"}</M>:
        </p>
        <MD>{"\\int_a^x f'(t)\\,dt = f'(a)(x - a) + \\int_a^x f''(t)(x - t)\\,dt."}</MD>
        <p>Repeating n times gives</p>
        <MD>{"f(x) - T_n(x) = \\int_a^x \\frac{f^{(n+1)}(t)}{n!}(x - t)^n\\,dt."}</MD>
        <p>
          Since <M>{"(x - t)^n"}</M> does not change sign between a and x, the mean value theorem for integrals replaces{" "}
          <M>{"f^{(n+1)}(t)"}</M> by a value <M>{"f^{(n+1)}(c)"}</M>, and integrating what is left gives Lagrange&rsquo;s
          form.
        </p>
      </Proof>

      <Example title="how a calculator might find sin 0.5">
        <p>
          Every derivative of sine is <M>{"\\pm\\sin"}</M> or <M>{"\\pm\\cos"}</M>, so at most 1 in size. With{" "}
          <M>{"T_7(x) = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\frac{x^7}{5040}"}</M>, the error at 0.5 is at most{" "}
          <M>{"0.5^8/8! \\approx 9.7 \\times 10^{-8}"}</M>. Four terms already give seven correct decimal places.
        </p>
      </Example>

      <Theorem title="when the series equals the function">
        <p>
          The Taylor series of f converges to f(x) exactly when the remainder <M>{"f(x) - T_n(x)"}</M> tends to 0. For{" "}
          <M>{"e^x"}</M>, <M>{"\\sin x"}</M> and <M>{"\\cos x"}</M> this holds for every x, since the remainder is at most{" "}
          <M>{"e^{|x|}|x|^{n+1}/(n + 1)!"}</M>, and <M>{"|x|^{n+1}/(n + 1)! \\to 0"}</M>.
        </p>
      </Theorem>

      <Example title="a function its Taylor series misses">
        <p>
          Let <M>{"f(x) = e^{-1/x^2}"}</M> for <M>{"x \\ne 0"}</M> and <M>{"f(0) = 0"}</M>. Every derivative of f at 0 turns
          out to be 0, because <M>{"e^{-1/x^2}"}</M> goes to 0 faster than any power of x. So its Taylor series at 0 is
          the zero series, which converges everywhere, but equals f only at 0. Having derivatives of every order is not
          enough for a function to be the sum of its Taylor series. Functions that are, near every point, are called{" "}
          <strong>analytic</strong>.
        </p>
      </Example>

      <Remark title="uniqueness">
        <p>
          The intuition above is a proof, given term-by-term differentiation: if <M>{"\\sum c_n x^n = f(x)"}</M> near 0,
          then <M>{"c_n = f^{(n)}(0)/n!"}</M>. So any way of finding a power series, such as integrating a geometric series
          to get <M>{"\\ln(1 + x)"}</M>, gives the Taylor series. Two different power series cannot have the same sum on an
          interval around 0.
        </p>
      </Remark>

      <Remark title="history">
        <p>
          Brook Taylor published the series in 1715, and Colin Maclaurin popularised the case a = 0 in 1742. But the series
          for sine, cosine and arctangent had been found, with error estimates, by Madhava and the Kerala school around
          1400, and Newton and James Gregory had general forms in the 1660s and 1670s. Lagrange gave the remainder its form
          in 1797.
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
          A function has <M>{"f(0) = 2"}</M>, <M>{"f'(0) = -1"}</M> and <M>{"f''(0) = 6"}</M>. What is the coefficient of{" "}
          <M>{"x^2"}</M> in its Taylor polynomial at 0?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "cos",
      rung: "check",
      prompt: (
        <p>
          Find the Taylor polynomial of degree 2 of <M>{"\\cos x"}</M> at 0.
        </p>
      ),
      answer: { kind: "expression", value: "1 - x^2/2", variables: ["x"] },
    },
    {
      key: "sqrt",
      rung: "apply",
      prompt: (
        <p>
          Find the Taylor polynomial of degree 1 of <M>{"\\sqrt{x}"}</M> at <M>{"a = 4"}</M>, and use it to estimate{" "}
          <M>{"\\sqrt{4.1}"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 2.025 },
    },
    {
      key: "bound",
      rung: "apply",
      prompt: (
        <p>
          Using Lagrange&rsquo;s remainder, what is the smallest n for which <M>{"T_n(1)"}</M> is guaranteed to be within{" "}
          <M>{"10^{-6}"}</M> of e, if we use the bound <M>{"3/(n + 1)!"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "x2",
      rung: "apply",
      prompt: (
        <p>
          Using the series for <M>{"e^x"}</M>, what is the coefficient of <M>{"x^6"}</M> in the Taylor series of{" "}
          <M>{"e^{-x^2}"}</M>? (Give a decimal or a fraction.)
        </p>
      ),
      answer: { kind: "numeric", value: -1 / 6, tolerance: 0.001 },
    },
    {
      key: "limit",
      rung: "prove",
      prompt: (
        <p>
          Use Taylor polynomials to find <M>{"\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}"}</M>, justifying the step with
          Lagrange&rsquo;s remainder.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes sin x = x − x³/6 + R with |R| ≤ |x|⁵/120 (using T₄ = T₃ for sine).",
          "Divides by x³ to get −1/6 + R/x³, with |R/x³| ≤ x²/120.",
          "Concludes the limit is −1/6.",
        ],
      },
    },
    {
      key: "irr",
      rung: "stretch",
      prompt: (
        <p>
          Prove that e is irrational. Suppose <M>{"e = p/q"}</M>. Multiply <M>{"e - T_q(1)"}</M> by <M>{"q!"}</M>, show the
          result is a whole number, and use the remainder to show it lies strictly between 0 and 1.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that q!·e and q!·T_q(1) = q!(1 + 1 + 1/2! + … + 1/q!) are both integers, so their difference is an integer.",
          "Uses the remainder e^c/(q + 1)! with 0 < c < 1 to show 0 < q!(e − T_q(1)) < 3/(q + 1) ≤ 1 when q ≥ 2 (q = 1 is easily excluded).",
          "Concludes that no integer lies strictly between 0 and 1, a contradiction. A clear sketch is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the coefficients of a Taylor polynomial are found from derivatives, how the remainder tells you how good the approximation is, and why some functions are not equal to their Taylor series.",

  glimpse: (
    <p>
      Real Analysis I proves Taylor&rsquo;s theorem in several forms. Multivariable Calculus and Vector Analysis extends it
      to functions of several variables, where the second-order terms decide whether a critical point is a maximum, a
      minimum or a saddle. Numerical Analysis builds on polynomial approximation, and asks which polynomial is best over a
      whole interval, not just near one point.
    </p>
  ),
};
