import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ZarembaViz } from "@/components/viz/ZarembaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m28.1.2",
  minutes: 90,
  links: {
    revisits: ["m28.1.1", "m13.6.4", "m15.2.2"],
    foreshadows: ["m28.2.1", "m28.4.4", "m33.1.1"],
  },

  puzzle: (
    <>
      <p>
        Riemann proved his mapping theorem by minimising an energy, sure that a minimiser must exist. Weierstrass showed
        that such minimisers can fail to exist, and for decades the theorem was left without a proof. Even the simplest
        version of the question, finding a harmonic function with given boundary values, can have no answer. Which domains
        are safe?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Shrink the hole in an annulus, and watch what happens to the harmonic function that is 1 on the inner circle.</p>
      <ZarembaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Dirichlet problem">
        <p>
          Given a bounded domain Ω in the plane and a continuous function f on its boundary, find u continuous on the
          closure, harmonic in Ω, with u = f on ∂Ω. By the maximum principle there is at most one solution: the difference of
          two solutions is harmonic and vanishes on the boundary.
        </p>
      </Definition>

      <Theorem title="Perron’s method (1923)">
        <p>
          A continuous v is <strong>subharmonic</strong> if it lies below the harmonic function with the same values on the
          boundary of every small disc. Let u be the supremum of all subharmonic v on Ω with{" "}
          <M>{"\\limsup v \\le f"}</M> at each boundary point. Then u is harmonic in Ω. It takes the boundary value f(ζ) at
          every boundary point ζ that admits a <strong>barrier</strong>, a superharmonic function positive on the closure
          except at ζ, where it vanishes. Such points are called regular.
        </p>
      </Theorem>

      <Example title="Zaremba’s punctured disc (1911)">
        <p>
          On the punctured unit disc, ask for u = 0 on the circle and u = 1 at the centre. A bounded harmonic function has a
          removable singularity at an isolated point, so u would extend harmonically to the whole disc and then be 0, by the
          maximum principle. No solution exists, and the centre is an irregular boundary point. The visualisation shows the
          annulus solutions <M>{"\\log r / \\log \\varepsilon"}</M> losing the inner boundary value as ε → 0.
        </p>
      </Example>

      <Theorem title="regularity in the plane">
        <p>
          If the connected component of ∂Ω containing ζ has more than one point, then ζ is regular. So the Dirichlet problem
          is solvable for every continuous f on any bounded domain whose boundary has no single-point components; in
          particular on every Jordan domain.
        </p>
      </Theorem>

      <Remark title="Dirichlet’s principle">
        <p>
          The solution minimises the energy <M>{"\\int_\\Omega |\\nabla u|^2"}</M> among functions with the given boundary
          values. Riemann used this freely; Weierstrass showed that a minimum need not be attained in general; Hilbert
          rescued the principle in 1900, and its modern form is the variational theory of elliptic equations. In three
          dimensions Lebesgue found an irregular point at the tip of a sharp inward spike, so the planar criterion fails
          there.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "unique",
      rung: "check",
      prompt: <p>Which principle shows the Dirichlet problem has at most one solution?</p>,
      answer: { kind: "choice", options: ["The maximum principle", "The argument principle", "The identity theorem", "The Schwarz reflection principle"], correct: [0] },
    },
    {
      key: "perron",
      rung: "check",
      prompt: <p>Perron&rsquo;s method builds the solution as a supremum of which functions?</p>,
      answer: { kind: "choice", options: ["Subharmonic functions lying below the boundary data", "Holomorphic functions", "Polynomials in x and y", "Superharmonic functions above the data"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set ε = 0.01. What is u(0.5), to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.151, tolerance: 0.001 },
    },
    {
      key: "annulus",
      rung: "apply",
      prompt: <p>On the annulus 1 &lt; r &lt; e, the harmonic function equal to 0 on r = 1 and 1 on r = e is log r. What is its value at r = 2, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.693, tolerance: 0.001 },
    },
    {
      key: "lebesgue",
      rung: "apply",
      prompt: <p>What did Lebesgue&rsquo;s spine show?</p>,
      answer: { kind: "choice", options: ["In three dimensions a boundary point on a connected boundary can be irregular", "Every domain in the plane is regular", "The Dirichlet principle always has a minimiser", "Harmonic functions can have interior maxima"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the Dirichlet problem on a bounded domain has at most one solution.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes two solutions and their difference w, which is harmonic in Ω, continuous on the closure and 0 on the boundary.",
          "Applies the maximum principle to w and to −w.",
          "Concludes w ≤ 0 and w ≥ 0, so w = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why did Weierstrass&rsquo;s objection to Dirichlet&rsquo;s principle matter, if the principle turned out to be true?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that an infimum of energies need not be attained, so existence of a minimiser needs proof.",
          "Gives or describes an example where the infimum is not attained, or notes the role of completeness and compactness.",
          "Comments on how Hilbert’s rescue led to modern methods. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A polynomial is determined, up to a constant, by its zeros. Can an entire function be built from any prescribed
        sequence of zeros, and is it then determined by them?
      </p>
      <p>Next, Weierstrass products.</p>
    </>
  ),
};
