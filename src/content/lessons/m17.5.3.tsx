import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { PoissonKernelViz } from "@/components/viz/PoissonKernelViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.5.3",
  minutes: 90,
  links: {
    revisits: ["m17.5.2", "m17.3.3", "m17.4.4"],
    foreshadows: ["m17.6.2", "m28.1.2", "m33.1.1"],
  },

  puzzle: (
    <>
      <p>
        A circular plate has its rim held at temperatures that vary round the edge. The steady temperature at an interior
        point must be some blend of the rim temperatures. Which blend? How much does each bit of the rim count?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the point about the disc and watch how the weights on the boundary change.</p>
      <PoissonKernelViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the fundamental solution and Green’s function">
        <p>
          In the plane, <M>{"\\Phi(x) = \\frac{1}{2\\pi}\\log|x|"}</M> is harmonic away from 0 and satisfies{" "}
          <M>{"\\Delta\\Phi = \\delta"}</M>, the unit point source. A <strong>Green&rsquo;s function</strong> for a domain Ω is{" "}
          <M>{"G(x,y) = \\Phi(x - y) - h_y(x)"}</M>, where <M>{"h_y"}</M> is harmonic in Ω and chosen so that G = 0 when x is
          on the boundary. Then the solution of <M>{"\\Delta u = f"}</M> in Ω with <M>{"u = g"}</M> on the boundary is
        </p>
        <MD>{"u(y) = \\int_\\Omega G(x,y) f(x)\\,dx + \\int_{\\partial\\Omega} g(x)\\, \\frac{\\partial G}{\\partial n_x}(x,y)\\,ds_x."}</MD>
      </Definition>

      <Theorem title="the Poisson integral for the disc">
        <p>
          For the unit disc, the method of images gives G explicitly, and the boundary term becomes the Poisson integral: in
          polar coordinates,
        </p>
        <MD>{"u(\\rho,\\varphi) = \\frac{1}{2\\pi}\\int_0^{2\\pi} \\frac{1-\\rho^2}{1 - 2\\rho\\cos(\\theta - \\varphi) + \\rho^2}\\, g(\\theta)\\,d\\theta."}</MD>
        <p>
          For every continuous g this is harmonic in the disc and tends to g on the rim. The kernel is positive and integrates
          to 1, so u is a weighted average of the boundary values.
        </p>
      </Theorem>

      <Example title="the method of images">
        <p>
          For the unit disc and a point y inside, the image point <M>{"y^* = y/|y|^2"}</M> lies outside. The combination{" "}
          <M>{"\\Phi(x - y) - \\Phi\\big(|y|(x - y^*)\\big)"}</M> is harmonic in x away from y and vanishes when |x| = 1,
          because there <M>{"|x - y| = |y|\\,|x - y^*|"}</M>. This is the same trick that solves electrostatics problems with a
          grounded sphere.
        </p>
      </Example>

      <Remark title="at the centre and near the rim">
        <p>
          At ρ = 0 the kernel is the constant 1/2π, which recovers the mean value property. As ρ tends to 1 it concentrates near
          θ = φ, like the heat kernel as t tends to 0: it is an approximate identity. The Poisson kernel is also the
          generating function of the Fourier series, since it equals{" "}
          <M>{"\\frac{1}{2\\pi}\\sum_{n\\in\\mathbb Z} \\rho^{|n|} e^{in(\\theta-\\varphi)}"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "green",
      rung: "check",
      prompt: <p>What boundary condition does a Green&rsquo;s function G(x, y) for the Dirichlet problem satisfy?</p>,
      answer: { kind: "choice", options: ["G = 0 when x is on the boundary", "Its normal derivative is 0 on the boundary", "G = 1 on the boundary", "None"], correct: [0] },
    },
    {
      key: "total",
      rung: "check",
      prompt: <p>What is the total of the Poisson kernel weights round the circle, for any interior point?</p>,
      answer: { kind: "choice", options: ["1", "2π", "0", "It depends on the point"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, put the point at the centre with a hot arc of half-width 45°. What is the temperature there? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.01 },
    },
    {
      key: "centre",
      rung: "apply",
      prompt: <p>At the centre of the disc the Poisson kernel equals 1/2π. Give this to three decimal places.</p>,
      answer: { kind: "numeric", value: 0.159, tolerance: 0.001 },
    },
    {
      key: "near",
      rung: "apply",
      prompt: <p>As the point approaches a boundary point where the boundary data are continuous, what happens to u?</p>,
      answer: {
        kind: "choice",
        options: [
          "It tends to the boundary value there, because the kernel concentrates near that point.",
          "It tends to the average of all the boundary values.",
          "It tends to 0.",
          "It blows up.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if |x| = 1 and y ≠ 0 is inside the unit disc, then |x − y| = |y| · |x − y/|y|²|.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands |y|² |x − y/|y|²|² = |y|²|x|² − 2x·y + 1.",
          "Uses |x| = 1 to rewrite this as |y|² − 2x·y + |x|² = |x − y|².",
          "Takes square roots to conclude.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The Poisson kernel and the heat kernel are both approximate identities. What do they have in common, and how do they differ?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Both are positive, integrate to 1, and concentrate at a point in a limit (ρ to 1, or t to 0).",
          "One solves a steady problem on a bounded domain from boundary data, the other an evolution problem from initial data.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a Green’s function is, how the Poisson integral solves the Dirichlet problem in a disc, and why its kernel behaves like a weighted average.",

  glimpse: (
    <p>
      Next, the Fourier transform: the continuous analogue of Fourier series for functions on the whole line, which turns
      derivatives into multiplication and so turns linear PDEs into algebra.
    </p>
  ),
};
