import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { RungeViz } from "@/components/viz/RungeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.3.1",
  minutes: 90,
  links: {
    revisits: ["m19.1.2", "m6.6.3", "m6.8.4"],
    foreshadows: ["m19.3.2", "m19.3.3", "m19.4.2"],
  },

  puzzle: (
    <>
      <p>
        The Weierstrass theorem says every continuous function on [−1, 1] can be approximated as closely as you like by
        polynomials. So surely the polynomial through more and more equally spaced points of a smooth function gets closer
        and closer to it? In 1901 Carl Runge found a gentle, bell-shaped function for which the opposite happens.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Raise the degree with equally spaced nodes, then switch to Chebyshev nodes.</p>
      <RungeViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="existence and uniqueness">
        <p>
          Given distinct nodes <M>{"x_0, \\dots, x_n"}</M> and values <M>{"y_0, \\dots, y_n"}</M>, there is exactly one
          polynomial p of degree at most n with <M>{"p(x_i) = y_i"}</M>. In <strong>Lagrange form</strong>,
        </p>
        <MD>{"p(x) = \\sum_{i=0}^n y_i\\,\\ell_i(x), \\qquad \\ell_i(x) = \\prod_{j \\ne i}\\frac{x - x_j}{x_i - x_j}."}</MD>
        <p>Uniqueness: the difference of two such polynomials has degree at most n and n + 1 roots, so it is zero.</p>
      </Theorem>

      <Theorem title="the error formula">
        <p>If f has n + 1 continuous derivatives, then for each x there is ξ in the span of the nodes and x with</p>
        <MD>{"f(x) - p(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\prod_{i=0}^n (x - x_i)."}</MD>
        <p>
          The error depends on the function, through its high derivatives, and on the nodes, through the node polynomial.
        </p>
      </Theorem>

      <Example title="Runge’s function">
        <p>
          For <M>{"f(x) = 1/(1 + 25x^2)"}</M> the derivatives grow so fast that the error formula does not tend to zero with
          equally spaced nodes. The largest error is about 0.62 at degree 6, 1.92 at degree 10 and 60 at degree 20. With
          Chebyshev nodes <M>{"x_i = \\cos\\frac{(2i+1)\\pi}{2n+2}"}</M> it is 0.26, 0.11 and 0.015.
        </p>
      </Example>

      <Remark title="in practice">
        <p>
          The Lagrange form is rarely evaluated directly; the <strong>barycentric</strong> form is fast and numerically
          stable, and Newton&rsquo;s divided differences allow nodes to be added one at a time. The lesson of Runge&rsquo;s
          example is that high-degree interpolation is safe at well-chosen nodes and dangerous at equally spaced ones; the
          alternative is to use many low-degree pieces.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "unique",
      rung: "check",
      prompt: <p>Through n + 1 points with distinct x values, how many polynomials of degree at most n pass?</p>,
      answer: { kind: "choice", options: ["Exactly one", "None in general", "Infinitely many", "n + 1"], correct: [0] },
    },
    {
      key: "runge",
      rung: "check",
      prompt: <p>What is Runge&rsquo;s phenomenon?</p>,
      answer: {
        kind: "choice",
        options: [
          "Interpolating at equally spaced nodes can give errors that grow with the degree, especially near the ends.",
          "Polynomials cannot approximate continuous functions.",
          "Rounding errors grow during interpolation.",
          "Interpolating polynomials are not unique.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at degree 14, what is the largest error with Chebyshev nodes? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.05, tolerance: 0.01 },
    },
    {
      key: "lag",
      rung: "apply",
      prompt: <p>Find the polynomial of degree at most 2 through (0, 1), (1, 3) and (2, 7). What is its value at x = 3?</p>,
      answer: { kind: "numeric", value: 13 },
    },
    {
      key: "bound",
      rung: "apply",
      prompt: <p>Interpolating sin x at the nodes 0 and π/2 by a straight line, the error formula gives |error| ≤ max|sin″|/2 × |x(x − π/2)|. What is the bound at x = π/4? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.308, tolerance: 0.002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the interpolating polynomial of degree at most n through n + 1 points with distinct x values is unique.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes p and q both interpolate and considers d = p − q, a polynomial of degree at most n.",
          "Notes that d vanishes at the n + 1 distinct nodes.",
          "Concludes that a nonzero polynomial of degree at most n has at most n roots, so d = 0 and p = q.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why do the Chebyshev nodes cluster near the ends of the interval, and why does that help?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the node polynomial for equally spaced nodes is largest near the ends.",
          "Explains that crowding nodes there pulls the node polynomial down where it was large, making it equioscillate.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, splines: instead of one high-degree polynomial, join many cubics smoothly, as draughtsmen once did with thin
      strips of wood.
    </p>
  ),
};
