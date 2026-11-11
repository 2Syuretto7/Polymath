import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RadiusViz } from "@/components/viz/RadiusViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.9.4",
  minutes: 90,
  links: {
    revisits: ["m2.8.3", "m2.9.2"],
    foreshadows: ["m13.1.4", "m10.6.1"],
  },

  puzzle: (
    <>
      <p>
        Sine and cosine were defined by series, on the promise that the series converge for every x and can be
        differentiated term by term. A promise is not a proof.
      </p>
      <p>
        Meanwhile <M>{"1 + x + x^2 + x^3 + \\cdots"}</M> equals <M>{"1/(1 - x)"}</M> when <M>{"|x| < 1"}</M>, and is
        nonsense when <M>{"x = 2"}</M>, even though <M>{"1/(1 - x)"}</M> is perfectly finite there. Where does a series in
        powers of x make sense, and when may it be treated like a polynomial?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A power series is a polynomial that never stops. Near 0 the high powers of x are tiny and the series behaves well;
        far from 0 they are huge, and whether the coefficients shrink fast enough to tame them decides everything. The
        result is always an interval centred at 0, of some radius R. Compare four series below.
      </p>
      <RadiusViz />
    </>
  ),

  theory: (
    <>
      <Definition title="power series">
        <p>
          A <strong>power series</strong> is a series <M>{"\\sum_{n=0}^\\infty c_n x^n = c_0 + c_1 x + c_2 x^2 + \\cdots"}</M>.
          More generally, <M>{"\\sum c_n (x - a)^n"}</M> is a power series centred at a.
        </p>
      </Definition>

      <Theorem title="the radius of convergence">
        <p>
          For each power series there is an R, with <M>{"0 \\le R \\le \\infty"}</M>, such that the series converges
          absolutely for <M>{"|x| < R"}</M> and diverges for <M>{"|x| > R"}</M>. At <M>{"x = \\pm R"}</M> anything can happen.
        </p>
      </Theorem>
      <Proof>
        <p>
          The key step: if the series converges at some <M>{"x_0 \\ne 0"}</M>, it converges absolutely for every{" "}
          <M>{"|x| < |x_0|"}</M>. Its terms <M>{"c_n x_0^n"}</M> tend to 0, so they are bounded, say by B. Then{" "}
          <M>{"|c_n x^n| = |c_n x_0^n|\\,|x/x_0|^n \\le B\\,r^n"}</M> with <M>{"r = |x/x_0| < 1"}</M>, and the geometric
          series <M>{"\\sum B r^n"}</M> converges. Take R to be the supremum of the |x| at which the series converges.
        </p>
      </Proof>

      <p>
        In practice R comes from the ratio test. If <M>{"|c_{n+1}/c_n| \\to L"}</M>, the ratio of successive terms tends to{" "}
        <M>{"L|x|"}</M>, so <M>{"R = 1/L"}</M> (with <M>{"R = \\infty"}</M> if <M>{"L = 0"}</M>).
      </p>

      <Example title="four radii">
        <ul>
          <li><M>{"\\sum x^n"}</M>: <M>{"R = 1"}</M>; diverges at both ends, since the terms do not tend to 0.</li>
          <li><M>{"\\sum x^n/n"}</M>: <M>{"R = 1"}</M>; at <M>{"x = 1"}</M> the harmonic series diverges, at <M>{"x = -1"}</M> the alternating one converges.</li>
          <li><M>{"\\sum x^n/n!"}</M>: <M>{"|c_{n+1}/c_n| = 1/(n + 1) \\to 0"}</M>, so <M>{"R = \\infty"}</M>. This settles the convergence of the exponential, sine and cosine series.</li>
          <li><M>{"\\sum n!\\,x^n"}</M>: the ratio <M>{"(n + 1)|x| \\to \\infty"}</M> unless <M>{"x = 0"}</M>, so <M>{"R = 0"}</M>.</li>
        </ul>
      </Example>

      <Theorem title="calculus with power series">
        <p>
          If <M>{"f(x) = \\sum c_n x^n"}</M> with radius R &gt; 0, then on <M>{"(-R, R)"}</M> f is differentiable and can be
          integrated term by term:
        </p>
        <MD>{"f'(x) = \\sum_{n=1}^\\infty n c_n x^{n-1}, \\qquad \\int_0^x f = \\sum_{n=0}^\\infty \\frac{c_n}{n + 1} x^{n+1},"}</MD>
        <p>and both new series have the same radius R.</p>
      </Theorem>
      <p>
        We do not prove this here: the proof needs uniform convergence, a notion from Real Analysis I. It is exactly the
        fact the definitions of sine and cosine relied on, and it makes power series as easy to handle as polynomials.
      </p>

      <Example title="new series from old">
        <p>
          Integrate <M>{"\\frac{1}{1 + t} = 1 - t + t^2 - \\cdots"}</M> from 0 to x, for <M>{"|x| < 1"}</M>:
        </p>
        <MD>{"\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots."}</MD>
        <p>Likewise, integrating <M>{"\\frac{1}{1 + t^2} = 1 - t^2 + t^4 - \\cdots"}</M> gives</p>
        <MD>{"\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots,"}</MD>
        <p>
          and at <M>{"x = 1"}</M>, where the series still converges, <M>{"\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\cdots"}</M>.
          This formula was known to Madhava of Sangamagrama in Kerala around 1400, some 270 years before Gregory and
          Leibniz found it in Europe.
        </p>
      </Example>

      <Remark title="a word of caution at the ends">
        <p>
          The theorem promises nothing at <M>{"x = \\pm R"}</M>. That the value at an endpoint still matches the function, as
          for the series of ln 2 and π/4, needs a separate argument, Abel&rsquo;s theorem, which says that if the series
          converges at R then its sum there is the limit of f(x) as x approaches R from inside.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ratio",
      rung: "check",
      prompt: (
        <p>
          What is the radius of convergence of <M>{"\\sum \\frac{x^n}{3^n}"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "where",
      rung: "check",
      prompt: <p>A power series in x converges at x = 4. At which of these points must it converge? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["x = 0", "x = 3", "x = −3.9", "x = 5"], correct: [0, 1, 2] },
    },
    {
      key: "n2",
      rung: "apply",
      prompt: (
        <p>
          What is the radius of convergence of <M>{"\\sum n^2 x^n"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "deriv",
      rung: "apply",
      prompt: (
        <p>
          Differentiate <M>{"\\frac{1}{1 - x} = \\sum x^n"}</M> term by term and use the result to find{" "}
          <M>{"\\sum_{n=1}^\\infty \\frac{n}{2^{n-1}}"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "atan",
      rung: "apply",
      prompt: (
        <p>
          What is the coefficient of <M>{"x^5"}</M> in the series for <M>{"\\arctan x"}</M>? (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.2 },
    },
    {
      key: "exp",
      rung: "prove",
      prompt: (
        <p>
          Let <M>{"E(x) = \\sum_{n=0}^\\infty x^n/n!"}</M>. Using term-by-term differentiation, show that{" "}
          <M>{"E' = E"}</M>, and deduce from the uniqueness theorem for the exponential that <M>{"E(x) = e^x"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that the radius of convergence is infinite, so term-by-term differentiation is allowed everywhere.",
          "Differentiates n xⁿ⁻¹/n! = xⁿ⁻¹/(n − 1)! and reindexes to get E again.",
          "Uses E(0) = 1 and the uniqueness theorem for f′ = f to conclude E = exp.",
        ],
      },
    },
    {
      key: "madhava",
      rung: "stretch",
      prompt: (
        <p>
          Using <M>{"\\arctan(1/\\sqrt{3}) = \\pi/6"}</M>, show that{" "}
          <M>{"\\pi = 2\\sqrt{3}\\left(1 - \\frac{1}{3 \\cdot 3} + \\frac{1}{5 \\cdot 3^2} - \\frac{1}{7 \\cdot 3^3} + \\cdots\\right)"}</M>,
          and explain why this converges far faster than the series for π/4.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Substitutes x = 1/√3 into the arctan series, which is allowed since 1/√3 < 1.",
          "Factors out 1/√3 and multiplies by 6 to reach the stated form, with terms shrinking like 1/3ⁿ.",
          "Explains that the terms decrease geometrically, so the alternating-series error drops by a factor of about 3 each term, against about 1/n for the π/4 series. Madhava used this series himself.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a power series is, why it converges on an interval centred at its centre, and how term-by-term integration produces the series for ln(1 + x) and arctan x.",

  glimpse: (
    <p>
      The next lesson asks which functions are sums of power series, and how to find the coefficients. Complex Analysis
      explains the radius of convergence completely: it is the distance to the nearest point in the complex plane where the
      function misbehaves. Ordinary Differential Equations solves equations by assuming a power series and finding its
      coefficients one by one.
    </p>
  ),
};
