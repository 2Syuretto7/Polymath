import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { FirstFormViz } from "@/components/viz/FirstFormViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.2.3",
  minutes: 85,
  links: {
    revisits: ["m16.2.2", "m16.1.2", "m13.2.1"],
    foreshadows: ["m16.4.1", "m16.4.2", "m31.1.1"],
  },

  puzzle: (
    <>
      <p>
        On a flat world map, Greenland looks as large as Africa, and the straight line from Delhi to San Francisco is not the
        route aircraft fly. The map&rsquo;s coordinates are fine for naming places but wrong for measuring them. What extra
        information would let you read true distances, angles and areas straight off the map?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Draw a straight segment on the latitude-longitude map and compare its map length with its true length on the globe.</p>
      <FirstFormViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the first fundamental form">
        <p>
          At each point of a regular surface, the dot product of <M>{"\\mathbb{R}^3"}</M> restricts to the tangent plane. The
          quadratic form <M>{"I_p(w) = w \\cdot w"}</M> on <M>{"T_pS"}</M> is the <strong>first fundamental form</strong>. In a
          chart, write <M>{"w = a\\,\\mathbf{x}_u + b\\,\\mathbf{x}_v"}</M>; then
        </p>
        <MD>{"I_p(w) = E a^2 + 2F ab + G b^2, \\quad E = \\mathbf{x}_u \\cdot \\mathbf{x}_u,\\ F = \\mathbf{x}_u \\cdot \\mathbf{x}_v,\\ G = \\mathbf{x}_v \\cdot \\mathbf{x}_v."}</MD>
        <p>
          The functions <M>{"E, F, G"}</M> are the coefficients of the first fundamental form, often written{" "}
          <M>{"ds^2 = E\\,du^2 + 2F\\,du\\,dv + G\\,dv^2"}</M>.
        </p>
      </Definition>

      <Theorem title="lengths, angles and areas">
        <p>For a curve <M>{"\\alpha(t) = \\mathbf{x}(u(t), v(t))"}</M>, its length on <M>{"[a, b]"}</M> is</p>
        <MD>{"\\int_a^b \\sqrt{E u'^2 + 2F u'v' + G v'^2}\\,dt."}</MD>
        <p>
          The angle between the coordinate curves satisfies <M>{"\\cos\\theta = F/\\sqrt{EG}"}</M>, so they cross at right
          angles exactly when <M>{"F = 0"}</M>. The area of the region <M>{"\\mathbf{x}(R)"}</M> is{" "}
          <M>{"\\iint_R \\sqrt{EG - F^2}\\,du\\,dv"}</M>, because{" "}
          <M>{"|\\mathbf{x}_u \\times \\mathbf{x}_v|^2 = EG - F^2"}</M>.
        </p>
      </Theorem>

      <Example title="the sphere">
        <p>
          For <M>{"\\mathbf{x}(u, v) = (\\cos v\\cos u, \\cos v\\sin u, \\sin v)"}</M>, with longitude <M>{"u"}</M> and latitude{" "}
          <M>{"v"}</M>: <M>{"\\mathbf{x}_u = (-\\cos v\\sin u, \\cos v\\cos u, 0)"}</M> and{" "}
          <M>{"\\mathbf{x}_v = (-\\sin v\\cos u, -\\sin v\\sin u, \\cos v)"}</M>, so
        </p>
        <MD>{"E = \\cos^2 v, \\qquad F = 0, \\qquad G = 1."}</MD>
        <p>
          A step east is shrunk by <M>{"\\cos v"}</M>, which is why maps that draw parallels equally long exaggerate the
          far north. The total area is <M>{"\\int_0^{2\\pi}\\!\\int_{-\\pi/2}^{\\pi/2} \\cos v\\,dv\\,du = 4\\pi"}</M>.
        </p>
      </Example>

      <Example title="the cylinder and the plane">
        <p>
          The cylinder <M>{"(\\cos u, \\sin u, v)"}</M> has <M>{"E = 1, F = 0, G = 1"}</M>, exactly the same as the plane in
          Cartesian coordinates. So small pieces of cylinder and plane have identical geometry for anyone living in them: you
          can roll a sheet of paper into a cylinder without stretching it. A sphere, as we will see, is different.
        </p>
      </Example>

      <Remark title="intrinsic geometry">
        <p>
          Everything computed from <M>{"E, F, G"}</M> alone is <strong>intrinsic</strong>: it can be measured by a creature
          confined to the surface, without reference to the surrounding space. Gauss&rsquo;s great discovery will be that the
          Gaussian curvature is intrinsic.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "e",
      rung: "check",
      prompt: <p>Which formula gives <M>{"E"}</M>?</p>,
      answer: { kind: "choice", options: ["xᵤ · xᵤ", "xᵤ · xᵥ", "xᵥ · xᵥ", "|xᵤ × xᵥ|"], correct: [0] },
    },
    {
      key: "area",
      rung: "check",
      prompt: <p>Which expression is the area element of a chart?</p>,
      answer: { kind: "choice", options: ["√(EG − F²) du dv", "(E + G) du dv", "√(E² + G²) du dv", "EG du dv"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, start and end at latitude 60° with a change in longitude of 90°. What is the true length of the path? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.785, tolerance: 0.002 },
    },
    {
      key: "sphere",
      rung: "apply",
      prompt: <p>Compute the area of the unit sphere from <M>{"\\sqrt{EG - F^2} = \\cos v"}</M>. Give two decimal places.</p>,
      answer: { kind: "numeric", value: 12.57, tolerance: 0.01 },
    },
    {
      key: "cyl",
      rung: "apply",
      prompt: <p>What are <M>{"E, F, G"}</M> for the cylinder <M>{"(\\cos u, \\sin u, v)"}</M>?</p>,
      answer: { kind: "choice", options: ["1, 0, 1", "cos² u, 0, 1", "1, 1, 1", "0, 1, 0"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For the latitude-longitude chart of the unit sphere, compute <M>{"E"}</M>, <M>{"F"}</M> and <M>{"G"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes xᵤ = (−cos v sin u, cos v cos u, 0) and xᵥ = (−sin v cos u, −sin v sin u, cos v).",
          "Finds E = cos² v and G = sin² v + cos² v = 1.",
          "Finds F = cos v sin v sin u cos u − cos v sin v sin u cos u = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Prove that <M>{"|\\mathbf{x}_u \\times \\mathbf{x}_v|^2 = EG - F^2"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses |a × b| = |a||b| sin θ and a · b = |a||b| cos θ, or Lagrange’s identity.",
          "Writes |a × b|² = |a|²|b|²(1 − cos² θ) = |a|²|b|² − (a · b)².",
          "Substitutes a = xᵤ, b = xᵥ to get EG − F². Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the first fundamental form E du² + 2F du dv + G dv², how it gives lengths, angles and areas on a surface, the example of the sphere in latitude and longitude, and why the cylinder and the plane have the same intrinsic geometry.",

  glimpse: (
    <p>
      Next, orientation: whether a surface admits a consistent choice of unit normal, and why the Möbius band does not.
    </p>
  ),
};
