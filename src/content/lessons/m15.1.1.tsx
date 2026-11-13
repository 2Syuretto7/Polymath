import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { FiniteTopologyViz } from "@/components/viz/FiniteTopologyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.1.1",
  minutes: 80,
  links: {
    revisits: ["m12.1.2", "m12.2.1", "m1.4.5"],
    foreshadows: ["m15.1.2", "m15.1.4", "m15.3.2"],
  },

  puzzle: (
    <>
      <p>
        In a metric space, continuity, convergence and compactness can all be described using open sets alone, without ever
        mentioning distance. Two different metrics, like the usual one and the taxicab one on the plane, give the same open
        sets and so the same continuous functions. So perhaps the open sets are what really matter. What if we keep only them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Declare some subsets of a three-point set open, and test whether you have made a topology.</p>
      <FiniteTopologyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="topological spaces">
        <p>
          A <strong>topology</strong> on a set <M>{"X"}</M> is a collection <M>{"\\mathcal{T}"}</M> of subsets, called{" "}
          <strong>open</strong>, such that
        </p>
        <MD>{"\\varnothing, X \\in \\mathcal{T}; \\quad \\bigcup_{\\alpha} U_\\alpha \\in \\mathcal{T} \\text{ for any family}; \\quad U \\cap V \\in \\mathcal{T}."}</MD>
        <p>
          The pair <M>{"(X, \\mathcal{T})"}</M> is a <strong>topological space</strong>. Arbitrary unions are allowed, but only
          finite intersections: in <M>{"\\mathbb{R}"}</M>, the intersection of the open intervals{" "}
          <M>{"(-1/n, 1/n)"}</M> is <M>{"\\{0\\}"}</M>, which is not open.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          The open sets of a metric space form the <strong>metric topology</strong>. The <strong>discrete</strong> topology
          makes every subset open; the <strong>indiscrete</strong> topology has only <M>{"\\varnothing"}</M> and{" "}
          <M>{"X"}</M>. The <strong>cofinite</strong> topology on an infinite set makes open the empty set and the complements
          of finite sets. The discrete topology comes from a metric, but the indiscrete topology on two or more points does
          not, since metric spaces separate points.
        </p>
      </Example>

      <Definition title="bases">
        <p>
          A <strong>basis</strong> for a topology is a collection <M>{"\\mathcal{B}"}</M> of open sets such that every open set
          is a union of members of <M>{"\\mathcal{B}"}</M>. The open balls form a basis for a metric topology, and the open
          intervals with rational endpoints form a countable basis for <M>{"\\mathbb{R}"}</M>.
        </p>
      </Definition>

      <Theorem title="when a collection is a basis">
        <p>
          A collection <M>{"\\mathcal{B}"}</M> of subsets of <M>{"X"}</M> is a basis for some topology if and only if the sets
          cover <M>{"X"}</M>, and whenever <M>{"x \\in B_1 \\cap B_2"}</M> there is <M>{"B_3 \\in \\mathcal{B}"}</M> with{" "}
          <M>{"x \\in B_3 \\subseteq B_1 \\cap B_2"}</M>. The topology is then the set of all unions of members of{" "}
          <M>{"\\mathcal{B}"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"\\mathcal{T}"}</M> be all unions of members of <M>{"\\mathcal{B}"}</M>. It contains <M>{"\\varnothing"}</M>,
          the empty union, and <M>{"X"}</M>, by the covering condition, and is closed under unions. For intersections, if{" "}
          <M>{"U, V \\in \\mathcal{T}"}</M> and <M>{"x \\in U \\cap V"}</M>, pick <M>{"x \\in B_1 \\subseteq U"}</M> and{" "}
          <M>{"x \\in B_2 \\subseteq V"}</M>, then <M>{"B_3"}</M> as given. So <M>{"U \\cap V"}</M> is the union of such{" "}
          <M>{"B_3"}</M>, one for each point. The converse is similar.
        </p>
      </Proof>

      <Remark title="comparing topologies">
        <p>
          If <M>{"\\mathcal{T}_1 \\subseteq \\mathcal{T}_2"}</M>, then <M>{"\\mathcal{T}_2"}</M> is <strong>finer</strong>: it
          has more open sets. Two metrics are topologically equivalent when every ball of each contains a ball of the other
          around the same point; this is why the Euclidean and taxicab metrics give the same topology.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which condition is part of the definition of a topology?</p>,
      answer: {
        kind: "choice",
        options: [
          "Finite intersections of open sets are open.",
          "Arbitrary intersections of open sets are open.",
          "Every subset is open.",
          "Complements of open sets are open.",
        ],
        correct: [0],
      },
    },
    {
      key: "basis",
      rung: "check",
      prompt: <p>What is a basis for a topology?</p>,
      answer: {
        kind: "choice",
        options: [
          "A collection of open sets whose unions give every open set.",
          "A linearly independent set.",
          "The set of all open sets.",
          "A single open set containing every point.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, start from {"{∅, {a}, {b}, X}"}. Which set must be added to make a topology?</p>,
      answer: { kind: "choice", options: ["{a, b}", "{c}", "{a, c}", "{b, c}"], correct: [0] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many topologies are there on a two-point set {"{a, b}"}?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "cof",
      rung: "apply",
      prompt: <p>In the cofinite topology on <M>{"\\mathbb{R}"}</M>, is the interval <M>{"(0, 1)"}</M> open?</p>,
      answer: {
        kind: "choice",
        options: ["No: its complement is infinite.", "Yes: it is open in the usual topology.", "Yes: every interval is open.", "Only if it is closed too."],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that in a metric space the open balls form a basis for the metric topology.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recalls that a set U is open if every point of U has a ball around it inside U, and that balls are open.",
          "Shows every open set is the union of the balls it contains around each of its points.",
          "Concludes that the balls form a basis.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the half-open intervals <M>{"[a, b)"}</M> form a basis for a topology on <M>{"\\mathbb{R}"}</M> that is strictly finer than the usual one.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks the two basis conditions: the intervals cover ℝ, and the intersection of two is again such an interval or empty.",
          "Shows each open interval (a, b) is a union of half-open ones, so the new topology is finer.",
          "Shows [0, 1) is not open in the usual topology, so it is strictly finer. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a topology is and why only finite intersections are required, examples such as the metric, discrete, indiscrete and cofinite topologies, what a basis is and when a collection is one, and what it means for one topology to be finer.",

  glimpse: (
    <p>
      The next lesson builds new spaces from old: subspaces, products and quotients. Then come continuity and homeomorphisms,
      and separation axioms, which say how well open sets tell points apart.
    </p>
  ),
};
