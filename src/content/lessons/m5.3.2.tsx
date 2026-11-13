import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { HessianViz } from "@/components/viz/HessianViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.3.2",
  minutes: 85,
  links: {
    revisits: ["m5.3.1", "m3.7.4", "m5.2.4"],
    foreshadows: ["m5.3.3", "m8.7.1", "m10.4.3"],
  },

  puzzle: (
    <>
      <p>
        A mountain pass is a strange place. Walking along the road through it, you are at the highest point of your
        journey. Walking along the ridge across the road, you are at the lowest point. The ground is flat there, as it is at
        a summit and at the bottom of a valley, yet it is neither. In one variable, a flat point is a maximum, a minimum or
        an inflection. With two variables there is a new possibility. How can we tell which kind of flat point we have?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Every quadratic <M>{"ax^2 + bxy + cy^2"}</M> has a flat point at the origin. Change the coefficients and watch the
        shading: is <M>{"f"}</M> above 0 all around, below 0 all around, or both?
      </p>
      <HessianViz />
    </>
  ),

  theory: (
    <>
      <Definition title="critical points">
        <p>
          A point <M>{"a"}</M> is a <strong>critical point</strong> of a differentiable <M>{"f"}</M> if{" "}
          <M>{"\\nabla f(a) = 0"}</M>. At an interior local maximum or minimum, each partial derivative vanishes, since
          the one-variable function along each axis has a maximum or minimum there; so every local extremum in an open set
          is a critical point. A critical point that is neither is a <strong>saddle point</strong>: every neighbourhood
          contains points where <M>{"f"}</M> is larger and points where it is smaller.
        </p>
      </Definition>

      <Theorem title="the second derivative test">
        <p>
          Let <M>{"f"}</M> have continuous second partials and <M>{"\\nabla f(a) = 0"}</M>, with Hessian <M>{"H"}</M>. If
          all eigenvalues of <M>{"H"}</M> are positive, <M>{"a"}</M> is a strict local minimum; if all are negative, a
          strict local maximum; if some are positive and some negative, a saddle point. For two variables:
        </p>
        <MD>{"\\det H = f_{xx}f_{yy} - f_{xy}^2 > 0,\; f_{xx} > 0 \\Rightarrow \\text{min}; \\quad \\det H > 0,\; f_{xx} < 0 \\Rightarrow \\text{max}; \\quad \\det H < 0 \\Rightarrow \\text{saddle}."}</MD>
      </Theorem>

      <Proof>
        <p>
          By Taylor&rsquo;s theorem, <M>{"f(a + h) - f(a) = \\tfrac12 h^{\\mathsf T}Hh + R(h)"}</M> with{" "}
          <M>{"R(h)/\\|h\\|^2 \\to 0"}</M>. If every eigenvalue is at least <M>{"\\lambda > 0"}</M>, then{" "}
          <M>{"h^{\\mathsf T}Hh \\ge \\lambda\\|h\\|^2"}</M>, by diagonalising the symmetric matrix <M>{"H"}</M> with an
          orthonormal basis of eigenvectors. For small <M>{"h \\ne 0"}</M>, <M>{"|R(h)| < \\tfrac14\\lambda\\|h\\|^2"}</M>,
          so <M>{"f(a + h) - f(a) > \\tfrac14\\lambda\\|h\\|^2 > 0"}</M>. The maximum case is the same with signs reversed.
          If <M>{"H"}</M> has eigenvalues of both signs, moving along the two eigenvectors makes <M>{"f"}</M> increase in
          one direction and decrease in the other. For a 2 × 2 symmetric matrix, the determinant is the product of the
          eigenvalues and <M>{"f_{xx}"}</M> has the sign of both when the determinant is positive.
        </p>
      </Proof>

      <Example title="a worked case">
        <p>
          Let <M>{"f(x, y) = x^3 - 3x + y^2"}</M>. Then <M>{"\\nabla f = (3x^2 - 3, 2y)"}</M>, which vanishes at{" "}
          <M>{"(1, 0)"}</M> and <M>{"(-1, 0)"}</M>. The Hessian is <M>{"\\mathrm{diag}(6x, 2)"}</M>. At{" "}
          <M>{"(1, 0)"}</M> it is <M>{"\\mathrm{diag}(6, 2)"}</M>, so a local minimum. At <M>{"(-1, 0)"}</M> it is{" "}
          <M>{"\\mathrm{diag}(-6, 2)"}</M>, so a saddle.
        </p>
      </Example>

      <Remark title="when the test is silent">
        <p>
          If an eigenvalue is 0 the test says nothing. The functions <M>{"x^2 + y^4"}</M>, <M>{"x^2 - y^4"}</M> and{" "}
          <M>{"x^2 + y^3"}</M> all have Hessian <M>{"\\mathrm{diag}(2, 0)"}</M> at the origin, yet the first has a minimum
          there, and the others do not. Also, local information says nothing about the global picture: to find the largest
          value on a closed bounded region one must also check the boundary, which is where the next lesson begins.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "count",
      rung: "check",
      prompt: <p>How many critical points does <M>{"f(x, y) = x^3 - 3x + y^2"}</M> have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "det",
      rung: "check",
      prompt: <p>For the same <M>{"f"}</M>, find the determinant of the Hessian at <M>{"(1, 0)"}</M>.</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "find",
      rung: "apply",
      prompt: (
        <p>
          Find the critical point of <M>{"f(x, y) = x^2 + xy + y^2 - 3x"}</M>, and the value of <M>{"f"}</M> there.
        </p>
      ),
      answer: { kind: "numeric", value: -3 },
    },
    {
      key: "classify",
      rung: "apply",
      prompt: <p>Classify the origin for <M>{"f(x, y) = x^2 + 4xy + y^2"}</M>.</p>,
      answer: {
        kind: "choice",
        options: ["Local minimum", "Local maximum", "Saddle point", "The test is inconclusive"],
        correct: [2],
      },
    },
    {
      key: "silent",
      rung: "apply",
      prompt: <p>For which of these does the second derivative test fail to decide the nature of the origin? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["x² + y⁴", "x² + y²", "x² − y⁴", "xy"],
        correct: [0, 2],
      },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: (
        <p>
          Prove that if <M>{"f"}</M> is differentiable and has a local minimum at an interior point <M>{"a"}</M>, then{" "}
          <M>{"\\nabla f(a) = 0"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Considers the one-variable function g(t) = f(a + t eᵢ), which has a local minimum at t = 0.",
          "Uses the one-variable result g′(0) = 0 to conclude ∂ᵢf(a) = 0 for each i.",
        ],
      },
    },
    {
      key: "box",
      rung: "stretch",
      prompt: (
        <p>
          An open box with a square base must hold 32 cubic metres. Use critical points to find the dimensions that use the
          least material, and explain why your answer is a minimum.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets up area A = x² + 4xh with x²h = 32, or as a function of two base sides, and finds the critical point x = 4, h = 2.",
          "Justifies the minimum, by the second derivative test or by the behaviour of A as x tends to 0 or infinity.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a critical point is, why local extrema are critical points, how the Hessian distinguishes minima, maxima and saddles, and when the test is silent.",

  glimpse: (
    <p>
      The next lesson finds extrema subject to a constraint, such as the best point on a circle, with Lagrange
      multipliers.
    </p>
  ),
};
