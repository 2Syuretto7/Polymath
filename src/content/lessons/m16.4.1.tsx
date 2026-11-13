import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { CylinderUnrollViz } from "@/components/viz/CylinderUnrollViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.4.1",
  minutes: 85,
  links: {
    revisits: ["m16.2.3", "m16.3.2", "m16.1.2"],
    foreshadows: ["m16.4.2", "m16.4.3", "m31.1.2"],
  },

  puzzle: (
    <>
      <p>
        A sheet of paper rolls into a cylinder without stretching or tearing, yet no amount of care will flatten an orange
        peel. Both surfaces look curved from outside. What is the cylinder secretly sharing with the plane that the sphere
        lacks?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Draw a straight segment on a strip of the plane, roll the strip into a cylinder, and compare the lengths.</p>
      <CylinderUnrollViz />
    </>
  ),

  theory: (
    <>
      <Definition title="isometry and local isometry">
        <p>
          A smooth map <M>{"F: S \\to \\tilde S"}</M> between surfaces is a <strong>local isometry</strong> if its derivative
          preserves inner products of tangent vectors at every point: <M>{"\\langle dF_p(v), dF_p(w)\\rangle = \\langle v, w\\rangle"}</M>.
          It is an <strong>isometry</strong> if it is also a bijection. Local isometries preserve the length of every curve,
          and so angles and areas.
        </p>
      </Definition>

      <Theorem title="criterion in coordinates">
        <p>
          Let <M>{"\\mathbf{x}(u,v)"}</M> and <M>{"\\tilde{\\mathbf{x}}(u,v)"}</M> be parametrisations of S and <M>{"\\tilde S"}</M>{" "}
          on the same domain. The map <M>{"\\mathbf{x}(u,v) \\mapsto \\tilde{\\mathbf{x}}(u,v)"}</M> is a local isometry if and
          only if the coefficients of the first fundamental forms agree:
        </p>
        <MD>{"E = \\tilde E, \\qquad F = \\tilde F, \\qquad G = \\tilde G."}</MD>
        <p>
          The reason is that the length of a curve <M>{"(u(t), v(t))"}</M> is the integral of{" "}
          <M>{"\\sqrt{E u'^2 + 2F u'v' + G v'^2}"}</M>, so it depends only on E, F and G.
        </p>
      </Theorem>

      <Example title="plane and cylinder">
        <p>
          The plane <M>{"(u, v, 0)"}</M> and the cylinder <M>{"(\\cos u, \\sin u, v)"}</M> both have{" "}
          <M>{"E = 1,\\ F = 0,\\ G = 1"}</M>, so wrapping is a local isometry, though not an isometry, since it is not injective.
          A straight segment of slope m becomes a helix of the same length. The catenoid and the helicoid are another
          classical pair of locally isometric surfaces.
        </p>
      </Example>

      <Remark title="intrinsic geometry">
        <p>
          A property is <strong>intrinsic</strong> if it is preserved by local isometries, so that it can be measured by a
          being who lives in the surface and only measures lengths. The normal curvatures of the cylinder differ from those of
          the plane, so they are not intrinsic. The next lesson shows, surprisingly, that their product K is.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does a local isometry preserve?</p>,
      answer: {
        kind: "choice",
        options: ["Inner products of tangent vectors, and so lengths of curves", "Normal vectors", "Mean curvature", "The ambient distance between any two points"],
        correct: [0],
      },
    },
    {
      key: "crit",
      rung: "check",
      prompt: <p>In terms of parametrisations on a common domain, when is the map between two surfaces a local isometry?</p>,
      answer: {
        kind: "choice",
        options: ["When E, F and G agree", "When the normals agree", "When the second fundamental forms agree", "When the surfaces have the same area"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, compare the length of the segment in the plane with the length of its image on the cylinder. What do you find?</p>,
      answer: { kind: "choice", options: ["They are equal", "The cylinder length is longer", "The plane length is longer", "It depends on the turn of the cylinder"], correct: [0] },
    },
    {
      key: "helix",
      rung: "apply",
      prompt: <p>The segment from (0, 0) to (2π, 2π) in the plane wraps once round the unit cylinder. What is the length of the resulting helix? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 8.89, tolerance: 0.01 },
    },
    {
      key: "cone",
      rung: "apply",
      prompt: <p>The cone <M>{"(v\\cos u, v\\sin u, v)"}</M> has <M>{"E = v^2"}</M>, <M>{"F = 0"}</M> and <M>{"G = 2"}</M>. Is the identity map on (u, v) from the plane in polar form, with <M>{"E = v^2, F = 0, G = 1"}</M>, a local isometry onto it?</p>,
      answer: {
        kind: "choice",
        options: ["No, since G differs", "Yes, since E agrees", "Yes, since F agrees", "No, since the cone is not smooth anywhere"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the map from the plane to the cylinder given by <M>{"(u, v) \\mapsto (\\cos u, \\sin u, v)"}</M> is a local isometry.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the partial derivatives (−sin u, cos u, 0) and (0, 0, 1).",
          "Finds E = 1, F = 0, G = 1, the same as for the plane.",
          "Concludes by the criterion that the map is a local isometry.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can the map from the plane to the cylinder not be a global isometry, even though it is a local one?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the map is not injective, since u and u + 2π go to the same point.",
          "May add that the cylinder has closed geodesics, or loops that cannot shrink, which the plane lacks.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a local isometry is, why equal first fundamental forms give one, and why the plane and the cylinder are locally isometric.",

  glimpse: (
    <p>
      Next, Gauss&rsquo;s Theorema Egregium: the Gaussian curvature can be computed from E, F and G alone, so it is
      unchanged by bending.
    </p>
  ),
};
