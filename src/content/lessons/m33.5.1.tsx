import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ParabolicDecayViz } from "@/components/viz/ParabolicDecayViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.5.1",
  minutes: 90,
  links: {
    revisits: ["m33.4.2", "m33.4.4", "m17.3.1"],
    foreshadows: ["m33.5.2", "m33.5.3", "m33.6.1"],
  },

  puzzle: (
    <>
      <p>
        Heat a rod in an uneven way, with sharp jumps of temperature, and keep its ends in ice. A moment later the profile is
        smooth, and over time it fades to zero. Can we prove both facts, smoothing and decay, for general equations of heat
        type with variable coefficients, where no explicit formula is available?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose the initial temperature, run time forward, and compare the size of the solution with the energy bound.</p>
      <ParabolicDecayViz />
    </>
  ),

  theory: (
    <>
      <Definition title="second-order parabolic equations">
        <p>
          Let L be a uniformly elliptic operator in divergence form, with coefficients depending on x and t. The problem is{" "}
          <M>{"u_t + Lu = f"}</M> in <M>{"U \\times (0, T]"}</M>, with u = 0 on <M>{"\\partial U \\times [0, T]"}</M> and
          u = g at t = 0. The heat equation is the case L = −Δ. With the bilinear form B[u, v; t] of L, a{" "}
          <strong>weak solution</strong> is a map <M>{"u \\in L^2(0,T; H^1_0(U))"}</M> with{" "}
          <M>{"u' \\in L^2(0,T; H^{-1}(U))"}</M> such that{" "}
          <M>{"\\langle u', v\\rangle + B[u, v; t] = (f, v)"}</M> for every v in <M>{"H^1_0(U)"}</M> and almost every t, and
          u(0) = g.
        </p>
      </Definition>

      <Theorem title="existence by Galerkin approximation">
        <p>
          Take an orthonormal basis of <M>{"L^2(U)"}</M> that is orthogonal in <M>{"H^1_0(U)"}</M>, such as the Dirichlet
          eigenfunctions. Projecting onto the first m basis functions turns the equation into a linear system of ordinary
          differential equations, which has a solution <M>{"u_m"}</M>. Energy estimates bound <M>{"u_m"}</M> in the spaces
          above uniformly in m; a weakly convergent subsequence has a limit, which is a weak solution. It is unique, by the
          same energy estimate applied to the difference of two solutions.
        </p>
      </Theorem>

      <Example title="the energy estimate">
        <p>
          For the heat equation with f = 0, testing with u itself gives{" "}
          <M>{"\\tfrac12 \\tfrac{d}{dt}\\|u\\|_{L^2}^2 + \\|Du\\|_{L^2}^2 = 0"}</M>. By Poincaré&rsquo;s inequality{" "}
          <M>{"\\|Du\\|^2 \\ge \\lambda_1 \\|u\\|^2"}</M>, where λ₁ is the first Dirichlet eigenvalue, so{" "}
          <M>{"\\|u(t)\\|_{L^2} \\le e^{-\\lambda_1 t}\\|g\\|_{L^2}"}</M>. On (0, π), λ₁ = 1.
        </p>
      </Example>

      <Theorem title="regularity and the maximum principle">
        <p>
          If g is in <M>{"H^1_0"}</M> and f is in <M>{"L^2"}</M>, the weak solution has <M>{"u' \\in L^2(0,T;L^2)"}</M> and{" "}
          <M>{"u \\in L^2(0,T;H^2)"}</M>; with smooth data it is smooth. For smooth coefficients and t &gt; 0 the solution is
          smooth even for rough g, an instant smoothing that the wave equation lacks. A parabolic maximum principle also
          holds: the maximum of a subsolution over <M>{"\\bar U \\times [0, T]"}</M> is attained on the parabolic boundary,
          the base and sides of the cylinder.
        </p>
      </Theorem>

      <Remark title="irreversibility">
        <p>
          Smoothing has a price: the backward heat equation is ill-posed. A mode sin kx with amplitude e to the power k²T at
          time 0 shrinks to 1 at time T, so tiny differences in the final state can come from enormous differences in the
          initial one. Hadamard used examples like this to argue that well-posedness must include continuous dependence on
          the data.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "weak",
      rung: "check",
      prompt: <p>How does the Galerkin method construct a weak solution of a parabolic equation?</p>,
      answer: { kind: "choice", options: ["By solving finite-dimensional systems of ODEs and passing to a weak limit using energy estimates", "By an explicit formula", "By the method of characteristics", "By separation of variables only"], correct: [0] },
    },
    {
      key: "pb",
      rung: "check",
      prompt: <p>Where does a subsolution of a parabolic equation attain its maximum over the closed cylinder?</p>,
      answer: { kind: "choice", options: ["On the parabolic boundary: the base and the sides", "At the final time only", "Always at an interior point", "Nowhere"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take g = sin x and t = 1. What is ‖u(t)‖ / ‖g‖, to two decimal places?</p>,
      answer: { kind: "numeric", value: 0.37, tolerance: 0.01 },
    },
    {
      key: "mode",
      rung: "apply",
      prompt: <p>For the heat equation on (0, π) with zero boundary values, the mode sin 3x decays like e to the power −λt. What is λ?</p>,
      answer: { kind: "numeric", value: 9, tolerance: 0 },
    },
    {
      key: "back",
      rung: "apply",
      prompt: <p>Why is the backward heat equation ill-posed?</p>,
      answer: { kind: "choice", options: ["High modes grow without bound when run backwards, so solutions do not depend continuously on the data", "It has no solutions for any data", "Its solutions are always zero", "It is not linear"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that a solution of the heat equation on a bounded domain with zero boundary values satisfies ‖u(t)‖ ≤ ‖g‖ in L².</p>,
      answer: {
        kind: "written",
        rubric: [
          "Differentiates E(t) = ½‖u(t)‖² and substitutes uₜ = Δu, writing it as the integral of u Δu.",
          "Integrates by parts, using u = 0 on the boundary, to get E′(t) = −‖Du‖² ≤ 0.",
          "Concludes E is non-increasing, so ‖u(t)‖ ≤ ‖u(0)‖ = ‖g‖.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the heat equation smooth rough initial data instantly, while the wave equation does not?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that in the heat equation the k-th mode is damped by a factor like e to the power −k²t.",
          "Notes that wave modes oscillate with constant amplitude, so singularities persist and travel.",
          "Connects this to the high-frequency content of rough data. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The wave equation behaves quite differently. It conserves energy instead of dissipating it, carries singularities
        along instead of smoothing them, and sends signals at finite speed.
      </p>
      <p>Next, hyperbolic equations.</p>
    </>
  ),
};
