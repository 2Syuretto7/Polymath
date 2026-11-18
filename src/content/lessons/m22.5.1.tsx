import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { LpBallViz } from "@/components/viz/LpBallViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.5.1",
  minutes: 90,
  links: {
    revisits: ["m22.2.2", "m8.3.1", "m22.2.4"],
    foreshadows: ["m22.5.2", "m22.5.3", "m23.1.1"],
  },

  puzzle: (
    <>
      <p>
        The Cauchy-Schwarz inequality bounds a sum of products by the product of two square roots of sums of squares. Squares
        are special: they come from an inner product. Is there a version for cubes, or for any power, and what would replace
        the second square root?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Vary p and compare both sides of Hölder&rsquo;s inequality, and the shape of the unit ball.</p>
      <LpBallViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Lᵖ spaces">
        <p>For <M>{"1 \\le p < \\infty"}</M>, let</p>
        <MD>{"\\|f\\|_p = \\Big( \\int |f|^p \\, d\\mu \\Big)^{1/p},"}</MD>
        <p>
          and <M>{"\\|f\\|_\\infty"}</M> the essential supremum, the least <M>C</M> with <M>{"|f| \\le C"}</M> almost
          everywhere. <M>{"L^p(\\mu)"}</M> consists of measurable <M>f</M> with <M>{"\\|f\\|_p < \\infty"}</M>, with functions
          equal almost everywhere identified. Exponents <M>p</M> and <M>q</M> are <strong>conjugate</strong> if{" "}
          <M>{"\\frac1p + \\frac1q = 1"}</M>.
        </p>
      </Definition>

      <Theorem title="Hölder's inequality">
        <MD>{"\\int |fg| \\, d\\mu \\le \\|f\\|_p \\, \\|g\\|_q \\qquad \\text{for conjugate } p, q \\in [1, \\infty]."}</MD>
        <p>
          For <M>{"p = q = 2"}</M> this is Cauchy-Schwarz. The proof starts from <strong>Young&rsquo;s inequality</strong>{" "}
          <M>{"ab \\le \\frac{a^p}{p} + \\frac{b^q}{q}"}</M>, a consequence of the concavity of log: normalise so that{" "}
          <M>{"\\|f\\|_p = \\|g\\|_q = 1"}</M>, apply Young pointwise, and integrate.
        </p>
      </Theorem>

      <Theorem title="Minkowski's inequality">
        <MD>{"\\|f + g\\|_p \\le \\|f\\|_p + \\|g\\|_p \\qquad (1 \\le p \\le \\infty)."}</MD>
        <p>
          Write <M>{"|f + g|^p \\le |f| \\, |f + g|^{p-1} + |g| \\, |f + g|^{p-1}"}</M> and apply Hölder to each term. So{" "}
          <M>{"\\|\\cdot\\|_p"}</M> is a norm on <M>{"L^p"}</M>.
        </p>
      </Theorem>

      <Remark title="p below 1, and inclusions">
        <p>
          For <M>{"p < 1"}</M> the triangle inequality fails: the &lsquo;unit ball&rsquo; is not convex. On a finite measure
          space, Hölder gives <M>{"L^q \\subseteq L^p"}</M> when <M>{"p < q"}</M>; for sequences, with counting measure, the
          inclusion runs the other way, <M>{"\\ell^p \\subseteq \\ell^q"}</M>.
        </p>
      </Remark>

      <Example title="a quick use">
        <p>
          On <M>{"[0, 1]"}</M>, Hölder with <M>{"g = 1"}</M> gives <M>{"\\|f\\|_1 \\le \\|f\\|_2"}</M>: the mean of{" "}
          <M>{"|f|"}</M> is at most its root mean square.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "holder",
      rung: "check",
      prompt: <p>What does Hölder&rsquo;s inequality bound?</p>,
      answer: { kind: "choice", options: ["The integral of |fg| by ‖f‖ₚ times ‖g‖ with the conjugate exponent", "‖f + g‖ by ‖f‖ + ‖g‖", "‖f‖ₚ by ‖f‖₁", "The measure of the set where f is large"], correct: [0] },
    },
    {
      key: "mink",
      rung: "check",
      prompt: <p>What does Minkowski&rsquo;s inequality show about ‖·‖ₚ?</p>,
      answer: { kind: "choice", options: ["It satisfies the triangle inequality, so it is a norm for p ≥ 1", "It is an inner product", "It is always finite", "It is the same for all p"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the conjugate exponent q when p = 2?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "conj",
      rung: "apply",
      prompt: <p>What is the conjugate exponent of p = 3?</p>,
      answer: { kind: "numeric", value: 1.5 },
    },
    {
      key: "norm",
      rung: "apply",
      prompt: <p>With counting measure, what is ‖(3, 4)‖₂?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Hölder&rsquo;s inequality for 1 &lt; p &lt; ∞ from Young&rsquo;s inequality.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Disposes of the case where either norm is 0 or infinite, then normalises ‖f‖ₚ and the q-norm of g to 1.",
          "Applies Young pointwise: |f||g| is at most |f|ᵖ/p plus |g| to the power q, over q.",
          "Integrates to get at most 1/p + 1/q = 1, and rescales.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that Minkowski&rsquo;s inequality fails for p = 1/2, using two vectors in ℝ².</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes, for example, (1, 0) and (0, 1), each with ‘norm’ 1.",
          "Computes the ‘norm’ of (1, 1) as (1 + 1)² = 4, which exceeds 1 + 1 = 2.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A norm makes Lᵖ a metric space. The great virtue of the Lebesgue integral is that this space has no holes: every
        Cauchy sequence converges.
      </p>
      <p>
        Next, the Riesz-Fischer theorem: completeness of Lᵖ, the fast-Cauchy subsequence at the heart of its proof, why Lᵖ
        convergence gives almost everywhere convergence only along a subsequence, and L² as a Hilbert space.
      </p>
    </>
  ),
};
