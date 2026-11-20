import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { GalerkinViz } from "@/components/viz/GalerkinViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.4.1",
  minutes: 90,
  links: {
    revisits: ["m33.3.3", "m33.3.4", "m17.5.3"],
    foreshadows: ["m33.4.2", "m33.4.3", "m33.6.2"],
  },

  puzzle: (
    <>
      <p>
        A string is held at both ends and loaded by a force that switches on abruptly halfway along. The equation −u″ = f
        then has no twice differentiable solution, yet the string plainly takes some shape. What equation does that shape
        satisfy, and how can it be found without ever differentiating twice?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a source and increase the number of hat functions, and compare the approximation with the exact solution.</p>
      <GalerkinViz />
    </>
  ),

  theory: (
    <>
      <Definition title="divergence form operators">
        <p>
          Let U ⊆ ℝⁿ be bounded and open. Consider <M>{"Lu = -\\sum_{i,j} (a^{ij} u_{x_i})_{x_j} + \\sum_i b^i u_{x_i} + cu"}</M>{" "}
          with bounded coefficients. L is <strong>uniformly elliptic</strong> if{" "}
          <M>{"\\sum a^{ij}\\xi_i\\xi_j \\ge \\theta |\\xi|^2"}</M> for some θ &gt; 0, all ξ and almost every x. The model
          case is <M>{"L = -\\Delta"}</M>.
        </p>
      </Definition>

      <Definition title="weak solutions">
        <p>
          For the Dirichlet problem Lu = f in U, u = 0 on ∂U, with <M>{"f \\in L^2(U)"}</M>, define the bilinear form
        </p>
        <p>
          <M>{"B[u, v] = \\int_U \\Big(\\sum a^{ij} u_{x_i} v_{x_j} + \\sum b^i u_{x_i} v + cuv\\Big)\\,dx"}</M>
        </p>
        <p>
          for u, v in <M>{"H_0^1(U)"}</M>. A <strong>weak solution</strong> is <M>{"u \\in H_0^1(U)"}</M> with{" "}
          <M>{"B[u, v] = \\int_U f v"}</M> for every <M>{"v \\in H_0^1(U)"}</M>. If u is smooth, integrating by parts shows
          this is equivalent to Lu = f, so weak solutions generalise classical ones. The boundary condition is built into
          the space.
        </p>
      </Definition>

      <Example title="the Galerkin method">
        <p>
          Choose finitely many functions <M>{"\\phi_1, \\ldots, \\phi_N"}</M> in <M>{"H_0^1"}</M>, and seek{" "}
          <M>{"u_N = \\sum c_k \\phi_k"}</M> with <M>{"B[u_N, \\phi_j] = \\int f \\phi_j"}</M> for each j: a system of N
          linear equations. With piecewise linear hat functions on a mesh this is the <strong>finite element
          method</strong>, the basis of most engineering simulation. For −u″ = f in one dimension the matrix is tridiagonal.
        </p>
      </Example>

      <Theorem title="the energy estimate">
        <p>
          There are constants α, β &gt; 0 and γ ≥ 0 with <M>{"|B[u, v]| \\le \\alpha \\|u\\|_{H^1} \\|v\\|_{H^1}"}</M> and{" "}
          <M>{"\\beta \\|u\\|_{H^1}^2 \\le B[u, u] + \\gamma \\|u\\|_{L^2}^2"}</M>. The proof uses uniform ellipticity, the
          Cauchy-Schwarz inequality and, for the lower bound on <M>{"H_0^1"}</M>, the Poincaré inequality{" "}
          <M>{"\\|u\\|_{L^2} \\le C \\|Du\\|_{L^2}"}</M>.
        </p>
      </Theorem>

      <Remark title="why weak first">
        <p>
          Existence is easiest in a weak, Hilbert space setting, where tools such as the Riesz representation theorem
          apply. Smoothness is then proved separately, as regularity. This two-step strategy, first existence in a large
          space and then regularity, runs through modern PDE.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "weak",
      rung: "check",
      prompt: <p>What is a weak solution of −Δu = f with zero boundary values?</p>,
      answer: { kind: "choice", options: ["u in H₀¹ with ∫ Du · Dv = ∫ f v for every v in H₀¹", "A twice differentiable u with −Δu = f", "Any u in L²", "A u that satisfies the equation at almost every point"], correct: [0] },
    },
    {
      key: "bdry",
      rung: "check",
      prompt: <p>How is the boundary condition u = 0 imposed in the weak formulation?</p>,
      answer: { kind: "choice", options: ["By requiring u to lie in H₀¹(U)", "By adding a boundary integral", "It is ignored", "By requiring f = 0 on ∂U"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose f = 1. What is the exact value of u(1/2)?</p>,
      answer: { kind: "numeric", value: 0.125, tolerance: 0.001 },
    },
    {
      key: "fem",
      rung: "apply",
      prompt: <p>What does the Galerkin method reduce the weak problem to?</p>,
      answer: { kind: "choice", options: ["A finite system of linear equations", "An ordinary differential equation", "A single integral", "A fixed point iteration"], correct: [0] },
    },
    {
      key: "ell",
      rung: "apply",
      prompt: <p>What does uniform ellipticity require of the coefficients aⁱʲ?</p>,
      answer: { kind: "choice", options: ["The quadratic form they define is bounded below by θ|ξ|² with θ > 0", "They are all equal", "They vanish on the boundary", "They are smooth"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if u is smooth, vanishes on ∂U and satisfies ∫ Du · Dv = ∫ f v for all v in C꜀∞(U), then −Δu = f.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Integrates by parts: ∫ Du · Dv = −∫ (Δu) v, with no boundary term since v has compact support.",
          "Deduces ∫ (−Δu − f) v = 0 for every test function v.",
          "Concludes −Δu = f almost everywhere, and everywhere by continuity.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Prove the one-dimensional Poincaré inequality ∫ u² ≤ ∫ (u′)² on (0, 1) for smooth u with u(0) = 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes u(x) as the integral of u′ from 0 to x.",
          "Applies Cauchy-Schwarz to get u(x)² ≤ x ∫ (u′)² ≤ ∫ (u′)².",
          "Integrates over (0, 1). Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The weak problem asks for u in a Hilbert space with B[u, v] = ⟨f, v⟩ for all v. When B is an inner product, the Riesz
        representation theorem solves it at once. When it is not, a slightly stronger theorem is needed.
      </p>
      <p>Next, Lax-Milgram.</p>
    </>
  ),
};
