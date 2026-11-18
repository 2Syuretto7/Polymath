import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { RayleighViz } from "@/components/viz/RayleighViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.5.3",
  minutes: 90,
  links: {
    revisits: ["m23.5.2", "m3.7.3", "m23.2.3"],
    foreshadows: ["m23.5.4", "m17.5.3", "m33.4.1"],
  },

  puzzle: (
    <>
      <p>
        A symmetric matrix has an orthonormal basis of eigenvectors, and in that basis it is diagonal. A string fixed at one
        end vibrates in a list of pure modes, each a sine wave. Is the string&rsquo;s list of modes the
        infinite-dimensional version of the matrix&rsquo;s eigenvectors? What would we need to prove it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Turn a unit vector x and watch ⟨Tx, x⟩: where are its highest and lowest values?</p>
      <RayleighViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the spectral theorem for compact self-adjoint operators">
        <p>
          Let <M>T</M> be a compact self-adjoint operator on a Hilbert space <M>H</M>. There is an orthonormal sequence{" "}
          <M>{"(e_n)"}</M> of eigenvectors, with real eigenvalues <M>{"\\lambda_n"}</M>, either finitely many or tending to 0,
          such that for every <M>x</M>
        </p>
        <MD>{"Tx = \\sum_n \\lambda_n \\langle x, e_n \\rangle\\, e_n,"}</MD>
        <p>
          and <M>H</M> is the orthogonal sum of <M>{"\\ker T"}</M> and the closed span of the <M>{"e_n"}</M>.
        </p>
      </Theorem>

      <Example title="the proof">
        <p>
          Eigenvalues are real and eigenvectors for distinct eigenvalues are orthogonal, as for matrices. For self-adjoint{" "}
          <M>T</M>, <M>{"\\|T\\| = \\sup_{\\|x\\| = 1} |\\langle Tx, x \\rangle|"}</M>. Take unit vectors{" "}
          <M>{"x_k"}</M> with <M>{"\\langle Tx_k, x_k \\rangle \\to \\lambda = \\pm\\|T\\|"}</M>; then{" "}
          <M>{"\\|Tx_k - \\lambda x_k\\|^2 \\le 2\\lambda^2 - 2\\lambda \\langle Tx_k, x_k \\rangle \\to 0"}</M>, and
          compactness gives a subsequence with <M>{"Tx_k"}</M> convergent, hence <M>{"x_k \\to e"}</M> with{" "}
          <M>{"Te = \\lambda e"}</M>. The orthogonal complement of <M>e</M> is invariant under <M>T</M>, so repeat there.
          Compactness forces the eigenvalues found to tend to 0.
        </p>
      </Example>

      <Example title="a vibrating string">
        <p>On <M>{"L^2[0, 1]"}</M>, the integral operator with kernel <M>{"\\min(x, y)"}</M> solves</p>
        <MD>{"-u'' = f, \\quad u(0) = 0, \\quad u'(1) = 0."}</MD>
        <p>
          It is compact and self-adjoint, with eigenfunctions <M>{"\\sqrt{2}\\sin\\big((n - \\tfrac12)\\pi x\\big)"}</M> and
          eigenvalues <M>{"1 / \\big((n - \\tfrac12)^2 \\pi^2\\big)"}</M>, which tend to 0. The theorem says these sines form
          an orthonormal basis.
        </p>
      </Example>

      <Remark title="where it leads">
        <p>
          Hilbert built this theory between 1904 and 1910 for integral equations, and the word &lsquo;spectrum&rsquo; was later found to
          fit the spectral lines of atoms. For a compact operator the spectrum is a sequence; for the bounded and unbounded
          self-adjoint operators of quantum mechanics, sums become integrals over the spectrum, in von Neumann&rsquo;s general
          spectral theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the spectral theorem give for a compact self-adjoint operator?</p>,
      answer: { kind: "choice", options: ["An orthonormal sequence of eigenvectors that diagonalises it, with real eigenvalues tending to 0", "A bounded inverse", "A unitary square root", "Eigenvalues tending to infinity"], correct: [0] },
    },
    {
      key: "real",
      rung: "check",
      prompt: <p>Why are the eigenvalues of a self-adjoint operator real?</p>,
      answer: { kind: "choice", options: ["λ‖x‖² = ⟨Tx, x⟩ = ⟨x, Tx⟩ = λ̄‖x‖²", "Because T is compact", "Because H is real", "Because ‖T‖ is real"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for [[2, 1], [1, 2]], what is the largest value of ⟨Tx, x⟩ over unit vectors x?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "string",
      rung: "apply",
      prompt: <p>What is the largest eigenvalue of the operator with kernel min(x, y), that is 4/π²? Give a decimal.</p>,
      answer: { kind: "numeric", value: 0.4053, tolerance: 0.001 },
    },
    {
      key: "zero",
      rung: "apply",
      prompt: <p>Why must the non-zero eigenvalues of a compact operator tend to 0?</p>,
      answer: { kind: "choice", options: ["Otherwise the orthonormal eigenvectors would have images with no convergent subsequence", "Because the operator is bounded", "Because eigenvalues are real", "Because the space is separable"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that eigenvectors of a self-adjoint operator for distinct eigenvalues are orthogonal.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes Tx = λx and Ty = μy with λ ≠ μ, both real.",
          "Computes λ⟨x, y⟩ = ⟨Tx, y⟩ = ⟨x, Ty⟩ = μ⟨x, y⟩.",
          "Concludes (λ − μ)⟨x, y⟩ = 0, so ⟨x, y⟩ = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that if T is compact and self-adjoint, Tx = Σ λₙ⟨x, eₙ⟩eₙ, and λ ≠ 0 is not any λₙ, then T − λI is injective.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes Tx = λx and expands x in the basis given by the eₙ together with the kernel of T.",
          "Compares coefficients: (λₙ − λ)⟨x, eₙ⟩ = 0 gives ⟨x, eₙ⟩ = 0, and the kernel part satisfies −λ times it equals 0.",
          "Concludes x = 0. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        For a matrix, Ax = y has a unique solution for every y exactly when Ax = 0 has only the trivial solution. Fredholm
        found that integral equations behave in the same way.
      </p>
      <p>
        Next, the Fredholm alternative: for a compact K, the equation x − Kx = y is uniquely solvable for every y unless the
        homogeneous equation has a non-zero solution, and then a finite set of conditions decides solvability.
      </p>
    </>
  ),
};
