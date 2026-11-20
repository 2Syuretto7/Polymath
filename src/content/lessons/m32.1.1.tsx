import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { GroupCatalogueViz } from "@/components/viz/GroupCatalogueViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.1.1",
  minutes: 90,
  links: {
    revisits: ["m26.7.1", "m14.6.1", "m8.4.4"],
    foreshadows: ["m32.1.2", "m32.1.3", "m32.5.1"],
  },

  puzzle: (
    <>
      <p>
        The rotations of space form a group, and also a smooth three-dimensional manifold. So do the unit quaternions, a
        3-sphere. Each unit quaternion gives a rotation, and exactly two give each rotation. Are these the same Lie group,
        and how should we organise the zoo of matrix groups that mathematics and physics use?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a classical group and a size n. Compare its dimension with that of all n × n matrices.</p>
      <GroupCatalogueViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Lie groups and homomorphisms">
        <p>
          A <strong>Lie group</strong> is a group G that is a smooth manifold with smooth multiplication and inversion. A
          <strong> Lie group homomorphism</strong> is a smooth group homomorphism. A <strong>Lie subgroup</strong> is a
          subgroup with a Lie group structure making inclusion an immersion.
        </p>
      </Definition>

      <Theorem title="closed subgroups (Cartan)">
        <p>
          Every closed subgroup of a Lie group is an embedded Lie subgroup. So any subgroup of{" "}
          <M>{"GL(n, \\mathbb{R})"}</M> cut out by continuous equations is automatically a Lie group: no charts need to be
          built by hand.
        </p>
      </Theorem>

      <Example title="the classical groups">
        <ul>
          <li><M>{"GL(n, \\mathbb{R})"}</M>, <M>{"SL(n, \\mathbb{R})"}</M>, and their complex versions.</li>
          <li><M>{"O(n)"}</M> and <M>{"SO(n)"}</M>, preserving the Euclidean inner product; <M>{"O(p, q)"}</M>, preserving a form of signature (p, q), such as the Lorentz group <M>{"O(3, 1)"}</M>.</li>
          <li><M>{"U(n)"}</M> and <M>{"SU(n)"}</M>, preserving a Hermitian inner product.</li>
          <li><M>{"Sp(2n, \\mathbb{R})"}</M>, preserving the symplectic form <M>{"\\omega(x, y) = x^{\\mathsf{T}} J y"}</M>.</li>
        </ul>
      </Example>

      <Example title="SU(2) and SO(3)">
        <p>
          <M>{"SU(2) = \\left\\{ \\begin{pmatrix} a & -\\bar b \\\\ b & \\bar a \\end{pmatrix} : |a|^2 + |b|^2 = 1 \\right\\}"}</M>{" "}
          is the 3-sphere of unit quaternions. It acts on the 3-dimensional space of traceless Hermitian matrices by
          conjugation, preserving the determinant, which is minus the squared length. This gives a surjective homomorphism{" "}
          <M>{"SU(2) \\to SO(3)"}</M> with kernel {"{±I}"}: a double cover. So SO(3) is the real projective space{" "}
          <M>{"\\mathbb{RP}^3"}</M>, with fundamental group of order 2.
        </p>
      </Example>

      <Remark title="non-matrix groups">
        <p>
          Not every Lie group is a group of matrices. The universal cover of <M>{"SL(2, \\mathbb{R})"}</M> has no faithful
          finite-dimensional representation. Still, every compact Lie group is isomorphic to a closed subgroup of some U(n),
          a consequence of the Peter–Weyl theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "closed",
      rung: "check",
      prompt: <p>Why is O(n) a Lie group without building charts?</p>,
      answer: { kind: "choice", options: ["It is a closed subgroup of GL(n, ℝ)", "It is finite", "It is abelian", "It is open in GL(n, ℝ)"], correct: [0] },
    },
    {
      key: "cover",
      rung: "check",
      prompt: <p>What is the kernel of the homomorphism SU(2) → SO(3)?</p>,
      answer: { kind: "choice", options: ["{±I}", "{I}", "SU(2)", "The circle of diagonal matrices"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the dimension of SO(4)?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "su3",
      rung: "apply",
      prompt: <p>What is the dimension of SU(3)?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "sp",
      rung: "apply",
      prompt: <p>What is the dimension of Sp(4, ℝ), the 4 × 4 real symplectic matrices?</p>,
      answer: { kind: "numeric", value: 10, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that O(n) is compact.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes O(n) is closed, as the preimage of I under the continuous map A ↦ AᵀA.",
          "Notes it is bounded: each column of A is a unit vector, so every entry has absolute value at most 1.",
          "Concludes by Heine–Borel that O(n) is compact.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is GL(n, ℝ) disconnected but GL(n, ℂ) connected?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes det is a continuous map GL(n, ℝ) → ℝ \\ {0}, which is disconnected, and takes both signs.",
          "Notes ℂ \\ {0} is connected, and any invertible complex matrix can be joined to I, for example through upper-triangular form.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A Lie group is curved, but its tangent space at the identity is a vector space. The exponential map carries
        straight lines in that space to one-parameter subgroups, and asks how much of the group they reach.
      </p>
      <p>Next, the exponential map.</p>
    </>
  ),
};
