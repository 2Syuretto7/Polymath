import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { HahnExtendViz } from "@/components/viz/HahnExtendViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.3.1",
  minutes: 90,
  links: {
    revisits: ["m23.2.2", "m23.1.3", "m22.5.3"],
    foreshadows: ["m23.3.2", "m23.4.1", "m23.4.2"],
  },

  puzzle: (
    <>
      <p>
        You know a linear functional on one line in a normed space, and it has norm 1 there. Can you extend it to the whole
        space, still linear, still of norm 1? In a Hilbert space you can project onto the line first. In a general Banach
        space, with no inner product, is it possible at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Extend f(t, 0) = t from the x-axis to the plane with the 1-norm, and watch the norm of the extension.</p>
      <HahnExtendViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Hahn-Banach, analytic form">
        <p>
          Let <M>X</M> be a real vector space and <M>p</M> sublinear:{" "}
          <M>{"p(x + y) \\le p(x) + p(y)"}</M> and <M>{"p(tx) = t\\,p(x)"}</M> for <M>{"t \\ge 0"}</M>. If <M>f</M> is linear
          on a subspace <M>M</M> with <M>{"f \\le p"}</M> there, then <M>f</M> extends to a linear <M>F</M> on <M>X</M> with{" "}
          <M>{"F \\le p"}</M>.
        </p>
      </Theorem>

      <Example title="the proof">
        <p>
          First extend by one dimension, to <M>{"M + \\mathbb{R}z"}</M>: setting <M>{"F(m + tz) = f(m) + tc"}</M>, the
          condition <M>{"F \\le p"}</M> asks for <M>c</M> with
        </p>
        <MD>{"\\sup_{m \\in M} \\big( f(m) - p(m - z) \\big) \\le c \\le \\inf_{m \\in M} \\big( p(m + z) - f(m) \\big),"}</MD>
        <p>
          and sublinearity shows the supremum is at most the infimum. Then Zorn&rsquo;s lemma, applied to all dominated
          extensions ordered by extension, gives one defined everywhere.
        </p>
      </Example>

      <Theorem title="consequences for normed spaces">
        <p>
          With <M>{"p = \\|f\\|\\,\\|\\cdot\\|"}</M>: every bounded functional on a subspace extends with the same norm. For
          each <M>{"x \\ne 0"}</M> there is <M>{"\\varphi \\in X^*"}</M> with <M>{"\\|\\varphi\\| = 1"}</M> and{" "}
          <M>{"\\varphi(x) = \\|x\\|"}</M>. Hence <M>{"X^*"}</M> separates points,{" "}
          <M>{"\\|x\\| = \\sup_{\\|\\varphi\\| \\le 1} |\\varphi(x)|"}</M>, and the canonical map{" "}
          <M>{"X \\to X^{**}"}</M> is an isometry.
        </p>
      </Theorem>

      <Remark title="geometry and choice">
        <p>
          The geometric form separates convex sets: a closed convex set and a point outside it lie on opposite sides of a
          closed hyperplane. Extensions are usually not unique, as the visualisation shows. The theorem needs some form of the
          axiom of choice in general, though for separable spaces induction suffices.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the Hahn-Banach theorem give for a bounded functional on a subspace of a normed space?</p>,
      answer: { kind: "choice", options: ["An extension to the whole space with the same norm", "A unique extension", "An extension with twice the norm", "A representing vector"], correct: [0] },
    },
    {
      key: "zorn",
      rung: "check",
      prompt: <p>Which tool turns the one-dimensional extension step into an extension to the whole space?</p>,
      answer: { kind: "choice", options: ["Zorn’s lemma", "The Baire category theorem", "Fubini's theorem", "The projection theorem"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the norm of the extension with c = 0.5?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "many",
      rung: "apply",
      prompt: <p>In the visualisation, how many norm-preserving extensions are there?</p>,
      answer: { kind: "choice", options: ["Infinitely many, one for each c in [−1, 1]", "Exactly one", "Exactly two", "None"], correct: [0] },
    },
    {
      key: "sep",
      rung: "apply",
      prompt: <p>Which consequence shows the dual of a normed space is never too small?</p>,
      answer: { kind: "choice", options: ["For each x ≠ 0 some φ of norm 1 has φ(x) = ‖x‖", "Every functional is bounded", "The dual is a Hilbert space", "The dual equals the space"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Assuming for each x ≠ 0 there is φ with ‖φ‖ = 1 and φ(x) = ‖x‖, prove that ‖x‖ is the supremum of |φ(x)| over ‖φ‖ ≤ 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes |φ(x)| ≤ ‖φ‖‖x‖ ≤ ‖x‖ for every φ with ‖φ‖ ≤ 1, so the supremum is at most ‖x‖.",
          "Uses the given φ to show the value ‖x‖ is attained.",
          "Handles x = 0 separately, or notes it is trivial.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>In a Hilbert space, give a norm-preserving extension of a bounded functional f on a closed subspace M without Zorn&rsquo;s lemma.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines F = f ∘ P, where P is the orthogonal projection onto M.",
          "Checks F extends f and ‖F‖ ≤ ‖f‖‖P‖ = ‖f‖.",
          "Any reasonable answer earns full credit, such as one via the Riesz representing vector in M.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Hahn-Banach is the first of four great theorems of functional analysis. The next three all rest on the Baire
        category theorem and on completeness.
      </p>
      <p>
        Next, the uniform boundedness principle: a family of operators bounded at each point is bounded uniformly, and its
        striking consequence, a continuous function whose Fourier series diverges at a point.
      </p>
    </>
  ),
};
