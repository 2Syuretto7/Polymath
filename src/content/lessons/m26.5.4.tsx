import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { OrientFrameViz } from "@/components/viz/OrientFrameViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.5.4",
  minutes: 90,
  links: {
    revisits: ["m26.5.2", "m15.5.2", "m26.1.1"],
    foreshadows: ["m26.6.1", "m26.6.2", "m26.7.1"],
  },

  puzzle: (
    <>
      <p>
        On a sheet of paper you can agree on what &lsquo;anticlockwise&rsquo; means everywhere. Draw a small circular arrow
        on a Möbius band and slide it once around: it comes back turning the other way. Integrals need a sign convention, so
        this matters: on which manifolds can we choose one consistently?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Slide the turning circle around the cylinder and around the Möbius band, and watch its sense of rotation.</p>
      <OrientFrameViz />
    </>
  ),

  theory: (
    <>
      <Definition title="orientations of a vector space">
        <p>
          Two ordered bases of an n-dimensional vector space have the same orientation if the change of basis matrix has
          positive determinant. This splits the bases into two classes; an <strong>orientation</strong> is a choice of one. In
          ℝ³ these are the right-handed and left-handed bases.
        </p>
      </Definition>

      <Definition title="orientable manifolds">
        <p>
          A <strong>pointwise orientation</strong> of M chooses an orientation of each tangent space. It is continuous if near
          each point there is a local frame of vector fields that is positively oriented at every point. M is{" "}
          <strong>orientable</strong> if it has a continuous pointwise orientation. Equivalently, M has an atlas whose
          transition maps all have positive Jacobian determinant.
        </p>
      </Definition>

      <Theorem title="volume forms">
        <p>
          An n-manifold is orientable if and only if it has a nowhere vanishing n-form. Such a form ω picks out the bases with{" "}
          <M>{"\\omega(v_1, \\dots, v_n) > 0"}</M>. Conversely, given an oriented atlas, glue the local forms{" "}
          <M>{"dx^1 \\wedge \\dots \\wedge dx^n"}</M> with a partition of unity: positive combinations of positive forms stay
          positive.
        </p>
      </Theorem>

      <Example title="examples">
        <p>
          Spheres, tori and every Lie group are orientable; so is any level set of a regular value of a function{" "}
          <M>{"\\mathbb{R}^{n+1} \\to \\mathbb{R}"}</M>, using the gradient as a normal. The Möbius band, the Klein bottle and
          the real projective plane are not. More generally <M>{"\\mathbb{RP}^n"}</M> is orientable exactly when n is odd,
          because the antipodal map of <M>{"S^n"}</M> preserves orientation exactly then.
        </p>
      </Example>

      <Remark title="boundary orientation">
        <p>
          An oriented manifold with boundary induces an orientation on its boundary by the rule &lsquo;outward normal
          first&rsquo;: a basis of the boundary&rsquo;s tangent space is positive if putting an outward vector in front gives a
          positive basis of M. For the unit disc this orients the circle anticlockwise, the convention behind Green&rsquo;s
          theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "same",
      rung: "check",
      prompt: <p>When do two bases have the same orientation?</p>,
      answer: { kind: "choice", options: ["When the change of basis matrix has positive determinant", "When they are orthonormal", "When they span the same space", "When their vectors have equal lengths"], correct: [0] },
    },
    {
      key: "vol",
      rung: "check",
      prompt: <p>An n-manifold is orientable if and only if&hellip;</p>,
      answer: { kind: "choice", options: ["It has a nowhere vanishing n-form", "It is compact", "It embeds in ℝⁿ⁺¹", "It has a nowhere vanishing vector field"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many laps around the Möbius band bring the circle back to its original sense of rotation?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "rp",
      rung: "apply",
      prompt: <p>Which of these is orientable?</p>,
      answer: { kind: "choice", options: ["ℝP³", "ℝP²", "The Klein bottle", "The Möbius band"], correct: [0] },
    },
    {
      key: "bdy",
      rung: "apply",
      prompt: <p>With the &lsquo;outward normal first&rsquo; rule, which way is the boundary circle of the unit disc oriented?</p>,
      answer: { kind: "choice", options: ["Anticlockwise", "Clockwise", "Either, by choice", "It cannot be oriented"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the sphere Sⁿ ⊂ ℝⁿ⁺¹ is orientable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Sⁿ is the level set |x|² = 1 with outward normal N(x) = x.",
          "Defines ω(v₁, …, vₙ) = det(N, v₁, …, vₙ) for tangent vectors vᵢ at x, or the equivalent n-form.",
          "Checks ω is smooth and nowhere zero, since N is never tangent, so Sⁿ is orientable.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The antipodal map x ↦ −x on Sⁿ has determinant (−1)ⁿ⁺¹ on ℝⁿ⁺¹. Why does this decide whether ℝPⁿ is orientable?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes ℝPⁿ is Sⁿ with antipodal points identified, so an orientation of ℝPⁿ is one of Sⁿ preserved by the antipodal map.",
          "Notes the antipodal map preserves the orientation of Sⁿ exactly when n is odd.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With an orientation, an n-form can be integrated over an n-manifold: in a chart it is a function times{" "}
        dx¹ ∧ … ∧ dxⁿ, and orientation-preserving changes of chart change it by exactly the Jacobian the integral needs.
      </p>
      <p>Next, integration on manifolds.</p>
    </>
  ),
};
