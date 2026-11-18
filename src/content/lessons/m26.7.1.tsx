import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { RotGroupViz } from "@/components/viz/RotGroupViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.7.1",
  minutes: 90,
  links: {
    revisits: ["m26.5.4", "m7.1.2", "m7.1.3"],
    foreshadows: ["m26.7.2", "m26.7.3", "m26.7.4"],
  },

  puzzle: (
    <>
      <p>
        The rotations of the plane form a group, and they also form a circle. The rotations of space form a group too, and a
        three-dimensional manifold. What do we gain by treating a group as a smooth space?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose two rotation angles. Their product is another point on the circle, found by adding the angles.</p>
      <RotGroupViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Lie group">
        <p>
          A <strong>Lie group</strong> is a group G that is also a smooth manifold, such that multiplication{" "}
          <M>{"G \\times G \\to G"}</M> and inversion <M>{"G \\to G"}</M> are smooth maps. A <strong>Lie group homomorphism</strong>{" "}
          is a group homomorphism that is also smooth.
        </p>
      </Definition>

      <Example title="first examples">
        <p>
          ℝⁿ under addition. The circle <M>{"S^1 \\subset \\mathbb{C}"}</M> under multiplication, which is SO(2). The torus{" "}
          <M>{"T^n = S^1 \\times \\dots \\times S^1"}</M>. The general linear group <M>{"GL(n, \\mathbb{R})"}</M>, an open subset of
          the n²-dimensional space of matrices, since it is where the determinant is nonzero; its products and inverses are
          given by polynomials and Cramer&rsquo;s rule.
        </p>
      </Example>

      <Example title="matrix groups as level sets">
        <p>
          The orthogonal group <M>{"O(n) = \\{A : A^T A = I\\}"}</M> is the level set of <M>{"A \\mapsto A^T A"}</M>, a map into
          symmetric matrices. Its differential at A is <M>{"B \\mapsto B^T A + A^T B"}</M>, which is onto, so O(n) is a regular
          level set of dimension <M>{"n^2 - n(n+1)/2 = n(n-1)/2"}</M>. Its identity component SO(n) has dimension 3 when n = 3.
          Likewise <M>{"SL(n, \\mathbb{R})"}</M>, where det = 1, has dimension n² − 1.
        </p>
      </Example>

      <Definition title="translations">
        <p>
          For g in G, left translation <M>{"L_g(h) = gh"}</M> is a diffeomorphism with inverse{" "}
          <M>{"L_{g^{-1}}"}</M>. So every point looks like every other: the tangent space at g is{" "}
          <M>{"d(L_g)_e (T_e G)"}</M>, and the structure near the identity determines the structure everywhere.
        </p>
      </Definition>

      <Theorem title="parallelisability">
        <p>
          Every Lie group has trivial tangent bundle. Choose a basis <M>{"v_1, \\dots, v_n"}</M> of <M>{"T_e G"}</M> and set{" "}
          <M>{"X_i(g) = d(L_g)_e v_i"}</M>. These are smooth vector fields that form a basis at every point. So S² is not a Lie
          group, by the hairy ball theorem, while S¹ and S³ (the unit quaternions) are.
        </p>
      </Theorem>

      <Remark title="closed subgroups">
        <p>
          Cartan&rsquo;s closed subgroup theorem says that every closed subgroup of a Lie group is an embedded submanifold, and
          hence a Lie group. So every closed group of matrices is a Lie group, without any need to check charts by hand.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a Lie group?</p>,
      answer: { kind: "choice", options: ["A group that is a smooth manifold with smooth multiplication and inversion", "Any group of matrices", "A manifold with a vector field", "A group with finitely many elements"], correct: [0] },
    },
    {
      key: "dim",
      rung: "check",
      prompt: <p>What is the dimension of SO(3)?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set a = 120 and b = 300. What is the angle of the product, in degrees between 0 and 360?</p>,
      answer: { kind: "numeric", value: 60 },
    },
    {
      key: "sl",
      rung: "apply",
      prompt: <p>What is the dimension of SL(2, ℝ)?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "s2",
      rung: "apply",
      prompt: <p>Why can S² not be given the structure of a Lie group?</p>,
      answer: { kind: "choice", options: ["A Lie group has a nowhere vanishing vector field, and S² has none", "S² is not compact", "S² is not connected", "S² has no smooth structure"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that left translation by g is a diffeomorphism of a Lie group G.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes L_g is the composition of h ↦ (g, h) with multiplication, so it is smooth.",
          "Notes its inverse is left translation by g⁻¹, also smooth by the same argument.",
          "Concludes L_g is a diffeomorphism.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that O(n) is compact, and explain why it has exactly two connected components.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes O(n) is closed, as a level set, and bounded, since each column is a unit vector.",
          "Notes det is ±1 on O(n) and continuous, so the two signs are separated; reflection by a fixed matrix swaps them.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A Lie group is determined near the identity by its tangent space there. That tangent space carries an algebraic
        operation, the bracket, which records how the group fails to commute.
      </p>
      <p>Next, Lie algebras.</p>
    </>
  ),
};
