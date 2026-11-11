import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RearrangeViz } from "@/components/viz/RearrangeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.9.3",
  minutes: 85,
  links: {
    revisits: ["m2.9.1", "m2.8.1"],
    foreshadows: ["m6.3.2", "m6.3.3"],
  },

  puzzle: (
    <>
      <p>
        Addition does not care about order: 1 + 2 + 3 is 3 + 2 + 1. Now take{" "}
        <M>{"1 - \\tfrac{1}{2} + \\tfrac{1}{3} - \\tfrac{1}{4} + \\cdots"}</M>, whose sum is ln 2, and write the same terms in
        a different order: one positive, then two negatives.
      </p>
      <MD>{"\\left(1 - \\tfrac{1}{2}\\right) - \\tfrac{1}{4} + \\left(\\tfrac{1}{3} - \\tfrac{1}{6}\\right) - \\tfrac{1}{8} + \\left(\\tfrac{1}{5} - \\tfrac{1}{10}\\right) - \\cdots = \\tfrac{1}{2} - \\tfrac{1}{4} + \\tfrac{1}{6} - \\tfrac{1}{8} + \\cdots = \\tfrac{1}{2}\\ln 2."}</MD>
      <p>Every term is used once. Yet the sum has halved. What has gone wrong?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        An infinite sum is a limit, and limits can depend on order. The alternating harmonic series converges only because
        its positive and negative parts, each infinite on its own, cancel in a delicate balance. Reorder them and you change
        the balance. Bernhard Riemann showed that by reordering you can reach any sum at all. Choose a target below.
      </p>
      <RearrangeViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the alternating series test">
        <p>
          If <M>{"b_n"}</M> decreases to 0, then <M>{"\\sum (-1)^{n+1} b_n = b_1 - b_2 + b_3 - \\cdots"}</M> converges, and
          the sum lies between any two consecutive partial sums. In particular, the error after N terms is at most{" "}
          <M>{"b_{N+1}"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          The even partial sums <M>{"S_2, S_4, \\ldots"}</M> increase, since each adds <M>{"b_{2k-1} - b_{2k} \\ge 0"}</M>,
          and they are bounded above by <M>{"S_1 = b_1"}</M>. So they converge, to S say. The odd partial sums differ from
          them by <M>{"b_{2k+1} \\to 0"}</M>, so they converge to S too.
        </p>
      </Proof>

      <Definition title="absolute and conditional convergence">
        <p>
          <M>{"\\sum a_n"}</M> converges <strong>absolutely</strong> if <M>{"\\sum |a_n|"}</M> converges. It converges{" "}
          <strong>conditionally</strong> if it converges but not absolutely.
        </p>
      </Definition>

      <Theorem title="absolute convergence implies convergence">
        <p>If <M>{"\\sum |a_n|"}</M> converges, so does <M>{"\\sum a_n"}</M>.</p>
      </Theorem>
      <Proof>
        <p>
          <M>{"0 \\le a_n + |a_n| \\le 2|a_n|"}</M>, so <M>{"\\sum (a_n + |a_n|)"}</M> converges by comparison. Subtract the
          convergent series <M>{"\\sum |a_n|"}</M>.
        </p>
      </Proof>

      <Example title="three kinds of behaviour">
        <ul>
          <li><M>{"\\sum (-1)^{n+1}/n^2"}</M> converges absolutely.</li>
          <li><M>{"\\sum (-1)^{n+1}/n"}</M> converges conditionally, to ln 2.</li>
          <li><M>{"\\sum (-1)^{n+1}"}</M> diverges: its terms do not tend to 0.</li>
        </ul>
      </Example>

      <Theorem title="rearrangements">
        <ul>
          <li>If <M>{"\\sum a_n"}</M> converges absolutely, every rearrangement converges to the same sum.</li>
          <li>
            If it converges conditionally, then for every real T some rearrangement converges to T, and some rearrangement
            diverges (Riemann).
          </li>
        </ul>
      </Theorem>
      <p>
        For the second part: the positive terms alone add up to infinity, and so do the negative ones, for otherwise the
        series would converge absolutely. So take positive terms until the total exceeds T, then negative terms until it
        falls below, and repeat, exactly as the visualisation does. Since the terms tend to 0, the overshoots shrink to 0,
        and the partial sums close in on T.
      </p>

      <Remark title="why the puzzle went wrong">
        <p>
          Nothing went wrong except the assumption that order does not matter. That assumption holds for finite sums, and for
          absolutely convergent series, but not for conditionally convergent ones. Absolute convergence is what makes an
          infinite sum behave like a finite one, which is why analysts value it so highly.
        </p>
      </Remark>

      <Example title="estimating ln 2">
        <p>
          By the error bound in the alternating series test, stopping the series for ln 2 after 999 terms leaves an error
          of at most <M>{"1/1000"}</M>. That is correct but slow: conditionally convergent series are usually poor ways to
          compute.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these series converge absolutely? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Σ (−1)ⁿ/n²", "Σ (−1)ⁿ/n", "Σ (−1)ⁿ/2ⁿ", "Σ (−1)ⁿ/√n"],
        correct: [0, 2],
      },
    },
    {
      key: "cond",
      rung: "check",
      prompt: <p>Σ (−1)ⁿ/√n converges, but Σ 1/√n diverges. So Σ (−1)ⁿ/√n converges&hellip;</p>,
      answer: { kind: "choice", options: ["conditionally", "absolutely", "to 0", "only after rearrangement"], correct: [0] },
    },
    {
      key: "error",
      rung: "apply",
      prompt: (
        <p>
          By the alternating series test, at most how large is the error if <M>{"1 - \\tfrac{1}{2} + \\tfrac{1}{3} - \\cdots"}</M>{" "}
          is stopped after 9 terms? (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.1 },
    },
    {
      key: "terms",
      rung: "apply",
      prompt: (
        <p>
          How many terms of <M>{"\\sum (-1)^{n+1}/n^2"}</M> guarantee an error less than 0.0001 by the alternating series
          bound? (Give the smallest number.)
        </p>
      ),
      answer: { kind: "numeric", value: 100 },
    },
    {
      key: "rearr",
      rung: "apply",
      prompt: <p>Which of these series can be rearranged to have sum 7? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Σ (−1)ⁿ⁺¹/n", "Σ (−1)ⁿ⁺¹/n²", "Σ (−1)ⁿ⁺¹/√n", "Σ 1/2ⁿ"],
        correct: [0, 2],
      },
    },
    {
      key: "abs",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"\\sum \\frac{\\sin n}{n^2}"}</M> converges. Is the convergence absolute?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Bounds |sin n / n²| by 1/n².",
          "Uses comparison to show Σ |sin n / n²| converges.",
          "Concludes absolute convergence, and hence convergence.",
        ],
      },
    },
    {
      key: "half",
      rung: "stretch",
      prompt: (
        <p>
          Explain the puzzle&rsquo;s calculation carefully: show that the partial sums of the rearranged series, taken
          three terms at a time, are exactly half the partial sums of the original series taken 2k terms at a time, and
          deduce that the rearrangement sums to <M>{"\\tfrac{1}{2}\\ln 2"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Groups the rearranged series as (1/(2k − 1) − 1/(4k − 2)) − 1/(4k) = 1/(4k − 2) − 1/(4k).",
          "Notes that this is half of 1/(2k − 1) − 1/(2k), so the 3k-th partial sum is half of S_2k.",
          "Notes that the partial sums in between differ by terms tending to 0, so the whole sequence of partial sums tends to (1/2) ln 2.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between absolute and conditional convergence, and why rearranging a conditionally convergent series can change its sum.",

  glimpse: (
    <p>
      Real Analysis I proves Riemann&rsquo;s rearrangement theorem in full, and studies when two series can be multiplied
      term by term: the Cauchy product works when at least one series converges absolutely. Power series, the subject of
      the next lesson, converge absolutely inside their interval, which is why they can be manipulated so freely.
    </p>
  ),
};
