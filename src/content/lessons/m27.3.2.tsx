import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LindebergViz } from "@/components/viz/LindebergViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.3.2",
  minutes: 90,
  links: {
    revisits: ["m27.3.1", "m9.7.2", "m9.4.2"],
    foreshadows: ["m27.3.3", "m27.4.2", "m27.5.1"],
  },

  puzzle: (
    <>
      <p>
        A measurement error is the sum of many small independent effects: vibration, temperature, rounding. They are not
        identically distributed. The normal law still seems to appear. But if one effect is as large as all the rest
        together, surely the sum inherits its shape. Where exactly is the line?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sum independent uniform variables of various sizes. Compare the histogram with the normal curve.</p>
      <LindebergViz />
    </>
  ),

  theory: (
    <>
      <Definition title="triangular arrays">
        <p>
          For each n, let <M>{"X_{n,1}, \\dots, X_{n,k_n}"}</M> be independent with mean 0 and variances summing to 1. Write{" "}
          <M>{"S_n = \\sum_k X_{n,k}"}</M>. The classical case is <M>{"X_{n,k} = X_k / s_n"}</M> with{" "}
          <M>{"s_n^2 = \\sum_{k \\le n} \\operatorname{Var}(X_k)"}</M>.
        </p>
      </Definition>

      <Definition title="the Lindeberg condition">
        <p>
          For every ε &gt; 0, <M>{"\\sum_k E\\left[X_{n,k}^2 ; |X_{n,k}| > \\varepsilon\\right] \\to 0"}</M>. The part of the
          variance carried by large values of any summand becomes negligible.
        </p>
      </Definition>

      <Theorem title="Lindeberg–Feller">
        <p>
          Under the Lindeberg condition, <M>{"S_n"}</M> converges in distribution to the standard normal. Conversely (Feller),
          if <M>{"\\max_k \\operatorname{Var}(X_{n,k}) \\to 0"}</M> and <M>{"S_n"}</M> converges to the standard normal, then
          the Lindeberg condition holds.
        </p>
        <p>
          <strong>Proof idea.</strong> Compare characteristic functions term by term. The bound{" "}
          <M>{"|e^{ix} - (1 + ix - x^2/2)| \\le \\min(|x|^3/6, x^2)"}</M> controls each factor: the cubic bound handles
          small values, the quadratic bound the large values, which Lindeberg makes negligible.
        </p>
      </Theorem>

      <Example title="Lyapunov's condition">
        <p>
          A simpler sufficient condition: for some δ &gt; 0,{" "}
          <M>{"\\sum_k E|X_{n,k}|^{2+\\delta} \\to 0"}</M>. It implies Lindeberg since on{" "}
          <M>{"\\{|X| > \\varepsilon\\}"}</M>, <M>{"X^2 \\le |X|^{2+\\delta} / \\varepsilon^\\delta"}</M>.
        </p>
      </Example>

      <Example title="a dominant summand">
        <p>
          If one summand carries a fixed share of the variance for all n, the hypothesis of Feller&rsquo;s converse fails, and
          indeed the limit need not be normal: in the visualisation, the sum keeps the flat shape of the giant uniform.
        </p>
      </Example>

      <Remark title="why the normal">
        <p>
          The normal law is the only law with finite variance that is stable under adding independent copies and
          rescaling. Lindeberg&rsquo;s theorem says it is the universal limit whenever no single source of randomness matters.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>What does the Lindeberg condition say, informally?</p>,
      answer: { kind: "choice", options: ["The variance carried by large values of the summands becomes negligible", "All summands have the same law", "The summands are bounded", "The mean of each summand is zero"], correct: [0] },
    },
    {
      key: "lyap",
      rung: "check",
      prompt: <p>Which condition implies Lindeberg&rsquo;s?</p>,
      answer: { kind: "choice", options: ["Lyapunov’s: Σ E|Xₙ,ₖ|²⁺ᵟ → 0 for some δ > 0", "Independence alone", "Finite means", "Symmetry of each summand"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with equal scales and n = 20, roughly what share of the variance does the largest summand carry, in percent?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0.2 },
    },
    {
      key: "grow",
      rung: "apply",
      prompt: <p>With Xₖ uniform on [−√k, √k], does the largest variance share tend to 0?</p>,
      answer: { kind: "choice", options: ["Yes: it is about n/(n²/2), which tends to 0", "No: it stays at 1/2", "No: it grows", "Only for even n"], correct: [0] },
    },
    {
      key: "iid",
      rung: "apply",
      prompt: <p>For i.i.d. summands with finite variance, Xₙ,ₖ = Xₖ/(σ√n). Why does Lindeberg hold?</p>,
      answer: { kind: "choice", options: ["The sum equals E[X₁²/σ² ; |X₁| > εσ√n], which tends to 0 by dominated convergence", "Because the variables are bounded", "Because n is large", "It does not hold"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that Lyapunov&rsquo;s condition implies Lindeberg&rsquo;s.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that on the event |X| > ε, X² ≤ |X|²⁺ᵟ/εᵟ.",
          "Bounds each term E[X²; |X| > ε] by E|X|²⁺ᵟ/εᵟ.",
          "Sums over k and concludes the Lindeberg sum tends to 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Let Xₖ be independent with P(Xₖ = ±k) = 1/2. Does Sₙ/sₙ tend to a normal law?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes sₙ² = Σ k², of order n³/3, so each |Xₖ|/sₙ ≤ n/sₙ → 0.",
          "Concludes the Lindeberg sum is eventually zero, so the limit is normal.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Not every sum of small independent effects is near normal. Count rare events, each unlikely, among many trials, and
        a different limit appears.
      </p>
      <p>Next, Poisson convergence.</p>
    </>
  ),
};
