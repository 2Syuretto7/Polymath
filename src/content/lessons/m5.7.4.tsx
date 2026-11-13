import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { WedgeViz } from "@/components/viz/WedgeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.7.4",
  minutes: 90,
  links: {
    revisits: ["m5.7.2", "m5.7.3", "m3.6.3"],
    foreshadows: ["m26.5.2", "m12.6.1", "m26.6.3"],
  },

  puzzle: (
    <>
      <p>
        Line up four theorems. The fundamental theorem of calculus: the integral of <M>{"f'"}</M> over an interval is{" "}
        <M>{"f"}</M> at the end points. The fundamental theorem for line integrals: the integral of a gradient along a curve
        is the potential at its ends. Stokes: the flux of a curl through a surface is the circulation round its edge. The
        divergence theorem: the integral of the divergence over a solid is the flux through its boundary. Each says that a
        derivative integrated over a region equals something integrated over its boundary. Is that one theorem in four
        disguises?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The new objects are differential forms, which measure oriented lengths, areas and volumes. Turn the two vectors and
        watch the sign of the area that <M>{"dx \\wedge dy"}</M> assigns to them.
      </p>
      <WedgeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="1-forms">
        <p>
          A <strong>1-form</strong> on <M>{"\\mathbb{R}^3"}</M> is an expression <M>{"\\omega = P\\, dx + Q\\, dy + R\\, dz"}</M>.
          At each point it is a linear function on vectors: <M>{"dx"}</M> picks out the first component, so{" "}
          <M>{"\\omega(v) = Pv_1 + Qv_2 + Rv_3"}</M>. It is made to be integrated along oriented curves:{" "}
          <M>{"\\int_C \\omega"}</M> is the line integral <M>{"\\int_C F \\cdot dr"}</M> for <M>{"F = (P, Q, R)"}</M>. Functions
          are called 0-forms, and a function <M>{"f"}</M> has the 1-form{" "}
          <M>{"df = f_x\\, dx + f_y\\, dy + f_z\\, dz"}</M>.
        </p>
      </Definition>

      <Definition title="the wedge product">
        <p>
          Products of 1-forms are <strong>antisymmetric</strong>: <M>{"dx \\wedge dy = -dy \\wedge dx"}</M>, and so{" "}
          <M>{"dx \\wedge dx = 0"}</M>. On two vectors, <M>{"dx \\wedge dy\\,(u, v) = u_1 v_2 - u_2 v_1"}</M>, the signed area of
          the parallelogram they span, projected to the <M>{"xy"}</M>-plane. A <strong>2-form</strong>{" "}
          <M>{"A\\, dy \\wedge dz + B\\, dz \\wedge dx + C\\, dx \\wedge dy"}</M> is integrated over oriented surfaces, and gives
          the flux of <M>{"(A, B, C)"}</M>. A 3-form <M>{"f\\, dx \\wedge dy \\wedge dz"}</M> is integrated over solids.
          Antisymmetry builds in the determinant: in polar coordinates,{" "}
          <M>{"dx \\wedge dy = r\\, dr \\wedge d\\theta"}</M>, which is the change of variables formula done by algebra.
        </p>
      </Definition>

      <Definition title="the exterior derivative">
        <p>
          The <strong>exterior derivative</strong> <M>{"d"}</M> takes <M>{"k"}</M>-forms to <M>{"(k + 1)"}</M>-forms. On
          functions it is <M>{"df"}</M>. On other forms, apply <M>{"d"}</M> to each coefficient and wedge. In the plane,
        </p>
        <MD>{"d(P\\, dx + Q\\, dy) = dP \\wedge dx + dQ \\wedge dy = (Q_x - P_y)\\, dx \\wedge dy."}</MD>
        <p>
          In space, <M>{"d"}</M> of a 1-form has the components of the curl, and <M>{"d"}</M> of a 2-form has the divergence as
          its coefficient. Always <M>{"d(d\\omega) = 0"}</M>, which contains both{" "}
          <M>{"\\operatorname{curl}(\\nabla f) = 0"}</M> and <M>{"\\operatorname{div}(\\operatorname{curl} F) = 0"}</M>.
        </p>
      </Definition>

      <Theorem title="the generalised Stokes theorem">
        <p>
          For an oriented <M>{"k"}</M>-dimensional region <M>{"M"}</M> with boundary <M>{"\\partial M"}</M>, suitably oriented,
          and a <M>{"(k - 1)"}</M>-form <M>{"\\omega"}</M>,
        </p>
        <MD>{"\\int_M d\\omega = \\int_{\\partial M} \\omega."}</MD>
      </Theorem>

      <Example title="the four theorems">
        <p>
          With <M>{"M"}</M> an interval and <M>{"\\omega = f"}</M>, this is the fundamental theorem of calculus; the boundary
          is two points, one counted negatively. With <M>{"M"}</M> a curve, it is the theorem for gradients. With{" "}
          <M>{"M"}</M> a region of the plane and <M>{"\\omega = P\\, dx + Q\\, dy"}</M>, it is Green. With <M>{"M"}</M> a
          surface in space, Stokes. With <M>{"M"}</M> a solid and <M>{"\\omega"}</M> a 2-form, the divergence theorem.
        </p>
      </Example>

      <Remark title="why forms">
        <p>
          Forms work in any number of dimensions, where there is no cross product and no curl, and they transform correctly
          under any change of coordinates without separate rules. On a manifold they are the natural objects to integrate. The
          fact that <M>{"d\\omega = 0"}</M> need not mean <M>{"\\omega = d\\eta"}</M>, as with the angle form on the punctured
          plane, measures the holes of a space: this is de Rham cohomology.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "wedge",
      rung: "check",
      prompt: <p>Evaluate <M>{"dx \\wedge dy\\,(u, v)"}</M> for <M>{"u = (1, 2)"}</M> and <M>{"v = (3, 4)"}</M>.</p>,
      answer: { kind: "numeric", value: -2 },
    },
    {
      key: "df",
      rung: "check",
      prompt: <p>For <M>{"f = x^2 y"}</M>, <M>{"df = a\\, dx + b\\, dy"}</M>. Find <M>{"a"}</M> at <M>{"(1, 3)"}</M>.</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "dw",
      rung: "apply",
      prompt: <p>Write <M>{"d(-y\\, dx + x\\, dy) = c\\, dx \\wedge dy"}</M>. Find <M>{"c"}</M>.</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "polar",
      rung: "apply",
      prompt: (
        <p>
          With <M>{"x = r\\cos\\theta"}</M> and <M>{"y = r\\sin\\theta"}</M>, expand <M>{"dx \\wedge dy = k\\, dr \\wedge d\\theta"}</M>.
          Find <M>{"k"}</M> at a point where <M>{"r = 2"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: (
        <p>
          Which classical theorem is <M>{"\\int_M d\\omega = \\int_{\\partial M} \\omega"}</M> when <M>{"M"}</M> is a solid in
          space and <M>{"\\omega"}</M> is a 2-form?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["The fundamental theorem of calculus", "Green's theorem", "Stokes' theorem", "The divergence theorem"],
        correct: [3],
      },
    },
    {
      key: "dd",
      rung: "prove",
      prompt: <p>For a function <M>{"f(x, y)"}</M> with continuous second partials, prove that <M>{"d(df) = 0"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes df = f_x dx + f_y dy and computes d(df) = (f_yx − f_xy) dx ∧ dy, using dx ∧ dx = dy ∧ dy = 0 and dy ∧ dx = −dx ∧ dy.",
          "Concludes it is 0 by equality of mixed partials.",
        ],
      },
    },
    {
      key: "two",
      rung: "stretch",
      prompt: (
        <p>
          Show how the fundamental theorem of calculus and Green&rsquo;s theorem are both cases of{" "}
          <M>{"\\int_M d\\omega = \\int_{\\partial M} \\omega"}</M>. In each case say what <M>{"M"}</M>, <M>{"\\omega"}</M>,{" "}
          <M>{"d\\omega"}</M> and <M>{"\\partial M"}</M> are, including orientations.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "FTC: M = [a, b], ω = f, dω = f′ dx, ∂M is the point b counted positively and a negatively, giving f(b) − f(a).",
          "Green: M a plane region, ω = P dx + Q dy, dω = (Q_x − P_y) dx ∧ dy, ∂M the boundary curve traversed anticlockwise.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what 1-forms and 2-forms are, why the wedge product is antisymmetric and measures signed area, what the exterior derivative does, and how the generalised Stokes theorem contains the four classical theorems.",

  glimpse: (
    <p>
      This ends Multivariable Calculus. The courses on analysis in Rⁿ and on smooth manifolds develop forms properly, prove
      the general Stokes theorem, and use forms to measure the shape of spaces.
    </p>
  ),
};
