import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { StiffnessViz } from "@/components/viz/StiffnessViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.6.2",
  minutes: 90,
  links: {
    revisits: ["m19.6.1", "m19.5.3", "m3.7.2"],
    foreshadows: ["m10.5.2", "m26.4.2", "m33.1.1"],
  },

  puzzle: (
    <>
      <p>
        A chemical reaction has one species that settles in a microsecond and another that changes over hours. After the
        first microsecond the solution is smooth and slow, so large time steps should be fine. Yet an explicit method
        insists on microsecond steps for the whole simulation, and takes billions of them. Why can it not take the large
        steps the smooth solution deserves?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Increase λ, then try to find a step size at which forward Euler behaves. Compare backward Euler.</p>
      <StiffnessViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the test equation and stability functions">
        <p>
          Apply a one-step method to <M>{"y' = \\lambda y"}</M> with <M>{"\\operatorname{Re}\\lambda < 0"}</M>, whose solutions
          decay. Each step multiplies y by a <strong>stability function</strong> R(z), z = hλ:
        </p>
        <MD>{"\\text{forward Euler: } R(z) = 1 + z,\\qquad \\text{backward Euler: } R(z) = \\frac{1}{1 - z}."}</MD>
        <p>
          The <strong>region of absolute stability</strong> is the set of z with |R(z)| &lt; 1. For forward Euler it is the
          disc of radius 1 centred at −1; for real λ &lt; 0 this means h &lt; 2/|λ|.
        </p>
      </Definition>

      <Definition title="stiffness">
        <p>
          A system is <strong>stiff</strong> when it has decay rates on very different scales: some eigenvalues of the
          Jacobian have large negative real parts, but the solution of interest varies slowly. Stability then forces an
          explicit method to use steps set by the fastest, already vanished, component, far smaller than accuracy requires.
        </p>
      </Definition>

      <Theorem title="A-stability">
        <p>
          A method is <strong>A-stable</strong> if its region of absolute stability contains the whole left half-plane.
          Backward Euler is A-stable: for <M>{"\\operatorname{Re} z < 0"}</M>,{" "}
          <M>{"|1 - z| > 1"}</M>, so |R(z)| &lt; 1. Dahlquist proved that no explicit linear multistep method is A-stable, and
          that an A-stable linear multistep method has order at most 2.
        </p>
      </Theorem>

      <Example title="the visualisation’s equation">
        <p>
          The solution of <M>{"y' = -\\lambda(y - \\cos t) - \\sin t"}</M>, y(0) = 0, is <M>{"\\cos t - e^{-\\lambda t}"}</M>.
          The error in forward Euler obeys the test equation, so it is multiplied by 1 − hλ each step. With λ = 100 and
          h = 0.05 that factor is −4, and the error grows by a factor of about <M>{"4^{100}"}</M> by t = 5, though the true
          solution is just cos t.
        </p>
      </Example>

      <Remark title="the price of implicitness">
        <p>
          Implicit methods must solve an equation at each step, usually by Newton&rsquo;s method with the Jacobian, which is
          costly for large systems. For stiff problems it is still far cheaper than millions of tiny explicit steps. The
          workhorses are the backward differentiation formulas of Gear and implicit Runge–Kutta methods such as Radau. The
          trapezium rule is A-stable, but R(z) tends to −1 as z → −∞, so very stiff components oscillate instead of dying;
          methods with R(z) → 0, called L-stable, damp them.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "region",
      rung: "check",
      prompt: <p>For real λ &lt; 0, when is forward Euler stable on y′ = λy?</p>,
      answer: { kind: "choice", options: ["When h < 2/|λ|", "For every h", "When h > 2/|λ|", "Never"], correct: [0] },
    },
    {
      key: "astable",
      rung: "check",
      prompt: <p>What does it mean for a method to be A-stable?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its region of absolute stability contains the whole left half-plane.",
          "It has order at least 4.",
          "It is explicit.",
          "It is exact for linear equations.",
        ],
        correct: [0],
      },
    },
    {
      key: "hmax",
      rung: "apply",
      prompt: <p>What is the largest step for which forward Euler is stable on y′ = −500y?</p>,
      answer: { kind: "numeric", value: 0.004, tolerance: 0.0001 },
    },
    {
      key: "be",
      rung: "apply",
      prompt: <p>Take one step of backward Euler with h = 1 on y′ = −9y, y(0) = 1.</p>,
      answer: { kind: "numeric", value: 0.1, tolerance: 0.0001 },
    },
    {
      key: "fe",
      rung: "apply",
      prompt: <p>Take one step of forward Euler with h = 1 on y′ = −9y, y(0) = 1.</p>,
      answer: { kind: "numeric", value: -8, tolerance: 0.0001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that backward Euler is A-stable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Derives R(z) = 1/(1 − z) by applying the method to y′ = λy.",
          "Shows |1 − z| > 1 when Re z < 0, for instance from |1 − z|² = (1 − Re z)² + (Im z)².",
          "Concludes |R(z)| < 1 on the open left half-plane.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The trapezium rule has <M>{"R(z) = \\frac{1 + z/2}{1 - z/2}"}</M>. Why can this cause trouble for very stiff problems even though the method is A-stable?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes that R(z) tends to −1 as z tends to −∞ along the real axis.",
          "Explains that fast components then flip sign each step instead of decaying, causing slowly damped oscillations.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      That completes numerical analysis. Next, mathematical logic: what a formula is, what makes it true, and what can be
      proved about proof itself.
    </p>
  ),
};
