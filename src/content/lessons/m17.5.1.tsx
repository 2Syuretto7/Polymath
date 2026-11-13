import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { RelaxGridViz } from "@/components/viz/RelaxGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.5.1",
  minutes: 90,
  links: {
    revisits: ["m17.4.3", "m17.3.2", "m13.3.3"],
    foreshadows: ["m17.5.2", "m17.5.3", "m28.1.2"],
  },

  puzzle: (
    <>
      <p>
        Stretch a soap film across a bent wire frame. Once it settles, its height at every point is the average of the
        heights nearby, and it is perfectly smooth, even if the wire has kinks. How can a shape fixed only at its edge be so
        well behaved inside?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose boundary values and run the averaging sweeps until the grid settles.</p>
      <RelaxGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="harmonic functions">
        <p>A twice-differentiable function u on an open set Ω of the plane is <strong>harmonic</strong> if</p>
        <MD>{"\\Delta u = u_{xx} + u_{yy} = 0."}</MD>
        <p>
          Harmonic functions are the steady states of the heat equation, the potentials of electrostatics in empty space, and
          the small-slope shapes of soap films. Examples: <M>{"x^2 - y^2"}</M>, <M>{"xy"}</M>, <M>{"e^x\\cos y"}</M>,{" "}
          <M>{"\\log(x^2 + y^2)"}</M> away from the origin.
        </p>
      </Definition>

      <Theorem title="harmonic functions and holomorphic functions">
        <p>
          If f = u + iv is holomorphic, the Cauchy–Riemann equations <M>{"u_x = v_y,\\ u_y = -v_x"}</M> give{" "}
          <M>{"u_{xx} = v_{yx} = v_{xy} = -u_{yy}"}</M>, so u and v are harmonic. Conversely, on a simply connected domain
          every harmonic u is the real part of a holomorphic function. Thus <M>{"x^2 - y^2 = \\operatorname{Re} z^2"}</M>{" "}
          and <M>{"e^x \\cos y = \\operatorname{Re} e^z"}</M>.
        </p>
      </Theorem>

      <Example title="the maximum principle and the Dirichlet problem">
        <p>
          On a bounded domain, a harmonic function continuous up to the boundary takes its maximum and minimum on the
          boundary, as the heat equation did. Hence the <strong>Dirichlet problem</strong>, Δu = 0 in Ω with u = g on the
          boundary, has at most one solution, and solutions depend continuously on g. Existence holds for reasonable domains,
          as the visualisation suggests and later lessons prove.
        </p>
      </Example>

      <Remark title="discrete harmonic functions">
        <p>
          On a grid with spacing h, <M>{"\\Delta u \\approx \\big(u_E + u_W + u_N + u_S - 4u\\big)/h^2"}</M>, so the discrete
          equation says that u is the average of its four neighbours. Jacobi&rsquo;s iteration repeats that averaging; it
          converges, slowly, to the discrete solution, which approximates the true one as h shrinks.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these functions is harmonic?</p>,
      answer: { kind: "choice", options: ["xy", "x² + y²", "x²", "eˣ eʸ"], correct: [0] },
    },
    {
      key: "re",
      rung: "check",
      prompt: <p>Why is the real part of a holomorphic function harmonic?</p>,
      answer: {
        kind: "choice",
        options: [
          "The Cauchy–Riemann equations give uₓₓ = vᵧₓ and uᵧᵧ = −vₓᵧ, which cancel.",
          "Because every function is harmonic.",
          "Because holomorphic functions are polynomials.",
          "Because the imaginary part is zero.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the hot top edge and 1000 sweeps, can any inner value exceed 1?</p>,
      answer: { kind: "choice", options: ["No: by the maximum principle inner values stay below the largest boundary value", "Yes, near the top corners", "Yes, at the centre", "Only before the grid settles"], correct: [0] },
    },
    {
      key: "lap",
      rung: "apply",
      prompt: <p>Compute the Laplacian of u = x³ − 3xy² at any point.</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "avg",
      rung: "apply",
      prompt: <p>On a grid, a discrete harmonic function has neighbours with values 2, 4, 5 and 9. What is its value at the centre?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "unique",
      rung: "prove",
      prompt: <p>Using the maximum and minimum principles, prove that the Dirichlet problem on a bounded domain has at most one solution.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes two solutions u₁ and u₂ and notes that w = u₁ − u₂ is harmonic with w = 0 on the boundary.",
          "Applies the maximum principle to get w ≤ 0 and the minimum principle to get w ≥ 0 inside.",
          "Concludes w = 0, so u₁ = u₂.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why do you think harmonic functions are smooth inside their domain even when the boundary values have corners?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Connects smoothness to averaging: each value is a weighted average of boundary values, and averaging smooths.",
          "Mentions a formula such as the Poisson integral, or the link with holomorphic functions, which are infinitely differentiable.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a harmonic function is, its link with holomorphic functions, the maximum principle, and why repeated averaging on a grid approximates one.",

  glimpse: (
    <p>
      Next, the mean value property: the value of a harmonic function at a point is exactly its average over any circle
      around it, a fact that characterises harmonic functions and explains their rigidity.
    </p>
  ),
};
