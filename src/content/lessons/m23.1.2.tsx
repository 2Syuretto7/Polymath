import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { OperatorStretchViz } from "@/components/viz/OperatorStretchViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.1.2",
  minutes: 85,
  links: {
    revisits: ["m23.1.1", "m8.1.2", "m12.2.2"],
    foreshadows: ["m23.1.3", "m23.3.2", "m23.5.1"],
  },

  puzzle: (
    <>
      <p>
        Differentiation is linear: the derivative of a sum is the sum of the derivatives. Now take sin(nx), whose size, its
        greatest height, is 1. Its derivative n cos(nx) has size n. A linear map that can multiply sizes by any factor at all:
        is that a problem, and what does it mean for continuity?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Turn a unit vector and watch how far a matrix stretches it.</p>
      <OperatorStretchViz />
    </>
  ),

  theory: (
    <>
      <Definition title="bounded operators">
        <p>
          A linear map <M>{"T : X \\to Y"}</M> between normed spaces is <strong>bounded</strong> if{" "}
          <M>{"\\|Tx\\| \\le C\\|x\\|"}</M> for some <M>C</M> and all <M>x</M>. The least such <M>C</M> is the{" "}
          <strong>operator norm</strong>
        </p>
        <MD>{"\\|T\\| = \\sup_{\\|x\\| \\le 1} \\|Tx\\|."}</MD>
      </Definition>

      <Theorem title="bounded is continuous">
        <p>
          For linear <M>T</M>, these are equivalent: <M>T</M> is bounded; <M>T</M> is continuous; <M>T</M> is continuous at
          0. The space <M>{"B(X, Y)"}</M> of bounded operators, with the operator norm, is a Banach space whenever <M>Y</M> is,
          and <M>{"\\|ST\\| \\le \\|S\\|\\,\\|T\\|"}</M>.
        </p>
      </Theorem>

      <Example title="examples">
        <p>
          The integral operator <M>{"(Tf)(x) = \\int_0^1 k(x, y) f(y) \\, dy"}</M> on <M>{"C[0, 1]"}</M> with continuous{" "}
          <M>k</M> has <M>{"\\|T\\| \\le \\sup_x \\int_0^1 |k(x, y)| \\, dy"}</M>. On <M>{"\\ell^2"}</M>, the right shift{" "}
          <M>{"(x_1, x_2, \\ldots) \\mapsto (0, x_1, x_2, \\ldots)"}</M> is an isometry with norm 1, and the left shift also
          has norm 1. A <M>{"\\varphi \\in B(X, \\mathbb{R})"}</M> is a bounded linear functional, an element of the dual{" "}
          <M>{"X^*"}</M>.
        </p>
      </Example>

      <Remark title="unbounded operators">
        <p>
          Differentiation on <M>{"C^1[0, 2\\pi]"}</M> with the sup norm sends <M>{"\\sin nx"}</M>, of norm 1, to a function of
          norm <M>n</M>: it is unbounded, so discontinuous. Unbounded operators are unavoidable in quantum mechanics and in
          differential equations, but they can only be defined on part of the space. They return at the end of the course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "bdd",
      rung: "check",
      prompt: <p>For a linear map between normed spaces, which is equivalent to being bounded?</p>,
      answer: { kind: "choice", options: ["Being continuous", "Being injective", "Being surjective", "Having finite rank"], correct: [0] },
    },
    {
      key: "opnorm",
      rung: "check",
      prompt: <p>How is the operator norm of T defined?</p>,
      answer: { kind: "choice", options: ["The supremum of ‖Tx‖ over ‖x‖ ≤ 1", "The largest entry of T", "The sum of ‖Tx‖ over a basis", "The infimum of ‖Tx‖ over ‖x‖ = 1"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the operator norm of the diagonal matrix with entries 2 and 0.5?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "shift",
      rung: "apply",
      prompt: <p>What is the norm of the right shift on ℓ²?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "diff",
      rung: "apply",
      prompt: <p>Why is differentiation unbounded on C¹[0, 2π] with the sup norm?</p>,
      answer: { kind: "choice", options: ["sin(nx) has norm 1 but its derivative has norm n", "Not every function is differentiable", "Derivatives can be negative", "The space is not complete"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a linear map T continuous at 0 is bounded.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses continuity at 0 with ε = 1 to get δ > 0 such that ‖x‖ ≤ δ implies ‖Tx‖ ≤ 1.",
          "For non-zero x, applies this to δx/‖x‖ and uses linearity.",
          "Concludes ‖Tx‖ ≤ (1/δ)‖x‖.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>On L²[0, 1], let (Mf)(x) = x f(x). Find ‖M‖, and show that no f with ‖f‖ = 1 attains it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows ‖Mf‖ ≤ ‖f‖, since |x| ≤ 1, so ‖M‖ ≤ 1.",
          "Uses functions concentrated near 1, such as indicators of [1 − ε, 1] rescaled, to show the norm is 1.",
          "Any reasonable answer earns full credit, such as one noting equality would need x f(x) = f(x) almost everywhere.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        In finite dimensions every linear map is bounded and every two norms agree up to constants. Neither is true in
        infinite dimensions, and the difference shapes the whole subject.
      </p>
      <p>
        Next, finite versus infinite dimensions: equivalence of norms in ℝⁿ, Riesz&rsquo;s lemma, the non-compact unit ball,
        and discontinuous linear functionals.
      </p>
    </>
  ),
};
