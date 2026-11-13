import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ParallelTransportViz } from "@/components/viz/ParallelTransportViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.4.4",
  minutes: 90,
  links: {
    revisits: ["m16.4.3", "m16.4.2", "m16.2.2"],
    foreshadows: ["m16.5.1", "m31.1.2", "m31.1.3"],
  },

  puzzle: (
    <>
      <p>
        Walk from the North Pole down to the equator holding a spear pointing straight ahead, walk a quarter of the way
        round the equator without turning the spear, then walk back up to the pole. You never rotated the spear, yet it now
        points at a right angle to where it started. Where did the turn come from?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Carry a vector round a circle of latitude without turning it within the surface, and see how far it has rotated.</p>
      <ParallelTransportViz />
    </>
  ),

  theory: (
    <>
      <Definition title="covariant derivative">
        <p>
          Let w be a tangent vector field along a curve <M>{"\\alpha(t)"}</M> on a surface S. Its ordinary derivative{" "}
          <M>{"w'(t)"}</M> may point out of the surface. The <strong>covariant derivative</strong> is the tangential part:
        </p>
        <MD>{"\\frac{Dw}{dt} = w' - \\langle w', N\\rangle N."}</MD>
        <p>
          In coordinates, with <M>{"w = a\\,\\mathbf{x}_u + b\\,\\mathbf{x}_v"}</M>, it involves only a, b, their derivatives and
          the Christoffel symbols, so it is intrinsic.
        </p>
      </Definition>

      <Theorem title="parallel transport">
        <p>
          A field w along α is <strong>parallel</strong> if <M>{"Dw/dt = 0"}</M>. Given <M>{"w_0"}</M> tangent at{" "}
          <M>{"\\alpha(0)"}</M>, there is a unique parallel field along α with <M>{"w(0) = w_0"}</M>, and parallel transport
          preserves lengths and angles. A curve is a geodesic exactly when its own velocity is parallel along it.
        </p>
      </Theorem>

      <Example title="round a circle of latitude">
        <p>
          On the unit sphere, carry a vector round the circle of latitude λ. Relative to the local east and north directions,
          the parallel vector turns at the rate sin λ per radian of longitude. After a full circuit it has rotated by
        </p>
        <MD>{"2\\pi(1 - \\sin\\lambda),"}</MD>
        <p>
          which is exactly the area of the cap enclosed above the circle. On the equator the rotation is a full turn, so the
          vector returns as it began, as it must along a geodesic.
        </p>
      </Example>

      <Remark title="holonomy">
        <p>
          The rotation acquired round a closed loop is the <strong>holonomy</strong> of the loop. In the plane it is always
          zero. On a surface, for a small loop, it is approximately K times the enclosed area. This is the seed of the
          Gauss–Bonnet theorem, and of the idea of curvature on general Riemannian manifolds.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How is the covariant derivative of a tangent field along a curve obtained from its ordinary derivative?</p>,
      answer: {
        kind: "choice",
        options: ["By taking its component tangent to the surface", "By taking its normal component", "By dividing by its length", "By rotating it through a right angle"],
        correct: [0],
      },
    },
    {
      key: "geo",
      rung: "check",
      prompt: <p>Which curves have velocity that is parallel along themselves?</p>,
      answer: { kind: "choice", options: ["Geodesics", "Circles of latitude", "Lines of curvature", "All closed curves"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the latitude to 30°. By how many degrees has the vector rotated after a full circuit?</p>,
      answer: { kind: "numeric", value: 180, tolerance: 0.5 },
    },
    {
      key: "lat60",
      rung: "apply",
      prompt: <p>By how many degrees is a vector rotated after parallel transport once round the circle of latitude 60° on the unit sphere? Give one decimal place.</p>,
      answer: { kind: "numeric", value: 48.2, tolerance: 0.1 },
    },
    {
      key: "spear",
      rung: "apply",
      prompt: <p>In the puzzle, the walk encloses one eighth of the unit sphere. What is the holonomy of the loop, in radians? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 1.57, tolerance: 0.01 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that parallel transport preserves the length of a vector: if <M>{"Dw/dt = 0"}</M>, then <M>{"|w|"}</M> is constant.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Differentiates ⟨w, w⟩ to get 2⟨w′, w⟩.",
          "Notes that w is tangent, so ⟨w′, w⟩ = ⟨Dw/dt, w⟩, since the normal part of w′ is orthogonal to w.",
          "Concludes that the derivative is zero, so |w| is constant.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does a vector parallel transported round a closed loop in the plane always return unchanged, while on the sphere it need not?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that in the plane the covariant derivative is the ordinary derivative, so parallel fields are constant.",
          "Links the rotation on the sphere to curvature, for instance holonomy equals K times area for the sphere.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the covariant derivative, parallel transport, and why a vector carried round a circle of latitude comes back rotated by the area of the cap.",

  glimpse: (
    <p>
      Next, the Gauss–Bonnet theorem, which ties the total curvature of a surface to its topology: the curvature of a
      sphere, however it is dented, always adds up to 4π.
    </p>
  ),
};
