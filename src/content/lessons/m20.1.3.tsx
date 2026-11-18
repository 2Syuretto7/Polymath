import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { KonigTreeViz } from "@/components/viz/KonigTreeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.1.3",
  minutes: 85,
  links: {
    revisits: ["m20.1.2", "m1.8.2", "m1.5.1"],
    foreshadows: ["m20.1.4", "m20.3.3", "m20.6.5"],
  },

  puzzle: (
    <>
      <p>
        You have infinitely many conditions on infinitely many switches, each condition mentioning only finitely many
        switches. Every finite batch of conditions can be met by some setting. Must there be a single setting meeting them
        all at once? With infinitely many switches you can never check, so where would such a setting come from?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a set of conditions and grow the tree of partial assignments.</p>
      <KonigTreeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="finite satisfiability">
        <p>
          A set Σ of formulas is <strong>finitely satisfiable</strong> if every finite subset of Σ is satisfiable. Note that
          different finite subsets may be satisfied by different truth assignments.
        </p>
      </Definition>

      <Theorem title="the compactness theorem">
        <p>
          A set of formulas is satisfiable if and only if it is finitely satisfiable. Proof, for countably many sentence
          symbols. Enumerate all formulas <M>{"\\alpha_1, \\alpha_2, \\ldots"}</M> Starting from <M>{"\\Delta_0 = \\Sigma"}</M>,
          let <M>{"\\Delta_{n+1}"}</M> be <M>{"\\Delta_n \\cup \\{\\alpha_{n+1}\\}"}</M> if that is finitely satisfiable, and{" "}
          <M>{"\\Delta_n \\cup \\{\\neg\\alpha_{n+1}\\}"}</M> otherwise. One of the two always is: if finite{" "}
          <M>{"\\Delta' \\cup \\{\\alpha\\}"}</M> and <M>{"\\Delta'' \\cup \\{\\neg\\alpha\\}"}</M> were both unsatisfiable, so
          would be <M>{"\\Delta' \\cup \\Delta''"}</M>. The union Δ is finitely satisfiable and contains α or ¬α for every
          formula. Define v(A) = T exactly when A ∈ Δ; induction on formulas shows that v satisfies exactly the members of Δ,
          and so all of Σ.
        </p>
      </Theorem>

      <Example title="a consequence">
        <p>
          If Σ ⊨ τ, then some finite <M>{"\\Sigma_0 \\subseteq \\Sigma"}</M> has <M>{"\\Sigma_0 \\vDash \\tau"}</M>. For otherwise
          every finite subset of Σ ∪ {"{"}¬τ{"}"} would be satisfiable, so by compactness the whole set would be, contradicting
          Σ ⊨ τ. Any conclusion depends on only finitely many premises.
        </p>
      </Example>

      <Remark title="applications and the tree proof">
        <p>
          The visualisation shows another proof: if every level of the tree of partial assignments has a surviving node,
          König&rsquo;s lemma gives an infinite surviving branch. Compactness turns finite combinatorics into infinite: an
          infinite graph is k-colourable if every finite subgraph is (de Bruijn and Erdős), and every partial order extends to
          a total order. For uncountably many symbols the proof needs Zorn&rsquo;s lemma, and first-order logic has its own
          compactness theorem, later in this course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "stmt",
      rung: "check",
      prompt: <p>What does the compactness theorem say?</p>,
      answer: {
        kind: "choice",
        options: [
          "A set of formulas is satisfiable if and only if every finite subset is.",
          "Every set of formulas is satisfiable.",
          "Every satisfiable set is finite.",
          "Every tautology has a short proof.",
        ],
        correct: [0],
      },
    },
    {
      key: "finite",
      rung: "check",
      prompt: <p>Must a finitely satisfiable set have one truth assignment satisfying every finite subset?</p>,
      answer: { kind: "choice", options: ["Yes, by the compactness theorem, though the definition does not require it", "No, never", "Only if Σ is finite", "Only if Σ is empty"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for &ldquo;chain with a break&rdquo;, at what depth does no assignment survive?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "nodes",
      rung: "apply",
      prompt: <p>How many partial assignments are there at depth 7 of the full, unpruned tree?</p>,
      answer: { kind: "numeric", value: 128 },
    },
    {
      key: "graph",
      rung: "apply",
      prompt: <p>Every finite subgraph of an infinite graph can be properly coloured with 3 colours. What does compactness give?</p>,
      answer: {
        kind: "choice",
        options: ["The whole graph can be properly coloured with 3 colours", "Nothing about the whole graph", "The graph is finite", "The graph needs infinitely many colours"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Using compactness, prove that if Σ ⊨ τ then some finite subset of Σ tautologically implies τ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes for contradiction that no finite subset implies τ.",
          "Deduces that every finite subset of Σ ∪ {¬τ} is satisfiable.",
          "Applies compactness to get an assignment satisfying Σ and ¬τ, contradicting Σ ⊨ τ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Sketch the proof of compactness by König&rsquo;s lemma for a set Σ in the symbols <M>{"A_1, A_2, \\ldots"}</M></p>,
      answer: {
        kind: "written",
        rubric: [
          "Builds the tree of assignments to the first n symbols, keeping a node unless it falsifies a member of Σ using only those symbols.",
          "Uses finite satisfiability to show every level is non-empty, and König’s lemma to get an infinite branch, which satisfies Σ.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, deduction for sentential logic, and the completeness theorem: everything that follows can be proved.
    </p>
  ),
};
