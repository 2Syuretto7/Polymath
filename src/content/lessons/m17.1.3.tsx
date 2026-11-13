import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { HadamardViz } from "@/components/viz/HadamardViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.1.3",
  minutes: 85,
  links: {
    revisits: ["m17.1.2", "m10.2.3", "m10.2.1"],
    foreshadows: ["m17.2.3", "m17.3.2", "m17.5.1"],
  },

  puzzle: (
    <>
      <p>
        Measurements are never exact. If an equation is to predict anything, a tiny error in the starting data should cause
        only a tiny error in the answer. For ordinary differential equations this holds over short times. Can a reasonable
        looking PDE problem fail it completely?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Make the data smaller and smaller by raising n, and watch what the solution does.</p>
      <HadamardViz />
    </>
  ),

  theory: (
    <>
      <Definition title="well-posed problems">
        <p>
          Following Hadamard (1902), a problem for a PDE, meaning the equation together with initial or boundary conditions,
          is <strong>well-posed</strong> if
        </p>
        <ol>
          <li>a solution <strong>exists</strong>;</li>
          <li>it is <strong>unique</strong>;</li>
          <li>it <strong>depends continuously</strong> on the data: small changes in the data, measured in a suitable norm, give small changes in the solution.</li>
        </ol>
        <p>A problem failing any of these is <strong>ill-posed</strong>.</p>
      </Definition>

      <Example title="good pairings">
        <p>
          The wave equation with initial position and velocity, the heat equation forward in time with an initial temperature,
          and Laplace&rsquo;s equation on a bounded region with values given on the boundary are all well-posed. The type of
          the equation decides which kind of data is appropriate.
        </p>
      </Example>

      <Theorem title="Hadamard's example">
        <p>Laplace&rsquo;s equation with Cauchy data, as if it were a wave equation, is ill-posed. The problem</p>
        <MD>{"u_{xx} + u_{yy} = 0, \\quad u(x,0) = 0, \\quad u_y(x,0) = \\frac{\\sin nx}{n}"}</MD>
        <p>
          has the unique solution <M>{"u = \\sinh(ny)\\sin(nx)/n^2"}</M>. As n → ∞ the data tend to zero uniformly, yet for
          each y &gt; 0 the solution grows like <M>{"e^{ny}/n^2"}</M>. The zero data have the zero solution, so the solution
          does not depend continuously on the data.
        </p>
      </Theorem>

      <Remark title="running time backwards">
        <p>
          The heat equation backwards in time is ill-posed in the same way: the mode <M>{"e^{-kn^2 t}\\sin nx"}</M> decays
          forward in time, so run backwards it grows like <M>{"e^{kn^2 |t|}"}</M>. Diffusion forgets the fine detail of its
          past. Ill-posed problems are not useless, though; inverse problems such as medical imaging are ill-posed and are
          solved by regularisation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>Which is not one of Hadamard&rsquo;s conditions for well-posedness?</p>,
      answer: { kind: "choice", options: ["The solution is a polynomial", "A solution exists", "The solution is unique", "The solution depends continuously on the data"], correct: [0] },
    },
    {
      key: "back",
      rung: "check",
      prompt: <p>Which of these problems is ill-posed?</p>,
      answer: {
        kind: "choice",
        options: ["The heat equation run backwards in time", "The heat equation forwards in time", "The wave equation with initial position and velocity", "Laplace’s equation with boundary values on a disc"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 10 and y = 1. What is the size of the solution? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 110.13, tolerance: 0.1 },
    },
    {
      key: "data",
      rung: "apply",
      prompt: <p>In Hadamard&rsquo;s example with n = 20, what is the size of the data? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.05, tolerance: 0.001 },
    },
    {
      key: "heatback",
      rung: "apply",
      prompt: <p>For <M>{"u_t = u_{xx}"}</M>, the mode <M>{"e^{-n^2 t}\\sin nx"}</M> has size 1 at t = 0. With n = 3, by what factor has it grown at t = −1? Give the nearest whole number.</p>,
      answer: { kind: "numeric", value: 8103, tolerance: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Verify that <M>{"u = \\sinh(ny)\\sin(nx)/n^2"}</M> solves Laplace&rsquo;s equation with the data of Hadamard&rsquo;s example.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes uₓₓ = −sinh(ny) sin(nx) and u_yy = sinh(ny) sin(nx), so uₓₓ + u_yy = 0.",
          "Checks u(x, 0) = 0 since sinh 0 = 0.",
          "Checks u_y = cosh(ny) sin(nx)/n, which equals sin(nx)/n at y = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Weather obeys well-posed equations, yet forecasts fail after a couple of weeks. Is that a failure of continuous dependence on the data?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that continuous dependence allows errors to grow, possibly exponentially, as long as they stay small for small data over a fixed time.",
          "Explains chaos as rapid but continuous growth of errors, which still makes long forecasts impractical.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Hadamard’s three conditions for a well-posed problem, his example of Laplace’s equation with Cauchy data, and why the backward heat equation is ill-posed.",

  glimpse: (
    <p>
      Next, the wave equation: how it arises from a vibrating string, and how a plucked string is built from standing waves.
    </p>
  ),
};
