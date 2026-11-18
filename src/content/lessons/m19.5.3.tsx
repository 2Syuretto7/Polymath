import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { PowerIterationViz } from "@/components/viz/PowerIterationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.5.3",
  minutes: 90,
  links: {
    revisits: ["m19.5.2", "m3.7.1", "m8.4.2"],
    foreshadows: ["m19.5.4", "m19.6.2", "m23.5.3"],
  },

  puzzle: (
    <>
      <p>
        Eigenvalues are the roots of the characteristic polynomial, so why not compute that polynomial and find its roots?
        Because a perturbation of one part in 10⁹ to one coefficient of a degree-20 polynomial can move its roots from
        real numbers into the complex plane. Every serious eigenvalue code avoids the characteristic polynomial altogether.
        What does it do instead?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Repeatedly multiply a vector by a matrix and rescale. Change the ratio of the two eigenvalues and watch the speed.</p>
      <PowerIterationViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="power iteration">
        <p>
          Suppose <M>{"|\\lambda_1| > |\\lambda_2| \\ge \\cdots"}</M> with eigenvectors <M>{"v_i"}</M>, and{" "}
          <M>{"x_0 = \\sum c_iv_i"}</M> with <M>{"c_1 \\ne 0"}</M>. Then
        </p>
        <MD>{"A^kx_0 = \\lambda_1^k\\Big(c_1v_1 + \\sum_{i\\ge2}c_i(\\lambda_i/\\lambda_1)^kv_i\\Big),"}</MD>
        <p>
          so the normalised iterates approach <M>{"\\pm v_1"}</M> with error <M>{"O(|\\lambda_2/\\lambda_1|^k)"}</M>. For
          symmetric A the Rayleigh quotient <M>{"x^{\\mathsf T}Ax/x^{\\mathsf T}x"}</M> approximates <M>{"\\lambda_1"}</M>{" "}
          with error <M>{"O(|\\lambda_2/\\lambda_1|^{2k})"}</M>.
        </p>
      </Theorem>

      <Definition title="shifts and inverses">
        <p>
          <strong>Inverse iteration</strong> with shift σ applies power iteration to <M>{"(A - \\sigma I)^{-1}"}</M>, whose
          eigenvalues are <M>{"1/(\\lambda_i - \\sigma)"}</M>. It converges to the eigenvector whose eigenvalue is closest to
          σ, at rate <M>{"|\\lambda_j - \\sigma|/|\\lambda_k - \\sigma|"}</M>, the nearest over the next nearest. Updating σ to
          the current Rayleigh quotient at each step, <strong>Rayleigh quotient iteration</strong>, converges cubically for
          symmetric matrices.
        </p>
      </Definition>

      <Example title="the QR algorithm">
        <p>Set <M>{"A_0 = A"}</M> and repeat: factor <M>{"A_k = Q_kR_k"}</M>, then form</p>
        <MD>{"A_{k+1} = R_kQ_k = Q_k^{\\mathsf T}A_kQ_k."}</MD>
        <p>
          Each <M>{"A_k"}</M> is similar to A, and under mild conditions <M>{"A_k"}</M> tends to triangular form with the
          eigenvalues on the diagonal. Unshifted, this is power iteration on all of a basis at once. Practical codes first
          reduce A to Hessenberg form (tridiagonal if symmetric) by Householder reflections, so that each step costs{" "}
          <M>{"O(n^2)"}</M>, then use shifts and deflation. The whole spectrum costs about <M>{"10n^3"}</M> flops.
        </p>
      </Example>

      <Remark title="a top-ten algorithm">
        <p>
          The QR algorithm, found independently by John Francis and Vera Kublanovskaya around 1961, is often listed among the
          most important algorithms of the twentieth century. Large sparse problems, where only a few eigenvalues are wanted,
          use instead Krylov methods such as Lanczos and Arnoldi, the eigenvalue cousins of the conjugate gradient method in
          the next lesson.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Power iteration converges to an eigenvector of which eigenvalue?</p>,
      answer: { kind: "choice", options: ["The one of largest absolute value", "The smallest one", "The one closest to 1", "Any of them, at random"], correct: [0] },
    },
    {
      key: "rate",
      rung: "check",
      prompt: <p>At what rate does the angle error of power iteration fall?</p>,
      answer: { kind: "choice", options: ["By a factor |λ₂/λ₁| per step", "By a factor 1/2 per step", "Quadratically", "By a factor |λ₁| per step"], correct: [0] },
    },
    {
      key: "steps",
      rung: "apply",
      prompt: <p>If |λ₂/λ₁| = 0.5, about how many steps reduce the angle error by a factor of 1000?</p>,
      answer: { kind: "numeric", value: 10, tolerance: 0.5 },
    },
    {
      key: "rq",
      rung: "apply",
      prompt: <p>Compute the Rayleigh quotient of A = [[2, 1], [1, 2]] at x = (1, 1).</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "shift",
      rung: "apply",
      prompt: <p>A has eigenvalues 1 and 3. Inverse iteration with shift σ = 2.9 reduces the error by what factor per step?</p>,
      answer: { kind: "numeric", value: 0.0526, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that each iterate <M>{"A_{k+1} = R_kQ_k"}</M> of the QR algorithm has the same eigenvalues as <M>{"A_k"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses Q orthogonal to write R = QᵀA.",
          "Deduces that the next iterate is QᵀAQ, a similarity transformation of the current one A.",
          "Concludes that similar matrices share their characteristic polynomial and so their eigenvalues.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why do eigenvalue codes avoid finding the roots of the characteristic polynomial?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that polynomial roots can be extremely sensitive to the coefficients, as in Wilkinson’s example.",
          "Contrasts this with the good conditioning of eigenvalues of symmetric matrices, which orthogonal methods preserve.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, iterative methods for linear systems too large to factor: Jacobi, Gauss–Seidel, and conjugate gradients.
    </p>
  ),
};
