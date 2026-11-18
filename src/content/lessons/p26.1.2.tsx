import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ModalLatticeViz } from "@/components/viz/ModalLatticeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p26.1.2",
  minutes: 90,
  links: {
    revisits: ["p26.1.1", "p2.3.1", "p17.1.1"],
    foreshadows: ["p26.1.3", "p26.1.4", "p26.3.2"],
  },

  puzzle: (
    <>
      <p>
        If something is necessary, is it necessarily necessary? If it is possible, is it necessarily possible? Different
        answers give different logics. Which logic of necessity is the right one, or does that depend on what
        &lsquo;necessary&rsquo; means?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Click a system to see its axioms, its frames and the weaker systems it contains.</p>
      <ModalLatticeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the system K">
        <p>
          The minimal normal modal logic <strong>K</strong>, named after Kripke, has as theorems all propositional
          tautologies, the axiom <strong>K</strong>: □(p → q) → (□p → □q), and is closed under modus ponens, substitution and{" "}
          <strong>necessitation</strong>: if φ is a theorem, so is □φ. Every logic below is K plus extra axioms.
        </p>
      </Definition>

      <Definition title="the standard axioms">
        <ul>
          <li><strong>D</strong>: □p → ◇p. What is necessary is possible.</li>
          <li><strong>T</strong>: □p → p. What is necessary is true.</li>
          <li><strong>4</strong>: □p → □□p. What is necessary is necessarily necessary.</li>
          <li><strong>B</strong>: p → □◇p. What is true is necessarily possible.</li>
          <li><strong>5</strong>: ◇p → □◇p. What is possible is necessarily possible.</li>
        </ul>
        <p>S4 is K + T + 4, and S5 is K + T + 5, which proves B and 4.</p>
      </Definition>

      <Theorem title="soundness">
        <p>
          Each system is sound for its class of frames: K for all frames, D for serial, T for reflexive, K4 for transitive, B
          with T for reflexive and symmetric, S4 for reflexive and transitive, S5 for equivalence relations. The converse,
          completeness, is proved later by canonical models.
        </p>
      </Theorem>

      <Example title="a derivation in T">
        <p>
          T proves p → ◇p. By the axiom T with ¬p for p, □¬p → ¬p. Contraposing, p → ¬□¬p, which is p → ◇p.
        </p>
      </Example>

      <Example title="which logic for which modality?">
        <p>
          For metaphysical necessity, most philosophers accept S5: what is possible could not have been impossible. For
          knowledge, T is right since knowledge is factive, while 4, the KK principle, and 5, negative introspection, are
          disputed. For obligation, T must go, since not everything obligatory happens, and D is natural instead. For
          provability in arithmetic, the right logic is GL, which contains 4 but not T.
        </p>
      </Example>

      <Remark title="modalities collapse in S5">
        <p>
          In S4 there are exactly 14 distinct modalities, strings of □, ◇ and ¬ applied to p, up to equivalence. In S5 there
          are only 6: p, ¬p, □p, ◇p, ¬□p and ¬◇p. Any string of boxes and diamonds reduces to its last operator.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "nec",
      rung: "check",
      prompt: <p>What does the rule of necessitation say?</p>,
      answer: { kind: "choice", options: ["If φ is a theorem, so is □φ", "If φ is true, then □φ is true", "□φ implies φ", "If □φ is a theorem, so is φ"], correct: [0] },
    },
    {
      key: "s4",
      rung: "check",
      prompt: <p>Which axioms does S4 add to K?</p>,
      answer: { kind: "choice", options: ["T and 4", "T and 5", "D and B", "4 and 5 only"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which frames is S4 sound and complete for?</p>,
      answer: { kind: "choice", options: ["Reflexive and transitive frames", "Equivalence relations", "Serial frames", "All frames"], correct: [0] },
    },
    {
      key: "deon",
      rung: "apply",
      prompt: <p>Why is T unsuitable for a logic of obligation?</p>,
      answer: { kind: "choice", options: ["Not everything that ought to happen does happen", "Obligations are never true", "Obligation is not a modality", "T is inconsistent"], correct: [0] },
    },
    {
      key: "s5n",
      rung: "apply",
      prompt: <p>How many distinct modalities applied to p are there in S5, counting p itself?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that D is a theorem of T: derive □p → ◇p.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses T to get □p → p.",
          "Derives p → ◇p, for example from T applied to ¬p and contraposition.",
          "Chains the two conditionals to get □p → ◇p.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Which logic best fits knowledge? Consider whether 4 and 5 should hold.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why T fits knowledge.",
          "Discusses the KK principle or negative introspection, with a reason or example.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Each axiom matches a property of the accessibility relation. Is there a pattern behind this, and does every modal
        formula correspond to a simple condition on frames?
      </p>
      <p>Next, correspondence theory.</p>
    </>
  ),
};
