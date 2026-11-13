import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { FrenetHelixViz } from "@/components/viz/FrenetHelixViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.1.4",
  minutes: 85,
  links: {
    revisits: ["m16.1.3", "m3.5.1", "m10.1.4"],
    foreshadows: ["m16.1.5", "m16.4.4", "m36.1.1"],
  },

  puzzle: (
    <>
      <p>
        Suppose someone tells you only two functions, the curvature <M>{"\\kappa(s)"}</M> and the torsion{" "}
        <M>{"\\tau(s)"}</M>, of a wire bent in space. Could you rebuild the wire from them, the way a pilot reconstructs a
        flight path from a record of turns and rolls? And if you could, how much freedom would be left over?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the frame along the helix, change its shape, and turn the view. The three arrows always stay at right angles.</p>
      <FrenetHelixViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Frenet frame">
        <p>
          For a unit speed curve with <M>{"\\kappa > 0"}</M>, the vectors <M>{"T = \\alpha'"}</M>,{" "}
          <M>{"N = T'/\\kappa"}</M> and <M>{"B = T \\times N"}</M> form a right-handed orthonormal basis at each point, the{" "}
          <strong>Frenet frame</strong>. It moves with the curve, and its motion is described entirely by{" "}
          <M>{"\\kappa"}</M> and <M>{"\\tau"}</M>.
        </p>
      </Definition>

      <Theorem title="the Frenet–Serret equations">
        <MD>{"T' = \\kappa N, \\qquad N' = -\\kappa T + \\tau B, \\qquad B' = -\\tau N."}</MD>
      </Theorem>

      <Proof>
        <p>
          The first is the definition of <M>{"N"}</M>, and the third the definition of <M>{"\\tau"}</M>. For the second,
          expand <M>{"N'"}</M> in the orthonormal basis. Differentiating <M>{"N \\cdot N = 1"}</M> gives{" "}
          <M>{"N' \\cdot N = 0"}</M>. Differentiating <M>{"N \\cdot T = 0"}</M> gives{" "}
          <M>{"N' \\cdot T = -N \\cdot T' = -\\kappa"}</M>. Differentiating <M>{"N \\cdot B = 0"}</M> gives{" "}
          <M>{"N' \\cdot B = -N \\cdot B' = \\tau"}</M>. So <M>{"N' = -\\kappa T + \\tau B"}</M>.
        </p>
      </Proof>

      <Remark title="a skew-symmetric matrix">
        <p>In matrix form, with the frame as rows,</p>
        <MD>{"\\frac{d}{ds}\\begin{pmatrix} T \\\\ N \\\\ B \\end{pmatrix} = \\begin{pmatrix} 0 & \\kappa & 0 \\\\ -\\kappa & 0 & \\tau \\\\ 0 & -\\tau & 0 \\end{pmatrix}\\begin{pmatrix} T \\\\ N \\\\ B \\end{pmatrix}."}</MD>
        <p>
          The matrix is skew-symmetric, which is exactly the condition for an orthonormal frame to stay orthonormal as it
          moves: the frame rotates, with angular velocity given by the Darboux vector <M>{"\\tau T + \\kappa B"}</M>.
        </p>
      </Remark>

      <Theorem title="fundamental theorem of curves">
        <p>
          Given smooth functions <M>{"\\kappa > 0"}</M> and <M>{"\\tau"}</M> on an interval, there is a unit speed curve with
          that curvature and torsion, and any two such curves differ by a rigid motion, a rotation followed by a translation.
        </p>
      </Theorem>

      <Proof>
        <p>
          The Frenet–Serret equations are a linear system of differential equations for <M>{"(T, N, B)"}</M>. Choose an
          orthonormal right-handed starting frame and a starting point. The system has a unique solution, which stays
          orthonormal because the matrix is skew-symmetric; then <M>{"\\alpha(s) = \\alpha(s_0) + \\int_{s_0}^s T"}</M>. A
          different starting frame and point differ by a rotation and a translation, and so does the resulting curve.
        </p>
      </Proof>

      <Example title="constant curvature and torsion">
        <p>
          A helix has constant <M>{"\\kappa"}</M> and <M>{"\\tau"}</M>, so by uniqueness every curve with constant{" "}
          <M>{"\\kappa > 0"}</M> and <M>{"\\tau \\neq 0"}</M> is a helix, with{" "}
          <M>{"a = \\kappa/(\\kappa^2 + \\tau^2)"}</M> and <M>{"b = \\tau/(\\kappa^2 + \\tau^2)"}</M>. With{" "}
          <M>{"\\tau = 0"}</M> it is a circle of radius <M>{"1/\\kappa"}</M>.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "tprime",
      rung: "check",
      prompt: <p>Which Frenet–Serret equation gives the derivative of the tangent?</p>,
      answer: { kind: "choice", options: ["T′ = κN", "T′ = τB", "T′ = −κN", "T′ = κB"], correct: [0] },
    },
    {
      key: "nprime",
      rung: "check",
      prompt: <p>What is <M>{"N'"}</M>?</p>,
      answer: { kind: "choice", options: ["−κT + τB", "κT − τB", "−τN", "κN"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set <M>{"a = 1"}</M> and <M>{"b = 1"}</M>. What is the torsion?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: <p>A unit speed curve has <M>{"\\kappa \\equiv 2"}</M> and <M>{"\\tau \\equiv 0"}</M>. What is the radius of the circle it traces?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "helix",
      rung: "apply",
      prompt: <p>A curve has constant <M>{"\\kappa = \\tfrac12"}</M> and <M>{"\\tau = \\tfrac12"}</M>. What is the radius <M>{"a"}</M> of the helix it traces?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive <M>{"N' = -\\kappa T + \\tau B"}</M> from <M>{"T' = \\kappa N"}</M>, <M>{"B' = -\\tau N"}</M> and the orthonormality of the frame.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands N′ in the orthonormal basis T, N, B, with components N′ · T, N′ · N, N′ · B.",
          "Computes N′ · N = 0, N′ · T = −N · T′ = −κ and N′ · B = −N · B′ = τ by differentiating the dot products.",
          "Assembles N′ = −κT + τB.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Let <M>{"\\omega = \\tau T + \\kappa B"}</M>. Show that <M>{"T' = \\omega \\times T"}</M>, <M>{"N' = \\omega \\times N"}</M> and <M>{"B' = \\omega \\times B"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the right-handed products T × N = B, N × B = T and B × T = N.",
          "Computes ω × T = κN, ω × N = −κT + τB and ω × B = −τN.",
          "Matches each with the Frenet–Serret equations. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Frenet frame T, N, B, the Frenet–Serret equations and why the matrix is skew-symmetric, and the fundamental theorem that curvature and torsion determine a curve up to rigid motion.",

  glimpse: (
    <p>
      Next, global theorems for curves: the total curvature of a closed plane curve, the four vertex theorem, and the
      isoperimetric inequality.
    </p>
  ),
};
