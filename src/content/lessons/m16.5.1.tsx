import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { GaussBonnetViz } from "@/components/viz/GaussBonnetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.5.1",
  minutes: 95,
  links: {
    revisits: ["m16.4.4", "m16.4.2", "m15.5.3"],
    foreshadows: ["m16.5.2", "m26.6.2", "m31.3.2"],
  },

  puzzle: (
    <>
      <p>
        Take a rubber ball and squash it, dent it, pull it into the shape of a pear. The Gaussian curvature changes from point
        to point, and dents even make it negative. Yet something about the curvature refuses to change at all. What could
        survive every possible deformation?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Dent and stretch a surface of revolution, and watch the total curvature.</p>
      <GaussBonnetViz />
    </>
  ),

  theory: (
    <>
      <Definition title="geodesic curvature and turning angles">
        <p>
          For a curve on a surface, the <strong>geodesic curvature</strong> <M>{"k_g"}</M> is the curvature of its tangential
          part: it measures how much the curve turns within the surface, and it vanishes exactly on geodesics. At a corner of a
          piecewise smooth curve, the <strong>exterior angle</strong> θ is the angle through which the tangent jumps.
        </p>
      </Definition>

      <Theorem title="local Gauss–Bonnet">
        <p>
          Let R be a region of an oriented surface, homeomorphic to a disc, bounded by a piecewise smooth curve traversed
          positively, with exterior angles <M>{"\\theta_1, \\dots, \\theta_k"}</M> at its corners. Then
        </p>
        <MD>{"\\int_{\\partial R} k_g\\, ds + \\iint_R K\\, dA + \\sum_i \\theta_i = 2\\pi."}</MD>
        <p>
          In the plane, K = 0 and this is the theorem of turning tangents: a simple closed curve turns through 2π. Curvature
          inside the region uses up part of that 2π.
        </p>
      </Theorem>

      <Theorem title="global Gauss–Bonnet">
        <p>For a compact orientable surface S without boundary,</p>
        <MD>{"\\iint_S K\\, dA = 2\\pi\\,\\chi(S),"}</MD>
        <p>
          where χ(S) = V − E + F is the Euler characteristic. Proof sketch: triangulate S, apply the local theorem to each
          triangle and add. The boundary integrals cancel in pairs, since each edge is traversed once in each direction, and
          the exterior angles add up to 2πF − 2πE + 2πV after a little counting.
        </p>
      </Theorem>

      <Example title="sphere and torus">
        <p>
          The unit sphere has K = 1 and area 4π, so ∫K dA = 4π = 2π · 2, matching χ = 2. On the torus the outer half has
          K &gt; 0 and the inner half K &lt; 0, and they cancel exactly, matching χ = 0. A surface of genus g has
          χ = 2 − 2g, so its total curvature is 4π(1 − g).
        </p>
      </Example>

      <Remark title="geometry meets topology">
        <p>
          The left side depends on the metric; the right side only on the topology. Bending, denting or stretching the surface
          moves curvature around but cannot create or destroy it in total. This is the first of many theorems, from
          Chern–Gauss–Bonnet to the Atiyah–Singer index theorem, in which an integral of curvature computes a topological
          invariant.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "stmt",
      rung: "check",
      prompt: <p>What does the global Gauss–Bonnet theorem say for a compact orientable surface without boundary?</p>,
      answer: {
        kind: "choice",
        options: ["∫K dA = 2πχ(S)", "∫K dA = area of S", "∫H dA = 2πχ(S)", "∫K dA = 0 for every surface"],
        correct: [0],
      },
    },
    {
      key: "torus",
      rung: "check",
      prompt: <p>What is the total Gaussian curvature of any surface shaped like a torus?</p>,
      answer: { kind: "choice", options: ["0", "4π", "2π", "−4π"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the deformed sphere with dent 0.40 and stretch 1.00. What is ∫K dA? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 12.57, tolerance: 0.02 },
    },
    {
      key: "genus2",
      rung: "apply",
      prompt: <p>What is the total curvature of a surface of genus 2, shaped like a two-holed doughnut? Give two decimal places.</p>,
      answer: { kind: "numeric", value: -12.57, tolerance: 0.02 },
    },
    {
      key: "hyp",
      rung: "apply",
      prompt: <p>On a surface with K = −1, a geodesic triangle has angles 30°, 40° and 50°. Using the local theorem, what is its area? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 1.05, tolerance: 0.01 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a compact surface in space with K &gt; 0 everywhere is homeomorphic to a sphere. You may use that such surfaces are orientable and the classification of surfaces.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that ∫K dA > 0 since K > 0 everywhere.",
          "Concludes from Gauss–Bonnet that χ(S) > 0.",
          "Uses χ = 2 − 2g with g ≥ 0 to get g = 0, so S is homeomorphic to the sphere.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that a torus in space must have points of negative curvature. Hint: think about a point farthest from the origin.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that at a point farthest from the origin the surface lies inside a sphere touching it, so K > 0 there.",
          "Uses Gauss–Bonnet: the total curvature of a torus is 0, so positive curvature somewhere forces negative curvature elsewhere.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the local and global Gauss–Bonnet theorems, why the total curvature of a sphere is 4π however it is deformed, and why a torus has total curvature 0.",

  glimpse: (
    <p>
      Next, applications of Gauss–Bonnet: angle sums of geodesic triangles, why geodesics on negatively curved surfaces
      cannot meet twice, and the hairy ball theorem.
    </p>
  ),
};
