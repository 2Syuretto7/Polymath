import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ParallelogramDetViz } from "@/components/viz/ParallelogramDetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.6.3",
  minutes: 80,
  links: {
    revisits: ["m8.6.2", "m3.6.3", "m8.4.5"],
    foreshadows: ["m12.5.2", "m22.3.3", "m26.6.1"],
  },

  puzzle: (
    <>
      <p>
        The area of an ellipse with semi-axes <M>{"a"}</M> and <M>{"b"}</M> is <M>{"\\pi ab"}</M>, and the volume of a
        parallelepiped is the absolute value of a determinant. Why should an algebraic recipe, defined through eigenvalues or
        alternating forms, measure size in space at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Set the two columns of a matrix and watch the unit grid deform. Compare the area of the shaded parallelogram with the
        determinant.
      </p>
      <ParallelogramDetViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="determinant scales volume">
        <p>
          For an operator <M>{"T"}</M> on <M>{"\\mathbb{R}^n"}</M> and any region <M>{"\\Omega"}</M> with a volume,
        </p>
        <MD>{"\\operatorname{vol} T(\\Omega) = |\\det T|\\, \\operatorname{vol} \\Omega."}</MD>
      </Theorem>

      <Proof>
        <p>
          Write <M>{"T = S\\sqrt{T^*T}"}</M> by the polar decomposition. An isometry carries any box to a congruent box, so it
          preserves volume, and <M>{"|\\det S| = 1"}</M> since <M>{"(\\det S)^2 = \\det(S^*S) = 1"}</M>. The positive operator{" "}
          <M>{"\\sqrt{T^*T}"}</M> stretches an orthonormal eigenbasis by the singular values <M>{"s_1, \\dots, s_n"}</M>, so it
          multiplies the volume of boxes aligned with that basis, and hence of any region, by{" "}
          <M>{"s_1 \\cdots s_n = \\det\\sqrt{T^*T}"}</M>. Multiplying, the factor is{" "}
          <M>{"|\\det S| \\det\\sqrt{T^*T} = |\\det T|"}</M>.
        </p>
      </Proof>

      <Definition title="orientation">
        <p>
          The sign of <M>{"\\det T"}</M> records whether <M>{"T"}</M> preserves orientation: positive for rotations and
          stretches, negative when an odd number of reflections is involved. A basis is positively oriented when the matrix
          with those columns has positive determinant.
        </p>
      </Definition>

      <Example title="the ellipse">
        <p>
          The ellipse <M>{"x^2/a^2 + y^2/b^2 \\le 1"}</M> is the image of the unit disc under{" "}
          <M>{"\\operatorname{diag}(a, b)"}</M>, so its area is <M>{"ab \\cdot \\pi"}</M>.
        </p>
      </Example>

      <Theorem title="volume of a k-dimensional parallelepiped">
        <p>
          The <M>{"k"}</M>-dimensional volume of the parallelepiped spanned by <M>{"v_1, \\dots, v_k"}</M> in{" "}
          <M>{"\\mathbb{R}^n"}</M> is <M>{"\\sqrt{\\det G}"}</M>, where <M>{"G_{jl} = \\langle v_j, v_l \\rangle"}</M> is the
          Gram matrix. When <M>{"k = n"}</M> and <M>{"A"}</M> has columns <M>{"v_j"}</M>, this is{" "}
          <M>{"\\sqrt{\\det A^{\\mathsf T}A} = |\\det A|"}</M>.
        </p>
      </Theorem>

      <Remark title="change of variables">
        <p>
          A differentiable map is approximately linear near each point, so it scales small volumes by the absolute value of
          the determinant of its derivative, the Jacobian. This gives the change of variables formula{" "}
          <M>{"\\int_{\\varphi(\\Omega)} f = \\int_\\Omega (f \\circ \\varphi)\\, |\\det D\\varphi|"}</M>, and for polar
          coordinates the factor <M>{"r"}</M> in <M>{"dx\\,dy = r\\,dr\\,d\\theta"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "par",
      rung: "check",
      prompt: <p>What is the area of the parallelogram spanned by (3, 1) and (1, 2)?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "neg",
      rung: "check",
      prompt: <p>What does a negative determinant tell you about a map of the plane?</p>,
      answer: {
        kind: "choice",
        options: ["It shrinks area.", "It reverses orientation.", "It is not invertible.", "It is a rotation."],
        correct: [1],
      },
    },
    {
      key: "cube",
      rung: "apply",
      prompt: <p>What is the volume of the image of the unit cube under diag(2, 3, 4)?</p>,
      answer: { kind: "numeric", value: 24 },
    },
    {
      key: "ell",
      rung: "apply",
      prompt: <p>What is the area of the region x²/9 + y²/4 ≤ 1, to two decimal places?</p>,
      answer: { kind: "numeric", value: 18.85, tolerance: 0.05 },
    },
    {
      key: "gram",
      rung: "apply",
      prompt: <p>What is the area of the parallelogram in ℝ³ spanned by (1, 0, 0) and (0, 1, 1), to three decimal places?</p>,
      answer: { kind: "numeric", value: 1.414, tolerance: 0.005 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that |det T| equals the product of the singular values of T.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes T = S√(T*T) with S an isometry.",
          "Shows |det S| = 1, for instance from det(S*S) = det I = 1 and det S* = conjugate of det S.",
          "Notes det √(T*T) is the product of its eigenvalues, the singular values, and multiplies.",
        ],
      },
    },
    {
      key: "polar",
      rung: "stretch",
      prompt: <p>Use the Jacobian of (r, θ) ↦ (r cos θ, r sin θ) to explain the factor r in dx dy = r dr dθ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the derivative matrix [cos θ, −r sin θ; sin θ, r cos θ].",
          "Computes its determinant r cos² θ + r sin² θ = r.",
          "Explains that a small rectangle in (r, θ) maps to a region of area about r times as large. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why a linear map scales every volume by the absolute value of its determinant, what the sign means, how to find the volume of a lower-dimensional parallelepiped with the Gram matrix, and how this leads to the change of variables formula.",

  glimpse: (
    <p>
      The next lesson studies bilinear and quadratic forms. Analysis proves the change of variables formula in full, and
      measure theory and integration on manifolds build on this scaling law.
    </p>
  ),
};
