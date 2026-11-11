import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CauchyViz } from "@/components/viz/CauchyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.1.2",
  minutes: 75,
  links: {
    revisits: ["m0.6.5", "m0.7.3"],
    foreshadows: ["m3.5.1", "m3.5.2", "m9.5.2"],
  },

  puzzle: (
    <>
      <p>
        In the plane, the angle between two arrows is something you can measure with a protractor. What is the angle
        between <M>{"(1, 2, 3, 4)"}</M> and <M>{"(4, 3, 2, 1)"}</M>, which live in four dimensions where no protractor can
        go?
      </p>
      <p>
        If the answer is to be defined by a formula with a cosine in it, the formula had better give a number between −1
        and 1, in every dimension. Why should it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Multiply matching components and add: that is the dot product. In the plane it equals the length of one vector
        times the length of the other times the cosine of the angle between them. So it measures how much the two point
        the same way. Change the lengths and the angle below, and watch the shadow of v on u.
      </p>
      <CauchyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="dot product and length">
        <p>For v and w in <M>{"\\mathbb{R}^n"}</M>,</p>
        <MD>{"v \\cdot w = v_1 w_1 + v_2 w_2 + \\cdots + v_n w_n, \\qquad \\|v\\| = \\sqrt{v \\cdot v}."}</MD>
        <p>
          The length <M>{"\\|v\\|"}</M> is Pythagoras in n dimensions. A vector of length 1 is a <strong>unit
          vector</strong>, and <M>{"v / \\|v\\|"}</M> is the unit vector in the direction of any non-zero v.
        </p>
      </Definition>

      <Remark title="rules">
        <p>
          The dot product is symmetric (<M>{"v \\cdot w = w \\cdot v"}</M>), and linear in each slot (
          <M>{"(au + bv) \\cdot w = a\\,u \\cdot w + b\\,v \\cdot w"}</M>), and <M>{"v \\cdot v > 0"}</M> unless{" "}
          <M>{"v = 0"}</M>. Every result below follows from these three facts alone, which is why they will later become the
          definition of an inner product.
        </p>
      </Remark>

      <Theorem title="the Cauchy–Schwarz inequality">
        <p>For all v and w in <M>{"\\mathbb{R}^n"}</M>,</p>
        <MD>{"|v \\cdot w| \\le \\|v\\|\\,\\|w\\|,"}</MD>
        <p>with equality exactly when one is a multiple of the other.</p>
      </Theorem>
      <Proof>
        <p>
          If <M>{"w = 0"}</M> both sides are 0. Otherwise, for every real t,
        </p>
        <MD>{"0 \\le \\|v - t w\\|^2 = \\|v\\|^2 - 2t\\,(v \\cdot w) + t^2 \\|w\\|^2."}</MD>
        <p>
          A quadratic in t that is never negative has at most one real root, so its discriminant is at most 0:{" "}
          <M>{"4(v \\cdot w)^2 - 4\\|v\\|^2\\|w\\|^2 \\le 0"}</M>. Taking square roots gives the inequality. Equality means
          the quadratic has a root t, so <M>{"v - tw = 0"}</M>.
        </p>
      </Proof>

      <Definition title="angle">
        <p>
          For non-zero v and w, Cauchy–Schwarz guarantees that <M>{"\\frac{v \\cdot w}{\\|v\\|\\,\\|w\\|}"}</M> lies between
          −1 and 1, so we may define the angle θ between them by
        </p>
        <MD>{"\\cos\\theta = \\frac{v \\cdot w}{\\|v\\|\\,\\|w\\|}, \\qquad 0 \\le \\theta \\le \\pi."}</MD>
        <p>
          In the plane this agrees with the protractor, by the law of cosines applied to the triangle with sides v, w and{" "}
          <M>{"v - w"}</M>. In higher dimensions it is a definition, and a good one. Vectors with{" "}
          <M>{"v \\cdot w = 0"}</M> are <strong>orthogonal</strong>.
        </p>
      </Definition>

      <Example title="the puzzle">
        <p>
          <M>{"(1,2,3,4) \\cdot (4,3,2,1) = 4 + 6 + 6 + 4 = 20"}</M>, and each vector has length{" "}
          <M>{"\\sqrt{30}"}</M>. So <M>{"\\cos\\theta = 20/30 = 2/3"}</M>, and <M>{"\\theta \\approx 48.2^\\circ"}</M>.
        </p>
      </Example>

      <Theorem title="the triangle inequality">
        <p><M>{"\\|v + w\\| \\le \\|v\\| + \\|w\\|"}</M>.</p>
      </Theorem>
      <Proof>
        <p>
          <M>{"\\|v + w\\|^2 = \\|v\\|^2 + 2\\,v \\cdot w + \\|w\\|^2 \\le \\|v\\|^2 + 2\\|v\\|\\|w\\| + \\|w\\|^2 = (\\|v\\| + \\|w\\|)^2"}</M>,
          using Cauchy–Schwarz in the middle.
        </p>
      </Proof>

      <Remark title="where this goes">
        <p>
          Dot products measure similarity far beyond geometry. In statistics, the correlation of two data sets is the
          cosine of the angle between them, once each is centred at its mean; Cauchy–Schwarz is why a correlation always
          lies between −1 and 1.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dot",
      rung: "check",
      prompt: (
        <p>
          Compute <M>{"(2, -1, 3) \\cdot (1, 4, 2)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "length",
      rung: "check",
      prompt: (
        <p>
          What is the length of <M>{"(1, 2, 2, 4)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "orth",
      rung: "apply",
      prompt: (
        <p>
          For which k are <M>{"(3, k, 1)"}</M> and <M>{"(2, 1, -4)"}</M> orthogonal?
        </p>
      ),
      answer: { kind: "numeric", value: -2 },
    },
    {
      key: "angle",
      rung: "apply",
      prompt: (
        <p>
          Find the angle, in degrees, between <M>{"(1, 1, 0)"}</M> and <M>{"(0, 1, 1)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 60, tolerance: 0.001 },
    },
    {
      key: "cs",
      rung: "apply",
      prompt: (
        <p>
          If <M>{"\\|v\\| = 3"}</M> and <M>{"\\|w\\| = 4"}</M>, what is the largest possible value of{" "}
          <M>{"v \\cdot w"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "parallelogram",
      rung: "prove",
      prompt: (
        <p>
          Prove the parallelogram law: <M>{"\\|v + w\\|^2 + \\|v - w\\|^2 = 2\\|v\\|^2 + 2\\|w\\|^2"}</M>. What does it say
          about the diagonals and sides of a parallelogram?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Expands ‖v + w‖² = ‖v‖² + 2v·w + ‖w‖² and ‖v − w‖² = ‖v‖² − 2v·w + ‖w‖², using the rules of the dot product.",
          "Adds them so the cross terms cancel.",
          "Interprets: the sum of the squares of the diagonals equals the sum of the squares of the four sides.",
        ],
      },
    },
    {
      key: "avg",
      rung: "stretch",
      prompt: (
        <p>
          Use Cauchy–Schwarz with <M>{"v = (a_1, \\ldots, a_n)"}</M> and <M>{"w = (1, \\ldots, 1)"}</M> to show that{" "}
          <M>{"(a_1 + \\cdots + a_n)^2 \\le n(a_1^2 + \\cdots + a_n^2)"}</M>. When is it an equality? What does it say about
          averages?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes v · w = a₁ + … + aₙ, ‖v‖² = a₁² + … + aₙ² and ‖w‖² = n.",
          "Squares Cauchy–Schwarz to get the inequality, with equality exactly when all the aᵢ are equal.",
          "Interprets it, for example: the square of the mean is at most the mean of the squares. Any correct interpretation is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the dot product is computed, how Cauchy–Schwarz lets us define angles in any dimension, and how the triangle inequality follows.",

  glimpse: (
    <p>
      Later in this course, orthogonality leads to projections and to least squares, the method behind fitting a line to
      data. Probability reads correlation as a cosine. Linear Algebra II takes the three rules of the dot product as the
      definition of an inner product, and finds them in spaces of functions.
    </p>
  ),
};
