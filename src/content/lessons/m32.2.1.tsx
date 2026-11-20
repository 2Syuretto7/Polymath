import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { TensorCharViz } from "@/components/viz/TensorCharViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.2.1",
  minutes: 90,
  links: {
    revisits: ["m14.6.3", "m14.6.4", "m14.6.2"],
    foreshadows: ["m32.2.2", "m32.2.3", "m32.5.3"],
  },

  puzzle: (
    <>
      <p>
        The standard representation of S₄ is three-dimensional, so its tensor square is nine-dimensional. Which
        irreducible representations does that square contain? You could write down twenty-four matrices of size 9 × 9.
        Or you could look at five numbers.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Build characters of S₄ by products and squares, and read off the decomposition.</p>
      <TensorCharViz />
    </>
  ),

  theory: (
    <>
      <Definition title="characters and their inner product">
        <p>
          The character of a complex representation V of a finite group G is <M>{"\\chi_V(g) = \\operatorname{tr}(g|_V)"}</M>.
          It is a class function. For class functions put{" "}
          <M>{"\\langle \\chi, \\psi \\rangle = \\frac{1}{|G|}\\sum_g \\chi(g)\\overline{\\psi(g)}"}</M>.
        </p>
      </Definition>

      <Theorem title="orthogonality">
        <ul>
          <li>Row orthogonality: the irreducible characters are orthonormal, and they form a basis of the class functions.</li>
          <li>So the number of irreducible representations equals the number of conjugacy classes, and <M>{"\\langle \\chi_V, \\chi_i \\rangle"}</M> is the multiplicity of the i-th irreducible in V.</li>
          <li>Column orthogonality: <M>{"\\sum_i \\chi_i(g)\\overline{\\chi_i(h)} = |C_G(g)|"}</M> if g and h are conjugate, and 0 otherwise. At g = h = e this gives <M>{"\\sum_i d_i^2 = |G|"}</M>.</li>
          <li>The dimension of each irreducible divides |G|.</li>
        </ul>
      </Theorem>

      <Theorem title="characters of constructions">
        <p>
          <M>{"\\chi_{V \\oplus W} = \\chi_V + \\chi_W"}</M>, <M>{"\\chi_{V \\otimes W} = \\chi_V \\chi_W"}</M> and{" "}
          <M>{"\\chi_{V^*} = \\overline{\\chi_V}"}</M>. For the symmetric and alternating squares,{" "}
          <M>{"\\chi_{\\mathrm{Sym}^2 V}(g) = \\tfrac12(\\chi(g)^2 + \\chi(g^2))"}</M> and{" "}
          <M>{"\\chi_{\\Lambda^2 V}(g) = \\tfrac12(\\chi(g)^2 - \\chi(g^2))"}</M>. These follow by diagonalising g with
          eigenvalues λᵢ: the square of the trace is Σλᵢ² + 2Σᵢ&lt;ⱼ λᵢλⱼ.
        </p>
      </Theorem>

      <Example title="the standard representation of S₄">
        <p>
          Its character on the classes e, (12), (12)(34), (123), (1234) is 3, 1, −1, 0, −1. Squaring gives 9, 1, 1, 0, 1,
          and inner products give standard ⊗ standard = trivial + 2-dim + standard + (standard ⊗ sign). It splits as
          Sym² = trivial + 2-dim + standard, of dimension 6, and Λ² = standard ⊗ sign, of dimension 3.
        </p>
      </Example>

      <Remark title="the Frobenius–Schur indicator">
        <p>
          For an irreducible character, <M>{"\\nu(\\chi) = \\frac1{|G|}\\sum_g \\chi(g^2)"}</M> is 1, 0 or −1. It is 1 when
          the representation can be realised over the reals, 0 when χ is not real-valued, and −1 when χ is real but the
          representation is quaternionic. It is the multiplicity of the trivial representation in Sym² minus that in Λ².
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "tens",
      rung: "check",
      prompt: <p>What is the character of V ⊗ W?</p>,
      answer: { kind: "choice", options: ["The pointwise product of the characters of V and W", "Their sum", "Their inner product", "The character of V alone"], correct: [0] },
    },
    {
      key: "count",
      rung: "check",
      prompt: <p>How many irreducible complex representations does a finite group have, up to isomorphism?</p>,
      answer: { kind: "choice", options: ["As many as it has conjugacy classes", "As many as it has elements", "Always two", "As many as it has subgroups"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which irreducible representation is Λ² of the standard representation?</p>,
      answer: { kind: "choice", options: ["standard ⊗ sign", "the 2-dim one", "sign", "standard"], correct: [0] },
    },
    {
      key: "mult",
      rung: "apply",
      prompt: <p>How many irreducible constituents, counted with multiplicity, does standard ⊗ standard have for S₄?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "fs",
      rung: "apply",
      prompt: <p>Compute the Frobenius–Schur indicator of the standard representation of S₄. The squares of the classes are e, e, e, (123) and (12)(34) in turn.</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Assuming the irreducible characters are orthonormal, show that a representation is irreducible exactly when ⟨χ, χ⟩ = 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes χ = Σ mᵢ χᵢ with non-negative integer multiplicities mᵢ, by complete reducibility.",
          "Computes ⟨χ, χ⟩ = Σ mᵢ² by orthonormality.",
          "Concludes Σ mᵢ² = 1 exactly when one mᵢ is 1 and the rest are 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>S₄ has five irreducible representations, exactly two of dimension 1. Using only Σ dᵢ² = 24, find the dimensions of the other three.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Reduces to a² + b² + c² = 22 with each of a, b, c at least 2.",
          "Finds 2, 3, 3 and checks no other solution works.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Products and squares build new representations from old ones on the same group. There is also a way to build a
        representation of a group from one of a subgroup.
      </p>
      <p>Next, induced representations.</p>
    </>
  ),
};
