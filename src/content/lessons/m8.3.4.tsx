import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LeastSquaresViz } from "@/components/viz/LeastSquaresViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.3.4",
  minutes: 85,
  links: {
    revisits: ["m8.3.3", "m3.5.3", "m8.3.2"],
    foreshadows: ["m18.6.2", "m19.3.3", "m8.4.5"],
  },

  puzzle: (
    <>
      <p>
        Seven measurements almost lie on a curve, but not quite. Which line fits them best? Which degree 5 polynomial is
        closest to <M>{"\\sin x"}</M> over a whole interval, not just near 0? Both questions ask for the nearest point of a
        subspace, and the answer to both is the orthogonal projection from the last lesson.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose the degree of the fitted polynomial, and move the dashed line of your own. Try to beat the best line&rsquo;s
        squared error.
      </p>
      <LeastSquaresViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="projection minimises distance">
        <p>
          Let <M>{"U"}</M> be a finite-dimensional subspace of an inner product space <M>{"V"}</M>, and{" "}
          <M>{"v \\in V"}</M>. Then <M>{"\\|v - P_U v\\| \\le \\|v - u\\|"}</M> for every <M>{"u \\in U"}</M>, with
          equality only when <M>{"u = P_U v"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>Write the difference as two orthogonal pieces:</p>
        <MD>{"v - u = (v - P_U v) + (P_U v - u)."}</MD>
        <p>
          The first lies in <M>{"U^\\perp"}</M> and the second in <M>{"U"}</M>, so by Pythagoras{" "}
          <M>{"\\|v - u\\|^2 = \\|v - P_U v\\|^2 + \\|P_U v - u\\|^2 \\ge \\|v - P_U v\\|^2"}</M>, with equality exactly when{" "}
          <M>{"P_U v - u = 0"}</M>.
        </p>
      </Proof>

      <Definition title="least squares">
        <p>
          If <M>{"Ax = b"}</M> has no solution, look for the <M>{"x"}</M> that makes <M>{"\\|Ax - b\\|"}</M> as small as
          possible. Since <M>{"Ax"}</M> ranges over the column space <M>{"U"}</M>, the best <M>{"Ax"}</M> is{" "}
          <M>{"P_U b"}</M>, which happens exactly when <M>{"b - Ax"}</M> is orthogonal to every column. That gives the{" "}
          <strong>normal equations</strong>
        </p>
        <MD>{"A^{\\mathsf T} A\\, x = A^{\\mathsf T} b."}</MD>
      </Definition>

      <Example title="fitting a line">
        <p>
          To fit <M>{"y = c_0 + c_1 x"}</M> to points <M>{"(x_k, y_k)"}</M>, take <M>{"A"}</M> with rows{" "}
          <M>{"(1, x_k)"}</M> and <M>{"b = (y_k)"}</M>. The normal equations give the familiar regression line, whose slope is{" "}
          <M>{"\\sum (x_k - \\bar x)(y_k - \\bar y) / \\sum (x_k - \\bar x)^2"}</M> and which passes through{" "}
          <M>{"(\\bar x, \\bar y)"}</M>.
        </p>
      </Example>

      <Example title="approximating sine">
        <p>
          In the space of continuous functions on <M>{"[-\\pi, \\pi]"}</M> with{" "}
          <M>{"\\langle f, g \\rangle = \\int_{-\\pi}^{\\pi} f g"}</M>, project <M>{"\\sin"}</M> onto polynomials of degree at
          most 5, using an orthonormal basis from Gram-Schmidt. The result stays within 0.02 of <M>{"\\sin x"}</M> on
          the whole interval, while the Taylor polynomial <M>{"x - x^3/6 + x^5/120"}</M> is off by more than 0.5 at{" "}
          <M>{"\\pm\\pi"}</M>. Taylor is best near one point; projection is best over the interval.
        </p>
      </Example>

      <Remark title="the error can only fall">
        <p>
          Enlarging <M>{"U"}</M> can never increase the distance to it, so higher degree always fits at least as well. With
          seven points, a degree 6 polynomial passes through all of them with zero error. That is rarely what you want: the
          curve then follows the noise. Choosing <M>{"U"}</M> well is the statistician&rsquo;s problem; finding the nearest
          point of it is linear algebra.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "closest",
      rung: "check",
      prompt: <p>For a finite-dimensional subspace U, which point of U is closest to v?</p>,
      answer: {
        kind: "choice",
        options: ["The orthogonal projection P_U v", "Any point of U of the same length as v", "The zero vector", "There may be no closest point"],
        correct: [0],
      },
    },
    {
      key: "plane",
      rung: "check",
      prompt: <p>What is the distance from (1, 2, 3) to the plane z = 0 in ℝ³?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "const",
      rung: "apply",
      prompt: <p>The best constant approximation, in the least squares sense, to the data 1, 2, 6 is a single number c. What is c?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "slope",
      rung: "apply",
      prompt: <p>Find the least squares line through (0, 0), (1, 1) and (2, 1). What is its slope?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.01 },
    },
    {
      key: "fn",
      rung: "apply",
      prompt: <p>With ⟨f, g⟩ = ∫ f g over [0, 1], what constant function is closest to f(x) = x²?</p>,
      answer: { kind: "numeric", value: 0.3333, tolerance: 0.01 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Suppose u ∈ U and v − u is orthogonal to every vector in U. Prove that u is the point of U closest to v.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes any u′ in U and writes v − u′ = (v − u) + (u − u′).",
          "Notes u − u′ lies in U, so the two pieces are orthogonal.",
          "Uses Pythagoras to get ‖v − u′‖² = ‖v − u‖² + ‖u − u′‖² ≥ ‖v − u‖².",
        ],
      },
    },
    {
      key: "overfit",
      rung: "stretch",
      prompt: <p>A degree 6 polynomial fits seven data points with zero error. Why might a line still be the better model?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the measurements contain noise, which the high-degree curve reproduces.",
          "Notes that the exact fit predicts poorly between or beyond the points.",
          "Mentions a principle such as preferring simple models or testing on new data. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the orthogonal projection is the closest point of a subspace, how this gives the normal equations for least squares, and why projecting onto polynomials can beat a Taylor polynomial over an interval.",

  glimpse: (
    <p>
      The next lesson introduces the adjoint of an operator, the abstract form of the transpose that appeared in the normal
      equations. Statistics treats regression as exactly this projection, and numerical analysis builds on best approximation.
    </p>
  ),
};
