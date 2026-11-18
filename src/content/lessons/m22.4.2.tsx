import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { DensityRatioViz } from "@/components/viz/DensityRatioViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.4.2",
  minutes: 90,
  links: {
    revisits: ["m22.4.1", "m22.2.2", "m22.2.3"],
    foreshadows: ["m22.4.3", "m22.5.3", "m22.4.4"],
  },

  puzzle: (
    <>
      <p>
        Mass is spread along a wire. If you know the mass of every piece, can you recover a density, mass per unit length, at
        each point? Sometimes not: a single bead of mass 1 at one point has no density with respect to length. What exactly
        must hold for a density to exist?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare two measures on eight points, and switch some of μ&rsquo;s masses to 0.</p>
      <DensityRatioViz />
    </>
  ),

  theory: (
    <>
      <Definition title="absolute continuity">
        <p>
          A measure <M>{"\\nu"}</M> is <strong>absolutely continuous</strong> with respect to <M>{"\\mu"}</M>, written{" "}
          <M>{"\\nu \\ll \\mu"}</M>, if <M>{"\\mu(A) = 0"}</M> implies <M>{"\\nu(A) = 0"}</M>. Any{" "}
          <M>{"\\nu(A) = \\int_A f \\, d\\mu"}</M> with <M>{"f \\ge 0"}</M> is absolutely continuous, since integrals over null
          sets vanish.
        </p>
      </Definition>

      <Theorem title="Radon-Nikodym theorem">
        <p>
          If <M>{"\\mu"}</M> and <M>{"\\nu"}</M> are σ-finite and <M>{"\\nu \\ll \\mu"}</M>, there is a measurable{" "}
          <M>{"f \\ge 0"}</M>, unique <M>{"\\mu"}</M>-almost everywhere, with
        </p>
        <MD>{"\\nu(A) = \\int_A f \\, d\\mu \\quad \\text{for all measurable } A."}</MD>
        <p>
          It is written <M>{"f = d\\nu / d\\mu"}</M>, the <strong>Radon-Nikodym derivative</strong>, and obeys a chain rule:{" "}
          <M>{"\\int g \\, d\\nu = \\int g \\, \\frac{d\\nu}{d\\mu} \\, d\\mu"}</M>.
        </p>
      </Theorem>

      <Example title="the idea of the proof">
        <p>
          For finite measures, consider all <M>{"g \\ge 0"}</M> with <M>{"\\int_A g \\, d\\mu \\le \\nu(A)"}</M> for every{" "}
          <M>A</M>, and take <M>f</M> with the largest integral, which exists by monotone convergence. If{" "}
          <M>{"\\nu - f\\mu"}</M> were not zero, the Hahn decomposition of{" "}
          <M>{"\\nu - f\\mu - \\varepsilon\\mu"}</M> would find a set where <M>f</M> could be increased, using{" "}
          <M>{"\\nu \\ll \\mu"}</M>. Von Neumann gave a second proof using Hilbert space.
        </p>
      </Example>

      <Remark title="Lebesgue decomposition and probability">
        <p>
          Any σ-finite <M>{"\\nu"}</M> splits uniquely as <M>{"\\nu_a + \\nu_s"}</M> with <M>{"\\nu_a \\ll \\mu"}</M> and{" "}
          <M>{"\\nu_s \\perp \\mu"}</M>. A point mass <M>{"\\delta_0"}</M> is singular to Lebesgue measure, so has no density.
          In probability, densities of random variables are Radon-Nikodym derivatives, and so is conditional expectation.
          σ-finiteness is needed: Lebesgue measure on <M>{"[0, 1]"}</M> is absolutely continuous with respect to counting
          measure, yet has no density, since the density would have to be 0 at every point.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ac",
      rung: "check",
      prompt: <p>What does ν ≪ μ mean?</p>,
      answer: { kind: "choice", options: ["Every μ-null set is ν-null", "ν(A) ≤ μ(A) for every A", "ν and μ live on disjoint sets", "ν and μ have the same null sets and the same total"], correct: [0] },
    },
    {
      key: "rn",
      rung: "check",
      prompt: <p>What does the Radon-Nikodym theorem give, for σ-finite ν ≪ μ?</p>,
      answer: { kind: "choice", options: ["A density f ≥ 0 with ν(A) equal to the integral of f over A for all A", "A Hahn decomposition", "That ν = μ", "A bound ν ≤ μ"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s starting position, what is dν/dμ at x₁?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "dirac",
      rung: "apply",
      prompt: <p>Does the point mass δ₀ on ℝ have a density with respect to Lebesgue measure?</p>,
      answer: { kind: "choice", options: ["No: {0} is Lebesgue-null but has δ₀-measure 1", "Yes, the constant 1", "Yes, a very tall function near 0", "Only on [0, 1]"], correct: [0] },
    },
    {
      key: "calc",
      rung: "apply",
      prompt: <p>On [0, 1], ν has density 3x² with respect to Lebesgue measure. What is ν([0, 1])?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if ν(A) is the integral over A of f dμ, with f ≥ 0 measurable, then ν ≪ μ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes A with μ(A) = 0.",
          "Notes f times the indicator of A is 0 almost everywhere, or that each simple function below it has integral 0.",
          "Concludes the integral over A is 0, so ν(A) = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why Lebesgue measure on [0, 1] has no density with respect to counting measure on [0, 1], though it is absolutely continuous with respect to it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes absolute continuity holds because only the empty set is null for counting measure.",
          "Shows any density f would need f(x) = λ({x}) = 0 at every point, giving the zero measure.",
          "Any reasonable answer earns full credit, especially one noting counting measure on [0, 1] is not σ-finite.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        On the line, a measure with a density has a distribution function F whose derivative should be the density. Is the
        derivative of an integral the integrand, even for wildly discontinuous functions?
      </p>
      <p>
        Next, the Lebesgue differentiation theorem: averages over shrinking intervals converge to the function almost
        everywhere, via the Vitali covering lemma and the Hardy-Littlewood maximal function.
      </p>
    </>
  ),
};
