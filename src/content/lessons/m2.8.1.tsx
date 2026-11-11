import { M, MD } from "@/components/Math";
import { Definition, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LogAreaViz } from "@/components/viz/LogAreaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.8.1",
  minutes: 85,
  links: {
    revisits: ["m0.4.4", "m2.6.4"],
    foreshadows: ["m2.9.2", "m13.2.1"],
  },

  puzzle: (
    <>
      <p>
        At school, <M>{"\\log_{10} x"}</M> answers the question &ldquo;10 to what power is x?&rdquo; That presupposes we
        know what <M>{"10^{\\sqrt{2}}"}</M> means. Do we? Powers are clear for whole numbers, and for fractions via roots;
        for an irrational exponent, the meaning is far from obvious.
      </p>
      <p>
        Meanwhile there is an integral we cannot yet do: <M>{"\\int dx/x"}</M>. The power rule gives{" "}
        <M>{"x^{n+1}/(n+1)"}</M> for every n except <M>{"-1"}</M>, where it divides by zero. What fills the gap?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Turn the problem round. Define a function as the area under <M>{"1/t"}</M> from 1 to x. The fundamental theorem
        says its derivative is <M>{"1/x"}</M>, which fills the gap. And a scaling argument, shown below, says that it turns
        products into sums, exactly as a logarithm should. So this area <em>is</em> the logarithm, and we never needed
        irrational powers to define it.
      </p>
      <LogAreaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the natural logarithm">
        <p>For <M>{"x > 0"}</M>,</p>
        <MD>{"\\ln x = \\int_1^x \\frac{dt}{t}."}</MD>
        <p>So <M>{"\\ln 1 = 0"}</M>, ln x is negative for <M>{"0 < x < 1"}</M>, and positive for <M>{"x > 1"}</M>.</p>
      </Definition>

      <Theorem title="basic properties">
        <ol>
          <li>ln is differentiable on <M>{"(0, \\infty)"}</M>, with <M>{"(\\ln x)' = 1/x"}</M>. So it is strictly increasing and concave.</li>
          <li><M>{"\\ln(ab) = \\ln a + \\ln b"}</M> for all <M>{"a, b > 0"}</M>.</li>
          <li><M>{"\\ln(1/a) = -\\ln a"}</M>, and <M>{"\\ln(a^n) = n \\ln a"}</M> for every integer n.</li>
          <li>ln x tends to <M>{"\\infty"}</M> as <M>{"x \\to \\infty"}</M>, and to <M>{"-\\infty"}</M> as <M>{"x \\to 0^+"}</M>.</li>
        </ol>
      </Theorem>
      <Proof>
        <p>
          (1) is the fundamental theorem, since <M>{"1/t"}</M> is continuous on <M>{"(0, \\infty)"}</M>; then{" "}
          <M>{"(\\ln x)'' = -1/x^2 < 0"}</M>. For (2), split and substitute <M>{"t = bs"}</M> in the second piece:
        </p>
        <MD>{"\\ln(ab) = \\int_1^b \\frac{dt}{t} + \\int_b^{ab} \\frac{dt}{t} = \\ln b + \\int_1^a \\frac{b\\,ds}{bs} = \\ln b + \\ln a."}</MD>
        <p>
          For (3), <M>{"0 = \\ln 1 = \\ln(a \\cdot 1/a) = \\ln a + \\ln(1/a)"}</M>, and the rule for powers follows from (2)
          by induction. For (4), <M>{"\\ln 2 > 0"}</M>, so <M>{"\\ln(2^n) = n\\ln 2"}</M> is unbounded, and ln is increasing;
          and <M>{"\\ln(1/x) = -\\ln x"}</M> handles the other end.
        </p>
      </Proof>

      <Definition title="the number e">
        <p>
          ln is continuous and strictly increasing from <M>{"-\\infty"}</M> to <M>{"\\infty"}</M>, so by the intermediate
          value theorem there is exactly one number e with <M>{"\\ln e = 1"}</M>. Numerically,{" "}
          <M>{"e \\approx 2.71828"}</M>: the area under <M>{"1/t"}</M> from 1 to e is exactly 1.
        </p>
      </Definition>

      <Remark title="the absolute value">
        <p>
          For <M>{"x < 0"}</M>, <M>{"\\ln|x| = \\ln(-x)"}</M> has derivative <M>{"-1/(-x) = 1/x"}</M>, by the chain rule. So{" "}
          <M>{"\\int dx/x = \\ln|x| + C"}</M> on any interval not containing 0. The formulas of the last chapter, such as{" "}
          <M>{"\\int \\tan x\\,dx = -\\ln|\\cos x| + C"}</M>, rest on this.
        </p>
      </Remark>

      <Remark title="slow growth">
        <p>
          ln grows more slowly than any positive power: <M>{"\\ln x / x^\\varepsilon \\to 0"}</M> as{" "}
          <M>{"x \\to \\infty"}</M>, for every <M>{"\\varepsilon > 0"}</M>. For instance, for <M>{"t \\ge 1"}</M>,{" "}
          <M>{"1/t \\le 1/\\sqrt{t}"}</M>, so <M>{"\\ln x \\le \\int_1^x t^{-1/2}\\,dt < 2\\sqrt{x}"}</M>, and then{" "}
          <M>{"\\ln x / x < 2/\\sqrt{x} \\to 0"}</M>.
        </p>
      </Remark>

      <Remark title="history">
        <p>
          John Napier published the first tables of logarithms in 1614, to turn multiplication into addition for
          astronomers. Around 1647 Grégoire de Saint-Vincent found that areas under the hyperbola <M>{"y = 1/x"}</M> add when
          the endpoints multiply, the property in the visualisation, and his student Alphonse Antonio de Sarasa saw that
          this makes the area a logarithm. The
          logarithm as an area is older than calculus.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "deriv",
      rung: "check",
      prompt: (
        <p>
          What is the derivative of <M>{"\\ln(3x)"}</M>?
        </p>
      ),
      answer: { kind: "expression", value: "1/x", variables: ["x"] },
    },
    {
      key: "area",
      rung: "check",
      prompt: <p>The area under 1/t from 1 to 2 is about 0.6931. What is the area under 1/t from 5 to 10?</p>,
      answer: { kind: "numeric", value: Math.LN2, tolerance: 0.001 },
    },
    {
      key: "chain",
      rung: "apply",
      prompt: (
        <p>
          Find the derivative of <M>{"\\ln(x^2 + 1)"}</M>.
        </p>
      ),
      answer: { kind: "expression", value: "2x/(x^2+1)", variables: ["x"] },
    },
    {
      key: "integral",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_{-e}^{-1} \\frac{dx}{x}"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "bound",
      rung: "apply",
      prompt: (
        <p>
          On <M>{"[1, 2]"}</M>, <M>{"1/t"}</M> is at least <M>{"1/2"}</M>, and on <M>{"[2, 4]"}</M> it is at least{" "}
          <M>{"1/4"}</M>. What lower bound does this give for <M>{"\\ln 4"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "quotient",
      rung: "prove",
      prompt: (
        <p>
          Using only the definition and the property <M>{"\\ln(ab) = \\ln a + \\ln b"}</M>, prove that{" "}
          <M>{"\\ln(a/b) = \\ln a - \\ln b"}</M> and that <M>{"\\ln(a^{1/n}) = \\tfrac{1}{n}\\ln a"}</M> for each positive
          integer n.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes a = (a/b)·b and applies the product rule to get ln a = ln(a/b) + ln b.",
          "Writes a as the n-th power of a^(1/n) and uses ln(cⁿ) = n ln c.",
          "Divides by n to conclude. Any clear argument is fine.",
        ],
      },
    },
    {
      key: "harmonic",
      rung: "stretch",
      prompt: (
        <p>
          By comparing areas under <M>{"1/t"}</M> with rectangles, show that{" "}
          <M>{"\\ln(n + 1) < 1 + \\tfrac{1}{2} + \\cdots + \\tfrac{1}{n} < 1 + \\ln n"}</M>. What does this say about the sum{" "}
          <M>{"1 + \\tfrac{1}{2} + \\tfrac{1}{3} + \\cdots"}</M>?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses rectangles of height 1/k on [k, k + 1], which lie above the curve, to get the lower bound ln(n + 1).",
          "Uses rectangles of height 1/k on [k − 1, k], which lie below the curve, for k ≥ 2, to get the upper bound 1 + ln n.",
          "Concludes that the partial sums grow without bound, like ln n, so the sum is infinite.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the natural logarithm can be defined as an area, why that area turns products into sums, and how the number e is defined from it.",

  glimpse: (
    <p>
      The next lesson inverts the logarithm to define the exponential function, and with it powers with any real exponent.
      The comparison in the last exercise is the integral test of the chapter on series. In Complex Analysis, the
      logarithm becomes many-valued, because the integral of 1/z along a path that circles 0 picks up 2πi each time
      round.
    </p>
  ),
};
