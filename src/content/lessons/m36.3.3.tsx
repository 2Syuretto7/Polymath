import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PerturbFlowViz } from "@/components/viz/PerturbFlowViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.3.3",
  minutes: 90,
  links: {
    revisits: ["m36.3.2", "m36.3.1", "m36.1.1"],
    foreshadows: ["m36.4.1", "m36.5.3", "m36.5.2"],
  },

  puzzle: (
    <>
      <p>
        Every model of nature is slightly wrong: coefficients are measured, terms are dropped. If the qualitative picture
        of a system changed under every small error, no model could be trusted. Which systems keep their picture when they
        are perturbed, and are such systems typical?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a family of flows on the line, change μ, and see whether the equilibria merely move or appear and vanish.</p>
      <PerturbFlowViz />
    </>
  ),

  theory: (
    <>
      <Definition title="structural stability">
        <p>
          A diffeomorphism f is <strong>structurally stable</strong> if every g sufficiently <M>{"C^1"}</M>-close to f is
          topologically conjugate to it. For flows, conjugacy is replaced by topological equivalence, a homeomorphism
          carrying orbits to orbits and preserving their direction.
        </p>
      </Definition>

      <Theorem title="Andronov and Pontryagin (1937), Peixoto (1962)">
        <p>
          A flow on the sphere is structurally stable exactly when it has finitely many equilibria and periodic orbits, all
          hyperbolic, and no orbit joining two saddles. Peixoto extended this to compact orientable surfaces and showed that
          such flows are open and dense there: structural stability is typical in dimension two.
        </p>
      </Theorem>

      <Theorem title="hyperbolicity gives stability">
        <p>
          Anosov diffeomorphisms, such as the cat map, are structurally stable (Anosov, 1967). Mañé proved in 1988 that a
          diffeomorphism is <M>{"C^1"}</M> structurally stable exactly when it satisfies Smale&rsquo;s Axiom A and a strong
          transversality condition.
        </p>
      </Theorem>

      <Example title="unstable systems">
        <p>
          A rotation of the circle is never structurally stable: a rational rotation has every point periodic, and an
          arbitrarily small change of angle can make it irrational, with no periodic points at all. The flow ẋ = x² is not
          stable either, since adding μ creates or destroys equilibria.
        </p>
      </Example>

      <Remark title="Smale’s surprise">
        <p>
          Smale conjectured that structurally stable systems are dense in every dimension, then found in 1966 that they
          are not: in dimension at least three there are open sets of systems none of which is structurally stable. This
          turned attention to robust chaotic behaviour that is stable only in a statistical sense.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a diffeomorphism structurally stable?</p>,
      answer: { kind: "choice", options: ["When every C¹-close diffeomorphism is topologically conjugate to it", "When it has no periodic points", "When every orbit converges", "When it is linear"], correct: [0] },
    },
    {
      key: "rot",
      rung: "check",
      prompt: <p>Why is a rational rotation of the circle not structurally stable?</p>,
      answer: { kind: "choice", options: ["A nearby irrational rotation has no periodic points, while every point of the rational one is periodic", "It has no fixed points", "It is not differentiable", "It has a saddle connection"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose ẋ = x² + μ and set μ = −0.25. How many equilibria are there?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "cubic",
      rung: "apply",
      prompt: <p>How many equilibria does ẋ = x − x³ have?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these is structurally stable?</p>,
      answer: { kind: "choice", options: ["The cat map on the torus", "The rotation of the circle by a quarter turn", "The identity map of the circle", "The flow ẋ = x²"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the flow ẋ = x² on ℝ is not structurally stable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that ẋ = x² has exactly one equilibrium, at 0.",
          "Notes that the arbitrarily close flow ẋ = x² + μ with μ > 0 has no equilibria.",
          "Uses that a topological equivalence sends equilibria to equilibria, so the two cannot be equivalent.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why topological conjugacy preserves the number of periodic points of each period.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses h ∘ f = g ∘ h to get h ∘ fⁿ = gⁿ ∘ h.",
          "Deduces that fⁿ(x) = x exactly when gⁿ(h(x)) = h(x).",
          "Concludes that h is a bijection between the periodic points of period n. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Where individual orbits are too wild to follow, one can still ask how often they visit each region. The answer is
        a measure that the map preserves.
      </p>
      <p>Next, invariant measures.</p>
    </>
  ),
};
