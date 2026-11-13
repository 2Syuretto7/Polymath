import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LaplaceTransformViz } from "@/components/viz/LaplaceTransformViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.6.2",
  minutes: 90,
  links: {
    revisits: ["m10.3.2", "m10.3.3", "m2.7.1"],
    foreshadows: ["m10.6.3", "m17.4.1", "m17.1.1"],
  },

  puzzle: (
    <>
      <p>
        Logarithms turned multiplication into addition, which made hard calculations easy. Is there a transform that turns
        differentiation into multiplication, so that a differential equation becomes an algebraic one?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The transform damps a function by <M>{"e^{-st}"}</M> and measures the area that remains. Change <M>{"s"}</M> and
        compare the area with the formula.
      </p>
      <LaplaceTransformViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Laplace transform">
        <MD>{"F(s) = \\mathcal{L}\\{f\\}(s) = \\int_0^{\\infty} e^{-st}f(t)\\,dt,"}</MD>
        <p>defined for <M>{"s"}</M> large enough that the integral converges.</p>
      </Definition>

      <Example title="basic transforms">
        <p>
          <M>{"\\mathcal{L}\\{1\\} = 1/s"}</M>, <M>{"\\mathcal{L}\\{e^{at}\\} = 1/(s - a)"}</M> for <M>{"s > a"}</M>,{" "}
          <M>{"\\mathcal{L}\\{\\sin \\omega t\\} = \\omega/(s^2 + \\omega^2)"}</M>,{" "}
          <M>{"\\mathcal{L}\\{\\cos \\omega t\\} = s/(s^2 + \\omega^2)"}</M>, <M>{"\\mathcal{L}\\{t^n\\} = n!/s^{n+1}"}</M>.
        </p>
      </Example>

      <Theorem title="derivatives become multiplication">
        <p>
          <M>{"\\mathcal{L}\\{f'\\} = sF(s) - f(0)"}</M> and <M>{"\\mathcal{L}\\{f''\\} = s^2F(s) - sf(0) - f'(0)"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Integrate by parts:{" "}
          <M>{"\\int_0^\\infty e^{-st}f'(t)\\,dt = [e^{-st}f(t)]_0^\\infty + s\\int_0^\\infty e^{-st}f(t)\\,dt = -f(0) + sF(s)"}</M>,
          when <M>{"e^{-st}f(t) \\to 0"}</M>. Apply this twice for <M>{"f''"}</M>.
        </p>
      </Proof>

      <Example title="solving an initial value problem">
        <p>
          For <M>{"y'' + y = 1"}</M>, <M>{"y(0) = y'(0) = 0"}</M>: <M>{"s^2Y + Y = 1/s"}</M>, so{" "}
          <M>{"Y = \\dfrac{1}{s(s^2 + 1)} = \\dfrac{1}{s} - \\dfrac{s}{s^2 + 1}"}</M>. Reading the table backwards,{" "}
          <M>{"y = 1 - \\cos t"}</M>. The initial conditions were built in from the start.
        </p>
      </Example>

      <Remark title="convolution and switches">
        <p>
          The transform of a convolution <M>{"(f * g)(t) = \\int_0^t f(t - u)g(u)\\,du"}</M> is <M>{"F(s)G(s)"}</M>, which
          explains Duhamel&rsquo;s formula. A forcing switched on at time <M>{"a"}</M>, <M>{"u(t - a)g(t - a)"}</M>, has
          transform <M>{"e^{-as}G(s)"}</M>. This is why engineers use the transform for circuits with switches and sudden
          loads.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is <M>{"\\mathcal{L}\\{e^{2t}\\}"}</M>?</p>,
      answer: { kind: "choice", options: ["1/(s − 2)", "1/(s + 2)", "2/s", "e^(2s)"], correct: [0] },
    },
    {
      key: "deriv",
      rung: "check",
      prompt: <p>What is <M>{"\\mathcal{L}\\{f'\\}"}</M>?</p>,
      answer: { kind: "choice", options: ["sF(s) − f(0)", "F(s)/s", "F′(s)", "sF(s)"], correct: [0] },
    },
    {
      key: "val",
      rung: "apply",
      prompt: <p>Evaluate <M>{"\\mathcal{L}\\{\\sin t\\}"}</M> at <M>{"s = 2"}</M>.</p>,
      answer: { kind: "numeric", value: 0.2, tolerance: 0.001 },
    },
    {
      key: "t2",
      rung: "apply",
      prompt: <p>Evaluate <M>{"\\mathcal{L}\\{t^2\\}"}</M> at <M>{"s = 2"}</M>.</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "solve",
      rung: "apply",
      prompt: <p>Use the transform to solve <M>{"y' + 3y = 0"}</M>, <M>{"y(0) = 2"}</M>, and give <M>{"y(1)"}</M>.</p>,
      answer: { kind: "numeric", value: 2 * Math.exp(-3), tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that <M>{"\\mathcal{L}\\{e^{at}\\} = 1/(s - a)"}</M> for <M>{"s > a"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the integral ∫₀^∞ e^(−(s − a)t) dt.",
          "Evaluates it as [−e^(−(s − a)t)/(s − a)] from 0 to ∞.",
          "Uses s > a so the term at infinity vanishes, giving 1/(s − a).",
        ],
      },
    },
    {
      key: "why",
      rung: "stretch",
      prompt: <p>Compared with undetermined coefficients, what does the Laplace transform make easier, and what does it make harder?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes it handles initial conditions and switched or impulsive forcing in one step.",
          "Notes that inverting the transform needs partial fractions and a table, and it only suits constant coefficients easily.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the definition of the Laplace transform, why derivatives become multiplication by s, how to solve an initial value problem by transforming, using partial fractions and inverting, and what convolution and shifts add.",

  glimpse: (
    <p>
      The final lesson of the course takes a first look at Sturm–Liouville problems. Partial differential equations use
      transforms and Fourier series to solve heat and wave equations.
    </p>
  ),
};
