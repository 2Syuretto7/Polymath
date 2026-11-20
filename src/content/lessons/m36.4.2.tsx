import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ErgodicAverageViz } from "@/components/viz/ErgodicAverageViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.4.2",
  minutes: 90,
  links: {
    revisits: ["m36.4.1", "m22.2.3", "m36.1.1"],
    foreshadows: ["m36.4.3", "m36.5.1", "m36.5.2"],
  },

  puzzle: (
    <>
      <p>
        Boltzmann assumed that a gas, followed for long enough, spends time in each region of its state space in
        proportion to that region&rsquo;s size, so that averages over time can be replaced by averages over all states.
        When is this hypothesis true, and in what sense?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a map and an orbit length, and watch the running averages of x² from five starting points.</p>
      <ErgodicAverageViz />
    </>
  ),

  theory: (
    <>
      <Definition title="time averages">
        <p>
          For a measure-preserving system (X, μ, T) and an integrable f, the <strong>ergodic averages</strong> are{" "}
          <M>{"A_n f(x) = \\frac1n \\sum_{k=0}^{n-1} f(T^k x)"}</M>, the average of f along the first n points of the orbit.
        </p>
      </Definition>

      <Theorem title="von Neumann’s mean ergodic theorem (1932)">
        <p>
          For <M>{"f \\in L^2(\\mu)"}</M>, <M>{"A_n f"}</M> converges in <M>{"L^2"}</M> to the orthogonal projection of f onto
          the T-invariant functions. The proof is Hilbert space geometry: <M>{"L^2"}</M> splits into invariant functions and
          the closure of functions <M>{"g - g \\circ T"}</M>, whose averages telescope to 0.
        </p>
      </Theorem>

      <Theorem title="Birkhoff’s pointwise ergodic theorem (1931)">
        <p>
          For <M>{"f \\in L^1(\\mu)"}</M>, <M>{"A_n f(x)"}</M> converges for μ-almost every x, to an invariant function{" "}
          <M>{"f^*"}</M> with <M>{"\\int f^* d\\mu = \\int f d\\mu"}</M>. If μ is ergodic, <M>{"f^*"}</M> is the constant{" "}
          <M>{"\\int f\\, d\\mu"}</M>: time average equals space average. The key step is a maximal inequality, as for the
          Hardy–Littlewood maximal function.
        </p>
      </Theorem>

      <Example title="Borel’s normal numbers">
        <p>
          Apply Birkhoff to the doubling map, ergodic for Lebesgue measure, and f the indicator of [0, ½). The time average
          is the frequency of the digit 0 in the binary expansion of x. So almost every number has digit 0 with frequency ½,
          and similarly for every block of digits in every base: almost every real number is normal.
        </p>
      </Example>

      <Remark title="what it does not say">
        <p>
          The theorem gives no rate of convergence, and says nothing about a particular starting point: the orbit of 0
          under the doubling map has average 1 for the indicator of [0, ½). Whether real gases are ergodic is a separate,
          largely open question.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "erg",
      rung: "check",
      prompt: <p>For an ergodic system, what does Birkhoff&rsquo;s theorem say about time averages?</p>,
      answer: { kind: "choice", options: ["They equal the space average for almost every starting point", "They equal the space average for every starting point", "They never converge", "They depend on the starting point"], correct: [0] },
    },
    {
      key: "vn",
      rung: "check",
      prompt: <p>In what sense does von Neumann&rsquo;s theorem give convergence?</p>,
      answer: { kind: "choice", options: ["In the L² norm", "Pointwise everywhere", "Uniformly", "Only for continuous functions"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose rotation by ½. What does the running average from 0.1 converge to?</p>,
      answer: { kind: "numeric", value: 0.185, tolerance: 0.001 },
    },
    {
      key: "space",
      rung: "apply",
      prompt: <p>What is the space average of x² for Lebesgue measure on [0, 1]?</p>,
      answer: { kind: "numeric", value: 0.3333, tolerance: 0.001 },
    },
    {
      key: "normal",
      rung: "apply",
      prompt: <p>For almost every x in [0, 1), what is the frequency of the block 01 in its binary expansion?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if f = g − g ∘ T with g bounded, then the ergodic averages of f tend to 0 everywhere.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the sum of f(Tᵏx) for k < n as a telescoping sum equal to g(x) − g(Tⁿx).",
          "Bounds this by 2 sup |g|.",
          "Divides by n to get a bound 2 sup |g| / n → 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why rotation by ½ is not ergodic for Lebesgue measure.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds an invariant set of measure strictly between 0 and 1, such as [0, ¼) ∪ [½, ¾).",
          "Checks that the rotation by ½ maps this set to itself.",
          "Concludes that the system is not ergodic. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Ergodicity makes averages over time correct. A stronger property says that the system forgets its past: what
        happens now becomes independent of where it started.
      </p>
      <p>Next, mixing.</p>
    </>
  ),
};
