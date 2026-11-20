import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CharFnViz } from "@/components/viz/CharFnViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.3.1",
  minutes: 90,
  links: {
    revisits: ["m27.2.2", "m9.4.1", "m22.2.3"],
    foreshadows: ["m27.3.2", "m27.3.3", "m27.5.1"],
  },

  puzzle: (
    <>
      <p>
        The law of a sum of independent variables is a convolution, which is hard to compute. Moment generating functions
        turn it into a product, but many laws, such as the Cauchy, have none. Is there a transform that exists for every
        law, turns convolution into multiplication, and still determines the law?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a law with mean 0 and variance 1, and increase the number of summands.</p>
      <CharFnViz />
    </>
  ),

  theory: (
    <>
      <Definition title="characteristic function">
        <p>
          The <strong>characteristic function</strong> of a random variable X is{" "}
          <M>{"\\varphi_X(t) = E[e^{itX}] = E[\\cos tX] + i \\, E[\\sin tX]"}</M>, for real t. Since{" "}
          <M>{"|e^{itX}| = 1"}</M>, it exists for every law. It is uniformly continuous, satisfies{" "}
          <M>{"\\varphi(0) = 1"}</M> and <M>{"|\\varphi(t)| \\le 1"}</M>, and{" "}
          <M>{"\\varphi_{aX+b}(t) = e^{itb}\\varphi_X(at)"}</M>.
        </p>
      </Definition>

      <Theorem title="products">
        <p>
          If X and Y are independent, <M>{"\\varphi_{X+Y} = \\varphi_X \\varphi_Y"}</M>, because{" "}
          <M>{"E[e^{itX} e^{itY}] = E[e^{itX}] \\, E[e^{itY}]"}</M>.
        </p>
      </Theorem>

      <Example title="standard examples">
        <p>
          A fair ±1 coin has <M>{"\\cos t"}</M>. Uniform on [−a, a] has <M>{"\\sin(at)/(at)"}</M>. The standard normal has{" "}
          <M>{"e^{-t^2/2}"}</M>. Poisson(λ) has <M>{"\\exp(\\lambda(e^{it} - 1))"}</M>. The Cauchy law has{" "}
          <M>{"e^{-|t|}"}</M>, not differentiable at 0, matching its lack of a mean.
        </p>
      </Example>

      <Theorem title="inversion and uniqueness">
        <p>
          The characteristic function determines the law: for a &lt; b with no atoms at a or b,{" "}
          <M>{"P(a < X < b) = \\lim_{T \\to \\infty} \\frac{1}{2\\pi} \\int_{-T}^{T} \\frac{e^{-ita} - e^{-itb}}{it} \\varphi(t) \\, dt"}</M>.
          If <M>{"\\varphi"}</M> is integrable, X has a continuous density{" "}
          <M>{"f(x) = \\frac{1}{2\\pi} \\int e^{-itx} \\varphi(t) \\, dt"}</M>.
        </p>
      </Theorem>

      <Theorem title="Lévy's continuity theorem">
        <p>
          <M>{"X_n \\to X"}</M> in distribution if and only if <M>{"\\varphi_{X_n}(t) \\to \\varphi_X(t)"}</M> for every t.
          Moreover, if <M>{"\\varphi_{X_n}"}</M> converges pointwise to a function continuous at 0, that function is a
          characteristic function.
        </p>
      </Theorem>

      <Remark title="the central limit theorem in three lines">
        <p>
          Let <M>{"X_k"}</M> be independent and identically distributed with mean 0 and variance 1. Taylor&rsquo;s theorem
          gives <M>{"\\varphi(s) = 1 - s^2/2 + o(s^2)"}</M>, so{" "}
          <M>{"\\varphi(t/\\sqrt n)^n = (1 - t^2/(2n) + o(1/n))^n \\to e^{-t^2/2}"}</M>. By Lévy&rsquo;s theorem,{" "}
          <M>{"S_n/\\sqrt n"}</M> converges in distribution to the standard normal.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the characteristic function of X?</p>,
      answer: { kind: "choice", options: ["t ↦ E[exp(itX)]", "t ↦ E[exp(tX)]", "t ↦ P(X ≤ t)", "t ↦ E[Xᵗ]"], correct: [0] },
    },
    {
      key: "exist",
      rung: "check",
      prompt: <p>Why does every random variable have a characteristic function?</p>,
      answer: { kind: "choice", options: ["|exp(itX)| = 1, so the expectation is always finite", "Every variable has finite variance", "Every variable has a density", "It is defined only for bounded variables"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the fair coin and n = 1, what is the value of the solid curve at t = π?</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0.01 },
    },
    {
      key: "shift",
      rung: "apply",
      prompt: <p>If X has characteristic function φ, what is the characteristic function of 2X?</p>,
      answer: { kind: "choice", options: ["t ↦ φ(2t)", "t ↦ 2φ(t)", "t ↦ φ(t)²", "t ↦ φ(t/2)"], correct: [0] },
    },
    {
      key: "mean",
      rung: "apply",
      prompt: <p>If X has finite mean, φ&prime;(0) = iE[X]. A law has φ(t) = exp(2it − t²/2). What is its mean?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the sum of independent Poisson variables with parameters λ and μ is Poisson with parameter λ + μ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes or quotes the characteristic function exp(λ(exp(it) − 1)) of Poisson(λ).",
          "Multiplies the two characteristic functions, using independence, to get exp((λ + μ)(exp(it) − 1)).",
          "Concludes by uniqueness that the sum is Poisson(λ + μ).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Using φ(t) = exp(−|t|) for the standard Cauchy law, show that the mean of n independent Cauchy variables is again standard Cauchy.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the characteristic function of the mean as φ(t/n)ⁿ = exp(−n|t|/n).",
          "Concludes it equals exp(−|t|), so by uniqueness the mean is standard Cauchy.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The central limit theorem holds for identically distributed summands. Real errors come from many sources of
        different sizes. When is their sum still approximately normal?
      </p>
      <p>Next, the Lindeberg–Feller theorem.</p>
    </>
  ),
};
