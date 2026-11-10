import { Definition, Example, Proof, Proposition, Remark } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { EuclidConstructionViz } from "@/components/viz/EuclidConstructionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m0.5.1",
  minutes: 65,
  links: {
    revisits: ["m0.2.1"],
    parallels: ["p0.2.3"],
    foreshadows: ["m1.3.1", "m14.1.4", "m16.3.2", "p8.2.3"],
  },

  puzzle: (
    <>
      <p>
        Draw a triangle, any triangle, and measure its three angles with a protractor. Add them up. Do it again with a long
        thin triangle, and again with a nearly flat one.
      </p>
      <p>
        You will get something close to 180 degrees every time. Suppose you measured a thousand triangles. Would that
        prove that <em>every</em> triangle&rsquo;s angles add to 180? If not, what would?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A thousand measurements cannot settle it. Each protractor reading is off by a degree or so, and the next triangle
        might be the exception. What we want is a reason that applies to every triangle at once, including ones nobody
        will ever draw.
      </p>
      <p>
        Around 300 BCE, Euclid of Alexandria collected the geometry of his day into the <cite>Elements</cite>, thirteen books
        that build everything from a short list of starting assumptions, the <strong>axioms</strong>, by pure reasoning. It
        was the model of a proof for two thousand years, and it still is. Here is its very first proposition: constructing
        an equilateral triangle, with the reason for each step.
      </p>
      <EuclidConstructionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the axiomatic method">
        <p>
          An <strong>axiomatic system</strong> fixes some undefined terms (for Euclid: point, line), some{" "}
          <strong>axioms</strong> or postulates assumed without proof, and rules of logic. A <strong>theorem</strong> is a
          statement deduced from the axioms by those rules. If the axioms are true of something, so is every theorem.
        </p>
      </Definition>

      <p>Euclid&rsquo;s five postulates, in modern words:</p>
      <ol>
        <li>A straight line may be drawn from any point to any other point.</li>
        <li>A straight line segment may be extended indefinitely.</li>
        <li>A circle may be drawn with any centre and any radius.</li>
        <li>All right angles are equal.</li>
        <li>
          If a line crossing two lines makes the interior angles on one side add to less than two right angles, the two
          lines, extended, meet on that side.
        </li>
      </ol>
      <p>
        He also states <strong>common notions</strong> that hold for any quantities, such as &ldquo;things equal to the same
        thing are equal to each other&rdquo; and &ldquo;the whole is greater than the part&rdquo;.
      </p>

      <Definition title="the parallel postulate">
        <p>
          The fifth postulate is equivalent, given the others, to a simpler form named after John Playfair: through a point
          not on a given line there is exactly one line parallel to the given line.
        </p>
      </Definition>

      <Proposition title="vertical angles (Elements I.15)">
        <p>When two straight lines cross, the opposite angles are equal.</p>
      </Proposition>
      <Proof>
        <p>
          Let the lines cross making angles <M>a</M>, <M>b</M>, <M>c</M>, <M>d</M> in turn around the crossing point, so{" "}
          <M>a</M> and <M>c</M> are opposite. Angles <M>a</M> and <M>b</M> together make a straight line, so{" "}
          <M>{"a + b = 180^\\circ"}</M>. Likewise <M>b</M> and <M>c</M> make a straight line, so{" "}
          <M>{"b + c = 180^\\circ"}</M>. Things equal to the same thing are equal, so <M>{"a + b = b + c"}</M>, and taking{" "}
          <M>b</M> from both, <M>{"a = c"}</M>.
        </p>
      </Proof>
      <p>
        Every step is licensed by something earlier: a definition, a postulate, a common notion or a proved proposition.
        That is what makes it a proof, and it is why the result holds for every pair of crossing lines.
      </p>

      <Example title="a gap in Euclid">
        <p>
          In the very first proposition Euclid assumes that the two circles meet. It looks obvious in the picture, but
          nothing in his postulates guarantees it: one can build strange &ldquo;planes&rdquo;, such as one containing only
          points with rational coordinates, in which all five postulates hold in a suitable sense and the circles pass
          through each other without meeting. In 1899 David Hilbert gave a complete set of axioms for Euclidean geometry,
          including what was missing. Pictures suggest; only axioms prove.
        </p>
      </Example>

      <Remark title="the postulate that would not go away">
        <p>
          For two thousand years mathematicians tried to prove the fifth postulate from the other four, so that it could be
          dropped. All failed. In the nineteenth century Nikolai Lobachevsky and J&aacute;nos Bolyai (and, privately, Carl
          Friedrich Gauss) found out why: there are consistent geometries in which it is false, where triangles have angles
          adding to <em>less</em> than 180 degrees. Which geometry describes physical space became a question for physics,
          and Einstein&rsquo;s answer was that it is not exactly Euclid&rsquo;s. So the puzzle has a twist: the angle sum
          follows from Euclid&rsquo;s axioms, as the next lesson proves, but whether real triangles obey it is a matter of
          fact. The philosopher Immanuel Kant had held that Euclidean geometry is known with certainty about space; the
          discovery of other geometries reshaped that debate.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "vertical",
      rung: "check",
      prompt: <p>Two lines cross, and one of the four angles is <M>{"47^\\circ"}</M>. What is the angle opposite it, in degrees?</p>,
      answer: { kind: "numeric", value: 47 },
    },
    {
      key: "adjacent",
      rung: "check",
      prompt: <p>In the same picture, what is an angle next to the <M>{"47^\\circ"}</M> one, in degrees?</p>,
      answer: { kind: "numeric", value: 133 },
    },
    {
      key: "which-postulate",
      rung: "apply",
      prompt: <p>&ldquo;Draw the circle with centre B through A.&rdquo; Which postulate licenses this step?</p>,
      answer: { kind: "choice", options: ["Postulate 1", "Postulate 2", "Postulate 3", "Postulate 5"], correct: [2] },
    },
    {
      key: "proof-or-not",
      rung: "apply",
      prompt: <p>Select every statement that is true of a proof from axioms.</p>,
      answer: {
        kind: "choice",
        options: [
          "Each step must follow from axioms, definitions or earlier results.",
          "A clear picture can replace a step.",
          "If the axioms are true, the theorem is true.",
          "It must be checked against measurements to be accepted.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "playfair",
      rung: "apply",
      prompt: <p>Playfair&rsquo;s form of the parallel postulate says that through a point not on a line there is&hellip;</p>,
      answer: { kind: "choice", options: ["no parallel line", "exactly one parallel line", "at least two parallel lines", "a perpendicular line"], correct: [1] },
    },
    {
      key: "bisect",
      rung: "prove",
      prompt: (
        <p>
          Describe how to find the midpoint of a segment AB with compass and straightedge, using circles as in Proposition
          I.1. Then explain why the point you find is the midpoint. You may use the fact that a triangle with two equal sides
          has equal base angles, and that triangles with two sides and the included angle equal are congruent.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Draws circles centred at A and B with radius AB, meeting at two points C and D.",
          "Joins CD, which meets AB at a point M.",
          "Notes that ACBD has all four sides equal to AB.",
          "Gives a reason that M is the midpoint, for instance by symmetry or a congruence such as triangles ACM and BCM.",
        ],
      },
    },
    {
      key: "spherical",
      rung: "stretch",
      prompt: (
        <p>
          On a globe, take the triangle with one corner at the North Pole and two on the equator, one at longitude 0 and one
          at longitude 90 degrees east. Its sides are arcs of great circles. What do its three angles add to, in degrees?
        </p>
      ),
      answer: { kind: "numeric", value: 270 },
    },
  ],

  teachBack:
    "Explain to a friend why measuring many triangles does not prove that their angles add to 180 degrees, and what Euclid did instead.",

  glimpse: (
    <p>
      Next, triangles and congruence, where the angle sum is proved from the parallel postulate. The idea of proof from
      axioms is the subject of Foundations, and of Logic in philosophy, whose reconstruction of arguments you already know.
      Ruler-and-compass constructions return in Abstract Algebra, which proves that some, like trisecting an angle, are
      impossible. Curved geometries, where the parallel postulate fails, return in Differential Geometry, and Kant&rsquo;s
      view of geometry in Kant&rsquo;s philosophy.
    </p>
  ),
};
