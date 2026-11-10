import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ScalingViz } from "@/components/viz/ScalingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m0.5.3",
  minutes: 70,
  links: {
    revisits: ["m0.1.3"],
    foreshadows: ["m0.6.2", "m11.6.2", "m3.6.3"],
  },

  puzzle: (
    <>
      <p>
        According to an old story, Thales of Miletus measured the height of the Great Pyramid without climbing it. He waited
        for the time of day when his own shadow was as long as he was tall, then measured the pyramid&rsquo;s shadow.
      </p>
      <p>
        Why does that work? And a second puzzle: a photograph is enlarged so that it is twice as wide and twice as tall. How
        much more paper does it need, and how much more ink?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The sun&rsquo;s rays arrive parallel, so Thales, his shadow, the pyramid and its shadow form two triangles with the
        same angles: the same shape at different sizes. In such triangles all lengths are in the same ratio. When his
        shadow equalled his height, the pyramid&rsquo;s shadow (measured from the centre of its base) equalled the
        pyramid&rsquo;s height.
      </p>
      <p>
        Doubling the photograph&rsquo;s width and height needs four times the paper, not twice. Lengths scale by the factor,
        areas by its square. See why: a triangle scaled by <M>k</M> is made of <M>{"k^2"}</M> copies of the original.
      </p>
      <ScalingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="similarity">
        <p>
          Two figures are <strong>similar</strong> if one is a scaled copy of the other, possibly moved, turned or flipped.
          For triangles: ABC and DEF are similar when their angles match and
        </p>
        <MD>{"\\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{FD}{CA} = k,"}</MD>
        <p>the <strong>scale factor</strong>. Congruence is the case <M>{"k = 1"}</M>.</p>
      </Definition>

      <Theorem title="the AA criterion">
        <p>If two angles of one triangle equal two angles of another, the triangles are similar.</p>
      </Theorem>
      <p>
        By the angle sum, the third angles match as well. That matching angles force proportional sides is a theorem Euclid
        proves in Book VI using areas; we take it here. This is why three angles could not fix a triangle in the last lesson:
        they fix its shape, not its size.
      </p>

      <Theorem title="scaling areas and volumes">
        <p>
          If a figure is scaled by factor <M>k</M>, every length is multiplied by <M>k</M>, every area by <M>{"k^2"}</M>, and
          every volume by <M>{"k^3"}</M>.
        </p>
      </Theorem>
      <p>
        For a rectangle, both sides multiply by <M>k</M>, so the area <M>{"(kw)(kh) = k^2 wh"}</M>. Any area can be filled
        with ever smaller squares, each scaled by <M>{"k^2"}</M>, so the rule passes to every shape. Volumes behave in the same
        way with cubes and <M>{"k^3"}</M>.
      </p>

      <Theorem title="Pythagoras">
        <p>In a right-angled triangle with legs <M>a</M>, <M>b</M> and hypotenuse <M>c</M>, <M>{"a^2 + b^2 = c^2"}</M>.</p>
      </Theorem>
      <Proof>
        <p>
          Let the right angle be at C, and drop the perpendicular from C to the hypotenuse AB, meeting it at D. This cuts AB
          into pieces <M>{"x = AD"}</M> and <M>{"y = DB"}</M>, with <M>{"x + y = c"}</M>. Triangle ACD has a right angle at D
          and shares the angle at A with triangle ABC, so by AA it is similar to ABC. Matching the side next to A with the
          hypotenuse in each:
        </p>
        <MD>{"\\frac{x}{b} = \\frac{b}{c}, \\quad \\text{so} \\quad b^2 = cx."}</MD>
        <p>
          In the same way triangle CBD is similar to ABC, sharing the angle at B, which gives <M>{"a^2 = cy"}</M>. Adding,{" "}
          <M>{"a^2 + b^2 = c(x + y) = c^2"}</M>.
        </p>
      </Proof>

      <Example title="a shadow problem">
        <p>
          A pole 2 metres tall casts a shadow 3 metres long; at the same moment a tree casts a shadow 27 metres long. The
          triangles are similar with scale factor 9, so the tree is <M>{"2 \\times 9 = 18"}</M> metres tall.
        </p>
      </Example>

      <Remark title="why there are no giant insects">
        <p>
          Galileo pointed out a consequence of scaling. Make an animal <M>k</M> times larger in every direction: its weight,
          like its volume, grows by <M>{"k^3"}</M>, but the strength of its bones, which depends on their cross-sectional area,
          grows only by <M>{"k^2"}</M>. Scale it up enough and it collapses under its own weight. That is why elephants have
          thick legs and an ant the size of a horse could not stand. The square-cube law appears wherever size matters, from
          bridge design to why small animals lose heat faster.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "tree",
      rung: "check",
      prompt: <p>A 1.5 metre stick casts a 2 metre shadow. At the same moment a building casts a 40 metre shadow. How tall is the building, in metres?</p>,
      answer: { kind: "numeric", value: 30 },
    },
    {
      key: "area-ratio",
      rung: "check",
      prompt: <p>A map is enlarged by a factor of 3. By what factor does the area of a lake on it grow?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "bronze",
      rung: "apply",
      prompt: <p>A bronze statue is copied at three times the height, same shape and solid throughout. How many times as much bronze is needed?</p>,
      answer: { kind: "numeric", value: 27 },
    },
    {
      key: "pythagoras",
      rung: "apply",
      prompt: <p>A right-angled triangle has legs 5 and 12. How long is the hypotenuse?</p>,
      answer: { kind: "numeric", value: 13 },
    },
    {
      key: "similar",
      rung: "apply",
      prompt: <p>Select every pair of figures that must be similar.</p>,
      answer: {
        kind: "choice",
        options: ["any two squares", "any two rectangles", "any two circles", "two triangles with angles 30°, 60°, 90°"],
        correct: [0, 2, 3],
      },
    },
    {
      key: "altitude",
      rung: "prove",
      prompt: (
        <p>
          In the proof of Pythagoras, the altitude from the right angle meets the hypotenuse at D, cutting it into lengths{" "}
          <M>x</M> and <M>y</M>. Prove that the altitude <M>{"h = CD"}</M> satisfies <M>{"h^2 = xy"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies two triangles to compare, ACD and CBD.",
          "Shows they are similar by AA, for instance by showing the angle at A equals the angle BCD.",
          "Writes the matching ratio, such as x/h = h/y.",
          "Concludes h² = xy.",
        ],
      },
    },
    {
      key: "half-volume",
      rung: "stretch",
      prompt: (
        <p>
          A conical glass is filled to half its height. What fraction of the glass&rsquo;s full volume does the drink take
          up? Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 0.125 },
    },
  ],

  teachBack:
    "Explain to a friend how Thales could measure the pyramid with a shadow, and why doubling a photograph's size needs four times the paper.",

  glimpse: (
    <p>
      Next, circles, where similarity explains why every circle has the same ratio of circumference to diameter. In
      trigonometry, similarity is the reason sine and cosine depend only on an angle, not on the size of the triangle.
      Whole-number solutions of Pythagoras&rsquo;s equation return in Number Theory, and the scaling of area by a factor
      returns in Linear Algebra as the determinant.
    </p>
  ),
};
