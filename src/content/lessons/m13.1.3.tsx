import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LocalSquareViz } from "@/components/viz/LocalSquareViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.1.3",
  minutes: 90,
  links: {
    revisits: ["m12.4.1", "m13.1.2", "m0.7.4"],
    foreshadows: ["m13.2.2", "m13.6.1", "m26.2.2"],
  },

  puzzle: (
    <>
      <p>
        A function of a complex variable is also a map of the plane, <M>{"(x, y) \\mapsto (u, v)"}</M>, with four partial
        derivatives. Its total derivative is a 2 by 2 matrix. Which matrices come from complex derivatives, and what does that
        say about the shapes a holomorphic map makes?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Map a small square by each function. Compare the image with the original as the square shrinks.</p>
      <LocalSquareViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Cauchy–Riemann equations">
        <p>
          Let <M>{"f = u + iv"}</M> on an open set. Then <M>{"f"}</M> is complex differentiable at{" "}
          <M>{"z_0 = x_0 + iy_0"}</M> if and only if it is differentiable there as a map of{" "}
          <M>{"\\mathbb{R}^2"}</M> and
        </p>
        <MD>{"u_x = v_y, \\qquad u_y = -v_x \\quad \\text{at } (x_0, y_0)."}</MD>
        <p>
          Then <M>{"f'(z_0) = u_x + i v_x = v_y - i u_y"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Multiplication by <M>{"c = a + ib"}</M> sends <M>{"(x, y)"}</M> to <M>{"(ax - by, bx + ay)"}</M>, the linear
          map with matrix <M>{"\\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}"}</M>. Complex differentiability with{" "}
          <M>{"f'(z_0) = c"}</M> says <M>{"f(z_0 + h) = f(z_0) + ch + o(|h|)"}</M>, which is real differentiability with
          total derivative this matrix. Conversely, if the Jacobian <M>{"\\begin{pmatrix} u_x & u_y \\\\ v_x & v_y \\end{pmatrix}"}</M>{" "}
          has this form, the real linear approximation is multiplication by <M>{"u_x + iv_x"}</M>, which gives the complex
          derivative.
        </p>
      </Proof>

      <Example title="the exponential">
        <p>
          Define <M>{"e^{x+iy} = e^x(\\cos y + i \\sin y)"}</M>. Then <M>{"u_x = e^x \\cos y = v_y"}</M> and{" "}
          <M>{"u_y = -e^x \\sin y = -v_x"}</M>, and the partial derivatives are continuous, so <M>{"e^z"}</M> is entire with{" "}
          <M>{"(e^z)' = u_x + iv_x = e^z"}</M>.
        </p>
      </Example>

      <Remark title="angles are preserved">
        <p>
          The matrix <M>{"\\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}"}</M> is <M>{"|c|"}</M> times a rotation. So
          where <M>{"f'(z_0) \\ne 0"}</M>, a holomorphic map preserves angles between curves and their orientation: it is
          conformal. Small squares go to small, nearly square shapes. The reflection <M>{"\\bar z"}</M> preserves angles but
          reverses orientation; <M>{"x + 2iy"}</M> preserves neither.
        </p>
      </Remark>

      <Remark title="harmonic functions">
        <p>
          If <M>{"u"}</M> and <M>{"v"}</M> are twice continuously differentiable, which will turn out to be automatic, then{" "}
          <M>{"u_{xx} = v_{yx} = v_{xy} = -u_{yy}"}</M>. So <M>{"u_{xx} + u_{yy} = 0"}</M>: the real and imaginary parts of a
          holomorphic function are harmonic.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "eqns",
      rung: "check",
      prompt: <p>Which pair of equations are the Cauchy&ndash;Riemann equations for <M>{"f = u + iv"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["u_x = v_x and u_y = v_y", "u_x = v_y and u_y = −v_x", "u_x = −v_y and u_y = v_x", "u_x + u_y = 0"],
        correct: [1],
      },
    },
    {
      key: "exp",
      rung: "check",
      prompt: <p>For <M>{"f(z) = e^z"}</M>, compute <M>{"v_y"}</M> at the origin.</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "conjugate",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"u = x^2 - y^2 + 3x"}</M>. Find <M>{"v"}</M> with <M>{"v(0, 0) = 0"}</M> such that{" "}
          <M>{"u + iv"}</M> is entire, and give <M>{"v(1, 1)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 5, tolerance: 0.001 },
    },
    {
      key: "harm",
      rung: "apply",
      prompt: <p>Which of these cannot be the real part of a holomorphic function?</p>,
      answer: { kind: "choice", options: ["x² − y²", "x² + y²", "eˣ cos y", "2xy"], correct: [1] },
    },
    {
      key: "scale",
      rung: "apply",
      prompt: <p>By what factor does <M>{"f(z) = z^2"}</M> scale small lengths near <M>{"z = 1 + i"}</M>? Give 3 decimal places.</p>,
      answer: { kind: "numeric", value: 2.828, tolerance: 0.002 },
    },
    {
      key: "real",
      rung: "prove",
      prompt: <p>Prove that a holomorphic function on a connected open set that takes only real values is constant.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes v = 0, so v_x = v_y = 0.",
          "Uses the Cauchy–Riemann equations to get u_x = u_y = 0, so f′ = 0.",
          "Concludes f is constant on the connected set (for example along polygonal paths).",
        ],
      },
    },
    {
      key: "polar",
      rung: "stretch",
      prompt: (
        <p>
          Derive the Cauchy&ndash;Riemann equations in polar coordinates, <M>{"u_r = \\tfrac{1}{r} v_\\theta"}</M> and{" "}
          <M>{"v_r = -\\tfrac{1}{r} u_\\theta"}</M>, and use them to check that <M>{"\\log r + i\\theta"}</M> is holomorphic
          where it is defined.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses the chain rule with x = r cos θ, y = r sin θ, or takes the derivative along radial and circular directions.",
          "Checks u = log r, v = θ: u_r = 1/r = (1/r)v_θ and v_r = 0 = −(1/r)u_θ.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Cauchy–Riemann equations, why they say the derivative is a rotation and scaling, and why holomorphic maps preserve angles where the derivative is not zero.",

  glimpse: (
    <p>
      Next come power series, the main source of holomorphic functions. Later lessons use the Cauchy&ndash;Riemann equations
      to prove Goursat&rsquo;s theorem and study conformal maps, and differential geometry generalises the derivative as a
      linear map.
    </p>
  ),
};
