import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TangentPlaneViz } from "@/components/viz/TangentPlaneViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.2.2",
  minutes: 80,
  links: {
    revisits: ["m16.2.1", "m5.2.3", "m5.1.2"],
    foreshadows: ["m16.2.3", "m16.2.4", "m16.3.1"],
  },

  puzzle: (
    <>
      <p>
        A marble rolling on a curved surface can only move in directions the surface allows. At each point those directions
        seem to fill out a flat plane that just touches the surface. But a surface can be described by many different charts,
        each giving different partial derivatives. Do they all agree on this plane?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the point on each graph and watch the tangent plane and its normal. Find a point where the plane is level.</p>
      <TangentPlaneViz />
    </>
  ),

  theory: (
    <>
      <Definition title="tangent vectors and the tangent plane">
        <p>
          A <strong>tangent vector</strong> to a regular surface <M>{"S"}</M> at <M>{"p"}</M> is the velocity{" "}
          <M>{"\\alpha'(0)"}</M> of a smooth curve <M>{"\\alpha"}</M> lying in <M>{"S"}</M> with <M>{"\\alpha(0) = p"}</M>. The
          set of them is the <strong>tangent plane</strong> <M>{"T_pS"}</M>.
        </p>
      </Definition>

      <Theorem title="the tangent plane is spanned by the partials">
        <p>
          If <M>{"\\mathbf{x}"}</M> is a chart with <M>{"\\mathbf{x}(q) = p"}</M>, then{" "}
          <M>{"T_pS = \\operatorname{span}(\\mathbf{x}_u(q), \\mathbf{x}_v(q))"}</M>, a plane through the origin. In
          particular it does not depend on the chart.
        </p>
      </Theorem>

      <Proof>
        <p>
          A curve in <M>{"S"}</M> through <M>{"p"}</M> can be written near <M>{"p"}</M> as{" "}
          <M>{"\\alpha(t) = \\mathbf{x}(u(t), v(t))"}</M> with <M>{"u, v"}</M> smooth. By the chain rule
        </p>
        <MD>{"\\alpha'(0) = u'(0)\\,\\mathbf{x}_u + v'(0)\\,\\mathbf{x}_v,"}</MD>
        <p>
          which lies in the span. Conversely <M>{"a\\mathbf{x}_u + b\\mathbf{x}_v"}</M> is the velocity of{" "}
          <M>{"t \\mapsto \\mathbf{x}(q + t(a, b))"}</M>. Since <M>{"T_pS"}</M> was defined without charts, every chart gives
          the same plane; it is two-dimensional because <M>{"\\mathbf{x}_u, \\mathbf{x}_v"}</M> are independent.
        </p>
      </Proof>

      <Definition title="the unit normal">
        <p>The <strong>unit normal</strong> to the chart at <M>{"p"}</M> is</p>
        <MD>{"N = \\frac{\\mathbf{x}_u \\times \\mathbf{x}_v}{|\\mathbf{x}_u \\times \\mathbf{x}_v|},"}</MD>
        <p>
          perpendicular to <M>{"T_pS"}</M>. Another chart gives <M>{"\\pm N"}</M>; the sign is a matter of orientation, the
          subject of a later lesson.
        </p>
      </Definition>

      <Example title="graphs and level sets">
        <p>
          For a graph <M>{"z = f(x, y)"}</M> the tangent plane at <M>{"(x_0, y_0, z_0)"}</M> is{" "}
          <M>{"z = z_0 + f_x(x - x_0) + f_y(y - y_0)"}</M>, with normal proportional to <M>{"(-f_x, -f_y, 1)"}</M>. For a
          regular level set <M>{"f^{-1}(c)"}</M>, the tangent plane at <M>{"p"}</M> is the plane perpendicular to{" "}
          <M>{"\\nabla f(p)"}</M>: for the unit sphere, <M>{"T_pS"}</M> is the plane perpendicular to <M>{"p"}</M> itself.
        </p>
      </Example>

      <Remark title="differentials">
        <p>
          A smooth map <M>{"\\varphi"}</M> between surfaces has a <strong>differential</strong>{" "}
          <M>{"d\\varphi_p : T_pS \\to T_{\\varphi(p)}S'"}</M>, sending <M>{"\\alpha'(0)"}</M> to{" "}
          <M>{"(\\varphi \\circ \\alpha)'(0)"}</M>. It is linear, and it is how calculus moves from the plane onto surfaces.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the tangent plane <M>{"T_pS"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["The set of velocities at p of curves lying in S through p", "The plane through p and the origin", "The set of points of S near p", "The plane containing the normal"],
        correct: [0],
      },
    },
    {
      key: "level",
      rung: "check",
      prompt: <p>For a regular level set <M>{"f^{-1}(c)"}</M>, which vector is normal to the tangent plane at <M>{"p"}</M>?</p>,
      answer: { kind: "choice", options: ["∇f(p)", "p", "(1, 1, 1)", "The velocity of any curve through p"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, put the point at the centre of the saddle, <M>{"x_0 = y_0 = 0"}</M>. What is the third component of the unit normal?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "sphere",
      rung: "apply",
      prompt: <p>What is the tangent plane to the unit sphere at <M>{"(0, 0, 1)"}</M>, as a plane in space?</p>,
      answer: { kind: "choice", options: ["z = 1", "z = 0", "x + y + z = 1", "x = 0"], correct: [0] },
    },
    {
      key: "par",
      rung: "apply",
      prompt: <p>The tangent plane to <M>{"z = x^2 + y^2"}</M> at <M>{"(1, 1, 2)"}</M> meets the <M>{"z"}</M>-axis at what height?</p>,
      answer: { kind: "numeric", value: -2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Let <M>{"S = f^{-1}(c)"}</M> be a regular level set. Prove that every tangent vector to <M>{"S"}</M> at <M>{"p"}</M> is perpendicular to <M>{"\\nabla f(p)"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a curve α in S with α(0) = p, so that f(α(t)) = c for all t.",
          "Differentiates using the chain rule: ∇f(α(t)) · α′(t) = 0.",
          "Sets t = 0 to conclude ∇f(p) · α′(0) = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show directly from the chain rule that two charts <M>{"\\mathbf{x}"}</M> and <M>{"\\mathbf{y} = \\mathbf{x} \\circ h"}</M> span the same plane at a common point.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes h(s, t) = (u(s, t), v(s, t)) and computes ∂y/∂s = (∂u/∂s) xᵤ + (∂v/∂s) xᵥ, and similarly ∂y/∂t.",
          "Concludes the span of ∂y/∂s and ∂y/∂t lies in the span of xᵤ and xᵥ, and both are two-dimensional, so they are equal.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the tangent plane to a surface as the set of velocities of curves in it, why it is spanned by the partial derivatives of any chart, the unit normal, and the formulas for graphs and level sets.",

  glimpse: (
    <p>
      Next, the first fundamental form: the dot product on each tangent plane, written in a chart, which lets us measure
      lengths, angles and areas on the surface.
    </p>
  ),
};
