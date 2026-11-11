import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SubproofViz } from "@/components/viz/SubproofViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p2.3.2",
  minutes: 75,
  links: {
    revisits: ["p0.4.1", "p2.2.2"],
    parallels: ["m1.3.1"],
    foreshadows: ["p17.1.2", "p26.3.4"],
  },

  puzzle: (
    <>
      <p>
        You want to show: if the shop is open, I can buy bread. You do not know whether the shop is open. So you say:
        &ldquo;Suppose it is open. Then &hellip; and then &hellip; so I can buy bread.&rdquo; Having reasoned under the
        supposition, you assert the conditional outright, though you never established that the shop is open.
      </p>
      <p>
        This is everyday reasoning, and every mathematician does it constantly. But the rules of the last lesson only ever
        use a conditional; none of them can produce one. How can a proof legitimately reason from something it has not
        established?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The answer is a proof inside a proof. A <strong>subproof</strong> begins with an assumption, which can be anything at
        all. Inside it you reason as usual. When the subproof ends, the assumption is <strong>discharged</strong>: you may no
        longer use it or anything derived in the subproof. What you take away is the conditional: if the assumption, then
        what you reached.
      </p>
      <p>
        Below, step through three proofs. Watch the vertical bars: each one marks how long an assumption is in force.
      </p>
      <SubproofViz />
    </>
  ),

  theory: (
    <>
      <Definition title="conditional introduction (→I)">
        <p>
          If a subproof begins with the assumption φ and contains the line ψ, then after the subproof ends you may write φ → ψ,
          citing the whole subproof. This is also called <strong>conditional proof</strong>.
        </p>
      </Definition>

      <Definition title="the scope rules">
        <ul>
          <li>An assumption may be made at any point, starting a new subproof, shown by a new vertical bar.</li>
          <li>Inside a subproof you may use any earlier line from the same subproof or from any subproof that encloses it and is still open.</li>
          <li>
            Once a subproof is closed, none of its lines may be cited individually again. Only the subproof as a whole may be
            cited, by a rule such as →I.
          </li>
          <li>A proof is finished only when every subproof has been closed.</li>
        </ul>
        <p>Repeating an available line inside a subproof is called <strong>reiteration</strong>, R.</p>
      </Definition>

      <Remark title="why the scope rules matter">
        <p>
          Without them, anything could be proved. Assume A, and then, if A could be used after the subproof closes, the proof
          would assert A outright, though nothing established it. The bar makes the dependence visible: a line inside a bar
          depends on that bar&rsquo;s assumption; a line outside every bar depends only on the premises.
        </p>
      </Remark>

      <Definition title="disjunction elimination (∨E)">
        <p>
          A second rule uses subproofs. If you have φ ∨ ψ, a subproof from φ to χ, and a subproof from ψ to χ, you may write
          χ. This is <strong>proof by cases</strong>: whichever disjunct holds, χ follows.
        </p>
      </Definition>

      <Example title="a theorem">
        <p>
          When every assumption is discharged and there were no premises, the result depends on nothing at all, written ⊢ φ. The
          second proof in the visualisation shows ⊢ A → (B → A). A sentence provable from no premises is a{" "}
          <strong>theorem</strong> of the system. Every theorem is a tautology, by soundness.
        </p>
      </Example>

      <Remark title="a strategy">
        <p>
          When the goal is a conditional φ → ψ, the natural plan is almost always: assume φ, aim for ψ, then use →I. When the
          goal is ψ and a premise is a disjunction, consider proof by cases. Working backwards from the goal like this, and
          forwards from the premises, until the two meet, is the main skill of natural deduction.
        </p>
      </Remark>

      <Remark title="suppositions in philosophy">
        <p>
          Thought experiments, which you met in Thinking and Writing Philosophically, are conditional proofs in disguise:
          suppose a person steps into a teleporter and two copies step out; then &hellip;. The conclusion is a conditional
          about what would follow, and the assumption is discharged at the end, however strange it was.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "discharge",
      rung: "check",
      prompt: <p>After a subproof that assumed A and reached C is closed, what may be written by →I?</p>,
      answer: { kind: "choice", options: ["A", "C", "A → C", "C → A"], correct: [2] },
    },
    {
      key: "scope",
      rung: "check",
      prompt: <p>A line inside a closed subproof may later be cited&hellip;</p>,
      answer: {
        kind: "choice",
        options: ["by any rule", "only as part of the whole subproof, by a rule such as →I or ∨E", "only by reiteration", "never, even as part of the subproof"],
        correct: [1],
      },
    },
    {
      key: "plan",
      rung: "apply",
      prompt: <p>To prove (A ∧ B) → A, what should the first line of the subproof be?</p>,
      answer: { kind: "choice", options: ["A", "A ∧ B", "B", "¬A"], correct: [1] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many lines, including the assumption and the final line, does the shortest proof of ⊢ (A ∧ B) → A take?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "cases",
      rung: "apply",
      prompt: <p>To use ∨E on A ∨ B to reach C, how many subproofs do you need?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Give a proof, with every line justified, of A → (B → C) ⊢ (A ∧ B) → C.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Assumes A ∧ B to open a subproof.",
          "Derives A and B by ∧E.",
          "Uses →E twice to reach C.",
          "Closes the subproof and writes (A ∧ B) → C by →I, citing the subproof.",
        ],
      },
    },
    {
      key: "commute",
      rung: "stretch",
      prompt: (
        <p>
          Prove A ∨ B ⊢ B ∨ A using ∨E. Then explain why the scope rules forbid the following &ldquo;shortcut&rdquo;: assume A,
          derive B ∨ A, close the subproof, and then write B ∨ A as if it were proved.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives two subproofs, from A and from B, each reaching B ∨ A by ∨I, and closes with ∨E citing the premise and both subproofs.",
          "Explains that the shortcut cites a line from a closed subproof directly.",
          "Notes that the shortcut would let the conclusion depend on an assumption that was never established.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how conditional proof works: what it means to assume something, how the assumption is discharged, and why lines inside a closed subproof cannot be reused.",

  glimpse: (
    <p>
      Conditional proof is why the material conditional and the proof system fit together: in Logic II: Metalogic and Beyond
      it becomes the deduction theorem. Counterfactual suppositions, about what would have happened, need a different logic,
      met in Modal Logic and Formal Methods.
    </p>
  ),
};
