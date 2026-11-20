import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CharacteristicCurvesViz } from "@/components/viz/CharacteristicCurvesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.2.1",
  minutes: 90,
  links: {
    revisits: ["m33.1.1", "m17.1.2", "m17.1.3"],
    foreshadows: ["m33.2.2", "m33.2.3", "m33.5.2"],
  },

  puzzle: (
    <>
      <p>
        In the equation uₜ + x uₓ = 0 the speed of transport depends on position: data far from the origin moves faster.
        There is no single direction to follow. Is there still a family of curves along which the solution is constant, and
        what happens for nonlinear equations, where the speed depends on u itself?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose an equation and a starting point, and follow its characteristic curve to t = 1.</p>
      <CharacteristicCurvesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="quasilinear equations">
        <p>
          For a quasilinear equation <M>{"a(x, u) \\cdot Du = c(x, u)"}</M>, look for curves x(s) with z(s) = u(x(s)). The
          equation holds along them when <M>{"\\dot{x} = a(x, z)"}</M> and <M>{"\\dot{z} = c(x, z)"}</M>: the{" "}
          <strong>characteristic equations</strong>. Solving these ordinary differential equations from points of the
          initial surface and inverting the map from (starting point, s) to x builds the solution.
        </p>
      </Definition>

      <Theorem title="the general first-order equation">
        <p>
          For a fully nonlinear equation F(Du, u, x) = 0, with p = Du, the characteristic equations are{" "}
          <M>{"\\dot{x} = D_pF,\; \\dot{z} = D_pF \\cdot p,\; \\dot{p} = -D_xF - D_zF\\, p"}</M>. If the initial data are{" "}
          <strong>non-characteristic</strong>, meaning <M>{"D_pF"}</M> is transverse to the initial surface, there is a
          unique local solution near the surface, by the inverse function theorem.
        </p>
      </Theorem>

      <Example title="variable speed">
        <p>
          For uₜ + x uₓ = 0, the characteristics solve dx/dt = x, so <M>{"x = x_0 e^t"}</M>, and u is constant along them:{" "}
          <M>{"u(x, t) = g(x e^{-t})"}</M>. Characteristics spread out, so the solution stretches. For uₜ − x uₓ = 0 they
          converge towards 0 without meeting, and the solution steepens.
        </p>
      </Example>

      <Remark title="when characteristics cross">
        <p>
          For Burgers&rsquo; equation <M>{"u_t + u u_x = 0"}</M>, characteristics are straight lines{" "}
          <M>{"x = x_0 + g(x_0) t"}</M>. Where g decreases they cross in finite time, giving two values of u at one point: a
          smooth solution ceases to exist and a <strong>shock</strong> forms. Making sense of solutions beyond that time
          needs weak solutions and an entropy condition.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "idea",
      rung: "check",
      prompt: <p>What is the method of characteristics?</p>,
      answer: { kind: "choice", options: ["Reducing a first-order PDE to ODEs along curves determined by the equation", "Separating variables", "Taking a Fourier transform", "Minimising an energy"], correct: [0] },
    },
    {
      key: "nonchar",
      rung: "check",
      prompt: <p>What does the non-characteristic condition guarantee?</p>,
      answer: { kind: "choice", options: ["A unique local solution near the initial surface", "A global smooth solution", "That shocks form", "That the PDE is linear"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for uₜ + x uₓ = 0 starting at x₀ = 1, where is the characteristic at t = 1?</p>,
      answer: { kind: "numeric", value: 2.72, tolerance: 0.01 },
    },
    {
      key: "lin",
      rung: "apply",
      prompt: <p>Solve uₜ + 2uₓ = 0 with u(x, 0) = x². What is u(1, 1)?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "burg",
      rung: "apply",
      prompt: <p>What are the characteristics of Burgers&rsquo; equation uₜ + u uₓ = 0 with initial data g?</p>,
      answer: { kind: "choice", options: ["Straight lines x = x₀ + g(x₀) t", "Circles", "Vertical lines x = x₀", "Exponential curves x = x₀ eᵗ"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that u(x, t) = g(x e⁻ᵗ) solves uₜ + x uₓ = 0 with u(x, 0) = g(x).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes uₜ = −x e⁻ᵗ g′(x e⁻ᵗ).",
          "Computes uₓ = e⁻ᵗ g′(x e⁻ᵗ), so x uₓ = x e⁻ᵗ g′(x e⁻ᵗ).",
          "Adds to get 0, and checks u(x, 0) = g(x).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Solve Burgers&rsquo; equation with g(x) = −x, and find when the solution breaks down.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the characteristics x = x₀(1 − t), with u = −x₀ along each.",
          "Inverts to get u(x, t) = −x/(1 − t).",
          "Notes all characteristics meet at x = 0 when t = 1, where u blows up. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        One fully nonlinear first-order equation is central to mechanics and control: uₜ + H(Du, x) = 0. Its characteristics
        are Hamilton&rsquo;s equations, and its solutions can be written as minima over paths.
      </p>
      <p>Next, Hamilton-Jacobi equations.</p>
    </>
  ),
};
