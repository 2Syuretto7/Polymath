import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ResidualProjectionViz } from "@/components/viz/ResidualProjectionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.6.2",
  minutes: 90,
  links: {
    revisits: ["m18.6.1", "m3.5.2", "m3.5.3"],
    foreshadows: ["m18.6.3", "m23.2.1", "m27.2.1"],
  },

  puzzle: (
    <>
      <p>
        With one predictor, least squares gave a formula from calculus. With ten predictors, the calculus gives ten
        equations in ten unknowns. Is there a picture that makes the answer obvious, however many predictors there are?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Vary b. When is the residual shortest, and what angle does it make with x?</p>
      <ResidualProjectionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the linear model in matrix form">
        <p>
          Stack the responses into a vector <M>{"y \\in \\mathbb R^n"}</M> and the predictors, with a column of ones for the
          intercept, into the n × p <strong>design matrix</strong> X. The model is <M>{"y = X\\beta + \\varepsilon"}</M>, and
          least squares minimises <M>{"\\|y - Xb\\|^2"}</M> over <M>{"b \\in \\mathbb R^p"}</M>.
        </p>
      </Definition>

      <Theorem title="the normal equations">
        <p>
          The vectors Xb fill the column space of X. The closest of them to y is the orthogonal projection{" "}
          <M>{"\\hat y"}</M>, characterised by the residual being perpendicular to every column:{" "}
          <M>{"X^\\top(y - X\\hat\\beta) = 0"}</M>. If X has full column rank,
        </p>
        <MD>{"\\hat\\beta = (X^\\top X)^{-1}X^\\top y, \\qquad \\hat y = Hy, \\quad H = X(X^\\top X)^{-1}X^\\top."}</MD>
        <p>
          The <strong>hat matrix</strong> H is symmetric and idempotent, <M>{"H^2 = H"}</M>: it is the orthogonal projection
          onto the column space.
        </p>
      </Theorem>

      <Example title="two observations, one predictor">
        <p>
          With x = (2, 1) and y = (1, 2), the projection of y onto the line through x has{" "}
          <M>{"b = x\\cdot y / x \\cdot x = 4/5"}</M>. The residual is (−0.6, 1.2), which is perpendicular to x, and its squared
          length 1.8 is the smallest residual sum of squares.
        </p>
      </Example>

      <Remark title="what the geometry gives">
        <p>
          Pythagoras gives <M>{"\\|y\\|^2 = \\|\\hat y\\|^2 + \\|y - \\hat y\\|^2"}</M>, and, after centring, the decomposition of
          the total sum of squares into explained and residual parts, with <M>{"R^2"}</M> the explained share. The residual
          lies in an (n − p)-dimensional space, which is why the error variance is estimated by dividing the residual sum of
          squares by n − p.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "perp",
      rung: "check",
      prompt: <p>What characterises the least-squares fitted vector ŷ?</p>,
      answer: {
        kind: "choice",
        options: [
          "The residual y − ŷ is perpendicular to every column of X.",
          "It equals y.",
          "It is parallel to the residual.",
          "It has the same length as y.",
        ],
        correct: [0],
      },
    },
    {
      key: "hat",
      rung: "check",
      prompt: <p>Which property shows that the hat matrix H is a projection?</p>,
      answer: { kind: "choice", options: ["H² = H", "H is invertible", "H has determinant 1", "H = 0"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at the least-squares value of b, what is the squared length of the residual? Give one decimal place.</p>,
      answer: { kind: "numeric", value: 1.8, tolerance: 0.01 },
    },
    {
      key: "b",
      rung: "apply",
      prompt: <p>For x = (1, 1, 1) and y = (2, 4, 9), what value of b minimises ‖y − bx‖²?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0.001 },
    },
    {
      key: "df",
      rung: "apply",
      prompt: <p>With n = 30 observations and p = 4 columns in X, in how many dimensions does the residual vector lie?</p>,
      answer: { kind: "numeric", value: 26 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if Xᵀ(y − Xβ̂) = 0, then β̂ minimises ‖y − Xb‖² over all b.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes y − Xb = (y − Xβ̂) + X(β̂ − b).",
          "Uses the orthogonality condition to show the cross term 2(β̂ − b)ᵀXᵀ(y − Xβ̂) vanishes.",
          "Concludes ‖y − Xb‖² = ‖y − Xβ̂‖² + ‖X(β̂ − b)‖² ≥ ‖y − Xβ̂‖².",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the column of ones in X force the residuals to sum to zero?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the residual is perpendicular to every column of X, including the column of ones.",
          "Writes this as 1ᵀ(y − ŷ) = Σ(yᵢ − ŷᵢ) = 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, inference for regression: the sampling distribution of the slope, standard errors, t tests and confidence
      intervals for coefficients.
    </p>
  ),
};
