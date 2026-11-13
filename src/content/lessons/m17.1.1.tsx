import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { PdeTrioViz } from "@/components/viz/PdeTrioViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.1.1",
  minutes: 85,
  links: {
    revisits: ["m10.1.4", "m5.7.3", "m5.2.3"],
    foreshadows: ["m17.1.2", "m17.2.1", "m17.3.1"],
  },

  puzzle: (
    <>
      <p>
        A drop of ink in still water spreads out; a pulse sent along a taut rope travels without spreading; the temperature in
        a room settles to a steady state. Each is described by an equation for an unknown function of several variables. Why
        do such different behaviours come from equations that look almost alike?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Start with the same bump and let three different equations act on it.</p>
      <PdeTrioViz />
    </>
  ),

  theory: (
    <>
      <Definition title="partial differential equation">
        <p>
          A <strong>partial differential equation</strong> (PDE) is a relation between an unknown function u of two or more
          variables and its partial derivatives. Its <strong>order</strong> is that of the highest derivative appearing. It is{" "}
          <strong>linear</strong> if it has the form <M>{"\\mathcal{L}u = f"}</M> with <M>{"\\mathcal{L}"}</M> a linear
          operator, and <strong>homogeneous</strong> if moreover f = 0. Solutions of a linear homogeneous equation form a
          vector space: this is the superposition principle.
        </p>
      </Definition>

      <Example title="four model equations">
        <p>
          <strong>Transport</strong>: <M>{"u_t + c u_x = 0"}</M>, a substance carried along by a flow of speed c.{" "}
          <strong>Heat</strong> or diffusion: <M>{"u_t = k u_{xx}"}</M>. <strong>Wave</strong>:{" "}
          <M>{"u_{tt} = c^2 u_{xx}"}</M>, a vibrating string. <strong>Laplace</strong>:{" "}
          <M>{"u_{xx} + u_{yy} = 0"}</M>, steady states of heat flow, electrostatic potentials and ideal fluid flow.
        </p>
      </Example>

      <Theorem title="deriving the heat equation">
        <p>
          Let u(x, t) be the temperature in a thin rod and q(x, t) the heat flux. Conservation of energy in a short piece
          [a, b] says the heat inside changes only by flow through the ends:
        </p>
        <MD>{"\\frac{d}{dt}\\int_a^b u\\,dx = q(a,t) - q(b,t), \\quad\\text{so}\\quad u_t = -q_x."}</MD>
        <p>
          Fourier&rsquo;s law says heat flows from hot to cold in proportion to the gradient, <M>{"q = -k u_x"}</M>. Together
          they give <M>{"u_t = k u_{xx}"}</M>. The same pattern, a conservation law plus a constitutive law, yields most of the
          equations of physics.
        </p>
      </Theorem>

      <Remark title="nonlinear equations">
        <p>
          Many important equations are nonlinear, such as Burgers&rsquo;s equation <M>{"u_t + u u_x = 0"}</M> for traffic or
          gas dynamics and the Navier–Stokes equations for fluids. Superposition fails for them, and solutions can develop
          shocks in finite time. This course concentrates on the linear theory, which is the foundation for everything else.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "order",
      rung: "check",
      prompt: <p>What are the order and linearity of the heat equation <M>{"u_t = k u_{xx}"}</M>?</p>,
      answer: { kind: "choice", options: ["Second order, linear", "First order, linear", "Second order, nonlinear", "First order, nonlinear"], correct: [0] },
    },
    {
      key: "model",
      rung: "check",
      prompt: <p>Which equation models the steady-state temperature in a plate?</p>,
      answer: { kind: "choice", options: ["Laplace’s equation", "The transport equation", "The wave equation", "Burgers’s equation"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose heat and set t = 0.75. What is the peak height? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.01 },
    },
    {
      key: "check",
      rung: "apply",
      prompt: <p>The function <M>{"u = e^{-4t}\\sin 2x"}</M> solves <M>{"u_t = u_{xx}"}</M>. What is its value at x = π/4, t = 0.5? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.14, tolerance: 0.01 },
    },
    {
      key: "burgers",
      rung: "apply",
      prompt: <p>Why is Burgers&rsquo;s equation <M>{"u_t + u u_x = 0"}</M> nonlinear?</p>,
      answer: {
        kind: "choice",
        options: [
          "The term u uₓ is a product of the unknown with its derivative, so the operator is not linear.",
          "It is first order.",
          "It has no forcing term.",
          "It involves time.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that for any twice differentiable f and g, <M>{"u = f(x - ct)"}</M> solves the transport equation and <M>{"u = f(x - ct) + g(x + ct)"}</M> solves the wave equation.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the chain rule: for u = f(x − ct), uₜ = −c f′ and uₓ = f′, so uₜ + c uₓ = 0.",
          "For f(x − ct) the second derivatives are uₜₜ = c² f″ and uₓₓ = f″, and similarly for g(x + ct).",
          "Concludes uₜₜ = c² uₓₓ by adding, using linearity.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The heat equation was derived from conservation and Fourier&rsquo;s law. What equation would you get for a pollutant in a river flowing at speed c, which both diffuses and is carried along?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes the flux as the sum of an advective part c u and a diffusive part −k uₓ.",
          "Obtains uₜ + c uₓ = k uₓₓ, the advection–diffusion equation.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a partial differential equation is, the transport, heat, wave and Laplace equations, and how the heat equation follows from conservation of energy and Fourier’s law.",

  glimpse: (
    <p>
      Next, classification: why second-order equations fall into three types, hyperbolic, parabolic and elliptic, and what
      the type says about how solutions behave.
    </p>
  ),
};
