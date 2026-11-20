import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CotangentSeriesViz } from "@/components/viz/CotangentSeriesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m28.2.2",
  minutes: 90,
  links: {
    revisits: ["m28.2.1", "m13.4.1", "m13.4.3"],
    foreshadows: ["m28.2.3", "m28.3.2", "m28.4.4"],
  },

  puzzle: (
    <>
      <p>
        The function π cot πz has a simple pole with residue 1 at every integer, and nothing else. The sum of 1/(z − n)
        over all integers has the same poles, but it diverges. How can the poles of a meromorphic function be added up into
        the function itself?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Include more pairs of poles, and watch the partial sums settle onto π cot πx.</p>
      <CotangentSeriesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="principal parts">
        <p>
          At a pole a, a meromorphic function is a polynomial in 1/(z − a) with no constant term, its{" "}
          <strong>principal part</strong>, plus a function holomorphic near a. For π cot πz the principal part at n is{" "}
          <M>{"1/(z - n)"}</M>.
        </p>
      </Definition>

      <Theorem title="Mittag-Leffler (1876)">
        <p>
          Let <M>{"a_n \\to \\infty"}</M> be distinct points and <M>{"P_n"}</M> polynomials with no constant term. There is a
          meromorphic function on ℂ whose poles are exactly the <M>{"a_n"}</M>, with principal part{" "}
          <M>{"P_n(1/(z - a_n))"}</M> at each. The proof subtracts from each <M>{"P_n"}</M> a Taylor polynomial{" "}
          <M>{"Q_n"}</M> so that <M>{"|P_n - Q_n| < 2^{-n}"}</M> on <M>{"|z| \\le |a_n|/2"}</M>; then{" "}
          <M>{"\\sum (P_n - Q_n)"}</M> converges locally uniformly away from the poles.
        </p>
      </Theorem>

      <Example title="the cotangent">
        <p>
          Here <M>{"Q_n"}</M> can be the constant <M>{"-1/n"}</M>, and grouping ±n gives{" "}
          <M>{"\\pi\\cot\\pi z = \\frac1z + \\sum_{n \\ge 1}\\frac{2z}{z^2 - n^2}"}</M>. The difference between the two sides
          is entire, periodic and bounded on vertical strips away from the real axis, hence constant, and oddness makes the
          constant 0. Differentiating gives <M>{"\\frac{\\pi^2}{\\sin^2\\pi z} = \\sum_{n \\in \\mathbb{Z}}\\frac{1}{(z-n)^2}"}</M>.
        </p>
      </Example>

      <Remark title="link with products">
        <p>
          The cotangent expansion is the logarithmic derivative of the sine product:{" "}
          <M>{"\\frac{d}{dz}\\log\\sin\\pi z = \\pi\\cot\\pi z"}</M>. Expanding{" "}
          <M>{"\\pi z\\cot\\pi z = 1 - 2\\sum_{k \\ge 1}\\zeta(2k) z^{2k}"}</M> and comparing with the Bernoulli expansion of
          the cotangent gives Euler&rsquo;s values of ζ(2k) for every k.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What does Mittag-Leffler&rsquo;s theorem let us prescribe?</p>,
      answer: { kind: "choice", options: ["The poles and their principal parts", "The zeros and their multiplicities", "The values on a circle", "The growth at infinity"], correct: [0] },
    },
    {
      key: "res",
      rung: "check",
      prompt: <p>What is the residue of π cot πz at each integer?</p>,
      answer: { kind: "choice", options: ["1", "π", "1/π", "0"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set N = 2. What is the partial sum at x = ¼, to three decimal places?</p>,
      answer: { kind: "numeric", value: 3.34, tolerance: 0.001 },
    },
    {
      key: "csc",
      rung: "apply",
      prompt: <p>Using π²/sin²(πz) = Σ 1/(z − n)², compute the sum of 1/(½ − n)² over all integers n, to three decimal places.</p>,
      answer: { kind: "numeric", value: 9.87, tolerance: 0.001 },
    },
    {
      key: "logd",
      rung: "apply",
      prompt: <p>How is the cotangent expansion related to the sine product?</p>,
      answer: { kind: "choice", options: ["It is its logarithmic derivative", "It is its reciprocal", "It is its integral", "It is its square"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive the expansion of π cot πz from the product sin πz = πz Π (1 − z²/n²).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes the logarithmic derivative of both sides, justified by locally uniform convergence.",
          "Computes the derivative of log(1 − z²/n²) as 2z/(z² − n²).",
          "Obtains π cot πz = 1/z + Σ 2z/(z² − n²).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can&rsquo;t we simply add the principal parts 1/(z − n) over all integers n?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that for fixed z the terms behave like −1/n and the sum diverges.",
          "Explains that subtracting the constant −1/n, or pairing n with −n, gives terms of size 1/n² that converge.",
          "Connects this with the general role of the correcting polynomials. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The Weierstrass product leaves an unknown factor e to the g(z). For functions that do not grow too fast, Hadamard
        showed that g must be a polynomial of small degree, tying zeros to growth.
      </p>
      <p>Next, Hadamard factorisation.</p>
    </>
  ),
};
