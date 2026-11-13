import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { GeodesicSprayViz } from "@/components/viz/GeodesicSprayViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.4.3",
  minutes: 90,
  links: {
    revisits: ["m16.4.2", "m16.4.1", "m16.1.3"],
    foreshadows: ["m16.4.4", "m31.2.1", "m31.2.2"],
  },

  puzzle: (
    <>
      <p>
        An aeroplane flying from Delhi to San Francisco heads far north, over the Arctic, although on a flat map the route
        looks like a long detour. On a curved surface, what does &ldquo;going straight&rdquo; mean, and is the straightest
        path always the shortest?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Send geodesics out in every direction from one point of a sphere, and watch them spread and meet.</p>
      <GeodesicSprayViz />
    </>
  ),

  theory: (
    <>
      <Definition title="geodesic">
        <p>
          A curve <M>{"\\alpha(s)"}</M> on a surface, parametrised by arc length, is a <strong>geodesic</strong> if its
          acceleration <M>{"\\alpha''"}</M> is everywhere normal to the surface. Equivalently its{" "}
          <strong>geodesic curvature</strong>, the tangential part of the curvature, is zero: the curve does not turn within
          the surface. Writing <M>{"\\alpha = \\mathbf{x}(u(s), v(s))"}</M>, this becomes the <strong>geodesic equations</strong>
        </p>
        <MD>{"u_k'' + \\sum_{i,j} \\Gamma^k_{ij}\\, u_i' u_j' = 0, \\qquad k = 1, 2,"}</MD>
        <p>
          with <M>{"u_1 = u"}</M> and <M>{"u_2 = v"}</M>. Since the Christoffel symbols are intrinsic, so are geodesics.
        </p>
      </Definition>

      <Theorem title="existence and local minimising">
        <p>
          The geodesic equations are a second-order system of ordinary differential equations, so for every point p and unit
          tangent vector w there is a unique geodesic starting at p in direction w, defined for a short time. Moreover, a
          geodesic is locally the shortest curve: for nearby points on it, no curve in the surface joining them is shorter.
        </p>
      </Theorem>

      <Example title="plane, cylinder and sphere">
        <p>
          In the plane the geodesics are straight lines. On the cylinder they are the images of straight lines under the local
          isometry: lines along the axis, circles round it, and helices. On the sphere they are the great circles, whose
          acceleration points to the centre, along the normal.
        </p>
      </Example>

      <Remark title="shortest only locally">
        <p>
          On the unit sphere all geodesics from p meet again at the antipode after distance π. Past it, a great-circle arc is
          still a geodesic but no longer the shortest path, since the other way round is shorter. The circle of points at
          distance s from p has circumference 2π sin s, less than 2πs: positive curvature makes geodesics converge.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What characterises a geodesic parametrised by arc length?</p>,
      answer: {
        kind: "choice",
        options: ["Its acceleration is normal to the surface.", "Its acceleration is tangent to the surface.", "It has zero curvature in space.", "It lies in a plane."],
        correct: [0],
      },
    },
    {
      key: "sphere",
      rung: "check",
      prompt: <p>What are the geodesics of a sphere?</p>,
      answer: { kind: "choice", options: ["Great circles", "Circles of latitude", "Spirals to the poles", "Straight lines"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at what distance travelled do all the geodesics meet again? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 3.14, tolerance: 0.03 },
    },
    {
      key: "circ",
      rung: "apply",
      prompt: <p>On the unit sphere, what is the circumference of the circle of points at distance π/6 from a given point? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 3.14, tolerance: 0.01 },
    },
    {
      key: "lat",
      rung: "apply",
      prompt: <p>Is the circle of latitude 40° north on the unit sphere a geodesic?</p>,
      answer: {
        kind: "choice",
        options: [
          "No: its acceleration points to the axis, not to the centre, so it has a tangential part.",
          "Yes: it is a circle.",
          "Yes: every circle on a sphere is a geodesic.",
          "No: it is not closed.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that every great circle on the unit sphere, parametrised by arc length, is a geodesic.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes a great circle as α(s) = cos s · p + sin s · w with p and w orthonormal.",
          "Computes α″(s) = −α(s).",
          "Notes that α(s) is the unit normal of the sphere at α(s), so the acceleration is normal and α is a geodesic.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>On the cylinder, how many geodesics join two points that lie on the same vertical line? What does this say about uniqueness?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the vertical segment is one geodesic, and that helices winding round once, twice and so on are others.",
          "Concludes that there are infinitely many, so geodesics between two points need not be unique, though only one is shortest.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a geodesic is, why great circles are the geodesics of a sphere, and why a geodesic is shortest only locally.",

  glimpse: (
    <p>
      Next, the covariant derivative and parallel transport: how to say that a vector field along a curve is constant,
      without leaving the surface.
    </p>
  ),
};
