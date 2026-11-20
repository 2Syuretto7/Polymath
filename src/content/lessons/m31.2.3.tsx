import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PuncturedGeodesicViz } from "@/components/viz/PuncturedGeodesicViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.2.3",
  minutes: 90,
  links: {
    revisits: ["m31.2.2", "m12.1.3", "m12.1.4"],
    foreshadows: ["m31.3.1", "m31.5.2", "m31.5.3"],
  },

  puzzle: (
    <>
      <p>
        Remove the origin from the plane. A straight line aimed at the origin cannot be continued past it, a sequence
        approaching the origin is Cauchy but has no limit, and the points (−1, 0) and (1, 0) have no shortest path between
        them. Are these three failures really one failure?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move q round the circle. When does the straight segment from p to q stop being available?</p>
      <PuncturedGeodesicViz />
    </>
  ),

  theory: (
    <>
      <Definition title="geodesic completeness">
        <p>
          A connected Riemannian manifold is <strong>geodesically complete</strong> if every geodesic is defined for all time,
          that is, if <M>{"\\exp_p"}</M> is defined on all of <M>{"T_p M"}</M> for every p.
        </p>
      </Definition>

      <Theorem title="Hopf–Rinow">
        <p>For a connected Riemannian manifold M, the following are equivalent:</p>
        <ul>
          <li>M is complete as a metric space with the Riemannian distance;</li>
          <li>M is geodesically complete;</li>
          <li>for some p, <M>{"\\exp_p"}</M> is defined on all of <M>{"T_p M"}</M>;</li>
          <li>closed bounded subsets of M are compact.</li>
        </ul>
        <p>
          When they hold, any two points are joined by a minimising geodesic.
        </p>
      </Theorem>

      <Theorem title="the key step">
        <p>
          If <M>{"\\exp_p"}</M> is defined on all of <M>{"T_p M"}</M>, every q is joined to p by a minimising geodesic.
        </p>
        <p>
          <strong>Proof idea.</strong> Let r = d(p, q). On a small geodesic sphere around p, choose the point x closest to
          q, and let γ be the unit-speed geodesic from p through x. Show that the set of times t ≤ r with{" "}
          <M>{"d(\\gamma(t), q) = r - t"}</M> is all of [0, r], by a continuity argument that applies the same trick at{" "}
          <M>{"\\gamma(t)"}</M>. Then <M>{"\\gamma(r) = q"}</M>.
        </p>
      </Theorem>

      <Example title="consequences">
        <p>
          Every compact Riemannian manifold is complete, so any two of its points are joined by a minimising geodesic. A
          closed embedded submanifold of ℝᴺ with the induced metric is complete, since closed bounded subsets of it are
          compact.
        </p>
      </Example>

      <Remark title="uniqueness is a different matter">
        <p>
          Completeness gives existence, not uniqueness, of minimising geodesics: on the sphere, infinitely many join a point
          to its antipode. Even without completeness, nearby points are joined by unique minimising geodesics.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a Riemannian manifold geodesically complete?</p>,
      answer: { kind: "choice", options: ["When every geodesic is defined for all time", "When it is compact", "When it has no boundary and is simply connected", "When every geodesic is closed"], correct: [0] },
    },
    {
      key: "hr",
      rung: "check",
      prompt: <p>By Hopf–Rinow, metric completeness is equivalent to what?</p>,
      answer: { kind: "choice", options: ["Geodesic completeness", "Compactness", "Zero curvature", "Simple connectedness"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, on the plane without the origin, at what angle of q in degrees does no minimising geodesic exist?</p>,
      answer: { kind: "numeric", value: 180 },
    },
    {
      key: "disc",
      rung: "apply",
      prompt: <p>Is the open unit disc with the Euclidean metric complete?</p>,
      answer: { kind: "choice", options: ["No: radial geodesics leave in finite time", "Yes", "Only if it is compact", "Yes, because it is convex"], correct: [0] },
    },
    {
      key: "hyp",
      rung: "apply",
      prompt: <p>The hyperbolic half-plane has every horizontal line at infinite distance from the x-axis. Is it complete?</p>,
      answer: { kind: "choice", options: ["Yes", "No", "Only its upper half", "It is not a Riemannian manifold"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a compact connected Riemannian manifold is geodesically complete.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a compact metric space is complete.",
          "Applies Hopf–Rinow to get geodesic completeness.",
          "Or argues directly: a geodesic defined on [0, b) would give a Cauchy sequence γ(tₙ) whose limit lets it be extended.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Give an example of a complete Riemannian manifold with two points joined by infinitely many minimising geodesics.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives the round sphere with antipodal points, or a similar example.",
          "Explains why each of the infinitely many geodesics has the minimal length.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Parallel transport round a small loop rotates vectors by an amount proportional to the area enclosed. The
        proportionality, measured in every pair of directions, is a tensor.
      </p>
      <p>Next, the curvature tensor.</p>
    </>
  ),
};
