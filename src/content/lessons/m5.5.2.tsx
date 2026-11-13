import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { FubiniViz } from "@/components/viz/FubiniViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.5.2",
  minutes: 85,
  links: {
    revisits: ["m5.5.1", "m2.6.3", "m2.10.1"],
    foreshadows: ["m5.5.3", "m22.3.2", "m12.5.1"],
  },

  puzzle: (
    <>
      <p>
        To find the volume of a loaf, you could slice it, find the area of each slice, and add the areas times the
        thickness. Slicing crosswise or lengthwise must give the same loaf. The same idea suggests computing a double
        integral as an integral of integrals: first along each slice, then across the slices. Is that always correct, and
        does the direction of slicing really never matter?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The region lies between the parabola <M>{"y = x^2"}</M> and the line <M>{"y = x"}</M>. Sweep a slice across it,
        first vertically, then horizontally. Compare the inner integral, the outer integral, and the total.
      </p>
      <FubiniViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Fubini's theorem for rectangles">
        <p>
          If <M>{"f"}</M> is continuous on <M>{"R = [a, b] \\times [c, d]"}</M>, then
        </p>
        <MD>{"\\iint_R f\\, dA = \\int_a^b \\left( \\int_c^d f(x, y)\\, dy \\right) dx = \\int_c^d \\left( \\int_a^b f(x, y)\\, dx \\right) dy."}</MD>
      </Theorem>

      <Proof>
        <p>
          Use a grid with points <M>{"x_i"}</M> and <M>{"y_j"}</M>. A Riemann sum is a double sum{" "}
          <M>{"\\sum_i \\big( \\sum_j f(x_i, y_j) \\Delta y \\big) \\Delta x"}</M>. For each <M>{"i"}</M>, the inner sum is a
          Riemann sum for <M>{"A(x_i) = \\int_c^d f(x_i, y)\\, dy"}</M>. Because <M>{"f"}</M> is uniformly continuous on the
          closed rectangle, the inner sums are close to <M>{"A(x_i)"}</M> for all <M>{"i"}</M> at once when the grid is fine,
          and <M>{"A"}</M> is continuous. So the double sum is close to <M>{"\\sum_i A(x_i) \\Delta x"}</M>, a Riemann sum for{" "}
          <M>{"\\int_a^b A(x)\\, dx"}</M>. Letting the grid shrink gives the first equality; the second follows by summing
          in the other order.
        </p>
      </Proof>

      <Theorem title="general regions">
        <p>
          If <M>{"D = \\{(x, y) : a \\le x \\le b,\\ g_1(x) \\le y \\le g_2(x)\\}"}</M> with continuous{" "}
          <M>{"g_1 \\le g_2"}</M>, then <M>{"\\iint_D f\\, dA = \\int_a^b \\int_{g_1(x)}^{g_2(x)} f(x, y)\\, dy\\, dx"}</M>.
          Similarly for regions bounded on the left and right by functions of <M>{"y"}</M>. Many regions can be described
          both ways, with different limits, as in the picture above.
        </p>
      </Theorem>

      <Example title="changing the order">
        <p>
          The integral <M>{"\\int_0^1 \\int_x^1 e^{y^2}\\, dy\\, dx"}</M> cannot be done as it stands, since{" "}
          <M>{"e^{y^2}"}</M> has no elementary antiderivative. But the region is the triangle{" "}
          <M>{"0 \\le x \\le y \\le 1"}</M>, which can also be described as <M>{"0 \\le y \\le 1"}</M>,{" "}
          <M>{"0 \\le x \\le y"}</M>. So
        </p>
        <MD>{"\\int_0^1 \\int_0^y e^{y^2}\\, dx\\, dy = \\int_0^1 y\\, e^{y^2}\\, dy = \\tfrac{1}{2}(e - 1)."}</MD>
        <p>Drawing the region is always the first step in changing the order.</p>
      </Example>

      <Remark title="when the order matters">
        <p>
          Continuity on a bounded region is a real hypothesis. For <M>{"f(x, y) = \\frac{x^2 - y^2}{(x^2 + y^2)^2}"}</M> on{" "}
          <M>{"[0, 1]^2"}</M>, the two iterated integrals are <M>{"\\pi/4"}</M> and <M>{"-\\pi/4"}</M>. The function is
          unbounded near the origin, and the positive and negative parts are each infinite, so the order of adding them
          decides the answer, as with a conditionally convergent series. In measure theory the Fubini and Tonelli theorems
          say exactly when the order can be swapped: whenever <M>{"\\iint |f|"}</M> is finite, or <M>{"f \\ge 0"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "xy",
      rung: "check",
      prompt: <p>Compute <M>{"\\int_0^2 \\int_0^1 xy\\, dy\\, dx"}</M>.</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "sum",
      rung: "check",
      prompt: <p>Compute <M>{"\\iint_R (x + y)\\, dA"}</M> where <M>{"R = [0, 1] \\times [0, 2]"}</M>.</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "area",
      rung: "apply",
      prompt: (
        <p>
          Find the area of the region between <M>{"y = x^2"}</M> and <M>{"y = 2x"}</M>. Give a fraction or a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 4 / 3, tolerance: 0.003 },
    },
    {
      key: "swap",
      rung: "apply",
      prompt: <p>Which iterated integral equals <M>{"\\int_0^1 \\int_0^x f(x, y)\\, dy\\, dx"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "∫₀¹ ∫ from y to 1 of f dx dy",
          "∫₀¹ ∫ from 0 to y of f dx dy",
          "∫₀¹ ∫₀¹ f dx dy",
          "∫ from 0 to x of ∫₀¹ f dx dy",
        ],
        correct: [0],
      },
    },
    {
      key: "cube",
      rung: "apply",
      prompt: (
        <p>
          Evaluate <M>{"\\int_0^1 \\int_{\\sqrt{x}}^1 e^{y^3}\\, dy\\, dx"}</M> by changing the order. Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: (Math.E - 1) / 3, tolerance: 0.002 },
    },
    {
      key: "triangle",
      rung: "prove",
      prompt: (
        <p>
          Let <M>{"T"}</M> be the triangle <M>{"0 \\le y \\le x \\le 1"}</M> and <M>{"f"}</M> continuous on{" "}
          <M>{"[0, 1]"}</M>. Prove that <M>{"\\iint_T f(x)\\, dA = \\int_0^1 x f(x)\\, dx"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes T with x from 0 to 1 and y from 0 to x, and writes the integral as ∫₀¹ ∫₀ˣ f(x) dy dx.",
          "Evaluates the inner integral as x f(x), since f(x) does not depend on y.",
        ],
      },
    },
    {
      key: "counter",
      rung: "stretch",
      prompt: (
        <p>
          For <M>{"f(x, y) = \\frac{x^2 - y^2}{(x^2 + y^2)^2}"}</M>, check that <M>{"f = \\frac{\\partial}{\\partial y} \\frac{y}{x^2 + y^2}"}</M>,
          and show that <M>{"\\int_0^1 \\int_0^1 f\\, dy\\, dx = \\pi/4"}</M>. What is the other iterated integral, and why
          does this not contradict Fubini&rsquo;s theorem?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Differentiates y/(x² + y²) to get f, so the inner integral is 1/(1 + x²), and ∫₀¹ dx/(1 + x²) = π/4.",
          "Uses f(y, x) = −f(x, y) to get −π/4 for the other order.",
          "Notes f is not continuous, indeed unbounded, at the origin, so the theorem's hypothesis fails.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Fubini's theorem says, why it is plausible from Riemann sums, how to set up iterated integrals over a region bounded by curves, and why changing the order can help.",

  glimpse: (
    <p>
      The next lesson changes the variables themselves, as substitution does in one variable, and finds the factor that
      corrects for stretching. Measure theory later proves the general Fubini and Tonelli theorems.
    </p>
  ),
};
