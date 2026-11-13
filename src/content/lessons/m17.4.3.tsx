import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { LaplaceSquareViz } from "@/components/viz/LaplaceSquareViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.4.3",
  minutes: 90,
  links: {
    revisits: ["m17.4.2", "m17.3.1", "m17.2.1"],
    foreshadows: ["m17.4.4", "m17.5.1", "m28.1.2"],
  },

  puzzle: (
    <>
      <p>
        A square metal plate has three edges kept in ice and the fourth heated to a given profile. What is the steady
        temperature inside? The unknown depends on two variables, and no single formula seems to fit. Is there a systematic
        way to find it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose the temperature on the top edge and slide the height of the slice down from the top.</p>
      <LaplaceSquareViz />
    </>
  ),

  theory: (
    <>
      <Definition title="separation of variables">
        <p>
          Look for solutions of the form <M>{"u(x,y) = X(x)Y(y)"}</M>. Substituting into Laplace&rsquo;s equation{" "}
          <M>{"u_{xx} + u_{yy} = 0"}</M> and dividing by XY gives
        </p>
        <MD>{"\\frac{X''(x)}{X(x)} = -\\frac{Y''(y)}{Y(y)}."}</MD>
        <p>
          The left side depends only on x and the right only on y, so both equal a constant −λ. The partial differential
          equation splits into two ordinary ones, <M>{"X'' = -\\lambda X"}</M> and <M>{"Y'' = \\lambda Y"}</M>.
        </p>
      </Definition>

      <Theorem title="the square with data on one side">
        <p>
          On <M>{"[0,1]^2"}</M> with u = 0 on the bottom and both sides and <M>{"u(x,1) = f(x)"}</M>, the conditions{" "}
          <M>{"X(0) = X(1) = 0"}</M> allow only <M>{"\\lambda = n^2\\pi^2"}</M> and <M>{"X = \\sin n\\pi x"}</M>; the
          condition Y(0) = 0 gives <M>{"Y = \\sinh n\\pi y"}</M>. Superposing,
        </p>
        <MD>{"u(x,y) = \\sum_{n=1}^{\\infty} b_n \\,\\frac{\\sinh n\\pi y}{\\sinh n\\pi}\\, \\sin n\\pi x,"}</MD>
        <p>where the <M>{"b_n"}</M> are the sine coefficients of f, so that the top condition holds.</p>
      </Theorem>

      <Example title="data on all four sides">
        <p>
          If all four edges carry data, split the problem into four, each with data on one edge and zero on the others, solve
          each as above (rotating the square), and add. Linearity of the equation makes this legitimate.
        </p>
      </Example>

      <Remark title="when it works">
        <p>
          Separation works for linear equations on regions whose boundaries are coordinate curves: rectangles in Cartesian
          coordinates, discs and annuli in polar coordinates, balls in spherical ones, where Bessel functions and Legendre
          polynomials replace sines. It needs the separated problem in one variable to have enough eigenfunctions to expand
          the data, which is the subject of the next lesson.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "why",
      rung: "check",
      prompt: <p>Why must X″/X and −Y″/Y both equal a constant?</p>,
      answer: {
        kind: "choice",
        options: [
          "One depends only on x and the other only on y, and they are equal for all x and y.",
          "Because X and Y are polynomials.",
          "Because the boundary values are zero.",
          "Because the equation is non-linear.",
        ],
        correct: [0],
      },
    },
    {
      key: "x",
      rung: "check",
      prompt: <p>With X(0) = X(1) = 0, which functions X solve X″ = −λX non-trivially?</p>,
      answer: { kind: "choice", options: ["sin(nπx), with λ = n²π²", "cos(nπx), with λ = n²π²", "eˣ", "Any polynomial"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take top data sin πx. What is u(½, ½)? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.2, tolerance: 0.01 },
    },
    {
      key: "fade",
      rung: "apply",
      prompt: <p>Below the top edge, mode n is multiplied roughly by exp(−nπ(1 − y)). Which modes of the top data matter most deep inside the square?</p>,
      answer: { kind: "choice", options: ["The lowest modes", "The highest modes", "All modes equally", "Only even modes"], correct: [0] },
    },
    {
      key: "single",
      rung: "apply",
      prompt: <p>If the top data is f(x) = 3 sin 2πx, what is the solution?</p>,
      answer: {
        kind: "choice",
        options: [
          "u = 3 sin(2πx) sinh(2πy)/sinh(2π)",
          "u = 3 sin(2πx) y",
          "u = 3 sin(2πx) exp(y)",
          "u = 3 sin(2πx)",
        ],
        correct: [0],
      },
    },
    {
      key: "check",
      rung: "prove",
      prompt: <p>Show that u = sin(nπx) sinh(nπy) solves Laplace&rsquo;s equation and vanishes on the lines x = 0, x = 1 and y = 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes uₓₓ = −n²π² sin(nπx) sinh(nπy).",
          "Computes uᵧᵧ = n²π² sin(nπx) sinh(nπy), so the sum is 0.",
          "Notes sin 0 = sin nπ = 0 and sinh 0 = 0, so u vanishes on the three lines.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does separation of variables fail for most regions, such as a triangle or an irregular blob?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the boundary conditions must be imposed on coordinate curves, x = constant or y = constant, for each factor separately.",
          "Observes that a general boundary is not of this form, so the products cannot satisfy the conditions, and other methods such as Green's functions or numerics are needed.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how separation of variables turns Laplace's equation in a square into two ordinary equations, and how the Fourier sine series of the boundary data gives the solution.",

  glimpse: (
    <p>
      Next, boundary value problems in general: the eigenvalue problems that separation produces, Sturm–Liouville theory, and
      why their eigenfunctions are always orthogonal and complete.
    </p>
  ),
};
