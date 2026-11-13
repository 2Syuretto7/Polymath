import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { OsculatingViz } from "@/components/viz/OsculatingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.1.3",
  minutes: 85,
  links: {
    revisits: ["m16.1.2", "m5.1.2", "m16.1.1"],
    foreshadows: ["m16.1.4", "m16.3.2", "m31.3.1"],
  },

  puzzle: (
    <>
      <p>
        Driving along a road, you feel the bends through the steering wheel: a gentle curve needs a small turn, a hairpin a
        large one. On a mountain road that also climbs and twists, there is a second sensation, the road tilting out of its
        plane. Can these two experiences be measured by two numbers at each point, and do the two numbers determine the road?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move along each curve and watch the circle that fits it best. Where is it smallest, and where does it disappear?</p>
      <OsculatingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="curvature">
        <p>
          Let <M>{"\\alpha"}</M> be parametrised by arc length, so <M>{"T = \\alpha'"}</M> is a unit vector. The{" "}
          <strong>curvature</strong> is <M>{"\\kappa(s) = |\\alpha''(s)| = |T'(s)|"}</M>, the rate at which the tangent turns
          per unit length. Since <M>{"T \\cdot T = 1"}</M>, differentiating gives <M>{"T \\cdot T' = 0"}</M>, so{" "}
          <M>{"T'"}</M> is perpendicular to <M>{"T"}</M>. Where <M>{"\\kappa > 0"}</M>, the <strong>principal normal</strong>{" "}
          is <M>{"N = T'/\\kappa"}</M>.
        </p>
      </Definition>

      <Example title="circles and lines">
        <p>
          The circle of radius <M>{"r"}</M>, <M>{"\\alpha(s) = (r\\cos\\tfrac{s}{r}, r\\sin\\tfrac{s}{r})"}</M>, has{" "}
          <M>{"\\alpha''(s) = -\\tfrac{1}{r}(\\cos\\tfrac{s}{r}, \\sin\\tfrac{s}{r})"}</M>, so <M>{"\\kappa = 1/r"}</M>, and{" "}
          <M>{"N"}</M> points to the centre. The <strong>osculating circle</strong> at a point with <M>{"\\kappa > 0"}</M> has
          radius <M>{"1/\\kappa"}</M> and centre <M>{"\\alpha + N/\\kappa"}</M>; it fits the curve to second order.
        </p>
      </Example>

      <Theorem title="zero curvature">
        <p>A unit speed curve has <M>{"\\kappa \\equiv 0"}</M> if and only if it is part of a straight line.</p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"\\kappa \\equiv 0"}</M> then <M>{"\\alpha'' = 0"}</M>, so integrating twice gives{" "}
          <M>{"\\alpha(s) = s\\,v + p"}</M> for constant vectors <M>{"v, p"}</M>. Conversely, such a line has{" "}
          <M>{"\\alpha'' = 0"}</M>.
        </p>
      </Proof>

      <Definition title="torsion">
        <p>
          Where <M>{"\\kappa > 0"}</M>, the <strong>binormal</strong> is <M>{"B = T \\times N"}</M>, a unit vector perpendicular
          to the <strong>osculating plane</strong> spanned by <M>{"T"}</M> and <M>{"N"}</M>. One checks that <M>{"B'"}</M> is a
          multiple of <M>{"N"}</M>, and the <strong>torsion</strong> <M>{"\\tau"}</M> is defined by <M>{"B' = -\\tau N"}</M>.
          It measures how fast the osculating plane turns, that is, how fast the curve leaves its plane.
        </p>
      </Definition>

      <Example title="the helix">
        <p>
          For <M>{"(a\\cos t, a\\sin t, bt)"}</M> with <M>{"a > 0"}</M>, a computation gives constant values
        </p>
        <MD>{"\\kappa = \\frac{a}{a^2 + b^2}, \\qquad \\tau = \\frac{b}{a^2 + b^2}."}</MD>
        <p>When <M>{"b = 0"}</M> it is a circle of radius <M>{"a"}</M>, with <M>{"\\kappa = 1/a"}</M> and <M>{"\\tau = 0"}</M>.</p>
      </Example>

      <Remark title="any parameter">
        <p>For a regular curve with any parameter,</p>
        <MD>{"\\kappa = \\frac{|\\alpha' \\times \\alpha''|}{|\\alpha'|^3}, \\qquad \\tau = \\frac{(\\alpha' \\times \\alpha'') \\cdot \\alpha'''}{|\\alpha' \\times \\alpha''|^2}."}</MD>
        <p>
          For plane curves one uses the signed curvature <M>{"(x'y'' - y'x'')/(x'^2 + y'^2)^{3/2}"}</M>, positive when the curve
          turns anticlockwise. A curve with <M>{"\\kappa > 0"}</M> has <M>{"\\tau \\equiv 0"}</M> exactly when it lies in a plane.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "circle",
      rung: "check",
      prompt: <p>What is the curvature of a circle of radius 4?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "line",
      rung: "check",
      prompt: <p>A unit speed curve has curvature 0 everywhere. What is it?</p>,
      answer: { kind: "choice", options: ["Part of a straight line", "A circle", "A helix", "Any plane curve"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the radius of curvature of the parabola <M>{"y = x^2"}</M> at its vertex?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "helixk",
      rung: "apply",
      prompt: <p>What is the curvature of the helix <M>{"(\\cos t, \\sin t, t)"}</M>?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "helixt",
      rung: "apply",
      prompt: <p>What is the torsion of the helix <M>{"(3\\cos t, 3\\sin t, 4t)"}</M>?</p>,
      answer: { kind: "numeric", value: 0.16, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that for a unit speed curve, <M>{"\\alpha''(s)"}</M> is perpendicular to <M>{"\\alpha'(s)"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses unit speed: α′(s) · α′(s) = 1 for all s.",
          "Differentiates with the product rule to get 2 α″(s) · α′(s) = 0.",
          "Concludes the dot product is 0, so the vectors are perpendicular.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that a unit speed curve with <M>{"\\kappa > 0"}</M> and <M>{"\\tau \\equiv 0"}</M> lies in a plane.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes B′ = −τN = 0, so B is a constant vector.",
          "Differentiates α(s) · B to get T · B = 0, so α(s) · B is constant.",
          "Concludes α lies in a plane with normal B. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend curvature as how fast the unit tangent turns, the osculating circle of radius 1/κ, the binormal and torsion as how fast the curve leaves its plane, and the values for circles, lines and helices.",

  glimpse: (
    <p>
      Next, the Frenet frame T, N, B and the Frenet–Serret equations, which show that curvature and torsion together
      determine a curve up to rigid motion.
    </p>
  ),
};
