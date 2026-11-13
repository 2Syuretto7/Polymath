import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { DalembertViz } from "@/components/viz/DalembertViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.2.2",
  minutes: 90,
  links: {
    revisits: ["m17.2.1", "m17.1.2", "m17.1.3"],
    foreshadows: ["m17.2.3", "m17.6.2", "m17.3.3"],
  },

  puzzle: (
    <>
      <p>
        Shout in a valley and the sound reaches a listener a kilometre away about three seconds later, not before. Nothing in
        the wave equation mentions a speed limit explicitly. Where in the mathematics is the fact that signals take time to
        arrive?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the time and the point x₀, and watch which part of the initial data can affect the value there.</p>
      <DalembertViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="d'Alembert's formula (1747)">
        <p>
          The solution of <M>{"u_{tt} = c^2 u_{xx}"}</M> on the whole line with <M>{"u(x,0) = \\varphi(x)"}</M> and{" "}
          <M>{"u_t(x,0) = \\psi(x)"}</M> is
        </p>
        <MD>{"u(x,t) = \\tfrac12\\big[\\varphi(x+ct) + \\varphi(x-ct)\\big] + \\frac{1}{2c}\\int_{x-ct}^{x+ct} \\psi(s)\\,ds."}</MD>
        <p>
          Proof: every solution has the form <M>{"F(x+ct) + G(x-ct)"}</M>, from the canonical form{" "}
          <M>{"u_{\\xi\\eta} = 0"}</M>. The initial conditions give <M>{"F + G = \\varphi"}</M> and{" "}
          <M>{"c(F' - G') = \\psi"}</M>; integrating the second and solving for F and G yields the formula. So the problem is
          well-posed: the formula exists, is unique, and small changes in φ and ψ change u only a little.
        </p>
      </Theorem>

      <Definition title="domains of dependence and influence">
        <p>
          The value u(x₀, t₀) depends only on the data in the interval [x₀ − ct₀, x₀ + ct₀], cut out by the two characteristics
          through (x₀, t₀): its <strong>domain of dependence</strong>. Conversely, data at a point x₁ affect only the wedge
          |x − x₁| ≤ ct, the <strong>domain of influence</strong>. This is the principle of <strong>causality</strong>:
          signals travel at speed at most c.
        </p>
      </Definition>

      <Example title="a plucked infinite string">
        <p>
          If ψ = 0 and φ is a bump, the formula gives two half-bumps travelling apart at speed c, each keeping its shape. If
          instead φ = 0 and ψ is a box, the string rises in a growing plateau: once the domain of dependence of a point
          contains the whole box, the point sits at height (1/2c)∫ψ for ever.
        </p>
      </Example>

      <Remark title="Huygens's principle">
        <p>
          In one dimension, initial velocity leaves a permanent wake, so sharp signals are not perfectly sharp. In three
          dimensions the wave equation obeys Huygens&rsquo;s principle: a signal is heard at a point only at the instant its
          front passes, which is why we hear speech clearly. In two dimensions it fails, as ripples on a pond show.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dep",
      rung: "check",
      prompt: <p>On which data does u(x₀, t₀) depend for the wave equation on the line?</p>,
      answer: {
        kind: "choice",
        options: ["Only the data on [x₀ − ct₀, x₀ + ct₀]", "All the data on the line", "Only the data at x₀", "Only the data at x₀ ± ct₀"],
        correct: [0],
      },
    },
    {
      key: "split",
      rung: "check",
      prompt: <p>With initial displacement a bump and zero initial velocity, what happens?</p>,
      answer: {
        kind: "choice",
        options: ["The bump splits into two halves moving apart at speed c", "The bump spreads and flattens", "The bump stays in place and oscillates", "The bump moves to the right only"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose initial velocity only, and set t = 3 and x₀ = 0. What is u(x₀, t)?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.01 },
    },
    {
      key: "viz2",
      rung: "apply",
      prompt: <p>Now choose initial displacement only, with t = 3 and x₀ = 0. What is u(x₀, t)?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0.01 },
    },
    {
      key: "sin",
      rung: "apply",
      prompt: <p>With c = 1, φ(x) = sin x and ψ = 0, d&rsquo;Alembert&rsquo;s formula gives u = sin x cos t. What is u at x = π/2, t = π/3? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.01 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Check that d&rsquo;Alembert&rsquo;s formula satisfies both initial conditions u(x, 0) = φ(x) and uₜ(x, 0) = ψ(x).</p>,
      answer: {
        kind: "written",
        rubric: [
          "At t = 0 the bracket is φ(x) and the integral is over a point, so u(x, 0) = φ(x).",
          "Differentiates in t: the bracket gives (c/2)[φ′(x + ct) − φ′(x − ct)], and the integral gives ½[ψ(x + ct) + ψ(x − ct)] by the fundamental theorem of calculus.",
          "Sets t = 0 to get uₜ(x, 0) = ψ(x).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does a string given only an initial velocity on [−1, 1] never return to rest at x = 0, unlike one given only an initial displacement?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that for large t the domain of dependence of x = 0 contains all of [−1, 1].",
          "So u(0, t) = (1/2c) ∫ψ, a nonzero constant, instead of zero.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend d’Alembert’s formula, how it follows from the general solution F(x + ct) + G(x − ct), and what the domains of dependence and influence say about the speed of signals.",

  glimpse: (
    <p>
      Next, energy methods: the energy of a vibrating string is conserved, and this simple fact proves uniqueness of
      solutions.
    </p>
  ),
};
