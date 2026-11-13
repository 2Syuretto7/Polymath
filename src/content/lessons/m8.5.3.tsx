import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { JordanViz } from "@/components/viz/JordanViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.5.3",
  minutes: 90,
  links: {
    revisits: ["m8.5.2", "m8.5.1", "m3.7.2"],
    foreshadows: ["m8.5.4", "m10.4.2", "m14.5.4"],
  },

  puzzle: (
    <>
      <p>
        Two matrices are similar when they describe the same operator in different bases. When are two matrices similar? Equal
        eigenvalues are not enough, and even equal characteristic and minimal polynomials are not enough. Over the complex
        numbers there is a complete answer: a normal form that every operator can be brought to, and that two operators share
        exactly when they are similar.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a Jordan structure on a four-dimensional space, and read off its polynomials and eigenspaces.</p>
      <JordanViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Jordan block">
        <p>
          The <strong>Jordan block</strong> <M>{"J_k(\\lambda)"}</M> is the <M>{"k \\times k"}</M> matrix with{" "}
          <M>{"\\lambda"}</M> on the diagonal, 1 just above it and 0 elsewhere:
        </p>
        <MD>{"J_3(\\lambda) = \\begin{pmatrix} \\lambda & 1 & 0 \\\\ 0 & \\lambda & 1 \\\\ 0 & 0 & \\lambda \\end{pmatrix}."}</MD>
      </Definition>

      <Theorem title="Jordan form">
        <p>
          Every operator <M>{"T"}</M> on a finite-dimensional complex vector space has a basis, a{" "}
          <strong>Jordan basis</strong>, in which its matrix is block diagonal with Jordan blocks. The blocks are unique up to
          order.
        </p>
      </Theorem>

      <Proof>
        <p>
          Decompose <M>{"V"}</M> into generalised eigenspaces <M>{"G(\\lambda_k, T)"}</M>. On each,{" "}
          <M>{"N = T - \\lambda_k I"}</M> is nilpotent, so it has a basis of chains, in which <M>{"N"}</M> has 1s just above the
          diagonal. Adding <M>{"\\lambda_k I"}</M> turns each chain into a block <M>{"J_m(\\lambda_k)"}</M>. Uniqueness: the
          number of blocks of size at least <M>{"j"}</M> for <M>{"\\lambda"}</M> is{" "}
          <M>{"\\dim \\operatorname{null}(T - \\lambda I)^j - \\dim \\operatorname{null}(T - \\lambda I)^{j-1}"}</M>, which depends
          only on <M>{"T"}</M>.
        </p>
      </Proof>

      <Definition title="minimal polynomial">
        <p>
          The <strong>minimal polynomial</strong> of <M>{"T"}</M> is the monic polynomial <M>{"p"}</M> of smallest degree with{" "}
          <M>{"p(T) = 0"}</M>. Every <M>{"q"}</M> with <M>{"q(T) = 0"}</M> is a multiple of it, including the characteristic
          polynomial. In Jordan terms, the power of <M>{"z - \\lambda"}</M> in it is the size of the largest block for{" "}
          <M>{"\\lambda"}</M>.
        </p>
      </Definition>

      <Theorem title="diagonalisability">
        <p>
          <M>{"T"}</M> is diagonalisable exactly when every Jordan block has size 1, which happens exactly when its minimal
          polynomial has no repeated roots.
        </p>
      </Theorem>

      <Example title="exponentials">
        <p>
          A Jordan block is <M>{"\\lambda I + N"}</M> with <M>{"N"}</M> nilpotent, and the two commute, so{" "}
          <M>{"e^{tJ} = e^{\\lambda t} e^{tN}"}</M>, where the series for <M>{"e^{tN}"}</M> stops. For a block of size 2,
        </p>
        <MD>{"e^{tJ_2(\\lambda)} = e^{\\lambda t}\\begin{pmatrix} 1 & t \\\\ 0 & 1 \\end{pmatrix}."}</MD>
        <p>This is where the solutions <M>{"te^{\\lambda t}"}</M> of differential equations come from.</p>
      </Example>

      <Remark title="theory, not computation">
        <p>
          The Jordan form classifies operators up to similarity, but it is fragile: the matrix{" "}
          <M>{"\\begin{pmatrix} 0 & 1 \\\\ \\varepsilon & 0 \\end{pmatrix}"}</M> is diagonalisable for every{" "}
          <M>{"\\varepsilon \\ne 0"}</M>, while at <M>{"\\varepsilon = 0"}</M> it is a single block. Rounding errors can change
          the form completely, so numerical work prefers the Schur and singular value decompositions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "blocks",
      rung: "check",
      prompt: <p>The number of Jordan blocks for the eigenvalue λ equals which of these?</p>,
      answer: {
        kind: "choice",
        options: ["The multiplicity of λ", "The dimension of the eigenspace of λ", "The degree of the minimal polynomial", "Always 1"],
        correct: [1],
      },
    },
    {
      key: "diag",
      rung: "check",
      prompt: <p>When is an operator on a complex space diagonalisable?</p>,
      answer: {
        kind: "choice",
        options: ["When all its Jordan blocks have size 1", "When it has a Jordan form", "When its eigenvalues are real", "Always"],
        correct: [0],
      },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>T on ℂ⁴ has characteristic polynomial (z − 2)⁴ and minimal polynomial (z − 2)³. How many Jordan blocks does it have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "size",
      rung: "apply",
      prompt: <p>T on ℂ⁴ has only the eigenvalue 2, with dim null(T − 2I) = 2 and dim null(T − 2I)² = 4. What is the size of the largest block?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>For J = J₂(0), what is the top-right entry of e^(3J)?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the Jordan block Jₖ(λ) with k ≥ 2 is not diagonalisable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the only eigenvalue is λ, since the matrix is upper-triangular with λ on the diagonal.",
          "Computes that Jₖ(λ) − λI has rank k − 1, so the eigenspace has dimension 1.",
          "Concludes there is no basis of k eigenvectors, since k ≥ 2.",
        ],
      },
    },
    {
      key: "fragile",
      rung: "stretch",
      prompt: <p>Find the eigenvalues of [0, 1; ε, 0] for small ε &gt; 0, and explain why this makes the Jordan form hard to compute numerically.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds eigenvalues ±√ε, distinct, so the matrix is diagonalisable.",
          "Notes that at ε = 0 the matrix is a single Jordan block J₂(0).",
          "Explains that a tiny perturbation, such as rounding error, changes the Jordan form, and moves eigenvalues by much more than ε. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a Jordan block and the Jordan form are, how they are built from generalised eigenspaces and chains, how to read the eigenspace dimensions and minimal polynomial from the blocks, and why the form is fragile numerically.",

  glimpse: (
    <p>
      The next lesson finds a canonical form that works over any field, even without eigenvalues. Differential equations use
      the Jordan form to compute matrix exponentials, and module theory derives both forms from one structure theorem.
    </p>
  ),
};
