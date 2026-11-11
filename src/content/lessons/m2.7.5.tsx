import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { QuadratureViz } from "@/components/viz/QuadratureViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.7.5",
  minutes: 80,
  links: {
    revisits: ["m2.6.1", "m2.5.2"],
    foreshadows: ["m19.4.2", "m19.4.3"],
  },

  puzzle: (
    <>
      <p>
        The bell curve <M>{"e^{-x^2}"}</M> appears all over statistics, yet no formula built from the familiar functions
        is its antiderivative. Methods developed by Joseph Liouville in the 1830s prove that none can be found,
        however clever the search.
      </p>
      <p>
        So how do the tables in statistics books, and the computers that replaced them, know that{" "}
        <M>{"\\int_0^2 e^{-x^2}\\,dx \\approx 0.8820814"}</M>? And how can they be sure of the digits?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Go back to Riemann sums, but approximate the curve more cleverly. Rectangles fit a constant to each piece;
        trapezia fit a straight line; Simpson&rsquo;s rule fits a parabola through three points. Better fits give errors
        that shrink much faster as the pieces get smaller. Below, watch the error column as n doubles.
      </p>
      <QuadratureViz />
    </>
  ),

  theory: (
    <>
      <Definition title="three rules">
        <p>
          Divide <M>{"[a, b]"}</M> into n pieces of width <M>{"h = (b - a)/n"}</M>, with points{" "}
          <M>{"x_i = a + ih"}</M>, and write <M>{"f_i = f(x_i)"}</M>.
        </p>
        <ul>
          <li>
            <strong>Midpoint rule</strong>: <M>{"M_n = h\\,[f(m_1) + \\cdots + f(m_n)]"}</M>, where <M>{"m_i"}</M> is the
            middle of the i-th piece.
          </li>
          <li>
            <strong>Trapezium rule</strong>: <M>{"T_n = h\\,[\\tfrac{1}{2}f_0 + f_1 + \\cdots + f_{n-1} + \\tfrac{1}{2}f_n]"}</M>.
          </li>
          <li>
            <strong>Simpson&rsquo;s rule</strong>, for even n:{" "}
            <M>{"S_n = \\tfrac{h}{3}\\,[f_0 + 4f_1 + 2f_2 + 4f_3 + \\cdots + 4f_{n-1} + f_n]"}</M>.
          </li>
        </ul>
      </Definition>

      <Theorem title="error bounds">
        <p>
          If <M>{"|f''| \\le K_2"}</M> on <M>{"[a, b]"}</M>, then
        </p>
        <MD>{"|T_n - I| \\le \\frac{K_2 (b - a)^3}{12 n^2}, \\qquad |M_n - I| \\le \\frac{K_2 (b - a)^3}{24 n^2},"}</MD>
        <p>
          where I is the integral. If <M>{"|f^{(4)}| \\le K_4"}</M>, then{" "}
          <M>{"|S_n - I| \\le \\dfrac{K_4 (b - a)^5}{180 n^4}"}</M>.
        </p>
      </Theorem>
      <p>
        We do not prove these here; the proofs use Taylor&rsquo;s theorem. The powers of n are the point. Doubling n divides
        the trapezium and midpoint errors by about 4, and Simpson&rsquo;s by about 16, exactly as the visualisation shows
        for smooth functions.
      </p>

      <Remark title="why the errors have opposite signs">
        <p>
          For a convex function, a chord lies above the curve, so the trapezium rule overestimates. The tangent at the
          midpoint lies below the curve, and the midpoint rectangle has the same area as the trapezium under that tangent,
          so the midpoint rule underestimates. For concave functions both reverse. In either case the midpoint error is
          about half the trapezium error, and of the opposite sign.
        </p>
      </Remark>

      <Example title="Simpson from the other two">
        <p>
          Since <M>{"T_n - I \\approx -2(M_n - I)"}</M>, the combination{" "}
          <M>{"\\tfrac{1}{3}(2M_n + T_n)"}</M> cancels the main error term. Written out, it is exactly{" "}
          <M>{"S_{2n}"}</M>. Simpson&rsquo;s rule is what you get by playing the two simpler rules off against each other.
        </p>
      </Example>

      <Example title="how many pieces?">
        <p>
          To find <M>{"\\int_1^2 dx/x = \\ln 2"}</M> to within <M>{"10^{-6}"}</M> by the trapezium rule: here{" "}
          <M>{"f'' = 2/x^3 \\le 2"}</M>, so we need <M>{"2/(12 n^2) < 10^{-6}"}</M>, that is{" "}
          <M>{"n \\ge 409"}</M>. With Simpson&rsquo;s rule, <M>{"f^{(4)} = 24/x^5 \\le 24"}</M>, and{" "}
          <M>{"24/(180 n^4) < 10^{-6}"}</M> needs only <M>{"n \\ge 20"}</M>.
        </p>
      </Example>

      <Remark title="when the bounds fail">
        <p>
          For <M>{"\\sqrt{x}"}</M> on <M>{"[0, 1]"}</M>, the derivatives are unbounded at 0, and the theorems say nothing.
          The visualisation shows the price: every rule converges, but Simpson&rsquo;s rule loses its advantage. Error
          bounds are only as good as the smoothness of the function they assume.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "trap",
      rung: "check",
      prompt: (
        <p>
          Use the trapezium rule with n = 2 to estimate <M>{"\\int_0^2 x^2\\,dx"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "factor",
      rung: "check",
      prompt: <p>For a smooth function, doubling n in the trapezium rule divides the error by about how much?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "mid",
      rung: "apply",
      prompt: (
        <p>
          Use the midpoint rule with n = 2 to estimate <M>{"\\int_0^2 x^2\\,dx"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 2.5 },
    },
    {
      key: "simpson",
      rung: "apply",
      prompt: (
        <p>
          Use Simpson&rsquo;s rule with n = 2 to estimate <M>{"\\int_0^2 x^3\\,dx"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "howmany",
      rung: "apply",
      prompt: (
        <p>
          Using the bound <M>{"K_2(b - a)^3/(12n^2)"}</M>, what is the smallest n that guarantees the trapezium rule finds{" "}
          <M>{"\\int_0^1 \\sin x\\,dx"}</M> to within 0.001? (Use <M>{"K_2 = 1"}</M>.)
        </p>
      ),
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "cubic",
      rung: "prove",
      prompt: (
        <p>
          Show that Simpson&rsquo;s rule with n = 2 is exact for every cubic polynomial on <M>{"[-1, 1]"}</M>. (Check it for{" "}
          <M>{"1, x, x^2"}</M> and <M>{"x^3"}</M>.)
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes the rule on [−1, 1] with h = 1 as (1/3)[f(−1) + 4f(0) + f(1)].",
          "Checks 1, x, x² and x³: the rule gives 2, 0, 2/3, 0, matching the integrals.",
          "Concludes by linearity that it is exact for every cubic.",
        ],
      },
    },
    {
      key: "convex",
      rung: "stretch",
      prompt: (
        <p>
          Let f be convex on <M>{"[a, b]"}</M>. Explain why <M>{"M_n \\le I \\le T_n"}</M>. Then use this with n = 1 to
          show that <M>{"\\tfrac{2}{3} \\le \\ln 2 \\le \\tfrac{3}{4}"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "On each piece, the chord lies above the graph, so the trapezium area is at least the integral.",
          "The tangent at the midpoint lies below the graph, and the trapezium under the tangent has the same area as the midpoint rectangle.",
          "Applies this to 1/x on [1, 2]: M₁ = 2/3 and T₁ = 3/4.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the trapezium, midpoint and Simpson's rules approximate an integral, and why Simpson's rule improves so much faster as the pieces shrink.",

  glimpse: (
    <p>
      Numerical Analysis proves the error bounds, builds rules of every order, and meets Gaussian quadrature, which chooses
      the sample points themselves so cleverly that n points integrate polynomials of degree 2n − 1 exactly. Adaptive
      methods, which spend more pieces where the function is rough, are what computers actually use.
    </p>
  ),
};
