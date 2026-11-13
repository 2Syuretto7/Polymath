import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TraceFlowViz } from "@/components/viz/TraceFlowViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.6.1",
  minutes: 75,
  links: {
    revisits: ["m8.5.1", "m8.2.3", "m3.7.2"],
    foreshadows: ["m8.6.2", "m10.4.2", "m26.7.2"],
  },

  puzzle: (
    <>
      <p>
        Add up the diagonal entries of a matrix. Change the basis, and every entry changes, yet that sum does not. Why should
        such a crude recipe be independent of the basis, and what does it measure?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a matrix <M>{"A"}</M> and let the flow of <M>{"x' = Ax"}</M> carry a square along. Compare its area with the
        trace.
      </p>
      <TraceFlowViz />
    </>
  ),

  theory: (
    <>
      <Definition title="trace">
        <p>
          For an operator <M>{"T"}</M> on a complex space, the <strong>trace</strong> is the sum of its eigenvalues, each
          repeated according to its multiplicity. For a real space, use the eigenvalues of the same matrix viewed over{" "}
          <M>{"\\mathbb{C}"}</M>; non-real ones come in conjugate pairs, so the sum is real.
        </p>
      </Definition>

      <Theorem title="trace is the sum of the diagonal">
        <p>
          In any basis, <M>{"\\operatorname{tr} T"}</M> equals the sum of the diagonal entries of the matrix of <M>{"T"}</M>.
          Also <M>{"\\operatorname{tr}(AB) = \\operatorname{tr}(BA)"}</M> for any square matrices.
        </p>
      </Theorem>

      <Proof>
        <p>Directly,</p>
        <MD>{"\\operatorname{tr}(AB) = \\sum_j \\sum_k A_{jk}B_{kj} = \\sum_k \\sum_j B_{kj}A_{jk} = \\operatorname{tr}(BA)."}</MD>
        <p>
          So the diagonal sum of <M>{"S^{-1}AS"}</M> is <M>{"\\operatorname{tr}(ASS^{-1}) = \\operatorname{tr}A"}</M>: it does
          not depend on the basis. In a basis where the matrix is upper-triangular, the diagonal entries are the eigenvalues
          with their multiplicities, so the diagonal sum is the trace.
        </p>
      </Proof>

      <Theorem title="trace in the characteristic polynomial">
        <p>
          The characteristic polynomial of <M>{"T"}</M> on an <M>{"n"}</M>-dimensional space is{" "}
          <M>{"z^n - (\\operatorname{tr} T)z^{n-1} + \\cdots"}</M>, since expanding{" "}
          <M>{"(z - \\lambda_1)\\cdots(z - \\lambda_n)"}</M> gives <M>{"-\\sum \\lambda_k"}</M> as the next coefficient.
        </p>
      </Theorem>

      <Example title="no Heisenberg relation in finite dimensions">
        <p>
          Quantum mechanics needs operators with <M>{"ST - TS = I"}</M>. In finite dimensions this is impossible: the left side
          has trace <M>{"\\operatorname{tr}(ST) - \\operatorname{tr}(TS) = 0"}</M>, while <M>{"\\operatorname{tr} I = n"}</M>.
          This is one reason quantum mechanics needs infinite-dimensional spaces.
        </p>
      </Example>

      <Remark title="trace as rate of expansion">
        <p>
          The determinant measures how a map scales volume, and <M>{"\\det e^{A} = e^{\\operatorname{tr} A}"}</M>. So the trace
          is the rate at which the flow of <M>{"x' = Ax"}</M> expands volume, the linear version of divergence. In Lie theory,
          the matrices of trace 0 are exactly the infinitesimal versions of the matrices of determinant 1.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "diag",
      rung: "check",
      prompt: <p>What is the trace of [1, 2; 3, 4]?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "cyclic",
      rung: "check",
      prompt: <p>Which identities hold for all square matrices A, B, C of the same size? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["tr(AB) = tr(BA)", "tr(ABC) = tr(CAB)", "tr(ABC) = tr(BAC)", "tr(A + B) = tr A + tr B"],
        correct: [0, 1, 3],
      },
    },
    {
      key: "eig",
      rung: "apply",
      prompt: <p>An operator on ℂ³ has eigenvalues 2, 3 and −1. What is its trace?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "proj",
      rung: "apply",
      prompt: <p>P is the orthogonal projection of ℝ⁵ onto a 3-dimensional subspace. What is tr P?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>A 2 by 2 matrix has trace 4 and determinant 3. What is its larger eigenvalue?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that similar matrices have the same diagonal sum.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Proves or cites tr(AB) = tr(BA), by swapping the order of a double sum.",
          "Writes the similar matrix as S⁻¹AS.",
          "Computes tr(S⁻¹AS) = tr(ASS⁻¹) = tr A.",
        ],
      },
    },
    {
      key: "heis",
      rung: "stretch",
      prompt: <p>Why can there be no n by n matrices with ST − TS = I? What does this suggest about the operators of quantum mechanics?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes tr(ST − TS) = 0 using tr(ST) = tr(TS).",
          "Notes tr I = n ≠ 0, a contradiction.",
          "Concludes that position and momentum operators must act on infinite-dimensional spaces, where trace is not defined for all operators. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the trace as a sum of eigenvalues, why it equals the diagonal sum in every basis, the identity tr(AB) = tr(BA), its place in the characteristic polynomial, and its meaning as a rate of volume expansion.",

  glimpse: (
    <p>
      The next lesson defines the determinant without a basis, as the product of eigenvalues and through alternating forms.
      Differential equations use det e^A = e^(tr A), and Lie theory studies trace-zero matrices.
    </p>
  ),
};
