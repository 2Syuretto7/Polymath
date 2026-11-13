import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { HighDimViz } from "@/components/viz/HighDimViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.1.1",
  minutes: 80,
  links: {
    revisits: ["m3.1.2", "m3.1.1", "m0.7.3"],
    foreshadows: ["m5.1.2", "m8.3.1", "m12.2.1"],
  },

  puzzle: (
    <>
      <p>
        The temperature in a room depends on three coordinates of position and one of time. The state of a gas of a
        thousand particles needs six thousand numbers. A photograph is a point in a space with millions of dimensions, one
        for each pixel. We cannot picture any of these spaces. Yet calculus works in them all, because we can still
        measure lengths, distances and angles. How do we extend geometry to spaces we cannot see, and what surprises are
        waiting there?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The unit cube has a version in every dimension. Move the slider and watch what happens to its diagonal and to the
        ball that fits inside it.
      </p>
      <HighDimViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Euclidean space">
        <p>
          <M>{"\\mathbb{R}^n"}</M> is the set of ordered <M>{"n"}</M>-tuples <M>{"x = (x_1, \\dots, x_n)"}</M> of real
          numbers, with addition and scaling done coordinate by coordinate. It carries the <strong>dot product</strong>{" "}
          <M>{"x \\cdot y = x_1y_1 + \\dots + x_ny_n"}</M>, the <strong>length</strong> or norm{" "}
          <M>{"\\|x\\| = \\sqrt{x \\cdot x}"}</M>, and the <strong>distance</strong> <M>{"d(x, y) = \\|x - y\\|"}</M>. In
          two and three dimensions these are Pythagoras&rsquo;s theorem; in higher dimensions they are definitions that
          keep the same algebra.
        </p>
      </Definition>

      <Theorem title="Cauchy–Schwarz and the triangle inequality">
        <p>For all <M>{"x, y \\in \\mathbb{R}^n"}</M>,</p>
        <MD>{"|x \\cdot y| \\le \\|x\\|\\,\\|y\\| \\qquad \\text{and} \\qquad \\|x + y\\| \\le \\|x\\| + \\|y\\|."}</MD>
      </Theorem>

      <Proof>
        <p>
          If <M>{"y = 0"}</M> both sides of the first are 0. Otherwise, for every real <M>{"t"}</M>,
        </p>
        <MD>{"0 \\le \\|x - ty\\|^2 = \\|x\\|^2 - 2t\\,(x \\cdot y) + t^2\\|y\\|^2."}</MD>
        <p>
          A quadratic in <M>{"t"}</M> that is never negative has discriminant at most 0, so{" "}
          <M>{"4(x \\cdot y)^2 \\le 4\\|x\\|^2\\|y\\|^2"}</M>, which is Cauchy–Schwarz. Then{" "}
          <M>{"\\|x + y\\|^2 = \\|x\\|^2 + 2\\,x \\cdot y + \\|y\\|^2 \\le (\\|x\\| + \\|y\\|)^2"}</M>, and taking square
          roots gives the triangle inequality.
        </p>
      </Proof>

      <Example title="angles in any dimension">
        <p>
          Cauchy–Schwarz says that <M>{"x \\cdot y / (\\|x\\|\\,\\|y\\|)"}</M> lies between −1 and 1, so we may{" "}
          <em>define</em> the angle <M>{"\\theta"}</M> between nonzero vectors by{" "}
          <M>{"\\cos\\theta = \\frac{x \\cdot y}{\\|x\\|\\,\\|y\\|}"}</M>. For the diagonal{" "}
          <M>{"(1, \\dots, 1)"}</M> of the unit cube and the axis <M>{"e_1 = (1, 0, \\dots, 0)"}</M>, this gives{" "}
          <M>{"\\cos\\theta = 1/\\sqrt{n}"}</M>, which tends to 0: in high dimensions the diagonal is nearly perpendicular
          to every edge.
        </p>
      </Example>

      <Remark title="open balls">
        <p>
          The <strong>open ball</strong> of radius <M>{"r"}</M> about <M>{"a"}</M> is{" "}
          <M>{"B(a, r) = \\{x : \\|x - a\\| < r\\}"}</M>. Limits and continuity in <M>{"\\mathbb{R}^n"}</M> are defined
          exactly as in one variable, with <M>{"|x - a|"}</M> replaced by <M>{"\\|x - a\\|"}</M>: <M>{"f(x) \\to L"}</M>{" "}
          as <M>{"x \\to a"}</M> if for every <M>{"\\varepsilon > 0"}</M> there is a <M>{"\\delta > 0"}</M> with{" "}
          <M>{"|f(x) - L| < \\varepsilon"}</M> whenever <M>{"0 < \\|x - a\\| < \\delta"}</M>. The triangle inequality is
          what makes the familiar proofs go through.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dist",
      rung: "check",
      prompt: <p>Find the distance between (1, 2, 3, 4) and (2, 0, 3, 6) in <M>{"\\mathbb{R}^4"}</M>.</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "diag",
      rung: "check",
      prompt: <p>What is the length of the diagonal of the unit cube in <M>{"\\mathbb{R}^9"}</M>, from (0, …, 0) to (1, …, 1)?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "angle",
      rung: "apply",
      prompt: <p>Find the angle in degrees between (1, 1, 0, 0) and (0, 1, 1, 0).</p>,
      answer: { kind: "numeric", value: 60, tolerance: 0.01 },
    },
    {
      key: "perp",
      rung: "apply",
      prompt: <p>For which value of <M>{"k"}</M> are (1, 2, −1, 3) and (2, k, 4, 0) perpendicular?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "cs",
      rung: "apply",
      prompt: (
        <p>
          Using Cauchy–Schwarz with <M>{"y = (1, 1, 1)"}</M>, what is the largest possible value of{" "}
          <M>{"a + b + c"}</M> when <M>{"a^2 + b^2 + c^2 = 12"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "tri",
      rung: "prove",
      prompt: <p>Prove the triangle inequality for distances: <M>{"d(x, z) \\le d(x, y) + d(y, z)"}</M> for all points of <M>{"\\mathbb{R}^n"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes x − z = (x − y) + (y − z).",
          "Applies the triangle inequality for norms, ‖u + v‖ ≤ ‖u‖ + ‖v‖, to these two vectors.",
        ],
      },
    },
    {
      key: "equality",
      rung: "stretch",
      prompt: <p>When does equality hold in Cauchy–Schwarz? Prove your answer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States that equality holds exactly when one vector is a scalar multiple of the other.",
          "Proves it, for example by noting that equality makes the discriminant 0, so ‖x − ty‖ = 0 for some t, giving x = ty; and checks the converse.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Rⁿ is, how length, distance and angle are defined there, why Cauchy–Schwarz makes angles make sense, and one surprise about high-dimensional cubes.",

  glimpse: (
    <p>
      The next lesson meets an operation special to three dimensions, the cross product, and then curves that move
      through space.
    </p>
  ),
};
