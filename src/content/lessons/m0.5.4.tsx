import { M } from "@/components/Math";
import { Definition, Example, Proof, Proposition, Remark, Theorem } from "@/components/lesson/Blocks";
import { InscribedAngleViz } from "@/components/viz/InscribedAngleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m0.5.4",
  minutes: 70,
  links: {
    revisits: ["m0.5.2"],
    foreshadows: ["m0.6.1", "m0.6.2", "m0.7.2"],
  },

  puzzle: (
    <>
      <p>
        A football coach notices that a goal looks the same width from many different places on the pitch. Stand at any
        point P and look at the two goalposts A and B. Where can you stand so that the angle APB, the width of the goal as
        you see it, is exactly the same as from where you are now?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The answer is: anywhere on a certain circle through the two posts. Every point on that arc sees the goal under the
        same angle. That is the <strong>inscribed angle theorem</strong>, one of the oldest and most useful results about
        circles. Move P round the circle below; the angle changes only when P crosses to the other side of the chord.
      </p>
      <InscribedAngleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="parts of a circle">
        <p>
          A <strong>circle</strong> is the set of points at a fixed distance, the <strong>radius</strong>, from a fixed point,
          the <strong>centre</strong>. A <strong>chord</strong> joins two points of the circle; a chord through the centre is a{" "}
          <strong>diameter</strong>. A chord AB splits the circle into two <strong>arcs</strong>. The angle AOB at the centre O
          is the <strong>central angle</strong> on the arc; an angle APB with P on the circle is an{" "}
          <strong>inscribed angle</strong>.
        </p>
      </Definition>

      <Theorem title="the inscribed angle theorem">
        <p>An inscribed angle is half the central angle on the same arc.</p>
      </Theorem>
      <Proof>
        <p>
          First suppose the centre O lies on the line PA, so PA is a diameter. Triangle OPB is isosceles, since OP and OB are
          radii, so its angles at P and B are equal, say <M>{"x"}</M> each. The angle AOB is an exterior angle of this
          triangle, so it equals <M>{"x + x = 2x"}</M>. The inscribed angle APB is <M>x</M>, half of it.
        </p>
        <p>
          In general, draw the diameter through P, meeting the circle again at Q. If O lies inside angle APB, the angle APB
          splits into APQ and QPB, and the central angle AOB splits into AOQ and QOB. Each piece is half its partner by the
          first case, so their sums are in the same ratio. If O lies outside the angle, subtract instead of adding.
        </p>
      </Proof>

      <Proposition title="Thales's theorem">
        <p>An angle inscribed in a semicircle is a right angle.</p>
      </Proposition>
      <Proof>
        <p>The central angle on a diameter is a straight angle, <M>{"180^\\circ"}</M>, so the inscribed angle is <M>{"90^\\circ"}</M>.</p>
      </Proof>

      <Proposition title="cyclic quadrilaterals">
        <p>If the four corners of a quadrilateral lie on a circle, its opposite angles add to <M>{"180^\\circ"}</M>.</p>
      </Proposition>
      <Proof>
        <p>
          Two opposite angles of the quadrilateral are inscribed angles on the two arcs into which a diagonal&rsquo;s ends
          split the circle. Their central angles together go once round the centre, <M>{"360^\\circ"}</M>, so the inscribed
          angles add to half of that.
        </p>
      </Proof>

      <Theorem title="tangents">
        <p>
          A <strong>tangent</strong>, a line meeting the circle at exactly one point, is perpendicular to the radius at that
          point.
        </p>
      </Theorem>
      <p>
        The point of contact is the point of the line nearest the centre: every other point of the line is outside the circle,
        so farther away. And the nearest point of a line to a point off it is the foot of the perpendicular, since any other
        point makes a right-angled triangle in which it is the hypotenuse, the longest side.
      </p>

      <Definition title="the number π">
        <p>
          Any two circles are similar, so the ratio of circumference to diameter is the same for every circle. This constant
          is <M>{"\\pi"}</M>, so a circle of radius <M>r</M> has circumference <M>{"2\\pi r"}</M>. The next lesson computes it.
        </p>
      </Definition>

      <Example title="finding a chord">
        <p>
          A circle has radius 10, and a chord is at distance 6 from the centre. The perpendicular from the centre bisects the
          chord (two congruent right triangles, by RHS), so half the chord is <M>{"\\sqrt{10^2 - 6^2} = 8"}</M> and the chord
          has length 16.
        </p>
      </Example>

      <Remark title="finding the centre">
        <p>
          Thales&rsquo;s theorem gives a carpenter&rsquo;s trick for finding the centre of a round table: lay the corner of a
          sheet of paper on the edge, mark where its two sides cross the edge, and join the marks. That is a diameter. Do it
          twice; the diameters cross at the centre.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "inscribed",
      rung: "check",
      prompt: <p>A central angle is <M>{"100^\\circ"}</M>. What is an inscribed angle on the same arc, in degrees?</p>,
      answer: { kind: "numeric", value: 50 },
    },
    {
      key: "semicircle",
      rung: "check",
      prompt: <p>AB is a diameter and P is on the circle. What is angle APB, in degrees?</p>,
      answer: { kind: "numeric", value: 90 },
    },
    {
      key: "cyclic",
      rung: "apply",
      prompt: <p>A quadrilateral has its corners on a circle, and one angle is <M>{"70^\\circ"}</M>. What is the opposite angle, in degrees?</p>,
      answer: { kind: "numeric", value: 110 },
    },
    {
      key: "tangent-length",
      rung: "apply",
      prompt: <p>A point is 13 units from the centre of a circle of radius 5. How long is a tangent from the point to the circle?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "chord",
      rung: "apply",
      prompt: <p>A circle has radius 13, and a chord has length 24. How far is the chord from the centre?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "thales-proof",
      rung: "prove",
      prompt: (
        <p>
          Prove Thales&rsquo;s theorem directly, without the inscribed angle theorem: if AB is a diameter with centre O, and
          P is on the circle, then angle APB is a right angle. (Hint: draw OP and look for isosceles triangles.)
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Draws OP and notes OA = OP = OB, so triangles OAP and OBP are isosceles.",
          "Names the equal base angles, say x at A and P in one triangle and y at B and P in the other.",
          "Uses the angle sum of triangle APB: x + y + (x + y) = 180°.",
          "Concludes the angle at P, x + y, is 90°.",
        ],
      },
    },
    {
      key: "two-tangents",
      rung: "stretch",
      prompt: (
        <p>
          Two tangents are drawn to a circle from an outside point P, touching it at A and B. The angle APB is{" "}
          <M>{"40^\\circ"}</M>. What is the central angle AOB, in degrees?
        </p>
      ),
      answer: { kind: "numeric", value: 140 },
    },
  ],

  teachBack:
    "Explain to a friend why every point on an arc sees a chord under the same angle, using the isosceles triangle in the proof.",

  glimpse: (
    <p>
      Next, area and volume, where <M>{"\\pi"}</M> is finally computed. In trigonometry, the circle of radius 1 becomes the
      stage for sine and cosine, and arcs give a new way to measure angles, radians. Circles return with the other conic
      sections in the chapter on the plane.
    </p>
  ),
};
