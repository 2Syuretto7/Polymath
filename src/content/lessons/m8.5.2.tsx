import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { NilpotentViz } from "@/components/viz/NilpotentViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.5.2",
  minutes: 85,
  links: {
    revisits: ["m8.5.1", "m8.1.3", "m8.2.3"],
    foreshadows: ["m8.5.3", "m8.6.1", "m32.3.1"],
  },

  puzzle: (
    <>
      <p>
        Differentiate a cubic four times and you get 0. An operator some power of which is 0 cannot be diagonalised unless it
        is already 0, yet these operators are exactly what remains when eigenvalues are stripped away. How many essentially
        different ones are there on a five-dimensional space?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose how five basis vectors split into chains, and read off the matrix and the dimensions of the null spaces of the
        powers.
      </p>
      <NilpotentViz />
    </>
  ),

  theory: (
    <>
      <Definition title="nilpotent">
        <p>
          An operator <M>{"N"}</M> is <strong>nilpotent</strong> if <M>{"N^k = 0"}</M> for some <M>{"k"}</M>. By the lesson on
          generalised eigenvectors, then <M>{"N^{\\dim V} = 0"}</M>, and every nonzero vector is a generalised eigenvector for
          0.
        </p>
      </Definition>

      <Theorem title="basic facts">
        <p>
          A nilpotent operator has 0 as its only eigenvalue, and has a strictly upper-triangular matrix, with zeros on and below
          the diagonal, with respect to some basis. On each generalised eigenspace, <M>{"T = \\lambda I + N"}</M> with{" "}
          <M>{"N = T - \\lambda I"}</M> nilpotent.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"Nv = \\lambda v"}</M> with <M>{"v \\ne 0"}</M> then <M>{"0 = N^k v = \\lambda^k v"}</M>, so{" "}
          <M>{"\\lambda = 0"}</M>. For the matrix, choose a basis of <M>{"\\operatorname{null} N"}</M>, extend it to one of{" "}
          <M>{"\\operatorname{null} N^2"}</M>, and so on. <M>{"N"}</M> sends each vector of the basis into the span of the
          earlier vectors.
        </p>
      </Proof>

      <Theorem title="chains">
        <p>
          If <M>{"N"}</M> is nilpotent there are vectors <M>{"v_1, \\dots, v_r"}</M> and lengths <M>{"m_1, \\dots, m_r"}</M>{" "}
          such that
        </p>
        <MD>{"N^{m_1 - 1}v_1, \\dots, Nv_1, v_1, \\ \\dots,\\ N^{m_r - 1}v_r, \\dots, Nv_r, v_r"}</MD>
        <p>
          is a basis and <M>{"N^{m_k}v_k = 0"}</M> for each <M>{"k"}</M>. In this basis the matrix of <M>{"N"}</M> has 1s just
          above the diagonal within each chain and 0s elsewhere.
        </p>
      </Theorem>

      <Proof>
        <p>
          Sketch, by induction on dimension. <M>{"N"}</M> restricted to <M>{"\\operatorname{range} N"}</M> is nilpotent on a
          smaller space, so that space has a chain basis. Each chain there starts with some <M>{"Nu_k"}</M>; lengthen it by
          prefixing <M>{"u_k"}</M>. The ends of the chains form a linearly independent list in{" "}
          <M>{"\\operatorname{null} N"}</M>; extend it to a basis of <M>{"\\operatorname{null} N"}</M> with new chains of length
          1. Counting dimensions with rank-nullity shows the result is a basis.
        </p>
      </Proof>

      <Example title="counting chains">
        <p>
          The number of chains is <M>{"\\dim \\operatorname{null} N"}</M>, and in general
        </p>
        <MD>{"\\dim \\operatorname{null} N^k - \\dim \\operatorname{null} N^{k-1} = \\text{the number of chains of length at least } k."}</MD>
        <p>
          So the chain lengths are determined by <M>{"N"}</M>. On a five-dimensional space they form a partition of 5, and
          there are exactly seven nilpotent operators up to change of basis, one for each partition in the figure.
        </p>
      </Example>

      <Example title="differentiation">
        <p>
          On polynomials of degree at most 3, differentiation <M>{"D"}</M> sends{" "}
          <M>{"x^3 \\mapsto 3x^2 \\mapsto 6x \\mapsto 6 \\mapsto 0"}</M>. So it is nilpotent with a single chain of length 4,
          and <M>{"D^4 = 0"}</M> while <M>{"D^3 \\ne 0"}</M>.
        </p>
      </Example>

      <Remark title="towards Jordan form">
        <p>
          Combining this with the decomposition into generalised eigenspaces gives the Jordan form: every operator on a complex
          space has a basis in which it is a block diagonal of <M>{"\\lambda I + N"}</M> blocks, each <M>{"N"}</M> a single
          chain. Nilpotent pieces also appear in Lie theory, where nilpotent Lie algebras are the next simplest after abelian
          ones.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "eig",
      rung: "check",
      prompt: <p>What are the possible eigenvalues of a nilpotent operator?</p>,
      answer: { kind: "choice", options: ["Only 0", "Only 1", "0 and 1", "Any complex number"], correct: [0] },
    },
    {
      key: "dim",
      rung: "check",
      prompt: <p>N is nilpotent on a 4-dimensional space. Which power of N is certainly 0? Give the smallest such guaranteed power.</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "diff",
      rung: "apply",
      prompt: <p>On polynomials of degree at most 5, what is the smallest k with Dᵏ = 0, where D is differentiation?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "null2",
      rung: "apply",
      prompt: <p>A nilpotent N has chains of lengths 3 and 2. What is the dimension of null N²?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "sum",
      rung: "apply",
      prompt: <p>Is the sum of the nilpotent matrices [0, 1; 0, 0] and [0, 0; 1, 0] nilpotent?</p>,
      answer: {
        kind: "choice",
        options: ["Yes, sums of nilpotents are nilpotent.", "No: the sum [0, 1; 1, 0] has eigenvalues 1 and −1.", "Yes, because its trace is 0.", "Only over ℂ."],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that 0 is the only eigenvalue of a nilpotent operator.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes Nv = λv with v ≠ 0, and Nᵏ = 0.",
          "Computes Nᵏv = λᵏv, and notes it equals 0.",
          "Concludes λᵏ = 0 since v ≠ 0, so λ = 0.",
        ],
      },
    },
    {
      key: "inverse",
      rung: "stretch",
      prompt: <p>If N is nilpotent, show that I + N is invertible, and give a formula for its inverse.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Proposes I − N + N² − ⋯ ± Nᵏ⁻¹, with Nᵏ = 0.",
          "Multiplies by I + N and notes the sum telescopes to I ± Nᵏ = I.",
          "Connects this to the geometric series 1/(1 + x). Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a nilpotent operator is, why its only eigenvalue is 0, how a basis of chains gives its matrix, how the chain lengths are read from dimensions of null spaces, and an example with differentiation.",

  glimpse: (
    <p>
      The next lesson assembles generalised eigenspaces and chains into the Jordan form. Later lessons define the trace, and
      Lie theory studies nilpotent algebras.
    </p>
  ),
};
