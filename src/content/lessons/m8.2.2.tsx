import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { InvariantLinesViz } from "@/components/viz/InvariantLinesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.2.2",
  minutes: 90,
  links: {
    revisits: ["m8.1.3", "m3.7.1", "m8.2.1"],
    foreshadows: ["m8.2.3", "m8.5.1", "m19.5.3"],
  },

  puzzle: (
    <>
      <p>
        To understand an operator on a large space, break the space into pieces the operator respects. The smallest such
        pieces are lines sent into themselves, the eigenvector directions. Does every operator have one? The usual proof uses
        the determinant. There is a proof without determinants, which works by looking at a single vector and its images.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Adjust a 2 by 2 matrix. Each dot on the unit circle is joined to its image. Find the lines that are mapped into
        themselves, and make them disappear.
      </p>
      <InvariantLinesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="invariant subspaces and eigenvalues">
        <p>
          For an operator <M>{"T"}</M> on <M>{"V"}</M>, a subspace <M>{"U"}</M> is <strong>invariant</strong> if{" "}
          <M>{"Tu \\in U"}</M> for every <M>{"u \\in U"}</M>. A one-dimensional invariant subspace is spanned by an{" "}
          <strong>eigenvector</strong> <M>{"v \\ne 0"}</M> with <M>{"Tv = \\lambda v"}</M>; the scalar <M>{"\\lambda"}</M>{" "}
          is an <strong>eigenvalue</strong>. Equivalently, <M>{"T - \\lambda I"}</M> is not injective.
        </p>
      </Definition>

      <Theorem title="eigenvectors for distinct eigenvalues">
        <p>Eigenvectors for distinct eigenvalues are linearly independent. So an operator on an n-dimensional space has at most n eigenvalues.</p>
      </Theorem>

      <Proof>
        <p>
          Suppose not, and take the first <M>{"v_k"}</M> that is a combination{" "}
          <M>{"a_1v_1 + \\cdots + a_{k-1}v_{k-1}"}</M> of earlier ones. Apply <M>{"T - \\lambda_k I"}</M>: the left side
          becomes 0, the right side <M>{"\\sum a_j(\\lambda_j - \\lambda_k)v_j"}</M>. The earlier vectors are independent and
          the factors <M>{"\\lambda_j - \\lambda_k"}</M> are non-zero, so every <M>{"a_j = 0"}</M>, making{" "}
          <M>{"v_k = 0"}</M>, which is impossible.
        </p>
      </Proof>

      <Theorem title="complex operators have eigenvalues">
        <p>Every operator on a non-zero finite-dimensional complex vector space has an eigenvalue.</p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"\\dim V = n"}</M> and <M>{"v \\ne 0"}</M>. The <M>{"n + 1"}</M> vectors{" "}
          <M>{"v, Tv, \\dots, T^nv"}</M> are dependent, so <M>{"p(T)v = 0"}</M> for some non-zero polynomial{" "}
          <M>{"p"}</M>, not constant. Factor <M>{"p(z) = c(z - \\lambda_1)\\cdots(z - \\lambda_m)"}</M> over{" "}
          <M>{"\\mathbb{C}"}</M>. Then <M>{"c(T - \\lambda_1 I)\\cdots(T - \\lambda_m I)v = 0"}</M>, so some{" "}
          <M>{"T - \\lambda_j I"}</M> is not injective: <M>{"\\lambda_j"}</M> is an eigenvalue.
        </p>
      </Proof>

      <Example title="rotations and shears">
        <p>
          Rotation of <M>{"\\mathbb{R}^2"}</M> by an angle other than 0 or <M>{"\\pi"}</M> has no invariant line, but as an
          operator on <M>{"\\mathbb{C}^2"}</M> it has eigenvalues <M>{"e^{\\pm i\\theta}"}</M>. The shear{" "}
          <M>{"(x, y) \\mapsto (x + y, y)"}</M> has the single eigenvalue 1, and only one invariant line, the x-axis: not
          enough eigenvectors for a basis.
        </p>
      </Example>

      <Remark title="next steps">
        <p>
          Eigenvalues alone do not describe an operator, as the shear shows. The next lesson finds a basis in which every
          complex operator is upper-triangular, using a chain of invariant subspaces. Generalised eigenvectors later repair
          the shortage of eigenvectors, and numerical algorithms find eigenvalues of huge matrices by iterating{" "}
          <M>{"v, Tv, T^2v, \\dots"}</M>, much as in the proof above.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "eig",
      rung: "check",
      prompt: <p>What are the eigenvalues of the diagonal matrix with entries 2, 5 and 5? Give their sum, counting 5 once.</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "inv",
      rung: "check",
      prompt: <p>Which of these subspaces are invariant under every operator T on V? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["{0}", "V", "null T", "range T", "A fixed line in V"], correct: [0, 1, 2, 3] },
    },
    {
      key: "shear",
      rung: "apply",
      prompt: <p>How many eigenvalues does the shear (x, y) ↦ (x + y, y) have?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "rot",
      rung: "apply",
      prompt: <p>Rotation of ℝ² by 90° has how many invariant lines?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "max",
      rung: "apply",
      prompt: <p>An operator on ℂ⁴ has at most how many distinct eigenvalues?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that null T and range T are invariant under T. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "If u is in null T, then Tu = 0, which is in null T.",
          "If w is in range T, then Tw is the image of a vector, so it is in range T.",
          "Concludes both are invariant.",
        ],
      },
    },
    {
      key: "real",
      rung: "stretch",
      prompt: <p>Adapt the proof to show that every operator on a non-zero finite-dimensional real space has an invariant subspace of dimension 1 or 2.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds a non-zero polynomial p with p(T)v = 0, as before.",
          "Factors p over ℝ into linear and irreducible quadratic factors, and finds one factor q with q(T) not injective.",
          "If q is linear, gets an eigenvector; if q(x) = x² + bx + c, takes w ≠ 0 with q(T)w = 0 and notes span(w, Tw) is invariant. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what invariant subspaces, eigenvalues and eigenvectors are, why eigenvectors for distinct eigenvalues are independent, the determinant-free proof that every complex operator has an eigenvalue, and why real operators may have none.",

  glimpse: (
    <p>
      The next lesson shows that every complex operator has an upper-triangular matrix. Generalised eigenvectors later give
      the Jordan form, and numerical analysis turns the sequence v, Tv, T²v into practical algorithms for eigenvalues.
    </p>
  ),
};
