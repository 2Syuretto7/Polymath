import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { PoincareRatioViz } from "@/components/viz/PoincareRatioViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.6.3",
  minutes: 90,
  links: {
    revisits: ["m23.6.2", "m23.2.2", "m22.5.1"],
    foreshadows: ["m33.3.4", "m33.4.1", "m34.2.3"],
  },

  puzzle: (
    <>
      <p>
        To solve −u″ = f on (0, 1) with u(0) = u(1) = 0, the natural idea is to minimise an energy, the integral of ½(u′)² −
        fu. But a minimising sequence of smooth functions may converge to something that is not twice differentiable, and
        the space of smooth functions is not complete. In which space should we look for u?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the size of a function with the size of its derivative, for functions vanishing at both ends.</p>
      <PoincareRatioViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Sobolev space H¹">
        <p>
          A function <M>{"u \\in L^2(0, 1)"}</M> has <strong>weak derivative</strong> <M>{"v \\in L^2"}</M> if its
          distributional derivative is <M>{"T_v"}</M>: <M>{"\\int u\\varphi' = -\\int v\\varphi"}</M> for every test function{" "}
          <M>{"\\varphi"}</M>. The space <M>{"H^1(0, 1)"}</M> of such <M>u</M>, with
        </p>
        <MD>{"\\langle u, w \\rangle_{H^1} = \\int_0^1 \\big( uw + u'w' \\big),"}</MD>
        <p>
          is a Hilbert space. <M>{"H^1_0"}</M> is the closure of the test functions in it: functions that vanish at both
          ends.
        </p>
      </Definition>

      <Theorem title="two inequalities">
        <p>
          <strong>Embedding.</strong> Every <M>{"u \\in H^1(0, 1)"}</M> agrees almost everywhere with a continuous function,
          and <M>{"|u(x) - u(y)| \\le |x - y|^{1/2} \\|u'\\|"}</M>, by Cauchy-Schwarz applied to{" "}
          <M>{"u(x) - u(y) = \\int_y^x u'"}</M>. <strong>Poincaré.</strong> For <M>{"u \\in H^1_0"}</M>,
        </p>
        <MD>{"\\|u\\|_{L^2} \\le \\tfrac{1}{\\pi} \\|u'\\|_{L^2},"}</MD>
        <p>
          so <M>{"\\int u'w'"}</M> is itself an inner product on <M>{"H^1_0"}</M>, equivalent to the full one.
        </p>
      </Theorem>

      <Example title="weak solutions by Riesz">
        <p>
          Multiply <M>{"-u'' = f"}</M> by a test function <M>v</M> and integrate by parts: <M>{"\\int u'v' = \\int fv"}</M>.
          A <strong>weak solution</strong> is <M>{"u \\in H^1_0"}</M> satisfying this for all <M>{"v \\in H^1_0"}</M>. For{" "}
          <M>{"f \\in L^2"}</M>, the right side is a bounded functional of <M>v</M>, by Poincaré, so the Riesz representation
          theorem for the inner product <M>{"\\int u'v'"}</M> gives exactly one weak solution. Showing it is a genuine solution
          when <M>f</M> is smooth is a separate question, of regularity.
        </p>
      </Example>

      <Remark title="where this goes">
        <p>
          The same scheme, with the Lax-Milgram theorem in place of Riesz, handles elliptic equations in many dimensions,
          where <M>{"H^1"}</M> functions need not be continuous and the embedding theorems depend on the dimension. Sobolev
          introduced these spaces in the 1930s; they are where functional analysis and partial differential equations meet.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "weak",
      rung: "check",
      prompt: <p>When does u in L² have weak derivative v?</p>,
      answer: { kind: "choice", options: ["When the integral of uφ′ equals minus the integral of vφ for every test function φ", "When u is differentiable everywhere", "When v is continuous", "When u′ = v at one point"], correct: [0] },
    },
    {
      key: "riesz",
      rung: "check",
      prompt: <p>Which theorem gives a unique weak solution of −u″ = f with zero boundary values?</p>,
      answer: { kind: "choice", options: ["The Riesz representation theorem", "Hahn-Banach", "Uniform boundedness", "Banach-Alaoglu"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the ratio ‖u‖/‖u′‖ for sin(2πx)? Give a decimal.</p>,
      answer: { kind: "numeric", value: 0.1592, tolerance: 0.001 },
    },
    {
      key: "tent",
      rung: "apply",
      prompt: <p>What is the weak derivative of the tent min(x, 1 − x)?</p>,
      answer: { kind: "choice", options: ["1 on (0, ½) and −1 on (½, 1)", "It has none", "The tent itself", "The Dirac delta at ½"], correct: [0] },
    },
    {
      key: "embed",
      rung: "apply",
      prompt: <p>If ‖u′‖ = 2, at most how far apart can u(0.36) and u(0.45) be? Use the embedding inequality.</p>,
      answer: { kind: "numeric", value: 0.6, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove |u(x) − u(y)| ≤ √|x − y| ‖u′‖ for a continuously differentiable u on [0, 1].</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes u(x) − u(y) as the integral of u′ from y to x.",
          "Applies Cauchy-Schwarz to the product of 1 and u′ on that interval.",
          "Bounds the result by √|x − y| times the L² norm of u′ on [0, 1].",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can the Poincaré inequality not hold on all of H¹(0, 1), without the zero boundary values?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a non-zero constant function u.",
          "Notes u′ = 0 but ‖u‖ > 0, so no constant C gives ‖u‖ ≤ C‖u′‖.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        This completes the course. Its four great theorems, Hahn-Banach, uniform boundedness, open mapping and closed graph,
        and its spectral theory, are the tools of modern analysis.
      </p>
      <p>
        Partial differential equations take them further: Sobolev inequalities in many dimensions, weak solutions of
        elliptic problems, and the Fourier analysis of tempered distributions.
      </p>
    </>
  ),
};
