import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { QuadratureErrorViz } from "@/components/viz/QuadratureErrorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.4.2",
  minutes: 85,
  links: {
    revisits: ["m19.4.1", "m2.7.5", "m6.7.3"],
    foreshadows: ["m19.4.3", "m19.6.1", "m19.6.2"],
  },

  puzzle: (
    <>
      <p>
        Simpson&rsquo;s rule fits parabolas through triples of points, yet it integrates every cubic exactly. And the humble
        trapezium rule, which joins points by straight lines, can beat Simpson by ten orders of magnitude on the right
        function. Why should the cruder rule ever win?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare how quickly three composite rules converge on three integrands.</p>
      <QuadratureErrorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Newton–Cotes rules">
        <p>
          Interpolate f at equally spaced points of a panel and integrate the interpolant. With two points this is the
          trapezium rule, with three it is Simpson&rsquo;s rule. A <strong>composite</strong> rule splits [a, b] into n panels
          of width h = (b − a)/n and applies the basic rule on each. The <strong>degree of exactness</strong> is the largest
          degree of polynomial a rule integrates exactly.
        </p>
      </Definition>

      <Theorem title="composite errors">
        <p>For f smooth enough there are points ξ in [a, b] with</p>
        <MD>{"T_n - I = \\frac{(b-a)h^2}{12}f''(\\xi_1),\\qquad M_n - I = -\\frac{(b-a)h^2}{24}f''(\\xi_2),\\qquad S_n - I = \\frac{(b-a)h^4}{180}f^{(4)}(\\xi_3)."}</MD>
        <p>
          On one trapezium panel the interpolation error is <M>{"\\tfrac12 f''(\\xi_x)(x-a)(x-b)"}</M>, and since{" "}
          <M>{"(x-a)(x-b)"}</M> keeps one sign, the mean value theorem for integrals gives{" "}
          <M>{"-\\tfrac{h^3}{12}f''(\\xi)"}</M>; summing n panels gives the first formula. Simpson&rsquo;s rule is symmetric,
          so it is exact for <M>{"x^3"}</M> as well as for quadratics, which lifts it to fourth order.
        </p>
      </Theorem>

      <Example title="a check by hand">
        <p>
          For <M>{"\\int_0^1 x^2\\,dx = \\tfrac13"}</M> with n = 2, the trapezium rule gives{" "}
          <M>{"\\tfrac12(\\tfrac12\\cdot 0 + \\tfrac14 + \\tfrac12\\cdot 1) = 0.375"}</M>, an error of{" "}
          <M>{"\\tfrac{1}{24}"}</M>, exactly <M>{"\\tfrac{1\\cdot(1/2)^2}{12}\\cdot 2"}</M>. Simpson gives{" "}
          <M>{"\\tfrac16(0 + 4\\cdot\\tfrac14 + 1) = \\tfrac13"}</M>, exactly right.
        </p>
      </Example>

      <Remark title="Euler–Maclaurin and periodic functions">
        <p>
          The trapezium error has an expansion in even powers of h whose coefficients involve{" "}
          <M>{"f^{(2k-1)}(b) - f^{(2k-1)}(a)"}</M>. For a smooth periodic function integrated over a period these all vanish,
          so the error falls faster than any power of h: that is the exp(cos x) curve in the visualisation. Applying
          Richardson extrapolation to the expansion gives Romberg integration. When f is not smooth, as √x at 0, no rule
          reaches its nominal order, and adaptive rules that refine near trouble do better.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "deg",
      rung: "check",
      prompt: <p>What is the degree of exactness of Simpson&rsquo;s rule?</p>,
      answer: { kind: "choice", options: ["3", "2", "4", "1"], correct: [0] },
    },
    {
      key: "half",
      rung: "check",
      prompt: <p>For a smooth integrand, halving h divides the composite trapezium error by about how much?</p>,
      answer: { kind: "choice", options: ["4", "2", "8", "16"], correct: [0] },
    },
    {
      key: "trap",
      rung: "apply",
      prompt: <p>Apply the composite trapezium rule with n = 2 to <M>{"\\int_0^2 x^3\\,dx"}</M>.</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0.0001 },
    },
    {
      key: "simp",
      rung: "apply",
      prompt: <p>Apply Simpson&rsquo;s rule with n = 2 to <M>{"\\int_0^2 x^3\\,dx"}</M>.</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0.0001 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which rule is most accurate at n = 64 for exp(cos x) on [0, 2π]?</p>,
      answer: {
        kind: "choice",
        options: ["The trapezium and midpoint rules, which are at rounding level", "Simpson’s rule", "All three are equally poor", "None converges"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the trapezium rule on one panel [a, a + h] has error <M>{"-\\tfrac{h^3}{12}f''(\\xi)"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the linear interpolation error as ½f″(ξₓ)(x − a)(x − a − h).",
          "Notes that (x − a)(x − a − h) does not change sign and applies the mean value theorem for integrals.",
          "Computes the integral of (x − a)(x − a − h), which is −h³/6, and concludes.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does every rule in the visualisation converge only like about <M>{"n^{-3/2}"}</M> for √x on [0, 1]?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the derivatives of √x are unbounded at 0, so the error formulas do not apply.",
          "Locates the dominant error in the first panel, whose contribution scales like h to the power 3/2.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Gaussian quadrature: if you may choose the nodes as well as the weights, n points can integrate polynomials of
      degree 2n − 1 exactly.
    </p>
  ),
};
