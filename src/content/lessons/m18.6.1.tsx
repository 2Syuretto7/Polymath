import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { LeastSquaresFitViz } from "@/components/viz/LeastSquaresFitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.6.1",
  minutes: 90,
  links: {
    revisits: ["m18.2.2", "m3.5.3", "m9.5.1"],
    foreshadows: ["m18.6.2", "m18.6.3", "m18.5.2"],
  },

  puzzle: (
    <>
      <p>
        Francis Galton measured the heights of parents and their grown children. Tall parents had children who were tall,
        but on average less tall than the parents; short parents had children less short. He called this &ldquo;regression
        towards mediocrity&rdquo;. Does it mean the population is becoming more alike? And how should a line be fitted to
        such data at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Adjust the line by hand to make the residual sum of squares small, then compare with least squares.</p>
      <LeastSquaresFitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the simple linear model">
        <p>
          Observations <M>{"(x_i, y_i)"}</M> follow <M>{"y_i = \\alpha + \\beta x_i + \\varepsilon_i"}</M>, where the errors{" "}
          <M>{"\\varepsilon_i"}</M> have mean 0 and common variance σ², and the x values are treated as fixed. The{" "}
          <strong>least-squares</strong> estimates minimise the residual sum of squares{" "}
          <M>{"\\sum (y_i - a - b x_i)^2"}</M>.
        </p>
      </Definition>

      <Theorem title="the least-squares line">
        <p>Setting the two partial derivatives to zero gives</p>
        <MD>{"\\hat\\beta = \\frac{S_{xy}}{S_{xx}} = \\frac{\\sum (x_i - \\bar x)(y_i - \\bar y)}{\\sum (x_i - \\bar x)^2}, \\qquad \\hat\\alpha = \\bar y - \\hat\\beta\\,\\bar x."}</MD>
        <p>
          The line passes through <M>{"(\\bar x, \\bar y)"}</M>, and the residuals sum to zero. If the errors are normal, these
          are also the maximum likelihood estimates.
        </p>
      </Theorem>

      <Example title="the five points">
        <p>
          For (1, 2), (2, 3), (3, 5), (4, 4), (5, 6): <M>{"\\bar x = 3"}</M>, <M>{"\\bar y = 4"}</M>,{" "}
          <M>{"S_{xy} = 9"}</M> and <M>{"S_{xx} = 10"}</M>, so <M>{"\\hat\\beta = 0.9"}</M> and{" "}
          <M>{"\\hat\\alpha = 1.3"}</M>. The residual sum of squares is 1.9, and no other line does better.
        </p>
      </Example>

      <Remark title="regression to the mean">
        <p>
          In standard units the slope is the correlation r, which has |r| ≤ 1, so the predicted y is fewer standard
          deviations from its mean than x is. That is all Galton&rsquo;s regression is: an effect of imperfect correlation, not
          a narrowing of the population. Regressing x on y gives a different line, and neither line by itself says anything
          about cause.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What does least squares minimise?</p>,
      answer: {
        kind: "choice",
        options: [
          "The sum of squared vertical distances from the points to the line.",
          "The sum of perpendicular distances from the points to the line.",
          "The number of points off the line.",
          "The largest residual.",
        ],
        correct: [0],
      },
    },
    {
      key: "mean",
      rung: "check",
      prompt: <p>Which point always lies on the least-squares line?</p>,
      answer: { kind: "choice", options: ["The point of means (x̄, ȳ)", "The origin", "The first data point", "The point with the largest y"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the intercept to 1 and the slope to 1. What is the residual sum of squares?</p>,
      answer: { kind: "numeric", value: 2.0, tolerance: 0.01 },
    },
    {
      key: "fit",
      rung: "apply",
      prompt: <p>For the points (0, 1), (1, 3), (2, 5), (3, 5), what is the least-squares slope? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 1.4, tolerance: 0.01 },
    },
    {
      key: "galton",
      rung: "apply",
      prompt: <p>Why do the children of very tall parents tend to be less tall than their parents?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the correlation between parent and child heights is less than 1, so predictions lie closer to the mean.",
          "Because the population is becoming more uniform.",
          "Because tall parents eat less.",
          "Because least squares is biased.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive the least-squares estimates by setting the partial derivatives of Σ(yᵢ − a − bxᵢ)² to zero.</p>,
      answer: {
        kind: "written",
        rubric: [
          "The derivative in a gives Σ(yᵢ − a − bxᵢ) = 0, so a = ȳ − b x̄.",
          "The derivative in b gives Σxᵢ(yᵢ − a − bxᵢ) = 0; substituting a gives Σxᵢ(yᵢ − ȳ) = b Σxᵢ(xᵢ − x̄).",
          "Rewrites these sums as Sxy and Sxx to get b = Sxy/Sxx.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why do the regression of y on x and the regression of x on y give different lines, unless the points lie exactly on a line?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that one minimises vertical distances and the other horizontal distances.",
          "In standard units, the slopes are r and 1/r, which agree only when |r| = 1.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, least squares as projection: the fitted values are the orthogonal projection of the data onto the column space
      of the design matrix.
    </p>
  ),
};
