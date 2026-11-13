import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ClosureLineViz } from "@/components/viz/ClosureLineViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.1.3",
  minutes: 80,
  links: {
    revisits: ["m15.1.2", "m15.1.1", "m12.1.2"],
    foreshadows: ["m15.1.4", "m15.2.2", "m15.3.2"],
  },

  puzzle: (
    <>
      <p>
        The rationals between 0 and 1 have no interior: every interval contains an irrational. Yet their closure is the whole
        of <M>{"[0, 1]"}</M>. So a set can be at once &ldquo;thin&rdquo; and &ldquo;everywhere&rdquo;. How do we measure, using
        only open sets, how close a point is to a set?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a subset of the real line and compare it with its interior, closure, boundary and limit points.</p>
      <ClosureLineViz />
    </>
  ),

  theory: (
    <>
      <Definition title="closed sets, interior and closure">
        <p>
          A set is <strong>closed</strong> if its complement is open. Closed sets contain <M>{"\\varnothing"}</M> and{" "}
          <M>{"X"}</M>, and are closed under arbitrary intersections and finite unions. The <strong>interior</strong>{" "}
          <M>{"\\operatorname{int} A"}</M> is the union of all open sets inside <M>{"A"}</M>, and the <strong>closure</strong>{" "}
          <M>{"\\overline{A}"}</M> is the intersection of all closed sets containing <M>{"A"}</M>. The{" "}
          <strong>boundary</strong> is <M>{"\\partial A = \\overline{A} \\setminus \\operatorname{int} A"}</M>.
        </p>
      </Definition>

      <Theorem title="closure through neighbourhoods">
        <p>
          A point <M>{"x"}</M> lies in <M>{"\\overline{A}"}</M> if and only if every open set containing <M>{"x"}</M> meets{" "}
          <M>{"A"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Suppose some open <M>{"U \\ni x"}</M> misses <M>{"A"}</M>. Then <M>{"X \\setminus U"}</M> is closed and contains{" "}
          <M>{"A"}</M>, so it contains <M>{"\\overline{A}"}</M>, and <M>{"x \\notin \\overline{A}"}</M>. Conversely, if{" "}
          <M>{"x \\notin \\overline{A}"}</M>, some closed <M>{"C \\supseteq A"}</M> misses <M>{"x"}</M>, and{" "}
          <M>{"X \\setminus C"}</M> is an open set containing <M>{"x"}</M> that misses <M>{"A"}</M>.
        </p>
      </Proof>

      <Definition title="limit points">
        <p>
          A point <M>{"x"}</M> is a <strong>limit point</strong> of <M>{"A"}</M> if every open set containing <M>{"x"}</M> meets{" "}
          <M>{"A"}</M> in a point other than <M>{"x"}</M>. Writing <M>{"A'"}</M> for the set of limit points,{" "}
          <M>{"\\overline{A} = A \\cup A'"}</M>, and <M>{"A"}</M> is closed exactly when it contains all its limit points. A
          point of <M>{"A"}</M> that is not a limit point is <strong>isolated</strong>.
        </p>
      </Definition>

      <Example title="dense sets">
        <p>
          A set is <strong>dense</strong> if its closure is the whole space. <M>{"\\mathbb{Q}"}</M> is dense in{" "}
          <M>{"\\mathbb{R}"}</M>, and so are the irrationals. In the cofinite topology on an infinite set, every infinite subset
          is dense, since the only closed sets containing it are the whole space.
        </p>
      </Example>

      <Remark title="sequences are not enough">
        <p>
          In a metric space, <M>{"x \\in \\overline{A}"}</M> exactly when some sequence in <M>{"A"}</M> converges to{" "}
          <M>{"x"}</M>. In a general space this can fail, because a point may have too many neighbourhoods for a sequence to
          probe them all. Nets and filters replace sequences there, and first countable spaces, met later, are those where
          sequences do suffice.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "closed",
      rung: "check",
      prompt: <p>When is a set closed?</p>,
      answer: {
        kind: "choice",
        options: ["When its complement is open", "When it is not open", "When it is bounded", "When it is finite"],
        correct: [0],
      },
    },
    {
      key: "closure",
      rung: "check",
      prompt: <p>When does a point <M>{"x"}</M> lie in the closure of <M>{"A"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["When every open set containing x meets A", "When x is in A", "When some open set containing x lies in A", "When x is a limit of A in size"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what are the limit points of <M>{"\\{1/n : n \\ge 1\\}"}</M>?</p>,
      answer: { kind: "choice", options: ["Only 0", "The set itself", "[0, 1]", "None"], correct: [0] },
    },
    {
      key: "bd",
      rung: "apply",
      prompt: <p>What is the boundary of <M>{"\\mathbb{Q}"}</M> in <M>{"\\mathbb{R}"}</M>?</p>,
      answer: { kind: "choice", options: ["All of ℝ", "∅", "ℚ", "The irrationals"], correct: [0] },
    },
    {
      key: "both",
      rung: "apply",
      prompt: <p>In <M>{"\\mathbb{R}"}</M> with the usual topology, how many subsets are both open and closed?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that <M>{"\\overline{A \\cup B} = \\overline{A} \\cup \\overline{B}"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows Ā ∪ B̄ is closed, as a finite union of closed sets, and contains A ∪ B, so it contains the closure of A ∪ B.",
          "Shows Ā and B̄ are each inside the closure of A ∪ B, since the closure is monotone.",
          "Concludes equality.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Give an example of infinitely many closed sets whose union is not closed, and explain why closed sets are closed under only finite unions.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an example, such as the union of [1/n, 1] over all n, which is (0, 1].",
          "Explains that by taking complements this corresponds to infinite intersections of open sets, which need not be open.",
          "Notes that finite unions are fine because finite intersections of open sets are open. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what closed sets, interior, closure and boundary are, why a point is in the closure exactly when every neighbourhood meets the set, what limit points and dense sets are, and why sequences are not always enough.",

  glimpse: (
    <p>
      Next, continuity is defined by open sets or, equally, by closed sets. Closed subsets of compact spaces are compact, and
      separation axioms say when points and closed sets can be pulled apart by open sets.
    </p>
  ),
};
