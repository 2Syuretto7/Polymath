import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { JointTableViz } from "@/components/viz/JointTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.5.1",
  minutes: 90,
  links: {
    revisits: ["m9.1.5", "m9.3.1", "m5.5.1"],
    foreshadows: ["m9.5.2", "m9.5.3", "m9.6.1"],
  },

  puzzle: (
    <>
      <p>
        Roll two four-sided dice and tell a friend only the smaller of the two numbers. If it is 3, what are the chances that
        the larger is 4? Knowing one variable changes what we expect of the other. To reason about that we need a description
        of the two together, not each on its own.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the two tables. Click rows to see conditional distributions, and check the margins.</p>
      <JointTableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="joint distribution">
        <p>
          For discrete <M>{"X"}</M> and <M>{"Y"}</M>, the <strong>joint pmf</strong> is <M>{"p(x, y) = P(X = x, Y = y)"}</M>.
          For continuous ones, a <strong>joint density</strong> <M>{"f(x, y) \\ge 0"}</M> gives probabilities by double
          integrals: <M>{"P((X, Y) \\in A) = \\iint_A f(x, y)\\,dx\\,dy"}</M>.
        </p>
      </Definition>

      <Definition title="marginal distribution">
        <p>The distribution of one variable alone is found by summing or integrating out the other:</p>
        <MD>{"P(X = x) = \\sum_y p(x, y), \\qquad f_X(x) = \\int_{-\\infty}^{\\infty} f(x, y)\\,dy."}</MD>
      </Definition>

      <Definition title="conditional distribution">
        <p>For <M>{"P(X = x) > 0"}</M> or <M>{"f_X(x) > 0"}</M>,</p>
        <MD>{"P(Y = y \\mid X = x) = \\frac{p(x, y)}{P(X = x)}, \\qquad f_{Y \\mid X}(y \\mid x) = \\frac{f(x, y)}{f_X(x)}."}</MD>
        <p>
          In the continuous case <M>{"P(X = x) = 0"}</M>, so this is a definition, not a case of the old formula; it is the
          limit of conditioning on <M>{"X"}</M> lying in a small interval around <M>{"x"}</M>.
        </p>
      </Definition>

      <Theorem title="independence">
        <p>
          <M>{"X"}</M> and <M>{"Y"}</M> are independent exactly when the joint factorises:{" "}
          <M>{"p(x, y) = P(X = x)P(Y = y)"}</M> for all <M>{"x, y"}</M>, or <M>{"f(x, y) = f_X(x)f_Y(y)"}</M>. Then each
          conditional distribution equals the marginal.
        </p>
      </Theorem>

      <Example title="the smaller and the larger">
        <p>
          With two fair four-sided dice, each ordered pair has probability <M>{"1/16"}</M>. The smaller is 3 when the rolls
          are (3, 3), (3, 4) or (4, 3), so <M>{"P(X = 3) = 3/16"}</M>; of these, two have larger roll 4. So{" "}
          <M>{"P(Y = 4 \\mid X = 3) = 2/3"}</M>.
        </p>
      </Example>

      <Remark title="marginals do not determine the joint">
        <p>
          Two fair coins tossed separately and one coin counted twice have the same marginals, both fair, but very different
          joints. Knowing each variable&rsquo;s distribution says nothing about how they are linked.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "marg",
      rung: "check",
      prompt: <p>How is the marginal pmf of X found from the joint pmf?</p>,
      answer: {
        kind: "choice",
        options: ["By multiplying across a row", "By summing p(x, y) over all y", "By taking the largest entry", "By dividing by P(Y = y)"],
        correct: [1],
      },
    },
    {
      key: "cell",
      rung: "check",
      prompt: <p>Two fair four-sided dice: X is the smaller roll and Y the larger. What is P(X = 1, Y = 1)? Give a decimal.</p>,
      answer: { kind: "numeric", value: 0.0625, tolerance: 0.0001 },
    },
    {
      key: "max4",
      rung: "apply",
      prompt: <p>For the same dice, what is P(Y = 4), the probability that the larger roll is 4? Give a decimal.</p>,
      answer: { kind: "numeric", value: 7 / 16, tolerance: 0.0001 },
    },
    {
      key: "cond",
      rung: "apply",
      prompt: <p>For the same dice, what is P(Y = 4 | X = 2)?</p>,
      answer: { kind: "numeric", value: 0.4, tolerance: 0.001 },
    },
    {
      key: "dens",
      rung: "apply",
      prompt: <p>X and Y have joint density f(x, y) = x + y on the unit square. Find P(X ≤ 1/2), using the marginal density of X.</p>,
      answer: { kind: "numeric", value: 0.375, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if discrete X and Y are independent, then P(Y = y | X = x) = P(Y = y) whenever P(X = x) &gt; 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the conditional probability as p(x, y)/P(X = x).",
          "Uses independence to replace p(x, y) by P(X = x)P(Y = y).",
          "Cancels P(X = x) to get P(Y = y).",
        ],
      },
    },
    {
      key: "indep",
      rung: "stretch",
      prompt: <p>Without calculating, explain why the smaller and larger of two dice rolls cannot be independent. Then find a single entry of the table that proves it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Argues that knowing the smaller roll constrains the larger, for example the larger is at least the smaller.",
          "Finds an entry such as P(X = 2, Y = 1) = 0 while both marginals are positive.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend joint, marginal and conditional distributions for two discrete variables and for densities, why marginals are found by summing out, the dice example of the smaller and larger roll, and how independence shows up in the joint.",

  glimpse: (
    <p>
      The next lesson summarises how two variables move together with covariance and correlation. Conditional distributions
      lead to conditional expectation, and transformations change variables in joint densities.
    </p>
  ),
};
