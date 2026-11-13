import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MobiusViz } from "@/components/viz/MobiusViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.6.2",
  minutes: 85,
  links: {
    revisits: ["m13.6.1", "m13.1.1", "m13.4.2"],
    foreshadows: ["m13.6.3", "m13.6.4", "m17.5.1"],
  },

  puzzle: (
    <>
      <p>
        The map <M>{"1/z"}</M> turns the line <M>{"\\operatorname{Re} z = 1"}</M> into a circle through 0. Straight lines and
        circles look like different things, yet this simple map swaps them. Is there a family of maps for which lines and
        circles are really the same kind of curve?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a transformation and compare the grid of lines and the unit circle with their images.</p>
      <MobiusViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Möbius transformation">
        <p>
          A <strong>Möbius transformation</strong> is a map
        </p>
        <MD>{"T(z) = \\frac{az + b}{cz + d}, \\qquad ad - bc \\ne 0,"}</MD>
        <p>
          of the extended plane <M>{"\\hat{\\mathbb{C}} = \\mathbb{C} \\cup \\{\\infty\\}"}</M>, with{" "}
          <M>{"T(-d/c) = \\infty"}</M> and <M>{"T(\\infty) = a/c"}</M>. Each is a bijection whose inverse is again Möbius,
          and composing them corresponds to multiplying the matrices{" "}
          <M>{"\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}"}</M>.
        </p>
      </Definition>

      <Theorem title="circles go to circles">
        <p>
          Call a line or a circle in the plane a <strong>generalised circle</strong>; a line is a circle through{" "}
          <M>{"\\infty"}</M>. Every Möbius transformation maps generalised circles to generalised circles.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"c = 0"}</M>, <M>{"T"}</M> is <M>{"z \\mapsto (a/d) z + b/d"}</M>, a rotation, scaling and translation, which
          clearly maps lines to lines and circles to circles. If <M>{"c \\ne 0"}</M>, write
        </p>
        <MD>{"T(z) = \\frac{a}{c} - \\frac{ad - bc}{c} \\cdot \\frac{1}{cz + d},"}</MD>
        <p>
          so <M>{"T"}</M> is a composite of such maps and the inversion <M>{"z \\mapsto 1/z"}</M>. Every generalised circle
          has an equation <M>{"A|z|^2 + Bz + \\bar B \\bar z + C = 0"}</M> with <M>{"A, C"}</M> real. Putting{" "}
          <M>{"z = 1/w"}</M> and multiplying by <M>{"|w|^2"}</M> gives{" "}
          <M>{"A + B\\bar w + \\bar B w + C|w|^2 = 0"}</M>, an equation of the same form.
        </p>
      </Proof>

      <Theorem title="three points determine the map">
        <p>
          For any three distinct points <M>{"z_1, z_2, z_3"}</M> and any three distinct <M>{"w_1, w_2, w_3"}</M> in{" "}
          <M>{"\\hat{\\mathbb{C}}"}</M>, there is exactly one Möbius transformation with <M>{"T(z_j) = w_j"}</M>. The map{" "}
          <M>{"z \\mapsto \\frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}"}</M> sends <M>{"z_1, z_2, z_3"}</M> to{" "}
          <M>{"0, 1, \\infty"}</M>; its value at a fourth point is the <strong>cross-ratio</strong>, which every Möbius
          transformation preserves.
        </p>
      </Theorem>

      <Example title="the Cayley map and the disc">
        <p>
          The map <M>{"C(z) = (z - i)/(z + i)"}</M> sends <M>{"0, 1, \\infty"}</M> to <M>{"-1, -i, 1"}</M>, all on the unit
          circle, so it sends the real axis onto the unit circle. Since <M>{"C(i) = 0"}</M>, it carries the upper half-plane
          onto the unit disc. For <M>{"|a| < 1"}</M> and real <M>{"\\theta"}</M>, the maps
        </p>
        <MD>{"\\varphi(z) = e^{i\\theta} \\frac{z - a}{1 - \\bar a z}"}</MD>
        <p>are bijections of the unit disc onto itself with <M>{"\\varphi(a) = 0"}</M>.</p>
      </Example>

      <Remark title="the Riemann sphere">
        <p>
          Through stereographic projection, <M>{"\\hat{\\mathbb{C}}"}</M> is a sphere, and generalised circles are exactly
          the circles on that sphere. The Möbius transformations are precisely the conformal bijections of the sphere.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "inf",
      rung: "check",
      prompt: <p>For <M>{"T(z) = (2z + 1)/(z - 3)"}</M>, what is <M>{"T(\\infty)"}</M>?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "pole",
      rung: "check",
      prompt: <p>For the same <M>{"T"}</M>, which point is sent to <M>{"\\infty"}</M>?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0.001 },
    },
    {
      key: "line",
      rung: "apply",
      prompt: <p>Under <M>{"1/z"}</M>, what is the image of the line <M>{"\\operatorname{Re} z = 1"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "The line Re w = 1.",
          "The circle with centre 1/2 and radius 1/2, without 0.",
          "The unit circle.",
          "The circle with centre 1 and radius 1.",
        ],
        correct: [1],
      },
    },
    {
      key: "fix",
      rung: "apply",
      prompt: <p>How many fixed points in <M>{"\\hat{\\mathbb{C}}"}</M> does <M>{"T(z) = z + 1"}</M> have?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "cay",
      rung: "apply",
      prompt: <p>The Cayley map <M>{"(z - i)/(z + i)"}</M> sends the upper half-plane onto the unit disc. Where does it send <M>{"2i"}</M>? Give the real number.</p>,
      answer: { kind: "numeric", value: 0.3333, tolerance: 0.001 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Show that if <M>{"|a| < 1"}</M>, then <M>{"\\varphi(z) = (z - a)/(1 - \\bar a z)"}</M> maps the unit circle into itself.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes |z| = 1, so that z̄ = 1/z.",
          "Rewrites 1 − āz as z(z̄ − ā), whose modulus equals |z − a| because |z| = 1.",
          "Concludes |φ(z)| = 1.",
        ],
      },
    },
    {
      key: "three",
      rung: "stretch",
      prompt: <p>Show that a Möbius transformation with three distinct fixed points is the identity.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that T(z) = z leads to cz² + (d − a)z − b = 0, at most a quadratic, unless all coefficients vanish.",
          "Handles ∞ as a possible fixed point, or uses uniqueness of the map fixing three points.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a Möbius transformation is, why it maps lines and circles to lines and circles, why three points determine one, and how the Cayley map carries the upper half-plane onto the disc.",

  glimpse: (
    <p>
      The next lesson proves the Schwarz lemma and uses it to show that the disc maps above are all the conformal bijections
      of the disc. Möbius maps return in hyperbolic geometry, where they are the isometries.
    </p>
  ),
};
