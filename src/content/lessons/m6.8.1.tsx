import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { UniformBandViz } from "@/components/viz/UniformBandViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.8.1",
  minutes: 85,
  links: {
    revisits: ["m6.2.4", "m6.5.1", "m6.6.4"],
    foreshadows: ["m6.8.2", "m6.8.3", "m12.1.3"],
  },

  puzzle: (
    <>
      <p>
        Each function <M>{"x^n"}</M> is continuous on <M>{"[0, 1]"}</M>. As <M>{"n"}</M> grows, they converge at each point:
        to 0 for <M>{"x < 1"}</M> and to 1 at <M>{"x = 1"}</M>. The limit has a jump. Cauchy once claimed that a convergent
        series of continuous functions has a continuous sum, and counterexamples like this one forced mathematicians to find
        out what kind of convergence he really needed.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The shaded band has height <M>{"\\varepsilon"}</M> around the limit. Increase <M>{"n"}</M> and ask whether the whole
        graph of <M>{"f_n"}</M> eventually fits inside it.
      </p>
      <UniformBandViz />
    </>
  ),

  theory: (
    <>
      <Definition title="pointwise convergence">
        <p>
          A sequence of functions <M>{"f_n : A \\to \\mathbb{R}"}</M> converges <strong>pointwise</strong> to <M>{"f"}</M> if{" "}
          <M>{"f_n(x) \\to f(x)"}</M> for each <M>{"x \\in A"}</M>. In terms of <M>{"\\varepsilon"}</M>: for every{" "}
          <M>{"\\varepsilon"}</M> and every <M>{"x"}</M> there is <M>{"N"}</M>, which may depend on both, with{" "}
          <M>{"|f_n(x) - f(x)| < \\varepsilon"}</M> for <M>{"n \\ge N"}</M>.
        </p>
      </Definition>

      <Definition title="uniform convergence">
        <p>
          The sequence converges <strong>uniformly</strong> if for every <M>{"\\varepsilon"}</M> there is a single{" "}
          <M>{"N"}</M>, working for every <M>{"x"}</M> at once:
        </p>
        <MD>{"n \\ge N \\implies |f_n(x) - f(x)| < \\varepsilon \\text{ for all } x \\in A."}</MD>
        <p>
          Equivalently, <M>{"\\sup_{x \\in A} |f_n(x) - f(x)| \\to 0"}</M>. Geometrically, the graph of <M>{"f_n"}</M> lies in
          the <M>{"\\varepsilon"}</M>-band around <M>{"f"}</M> for all large <M>{"n"}</M>.
        </p>
      </Definition>

      <Theorem title="the Cauchy criterion for uniform convergence">
        <p>
          <M>{"(f_n)"}</M> converges uniformly on <M>{"A"}</M> if and only if for every <M>{"\\varepsilon"}</M> there is{" "}
          <M>{"N"}</M> with <M>{"|f_m(x) - f_n(x)| < \\varepsilon"}</M> for all <M>{"m, n \\ge N"}</M> and all{" "}
          <M>{"x \\in A"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If the condition holds, then for each <M>{"x"}</M> the sequence <M>{"f_n(x)"}</M> is Cauchy, so it converges to some{" "}
          <M>{"f(x)"}</M>. Letting <M>{"m \\to \\infty"}</M> in <M>{"|f_m(x) - f_n(x)| < \\varepsilon"}</M> gives{" "}
          <M>{"|f(x) - f_n(x)| \\le \\varepsilon"}</M> for all <M>{"x"}</M> and <M>{"n \\ge N"}</M>. The converse is the
          triangle inequality.
        </p>
      </Proof>

      <Example title="the Weierstrass M-test">
        <p>
          If <M>{"|g_k(x)| \\le M_k"}</M> for all <M>{"x"}</M>, and <M>{"\\sum M_k"}</M> converges, then{" "}
          <M>{"\\sum g_k"}</M> converges uniformly. The tail of the series of functions is bounded, at every <M>{"x"}</M>,
          by the tail of <M>{"\\sum M_k"}</M>, so the Cauchy criterion holds. This is how Takagi&rsquo;s function was shown to
          be continuous, and how power series will be handled.
        </p>
      </Example>

      <Remark title="three examples">
        <p>
          On <M>{"[0, 1]"}</M>, <M>{"\\sup |x^n - f| = 1"}</M> for every <M>{"n"}</M>, since <M>{"x^n"}</M> is close to 1 just
          left of 1: pointwise, not uniform. On <M>{"[0, 0.9]"}</M>, the sup is <M>{"0.9^n \\to 0"}</M>: uniform. The functions{" "}
          <M>{"nx e^{-nx}"}</M> tend to 0 at every point, but each has a bump of height <M>{"1/e"}</M> at{" "}
          <M>{"x = 1/n"}</M>, which slides towards 0 without shrinking: again not uniform, even though the limit is continuous.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lim",
      rung: "check",
      prompt: (
        <p>
          What is the pointwise limit of <M>{"x^n"}</M> at <M>{"x = 0.5"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "diff",
      rung: "check",
      prompt: <p>What distinguishes uniform from pointwise convergence?</p>,
      answer: {
        kind: "choice",
        options: [
          "Uniform convergence only applies to continuous functions.",
          "In uniform convergence one N works for every x at once.",
          "Pointwise convergence is stronger.",
          "There is no difference.",
        ],
        correct: [1],
      },
    },
    {
      key: "sup",
      rung: "apply",
      prompt: (
        <p>
          On <M>{"[0, 0.9]"}</M>, what is <M>{"\\sup |x^{10} - 0|"}</M>? Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 0.3487, tolerance: 0.001 },
    },
    {
      key: "bump",
      rung: "apply",
      prompt: (
        <p>
          What is the maximum value of <M>{"nx e^{-nx}"}</M> on <M>{"[0, 1]"}</M> for <M>{"n \\ge 1"}</M>? Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 0.3679, tolerance: 0.001 },
    },
    {
      key: "mtest",
      rung: "apply",
      prompt: <p>Which of these series converge uniformly on ℝ by the M-test? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Σ sin(kx)/k²", "Σ cos(kx)/2ᵏ", "Σ xᵏ", "Σ sin(kx)/k"],
        correct: [0, 1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"f_n(x) = x/n"}</M> converges uniformly to 0 on <M>{"[0, 5]"}</M> but not on{" "}
          <M>{"\\mathbb{R}"}</M>. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "On [0, 5], sup |x/n| = 5/n → 0, so the convergence is uniform.",
          "On ℝ, sup |x/n| is infinite for every n, or take x = n to get f_n(n) = 1.",
          "Concludes the convergence on ℝ is pointwise but not uniform.",
        ],
      },
    },
    {
      key: "dini",
      rung: "stretch",
      prompt: (
        <p>
          Explain why the convergence of <M>{"x^n"}</M> on <M>{"[0, 1)"}</M> is not uniform, even though the limit, 0, is
          continuous there. What does this suggest about the role of compactness?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes sup over [0, 1) of xⁿ is 1 for every n, so not uniform.",
          "Notes [0, 1) is not compact; the trouble is at the missing endpoint.",
          "Suggests compactness, with monotone convergence to a continuous limit, would force uniformity, as in Dini's theorem. Any sensible reflection earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between pointwise and uniform convergence, how to test uniform convergence with the supremum, the Cauchy criterion and the Weierstrass M-test, and the examples xⁿ and nx e^(−nx).",

  glimpse: (
    <p>
      The next lesson proves that uniform limits of continuous functions are continuous, and asks when limits can be
      differentiated and integrated term by term. Power series converge uniformly on smaller intervals, and in metric spaces
      the space of continuous functions with the sup distance is complete.
    </p>
  ),
};
