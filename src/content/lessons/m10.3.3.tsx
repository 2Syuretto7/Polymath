import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { VaryParamViz } from "@/components/viz/VaryParamViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.3.3",
  minutes: 90,
  links: {
    revisits: ["m10.3.2", "m10.3.1", "m2.7.1"],
    foreshadows: ["m10.3.4", "m10.4.2", "m10.6.2"],
  },

  puzzle: (
    <>
      <p>
        Guessing works when the forcing is a polynomial, exponential or sinusoid. But a real push can have any shape. Is there
        a method that always produces a particular solution, whatever the forcing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Free oscillations are <M>{"C_1\\cos t + C_2\\sin t"}</M> with constant <M>{"C_1, C_2"}</M>. Let them vary with time,
        and watch how they change only while the forcing acts.
      </p>
      <VaryParamViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Wronskian">
        <p>
          For two solutions <M>{"y_1, y_2"}</M> of a homogeneous equation, <M>{"W = y_1y_2' - y_1'y_2"}</M>. It is never zero
          exactly when <M>{"y_1, y_2"}</M> are independent, so that they span all solutions.
        </p>
      </Definition>

      <Theorem title="variation of parameters">
        <p>
          Let <M>{"y_1, y_2"}</M> be independent solutions of <M>{"y'' + p(t)y' + q(t)y = 0"}</M>. Then{" "}
          <M>{"y_p = u_1y_1 + u_2y_2"}</M> solves <M>{"y'' + py' + qy = g"}</M>, where
        </p>
        <MD>{"u_1' = -\\frac{y_2\\,g}{W}, \\qquad u_2' = \\frac{y_1\\,g}{W}."}</MD>
      </Theorem>

      <Proof>
        <p>
          Impose the extra condition <M>{"u_1'y_1 + u_2'y_2 = 0"}</M>. Then <M>{"y_p' = u_1y_1' + u_2y_2'"}</M> and{" "}
          <M>{"y_p'' = u_1y_1'' + u_2y_2'' + u_1'y_1' + u_2'y_2'"}</M>. Substituting, the terms with <M>{"u_1, u_2"}</M>{" "}
          vanish because <M>{"y_1, y_2"}</M> solve the homogeneous equation, leaving <M>{"u_1'y_1' + u_2'y_2' = g"}</M>. Solving
          these two linear equations for <M>{"u_1', u_2'"}</M> by Cramer&rsquo;s rule gives the formulas.
        </p>
      </Proof>

      <Example title="y″ + y = tan t">
        <p>
          With <M>{"y_1 = \\cos t"}</M>, <M>{"y_2 = \\sin t"}</M>, <M>{"W = 1"}</M>:{" "}
          <M>{"u_2' = \\cos t\\tan t = \\sin t"}</M>, so <M>{"u_2 = -\\cos t"}</M>; and{" "}
          <M>{"u_1' = -\\sin t\\tan t = \\cos t - \\sec t"}</M>, so <M>{"u_1 = \\sin t - \\ln|\\sec t + \\tan t|"}</M>. Then{" "}
          <M>{"y_p = -\\cos t\\,\\ln|\\sec t + \\tan t|"}</M>, the other terms cancelling.
        </p>
      </Example>

      <Remark title="the response to a push">
        <p>
          For <M>{"y'' + y = g"}</M> starting at rest, the formulas combine into{" "}
          <M>{"y(t) = \\int_0^t \\sin(t - s)\\,g(s)\\,ds"}</M>. Each instant&rsquo;s push <M>{"g(s)\\,ds"}</M> starts its own free
          oscillation <M>{"\\sin(t - s)"}</M>, and the solution adds them up. This is Duhamel&rsquo;s principle, and the
          integral is a convolution.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "w",
      rung: "check",
      prompt: <p>What is the Wronskian of <M>{"\\cos t"}</M> and <M>{"\\sin t"}</M>?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "cond",
      rung: "check",
      prompt: <p>Which extra condition does variation of parameters impose on <M>{"u_1, u_2"}</M>?</p>,
      answer: { kind: "choice", options: ["u₁ + u₂ = 0", "u₁′y₁ + u₂′y₂ = 0", "u₁′ = u₂′", "u₁y₁ = u₂y₂"], correct: [1] },
    },
    {
      key: "w2",
      rung: "apply",
      prompt: <p>What is the Wronskian of <M>{"e^{t}"}</M> and <M>{"e^{3t}"}</M> at <M>{"t = 0"}</M>?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "u2",
      rung: "apply",
      prompt: <p>For <M>{"y'' + y = \\sec t"}</M> with <M>{"y_1 = \\cos t"}</M>, <M>{"y_2 = \\sin t"}</M>, what is <M>{"u_2'"}</M>?</p>,
      answer: { kind: "choice", options: ["1", "tan t", "−sin t sec t", "sec² t"], correct: [0] },
    },
    {
      key: "duhamel",
      rung: "apply",
      prompt: <p>Using <M>{"y(t) = \\int_0^t \\sin(t - s)\\,g(s)\\,ds"}</M> with <M>{"g = 1"}</M>, find <M>{"y(\\pi)"}</M> for <M>{"y'' + y = 1"}</M> from rest.</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that with the condition <M>{"u_1'y_1 + u_2'y_2 = 0"}</M>, substituting <M>{"y_p = u_1y_1 + u_2y_2"}</M> into the equation leaves <M>{"u_1'y_1' + u_2'y_2' = g"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes y_p′ using the condition, then y_p″.",
          "Groups terms as u₁L[y₁] + u₂L[y₂] + (u₁′y₁′ + u₂′y₂′).",
          "Uses L[y₁] = L[y₂] = 0 to conclude.",
        ],
      },
    },
    {
      key: "compare",
      rung: "stretch",
      prompt: <p>When would you choose undetermined coefficients over variation of parameters, and the other way round?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that undetermined coefficients is quicker but only works for special forcings and constant coefficients.",
          "Notes that variation of parameters always applies but needs integrals that may be hard.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the idea of letting the constants in the homogeneous solution vary, the extra condition and the formulas for u₁′ and u₂′, the tan t example, and how the answer can be read as adding up responses to each instant's push.",

  glimpse: (
    <p>
      The next lesson uses these tools to understand resonance. The matrix exponential later gives the same formula for
      systems, and the Laplace transform treats the convolution integral as a product.
    </p>
  ),
};
