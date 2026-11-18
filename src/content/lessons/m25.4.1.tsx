import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DegreeViz } from "@/components/viz/DegreeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.4.1",
  minutes: 90,
  links: {
    revisits: ["m25.3.4", "m15.4.4", "m25.2.1"],
    foreshadows: ["m25.4.2", "m25.4.3", "m25.6.1"],
  },

  puzzle: (
    <>
      <p>
        You cannot comb a hairy ball flat: somewhere a hair must stand up, or there is a parting. Yet a hairy doughnut can be
        combed flat, and so can a hairy circle. What is special about the 2-sphere, and is the 3-sphere like it or like the
        circle?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A map of the circle to itself has a degree: how many times it wraps round. Wiggle the map and move the target point.
        The number of preimages changes, but the count with signs does not.
      </p>
      <DegreeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="degree">
        <p>
          A map <M>{"f: S^n \\to S^n"}</M> induces <M>{"f_*: H_n(S^n) \\to H_n(S^n)"}</M>, a homomorphism ℤ → ℤ, which is
          multiplication by an integer, the <strong>degree</strong> deg f. For n = 1 this is the winding number from the
          fundamental group of the circle.
        </p>
      </Definition>

      <Theorem title="properties">
        <p>
          (1) deg(id) = 1. (2) deg(fg) = deg f · deg g. (3) Homotopic maps have equal degree; conversely, by Hopf&rsquo;s
          theorem, maps of equal degree are homotopic. (4) A map that is not surjective has degree 0, since it factors through
          a punctured sphere, which is contractible. (5) A reflection has degree −1. (6) The antipodal map{" "}
          <M>{"x \\mapsto -x"}</M> is a composite of n + 1 reflections, so has degree <M>{"(-1)^{n+1}"}</M>.
        </p>
      </Theorem>

      <Theorem title="local degree">
        <p>
          If a point y has finitely many preimages <M>{"x_1, \\dots, x_k"}</M>, and f is a local homeomorphism near each, then
          deg f is the sum of local degrees ±1, according as f preserves or reverses orientation near each{" "}
          <M>{"x_i"}</M>. This is how degree is computed in practice.
        </p>
      </Theorem>

      <Example title="the hairy ball theorem">
        <p>
          A nowhere-zero tangent vector field v on Sⁿ gives a homotopy from the identity to the antipodal map: rotate x towards
          v(x) through a half turn, <M>{"x \\cos(\\pi t) + \\frac{v(x)}{|v(x)|} \\sin(\\pi t)"}</M>. So{" "}
          <M>{"1 = (-1)^{n+1}"}</M>, and n is odd. The even spheres, including S², have no such field. On odd spheres one
          exists: <M>{"v(x_1, x_2, \\dots) = (-x_2, x_1, -x_4, x_3, \\dots)"}</M>.
        </p>
      </Example>

      <Remark title="the fundamental theorem of algebra">
        <p>
          A complex polynomial of degree d restricted to a large circle is homotopic to z ↦ zᵈ, of degree d. If it had no
          root, it would extend over the disc, making it homotopic to a constant map, of degree 0. So d = 0. The same idea
          proves the theorem in a line once degree is available.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the degree of a map f: Sⁿ → Sⁿ?</p>,
      answer: { kind: "choice", options: ["The integer by which f acts on Hₙ(Sⁿ) ≅ ℤ", "The number of preimages of a point", "The dimension n", "The number of fixed points"], correct: [0] },
    },
    {
      key: "anti",
      rung: "check",
      prompt: <p>What is the degree of the antipodal map on S²?</p>,
      answer: { kind: "choice", options: ["−1", "1", "0", "2"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose d = 3 and set the wiggle to 4.0. Whatever target you choose, what is the signed count of preimages?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "comb",
      rung: "apply",
      prompt: <p>On which of these spheres is there a nowhere-zero tangent vector field?</p>,
      answer: { kind: "choice", options: ["S³", "S²", "S⁴", "S⁶"], correct: [0] },
    },
    {
      key: "comp",
      rung: "apply",
      prompt: <p>f: S² → S² has degree 3 and g has degree −2. What is the degree of f ∘ g?</p>,
      answer: { kind: "numeric", value: -6 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a map f: Sⁿ → Sⁿ that is not surjective has degree 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes f misses a point p, so f factors through Sⁿ minus p.",
          "Notes Sⁿ minus p is homeomorphic to ℝⁿ, which is contractible, so its Hₙ is 0.",
          "Concludes the induced map factors through 0, so it is zero and deg f = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why must the wind be calm somewhere on the Earth&rsquo;s surface at every moment, if it varies continuously?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Treats the horizontal wind as a tangent vector field on S².",
          "Applies the hairy ball theorem: it must vanish somewhere.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Degree turns geometric questions about maps of spheres into arithmetic. Two classical theorems follow almost at once:
        every map of a disc to itself has a fixed point, and every map from a sphere to the plane sends some pair of
        opposite points to the same place.
      </p>
      <p>Next, the theorems of Brouwer and Borsuk–Ulam, and the ham sandwich theorem.</p>
    </>
  ),
};
