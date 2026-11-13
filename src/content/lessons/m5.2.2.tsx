import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { JacobianZoomViz } from "@/components/viz/JacobianZoomViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.2.2",
  minutes: 85,
  links: {
    revisits: ["m5.2.1", "m3.8.1", "m8.1.2"],
    foreshadows: ["m5.2.3", "m5.4.1", "m12.4.1"],
  },

  puzzle: (
    <>
      <p>
        In one variable, the derivative is a number, the slope of the tangent line. But a map from the plane to the
        plane, such as the way a map projection sends the curved earth onto a flat page, stretches, squeezes and turns
        small regions differently in different directions. No single number can describe that. The last lesson showed that
        a list of partial derivatives is not enough either. What kind of object is the derivative of such a map?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A curved map <M>{"F"}</M> sends a small square around <M>{"p"}</M> to a curved patch. Its derivative sends the
        same square to a parallelogram. Shrink the square and compare.
      </p>
      <JacobianZoomViz />
    </>
  ),

  theory: (
    <>
      <Definition title="differentiability">
        <p>
          Let <M>{"f"}</M> map an open set in <M>{"\\mathbb{R}^n"}</M> to <M>{"\\mathbb{R}^m"}</M>. Then <M>{"f"}</M> is{" "}
          <strong>differentiable</strong> at <M>{"a"}</M> if there is a linear map{" "}
          <M>{"L : \\mathbb{R}^n \\to \\mathbb{R}^m"}</M> such that
        </p>
        <MD>{"\\lim_{h \\to 0} \\frac{\\|f(a + h) - f(a) - L h\\|}{\\|h\\|} = 0."}</MD>
        <p>
          The map <M>{"L"}</M> is called the <strong>derivative</strong> <M>{"Df(a)"}</M>. It is the linear map that best
          approximates <M>{"f"}</M> near <M>{"a"}</M>: the error is small compared with the step <M>{"h"}</M>, in every
          direction at once. When <M>{"n = m = 1"}</M>, this is the usual derivative, with <M>{"Lh = f'(a)h"}</M>.
        </p>
      </Definition>

      <Theorem title="the Jacobian matrix">
        <p>
          If <M>{"f = (f_1, \\dots, f_m)"}</M> is differentiable at <M>{"a"}</M>, then all partial derivatives exist there
          and <M>{"Df(a)"}</M> has the matrix
        </p>
        <MD>{"J_f(a) = \\begin{pmatrix} \\partial_1 f_1 & \\cdots & \\partial_n f_1 \\\\ \\vdots & & \\vdots \\\\ \\partial_1 f_m & \\cdots & \\partial_n f_m \\end{pmatrix}(a)."}</MD>
        <p>Moreover <M>{"f"}</M> is continuous at <M>{"a"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          Take <M>{"h = t e_j"}</M> with <M>{"t \\to 0"}</M>. The definition gives{" "}
          <M>{"\\frac{f(a + te_j) - f(a)}{t} - L e_j \\to 0"}</M>, so the partial derivatives{" "}
          <M>{"\\partial_j f"}</M> exist and equal <M>{"L e_j"}</M>, the <M>{"j"}</M>th column of the matrix of{" "}
          <M>{"L"}</M>. For continuity, <M>{"f(a + h) - f(a) = Lh + \\|h\\|\\,\\varepsilon(h)"}</M> with{" "}
          <M>{"\\varepsilon(h) \\to 0"}</M>; both terms tend to 0, since a linear map on <M>{"\\mathbb{R}^n"}</M> is
          continuous.
        </p>
      </Proof>

      <Example title="linear approximation">
        <p>
          For <M>{"f(x, y) = x^2 + y^2"}</M> at <M>{"(3, 4)"}</M>, <M>{"Df = (6 \;\; 8)"}</M>, so{" "}
          <M>{"f(3 + h, 4 + k) \\approx 25 + 6h + 8k"}</M>. At <M>{"(3.1, 3.9)"}</M> this gives 24.8, against the true value
          24.82. For a map <M>{"F : \\mathbb{R}^2 \\to \\mathbb{R}^2"}</M>, the determinant of the Jacobian tells how
          <M>{"F"}</M> scales small areas near the point, and its sign tells whether it preserves orientation.
        </p>
      </Example>

      <Remark title="partials versus differentiability">
        <p>
          The converse of the theorem fails: the function <M>{"xy/(x^2 + y^2)"}</M> has partial derivatives at the origin
          but is not even continuous there. A useful sufficient condition is that if all partial derivatives exist near{" "}
          <M>{"a"}</M> and are continuous at <M>{"a"}</M>, then <M>{"f"}</M> is differentiable at <M>{"a"}</M>. Its proof
          uses the mean value theorem one coordinate at a time, and is given in the analysis course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "jac",
      rung: "check",
      prompt: (
        <p>
          Let <M>{"F(x, y) = (x^2y, \; x + y^3)"}</M>. What is the bottom right entry of its Jacobian matrix at{" "}
          <M>{"(1, 2)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "det",
      rung: "check",
      prompt: <p>For the same <M>{"F"}</M>, find the determinant of the Jacobian at <M>{"(1, 2)"}</M>.</p>,
      answer: { kind: "numeric", value: 47 },
    },
    {
      key: "approx",
      rung: "apply",
      prompt: (
        <p>
          Use the linear approximation of <M>{"f(x, y) = \\sqrt{x^2 + y^2}"}</M> at <M>{"(3, 4)"}</M> to estimate{" "}
          <M>{"f(3.03, 3.96)"}</M>. Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 4.986, tolerance: 0.0002 },
    },
    {
      key: "linear",
      rung: "apply",
      prompt: <p>A linear map <M>{"A : \\mathbb{R}^n \\to \\mathbb{R}^m"}</M> is differentiable everywhere. What is its derivative at any point?</p>,
      answer: {
        kind: "choice",
        options: ["0", "A itself", "The identity", "It depends on the point"],
        correct: [1],
      },
    },
    {
      key: "size",
      rung: "apply",
      prompt: <p>What is the size of the Jacobian matrix of a map from <M>{"\\mathbb{R}^3"}</M> to <M>{"\\mathbb{R}^2"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["3 rows and 2 columns", "2 rows and 3 columns", "3 by 3", "2 by 2"],
        correct: [1],
      },
    },
    {
      key: "unique",
      rung: "prove",
      prompt: <p>Prove that the derivative is unique: if two linear maps <M>{"L_1"}</M> and <M>{"L_2"}</M> both satisfy the definition at <M>{"a"}</M>, then <M>{"L_1 = L_2"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Subtracts the two conditions to get ‖(L₁ − L₂)h‖ / ‖h‖ → 0 as h → 0, using the triangle inequality.",
          "Takes h = tv for a fixed v and t → 0, using linearity to get ‖(L₁ − L₂)v‖ = 0 for every v.",
        ],
      },
    },
    {
      key: "product",
      rung: "stretch",
      prompt: (
        <p>
          Let <M>{"f(x, y) = xy"}</M>. Prove directly from the definition that <M>{"f"}</M> is differentiable at every
          point <M>{"(a, b)"}</M>, with <M>{"Df(a, b)(h, k) = bh + ak"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes f(a + h, b + k) − f(a, b) − (bh + ak) = hk.",
          "Shows |hk| / ‖(h, k)‖ ≤ ‖(h, k)‖ / 2, or a similar bound, which tends to 0.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the derivative of a map between spaces of several dimensions is a linear map, what the definition of differentiability says, how the Jacobian matrix is built from partial derivatives, and why having partial derivatives is not enough.",

  glimpse: (
    <p>
      The next lesson shows the payoff: the chain rule becomes a product of Jacobian matrices. Later, the inverse
      function theorem uses the derivative to decide when a map can be undone near a point.
    </p>
  ),
};
