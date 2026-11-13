import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ExcessTriangleViz } from "@/components/viz/ExcessTriangleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.4.2",
  minutes: 90,
  links: {
    revisits: ["m16.4.1", "m16.3.2", "m16.2.3"],
    foreshadows: ["m16.4.4", "m16.5.1", "m31.1.2"],
  },

  puzzle: (
    <>
      <p>
        Gaussian curvature was defined from the normal vector, which points out of the surface into space. Yet Gauss found
        that a surveyor who never leaves the surface, measuring only lengths, can compute it. He called this result
        &ldquo;remarkable&rdquo;. How can a quantity defined by looking from outside be visible from inside?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Measure the angles and area of a triangle drawn on a sphere, and compare excess ÷ area with 1/R².</p>
      <ExcessTriangleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Christoffel symbols">
        <p>
          For a parametrisation <M>{"\\mathbf{x}(u,v)"}</M>, express the second derivatives in the basis{" "}
          <M>{"\\mathbf{x}_u, \\mathbf{x}_v, N"}</M>:
        </p>
        <MD>{"\\mathbf{x}_{uu} = \\Gamma^1_{11}\\mathbf{x}_u + \\Gamma^2_{11}\\mathbf{x}_v + e N,"}</MD>
        <p>
          and similarly for <M>{"\\mathbf{x}_{uv}"}</M> and <M>{"\\mathbf{x}_{vv}"}</M> with coefficients f and g. Taking inner
          products with <M>{"\\mathbf{x}_u"}</M> and <M>{"\\mathbf{x}_v"}</M> gives linear equations for the{" "}
          <strong>Christoffel symbols</strong> <M>{"\\Gamma^k_{ij}"}</M> whose coefficients are E, F, G and their first
          derivatives. So the Christoffel symbols are intrinsic.
        </p>
      </Definition>

      <Theorem title="Theorema Egregium (Gauss, 1827)">
        <p>
          The Gaussian curvature K depends only on E, F, G and their derivatives. Hence K is preserved by local isometries.
          When <M>{"F = 0"}</M> there is the explicit formula
        </p>
        <MD>{"K = -\\frac{1}{2\\sqrt{EG}}\\left[\\left(\\frac{E_v}{\\sqrt{EG}}\\right)_v + \\left(\\frac{G_u}{\\sqrt{EG}}\\right)_u\\right]."}</MD>
        <p>
          The proof equates the two ways of computing <M>{"(\\mathbf{x}_{uu})_v = (\\mathbf{x}_{uv})_u"}</M>; the tangential
          component yields <M>{"eg - f^2"}</M>, the numerator of K, in terms of the Christoffel symbols alone.
        </p>
      </Theorem>

      <Example title="why maps distort">
        <p>
          The sphere of radius R has <M>{"K = 1/R^2"}</M> and the plane has <M>{"K = 0"}</M>. A local isometry would preserve
          K, so no map of any region of the Earth onto paper preserves all distances. Every atlas must distort something. By
          contrast the cylinder has <M>{"K = 0"}</M>, consistent with its local isometry to the plane.
        </p>
      </Example>

      <Remark title="measuring from inside">
        <p>
          Girard&rsquo;s theorem gives a concrete intrinsic test: a geodesic triangle on a sphere of radius R has angle sum
          π + area/R². More generally, as a small geodesic triangle shrinks to a point, excess ÷ area tends to K. The
          Gauss–Bonnet theorem will make this exact for any surface.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "stmt",
      rung: "check",
      prompt: <p>What does the Theorema Egregium say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Gaussian curvature depends only on the first fundamental form.",
          "Mean curvature depends only on the first fundamental form.",
          "Every surface is locally isometric to the plane.",
          "The principal curvatures are intrinsic.",
        ],
        correct: [0],
      },
    },
    {
      key: "maps",
      rung: "check",
      prompt: <p>Why can no map of a region of the Earth onto a flat sheet preserve all distances?</p>,
      answer: {
        kind: "choice",
        options: ["The sphere has K > 0 and the plane K = 0, and local isometries preserve K.", "The Earth is not smooth.", "Maps must be finite.", "The sphere has no normal vector."],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with R = 1, set both sides to 90° and the angle at the pole to 90°. What is the excess in radians? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 1.57, tolerance: 0.01 },
    },
    {
      key: "area",
      rung: "apply",
      prompt: <p>A geodesic triangle on a sphere of radius 3 has angles 90°, 90° and 60°. What is its area? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 4.71, tolerance: 0.01 },
    },
    {
      key: "formula",
      rung: "apply",
      prompt: <p>The sphere of radius 1 in latitude and longitude coordinates has <M>{"E = 1"}</M>, <M>{"F = 0"}</M> and <M>{"G = \\cos^2 u"}</M>. Using the formula in the lesson, what is K?</p>,
      answer: { kind: "choice", options: ["1", "0", "−1", "cos² u"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use the formula for <M>{"F = 0"}</M> to show that a surface with <M>{"E = 1"}</M>, <M>{"F = 0"}</M> and <M>{"G = 1"}</M> has K = 0, and explain why this proves the cylinder cannot be locally isometric to the sphere.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that all derivatives of E and G vanish, so the formula gives K = 0.",
          "Notes that the cylinder has these coefficients, while the sphere has K = 1/R², which is not zero.",
          "Concludes by the Theorema Egregium that no local isometry exists.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is mean curvature intrinsic? Use the plane and the cylinder to decide.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the plane has H = 0 while the unit cylinder has H = 1/2.",
          "Concludes, since the two are locally isometric, that mean curvature is not intrinsic.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Theorema Egregium, why it means Gaussian curvature can be measured from inside a surface, and why it shows that every flat map of the Earth must distort distances.",

  glimpse: (
    <p>
      Next, geodesics: the straightest curves on a surface, which are also, locally, the shortest. Their equations involve
      only the Christoffel symbols, so they too belong to the intrinsic geometry.
    </p>
  ),
};
