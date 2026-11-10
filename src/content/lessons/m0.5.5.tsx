import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Proposition, Remark, Theorem } from "@/components/lesson/Blocks";
import { ArchimedesViz } from "@/components/viz/ArchimedesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m0.5.5",
  minutes: 75,
  links: {
    revisits: ["m0.1.5", "m0.5.3"],
    foreshadows: ["m2.2.1", "m2.6.1", "m2.10.1", "m5.5.1"],
  },

  puzzle: (
    <>
      <p>
        Everyone learns that a circle&rsquo;s area is <M>{"\\pi r^2"}</M>. But <M>{"\\pi"}</M> was defined from the{" "}
        <em>circumference</em>, a length. Why should the same number appear in an <em>area</em>?
      </p>
      <p>
        And how would you find <M>{"\\pi"}</M> at all, with no calculator, and no way to lay a ruler along a curve?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Cut a circle into many thin slices, like a pizza, and lay them side by side, alternating point up and point down.
        They form a shape that is almost a rectangle: its height is the radius <M>r</M>, and its length is half the
        circumference, <M>{"\\pi r"}</M>. The thinner the slices, the closer to a true rectangle, with area{" "}
        <M>{"\\pi r \\times r = \\pi r^2"}</M>. The same <M>{"\\pi"}</M> appears because the area comes from the
        circumference.
      </p>
      <p>
        Finding <M>{"\\pi"}</M> uses the same idea: trap the circle between shapes made of straight lines, which can be
        measured, and squeeze. Archimedes did this around 250 BCE.
      </p>
      <ArchimedesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="area">
        <p>
          The <strong>area</strong> of a region is a number assigned to it so that a unit square has area 1, congruent regions
          have equal areas, and a region cut into non-overlapping pieces has area equal to the sum of the pieces.
        </p>
      </Definition>

      <Theorem title="parallelograms and triangles">
        <p>
          A rectangle with sides <M>w</M> and <M>h</M> has area <M>{"wh"}</M>. A parallelogram with base <M>b</M> and
          perpendicular height <M>h</M> has area <M>{"bh"}</M>, and a triangle has area <M>{"\\tfrac12 bh"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          Cut a right-angled triangle off one end of the parallelogram and move it to the other end: the result is a{" "}
          <M>b</M> by <M>h</M> rectangle, with the same area. A diagonal cuts a parallelogram into two congruent triangles, so
          each triangle with base <M>b</M> and height <M>h</M> is half of a <M>b</M> by <M>h</M> parallelogram.
        </p>
      </Proof>

      <Theorem title="area of a circle">
        <p>A circle of radius <M>r</M> has area <M>{"\\pi r^2"}</M>.</p>
      </Theorem>
      <p>
        The slicing argument is the idea; making it exact needs limits. In outline: the inscribed regular <M>n</M>-gon splits
        into <M>n</M> triangles from the centre, with total area <M>{"\\tfrac12 \\times (\\text{perimeter}) \\times (\\text{height})"}</M>.
        As <M>n</M> grows, the perimeter approaches <M>{"2\\pi r"}</M> and the height approaches <M>r</M>, so the area
        approaches <M>{"\\pi r^2"}</M>. Archimedes made this rigorous by showing the area could be neither more nor less.
      </p>

      <Example title="Archimedes’s bounds">
        <p>
          Starting from hexagons, whose perimeters are easy, and doubling the number of sides four times, to 96, Archimedes
          proved
        </p>
        <MD>{"3\\tfrac{10}{71} < \\pi < 3\\tfrac17,"}</MD>
        <p>
          that is, <M>{"3.1408 < \\pi < 3.1429"}</M>. Each doubling needed square roots computed by hand. The familiar{" "}
          <M>{"\\tfrac{22}{7}"}</M> is his upper bound.
        </p>
      </Example>

      <Definition title="volume">
        <p>
          <strong>Volume</strong> is to solids what area is to regions, with the unit cube having volume 1. A prism or
          cylinder with base area <M>A</M> and height <M>h</M> has volume <M>{"Ah"}</M>.
        </p>
      </Definition>

      <Proposition title="a third for a pyramid">
        <p>A pyramid with base area <M>A</M> and height <M>h</M> has volume <M>{"\\tfrac13 Ah"}</M>.</p>
      </Proposition>
      <Proof>
        <p>
          Here is the special case that shows where the third comes from. Join the centre of a cube of side <M>s</M> to its
          eight corners. This cuts the cube into six congruent pyramids, one on each face, each with base area{" "}
          <M>{"s^2"}</M> and height <M>{"\\tfrac{s}{2}"}</M>. So each has volume{" "}
          <M>{"\\tfrac16 s^3 = \\tfrac13 \\cdot s^2 \\cdot \\tfrac{s}{2}"}</M>. The general case needs a limiting argument,
          or Cavalieri&rsquo;s principle below.
        </p>
      </Proof>

      <Definition title="Cavalieri’s principle">
        <p>
          If two solids have equal heights, and every horizontal slice at the same height has equal area in both, the solids
          have equal volume. (Think of two stacks of the same coins, one straight and one slanted.)
        </p>
      </Definition>

      <Remark title="the sphere on the tomb">
        <p>
          Archimedes showed that a sphere has two thirds of the volume of the smallest cylinder that contains it, and two thirds
          of its surface area too, giving <M>{"V = \\tfrac43 \\pi r^3"}</M> and <M>{"S = 4\\pi r^2"}</M>. He was so proud of
          this that he asked for a sphere and cylinder to be carved on his tomb, and Cicero reports finding the overgrown
          grave in Sicily by that carving, more than a century later. His methods of slicing and squeezing are the ancestors of
          the integral.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "triangle",
      rung: "check",
      prompt: <p>A triangle has base 10 and perpendicular height 7. What is its area?</p>,
      answer: { kind: "numeric", value: 35 },
    },
    {
      key: "circle",
      rung: "check",
      prompt: <p>What is the area of a circle of radius 3, to two decimal places?</p>,
      answer: { kind: "numeric", value: 28.27, tolerance: 0.01 },
    },
    {
      key: "pyramid",
      rung: "apply",
      prompt: <p>A pyramid has a square base of side 6 and height 5. What is its volume?</p>,
      answer: { kind: "numeric", value: 60 },
    },
    {
      key: "hexagon",
      rung: "apply",
      prompt: (
        <p>
          A regular hexagon inscribed in a circle of radius 1 is made of six equilateral triangles. What is half its
          perimeter? (This is Archimedes&rsquo;s first lower bound for <M>{"\\pi"}</M>.)
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "sphere-ratio",
      rung: "apply",
      prompt: <p>What fraction of the volume of the smallest cylinder containing it does a sphere fill?</p>,
      answer: { kind: "choice", options: ["one half", "two thirds", "three quarters", "π/4"], correct: [1] },
    },
    {
      key: "trapezium",
      rung: "prove",
      prompt: (
        <p>
          A trapezium has parallel sides <M>a</M> and <M>b</M> and perpendicular height <M>h</M>. Prove that its area is{" "}
          <M>{"\\tfrac12 (a + b)h"}</M>, by cutting it into pieces whose areas you know.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Cuts the trapezium along a diagonal into two triangles.",
          "Identifies one triangle with base a and height h, the other with base b and height h.",
          "Adds the areas ½ah + ½bh.",
          "Concludes ½(a + b)h.",
        ],
      },
    },
    {
      key: "ball-in-cube",
      rung: "stretch",
      prompt: <p>What fraction of a cube&rsquo;s volume is filled by the largest ball that fits inside it? Give a decimal to three places.</p>,
      answer: { kind: "numeric", value: 0.524, tolerance: 0.001 },
    },
  ],

  teachBack:
    "Explain to a friend why the area of a circle is π r squared, using the pizza-slice rearrangement, and why the same π appears as in the circumference.",

  glimpse: (
    <p>
      This completes geometry. Next comes trigonometry, which measures triangles and circles with numbers. Archimedes&rsquo;s
      squeeze is the idea of a limit, the foundation of Calculus, where areas become integrals and volumes are found by
      slicing, exactly as here. Multivariable Calculus extends the method to double and triple integrals.
    </p>
  ),
};
