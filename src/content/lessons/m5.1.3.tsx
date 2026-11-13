import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CurveViz } from "@/components/viz/CurveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.1.3",
  minutes: 80,
  links: {
    revisits: ["m5.1.2", "m2.10.2", "m2.4.1"],
    foreshadows: ["m5.2.3", "m16.1.1", "m13.2.1"],
  },

  puzzle: (
    <>
      <p>
        Kepler found that planets move in ellipses, sweeping out equal areas in equal times, so that a planet speeds up
        near the sun and slows down far from it. The orbit is a shape; the motion is that shape plus a timetable. A
        spiral staircase, the path of a charged particle in a magnetic field, and the strands of DNA are helices. How can
        calculus describe not just where a curve is, but how something moves along it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a curve and slide the time. The dark dot is the position, the red arrow the velocity. Compare the two
        circles.
      </p>
      <CurveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="parametrised curves">
        <p>
          A <strong>parametrised curve</strong> in <M>{"\\mathbb{R}^n"}</M> is a function{" "}
          <M>{"r : I \\to \\mathbb{R}^n"}</M> on an interval, <M>{"r(t) = (x_1(t), \\dots, x_n(t))"}</M>. Limits,
          continuity and derivatives are taken coordinate by coordinate:
        </p>
        <MD>{"r'(t) = \\lim_{h \\to 0} \\frac{r(t + h) - r(t)}{h} = (x_1'(t), \\dots, x_n'(t))."}</MD>
        <p>
          The vector <M>{"r'(t)"}</M> is the <strong>velocity</strong>; when it is nonzero it points along the{" "}
          <strong>tangent line</strong> <M>{"r(t) + s\\,r'(t)"}</M>. Its length <M>{"\\|r'(t)\\|"}</M> is the{" "}
          <strong>speed</strong>.
        </p>
      </Definition>

      <Example title="the helix">
        <p>
          For <M>{"r(t) = (\\cos t, \\sin t, t)"}</M>, the velocity is <M>{"r'(t) = (-\\sin t, \\cos t, 1)"}</M> and the
          speed is <M>{"\\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt2"}</M>, constant. The point climbs one unit for each
          radian it turns.
        </p>
      </Example>

      <Definition title="arc length">
        <p>The <strong>length</strong> of the curve from <M>{"t = a"}</M> to <M>{"t = b"}</M> is</p>
        <MD>{"L = \\int_a^b \\|r'(t)\\|\\,dt."}</MD>
        <p>
          It is the limit of the lengths of inscribed polygons, as in one-variable calculus, and it does not depend on how
          the curve is parametrised, provided it is traced once. One full turn of the helix above has length{" "}
          <M>{"2\\pi\\sqrt2"}</M>.
        </p>
      </Definition>

      <Theorem title="constant length means perpendicular velocity">
        <p>
          If <M>{"\\|r(t)\\|"}</M> is constant, then <M>{"r(t) \\cdot r'(t) = 0"}</M> for all <M>{"t"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          The product rule holds for dot products: <M>{"(r \\cdot s)' = r' \\cdot s + r \\cdot s'"}</M>, as one sees by
          writing out coordinates. Differentiating <M>{"r \\cdot r = c"}</M> gives <M>{"2\\,r \\cdot r' = 0"}</M>. So a
          point moving on a sphere centred at the origin always moves at right angles to its position vector.
        </p>
      </Proof>

      <Remark title="a curve is not its parametrisation">
        <p>
          The circle traced by <M>{"(\\cos t, \\sin t)"}</M> and by <M>{"(\\cos 2t, \\sin 2t)"}</M> is the same set of
          points, but the motion differs. Properties of the set, such as length and curvature, must not depend on the
          choice. The cleanest choice is the <strong>arc length parametrisation</strong>, which moves at unit speed; the
          differential geometry course builds the theory of curves on it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "vel",
      rung: "check",
      prompt: <p>For the twisted cubic <M>{"r(t) = (t, t^2, t^3)"}</M>, what is the third component of <M>{"r'(1)"}</M>?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "speed",
      rung: "check",
      prompt: <p>What is the speed of <M>{"r(t) = (3\\cos t, 3\\sin t, 4t)"}</M>?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "length",
      rung: "apply",
      prompt: <p>Find the length of the curve <M>{"r(t) = (3\\cos t, 3\\sin t, 4t)"}</M> for <M>{"0 \\le t \\le 2"}</M>.</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "tangent",
      rung: "apply",
      prompt: (
        <p>
          The tangent line to <M>{"r(t) = (t, t^2, t^3)"}</M> at <M>{"t = 1"}</M> is <M>{"(1, 1, 1) + s(1, 2, 3)"}</M>. At
          what value of <M>{"s"}</M> does it meet the plane <M>{"z = 0"}</M>? Give a fraction or a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: -1 / 3, tolerance: 0.003 },
    },
    {
      key: "same",
      rung: "apply",
      prompt: <p>Which of these parametrise the unit circle, traced once? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "(cos t, sin t) for 0 ≤ t < 2π",
          "(cos 2t, sin 2t) for 0 ≤ t < π",
          "(cos t, sin t) for 0 ≤ t < 4π",
          "(sin t, cos t) for 0 ≤ t < 2π",
        ],
        correct: [0, 1, 3],
      },
    },
    {
      key: "perp",
      rung: "prove",
      prompt: <p>Prove that if a curve has constant speed, its acceleration <M>{"r''(t)"}</M> is perpendicular to its velocity.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes constant speed as r′ · r′ = c.",
          "Differentiates with the product rule for dot products to get 2 r′ · r″ = 0.",
        ],
      },
    },
    {
      key: "arclength",
      rung: "stretch",
      prompt: (
        <p>
          Reparametrise the helix <M>{"r(t) = (\\cos t, \\sin t, t)"}</M> by arc length measured from <M>{"t = 0"}</M>, and
          check that the new curve has unit speed.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes s(t) = ∫₀ᵗ √2 du = √2 t, so t = s/√2.",
          "Writes the new curve (cos(s/√2), sin(s/√2), s/√2) and checks its speed is √(1/2 + 1/2) = 1.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a parametrised curve is, how its velocity and speed are found, how arc length is computed, and why a curve is not the same as a parametrisation of it.",

  glimpse: (
    <p>
      The next lesson turns from curves to functions of several variables, and asks how they change in each direction.
    </p>
  ),
};
