import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { OpenImageViz } from "@/components/viz/OpenImageViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.3.3",
  minutes: 90,
  links: {
    revisits: ["m23.3.2", "m12.3.3", "m23.1.3"],
    foreshadows: ["m23.3.4", "m23.5.1", "m23.5.4"],
  },

  puzzle: (
    <>
      <p>
        A bounded linear map between Banach spaces is a bijection. Its inverse is certainly linear. Must the inverse be
        bounded too, so that solutions depend continuously on the data? In finite dimensions every linear map is bounded, so
        the question is empty. In infinite dimensions, what could go wrong, and what stops it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Squash the unit disc with T(x, y) = (x, sy), and look for a disc about 0 inside its image.</p>
      <OpenImageViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the open mapping theorem">
        <p>
          If <M>X</M> and <M>Y</M> are Banach spaces and <M>{"T \\in B(X, Y)"}</M> is surjective, then <M>T</M> is open: it
          maps open sets to open sets. Equivalently, there is <M>{"\\delta > 0"}</M> with{" "}
          <M>{"T(B_X(0, 1)) \\supseteq B_Y(0, \\delta)"}</M>.
        </p>
      </Theorem>

      <Example title="the proof in two steps">
        <p>
          <strong>Baire.</strong> Since <M>T</M> is onto, <M>{"Y = \\bigcup_n \\overline{T(B(0, n))}"}</M>. As <M>Y</M> is
          complete, one of these closed sets has interior, and by symmetry and convexity{" "}
          <M>{"\\overline{T(B(0, 1))}"}</M> contains some ball <M>{"B(0, 2\\delta)"}</M>.
        </p>
        <p>
          <strong>Removing the closure.</strong> Given <M>y</M> with <M>{"\\|y\\| < \\delta"}</M>, pick{" "}
          <M>{"x_1"}</M> with <M>{"\\|x_1\\| < \\tfrac12"}</M> and <M>{"\\|y - Tx_1\\| < \\delta/2"}</M>, then{" "}
          <M>{"x_2"}</M> with <M>{"\\|x_2\\| < \\tfrac14"}</M> and <M>{"\\|y - Tx_1 - Tx_2\\| < \\delta/4"}</M>, and so on.
          Completeness of <M>X</M> makes <M>{"x = \\sum x_k"}</M> converge, with <M>{"\\|x\\| < 1"}</M> and{" "}
          <M>{"Tx = y"}</M>.
        </p>
      </Example>

      <Theorem title="the bounded inverse theorem">
        <p>
          A bounded linear bijection between Banach spaces has a bounded inverse. In particular, if a vector space is complete
          under two norms with <M>{"\\|x\\|_1 \\le C \\|x\\|_2"}</M>, then the norms are equivalent:
        </p>
        <MD>{"c\\,\\|x\\|_2 \\le \\|x\\|_1 \\le C\\,\\|x\\|_2."}</MD>
      </Theorem>

      <Remark title="where it fails">
        <p>
          The diagonal operator <M>{"D(x_n) = (x_n / n)"}</M> on <M>{"\\ell^2"}</M> is bounded and injective, with dense
          range, but <M>{"D e_n = e_n / n"}</M> shows its inverse on the range is unbounded. No contradiction: <M>D</M> is
          not onto, and its range is not complete. Ill-posed problems in applied mathematics, such as undoing blurring, live
          exactly here.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the open mapping theorem say about a bounded linear surjection between Banach spaces?</p>,
      answer: { kind: "choice", options: ["It maps open sets to open sets", "It is an isometry", "It is compact", "It is injective"], correct: [0] },
    },
    {
      key: "inverse",
      rung: "check",
      prompt: <p>Which corollary follows for a bounded linear bijection between Banach spaces?</p>,
      answer: { kind: "choice", options: ["Its inverse is bounded", "Its inverse is compact", "It has norm 1", "It is self-adjoint"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with s = 0.4, what is the radius of the largest disc about 0 inside the image of the unit disc?</p>,
      answer: { kind: "numeric", value: 0.4 },
    },
    {
      key: "diag",
      rung: "apply",
      prompt: <p>For D(xₙ) = (xₙ/n) on ℓ², what is ‖D⁻¹(e₁₀/10)‖, where e₁₀/10 has norm 0.1?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "norms",
      rung: "apply",
      prompt: <p>A space is complete under two norms, and ‖x‖₁ ≤ 3‖x‖₂ for all x. What follows?</p>,
      answer: { kind: "choice", options: ["The norms are equivalent", "The norms are equal", "Nothing", "The space is finite-dimensional"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Deduce the bounded inverse theorem from the open mapping theorem.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the inverse S of the bijection T is linear.",
          "Uses openness: T(B(0, 1)) contains B(0, δ), so ‖y‖ < δ implies ‖Sy‖ < 1.",
          "Rescales to get ‖Sy‖ ≤ ‖y‖/δ, so S is bounded; or notes that preimages of open sets under S are images under T, hence open.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the bounded inverse theorem to show that the sup norm and the 1-norm on C[0, 1] are not both complete.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the 1-norm (the integral of |f|) is at most the sup norm.",
          "Argues that if both were complete, the norms would be equivalent by the theorem.",
          "Gives functions, such as tall narrow tents, with 1-norm tending to 0 but sup norm 1, a contradiction. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        To check that a linear map is bounded, one normally estimates ‖Tx‖. The open mapping theorem offers a surprising
        shortcut: look only at its graph.
      </p>
      <p>
        Next, the closed graph theorem: a linear map between Banach spaces is bounded as soon as its graph is closed, the
        Hellinger-Toeplitz theorem that follows, and why differentiation escapes it.
      </p>
    </>
  ),
};
