import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CovectorViz } from "@/components/viz/CovectorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.5.1",
  minutes: 90,
  links: {
    revisits: ["m8.1.5", "m8.7.2", "m8.7.1"],
    foreshadows: ["m26.5.2", "m26.5.3", "m26.6.1"],
  },

  puzzle: (
    <>
      <p>
        The gradient of a function is usually drawn as an arrow. But to draw it you need an inner product, to turn the rate of
        change into a direction. Without one, what is df? It is not a vector, but a machine that eats a vector and returns a
        number: a covector. Vectors, covectors and their products are the tensors.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Draw a covector α as its stack of level lines. Choose α and a vector v, and count the lines the arrow crosses: that is
        α(v).
      </p>
      <CovectorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the cotangent bundle">
        <p>
          The <strong>cotangent space</strong> <M>{"T_p^*M"}</M> is the dual of <M>{"T_pM"}</M>: the linear maps{" "}
          <M>{"T_pM \\to \\mathbb{R}"}</M>. In a chart, the covectors <M>{"dx^i|_p"}</M> form the basis dual to{" "}
          <M>{"\\partial / \\partial x^i|_p"}</M>. They assemble into the <strong>cotangent bundle</strong> <M>{"T^*M"}</M>, and a
          smooth section is a <strong>1-form</strong> or covector field, written locally <M>{"\\omega = \\sum \\omega_i \\, dx^i"}</M>.
        </p>
      </Definition>

      <Definition title="the differential of a function">
        <p>
          A smooth function f gives the 1-form df, with <M>{"df_p(v) = v f"}</M>. In coordinates{" "}
          <M>{"df = \\sum (\\partial f / \\partial x^i) \\, dx^i"}</M>. This is the intrinsic gradient. Under a change of
          coordinates its components transform by the transpose of the inverse Jacobian, the opposite way to vectors: covectors
          are covariant, vectors contravariant.
        </p>
      </Definition>

      <Definition title="tensors">
        <p>
          A <strong>covariant k-tensor</strong> at p is a multilinear map <M>{"T_pM \\times \\dots \\times T_pM \\to \\mathbb{R}"}</M>{" "}
          with k arguments; it is an element of <M>{"T_p^*M \\otimes \\dots \\otimes T_p^*M"}</M>. A basis is given by{" "}
          <M>{"dx^{i_1} \\otimes \\dots \\otimes dx^{i_k}"}</M>, so the space has dimension <M>{"n^k"}</M>. Tensors with vector
          arguments as well are mixed tensors. A <strong>tensor field</strong> is a smooth section of the corresponding bundle.
        </p>
      </Definition>

      <Example title="Riemannian metrics">
        <p>
          A <strong>Riemannian metric</strong> is a symmetric covariant 2-tensor field g that is positive definite at each point:
          an inner product on each tangent space. On ℝ² it is <M>{"dx \\otimes dx + dy \\otimes dy"}</M>, often written{" "}
          <M>{"dx^2 + dy^2"}</M>. In polar coordinates the same tensor is <M>{"dr^2 + r^2 \\, d\\theta^2"}</M>. Every manifold has a
          Riemannian metric, by gluing local ones with a partition of unity.
        </p>
      </Example>

      <Theorem title="pullback">
        <p>
          Covariant tensors pull back along any smooth map <M>{"F: M \\to N"}</M>:{" "}
          <M>{"(F^*A)_p(v_1, \\dots, v_k) = A_{F(p)}(dF v_1, \\dots, dF v_k)"}</M>. Unlike vector fields, which push forward only
          along diffeomorphisms, covariant tensors always pull back, and <M>{"F^*(df) = d(f \\circ F)"}</M>.
        </p>
      </Theorem>

      <Remark title="why the fuss">
        <p>
          In ℝⁿ with its dot product, vectors and covectors can be identified, so the distinction seems pedantic. On a manifold
          with no preferred inner product it is essential: physical quantities such as momentum and force are naturally
          covectors, velocities are vectors, and confusing them gives formulas that change with the coordinates.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cot",
      rung: "check",
      prompt: <p>What is a covector at p?</p>,
      answer: { kind: "choice", options: ["A linear map from TₚM to ℝ", "A tangent vector at p", "A smooth function near p", "A chart around p"], correct: [0] },
    },
    {
      key: "dim",
      rung: "check",
      prompt: <p>What is the dimension of the space of covariant 3-tensors at a point of a 2-manifold?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take α = dx + 2 dy and v = (3, −1). What is α(v)?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "df",
      rung: "apply",
      prompt: <p>What is df for f(x, y) = x²y?</p>,
      answer: { kind: "choice", options: ["2xy dx + x² dy", "2x dx + dy", "x² dx + 2xy dy", "2xy dx"], correct: [0] },
    },
    {
      key: "pull",
      rung: "apply",
      prompt: <p>Pull back dx on ℝ along F(t) = t³. What is F*(dx)?</p>,
      answer: { kind: "choice", options: ["3t² dt", "t³ dt", "dt", "3t dt"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the components of a covector transform the opposite way to those of a vector: if x̃ are new coordinates, ω̃ⱼ = Σᵢ ωᵢ ∂xⁱ/∂x̃ʲ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes ω = Σ ωᵢ dxⁱ and uses dxⁱ = Σⱼ (∂xⁱ/∂x̃ʲ) dx̃ʲ, from the chain rule.",
          "Substitutes and collects the coefficient of dx̃ʲ.",
          "Notes this uses the inverse Jacobian ∂x/∂x̃, while vector components use ∂x̃/∂x.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can a Riemannian metric always be glued from local pieces with a partition of unity, while a nowhere vanishing vector field cannot?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a convex combination of positive definite forms is positive definite.",
          "Notes a combination of non-zero vectors can be zero, so gluing can create zeros.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Among covariant tensors, the alternating ones, which change sign when two arguments are swapped, are special. They
        measure signed areas and volumes, and they are exactly what can be integrated over a manifold.
      </p>
      <p>Next, differential forms.</p>
    </>
  ),
};
