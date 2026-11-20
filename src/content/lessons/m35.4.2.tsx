import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ThetaXiViz } from "@/components/viz/ThetaXiViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.4.2",
  minutes: 90,
  links: {
    revisits: ["m35.4.1", "m13.7.1", "m35.3.1"],
    foreshadows: ["m35.4.3", "m28.3.3", "m28.2.3"],
  },

  puzzle: (
    <>
      <p>
        ζ(2) = π²/6 and ζ(−1) = −1/12. These look unrelated, yet one determines the other. In his only paper on number
        theory, Riemann showed in 1859 that ζ(s) and ζ(1 − s) are tied together by an exact formula. Where does such a
        symmetry come from?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare θ(t) with θ(1/t)/√t, then look at the completed function ξ on the real line.</p>
      <ThetaXiViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the theta function">
        <p>
          Let <M>{"\\theta(t) = \\sum_{n \\in \\mathbb{Z}} e^{-\\pi n^2 t}"}</M> for t &gt; 0. The Gaussian{" "}
          <M>{"e^{-\\pi x^2}"}</M> is its own Fourier transform, so Poisson summation gives the transformation law{" "}
          <M>{"\\theta(1/t) = \\sqrt{t}\\,\\theta(t)"}</M>.
        </p>
      </Definition>

      <Theorem title="Riemann’s functional equation (1859)">
        <p>
          The completed zeta function <M>{"\\xi(s) = \\tfrac12 s(s-1)\\pi^{-s/2}\\Gamma(s/2)\\zeta(s)"}</M> is entire and
          satisfies <M>{"\\xi(s) = \\xi(1-s)"}</M>. Equivalently,{" "}
          <M>{"\\zeta(s) = 2^s \\pi^{s-1} \\sin(\\pi s/2)\\,\\Gamma(1-s)\\,\\zeta(1-s)"}</M>.
        </p>
      </Theorem>

      <Remark title="the proof">
        <p>
          With <M>{"\\psi(t) = (\\theta(t) - 1)/2 = \\sum_{n \\ge 1} e^{-\\pi n^2 t}"}</M>, integrating term by term gives{" "}
          <M>{"\\pi^{-s/2}\\Gamma(s/2)\\zeta(s) = \\int_0^\\infty \\psi(t)\\, t^{s/2 - 1}\\,dt"}</M> for Re s &gt; 1. Split the
          integral at t = 1 and use the transformation law on [0, 1]. The result is{" "}
          <M>{"-\\frac1s - \\frac1{1-s} + \\int_1^\\infty \\psi(t)\\big(t^{s/2} + t^{(1-s)/2}\\big)\\frac{dt}{t}"}</M>, which
          converges for every s and is visibly unchanged by s ↦ 1 − s.
        </p>
      </Remark>

      <Example title="consequences">
        <p>
          The factor <M>{"\\sin(\\pi s/2)"}</M> produces the trivial zeros at −2, −4, … Every other zero of ζ is a zero of ξ,
          and lies in the critical strip 0 ≤ Re s ≤ 1. Since ξ is real on the real line, these zeros are symmetric under
          both s ↦ 1 − s and complex conjugation, so they come in sets of four, or pairs on the line Re s = ½.
        </p>
      </Example>

      <Theorem title="Dirichlet L-functions">
        <p>
          For a primitive character χ mod q with χ(−1) = (−1) to the power a, a = 0 or 1, the function{" "}
          <M>{"\\Lambda(s, \\chi) = (q/\\pi)^{(s+a)/2}\\Gamma((s+a)/2)L(s, \\chi)"}</M> satisfies{" "}
          <M>{"\\Lambda(s, \\chi) = \\varepsilon(\\chi)\\Lambda(1-s, \\overline\\chi)"}</M>, with a root number{" "}
          <M>{"\\varepsilon(\\chi)"}</M> of absolute value 1 built from a Gauss sum. The proof uses a twisted theta function.
        </p>
      </Theorem>
    </>
  ),

  practice: [
    {
      key: "line",
      rung: "check",
      prompt: <p>About which line is ξ(s) symmetric?</p>,
      answer: { kind: "choice", options: ["Re s = ½", "Re s = 1", "Re s = 0", "The real axis only"], correct: [0] },
    },
    {
      key: "theta",
      rung: "check",
      prompt: <p>Which identity is the engine of Riemann&rsquo;s proof?</p>,
      answer: { kind: "choice", options: ["θ(1/t) = √t θ(t)", "Γ(s + 1) = sΓ(s)", "ζ(2) = π²/6", "The Euler product for ζ"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set t = 0.25. What is θ(t), to three decimal places?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "minus1",
      rung: "apply",
      prompt: <p>Use ζ(s) = 2ˢ πˢ⁻¹ sin(πs/2) Γ(1 − s) ζ(1 − s) at s = −1, with ζ(2) = π²/6. What is ζ(−1)?</p>,
      answer: { kind: "choice", options: ["−1/12", "1/12", "−1/2", "π²/6"], correct: [0] },
    },
    {
      key: "four",
      rung: "apply",
      prompt: <p>If ζ had a zero at 0.6 + 20i, which of these would also have to be a zero?</p>,
      answer: { kind: "choice", options: ["0.4 + 20i", "0.6 + 40i", "1.6 + 20i", "−0.6 + 20i"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use the functional equation to show that ζ(−2k) = 0 for every integer k ≥ 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Substitutes s = −2k into ζ(s) = 2ˢ πˢ⁻¹ sin(πs/2) Γ(1 − s) ζ(1 − s).",
          "Notes sin(−πk) = 0 while Γ(1 + 2k) and ζ(1 + 2k) are finite.",
          "Concludes ζ(−2k) = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the zeros of ξ are exactly the zeros of ζ that are not trivial zeros.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the factor s(s − 1) cancels the pole of ζ at 1 and the pole of Γ(s/2) at 0.",
          "Notes that the other poles of Γ(s/2), at −2, −4, …, cancel the trivial zeros, and that Γ never vanishes.",
          "Concludes that ξ vanishes exactly at the remaining zeros of ζ. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The functional equation confines the interesting zeros to the strip and makes them symmetric about Re s = ½. Riemann
        guessed, in a passing remark, that they all lie on that line.
      </p>
      <p>Next, zeros and the Riemann hypothesis.</p>
    </>
  ),
};
