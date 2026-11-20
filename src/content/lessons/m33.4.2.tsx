import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LaxMilgramViz } from "@/components/viz/LaxMilgramViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.4.2",
  minutes: 90,
  links: {
    revisits: ["m33.4.1", "m23.2.2", "m23.2.1"],
    foreshadows: ["m33.4.3", "m33.5.1", "m33.4.4"],
  },

  puzzle: (
    <>
      <p>
        For −Δu = f, the form ∫ Du · Dv is an inner product on H₀¹, and the Riesz representation theorem gives a unique
        weak solution. Add a drift term b · Du and the form is no longer symmetric, so it is not an inner product. Does the
        equation still have exactly one solution?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the coefficients of a bilinear form on the plane, and see when a unique solution is guaranteed.</p>
      <LaxMilgramViz />
    </>
  ),

  theory: (
    <>
      <Definition title="bounded and coercive forms">
        <p>
          Let H be a real Hilbert space. A bilinear form B : H × H → ℝ is <strong>bounded</strong> if{" "}
          <M>{"|B[u, v]| \\le \\alpha \\|u\\| \\|v\\|"}</M>, and <strong>coercive</strong> if{" "}
          <M>{"B[u, u] \\ge \\beta \\|u\\|^2"}</M> for some β &gt; 0. No symmetry is assumed.
        </p>
      </Definition>

      <Theorem title="the Lax-Milgram theorem">
        <p>
          If B is bounded and coercive, then for every bounded linear functional f on H there is a unique u in H with{" "}
          <M>{"B[u, v] = \\langle f, v \\rangle"}</M> for all v, and <M>{"\\|u\\| \\le \\|f\\|/\\beta"}</M>. Proof: by Riesz,
          write <M>{"B[u, v] = (Au, v)"}</M> for a bounded linear A. Coercivity gives{" "}
          <M>{"\\beta\\|u\\| \\le \\|Au\\|"}</M>, so A is injective with closed range; if the range missed some w, then{" "}
          <M>{"\\beta\\|w\\|^2 \\le B[w, w] = (Aw, w) = 0"}</M>. So A is invertible, and u = A⁻¹ of the Riesz representative
          of f.
        </p>
      </Theorem>

      <Example title="existence for elliptic equations">
        <p>
          By the energy estimate, <M>{"B[u, u] + \\gamma \\|u\\|_{L^2}^2 \\ge \\beta \\|u\\|_{H^1}^2"}</M>. So for every{" "}
          <M>{"\\mu \\ge \\gamma"}</M>, the form <M>{"B_\\mu[u, v] = B[u, v] + \\mu (u, v)_{L^2}"}</M> is coercive on{" "}
          <M>{"H_0^1"}</M>, and Lu + μu = f has a unique weak solution for each f in L². For −Δu = f itself, γ = 0 by the
          Poincaré inequality.
        </p>
      </Example>

      <Theorem title="the Fredholm alternative">
        <p>
          For general L, solve with μ large and treat the rest as a compact perturbation, using the compactness of{" "}
          <M>{"H_0^1"}</M> in <M>{"L^2"}</M>. The result: either Lu = f has a unique weak solution for every f, or the
          homogeneous problem Lu = 0 has non-zero solutions, a finite-dimensional space, and then Lu = f is solvable exactly
          when f is orthogonal to the solutions of the adjoint problem. The exceptional cases form a discrete set of
          eigenvalues.
        </p>
      </Theorem>

      <Remark title="beyond Lax-Milgram">
        <p>
          Lax-Milgram is the linear, coercive case. Indefinite problems such as the Stokes equations need the Babuška-Brezzi
          inf-sup condition, and nonlinear monotone problems use the Minty-Browder theorem, a nonlinear relative of the same
          argument.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "coer",
      rung: "check",
      prompt: <p>What does it mean for B to be coercive?</p>,
      answer: { kind: "choice", options: ["B[u, u] ≥ β‖u‖² for some β > 0 and all u", "B is symmetric", "B[u, v] = 0 for all u, v", "B is unbounded"], correct: [0] },
    },
    {
      key: "sym",
      rung: "check",
      prompt: <p>Does Lax-Milgram require B to be symmetric?</p>,
      answer: { kind: "choice", options: ["No: bounded and coercive is enough", "Yes, always", "Only in infinite dimensions", "Only when f = 0"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with a = 2, d = 2 and s = 1, what is the coercivity constant β?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "bound",
      rung: "apply",
      prompt: <p>If β = 4 and ‖f‖ = 2, what upper bound does Lax-Milgram give for ‖u‖?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0 },
    },
    {
      key: "fred",
      rung: "apply",
      prompt: <p>What does the Fredholm alternative say for Lu = f?</p>,
      answer: { kind: "choice", options: ["Either it is uniquely solvable for every f, or Lu = 0 has non-zero solutions", "It is always uniquely solvable", "It is never solvable", "It is solvable only for smooth f"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show the uniqueness part of Lax-Milgram, and the bound ‖u‖ ≤ ‖f‖/β.</p>,
      answer: {
        kind: "written",
        rubric: [
          "If u₁ and u₂ both solve, then B[u₁ − u₂, v] = 0 for all v; taking v = u₁ − u₂ and using coercivity gives u₁ = u₂.",
          "For the bound, takes v = u: β‖u‖² ≤ B[u, u] = ⟨f, u⟩ ≤ ‖f‖‖u‖.",
          "Divides by ‖u‖, if non-zero, to get ‖u‖ ≤ ‖f‖/β.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that B[u, v] = ∫ Du · Dv + ∫ (b · Du) v on H₀¹(U) satisfies B[u, u] = ∫ |Du|² when b is a constant vector.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes (b · Du) u as half of b · D(u²).",
          "Integrates by parts, with no boundary term since u vanishes on ∂U, and uses that b is constant, so its divergence is 0.",
          "Concludes that the drift term contributes nothing to B[u, u]. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A weak solution lies in H¹, with one derivative in L². If the data are smoother, is the solution smoother too, and
        does it then satisfy the equation in the classical sense?
      </p>
      <p>Next, regularity.</p>
    </>
  ),
};
