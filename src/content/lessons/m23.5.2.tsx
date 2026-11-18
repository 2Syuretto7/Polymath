import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { TruncateViz } from "@/components/viz/TruncateViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.5.2",
  minutes: 90,
  links: {
    revisits: ["m23.5.1", "m23.1.3", "m12.1.4"],
    foreshadows: ["m23.5.3", "m23.5.4", "m23.6.3"],
  },

  puzzle: (
    <>
      <p>
        Riesz&rsquo;s lemma says the unit ball of an infinite-dimensional space is never compact. So no operator can fix this:
        the identity maps the ball to itself. But some operators squash the ball so hard that its image is compact after all.
        Which ones, and what do they have in common with matrices?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Approximate a diagonal operator by keeping only its first N entries.</p>
      <TruncateViz />
    </>
  ),

  theory: (
    <>
      <Definition title="compact operators">
        <p>
          <M>{"T \\in B(X, Y)"}</M> is <strong>compact</strong> if the image of the unit ball has compact closure;
          equivalently, every bounded sequence <M>{"(x_n)"}</M> has a subsequence along which <M>{"Tx_n"}</M> converges.
          Finite-rank operators are compact, by Heine-Borel in finite dimensions.
        </p>
      </Definition>

      <Theorem title="closure under limits">
        <p>
          If <M>{"T_n"}</M> are compact and <M>{"\\|T_n - T\\| \\to 0"}</M>, with <M>Y</M> a Banach space, then <M>T</M> is
          compact. In a Hilbert space the converse holds: every compact operator is a norm limit of finite-rank operators.
          So a diagonal operator <M>{"D(x_n) = (\\lambda_n x_n)"}</M> on <M>{"\\ell^2"}</M> is compact exactly when{" "}
          <M>{"\\lambda_n \\to 0"}</M>.
        </p>
      </Theorem>

      <Example title="integral operators">
        <p>For a continuous kernel <M>k</M> on <M>{"[0, 1]^2"}</M>, the operator</p>
        <MD>{"Kf(x) = \\int_0^1 k(x, y)\\, f(y) \\, dy"}</MD>
        <p>
          on <M>{"C[0, 1]"}</M> is compact: the images of the unit ball are uniformly bounded and equicontinuous, by uniform
          continuity of <M>k</M>, so Arzelà-Ascoli applies. On <M>{"L^2"}</M>, Hilbert-Schmidt kernels with{" "}
          <M>{"\\iint |k|^2 < \\infty"}</M> give compact operators too.
        </p>
      </Example>

      <Remark title="spectra of compact operators">
        <p>
          A compact operator sends weakly convergent sequences to norm convergent ones. On an infinite-dimensional space its
          spectrum contains 0, every non-zero point of the spectrum is an eigenvalue with a finite-dimensional eigenspace,
          and these eigenvalues can accumulate only at 0. In this sense compact operators are the closest relatives of
          matrices.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is an operator T compact?</p>,
      answer: { kind: "choice", options: ["When it maps bounded sequences to sequences with convergent subsequences", "When its norm is less than 1", "When it is invertible", "When it is self-adjoint"], correct: [0] },
    },
    {
      key: "id",
      rung: "check",
      prompt: <p>Why is the identity on an infinite-dimensional space not compact?</p>,
      answer: { kind: "choice", options: ["Its unit ball is not compact, by Riesz’s lemma", "It has norm 1", "It is not bounded", "It has no eigenvalues"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with λₙ = 1/n and N = 4, what is the norm of the error?</p>,
      answer: { kind: "numeric", value: 0.2 },
    },
    {
      key: "diag",
      rung: "apply",
      prompt: <p>Which diagonal operator on ℓ² is compact?</p>,
      answer: { kind: "choice", options: ["λₙ = 1/√n", "λₙ = 1/2 + 1/n", "λₙ = (−1)ⁿ", "λₙ = 1"], correct: [0] },
    },
    {
      key: "kernel",
      rung: "apply",
      prompt: <p>Which theorem shows that an integral operator with continuous kernel is compact on C[0, 1]?</p>,
      answer: { kind: "choice", options: ["Arzelà-Ascoli", "Hahn-Banach", "Banach-Alaoglu", "The closed graph theorem"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a diagonal operator D on ℓ² with λₙ → 0 is compact, using its truncations.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines the truncation F keeping the first N entries, a finite-rank and hence compact operator.",
          "Shows ‖(D − F)x‖² = Σ over n > N of |λₙxₙ|² ≤ (sup over n > N of |λₙ|)² ‖x‖², so ‖D − F‖ → 0 as N grows.",
          "Concludes by the theorem that norm limits of compact operators are compact.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that if λₙ does not tend to 0, the diagonal operator D is not compact.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Picks ε > 0 and a subsequence with |λₙ| ≥ ε.",
          "Notes D eₙ = λₙ eₙ, and these vectors are at distance at least ε√2 from each other.",
          "Concludes the bounded sequence eₙ has no subsequence with D eₙ convergent. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A symmetric matrix can be diagonalised by an orthonormal basis of eigenvectors. Compact self-adjoint operators are
        the infinite-dimensional operators for which this still works.
      </p>
      <p>
        Next, the spectral theorem for compact self-adjoint operators: eigenvalues tending to 0, an orthonormal basis of
        eigenvectors, and the expansion of the operator as an infinite diagonal matrix.
      </p>
    </>
  ),
};
