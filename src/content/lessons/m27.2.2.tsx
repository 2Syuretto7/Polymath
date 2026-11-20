import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { RotationErgodicViz } from "@/components/viz/RotationErgodicViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.2.2",
  minutes: 90,
  links: {
    revisits: ["m27.2.1", "m22.2.3", "m9.8.3"],
    foreshadows: ["m27.3.1", "m27.4.2", "m27.5.1"],
  },

  puzzle: (
    <>
      <p>
        Boltzmann hoped that a gas, followed over a long time, would spend in each region of its state space a share of
        time equal to that region&rsquo;s size. Then time averages, which we observe, would equal space averages, which we
        can compute. When is that hope justified?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Rotate the circle by α again and again. Compare the share of time spent in the arc [0, 1/4) with its length.
      </p>
      <RotationErgodicViz />
    </>
  ),

  theory: (
    <>
      <Definition title="measure-preserving systems">
        <p>
          A measurable map T on a probability space <M>{"(\\Omega, \\mathcal{F}, P)"}</M> is <strong>measure-preserving</strong>{" "}
          if <M>{"P(T^{-1}A) = P(A)"}</M> for every event A. A set A is <strong>invariant</strong> if{" "}
          <M>{"T^{-1}A = A"}</M>. The system is <strong>ergodic</strong> if every invariant set has probability 0 or 1: it
          cannot be split into two parts that never mix.
        </p>
      </Definition>

      <Theorem title="Birkhoff's ergodic theorem">
        <p>
          If T is measure-preserving and <M>{"f \\in L^1"}</M>, then{" "}
          <M>{"\\frac{1}{n} \\sum_{k=0}^{n-1} f(T^k \\omega)"}</M> converges almost surely and in <M>{"L^1"}</M>. If T is
          ergodic, the limit is the constant <M>{"\\int f \\, dP"}</M>: time average equals space average.
        </p>
        <p>
          Birkhoff proved it in 1931, just after von Neumann&rsquo;s mean ergodic theorem, which gives convergence in{" "}
          <M>{"L^2"}</M>. The usual proof rests on the maximal ergodic theorem, a clever counting inequality.
        </p>
      </Theorem>

      <Example title="rotations of the circle">
        <p>
          <M>{"T(x) = x + \\alpha \\bmod 1"}</M> preserves Lebesgue measure. If α is irrational, T is ergodic: an invariant
          function f has Fourier coefficients satisfying <M>{"\\hat f(k) e^{2\\pi i k \\alpha} = \\hat f(k)"}</M>, which forces{" "}
          <M>{"\\hat f(k) = 0"}</M> for k ≠ 0, so f is constant. If α = p/q, the union of q small arcs around an orbit is
          invariant with measure strictly between 0 and 1.
        </p>
      </Example>

      <Example title="the strong law as a special case">
        <p>
          Let Ω be the space of sequences <M>{"(x_1, x_2, \\dots)"}</M> with the product of a law μ, and T the shift that
          deletes the first term. Then T is measure-preserving and ergodic, by Kolmogorov&rsquo;s zero-one law. With{" "}
          <M>{"f(x) = x_1"}</M>, Birkhoff&rsquo;s theorem is exactly the strong law of large numbers.
        </p>
      </Example>

      <Remark title="recurrence">
        <p>
          Poincaré&rsquo;s recurrence theorem is older and simpler: for measure-preserving T and P(A) &gt; 0, almost every
          point of A returns to A infinitely often. Ergodicity adds that the frequency of returns is exactly P(A).
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "erg",
      rung: "check",
      prompt: <p>When is a measure-preserving system ergodic?</p>,
      answer: { kind: "choice", options: ["When every invariant set has probability 0 or 1", "When T is invertible", "When every orbit is periodic", "When T is the identity"], correct: [0] },
    },
    {
      key: "birk",
      rung: "check",
      prompt: <p>For an ergodic system and integrable f, what do the time averages of f converge to almost surely?</p>,
      answer: { kind: "choice", options: ["The integral of f", "Zero", "The value of f at the start", "They need not converge"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose α = 1/2 and start x₀ = 0.10. What is the time average after many steps?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.01 },
    },
    {
      key: "rat",
      rung: "apply",
      prompt: <p>Why is rotation by a rational α not ergodic?</p>,
      answer: { kind: "choice", options: ["Small arcs around a finite orbit form an invariant set of intermediate measure", "It does not preserve length", "It has no orbits", "Its time averages always diverge"], correct: [0] },
    },
    {
      key: "freq",
      rung: "apply",
      prompt: <p>For an irrational rotation, what fraction of the first n points lies in an arc of length 0.3, as n → ∞, for almost every start?</p>,
      answer: { kind: "numeric", value: 0.3, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that rotation by a rational α = p/q is not ergodic.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that T applied q times is the identity, so every orbit has at most q points.",
          "Builds an invariant set, such as the union of the q images of a small arc [0, δ) with δ < 1/q.",
          "Notes it has measure qδ, strictly between 0 and 1, and is invariant.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that, for an irrational rotation, every orbit is dense in the circle.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the points x₀ + kα mod 1 are distinct, since α is irrational.",
          "Uses pigeonhole to find two points within ε, so some multiple of α mod 1 is within ε of 0, and its multiples step round the circle in gaps smaller than ε.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The law of large numbers says Sₙ/n settles down. How large are the fluctuations around the limit, and what shape
        do they take? To answer, we need a tool that turns sums of independent variables into products.
      </p>
      <p>Next, characteristic functions.</p>
    </>
  ),
};
