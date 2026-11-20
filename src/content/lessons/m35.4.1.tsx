import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ZetaRealLineViz } from "@/components/viz/ZetaRealLineViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.4.1",
  minutes: 90,
  links: {
    revisits: ["m35.1.2", "m13.7.2", "m13.7.1"],
    foreshadows: ["m35.4.2", "m35.4.3", "m28.4.2"],
  },

  puzzle: (
    <>
      <p>
        You may have seen the claim that 1 + 2 + 3 + ⋯ = −1/12. The series obviously diverges. Yet −1/12 is the value at
        s = −1 of a perfectly good function that equals Σ n to the power −s wherever that series converges. How can a
        function have a value where its defining formula makes no sense, and why is that value forced?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose s, and compare the value of ζ(s) with the partial sums of the series.</p>
      <ZetaRealLineViz />
    </>
  ),

  theory: (
    <>
      <Definition title="analytic continuation">
        <p>
          If f is holomorphic on an open set U and F is holomorphic on a connected open set V containing U with F = f on U,
          then F is an <strong>analytic continuation</strong> of f. By the identity theorem it is unique: two holomorphic
          functions on a connected set that agree on a non-empty open subset agree everywhere.
        </p>
      </Definition>

      <Theorem title="ζ is meromorphic on ℂ">
        <p>
          ζ(s) extends to a meromorphic function on the whole plane whose only pole is a simple pole at s = 1 with residue
          1.
        </p>
      </Theorem>

      <Remark title="three ways past Re s = 1">
        <p>
          The alternating series <M>{"\\eta(s) = \\sum (-1)^{n+1} n^{-s}"}</M> converges for Re s &gt; 0, and{" "}
          <M>{"\\zeta(s) = \\eta(s)/(1 - 2^{1-s})"}</M> there. Partial summation gives{" "}
          <M>{"\\zeta(s) = \\frac{s}{s-1} - s\\int_1^\\infty \\{x\\} x^{-s-1}\\,dx"}</M>, also valid for Re s &gt; 0. And
          Euler–Maclaurin summation with p correction terms reaches Re s &gt; 1 − 2p, so letting p grow covers the plane.
          The visualisation uses the third method.
        </p>
      </Remark>

      <Example title="values at negative integers">
        <p>
          <M>{"\\zeta(0) = -\\tfrac12"}</M>, <M>{"\\zeta(-1) = -\\tfrac1{12}"}</M>, and in general{" "}
          <M>{"\\zeta(-n) = (-1)^n B_{n+1}/(n+1)"}</M> in terms of Bernoulli numbers. Since the odd Bernoulli numbers
          beyond the first vanish, <M>{"\\zeta(-2k) = 0"}</M> for k ≥ 1: these are the trivial zeros.
        </p>
      </Example>

      <Remark title="what −1/12 means">
        <p>
          The identity &lsquo;1 + 2 + 3 + ⋯ = −1/12&rsquo; is shorthand for ζ(−1) = −1/12. It is not a sum in any ordinary
          sense, but the continuation is unique, so any reasonable way of assigning a value to the divergent series through
          ζ gives the same number. Physicists use this zeta regularisation, for instance in computing the Casimir force.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "unique",
      rung: "check",
      prompt: <p>Which theorem makes the analytic continuation of ζ unique?</p>,
      answer: { kind: "choice", options: ["The identity theorem", "Liouville’s theorem", "Rouché’s theorem", "The residue theorem"], correct: [0] },
    },
    {
      key: "pole",
      rung: "check",
      prompt: <p>Where is the only pole of the continued ζ?</p>,
      answer: { kind: "choice", options: ["At s = 1", "At s = 0", "At every negative even integer", "On the line Re s = ½"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set s = −1. What is ζ(−1), to three decimal places?</p>,
      answer: { kind: "numeric", value: -0.083, tolerance: 0.001 },
    },
    {
      key: "eta",
      rung: "apply",
      prompt: <p>Use η(s) = (1 − 2 to the power 1 − s) ζ(s) and ζ(2) = π²/6 to compute η(2), to three decimal places.</p>,
      answer: { kind: "numeric", value: 0.822, tolerance: 0.001 },
    },
    {
      key: "m3",
      rung: "apply",
      prompt: <p>Given B₄ = −1/30, what is ζ(−3)?</p>,
      answer: { kind: "choice", options: ["1/120", "−1/120", "0", "−1/12"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that ζ(s) = s/(s − 1) − s ∫ from 1 to ∞ of {"{x}"} x to the power −s−1 dx for Re s &gt; 1, where {"{x}"} is the fractional part of x.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes Σ n to the power −s as s ∫ from 1 to ∞ of ⌊x⌋ x to the power −s−1 dx, by partial summation or by splitting the integral at the integers.",
          "Substitutes ⌊x⌋ = x − {x} and evaluates s ∫ from 1 to ∞ of x to the power −s dx = s/(s − 1).",
          "Concludes the identity, and may note that the remaining integral converges for Re s > 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>In what sense, if any, is it true that 1 + 2 + 3 + ⋯ = −1/12?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the series diverges in the ordinary sense.",
          "Explains that −1/12 is the value at −1 of the unique continuation of Σ n to the power −s.",
          "Comments on when such regularised values are meaningful. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The continuation to the left of Re s = 0 is not arbitrary: it mirrors the function to the right. Riemann found the
        mirror by way of a theta function.
      </p>
      <p>Next, the functional equation.</p>
    </>
  ),
};
