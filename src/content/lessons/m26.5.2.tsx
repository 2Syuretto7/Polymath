import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { WedgeAreaViz } from "@/components/viz/WedgeAreaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.5.2",
  minutes: 90,
  links: {
    revisits: ["m26.5.1", "m8.6.2", "m12.6.1"],
    foreshadows: ["m26.5.3", "m26.5.4", "m26.6.2"],
  },

  puzzle: (
    <>
      <p>
        To integrate over a surface we need to measure tiny parallelograms. Area has a sign once we orient: swap the two sides
        and the parallelogram is traversed the other way. The objects that measure signed k-dimensional volumes, varying from
        point to point, are differential forms, and they are what integrals on manifolds are made of.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The 2-form dx ∧ dy measures the signed area of the parallelogram spanned by v and w. Move the vectors, and swap them to
        see the sign change.
      </p>
      <WedgeAreaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="alternating tensors">
        <p>
          A covariant k-tensor ω is <strong>alternating</strong> if it changes sign whenever two arguments are swapped;
          equivalently, it vanishes when two arguments are equal. The alternating k-tensors on an n-dimensional space form a
          space <M>{"\\Lambda^k"}</M> of dimension <M>{"\\binom{n}{k}"}</M>. In particular the alternating n-tensors form a line,
          spanned by the determinant.
        </p>
      </Definition>

      <Definition title="the wedge product">
        <p>
          For covectors, <M>{"(\\alpha^1 \\wedge \\dots \\wedge \\alpha^k)(v_1, \\dots, v_k) = \\det\\big(\\alpha^i(v_j)\\big)"}</M>.
          The wedge product extends to an associative product <M>{"\\Lambda^k \\times \\Lambda^l \\to \\Lambda^{k+l}"}</M>, with{" "}
          <M>{"\\omega \\wedge \\eta = (-1)^{kl} \\, \\eta \\wedge \\omega"}</M>. In particular <M>{"dx \\wedge dx = 0"}</M> and{" "}
          <M>{"dx \\wedge dy = -dy \\wedge dx"}</M>. The forms <M>{"dx^{i_1} \\wedge \\dots \\wedge dx^{i_k}"}</M> with{" "}
          <M>{"i_1 < \\dots < i_k"}</M> form a basis.
        </p>
      </Definition>

      <Definition title="differential forms">
        <p>
          A <strong>differential k-form</strong> on M is a smooth field of alternating k-tensors, written locally as{" "}
          <M>{"\\omega = \\sum_{I} \\omega_I \\, dx^{i_1} \\wedge \\dots \\wedge dx^{i_k}"}</M>. Write <M>{"\\Omega^k(M)"}</M> for the
          space of them. 0-forms are functions; on an n-manifold, forms of degree above n are zero.
        </p>
      </Definition>

      <Theorem title="pullback and the Jacobian">
        <p>
          Forms pull back along smooth maps, and pullback respects the wedge product:{" "}
          <M>{"F^*(\\omega \\wedge \\eta) = F^*\\omega \\wedge F^*\\eta"}</M>. For a map <M>{"F: \\mathbb{R}^n \\to \\mathbb{R}^n"}</M>,{" "}
          <M>{"F^*(dy^1 \\wedge \\dots \\wedge dy^n) = \\det(DF) \\, dx^1 \\wedge \\dots \\wedge dx^n"}</M>. This is the
          change of variables formula, built into the algebra.
        </p>
      </Theorem>

      <Example title="polar coordinates">
        <p>
          With x = r cos θ and y = r sin θ,{" "}
          <M>{"dx \\wedge dy = (\\cos\\theta \\, dr - r \\sin\\theta \\, d\\theta) \\wedge (\\sin\\theta \\, dr + r \\cos\\theta \\, d\\theta) = r \\, dr \\wedge d\\theta"}</M>.
          The factor r is the familiar Jacobian of polar coordinates.
        </p>
      </Example>

      <Remark title="why alternating?">
        <p>
          Integrals over oriented manifolds must change sign when orientation is reversed, and must transform by the
          determinant of the Jacobian, not its absolute value. Alternating tensors do exactly this, which is why forms, not
          arbitrary tensors, are what we integrate.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "alt",
      rung: "check",
      prompt: <p>What does it mean for a tensor to be alternating?</p>,
      answer: { kind: "choice", options: ["It changes sign whenever two arguments are swapped", "It is symmetric", "It takes only one argument", "It is positive definite"], correct: [0] },
    },
    {
      key: "dim",
      rung: "check",
      prompt: <p>What is the dimension of the space of alternating 2-tensors on ℝ⁴?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take v = (2, 1) and w = (1, 3). What is (dx ∧ dy)(v, w)?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "sq",
      rung: "apply",
      prompt: <p>What is (dx + dy) ∧ (dx − dy)?</p>,
      answer: { kind: "choice", options: ["−2 dx ∧ dy", "2 dx ∧ dy", "0", "dx ∧ dx − dy ∧ dy"], correct: [0] },
    },
    {
      key: "high",
      rung: "apply",
      prompt: <p>On a 3-manifold, what is any 4-form?</p>,
      answer: { kind: "choice", options: ["Zero", "A multiple of dx ∧ dy ∧ dz", "A function", "A vector field"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if α is a 1-form then α ∧ α = 0, and give a 2-form ω on ℝ⁴ with ω ∧ ω ≠ 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses graded commutativity: α ∧ α = (−1)¹ α ∧ α, so 2 α ∧ α = 0.",
          "Takes ω = dx¹ ∧ dx² + dx³ ∧ dx⁴.",
          "Computes ω ∧ ω = 2 dx¹ ∧ dx² ∧ dx³ ∧ dx⁴ ≠ 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why do forms pull back along any smooth map, while vector fields cannot be pushed forward in general?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a form at F(p) can be evaluated on dF of vectors at p, using only the differential at one point.",
          "Notes pushing a field forward needs a single vector at each point of N, which fails if F is not injective or not onto.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Functions have a differential df. Is there a natural derivative taking k-forms to (k + 1)-forms, needing no
        coordinates and commuting with pullback? There is exactly one, and it unifies gradient, curl and divergence.
      </p>
      <p>Next, the exterior derivative.</p>
    </>
  ),
};
