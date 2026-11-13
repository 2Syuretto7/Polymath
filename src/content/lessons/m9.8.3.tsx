import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ChainConvergenceViz } from "@/components/viz/ChainConvergenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.8.3",
  minutes: 90,
  links: {
    revisits: ["m9.8.2", "m3.7.2", "m9.7.1"],
    foreshadows: ["m9.8.4", "m27.2.2", "m36.4.2"],
  },

  puzzle: (
    <>
      <p>
        How many riffle shuffles does it take to mix a pack of cards properly? A famous answer is about seven. Shuffling is a
        Markov chain on the orderings of the pack, and &ldquo;well mixed&rdquo; means close to its uniform stationary
        distribution. When does a chain forget where it started, and how fast?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare a regular chain with a periodic one and a reducible one, starting from two different states.</p>
      <ChainConvergenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="periodicity">
        <p>
          The <strong>period</strong> of a state is the greatest common divisor of the lengths of all paths from it back to
          itself. A chain is <strong>aperiodic</strong> if every state has period 1; a self-loop, <M>{"p_{ii} > 0"}</M>, is
          enough to make a state aperiodic.
        </p>
      </Definition>

      <Theorem title="the convergence theorem">
        <p>
          If a finite chain is irreducible and aperiodic, with stationary distribution <M>{"\\boldsymbol\\pi"}</M>, then for every
          starting state <M>{"i"}</M> and every state <M>{"j"}</M>,
        </p>
        <MD>{"(P^n)_{ij} \\to \\pi_j \\quad \\text{as } n \\to \\infty."}</MD>
        <p>Every row of <M>{"P^n"}</M> approaches <M>{"\\boldsymbol\\pi"}</M>: the chain forgets its starting point.</p>
      </Theorem>

      <Example title="what goes wrong otherwise">
        <p>
          In a periodic chain the distribution can oscillate for ever: a chain that alternates between two sets of states is
          never in the first set at odd times if it started there. In a reducible chain, different starting points can be
          trapped in different closed classes and so have different limits.
        </p>
      </Example>

      <Remark title="speed and eigenvalues">
        <p>
          If <M>{"P"}</M> is diagonalisable with eigenvalues <M>{"1 = \\lambda_1, \\lambda_2, \\dots"}</M>, then{" "}
          <M>{"P^n"}</M> approaches its limit at a rate governed by the second largest modulus{" "}
          <M>{"|\\lambda_2|"}</M>. For the two-state chain, <M>{"\\lambda_2 = 1 - a - b"}</M>, and the distance to{" "}
          <M>{"\\boldsymbol\\pi"}</M> shrinks by this factor at each step. A periodic chain has an eigenvalue <M>{"-1"}</M>,
          which never shrinks.
        </p>
      </Remark>

      <Remark title="coupling">
        <p>
          A probabilistic proof runs two copies of the chain, one started at <M>{"i"}</M> and one started from{" "}
          <M>{"\\boldsymbol\\pi"}</M>, independently until they meet and together afterwards. Irreducibility and aperiodicity
          guarantee they meet eventually, after which the first copy is distributed like the second.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "need",
      rung: "check",
      prompt: <p>Which conditions does the convergence theorem need for a finite chain?</p>,
      answer: { kind: "choice", options: ["Irreducible", "Aperiodic", "Symmetric transition matrix", "Exactly two states"], correct: [0, 1] },
    },
    {
      key: "period",
      rung: "check",
      prompt: <p>A chain moves deterministically around a cycle of 4 states. What is the period of each state?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "loop",
      rung: "apply",
      prompt: <p>Adding a small probability of staying put to every state of a periodic irreducible chain makes it:</p>,
      answer: { kind: "choice", options: ["Reducible", "Aperiodic", "Absorbing", "Non-Markov"], correct: [1] },
    },
    {
      key: "lam",
      rung: "apply",
      prompt: <p>A two-state chain has a = 0.3 and b = 0.2. What is its second eigenvalue 1 − a − b?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "dist",
      rung: "apply",
      prompt: <p>For that chain started in state 0, P(Xₙ = 0) = π₀ + (1 − π₀)(0.5)ⁿ with π₀ = 0.4. What is P(X₃ = 0)?</p>,
      answer: { kind: "numeric", value: 0.4 + 0.6 * 0.125, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For the two-state chain, show that Δₙ = P(Xₙ = 0) − π₀ satisfies Δₙ₊₁ = (1 − a − b)Δₙ, and deduce convergence when 0 &lt; a + b &lt; 2.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes P(Xₙ₊₁ = 0) = P(Xₙ = 0)(1 − a) + (1 − P(Xₙ = 0))b.",
          "Subtracts the same equation for π₀ to get Δₙ₊₁ = (1 − a − b)Δₙ.",
          "Notes |1 − a − b| < 1 so Δₙ → 0.",
        ],
      },
    },
    {
      key: "shuffle",
      rung: "stretch",
      prompt: <p>A &ldquo;top-to-random&rdquo; shuffle takes the top card and inserts it at a random position. Why is this chain aperiodic and irreducible on orderings of the pack, and what is its stationary distribution?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the card may be put back on top, giving a self-loop, so aperiodic.",
          "Argues any ordering can be reached from any other.",
          "Identifies the uniform distribution as stationary. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend periodicity and aperiodicity, the convergence theorem for irreducible aperiodic chains, how periodic and reducible chains fail to converge, the role of the second eigenvalue in the speed, and the idea of a coupling proof.",

  glimpse: (
    <p>
      The final lesson of the course studies random walks, the simplest chains on infinite state spaces. Ergodic theory takes
      convergence to equilibrium into dynamics in general.
    </p>
  ),
};
