import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { HopfLaxViz } from "@/components/viz/HopfLaxViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.2.2",
  minutes: 90,
  links: {
    revisits: ["m33.2.1", "m17.1.3", "m12.4.1"],
    foreshadows: ["m33.2.3", "m33.6.2", "m33.4.4"],
  },

  puzzle: (
    <>
      <p>
        A fire spreads at unit speed from the boundary of a region, and u(x, t) records whether the point x has burned by
        time t. A light ray takes the quickest route, and the travel time satisfies an equation in its gradient alone. Both
        lead to first-order equations whose solutions develop corners however smooth the start. What should a solution
        mean after a corner forms?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose the initial data and move t, and watch the Hopf-Lax solution smooth some corners and keep others.</p>
      <HopfLaxViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Hamilton-Jacobi equations">
        <p>
          A <strong>Hamilton-Jacobi equation</strong> is <M>{"u_t + H(Du, x) = 0"}</M> in <M>{"\\mathbb{R}^n \\times (0, \\infty)"}</M>,
          with <M>{"u = g"}</M> at t = 0, where H is the <strong>Hamiltonian</strong>. With p = Du, the characteristic
          equations from the previous lesson become Hamilton&rsquo;s equations <M>{"\\dot{x} = D_pH"}</M> and{" "}
          <M>{"\\dot{p} = -D_xH"}</M>, together with an equation for u along the curve. When H depends only on p, p is
          constant along each characteristic, and the characteristics are straight lines.
        </p>
      </Definition>

      <Theorem title="the Hopf-Lax formula">
        <p>
          Suppose H = H(p) is convex with <M>{"H(p)/|p| \\to \\infty"}</M>, and let L be its Legendre transform,{" "}
          <M>{"L(v) = \\sup_p (p \\cdot v - H(p))"}</M>. For Lipschitz g, the function
        </p>
        <p>
          <M>{"u(x, t) = \\min_y \\left\\{ t L\\left(\\frac{x - y}{t}\\right) + g(y) \\right\\}"}</M>
        </p>
        <p>
          is Lipschitz, equals g at t = 0, and satisfies the equation at every point where it is differentiable, which by
          Rademacher&rsquo;s theorem is almost everywhere. It is the least cost of a path ending at x at time t, with
          running cost L of the velocity and starting cost g.
        </p>
      </Theorem>

      <Example title="the quadratic Hamiltonian">
        <p>
          For <M>{"H(p) = p^2/2"}</M> the Legendre transform is <M>{"L(v) = v^2/2"}</M>, so{" "}
          <M>{"u(x, t) = \\min_y \\{(x - y)^2/(2t) + g(y)\\}"}</M>. With g(x) = |x| the minimum gives{" "}
          <M>{"x^2/(2t)"}</M> for |x| ≤ t and |x| − t/2 beyond: the corner is smoothed at once. With g(x) = −|x| it gives
          −|x| − t/2: characteristics from both sides run into x = 0, and the corner persists.
        </p>
      </Example>

      <Remark title="viscosity solutions">
        <p>
          Lipschitz functions solving the equation almost everywhere are far from unique: for{" "}
          <M>{"u_t + |u_x|^2/2 = 0"}</M> with g = 0, both the zero function and the function equal to <M>{"|x| - t/2"}</M> for |x| ≤ t/2 and to 0 elsewhere
          qualify. Crandall and
          Lions introduced <strong>viscosity solutions</strong> in 1983, defined by comparison with smooth test functions
          touching from above and below; they exist, are unique, and for convex H coincide with the Hopf-Lax formula. The
          name recalls that they arise as limits of <M>{"u_t + H(Du) = \\varepsilon \\Delta u"}</M> as ε tends to 0.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "legendre",
      rung: "check",
      prompt: <p>What is the Legendre transform of H(p) = p²/2?</p>,
      answer: { kind: "choice", options: ["L(v) = v²/2", "L(v) = 2v²", "L(v) = |v|", "L(v) = v"], correct: [0] },
    },
    {
      key: "char",
      rung: "check",
      prompt: <p>For a Hamiltonian H(p) depending only on p, what are the characteristics?</p>,
      answer: { kind: "choice", options: ["Straight lines, since p is constant along each", "Circles", "Parabolas", "There are none"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose g(x) = −|x| and set t = 2. What is u(0, 2)?</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0.02 },
    },
    {
      key: "linear",
      rung: "apply",
      prompt: <p>For uₜ + (uₓ)²/2 = 0 with g(x) = 2x, the solution is u = 2x − 2t. What is u(0, 1)?</p>,
      answer: { kind: "numeric", value: -2, tolerance: 0 },
    },
    {
      key: "visc",
      rung: "apply",
      prompt: <p>Why are viscosity solutions needed?</p>,
      answer: { kind: "choice", options: ["Lipschitz solutions holding almost everywhere are not unique, and a selection principle is needed", "Classical solutions always exist", "The Hopf-Lax formula is never Lipschitz", "Hamilton-Jacobi equations are linear"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For g(y) = ay, compute the Hopf-Lax formula with L(v) = v²/2, and check that it solves uₜ + (uₓ)²/2 = 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Minimises (x − y)²/(2t) + ay over y, finding the minimum at y = x − at.",
          "Substitutes to get u(x, t) = ax − a²t/2.",
          "Checks uₜ = −a²/2 and uₓ = a, so uₜ + (uₓ)²/2 = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For g(x) = −|x| and H(p) = p²/2, why do characteristics cross immediately, and what does the Hopf-Lax formula do at x = 0?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that characteristics are x = y + t g′(y), moving towards 0 from both sides.",
          "Notes that they meet at x = 0 for every t > 0, so no classical solution exists there.",
          "Explains that the minimum chooses the smaller value, leaving a corner at 0. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Differentiate a Hamilton-Jacobi equation in one space variable and its gradient satisfies a conservation law. There
        the corners become jumps, and the jumps move.
      </p>
      <p>Next, conservation laws.</p>
    </>
  ),
};
