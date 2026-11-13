import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CondensationViz } from "@/components/viz/CondensationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.3.1",
  minutes: 90,
  links: {
    revisits: ["m6.2.4", "m2.9.2", "m6.2.5"],
    foreshadows: ["m6.3.2", "m6.8.3", "m6.3.3"],
  },

  puzzle: (
    <>
      <p>
        In calculus you met a toolkit of tests: comparison, ratio, root, alternating series, the integral test. You used them
        on faith. Now every one must be proved from the definition of convergence. And one series sits right on the
        boundary: <M>{"\\sum 1/k^p"}</M> converges for <M>{"p > 1"}</M> and diverges for <M>{"p \\le 1"}</M>. Can we prove
        that without integrals, using nothing but the completeness of the real numbers?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Group the terms of <M>{"\\sum 1/k^p"}</M> into blocks of length 1, 2, 4, 8, and so on. Change <M>{"p"}</M> and
        compare each block with the bars above and below it.
      </p>
      <CondensationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="series">
        <p>
          A series <M>{"\\sum a_k"}</M> converges when its partial sums <M>{"s_n = a_1 + \\cdots + a_n"}</M> converge. The
          Cauchy criterion becomes: for every <M>{"\\varepsilon"}</M> there is <M>{"N"}</M> with{" "}
          <M>{"|a_{n+1} + \\cdots + a_m| < \\varepsilon"}</M> for all <M>{"m > n \\ge N"}</M>. Taking{" "}
          <M>{"m = n + 1"}</M> shows that if <M>{"\\sum a_k"}</M> converges, then <M>{"a_k \\to 0"}</M>. For non-negative
          terms the partial sums increase, so by monotone convergence the series converges exactly when they are bounded.
        </p>
      </Definition>

      <Theorem title="comparison and condensation">
        <p>
          <strong>Comparison.</strong> If <M>{"0 \\le a_k \\le b_k"}</M> and <M>{"\\sum b_k"}</M> converges, so does{" "}
          <M>{"\\sum a_k"}</M>. <strong>Cauchy condensation.</strong> If <M>{"(a_k)"}</M> is decreasing and non-negative,
          then <M>{"\\sum a_k"}</M> converges if and only if <M>{"\\sum 2^j a_{2^j}"}</M> does.
        </p>
      </Theorem>

      <Proof>
        <p>
          Comparison: the partial sums of <M>{"\\sum a_k"}</M> increase and are bounded by <M>{"\\sum b_k"}</M>. For
          condensation, the block from <M>{"2^j"}</M> to <M>{"2^{j+1} - 1"}</M> has <M>{"2^j"}</M> terms, each between{" "}
          <M>{"a_{2^{j+1}}"}</M> and <M>{"a_{2^j}"}</M>, so
        </p>
        <MD>{"\\tfrac12 \\, 2^{j+1} a_{2^{j+1}} \\;\\le\\; \\sum_{k=2^j}^{2^{j+1}-1} a_k \\;\\le\\; 2^j a_{2^j}."}</MD>
        <p>
          Summing over blocks, the partial sums of one series are bounded if and only if those of the other are.
        </p>
      </Proof>

      <Example title="the p-series">
        <p>
          For <M>{"a_k = 1/k^p"}</M> with <M>{"p > 0"}</M>, the condensed series is{" "}
          <M>{"\\sum 2^j \\cdot 2^{-jp} = \\sum (2^{1-p})^j"}</M>, a geometric series that converges exactly when{" "}
          <M>{"2^{1-p} < 1"}</M>, that is, when <M>{"p > 1"}</M>. The harmonic series, <M>{"p = 1"}</M>, condenses to{" "}
          <M>{"1 + 1 + 1 + \\cdots"}</M>.
        </p>
      </Example>

      <Remark title="ratio, root and alternating series">
        <p>
          The <strong>root test</strong>: if <M>{"\\limsup \\sqrt[k]{|a_k|} = r < 1"}</M>, pick <M>{"r < q < 1"}</M>;
          eventually <M>{"|a_k| < q^k"}</M>, and compare with a geometric series. If <M>{"r > 1"}</M>, the terms do not
          tend to 0. The <strong>ratio test</strong> follows the same pattern, with{" "}
          <M>{"|a_{k+1}/a_k|"}</M> eventually below <M>{"q"}</M>. The <strong>alternating series test</strong>: if{" "}
          <M>{"b_k"}</M> decreases to 0, the partial sums of <M>{"\\sum (-1)^{k+1} b_k"}</M> squeeze in, the even ones
          rising and the odd ones falling, and they differ by <M>{"b_{n+1} \\to 0"}</M>. Finally, every absolutely
          convergent series converges, by the Cauchy criterion and the triangle inequality.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "terms",
      rung: "check",
      prompt: (
        <p>
          If <M>{"\\sum a_k"}</M> converges, what must <M>{"\\lim a_k"}</M> be?
        </p>
      ),
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "pser",
      rung: "check",
      prompt: <p>For which of these exponents does the series of 1/kᵖ converge? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["p = 0.5", "p = 1", "p = 1.01", "p = 2"], correct: [2, 3] },
    },
    {
      key: "ratio",
      rung: "apply",
      prompt: (
        <p>
          For the condensed series of <M>{"\\sum 1/k^{3}"}</M>, what is the ratio <M>{"2^{1-p}"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "root",
      rung: "apply",
      prompt: (
        <p>
          What is <M>{"\\limsup \\sqrt[k]{|a_k|}"}</M> for <M>{"a_k = (k/(2k+1))^k"}</M>? Use it to decide convergence.
        </p>
      ),
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "log",
      rung: "apply",
      prompt: (
        <p>
          Apply condensation to <M>{"\\sum_{k \\ge 2} \\dfrac{1}{k \\ln k}"}</M>. What does the condensed series look
          like, and does the original converge?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Σ 1/(j ln 2), a multiple of the harmonic series, so it diverges.",
          "Σ 1/2^j, a geometric series, so it converges.",
          "Σ 1/j², so it converges.",
          "The test does not apply.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove the comparison test: if <M>{"0 \\le a_k \\le b_k"}</M> and <M>{"\\sum b_k"}</M> converges, then{" "}
          <M>{"\\sum a_k"}</M> converges. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes the partial sums of Σ a_k increase, since the terms are non-negative.",
          "Bounds them by the sum of Σ b_k.",
          "Concludes by the monotone convergence theorem.",
        ],
      },
    },
    {
      key: "alt",
      rung: "stretch",
      prompt: (
        <p>
          Prove the alternating series test: if <M>{"b_k"}</M> decreases to 0, then <M>{"\\sum (-1)^{k+1} b_k"}</M>{" "}
          converges. A sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Shows the even partial sums increase and the odd partial sums decrease.",
          "Shows every even partial sum is below every odd one, so both are bounded and converge.",
          "Uses s_{2n+1} − s_{2n} = b_{2n+1} → 0 to show the two limits agree.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why convergent series have terms tending to 0, how the comparison and condensation tests are proved from monotone convergence, how condensation settles the p-series, and how the root test uses the limsup.",

  glimpse: (
    <p>
      The next lesson shows that a conditionally convergent series can be rearranged to sum to anything, while an
      absolutely convergent one cannot. The root test, stated with the limsup, will give the radius of convergence of a power
      series, and the lesson after next multiplies two series together.
    </p>
  ),
};
