import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { EvolutionCompareViz } from "@/components/viz/EvolutionCompareViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.1.1",
  minutes: 90,
  links: {
    revisits: ["m17.2.2", "m17.3.3", "m17.5.2"],
    foreshadows: ["m33.2.1", "m33.3.1", "m33.4.1"],
  },

  puzzle: (
    <>
      <p>
        Start with the same smooth bump. Under the transport equation it slides along unchanged; under the heat equation it
        spreads everywhere at once; under the wave equation it splits in two and travels at a fixed speed. Four linear
        equations, each solvable by an explicit formula, display almost every phenomenon a general theory must explain.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose an equation and a time, and compare the evolved solution with the initial bump.</p>
      <EvolutionCompareViz />
    </>
  ),

  theory: (
    <>
      <Definition title="transport and Laplace">
        <p>
          The <strong>transport equation</strong> <M>{"u_t + b \\cdot Du = 0"}</M> with <M>{"u(x, 0) = g(x)"}</M> has the
          solution <M>{"u(x, t) = g(x - tb)"}</M>. <strong>Laplace&rsquo;s equation</strong> <M>{"\\Delta u = 0"}</M> has the
          radial fundamental solution <M>{"\\Phi(x) = -\\tfrac{1}{2\\pi}\\log|x|"}</M> in the plane and a multiple of{" "}
          <M>{"|x|^{2-n}"}</M> for n ≥ 3, and <M>{"u = \\Phi * f"}</M> solves Poisson&rsquo;s equation{" "}
          <M>{"-\\Delta u = f"}</M>. Harmonic functions satisfy the mean value property, hence the maximum principle,
          smoothness and Liouville&rsquo;s theorem.
        </p>
      </Definition>

      <Theorem title="the heat equation">
        <p>
          The heat kernel <M>{"\\Phi(x, t) = (4\\pi t)^{-n/2} e^{-|x|^2/4t}"}</M> has integral 1 for every t &gt; 0, and{" "}
          <M>{"u = \\Phi(\\cdot, t) * g"}</M> solves <M>{"u_t = \\Delta u"}</M> with initial data g. The solution is smooth for
          t &gt; 0 however rough g is, and positive everywhere if g ≥ 0 is not zero: heat propagates at infinite speed.
        </p>
      </Theorem>

      <Theorem title="the wave equation">
        <p>
          In one dimension d&rsquo;Alembert&rsquo;s formula{" "}
          <M>{"u = \\tfrac12[g(x+t) + g(x-t)] + \\tfrac12\\int_{x-t}^{x+t} h"}</M> solves <M>{"u_{tt} = u_{xx}"}</M>. In three
          dimensions Kirchhoff&rsquo;s formula expresses u(x, t) through averages over the sphere of radius t about x, and in two
          dimensions Hadamard&rsquo;s method of descent gives an average over the disc. Signals travel at speed 1 and, in odd
          dimensions n ≥ 3, are sharp: Huygens&rsquo; principle.
        </p>
      </Theorem>

      <Remark title="the four types">
        <p>
          Transport is first order and carries data along lines; Laplace is elliptic, with no time and smooth solutions;
          heat is parabolic, smoothing and irreversible; wave is hyperbolic, with finite speed and conserved energy. The rest
          of the course replaces explicit formulas by estimates that work for variable coefficients and nonlinear equations.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "tr",
      rung: "check",
      prompt: <p>What is the solution of uₜ + b · Du = 0 with u(x, 0) = g(x)?</p>,
      answer: { kind: "choice", options: ["u(x, t) = g(x − tb)", "u(x, t) = g(x + tb)", "u(x, t) = g(x) e⁻ᵗ", "u(x, t) = t g(x)"], correct: [0] },
    },
    {
      key: "speed",
      rung: "check",
      prompt: <p>Which of these equations propagates information at infinite speed?</p>,
      answer: { kind: "choice", options: ["The heat equation", "The wave equation", "The transport equation", "None of them"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for the transport equation at t = 2, where is the highest point of the solution?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.05 },
    },
    {
      key: "int",
      rung: "apply",
      prompt: <p>What is the integral of the heat kernel over ℝⁿ, for any t &gt; 0?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "huy",
      rung: "apply",
      prompt: <p>In which dimension does the wave equation satisfy Huygens&rsquo; principle?</p>,
      answer: { kind: "choice", options: ["3", "1", "2", "In no dimension"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that u(x, t) = g(x − tb) solves the transport equation when g is continuously differentiable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes uₜ = −b · Dg(x − tb) by the chain rule.",
          "Computes Du = Dg(x − tb).",
          "Adds to get uₜ + b · Du = 0, and checks u(x, 0) = g(x).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Check that log|x| is harmonic on the plane minus the origin.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes log|x| = ½ log(x₁² + x₂²) and computes the first partial derivatives xᵢ/|x|².",
          "Computes the second derivatives (|x|² − 2xᵢ²)/|x|⁴.",
          "Adds them to get (2|x|² − 2|x|²)/|x|⁴ = 0. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The transport equation was solved by following lines along which the solution is constant. The same idea, following
        curves determined by the equation itself, solves every first-order equation, linear or not, at least for a while.
      </p>
      <p>Next, characteristics.</p>
    </>
  ),
};
