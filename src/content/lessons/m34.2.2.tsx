import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { UncertaintyViz } from "@/components/viz/UncertaintyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.2.2",
  minutes: 90,
  links: {
    revisits: ["m34.2.1", "m34.1.3", "m23.2.3"],
    foreshadows: ["m34.2.3", "m34.3.1", "m33.5.1"],
  },

  puzzle: (
    <>
      <p>
        A musician can play a note of exact pitch only by holding it for a long time; a short click contains a smear of
        frequencies. A physicist cannot pin down both the position and the momentum of a particle. Are these the same
        fact? Both are a single inequality about the Fourier transform.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function and its width, and compare its energy and spread with those of its transform.</p>
      <UncertaintyViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Plancherel's theorem">
        <p>
          For f in <M>{"\\mathcal S(\\mathbb R)"}</M>, <M>{"\\int |\\hat f|^2 = 2\\pi \\int |f|^2"}</M>, and more
          generally <M>{"\\int \\hat f\\, \\overline{\\hat g} = 2\\pi \\int f \\bar g"}</M>. Since{" "}
          <M>{"\\mathcal S"}</M> is dense in <M>{"L^2(\\mathbb R)"}</M>, the map{" "}
          <M>{"f \\mapsto (2\\pi)^{-1/2}\\hat f"}</M> extends uniquely to a unitary operator of{" "}
          <M>{"L^2(\\mathbb R)"}</M> onto itself.
        </p>
      </Theorem>

      <Remark title="what the transform of an L² function means">
        <p>
          For f in <M>{"L^2"}</M> the integral <M>{"\\int f e^{-ix\\xi}"}</M> may not converge. Instead,{" "}
          <M>{"\\hat f"}</M> is the <M>{"L^2"}</M> limit of <M>{"\\widehat{f_n}"}</M> for any Schwartz{" "}
          <M>{"f_n \\to f"}</M>, or equivalently of <M>{"\\int_{-R}^{R} f(x) e^{-ix\\xi}\\, dx"}</M> as R → ∞.
        </p>
      </Remark>

      <Definition title="spread">
        <p>
          For f with <M>{"\\int |f|^2 = 1"}</M>, treat <M>{"|f|^2"}</M> as a probability density. Its{" "}
          <strong>spread</strong> about 0 is <M>{"\\Delta x = (\\int x^2 |f|^2)^{1/2}"}</M>, and similarly{" "}
          <M>{"\\Delta\\xi"}</M> for <M>{"|\\hat f|^2 / 2\\pi"}</M>.
        </p>
      </Definition>

      <Theorem title="the Heisenberg uncertainty principle">
        <p>
          <M>{"\\Delta x \\cdot \\Delta \\xi \\ge \\tfrac12"}</M>, with equality exactly for the Gaussians{" "}
          <M>{"c\\, e^{-x^2/2s^2}"}</M>. In quantum mechanics, with momentum <M>{"p = \\hbar \\xi"}</M>, this is{" "}
          <M>{"\\Delta x\\, \\Delta p \\ge \\hbar/2"}</M>.
        </p>
      </Theorem>

      <Example title="a definite integral for free">
        <p>
          The box <M>{"\\mathbf 1_{[-1, 1]}"}</M> has transform <M>{"2 \\sin \\xi / \\xi"}</M>. Plancherel gives{" "}
          <M>{"\\int 4 \\sin^2 \\xi / \\xi^2\\, d\\xi = 2\\pi \\cdot 2"}</M>, so{" "}
          <M>{"\\int_{-\\infty}^{\\infty} \\frac{\\sin^2 \\xi}{\\xi^2}\\, d\\xi = \\pi"}</M>.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "planch",
      rung: "check",
      prompt: <p>With f̂(ξ) = ∫ f(x) exp(−ixξ) dx, what does Plancherel&rsquo;s theorem say?</p>,
      answer: { kind: "choice", options: ["∫|f̂|² = 2π ∫|f|²", "∫|f̂| = ∫|f|", "f̂ = f", "∫ f̂ = f(0)"], correct: [0] },
    },
    {
      key: "eq",
      rung: "check",
      prompt: <p>Which functions give equality in the uncertainty principle?</p>,
      answer: { kind: "choice", options: ["Gaussians", "Boxes", "Two-sided exponentials", "None"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the two-sided exponential. What is Δx · Δξ, to two decimal places?</p>,
      answer: { kind: "numeric", value: 0.71, tolerance: 0.01 },
    },
    {
      key: "sinc",
      rung: "apply",
      prompt: <p>Use the example to give the value of the integral of sin²(ξ)/ξ² over the whole line, to three decimal places.</p>,
      answer: { kind: "numeric", value: 3.142, tolerance: 0.002 },
    },
    {
      key: "box",
      rung: "apply",
      prompt: <p>Why is Δξ infinite for the box?</p>,
      answer: { kind: "choice", options: ["Its transform squared decays only like 1/ξ², so ξ² times it is not integrable", "Its transform is zero", "The box is not square-integrable", "Its transform is a Gaussian"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the uncertainty principle for real f in the Schwartz space with ∫ f² = 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes 1 = ∫ f² = −∫ x (f²)′ = −2 ∫ x f f′, integrating by parts.",
          "Applies Cauchy–Schwarz: 1 ≤ 2 √(∫ x² f²) √(∫ f′²).",
          "Uses Plancherel and the derivative rule to write ∫ f′² as (1/2π)∫ ξ² |f̂|², giving Δx Δξ ≥ ½.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a non-zero function and its Fourier transform both vanish outside a bounded interval? Explain your thinking.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that if f vanishes outside [−R, R], then f̂(ξ) = ∫ f(x) exp(−ixξ) dx extends to an entire function of ξ.",
          "Concludes an entire function vanishing on an interval is zero, so no.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The transform now acts on Schwartz functions and on square-integrable ones. But the most useful objects, the
        constant 1, the point mass at 0, the periodic comb, lie in neither. They are distributions, and their transforms
        are defined by duality.
      </p>
      <p>Next, tempered distributions.</p>
    </>
  ),
};
