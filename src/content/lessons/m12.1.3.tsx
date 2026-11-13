import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CompletionViz } from "@/components/viz/CompletionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.1.3",
  minutes: 85,
  links: {
    revisits: ["m6.2.4", "m2.1.3", "m12.1.2"],
    foreshadows: ["m12.3.1", "m23.1.1", "m22.5.2"],
  },

  puzzle: (
    <>
      <p>
        The decimals 1, 1.4, 1.41, 1.414, … are all rational and get closer and closer together. Inside the rationals they
        have nowhere to land. Which spaces have no such holes, and how can you tell from the inside?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a sequence and a space. Each sequence bunches up, but it converges only if the space contains its limit.
      </p>
      <CompletionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="convergence and Cauchy sequences">
        <p>
          A sequence <M>{"(x_n)"}</M> in <M>{"(X, d)"}</M> <strong>converges</strong> to <M>{"x \\in X"}</M> if{" "}
          <M>{"d(x_n, x) \\to 0"}</M>. It is <strong>Cauchy</strong> if for every <M>{"\\varepsilon > 0"}</M> there is{" "}
          <M>{"N"}</M> with <M>{"d(x_m, x_n) < \\varepsilon"}</M> for all <M>{"m, n \\ge N"}</M>. The space is{" "}
          <strong>complete</strong> if every Cauchy sequence converges in it.
        </p>
      </Definition>

      <Theorem title="convergent sequences are Cauchy">
        <p>Every convergent sequence is Cauchy, and limits in a metric space are unique.</p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"x_n \\to x"}</M>, choose <M>{"N"}</M> with <M>{"d(x_n, x) < \\varepsilon / 2"}</M> for{" "}
          <M>{"n \\ge N"}</M>. Then for <M>{"m, n \\ge N"}</M>,
        </p>
        <MD>{"d(x_m, x_n) \\le d(x_m, x) + d(x, x_n) < \\varepsilon."}</MD>
        <p>
          If also <M>{"x_n \\to y"}</M>, then <M>{"d(x, y) \\le d(x, x_n) + d(x_n, y) \\to 0"}</M>, so <M>{"x = y"}</M>.
        </p>
      </Proof>

      <Example title="complete and incomplete spaces">
        <p>
          <M>{"\\mathbb{R}"}</M> is complete, by the completeness axiom, and so is <M>{"\\mathbb{R}^n"}</M>, since a sequence
          is Cauchy exactly when each coordinate is. <M>{"\\mathbb{Q}"}</M> is not, and nor is <M>{"(0, 1)"}</M>, where{" "}
          <M>{"1/n"}</M> is Cauchy with no limit. The continuous functions on <M>{"[0, 1]"}</M> with the sup metric form a
          complete space, which is why uniform limits of continuous functions are continuous.
        </p>
      </Example>

      <Theorem title="closed subsets">
        <p>
          A subset of a complete space is complete, with the same metric, if and only if it is closed.
        </p>
      </Theorem>

      <Remark title="completion">
        <p>
          Every metric space sits densely inside a complete one, its <strong>completion</strong>, built from Cauchy
          sequences. Completing <M>{"\\mathbb{Q}"}</M> with <M>{"|x - y|"}</M> gives <M>{"\\mathbb{R}"}</M>. Completing it
          with the <M>{"p"}</M>-adic metric gives the <M>{"p"}</M>-adic numbers instead.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for a metric space to be complete?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every sequence converges.",
          "Every Cauchy sequence converges to a point of the space.",
          "Every bounded set is closed.",
          "It contains every real number.",
        ],
        correct: [1],
      },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these spaces, with the usual metric, is complete?</p>,
      answer: { kind: "choice", options: ["ℚ", "(0, 1)", "[0, 1]", "ℝ minus {0}"], correct: [2] },
    },
    {
      key: "eps",
      rung: "apply",
      prompt: <p>For x_n = 1/n, what is the smallest N with |x_m − x_n| &lt; 0.1 for all m, n ≥ N? Use |1/m − 1/n| &lt; 1/N.</p>,
      answer: { kind: "numeric", value: 10, tolerance: 0 },
    },
    {
      key: "zero",
      rung: "apply",
      prompt: <p>In (0, ∞), why does 1/n fail to converge?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is not Cauchy.",
          "Its only possible limit, 0, is not in the space.",
          "It is unbounded.",
          "It oscillates.",
        ],
        correct: [1],
      },
    },
    {
      key: "disc",
      rung: "apply",
      prompt: <p>In a space with the discrete metric, which sequences are Cauchy?</p>,
      answer: {
        kind: "choice",
        options: ["None", "Those that are eventually constant", "All of them", "Only constant ones from the first term"],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every Cauchy sequence is bounded.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes ε = 1 and an N with d(x_n, x_N) < 1 for n ≥ N.",
          "Bounds the finitely many earlier terms by their maximum distance from x_N.",
          "Concludes every term lies in one ball around x_N.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The sequence 3, 33, 333, … has terms whose differences are divisible by ever higher powers of 10. In what sense might it be Cauchy?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Suggests a metric in which numbers are close when their difference has many factors of 10, or of a prime.",
          "Connects this to p-adic distances.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what convergence and Cauchy sequences mean in a metric space, why convergent sequences are Cauchy, what completeness is, and examples of complete and incomplete spaces.",

  glimpse: (
    <p>
      The next lesson is on compactness. Complete spaces of functions, such as C(X) with the sup norm, and Banach spaces in
      functional analysis are where completeness pays off.
    </p>
  ),
};
