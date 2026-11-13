import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ArcPolygonViz } from "@/components/viz/ArcPolygonViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.1.2",
  minutes: 80,
  links: {
    revisits: ["m2.10.2", "m16.1.1", "m13.2.1"],
    foreshadows: ["m16.1.3", "m16.2.3", "m16.4.3"],
  },

  puzzle: (
    <>
      <p>
        A point on the rim of a rolling wheel of radius 1 traces a cycloid. In one turn the wheel moves forward{" "}
        <M>{"2\\pi \\approx 6.28"}</M>. How far does the point on the rim travel? Christopher Wren found the answer in 1658:
        exactly 8, a whole number from a circle.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Inscribe polygons in each curve and watch their lengths creep up towards the length of the curve.</p>
      <ArcPolygonViz />
    </>
  ),

  theory: (
    <>
      <Definition title="arc length">
        <p>
          The <strong>arc length</strong> of a regular curve <M>{"\\alpha"}</M> from <M>{"t = a"}</M> to <M>{"t = b"}</M> is
        </p>
        <MD>{"L = \\int_a^b |\\alpha'(t)|\\,dt."}</MD>
        <p>
          It is the least upper bound of the lengths of polygons inscribed in the curve: each chord is at most the arc it
          spans, and refining the polygon brings its length as close to <M>{"L"}</M> as we like.
        </p>
      </Definition>

      <Example title="the cycloid">
        <p>
          For <M>{"\\alpha(t) = (t - \\sin t, 1 - \\cos t)"}</M>, the speed is{" "}
          <M>{"\\sqrt{(1 - \\cos t)^2 + \\sin^2 t} = \\sqrt{2 - 2\\cos t} = 2|\\sin(t/2)|"}</M>. So one arch has length
        </p>
        <MD>{"\\int_0^{2\\pi} 2\\sin\\tfrac{t}{2}\\,dt = \\Big[-4\\cos\\tfrac{t}{2}\\Big]_0^{2\\pi} = 8."}</MD>
      </Example>

      <Theorem title="independence of parametrisation">
        <p>
          If <M>{"h : [c, d] \\to [a, b]"}</M> is smooth, onto and has <M>{"h' > 0"}</M>, then{" "}
          <M>{"\\beta = \\alpha \\circ h"}</M> has the same length as <M>{"\\alpha"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>By the chain rule and the substitution <M>{"t = h(u)"}</M>,</p>
        <MD>{"\\int_c^d |\\beta'(u)|\\,du = \\int_c^d |\\alpha'(h(u))|\\,h'(u)\\,du = \\int_a^b |\\alpha'(t)|\\,dt."}</MD>
        <p>If instead <M>{"h' < 0"}</M>, the same holds with the limits reversed and <M>{"|h'| = -h'"}</M>.</p>
      </Proof>

      <Definition title="the arc length parameter">
        <p>
          Fix <M>{"t_0"}</M> and let <M>{"s(t) = \\int_{t_0}^t |\\alpha'(u)|\\,du"}</M>. For a regular curve{" "}
          <M>{"s'(t) = |\\alpha'(t)| > 0"}</M>, so <M>{"s"}</M> has a smooth inverse, and reparametrising by <M>{"s"}</M>{" "}
          gives a curve with <M>{"|\\alpha'(s)| = 1"}</M>: it is <strong>parametrised by arc length</strong>, or{" "}
          <strong>unit speed</strong>. Every regular curve can be so parametrised.
        </p>
      </Definition>

      <Example title="the helix by arc length">
        <p>
          The helix <M>{"(a\\cos t, a\\sin t, bt)"}</M> has constant speed <M>{"c = \\sqrt{a^2 + b^2}"}</M>, so{" "}
          <M>{"s = ct"}</M>, and <M>{"\\big(a\\cos\\tfrac{s}{c}, a\\sin\\tfrac{s}{c}, \\tfrac{bs}{c}\\big)"}</M> is its unit
          speed form. One full turn has length <M>{"2\\pi c"}</M>.
        </p>
      </Example>

      <Remark title="why this matters">
        <p>
          With unit speed the tangent vector has length 1, so any change in it measures pure turning, not speeding up. That
          is how curvature will be defined. In practice <M>{"s(t)"}</M> can rarely be inverted in closed form, so formulas are
          also given for arbitrary parameters.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which integral gives the length of <M>{"\\alpha"}</M> on <M>{"[a, b]"}</M>?</p>,
      answer: { kind: "choice", options: ["∫ |α′(t)| dt", "∫ |α(t)| dt", "∫ α′(t) dt", "∫ |α″(t)| dt"], correct: [0] },
    },
    {
      key: "unit",
      rung: "check",
      prompt: <p>What does it mean for a curve to be parametrised by arc length?</p>,
      answer: { kind: "choice", options: ["|α′(s)| = 1 for all s", "α′(s) = 0 for all s", "|α(s)| = 1 for all s", "α″(s) = 0 for all s"], correct: [0] },
    },
    {
      key: "helix",
      rung: "apply",
      prompt: <p>What is the length of one turn of the helix <M>{"(\\cos t, \\sin t, t)"}</M>, from <M>{"t = 0"}</M> to <M>{"2\\pi"}</M>? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 8.89, tolerance: 0.01 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the cycloid arch with one chord. What is the polygon length, to two decimal places?</p>,
      answer: { kind: "numeric", value: 6.28, tolerance: 0.01 },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: <p>Which is the unit speed parametrisation of the circle of radius 3 about the origin?</p>,
      answer: { kind: "choice", options: ["(3 cos(s/3), 3 sin(s/3))", "(3 cos s, 3 sin s)", "(cos 3s, sin 3s)", "(cos s, sin s)"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the arc length of a curve does not change under a reparametrisation <M>{"t = h(u)"}</M> with <M>{"h' > 0"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the chain rule: the new velocity is h′(u) α′(h(u)), whose length is h′(u) |α′(h(u))| since h′ > 0.",
          "Applies the substitution t = h(u) to the length integral.",
          "Concludes the two integrals are equal, with the limits matching because h is onto and increasing.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that any curve from <M>{"p"}</M> to <M>{"q"}</M> has length at least <M>{"|q - p|"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes the unit vector u = (q − p)/|q − p| and writes |q − p| = (q − p) · u = ∫ α′(t) · u dt.",
          "Bounds α′(t) · u ≤ |α′(t)| by the Cauchy–Schwarz inequality.",
          "Concludes |q − p| ≤ ∫ |α′(t)| dt = L. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the arc length integral, why it is the limit of inscribed polygons, why it does not depend on the parametrisation, and how every regular curve can be reparametrised to have unit speed.",

  glimpse: (
    <p>
      Next, curvature and torsion: for a unit speed curve, how fast the tangent turns, and how fast the curve twists out of
      its plane.
    </p>
  ),
};
