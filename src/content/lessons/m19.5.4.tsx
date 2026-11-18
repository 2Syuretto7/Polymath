import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { IterativeResidualViz } from "@/components/viz/IterativeResidualViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.5.4",
  minutes: 90,
  links: {
    revisits: ["m19.5.3", "m19.2.3", "m3.7.4"],
    foreshadows: ["m19.6.2", "m23.1.1", "m23.2.1"],
  },

  puzzle: (
    <>
      <p>
        A weather model or a bridge simulation can lead to a linear system with a hundred million unknowns. LU
        factorisation would need about 10²⁴ flops and more memory than exists. Yet each equation involves only a handful of
        unknowns. How can that sparsity be exploited to solve the system at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare three iterative solvers on the discrete second derivative as the number of unknowns grows.</p>
      <IterativeResidualViz />
    </>
  ),

  theory: (
    <>
      <Definition title="splitting methods">
        <p>Write A = M − N with M easy to invert, and iterate</p>
        <MD>{"Mx_{k+1} = Nx_k + b,\\qquad e_{k+1} = Ge_k,\\quad G = M^{-1}N."}</MD>
        <p>
          <strong>Jacobi</strong> takes M = D, the diagonal of A; <strong>Gauss–Seidel</strong> takes M = D + L, the lower
          triangle, so each new value is used at once. Each sweep costs about as much as one product with A.
        </p>
      </Definition>

      <Theorem title="convergence">
        <p>
          The iteration converges from every starting vector if and only if the spectral radius{" "}
          <M>{"\\rho(G) < 1"}</M>, and then the error falls by about a factor <M>{"\\rho(G)"}</M> per step. Both methods converge
          when A is strictly diagonally dominant, and Gauss–Seidel converges when A is symmetric positive definite. For
          tridiag(−1, 2, −1) of size n, Jacobi has <M>{"\\rho = \\cos\\frac{\\pi}{n+1} \\approx 1 - \\frac{\\pi^2}{2(n+1)^2}"}</M>, so
          the number of sweeps grows like <M>{"n^2"}</M>.
        </p>
      </Theorem>

      <Definition title="conjugate gradients">
        <p>
          For symmetric positive definite A, the conjugate gradient method (Hestenes and Stiefel, 1952) chooses{" "}
          <M>{"x_k"}</M> in the Krylov space <M>{"\\operatorname{span}\\{b, Ab, \\ldots, A^{k-1}b\\}"}</M> to minimise the
          error in the norm <M>{"\\|e\\|_A = \\sqrt{e^{\\mathsf T}Ae}"}</M>. Short recurrences make each step cost one product
          with A. In exact arithmetic it terminates in at most n steps, and
        </p>
        <MD>{"\\|e_k\\|_A \\le 2\\left(\\frac{\\sqrt\\kappa - 1}{\\sqrt\\kappa + 1}\\right)^k\\|e_0\\|_A."}</MD>
      </Definition>

      <Example title="why the square root matters">
        <p>
          For the Poisson matrix, <M>{"\\kappa \\approx 4(n+1)^2/\\pi^2"}</M>, so <M>{"\\sqrt\\kappa"}</M> grows like n and CG
          needs about n steps where Jacobi needs about <M>{"n^2"}</M>. With n = 1000 that is the difference between a thousand
          and a million sweeps.
        </p>
      </Example>

      <Remark title="preconditioning and multigrid">
        <p>
          A <strong>preconditioner</strong> P, cheap to invert and close to A, replaces A by <M>{"P^{-1}A"}</M> with smaller
          condition number. Multigrid methods, which smooth errors on a hierarchy of coarser grids, solve Poisson-type
          problems in a number of sweeps independent of n. Jacobi and Gauss–Seidel survive mainly as smoothers inside them.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rho",
      rung: "check",
      prompt: <p>When does a splitting iteration converge from every starting vector?</p>,
      answer: { kind: "choice", options: ["When the spectral radius of M⁻¹N is less than 1", "When A is invertible", "When M is diagonal", "Always"], correct: [0] },
    },
    {
      key: "spd",
      rung: "check",
      prompt: <p>The conjugate gradient method, in its basic form, requires A to be what?</p>,
      answer: { kind: "choice", options: ["Symmetric positive definite", "Diagonal", "Upper triangular", "Orthogonal"], correct: [0] },
    },
    {
      key: "jac",
      rung: "apply",
      prompt: <p>One Jacobi step for [[4, 1], [1, 3]] x = (1, 2) from x = (0, 0) gives a new second component. What is it?</p>,
      answer: { kind: "numeric", value: 0.6667, tolerance: 0.001 },
    },
    {
      key: "spec",
      rung: "apply",
      prompt: <p>What is the spectral radius of the Jacobi iteration for tridiag(−1, 2, −1) with n = 9?</p>,
      answer: { kind: "numeric", value: 0.9511, tolerance: 0.001 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation with n = 30, after how many iterations does conjugate gradients reach a residual below 1e−8?</p>,
      answer: { kind: "numeric", value: 15, tolerance: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"\\|G\\| < 1"}</M> in some induced matrix norm, the iteration <M>{"x_{k+1} = Gx_k + c"}</M> converges to the solution of x = Gx + c from every start.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the error recursion, each error being G times the previous one, so that the k-th error is Gᵏ times the initial one.",
          "Bounds its norm by ‖G‖ᵏ times the initial error, using the induced norm.",
          "Concludes the error tends to 0, so the iterates converge to the fixed point.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the CG bound depend on <M>{"\\sqrt\\kappa"}</M> rather than κ, and what does a good preconditioner achieve?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Connects CG to minimising over polynomials, for which Chebyshev polynomials give the √κ rate.",
          "Explains that preconditioning lowers κ, reducing the number of iterations.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, differential equations: stepping forward in time with Euler&rsquo;s method and the Runge–Kutta family.
    </p>
  ),
};
