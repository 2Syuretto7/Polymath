import { M, MD } from "@/components/Math";
import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { HatBoxViz } from "@/components/viz/HatBoxViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.6.3",
  minutes: 85,
  links: {
    revisits: ["m5.5.3", "m5.1.2", "m5.4.3"],
    foreshadows: ["m5.6.4", "m5.7.2", "m26.6.1"],
  },

  puzzle: (
    <>
      <p>
        Archimedes asked that his tomb be marked with a sphere inside a cylinder, recording the result he was proudest of:
        the sphere&rsquo;s surface has the same area as the curved side of the cylinder that just contains it,{" "}
        <M>{"4\\pi r^2"}</M>. He had no calculus. A flat region can be measured with squares, but a curved surface cannot
        be laid flat without stretching. How is the area of a curved surface defined and computed?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a band of the unit sphere between two heights, and compare its area with the matching band of the cylinder.
        Move the band towards a pole, and change its height.
      </p>
      <HatBoxViz />
    </>
  ),

  theory: (
    <>
      <Definition title="parametrised surfaces">
        <p>
          A <strong>parametrised surface</strong> is a map <M>{"r : D \\to \\mathbb{R}^3"}</M>, <M>{"(u, v) \\mapsto r(u, v)"}</M>,
          from a region <M>{"D"}</M> of the plane, with continuous partial derivatives <M>{"r_u"}</M> and{" "}
          <M>{"r_v"}</M>. It is <strong>regular</strong> where <M>{"r_u \\times r_v \\ne 0"}</M>; there the two vectors span
          the tangent plane and <M>{"r_u \\times r_v"}</M> is normal to the surface.
        </p>
      </Definition>

      <Definition title="surface area and surface integrals">
        <p>
          A small rectangle <M>{"\\Delta u \\times \\Delta v"}</M> in <M>{"D"}</M> is sent to a small curved patch that is
          close to the parallelogram with sides <M>{"r_u \\Delta u"}</M> and <M>{"r_v \\Delta v"}</M>, whose area is{" "}
          <M>{"|r_u \\times r_v|\\, \\Delta u\\, \\Delta v"}</M>. So we define
        </p>
        <MD>{"\\text{area}(S) = \\iint_D |r_u \\times r_v|\\, du\\, dv, \\qquad \\iint_S f\\, dS = \\iint_D f(r(u, v))\\, |r_u \\times r_v|\\, du\\, dv."}</MD>
        <p>
          By the change of variables formula, the answer does not depend on which regular one-to-one parametrisation is used.
        </p>
      </Definition>

      <Example title="the sphere">
        <p>
          Parametrise the sphere of radius <M>{"a"}</M> by <M>{"r(\\varphi, \\theta) = a(\\sin\\varphi\\cos\\theta,\\ \\sin\\varphi\\sin\\theta,\\ \\cos\\varphi)"}</M>,
          with <M>{"0 \\le \\varphi \\le \\pi"}</M> and <M>{"0 \\le \\theta \\le 2\\pi"}</M>. A calculation gives{" "}
          <M>{"|r_\\varphi \\times r_\\theta| = a^2 \\sin\\varphi"}</M>, so the area is{" "}
          <M>{"\\int_0^{2\\pi}\\int_0^\\pi a^2\\sin\\varphi\\, d\\varphi\\, d\\theta = 4\\pi a^2"}</M>. The band between heights{" "}
          <M>{"z_1 = a\\cos\\varphi_1"}</M> and <M>{"z_2 = a\\cos\\varphi_2"}</M> has area{" "}
          <M>{"2\\pi a^2(\\cos\\varphi_2 - \\cos\\varphi_1)"}</M> in absolute value, that is <M>{"2\\pi a\\,|z_1 - z_2|"}</M>:
          Archimedes&rsquo; theorem.
        </p>
      </Example>

      <Example title="graphs">
        <p>
          A graph <M>{"z = g(x, y)"}</M> over <M>{"D"}</M> is parametrised by <M>{"r(x, y) = (x, y, g(x, y))"}</M>, with{" "}
          <M>{"r_x \\times r_y = (-g_x, -g_y, 1)"}</M>. So
        </p>
        <MD>{"dS = \\sqrt{1 + g_x^2 + g_y^2}\; dx\\, dy."}</MD>
        <p>
          The plane <M>{"z = x + y"}</M> over the unit square has <M>{"dS = \\sqrt{3}\\, dx\\, dy"}</M>, so its area is{" "}
          <M>{"\\sqrt{3}"}</M>: the square tilted in two directions is stretched by that factor.
        </p>
      </Example>

      <Remark title="uses">
        <p>
          Surface integrals of functions give the mass of a thin shell, its centre of mass, or the average temperature over
          the surface of the earth. Symmetry often helps: on the unit sphere, <M>{"\\iint x^2\\, dS = \\iint y^2\\, dS = \\iint z^2\\, dS"}</M>,
          and the three add up to the area, <M>{"4\\pi"}</M>. The next lesson integrates vector fields over surfaces, which
          measures flow through them.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sphere",
      rung: "check",
      prompt: <p>Find the area of a sphere of radius <M>{"2"}</M>. Give a decimal.</p>,
      answer: { kind: "numeric", value: 16 * Math.PI, tolerance: 0.05 },
    },
    {
      key: "factor",
      rung: "check",
      prompt: <p>For the plane <M>{"z = 2x + 2y"}</M>, what is the factor <M>{"\\sqrt{1 + g_x^2 + g_y^2}"}</M>?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "plane",
      rung: "apply",
      prompt: <p>Find the area of the part of the plane <M>{"z = 2x + 2y"}</M> that lies above the unit square.</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "band",
      rung: "apply",
      prompt: (
        <p>
          Find the area of the part of the unit sphere between the planes <M>{"z = 0"}</M> and <M>{"z = 0.5"}</M>. Give a
          decimal.
        </p>
      ),
      answer: { kind: "numeric", value: Math.PI, tolerance: 0.005 },
    },
    {
      key: "z2",
      rung: "apply",
      prompt: <p>Use symmetry to find <M>{"\\iint_S z^2\\, dS"}</M> over the unit sphere. Give a decimal.</p>,
      answer: { kind: "numeric", value: (4 * Math.PI) / 3, tolerance: 0.005 },
    },
    {
      key: "area",
      rung: "prove",
      prompt: (
        <p>
          For the sphere parametrisation above, compute <M>{"|r_\\varphi \\times r_\\theta|"}</M> and prove that the sphere of
          radius <M>{"a"}</M> has area <M>{"4\\pi a^2"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes r_φ and r_θ and their cross product, finding |r_φ × r_θ| = a² sin φ, nonnegative for 0 ≤ φ ≤ π.",
          "Integrates: ∫₀^{2π} ∫₀^π a² sin φ dφ dθ = 2π · 2a² = 4πa².",
        ],
      },
    },
    {
      key: "hatbox",
      rung: "stretch",
      prompt: (
        <p>
          Prove Archimedes&rsquo; theorem: the part of the sphere of radius <M>{"a"}</M> between heights <M>{"c"}</M> and{" "}
          <M>{"c + h"}</M>, with <M>{"-a \\le c < c + h \\le a"}</M>, has area <M>{"2\\pi a h"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets up the band as an interval of φ, using z = a cos φ, with area element a² sin φ dφ dθ.",
          "Integrates to get 2πa² times the difference of cos φ at the ends, which is 2πa² · h/a = 2πah.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the area of a parametrised surface is defined, why the cross product appears, how to find the area of a sphere and of a graph, and Archimedes' theorem.",

  glimpse: (
    <p>
      The next lesson integrates the normal component of a vector field over a surface, the flux, which measures how much
      flows through it. Stokes&rsquo; theorem will then connect integrals over surfaces with integrals round their edges.
    </p>
  ),
};
