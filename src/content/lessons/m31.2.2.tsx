import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CylinderCutViz } from "@/components/viz/CylinderCutViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.2.2",
  minutes: 90,
  links: {
    revisits: ["m31.2.1", "m16.4.3", "m26.4.2"],
    foreshadows: ["m31.2.3", "m31.4.2", "m31.4.3"],
  },

  puzzle: (
    <>
      <p>
        Geodesics were defined by a differential equation: zero acceleration. Shortest paths are defined by a minimum over
        all curves. Is every shortest path a geodesic? Is every short enough piece of a geodesic a shortest path? And how
        long can a geodesic go before something shorter appears?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        On a flat cylinder, follow a geodesic from p. Lengthen it and watch for the moment it stops being the shortest way.
      </p>
      <CylinderCutViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Gauss lemma">
        <p>
          In a normal neighbourhood of p, the radial geodesics from p meet the geodesic spheres{" "}
          <M>{"\\{\\exp_p(v) : |v| = r\\}"}</M> at right angles. Equivalently, the gradient of the distance from p is the
          unit radial vector field.
        </p>
      </Theorem>

      <Theorem title="geodesics minimise locally">
        <p>
          If <M>{"\\exp_p"}</M> is a diffeomorphism on the ball of radius ε, then for |v| &lt; ε the radial geodesic{" "}
          <M>{"t \\mapsto \\exp_p(tv)"}</M>, 0 ≤ t ≤ 1, is the unique shortest curve from p to <M>{"\\exp_p(v)"}</M>, up to
          reparametrisation.
        </p>
        <p>
          <strong>Proof idea.</strong> Split the velocity of any competing curve into radial and tangential parts. By the
          Gauss lemma they are orthogonal, so its speed is at least its radial speed, and the radial distance climbs from 0
          to |v|. Equality forces the curve to be radial.
        </p>
      </Theorem>

      <Theorem title="shortest paths are geodesics">
        <p>
          Every curve that minimises length between its endpoints, parametrised at constant speed, is a geodesic. Apply local
          minimisation on small pieces: each short piece must be the radial geodesic.
        </p>
      </Theorem>

      <Definition title="cut points">
        <p>
          Along a unit-speed geodesic γ from p, the <strong>cut point</strong> is <M>{"\\gamma(t_0)"}</M>, where{" "}
          <M>{"t_0"}</M> is the last time at which γ minimises from p. The set of cut points is the{" "}
          <strong>cut locus</strong> of p. On the round sphere it is the antipodal point; on the flat cylinder, the line
          opposite p.
        </p>
      </Definition>

      <Example title="the first variation of length">
        <p>
          Another route to the same facts: for a variation of a unit-speed curve γ with variation field V and fixed endpoints,{" "}
          <M>{"\\frac{d}{ds} L = -\\int g(V, D_t \\dot\\gamma) \\, dt"}</M>. This vanishes for every V exactly when{" "}
          <M>{"D_t \\dot\\gamma = 0"}</M>: geodesics are the critical points of length.
        </p>
      </Example>

      <Remark title="critical is not minimal">
        <p>
          A geodesic is critical for length, but past the cut point it is no longer a minimum. Whether it is still a local
          minimum depends on conjugate points, studied through the second variation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "gauss",
      rung: "check",
      prompt: <p>What does the Gauss lemma say?</p>,
      answer: { kind: "choice", options: ["Radial geodesics meet geodesic spheres at right angles", "Geodesics have constant speed", "The curvature is constant", "The exponential map is onto"], correct: [0] },
    },
    {
      key: "short",
      rung: "check",
      prompt: <p>Is every length-minimising curve, at constant speed, a geodesic?</p>,
      answer: { kind: "choice", options: ["Yes", "Only on compact manifolds", "Only in dimension 2", "No"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at direction 0°, at what length does the geodesic cross the cut locus? Give 2 decimal places.</p>,
      answer: { kind: "numeric", value: 3.14, tolerance: 0.01 },
    },
    {
      key: "sphere",
      rung: "apply",
      prompt: <p>On the unit sphere, a geodesic from the North Pole of length 4 is not minimising. What is the distance from the pole to its endpoint, to 2 decimal places?</p>,
      answer: { kind: "numeric", value: 2.28, tolerance: 0.01 },
    },
    {
      key: "cut",
      rung: "apply",
      prompt: <p>What is the cut locus of a point on the round sphere?</p>,
      answer: { kind: "choice", options: ["The antipodal point", "The equator", "A great circle through the point", "It is empty"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the great circle arc of length L &gt; π from the North Pole is not a shortest path.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the arc passes the South Pole and ends at a point at angle L from the North Pole along one meridian.",
          "Notes the other arc of the same great circle has length 2π − L.",
          "Concludes 2π − L < L, so a shorter path exists.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the cut locus of p on the flat cylinder is the line opposite p.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Unrolls the cylinder and notes distances are minima over the copies of p.",
          "Notes a point on the opposite line is equidistant from two neighbouring copies, so two shortest geodesics reach it.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        On the punctured plane, two points can be at distance 2 with no curve of length 2 between them. When can every
        geodesic be extended forever, and every pair of points be joined by a shortest one?
      </p>
      <p>Next, the Hopf–Rinow theorem.</p>
    </>
  ),
};
