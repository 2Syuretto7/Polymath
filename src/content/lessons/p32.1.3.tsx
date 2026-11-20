import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GravityClockViz } from "@/components/viz/GravityClockViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p32.1.3",
  minutes: 90,
  links: {
    revisits: ["p32.1.2", "p32.1.1", "m26.5.1"],
    foreshadows: ["p32.1.4", "p32.3.1", "p32.2.1"],
  },

  puzzle: (
    <>
      <p>
        A clock on a GPS satellite runs faster than one on the ground by about 45 millionths of a second a day, because it
        sits higher in Earth&rsquo;s gravity. In general relativity that rate is fixed by the metric of spacetime, which bends,
        ripples and carries energy. Is something that does all this still the empty stage Newton imagined, or is it one more
        physical field?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a height, and see how much faster a clock there runs than one on the ground.</p>
      <GravityClockViz />
    </>
  ),

  theory: (
    <>
      <Definition title="general relativity">
        <p>
          In Einstein&rsquo;s theory of 1915, spacetime is a four-dimensional manifold with a Lorentzian metric g, which fixes
          lengths, durations and the light cones. The <strong>Einstein field equations</strong> relate the curvature of g to
          the energy and momentum of matter, and freely falling bodies follow geodesics. Gravity is not a force in spacetime
          but the curvature of spacetime itself, and the metric is dynamical: it evolves and responds to matter.
        </p>
      </Definition>

      <Example title="the metric does work">
        <p>
          Clocks at different heights tick at different rates, as GPS engineering confirms daily. Gravitational waves,
          ripples in the metric, were detected by LIGO in 2015 from merging black holes, and carry energy away from their
          sources. In these respects the metric behaves like the electromagnetic field: a physical thing with its own degrees
          of freedom.
        </p>
      </Example>

      <Definition title="kinds of substantivalism">
        <p>
          <strong>Manifold substantivalism</strong> identifies spacetime with the bare manifold of points, with the metric as a
          field living on it. <strong>Metric field substantivalism</strong> counts the manifold together with its metric as
          spacetime. Relationists reply that once the metric is just a field, there is no container left: only fields and
          their relations, as Carlo Rovelli puts it, with spacetime one field among others.
        </p>
      </Definition>

      <Remark title="Mach’s principle">
        <p>
          Einstein hoped general relativity would make inertia depend on the distribution of matter, vindicating Mach. It does
          not fully: Minkowski spacetime solves the equations with no matter at all and still has inertial structure, and
          Gödel found a solution in 1949 in which the whole universe rotates. Whether the theory is substantivalist or
          relationist in spirit remains disputed.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "efe",
      rung: "check",
      prompt: <p>What do Einstein&rsquo;s field equations relate?</p>,
      answer: { kind: "choice", options: ["The curvature of spacetime and the energy and momentum of matter", "Electric and magnetic fields", "Position and momentum", "Temperature and entropy"], correct: [0] },
    },
    {
      key: "man",
      rung: "check",
      prompt: <p>What does manifold substantivalism say?</p>,
      answer: { kind: "choice", options: ["The points of the bare manifold exist in their own right", "Only the metric exists", "Spacetime is a fiction", "Matter is made of spacetime"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, about how many microseconds a day does a GPS clock gain from gravity alone?</p>,
      answer: { kind: "numeric", value: 45.7, tolerance: 1 },
    },
    {
      key: "mach",
      rung: "apply",
      prompt: <p>Why does general relativity not fully vindicate Mach&rsquo;s principle?</p>,
      answer: { kind: "choice", options: ["Empty spacetime still has inertial structure, and some solutions rotate as a whole", "It has no matter in it", "It forbids rotation", "It restores absolute space"], correct: [0] },
    },
    {
      key: "field",
      rung: "apply",
      prompt: <p>Which fact supports treating the metric as a physical field?</p>,
      answer: { kind: "choice", options: ["Gravitational waves carry energy and have been detected", "The metric is a mathematical convention", "The metric is the same everywhere", "Clocks all tick at one rate"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>In general relativity, is the metric field spacetime or matter? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what the metric does: fixes geometry, responds to matter and carries energy.",
          "Considers the other side, such as the metric’s special role in defining distances and times for all fields.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does general relativity vindicate Leibniz&rsquo;s relationism?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the dynamical metric and with vacuum solutions.",
          "Considers what relationism would require of a theory.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Einstein nearly abandoned general covariance in 1913, because of an argument that seemed to show it makes physics
        indeterministic. Revived in 1987, that argument now targets manifold substantivalism.
      </p>
      <p>Next, the hole argument.</p>
    </>
  ),
};
