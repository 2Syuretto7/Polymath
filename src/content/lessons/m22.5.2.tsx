import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { TypewriterViz } from "@/components/viz/TypewriterViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.5.2",
  minutes: 90,
  links: {
    revisits: ["m22.5.1", "m22.2.3", "m12.1.3"],
    foreshadows: ["m22.5.3", "m23.2.1", "m27.2.1"],
  },

  puzzle: (
    <>
      <p>
        The rationals have holes: Cauchy sequences of rationals can converge to √2, which is not rational. The Riemann
        integrable functions have holes too, under the integral distance. Did Lebesgue&rsquo;s integral fill them? And if
        functions converge in this distance, must they converge at points?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Follow a sequence of ever-shorter indicators sweeping across [0, 1].</p>
      <TypewriterViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Riesz-Fischer theorem">
        <p>
          For <M>{"1 \\le p \\le \\infty"}</M>, <M>{"L^p(\\mu)"}</M> is complete: every Cauchy sequence converges in{" "}
          <M>{"\\|\\cdot\\|_p"}</M>. So <M>{"L^p"}</M> is a Banach space, and <M>{"L^2"}</M>, with{" "}
          <M>{"\\langle f, g \\rangle = \\int f \\bar g \\, d\\mu"}</M>, is a Hilbert space.
        </p>
      </Theorem>

      <Example title="the proof for p < ∞">
        <p>
          Given a Cauchy sequence, pick <M>{"n_1 < n_2 < \\cdots"}</M> with{" "}
          <M>{"\\|f_{n_{k+1}} - f_{n_k}\\|_p < 2^{-k}"}</M>. Let{" "}
          <M>{"g = |f_{n_1}| + \\sum_k |f_{n_{k+1}} - f_{n_k}|"}</M>. By Minkowski and monotone convergence,
        </p>
        <MD>{"\\|g\\|_p \\le \\|f_{n_1}\\|_p + \\sum_k 2^{-k} < \\infty,"}</MD>
        <p>
          so <M>g</M> is finite almost everywhere, and the telescoping series converges there to some <M>f</M>. Fatou&rsquo;s
          lemma then gives <M>{"\\|f_n - f\\|_p \\le \\liminf_k \\|f_n - f_{n_k}\\|_p"}</M>, which is small for large{" "}
          <M>n</M>.
        </p>
      </Example>

      <Theorem title="a subsequence converges almost everywhere">
        <p>
          The proof shows more: if <M>{"f_n \\to f"}</M> in <M>{"L^p"}</M>, some subsequence converges to <M>f</M> almost
          everywhere. The whole sequence need not: the typewriter sequence tends to 0 in <M>{"L^1"}</M> but converges at no
          point.
        </p>
      </Theorem>

      <Remark title="dense subspaces">
        <p>
          For <M>{"p < \\infty"}</M>, simple functions are dense in <M>{"L^p"}</M>, and on <M>{"\\mathbb{R}^n"}</M> so are
          continuous functions of compact support. So <M>{"L^p(\\mathbb{R}^n)"}</M> is the completion of the continuous
          functions under <M>{"\\|\\cdot\\|_p"}</M>, just as ℝ is the completion of ℚ. The Riemann integrable functions are
          not complete: this, more than any single example, is why analysis moved to Lebesgue&rsquo;s integral.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rf",
      rung: "check",
      prompt: <p>What does the Riesz-Fischer theorem state?</p>,
      answer: { kind: "choice", options: ["Lᵖ is complete for 1 ≤ p ≤ ∞", "Lᵖ is finite-dimensional", "Every Lᵖ function is continuous", "Lᵖ convergence implies pointwise convergence"], correct: [0] },
    },
    {
      key: "sub",
      rung: "check",
      prompt: <p>If fₙ → f in Lᵖ, what can be said about convergence at points?</p>,
      answer: { kind: "choice", options: ["Some subsequence converges to f almost everywhere", "The whole sequence converges everywhere", "The whole sequence converges almost everywhere", "Nothing at all"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is ‖f₅‖₁?</p>,
      answer: { kind: "numeric", value: 0.25 },
    },
    {
      key: "where",
      rung: "apply",
      prompt: <p>At how many points of [0, 1] does the typewriter sequence converge?</p>,
      answer: { kind: "choice", options: ["None", "Only at 0", "Almost every point", "Every point"], correct: [0] },
    },
    {
      key: "hilbert",
      rung: "apply",
      prompt: <p>What extra structure makes L² a Hilbert space rather than only a Banach space?</p>,
      answer: { kind: "choice", options: ["An inner product inducing its norm", "A partial order", "A multiplication", "A topology"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Let (fₙ) be Cauchy in Lᵖ, and suppose a subsequence gₖ of it converges to f almost everywhere. Show that ‖fₙ − f‖ₚ → 0, using Fatou&rsquo;s lemma.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies Fatou to |fₙ − gₖ|ᵖ as k → ∞, which tends to |fₙ − f|ᵖ almost everywhere.",
          "Gets ‖fₙ − f‖ₚᵖ ≤ lim inf over k of ‖fₙ − gₖ‖ₚᵖ.",
          "Uses the Cauchy property to make the right side less than εᵖ for large n.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the continuous functions on [0, 1], with the L¹ norm, are not complete.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives continuous functions approximating a step, for example ramps rising from 0 to 1 near 1/2 over shorter and shorter intervals.",
          "Shows they are Cauchy in L¹ but their L¹ limit is the step, which has no continuous representative.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Every g in the conjugate space defines a linear functional on Lᵖ, by integrating against it. Are there any others?
      </p>
      <p>
        Next, duality: the dual of <M>{"L^p"}</M> is <M>{"L^q"}</M> for <M>{"1 \\le p < \\infty"}</M> on σ-finite spaces, proved with
        the Radon-Nikodym theorem, and the surprise that the dual of <M>{"L^\\infty"}</M> is larger than <M>{"L^1"}</M>.
      </p>
    </>
  ),
};
