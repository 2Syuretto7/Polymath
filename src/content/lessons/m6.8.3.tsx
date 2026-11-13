import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PowerSeriesViz } from "@/components/viz/PowerSeriesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.8.3",
  minutes: 90,
  links: {
    revisits: ["m6.8.2", "m2.9.4", "m6.3.1"],
    foreshadows: ["m13.1.4", "m10.6.1", "m6.8.4"],
  },

  puzzle: (
    <>
      <p>
        In calculus you met power series and used them freely: differentiating <M>{"\\sum x^k"}</M> term by term, integrating
        to find <M>{"\\ln(1 + x)"}</M>. The function <M>{"1/(1 + x^2)"}</M> is perfectly smooth on the whole real line, yet its
        power series about 0 stops converging at <M>{"x = 1"}</M>. Why there, and why is term-by-term calculus legitimate at
        all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Add terms and watch the partial sums. Then move <M>{"x"}</M> inside and outside the shaded interval.
      </p>
      <PowerSeriesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="radius of convergence">
        <p>
          For a power series <M>{"\\sum a_k x^k"}</M>, let
        </p>
        <MD>{"R = \\frac{1}{\\limsup_{k} |a_k|^{1/k}},"}</MD>
        <p>
          with <M>{"R = \\infty"}</M> if the lim sup is 0 and <M>{"R = 0"}</M> if it is infinite. This is the{" "}
          <strong>Cauchy-Hadamard formula</strong>. When <M>{"|a_{k+1}/a_k|"}</M> has a limit <M>{"L"}</M>, the ratio test
          gives the same <M>{"R = 1/L"}</M>.
        </p>
      </Definition>

      <Theorem title="where a power series converges">
        <p>
          The series converges absolutely for <M>{"|x| < R"}</M> and diverges for <M>{"|x| > R"}</M>. For any{" "}
          <M>{"r < R"}</M>, it converges uniformly on <M>{"[-r, r]"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"|x| < R"}</M>, pick <M>{"\\rho"}</M> between <M>{"|x|"}</M> and <M>{"R"}</M>; for large <M>{"k"}</M>,{" "}
          <M>{"|a_k|^{1/k} < 1/\\rho"}</M>, so <M>{"|a_k x^k| < (|x|/\\rho)^k"}</M>, a convergent geometric series. If{" "}
          <M>{"|x| > R"}</M>, infinitely many <M>{"|a_k x^k| > 1"}</M>, so the terms do not tend to 0. On{" "}
          <M>{"[-r, r]"}</M> the same geometric bound, with <M>{"r"}</M> in place of <M>{"|x|"}</M>, is an M-test.
        </p>
      </Proof>

      <Theorem title="calculus with power series">
        <p>
          The differentiated series <M>{"\\sum k a_k x^{k-1}"}</M> has the same radius, since{" "}
          <M>{"k^{1/k} \\to 1"}</M>. So inside the radius the sum is differentiable, with derivative given term by term, and
          hence infinitely differentiable. It can be integrated term by term too.
        </p>
      </Theorem>

      <Example title="the endpoints">
        <p>
          At <M>{"|x| = R"}</M> anything can happen. <M>{"\\sum x^k"}</M> diverges at both endpoints;{" "}
          <M>{"\\sum x^k/k"}</M> diverges at 1 and converges at −1; <M>{"\\sum x^k/k^2"}</M> converges at both. Abel&rsquo;s
          theorem says that if the series converges at an endpoint, the sum is continuous up to it, which justifies{" "}
          <M>{"1 - \\tfrac12 + \\tfrac13 - \\cdots = \\ln 2"}</M>.
        </p>
      </Example>

      <Remark title="why the radius is what it is">
        <p>
          The radius of <M>{"1/(1 + x^2)"}</M> is 1 because, as a function of a complex variable, it blows up at{" "}
          <M>{"\\pm i"}</M>, at distance 1 from 0. Complex analysis shows that the radius is always the distance to the nearest
          singularity in the complex plane. And not every smooth function equals its Taylor series: <M>{"e^{-1/x^2}"}</M>,
          extended by 0 at 0, has every derivative 0 there.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "radius",
      rung: "check",
      prompt: (
        <p>
          What is the radius of convergence of <M>{"\\sum x^k/2^k"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "outside",
      rung: "check",
      prompt: <p>What happens to a power series at a point with |x| greater than its radius?</p>,
      answer: {
        kind: "choice",
        options: ["It converges absolutely.", "It converges conditionally.", "It diverges.", "It may do anything."],
        correct: [2],
      },
    },
    {
      key: "fact",
      rung: "apply",
      prompt: (
        <p>
          What is the radius of convergence of <M>{"\\sum k!\\, x^k"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "ends",
      rung: "apply",
      prompt: (
        <p>
          Where does <M>{"\\sum x^k/k"}</M>, with <M>{"k \\ge 1"}</M>, converge? Choose all that apply.
        </p>
      ),
      answer: { kind: "choice", options: ["x = 0.5", "x = 1", "x = −1", "x = 2"], correct: [0, 2] },
    },
    {
      key: "diff",
      rung: "apply",
      prompt: (
        <p>
          Differentiating <M>{"\\sum x^k = 1/(1 - x)"}</M> term by term gives <M>{"\\sum k x^{k-1} = 1/(1 - x)^2"}</M>. What is
          its value at <M>{"x = 0.5"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"\\sum x^k/k!"}</M> converges uniformly on <M>{"[-r, r]"}</M> for every <M>{"r > 0"}</M>. A few lines
          will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Bounds |x^k/k!| ≤ r^k/k! on [−r, r].",
          "Notes Σ r^k/k! converges, for example by the ratio test, and concludes by the M-test.",
        ],
      },
    },
    {
      key: "lorentz",
      rung: "stretch",
      prompt: (
        <p>
          The function <M>{"1/(1 + x^2)"}</M> is smooth on all of ℝ, yet its series about 0 has radius 1. Explain why, and
          predict the radius of its series about <M>{"x = 1"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes the complex singularities at ±i, at distance 1 from 0.",
          "Predicts the radius about 1 is the distance from 1 to ±i, namely √2. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the radius of convergence and how to find it, why a power series converges uniformly on smaller intervals, why it can be differentiated term by term, and what can happen at the endpoints.",

  glimpse: (
    <p>
      The next lesson shows that every continuous function on a closed interval is a uniform limit of polynomials, even one
      with no power series at all. Complex Analysis explains radii through singularities, and power series solve differential
      equations in the course on them.
    </p>
  ),
};
