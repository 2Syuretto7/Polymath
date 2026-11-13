import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LimitSwapViz } from "@/components/viz/LimitSwapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.8.2",
  minutes: 90,
  links: {
    revisits: ["m6.8.1", "m6.7.3", "m6.5.1"],
    foreshadows: ["m6.8.3", "m12.3.1", "m17.4.2"],
  },

  puzzle: (
    <>
      <p>
        Much of analysis consists of swapping two limiting processes: the limit of the integrals against the integral of the
        limit, or the derivative of a sum against the sum of the derivatives. Physicists and engineers do this freely, and
        usually get away with it. But not always. Which swaps are safe, and what guarantees them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Three sequences, three questions. For each, increase <M>{"n"}</M> and compare what happens to the functions with what
        happens to their integrals or derivatives.
      </p>
      <LimitSwapViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="uniform limits are continuous">
        <p>
          If each <M>{"f_n"}</M> is continuous at <M>{"c"}</M> and <M>{"f_n \\to f"}</M> uniformly, then <M>{"f"}</M> is
          continuous at <M>{"c"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Given <M>{"\\varepsilon"}</M>, choose <M>{"n"}</M> with <M>{"|f_n - f| < \\varepsilon/3"}</M> everywhere, then{" "}
          <M>{"\\delta"}</M> with <M>{"|f_n(x) - f_n(c)| < \\varepsilon/3"}</M> for <M>{"|x - c| < \\delta"}</M>. Then
        </p>
        <MD>{"|f(x) - f(c)| \\le |f(x) - f_n(x)| + |f_n(x) - f_n(c)| + |f_n(c) - f(c)| < \\varepsilon."}</MD>
        <p>
          This is the <strong>ε/3 argument</strong>. Uniformity matters because the same <M>{"n"}</M> must work at{" "}
          <M>{"x"}</M>, which moves, as well as at <M>{"c"}</M>.
        </p>
      </Proof>

      <Theorem title="integrals and derivatives">
        <p>
          If integrable <M>{"f_n \\to f"}</M> uniformly on <M>{"[a, b]"}</M>, then <M>{"f"}</M> is integrable and{" "}
          <M>{"\\int_a^b f_n \\to \\int_a^b f"}</M>, since{" "}
          <M>{"\\left|\\int f_n - \\int f\\right| \\le (b - a)\\sup|f_n - f|"}</M>. For derivatives the hypothesis falls on
          the derivatives: if each <M>{"f_n"}</M> is differentiable, <M>{"f_n'"}</M> converges uniformly to <M>{"g"}</M>, and{" "}
          <M>{"f_n(x_0)"}</M> converges at a single point, then <M>{"f_n"}</M> converges uniformly to some <M>{"f"}</M> with{" "}
          <M>{"f' = g"}</M>.
        </p>
      </Theorem>

      <Example title="the counterexamples">
        <p>
          The moving spike has integral 1 for every <M>{"n"}</M> but tends to 0 pointwise: without uniformity, integrals need
          not converge to the integral of the limit. The functions <M>{"\\sin(nx)/\\sqrt n"}</M> converge uniformly to 0, but
          their derivatives <M>{"\\sqrt n\\cos(nx)"}</M> do not converge at all. And the smooth functions{" "}
          <M>{"\\sqrt{x^2 + 1/n}"}</M> converge uniformly to <M>{"|x|"}</M>, which has a corner.
        </p>
      </Example>

      <Remark title="series">
        <p>
          Applied to partial sums, the theorems say: a uniformly convergent series of continuous functions has a continuous
          sum and may be integrated term by term, and it may be differentiated term by term if the differentiated series
          converges uniformly. This corrects Cauchy&rsquo;s 1821 claim, and it is how power series and Fourier series are
          handled. In the language of metric spaces, the first theorem says that the continuous functions form a closed set
          under the sup distance.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these does uniform convergence of continuous functions on [a, b] guarantee? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "The limit is continuous.",
          "The integrals converge to the integral of the limit.",
          "The limit is differentiable.",
          "The derivatives converge.",
        ],
        correct: [0, 1],
      },
    },
    {
      key: "spike",
      rung: "check",
      prompt: <p>For the moving spikes, each with area 1, what is the limit of their integrals as n grows?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "sup",
      rung: "apply",
      prompt: (
        <p>
          What is <M>{"\\sup |\\sin(nx)/\\sqrt n|"}</M> when <M>{"n = 16"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.25, tolerance: 0.0001 },
    },
    {
      key: "bound",
      rung: "apply",
      prompt: (
        <p>
          On <M>{"[0, 3]"}</M>, <M>{"\\sup |f_n - f| = 0.01"}</M>. What bound does the theorem give for{" "}
          <M>{"\\left|\\int_0^3 f_n - \\int_0^3 f\\right|"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.03, tolerance: 0.0001 },
    },
    {
      key: "deriv",
      rung: "apply",
      prompt: <p>To differentiate a series term by term, what does the theorem ask to converge uniformly?</p>,
      answer: {
        kind: "choice",
        options: [
          "The series itself, and nothing else.",
          "The series of derivatives, with the series itself converging at one point.",
          "The series of integrals.",
          "Nothing: term-by-term differentiation is always allowed.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Suppose integrable <M>{"f_n \\to f"}</M> uniformly on <M>{"[a, b]"}</M> and <M>{"f"}</M> is integrable. Prove that{" "}
          <M>{"\\int f_n \\to \\int f"}</M>. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes |∫ f_n − ∫ f| ≤ ∫ |f_n − f| ≤ (b − a) sup |f_n − f|.",
          "Notes the sup tends to 0 by uniform convergence, so the difference tends to 0.",
        ],
      },
    },
    {
      key: "necessary",
      rung: "stretch",
      prompt: (
        <p>
          Is uniform convergence necessary for a limit of continuous functions to be continuous? Use{" "}
          <M>{"nx e^{-nx}"}</M> from the last lesson to decide.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes nx e^(−nx) converges to 0, a continuous function, yet not uniformly.",
          "Concludes uniform convergence is sufficient but not necessary. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the ε/3 argument for continuity of uniform limits, why uniform convergence lets you swap limit and integral, what extra hypothesis derivatives need, and the three counterexamples.",

  glimpse: (
    <p>
      The next lesson applies these theorems to power series, which can be differentiated and integrated term by term inside
      their radius of convergence. In metric spaces, the space of continuous functions with the sup distance becomes the
      setting for much of analysis, and Fourier series test these theorems hardest.
    </p>
  ),
};
