import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ContractionViz } from "@/components/viz/ContractionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.2.3",
  minutes: 85,
  links: {
    revisits: ["m12.1.3", "m10.2.1", "m12.2.2"],
    foreshadows: ["m12.4.2", "m19.2.2", "m15.4.5"],
  },

  puzzle: (
    <>
      <p>
        Type any number into a calculator in radian mode and press cos again and again. Whatever you start with, the display
        settles on 0.739085… Why does it always reach the same number, and how fast?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a map and a starting point. The cobweb shows the iteration, and the table shows how fast the error shrinks.
      </p>
      <ContractionViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the contraction mapping theorem (Banach)">
        <p>
          Let <M>{"(X, d)"}</M> be a non-empty complete metric space and <M>{"T : X \\to X"}</M> a{" "}
          <strong>contraction</strong>: <M>{"d(Tx, Ty) \\le k \\, d(x, y)"}</M> for some <M>{"k < 1"}</M>. Then{" "}
          <M>{"T"}</M> has exactly one fixed point <M>{"x^*"}</M>, and for any <M>{"x_0"}</M> the iterates{" "}
          <M>{"x_{n+1} = Tx_n"}</M> converge to it, with
        </p>
        <MD>{"d(x_n, x^*) \\le \\frac{k^n}{1 - k} \\, d(x_1, x_0)."}</MD>
      </Theorem>

      <Proof>
        <p>
          By induction <M>{"d(x_{n+1}, x_n) \\le k^n d(x_1, x_0)"}</M>. For <M>{"m > n"}</M>, the triangle inequality and the
          geometric series give
        </p>
        <MD>{"d(x_m, x_n) \\le (k^n + \\dots + k^{m-1}) \\, d(x_1, x_0) \\le \\frac{k^n}{1 - k} \\, d(x_1, x_0),"}</MD>
        <p>
          so <M>{"(x_n)"}</M> is Cauchy and converges to some <M>{"x^*"}</M> by completeness. A contraction is continuous,
          so <M>{"Tx^* = \\lim Tx_n = \\lim x_{n+1} = x^*"}</M>. Letting <M>{"m \\to \\infty"}</M> gives the error bound. If{" "}
          <M>{"Ty = y"}</M> too, then <M>{"d(x^*, y) = d(Tx^*, Ty) \\le k \\, d(x^*, y)"}</M>, forcing{" "}
          <M>{"d(x^*, y) = 0"}</M>.
        </p>
      </Proof>

      <Example title="cos on [0, 1]">
        <p>
          <M>{"\\cos"}</M> maps <M>{"[0, 1]"}</M> into <M>{"[\\cos 1, 1] \\subseteq [0, 1]"}</M>, a closed subset of{" "}
          <M>{"\\mathbb{R}"}</M> and so complete. By the mean value theorem{" "}
          <M>{"|\\cos x - \\cos y| \\le \\sin 1 \\cdot |x - y|"}</M>, and <M>{"\\sin 1 \\approx 0.84"}</M>. So the
          calculator&rsquo;s iteration converges to the unique solution of <M>{"\\cos x = x"}</M>, the Dottie number{" "}
          <M>{"0.739085\\ldots"}</M>.
        </p>
      </Example>

      <Remark title="where it is used">
        <p>
          Picard iteration proves existence and uniqueness for <M>{"y' = f(t, y)"}</M> by showing that the integral operator{" "}
          <M>{"(Ty)(t) = y_0 + \\int_{t_0}^t f(s, y(s)) \\, ds"}</M> is a contraction on a space of continuous functions with
          the sup metric. The theorem also proves the inverse function theorem, and it underlies Newton&rsquo;s method near a
          simple root. Both hypotheses matter: <M>{"x \\mapsto x + 1/x"}</M> on <M>{"[1, \\infty)"}</M> shrinks distances but
          not by a fixed <M>{"k < 1"}</M>, and has no fixed point.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lin",
      rung: "check",
      prompt: <p>What is the fixed point of T(x) = (x + 2)/3?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "hyp",
      rung: "check",
      prompt: <p>Which hypotheses does the contraction mapping theorem need?</p>,
      answer: {
        kind: "choice",
        options: [
          "A complete space and a map with d(Tx, Ty) ≤ k d(x, y) for a fixed k < 1.",
          "A compact space and a continuous map.",
          "Any space and any continuous map.",
          "A bounded space and an increasing map.",
        ],
        correct: [0],
      },
    },
    {
      key: "k",
      rung: "apply",
      prompt: <p>What is the best contraction constant k for T(x) = x/2 + 1/x on [1, 2]? Use the largest value of |T′(x)| = |1/2 − 1/x²|.</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "steps",
      rung: "apply",
      prompt: <p>With k = 1/2 and d(x₁, x₀) = 1, what is the smallest n for which the bound kⁿ/(1 − k) is below 0.001?</p>,
      answer: { kind: "numeric", value: 11, tolerance: 0 },
    },
    {
      key: "nofix",
      rung: "apply",
      prompt: <p>T(x) = x + 1/x on [1, ∞) satisfies |Tx − Ty| &lt; |x − y| for x ≠ y but has no fixed point. Why does the theorem not apply?</p>,
      answer: {
        kind: "choice",
        options: [
          "[1, ∞) is not complete.",
          "There is no single k < 1 with |Tx − Ty| ≤ k|x − y| for all x, y.",
          "T is not continuous.",
          "T does not map [1, ∞) into itself.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a contraction has at most one fixed point.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes Tx = x and Ty = y.",
          "Writes d(x, y) = d(Tx, Ty) ≤ k d(x, y).",
          "Concludes (1 − k) d(x, y) ≤ 0, so x = y.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Lay a map of Mumbai on the floor somewhere in Mumbai. Why is there exactly one point on the map lying directly above the place it represents?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Models the map as a function from the city to itself that shrinks distances by the map's scale.",
          "Applies the contraction mapping theorem to get a unique fixed point.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the contraction mapping theorem, why the iterates form a Cauchy sequence, why the fixed point is unique, and why pressing cos repeatedly on a calculator always gives 0.739085.",

  glimpse: (
    <p>
      Later the theorem proves the inverse and implicit function theorems, and it explains why Newton&rsquo;s method converges
      near a root. Topology has fixed point theorems, such as Brouwer&rsquo;s, that need no contraction at all.
    </p>
  ),
};
