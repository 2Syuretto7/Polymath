import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ChordTangentViz } from "@/components/viz/ChordTangentViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.2.3",
  minutes: 90,
  links: {
    revisits: ["m30.2.2", "m30.2.1", "m14.5.3"],
    foreshadows: ["m30.5.3", "m30.6.3", "m30.3.1"],
  },

  puzzle: (
    <>
      <p>
        The points (−2, 3) and (−1, 4) lie on the curve y² = x³ + 17. Draw the line through them. Where else does it meet
        the curve, and why must that point have rational coordinates too? Starting from a few points, how many rational
        points can you produce?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose two rational points P and Q, and follow the chord to their sum.</p>
      <ChordTangentViz />
    </>
  ),

  theory: (
    <>
      <Definition title="elliptic curves">
        <p>
          Over a field of characteristic not 2 or 3, an <strong>elliptic curve</strong> is a smooth projective cubic with
          affine equation <M>{"y^2 = x^3 + ax + b"}</M>, where <M>{"4a^3 + 27b^2 \\neq 0"}</M> so that the cubic has distinct
          roots, together with its single point at infinity <M>{"O = [0 : 1 : 0]"}</M>. It has genus 1.
        </p>
      </Definition>

      <Definition title="the chord and tangent law">
        <p>
          By Bézout, a line meets the curve in three points counted with multiplicity. For points P and Q, let R be the third
          point on the line through them (the tangent if P = Q); then P + Q is the reflection of R in the x-axis. With slope
          λ, the coordinates are <M>{"x_3 = \\lambda^2 - x_1 - x_2"}</M> and <M>{"y_3 = \\lambda(x_1 - x_3) - y_1"}</M>,
          where <M>{"\\lambda = (y_2 - y_1)/(x_2 - x_1)"}</M>, or <M>{"(3x_1^2 + a)/(2y_1)"}</M> for doubling.
        </p>
      </Definition>

      <Theorem title="the group law">
        <p>
          This addition makes the points of E into an abelian group with identity O, where −(x, y) = (x, −y). Associativity
          is the hard part; it follows from the Cayley-Bacharach theorem on cubics through eight points, or from identifying
          E with its group of degree-zero divisor classes. If a and b are rational, the rational points form a subgroup E(ℚ),
          since the formulas involve only field operations.
        </p>
      </Theorem>

      <Example title="y² = x³ + 17">
        <p>
          The line through (−2, 3) and (−1, 4) has slope 1, so <M>{"x_3 = 1 + 2 + 1 = 4"}</M> and{" "}
          <M>{"y_3 = 1 \\cdot (-2 - 4) - 3 = -9"}</M>: the sum is (4, −9). Doubling (−2, 3) gives slope 2 and the point
          (8, −23). Repeated additions produce points with ever larger numerators and denominators.
        </p>
      </Example>

      <Remark title="Mordell’s theorem">
        <p>
          Mordell proved in 1922 that E(ℚ) is finitely generated, so <M>{"E(\\mathbb{Q}) \\cong \\mathbb{Z}^r \\oplus T"}</M>{" "}
          with T finite, by the structure theorem for finitely generated abelian groups. Mazur showed T has at most 16
          elements. The rank r is mysterious: the Birch and Swinnerton-Dyer conjecture relates it to an L-function, and is one
          of the Millennium Prize Problems. Over ℂ, E is a torus ℂ/Λ, and the Weierstrass ℘-function realises the group law.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "identity",
      rung: "check",
      prompt: <p>What is the identity element of the group of points on an elliptic curve?</p>,
      answer: { kind: "choice", options: ["The point at infinity O", "The origin (0, 0)", "The point (1, 1)", "There is none"], correct: [0] },
    },
    {
      key: "neg",
      rung: "check",
      prompt: <p>What is −(x, y) in the group law on y² = x³ + ax + b?</p>,
      answer: { kind: "choice", options: ["(x, −y)", "(−x, y)", "(−x, −y)", "(y, x)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take P = (−2, 3) and Q = (−1, 4). What is the x-coordinate of P + Q?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "double",
      rung: "apply",
      prompt: <p>On y² = x³ + 17, what is the x-coordinate of 2P for P = (−2, 3)?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "mordell",
      rung: "apply",
      prompt: <p>What does Mordell&rsquo;s theorem say about E(ℚ)?</p>,
      answer: { kind: "choice", options: ["It is a finitely generated abelian group", "It is always finite", "It is always infinite", "It is never a group"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if P and Q are distinct rational points of E with different x-coordinates, then P + Q is rational.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the slope λ = (y₂ − y₁)/(x₂ − x₁) is rational.",
          "Substitutes the line into the cubic: the x-coordinates of the three intersections are roots of a monic cubic with rational coefficients, whose roots sum to λ².",
          "Concludes x₃ = λ² − x₁ − x₂ and y₃ = λ(x₁ − x₃) − y₁ are rational.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does a vertical line through P meet the curve again only at O, and what does this say about P + (−P)?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a vertical line meets the affine curve only at (x, y) and (x, −y).",
          "Notes the third intersection is the point at infinity O.",
          "Concludes P + (−P) is the reflection of O, which is O. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        So far, functions have lived on whole varieties. To glue local information into global objects, geometry needs a way
        to attach data to every open set at once, compatibly with restriction.
      </p>
      <p>Next, presheaves and sheaves.</p>
    </>
  ),
};
