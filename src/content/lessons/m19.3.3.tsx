import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ChebyshevNodesViz } from "@/components/viz/ChebyshevNodesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.3.3",
  minutes: 90,
  links: {
    revisits: ["m19.3.1", "m6.8.4", "m8.3.2"],
    foreshadows: ["m19.4.3", "m19.5.4", "m23.2.1"],
  },

  puzzle: (
    <>
      <p>
        Among all polynomials xⁿ + (lower terms), which one stays closest to zero on [−1, 1]? It seems a curious puzzle, but
        its answer tells you where to put interpolation nodes, how to approximate functions in computer libraries, and how
        to accelerate iterative methods.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the node polynomials for equally spaced and Chebyshev nodes as the degree grows.</p>
      <ChebyshevNodesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Chebyshev polynomials">
        <p>
          <M>{"T_n(x) = \\cos(n\\arccos x)"}</M> for x in [−1, 1]. The identity{" "}
          <M>{"\\cos((n+1)\\theta) + \\cos((n-1)\\theta) = 2\\cos\\theta\\cos n\\theta"}</M> gives the recurrence
        </p>
        <MD>{"T_0 = 1,\\quad T_1 = x,\\quad T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x),"}</MD>
        <p>
          so <M>{"T_n"}</M> is a polynomial of degree n with leading coefficient <M>{"2^{n-1}"}</M>. It takes the values ±1
          alternately at n + 1 points, and its zeros are <M>{"\\cos\\frac{(2k-1)\\pi}{2n}"}</M>.
        </p>
      </Definition>

      <Theorem title="the minimax property">
        <p>
          Among monic polynomials of degree n, <M>{"2^{1-n}T_n"}</M> has the smallest maximum absolute value on [−1, 1], namely{" "}
          <M>{"2^{1-n}"}</M>. Proof. If a monic q had a smaller maximum, then <M>{"2^{1-n}T_n - q"}</M>, of degree at most n − 1,
          would alternate in sign at the n + 1 extreme points of <M>{"T_n"}</M> and so have n zeros, which is impossible
          unless it is zero.
        </p>
      </Theorem>

      <Example title="best interpolation nodes">
        <p>
          Interpolation with n + 1 nodes has error <M>{"\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\omega(x)"}</M>. Taking the nodes to be
          the zeros of <M>{"T_{n+1}"}</M> makes <M>{"\\omega = 2^{-n}T_{n+1}"}</M>, the smallest possible maximum. For degree 6
          that is 1/64 ≈ 0.016, against about 0.044 for equally spaced nodes, and the gap widens rapidly with n.
        </p>
      </Example>

      <Remark title="best approximation">
        <p>
          The best uniform approximation <M>{"p^*"}</M> of degree n to a continuous f is characterised by Chebyshev&rsquo;s
          equioscillation theorem: the error attains its maximum with alternating signs at n + 2 points. The Remez algorithm
          finds it. In practice, truncating the expansion <M>{"f = \\sum c_k T_k"}</M> gives nearly the best approximation, and
          the Chebyshev polynomials are orthogonal for the weight <M>{"(1 - x^2)^{-1/2}"}</M>, so the coefficients are easy to
          compute.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which formula defines Tₙ on [−1, 1]?</p>,
      answer: { kind: "choice", options: ["cos(n arccos x)", "sin(n arcsin x)", "xⁿ − 1", "(1 − x²)ⁿ"], correct: [0] },
    },
    {
      key: "minimax",
      rung: "check",
      prompt: <p>What is special about 2¹⁻ⁿTₙ among monic polynomials of degree n?</p>,
      answer: {
        kind: "choice",
        options: [
          "It has the smallest maximum absolute value on [−1, 1].",
          "It has the most real roots.",
          "It is the only one with integer coefficients.",
          "It is always positive.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at degree n = 4, what is the largest |ω(x)| for Chebyshev nodes? Give four decimal places.</p>,
      answer: { kind: "numeric", value: 0.0625, tolerance: 0.0001 },
    },
    {
      key: "t3",
      rung: "apply",
      prompt: <p>Use the recurrence to find T₃(x) = 4x³ − 3x. What is T₃(0.5)?</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0.001 },
    },
    {
      key: "zeros",
      rung: "apply",
      prompt: <p>What is the largest zero of T₂(x) = 2x² − 1? Give four decimal places.</p>,
      answer: { kind: "numeric", value: 0.7071, tolerance: 0.0001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the recurrence Tₙ₊₁(x) = 2xTₙ(x) − Tₙ₋₁(x) from the definition Tₙ(cos θ) = cos nθ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses cos((n + 1)θ) + cos((n − 1)θ) = 2 cos θ cos nθ.",
          "Substitutes x = cos θ to get Tₙ₊₁(x) + Tₙ₋₁(x) = 2xTₙ(x).",
          "Rearranges, noting this holds for all x in [−1, 1], hence as a polynomial identity.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does 2¹⁻ⁿTₙ equioscillate, and why is equioscillation the key to the minimax property?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that cos nθ reaches ±1 alternately at θ = kπ/n, giving n + 1 alternation points.",
          "Explains that any polynomial with a smaller maximum would differ from it by a lower-degree polynomial with too many sign changes.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, numerical calculus: approximating derivatives and integrals from function values, and the trade-off between
      truncation and rounding error.
    </p>
  ),
};
