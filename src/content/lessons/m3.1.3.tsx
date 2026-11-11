import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { Plane3DViz } from "@/components/viz/Plane3DViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.1.3",
  minutes: 75,
  links: {
    revisits: ["m0.7.2", "m3.1.1"],
    foreshadows: ["m3.2.1", "m3.2.3", "m5.1.1"],
  },

  puzzle: (
    <>
      <p>
        In the plane, a line has an equation such as <M>{"y = 2x + 1"}</M>. In space, the equation{" "}
        <M>{"x + y + 2z = 2"}</M> is not a line at all: it is a plane. So how do you write down a line in space? And
        three planes in space usually meet in a single point, which is what solving three equations in three unknowns
        means, but sometimes they do not. What can happen instead?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        There are two ways to describe a flat object. You can say how to <em>move along</em> it: start at a point and add
        multiples of direction vectors. Or you can say what <em>constraint</em> it satisfies: every point on a plane makes
        the same dot product with one fixed vector, the normal. Slide the point along the line until it lands on the plane,
        and move the plane by changing d.
      </p>
      <Plane3DViz />
    </>
  ),

  theory: (
    <>
      <Definition title="parametric form">
        <p>The <strong>line</strong> through the point p in the direction of a non-zero vector v is</p>
        <MD>{"\\{\\, p + t v : t \\in \\mathbb{R} \\,\\}."}</MD>
        <p>
          The <strong>plane</strong> through p containing the directions u and v, not multiples of each other, is{" "}
          <M>{"\\{\\, p + s u + t v : s, t \\in \\mathbb{R} \\,\\}"}</M>. Both are a point plus a span: a line or plane
          through the origin, shifted to pass through p.
        </p>
      </Definition>

      <Definition title="normal form of a plane">
        <p>
          A plane in <M>{"\\mathbb{R}^3"}</M> through p with normal vector <M>{"n \\ne 0"}</M> is the set of x with{" "}
          <M>{"n \\cdot (x - p) = 0"}</M>, that is
        </p>
        <MD>{"n \\cdot x = d, \\quad d = n \\cdot p."}</MD>
        <p>
          Written out with <M>{"n = (a, b, c)"}</M>, this is the single linear equation <M>{"ax + by + cz = d"}</M>. Every
          linear equation in three unknowns, not all coefficients zero, describes a plane, and its coefficients are a
          normal vector.
        </p>
      </Definition>

      <Example title="from one form to the other">
        <p>
          The plane <M>{"x + y + 2z = 2"}</M> has normal <M>{"(1, 1, 2)"}</M>. To parametrise it, solve for x:{" "}
          <M>{"x = 2 - y - 2z"}</M>, and let y = s and z = t be free:
        </p>
        <MD>{"(x, y, z) = (2, 0, 0) + s(-1, 1, 0) + t(-2, 0, 1)."}</MD>
        <p>
          Both directions are orthogonal to the normal, as they must be. Going the other way, from directions u and v to a
          normal, one needs a vector orthogonal to both; the cross product, met in Multivariable Calculus and Vector
          Analysis, gives one at once.
        </p>
      </Example>

      <Example title="where a line meets a plane">
        <p>
          The line <M>{"(-1, 3, 3) + t(1, -1, -1)"}</M> from the visualisation meets <M>{"x + y + 2z = d"}</M> when{" "}
          <M>{"(-1 + t) + (3 - t) + 2(3 - t) = d"}</M>, that is <M>{"8 - 2t = d"}</M>, so <M>{"t = (8 - d)/2"}</M>. One
          equation, one unknown, one answer, unless the direction is orthogonal to the normal, when the line is parallel to
          the plane and misses it or lies inside it.
        </p>
      </Example>

      <Theorem title="distance from a point to a plane">
        <p>
          The distance from the point q to the plane <M>{"n \\cdot x = d"}</M> is
        </p>
        <MD>{"\\frac{|n \\cdot q - d|}{\\|n\\|}."}</MD>
      </Theorem>
      <p>
        Move from q along the normal until you hit the plane: <M>{"q - s n"}</M> lies on it when{" "}
        <M>{"n \\cdot q - s\\|n\\|^2 = d"}</M>. The distance travelled is <M>{"|s|\\,\\|n\\|"}</M>, which is the formula.
        The sign of <M>{"n \\cdot q - d"}</M> says which side of the plane q is on, as the visualisation shows.
      </p>

      <Remark title="three planes">
        <p>
          A system of three linear equations in three unknowns asks for the points common to three planes. Usually they
          meet in exactly one point. But two may be parallel, and miss each other; or all three may share a line, like
          pages of a book along its spine; or they may meet in pairs along three parallel lines, forming a tent with no
          common point. The next chapter&rsquo;s method, elimination, tells these cases apart mechanically.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "normal",
      rung: "check",
      prompt: (
        <p>
          The plane <M>{"3x - y + 4z = 7"}</M> has a normal vector <M>{"(3, -1, k)"}</M>. What is k?
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "onplane",
      rung: "check",
      prompt: <p>Which of these points lie on the plane <M>{"x + y + 2z = 2"}</M>? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["(2, 0, 0)", "(0, 0, 1)", "(1, 1, 1)", "(4, 0, −1)"], correct: [0, 1, 3] },
    },
    {
      key: "through",
      rung: "apply",
      prompt: (
        <p>
          The plane through <M>{"(1, 2, 3)"}</M> with normal <M>{"(2, -1, 1)"}</M> has equation{" "}
          <M>{"2x - y + z = d"}</M>. What is d?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "meet",
      rung: "apply",
      prompt: (
        <p>
          At what value of t does the line <M>{"(1, 0, 0) + t(1, 2, 2)"}</M> meet the plane <M>{"x + y + z = 11"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "dist",
      rung: "apply",
      prompt: (
        <p>
          Find the distance from <M>{"(1, 1, 1)"}</M> to the plane <M>{"2x + y + 2z = 11"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: (
        <p>
          Prove that the set of solutions of <M>{"ax + by + cz = 0"}</M>, with a, b, c not all zero, is closed under
          addition and under multiplication by scalars. Why does this fail for <M>{"ax + by + cz = d"}</M> with{" "}
          <M>{"d \\ne 0"}</M>?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes the equation as n · x = 0 and uses linearity: n · (x + y) = n · x + n · y = 0, and n · (cx) = c(n · x) = 0.",
          "Notes that for d ≠ 0, adding two solutions gives n · (x + y) = 2d ≠ d, so the sum is not a solution (and the origin is not on the plane).",
          "Interprets: a plane through the origin is a span, while other planes are shifted copies of one.",
        ],
      },
    },
    {
      key: "tent",
      rung: "stretch",
      prompt: (
        <p>
          Find three planes, no two of them parallel, that have no point in common. Explain how you know they share no
          point.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives three planes whose normals lie in one plane but no two are parallel, for example x = 0, y = 0 and x + y = 1.",
          "Shows they cannot all hold: the first two force x = y = 0, which contradicts the third.",
          "Describes the picture: each pair meets in a line, and the three lines are parallel, like a tent. Any correct example earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the parametric and normal descriptions of lines and planes, how to find where a line meets a plane, and the ways three planes can fail to meet in a single point.",

  glimpse: (
    <p>
      The next chapter solves systems of linear equations systematically, and gives a complete account of when the
      planes meet in a point, a line, a plane or nothing. Multivariable Calculus and Vector Analysis adds the cross product
      and uses tangent planes to approximate curved surfaces.
    </p>
  ),
};
