import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CauchyProductViz } from "@/components/viz/CauchyProductViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.3.3",
  minutes: 85,
  links: {
    revisits: ["m6.3.2", "m6.3.1", "m2.8.2"],
    foreshadows: ["m6.8.3", "m13.1.4", "m21.5.3"],
  },

  puzzle: (
    <>
      <p>
        Define <M>{"E(x) = \\sum_{n \\ge 0} x^n/n!"}</M>. We would like to prove <M>{"E(x)E(y) = E(x + y)"}</M>, the law that
        makes <M>{"E"}</M> an exponential. Multiplying two finite sums is easy: every term of one times every term of the
        other. But <M>{"E(x)E(y)"}</M> is a product of two infinite sums, which produces infinitely many products{" "}
        <M>{"a_i b_j"}</M> arranged in an infinite grid. In what order should we add them up, and does the order matter?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The grid shows <M>{"a_i b_j"}</M> for the series of <M>{"e^x"}</M> and <M>{"e^y"}</M>. Sweep the diagonal and compare
        each diagonal sum with <M>{"(x + y)^n / n!"}</M>.
      </p>
      <CauchyProductViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Cauchy product">
        <p>
          The <strong>Cauchy product</strong> of <M>{"\\sum_{n \\ge 0} a_n"}</M> and <M>{"\\sum_{n \\ge 0} b_n"}</M> is the
          series <M>{"\\sum_{n \\ge 0} c_n"}</M> with
        </p>
        <MD>{"c_n = \\sum_{i=0}^{n} a_i b_{n-i} = a_0 b_n + a_1 b_{n-1} + \\cdots + a_n b_0."}</MD>
        <p>
          It adds the grid by diagonals. It is the natural choice for power series, since{" "}
          <M>{"a_i x^i \\cdot b_j x^j"}</M> has degree <M>{"i + j"}</M>, so collecting the diagonal collects like powers.
        </p>
      </Definition>

      <Theorem title="Mertens' theorem">
        <p>
          If <M>{"\\sum a_n = A"}</M> converges absolutely and <M>{"\\sum b_n = B"}</M> converges, then the Cauchy product
          converges to <M>{"AB"}</M>. In particular this holds when both converge absolutely.
        </p>
      </Theorem>

      <Proof>
        <p>
          We prove the case where both converge absolutely. The partial sum <M>{"\\sum_{n \\le N} c_n"}</M> adds the triangle{" "}
          <M>{"i + j \\le N"}</M> of the grid, while <M>{"A_N B_N"}</M> adds the square <M>{"i, j \\le N"}</M>. The square
          minus the triangle consists of terms with <M>{"i + j > N"}</M>, so <M>{"i > N/2"}</M> or <M>{"j > N/2"}</M>. Hence
        </p>
        <MD>{"\\Big| A_N B_N - \\sum_{n \\le N} c_n \\Big| \\le \\Big(\\sum_{i > N/2} |a_i|\\Big)\\sum_j |b_j| + \\sum_i |a_i| \\Big(\\sum_{j > N/2} |b_j|\\Big),"}</MD>
        <p>
          and both tails tend to 0. Since <M>{"A_N B_N \\to AB"}</M>, the Cauchy product tends to <M>{"AB"}</M>.
        </p>
      </Proof>

      <Example title="the exponential law">
        <p>
          With <M>{"a_i = x^i/i!"}</M> and <M>{"b_j = y^j/j!"}</M>, both series converge absolutely for all{" "}
          <M>{"x, y"}</M>, and by the binomial theorem
        </p>
        <MD>{"c_n = \\sum_{i=0}^{n} \\frac{x^i y^{n-i}}{i!\\,(n-i)!} = \\frac{1}{n!}\\sum_{i=0}^{n}\\binom{n}{i} x^i y^{n-i} = \\frac{(x+y)^n}{n!}."}</MD>
        <p>So Mertens gives <M>{"E(x)E(y) = E(x + y)"}</M>.</p>
      </Example>

      <Remark title="when it fails">
        <p>
          Some hypothesis of absolute convergence is needed. The series <M>{"\\sum (-1)^n/\\sqrt{n+1}"}</M> converges
          conditionally, but its Cauchy square has <M>{"|c_n| \\ge 1"}</M> for every <M>{"n"}</M>, since each of the{" "}
          <M>{"n + 1"}</M> terms of <M>{"c_n"}</M> has the same sign and size at least <M>{"1/(n+1)"}</M>. So the product
          diverges. Abel later showed that if the product of two convergent series does converge, it converges to the
          product of the sums.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "c2",
      rung: "check",
      prompt: (
        <p>
          Write <M>{"c_2"}</M> for the Cauchy product of <M>{"\\sum a_n"}</M> and <M>{"\\sum b_n"}</M>.
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["a₂b₂", "a₀b₂ + a₁b₁ + a₂b₀", "a₀b₀ + a₁b₁ + a₂b₂", "a₂ + b₂"],
        correct: [1],
      },
    },
    {
      key: "hyp",
      rung: "check",
      prompt: <p>What does Mertens&rsquo; theorem require?</p>,
      answer: {
        kind: "choice",
        options: [
          "Both series converge, at least one absolutely.",
          "Both series converge conditionally.",
          "Both series have positive terms only.",
          "Nothing at all.",
        ],
        correct: [0],
      },
    },
    {
      key: "geo",
      rung: "apply",
      prompt: (
        <p>
          The Cauchy product of <M>{"\\sum_{n\\ge0} x^n"}</M> with itself has <M>{"c_n = (n + 1)x^n"}</M>. At{" "}
          <M>{"x = \\tfrac12"}</M>, what is <M>{"\\sum c_n"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "c3",
      rung: "apply",
      prompt: (
        <p>
          For the exponential series with <M>{"x = 1"}</M> and <M>{"y = 1"}</M>, what is <M>{"c_3"}</M>? Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 1.3333, tolerance: 0.001 },
    },
    {
      key: "fail",
      rung: "apply",
      prompt: (
        <p>
          Why does the Cauchy square of <M>{"\\sum (-1)^n/\\sqrt{n+1}"}</M> diverge?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Because the original series diverges.",
          "Because each c_n is a sum of n + 1 terms of one sign, each at least 1/(n + 1), so |c_n| ≥ 1 and the terms do not tend to 0.",
          "Because the ratio test fails.",
          "Because the terms are irrational.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Using Mertens&rsquo; theorem and the binomial theorem, show that <M>{"E(x)E(y) = E(x + y)"}</M>. A few lines will
          do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes both series converge absolutely, so Mertens applies.",
          "Computes c_n = Σ x^i y^(n−i) / (i!(n−i)!) and rewrites with binomial coefficients.",
          "Concludes c_n = (x + y)^n / n!, so the product is E(x + y).",
        ],
      },
    },
    {
      key: "sin",
      rung: "stretch",
      prompt: (
        <p>
          Using the series for sine and cosine and the Cauchy product, explain why{" "}
          <M>{"\\sin^2 x + \\cos^2 x = 1"}</M> could be proved from series alone. A sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes both series converge absolutely, so their squares can be computed as Cauchy products.",
          "Explains that the coefficient of each power x^n with n ≥ 1 in the sum cancels, for example by a binomial identity.",
          "Concludes only the constant term 1 remains. An alternative route through e^(ix) also earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the Cauchy product of two series is, why it adds by diagonals, what Mertens' theorem says and why absolute convergence matters, and how it proves the exponential law.",

  glimpse: (
    <p>
      Later in the course, power series are multiplied term by term in exactly this way, and the radius of the product is at
      least the smaller of the two radii. In complex analysis the same algebra underlies the multiplication of holomorphic
      functions, and in combinatorics the Cauchy product is the product of exponential generating functions.
    </p>
  ),
};
