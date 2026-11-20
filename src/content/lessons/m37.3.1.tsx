import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PicardSDEViz } from "@/components/viz/PicardSDEViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m37.3.1",
  minutes: 90,
  links: {
    revisits: ["m37.2.3", "m37.2.2", "m3.2.3"],
    foreshadows: ["m37.3.2", "m37.3.3", "m37.4.1"],
  },

  puzzle: (
    <>
      <p>
        The equation x′ = 3∛(x²) with x(0) = 0 has two solutions, x = 0 and x = t³. The equation x′ = x² with x(0) = 1
        has a solution that blows up at t = 1. Now add noise: dX = b(X) dt + σ(X) dB. What conditions on b and σ give
        exactly one solution for all time?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the Picard iterates on a fixed Brownian path and watch the gaps shrink.</p>
      <PicardSDEViz />
    </>
  ),

  theory: (
    <>
      <Definition title="strong solutions">
        <p>
          Given a Brownian motion B on a filtered probability space and a starting point x₀, a <strong>strong
          solution</strong> is a continuous adapted process with{" "}
          <M>{"X_t = x_0 + \\int_0^t b(X_s)\\,ds + \\int_0^t \\sigma(X_s)\\,dB_s"}</M> for all t, almost surely.{" "}
          <strong>Pathwise uniqueness</strong> means any two strong solutions on the same space with the same B agree for
          all t, almost surely.
        </p>
      </Definition>

      <Theorem title="Itô's existence and uniqueness theorem">
        <p>
          Suppose b and σ are Lipschitz, <M>{"|b(x) - b(y)| + |\\sigma(x) - \\sigma(y)| \\le K|x - y|"}</M>, which also
          gives linear growth. Then there is a unique strong solution, and{" "}
          <M>{"\\mathbb{E}\\sup_{s \\le T} X_s^2 < \\infty"}</M> for every T.
        </p>
      </Theorem>

      <Remark title="the proof">
        <p>
          Define Picard iterates <M>{"X^{(k+1)}_t = x_0 + \\int_0^t b(X^{(k)})\\,ds + \\int_0^t \\sigma(X^{(k)})\\,dB"}</M>.
          Doob&rsquo;s inequality and the Itô isometry give{" "}
          <M>{"\\mathbb{E}\\sup_{s \\le t}|X^{(k+1)}_s - X^{(k)}_s|^2 \\le \\frac{(Ct)^k}{k!}\\,C'"}</M>, which is summable,
          so the iterates converge uniformly on [0, T] almost surely. For uniqueness, the difference of two solutions
          satisfies <M>{"\\varphi(t) \\le C\\int_0^t \\varphi(s)\\,ds"}</M> with{" "}
          <M>{"\\varphi(t) = \\mathbb{E}|X_t - Y_t|^2"}</M>, and Gronwall&rsquo;s inequality forces <M>{"\\varphi = 0"}</M>.
        </p>
      </Remark>

      <Example title="Tanaka's equation">
        <p>
          The equation dX = sgn(X) dB has solutions in law: any Brownian motion W gives one, with B = ∫ sgn(W) dW. But if
          X solves it, so does −X, so pathwise uniqueness fails, and one can show there is no strong solution at all. The
          coefficient sgn is not Lipschitz.
        </p>
      </Example>

      <Remark title="weaker conditions">
        <p>
          In one dimension, Yamada and Watanabe showed that pathwise uniqueness holds when b is Lipschitz and σ is Hölder
          of exponent 1/2. This covers the square-root diffusion dX = κ(θ − X) dt + σ√X dB used for interest rates.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>Which condition on b and σ gives existence and uniqueness of strong solutions in Itô&rsquo;s theorem?</p>,
      answer: { kind: "choice", options: ["Both are Lipschitz", "Both are bounded", "Both are differentiable at 0", "b is constant"], correct: [0] },
    },
    {
      key: "path",
      rung: "check",
      prompt: <p>What does pathwise uniqueness mean?</p>,
      answer: { kind: "choice", options: ["Two solutions driven by the same Brownian path agree for all time, almost surely", "All solutions have the same law", "There is at most one Brownian motion", "Solutions never cross zero"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how do the gaps between successive iterates behave as k grows?</p>,
      answer: { kind: "choice", options: ["They shrink rapidly, roughly like Cᵏ/k!", "They stay constant", "They grow", "They are zero from the first step"], correct: [0] },
    },
    {
      key: "blow",
      rung: "apply",
      prompt: <p>The ODE x′ = x² with x(0) = 2 blows up in finite time. At what time?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "tan",
      rung: "apply",
      prompt: <p>Why does Tanaka&rsquo;s equation dX = sgn(X) dB fail pathwise uniqueness?</p>,
      answer: { kind: "choice", options: ["If X is a solution, so is −X, driven by the same B", "It has no solutions at all", "Its solutions explode", "Brownian motion is not continuous"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Assume b and σ are Lipschitz with constant K and that two solutions X and Y have finite second moments. Show that E|Xₜ − Yₜ|² = 0 for t ≤ T.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Subtracts the integral equations and uses (a + b)² ≤ 2a² + 2b².",
          "Bounds the drift term by Cauchy–Schwarz and the noise term by the Itô isometry, each by a constant times ∫₀ᵗ E|Xₛ − Yₛ|² ds, using the Lipschitz bound.",
          "Applies Gronwall’s inequality to conclude the expectation is 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does x′ = 3∛(x²), x(0) = 0, have more than one solution, and which hypothesis of the uniqueness theorem fails?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks that both x = 0 and x = t³ solve it.",
          "Notes the right side is not Lipschitz at 0, since its slope is unbounded there.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Existence is guaranteed, but most solutions have no formula. Equations whose coefficients are linear in X are the
        exception, and they include the most used models in physics and finance.
      </p>
      <p>Next, linear SDEs.</p>
    </>
  ),
};
