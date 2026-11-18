import { M, MD } from "@/components/Math";
import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CancellationViz } from "@/components/viz/CancellationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m19.1.2",
  minutes: 90,
  links: {
    revisits: ["m19.1.1", "m2.9.5", "m8.3.1"],
    foreshadows: ["m19.5.1", "m19.5.2", "m19.6.2"],
  },

  puzzle: (
    <>
      <p>
        Compute (1 − cos x)/x² for x = 10⁻⁸. The answer is very nearly 1/2. A computer accurate to sixteen digits returns 0.
        Is the problem hard, or was the method poor? And how could you tell the difference?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the two formulas as x shrinks. Which one loses its digits?</p>
      <CancellationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="condition number">
        <p>
          A problem maps data x to a result f(x). Its <strong>relative condition number</strong> measures how much relative
          changes in the data are magnified:
        </p>
        <MD>{"\\kappa(x) = \\lim_{\\varepsilon\\to 0}\\ \\sup_{|\\delta x| \\le \\varepsilon|x|} \\frac{|f(x+\\delta x) - f(x)|/|f(x)|}{|\\delta x|/|x|} = \\left|\\frac{x f'(x)}{f(x)}\\right|."}</MD>
        <p>
          A problem is <strong>well conditioned</strong> if κ is small. Since rounding the data alone causes relative errors of
          size u, no method can be expected to do better than about κu.
        </p>
      </Definition>

      <Example title="subtraction">
        <p>
          For f(x) = x − a, <M>{"\\kappa = |x/(x - a)|"}</M>, which is huge when x is close to a. This is{" "}
          <strong>cancellation</strong>: the leading digits agree and vanish, and earlier rounding errors in x become the
          leading digits of the result. In 1 − cos x for small x, cos x already carries an error of size u, so the difference,
          of size x²/2, has relative error about <M>{"2u/x^2"}</M>.
        </p>
      </Example>

      <Definition title="stability">
        <p>
          An algorithm is <strong>backward stable</strong> if its computed result is the exact result for slightly perturbed
          data: <M>{"\\tilde f(x) = f(x + \\delta x)"}</M> with <M>{"|\\delta x|/|x| = O(u)"}</M>. Then the forward error is at
          most about κu, the best one could hope for. The formula (1 − cos x)/x² is an unstable algorithm for a
          well-conditioned problem; 2 sin²(x/2)/x² is a stable one.
        </p>
      </Definition>

      <Remark title="the general lesson">
        <p>
          Accuracy depends on two separate things: the conditioning of the problem, a property of the mathematics, and the
          stability of the algorithm, a property of the method. For linear systems the condition number is{" "}
          <M>{"\\kappa(A) = \\|A\\|\\,\\|A^{-1}\\|"}</M>, and Gaussian elimination with pivoting is, in practice, backward
          stable.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>What does a large condition number tell you?</p>,
      answer: {
        kind: "choice",
        options: [
          "Small relative changes in the data can cause large relative changes in the answer.",
          "The algorithm is unstable.",
          "The answer is large.",
          "The computer has low precision.",
        ],
        correct: [0],
      },
    },
    {
      key: "stab",
      rung: "check",
      prompt: <p>What does it mean for an algorithm to be backward stable?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its computed answer is the exact answer for slightly perturbed data.",
          "It gives the exact answer.",
          "It runs backwards.",
          "Its error decreases with each step.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for which smallest power k does the first formula return exactly 0?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "sqrt",
      rung: "apply",
      prompt: <p>What is the relative condition number of f(x) = √x, for x &gt; 0?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "sub",
      rung: "apply",
      prompt: <p>What is the relative condition number of f(x) = x − 1 at x = 1.001?</p>,
      answer: { kind: "numeric", value: 1001, tolerance: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that for differentiable f with f(x) ≠ 0, the relative condition number is |x f′(x)/f(x)|.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes f(x + δx) − f(x) ≈ f′(x)δx to first order.",
          "Divides the relative change in f by the relative change δx/x to get x f′(x)/f(x).",
          "Takes absolute values and the limit as δx → 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The quadratic formula (−b + √(b² − 4c))/2 for a root of x² + bx + c loses accuracy when b is large and positive. Why, and what formula avoids it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that √(b² − 4c) is close to b, so −b + √(b² − 4c) suffers cancellation.",
          "Uses the product of the roots, c, to compute this root as 2c/(−b − √(b² − 4c)), which has no cancellation.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, root finding begins with bisection: slow, but guaranteed, and the benchmark against which faster methods are
      measured.
    </p>
  ),
};
