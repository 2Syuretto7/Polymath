import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { StrategyViz, type Plan } from "@/components/viz/StrategyViz";
import type { LessonContent } from "@/lib/types";

const rule = { fontFamily: "var(--font-mono)", fontSize: 13.5 };

const PLANS: Plan[] = [
  {
    name: "Nothing is F", claim: "¬∃xFx ⊢ ∀x¬Fx",
    lines: [
      { s: "¬∃xFx", depth: 0, why: "premise" },
      { s: "Fa", depth: 1, why: "assumption", assume: true },
      { s: "∃xFx", depth: 1, why: "∃I 2" },
      { s: "¬∃xFx", depth: 1, why: "R 1" },
      { s: "¬Fa", depth: 0, why: "¬I 2–4" },
      { s: "∀x¬Fx", depth: 0, why: "∀I 5" },
    ],
    order: [0, 3, 5, 4, 2, 1],
    notes: [
      "Write the premise at the top. Before using it, look at the goal.",
      "Write the goal at the bottom. It is universal, so the last step will be ∀I, from ¬Fa, for a name a that appears nowhere else.",
      "The new goal, ¬Fa, is a negation. Plan ¬I: assume Fa and look for a contradiction.",
      "Open the subproof with Fa.",
      "Which contradiction? The premise ¬∃xFx is available, so aim for ∃xFx.",
      "And ∃xFx follows from Fa by ∃I. The gap is closed.",
    ],
  },
  {
    name: "Existential first", claim: "∀x(Fx → Gx), ∃x¬Gx ⊢ ∃x¬Fx",
    lines: [
      { s: "∀x(Fx → Gx)", depth: 0, why: "premise" },
      { s: "∃x¬Gx", depth: 0, why: "premise" },
      { s: "¬Ga", depth: 1, why: "assumption", assume: true },
      { s: "Fa → Ga", depth: 1, why: "∀E 1" },
      { s: "¬Fa", depth: 1, why: "MT 4, 3" },
      { s: "∃x¬Fx", depth: 1, why: "∃I 5" },
      { s: "∃x¬Fx", depth: 0, why: "∃E 2, 3–6" },
    ],
    order: [0, 0, 2, 4, 5, 3, 1],
    notes: [
      "Premises at the top. One is existential: plan to use it by ∃E, and do it early, while every name is still new.",
      "The goal goes at the bottom, as the conclusion of ∃E.",
      "Open the ∃E subproof, naming the object a. Inside, the goal is still ∃x¬Fx, which does not mention a, as ∃E requires.",
      "∃x¬Fx would follow from ¬Fa by ∃I.",
      "To get ¬Fa, bring the universal premise down to a, the name already in play.",
      "Modus tollens finishes it. Had ∀E come first with some name, ∃E would have needed a different one, and the two would never meet.",
    ],
  },
  {
    name: "Cases inside", claim: "∃x(Fx ∨ Gx) ⊢ ∃xFx ∨ ∃xGx",
    lines: [
      { s: "∃x(Fx ∨ Gx)", depth: 0, why: "premise" },
      { s: "Fa ∨ Ga", depth: 1, why: "assumption", assume: true },
      { s: "Fa", depth: 2, why: "assumption", assume: true },
      { s: "∃xFx", depth: 2, why: "∃I 3" },
      { s: "∃xFx ∨ ∃xGx", depth: 2, why: "∨I 4" },
      { s: "Ga", depth: 2, why: "assumption", assume: true },
      { s: "∃xGx", depth: 2, why: "∃I 6" },
      { s: "∃xFx ∨ ∃xGx", depth: 2, why: "∨I 7" },
      { s: "∃xFx ∨ ∃xGx", depth: 1, why: "∨E 2, 3–5, 6–8" },
      { s: "∃xFx ∨ ∃xGx", depth: 0, why: "∃E 1, 2–9" },
    ],
    order: [0, 2, 4, 5, 4, 4, 5, 4, 3, 1],
    notes: [
      "The premise is existential. Plan ∃E.",
      "The goal goes at the bottom, after ∃E.",
      "Open the subproof, assuming Fa ∨ Ga for a new name a.",
      "The goal is a disjunction, but neither disjunct can be proved on its own. A disjunction is available, though, so plan ∨E: reach the goal in each case.",
      "Set up the two cases, each aiming for the same goal.",
      "Each case closes with ∃I, then ∨I.",
    ],
  },
];

