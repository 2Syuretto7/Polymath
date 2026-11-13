import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TotalTurningViz } from "@/components/viz/TotalTurningViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.1.5",
  minutes: 85,
  links: {
    revisits: ["m16.1.3", "m16.1.4", "m15.4.4"],
    foreshadows: ["m16.5.1", "m16.5.2", "m17.4.1"],
  },

  puzzle: (
    <>
      <p>
        Walk once round the edge of a lake, however wiggly, and come back to your starting point facing the same way. Add up
        all your turns, left as positive and right as negative. The answer is always exactly one full turn. Why should local
        bending, measured point by point, add up to a number that knows nothing about the lake&rsquo;s shape?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Travel round each closed curve and count the turns of its tangent.</p>
      <TotalTurningViz />
    </>
  ),

  theory: (
    <>
      <Definition title="rotation index">
        <p>
          Let <M>{"\\alpha : [0, L] \\to \\mathbb{R}^2"}</M> be a closed regular plane curve parametrised by arc length. Write
          its unit tangent as <M>{"T(s) = (\\cos\\theta(s), \\sin\\theta(s))"}</M> with <M>{"\\theta"}</M> continuous. Then
          the signed curvature is <M>{"\\kappa = \\theta'"}</M>, and since <M>{"T(L) = T(0)"}</M>,
        </p>
        <MD>{"\\int_0^L \\kappa\\,ds = \\theta(L) - \\theta(0) = 2\\pi I"}</MD>
        <p>
          for a whole number <M>{"I"}</M>, the <strong>rotation index</strong>. It is the degree of the map{" "}
          <M>{"s \\mapsto T(s)"}</M> from the circle to the circle, met in the computation of <M>{"\\pi_1(S^1)"}</M>.
        </p>
      </Definition>

      <Theorem title="Hopf’s Umlaufsatz (1935)">
        <p>
          A simple closed regular plane curve has rotation index <M>{"\\pm 1"}</M>: <M>{"+1"}</M> when traversed
          anticlockwise.
        </p>
      </Theorem>

      <Remark title="the idea of the proof">
        <p>
          Hopf considered the direction of the chord from <M>{"\\alpha(s_1)"}</M> to <M>{"\\alpha(s_2)"}</M> for{" "}
          <M>{"s_1 < s_2"}</M>, which is defined on a triangle and agrees with the tangent along the diagonal. Deforming the
          diagonal to the other two sides of the triangle, starting from a point where the curve touches a supporting line,
          shows the tangent turns exactly as much as a chord pivoting about one point, which is one full turn.
        </p>
      </Remark>

      <Theorem title="the isoperimetric inequality">
        <p>
          A simple closed curve of length <M>{"L"}</M> bounding area <M>{"A"}</M> satisfies <M>{"L^2 \\geq 4\\pi A"}</M>, with
          equality only for circles.
        </p>
      </Theorem>

      <Example title="the circle and the square">
        <p>
          A circle of radius <M>{"r"}</M> has <M>{"L^2 = 4\\pi^2 r^2 = 4\\pi \\cdot \\pi r^2"}</M>, so equality holds. A square of
          side 1 has <M>{"L^2 = 16 > 4\\pi \\approx 12.57"}</M>. So among all curves of a fixed length the circle encloses the
          most area, the answer to Dido&rsquo;s ancient problem of the largest land enclosed by a thong of oxhide.
        </p>
      </Example>

      <Theorem title="the four vertex theorem">
        <p>
          A <strong>vertex</strong> is a point where <M>{"\\kappa' = 0"}</M>. Every simple closed curve, other than a circle,
          has at least four vertices: its curvature has at least two local maxima and two local minima.
        </p>
      </Theorem>

      <Remark title="space curves">
        <p>
          For closed curves in space, Fenchel&rsquo;s theorem says <M>{"\\int |\\kappa|\\,ds \\geq 2\\pi"}</M>, with equality
          only for convex plane curves, and the F&aacute;ry&ndash;Milnor theorem says a knotted curve has{" "}
          <M>{"\\int \\kappa\\,ds > 4\\pi"}</M>. Local geometry constrains global shape; on surfaces the same story becomes the
          Gauss&ndash;Bonnet theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "total",
      rung: "check",
      prompt: <p>What is the total signed curvature of a simple closed curve traversed anticlockwise? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 6.28, tolerance: 0.01 },
    },
    {
      key: "iso",
      rung: "check",
      prompt: <p>Which inequality relates the length <M>{"L"}</M> and enclosed area <M>{"A"}</M> of a simple closed curve?</p>,
      answer: { kind: "choice", options: ["L² ≥ 4πA", "L² ≤ 4πA", "L ≥ 2πA", "A ≥ πL²"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the rotation index of the limaçon with its inner loop?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "area",
      rung: "apply",
      prompt: <p>What is the largest area a closed curve of length 10 can enclose? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 7.96, tolerance: 0.01 },
    },
    {
      key: "ellipse",
      rung: "apply",
      prompt: <p>How many vertices does the ellipse <M>{"(2\\cos t, \\sin t)"}</M> have?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the total signed curvature of a closed regular plane curve is a whole multiple of <M>{"2\\pi"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the unit tangent as (cos θ(s), sin θ(s)) with θ continuous, and notes κ = θ′.",
          "Integrates to get the total curvature θ(L) − θ(0).",
          "Uses T(L) = T(0), so cos and sin agree at both ends, to conclude θ(L) − θ(0) is a multiple of 2π.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the isoperimetric inequality to show that among rectangles of perimeter 4, none encloses area more than <M>{"4/\\pi"}</M>. Is this bound attained?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies A ≤ L²/(4π) with L = 4 to get A ≤ 4/π.",
          "Notes that the bound is attained only by a circle, so no rectangle attains it; the best rectangle, the unit square, has area 1.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the rotation index of a closed curve as total curvature over 2π, Hopf's theorem that simple closed curves have index ±1, the isoperimetric inequality, and the four vertex theorem.",

  glimpse: (
    <p>
      Next, surfaces in space: what it means for a subset of R³ to be a smooth surface, described locally by parametrised
      patches.
    </p>
  ),
};
