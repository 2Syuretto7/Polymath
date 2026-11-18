import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { DiagonalPickViz } from "@/components/viz/DiagonalPickViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.4.2",
  minutes: 90,
  links: {
    revisits: ["m23.4.1", "m6.2.3", "m12.1.4"],
    foreshadows: ["m23.4.3", "m23.5.2", "m23.6.2"],
  },

  puzzle: (
    <>
      <p>
        Bolzano-Weierstrass says every bounded sequence of real numbers has a convergent subsequence. In infinite dimensions
        this fails in norm: the unit vectors eₙ of ℓ² are all √2 apart. Is there a weaker kind of convergence for which every
        bounded sequence of functionals still has a convergent subsequence?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Thin a sequence of functionals step by step until it settles at more and more points.</p>
      <DiagonalPickViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Banach-Alaoglu">
        <p>
          For any normed space <M>X</M>, the closed unit ball of <M>{"X^*"}</M> is compact in the weak-star topology, the
          coarsest topology making every evaluation <M>{"\\varphi \\mapsto \\varphi(x)"}</M> continuous.
        </p>
      </Theorem>

      <Example title="the proof, by Tychonoff">
        <p>
          A functional <M>{"\\varphi"}</M> with <M>{"\\|\\varphi\\| \\le 1"}</M> is a point of the product
        </p>
        <MD>{"P = \\prod_{x \\in X} \\big[-\\|x\\|, \\|x\\|\\big],"}</MD>
        <p>
          with coordinate <M>{"\\varphi(x)"}</M>, and the weak-star topology is the product topology. By Tychonoff, <M>P</M>{" "}
          is compact. The functionals are exactly the points satisfying{" "}
          <M>{"\\varphi(x + y) = \\varphi(x) + \\varphi(y)"}</M> and <M>{"\\varphi(tx) = t\\varphi(x)"}</M>, each a closed
          condition on finitely many coordinates. A closed subset of a compact space is compact.
        </p>
      </Example>

      <Theorem title="the sequential version">
        <p>
          If <M>X</M> is separable, every bounded sequence in <M>{"X^*"}</M> has a weak-star convergent subsequence. Take a
          dense sequence <M>{"x_1, x_2, \\dots"}</M>; pass to a subsequence converging at <M>{"x_1"}</M>, then a further one
          at <M>{"x_2"}</M>, and so on; the diagonal subsequence converges at every <M>{"x_k"}</M>, and by boundedness and
          density at every <M>x</M>.
        </p>
      </Theorem>

      <Remark title="why it matters">
        <p>
          Since <M>{"\\ell^\\infty = (\\ell^1)^*"}</M> and <M>{"L^\\infty = (L^1)^*"}</M>, bounded sequences there have
          weak-star convergent subsequences. In a Hilbert space, which is its own dual by Riesz, every bounded sequence has a
          weakly convergent subsequence. This is the compactness that existence proofs in the calculus of variations and
          partial differential equations rely on: take a minimising sequence, extract a weak limit, and show it is a minimiser.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the Banach-Alaoglu theorem say?</p>,
      answer: { kind: "choice", options: ["The closed unit ball of a dual space is weak-star compact", "The closed unit ball is norm compact", "Every Banach space is reflexive", "Every functional attains its norm"], correct: [0] },
    },
    {
      key: "tool",
      rung: "check",
      prompt: <p>Which theorem about products does the proof use?</p>,
      answer: { kind: "choice", options: ["Tychonoff’s theorem", "Fubini’s theorem", "The Baire category theorem", "The open mapping theorem"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, each column is refined by three halvings of [−1, 1]. How wide is the final interval?</p>,
      answer: { kind: "numeric", value: 0.25 },
    },
    {
      key: "sep",
      rung: "apply",
      prompt: <p>The sequential version needs X to be separable. Why?</p>,
      answer: { kind: "choice", options: ["The diagonal argument needs a countable dense set of points to converge at", "Separable spaces are finite-dimensional", "Non-separable spaces have no functionals", "Tychonoff fails otherwise"], correct: [0] },
    },
    {
      key: "hilbert",
      rung: "apply",
      prompt: <p>What does Banach-Alaoglu, with Riesz, give for a bounded sequence in a separable Hilbert space?</p>,
      answer: { kind: "choice", options: ["A weakly convergent subsequence", "A norm convergent subsequence", "A constant subsequence", "Nothing"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Suppose ‖φₙ‖ ≤ 1 and φₙ(xₖ) converges for each k, where (xₖ) is dense. Prove φₙ(x) converges for every x.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Given x and ε > 0, picks xₖ with ‖x − xₖ‖ < ε.",
          "Bounds |φₙ(x) − φₘ(x)| ≤ |φₙ(x − xₖ)| + |φₙ(xₖ) − φₘ(xₖ)| + |φₘ(xₖ − x)| ≤ 2ε + |φₙ(xₖ) − φₘ(xₖ)|.",
          "Concludes the sequence φₙ(x) is Cauchy, hence convergent.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>In ℓ∞, viewed as the dual of ℓ¹, does the sequence eₙ converge weak-star? To what?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that eₙ acting on y in ℓ¹ gives yₙ.",
          "Observes yₙ → 0 since the series of |yₙ| converges, so eₙ converges weak-star to 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Banach-Alaoglu gives compactness in a dual space. Some spaces are duals of their own duals, in the most natural way,
        and there the weak topology itself gives compact balls.
      </p>
      <p>
        Next, reflexivity: the canonical embedding of a space into its double dual, the spaces where it is onto, why c₀
        and ℓ¹ fail, and James&rsquo;s theorem on functionals that attain their norms.
      </p>
    </>
  ),
};
