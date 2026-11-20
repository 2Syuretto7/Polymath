import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { HyperbolicMapViz } from "@/components/viz/HyperbolicMapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.3.1",
  minutes: 90,
  links: {
    revisits: ["m36.1.4", "m36.1.2", "m6.6.3"],
    foreshadows: ["m36.3.2", "m36.3.3", "m36.5.2"],
  },

  puzzle: (
    <>
      <p>
        Near a fixed point, a smooth map is close to its derivative. The maps x ↦ x + x³ and x ↦ x − x³ both have derivative
        1 at 0, yet the first pushes nearby points away and the second pulls them in. When does the linear approximation
        tell the truth about orbits?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose the eigenvalues of the derivative, and switch on a nonlinear term to see whether the picture changes.</p>
      <HyperbolicMapViz />
    </>
  ),

  theory: (
    <>
      <Definition title="hyperbolic fixed points">
        <p>
          A fixed point p of a <M>{"C^1"}</M> map f of <M>{"\\mathbb{R}^n"}</M> is <strong>hyperbolic</strong> if no
          eigenvalue of Df(p) has modulus 1. The space splits as <M>{"E^s \\oplus E^u"}</M>, spanned by the generalised
          eigenvectors with modulus below and above 1. The point is a <strong>sink</strong> if <M>{"E^u = 0"}</M>, a{" "}
          <strong>source</strong> if <M>{"E^s = 0"}</M>, and a <strong>saddle</strong> otherwise. For a flow, the condition
          is that no eigenvalue of the linearisation has real part 0.
        </p>
      </Definition>

      <Theorem title="Hartman–Grobman (1959–60)">
        <p>
          Near a hyperbolic fixed point, f is topologically conjugate to its linear part: there is a homeomorphism h of a
          neighbourhood of p onto a neighbourhood of 0 with <M>{"h \\circ f = Df(p) \\circ h"}</M>. The conjugacy is in
          general only continuous; Sternberg showed it can be smooth when the eigenvalues satisfy no resonances.
        </p>
      </Theorem>

      <Theorem title="robustness">
        <p>
          A hyperbolic fixed point persists under <M>{"C^1"}</M>-small perturbations, moving continuously and keeping its
          type. Since <M>{"Df(p) - I"}</M> is invertible, the implicit function theorem finds the fixed point of the
          perturbed map.
        </p>
      </Theorem>

      <Example title="the logistic family">
        <p>
          For <M>{"x \\mapsto rx(1 - x)"}</M>, the fixed point <M>{"1 - 1/r"}</M> has derivative 2 − r. It is a hyperbolic
          sink for 1 &lt; r &lt; 3 and a hyperbolic source for r &gt; 3. At r = 3 the derivative is −1, hyperbolicity fails,
          and a period-2 orbit is born: the first period doubling.
        </p>
      </Example>

      <Remark title="when the eigenvalue has modulus 1">
        <p>
          At a non-hyperbolic point the higher-order terms decide, as for x ± x³. These are the points where bifurcations
          happen, and they are studied with centre manifolds and normal forms.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a fixed point of a map hyperbolic?</p>,
      answer: { kind: "choice", options: ["When no eigenvalue of the derivative there has modulus 1", "When every eigenvalue is real", "When the derivative is invertible", "When every eigenvalue has modulus above 1"], correct: [0] },
    },
    {
      key: "hg",
      rung: "check",
      prompt: <p>What does the Hartman–Grobman theorem conclude?</p>,
      answer: { kind: "choice", options: ["Near the point, the map is topologically conjugate to its derivative", "The map is linear near the point", "The map has no other fixed points", "Every orbit converges to the point"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set λ = 2.0 and μ = 0.5. How many unstable directions does the fixed point have?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "log",
      rung: "apply",
      prompt: <p>For the logistic map with r = 2.5, what is the derivative at the fixed point 1 − 1/r?</p>,
      answer: { kind: "numeric", value: -0.5, tolerance: 0.001 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which fixed point at 0 is not hyperbolic?</p>,
      answer: { kind: "choice", options: ["0 for x ↦ x − x³", "0 for x ↦ x/2", "0 for x ↦ 3x", "0 for (x, y) ↦ (2x, y/3)"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Let f be C¹ on ℝ with f(p) = p and |f′(p)| &lt; 1. Show that orbits starting near p converge to p.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Chooses ρ with |f′(p)| < ρ < 1 and, by continuity of f′, an interval around p on which |f′| ≤ ρ.",
          "Uses the mean value theorem to get |f(x) − p| ≤ ρ|x − p| there, so the interval maps into itself.",
          "Iterates to get |fⁿ(x) − p| ≤ ρⁿ|x − p| → 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Let f be C¹ on ℝ with f(p) = p and f′(p) ≠ 1. Explain why every map close enough to f in C¹ has a fixed point near p.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers g(x) = f(x) − x, which has g(p) = 0 and g′(p) ≠ 0, so g changes sign near p.",
          "Notes that a C¹-close map gives a function close to g, which still changes sign on a small interval.",
          "Concludes by the intermediate value theorem. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        For a saddle, the linear picture has a line of points that converge to 0 and a line that leave. The nonlinear map
        has curved versions of these lines, and they organise everything nearby.
      </p>
      <p>Next, stable manifolds.</p>
    </>
  ),
};
