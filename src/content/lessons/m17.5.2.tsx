import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { MeanValueViz } from "@/components/viz/MeanValueViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.5.2",
  minutes: 90,
  links: {
    revisits: ["m17.5.1", "m13.3.3", "m9.8.4"],
    foreshadows: ["m17.5.3", "m28.1.2", "m37.3.3"],
  },

  puzzle: (
    <>
      <p>
        Measure the temperature of a metal plate in steady state at a hundred points evenly spaced round a circle, and
        average the readings. Remarkably, you get the temperature at the centre, whatever the plate and whatever the circle.
        Why should the centre know about the circle?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the circle about and change its size. Compare the centre value with the averages.</p>
      <MeanValueViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the mean value property">
        <p>If u is harmonic on a domain containing the closed disc of radius r about <M>{"x_0"}</M>, then</p>
        <MD>{"u(x_0) = \\frac{1}{2\\pi}\\int_0^{2\\pi} u(x_0 + r e^{i\\theta})\\,d\\theta = \\frac{1}{\\pi r^2}\\iint_{|x - x_0| < r} u\\,dA."}</MD>
        <p>
          Proof. Let <M>{"\\phi(r)"}</M> be the circle average. Differentiating under the integral and using the divergence
          theorem, <M>{"\\phi'(r) = \\frac{1}{2\\pi r}\\iint_{D_r} \\Delta u\\,dA = 0"}</M>. So φ is constant, and as r tends
          to 0 it tends to <M>{"u(x_0)"}</M>. Averaging the circle averages over r gives the disc average.
        </p>
      </Theorem>

      <Theorem title="the converse">
        <p>
          A continuous function that has the mean value property for every small circle is harmonic, and in particular
          infinitely differentiable. So the property characterises harmonic functions.
        </p>
      </Theorem>

      <Example title="consequences">
        <p>
          The <strong>strong maximum principle</strong>: if a harmonic function on a connected domain attains its maximum at
          an interior point, it is constant, since the value there is an average of values no larger. <strong>Liouville&rsquo;s
          theorem</strong>: a harmonic function on the whole plane that is bounded is constant, by comparing disc averages
          about two points over enormous discs that nearly coincide.
        </p>
      </Example>

      <Remark title="random walks">
        <p>
          A random walker starting at x₀ and stopped when it first reaches the boundary hits it at a random point. The
          expected boundary value there is a harmonic function of x₀, because the first step is equally likely in every
          direction, which is the mean value property again. This links the Dirichlet problem with Brownian motion, as
          Kakutani showed in 1944.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the mean value property say about a harmonic function u?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its value at a point equals its average over any circle about that point inside the domain.",
          "Its average over the whole plane is zero.",
          "Its values are all equal.",
          "Its derivative is the average of its values.",
        ],
        correct: [0],
      },
    },
    {
      key: "smp",
      rung: "check",
      prompt: <p>Which result follows quickly from the mean value property?</p>,
      answer: {
        kind: "choice",
        options: ["The strong maximum principle", "The fundamental theorem of algebra", "The central limit theorem", "Fermat’s little theorem"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose x² + y² with radius 0.8. By how much does the circle average exceed the centre value? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.64, tolerance: 0.01 },
    },
    {
      key: "compute",
      rung: "apply",
      prompt: <p>u = x² − y² is harmonic. What is its average over the circle of radius 5 centred at (3, 1)?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "liou",
      rung: "apply",
      prompt: <p>Which harmonic function on the whole plane is bounded?</p>,
      answer: { kind: "choice", options: ["u = 7", "u = x", "u = x² − y²", "u = eˣ cos y"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Deduce the strong maximum principle on a connected domain from the mean value property.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets M be the maximum, attained at an interior point x₀, and considers a small disc about x₀ inside the domain.",
          "Argues that since u(x₀) = M is the disc average of values at most M, u = M on the whole disc; so the set where u = M is open.",
          "Notes that this set is also closed and non-empty, so by connectedness it is the whole domain and u is constant.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For x² + y² the circle average exceeds the centre value by r². Can you explain where r² comes from, using Δu = 4?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses φ′(r) = (1/2πr)∬Δu dA = (1/2πr)(4πr²) = 2r.",
          "Integrates to get φ(r) − u(x₀) = r².",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the mean value property of harmonic functions, its proof by the divergence theorem, and how it gives the strong maximum principle.",

  glimpse: (
    <p>
      Next, Green&rsquo;s functions: solving Laplace&rsquo;s and Poisson&rsquo;s equations with a kernel, such as the Poisson
      kernel of the disc, which says how much each boundary point contributes to each interior point.
    </p>
  ),
};
