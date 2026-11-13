import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MobiusNormalViz } from "@/components/viz/MobiusNormalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.2.4",
  minutes: 75,
  links: {
    revisits: ["m16.2.2", "m15.5.2", "m16.2.1"],
    foreshadows: ["m16.3.1", "m16.5.1", "m26.5.4"],
  },

  puzzle: (
    <>
      <p>
        Paint one side of a paper ring red and the other blue: easy. Now give the strip a half-twist before gluing, and try
        again. Starting anywhere, the red paint creeps round and comes back on what you thought was the blue side. How can a
        surface have only one side, and how would calculus notice?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Carry the normal once round each band, and compare where it ends with where it began.</p>
      <MobiusNormalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="orientability">
        <p>
          A regular surface <M>{"S"}</M> is <strong>orientable</strong> if there is a continuous map{" "}
          <M>{"N : S \\to \\mathbb{R}^3"}</M> with <M>{"N(p)"}</M> a unit vector perpendicular to <M>{"T_pS"}</M> for every{" "}
          <M>{"p"}</M>. Such an <M>{"N"}</M> is an <strong>orientation</strong>; on a connected orientable surface there are
          exactly two, <M>{"N"}</M> and <M>{"-N"}</M>.
        </p>
      </Definition>

      <Remark title="through charts">
        <p>
          Each chart gives a normal <M>{"(\\mathbf{x}_u \\times \\mathbf{x}_v)/|\\mathbf{x}_u \\times \\mathbf{x}_v|"}</M>.
          Two overlapping charts give the same normal exactly when the Jacobian of the change of coordinates has positive
          determinant. So <M>{"S"}</M> is orientable if and only if it can be covered by charts whose changes of coordinates
          all have positive Jacobian.
        </p>
      </Remark>

      <Theorem title="level sets are orientable">
        <p>If <M>{"c"}</M> is a regular value of <M>{"f : \\mathbb{R}^3 \\to \\mathbb{R}"}</M>, then <M>{"f^{-1}(c)"}</M> is orientable.</p>
      </Theorem>

      <Proof>
        <p>
          The gradient is perpendicular to the tangent plane at every point of the level set, and it never vanishes there, so
        </p>
        <MD>{"N = \\frac{\\nabla f}{|\\nabla f|}"}</MD>
        <p>is a continuous unit normal field.</p>
      </Proof>

      <Example title="the sphere and the torus">
        <p>
          The unit sphere is <M>{"x^2 + y^2 + z^2 = 1"}</M>, and its outward normal is <M>{"N(p) = p"}</M>. The torus is also a
          regular level set, so it is orientable. Every closed surface sitting in <M>{"\\mathbb{R}^3"}</M> is orientable,
          which is why the projective plane and the Klein bottle cannot be built in space without crossing themselves.
        </p>
      </Example>

      <Example title="the Möbius band">
        <p>
          Parametrise it by{" "}
          <M>{"\\mathbf{x}(u, v) = \\big((1 + v\\cos\\tfrac{u}{2})\\cos u, (1 + v\\cos\\tfrac{u}{2})\\sin u, v\\sin\\tfrac{u}{2}\\big)"}</M>{" "}
          for <M>{"0 \\le u \\le 2\\pi"}</M> and <M>{"-\\tfrac12 < v < \\tfrac12"}</M>. Along the core <M>{"v = 0"}</M> the
          chart&rsquo;s normal varies continuously with <M>{"u"}</M>, but the point at <M>{"u = 2\\pi"}</M> is the point at{" "}
          <M>{"u = 0"}</M>, and there the normal has reversed. A continuous normal field would have to agree with this one up
          to sign along the whole core, and so would also have to change sign. No orientation exists.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a surface orientable?</p>,
      answer: {
        kind: "choice",
        options: ["When it has a continuous unit normal field", "When it is compact", "When it can be covered by one chart", "When its Gaussian curvature is positive"],
        correct: [0],
      },
    },
    {
      key: "mob",
      rung: "check",
      prompt: <p>Is the Möbius band orientable?</p>,
      answer: { kind: "choice", options: ["No", "Yes", "Only if it is short", "Only near its edge"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the band with two half-twists and travel all the way round. Where does the normal end?</p>,
      answer: {
        kind: "choice",
        options: ["Where it began", "Pointing the opposite way", "Tangent to the band", "It disappears"],
        correct: [0],
      },
    },
    {
      key: "sphere",
      rung: "apply",
      prompt: <p>What is the outward unit normal to the sphere <M>{"x^2 + y^2 + z^2 = 4"}</M> at <M>{"(0, 0, 2)"}</M>?</p>,
      answer: { kind: "choice", options: ["(0, 0, 1)", "(0, 0, 2)", "(0, 0, −1)", "(1, 0, 0)"], correct: [0] },
    },
    {
      key: "jac",
      rung: "apply",
      prompt: <p>Two charts overlap and their change of coordinates has Jacobian determinant <M>{"-3"}</M> at a point. How do their normals compare there?</p>,
      answer: { kind: "choice", options: ["They point in opposite directions", "They are equal", "They are perpendicular", "One is three times the other"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the preimage of a regular value of a smooth <M>{"f : \\mathbb{R}^3 \\to \\mathbb{R}"}</M> is orientable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows ∇f is perpendicular to every tangent vector, by differentiating f along a curve in the surface.",
          "Notes ∇f ≠ 0 on the level set because c is a regular value.",
          "Concludes N = ∇f/|∇f| is a continuous unit normal field.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For the Möbius band chart in the lesson, compute the normal direction <M>{"\\mathbf{x}_u \\times \\mathbf{x}_v"}</M> along <M>{"v = 0"}</M> at <M>{"u = 0"}</M> and at <M>{"u = 2\\pi"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds xᵤ = (−sin u, cos u, 0) and xᵥ = (cos(u/2) cos u, cos(u/2) sin u, sin(u/2)) along v = 0.",
          "At u = 0 gets xᵤ = (0, 1, 0) and xᵥ = (1, 0, 0), so the cross product is (0, 0, −1); at u = 2π, xᵥ = (−1, 0, 0) and the cross product is (0, 0, 1).",
          "Concludes the normal reverses after one circuit. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what an orientation of a surface is, why regular level sets such as spheres and tori are orientable, and why the Möbius band is not.",

  glimpse: (
    <p>
      Next, the second fundamental form, which measures how the unit normal turns as we move on the surface, and so how
      the surface bends in space.
    </p>
  ),
};
