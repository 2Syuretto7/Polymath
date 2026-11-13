import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { AdjointViz } from "@/components/viz/AdjointViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.4.1",
  minutes: 80,
  links: {
    revisits: ["m8.3.3", "m8.1.5", "m3.5.1"],
    foreshadows: ["m8.4.2", "m8.4.4", "m23.5.3"],
  },

  puzzle: (
    <>
      <p>
        The transpose of a matrix looks like a bookkeeping trick: swap rows and columns. Yet it keeps turning up, in the
        normal equations, in symmetric matrices, in the four fundamental subspaces. Is there a meaning behind it that does not
        depend on writing a matrix at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Set the entries of <M>{"T"}</M> and turn the vectors <M>{"v"}</M> and <M>{"w"}</M>. The two inner products never
        disagree.
      </p>
      <AdjointViz />
    </>
  ),

  theory: (
    <>
      <Definition title="adjoint">
        <p>
          Let <M>{"T : V \\to W"}</M> be linear between finite-dimensional inner product spaces. The <strong>adjoint</strong>{" "}
          <M>{"T^* : W \\to V"}</M> is the map with
        </p>
        <MD>{"\\langle Tv, w \\rangle = \\langle v, T^* w \\rangle \\quad \\text{for all } v \\in V,\\ w \\in W."}</MD>
        <p>
          It exists by Riesz: for fixed <M>{"w"}</M>, the map <M>{"v \\mapsto \\langle Tv, w \\rangle"}</M> is a linear
          functional on <M>{"V"}</M>, so it equals <M>{"\\langle v, u \\rangle"}</M> for exactly one <M>{"u"}</M>, and{" "}
          <M>{"T^* w"}</M> is that <M>{"u"}</M>. One checks that <M>{"T^*"}</M> is linear.
        </p>
      </Definition>

      <Theorem title="properties">
        <p>
          <M>{"(S + T)^* = S^* + T^*"}</M>, <M>{"(\\lambda T)^* = \\bar\\lambda T^*"}</M>, <M>{"(T^*)^* = T"}</M>,{" "}
          <M>{"I^* = I"}</M> and <M>{"(ST)^* = T^* S^*"}</M>. Moreover
        </p>
        <MD>{"\\operatorname{null} T^* = (\\operatorname{range} T)^\\perp, \\qquad \\operatorname{range} T^* = (\\operatorname{null} T)^\\perp."}</MD>
      </Theorem>

      <Proof>
        <p>
          For the first identity: <M>{"w \\in \\operatorname{null} T^*"}</M> means <M>{"T^* w = 0"}</M>, which holds exactly
          when <M>{"\\langle v, T^* w \\rangle = 0"}</M> for all <M>{"v"}</M>, that is, <M>{"\\langle Tv, w \\rangle = 0"}</M>{" "}
          for all <M>{"v"}</M>, which says <M>{"w \\perp \\operatorname{range} T"}</M>. Apply this to <M>{"T^*"}</M> and take
          complements for the second.
        </p>
      </Proof>

      <Theorem title="the matrix of the adjoint">
        <p>
          With respect to <strong>orthonormal</strong> bases, the matrix of <M>{"T^*"}</M> is the conjugate transpose of the
          matrix of <M>{"T"}</M>. Over <M>{"\\mathbb{R}"}</M> it is simply the transpose.
        </p>
      </Theorem>

      <Proof>
        <p>
          With orthonormal bases <M>{"e_k"}</M> of <M>{"V"}</M> and <M>{"f_j"}</M> of <M>{"W"}</M>, the <M>{"(j, k)"}</M>{" "}
          entry of <M>{"\\mathcal{M}(T)"}</M> is <M>{"\\langle T e_k, f_j \\rangle"}</M>. The <M>{"(k, j)"}</M> entry of{" "}
          <M>{"\\mathcal{M}(T^*)"}</M> is{" "}
          <M>{"\\langle T^* f_j, e_k \\rangle = \\overline{\\langle e_k, T^* f_j \\rangle} = \\overline{\\langle T e_k, f_j \\rangle}"}</M>.
        </p>
      </Proof>

      <Definition title="self-adjoint">
        <p>
          An operator <M>{"T"}</M> on <M>{"V"}</M> is <strong>self-adjoint</strong> if <M>{"T = T^*"}</M>. In an
          orthonormal basis its matrix equals its own conjugate transpose: symmetric in the real case, Hermitian in the
          complex case.
        </p>
      </Definition>

      <Theorem title="eigenvalues of self-adjoint operators are real">
        <p>
          If <M>{"Tv = \\lambda v"}</M> with <M>{"v \\ne 0"}</M>, then{" "}
          <M>{"\\lambda \\|v\\|^2 = \\langle Tv, v \\rangle = \\langle v, Tv \\rangle = \\bar\\lambda \\|v\\|^2"}</M>, so{" "}
          <M>{"\\lambda = \\bar\\lambda"}</M>.
        </p>
      </Theorem>

      <Example title="a map between different spaces">
        <p>
          Let <M>{"T(x, y, z) = (x + 2y, 3z)"}</M> from <M>{"\\mathbb{R}^3"}</M> to <M>{"\\mathbb{R}^2"}</M>. Then{" "}
          <M>{"\\langle T(x, y, z), (a, b) \\rangle = ax + 2ay + 3bz = \\langle (x, y, z), (a, 2a, 3b) \\rangle"}</M>, so{" "}
          <M>{"T^*(a, b) = (a, 2a, 3b)"}</M>.
        </p>
      </Example>

      <Remark title="why orthonormal matters">
        <p>
          The conjugate transpose rule fails in other bases, because the inner product no longer looks like the dot product of
          coordinates. In infinite dimensions adjoints describe, for instance, integration by parts: the adjoint of{" "}
          <M>{"d/dx"}</M> on suitable functions is <M>{"-d/dx"}</M>. Quantum mechanics represents observables by
          self-adjoint operators, precisely because their eigenvalues, the possible measurements, are real.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "prod",
      rung: "check",
      prompt: <p>What is (ST)*?</p>,
      answer: { kind: "choice", options: ["S*T*", "T*S*", "ST", "(TS)*"], correct: [1] },
    },
    {
      key: "entry",
      rung: "check",
      prompt: <p>In the standard basis of ℝ², T has matrix [1, 2; 3, 4]. What is the top-right entry of the matrix of T*?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "complex",
      rung: "apply",
      prompt: <p>On ℂ² with the standard basis, T has matrix [1, i; 0, 2]. What is the bottom-left entry of the matrix of T*?</p>,
      answer: { kind: "choice", options: ["i", "−i", "0", "2"], correct: [1] },
    },
    {
      key: "sa",
      rung: "apply",
      prompt: <p>Which matrices, in the standard basis, give self-adjoint operators? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["[2, 5; 5, −1] on ℝ²", "[1, i; i, 1] on ℂ²", "[1, i; −i, 1] on ℂ²", "[0, 1; −1, 0] on ℝ²"],
        correct: [0, 2],
      },
    },
    {
      key: "map",
      rung: "apply",
      prompt: <p>For T(x, y, z) = (x + 2y, 3z), compute T*(1, 1). What is the sum of its coordinates?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every eigenvalue of a self-adjoint operator is real.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes an eigenvector v ≠ 0 with Tv = λv.",
          "Computes ⟨Tv, v⟩ two ways: as λ‖v‖², and, using T = T*, as ⟨v, Tv⟩ = λ̄‖v‖².",
          "Divides by ‖v‖² ≠ 0 to get λ = λ̄, so λ is real.",
        ],
      },
    },
    {
      key: "basis",
      rung: "stretch",
      prompt: <p>Explain why the matrix of T* need not be the transpose of the matrix of T when the basis is not orthonormal. An example or a general reason will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the proof used ⟨Te_k, f_j⟩ as the matrix entry, which needs orthonormality.",
          "Gives an example, such as a basis (1, 0), (1, 1) of ℝ² in which a symmetric operator has a non-symmetric matrix, or explains the general reason.",
          "Connects this to the inner product not being the dot product of coordinates. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the adjoint of a linear map is, why it exists, how its null space and range relate to those of the map, why its matrix is the conjugate transpose in orthonormal bases, and why self-adjoint operators have real eigenvalues.",

  glimpse: (
    <p>
      The next lesson proves the spectral theorem: self-adjoint operators are exactly those with an orthonormal basis of
      eigenvectors. Functional analysis extends it to compact self-adjoint operators on Hilbert spaces.
    </p>
  ),
};
