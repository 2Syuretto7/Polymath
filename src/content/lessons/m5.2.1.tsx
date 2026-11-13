import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { SurfaceSliceViz } from "@/components/viz/SurfaceSliceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.2.1",
  minutes: 80,
  links: {
    revisits: ["m5.1.1", "m2.4.1", "m2.3.1"],
    foreshadows: ["m5.2.2", "m5.2.4", "m5.3.2"],
  },

  puzzle: (
    <>
      <p>
        The pressure of a gas depends on its temperature and its volume. Heat a sealed steel tank and the pressure rises;
        squeeze a balloon at constant temperature and it rises too. A chemist asks how fast pressure changes with
        temperature when the volume is held fixed, and gets one answer. Ask how fast it changes with volume at fixed
        temperature, and there is another. A function of several variables has a rate of change for each variable. Are
        these rates enough to understand how the function behaves?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here is a surface <M>{"z = f(x, y)"}</M>, cut by two vertical planes through a point. Move the point and watch the
        slopes of the two cuts.
      </p>
      <SurfaceSliceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="partial derivatives">
        <p>
          Let <M>{"f"}</M> be a real function on an open set in <M>{"\\mathbb{R}^2"}</M>. The{" "}
          <strong>partial derivative</strong> of <M>{"f"}</M> with respect to <M>{"x"}</M> at <M>{"(a, b)"}</M> is
        </p>
        <MD>{"\\frac{\\partial f}{\\partial x}(a, b) = \\lim_{h \\to 0} \\frac{f(a + h, b) - f(a, b)}{h},"}</MD>
        <p>
          if the limit exists: the ordinary derivative of the one-variable function <M>{"x \\mapsto f(x, b)"}</M>. The
          partial derivative with respect to <M>{"y"}</M> is defined likewise, holding <M>{"x"}</M> fixed. Other notations
          are <M>{"f_x"}</M> and <M>{"\\partial_x f"}</M>. In <M>{"\\mathbb{R}^n"}</M> there are <M>{"n"}</M> partial
          derivatives, one for each coordinate.
        </p>
      </Definition>

      <Example title="computing partials">
        <p>
          To differentiate with respect to one variable, treat the others as constants. For{" "}
          <M>{"f(x, y) = x^2y + \\sin(xy)"}</M>,
        </p>
        <MD>{"f_x = 2xy + y\\cos(xy), \\qquad f_y = x^2 + x\\cos(xy)."}</MD>
        <p>
          For an ideal gas, <M>{"P = nRT/V"}</M>, so <M>{"\\partial P / \\partial T = nR/V"}</M> and{" "}
          <M>{"\\partial P / \\partial V = -nRT/V^2"}</M>.
        </p>
      </Example>

      <Theorem title="Clairaut's theorem">
        <p>
          If the second partial derivatives <M>{"f_{xy}"}</M> and <M>{"f_{yx}"}</M> exist and are continuous near a point,
          they are equal there: the order of differentiation does not matter.
        </p>
      </Theorem>

      <Remark title="partials are not enough">
        <p>
          Partial derivatives only look along the axes, and that can hide a great deal. Let{" "}
          <M>{"f(x, y) = xy/(x^2 + y^2)"}</M> for <M>{"(x, y) \\ne (0, 0)"}</M> and <M>{"f(0, 0) = 0"}</M>. On both axes{" "}
          <M>{"f"}</M> is 0, so <M>{"f_x(0, 0) = f_y(0, 0) = 0"}</M>. But along the line <M>{"y = x"}</M>,{" "}
          <M>{"f = \\tfrac12"}</M>, so <M>{"f"}</M> is not even continuous at the origin. The right notion of
          differentiability in several variables, which the next lesson introduces, must look in every direction at once.
          The proof of Clairaut&rsquo;s theorem, which uses the mean value theorem twice, comes in the analysis course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fx",
      rung: "check",
      prompt: <p>Let <M>{"f(x, y) = x^2y + 3xy^3"}</M>. Find <M>{"f_x(1, 2)"}</M>.</p>,
      answer: { kind: "numeric", value: 28 },
    },
    {
      key: "fy",
      rung: "check",
      prompt: <p>For the same <M>{"f(x, y) = x^2y + 3xy^3"}</M>, find <M>{"f_y(1, 2)"}</M>.</p>,
      answer: { kind: "numeric", value: 37 },
    },
    {
      key: "three",
      rung: "apply",
      prompt: <p>Let <M>{"g(x, y, z) = xe^{yz}"}</M>. Find <M>{"g_z(2, 1, 0)"}</M>.</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "mixed",
      rung: "apply",
      prompt: <p>Let <M>{"f(x, y) = x^3y^2"}</M>. Find the mixed partial <M>{"f_{xy}(1, 1)"}</M>.</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "gas",
      rung: "apply",
      prompt: (
        <p>
          For an ideal gas <M>{"P = nRT/V"}</M>, which statements are true when all quantities are positive? Choose all
          that apply.
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "∂P/∂T is positive: heating at fixed volume raises the pressure.",
          "∂P/∂V is positive: expanding at fixed temperature raises the pressure.",
          "∂P/∂V is negative.",
          "∂P/∂T depends on T.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "discont",
      rung: "prove",
      prompt: (
        <p>
          Let <M>{"f(x, y) = xy/(x^2 + y^2)"}</M> away from the origin and <M>{"f(0, 0) = 0"}</M>. Prove that both partial
          derivatives exist at the origin, but <M>{"f"}</M> is not continuous there.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Shows f(h, 0) = 0 and f(0, h) = 0 for all h, so both difference quotients are 0 and both partials are 0.",
          "Shows f(t, t) = 1/2 for t ≠ 0, so f does not tend to f(0, 0) = 0 along y = x.",
        ],
      },
    },
    {
      key: "laplace",
      rung: "stretch",
      prompt: (
        <p>
          A function is <strong>harmonic</strong> if <M>{"f_{xx} + f_{yy} = 0"}</M>. Show that{" "}
          <M>{"f(x, y) = e^x \\sin y"}</M> is harmonic, and find all harmonic polynomials of the form{" "}
          <M>{"ax^2 + bxy + cy^2"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes f_xx = eˣ sin y and f_yy = −eˣ sin y, which sum to 0.",
          "Computes f_xx + f_yy = 2a + 2c for the quadratic, so the harmonic ones are exactly those with c = −a, with b arbitrary.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a partial derivative is, how to compute one by holding the other variables fixed, what Clairaut's theorem says, and why partial derivatives alone do not guarantee good behaviour.",

  glimpse: (
    <p>
      The next lesson defines the derivative of a function of several variables properly, as a linear map that approximates
      the function in every direction at once.
    </p>
  ),
};
