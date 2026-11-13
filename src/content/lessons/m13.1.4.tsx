import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PoleDiscViz } from "@/components/viz/PoleDiscViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.1.4",
  minutes: 95,
  links: {
    revisits: ["m6.8.3", "m6.8.2", "m13.1.3"],
    foreshadows: ["m13.2.3", "m13.4.1", "m13.7.2"],
  },

  puzzle: (
    <>
      <p>
        The function <M>{"1/(1 + x^2)"}</M> is smooth and bounded on the whole real line, yet its Taylor series about 0,{" "}
        <M>{"1 - x^2 + x^4 - \\cdots"}</M>, diverges for <M>{"|x| > 1"}</M>. Nothing on the real line happens at{" "}
        <M>{"x = \\pm 1"}</M>. So what stops the series?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the centre of the series and see how far its disc of convergence reaches.</p>
      <PoleDiscViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the radius of convergence">
        <p>
          For a power series <M>{"\\sum a_n (z - a)^n"}</M>, let <M>{"1/R = \\limsup |a_n|^{1/n}"}</M>, with{" "}
          <M>{"R \\in [0, \\infty]"}</M>. The series converges absolutely for <M>{"|z - a| < R"}</M>, uniformly on every
          smaller closed disc, and diverges for <M>{"|z - a| > R"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"|z - a| < \\rho < R"}</M>, then <M>{"|a_n|^{1/n} < 1/\\rho"}</M> for large <M>{"n"}</M>, so{" "}
          <M>{"|a_n (z-a)^n| < (|z - a|/\\rho)^n"}</M>, a convergent geometric series; the Weierstrass M-test gives uniform
          convergence on <M>{"|z - a| \\le r < \\rho"}</M>. If <M>{"|z - a| > R"}</M>, then{" "}
          <M>{"|a_n (z-a)^n| > 1"}</M> for infinitely many <M>{"n"}</M>, so the terms do not tend to 0.
        </p>
      </Proof>

      <Theorem title="power series are holomorphic">
        <p>
          Inside its disc of convergence, <M>{"f(z) = \\sum a_n (z - a)^n"}</M> is holomorphic, and
        </p>
        <MD>{"f'(z) = \\sum_{n \\ge 1} n a_n (z - a)^{n-1},"}</MD>
        <p>
          a series with the same radius, since <M>{"n^{1/n} \\to 1"}</M>. Repeating, <M>{"f"}</M> is infinitely
          differentiable and <M>{"a_n = f^{(n)}(a)/n!"}</M>.
        </p>
      </Theorem>

      <Example title="exponential and trigonometric functions">
        <p>
          <M>{"e^z = \\sum z^n/n!"}</M>, <M>{"\\cos z = \\sum (-1)^n z^{2n}/(2n)!"}</M> and{" "}
          <M>{"\\sin z = \\sum (-1)^n z^{2n+1}/(2n+1)!"}</M> have infinite radius, so they are entire. Comparing series gives
          Euler&rsquo;s formula <M>{"e^{iz} = \\cos z + i \\sin z"}</M> for every complex <M>{"z"}</M>.
        </p>
      </Example>

      <Remark title="the answer to the puzzle">
        <p>
          <M>{"1/(1 + z^2)"}</M> blows up at <M>{"z = \\pm i"}</M>, at distance 1 from 0. A series converging on a disc of
          radius more than 1 would define a holomorphic, hence continuous, function there, agreeing with{" "}
          <M>{"1/(1+z^2)"}</M>, which is impossible near <M>{"\\pm i"}</M>. After the Cauchy integral formula we shall prove
          the converse: the Taylor series of a holomorphic function converges on the largest disc on which the function is
          holomorphic.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "geo",
      rung: "check",
      prompt: <p>Find the radius of convergence of <M>{"\\sum z^n / 2^n"}</M>.</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "fact",
      rung: "check",
      prompt: <p>Find the radius of convergence of <M>{"\\sum n! \\, z^n"}</M>.</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0.001 },
    },
    {
      key: "pole",
      rung: "apply",
      prompt: <p>Find the radius of convergence of the Taylor series of <M>{"1/(1 + z^2)"}</M> about <M>{"z = 1"}</M>, to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 1.414, tolerance: 0.002 },
    },
    {
      key: "even",
      rung: "apply",
      prompt: <p>Find the radius of convergence of <M>{"\\sum 3^n z^{2n}"}</M>, to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 0.577, tolerance: 0.002 },
    },
    {
      key: "termwise",
      rung: "apply",
      prompt: <p>Differentiate <M>{"\\sum_{n \\ge 0} z^n = 1/(1 - z)"}</M> term by term, and evaluate <M>{"\\sum_{n \\ge 1} n z^{n-1}"}</M> at <M>{"z = 1/2"}</M>.</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0.001 },
    },
    {
      key: "abel",
      rung: "prove",
      prompt: <p>Prove that if <M>{"\\sum a_n z_1^n"}</M> converges, then <M>{"\\sum a_n z^n"}</M> converges absolutely for every <M>{"|z| < |z_1|"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Since the terms a_n z₁ⁿ tend to 0, they are bounded by some M.",
          "Bounds |a_n zⁿ| ≤ M (|z|/|z₁|)ⁿ.",
          "Compares with a convergent geometric series.",
        ],
      },
    },
    {
      key: "sin",
      rung: "stretch",
      prompt: <p>Is <M>{"|\\sin z| \\le 1"}</M> for all complex <M>{"z"}</M>? Compute <M>{"\\sin(iy)"}</M> for real <M>{"y"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the series or sin z = (e^{iz} − e^{−iz})/(2i) to find sin(iy) = i sinh y.",
          "Concludes |sin(iy)| = |sinh y| is unbounded, so the bound fails off the real line.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the radius of convergence of a power series, why power series are holomorphic and can be differentiated term by term, and why the series for 1/(1 + x²) stops at radius 1.",

  glimpse: (
    <p>
      The next part of the course integrates along curves and reaches the Cauchy integral formula, which shows every
      holomorphic function is a power series. Laurent series then allow negative powers, and the zeta function is built from
      series too.
    </p>
  ),
};
