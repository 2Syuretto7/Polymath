import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DivergenceBoxViz } from "@/components/viz/DivergenceBoxViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.7.3",
  minutes: 90,
  links: {
    revisits: ["m5.6.4", "m5.7.1", "m5.5.1"],
    foreshadows: ["m5.7.4", "m17.3.1", "m26.6.2"],
  },

  puzzle: (
    <>
      <p>
        Water flows through a pipe network and nobody can see inside the pipes. If you measure the net amount flowing out
        through the walls of a closed box, you know how much is being produced inside, by a hidden tap, or swallowed, by a
        hidden drain. Earlier we found that the flux of <M>{"(x, y, z)"}</M> out of a sphere was exactly three times its
        volume. Coincidence, or a law?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        This is the plane version. Move the box and change its size in each field. Compare the net flux out of its four
        sides with the integral of the divergence over the inside.
      </p>
      <DivergenceBoxViz />
    </>
  ),

  theory: (
    <>
      <Definition title="divergence">
        <p>
          For <M>{"F = (P, Q, R)"}</M>, the <strong>divergence</strong> is the function
        </p>
        <MD>{"\\operatorname{div} F = \\nabla \\cdot F = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}."}</MD>
        <p>
          It is the source density of the field: the net flux out of a tiny box about a point, divided by the volume of the
          box. Positive divergence means the flow is spreading out from the point; negative means it is converging.
        </p>
      </Definition>

      <Theorem title="the divergence theorem">
        <p>
          Let <M>{"E"}</M> be a bounded solid whose boundary <M>{"S"}</M> is a closed piecewise smooth surface with outward
          normal <M>{"n"}</M>, and let <M>{"F"}</M> have continuous partial derivatives on a region containing <M>{"E"}</M>.
          Then
        </p>
        <MD>{"\\iint_S F \\cdot n\\, dS = \\iiint_E \\operatorname{div} F\\, dV."}</MD>
      </Theorem>

      <Proof>
        <p>
          Take a box <M>{"E = [a, b] \\times [c, d] \\times [e, f]"}</M> and look at the term <M>{"P"}</M>. On the face{" "}
          <M>{"x = b"}</M> the outward normal is <M>{"(1, 0, 0)"}</M>, on <M>{"x = a"}</M> it is <M>{"(-1, 0, 0)"}</M>, and on
          the other faces <M>{"P"}</M> contributes nothing. So the flux of <M>{"(P, 0, 0)"}</M> is{" "}
          <M>{"\\iint \\big( P(b, y, z) - P(a, y, z) \\big)\\, dy\\, dz"}</M>, which by the fundamental theorem of calculus is{" "}
          <M>{"\\iiint_E P_x\\, dV"}</M>. The same holds for <M>{"Q"}</M> and <M>{"R"}</M>. A solid made of small boxes
          satisfies the theorem because the flux through each shared inner face is counted once outwards from each side, and
          cancels. General solids follow by approximation.
        </p>
      </Proof>

      <Example title="two fluxes explained">
        <p>
          For <M>{"F = (x, y, z)"}</M>, <M>{"\\operatorname{div} F = 3"}</M>, so the flux out of any closed surface is three
          times the volume inside: <M>{"4\\pi a^3"}</M> for the ball of radius <M>{"a"}</M>. For the point charge field{" "}
          <M>{"F = x/|x|^3"}</M>, a calculation gives <M>{"\\operatorname{div} F = 0"}</M> away from the origin. So the flux out
          of any closed surface not enclosing the origin is <M>{"0"}</M>. For a surface that does enclose it, remove a small
          ball around the origin: the flux out of the region between is <M>{"0"}</M>, so the flux out of the surface equals
          the flux out of the small sphere, <M>{"4\\pi"}</M>. All the source is concentrated at the charge.
        </p>
      </Example>

      <Remark title="conservation laws">
        <p>
          If <M>{"\\rho"}</M> is the density of a substance that flows with velocity <M>{"v"}</M> and is neither created nor
          destroyed, the rate of loss from any region equals the flux out of it. The divergence theorem turns this into a
          statement at each point, the continuity equation{" "}
          <M>{"\\partial \\rho/\\partial t + \\operatorname{div}(\\rho v) = 0"}</M>. The same reasoning applied to heat gives
          the heat equation, and applied to charge gives one of Maxwell&rsquo;s equations.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "div",
      rung: "check",
      prompt: <p>Find <M>{"\\operatorname{div} F"}</M> at <M>{"(1, 2, 3)"}</M> for <M>{"F = (x^2, y^2, z^2)"}</M>.</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "cube",
      rung: "check",
      prompt: <p>Find the outward flux of <M>{"F = (x, y, z)"}</M> through the surface of the unit cube <M>{"[0, 1]^3"}</M>.</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "cubes",
      rung: "apply",
      prompt: (
        <p>
          Find the outward flux of <M>{"F = (x^3, y^3, z^3)"}</M> through the unit sphere. Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: (12 * Math.PI) / 5, tolerance: 0.01 },
    },
    {
      key: "zero",
      rung: "apply",
      prompt: <p>Find the outward flux of <M>{"F = (y, z, x)"}</M> through the sphere of radius 7 centred at the origin.</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "charge",
      rung: "apply",
      prompt: (
        <p>
          Find the outward flux of <M>{"F = x/|x|^3"}</M> through the sphere of radius 5 centred at <M>{"(1, 0, 0)"}</M>.
          Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 4 * Math.PI, tolerance: 0.01 },
    },
    {
      key: "box",
      rung: "prove",
      prompt: (
        <p>
          For the box <M>{"E = [a, b] \\times [c, d] \\times [e, f]"}</M>, prove that the outward flux of{" "}
          <M>{"(P, 0, 0)"}</M> through its surface equals <M>{"\\iiint_E P_x\\, dV"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes only the faces x = a and x = b contribute, with normals (−1, 0, 0) and (1, 0, 0), giving ∬ (P(b, y, z) − P(a, y, z)) dy dz.",
          "Writes the triple integral with x innermost and applies the fundamental theorem of calculus to match.",
        ],
      },
    },
    {
      key: "gauss",
      rung: "stretch",
      prompt: (
        <p>
          Given that <M>{"\\operatorname{div}(x/|x|^3) = 0"}</M> away from the origin, explain why its outward flux through any
          closed surface enclosing the origin is <M>{"4\\pi"}</M>, and through one not enclosing it is <M>{"0"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "For a surface not enclosing the origin, applies the divergence theorem directly: the divergence is 0 inside, so the flux is 0.",
          "For one enclosing it, cuts out a small sphere, applies the theorem to the region between, and uses the flux 4π out of the small sphere.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what divergence measures, what the divergence theorem says and why it holds for a box, how it explains the flux of a point charge, and how it gives conservation laws.",

  glimpse: (
    <p>
      The last lesson of the course shows that the three great theorems and the fundamental theorem of calculus are all one
      statement about differential forms. The course on partial differential equations begins from the heat equation that
      the divergence theorem derives.
    </p>
  ),
};
