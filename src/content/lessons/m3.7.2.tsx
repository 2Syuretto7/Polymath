import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DiagPowerViz } from "@/components/viz/DiagPowerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.7.2",
  minutes: 85,
  links: {
    revisits: ["m3.7.1", "m3.4.4", "m3.3.2"],
    foreshadows: ["m3.7.3", "m3.8.2", "m9.1.1"],
  },

  puzzle: (
    <>
      <p>
        Each year, 20% of the people living in a city move out, and 30% of those living outside move in. Whatever the
        starting numbers, the split settles down to the same proportions. Why should it settle at all, and how fast? You
        could multiply by the matrix a hundred times and watch. But there is a way to see the answer for every number of
        years at once.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a starting state and increase the power k. Each dot is the state after one more year. The table splits the
        starting state into two eigenvector parts: one part never changes, and the other halves every year.
      </p>
      <DiagPowerViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="diagonalisation">
        <p>
          Suppose the n by n matrix A has n linearly independent eigenvectors <M>{"x_1, \\dots, x_n"}</M>. Put them as the
          columns of an eigenvector matrix X, and the eigenvalues on the diagonal of Λ. Then
        </p>
        <MD>{"AX = X\\Lambda, \\qquad A = X\\Lambda X^{-1}, \\qquad \\Lambda = X^{-1}AX."}</MD>
      </Theorem>
      <Proof>
        <p>
          Column j of AX is <M>{"Ax_j = \\lambda_jx_j"}</M>, which is column j of <M>{"X\\Lambda"}</M>. X is invertible
          because its columns are independent.
        </p>
      </Proof>

      <Theorem title="powers">
        <MD>{"A^k = X\\Lambda^kX^{-1}, \\qquad \\Lambda^k = \\operatorname{diag}(\\lambda_1^k, \\dots, \\lambda_n^k)."}</MD>
        <p>
          Equivalently, write <M>{"u_0 = c_1x_1 + \\dots + c_nx_n"}</M>; then{" "}
          <M>{"A^ku_0 = c_1\\lambda_1^kx_1 + \\dots + c_n\\lambda_n^kx_n"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          <M>{"A^2 = X\\Lambda X^{-1}X\\Lambda X^{-1} = X\\Lambda^2X^{-1}"}</M>, and so on: the inner factors{" "}
          <M>{"X^{-1}X"}</M> cancel.
        </p>
      </Proof>
      <p>
        So the long-run behaviour is controlled by the eigenvalues. Parts with <M>{"|\\lambda| < 1"}</M> die away, parts with{" "}
        <M>{"|\\lambda| > 1"}</M> grow, and the largest |λ| eventually dominates.
      </p>

      <Example title="Fibonacci numbers">
        <p>
          The rule <M>{"F_{k+2} = F_{k+1} + F_k"}</M> becomes <M>{"u_{k+1} = Au_k"}</M> with{" "}
          <M>{"u_k = (F_{k+1}, F_k)"}</M> and <M>{"A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\end{bmatrix}"}</M>. The eigenvalues
          solve <M>{"\\lambda^2 - \\lambda - 1 = 0"}</M>:
        </p>
        <MD>{"\\lambda_1 = \\frac{1 + \\sqrt5}{2} \\approx 1.618, \\qquad \\lambda_2 = \\frac{1 - \\sqrt5}{2} \\approx -0.618."}</MD>
        <p>
          Splitting <M>{"u_0 = (1, 0)"}</M> into eigenvectors gives{" "}
          <M>{"F_k = (\\lambda_1^k - \\lambda_2^k)/\\sqrt5"}</M>. Since <M>{"|\\lambda_2| < 1"}</M>, <M>{"F_k"}</M> is the
          nearest integer to <M>{"\\lambda_1^k/\\sqrt5"}</M>, and the ratio of successive terms tends to the golden ratio.
        </p>
      </Example>

      <Definition title="when diagonalisation fails">
        <p>
          A matrix is <strong>diagonalisable</strong> if it has n independent eigenvectors. Distinct eigenvalues guarantee
          this, by the result at the end of the last lesson. Repeated eigenvalues may or may not leave enough. The shear{" "}
          <M>{"\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}"}</M> has λ = 1 twice but only one eigenvector direction, so
          it cannot be diagonalised. The identity has λ = 1 twice and every vector is an eigenvector.
        </p>
      </Definition>

      <Remark title="similar matrices">
        <p>
          Matrices A and <M>{"B = M^{-1}AM"}</M>, for any invertible M, are called <strong>similar</strong>. They have the
          same eigenvalues: if <M>{"Bx = \\lambda x"}</M>, then <M>{"A(Mx) = \\lambda(Mx)"}</M>. Similar matrices represent
          the same linear map in different bases. Diagonalising A means finding the basis, the eigenvectors, in which the map
          is simplest.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>When can an n by n matrix A be written as <M>{"X\\Lambda X^{-1}"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["Always.", "When A has n linearly independent eigenvectors.", "When A is invertible.", "When A is triangular."],
        correct: [1],
      },
    },
    {
      key: "similar",
      rung: "check",
      prompt: <p>Which do similar matrices always share?</p>,
      answer: { kind: "choice", options: ["eigenvalues", "eigenvectors", "entries", "pivots"], correct: [0] },
    },
    {
      key: "power",
      rung: "apply",
      prompt: (
        <p>
          A has eigenvalues 2 and 3, with u₀ = x₁ + x₂ for eigenvectors x₁, x₂. Then <M>{"A^3u_0 = ax_1 + bx_2"}</M>. What
          is b?
        </p>
      ),
      answer: { kind: "numeric", value: 27 },
    },
    {
      key: "steady",
      rung: "apply",
      prompt: (
        <p>
          In the visualisation, after many years, what fraction of the population lives in the city, whatever the start?
        </p>
      ),
      answer: { kind: "numeric", value: 0.6 },
    },
    {
      key: "diag",
      rung: "apply",
      prompt: <p>Which matrices are diagonalisable? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["[2 0; 0 2]", "[2 1; 0 2]", "[1 2; 0 3]", "[0 1; 0 0]"],
        correct: [0, 2],
      },
    },
    {
      key: "fib",
      rung: "prove",
      prompt: (
        <p>
          Derive the formula <M>{"F_k = (\\lambda_1^k - \\lambda_2^k)/\\sqrt5"}</M> by writing <M>{"u_0 = (1, 0)"}</M> as a
          combination of the eigenvectors <M>{"(\\lambda_1, 1)"}</M> and <M>{"(\\lambda_2, 1)"}</M> of the Fibonacci
          matrix.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Checks that (λ, 1) is an eigenvector when λ² = λ + 1.",
          "Solves (1, 0) = c₁(λ₁, 1) + c₂(λ₂, 1), getting c₁ = −c₂ = 1/(λ₁ − λ₂) = 1/√5.",
          "Applies A^k and reads off the second component. A careful derivation earns full credit.",
        ],
      },
    },
    {
      key: "markov",
      rung: "stretch",
      prompt: (
        <p>
          A Markov matrix has non-negative entries and columns that add to 1. Prove that 1 is always an eigenvalue. Hint:
          what is <M>{"A^{\\mathsf T}"}</M> times the vector of all ones?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes Aᵀ(1, …, 1) = (1, …, 1), since each row of Aᵀ is a column of A and adds to 1.",
          "Uses that A and Aᵀ have the same eigenvalues.",
          "Concludes 1 is an eigenvalue of A. A clear argument earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how eigenvectors diagonalise a matrix, why A^k = XΛ^kX⁻¹ makes powers easy, how the eigenvalues decide long-run behaviour, with the Fibonacci example, and when a matrix cannot be diagonalised.",

  glimpse: (
    <p>
      The next lesson shows that symmetric matrices can always be diagonalised with perpendicular eigenvectors. Change of
      basis, in the last chapter, revisits similar matrices, and Probability studies Markov chains in depth.
    </p>
  ),
};
