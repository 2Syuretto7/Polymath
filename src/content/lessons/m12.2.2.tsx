import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DeltaMapViz } from "@/components/viz/DeltaMapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.2.2",
  minutes: 80,
  links: {
    revisits: ["m12.2.1", "m12.1.4", "m6.5.2"],
    foreshadows: ["m12.2.3", "m12.3.1", "m23.1.1"],
  },

  puzzle: (
    <>
      <p>
        A tailor promises: tell me how accurate the sleeve must be, and I will tell you how carefully to cut. For some
        garments one answer works for the whole cloth. For others, the closer you get to one edge, the more carefully you must
        cut, without limit. What makes the difference?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        For each point x, the curve shows the largest δ that keeps f within ε. Look at whether the curve dips down to 0.
      </p>
      <DeltaMapViz />
    </>
  ),

  theory: (
    <>
      <Definition title="uniform continuity">
        <p>
          <M>{"f : X \\to Y"}</M> is <strong>uniformly continuous</strong> if for every <M>{"\\varepsilon > 0"}</M> there is{" "}
          <M>{"\\delta > 0"}</M> such that for all <M>{"x, y \\in X"}</M>,
        </p>
        <MD>{"d_X(x, y) < \\delta \\implies d_Y(f(x), f(y)) < \\varepsilon."}</MD>
        <p>
          In plain continuity, <M>{"\\delta"}</M> may depend on the point; here one <M>{"\\delta"}</M> serves every point.
        </p>
      </Definition>

      <Theorem title="Heine–Cantor">
        <p>A continuous function on a compact metric space is uniformly continuous.</p>
      </Theorem>

      <Proof>
        <p>
          Suppose not. Then for some <M>{"\\varepsilon > 0"}</M> and every <M>{"n"}</M> there are <M>{"x_n, y_n"}</M> with{" "}
          <M>{"d(x_n, y_n) < 1/n"}</M> but <M>{"d(f(x_n), f(y_n)) \\ge \\varepsilon"}</M>. By compactness a subsequence{" "}
          <M>{"x_{n_k} \\to x"}</M>, and then <M>{"y_{n_k} \\to x"}</M> too. Continuity at <M>{"x"}</M> gives{" "}
          <M>{"f(x_{n_k}) \\to f(x)"}</M> and <M>{"f(y_{n_k}) \\to f(x)"}</M>, so their distance tends to 0, a contradiction.
        </p>
      </Proof>

      <Example title="examples">
        <p>
          <M>{"1/x"}</M> on <M>{"(0, 1]"}</M> is continuous but not uniformly continuous: the points <M>{"1/n"}</M> and{" "}
          <M>{"1/(n+1)"}</M> get arbitrarily close while their images differ by 1. <M>{"x^2"}</M> on <M>{"\\mathbb{R}"}</M> also
          fails, since <M>{"(n + 1/n)^2 - n^2 > 2"}</M>. Every <strong>Lipschitz</strong> function, with{" "}
          <M>{"d(f(x), f(y)) \\le L \\, d(x, y)"}</M>, is uniformly continuous with <M>{"\\delta = \\varepsilon / L"}</M>.
          The function <M>{"\\sqrt x"}</M> on <M>{"[0, 1]"}</M> is uniformly continuous but not Lipschitz.
        </p>
      </Example>

      <Remark title="what it buys">
        <p>
          Uniformly continuous functions send Cauchy sequences to Cauchy sequences, so they extend uniquely to the completion
          of their domain. This is how <M>{"x \\mapsto 2^x"}</M>, defined first on the rationals, extends to all reals. Uniform
          continuity is also what makes Riemann integrals of continuous functions exist.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "diff",
      rung: "check",
      prompt: <p>What is the difference between continuity and uniform continuity?</p>,
      answer: {
        kind: "choice",
        options: [
          "In uniform continuity, a single δ works at every point for a given ε.",
          "Uniform continuity needs no ε.",
          "Uniform continuity is weaker.",
          "There is no difference.",
        ],
        correct: [0],
      },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which function is uniformly continuous on its domain?</p>,
      answer: { kind: "choice", options: ["1/x on (0, 1]", "x² on ℝ", "sin x on ℝ", "sin(1/x) on (0, 1]"], correct: [2] },
    },
    {
      key: "lip",
      rung: "apply",
      prompt: <p>f(x) = 3x + 1. For ε = 0.6, what is the largest δ that works everywhere?</p>,
      answer: { kind: "numeric", value: 0.2, tolerance: 0.001 },
    },
    {
      key: "sqrt",
      rung: "apply",
      prompt: <p>Using |√x − √y| ≤ √|x − y|, what δ works for √x on [0, ∞) with ε = 0.1?</p>,
      answer: { kind: "numeric", value: 0.01, tolerance: 0.0001 },
    },
    {
      key: "cauchy",
      rung: "apply",
      prompt: <p>Why can 1/x on (0, 1] not extend continuously to [0, 1]?</p>,
      answer: {
        kind: "choice",
        options: [
          "It sends the Cauchy sequence 1/n to the unbounded sequence n, which is not Cauchy.",
          "Because 0 is not rational.",
          "Because it is decreasing.",
          "It can.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that x² is not uniformly continuous on ℝ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes ε = 1 and any δ > 0.",
          "Chooses x large and y = x + δ/2, with y² − x² = xδ + δ²/4 ≥ 1 for large x.",
          "Concludes no δ works.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is every uniformly continuous function on ℝ bounded by some A|x| + B? Why might it be?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes δ for ε = 1 and walks from 0 to x in steps of size δ/2.",
          "Concludes |f(x)| ≤ |f(0)| + 2|x|/δ + 1, so the growth is at most linear.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between continuity and uniform continuity, with 1/x and √x as examples, why continuous functions on compact spaces are uniformly continuous, and what Lipschitz functions are.",

  glimpse: (
    <p>
      The next lesson studies Lipschitz maps with constant less than 1, contractions, which always have a unique fixed point.
      Later, uniform convergence and uniform continuity combine in spaces of functions.
    </p>
  ),
};
