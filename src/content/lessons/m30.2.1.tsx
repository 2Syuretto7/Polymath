import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SingularPointViz } from "@/components/viz/SingularPointViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.2.1",
  minutes: 90,
  links: {
    revisits: ["m30.1.4", "m30.1.2", "m30.1.3"],
    foreshadows: ["m30.2.2", "m30.2.3", "m30.5.3"],
  },

  puzzle: (
    <>
      <p>
        The curve y² = x²(x + 1) passes through the origin twice, crossing itself. The curve y² = x²(x − 1) also contains the
        origin, yet near it there is no other real point at all. What do these two singular points have in common, and how
        can you see their shape from the equation?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move a, and watch the singular point at the origin change from a crossing to a cusp to an isolated point.</p>
      <SingularPointViz />
    </>
  ),

  theory: (
    <>
      <Definition title="plane curves and degree">
        <p>
          An affine <strong>plane curve</strong> is the zero set of a non-constant polynomial f(x, y), taken without repeated
          factors; a projective plane curve is the zero set of a homogeneous F(x, y, z). Its <strong>degree</strong> is the
          degree of f. Lines have degree 1, conics degree 2 and cubics degree 3. By the dimension theorem every plane curve has
          dimension 1.
        </p>
      </Definition>

      <Definition title="singular points and multiplicity">
        <p>
          A point P of f = 0 is <strong>singular</strong> if <M>{"f_x(P) = f_y(P) = 0"}</M>, and smooth otherwise, in which
          case the curve has the single tangent line <M>{"f_x(P)(x - a) + f_y(P)(y - b) = 0"}</M>. Moving P to the origin
          and writing <M>{"f = f_m + f_{m+1} + \\cdots"}</M> in homogeneous parts with <M>{"f_m \\neq 0"}</M>, the{" "}
          <strong>multiplicity</strong> of P is m, and over an algebraically closed field <M>{"f_m"}</M> factors into m
          linear forms, the <strong>tangent cone</strong>. P is smooth exactly when m = 1.
        </p>
      </Definition>

      <Example title="nodes and cusps">
        <p>
          For <M>{"y^2 = x^2(x + a)"}</M>, the lowest part at the origin is <M>{"y^2 - ax^2"}</M>, so the origin has
          multiplicity 2. For a &gt; 0 the tangent cone is two distinct lines <M>{"y = \\pm\\sqrt{a}\\,x"}</M>: a{" "}
          <strong>node</strong>. For a = 0 it is the double line <M>{"y^2 = 0"}</M>: a <strong>cusp</strong>. For a &lt; 0
          the two tangents are complex conjugates, and over ℝ the origin is an isolated point; over ℂ it is again a node.
        </p>
      </Example>

      <Theorem title="finitely many singular points">
        <p>
          A plane curve has only finitely many singular points, since f and its partial derivatives have no common factor
          when f has no repeated factor. An irreducible curve of degree d has at most <M>{"\\binom{d-1}{2}"}</M> singular
          points; a smooth projective plane curve of degree d has genus <M>{"\\binom{d-1}{2}"}</M>, each node or cusp
          lowering it by one.
        </p>
      </Theorem>

      <Remark title="the genus formula at work">
        <p>
          Smooth conics have genus 0, which is why they can be parametrised by rational functions. A cubic with a node or a
          cusp has genus 0 too, and is parametrised by the lines through its singular point. A smooth cubic has genus 1 and
          has no rational parametrisation: it is an elliptic curve.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sing",
      rung: "check",
      prompt: <p>When is a point P of the curve f = 0 singular?</p>,
      answer: { kind: "choice", options: ["When both partial derivatives of f vanish at P", "When f vanishes at P", "When P lies at infinity", "When the tangent line is vertical"], correct: [0] },
    },
    {
      key: "mult",
      rung: "check",
      prompt: <p>What is the multiplicity of the origin on y² = x³?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set a = 1. How many distinct real tangent lines does the curve have at the origin?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "smooth",
      rung: "apply",
      prompt: <p>Is the point (1, 0) of the circle x² + y² = 1 smooth?</p>,
      answer: { kind: "choice", options: ["Yes: the partial derivative in x is 2, not 0", "No: the partial derivative in y is 0", "No: circles have singular points", "It depends on the field"], correct: [0] },
    },
    {
      key: "genus",
      rung: "apply",
      prompt: <p>What is the genus of a smooth projective plane curve of degree 4?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Find the singular points of the curve y² = x³ + x², and show there is exactly one.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes f = y² − x³ − x² and computes the partial derivatives 2y and −3x² − 2x.",
          "Solves 2y = 0 and x(3x + 2) = 0 together with f = 0, getting x = 0 or x = −2/3 with y = 0.",
          "Checks that (−2/3, 0) is not on the curve and (0, 0) is, so the origin is the only singular point.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Parametrise the nodal cubic y² = x²(x + 1) by lines y = tx through the origin.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Substitutes y = tx to get x²(t² − x − 1) = 0.",
          "Takes the residual intersection x = t² − 1, y = t(t² − 1).",
          "Notes that t = ±1 both give the node. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A line meets a conic in two points, or touches it, or misses it in the real plane. Counted with care, the number of
        meeting points of two curves never varies at all.
      </p>
      <p>Next, Bézout&rsquo;s theorem.</p>
    </>
  ),
};
