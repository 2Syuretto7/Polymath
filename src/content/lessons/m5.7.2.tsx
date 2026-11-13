import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { CapSurfaceViz } from "@/components/viz/CapSurfaceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.7.2",
  minutes: 90,
  links: {
    revisits: ["m5.7.1", "m5.6.4", "m5.6.3"],
    foreshadows: ["m5.7.4", "m26.6.2", "m12.6.3"],
  },

  puzzle: (
    <>
      <p>
        Hold a wire loop in a stream and dip a soap film across it. The film can bulge up or down, be nearly flat or
        stretched into a long sock, yet it always has the same rim. In 1831 Michael Faraday found that changing the magnetic
        flux through a loop drives a current round it, and a physicist must be able to compute that flux through any surface
        spanning the loop. Why should every such surface give the same answer?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each cap is a surface whose edge is the unit circle. Change its height, including turning it upside down, and watch
        the area and the flux of the curl.
      </p>
      <CapSurfaceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the curl">
        <p>
          For a field <M>{"F = (P, Q, R)"}</M> in space, the <strong>curl</strong> is
        </p>
        <MD>{"\\operatorname{curl} F = \\nabla \\times F = \\left( R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\right)."}</MD>
        <p>
          Its component along a unit vector <M>{"n"}</M> is the circulation density in the plane perpendicular to{" "}
          <M>{"n"}</M>: the circulation round a tiny loop in that plane, divided by its area. A small paddle wheel placed in a
          fluid spins fastest when its axis points along the curl.
        </p>
      </Definition>

      <Theorem title="Stokes' theorem">
        <p>
          Let <M>{"S"}</M> be an oriented piecewise smooth surface whose boundary is a closed curve <M>{"C"}</M>, oriented so
          that when you walk along <M>{"C"}</M> with your head in the direction of <M>{"n"}</M>, the surface is on your left.
          If <M>{"F"}</M> has continuous partial derivatives, then
        </p>
        <MD>{"\\oint_C F \\cdot dr = \\iint_S (\\operatorname{curl} F) \\cdot n\\, dS."}</MD>
      </Theorem>

      <Example title="why it is true">
        <p>
          Cut <M>{"S"}</M> into small patches, each nearly flat. On each patch, Green&rsquo;s theorem in the plane of the patch
          says the circulation round it is close to the normal component of the curl times its area. Adding over the patches,
          the circulations along shared edges cancel, as in the previous lesson, and only the outer boundary survives. For a
          surface that is a graph, the theorem can be reduced to Green&rsquo;s theorem exactly, by the chain rule.
        </p>
      </Example>

      <Example title="any surface will do">
        <p>
          For <M>{"F = (z - y,\\ x + z,\\ y)"}</M>, <M>{"\\operatorname{curl} F = (0, 1, 2)"}</M>. On the unit circle in the
          plane <M>{"z = 0"}</M>, <M>{"F \\cdot dr = -y\\, dx + x\\, dy"}</M>, with circulation <M>{"2\\pi"}</M>. By Stokes,
          every surface with that edge has flux of the curl equal to <M>{"2\\pi"}</M>, so we may as well use the flat disc,
          where <M>{"n = (0, 0, 1)"}</M> and the flux is <M>{"2 \\times \\pi"}</M>. Choosing the easiest spanning surface is
          the main practical use of the theorem.
        </p>
      </Example>

      <Remark title="consequences">
        <p>
          If <M>{"\\operatorname{curl} F = 0"}</M> on a region where every loop bounds a surface, every circulation is zero,
          so <M>{"F"}</M> is conservative: the cross-partials test, explained. A direct calculation shows{" "}
          <M>{"\\operatorname{div}(\\operatorname{curl} F) = 0"}</M>, which is why the flux of a curl through a closed surface,
          one with no edge, is zero. In physics, Faraday&rsquo;s law and Ampère&rsquo;s law are each stated in two forms, one
          with circulations and fluxes and one with curls, and Stokes&rsquo; theorem translates between them.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "curl",
      rung: "check",
      prompt: <p>Find the third component of <M>{"\\operatorname{curl} F"}</M> for <M>{"F = (-y, x, 0)"}</M>.</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "zero",
      rung: "check",
      prompt: <p>Which of these fields have zero curl everywhere? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["(yz, xz, xy)", "(−y, x, 0)", "(x, y, z)", "(0, 0, x)"], correct: [0, 2] },
    },
    {
      key: "hemi",
      rung: "apply",
      prompt: (
        <p>
          Use Stokes&rsquo; theorem to find the flux of <M>{"\\operatorname{curl} F"}</M> upwards through the upper half of the
          unit sphere, for <M>{"F = (-y, x, 0)"}</M>. Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 2 * Math.PI, tolerance: 0.01 },
    },
    {
      key: "radius2",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\oint_C F \\cdot dr"}</M> for <M>{"F = (-y, x, z^2)"}</M> round the circle of radius 2 in the plane{" "}
          <M>{"z = 0"}</M>, anticlockwise seen from above. Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 8 * Math.PI, tolerance: 0.03 },
    },
    {
      key: "same",
      rung: "apply",
      prompt: <p>Why may the flux of a curl through a hemisphere be computed using a flat disc instead?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the hemisphere and the disc have the same area.",
          "Because both surfaces have the same boundary curve, with matching orientation, and Stokes' theorem makes each flux equal the circulation round it.",
          "Because the curl is always constant.",
          "Because the flux of any field through a hemisphere is zero.",
        ],
        correct: [1],
      },
    },
    {
      key: "divcurl",
      rung: "prove",
      prompt: <p>Prove that <M>{"\\operatorname{div}(\\operatorname{curl} F) = 0"}</M> for a field <M>{"F"}</M> with continuous second partial derivatives.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes div(curl F) = (R_y − Q_z)_x + (P_z − R_x)_y + (Q_x − P_y)_z.",
          "Uses equality of mixed partials, R_yx = R_xy and so on, so the six terms cancel in pairs.",
        ],
      },
    },
    {
      key: "closed",
      rung: "stretch",
      prompt: (
        <p>
          Using Stokes&rsquo; theorem, explain why a field with zero curl on all of <M>{"\\mathbb{R}^3"}</M> is conservative.
          What property of <M>{"\\mathbb{R}^3"}</M> does the argument use?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Argues that any closed curve bounds a surface, so its circulation equals the flux of the zero curl, which is 0.",
          "Concludes the line integral is path independent, so F is conservative, and names the property used: every loop bounds a surface (no holes, simple connectedness).",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the curl measures, what Stokes' theorem says and how its orientations are matched, why every spanning surface gives the same flux of the curl, and one consequence.",

  glimpse: (
    <p>
      The next lesson proves the third great theorem, relating the flux out of a closed surface to the divergence inside.
      The lesson after shows that Green, Stokes and the divergence theorem are one theorem about differential forms.
    </p>
  ),
};
