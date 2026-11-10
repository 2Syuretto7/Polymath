import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Proposition, Remark, Theorem } from "@/components/lesson/Blocks";
import { ConicViz } from "@/components/viz/ConicViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m0.7.2",
  minutes: 75,
  links: {
    revisits: ["m0.3.3", "m0.5.4"],
    foreshadows: ["m3.1.3", "m3.7.3"],
  },

  puzzle: (
    <>
      <p>
        Shine a torch straight at a wall and the lit patch is a circle. Tilt the torch and it stretches into an oval. Tilt
        it further and at some moment the patch stops closing: its edge opens out and runs away up the wall.
      </p>
      <p>
        These are the edges of a cone of light cut by a flat wall. Is there one rule that describes all of these curves, and
        what changes at the moment the curve breaks open?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Lines first: a line is the graph of an equation of degree one, and its steepness is a single number, the slope. The
        curves of the puzzle are the next step up, graphs of equations of degree two, and the Greeks knew them as the{" "}
        <strong>conic sections</strong>.
      </p>
      <p>
        They share one rule. Fix a point F, the <strong>focus</strong>, and a line, the <strong>directrix</strong>. Take
        every point whose distance from F is a fixed multiple <M>e</M> of its distance from the line. For <M>e</M> below 1
        you get a closed oval, an ellipse; at exactly 1, a parabola; above 1, a hyperbola. The moment the torch&rsquo;s patch
        breaks open is <M>{"e = 1"}</M>.
      </p>
      <ConicViz />
    </>
  ),

  theory: (
    <>
      <Definition title="slope">
        <p>
          The <strong>slope</strong> of the line through <M>{"(x_1, y_1)"}</M> and <M>{"(x_2, y_2)"}</M>, with{" "}
          <M>{"x_1 \\neq x_2"}</M>, is <M>{"m = \\tfrac{y_2 - y_1}{x_2 - x_1}"}</M>, the rise per unit of run. By similar
          triangles, it is the same whichever two points of the line are used.
        </p>
      </Definition>

      <Theorem title="equations of lines">
        <p>
          The line through <M>{"(x_1, y_1)"}</M> with slope <M>m</M> is the graph of <M>{"y - y_1 = m(x - x_1)"}</M>. Every
          line, vertical ones included, is the graph of an equation <M>{"ax + by = c"}</M> with <M>a</M> and <M>b</M> not
          both zero.
        </p>
      </Theorem>
      <Proof>
        <p>
          A point <M>{"(x, y)"}</M> other than <M>{"(x_1, y_1)"}</M> lies on the line exactly when the slope from{" "}
          <M>{"(x_1, y_1)"}</M> to it is <M>m</M>, that is, when <M>{"\\tfrac{y - y_1}{x - x_1} = m"}</M>; multiply out. A
          vertical line is <M>{"x = c"}</M>.
        </p>
      </Proof>

      <Proposition title="parallel and perpendicular lines">
        <p>
          Two non-vertical lines are parallel exactly when their slopes are equal, and perpendicular exactly when their
          slopes multiply to <M>{"-1"}</M>.
        </p>
      </Proposition>
      <Proof>
        <p>
          On a line of slope <M>m</M>, a run of 1 gives a rise of <M>m</M>. Turn this little step a quarter turn about its
          start: the run of 1 becomes a rise of 1, and the rise of <M>m</M> becomes a run of <M>{"-m"}</M>. So the
          perpendicular direction has slope <M>{"\\tfrac{1}{-m}"}</M>, and <M>{"m \\times \\left(-\\tfrac1m\\right) = -1"}</M>.
        </p>
      </Proof>

      <Definition title="conic sections">
        <p>
          Given a point F, a line <M>{"\\ell"}</M> not through F, and a number <M>{"e > 0"}</M>, the set of points P with
        </p>
        <MD>{"PF = e \\times (\\text{distance from P to } \\ell)"}</MD>
        <p>
          is an <strong>ellipse</strong> if <M>{"e < 1"}</M>, a <strong>parabola</strong> if <M>{"e = 1"}</M>, and a{" "}
          <strong>hyperbola</strong> if <M>{"e > 1"}</M>. The number <M>e</M> is the <strong>eccentricity</strong>. A
          circle is the limiting case as <M>e</M> shrinks towards 0 with the directrix moving ever further away.
        </p>
      </Definition>

      <Example title="the equation of a parabola">
        <p>
          Take the focus <M>{"(0, 1)"}</M> and the directrix <M>{"y = -1"}</M>. A point <M>{"(x, y)"}</M> is equally far from
          both when
        </p>
        <MD>{"x^2 + (y - 1)^2 = (y + 1)^2, \\quad \\text{that is,} \\quad y = \\tfrac14 x^2."}</MD>
        <p>
          So the parabolas of the functions chapter are conics. Every conic has an equation of degree two in <M>x</M> and{" "}
          <M>y</M>, and, apart from a few degenerate cases such as a pair of lines, every such equation describes a conic.
        </p>
      </Example>

      <Remark title="from Apollonius to Kepler">
        <p>
          Apollonius of Perga studied these curves around 200 BCE as slices of a cone, and gave them their names. For
          eighteen centuries they were beautiful but seemingly useless. Then in 1609 Johannes Kepler, after years of
          struggling with Tycho Brahe&rsquo;s observations of Mars, announced that each planet moves in an ellipse with the
          sun at one focus. An ellipse can also be drawn with a loop of string round two pins, the two foci: the sum of the
          distances to the pins stays fixed. Parabolas have their own gift: every ray parallel to the axis reflects off a
          parabolic mirror through the focus, which is why satellite dishes have that shape.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "slope",
      rung: "check",
      prompt: <p>What is the slope of the line through <M>{"(1, 2)"}</M> and <M>{"(4, 11)"}</M>?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "perpendicular",
      rung: "check",
      prompt: <p>A line has slope <M>{"\\tfrac23"}</M>. What is the slope of a line perpendicular to it?</p>,
      answer: { kind: "numeric", value: -1.5 },
    },
    {
      key: "intercept",
      rung: "apply",
      prompt: <p>The line through <M>{"(2, 5)"}</M> with slope <M>{"-3"}</M> crosses the <M>y</M>-axis at <M>{"(0, c)"}</M>. What is <M>c</M>?</p>,
      answer: { kind: "numeric", value: 11 },
    },
    {
      key: "parabola",
      rung: "apply",
      prompt: (
        <p>
          A parabola has focus <M>{"(0, 2)"}</M> and directrix <M>{"y = -2"}</M>. At the point of the parabola with{" "}
          <M>{"x = 4"}</M>, what is <M>y</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "which-conic",
      rung: "apply",
      prompt: <p>A comet&rsquo;s path is a conic with eccentricity 1.2. Which kind of curve is it, and will the comet return?</p>,
      answer: {
        kind: "choice",
        options: ["an ellipse, so it returns", "a parabola, so it never returns", "a hyperbola, so it never returns", "a circle, so it returns"],
        correct: [2],
      },
    },
    {
      key: "parabola-proof",
      rung: "prove",
      prompt: (
        <p>
          Prove that the parabola with focus <M>{"(0, p)"}</M> and directrix <M>{"y = -p"}</M>, where <M>{"p > 0"}</M>, is
          the graph of <M>{"x^2 = 4py"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes the distance from (x, y) to the focus as √(x² + (y − p)²).",
          "Writes the distance to the directrix as |y + p|.",
          "Sets them equal and squares both sides, which is reversible since both are non-negative.",
          "Expands and simplifies to x² = 4py.",
        ],
      },
    },
    {
      key: "point-to-line",
      rung: "stretch",
      prompt: (
        <p>
          How far is the origin from the line <M>{"3x + 4y = 10"}</M>? (The shortest path is perpendicular to the line; find
          where it meets the line.)
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
  ],

  teachBack:
    "Explain to a friend the focus and directrix rule, and how the value of e decides whether you get an ellipse, a parabola or a hyperbola.",

  glimpse: (
    <p>
      Next, vectors, arrows that can be added and stretched, which give a cleaner language for lines and directions. In
      Linear Algebra, the equation <M>{"ax + by = c"}</M> grows into planes and hyperplanes, and the general equation of degree
      two is tamed by a symmetric matrix whose eigenvectors point along the axes of the conic.
    </p>
  ),
};
