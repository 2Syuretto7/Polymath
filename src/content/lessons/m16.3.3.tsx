import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { SoapFilmViz } from "@/components/viz/SoapFilmViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.3.3",
  minutes: 85,
  links: {
    revisits: ["m16.3.2", "m16.1.5", "m33.6.2"],
    foreshadows: ["m16.4.1", "m16.4.3", "m17.1.1"],
  },

  puzzle: (
    <>
      <p>
        Dip two wire rings in soapy water, hold them parallel and slowly pull them apart. A waisted tube of film stretches
        between them, narrowing as you pull, until suddenly it snaps and two flat films are left, one on each ring. What
        shape is the tube, and why does it break at a definite distance?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pull the rings apart and compare the areas of the possible films.</p>
      <SoapFilmViz />
    </>
  ),

  theory: (
    <>
      <Definition title="minimal surfaces">
        <p>
          A regular surface is <strong>minimal</strong> if its mean curvature <M>{"H"}</M> vanishes everywhere. At each point
          the principal curvatures are equal and opposite, so the surface bends up in one direction exactly as much as it
          bends down in the perpendicular one, and <M>{"K = -\\kappa_1^2 \\leq 0"}</M>.
        </p>
      </Definition>

      <Theorem title="first variation of area">
        <p>
          Deform a surface by moving each point a distance <M>{"t\\,\\varphi"}</M> along the normal, with <M>{"\\varphi"}</M>{" "}
          vanishing near the boundary. Then the area changes at the rate
        </p>
        <MD>{"\\frac{d}{dt}\\Big|_{t=0} A(t) = -2\\iint H\\,\\varphi\\,dA."}</MD>
        <p>
          So a surface is a critical point of area for every such deformation exactly when <M>{"H \\equiv 0"}</M>. This is
          why the name is &ldquo;minimal&rdquo;, even though some minimal surfaces are only critical, not least.
        </p>
      </Theorem>

      <Example title="the catenoid">
        <p>
          Take <M>{"\\mathbf{x}(u, v) = (\\cosh v\\cos u, \\cosh v\\sin u, v)"}</M>, the surface swept out by rotating a
          catenary. Then <M>{"E = G = \\cosh^2 v"}</M>, <M>{"F = 0"}</M>, and with the normal{" "}
          <M>{"N = (\\cos u, \\sin u, -\\sinh v)/\\cosh v"}</M> one finds <M>{"e = -1"}</M>, <M>{"f = 0"}</M>, <M>{"g = 1"}</M>.
          So
        </p>
        <MD>{"H = \\frac{eG + gE}{2EG} = 0, \\qquad K = \\frac{eg}{EG} = -\\frac{1}{\\cosh^4 v}."}</MD>
        <p>Euler showed in 1744 that, apart from the plane, it is the only minimal surface of revolution.</p>
      </Example>

      <Example title="the helicoid">
        <p>
          The helicoid <M>{"(v\\cos u, v\\sin u, cu)"}</M>, a spiral staircase, is also minimal; Meusnier found it in 1776.
          Remarkably, the catenoid can be bent into the helicoid through a family of minimal surfaces, without stretching: the
          two are locally isometric.
        </p>
      </Example>

      <Remark title="Plateau’s problem">
        <p>
          Joseph Plateau&rsquo;s experiments with soap films led to the question: does every closed wire bound a surface of
          least area? Jesse Douglas and Tibor Rad&oacute; proved independently, around 1930, that it does, and Douglas
          received one of the first Fields Medals for it. Between two rings, the film is a catenoid while one exists with less
          area than the two discs; past the critical separation no catenoid exists, and the film jumps to the discs.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What condition defines a minimal surface?</p>,
      answer: { kind: "choice", options: ["H = 0 everywhere", "K = 0 everywhere", "K < 0 everywhere", "Its area is as small as possible among all surfaces"], correct: [0] },
    },
    {
      key: "rev",
      rung: "check",
      prompt: <p>Which surfaces of revolution are minimal?</p>,
      answer: { kind: "choice", options: ["Planes and catenoids", "Spheres and cylinders", "Only cones", "All of them"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, rings of radius 1 are pulled apart. Beyond what distance between them does no catenoid exist? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 1.33, tolerance: 0.01 },
    },
    {
      key: "k",
      rung: "apply",
      prompt: <p>At a point of a minimal surface one principal curvature is 2. What is the Gaussian curvature there?</p>,
      answer: { kind: "numeric", value: -4 },
    },
    {
      key: "neck",
      rung: "apply",
      prompt: <p>What is the Gaussian curvature of the catenoid <M>{"(\\cosh v\\cos u, \\cosh v\\sin u, v)"}</M> on its neck, where <M>{"v = 0"}</M>?</p>,
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Verify that the catenoid <M>{"(\\cosh v\\cos u, \\cosh v\\sin u, v)"}</M> has <M>{"E = G = \\cosh^2 v"}</M> and <M>{"F = 0"}</M>, and deduce <M>{"H = 0"}</M> given <M>{"e = -1, f = 0, g = 1"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes xᵤ = (−cosh v sin u, cosh v cos u, 0) and xᵥ = (sinh v cos u, sinh v sin u, 1).",
          "Finds E = cosh² v, F = 0 and G = sinh² v + 1 = cosh² v.",
          "Substitutes into H = (eG − 2fF + gE)/(2(EG − F²)) to get (−cosh² v + cosh² v)/(2 cosh⁴ v) = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the first variation formula to explain why a soap film, which minimises area, must have <M>{"H = 0"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that if H were nonzero at a point, one could choose φ supported near it with the same sign as H.",
          "Then the derivative of area would be negative, so a small deformation would reduce the area.",
          "Concludes a film of least area has H = 0 everywhere. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a minimal surface is, why H = 0 is the condition for area to be critical, the catenoid and helicoid as examples, and what happens to a soap film between two rings as they are pulled apart.",

  glimpse: (
    <p>
      Next, isometries: maps between surfaces that preserve the first fundamental form, such as bending a catenoid into a
      helicoid.
    </p>
  ),
};
