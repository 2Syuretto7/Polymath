import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { MaxPrincipleViz } from "@/components/viz/MaxPrincipleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.3.2",
  minutes: 90,
  links: {
    revisits: ["m17.3.1", "m13.3.3", "m17.2.3"],
    foreshadows: ["m17.3.3", "m17.5.2", "m17.4.4"],
  },

  puzzle: (
    <>
      <p>
        A metal rod starts at some temperature, and its two ends are held by thermostats. Without solving anything, can you
        be sure that no point of the rod will ever become hotter than the hottest of the starting temperature and the two
        thermostats? Physics says yes. Can mathematics prove it from the equation alone?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the initial peak and change the boundary condition. Find where the hottest point of the rectangle lies.</p>
      <MaxPrincipleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the parabolic boundary">
        <p>
          Let <M>{"R = [0,1] \\times [0,T]"}</M> in the (x, t) plane. Its <strong>parabolic boundary</strong> Γ consists of
          the bottom edge t = 0 and the two sides x = 0 and x = 1. The top edge t = T is left out: the temperature there is
          not given in advance but is what the equation produces.
        </p>
      </Definition>

      <Theorem title="weak maximum principle">
        <p>
          If u is continuous on R and solves <M>{"u_t = u_{xx}"}</M> inside it, then
        </p>
        <MD>{"\\max_R u = \\max_\\Gamma u."}</MD>
        <p>
          Proof. Let ε &gt; 0 and <M>{"v = u + \\varepsilon x^2"}</M>, so that <M>{"v_t - v_{xx} = -2\\varepsilon < 0"}</M>.
          Suppose v attains its maximum over R at a point with 0 &lt; x &lt; 1 and 0 &lt; t ≤ T. There{" "}
          <M>{"v_{xx} \\le 0"}</M> and <M>{"v_t \\ge 0"}</M> (the latter one-sided if t = T), so{" "}
          <M>{"v_t - v_{xx} \\ge 0"}</M>, a contradiction. Hence <M>{"\\max_R u \\le \\max_R v = \\max_\\Gamma v \\le \\max_\\Gamma u + \\varepsilon"}</M>.
          Let ε tend to 0. Applying the result to −u gives the minimum principle.
        </p>
      </Theorem>

      <Example title="uniqueness and stability">
        <p>
          If <M>{"u_1"}</M> and <M>{"u_2"}</M> solve the same equation, their difference w does too. By the maximum and
          minimum principles, <M>{"\\max_R |w| = \\max_\\Gamma |w|"}</M>. So if the data agree on Γ, then w = 0 and the
          solutions coincide; and if the data differ by at most δ, the solutions differ by at most δ everywhere. This is
          uniqueness and continuous dependence together, two of Hadamard&rsquo;s three conditions.
        </p>
      </Example>

      <Remark title="the same idea elsewhere">
        <p>
          Harmonic functions, solving <M>{"u_{xx} + u_{yy} = 0"}</M>, also take their maximum on the boundary, as the modulus
          of a holomorphic function does. The strong maximum principle adds that if the maximum is reached at an interior
          point, the solution is constant up to that time. The wave equation has no maximum principle, which fits the way waves
          can focus and pile up.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "where",
      rung: "check",
      prompt: <p>By the weak maximum principle, where does a solution of the heat equation on a rectangle take its maximum?</p>,
      answer: {
        kind: "choice",
        options: ["On the bottom edge or the two sides", "Only on the top edge", "Always at an interior point", "Anywhere at all"],
        correct: [0],
      },
    },
    {
      key: "cons",
      rung: "check",
      prompt: <p>Which of these follows from the maximum and minimum principles?</p>,
      answer: {
        kind: "choice",
        options: [
          "The problem with given initial and end temperatures has at most one solution.",
          "Every solution is periodic in time.",
          "The total heat is constant.",
          "Solutions exist for all initial data.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, hold the left end at 1.5. What is the maximum over the whole rectangle?</p>,
      answer: { kind: "numeric", value: 1.5, tolerance: 0.01 },
    },
    {
      key: "stab",
      rung: "apply",
      prompt: (
        <p>
          Two solutions on the same rectangle have initial and end temperatures that differ by at most 0.01. What is the
          largest their difference can be at any point of the rectangle?
        </p>
      ),
      answer: { kind: "numeric", value: 0.01, tolerance: 0.0001 },
    },
    {
      key: "example",
      rung: "apply",
      prompt: <p>The function u(x, t) = x² + 2t solves the heat equation. On [0, 1] × [0, 1], where does it take its maximum?</p>,
      answer: {
        kind: "choice",
        options: ["At x = 1, t = 1, a point of the side x = 1", "At an interior point", "At x = 0, t = 0", "At x = ½, t = 1"],
        correct: [0],
      },
    },
    {
      key: "unique",
      rung: "prove",
      prompt: (
        <p>
          Use the maximum principle to prove that the problem <M>{"u_t = u_{xx}"}</M> on R, with given values on the parabolic
          boundary, has at most one solution.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes two solutions and observes that their difference w solves the heat equation with w = 0 on the parabolic boundary.",
          "Applies the maximum principle to w to get w ≤ 0, and the minimum principle (or the maximum principle to −w) to get w ≥ 0.",
          "Concludes w = 0, so the solutions are equal.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the maximum principle fail for the wave equation? Think of a plucked string.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an example: a string at rest with an initial velocity rises above its initial and end values.",
          "Connects this to the wave equation being second order in time, so initial data do not bound the solution.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the weak maximum principle for the heat equation, the idea of its proof with the small term εx², and how it gives uniqueness and stability.",

  glimpse: (
    <p>
      Next, the heat equation on the whole line, solved by a single bell-shaped function, the fundamental solution, which
      shows that heat spreads at infinite speed.
    </p>
  ),
};
