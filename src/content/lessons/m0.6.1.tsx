import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Proposition, Remark } from "@/components/lesson/Blocks";
import { RadianViz } from "@/components/viz/RadianViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m0.6.1",
  minutes: 60,
  links: {
    revisits: ["m0.5.4"],
    foreshadows: ["m2.4.2", "m2.10.2", "m16.1.2"],
  },

  puzzle: (
    <>
      <p>
        Around 240 BCE, Eratosthenes of Cyrene heard that at noon on midsummer&rsquo;s day the sun shone straight down a
        well at Syene, in the south of Egypt. On the same day at Alexandria, about 800 kilometres to the north, a vertical
        stick cast a shadow: the sun was 7.2 degrees away from overhead.
      </p>
      <p>From these two numbers alone he worked out the size of the whole Earth. How?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        The sun is so far away that its rays arrive parallel. So the 7.2 degree tilt at Alexandria is also the angle at the
        centre of the Earth between the two cities. And 7.2 degrees is one fiftieth of a full turn, so the 800 kilometre
        arc is one fiftieth of the way round: the Earth&rsquo;s circumference is about <M>{"50 \\times 800 = 40\\,000"}</M>{" "}
        kilometres, which is remarkably close.
      </p>
      <p>
        The key idea is that an angle at the centre and the arc it cuts off are in proportion. That suggests a natural way to
        measure angles: not in degrees, a Babylonian choice, but by the length of the arc, counted in radii. Open the angle
        below and watch the arc grow.
      </p>
      <RadianViz />
    </>
  ),

  theory: (
    <>
      <Definition title="angles as turning">
        <p>
          An angle measures an amount of turning about a point. We turn from a starting ray, and count anticlockwise turning as
          positive and clockwise turning as negative. Turning more than once round is allowed, so an angle can be any real
          number of units. One <strong>degree</strong> is <M>{"\\tfrac{1}{360}"}</M> of a full turn.
        </p>
      </Definition>

      <Definition title="radian">
        <p>
          Draw a circle of radius <M>r</M> centred at the angle&rsquo;s vertex. If the angle cuts off an arc of length{" "}
          <M>s</M>, the angle measures
        </p>
        <MD>{"\\theta = \\frac{s}{r} \\text{ radians.}"}</MD>
        <p>
          So one <strong>radian</strong> is the angle whose arc is exactly one radius long. The ratio does not depend on the
          circle chosen, because all circles are similar: doubling the radius doubles the arc.
        </p>
      </Definition>

      <Proposition title="converting">
        <p>
          A full turn is <M>{"2\\pi"}</M> radians, so <M>{"\\pi \\text{ radians} = 180^\\circ"}</M>, and one radian is{" "}
          <M>{"\\tfrac{180}{\\pi} \\approx 57.3"}</M> degrees.
        </p>
      </Proposition>
      <Proof>
        <p>
          A full turn cuts off the whole circumference, <M>{"2\\pi r"}</M>, so it measures{" "}
          <M>{"\\tfrac{2\\pi r}{r} = 2\\pi"}</M> radians. It is also <M>{"360^\\circ"}</M>; halve both.
        </p>
      </Proof>

      <Proposition title="arcs and sectors">
        <p>
          In a circle of radius <M>r</M>, an angle of <M>{"\\theta"}</M> radians at the centre cuts off an arc of length{" "}
          <M>{"r\\theta"}</M> and a sector of area <M>{"\\tfrac12 r^2 \\theta"}</M>.
        </p>
      </Proposition>
      <Proof>
        <p>
          The arc length is the definition rearranged. For the area: the sector is the fraction{" "}
          <M>{"\\tfrac{\\theta}{2\\pi}"}</M> of the whole disc, since sectors with equal angles are congruent and so have
          equal area. Its area is <M>{"\\tfrac{\\theta}{2\\pi} \\times \\pi r^2 = \\tfrac12 r^2 \\theta"}</M>.
        </p>
      </Proof>

      <Example title="some conversions">
        <p>
          A right angle is a quarter turn, <M>{"\\tfrac{\\pi}{2}"}</M>. Then <M>{"45^\\circ = \\tfrac{\\pi}{4}"}</M>,{" "}
          <M>{"60^\\circ = \\tfrac{\\pi}{3}"}</M> and <M>{"120^\\circ = \\tfrac{2\\pi}{3}"}</M>. Going the other way,{" "}
          <M>{"\\tfrac{5\\pi}{6} = \\tfrac56 \\times 180^\\circ = 150^\\circ"}</M>. To convert, multiply by{" "}
          <M>{"\\tfrac{\\pi}{180}"}</M> or by <M>{"\\tfrac{180}{\\pi}"}</M>.
        </p>
      </Example>

      <Remark title="why radians are natural">
        <p>
          The number 360 is a human convention, probably chosen by the Babylonians because it divides so many ways and is
          close to the number of days in a year. Radians are not a convention: they come from the circle itself. The payoff
          arrives in Calculus. For a small angle the arc and the straight chord are almost equal, so in radians{" "}
          <M>{"\\sin x \\approx x"}</M> when <M>x</M> is small, and the rate of change of <M>{"\\sin x"}</M> is exactly{" "}
          <M>{"\\cos x"}</M>. In degrees both facts carry an awkward factor of <M>{"\\tfrac{\\pi}{180}"}</M>. That is why
          mathematicians use radians unless they say otherwise.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "right-angle",
      rung: "check",
      prompt: <p>How many radians is <M>{"90^\\circ"}</M>? Answer in terms of π, such as pi/6.</p>,
      answer: { kind: "expression", value: "pi/2", variables: [] },
    },
    {
      key: "one-radian",
      rung: "check",
      prompt: <p>How many degrees is one radian, to one decimal place?</p>,
      answer: { kind: "numeric", value: 57.3, tolerance: 0.001 },
    },
    {
      key: "to-degrees",
      rung: "apply",
      prompt: <p>Convert <M>{"\\tfrac{3\\pi}{4}"}</M> radians to degrees.</p>,
      answer: { kind: "numeric", value: 135 },
    },
    {
      key: "arc",
      rung: "apply",
      prompt: <p>A circle has radius 10 cm. How long is the arc cut off by an angle of 2.5 radians at the centre, in cm?</p>,
      answer: { kind: "numeric", value: 25 },
    },
    {
      key: "sector",
      rung: "apply",
      prompt: <p>What is the area of a sector of a circle of radius 4 with angle <M>{"\\tfrac{\\pi}{4}"}</M>, to two decimal places?</p>,
      answer: { kind: "numeric", value: 6.28, tolerance: 0.001 },
    },
    {
      key: "sector-proof",
      rung: "prove",
      prompt: (
        <p>
          Prove that a sector of angle <M>{"\\theta"}</M> radians in a circle of radius <M>r</M> has area{" "}
          <M>{"\\tfrac12 r^2\\theta"}</M>, using the area of the whole circle.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that the area of a sector is proportional to its angle, for instance because equal angles give congruent sectors.",
          "Identifies the whole circle as a sector of angle 2π with area πr².",
          "Writes the sector as the fraction θ/(2π) of the circle.",
          "Simplifies (θ/2π)·πr² to ½r²θ.",
        ],
      },
    },
    {
      key: "eratosthenes",
      rung: "stretch",
      prompt: (
        <p>
          In Eratosthenes&rsquo;s measurement, an angle of 7.2 degrees at the Earth&rsquo;s centre cuts off an arc of 800 km.
          Convert the angle to radians and find the Earth&rsquo;s radius, to the nearest 10 km.
        </p>
      ),
      answer: { kind: "numeric", value: 6370, tolerance: 0.002 },
    },
  ],

  teachBack:
    "Explain to a friend what one radian is, and why a full turn is 2π radians.",

  glimpse: (
    <p>
      Next, sine and cosine, defined by walking round a circle of radius 1, where an angle in radians is simply the distance
      walked. Radians make the calculus of these functions clean, and the formula <M>{"s = r\\theta"}</M> grows up into the
      arc length integral for any curve.
    </p>
  ),
};
