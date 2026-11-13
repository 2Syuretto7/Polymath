import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PathLimitViz } from "@/components/viz/PathLimitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.2.1",
  minutes: 85,
  links: {
    revisits: ["m6.5.2", "m12.1.2", "m12.1.4"],
    foreshadows: ["m12.2.2", "m12.2.3", "m12.3.1"],
  },

  puzzle: (
    <>
      <p>
        A function on the plane approaches 0 as you walk to the origin along the x-axis, and along the y-axis, and along
        every straight line. Is it continuous at the origin? Surprisingly, not necessarily.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Approach the origin along different lines, or along a parabola, and compare the values the function approaches.</p>
      <PathLimitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="continuity">
        <p>
          A function <M>{"f : (X, d_X) \\to (Y, d_Y)"}</M> is <strong>continuous at</strong> <M>{"a"}</M> if for every{" "}
          <M>{"\\varepsilon > 0"}</M> there is <M>{"\\delta > 0"}</M> such that <M>{"d_X(x, a) < \\delta"}</M> implies{" "}
          <M>{"d_Y(f(x), f(a)) < \\varepsilon"}</M>. In terms of balls: <M>{"f(B(a, \\delta)) \\subseteq B(f(a), \\varepsilon)"}</M>.
        </p>
      </Definition>

      <Theorem title="three equivalent forms">
        <p>For <M>{"f : X \\to Y"}</M> between metric spaces, these are equivalent:</p>
        <p>(1) <M>{"f"}</M> is continuous at every point;</p>
        <p>(2) <M>{"x_n \\to x"}</M> implies <M>{"f(x_n) \\to f(x)"}</M>;</p>
        <p>(3) for every open <M>{"V \\subseteq Y"}</M>, the preimage <M>{"f^{-1}(V)"}</M> is open in <M>{"X"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          (1) ⇒ (3): if <M>{"a \\in f^{-1}(V)"}</M>, choose <M>{"\\varepsilon"}</M> with <M>{"B(f(a), \\varepsilon) \\subseteq V"}</M>,
          and then <M>{"\\delta"}</M> from continuity; <M>{"B(a, \\delta) \\subseteq f^{-1}(V)"}</M>. (3) ⇒ (1): take{" "}
          <M>{"V = B(f(a), \\varepsilon)"}</M>; its preimage is open and contains <M>{"a"}</M>, so contains some{" "}
          <M>{"B(a, \\delta)"}</M>. (1) ⇒ (2) is direct. For (2) ⇒ (1), if continuity fails at <M>{"a"}</M> for some{" "}
          <M>{"\\varepsilon"}</M>, pick <M>{"x_n"}</M> with <M>{"d(x_n, a) < 1/n"}</M> and{" "}
          <M>{"d(f(x_n), f(a)) \\ge \\varepsilon"}</M>, contradicting (2).
        </p>
      </Proof>

      <Example title="lines are not enough">
        <p>
          Let <M>{"f(x, y) = \\dfrac{x^2 y}{x^4 + y^2}"}</M> away from the origin and <M>{"f(0, 0) = 0"}</M>. Along{" "}
          <M>{"y = mx"}</M>, <M>{"f = \\dfrac{m x}{x^2 + m^2} \\to 0"}</M>. Along <M>{"y = x^2"}</M>,{" "}
          <M>{"f = \\tfrac12"}</M>. By form (2), with <M>{"(1/n, 1/n^2) \\to (0, 0)"}</M>, the function is not continuous.
        </p>
      </Example>

      <Theorem title="continuous images of compact sets">
        <p>
          If <M>{"f"}</M> is continuous and <M>{"K"}</M> is compact, then <M>{"f(K)"}</M> is compact. In particular a
          continuous real function on a compact space is bounded and attains its maximum and minimum.
        </p>
      </Theorem>

      <Remark title="topology">
        <p>
          Form (3) mentions only open sets, not distances. Two metrics with the same open sets, such as{" "}
          <M>{"d_1, d_2, d_\\infty"}</M> on <M>{"\\mathbb{R}^n"}</M>, give the same continuous functions. This is the starting
          point of topology, where open sets are taken as the basic notion.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "line",
      rung: "check",
      prompt: <p>Along the line y = x, what value does xy / (x² + y²) take away from the origin?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "preimage",
      rung: "check",
      prompt: <p>Which characterisation of continuity uses only open sets?</p>,
      answer: {
        kind: "choice",
        options: ["Preimages of open sets are open.", "Images of open sets are open.", "f is bounded.", "f is injective."],
        correct: [0],
      },
    },
    {
      key: "para",
      rung: "apply",
      prompt: <p>Along the parabola y = x², what value does x²y / (x⁴ + y²) take away from the origin?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "image",
      rung: "apply",
      prompt: <p>Which statement is true for continuous f : ℝ → ℝ?</p>,
      answer: {
        kind: "choice",
        options: [
          "The image of an open set is open.",
          "The image of a compact set is compact.",
          "The image of a closed set is closed.",
          "The preimage of a compact set is compact.",
        ],
        correct: [1],
      },
    },
    {
      key: "max",
      rung: "apply",
      prompt: <p>What is the maximum of f(x, y) = x + y on the closed unit disc? Give it to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 1.414, tolerance: 0.002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the composition of two continuous functions between metric spaces is continuous.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the open-set form, or the sequence form, of continuity.",
          "Notes that (g ∘ f)⁻¹(W) = f⁻¹(g⁻¹(W)), or that f(xₙ) → f(x) gives g(f(xₙ)) → g(f(x)).",
          "Concludes g ∘ f is continuous.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that every function from a space with the discrete metric is continuous. What about functions into it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes every subset of a discrete space is open, so every preimage is open.",
          "Observes that continuous maps from a connected space such as ℝ into a discrete space must be constant.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend continuity between metric spaces in ε–δ form, with sequences, and with open sets, why approaching along lines is not enough, and why continuous functions on compact sets attain their extremes.",

  glimpse: (
    <p>
      The next lesson asks when one δ works everywhere, which leads to uniform continuity. After that, the contraction mapping
      theorem finds fixed points of continuous maps.
    </p>
  ),
};
