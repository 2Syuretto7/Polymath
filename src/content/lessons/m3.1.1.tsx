import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { CombinationViz } from "@/components/viz/CombinationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.1.1",
  minutes: 70,
  links: {
    revisits: ["m0.7.3", "m1.4.5"],
    foreshadows: ["m3.4.3", "m3.4.4", "m3.2.3"],
  },

  puzzle: (
    <>
      <p>
        A chemist has two solutions. One contains 2 grams of salt and 1 gram of sugar per litre; the other contains 1 gram
        of salt and 2 grams of sugar per litre. She needs exactly 3 grams of salt and 4 grams of sugar. How many litres of each?
      </p>
      <p>
        With two ingredients and two targets this is a small puzzle. With a hundred ingredients and a hundred targets, it
        is the kind of question linear algebra exists to answer. When can a target be reached at all, and in how many ways?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Scale one vector, scale another, and add. The results are the <em>linear combinations</em> of the two. Two
        vectors pointing in different directions can reach every point of the plane, each in exactly one way. Two vectors
        along the same line can reach only that line. Try to land on the red ring with each pair.
      </p>
      <CombinationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="vectors in n dimensions">
        <p>
          A vector in <M>{"\\mathbb{R}^n"}</M> is an ordered list of n real numbers,{" "}
          <M>{"v = (v_1, \\ldots, v_n)"}</M>; that is, an element of the Cartesian product{" "}
          <M>{"\\mathbb{R} \\times \\cdots \\times \\mathbb{R}"}</M>. We add vectors and multiply them by numbers (called{" "}
          <strong>scalars</strong>) component by component:
        </p>
        <MD>{"v + w = (v_1 + w_1, \\ldots, v_n + w_n), \\qquad cv = (cv_1, \\ldots, cv_n)."}</MD>
        <p>
          In the plane and in space these are the arrows of school geometry. Beyond three dimensions we lose the picture
          but keep the algebra, and the algebra is what matters: a list of the prices of 500 shares is a vector in{" "}
          <M>{"\\mathbb{R}^{500}"}</M>.
        </p>
      </Definition>

      <Definition title="linear combination">
        <p>
          A <strong>linear combination</strong> of vectors <M>{"v_1, \\ldots, v_k"}</M> is any vector of the form
        </p>
        <MD>{"c_1 v_1 + c_2 v_2 + \\cdots + c_k v_k"}</MD>
        <p>
          with scalars <M>{"c_1, \\ldots, c_k"}</M>. The set of all such combinations is the <strong>span</strong> of the
          vectors.
        </p>
      </Definition>

      <Example title="the chemist's puzzle">
        <p>
          With <M>{"u = (2, 1)"}</M> and <M>{"v = (1, 2)"}</M>, we need <M>{"c u + d v = (3, 4)"}</M>, which is the pair of
          equations <M>{"2c + d = 3"}</M> and <M>{"c + 2d = 4"}</M>. Subtracting twice the second from the first gives{" "}
          <M>{"-3d = -5"}</M>, so <M>{"d = 5/3"}</M> and <M>{"c = 2/3"}</M>. Asking for a linear combination and solving a
          system of linear equations are the same question.
        </p>
      </Example>

      <Remark title="the row picture and the column picture">
        <p>
          The system <M>{"2c + d = 3,\\; c + 2d = 4"}</M> can be read in two ways. In the <strong>row picture</strong>, each
          equation is a line in the (c, d) plane, and the solution is where the lines cross. In the{" "}
          <strong>column picture</strong>, the columns <M>{"(2, 1)"}</M> and <M>{"(1, 2)"}</M> are vectors, and we seek the
          weights that combine them into <M>{"(3, 4)"}</M>. The column picture is the one that generalises, and the
          visualisation shows it.
        </p>
      </Remark>

      <Theorem title="spans in the plane">
        <p>
          If u and v in <M>{"\\mathbb{R}^2"}</M> are not multiples of each other, their span is the whole plane, and each
          vector b is <M>{"cu + dv"}</M> for exactly one pair (c, d). If one is a multiple of the other, and they are not
          both zero, their span is a line through the origin.
        </p>
      </Theorem>
      <p>
        Writing <M>{"u = (a, b)"}</M> and <M>{"v = (c', d')"}</M>, solving for the weights involves dividing by{" "}
        <M>{"ad' - bc'"}</M>, which is zero exactly when one vector is a multiple of the other. That number is the
        determinant, which returns in a later chapter as an area.
      </p>

      <Remark title="three vectors in space">
        <p>
          In <M>{"\\mathbb{R}^3"}</M>, the span of one non-zero vector is a line, the span of two vectors not on one line is
          a plane, and three vectors span all of space unless one of them lies in the plane of the other two. Each new
          vector either adds a new direction or adds nothing. Making &ldquo;adds a new direction&rdquo; precise is the idea
          of linear independence, the heart of this course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "combo",
      rung: "check",
      prompt: (
        <p>
          Let <M>{"u = (1, 2, 0)"}</M> and <M>{"v = (3, -1, 4)"}</M>. What is the third component of <M>{"2u - v"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: -4 },
    },
    {
      key: "span",
      rung: "check",
      prompt: <p>Which of these pairs span the whole plane? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["(1, 0) and (0, 1)", "(1, 2) and (2, 4)", "(1, 1) and (1, −1)", "(0, 0) and (3, 5)"],
        correct: [0, 2],
      },
    },
    {
      key: "weights",
      rung: "apply",
      prompt: (
        <p>
          Find c with <M>{"c(1, 1) + d(1, -1) = (5, 1)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "chem",
      rung: "apply",
      prompt: (
        <p>
          In the chemist&rsquo;s puzzle, how many litres of the second solution (1 g salt, 2 g sugar per litre) are needed?
          (Give a decimal or a fraction.)
        </p>
      ),
      answer: { kind: "numeric", value: 5 / 3, tolerance: 0.001 },
    },
    {
      key: "line",
      rung: "apply",
      prompt: (
        <p>
          The vectors <M>{"(2, 1)"}</M> and <M>{"(-4, -2)"}</M> span a line. For which value of k does{" "}
          <M>{"(6, k)"}</M> lie in their span?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "unique",
      rung: "prove",
      prompt: (
        <p>
          Suppose u and v in <M>{"\\mathbb{R}^2"}</M> are not multiples of each other. Prove that if{" "}
          <M>{"cu + dv = c'u + d'v"}</M>, then <M>{"c = c'"}</M> and <M>{"d = d'"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Rearranges to (c − c′)u = (d′ − d)v.",
          "Argues that if c ≠ c′, then u is a multiple of v (dividing by c − c′), a contradiction; so c = c′.",
          "Concludes that (d′ − d)v = 0, and since v is non-zero (otherwise v = 0u would be a multiple of u), d = d′. A clear sketch is fine.",
        ],
      },
    },
    {
      key: "three",
      rung: "stretch",
      prompt: (
        <p>
          Show that <M>{"(1, 0, 1)"}</M>, <M>{"(0, 1, 1)"}</M> and <M>{"(1, 1, 2)"}</M> do not span{" "}
          <M>{"\\mathbb{R}^3"}</M>, and describe their span geometrically. Give a vector not in it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notices that the third vector is the sum of the first two, so it adds no new direction.",
          "Describes the span as the plane through the origin containing the first two vectors, for example the plane z = x + y.",
          "Gives a vector not in it, such as (0, 0, 1), and checks it fails the equation. Any correct example is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a linear combination is, why asking for one is the same as solving linear equations, and why two vectors in the plane either span everything or only a line.",

  glimpse: (
    <p>
      Later in this course, linear independence and bases make &ldquo;how many directions&rdquo; precise, and the question
      of which targets can be reached becomes the study of the column space. Linear Algebra II replaces lists of numbers
      by any objects that can be added and scaled, such as functions and polynomials.
    </p>
  ),
};
