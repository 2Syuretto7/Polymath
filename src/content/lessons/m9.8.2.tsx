import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { StationaryFlowViz } from "@/components/viz/StationaryFlowViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.8.2",
  minutes: 85,
  links: {
    revisits: ["m9.8.1", "m3.7.1", "m9.7.1"],
    foreshadows: ["m9.8.3", "m9.8.4", "m27.2.2"],
  },

  puzzle: (
    <>
      <p>
        A factory machine breaks down now and then and is repaired after a while. In the long run, what fraction of days is it
        out of action? The daily ups and downs never stop, yet the proportion should settle. Is there a distribution that the
        chain&rsquo;s own dynamics leave exactly unchanged?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change how often the machine breaks and how quickly it is repaired, and compare the two flows.</p>
      <StationaryFlowViz />
    </>
  ),

  theory: (
    <>
      <Definition title="stationary distribution">
        <p>
          A probability row vector <M>{"\\boldsymbol\\pi"}</M> is <strong>stationary</strong> for <M>{"P"}</M> if{" "}
          <M>{"\\boldsymbol\\pi P = \\boldsymbol\\pi"}</M>. If <M>{"X_0"}</M> has distribution <M>{"\\boldsymbol\\pi"}</M>, so
          does every <M>{"X_n"}</M>. Equivalently, <M>{"\\boldsymbol\\pi"}</M> is a left eigenvector of <M>{"P"}</M> with
          eigenvalue 1, scaled so its entries sum to 1.
        </p>
      </Definition>

      <Example title="two states">
        <p>For <M>{"P = \\begin{pmatrix} 1 - a & a \\\\ b & 1 - b \\end{pmatrix}"}</M>, the equation <M>{"\\pi_0 = \\pi_0(1 - a) + \\pi_1 b"}</M> says <M>{"\\pi_0 a = \\pi_1 b"}</M>, so</p>
        <MD>{"\\boldsymbol\\pi = \\left(\\frac{b}{a + b},\; \\frac{a}{a + b}\\right)."}</MD>
      </Example>

      <Theorem title="existence and uniqueness">
        <p>
          Every finite chain has at least one stationary distribution. If the chain is <strong>irreducible</strong>, meaning
          every state can be reached from every other, the stationary distribution is unique and every entry is positive.
        </p>
      </Theorem>

      <Theorem title="long-run frequencies">
        <p>
          For an irreducible finite chain, the fraction of the first <M>{"n"}</M> steps spent in state <M>{"j"}</M> tends to{" "}
          <M>{"\\pi_j"}</M> with probability 1, from any start, and the mean time to return to <M>{"j"}</M> is{" "}
          <M>{"1/\\pi_j"}</M>. This is a law of large numbers for dependent draws.
        </p>
      </Theorem>

      <Remark title="detailed balance and PageRank">
        <p>
          If <M>{"\\pi_i p_{ij} = \\pi_j p_{ji}"}</M> for every pair of states, the chain is reversible and{" "}
          <M>{"\\boldsymbol\\pi"}</M> is automatically stationary; this is how simulation methods such as Metropolis sampling
          are designed. Google&rsquo;s original PageRank was the stationary distribution of a random surfer clicking links.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What equation defines a stationary distribution π for a transition matrix P?</p>,
      answer: { kind: "choice", options: ["Pπ = 0", "πP = π", "P² = P", "π = 1"], correct: [1] },
    },
    {
      key: "eig",
      rung: "check",
      prompt: <p>A stationary distribution is a left eigenvector of P with which eigenvalue?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>A machine breaks with probability a = 0.1 each working day and is repaired with probability b = 0.4 each broken day. What long-run fraction of days is it broken?</p>,
      answer: { kind: "numeric", value: 0.2, tolerance: 0.001 },
    },
    {
      key: "ret",
      rung: "apply",
      prompt: <p>For that machine, what is the mean number of days between successive broken days?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0.001 },
    },
    {
      key: "dbl",
      rung: "apply",
      prompt: <p>A random walk on a graph moves to a uniformly chosen neighbour. Its stationary distribution is proportional to each vertex&rsquo;s degree. On a path with vertices of degrees 1, 2, 2, 1, what is the stationary probability of an end vertex?</p>,
      answer: { kind: "numeric", value: 1 / 6, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if π satisfies detailed balance, π_i p_ij = π_j p_ji for all i and j, then π is stationary.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes (πP)_j = Σ_i π_i p_ij.",
          "Replaces each term by π_j p_ji using detailed balance.",
          "Uses Σ_i p_ji = 1 to get π_j.",
        ],
      },
    },
    {
      key: "surf",
      rung: "stretch",
      prompt: <p>Why did PageRank add a small chance that the random surfer jumps to a completely random page? Think about pages with no outgoing links and groups of pages that only link to each other.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that without jumps the chain may be reducible or trapped.",
          "Explains that random jumps make the chain irreducible, so the stationary distribution is unique.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a stationary distribution is and why it is a left eigenvector with eigenvalue 1, the two-state formula and its balance of flows, uniqueness for irreducible chains, long-run frequencies and return times, and detailed balance.",

  glimpse: (
    <p>
      The next lesson asks when the distribution of the chain actually converges to the stationary one. Ergodic theory
      generalises the long-run frequency theorem far beyond Markov chains.
    </p>
  ),
};
