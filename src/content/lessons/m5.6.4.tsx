import { M, MD } from "@/components/Math";
import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FluxViz } from "@/components/viz/FluxViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.6.4",
  minutes: 85,
  links: {
    revisits: ["m5.6.3", "m5.6.1", "m5.1.2"],
    foreshadows: ["m5.7.3", "m5.7.2", "m12.6.3"],
  },

  puzzle: (
    <>
      <p>
        A fishing net is held in a river. How much water passes through it each second? That depends on how fast the water
        flows, how big the net is, and how it is angled: held edge-on to the current, nothing passes through at all. If the
        current varies from place to place and the net is curved, we need an integral. And if the net is closed, like a
        bag, what does the total flow out of it tell us about what is inside?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        This is the same idea one dimension down: flow in the plane crossing a curve. Turn the window in the steady flow,
        then try a closed circle in each flow and change its radius.
      </p>
      <FluxViz />
    </>
  ),

  theory: (
    <>
      <Definition title="orientation">
        <p>
          An <strong>orientation</strong> of a surface is a continuous choice of unit normal <M>{"n"}</M> at each point: a
          choice of which side is the front. A closed surface such as a sphere is usually given the outward normal. Some
          surfaces cannot be oriented: travel once round a Möbius strip and the normal comes back pointing the other way.
        </p>
      </Definition>

      <Definition title="flux">
        <p>
          The <strong>flux</strong> of a vector field <M>{"F"}</M> through an oriented surface <M>{"S"}</M> is
        </p>
        <MD>{"\\iint_S F \\cdot n\\, dS = \\iint_D F(r(u, v)) \\cdot (r_u \\times r_v)\\, du\\, dv,"}</MD>
        <p>
          for a parametrisation in which <M>{"r_u \\times r_v"}</M> points along <M>{"n"}</M>; otherwise the sign changes.
          If <M>{"F"}</M> is the velocity of a fluid, the flux is the volume crossing <M>{"S"}</M> per unit time. Only the
          normal component of <M>{"F"}</M> carries fluid across; the tangential part slides along the surface.
        </p>
      </Definition>

      <Example title="flat and curved surfaces">
        <p>
          A steady flow <M>{"F = (0, 0, c)"}</M> through a disc of radius <M>{"a"}</M> in the plane <M>{"z = 0"}</M>, with
          upward normal, has flux <M>{"c \\cdot \\pi a^2"}</M>; tilt the disc by an angle <M>{"\\alpha"}</M> and the flux
          is multiplied by <M>{"\\cos\\alpha"}</M>. For the field <M>{"F = (x, y, z)"}</M> and the sphere of radius{" "}
          <M>{"a"}</M> with outward normal <M>{"n = (x, y, z)/a"}</M>, we have <M>{"F \\cdot n = a"}</M> everywhere on the
          sphere, so the flux is <M>{"a \\cdot 4\\pi a^2 = 4\\pi a^3"}</M>, exactly three times the volume inside.
        </p>
      </Example>

      <Example title="graphs">
        <p>
          For a graph <M>{"z = g(x, y)"}</M> with upward normal, <M>{"r_x \\times r_y = (-g_x, -g_y, 1)"}</M>, so
        </p>
        <MD>{"\\iint_S F \\cdot n\\, dS = \\iint_D \\left( -P g_x - Q g_y + R \\right) dx\\, dy, \\qquad F = (P, Q, R)."}</MD>
      </Example>

      <Remark title="Gauss's law">
        <p>
          The field of a point charge is <M>{"F = x/|x|^3"}</M>. On a sphere of radius <M>{"a"}</M> it has normal component{" "}
          <M>{"1/a^2"}</M>, so its flux out is <M>{"4\\pi"}</M>, whatever the radius: the field weakens exactly as fast as
          the sphere grows. Gauss&rsquo;s law in electromagnetism says that the flux of the electric field out of any closed
          surface is proportional to the charge inside. The divergence theorem will explain both examples: the flux out of a
          closed surface measures the total source inside it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "up",
      rung: "check",
      prompt: (
        <p>
          Find the flux of <M>{"F = (0, 0, 3)"}</M> upwards through the unit square <M>{"[0, 1]^2"}</M> in the plane{" "}
          <M>{"z = 0"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "edge",
      rung: "check",
      prompt: (
        <p>
          Find the flux of the same field <M>{"F = (0, 0, 3)"}</M> through a unit square in the plane <M>{"x = 0"}</M>,
          with normal <M>{"(1, 0, 0)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "radial",
      rung: "apply",
      prompt: (
        <p>
          Find the outward flux of <M>{"F = (x, y, z)"}</M> through the sphere of radius <M>{"2"}</M>. Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 32 * Math.PI, tolerance: 0.1 },
    },
    {
      key: "zfield",
      rung: "apply",
      prompt: (
        <p>
          Find the outward flux of <M>{"F = (0, 0, z)"}</M> through the unit sphere. Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: (4 * Math.PI) / 3, tolerance: 0.005 },
    },
    {
      key: "orient",
      rung: "apply",
      prompt: <p>Which of these surfaces cannot be oriented?</p>,
      answer: { kind: "choice", options: ["A sphere", "A Möbius strip", "A cylinder without its ends", "A disc"], correct: [1] },
    },
    {
      key: "gauss",
      rung: "prove",
      prompt: (
        <p>
          Prove that the outward flux of <M>{"F = x/|x|^3"}</M> through the sphere of radius <M>{"a"}</M> centred at the
          origin is <M>{"4\\pi"}</M>, whatever <M>{"a"}</M> is.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that on the sphere n = x/a and |x| = a, so F · n = a²/a⁴ = 1/a².",
          "Multiplies by the area 4πa² to get 4π.",
        ],
      },
    },
    {
      key: "shadow",
      rung: "stretch",
      prompt: (
        <p>
          Show that the upward flux of <M>{"F = (0, 0, 1)"}</M> through any graph <M>{"z = g(x, y)"}</M> over a region{" "}
          <M>{"D"}</M> equals the area of <M>{"D"}</M>. Explain the result in terms of a flow.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses the normal vector (−g_x, −g_y, 1), so F · (r_x × r_y) = 1, and the flux is ∬_D 1 dx dy = area(D).",
          "Explains it: in a steady vertical flow, whatever passes through the region D also passes through the surface above it.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what an orientation is, how the flux of a vector field through a surface is defined and computed, what it means for a fluid, and Gauss's law for a point charge.",

  glimpse: (
    <p>
      The next chapter proves the great theorems of vector calculus. The divergence theorem turns the flux out of a closed
      surface into an integral of the divergence over the solid inside, and Stokes&rsquo; theorem does the same for
      circulation round a loop.
    </p>
  ),
};
