import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { GaussNodesViz } from "@/components/viz/GaussNodesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.4.3",
  minutes: 90,
  links: {
    revisits: ["m19.4.2", "m19.3.3", "m8.3.2"],
    foreshadows: ["m19.5.3", "m19.6.1", "m23.2.3"],
  },

  puzzle: (
    <>
      <p>
        A rule <M>{"\\sum w_i f(x_i)"}</M> with n nodes has 2n numbers to choose: n nodes and n weights. A polynomial of
        degree 2n − 1 has 2n coefficients. Can a clever choice integrate every such polynomial exactly with only n function
        values? And if so, where must the nodes go?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare Gauss nodes and weights with equally spaced ones as n grows, on a smooth function and on Runge&rsquo;s function.</p>
      <GaussNodesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Legendre polynomials">
        <p>
          Apply Gram–Schmidt to <M>{"1, x, x^2, \\ldots"}</M> with the inner product{" "}
          <M>{"\\langle f, g\\rangle = \\int_{-1}^1 fg\\,dx"}</M>. The result, scaled so that <M>{"P_n(1) = 1"}</M>, is the
          family of Legendre polynomials: <M>{"P_n"}</M> has degree n and is orthogonal to every polynomial of lower degree.
          It has n distinct real zeros in (−1, 1).
        </p>
      </Definition>

      <Theorem title="Gauss–Legendre quadrature">
        <p>
          Let <M>{"x_1, \\ldots, x_n"}</M> be the zeros of <M>{"P_n"}</M> and <M>{"w_i = \\int_{-1}^1 \\ell_i(x)\\,dx"}</M>, the
          interpolatory weights. Then the rule is exact for every polynomial of degree at most 2n − 1, and no n-point rule
          does better. Proof. Divide: <M>{"f = qP_n + r"}</M> with q and r of degree below n. Then{" "}
          <M>{"\\int qP_n = 0"}</M> by orthogonality, the rule gives <M>{"qP_n"}</M> the value 0 because every node is a zero
          of <M>{"P_n"}</M>, and the rule is exact on r because it is interpolatory. For optimality, the rule gives 0 to{" "}
          <M>{"\\prod (x - x_i)^2"}</M>, of degree 2n, whose integral is positive.
        </p>
      </Theorem>

      <Example title="two points">
        <p>
          <M>{"P_2 = \\tfrac12(3x^2 - 1)"}</M> has zeros <M>{"\\pm 1/\\sqrt3"}</M>, with weights 1 and 1. So
        </p>
        <MD>{"\\int_{-1}^1 f\\,dx \\approx f(-1/\\sqrt3) + f(1/\\sqrt3)"}</MD>
        <p>
          is exact for cubics with two evaluations, where Simpson needs three. On [a, b], substitute{" "}
          <M>{"x = \\tfrac{a+b}{2} + \\tfrac{b-a}{2}t"}</M> and multiply the weights by (b − a)/2.
        </p>
      </Example>

      <Remark title="positive weights and convergence">
        <p>
          Applying the rule to <M>{"\\ell_i^2"}</M>, of degree 2n − 2, gives <M>{"w_i = \\int \\ell_i^2 > 0"}</M>. Positive
          weights summing to 2 mean the rule never amplifies errors, and with the Weierstrass theorem they imply convergence
          for every continuous f. In practice the nodes are found as eigenvalues of a symmetric tridiagonal matrix (the
          Golub–Welsch algorithm), and adaptive codes pair a Gauss rule with an extension, Gauss–Kronrod, to estimate their
          own error.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "deg",
      rung: "check",
      prompt: <p>An n-point Gauss–Legendre rule is exact for polynomials up to which degree?</p>,
      answer: { kind: "choice", options: ["2n − 1", "n", "n − 1", "2n"], correct: [0] },
    },
    {
      key: "nodes",
      rung: "check",
      prompt: <p>Where are the nodes of the n-point Gauss–Legendre rule?</p>,
      answer: {
        kind: "choice",
        options: ["At the zeros of the Legendre polynomial of degree n", "Equally spaced on [−1, 1]", "At the extremes of the Chebyshev polynomial", "At random"],
        correct: [0],
      },
    },
    {
      key: "x4",
      rung: "apply",
      prompt: <p>Apply the two-point Gauss rule to <M>{"\\int_{-1}^1 x^4\\,dx"}</M>. Give four decimal places.</p>,
      answer: { kind: "numeric", value: 0.2222, tolerance: 0.0001 },
    },
    {
      key: "map",
      rung: "apply",
      prompt: <p>Use the two-point Gauss rule on [0, 2] to estimate <M>{"\\int_0^2 x^3\\,dx"}</M>.</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0.0001 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the smallest n for which the equally spaced rule has a negative weight?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that no rule with n nodes on [−1, 1] can be exact for all polynomials of degree 2n.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers the polynomial given by the product of the squares (x − xᵢ)², which has degree 2n.",
          "Notes that the rule gives it the value 0, since it vanishes at every node.",
          "Notes that its integral is positive, as it is non-negative and not identically zero, so the rule is not exact.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why Gauss–Legendre quadrature converges for every continuous f on [−1, 1], even though Newton–Cotes does not.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the positivity of the weights and the fact that they sum to 2.",
          "Approximates f uniformly by a polynomial p (Weierstrass) and bounds the rule’s error on f − p by 4 times the uniform error.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, numerical linear algebra begins: Gaussian elimination as a factorisation, and why a computer must swap rows even
      when it need not.
    </p>
  ),
};
