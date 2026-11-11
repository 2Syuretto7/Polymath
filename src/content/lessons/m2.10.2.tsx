import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ArcLengthViz } from "@/components/viz/ArcLengthViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.10.2",
  minutes: 80,
  links: {
    revisits: ["m2.8.3", "m2.6.4"],
    foreshadows: ["m5.6.1", "m16.1.2"],
  },

  puzzle: (
    <>
      <p>
        A ruler measures straight lines. How long is a curve? A piece of string laid along it and then pulled straight gives
        an answer, but strings stretch, and a mathematician wants a definition.
      </p>
      <p>
        There is also a debt to pay. Radians were defined as arc length on the unit circle, and the series definition of
        sine and cosine promised that the point <M>{"(\\cos t, \\sin t)"}</M> travels a distance t. That needs a definition of
        distance along a curve.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Mark points along the curve and join them with straight chords. The polygon is shorter than the curve, since a
        chord is the shortest path between its ends, and adding points lengthens it. The length of the curve is what the
        polygons approach. Each chord is the hypotenuse of a tiny right triangle with sides <M>{"\\Delta x"}</M> and{" "}
        <M>{"\\Delta y"}</M>, and that is what turns the limit into an integral.
      </p>
      <ArcLengthViz />
    </>
  ),

  theory: (
    <>
      <Definition title="arc length">
        <p>
          The length of a curve is the supremum of the lengths of the polygons inscribed in it, when this is finite.
        </p>
      </Definition>

      <Theorem title="the arc length formula">
        <p>If f has a continuous derivative on <M>{"[a, b]"}</M>, the length of its graph is</p>
        <MD>{"L = \\int_a^b \\sqrt{1 + f'(x)^2}\\,dx."}</MD>
      </Theorem>
      <p>
        A chord over <M>{"[x_{i-1}, x_i]"}</M> has length <M>{"\\sqrt{\\Delta x^2 + \\Delta y^2}"}</M>. By the mean value
        theorem, <M>{"\\Delta y = f'(c_i)\\,\\Delta x"}</M> for some <M>{"c_i"}</M> in the piece, so the chord has length{" "}
        <M>{"\\sqrt{1 + f'(c_i)^2}\\,\\Delta x"}</M>. The polygon&rsquo;s length is therefore exactly a Riemann sum for the
        integral, and it converges to the integral as the pieces shrink.
      </p>

      <Theorem title="parametrised curves">
        <p>
          For a curve traced by <M>{"(x(t), y(t))"}</M>, <M>{"\\alpha \\le t \\le \\beta"}</M>, with continuous derivatives
          and passing over no part twice,
        </p>
        <MD>{"L = \\int_\\alpha^\\beta \\sqrt{x'(t)^2 + y'(t)^2}\\,dt."}</MD>
        <p>The integrand is the speed, and length is the integral of speed.</p>
      </Theorem>

      <Example title="the circle, finally">
        <p>
          For <M>{"(\\cos t, \\sin t)"}</M>, the speed is <M>{"\\sqrt{\\sin^2 t + \\cos^2 t} = 1"}</M>, so the arc from 0 to t
          has length t. Radian measure, defined in school by arc length, and the angle t in the series definition of sine,
          are the same thing. The whole circle, <M>{"0 \\le t \\le 2\\pi"}</M>, has length <M>{"2\\pi"}</M>, so the π defined
          by the zero of cosine is the π of the circumference.
        </p>
      </Example>

      <Example title="a curve with an exact answer">
        <p>
          For <M>{"y = \\tfrac{2}{3}x^{3/2}"}</M> on <M>{"[0, 3]"}</M>, <M>{"f'(x) = \\sqrt{x}"}</M>, so{" "}
          <M>{"L = \\int_0^3 \\sqrt{1 + x}\\,dx = \\tfrac{2}{3}\\left[(1 + x)^{3/2}\\right]_0^3 = \\tfrac{2}{3}(8 - 1) = \\tfrac{14}{3}"}</M>.
          Such tidy answers are rare: the square root usually leaves an integral that needs numerical methods.
        </p>
      </Example>

      <Remark title="the length of an ellipse">
        <p>
          The circumference of an ellipse leads to an integral, <M>{"\\int_0^{\\pi/2}\\sqrt{1 - k^2\\sin^2 t}\\,dt"}</M>, that
          has no elementary antiderivative. These elliptic integrals occupied mathematicians for two centuries, and their
          study led to elliptic functions and, eventually, elliptic curves. Ramanujan gave approximations of startling
          accuracy, such as{" "}
          <M>{"\\pi\\left[3(a + b) - \\sqrt{(3a + b)(a + 3b)}\\right]"}</M>.
        </p>
      </Remark>

      <Remark title="curves without length">
        <p>
          Not every curve has a length. The graph of <M>{"x \\sin(1/x)"}</M> on <M>{"(0, 1]"}</M> wiggles so often near 0 that
          the inscribed polygons grow without bound, though the curve stays inside a bounded box. Coastlines behave
          similarly at every scale, which is why their measured length depends on the length of the ruler.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "line",
      rung: "check",
      prompt: (
        <p>
          Use the formula to find the length of <M>{"y = \\tfrac{3}{4}x"}</M> on <M>{"[0, 4]"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "integrand",
      rung: "check",
      prompt: (
        <p>
          For <M>{"y = x^3"}</M>, the arc length integrand is <M>{"\\sqrt{1 + g(x)}"}</M>. What is g(x)?
        </p>
      ),
      answer: { kind: "expression", value: "9x^4", variables: ["x"] },
    },
    {
      key: "param",
      rung: "apply",
      prompt: (
        <p>
          Find the length of the curve <M>{"(3\\cos t, 3\\sin t)"}</M> for <M>{"0 \\le t \\le \\pi"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 3 * Math.PI, tolerance: 0.001 },
    },
    {
      key: "power",
      rung: "apply",
      prompt: (
        <p>
          Find the length of <M>{"y = \\tfrac{2}{3}x^{3/2}"}</M> on <M>{"[0, 8]"}</M>. (Give a decimal or a fraction.)
        </p>
      ),
      answer: { kind: "numeric", value: 52 / 3, tolerance: 0.001 },
    },
    {
      key: "cycloid",
      rung: "apply",
      prompt: (
        <p>
          The cycloid <M>{"(t - \\sin t, 1 - \\cos t)"}</M> is traced by a point on a rolling wheel of radius 1. Its speed
          is <M>{"2\\sin(t/2)"}</M> for <M>{"0 \\le t \\le 2\\pi"}</M>. Find the length of one arch.
        </p>
      ),
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "speed",
      rung: "prove",
      prompt: (
        <p>
          Show that the speed of the cycloid <M>{"(t - \\sin t, 1 - \\cos t)"}</M> is <M>{"2|\\sin(t/2)|"}</M>, and confirm
          that one arch has length 8.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes x′ = 1 − cos t and y′ = sin t, so the squared speed is 2 − 2cos t.",
          "Uses 1 − cos t = 2 sin²(t/2) to get speed 2|sin(t/2)|.",
          "Integrates 2 sin(t/2) from 0 to 2π to get 8.",
        ],
      },
    },
    {
      key: "parabola",
      rung: "stretch",
      prompt: (
        <p>
          Set up the arc length integral for <M>{"y = x^2"}</M> on <M>{"[0, 1]"}</M>, evaluate it with the substitution{" "}
          <M>{"2x = \\tan\\theta"}</M> or otherwise, and check your answer against the visualisation, about 1.4789.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes L = ∫ from 0 to 1 of √(1 + 4x²) dx.",
          "Carries out a trigonometric substitution, reducing to an integral of sec³θ, or uses another valid method.",
          "Reaches (2√5 + ln(2 + √5))/4 ≈ 1.4789. Full credit for a correct method even with a small slip in the final arithmetic.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the length of a curve is defined by inscribed polygons, why that leads to the integral of √(1 + f′²), and how it confirms that radians measure arc length.",

  glimpse: (
    <p>
      Multivariable Calculus and Vector Analysis integrates along curves in space, which is how work done by a force along
      a path is computed. Differential Geometry of Curves and Surfaces uses arc length to measure curves by their own
      clock, and defines curvature as the rate at which the direction turns per unit of length.
    </p>
  ),
};
