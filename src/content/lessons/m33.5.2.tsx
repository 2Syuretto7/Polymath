import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PropagationConeViz } from "@/components/viz/PropagationConeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.5.2",
  minutes: 90,
  links: {
    revisits: ["m33.5.1", "m17.2.2", "m17.2.3"],
    foreshadows: ["m33.5.3", "m33.6.2", "m33.6.1"],
  },

  puzzle: (
    <>
      <p>
        Pluck a long string near its middle. For a while the far ends do not move at all; then the disturbance arrives. For
        the heat equation, a change anywhere is felt everywhere at once. What property of the wave equation makes signals
        travel at a finite speed, and can we prove it without d&rsquo;Alembert&rsquo;s formula, for equations with variable
        coefficients?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose the initial data, run time forward, and watch the solution stay inside the shaded region.</p>
      <PropagationConeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="second-order hyperbolic equations">
        <p>
          With L uniformly elliptic in divergence form, the problem is <M>{"u_{tt} + Lu = f"}</M> in{" "}
          <M>{"U \\times (0, T]"}</M>, with u = 0 on the sides, and two initial conditions u = g and{" "}
          <M>{"u_t = h"}</M> at t = 0. A <strong>weak solution</strong> has{" "}
          <M>{"u \\in L^2(0,T;H^1_0)"}</M>, <M>{"u' \\in L^2(0,T;L^2)"}</M> and{" "}
          <M>{"u'' \\in L^2(0,T;H^{-1})"}</M>, and satisfies{" "}
          <M>{"\\langle u'', v\\rangle + B[u, v; t] = (f, v)"}</M> for all v in <M>{"H^1_0"}</M>.
        </p>
      </Definition>

      <Theorem title="existence, uniqueness and energy">
        <p>
          For <M>{"g \\in H^1_0"}</M>, <M>{"h \\in L^2"}</M> and <M>{"f \\in L^2"}</M>, the Galerkin method again yields a
          unique weak solution. The key estimate comes from testing with <M>{"u_t"}</M>: for the wave equation with f = 0,
          the <strong>energy</strong> <M>{"E(t) = \\tfrac12\\int_U (u_t^2 + |Du|^2)\\,dx"}</M> is constant in time.
          Unlike the parabolic case there is no smoothing: the solution is exactly as regular as its data, and singularities
          in the data persist.
        </p>
      </Theorem>

      <Theorem title="finite speed of propagation">
        <p>
          For the wave equation in ℝⁿ, if <M>{"g = h = 0"}</M> on the ball <M>{"B(x_0, t_0)"}</M>, then u = 0 in the cone{" "}
          <M>{"\\{(x, t) : |x - x_0| < t_0 - t\\}"}</M>. The proof considers the energy inside the shrinking ball{" "}
          <M>{"B(x_0, t_0 - t)"}</M>; differentiating, the flux through the moving boundary is controlled by{" "}
          <M>{"|u_t||Du| \\le \\tfrac12(u_t^2 + |Du|^2)"}</M>, so the local energy cannot increase, and it starts at 0.
        </p>
      </Theorem>

      <Example title="domain of dependence">
        <p>
          In one dimension, d&rsquo;Alembert&rsquo;s formula shows the value u(x, t) depends only on the data in [x − t,
          x + t]. Data supported in [−1, 1] therefore produces a solution supported in [−1 − t, 1 + t]. For general
          hyperbolic equations the speed is set by the coefficients: the cone is replaced by a region bounded by the
          characteristic surfaces.
        </p>
      </Example>

      <Remark title="hyperbolic systems">
        <p>
          Many physical laws, from Maxwell&rsquo;s equations to elasticity, are first-order hyperbolic systems{" "}
          <M>{"u_t + \\sum_j B_j u_{x_j} = 0"}</M>, where every combination of the matrices has real eigenvalues and a
          full set of eigenvectors. Energy methods and finite speed of propagation extend to them, and in the nonlinear case
          shocks can form, as in the conservation laws met earlier in the course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "energy",
      rung: "check",
      prompt: <p>What happens to the energy of a solution of the wave equation with zero boundary values and no forcing?</p>,
      answer: { kind: "choice", options: ["It stays constant", "It decays exponentially", "It grows", "It becomes infinite"], correct: [0] },
    },
    {
      key: "smooth",
      rung: "check",
      prompt: <p>Does the wave equation smooth rough initial data?</p>,
      answer: { kind: "choice", options: ["No: solutions are only as regular as the data, and singularities travel", "Yes, instantly", "Yes, after time 1", "Only in one dimension"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set t = 2. The solution vanishes outside [−a, a]. What is a?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "dep",
      rung: "apply",
      prompt: <p>For the one-dimensional wave equation with speed 1, on which interval of initial data does u(5, 2) depend?</p>,
      answer: { kind: "choice", options: ["[3, 7]", "[−2, 2]", "[5, 7]", "All of ℝ"], correct: [0] },
    },
    {
      key: "test",
      rung: "apply",
      prompt: <p>Which test function gives the energy identity for the wave equation?</p>,
      answer: { kind: "choice", options: ["The time derivative of u", "u itself", "The Laplacian of u", "A constant"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the energy of a smooth solution of the wave equation on a bounded domain, with u = 0 on the boundary, is constant.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Differentiates E(t) and gets the integral of uₜuₜₜ + Du · Duₜ.",
          "Integrates the second term by parts, using uₜ = 0 on the boundary, to get the integral of uₜ(uₜₜ − Δu).",
          "Concludes E′(t) = 0 since uₜₜ = Δu.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use energy conservation to show that the wave equation with zero boundary values has at most one smooth solution for given g and h.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes the difference w of two solutions, which solves the equation with zero data.",
          "Notes its energy is 0 at t = 0 and hence for all t, so wₜ = 0 and Dw = 0.",
          "Concludes w is constant, hence 0 by the boundary or initial values. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The heat and wave equations can both be written as ordinary differential equations u′ = Au in a space of
        functions. If A were a matrix, the solution would be e to the power tA applied to the data. That formula can be
        made to work for unbounded operators too.
      </p>
      <p>Next, semigroup methods.</p>
    </>
  ),
};
