import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { OrthogonalityLossViz } from "@/components/viz/OrthogonalityLossViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.5.2",
  minutes: 90,
  links: {
    revisits: ["m19.5.1", "m3.5.4", "m3.5.3"],
    foreshadows: ["m19.5.3", "m19.5.4", "m23.2.1"],
  },

  puzzle: (
    <>
      <p>
        Gram–Schmidt turns any basis into an orthonormal one, and you can prove it correct in a few lines. Run it on a
        computer with eight nearly parallel columns and the &ldquo;orthonormal&rdquo; vectors that come out are not
        orthogonal at all: some pairs are almost parallel. The proof is right. What is wrong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Grow the Hilbert matrix and watch how far each method&rsquo;s Q is from orthogonal.</p>
      <OrthogonalityLossViz />
    </>
  ),

  theory: (
    <>
      <Definition title="QR factorisation">
        <p>
          Every m × n matrix A with m ≥ n can be written A = QR with Q having orthonormal columns and R upper triangular.
          Gram–Schmidt computes Q column by column. <strong>Classical</strong> Gram–Schmidt subtracts from each column{" "}
          <M>{"a_j"}</M> its projections onto the earlier <M>{"q_i"}</M>, all computed from <M>{"a_j"}</M>;{" "}
          <strong>modified</strong> Gram–Schmidt subtracts them one at a time from the partly reduced vector. They agree in
          exact arithmetic, but in floating point the classical version can lose orthogonality entirely when columns are nearly
          dependent: what remains after subtraction is mostly rounding error.
        </p>
      </Definition>

      <Definition title="Householder reflections">
        <p>For a non-zero vector v, the reflection</p>
        <MD>{"H = I - \\frac{2vv^{\\mathsf T}}{v^{\\mathsf T}v}"}</MD>
        <p>
          is symmetric and orthogonal, and reflects in the hyperplane orthogonal to v. Choosing{" "}
          <M>{"v = x + \\operatorname{sign}(x_1)\\|x\\|e_1"}</M> sends x to <M>{"-\\operatorname{sign}(x_1)\\|x\\|e_1"}</M>,
          zeroing every entry below the first; the sign avoids cancellation. Applying n such reflections column by column gives{" "}
          <M>{"H_n\\cdots H_1A = R"}</M>, so <M>{"Q = H_1\\cdots H_n"}</M>.
        </p>
      </Definition>

      <Theorem title="stability">
        <p>
          Householder QR is backward stable: the computed factors are the exact QR factors of{" "}
          <M>{"A + \\delta A"}</M> with <M>{"\\|\\delta A\\| \\le c\\,mn\\,u\\|A\\|"}</M>, and the computed Q is orthogonal to
          working precision, whatever the conditioning of A. Orthogonal transformations do not magnify errors, since{" "}
          <M>{"\\|Qx\\|_2 = \\|x\\|_2"}</M>, so there is no growth factor to worry about. The price is about twice the work of
          LU.
        </p>
      </Theorem>

      <Example title="least squares">
        <p>
          To minimise <M>{"\\|Ax - b\\|_2"}</M>, the normal equations <M>{"A^{\\mathsf T}Ax = A^{\\mathsf T}b"}</M> square the
          condition number: if <M>{"\\kappa(A) = 10^6"}</M>, then <M>{"\\kappa(A^{\\mathsf T}A) = 10^{12}"}</M> and only about
          four digits survive. With A = QR, the problem becomes <M>{"Rx = Q^{\\mathsf T}b"}</M>, solved by back substitution,
          with accuracy governed by <M>{"\\kappa(A)"}</M> alone.
        </p>
      </Example>

      <Remark title="Givens rotations">
        <p>
          A Givens rotation acts on two rows at a time and zeroes a single entry. It is the tool of choice when A is already
          nearly triangular, as in the QR algorithm for eigenvalues in the next lesson, or when rows arrive one at a time.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "house",
      rung: "check",
      prompt: <p>Which properties does a Householder reflection H have?</p>,
      answer: { kind: "choice", options: ["Symmetric and orthogonal, with H² = I", "Upper triangular", "Singular", "Diagonal"], correct: [0] },
    },
    {
      key: "sign",
      rung: "check",
      prompt: <p>Why is v chosen as <M>{"x + \\operatorname{sign}(x_1)\\|x\\|e_1"}</M> rather than with a minus sign?</p>,
      answer: {
        kind: "choice",
        options: ["To avoid cancellation when x is close to a multiple of e₁", "To make H symmetric", "To make R positive", "It makes no difference"],
        correct: [0],
      },
    },
    {
      key: "norm",
      rung: "apply",
      prompt: <p>A Householder reflection sends x = (3, 4) to a multiple of e₁. What is the absolute value of its first entry?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "kappa",
      rung: "apply",
      prompt: <p>If <M>{"\\kappa(A) = 10^4"}</M>, then <M>{"\\kappa(A^{\\mathsf T}A) = 10^k"}</M>. What is k?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at about which size does classical Gram–Schmidt lose orthogonality completely?</p>,
      answer: { kind: "choice", options: ["n = 8", "n = 2", "n = 4", "It never does"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that <M>{"H = I - 2vv^{\\mathsf T}/(v^{\\mathsf T}v)"}</M> is symmetric and orthogonal.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows symmetry from the symmetry of vvᵀ.",
          "Expands H² and uses vᵀv to simplify the cross term, obtaining I.",
          "Concludes that HᵀH = H² = I, so H is orthogonal.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is it better to solve least squares problems with QR than with the normal equations?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that forming AᵀA squares the condition number.",
          "Explains that QR works with A directly, using orthogonal transformations that do not magnify errors.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, eigenvalues: power iteration, its shifted and inverted cousins, and the QR algorithm, which turns a sequence of
      QR factorisations into the spectrum.
    </p>
  ),
};
