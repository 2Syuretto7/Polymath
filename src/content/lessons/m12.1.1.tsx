import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MetricBallViz } from "@/components/viz/MetricBallViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.1.1",
  minutes: 80,
  links: {
    revisits: ["m8.3.1", "m6.4.1", "m2.1.3"],
    foreshadows: ["m12.1.2", "m23.1.1", "m31.1.1"],
  },

  puzzle: (
    <>
      <p>
        In Chennai, an auto ride follows the roads; a crow flies straight. Both give a sensible &ldquo;distance&rdquo;, yet they
        disagree. Real analysis used <M>{"|x - y|"}</M> for closeness on the line. What do limits and continuity really need
        from a notion of distance, so that the same ideas work for points in the plane, functions, or strings of letters?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a metric on the plane and draw the ball of radius r around a point. The shape of &ldquo;nearby&rdquo; changes
        with the metric.
      </p>
      <MetricBallViz />
    </>
  ),

  theory: (
    <>
      <Definition title="metric space">
        <p>
          A <strong>metric</strong> on a set <M>{"X"}</M> is a function <M>{"d : X \\times X \\to [0, \\infty)"}</M> such that,
          for all <M>{"x, y, z \\in X"}</M>,
        </p>
        <MD>{"d(x, y) = 0 \\iff x = y, \\qquad d(x, y) = d(y, x), \\qquad d(x, z) \\le d(x, y) + d(y, z)."}</MD>
        <p>
          The pair <M>{"(X, d)"}</M> is a <strong>metric space</strong>. The <strong>open ball</strong> is{" "}
          <M>{"B(x, r) = \\{ y \\in X : d(x, y) < r \\}"}</M>.
        </p>
      </Definition>

      <Example title="metrics on ℝⁿ and beyond">
        <p>
          On <M>{"\\mathbb{R}^n"}</M>: the Euclidean metric <M>{"d_2(x, y) = \\sqrt{\\sum (x_i - y_i)^2}"}</M>, the taxicab
          metric <M>{"d_1(x, y) = \\sum |x_i - y_i|"}</M>, and the maximum metric{" "}
          <M>{"d_\\infty(x, y) = \\max |x_i - y_i|"}</M>. Every norm gives a metric <M>{"d(x, y) = \\|x - y\\|"}</M>. On any set,
          the discrete metric is 0 for equal points and 1 otherwise. On the continuous functions on <M>{"[0, 1]"}</M>,{" "}
          <M>{"d(f, g) = \\sup |f(t) - g(t)|"}</M>. On words of the same length, the Hamming distance counts the places where
          they differ.
        </p>
      </Example>

      <Theorem title="comparing metrics on ℝⁿ">
        <MD>{"d_\\infty(x, y) \\le d_2(x, y) \\le d_1(x, y) \\le n \\, d_\\infty(x, y)."}</MD>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"a_i = |x_i - y_i|"}</M> and <M>{"m = \\max a_i"}</M>. Then <M>{"m^2 \\le \\sum a_i^2"}</M>, and{" "}
          <M>{"\\sum a_i^2 \\le (\\sum a_i)^2"}</M> since the cross terms are non-negative. Finally each{" "}
          <M>{"a_i \\le m"}</M>, so <M>{"\\sum a_i \\le nm"}</M>.
        </p>
      </Proof>

      <Remark title="why the triangle inequality">
        <p>
          The triangle inequality is what makes limits behave: if <M>{"x_n"}</M> is close to <M>{"a"}</M> and{" "}
          <M>{"a"}</M> is close to <M>{"b"}</M>, then <M>{"x_n"}</M> is close to <M>{"b"}</M>. It gives uniqueness of limits
          and the reverse inequality <M>{"|d(x, z) - d(y, z)| \\le d(x, y)"}</M>. The comparison above shows that the three
          metrics on <M>{"\\mathbb{R}^n"}</M> agree on which sequences converge, even though their balls look different.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "taxi",
      rung: "check",
      prompt: <p>What is the taxicab distance between (1, 2) and (4, −2)?</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "max",
      rung: "check",
      prompt: <p>What is the maximum-metric distance between (1, 2) and (4, −2)?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "shape",
      rung: "apply",
      prompt: <p>What shape is the unit ball of the taxicab metric in the plane?</p>,
      answer: { kind: "choice", options: ["A disc", "A square with sides parallel to the axes", "A diamond (a square rotated by 45°)", "A single point"], correct: [2] },
    },
    {
      key: "notmetric",
      rung: "apply",
      prompt: <p>Which of these is not a metric on ℝ?</p>,
      answer: {
        kind: "choice",
        options: ["d(x, y) = |x − y|", "d(x, y) = (x − y)²", "d(x, y) = min(|x − y|, 1)", "d(x, y) = 2|x − y|"],
        correct: [1],
      },
    },
    {
      key: "ham",
      rung: "apply",
      prompt: <p>What is the Hamming distance between the words KAROL and CAROT?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the discrete metric satisfies the triangle inequality.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Handles the case x = z, where the left side is 0.",
          "If x ≠ z, notes that y differs from x or from z, so the right side is at least 1.",
          "Concludes d(x, z) ≤ d(x, y) + d(y, z) in all cases.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is d(x, y) = |x − y| / (1 + |x − y|) a metric on ℝ? What is unusual about it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks positivity and symmetry, and argues the triangle inequality, for example because t/(1 + t) is increasing and subadditive.",
          "Notes that all distances are less than 1, yet the same sequences converge.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a metric is, with the Euclidean, taxicab, maximum and discrete examples, what open balls look like for each, and why the triangle inequality is the key axiom.",

  glimpse: (
    <p>
      The next lesson defines open and closed sets using balls. Later, normed spaces of functions and the curved metrics of
      Riemannian geometry build on the same definition.
    </p>
  ),
};
