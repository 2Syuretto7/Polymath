import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { FourierPairViz } from "@/components/viz/FourierPairViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.6.1",
  minutes: 90,
  links: {
    revisits: ["m17.4.2", "m17.3.3", "m9.7.2"],
    foreshadows: ["m17.6.2", "m34.2.2", "m23.2.3"],
  },

  puzzle: (
    <>
      <p>
        A short click of sound contains every pitch, while a pure, long-held note contains one. The briefer a signal, the
        broader its range of frequencies. Is this a fact about acoustics, or about mathematics?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the width of each function and watch its transform respond.</p>
      <FourierPairViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Fourier transform">
        <p>For an integrable f on ℝ, its Fourier transform is</p>
        <MD>{"\\hat f(\\xi) = \\int_{-\\infty}^{\\infty} f(x)\\, e^{-ix\\xi}\\,dx,"}</MD>
        <p>
          and, under suitable conditions, f is recovered by the inversion formula{" "}
          <M>{"f(x) = \\frac{1}{2\\pi}\\int \\hat f(\\xi)\\, e^{ix\\xi}\\,d\\xi"}</M>. It is the limit of Fourier series as the
          period tends to infinity: the discrete frequencies n become a continuum ξ.
        </p>
      </Definition>

      <Theorem title="the key properties">
        <p>
          (1) Derivatives become multiplication: <M>{"\\widehat{f'}(\\xi) = i\\xi \\hat f(\\xi)"}</M>. (2) Convolution becomes
          multiplication: <M>{"\\widehat{f * g} = \\hat f\\,\\hat g"}</M>. (3) Scaling: if <M>{"g(x) = f(x/a)"}</M> then{" "}
          <M>{"\\hat g(\\xi) = a \\hat f(a\\xi)"}</M>. (4) Plancherel:{" "}
          <M>{"\\int |f|^2\\,dx = \\frac{1}{2\\pi}\\int |\\hat f|^2\\,d\\xi"}</M>.
        </p>
      </Theorem>

      <Example title="the Gaussian">
        <p>
          For <M>{"f(x) = e^{-x^2/2}"}</M>, differentiating under the integral and integrating by parts gives{" "}
          <M>{"\\hat f'(\\xi) = -\\xi \\hat f(\\xi)"}</M>, so <M>{"\\hat f(\\xi) = \\hat f(0) e^{-\\xi^2/2} = \\sqrt{2\\pi}\\,e^{-\\xi^2/2}"}</M>.
          The Gaussian is, up to a constant, its own transform. By scaling, <M>{"e^{-x^2/2a^2}"}</M> has transform{" "}
          <M>{"a\\sqrt{2\\pi}\\,e^{-a^2\\xi^2/2}"}</M>: the narrower one is, the wider the other.
        </p>
      </Example>

      <Remark title="the uncertainty principle">
        <p>
          If <M>{"\\sigma_x"}</M> and <M>{"\\sigma_\\xi"}</M> are the standard deviations of <M>{"|f|^2"}</M> and{" "}
          <M>{"|\\hat f|^2"}</M> (as probability densities), then <M>{"\\sigma_x \\sigma_\\xi \\ge \\tfrac12"}</M>, with
          equality exactly for Gaussians. In quantum mechanics, where position and momentum wave functions are Fourier
          transforms of each other, this is Heisenberg&rsquo;s principle. So the click and the note are a fact of mathematics.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "deriv",
      rung: "check",
      prompt: <p>What does the Fourier transform do to differentiation?</p>,
      answer: { kind: "choice", options: ["Turns it into multiplication by iξ", "Turns it into integration", "Leaves it unchanged", "Turns it into convolution"], correct: [0] },
    },
    {
      key: "conv",
      rung: "check",
      prompt: <p>What is the Fourier transform of a convolution f ∗ g?</p>,
      answer: { kind: "choice", options: ["The product f̂ ĝ", "The sum f̂ + ĝ", "The convolution f̂ ∗ ĝ", "f̂ / ĝ"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the box with a = 2. What is f̂(0)?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "unc",
      rung: "apply",
      prompt: <p>In the visualisation, what is the product of spreads for the Gaussian, whatever a is?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "scale",
      rung: "apply",
      prompt: <p>If f is made three times narrower, g(x) = f(3x), what happens to the width of its transform?</p>,
      answer: { kind: "choice", options: ["It becomes three times wider", "It becomes three times narrower", "It is unchanged", "It becomes nine times wider"], correct: [0] },
    },
    {
      key: "box",
      rung: "prove",
      prompt: <p>Compute the Fourier transform of the box f = 1 on (−a, a) and 0 elsewhere.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes f̂(ξ) as the integral of exp(−ixξ) from −a to a.",
          "Evaluates it as (exp(iaξ) − exp(−iaξ))/(iξ) for ξ ≠ 0.",
          "Simplifies to 2 sin(aξ)/ξ, with value 2a at ξ = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does a jump in f make its transform decay slowly, like 1/ξ, while a smooth f has a rapidly decaying transform?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the rule that each derivative multiplies the transform by iξ, so if f has k integrable derivatives, ξᵏ f̂ is bounded.",
          "Notes that a jump means f′ contains a point mass, whose transform does not decay, so f̂ decays only like 1/ξ.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Fourier transform, how it turns derivatives and convolutions into multiplication, the Gaussian as its own transform, and the uncertainty principle.",

  glimpse: (
    <p>
      Next, transform methods for PDEs: taking the Fourier transform of the heat and wave equations on the line to solve them
      in a few lines, and recovering the heat kernel and d&rsquo;Alembert&rsquo;s formula.
    </p>
  ),
};
