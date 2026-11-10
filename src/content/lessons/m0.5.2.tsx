import { M } from "@/components/Math";
import { Definition, Example, Proof, Proposition, Remark, Theorem } from "@/components/lesson/Blocks";
import { AngleSumViz } from "@/components/viz/AngleSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m0.5.2",
  minutes: 70,
  links: {
    revisits: ["p0.4.2"],
    foreshadows: ["m0.5.3", "m0.6.5", "m8.4.4"],
  },

  puzzle: (
    <>
      <p>
        A friend phones you and wants you to draw exactly the same triangle as the one in front of them. What is the least
        information they need to read out? Three sides? Three angles? Two sides and an angle?
      </p>
      <p>Try each option. Which ones always pin the triangle down, and which can leave you with two different answers?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        Three sides are enough: once the lengths are fixed, the triangle is rigid, which is why builders brace frames with
        triangles. Three angles are not enough: a small triangle and a large one can have the same angles. Two sides and an
        angle are enough when the angle lies between the sides, but not always otherwise.
      </p>
      <p>
        Triangles that match exactly are called <strong>congruent</strong>, and knowing what fixes a triangle is the tool for
        proving that lengths or angles are equal. First, though, the fact from the last lesson&rsquo;s puzzle: why do the
        angles add to 180 degrees? Move the corner C and watch.
      </p>
      <AngleSumViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="parallel lines and angles">
        <p>
          When a line crosses two parallel lines, <strong>alternate</strong> angles (on opposite sides of the crossing line,
          between the parallels) are equal, and so are <strong>corresponding</strong> angles (in matching positions at each
          crossing).
        </p>
      </Theorem>
      <p>
        This is where the parallel postulate is used: if alternate angles were unequal, the interior angles on one side
        would add to less than two right angles, and by Postulate 5 the lines would meet, so they would not be parallel.
      </p>

      <Theorem title="the angle sum of a triangle">
        <p>The angles of every triangle add to <M>{"180^\\circ"}</M>.</p>
      </Theorem>
      <Proof>
        <p>
          Let the triangle be ABC. Through C draw the line parallel to AB (it exists and is unique, by the parallel
          postulate). Along this line, at C, three angles sit side by side: the one between the parallel and CA, the
          triangle&rsquo;s angle at C, and the one between CB and the parallel. Together they make a straight angle,{" "}
          <M>{"180^\\circ"}</M>. The first equals the angle at A and the third equals the angle at B, as alternate angles.
          So <M>{"A + B + C = 180^\\circ"}</M>.
        </p>
      </Proof>

      <Proposition title="exterior angle">
        <p>An exterior angle of a triangle equals the sum of the two interior angles opposite it.</p>
      </Proposition>
      <Proof>
        <p>
          Extend side BC beyond C. The exterior angle at C and the interior angle at C make a straight line, so the exterior
          angle is <M>{"180^\\circ - C = A + B"}</M>.
        </p>
      </Proof>

      <Definition title="congruence">
        <p>
          Two triangles are <strong>congruent</strong> when their vertices can be matched so that all three pairs of sides
          and all three pairs of angles are equal. Equivalently, one can be moved onto the other by sliding, turning and
          possibly flipping.
        </p>
      </Definition>

      <Theorem title="congruence criteria">
        <p>Two triangles are congruent if they match in any of the following:</p>
        <ul>
          <li><strong>SSS:</strong> all three sides;</li>
          <li><strong>SAS:</strong> two sides and the angle between them;</li>
          <li><strong>ASA:</strong> two angles and the side between them (and so, by the angle sum, any two angles and a corresponding side);</li>
          <li><strong>RHS:</strong> in right-angled triangles, the hypotenuse and one other side.</li>
        </ul>
      </Theorem>
      <p>
        Euclid proves SAS by placing one triangle on the other; Hilbert, more honestly, takes it as an axiom. The others
        follow from it.
      </p>

      <Example title="why not SSA">
        <p>
          Take an angle of <M>{"30^\\circ"}</M> at A, a side AB of length 10, and a side BC of length 6 opposite the angle.
          Swing a circle of radius 6 around B: it meets the other arm of the angle at <em>two</em> points. Both give a
          triangle with the required angle and sides, and they are not congruent. Two sides and an angle not between them
          can fail to fix the triangle, a counterexample of exactly the kind from the philosopher&rsquo;s toolkit.
        </p>
      </Example>

      <Proposition title="isosceles triangles (Elements I.5)">
        <p>If two sides of a triangle are equal, the angles opposite them are equal.</p>
      </Proposition>
      <Proof>
        <p>
          Let <M>{"AB = AC"}</M>. Compare triangle ABC with triangle ACB, the same triangle with its vertices matched
          differently. We have <M>{"AB = AC"}</M>, <M>{"AC = AB"}</M>, and the angle at A is shared. By SAS the two are
          congruent, with B matched to C. So the angle at B equals the angle at C.
        </p>
      </Proof>

      <Remark title="a famous bridge">
        <p>
          Euclid&rsquo;s own proof of this proposition was longer and harder, and medieval students called it the{" "}
          <em>pons asinorum</em>, the bridge of asses, the point where weaker students stuck. The short proof above, which
          compares the triangle with its own mirror image, is usually credited to Pappus of Alexandria. Both prove the same
          theorem; one sees further.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "third-angle",
      rung: "check",
      prompt: <p>A triangle has angles of <M>{"52^\\circ"}</M> and <M>{"71^\\circ"}</M>. What is the third, in degrees?</p>,
      answer: { kind: "numeric", value: 57 },
    },
    {
      key: "exterior",
      rung: "check",
      prompt: <p>The two interior angles opposite an exterior angle are <M>{"40^\\circ"}</M> and <M>{"65^\\circ"}</M>. What is the exterior angle, in degrees?</p>,
      answer: { kind: "numeric", value: 105 },
    },
    {
      key: "criteria",
      rung: "apply",
      prompt: <p>Select every piece of matching information that always guarantees two triangles are congruent.</p>,
      answer: {
        kind: "choice",
        options: ["three sides", "three angles", "two sides and the angle between them", "two sides and an angle not between them"],
        correct: [0, 2],
      },
    },
    {
      key: "hexagon",
      rung: "apply",
      prompt: <p>By cutting it into triangles from one corner, find the sum of the interior angles of a hexagon, in degrees.</p>,
      answer: { kind: "numeric", value: 720 },
    },
    {
      key: "isosceles-angle",
      rung: "apply",
      prompt: <p>An isosceles triangle has a top angle of <M>{"40^\\circ"}</M> between its equal sides. What is each base angle, in degrees?</p>,
      answer: { kind: "numeric", value: 70 },
    },
    {
      key: "polygon-sum",
      rung: "prove",
      prompt: (
        <p>
          Prove that the interior angles of a convex polygon with <M>n</M> sides add to <M>{"(n - 2) \\times 180^\\circ"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Joins one vertex to each of the others, cutting the polygon into n − 2 triangles.",
          "Explains why there are n − 2 triangles.",
          "Notes that the angles of the triangles together make up exactly the interior angles of the polygon.",
          "Uses the angle sum of a triangle to conclude (n − 2) × 180°.",
        ],
      },
    },
    {
      key: "regular-twelve",
      rung: "stretch",
      prompt: <p>What is each interior angle of a regular 12-sided polygon, in degrees?</p>,
      answer: { kind: "numeric", value: 150 },
    },
  ],

  teachBack:
    "Explain to a friend why the angles of a triangle add to 180 degrees, using the line through one corner parallel to the opposite side.",

  glimpse: (
    <p>
      Next, similarity: triangles with the same shape but different sizes, which is what three equal angles really give you.
      Congruence criteria return as the laws of sines and cosines in trigonometry, which compute the triangle that SSS or
      SAS pins down. In Linear Algebra, the motions that preserve congruence become isometries.
    </p>
  ),
};
