import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ParamPatchViz } from "@/components/viz/ParamPatchViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.2.1",
  minutes: 85,
  links: {
    revisits: ["m5.4.2", "m16.1.1", "m15.1.2"],
    foreshadows: ["m16.2.2", "m16.2.3", "m26.1.1"],
  },

  puzzle: (
    <>
      <p>
        Latitude and longitude describe every point on the Earth, yet at the North Pole something goes wrong: every longitude
        names the same point, and &ldquo;east&rdquo; means nothing. The sphere itself is perfectly smooth there. So is the
        trouble in the surface or in the coordinates, and how should a smooth surface be defined so that bad coordinates do
        not count against it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the point over each surface and watch the two partial derivatives. Where do they collapse?</p>
      <ParamPatchViz />
    </>
  ),

  theory: (
    <>
      <Definition title="regular surface">
        <p>
          A subset <M>{"S \\subset \\mathbb{R}^3"}</M> is a <strong>regular surface</strong> if every point <M>{"p \\in S"}</M>{" "}
          has a neighbourhood <M>{"V"}</M> in <M>{"\\mathbb{R}^3"}</M> and a map <M>{"\\mathbf{x} : U \\to V \\cap S"}</M> from an
          open set <M>{"U \\subset \\mathbb{R}^2"}</M> such that:
        </p>
        <ol>
          <li><M>{"\\mathbf{x}"}</M> is smooth;</li>
          <li><M>{"\\mathbf{x}"}</M> is a homeomorphism onto <M>{"V \\cap S"}</M>;</li>
          <li>
            for every <M>{"q \\in U"}</M>, the vectors <M>{"\\mathbf{x}_u(q)"}</M> and <M>{"\\mathbf{x}_v(q)"}</M> are linearly
            independent, that is, <M>{"\\mathbf{x}_u \\times \\mathbf{x}_v \\neq 0"}</M>.
          </li>
        </ol>
        <p>
          Such an <M>{"\\mathbf{x}"}</M> is a <strong>parametrisation</strong> or <strong>chart</strong>. Regularity is a
          property of <M>{"S"}</M>: it asks only that <em>some</em> good chart exists near each point.
        </p>
      </Definition>

      <Theorem title="graphs are surfaces">
        <p>The graph of a smooth function <M>{"f : U \\to \\mathbb{R}"}</M> is a regular surface, covered by one chart.</p>
      </Theorem>

      <Proof>
        <p>
          Take <M>{"\\mathbf{x}(u, v) = (u, v, f(u, v))"}</M>. It is smooth, and its inverse is the projection{" "}
          <M>{"(x, y, z) \\mapsto (x, y)"}</M>, which is continuous, so <M>{"\\mathbf{x}"}</M> is a homeomorphism onto the
          graph. Finally
        </p>
        <MD>{"\\mathbf{x}_u \\times \\mathbf{x}_v = (1, 0, f_u) \\times (0, 1, f_v) = (-f_u, -f_v, 1) \\neq 0."}</MD>
      </Proof>

      <Example title="the sphere">
        <p>
          The unit sphere is covered by six graph charts: the hemispheres <M>{"z = \\pm\\sqrt{1 - x^2 - y^2}"}</M> and the
          similar ones solved for <M>{"x"}</M> and <M>{"y"}</M>. So it is a regular surface, even though the
          latitude-longitude chart fails at the poles. Geographic coordinates are simply one bad chart.
        </p>
      </Example>

      <Theorem title="level sets">
        <p>
          If <M>{"f : \\mathbb{R}^3 \\to \\mathbb{R}"}</M> is smooth and <M>{"\\nabla f \\neq 0"}</M> at every point of{" "}
          <M>{"f^{-1}(c)"}</M>, that is, <M>{"c"}</M> is a <strong>regular value</strong>, then <M>{"f^{-1}(c)"}</M> is a
          regular surface.
        </p>
      </Theorem>

      <Proof>
        <p>
          Near a point where, say, <M>{"f_z \\neq 0"}</M>, the implicit function theorem writes the level set as a graph{" "}
          <M>{"z = g(x, y)"}</M>, which is a regular surface by the previous theorem. The cases <M>{"f_x \\neq 0"}</M> and{" "}
          <M>{"f_y \\neq 0"}</M> are the same.
        </p>
      </Proof>

      <Remark title="non-examples">
        <p>
          The double cone <M>{"x^2 + y^2 = z^2"}</M> is the level set at 0 of a function whose gradient vanishes at the
          origin, and near the apex it is not a regular surface: no chart can be a homeomorphism there, because removing the
          apex disconnects every small neighbourhood. A figure made of two planes crossing fails in the same way. These are
          the places where a surface is not locally a bent piece of the plane.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>Which condition on a chart <M>{"\\mathbf{x}(u, v)"}</M> ensures it has a tangent plane at each point?</p>,
      answer: { kind: "choice", options: ["xᵤ × xᵥ ≠ 0", "xᵤ · xᵥ = 0", "|xᵤ| = |xᵥ|", "x is a polynomial"], correct: [0] },
    },
    {
      key: "six",
      rung: "check",
      prompt: <p>How many hemisphere graph charts are used to cover the unit sphere in the example?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, put the point on the sphere&rsquo;s equator. What is <M>{"|\\mathbf{x}_u \\times \\mathbf{x}_v|"}</M>?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.01 },
    },
    {
      key: "torus",
      rung: "apply",
      prompt: <p>For the torus in the visualisation, <M>{"|\\mathbf{x}_u \\times \\mathbf{x}_v| = 0.7(2 + 0.7\\cos v)"}</M>. What is it at <M>{"v = 0"}</M>?</p>,
      answer: { kind: "numeric", value: 1.89, tolerance: 0.001 },
    },
    {
      key: "level",
      rung: "apply",
      prompt: <p>For <M>{"f = x^2 + y^2 - z^2"}</M>, which level set is guaranteed to be a regular surface by the regular value theorem?</p>,
      answer: { kind: "choice", options: ["f = 1", "f = 0", "Both", "Neither"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the graph of a smooth function <M>{"f(u, v)"}</M> is a regular surface.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the chart x(u, v) = (u, v, f(u, v)) and notes it is smooth.",
          "Notes the inverse is the projection to (x, y), which is continuous, so x is a homeomorphism onto the graph.",
          "Computes xᵤ × xᵥ = (−fᵤ, −fᵥ, 1), which is never zero.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the ellipsoid <M>{"x^2/a^2 + y^2/b^2 + z^2/c^2 = 1"}</M> is a regular surface.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes it as a level set f = 1 of a smooth function.",
          "Computes the gradient (2x/a², 2y/b², 2z/c²) and notes it vanishes only at the origin, which is not on the ellipsoid.",
          "Concludes by the regular value theorem. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the definition of a regular surface by charts, why the condition xᵤ × xᵥ ≠ 0 matters, why graphs and regular level sets are surfaces, and why latitude and longitude fail at the poles even though the sphere does not.",

  glimpse: (
    <p>
      Next, the tangent plane at a point of a surface, spanned by the partial derivatives of any chart, and the unit normal.
    </p>
  ),
};
