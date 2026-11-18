import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { ConvergenceTrapViz } from "@/components/viz/ConvergenceTrapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.2.3",
  minutes: 90,
  links: {
    revisits: ["m22.2.2", "m6.8.2", "m6.2.2"],
    foreshadows: ["m22.2.4", "m22.3.2", "m22.5.2"],
  },

  puzzle: (
    <>
      <p>
        A block of height 1 and width 1 slides off to the right along the number line, one step at a time. At every fixed
        point, the block eventually passes and never returns, so the functions tend to 0 everywhere. Yet the area under each
        is 1. When may we swap a limit with an integral, and what exactly goes wrong here?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Watch four sequences of functions, and compare the limit of the integrals with the integral of the limit.</p>
      <ConvergenceTrapViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="monotone convergence theorem">
        <p>
          If <M>{"0 \\le f_1 \\le f_2 \\le \\cdots"}</M> are measurable and <M>{"f_n \\to f"}</M> pointwise, then
        </p>
        <MD>{"\\int f \\, d\\mu = \\lim_{n \\to \\infty} \\int f_n \\, d\\mu,"}</MD>
        <p>where both sides may be <M>{"\\infty"}</M>. No integrability is assumed.</p>
      </Theorem>

      <Example title="the proof in outline">
        <p>
          The integrals <M>{"\\int f_n"}</M> increase to some limit <M>L</M>, and <M>{"L \\le \\int f"}</M> by monotonicity.
          For the reverse, take a simple <M>{"0 \\le \\varphi \\le f"}</M> and <M>{"0 < c < 1"}</M>. The sets{" "}
          <M>{"E_n = \\{f_n \\ge c\\varphi\\}"}</M> increase to the whole space, so continuity of measure from below gives{" "}
          <M>{"\\int f_n \\ge c \\int_{E_n} \\varphi \\to c \\int \\varphi"}</M>. Letting <M>{"c \\to 1"}</M> and taking the
          supremum over <M>{"\\varphi"}</M> gives <M>{"L \\ge \\int f"}</M>.
        </p>
      </Example>

      <Theorem title="dominated convergence theorem">
        <p>
          If <M>{"f_n \\to f"}</M> pointwise almost everywhere and there is an integrable <M>g</M> with{" "}
          <M>{"|f_n| \\le g"}</M> for every <M>n</M>, then <M>f</M> is integrable and
        </p>
        <MD>{"\\lim_{n \\to \\infty} \\int |f_n - f| \\, d\\mu = 0, \\quad \\text{so} \\quad \\int f_n \\, d\\mu \\to \\int f \\, d\\mu."}</MD>
      </Theorem>

      <Remark title="the two ways to fail">
        <p>
          The sliding block <M>{"\\mathbf{1}_{[n, n+1]}"}</M> lets mass escape to infinity, and the spikes{" "}
          <M>{"n \\mathbf{1}_{(0, 1/n)}"}</M> let mass pile up on a shrinking set. In both, the integrals stay at 1 while the
          limit has integral 0, and in both the smallest function above every <M>{"f_n"}</M> has infinite integral. Compare
          the Riemann theory, which needed uniform convergence on a bounded interval: here pointwise convergence and one
          integrable bound suffice.
        </p>
      </Remark>

      <Definition title="series of non-negative functions">
        <p>
          Applied to partial sums, monotone convergence gives{" "}
          <M>{"\\int \\sum_k f_k = \\sum_k \\int f_k"}</M> for any measurable <M>{"f_k \\ge 0"}</M>. Term-by-term integration
          of non-negative series is always allowed.
        </p>
      </Definition>
    </>
  ),

  practice: [
    {
      key: "mct",
      rung: "check",
      prompt: <p>What does the monotone convergence theorem require of the functions?</p>,
      answer: { kind: "choice", options: ["Non-negative, measurable and increasing pointwise", "Bounded by an integrable function", "Uniformly convergent", "Continuous on a closed interval"], correct: [0] },
    },
    {
      key: "dct",
      rung: "check",
      prompt: <p>What extra hypothesis does the dominated convergence theorem add to pointwise convergence?</p>,
      answer: { kind: "choice", options: ["A single integrable function bounding every |fₙ|", "That the fₙ increase", "That the fₙ are continuous", "That the domain has finite measure"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s escaping example, what is the integral of each fₙ?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "power",
      rung: "apply",
      prompt: <p>Using dominated convergence, find the limit of the integral of xⁿ over [0, 1] as n → ∞.</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "spike",
      rung: "apply",
      prompt: <p>Why does dominated convergence not apply to the spikes n on (0, 1/n)?</p>,
      answer: { kind: "choice", options: ["Any function above all of them is at least about 1/(2x) near 0, which is not integrable", "They do not converge pointwise", "They are not measurable", "Their integrals are infinite"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that for measurable fₖ ≥ 0, the integral of the sum of the fₖ equals the sum of their integrals.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers the partial sums, which are non-negative, measurable and increase pointwise to the full sum.",
          "Uses linearity for finite sums, so the integral of each partial sum is the corresponding partial sum of integrals.",
          "Applies the monotone convergence theorem to pass to the limit.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The functions (1/n) on [0, n] converge to 0 uniformly on [0, ∞). Do their integrals converge to 0? What does this say about uniform convergence?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes each integral as 1, so the integrals do not tend to 0.",
          "Notes that uniform convergence alone does not control integrals on a set of infinite measure, and no integrable function dominates them.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Without monotonicity or a dominating function, can anything be said at all? Mass can vanish in the limit, as the
        examples showed, but it can never appear from nowhere.
      </p>
      <p>
        Next, Fatou&rsquo;s lemma: the integral of the lim inf is at most the lim inf of the integrals, for any non-negative
        functions. It follows from monotone convergence, and in turn it yields dominated convergence.
      </p>
    </>
  ),
};
