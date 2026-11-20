import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ShiftCountViz } from "@/components/viz/ShiftCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.1.3",
  minutes: 90,
  links: {
    revisits: ["m36.1.2", "m12.1.4", "m12.1.1"],
    foreshadows: ["m36.1.4", "m36.2.3", "m36.2.4"],
  },

  puzzle: (
    <>
      <p>
        A telegraph line may send dots and dashes in any order, except that two dashes may never be sent in a row. How
        many messages of length 20 are possible? How fast does the number grow with the length, and what does the growth
        rate measure?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a set of rules for sequences, and count the words and the periodic points.</p>
      <ShiftCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the full shift">
        <p>
          Let <M>{"\\Sigma_m^+"}</M> be the set of sequences <M>{"x = (x_0, x_1, x_2, \\dots)"}</M> with entries in{" "}
          {"{0, …, m − 1}"}. Put <M>{"d(x, y) = 2^{-n}"}</M>, where n is the first index at which x and y differ. Two
          sequences are close when they agree on a long initial block. The <strong>shift</strong>{" "}
          <M>{"\\sigma(x)_i = x_{i+1}"}</M> deletes the first entry.
        </p>
      </Definition>

      <Theorem title="basic properties">
        <p>
          <M>{"\\Sigma_m^+"}</M> is compact, totally disconnected and has no isolated points: it is a Cantor set. The
          shift is continuous, indeed <M>{"d(\\sigma x, \\sigma y) \\le 2 d(x, y)"}</M>. It has{" "}
          <M>{"m^n"}</M> points of period dividing n, its periodic points are dense, and it has a dense orbit. The doubling
          map is the image of <M>{"\\Sigma_2^+"}</M> under binary expansion.
        </p>
      </Theorem>

      <Definition title="shifts of finite type">
        <p>
          Given an m × m matrix A of 0s and 1s, the <strong>shift of finite type</strong>{" "}
          <M>{"\\Sigma_A"}</M> is the set of sequences with <M>{"A_{x_i x_{i+1}} = 1"}</M> for every i: symbol j may follow
          symbol i only if <M>{"A_{ij} = 1"}</M>. It is closed and invariant under σ.
        </p>
      </Definition>

      <Theorem title="counting">
        <p>
          The number of allowed words of length n is the sum of the entries of <M>{"A^{n-1}"}</M>, and the number of
          points with <M>{"\\sigma^n x = x"}</M> is <M>{"\\operatorname{tr} A^n"}</M>. Both grow like{" "}
          <M>{"\\lambda^n"}</M>, where λ is the largest eigenvalue of A. The <strong>topological entropy</strong> of{" "}
          <M>{"\\Sigma_A"}</M> is log λ.
        </p>
      </Theorem>

      <Example title="the golden mean shift">
        <p>
          With <M>{"A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}"}</M>, no two 1s occur in a row. The word
          counts 2, 3, 5, 8, … are Fibonacci numbers, the periodic point counts <M>{"\\operatorname{tr} A^n"}</M> are the
          Lucas numbers 1, 3, 4, 7, 11, …, and the entropy is <M>{"\\log \\varphi \\approx 0.481"}</M> with φ the golden
          ratio.
        </p>
      </Example>

      <Remark title="symbolic dynamics">
        <p>
          Many smooth systems can be coded by shifts: divide the space into pieces, and record which piece each point of
          an orbit visits. Questions about the smooth system then become questions about sequences.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sigma",
      rung: "check",
      prompt: <p>What does the shift map do to a sequence?</p>,
      answer: { kind: "choice", options: ["Deletes the first entry and moves the rest one place left", "Reverses it", "Adds 1 to each entry", "Appends a 0"], correct: [0] },
    },
    {
      key: "close",
      rung: "check",
      prompt: <p>When are two sequences close in the metric d(x, y) = 2⁻ⁿ?</p>,
      answer: { kind: "choice", options: ["When they agree on a long initial block", "When they differ in few places overall", "When their sums are close", "When they have the same last entry"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many allowed words of length 6 does the golden mean shift have?</p>,
      answer: { kind: "numeric", value: 21, tolerance: 0 },
    },
    {
      key: "per",
      rung: "apply",
      prompt: <p>How many points of the golden mean shift satisfy σ⁶x = x?</p>,
      answer: { kind: "numeric", value: 18, tolerance: 0 },
    },
    {
      key: "ent",
      rung: "apply",
      prompt: <p>What is the topological entropy of the golden mean shift, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.481, tolerance: 0.002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the shift satisfies d(σx, σy) ≤ 2d(x, y), so it is continuous.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets n be the first index where x and y differ, so d(x, y) = 2⁻ⁿ.",
          "Notes that if n ≥ 1, σx and σy first differ at index n − 1, so d(σx, σy) = 2 × 2⁻ⁿ; if n = 0 the bound holds since d ≤ 1.",
          "Concludes the inequality and hence continuity.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the number of points of the shift of finite type with σⁿx = x is the trace of Aⁿ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that such a point is determined by a word of length n that can be repeated, a closed path of length n in the graph.",
          "Uses that the (i, i) entry of Aⁿ counts paths of length n from i back to i.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Shifts are models of chaos. The simplest smooth family that passes from perfect order to chaos is a single
        quadratic map, depending on one parameter.
      </p>
      <p>Next, the logistic family.</p>
    </>
  ),
};
