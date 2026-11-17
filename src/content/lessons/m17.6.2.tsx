import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { TransformSolveViz } from "@/components/viz/TransformSolveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.6.2",
  minutes: 90,
  links: {
    revisits: ["m17.6.1", "m17.3.3", "m17.2.2"],
    foreshadows: ["m33.1.1", "m28.1.2", "m34.2.2"],
  },

  puzzle: (
    <>
      <p>
        On the whole line, the heat equation and the wave equation look almost alike: one has a first time derivative, the
        other a second. Yet heat smooths a jagged start at once, while a wave carries every corner forward for ever. Is
        there a single point of view from which both behaviours can be read off in one line?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Switch between the two equations and move time forward. Watch what happens to each frequency.</p>
      <TransformSolveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the method">
        <p>
          With <M>{"\\hat u(\\xi) = \\int u(x) e^{-ix\\xi}\\,dx"}</M>, differentiation in x becomes multiplication:{" "}
          <M>{"\\widehat{u_x} = i\\xi\\,\\hat u"}</M> and <M>{"\\widehat{u_{xx}} = -\\xi^2\\hat u"}</M>. Transforming a
          linear PDE with constant coefficients in x therefore leaves, for each fixed ξ, an ordinary differential equation in t.
          Solve it, then invert the transform.
        </p>
      </Definition>

      <Theorem title="the heat equation on the line">
        <p>
          For <M>{"u_t = u_{xx}"}</M> with <M>{"u(x,0) = g(x)"}</M>, the transform satisfies{" "}
          <M>{"\\hat u_t = -\\xi^2 \\hat u"}</M>, so <M>{"\\hat u(\\xi,t) = e^{-\\xi^2 t}\\hat g(\\xi)"}</M>. The factor{" "}
          <M>{"e^{-\\xi^2 t}"}</M> is the transform of the heat kernel, and a product of transforms is the transform of a
          convolution, so
        </p>
        <MD>{"u(x,t) = \\int_{-\\infty}^{\\infty} \\frac{1}{\\sqrt{4\\pi t}}\\, e^{-(x-y)^2/4t}\\, g(y)\\,dy,"}</MD>
        <p>the formula found earlier from the fundamental solution.</p>
      </Theorem>

      <Example title="the wave equation and the half-plane">
        <p>
          For <M>{"u_{tt} = c^2 u_{xx}"}</M> with <M>{"u = g"}</M> and <M>{"u_t = 0"}</M> at t = 0, each frequency obeys{" "}
          <M>{"\\hat u_{tt} = -c^2\\xi^2 \\hat u"}</M>, so <M>{"\\hat u = \\cos(c\\xi t)\\,\\hat g"}</M>. Since{" "}
          <M>{"\\cos(c\\xi t) = \\tfrac12(e^{ic\\xi t} + e^{-ic\\xi t})"}</M> and multiplying by <M>{"e^{\\pm ic\\xi t}"}</M>{" "}
          shifts a function, this is d&rsquo;Alembert&rsquo;s <M>{"\\tfrac12\\big(g(x+ct) + g(x-ct)\\big)"}</M>. For
          Laplace&rsquo;s equation in the upper half-plane with boundary values g, transforming in x gives{" "}
          <M>{"\\hat u(\\xi,y) = e^{-|\\xi| y}\\,\\hat g(\\xi)"}</M>, choosing the solution that stays bounded as y grows.
        </p>
      </Example>

      <Remark title="what the multiplier tells you">
        <p>
          The factor multiplying each frequency is the whole story. If it decays fast in ξ, as{" "}
          <M>{"e^{-\\xi^2 t}"}</M> does, the solution is smooth. If it has size 1, as <M>{"\\cos(c\\xi t)"}</M> does, roughness
          is kept. If it grows, as <M>{"e^{\\xi^2 t}"}</M> would for the heat equation run backwards, small high-frequency errors
          explode and the problem is ill-posed. The method needs the whole line, or a half-line with a Laplace transform in
          time; on a bounded interval Fourier series play the same part.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "deriv",
      rung: "check",
      prompt: <p>Under the Fourier transform in x, what does the second derivative in x become?</p>,
      answer: { kind: "choice", options: ["Multiplication of the transform by −ξ²", "Multiplication by iξ", "Convolution with ξ²", "Division by ξ²"], correct: [0] },
    },
    {
      key: "ode",
      rung: "check",
      prompt: <p>After transforming the heat equation in x, what is left for each fixed frequency ξ?</p>,
      answer: {
        kind: "choice",
        options: [
          "An ordinary differential equation in t, whose solution is the starting transform times exp(−ξ²t).",
          "Another PDE in x and t.",
          "An algebraic equation with no t in it.",
          "A boundary value problem in ξ.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the heat equation and t = 0.25. What is u(0, t)? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.84, tolerance: 0.01 },
    },
    {
      key: "half",
      rung: "apply",
      prompt: <p>For Laplace&rsquo;s equation in the upper half-plane the multiplier is exp(−|ξ|y). What is it at ξ = 2 and y = 0.5? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.37, tolerance: 0.01 },
    },
    {
      key: "smooth",
      rung: "apply",
      prompt: <p>Why is the solution of the heat equation smooth at every positive time, even for a block of initial heat?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its transform is multiplied by exp(−ξ²t), which makes high frequencies decay faster than any power of ξ.",
          "Because heat travels at a finite speed.",
          "Because the multiplier cos(ξt) has size at most 1.",
          "Because the initial data were smooth.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if u solves the heat equation on the line with u(x, 0) = g(x), then û(ξ, t) = exp(−ξ²t) ĝ(ξ).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Transforms both sides in x, using that the transform of the second x derivative is −ξ² û, and that the t derivative passes through the integral.",
          "Obtains, for each fixed ξ, the ODE saying that the t derivative of û is −ξ² û.",
          "Solves it with the initial value û(ξ, 0) = ĝ(ξ) to get û = exp(−ξ²t) ĝ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the multiplier to explain why running the heat equation backwards in time is ill-posed.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Backwards, the multiplier becomes exp(ξ²t), which grows without bound in ξ.",
          "So a tiny error at high frequency is magnified enormously, and the solution does not depend continuously on the data.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      This ends the course on partial differential equations. Next, mathematical statistics: what a random sample is, and
      how the sample mean and variance behave from sample to sample.
    </p>
  ),
};
