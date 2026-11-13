import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { Taylor2DViz } from "@/components/viz/Taylor2DViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.3.1",
  minutes: 85,
  links: {
    revisits: ["m5.2.4", "m5.2.3", "m3.7.3"],
    foreshadows: ["m5.3.2", "m5.3.3", "m8.7.1"],
  },

  puzzle: (
    <>
      <p>
        A physicist studying a molecule near equilibrium, an engineer checking the stability of a bridge, and an economist
        modelling a market near balance all do the same thing: they replace a complicated function of many variables by a
        polynomial of degree two. In one variable, Taylor&rsquo;s theorem justifies this. With several variables, the
        second derivative is no longer a single number. What takes its place, and how good is the approximation?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here is <M>{"f(x, y) = e^x\\cos y"}</M> along a line through the origin, with its linear and quadratic
        approximations. Turn the line, and shrink the distance to see how fast each error falls.
      </p>
      <Taylor2DViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Hessian">
        <p>
          For a function <M>{"f : \\mathbb{R}^n \\to \\mathbb{R}"}</M> with continuous second partial derivatives, the{" "}
          <strong>Hessian</strong> at <M>{"a"}</M> is the <M>{"n \\times n"}</M> matrix{" "}
          <M>{"H_f(a) = \\big(\\partial_i\\partial_j f(a)\\big)"}</M>. By Clairaut&rsquo;s theorem it is symmetric. For{" "}
          <M>{"f = e^x\\cos y"}</M> at the origin,
        </p>
        <MD>{"\\nabla f(0) = (1, 0), \\qquad H_f(0) = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}."}</MD>
      </Definition>

      <Theorem title="Taylor's theorem to second order">
        <p>
          If <M>{"f"}</M> has continuous second partial derivatives near <M>{"a"}</M>, then
        </p>
        <MD>{"f(a + h) = f(a) + \\nabla f(a) \\cdot h + \\tfrac12\\, h^{\\mathsf T} H_f(a)\\, h + R(h), \\qquad \\frac{R(h)}{\\|h\\|^2} \\to 0."}</MD>
      </Theorem>

      <Proof>
        <p>
          Fix <M>{"h"}</M> and let <M>{"g(t) = f(a + th)"}</M>. By the chain rule,{" "}
          <M>{"g'(t) = \\nabla f(a + th) \\cdot h = \\sum_i \\partial_i f(a + th)\\,h_i"}</M>, and applying it again,{" "}
          <M>{"g''(t) = \\sum_{i,j} \\partial_j\\partial_i f(a + th)\\,h_i h_j = h^{\\mathsf T} H_f(a + th)\\, h"}</M>. The
          one-variable Taylor theorem with Lagrange remainder gives <M>{"g(1) = g(0) + g'(0) + \\tfrac12 g''(c)"}</M> for
          some <M>{"c \\in (0, 1)"}</M>. So <M>{"R(h) = \\tfrac12 h^{\\mathsf T}\\big(H_f(a + ch) - H_f(a)\\big)h"}</M>, and{" "}
          <M>{"|R(h)| \\le \\tfrac12\\|H_f(a + ch) - H_f(a)\\|\\,\\|h\\|^2"}</M>, where the matrix norm tends to 0 by
          continuity of the second partials.
        </p>
      </Proof>

      <Example title="a computation">
        <p>
          For <M>{"f = e^x\\cos y"}</M> at the origin, the quadratic approximation is
        </p>
        <MD>{"f(x, y) \\approx 1 + x + \\tfrac12(x^2 - y^2)."}</MD>
        <p>
          At <M>{"(0.1, 0.1)"}</M> this gives 1.1, while the true value is about 1.0997. In terms of one-variable series,
          this is just <M>{"(1 + x + \\tfrac12x^2)(1 - \\tfrac12y^2)"}</M> with the higher terms dropped.
        </p>
      </Example>

      <Remark title="the quadratic form">
        <p>
          The term <M>{"\\tfrac12 h^{\\mathsf T} H h"}</M> is a <strong>quadratic form</strong>: a homogeneous polynomial of
          degree two in the coordinates of <M>{"h"}</M>. Whether it is positive for every nonzero <M>{"h"}</M>, negative
          for every one, or of mixed sign is decided by the eigenvalues of the symmetric matrix <M>{"H"}</M>. The next
          lesson uses this to classify critical points. Higher-order Taylor polynomials exist too, with all the
          <M>{"k"}</M>th partial derivatives, but are rarely written out.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hess",
      rung: "check",
      prompt: <p>Let <M>{"f(x, y) = x^3 + xy^2"}</M>. Find the entry <M>{"f_{xy}"}</M> of the Hessian at <M>{"(1, 2)"}</M>.</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "count",
      rung: "check",
      prompt: <p>For a function of three variables with continuous second partials, how many different second partial derivatives can there be, after using Clairaut&rsquo;s theorem?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "approx",
      rung: "apply",
      prompt: (
        <p>
          Use the quadratic approximation <M>{"1 + x + \\tfrac12(x^2 - y^2)"}</M> to estimate <M>{"e^{0.2}\\cos 0.1"}</M>.
          Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 1.215, tolerance: 0.0001 },
    },
    {
      key: "quad",
      rung: "apply",
      prompt: (
        <p>
          The quadratic Taylor polynomial of <M>{"f(x, y) = \\cos(x + y)"}</M> at the origin is{" "}
          <M>{"1 - \\tfrac12(x + y)^2"}</M>. What is the entry <M>{"f_{xy}(0, 0)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "sign",
      rung: "apply",
      prompt: (
        <p>
          The Hessian of <M>{"e^x\\cos y"}</M> at the origin is <M>{"\\mathrm{diag}(1, -1)"}</M>. Along which directions is
          the quadratic term <M>{"\\tfrac12 h^{\\mathsf T}Hh"}</M> zero? Choose all that apply.
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["(1, 1)", "(1, 0)", "(1, −1)", "(0, 1)"],
        correct: [0, 2],
      },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: (
        <p>
          Let <M>{"g(t) = f(a + th)"}</M>. Using the chain rule, prove that <M>{"g''(0) = h^{\\mathsf T}H_f(a)h"}</M> for a
          function of two variables with continuous second partials.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes g′(t) = f_x(a + th) h₁ + f_y(a + th) h₂ by the chain rule.",
          "Differentiates again to get f_xx h₁² + 2 f_xy h₁h₂ + f_yy h₂² at t = 0, using f_xy = f_yx, and identifies it with hᵀHh.",
        ],
      },
    },
    {
      key: "exact",
      rung: "stretch",
      prompt: (
        <p>
          Show that for a quadratic polynomial <M>{"f(x) = c + b \\cdot x + \\tfrac12 x^{\\mathsf T}Ax"}</M> with{" "}
          <M>{"A"}</M> symmetric, the second-order Taylor formula about any point <M>{"a"}</M> holds with no remainder.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes ∇f(a) = b + Aa and H_f = A, constant.",
          "Expands f(a + h) directly and matches it term by term with f(a) + ∇f(a) · h + ½hᵀAh, using the symmetry of A.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the Hessian matrix is, what Taylor's theorem to second order says in several variables, how it is proved by restricting to a line, and why the quadratic term is a quadratic form.",

  glimpse: (
    <p>
      The next lesson uses the Hessian to tell whether a critical point is a maximum, a minimum or a saddle.
    </p>
  ),
};
