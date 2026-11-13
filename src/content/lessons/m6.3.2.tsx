import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ReorderSumViz } from "@/components/viz/ReorderSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.3.2",
  minutes: 85,
  links: {
    revisits: ["m6.3.1", "m6.2.4", "m2.9.2"],
    foreshadows: ["m6.3.3", "m6.8.3", "m17.4.2"],
  },

  puzzle: (
    <>
      <p>
        Addition is commutative: <M>{"a + b = b + a"}</M>, and for any finite list the order does not matter. Yet the series{" "}
        <M>{"1 - \\tfrac12 + \\tfrac13 - \\tfrac14 + \\cdots"}</M> sums to <M>{"\\ln 2"}</M>, while the same terms, taken
        two positive then one negative, sum to <M>{"\\tfrac32 \\ln 2"}</M>. Not a single term has been added or removed. When
        is an infinite sum a genuine sum, indifferent to order, and when is it only a limit that depends on how we walk
        towards it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each picture plots the same terms in two orders. Compare the alternating harmonic series with the alternating series
        of reciprocal squares.
      </p>
      <ReorderSumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="absolute and conditional convergence">
        <p>
          A series converges <strong>absolutely</strong> if <M>{"\\sum |a_k|"}</M> converges, and{" "}
          <strong>conditionally</strong> if it converges but not absolutely. A <strong>rearrangement</strong> of{" "}
          <M>{"\\sum a_k"}</M> is a series <M>{"\\sum a_{\\sigma(k)}"}</M>, where <M>{"\\sigma"}</M> is a bijection of the
          positive integers: every term used exactly once, in a new order.
        </p>
      </Definition>

      <Theorem title="absolutely convergent series can be rearranged">
        <p>
          If <M>{"\\sum a_k"}</M> converges absolutely to <M>{"S"}</M>, then every rearrangement converges to{" "}
          <M>{"S"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"\\varepsilon > 0"}</M>. Choose <M>{"N"}</M> with <M>{"\\sum_{k > N} |a_k| < \\varepsilon/2"}</M>, so also{" "}
          <M>{"|s_N - S| < \\varepsilon/2"}</M>. Since <M>{"\\sigma"}</M> is a bijection, there is <M>{"K"}</M> such that{" "}
          <M>{"\\sigma(1), \\ldots, \\sigma(K)"}</M> include all of <M>{"1, \\ldots, N"}</M>. For <M>{"m \\ge K"}</M>, the
          rearranged partial sum <M>{"t_m"}</M> contains <M>{"a_1, \\ldots, a_N"}</M> and some other terms, all with index
          above <M>{"N"}</M>, so
        </p>
        <MD>{"|t_m - S| \\le |t_m - s_N| + |s_N - S| \\le \\sum_{k > N} |a_k| + \\frac{\\varepsilon}{2} < \\varepsilon."}</MD>
      </Proof>

      <Theorem title="Riemann's rearrangement theorem">
        <p>
          If <M>{"\\sum a_k"}</M> converges conditionally, then for every real number <M>{"T"}</M> there is a rearrangement
          converging to <M>{"T"}</M>, and there are rearrangements diverging to <M>{"+\\infty"}</M> and to{" "}
          <M>{"-\\infty"}</M>.
        </p>
      </Theorem>

      <Example title="the idea of the proof">
        <p>
          In a conditionally convergent series, the positive terms alone sum to <M>{"+\\infty"}</M> and the negative terms
          alone to <M>{"-\\infty"}</M>: if either were finite, the series would converge absolutely. Yet the terms tend to 0.
          So take positive terms until the sum passes <M>{"T"}</M>, then negative terms until it falls below, and repeat. Each
          crossing overshoots by at most the last term used, which tends to 0, so the sums close in on <M>{"T"}</M>.
        </p>
      </Example>

      <Remark title="why it matters">
        <p>
          Absolute convergence is what licenses the algebra we want to do with series: reordering, regrouping, and the
          multiplication of the next lesson. It also matters for double series, where summing by rows or by columns is a kind
          of rearrangement. Fourier series and many series in physics converge only conditionally, so the order of
          summation there is part of the definition.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "abs",
      rung: "check",
      prompt: <p>Which of these series converge absolutely? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Σ (−1)ᵏ/k", "Σ (−1)ᵏ/k²", "Σ (−1)ᵏ/2ᵏ", "Σ (−1)ᵏ/√k"],
        correct: [1, 2],
      },
    },
    {
      key: "same",
      rung: "check",
      prompt: (
        <p>
          The series <M>{"1 - \\tfrac14 + \\tfrac19 - \\tfrac1{16} + \\cdots"}</M> sums to <M>{"\\pi^2/12"}</M>. To three
          decimal places, what does any rearrangement sum to?
        </p>
      ),
      answer: { kind: "numeric", value: 0.822, tolerance: 0.001 },
    },
    {
      key: "half",
      rung: "apply",
      prompt: (
        <p>
          Taking two positive terms of <M>{"1 - \\tfrac12 + \\tfrac13 - \\cdots"}</M> for each negative one gives{" "}
          <M>{"\\tfrac32 \\ln 2"}</M>. To three decimal places, what is that?
        </p>
      ),
      answer: { kind: "numeric", value: 1.04, tolerance: 0.001 },
    },
    {
      key: "both",
      rung: "apply",
      prompt: <p>Why must the positive terms of a conditionally convergent series have an infinite sum?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because there are infinitely many of them.",
          "Because if both the positive and the negative parts had finite sums, the series would converge absolutely; and if only one were finite, the series would diverge.",
          "Because the terms are large.",
          "Because of the ratio test.",
        ],
        correct: [1],
      },
    },
    {
      key: "steps",
      rung: "apply",
      prompt: (
        <p>
          In Riemann&rsquo;s construction aimed at <M>{"T = 1"}</M>, using <M>{"1 - \\tfrac12 + \\tfrac13 - \\cdots"}</M>, how
          many positive terms are taken first, before the sum passes 1?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Explain why, in Riemann&rsquo;s construction, the rearranged partial sums converge to <M>{"T"}</M>. A short
          argument is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes each phase can always pass T because the positive and negative parts each diverge.",
          "Notes after each crossing the distance from T is at most the size of the last term used.",
          "Uses that the terms tend to 0, so these distances tend to 0 and the sums converge to T.",
        ],
      },
    },
    {
      key: "infty",
      rung: "stretch",
      prompt: (
        <p>
          Describe a rearrangement of <M>{"1 - \\tfrac12 + \\tfrac13 - \\cdots"}</M> whose partial sums tend to{" "}
          <M>{"+\\infty"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes enough positive terms to pass 1, then one negative term, then enough to pass 2, then one negative term, and so on.",
          "Notes this is possible because the positive terms diverge, and every term is eventually used.",
          "Notes the single negative terms are small, so the sums stay above n − 1 after passing n.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between absolute and conditional convergence, why absolutely convergent series can be rearranged freely, and how Riemann rearranges a conditionally convergent series to reach any target.",

  glimpse: (
    <p>
      The next lesson multiplies two series, and absolute convergence is again the condition that makes the answer right.
      Power series converge absolutely inside their radius, which is why they can be manipulated so freely, and the
      convergence of Fourier series, much later, depends delicately on the order of summation.
    </p>
  ),
};
