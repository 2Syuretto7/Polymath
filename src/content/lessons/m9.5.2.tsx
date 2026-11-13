import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CorrelationCloudViz } from "@/components/viz/CorrelationCloudViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.5.2",
  minutes: 85,
  links: {
    revisits: ["m9.5.1", "m9.2.4", "m3.5.3"],
    foreshadows: ["m9.5.4", "m9.6.2", "m18.6.2"],
  },

  puzzle: (
    <>
      <p>
        Taller people tend to be heavier, but not always. Ice-cream sales and drownings rise together, though neither causes
        the other. How can one number measure how strongly two quantities move together, and what can it miss?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Slide the correlation and watch the cloud. Then switch to the curved pattern.</p>
      <CorrelationCloudViz />
    </>
  ),

  theory: (
    <>
      <Definition title="covariance">
        <p>With <M>{"\\mu_X = E(X)"}</M> and <M>{"\\mu_Y = E(Y)"}</M>,</p>
        <MD>{"\\operatorname{Cov}(X, Y) = E\\big((X - \\mu_X)(Y - \\mu_Y)\\big) = E(XY) - E(X)E(Y)."}</MD>
        <p>
          It is positive when <M>{"X"}</M> and <M>{"Y"}</M> tend to be above or below their means together, and negative when
          one tends to be above while the other is below.
        </p>
      </Definition>

      <Theorem title="properties">
        <ul>
          <li><M>{"\\operatorname{Cov}(X, X) = \\operatorname{Var}(X)"}</M> and <M>{"\\operatorname{Cov}(X, Y) = \\operatorname{Cov}(Y, X)"}</M>.</li>
          <li>Covariance is bilinear: <M>{"\\operatorname{Cov}(aX + b, cY + d) = ac\\operatorname{Cov}(X, Y)"}</M>, and it adds over sums in each slot.</li>
          <li><M>{"\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) + 2\\operatorname{Cov}(X, Y)"}</M>.</li>
          <li>If <M>{"X"}</M> and <M>{"Y"}</M> are independent then <M>{"\\operatorname{Cov}(X, Y) = 0"}</M>.</li>
        </ul>
      </Theorem>

      <Definition title="correlation">
        <MD>{"\\rho(X, Y) = \\frac{\\operatorname{Cov}(X, Y)}{\\operatorname{SD}(X)\\operatorname{SD}(Y)}."}</MD>
        <p>It has no units, and is unchanged by rescaling either variable by a positive factor.</p>
      </Definition>

      <Theorem title="correlation lies between −1 and 1">
        <p>
          <M>{"-1 \\le \\rho \\le 1"}</M>, with <M>{"|\\rho| = 1"}</M> exactly when <M>{"Y = aX + b"}</M> with probability 1
          for some <M>{"a \\ne 0"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>Standardise: let <M>{"U = (X - \\mu_X)/\\sigma_X"}</M> and <M>{"V = (Y - \\mu_Y)/\\sigma_Y"}</M>. Then</p>
        <MD>{"0 \\le \\operatorname{Var}(U \\pm V) = 1 + 1 \\pm 2\\rho,"}</MD>
        <p>so <M>{"\\rho \\ge -1"}</M> and <M>{"\\rho \\le 1"}</M>. Equality forces <M>{"U \\pm V"}</M> to be constant, which is a straight-line relation. This is the Cauchy–Schwarz inequality for the inner product <M>{"\\operatorname{Cov}"}</M>.</p>
      </Proof>

      <Example title="uncorrelated but dependent">
        <p>
          Let <M>{"X"}</M> be uniform on <M>{"\\{-1, 0, 1\\}"}</M> and <M>{"Y = X^2"}</M>. Then <M>{"E(X) = 0"}</M> and{" "}
          <M>{"E(XY) = E(X^3) = 0"}</M>, so the covariance is 0, yet <M>{"Y"}</M> is a function of <M>{"X"}</M>.
          Zero correlation means no linear relation, not independence.
        </p>
      </Example>

      <Remark title="correlation and causation">
        <p>
          A correlation may come from a common cause, as hot weather drives both ice-cream sales and swimming; from chance in
          a small sample; or from selection in how data were gathered. Correlation is evidence to be explained, not an
          explanation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "self",
      rung: "check",
      prompt: <p>What is Cov(X, X)?</p>,
      answer: { kind: "choice", options: ["0", "1", "Var(X)", "E(X)²"], correct: [2] },
    },
    {
      key: "range",
      rung: "check",
      prompt: <p>Which values can a correlation take?</p>,
      answer: { kind: "choice", options: ["Any real number", "Between 0 and 1", "Between −1 and 1", "Only −1, 0 or 1"], correct: [2] },
    },
    {
      key: "varsum",
      rung: "apply",
      prompt: <p>Var(X) = 4, Var(Y) = 9 and Cov(X, Y) = 3. What is Var(X + Y)?</p>,
      answer: { kind: "numeric", value: 19 },
    },
    {
      key: "rho",
      rung: "apply",
      prompt: <p>With the same numbers, what is the correlation of X and Y?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "bilin",
      rung: "apply",
      prompt: <p>With Cov(X, Y) = 3, what is Cov(2X + 1, 3Y − 4)?</p>,
      answer: { kind: "numeric", value: 18 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that Cov(X, Y) = E(XY) − E(X)E(Y).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands (X − μ_X)(Y − μ_Y) into XY − μ_Y X − μ_X Y + μ_X μ_Y.",
          "Takes expectations using linearity, treating the means as constants.",
          "Simplifies to E(XY) − μ_X μ_Y.",
        ],
      },
    },
    {
      key: "cause",
      rung: "stretch",
      prompt: <p>Across Indian districts, the number of hospitals is strongly correlated with the number of deaths each year. Should we conclude that hospitals are dangerous? Explain what else might be going on.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies a common cause such as population size.",
          "Suggests how to adjust, for example by using rates per person.",
          "Draws a sensible conclusion about causation. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend covariance and its two formulas, the variance of a sum, correlation and why it lies between −1 and 1, an example of uncorrelated but dependent variables, and why correlation does not establish causation.",

  glimpse: (
    <p>
      The next lessons change variables in joint densities and meet the multivariate normal, where zero correlation does mean
      independence. Least squares in statistics turns correlation into the slope of a best-fitting line.
    </p>
  ),
};
