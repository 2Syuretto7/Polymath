import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { BumpPartitionViz } from "@/components/viz/BumpPartitionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.5.3",
  minutes: 85,
  links: {
    revisits: ["m12.5.2", "m12.1.4", "m5.4.3"],
    foreshadows: ["m12.6.3", "m26.1.1", "m26.6.1"],
  },

  puzzle: (
    <>
      <p>
        A cartographer can draw each region of the Earth accurately on its own chart, but how do you combine the charts into
        one consistent calculation, such as the total rainfall over a continent, when the charts overlap? You need a way to
        share out each point among the charts that cover it.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        See the smooth functions that share out [0, 1] among overlapping intervals, then use them to glue local straight lines
        into one smooth curve.
      </p>
      <BumpPartitionViz />
    </>
  ),

  theory: (
    <>
      <Example title="smooth bump functions">
        <p>
          The function <M>{"h(t) = e^{-1/t}"}</M> for <M>{"t > 0"}</M> and <M>{"h(t) = 0"}</M> for <M>{"t \\le 0"}</M> is{" "}
          <M>{"C^\\infty"}</M>, though all its derivatives vanish at 0. Then <M>{"h(t - a) \\, h(b - t)"}</M> is smooth, positive
          on <M>{"(a, b)"}</M> and zero outside. Products of these in each coordinate give smooth bumps on boxes in{" "}
          <M>{"\\mathbb{R}^n"}</M>.
        </p>
      </Example>

      <Definition title="partition of unity">
        <p>
          Let <M>{"K \\subseteq \\mathbb{R}^n"}</M> be compact and <M>{"U_1, \\dots, U_k"}</M> open sets covering it. A{" "}
          <strong>partition of unity subordinate to the cover</strong> is a family of smooth functions{" "}
          <M>{"\\varphi_1, \\dots, \\varphi_k \\ge 0"}</M> with each <M>{"\\varphi_i"}</M> zero outside a compact subset of{" "}
          <M>{"U_i"}</M>, and
        </p>
        <MD>{"\\sum_{i=1}^k \\varphi_i(x) = 1 \\quad \\text{for all } x \\in K."}</MD>
      </Definition>

      <Theorem title="existence">
        <p>Every open cover of a compact set in ℝⁿ has a subordinate smooth partition of unity.</p>
      </Theorem>

      <Proof>
        <p>
          For each <M>{"x \\in K"}</M> choose a small open box around <M>{"x"}</M> whose closure lies in some{" "}
          <M>{"U_i"}</M>, and a smooth bump positive on that box. By compactness finitely many boxes cover <M>{"K"}</M>; let{" "}
          <M>{"\\psi_i"}</M> be the sum of the bumps assigned to <M>{"U_i"}</M>. Then <M>{"\\psi = \\sum \\psi_i > 0"}</M> on{" "}
          <M>{"K"}</M>, hence on an open set <M>{"W \\supseteq K"}</M>. Multiply by a smooth function that is 1 on{" "}
          <M>{"K"}</M> and vanishes where <M>{"\\psi"}</M> is small, and divide: <M>{"\\varphi_i = \\psi_i / \\psi"}</M> on{" "}
          <M>{"K"}</M>.
        </p>
      </Proof>

      <Remark title="what they are for">
        <p>
          To integrate over a region covered by charts, write <M>{"\\int f = \\sum_i \\int \\varphi_i f"}</M> and compute each
          piece in its own chart, using change of variables. The same trick builds Riemannian metrics on manifolds, proves that
          smooth functions can approximate continuous ones, and makes the general Stokes theorem reduce to the case of a single
          box.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sum",
      rung: "check",
      prompt: <p>In a partition of unity, what do the functions φᵢ add up to on K?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "bump",
      rung: "check",
      prompt: <p>Why is h(t) = e^(−1/t) for t &gt; 0, and 0 otherwise, useful?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is smooth yet vanishes identically for t ≤ 0, so it can switch on gently.",
          "It is a polynomial.",
          "It is discontinuous at 0.",
          "It is periodic.",
        ],
        correct: [0],
      },
    },
    {
      key: "poly",
      rung: "apply",
      prompt: <p>Why can a non-zero polynomial not serve as a bump function on ℝ?</p>,
      answer: {
        kind: "choice",
        options: [
          "A polynomial that vanishes on an interval vanishes everywhere.",
          "Polynomials are not smooth.",
          "Polynomials are bounded.",
          "Polynomials are always positive.",
        ],
        correct: [0],
      },
    },
    {
      key: "glue",
      rung: "apply",
      prompt: <p>Two local functions f₁ = 2 and f₂ = 6 are glued by φ₁ + φ₂ = 1. At a point where φ₁ = 0.25 and φ₂ = 0.75, what is φ₁f₁ + φ₂f₂?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0.001 },
    },
    {
      key: "int",
      rung: "apply",
      prompt: <p>How do partitions of unity help to integrate over a region covered by several charts?</p>,
      answer: {
        kind: "choice",
        options: [
          "Write ∫f = Σ ∫φᵢf, and compute each term in its own chart.",
          "They make every function constant.",
          "They remove the need for charts.",
          "They make the region convex.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that h(t) = e^(−1/t) for t &gt; 0 and 0 for t ≤ 0 has derivative 0 at t = 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the difference quotient (h(t) − h(0))/t.",
          "Shows e^(−1/t)/t → 0 as t → 0⁺, for example by substituting s = 1/t.",
          "Notes the left-hand quotient is 0, so h′(0) = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use a partition of unity to argue that if f is smooth near each point of a compact set, there is one smooth function on ℝⁿ agreeing with f near the set.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Covers the set by finitely many open sets on which smooth local versions fᵢ exist.",
          "Forms Σ φᵢfᵢ and notes it is smooth and agrees with f where the φᵢ sum to 1.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to build a smooth bump function, what a partition of unity subordinate to a cover is, why one exists for compact sets, and how it lets local calculations be glued together.",

  glimpse: (
    <p>
      The final unit of the course introduces differential forms and the general Stokes theorem, whose proof uses partitions
      of unity. On manifolds they are used constantly to pass from local to global.
    </p>
  ),
};
