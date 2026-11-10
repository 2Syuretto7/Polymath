import { M, MD } from "@/components/Math";
import { Example, Proof, Proposition, Remark, Theorem } from "@/components/lesson/Blocks";
import { CosineLawViz } from "@/components/viz/CosineLawViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m0.6.5",
  minutes: 70,
  links: {
    revisits: ["m0.5.2", "m0.5.4"],
    foreshadows: ["m0.7.3", "m3.1.2"],
  },

  puzzle: (
    <>
      <p>
        In 1802 the Great Trigonometrical Survey of India began to map the subcontinent. Its surveyors measured one
        baseline near Madras with enormous care, about 12 kilometres long. After that they measured almost nothing but angles,
        sighting from hilltop to hilltop with a heavy theodolite, and built a chain of triangles across the country to the
        Himalaya.
      </p>
      <p>
        How can one measured length and a great many angles give every other distance, including distances across rivers
        and up to peaks that no one could reach?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        In the lesson on congruence we saw that two angles and a side fix a triangle (ASA), as do two sides and the angle between them
        (SAS), or all three sides (SSS). Fixing a triangle is one thing; computing its missing parts is another. That is
        what the two laws of this lesson do.
      </p>
      <p>
        The law of cosines is Pythagoras for every triangle. With sides 6 and 5 held fixed, open and close the angle between
        them and watch the third side: the dashed segment, of length <M>{"a\\cos C"}</M>, is where the correction to
        Pythagoras comes from.
      </p>
      <CosineLawViz />
    </>
  ),

  theory: (
    <>
      <p>
        Throughout, a triangle ABC has angles <M>A</M>, <M>B</M>, <M>C</M> at its corners, and the side opposite each corner
        is named by the small letter: <M>a = BC</M>, <M>b = CA</M>, <M>c = AB</M>.
      </p>

      <Theorem title="the law of cosines">
        <MD>{"c^2 = a^2 + b^2 - 2ab\\cos C."}</MD>
      </Theorem>
      <Proof>
        <p>
          Put C at the origin and A at <M>{"(b, 0)"}</M>. Then B, at distance <M>a</M> from C in the direction making angle{" "}
          <M>C</M> with CA, is the point <M>{"(a\\cos C, a\\sin C)"}</M>. By Pythagoras,
        </p>
        <MD>{"c^2 = (a\\cos C - b)^2 + (a\\sin C)^2 = a^2(\\cos^2 C + \\sin^2 C) - 2ab\\cos C + b^2,"}</MD>
        <p>
          and <M>{"\\cos^2 C + \\sin^2 C = 1"}</M>. The argument does not care whether <M>C</M> is acute, right or obtuse.
          When <M>{"C = 90^\\circ"}</M>, <M>{"\\cos C = 0"}</M> and this is Pythagoras.
        </p>
      </Proof>

      <Theorem title="the law of sines">
        <p>If R is the radius of the circle through A, B and C, then</p>
        <MD>{"\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R."}</MD>
      </Theorem>
      <Proof>
        <p>
          Let O be the centre of the circle, and draw the diameter from B, meeting the circle again at D. Suppose first that{" "}
          <M>A</M> is acute, so D and A lie on the same arc cut off by BC. By the inscribed angle theorem, the angle BDC equals{" "}
          <M>A</M>. By Thales&rsquo;s theorem, the angle BCD is a right angle. In the right triangle BCD the hypotenuse is BD ={" "}
          <M>2R</M>, so <M>{"a = BC = 2R\\sin A"}</M>. If <M>A</M> is obtuse, the angle at D is <M>{"180^\\circ - A"}</M>{" "}
          instead, by the cyclic quadrilateral rule, and it has the same sine. If <M>A</M> is right, BC is itself a diameter.
          The same argument works for each corner.
        </p>
      </Proof>

      <Proposition title="area">
        <p>The area of a triangle is <M>{"\\tfrac12 ab\\sin C"}</M>.</p>
      </Proposition>
      <Proof>
        <p>
          Take CA, of length <M>b</M>, as the base. In the coordinates above, B is at height <M>{"a\\sin C"}</M>, which is the
          perpendicular height. So the area is <M>{"\\tfrac12 \\times b \\times a\\sin C"}</M>.
        </p>
      </Proof>

      <Example title="solving a triangle">
        <p>
          Take <M>{"a = 6"}</M>, <M>{"b = 5"}</M> and <M>{"C = 60^\\circ"}</M>, the starting position of the picture. The
          law of cosines gives <M>{"c^2 = 36 + 25 - 60 \\times \\tfrac12 = 31"}</M>, so <M>{"c \\approx 5.568"}</M>. Then
          the law of sines gives <M>{"\\sin A = \\tfrac{a \\sin C}{c} \\approx 0.933"}</M>. Since <M>{"a^2 = 36"}</M> is less than{" "}
          <M>{"b^2 + c^2 = 56"}</M>, the law of cosines makes <M>{"\\cos A"}</M> positive and <M>A</M> is acute: <M>{"A \\approx 68.9^\\circ"}</M>,
          and <M>{"B = 180^\\circ - A - C \\approx 51.1^\\circ"}</M>.
        </p>
      </Example>

      <Remark title="the ambiguous case, and Peak XV">
        <p>
          Since <M>{"\\sin(180^\\circ - A) = \\sin A"}</M>, the law of sines alone cannot tell an acute angle from its obtuse
          partner. Given two sides and an angle not between them, it can return two triangles: exactly the SSA ambiguity from
          the lesson on congruence, now seen in the algebra.
        </p>
        <p>
          The Survey&rsquo;s chain of triangles eventually reached the Himalaya. In the early 1850s Radhanath Sikdar, one of
          the Survey&rsquo;s computers, worked through observations of a distant summit then called Peak XV, taken from
          stations more than a hundred kilometres away, and found it to be the highest in the world. It was announced in 1856
          as about 29,002 feet; today&rsquo;s figure is 8,849 metres. Every one of those distances came from one baseline and
          the law of sines.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cosine-law",
      rung: "check",
      prompt: <p>A triangle has <M>{"a = 5"}</M>, <M>{"b = 8"}</M> and <M>{"C = 60^\\circ"}</M>. What is <M>c</M>?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "area",
      rung: "check",
      prompt: <p>Two sides of a triangle are 6 and 10, and the angle between them is <M>{"30^\\circ"}</M>. What is its area?</p>,
      answer: { kind: "numeric", value: 15 },
    },
    {
      key: "sine-law",
      rung: "apply",
      prompt: <p>A triangle has <M>{"A = 30^\\circ"}</M>, <M>{"B = 45^\\circ"}</M> and <M>{"a = 5"}</M>. Find <M>b</M> to two decimal places.</p>,
      answer: { kind: "numeric", value: 7.07, tolerance: 0.001 },
    },
    {
      key: "largest-angle",
      rung: "apply",
      prompt: <p>A triangle has sides 7, 8 and 13. What is its largest angle, in degrees?</p>,
      answer: { kind: "numeric", value: 120 },
    },
    {
      key: "circumradius",
      rung: "apply",
      prompt: <p>In a triangle, the side opposite a <M>{"30^\\circ"}</M> angle has length 10. What is the radius of the circle through its three corners?</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "sine-law-proof",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}"}</M> in an acute-angled triangle, by dropping the
          perpendicular from C to AB.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Calls the perpendicular from C to AB h, and notes that it makes two right triangles.",
          "In the triangle containing A, writes h = b sin A.",
          "In the triangle containing B, writes h = a sin B.",
          "Equates the two expressions for h and divides by sin A sin B.",
        ],
      },
    },
    {
      key: "across-river",
      rung: "stretch",
      prompt: (
        <p>
          Two surveyors stand at A and B on one bank of a river, 1000 m apart. Each sights a temple P on the far bank: the
          angle PAB is <M>{"70^\\circ"}</M> and the angle PBA is <M>{"60^\\circ"}</M>. How far is the temple from A, to the
          nearest metre?
        </p>
      ),
      answer: { kind: "numeric", value: 1131, tolerance: 0.0005 },
    },
  ],

  teachBack:
    "Explain to a friend why the law of cosines is Pythagoras with a correction, and why the correction disappears for a right angle.",

  glimpse: (
    <p>
      This completes trigonometry. Next comes the plane with coordinates, where points become pairs of numbers and
      geometry becomes algebra. There the quantity <M>{"ab\\cos C"}</M> in the law of cosines will reappear as the dot
      product of two vectors, the single most useful idea in Linear Algebra.
    </p>
  ),
};
