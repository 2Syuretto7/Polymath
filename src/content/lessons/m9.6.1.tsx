import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { StickBreakViz } from "@/components/viz/StickBreakViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.6.1",
  minutes: 90,
  links: {
    revisits: ["m9.5.1", "m9.5.4", "m9.2.3"],
    foreshadows: ["m9.6.2", "m27.4.1", "m27.4.2"],
  },

  puzzle: (
    <>
      <p>
        Break a stick at a random point, then break the left piece at a random point. How long do you expect the final small
        piece to be? If you knew where the first break was, the answer would be easy: half of it. But you do not know. Can an
        answer that depends on an unknown quantity still be used as a number, or even averaged?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the slice and compare the average of the points in it with the line y = x/2.</p>
      <StickBreakViz />
    </>
  ),

  theory: (
    <>
      <Definition title="conditional expectation given an event or value">
        <p>For discrete variables,</p>
        <MD>{"E(Y \\mid X = x) = \\sum_y y\\,P(Y = y \\mid X = x),"}</MD>
        <p>
          and for densities, <M>{"E(Y \\mid X = x) = \\int y\\, f_{Y\\mid X}(y \\mid x)\\,dy"}</M>. It is the mean of the
          conditional distribution, a number for each <M>{"x"}</M>.
        </p>
      </Definition>

      <Definition title="conditional expectation as a random variable">
        <p>
          Let <M>{"g(x) = E(Y \\mid X = x)"}</M>. Then <M>{"E(Y \\mid X)"}</M> means the random variable <M>{"g(X)"}</M>: we
          compute the answer for each possible value, then let <M>{"X"}</M> decide which one applies. In the stick problem,{" "}
          <M>{"E(Y \\mid X) = X/2"}</M>.
        </p>
      </Definition>

      <Theorem title="properties">
        <ul>
          <li>Linearity: <M>{"E(aY_1 + bY_2 \\mid X) = aE(Y_1 \\mid X) + bE(Y_2 \\mid X)"}</M>.</li>
          <li>Taking out what is known: <M>{"E(h(X)Y \\mid X) = h(X)E(Y \\mid X)"}</M>.</li>
          <li>Independence: if <M>{"X"}</M> and <M>{"Y"}</M> are independent, <M>{"E(Y \\mid X) = E(Y)"}</M>.</li>
          <li>The tower property: <M>{"E(E(Y \\mid X)) = E(Y)"}</M>.</li>
        </ul>
      </Theorem>

      <Example title="the stick">
        <p>
          Given <M>{"X = x"}</M>, <M>{"Y"}</M> is uniform on <M>{"(0, x)"}</M>, so <M>{"E(Y \\mid X) = X/2"}</M>. By the
          tower property, <M>{"E(Y) = E(X/2) = 1/4"}</M>, with no need to find the distribution of <M>{"Y"}</M>.
        </p>
      </Example>

      <Theorem title="best prediction">
        <p>
          Among all functions <M>{"h"}</M>, the mean squared error <M>{"E\\big((Y - h(X))^2\\big)"}</M> is smallest when{" "}
          <M>{"h(X) = E(Y \\mid X)"}</M>. Conditional expectation is the best guess of <M>{"Y"}</M> from <M>{"X"}</M>.
        </p>
      </Theorem>

      <Remark title="a projection">
        <p>
          With the inner product <M>{"E(UV)"}</M>, <M>{"E(Y \\mid X)"}</M> is the orthogonal projection of <M>{"Y"}</M> onto the
          space of functions of <M>{"X"}</M>: the error <M>{"Y - E(Y \\mid X)"}</M> is uncorrelated with every function of{" "}
          <M>{"X"}</M>. For bivariate normals the projection happens to be linear, which is the regression line.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kind",
      rung: "check",
      prompt: <p>What kind of object is E(Y | X)?</p>,
      answer: {
        kind: "choice",
        options: ["A fixed number", "A random variable, a function of X", "A probability", "A density"],
        correct: [1],
      },
    },
    {
      key: "indep",
      rung: "check",
      prompt: <p>If X and Y are independent and E(Y) = 7, what is E(Y | X)?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "dice",
      rung: "apply",
      prompt: <p>Roll two fair dice. X is the first roll and S the total. What is E(S | X = 4)?</p>,
      answer: { kind: "numeric", value: 7.5, tolerance: 0.001 },
    },
    {
      key: "known",
      rung: "apply",
      prompt: <p>If E(Y | X) = 2X + 1, what is E(XY | X)?</p>,
      answer: { kind: "choice", options: ["2X + 1", "2X² + X", "X(2X + 1)²", "E(X)(2X + 1)"], correct: [1] },
    },
    {
      key: "tower",
      rung: "apply",
      prompt: <p>A number N of customers arrives with E(N) = 20, and each spends an amount with mean 150 rupees, independent of N. What is the expected total spending, in rupees?</p>,
      answer: { kind: "numeric", value: 3000 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the tower property E(E(Y | X)) = E(Y) for discrete X and Y.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes E(E(Y | X)) as the sum over x of E(Y | X = x) P(X = x).",
          "Substitutes E(Y | X = x) = Σ_y y P(Y = y | X = x) and uses P(Y = y | X = x)P(X = x) = P(X = x, Y = y).",
          "Swaps the sums and sums out x to get Σ_y y P(Y = y) = E(Y).",
        ],
      },
    },
    {
      key: "three",
      rung: "stretch",
      prompt: <p>Break a stick at a uniform point, break the left piece at a uniform point, and do it once more to the new left piece. What is the expected length of the final left piece? Can you guess the pattern for n breaks?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses conditional expectation at each stage, halving the expected length.",
          "Gets 1/8 for three breaks.",
          "Guesses 1/2ⁿ for n breaks. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend conditional expectation given a value and as a random variable, the stick-breaking example, the properties including taking out what is known and the tower property, and why E(Y | X) is the best predictor of Y from X.",

  glimpse: (
    <p>
      The next lesson splits a variance using conditioning. Measure-theoretic probability defines conditional expectation in
      general, and martingales are built on it.
    </p>
  ),
};
