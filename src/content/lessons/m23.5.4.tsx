import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { FredholmViz } from "@/components/viz/FredholmViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.5.4",
  minutes: 85,
  links: {
    revisits: ["m23.5.3", "m23.5.2", "m23.3.3"],
    foreshadows: ["m23.6.1", "m23.6.3", "m17.5.3"],
  },

  puzzle: (
    <>
      <p>
        You want a function f on [0, 1] with f(x) − ∫ f = g(x) for a given g. Try it: integrate both sides, and something
        strange happens. For which g can you solve it, and how many solutions are there? Now change the equation to
        f(x) − ½∫ f = g(x). What changed?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Solve (I − μB)x = y, where B swaps two coordinates, and slide μ to 1.</p>
      <FredholmViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Fredholm alternative">
        <p>
          Let <M>K</M> be a compact operator on a Banach space <M>X</M> and <M>{"\\lambda \\ne 0"}</M>. Then{" "}
          <M>{"\\ker(K - \\lambda I)"}</M> is finite-dimensional, the range of <M>{"K - \\lambda I"}</M> is closed, and
        </p>
        <MD>{"K - \\lambda I \\text{ is injective} \\iff K - \\lambda I \\text{ is surjective.}"}</MD>
        <p>
          On a Hilbert space, moreover, <M>{"(K - \\lambda I)x = y"}</M> is solvable exactly when <M>y</M> is orthogonal to{" "}
          <M>{"\\ker(K^* - \\bar\\lambda I)"}</M>, and the two kernels have the same finite dimension.
        </p>
      </Theorem>

      <Example title="a rank-one kernel">
        <p>
          On <M>{"C[0, 1]"}</M>, solve <M>{"f(x) - \\mu \\int_0^1 f = g(x)"}</M>. Write <M>{"c = \\int_0^1 f"}</M> and
          integrate: <M>{"(1 - \\mu)c = \\int_0^1 g"}</M>. If <M>{"\\mu \\ne 1"}</M>, there is exactly one solution,{" "}
          <M>{"f = g + \\mu c"}</M> with <M>{"c = \\int g / (1 - \\mu)"}</M>. If <M>{"\\mu = 1"}</M>, the homogeneous equation
          has the constant solutions, and a solution exists exactly when <M>{"\\int_0^1 g = 0"}</M>, that is, when <M>g</M>{" "}
          is orthogonal to the constants; then <M>{"f = g + c"}</M> for any constant <M>c</M>.
        </p>
      </Example>

      <Remark title="history and index">
        <p>
          Fredholm proved the alternative for integral equations in 1903 by passing to the limit in finite systems of linear
          equations; Riesz gave the abstract compact-operator version in 1918. In modern terms, <M>{"I - K"}</M> is a
          Fredholm operator of index 0: its kernel and cokernel have the same finite dimension. Since compact operators are
          nearly finite-dimensional, the rank-nullity theorem survives in this form.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>For compact K and λ ≠ 0, what does the Fredholm alternative say about K − λI?</p>,
      answer: { kind: "choice", options: ["It is injective exactly when it is surjective", "It is always invertible", "It is never surjective", "It is compact"], correct: [0] },
    },
    {
      key: "cond",
      rung: "check",
      prompt: <p>When the homogeneous equation has non-zero solutions, when is (K − λI)x = y solvable in a Hilbert space?</p>,
      answer: { kind: "choice", options: ["When y is orthogonal to the kernel of the adjoint K* − λ̄I", "Always", "Never", "When y = 0 only"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is det(I − μB) when μ = 0.5?</p>,
      answer: { kind: "numeric", value: 0.75 },
    },
    {
      key: "rank1",
      rung: "apply",
      prompt: <p>Solve f(x) − ½∫₀¹ f = 1. What is the constant value of f?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "mu1",
      rung: "apply",
      prompt: <p>For f(x) − ∫₀¹ f = g(x), which g gives a solution?</p>,
      answer: { kind: "choice", options: ["g(x) = x − ½", "g(x) = 1", "g(x) = x", "g(x) = x²"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that f(x) − μ∫₀¹ f = g(x) has exactly one solution for each continuous g when μ ≠ 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Integrates to get (1 − μ)c = ∫g, where c = ∫f, so c is determined.",
          "Deduces f = g + μc, so any solution is this one (uniqueness).",
          "Checks this f satisfies the equation (existence).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The right shift S on ℓ² is injective but not surjective. Explain why S cannot equal I − K for any compact operator K.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes S = I − K with K compact, so S = −(K − I) with λ = 1.",
          "Applies the alternative: injective would imply surjective.",
          "Notes S misses e₁, a contradiction. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        So far every operator has been bounded. But differentiation, the momentum of quantum mechanics, and most
        differential operators are not, and Hellinger-Toeplitz says they cannot be defined everywhere.
      </p>
      <p>
        Next, unbounded operators: domains, closed operators, adjoints, the difference between symmetric and
        self-adjoint, and why the boundary conditions decide it.
      </p>
    </>
  ),
};
