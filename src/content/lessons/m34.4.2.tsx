import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CZDecompViz } from "@/components/viz/CZDecompViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.4.2",
  minutes: 90,
  links: {
    revisits: ["m34.4.1", "m34.3.2", "m22.4.3"],
    foreshadows: ["m34.4.3", "m23.6.3", "m34.5.2"],
  },

  puzzle: (
    <>
      <p>
        Convolution with 1/x is bounded on L², thanks to the Fourier transform. But 1/x is not integrable, so nothing
        obvious controls it on L¹ or on Lᵖ for other p. How can a function be split so that the part we understand and the
        part we do not each become manageable?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a height α, and see the maximal dyadic intervals on which the average of f exceeds α.</p>
      <CZDecompViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Calderón–Zygmund decomposition">
        <p>
          Let <M>{"f \\in L^1(\\mathbb{R}^n)"}</M> and α &gt; 0. There are disjoint dyadic cubes <M>{"Q_j"}</M> with{" "}
          <M>{"\\alpha < \\frac{1}{|Q_j|}\\int_{Q_j} |f| \\le 2^n \\alpha"}</M>, with <M>{"|f| \\le \\alpha"}</M> almost
          everywhere outside their union, and with <M>{"\\sum |Q_j| \\le \\|f\\|_1 / \\alpha"}</M>. The cubes are the
          maximal dyadic cubes whose average exceeds α, found by subdividing until the average first goes above it.
        </p>
      </Theorem>

      <Definition title="good and bad parts">
        <p>
          Put g = f outside the cubes and g = the average of f on each <M>{"Q_j"}</M>. Then{" "}
          <M>{"|g| \\le 2^n \\alpha"}</M> and <M>{"\\|g\\|_1 \\le \\|f\\|_1"}</M>. The rest, b = f − g, is a sum of pieces{" "}
          <M>{"b_j"}</M>, each supported on <M>{"Q_j"}</M> with integral 0.
        </p>
      </Definition>

      <Definition title="Calderón–Zygmund operators">
        <p>
          Let T be convolution with a kernel K satisfying <M>{"|K(x)| \\le C|x|^{-n}"}</M>, Hörmander&rsquo;s condition{" "}
          <M>{"\\int_{|x| > 2|y|} |K(x - y) - K(x)|\\, dx \\le C"}</M>, and bounded on <M>{"L^2"}</M>. The Hilbert transform
          and the Riesz transforms are the basic examples.
        </p>
      </Definition>

      <Theorem title="Calderón and Zygmund (1952)">
        <p>
          Such an operator is of weak type (1, 1), and so bounded on <M>{"L^p"}</M> for 1 &lt; p ≤ 2 by interpolation and
          for 2 ≤ p &lt; ∞ by duality.
        </p>
      </Theorem>

      <Remark title="why the split works">
        <p>
          For the good part, use the <M>{"L^2"}</M> bound and Chebyshev: <M>{"\\|g\\|_2^2 \\le 2^n \\alpha \\|f\\|_1"}</M>.
          For the bad part, discard the doubled cubes, whose total measure is at most a constant times{" "}
          <M>{"\\|f\\|_1/\\alpha"}</M>. Away from them, since each <M>{"b_j"}</M> has mean zero, one may subtract the kernel
          at the centre of the cube, and Hörmander&rsquo;s condition bounds what is left.
        </p>
      </Remark>

      <Example title="in elliptic equations">
        <p>
          Second derivatives of the solution of Δu = f are Calderón–Zygmund operators applied to f. So{" "}
          <M>{"f \\in L^p"}</M> with 1 &lt; p &lt; ∞ gives all second derivatives of u in <M>{"L^p"}</M>, a fact that fails
          for p = 1 and p = ∞.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "avg",
      rung: "check",
      prompt: <p>What is true of the average of |f| over each selected cube in ℝⁿ?</p>,
      answer: { kind: "choice", options: ["It lies above α and at most 2ⁿα", "It is exactly α", "It is below α", "It is at least 2ⁿα"], correct: [0] },
    },
    {
      key: "bad",
      rung: "check",
      prompt: <p>Which property of each bad piece is used to handle it away from its cube?</p>,
      answer: { kind: "choice", options: ["It has integral zero", "It is bounded by α", "It is continuous", "It is positive"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set α = 2. How many intervals are selected?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "len",
      rung: "apply",
      prompt: <p>On ℝ, if ‖f‖₁ = 3 and α = 6, what bound holds for the total length of the selected intervals?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "plane",
      rung: "apply",
      prompt: <p>In ℝ², with α = 1, what is the largest possible average of |f| over a selected square?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the selected cubes satisfy Σ|Qⱼ| ≤ ‖f‖₁/α.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that the average over each Qⱼ exceeds α, so |Qⱼ| < (1/α) ∫ over Qⱼ of |f|.",
          "Sums over j, using that the cubes are disjoint, to get at most (1/α) times the integral of |f| over their union.",
          "Bounds this by ‖f‖₁/α.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the average over a selected cube is at most 2ⁿα.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the parent cube was not selected, so its average is at most α.",
          "Uses that the parent has measure 2ⁿ|Q|, so the integral over Q is at most 2ⁿ|Q|α.",
          "Divides by |Q|. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The model Calderón–Zygmund operator is one-dimensional, and older than the theory: it takes the real part of a
        boundary value of an analytic function to its imaginary part.
      </p>
      <p>Next, the Hilbert transform.</p>
    </>
  ),
};
