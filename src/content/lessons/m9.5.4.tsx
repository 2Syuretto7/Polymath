import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { BivariateNormalViz } from "@/components/viz/BivariateNormalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.5.4",
  minutes: 95,
  links: {
    revisits: ["m9.5.2", "m9.5.3", "m8.4.2"],
    foreshadows: ["m9.6.1", "m9.7.2", "m18.6.1"],
  },

  puzzle: (
    <>
      <p>
        Francis Galton noticed that very tall parents tend to have children who are tall, but less extremely so. He called it
        regression towards mediocrity, and wondered whether some biological force was at work. Could it instead be a
        mathematical fact about two quantities that are correlated but not perfectly?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Adjust the spreads and the correlation, and condition on different values of X.</p>
      <BivariateNormalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="multivariate normal">
        <p>
          A random vector <M>{"\\mathbf X = (X_1, \\dots, X_n)"}</M> is <strong>multivariate normal</strong> if every linear
          combination <M>{"a_1X_1 + \\cdots + a_nX_n"}</M> is normal. It is determined by its mean vector{" "}
          <M>{"\\boldsymbol\\mu"}</M> and covariance matrix <M>{"\\Sigma"}</M>, with entries{" "}
          <M>{"\\Sigma_{ij} = \\operatorname{Cov}(X_i, X_j)"}</M>. If <M>{"\\Sigma"}</M> is invertible, the density is
        </p>
        <MD>{"f(\\mathbf x) = \\frac{1}{(2\\pi)^{n/2}\\sqrt{\\det \\Sigma}} \\exp\\!\\Big(-\\tfrac12 (\\mathbf x - \\boldsymbol\\mu)^{\\mathsf T}\\Sigma^{-1}(\\mathbf x - \\boldsymbol\\mu)\\Big)."}</MD>
      </Definition>

      <Example title="construction">
        <p>
          Take independent standard normals <M>{"\\mathbf Z"}</M> and set <M>{"\\mathbf X = A\\mathbf Z + \\boldsymbol\\mu"}</M>.
          Then <M>{"\\mathbf X"}</M> is multivariate normal with covariance <M>{"AA^{\\mathsf T}"}</M>. In two dimensions,{" "}
          <M>{"X = Z_1"}</M>, <M>{"Y = \\rho Z_1 + \\sqrt{1 - \\rho^2} Z_2"}</M> gives standard normals with correlation{" "}
          <M>{"\\rho"}</M>.
        </p>
      </Example>

      <Theorem title="uncorrelated means independent">
        <p>
          If <M>{"(X, Y)"}</M> is bivariate normal and <M>{"\\operatorname{Cov}(X, Y) = 0"}</M>, then <M>{"X"}</M> and{" "}
          <M>{"Y"}</M> are independent: the covariance matrix is diagonal, so the density factorises. This fails for variables
          that are each normal but not jointly normal.
        </p>
      </Theorem>

      <Theorem title="conditional distributions">
        <p>For bivariate normal <M>{"(X, Y)"}</M> with correlation <M>{"\\rho"}</M>, given <M>{"X = x"}</M>,</p>
        <MD>{"Y \\sim N\\!\\Big(\\mu_Y + \\rho\\frac{\\sigma_Y}{\\sigma_X}(x - \\mu_X),\; \\sigma_Y^2(1 - \\rho^2)\\Big)."}</MD>
        <p>The conditional mean is linear in <M>{"x"}</M> and the conditional variance does not depend on <M>{"x"}</M>.</p>
      </Theorem>

      <Remark title="regression towards the mean">
        <p>
          In standard units the conditional mean is <M>{"\\rho x"}</M>. With <M>{"|\\rho| < 1"}</M>, a parent 2 standard
          deviations above average predicts a child only <M>{"2\\rho"}</M> above average. No force is needed: it is what
          imperfect correlation means. The contours are ellipses whose axes are the eigenvectors of <M>{"\\Sigma"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which property defines a multivariate normal vector?</p>,
      answer: {
        kind: "choice",
        options: [
          "Each coordinate is normal.",
          "Every linear combination of the coordinates is normal.",
          "The coordinates are independent.",
          "The covariance matrix is the identity.",
        ],
        correct: [1],
      },
    },
    {
      key: "indep",
      rung: "check",
      prompt: <p>For a bivariate normal pair, what does zero correlation imply?</p>,
      answer: { kind: "choice", options: ["Nothing more", "Independence", "That both have mean 0", "That X = Y"], correct: [1] },
    },
    {
      key: "cm",
      rung: "apply",
      prompt: <p>Heights of parents and children are bivariate normal in standard units with ρ = 0.5. A parent is 2 standard units above average. What is the child&rsquo;s expected height in standard units?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "csd",
      rung: "apply",
      prompt: <p>With σ_Y = 10 and ρ = 0.6, what is the standard deviation of Y given X = x?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0.001 },
    },
    {
      key: "sum",
      rung: "apply",
      prompt: <p>(X, Y) is bivariate normal with Var(X) = 1, Var(Y) = 4 and Cov(X, Y) = 1. What is Var(X + Y)?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Let Z₁, Z₂ be independent standard normals, X = Z₁ and Y = ρZ₁ + √(1 − ρ²)Z₂. Show that Y is standard normal and Corr(X, Y) = ρ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Y is a linear combination of independent normals, so normal, with mean 0.",
          "Computes Var(Y) = ρ² + (1 − ρ²) = 1.",
          "Computes Cov(X, Y) = ρ Var(Z₁) = ρ, so the correlation is ρ.",
        ],
      },
    },
    {
      key: "fallacy",
      rung: "stretch",
      prompt: <p>Students who scored worst on a first test improved most on a second, after extra tutoring. Does this show the tutoring worked?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recognises regression towards the mean as an explanation without any tutoring effect.",
          "Suggests a fair comparison, such as a control group of similar students without tutoring.",
          "Draws a sensible conclusion. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the multivariate normal and how to build one from independent normals, why zero correlation means independence here, the conditional distribution of Y given X, and regression towards the mean.",

  glimpse: (
    <p>
      The next lesson studies conditional expectation in general, of which the linear regression line is a special case. The
      central limit theorem explains why multivariate normals turn up so often.
    </p>
  ),
};