export const lesson: LessonContent = {
  id: "p2.6.3",
  minutes: 80,
  links: {
    revisits: ["p2.3.4", "p2.5.3"],
    foreshadows: ["p17.2.1", "m20.3.2"],
  },

  puzzle: (
    <>
      <p>
        A truth tree is mechanical: apply the rules, in any sensible order, and if the argument is valid the tree will
        close. Natural deduction is different. The rules say what you may write, never what you should write. Faced with a
        blank space between the premises and the conclusion, where do you begin?
      </p>
      <p>Is finding proofs an art, or is there a method?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        A proof is written from top to bottom, but it is found from both ends at once. Work <strong>backwards</strong> from
        the goal: its main connective or quantifier usually says what the last step must be, and that step leaves a
        simpler goal. Work <strong>forwards</strong> from the premises: their shape says how they can be used. When the two
        meet, the proof is done. The visualisation fills in each proof in the order a person might think of its lines.
      </p>
      <StrategyViz plans={PLANS} />
    </>
  ),

  theory: (
    <>
      <Definition title="working backwards: the shape of the goal">
        <table className="table">
          <thead><tr><th>Goal</th><th>Plan</th></tr></thead>
          <tbody>
            <tr><td style={rule}>φ ∧ ψ</td><td>prove φ and ψ separately, then ∧I</td></tr>
            <tr><td style={rule}>φ ∨ ψ</td><td>prove one disjunct and use ∨I; if neither will come, use ∨E on a disjunction you have, or IP</td></tr>
            <tr><td style={rule}>φ → ψ</td><td>assume φ, aim for ψ, then →I</td></tr>
            <tr><td style={rule}>¬φ</td><td>assume φ, aim for a contradiction, then ¬I</td></tr>
            <tr><td style={rule}>φ ↔ ψ</td><td>two subproofs, φ to ψ and ψ to φ, then ↔I</td></tr>
            <tr><td style={rule}>∀xφ</td><td>prove φ(a) for a name a used nowhere else, then ∀I</td></tr>
            <tr><td style={rule}>∃xφ</td><td>find a name a for which φ(a) can be proved, then ∃I</td></tr>
          </tbody>
        </table>
      </Definition>

      <Definition title="working forwards: the shape of the premises">
        <ul>
          <li>A conjunction: take it apart with ∧E at once. It costs nothing.</li>
          <li>An existential: use ∃E early, with a new name, and do the rest of the work inside the subproof.</li>
          <li>A universal: use ∀E, but only with names that matter: names already in the proof, or the one you will generalise on.</li>
          <li>A conditional: look for its antecedent, or the negation of its consequent (→E or MT).</li>
          <li>A disjunction: look for the negation of one disjunct (DS), or plan proof by cases (∨E).</li>
          <li>A negated quantifier: convert it first (below).</li>
        </ul>
      </Definition>

      <Definition title="conversion of quantifiers">
        <p>These four derived rules, CQ, may be used in either direction:</p>
        <ul>
          <li style={rule}>¬∀xφ ⊣⊢ ∃x¬φ</li>
          <li style={rule}>¬∃xφ ⊣⊢ ∀x¬φ</li>
          <li style={rule}>¬∀x¬φ ⊣⊢ ∃xφ</li>
          <li style={rule}>¬∃x¬φ ⊣⊢ ∀xφ</li>
        </ul>
        <p>
          The first proof in the visualisation derives one direction of the second form. As with every derived rule, the
          basic rules could do the job; CQ only saves lines.
        </p>
      </Definition>

      <Remark title="when stuck">
        <p>
          If no plan suggests itself, try indirect proof: assume the negation of the goal and look for a contradiction. It
          is the strategy of last resort, but it always applies, and it gives you one more line to work with. It is how
          ¬∀xFx ⊢ ∃x¬Fx is proved from the basic rules: assume ¬∃x¬Fx, show Fa for an arbitrary a by a second indirect
          proof, generalise, and contradict the premise.
        </p>
      </Remark>

      <Example title="order matters">
        <p>
          In the second proof, suppose you began with ∀E, writing Fa → Ga. Then ∃E could not use the name a, because a
          would already be in the proof, so the existential would give ¬Gb, and the conditional about a would be useless. You
          would have to go back for Fb → Gb. Hence the rule of thumb: ∃E before ∀E.
        </p>
      </Example>

      <Remark title="art and method">
        <p>
          The strategies above find most proofs at this level, but not all, and they cannot: since validity in predicate
          logic is undecidable, no fixed method can always find a proof, or always tell you that none exists. What the
          completeness theorem guarantees is that for every valid argument a proof exists. Finding it can take insight,
          which is why proofs in mathematics are admired, and why mathematicians and computers alike rely on strategies
          that usually work rather than methods that always do.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "goal",
      rung: "check",
      prompt: <p>The goal is ∀x(Fx → Gx). What should the last step of the proof be?</p>,
      answer: { kind: "choice", options: ["∀I, from Fa → Ga with a new name a", "→I, from a subproof assuming ∀xFx", "∀E", "∃E"], correct: [0] },
    },
    {
      key: "first",
      rung: "check",
      prompt: <p>The premises are ∀x(Fx → Gx) and ∃xFx. Which step is usually best to take first?</p>,
      answer: {
        kind: "choice",
        options: [
          "Open an ∃E subproof, assuming Fa for a new name a",
          "Use ∀E with the name b",
          "Assume the negation of the goal",
          "Use ∃I",
        ],
        correct: [0],
      },
    },
    {
      key: "cq",
      rung: "apply",
      prompt: <p>By CQ, ¬∀x(Fx → Gx) may be rewritten as&hellip;</p>,
      answer: { kind: "choice", options: ["∃x¬(Fx → Gx)", "∀x¬(Fx → Gx)", "¬∃x(Fx → Gx)", "∃x(Fx → ¬Gx)"], correct: [0] },
    },
    {
      key: "plan",
      rung: "apply",
      prompt: <p>The goal is ¬∃x(Fx ∧ ¬Fx). Which plan works?</p>,
      answer: {
        kind: "choice",
        options: [
          "Assume ∃x(Fx ∧ ¬Fx), use ∃E to get Fa ∧ ¬Fa, and derive a contradiction, then ¬I",
          "Prove Fa ∧ ¬Fa and use ∃I",
          "Use ∀I on ¬(Fa ∧ ¬Fa) and stop",
          "No proof exists, since the sentence is not a logical truth",
        ],
        correct: [0],
      },
    },
    {
      key: "lines",
      rung: "apply",
      prompt: (
        <p>
          The proof of ∀x(Fx → Gx), ∀x(Gx → Hx) ⊢ ∀x(Fx → Hx) can be done with two premises, two uses of ∀E, a subproof
          of three lines (the assumption Fa and two uses of →E), then →I and ∀I. How many lines is that?
        </p>
      ),
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove ∀x(Fx → Gx), ∀x(Gx → Hx) ⊢ ∀x(Fx → Hx), and say which strategy suggested each step.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recognises from the goal that the last steps are →I inside ∀I, with a new name a.",
          "Instantiates both premises with a, assumes Fa, and uses →E twice to reach Ha.",
          "Closes with →I and ∀I, noting that a appears in no premise. Any correct order of lines is fine.",
        ],
      },
    },
    {
      key: "basic",
      rung: "stretch",
      prompt: <p>Prove ¬∀xFx ⊢ ∃x¬Fx using basic rules only (no CQ). Explain the strategy behind each subproof.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Assumes ¬∃x¬Fx for indirect proof, since there is no obvious way to prove the existential directly.",
          "Inside, assumes ¬Fa, gets ∃x¬Fx by ∃I, contradicts the assumption, and so gets Fa by IP.",
          "Generalises to ∀xFx by ∀I, contradicts the premise, and concludes ∃x¬Fx by IP. Small differences in layout are fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to plan a proof by working backwards from the goal and forwards from the premises, why existentials should be opened early, and why no strategy can work every time.",

  glimpse: (
    <p>
      This lesson ends Logic I. Logic II: Metalogic and Beyond proves that the proof system is sound and complete, so that
      it proves exactly the valid arguments, and studies what lies beyond it. Mathematical Logic and Set Theory proves the
      completeness theorem in full, by building a model out of the names of a theory, an idea already present in the way an
      open branch of a tree describes a counterexample.
    </p>
  ),
};
