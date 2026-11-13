import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { NormalSectionViz } from "@/components/viz/NormalSectionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.3.1",
  minutes: 90,
  links: {
    revisits: ["m16.2.4", "m16.2.3", "m16.1.3"],
    foreshadows: ["m16.3.2", "m16.4.2", "m31.3.1"],
  },

  puzzle: (
    <>
      <p>
        An ant on a cylinder and an ant on a flat sheet measure exactly the same distances: the first fundamental forms agree.
        Yet from outside, one surface is plainly curved and the other flat. What quantity, invisible to the first fundamental
        form, records how a surface bends in space?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set the bending of the surface at a point, then pick a direction and watch the curve the surface cuts out.</p>
      <NormalSectionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Gauss map and the shape operator">
        <p>
          Let <M>{"S"}</M> be oriented by <M>{"N"}</M>. The <strong>Gauss map</strong> sends each point to its unit normal,{" "}
          <M>{"N : S \\to S^2"}</M>. Its differential <M>{"dN_p"}</M> maps <M>{"T_pS"}</M> to itself, since both are the
          plane perpendicular to <M>{"N(p)"}</M>. The <strong>shape operator</strong> is <M>{"-dN_p"}</M>; it measures how the
          normal tilts as we move in each direction.
        </p>
      </Definition>

      <Definition title="the second fundamental form">
        <p>
          The <strong>second fundamental form</strong> is the quadratic form{" "}
          <M>{"II_p(w) = -dN_p(w) \\cdot w"}</M> on <M>{"T_pS"}</M>. In a chart,{" "}
          <M>{"II = e\\,du^2 + 2f\\,du\\,dv + g\\,dv^2"}</M> with
        </p>
        <MD>{"e = N \\cdot \\mathbf{x}_{uu}, \\qquad f = N \\cdot \\mathbf{x}_{uv}, \\qquad g = N \\cdot \\mathbf{x}_{vv}."}</MD>
        <p>
          The shape operator is self-adjoint with respect to the first fundamental form, which is why these three numbers
          suffice.
        </p>
      </Definition>

      <Theorem title="normal curvature">
        <p>
          Let <M>{"\\alpha"}</M> be a unit speed curve in <M>{"S"}</M> with <M>{"\\alpha(0) = p"}</M> and{" "}
          <M>{"\\alpha'(0) = w"}</M>. Then <M>{"\\alpha''(0) \\cdot N = II_p(w)"}</M>. This number, the{" "}
          <strong>normal curvature</strong> <M>{"\\kappa_n(w)"}</M>, depends only on the direction <M>{"w"}</M>; for any
          nonzero tangent vector, <M>{"\\kappa_n = II(w)/I(w)"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Along the curve, <M>{"\\alpha'(s) \\cdot N(\\alpha(s)) = 0"}</M>, because <M>{"\\alpha'"}</M> is tangent. Differentiate:
        </p>
        <MD>{"\\alpha''(s) \\cdot N + \\alpha'(s) \\cdot dN(\\alpha'(s)) = 0,"}</MD>
        <p>so at <M>{"s = 0"}</M>, <M>{"\\alpha''(0) \\cdot N = -dN_p(w) \\cdot w = II_p(w)"}</M>.</p>
      </Proof>

      <Example title="Meusnier’s theorem">
        <p>
          If the curve has curvature <M>{"\\kappa"}</M> and principal normal <M>{"n"}</M> making angle <M>{"\\theta"}</M> with{" "}
          <M>{"N"}</M>, then <M>{"\\alpha'' = \\kappa n"}</M>, so <M>{"\\kappa_n = \\kappa\\cos\\theta"}</M>. All curves through{" "}
          <M>{"p"}</M> in the same direction share the normal curvature; the normal section, cut by the plane through{" "}
          <M>{"N"}</M> and <M>{"w"}</M>, has <M>{"\\theta = 0"}</M> and so curvature exactly <M>{"|\\kappa_n|"}</M>.
        </p>
      </Example>

      <Example title="a graph at a critical point">
        <p>
          Near <M>{"p"}</M>, choose axes so that the surface is{" "}
          <M>{"z = \\tfrac12(e x^2 + 2f xy + g y^2) + \\dots"}</M> with <M>{"N = (0, 0, 1)"}</M>. Then at <M>{"p"}</M> the first
          fundamental form is <M>{"dx^2 + dy^2"}</M> and the second is <M>{"e\\,dx^2 + 2f\\,dx\\,dy + g\\,dy^2"}</M>: the second
          fundamental form is the Hessian of the height above the tangent plane. The cylinder has <M>{"II \\neq 0"}</M> and the
          plane has <M>{"II = 0"}</M>, though their first forms agree.
        </p>
      </Example>

      <Remark title="asymptotic directions">
        <p>
          A direction with <M>{"II(w) = 0"}</M> is <strong>asymptotic</strong>: the surface does not bend towards or away from{" "}
          <M>{"N"}</M> along it, to second order. At a saddle point there are two such directions, along which the surface
          crosses its tangent plane.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "e",
      rung: "check",
      prompt: <p>Which formula gives the coefficient <M>{"e"}</M> of the second fundamental form?</p>,
      answer: { kind: "choice", options: ["N · xᵤᵤ", "xᵤ · xᵤ", "N · xᵤ", "|xᵤ × xᵥ|"], correct: [0] },
    },
    {
      key: "kn",
      rung: "check",
      prompt: <p>How is the normal curvature in the direction of a tangent vector <M>{"w"}</M> computed?</p>,
      answer: { kind: "choice", options: ["II(w) / I(w)", "I(w) / II(w)", "II(w) · I(w)", "II(w) − I(w)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set <M>{"e = 1"}</M>, <M>{"f = 0"}</M>, <M>{"g = -1"}</M> and <M>{"\\theta = 45^\\circ"}</M>. What is the normal curvature?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0.01 },
    },
    {
      key: "graph",
      rung: "apply",
      prompt: <p>For <M>{"z = x^2 + 3y^2"}</M> with upward normal, what is the normal curvature at the origin in the <M>{"y"}</M> direction?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "meus",
      rung: "apply",
      prompt: <p>A curve of curvature 1 lies on a surface, and the normal curvature in its direction is <M>{"\\tfrac12"}</M>. What angle, in degrees, does the curve&rsquo;s principal normal make with the surface normal?</p>,
      answer: { kind: "numeric", value: 60, tolerance: 0.5 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that for a unit speed curve <M>{"\\alpha"}</M> in <M>{"S"}</M>, <M>{"\\alpha''(0) \\cdot N(p) = -dN_p(\\alpha'(0)) \\cdot \\alpha'(0)"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes α′(s) · N(α(s)) = 0 for all s, since α′ is tangent.",
          "Differentiates using the product and chain rules, getting α″ · N + α′ · dN(α′) = 0.",
          "Evaluates at s = 0 to conclude.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Compute the second fundamental form of the sphere of radius <M>{"r"}</M> with outward normal <M>{"N(p) = p/r"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes N is the restriction of a linear map, so the differential of N at p sends w to w/r.",
          "Computes II(w) = −(w/r) · w = −|w|²/r.",
          "Concludes every direction has normal curvature −1/r with this normal. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Gauss map and shape operator, the second fundamental form e du² + 2f du dv + g dv², normal curvature as II(w)/I(w), and Meusnier's theorem.",

  glimpse: (
    <p>
      Next, the principal curvatures, the largest and smallest normal curvatures at a point, and the two numbers built from
      them: the Gaussian and mean curvature.
    </p>
  ),
};
