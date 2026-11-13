import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CurveTraceViz } from "@/components/viz/CurveTraceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.1.1",
  minutes: 75,
  links: {
    revisits: ["m5.1.3", "m2.4.3", "m13.2.1"],
    foreshadows: ["m16.1.2", "m16.1.3", "m26.4.2"],
  },

  puzzle: (
    <>
      <p>
        The map <M>{"\\alpha(t) = (t^2, t^3)"}</M> is as smooth as a map can be: both coordinates are polynomials. Yet its
        picture in the plane has a sharp point at the origin. How can a smooth map draw a curve with a corner, and what extra
        condition rules this out?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the point along each curve and watch its velocity. Look for the places where the arrow disappears.</p>
      <CurveTraceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="parametrised curve">
        <p>
          A <strong>parametrised differentiable curve</strong> is a smooth map <M>{"\\alpha : I \\to \\mathbb{R}^3"}</M> from
          an open interval <M>{"I"}</M>, written <M>{"\\alpha(t) = (x(t), y(t), z(t))"}</M>. Its image is the{" "}
          <strong>trace</strong>. The vector <M>{"\\alpha'(t) = (x'(t), y'(t), z'(t))"}</M> is the <strong>tangent vector</strong>{" "}
          or velocity at <M>{"t"}</M>, and <M>{"|\\alpha'(t)|"}</M> is the speed. Plane curves are the case{" "}
          <M>{"z = 0"}</M>.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          The helix <M>{"\\alpha(t) = (a\\cos t, a\\sin t, bt)"}</M> winds round the cylinder <M>{"x^2 + y^2 = a^2"}</M>, rising{" "}
          <M>{"2\\pi b"}</M> each turn. The maps <M>{"t \\mapsto (\\cos t, \\sin t)"}</M> and{" "}
          <M>{"t \\mapsto (\\cos 2t, \\sin 2t)"}</M> have the same trace, the circle, but the second goes round twice as fast.
          A curve is the map, not just its picture.
        </p>
      </Example>

      <Definition title="regular curves">
        <p>
          A point where <M>{"\\alpha'(t) = 0"}</M> is a <strong>singular point</strong>. The curve is <strong>regular</strong>{" "}
          if <M>{"\\alpha'(t) \\neq 0"}</M> for every <M>{"t"}</M>. At a regular point the curve has a well-defined tangent line,{" "}
          <M>{"\\alpha(t) + s\\,\\alpha'(t)"}</M>. Differential geometry of curves studies regular curves.
        </p>
      </Definition>

      <Example title="the cusp">
        <p>
          For <M>{"\\alpha(t) = (t^2, t^3)"}</M>, <M>{"\\alpha'(t) = (2t, 3t^2)"}</M>, which vanishes at <M>{"t = 0"}</M>.
          The point slows to a stop and sets off in a new direction, so the trace has a cusp. Stopping does not always cause a
          corner: <M>{"(t^3, t^3)"}</M> traces a straight line yet is singular at <M>{"t = 0"}</M>.
        </p>
      </Example>

      <Theorem title="constant length">
        <p>
          If <M>{"|\\alpha(t)|"}</M> is constant, then <M>{"\\alpha(t) \\cdot \\alpha'(t) = 0"}</M> for all <M>{"t"}</M>: a
          curve on a sphere centred at the origin has velocity tangent to the sphere.
        </p>
      </Theorem>

      <Proof>
        <p>
          Differentiate <M>{"\\alpha(t)\\cdot\\alpha(t) = c"}</M> using the product rule for the dot product:
        </p>
        <MD>{"\\frac{d}{dt}\\big(\\alpha \\cdot \\alpha\\big) = \\alpha' \\cdot \\alpha + \\alpha \\cdot \\alpha' = 2\\,\\alpha \\cdot \\alpha' = 0."}</MD>
      </Proof>

      <Remark title="reparametrisation">
        <p>
          If <M>{"h : J \\to I"}</M> is smooth with <M>{"h'(s) \\neq 0"}</M> and onto, then{" "}
          <M>{"\\beta = \\alpha \\circ h"}</M> is a <strong>reparametrisation</strong>. By the chain rule{" "}
          <M>{"\\beta'(s) = h'(s)\\,\\alpha'(h(s))"}</M>, so regularity survives, and the tangent lines are unchanged. Geometric
          quantities, such as length and curvature, should not depend on the choice, which is why the next lesson looks for a
          canonical parameter.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "regular",
      rung: "check",
      prompt: <p>When is a parametrised curve <M>{"\\alpha"}</M> regular?</p>,
      answer: { kind: "choice", options: ["When α′(t) ≠ 0 for every t", "When its trace has no corners", "When α is a polynomial", "When |α(t)| is constant"], correct: [0] },
    },
    {
      key: "vel",
      rung: "check",
      prompt: <p>What is the velocity of <M>{"\\alpha(t) = (\\cos t, \\sin t)"}</M> at <M>{"t = 0"}</M>?</p>,
      answer: { kind: "choice", options: ["(0, 1)", "(1, 0)", "(−1, 0)", "(0, 0)"], correct: [0] },
    },
    {
      key: "helix",
      rung: "apply",
      prompt: <p>What is the speed of the helix <M>{"(3\\cos t, 3\\sin t, 4t)"}</M>?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, the cycloid is singular at one value of <M>{"t"}</M> strictly between 0 and <M>{"4\\pi"}</M>. What is it, to two decimal places?</p>,
      answer: { kind: "numeric", value: 6.28, tolerance: 0.01 },
    },
    {
      key: "tangent",
      rung: "apply",
      prompt: <p>Which vector points along the tangent line of <M>{"\\alpha(t) = (t, t^2, t^3)"}</M> at <M>{"t = 1"}</M>?</p>,
      answer: { kind: "choice", options: ["(1, 2, 3)", "(1, 1, 1)", "(0, 2, 6)", "(1, 2, 1)"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"\\alpha'(t) \\cdot \\alpha(t) = 0"}</M> for all <M>{"t"}</M>, then <M>{"|\\alpha(t)|"}</M> is constant.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes |α(t)|² = α(t) · α(t).",
          "Differentiates to get 2 α′(t) · α(t), which is 0 by hypothesis.",
          "Concludes that |α(t)|² is constant on the interval, so |α(t)| is constant.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Find a parametrisation of the circle <M>{"x^2 + y^2 = 1"}</M> by rational functions of <M>{"t"}</M>, and check that it is regular.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives a parametrisation such as ((1 − t²)/(1 + t²), 2t/(1 + t²)), for example from lines through (−1, 0).",
          "Computes the derivative and shows it never vanishes, for instance that its length is 2/(1 + t²).",
          "Notes it misses the point (−1, 0). Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a parametrised curve is, the difference between a curve and its trace, the velocity vector, what makes a curve regular, and why the cusp (t², t³) is smooth but not regular.",

  glimpse: (
    <p>
      Next, arc length, which gives every regular curve a natural parameter, the distance travelled along it, and makes the
      speed equal to 1.
    </p>
  ),
};
