import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { RieszThorinViz } from "@/components/viz/RieszThorinViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.3.1",
  minutes: 90,
  links: {
    revisits: ["m34.2.3", "m22.5.1", "m23.1.2"],
    foreshadows: ["m34.3.2", "m34.4.2", "m34.5.1"],
  },

  puzzle: (
    <>
      <p>
        On the circle, the map from a function to its Fourier coefficients is bounded from L¹ to bounded sequences, since
        each coefficient is an average of f, and from L² to square-summable sequences, by Parseval. What happens for the
        exponents in between, such as p = 4/3? Must we start again from scratch, or do the two endpoint results already
        decide it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a matrix and an exponent, and compare its operator norm with the bound from its two endpoint norms.</p>
      <RieszThorinViz />
    </>
  ),

  theory: (
    <>
      <Definition title="operators of strong type">
        <p>
          A linear operator T is <strong>bounded from <M>{"L^p"}</M> to <M>{"L^q"}</M></strong>, or of strong type (p, q),
          if <M>{"\\|Tf\\|_q \\le M \\|f\\|_p"}</M> for all f. The least such M is its norm. For a matrix acting on{" "}
          <M>{"\\ell^p"}</M>, the norm on <M>{"\\ell^1"}</M> is the largest column sum of absolute values, and on{" "}
          <M>{"\\ell^\\infty"}</M> the largest row sum.
        </p>
      </Definition>

      <Theorem title="the Riesz–Thorin theorem">
        <p>
          Let <M>{"1 \\le p_0, p_1, q_0, q_1 \\le \\infty"}</M>, and let T be linear and bounded from{" "}
          <M>{"L^{p_0}"}</M> to <M>{"L^{q_0}"}</M> with norm <M>{"M_0"}</M> and from <M>{"L^{p_1}"}</M> to{" "}
          <M>{"L^{q_1}"}</M> with norm <M>{"M_1"}</M>, on complex-valued functions. For 0 &lt; θ &lt; 1 define p and q by{" "}
          <M>{"\\frac1p = \\frac{1 - \\theta}{p_0} + \\frac{\\theta}{p_1}"}</M> and similarly for q. Then T is bounded
          from <M>{"L^p"}</M> to <M>{"L^q"}</M> with norm at most <M>{"M_0^{1-\\theta} M_1^{\\theta}"}</M>.
        </p>
      </Theorem>

      <Remark title="the proof">
        <p>
          Thorin&rsquo;s proof uses complex analysis. For simple functions f and g, build an analytic family{" "}
          <M>{"F(z) = \\int T(f_z) g_z"}</M> on the strip 0 ≤ Re z ≤ 1, arranged so that |F| ≤ <M>{"M_0"}</M> on the left
          edge and ≤ <M>{"M_1"}</M> on the right. Hadamard&rsquo;s <strong>three lines lemma</strong>, a maximum
          principle, then bounds |F(θ)| by <M>{"M_0^{1-\\theta}M_1^\\theta"}</M>.
        </p>
      </Remark>

      <Example title="Hausdorff–Young">
        <p>
          The Fourier coefficient map has norm 1 from <M>{"L^1(\\mathbb T)"}</M> to <M>{"\\ell^\\infty"}</M> and from{" "}
          <M>{"L^2"}</M> to <M>{"\\ell^2"}</M>, using normalised measure. Interpolating gives{" "}
          <M>{"\\|\\hat f\\|_{\\ell^{p'}} \\le \\|f\\|_{L^p}"}</M> for 1 ≤ p ≤ 2, where{" "}
          <M>{"1/p + 1/p' = 1"}</M>. The same method gives Young&rsquo;s inequality for convolutions.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What does the Riesz–Thorin theorem deduce boundedness on Lᵖ from?</p>,
      answer: { kind: "choice", options: ["Boundedness at two endpoint exponents", "Boundedness on L² alone", "Continuity of T", "Compactness of T"], correct: [0] },
    },
    {
      key: "three",
      rung: "check",
      prompt: <p>Which result from complex analysis drives the proof?</p>,
      answer: { kind: "choice", options: ["Hadamard’s three lines lemma", "Cauchy’s integral formula for discs", "The residue theorem", "Picard’s theorem"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose matrix B and set 1/p = 0.5. What is the interpolation bound, to three decimal places?</p>,
      answer: { kind: "numeric", value: 3.464, tolerance: 0.002 },
    },
    {
      key: "theta",
      rung: "apply",
      prompt: <p>Interpolating between p₀ = 1 and p₁ = 2, which θ gives p = 4/3?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "conj",
      rung: "apply",
      prompt: <p>Hausdorff–Young with p = 4/3 bounds the Fourier coefficients in the sequence space with exponent q. What is q?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that a matrix T satisfies ‖Tx‖₁ ≤ C‖x‖₁, where C is the largest column sum of the |Tᵢⱼ|.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes ‖Tx‖₁ as the sum over i of |∑ⱼ Tᵢⱼ xⱼ|, at most the sum over i and j of |Tᵢⱼ||xⱼ|.",
          "Swaps the order of summation to get the sum over j of |xⱼ| times the j-th column sum.",
          "Bounds each column sum by C to conclude.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use Riesz–Thorin to bound the ℓ² norm of a matrix in terms of its largest row sum R and largest column sum C.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes the endpoints ℓ∞ with norm R and ℓ¹ with norm C, and θ = ½.",
          "Concludes that the ℓ² norm is at most √(RC), the Schur test.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Riesz–Thorin needs linear operators and genuine bounds at the endpoints. Many important operators, such as the
        maximal function, are not linear and fail to be bounded at an endpoint. A weaker endpoint condition is enough.
      </p>
      <p>Next, Marcinkiewicz.</p>
    </>
  ),
};
