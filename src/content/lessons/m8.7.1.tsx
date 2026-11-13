import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SignatureViz } from "@/components/viz/SignatureViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.7.1",
  minutes: 85,
  links: {
    revisits: ["m8.4.2", "m3.7.4", "m5.3.2"],
    foreshadows: ["m8.7.2", "m26.5.1", "m31.3.1"],
  },

  puzzle: (
    <>
      <p>
        An inner product is a special kind of function of two vectors. Drop the requirement of positivity, and you get the
        geometry of special relativity, where some vectors have negative squared length. What survives when we change basis,
        and what can we still say?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a quadratic form, then shear the basis. Watch the matrix change while the curves and the signature stay put.
      </p>
      <SignatureViz />
    </>
  ),

  theory: (
    <>
      <Definition title="bilinear form">
        <p>
          A <strong>bilinear form</strong> on <M>{"V"}</M> is a map <M>{"\\beta : V \\times V \\to F"}</M> that is linear in
          each argument. In a basis it has the matrix <M>{"B_{jk} = \\beta(e_j, e_k)"}</M>, so{" "}
          <M>{"\\beta(u, v) = u^{\\mathsf T} B v"}</M> in coordinates. It is <strong>symmetric</strong> if{" "}
          <M>{"\\beta(u, v) = \\beta(v, u)"}</M>.
        </p>
      </Definition>

      <Theorem title="change of basis">
        <p>
          If <M>{"P"}</M> is the matrix whose columns are a new basis, the matrix of <M>{"\\beta"}</M> becomes{" "}
          <M>{"P^{\\mathsf T}BP"}</M>. This is <strong>congruence</strong>, not similarity: an operator transforms by{" "}
          <M>{"P^{-1}AP"}</M>, a form by <M>{"P^{\\mathsf T}BP"}</M>.
        </p>
      </Theorem>

      <Definition title="quadratic form">
        <p>
          The <strong>quadratic form</strong> of a symmetric <M>{"\\beta"}</M> is <M>{"q(v) = \\beta(v, v)"}</M>. Unless{" "}
          <M>{"1 + 1 = 0"}</M> in the field, <M>{"\\beta"}</M> is recovered by polarisation:
        </p>
        <MD>{"\\beta(u, v) = \\tfrac12\\big(q(u + v) - q(u) - q(v)\\big)."}</MD>
      </Definition>

      <Theorem title="Sylvester's law of inertia">
        <p>
          A real symmetric bilinear form has a basis in which its matrix is diagonal with entries 1, <M>{"-1"}</M> and 0. The
          numbers <M>{"p"}</M>, <M>{"n"}</M> and <M>{"z"}</M> of each, the <strong>signature</strong>, do not depend on the
          basis chosen.
        </p>
      </Theorem>

      <Proof>
        <p>
          Existence: by the spectral theorem, <M>{"B"}</M> has an orthonormal eigenbasis; rescale each eigenvector by{" "}
          <M>{"1/\\sqrt{|\\lambda|}"}</M> when <M>{"\\lambda \\ne 0"}</M>. Invariance: <M>{"p"}</M> is the largest dimension
          of a subspace on which <M>{"q"}</M> is positive definite. If a basis gave <M>{"p'"}</M> positive entries and some
          subspace <M>{"U"}</M> with <M>{"\\dim U > p'"}</M> had <M>{"q > 0"}</M> on it, then <M>{"U"}</M> would meet the span
          of the other <M>{"\\dim V - p'"}</M> basis vectors, where <M>{"q \\le 0"}</M>, in a nonzero vector: a contradiction.
          The same argument applies to <M>{"n"}</M>.
        </p>
      </Proof>

      <Example title="space-time">
        <p>
          Special relativity uses <M>{"q(x, y, z, t) = x^2 + y^2 + z^2 - c^2t^2"}</M>, of signature <M>{"(3, 1)"}</M>. Vectors
          with <M>{"q < 0"}</M> point within the light cone, <M>{"q = 0"}</M> along it. Lorentz transformations are the linear
          maps preserving <M>{"q"}</M>, as rotations are those preserving <M>{"x^2 + y^2 + z^2"}</M>.
        </p>
      </Example>

      <Remark title="other forms">
        <p>
          The Hessian of a function at a critical point is a quadratic form, and its signature classifies the point: a minimum
          if positive definite, a maximum if negative definite, a saddle if indefinite. Alternating forms, with{" "}
          <M>{"\\beta(v, v) = 0"}</M>, give symplectic geometry, the setting of Hamiltonian mechanics.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mat",
      rung: "check",
      prompt: <p>What is the matrix of β(x, y) = x₁y₁ + 2x₁y₂ + 2x₂y₁ − x₂y₂ in the standard basis of ℝ²?</p>,
      answer: { kind: "choice", options: ["[1, 2; 2, −1]", "[1, 4; 0, −1]", "[1, 2; 2, 1]", "[2, 1; −1, 2]"], correct: [0] },
    },
    {
      key: "rule",
      rung: "check",
      prompt: <p>How does the matrix B of a bilinear form change when the basis changes by P?</p>,
      answer: { kind: "choice", options: ["P⁻¹BP", "PᵀBP", "PBP⁻¹", "It does not change"], correct: [1] },
    },
    {
      key: "sig",
      rung: "apply",
      prompt: <p>The form q = x² − y² + z² on ℝ³ has how many positive entries in its signature?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "type",
      rung: "apply",
      prompt: <p>What kind of form is q(x, y) = x² + 4xy + y²?</p>,
      answer: {
        kind: "choice",
        options: ["Positive definite", "Negative definite", "Indefinite", "Zero"],
        correct: [2],
      },
    },
    {
      key: "polar",
      rung: "apply",
      prompt: <p>For a symmetric form, q(u) = 3, q(v) = 5 and q(u + v) = 12. What is β(u, v)?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the polarisation identity β(u, v) = (q(u + v) − q(u) − q(v))/2 for a symmetric bilinear form.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands q(u + v) = β(u + v, u + v) by bilinearity into four terms.",
          "Uses symmetry to combine β(u, v) + β(v, u) = 2β(u, v).",
          "Rearranges and divides by 2.",
        ],
      },
    },
    {
      key: "hess",
      rung: "stretch",
      prompt: <p>Explain how the signature of the Hessian classifies a critical point of a function f(x, y), and give an example of each kind.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that near the point, f differs from its value by about half the Hessian form.",
          "Matches signature (2, 0) to a minimum, (0, 2) to a maximum and (1, 1) to a saddle.",
          "Gives examples such as x² + y², −x² − y² and x² − y². Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what bilinear and quadratic forms are, how their matrices change by congruence, the polarisation identity, Sylvester's law of inertia and its proof idea, and examples from relativity and calculus.",

  glimpse: (
    <p>
      The next lesson builds the tensor product, the space that turns bilinear maps into linear ones. Geometry uses
      symmetric forms as metrics and curvature tensors.
    </p>
  ),
};
