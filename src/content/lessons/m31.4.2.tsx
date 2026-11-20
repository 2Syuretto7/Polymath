import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ConjugateFanViz } from "@/components/viz/ConjugateFanViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.4.2",
  minutes: 90,
  links: {
    revisits: ["m31.4.1", "m31.2.2", "m26.3.1"],
    foreshadows: ["m31.4.3", "m31.5.2", "m31.5.3"],
  },

  puzzle: (
    <>
      <p>
        A meridian from the North Pole is the shortest route south, all the way to the South Pole. Continue a little past
        it and the meridian is no longer shortest: going round the other side is quicker. Something happens at the South
        Pole. What, and how can we detect it without knowing the whole sphere?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Lengthen the fan of geodesics from p and watch it refocus.</p>
      <ConjugateFanViz />
    </>
  ),

  theory: (
    <>
      <Definition title="conjugate points">
        <p>
          Let γ be a geodesic with γ(0) = p. A point q = γ(a), a &gt; 0, is <strong>conjugate</strong> to p along γ if
          some Jacobi field along γ, not identically zero, vanishes at both t = 0 and t = a. The{" "}
          <strong>multiplicity</strong> is the dimension of the space of such fields.
        </p>
      </Definition>

      <Theorem title="conjugate points and the exponential map">
        <p>
          q = <M>{"\\exp_p(av)"}</M> is conjugate to p along <M>{"t \\mapsto \\exp_p(tv)"}</M> if and only if av is a
          critical point of <M>{"\\exp_p"}</M>, that is, <M>{"d(\\exp_p)_{av}"}</M> is not injective. The multiplicity is
          the dimension of its kernel. This follows from the formula{" "}
          <M>{"J(t) = d(\\exp_p)_{tv}(tw)"}</M> for Jacobi fields vanishing at 0.
        </p>
      </Theorem>

      <Theorem title="geodesics do not minimise past a conjugate point">
        <p>
          If γ(a) is conjugate to γ(0) and b &gt; a, then γ restricted to [0, b] is not minimising: there is a nearby curve
          with the same endpoints that is strictly shorter. The proof uses the second variation formula of the next lesson.
        </p>
      </Theorem>

      <Example title="model spaces">
        <p>
          On the unit sphere every geodesic from p meets its first conjugate point at the antipode, at distance π, with
          multiplicity n − 1. On a sphere of radius r the distance is πr. In Euclidean and hyperbolic space Jacobi fields
          vanishing at 0 never vanish again, so there are no conjugate points.
        </p>
      </Example>

      <Remark title="cut points come first">
        <p>
          The <strong>cut point</strong> along γ is where γ stops minimising. It comes no later than the first conjugate
          point, and can come earlier: on a flat torus there are no conjugate points at all, yet every geodesic eventually
          stops minimising because another geodesic reaches the same point.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is γ(a) conjugate to γ(0)?</p>,
      answer: { kind: "choice", options: ["Some nonzero Jacobi field vanishes at both 0 and a", "γ(a) = γ(0)", "γ is not smooth at a", "The curvature at γ(a) is zero"], correct: [0] },
    },
    {
      key: "flat",
      rung: "check",
      prompt: <p>Does Euclidean space have conjugate points?</p>,
      answer: { kind: "choice", options: ["No", "Yes, at distance π", "Yes, everywhere", "Only in dimension 2"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at what length L does the fan first refocus? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 3.14, tolerance: 0.01 },
    },
    {
      key: "radius",
      rung: "apply",
      prompt: <p>On a sphere of radius 2, at what distance from p is the first conjugate point? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 6.28, tolerance: 0.02 },
    },
    {
      key: "mult",
      rung: "apply",
      prompt: <p>What is the multiplicity of the antipode as a conjugate point on the unit 4-sphere?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that on the unit sphere, γ(π) is conjugate to γ(0) along any unit-speed geodesic γ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a parallel unit field E perpendicular to γ.",
          "Uses that J(t) = sin t·E(t) is a Jacobi field.",
          "Notes J(0) = J(π) = 0 and J is not identically zero.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why a flat torus has cut points but no conjugate points.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the torus is flat, so normal Jacobi fields vanishing at 0 grow linearly and never vanish again.",
          "Notes that two different straight lines in the covering plane can project to geodesics meeting at the same point, so geodesics stop minimising.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        To show a geodesic past a conjugate point is not shortest, we need to know how length changes to second order
        when the curve is pushed sideways.
      </p>
      <p>Next, the second variation formula.</p>
    </>
  ),
};
