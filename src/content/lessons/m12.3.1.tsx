import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SupDistanceViz } from "@/components/viz/SupDistanceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.3.1",
  minutes: 85,
  links: {
    revisits: ["m6.8.1", "m12.1.3", "m12.2.2"],
    foreshadows: ["m12.3.2", "m12.3.3", "m23.1.1"],
  },

  puzzle: (
    <>
      <p>
        Two functions agree everywhere except on a tiny spike. Are they close? Measured by area, yes; measured by the largest
        gap, no. Which distance makes the continuous functions into a well-behaved space of their own?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the spike and compare the two distances.</p>
      <SupDistanceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the sup norm">
        <p>
          For a compact metric space <M>{"X"}</M>, let <M>{"C(X)"}</M> be the continuous real functions on <M>{"X"}</M>, with
        </p>
        <MD>{"\\|f\\|_\\infty = \\sup_{x \\in X} |f(x)|, \\qquad d_\\infty(f, g) = \\|f - g\\|_\\infty."}</MD>
        <p>
          The supremum is finite and attained, since <M>{"|f|"}</M> is continuous on a compact space. Convergence in{" "}
          <M>{"d_\\infty"}</M> is exactly uniform convergence.
        </p>
      </Definition>

      <Theorem title="C(X) is complete">
        <p><M>{"(C(X), d_\\infty)"}</M> is a complete metric space.</p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"(f_n)"}</M> be Cauchy. For each <M>{"x"}</M>, <M>{"|f_m(x) - f_n(x)| \\le d_\\infty(f_m, f_n)"}</M>, so{" "}
          <M>{"(f_n(x))"}</M> is Cauchy in <M>{"\\mathbb{R}"}</M> and has a limit <M>{"f(x)"}</M>. Given{" "}
          <M>{"\\varepsilon"}</M>, choose <M>{"N"}</M> with <M>{"d_\\infty(f_m, f_n) < \\varepsilon"}</M> for{" "}
          <M>{"m, n \\ge N"}</M>; letting <M>{"m \\to \\infty"}</M> gives <M>{"|f(x) - f_n(x)| \\le \\varepsilon"}</M> for all{" "}
          <M>{"x"}</M>, so <M>{"f_n \\to f"}</M> uniformly. A uniform limit of continuous functions is continuous, by the
          ε/3 argument: <M>{"|f(x) - f(y)| \\le |f(x) - f_N(x)| + |f_N(x) - f_N(y)| + |f_N(y) - f(y)|"}</M>. So{" "}
          <M>{"f \\in C(X)"}</M>.
        </p>
      </Proof>

      <Example title="other distances">
        <p>
          <M>{"d_1(f, g) = \\int_0^1 |f - g|"}</M> is also a metric on <M>{"C[0, 1]"}</M>, but not complete: continuous
          functions rising ever more steeply from 0 to 1 near <M>{"x = 1/2"}</M> are Cauchy in <M>{"d_1"}</M>, and their limit
          would be a step function, which is not continuous. Completing gives the space <M>{"L^1"}</M> of measure theory.
        </p>
      </Example>

      <Remark title="a space of points that are functions">
        <p>
          <M>{"C(X)"}</M> is a vector space with a complete norm, a <strong>Banach space</strong>. Its closed unit ball is
          not compact, as the tents of an earlier lesson show. The Arzelà–Ascoli theorem says exactly which sets in{" "}
          <M>{"C(X)"}</M> have compact closure: the bounded and equicontinuous ones.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "norm",
      rung: "check",
      prompt: <p>What is ‖x² − x‖∞ on [0, 1]?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "meaning",
      rung: "check",
      prompt: <p>Convergence in the sup metric is the same as which kind of convergence?</p>,
      answer: { kind: "choice", options: ["Pointwise", "Uniform", "In area", "Monotone"], correct: [1] },
    },
    {
      key: "dist",
      rung: "apply",
      prompt: <p>What is d∞(sin x, cos x) on [0, 2π]? Give it to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 1.414, tolerance: 0.002 },
    },
    {
      key: "xn",
      rung: "apply",
      prompt: <p>Why is (xⁿ) not Cauchy in C[0, 1] with the sup metric?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because sup |xⁿ − x²ⁿ| = 1/4 for every n, so terms stay apart.",
          "Because xⁿ is not continuous.",
          "Because it converges to 0 everywhere.",
          "It is Cauchy.",
        ],
        correct: [0],
      },
    },
    {
      key: "l1",
      rung: "apply",
      prompt: <p>A tent of height 1 and base width 0.02 sits above the zero function. What is the d₁ distance between them?</p>,
      answer: { kind: "numeric", value: 0.01, tolerance: 0.0001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that ‖f + g‖∞ ≤ ‖f‖∞ + ‖g‖∞.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Bounds |f(x) + g(x)| ≤ |f(x)| + |g(x)| ≤ ‖f‖∞ + ‖g‖∞ for each x.",
          "Takes the supremum over x.",
          "Concludes the triangle inequality.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the set of polynomials closed in C[0, 1]? What does the next lesson suggest?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the Taylor polynomials of eˣ converge uniformly to a non-polynomial.",
          "Suggests that the closure of the polynomials is much bigger, perhaps everything.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the sup norm on C(X), why convergence in it is uniform convergence, why C(X) is complete, and why the area distance d₁ is not complete.",

  glimpse: (
    <p>
      The next lesson shows that polynomials are dense in C[a, b], and much more. Then the Baire category theorem uses
      completeness to show that most continuous functions are nowhere differentiable.
    </p>
  ),
};
