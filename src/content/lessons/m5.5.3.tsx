import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { PolarCellViz } from "@/components/viz/PolarCellViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.5.3",
  minutes: 90,
  links: {
    revisits: ["m5.5.2", "m2.6.4", "m3.6.3"],
    foreshadows: ["m5.6.3", "m8.6.3", "m26.6.1"],
  },

  puzzle: (
    <>
      <p>
        The function <M>{"e^{-x^2}"}</M>, the bell curve, has no antiderivative that can be written with the usual
        functions. Yet the area under the whole curve is known exactly: it is <M>{"\\sqrt{\\pi}"}</M>. The trick that finds
        it squares the integral, turns it into a double integral over the plane, and then measures the plane in rings
        instead of squares. Why does a ring of radius <M>{"r"}</M> and width <M>{"dr"}</M> carry an extra factor of{" "}
        <M>{"r"}</M>, and what is the rule for changing variables in general?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A small rectangle of <M>{"(r, \\theta)"}</M> values becomes a curved cell in the plane. Move it outwards and shrink
        it, and compare its true area with <M>{"\\Delta r\\, \\Delta \\theta"}</M> and with{" "}
        <M>{"r\\, \\Delta r\\, \\Delta \\theta"}</M>.
      </p>
      <PolarCellViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="change of variables">
        <p>
          Let <M>{"T : U \\to V"}</M> be a one-to-one map between open regions of <M>{"\\mathbb{R}^2"}</M>, with continuous
          partial derivatives and <M>{"\\det DT \\ne 0"}</M>. Then for continuous <M>{"f"}</M>,
        </p>
        <MD>{"\\iint_V f(x, y)\\, dx\\, dy = \\iint_U f(T(u, v))\\, \\left| \\det DT(u, v) \\right| du\\, dv."}</MD>
        <p>
          The same holds in <M>{"\\mathbb{R}^n"}</M>. The factor <M>{"|\\det DT|"}</M> is often called the Jacobian.
        </p>
      </Theorem>

      <Definition title="why the determinant">
        <p>
          A small rectangle with sides <M>{"\\Delta u"}</M> and <M>{"\\Delta v"}</M> is sent by <M>{"T"}</M> to a small
          curved region. Near the corner, <M>{"T"}</M> is approximately its linear part <M>{"DT"}</M>, which sends the
          rectangle to a parallelogram of area <M>{"|\\det DT|\\, \\Delta u\\, \\Delta v"}</M>, since the determinant of a
          linear map is its area scale factor. A Riemann sum over the <M>{"(x, y)"}</M> region can therefore be rewritten
          as one over the <M>{"(u, v)"}</M> region with each term multiplied by this factor. In one variable the same
          reasoning gives the substitution rule, <M>{"dx = g'(u)\\, du"}</M>.
        </p>
      </Definition>

      <Example title="polar coordinates">
        <p>
          For <M>{"T(r, \\theta) = (r\\cos\\theta,\\ r\\sin\\theta)"}</M>,
        </p>
        <MD>{"\\det DT = \\det \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix} = r,"}</MD>
        <p>
          so <M>{"dA = r\\, dr\\, d\\theta"}</M>. The disc of radius <M>{"a"}</M> has area{" "}
          <M>{"\\int_0^{2\\pi} \\int_0^a r\\, dr\\, d\\theta = \\pi a^2"}</M>. And for the bell curve, if{" "}
          <M>{"I = \\int_{-\\infty}^{\\infty} e^{-x^2} dx"}</M>, then
        </p>
        <MD>{"I^2 = \\iint_{\\mathbb{R}^2} e^{-(x^2 + y^2)}\\, dA = \\int_0^{2\\pi} \\int_0^\\infty e^{-r^2}\\, r\\, dr\\, d\\theta = 2\\pi \\cdot \\tfrac{1}{2} = \\pi,"}</MD>
        <p>so <M>{"I = \\sqrt{\\pi}"}</M>. The factor <M>{"r"}</M> is exactly what makes the inner integral elementary.</p>
      </Example>

      <Example title="linear maps and spheres">
        <p>
          The ellipse <M>{"x^2/a^2 + y^2/b^2 \\le 1"}</M> is the image of the unit disc under{" "}
          <M>{"(u, v) \\mapsto (au, bv)"}</M>, with determinant <M>{"ab"}</M>, so its area is <M>{"\\pi ab"}</M>. In space,
          spherical coordinates <M>{"(\\rho, \\varphi, \\theta)"}</M>, with <M>{"\\varphi"}</M> measured from the{" "}
          <M>{"z"}</M>-axis, have <M>{"dV = \\rho^2 \\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta"}</M>, and the ball
          of radius <M>{"a"}</M> has volume{" "}
          <M>{"\\int_0^{2\\pi}\\int_0^\\pi\\int_0^a \\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta = \\tfrac{4}{3}\\pi a^3"}</M>.
        </p>
      </Example>

      <Remark title="choosing coordinates">
        <p>
          A good change of variables simplifies the region, the integrand, or both: polar coordinates for discs and
          anything depending on <M>{"x^2 + y^2"}</M>, cylindrical and spherical coordinates for solids of revolution and
          balls. The absolute value matters because area is never negative, even when <M>{"T"}</M> reverses orientation.
          Small sets where <M>{"T"}</M> fails to be one-to-one, such as the origin in polar coordinates, can be ignored,
          since they have zero area.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "jac",
      rung: "check",
      prompt: <p>What is the Jacobian determinant of polar coordinates at a point with <M>{"r = 3"}</M>?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "ellipse",
      rung: "check",
      prompt: <p>Find the area of the ellipse <M>{"x^2/4 + y^2/9 \\le 1"}</M>. Give a decimal.</p>,
      answer: { kind: "numeric", value: 6 * Math.PI, tolerance: 0.02 },
    },
    {
      key: "disc",
      rung: "apply",
      prompt: (
        <p>
          Compute <M>{"\\iint_D (x^2 + y^2)\\, dA"}</M> over the unit disc <M>{"D"}</M>. Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: Math.PI / 2, tolerance: 0.002 },
    },
    {
      key: "annulus",
      rung: "apply",
      prompt: (
        <p>
          Compute <M>{"\\iint_A \\frac{1}{x^2 + y^2}\\, dA"}</M> over the annulus <M>{"1 \\le x^2 + y^2 \\le 4"}</M>. Give a
          decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 2 * Math.PI * Math.log(2), tolerance: 0.005 },
    },
    {
      key: "linear",
      rung: "apply",
      prompt: (
        <p>
          The linear map <M>{"T(u, v) = (2u + v,\\ u + 3v)"}</M> sends the unit square to a parallelogram. What is the area
          of the parallelogram?
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "area",
      rung: "prove",
      prompt: (
        <p>
          Compute the Jacobian determinant of polar coordinates, and use it to prove that a disc of radius <M>{"a"}</M> has
          area <M>{"\\pi a^2"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes det DT = r cos²θ + r sin²θ = r.",
          "Writes the area as ∫₀^{2π} ∫₀^a r dr dθ and evaluates it as 2π · a²/2 = πa².",
        ],
      },
    },
    {
      key: "gauss",
      rung: "stretch",
      prompt: (
        <p>
          Given that <M>{"\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}"}</M>, find{" "}
          <M>{"\\int_{-\\infty}^{\\infty} e^{-x^2/2} dx"}</M>, with a justification. This is why the normal distribution has
          the constant <M>{"1/\\sqrt{2\\pi}"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Substitutes x = √2 u, so dx = √2 du, or repeats the polar argument with e^{−r²/2}.",
          "Concludes the integral is √2 · √π = √(2π).",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the change of variables formula, why the absolute value of the Jacobian determinant appears, and how polar coordinates give the area of a disc and the integral of the bell curve.",

  glimpse: (
    <p>
      The next chapter integrates along curves and across surfaces in space, where the same stretching factor reappears as
      arc length and surface area. Linear Algebra II and the course on manifolds explain the determinant as a volume in
      general.
    </p>
  ),
};
