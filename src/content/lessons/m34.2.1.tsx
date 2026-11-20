import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SchwartzSeminormViz } from "@/components/viz/SchwartzSeminormViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.2.1",
  minutes: 90,
  links: {
    revisits: ["m34.1.3", "m23.6.2", "m22.2.3"],
    foreshadows: ["m34.2.2", "m34.2.3", "m33.3.1"],
  },

  puzzle: (
    <>
      <p>
        On the line, the Fourier transform swaps two operations: differentiating f becomes multiplying f̂ by iξ, and
        multiplying f by x becomes differentiating f̂. So smoothness of f turns into decay of f̂, and decay of f into
        smoothness of f̂. Is there a class of functions that is perfectly balanced, so that the transform maps it onto
        itself?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function, a power of x and a derivative, and test whether the product stays bounded.</p>
      <SchwartzSeminormViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Schwartz space">
        <p>
          <M>{"\\mathcal S(\\mathbb R)"}</M> is the space of smooth f with{" "}
          <M>{"\\|f\\|_{a,b} = \\sup_x |x^a f^{(b)}(x)| < \\infty"}</M> for all whole numbers a, b ≥ 0. Its members and all
          their derivatives decay faster than any power of 1/|x|. The seminorms{" "}
          <M>{"\\|\\cdot\\|_{a,b}"}</M> give it a complete metrisable topology.
        </p>
      </Definition>

      <Definition title="the Fourier transform on the line">
        <p>
          For f in <M>{"\\mathcal S"}</M>, <M>{"\\hat f(\\xi) = \\int_{\\mathbb R} f(x) e^{-ix\\xi}\\, dx"}</M>.
          Integrating by parts and differentiating under the integral sign give{" "}
          <M>{"\\widehat{f'}(\\xi) = i\\xi \\hat f(\\xi)"}</M> and{" "}
          <M>{"\\widehat{xf}(\\xi) = i\\,\\frac{d}{d\\xi}\\hat f(\\xi)"}</M>.
        </p>
      </Definition>

      <Theorem title="the transform on Schwartz space">
        <p>
          The Fourier transform maps <M>{"\\mathcal S"}</M> continuously and bijectively onto itself, with inverse{" "}
          <M>{"f(x) = \\frac{1}{2\\pi}\\int \\hat f(\\xi) e^{ix\\xi}\\, d\\xi"}</M>. It turns convolution into
          multiplication: <M>{"\\widehat{f * g} = \\hat f\\, \\hat g"}</M>.
        </p>
      </Theorem>

      <Example title="the Gaussian">
        <p>
          For <M>{"g(x) = e^{-x^2/2}"}</M>, the identity <M>{"g' = -xg"}</M> transforms into{" "}
          <M>{"i\\xi\\hat g = -i\\hat g'"}</M>, so <M>{"\\hat g' = -\\xi \\hat g"}</M> and{" "}
          <M>{"\\hat g(\\xi) = \\hat g(0) e^{-\\xi^2/2} = \\sqrt{2\\pi}\\, e^{-\\xi^2/2}"}</M>. Up to the constant, the
          Gaussian is its own transform. This is the key step in proving the inversion formula.
        </p>
      </Example>

      <Remark title="why this space">
        <p>
          The Schwartz space is small enough that every operation is legitimate, yet dense in every{" "}
          <M>{"L^p"}</M> with p finite. Results proved on <M>{"\\mathcal S"}</M> extend by continuity, and by duality
          the transform extends to the much larger space of tempered distributions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What must a function satisfy to lie in the Schwartz space?</p>,
      answer: { kind: "choice", options: ["It is smooth, and every power of x times every derivative is bounded", "It is continuous and integrable", "It has compact support", "It is square-integrable"], correct: [0] },
    },
    {
      key: "deriv",
      rung: "check",
      prompt: <p>What is the Fourier transform of f′ in terms of f̂?</p>,
      answer: { kind: "choice", options: ["iξ f̂(ξ)", "f̂(ξ)/(iξ)", "−ξ² f̂(ξ)", "f̂′(ξ)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the Gaussian, a = 2 and b = 0, what is the supremum, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.736, tolerance: 0.002 },
    },
    {
      key: "lor",
      rung: "apply",
      prompt: <p>Is 1/(1 + x²) in the Schwartz space?</p>,
      answer: { kind: "choice", options: ["No: x³ times it is unbounded", "Yes: it is smooth and bounded", "Yes: it is integrable", "No: it is not smooth"], correct: [0] },
    },
    {
      key: "conv",
      rung: "apply",
      prompt: <p>What does the Fourier transform turn convolution into?</p>,
      answer: { kind: "choice", options: ["Multiplication of the transforms", "Addition of the transforms", "Convolution of the transforms", "Differentiation"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For f in the Schwartz space, show that the transform of f′ is iξ f̂(ξ).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the transform of f′ as the integral of f′(x) exp(−ixξ) and integrates by parts.",
          "Notes that the boundary terms vanish because f decays at ±∞.",
          "Differentiates exp(−ixξ) to get the factor −iξ, so the result is iξ f̂(ξ).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that if g is the Gaussian exp(−x²/2), then ĝ satisfies ĝ′ = −ξĝ, and deduce its formula given ĝ(0) = √(2π).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Transforms g′ = −xg using the two rules for derivatives and multiplication by x.",
          "Solves the equation ĝ′ = −ξĝ to get ĝ(ξ) = ĝ(0) exp(−ξ²/2).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        On the circle, Parseval said the coefficients carry exactly the energy of the function. On the line the same is
        true of the transform, and it lets the transform extend to every square-integrable function.
      </p>
      <p>Next, Plancherel.</p>
    </>
  ),
};
