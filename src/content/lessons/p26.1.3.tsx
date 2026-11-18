import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["Reflexive", "Transitive", "Symmetric", "No first-order condition"];
const ITEMS: SortItem[] = [
  { text: "□p → p", cat: "Reflexive", why: "Axiom T. It holds on a frame exactly when every world sees itself." },
  { text: "p → ◇p", cat: "Reflexive", why: "The dual of T, obtained by substituting ¬p and contraposing. Same frames." },
  { text: "□p → □□p", cat: "Transitive", why: "Axiom 4. If w sees v and v sees u, then w must see u, or p could fail at u while □p holds at w." },
  { text: "◇◇p → ◇p", cat: "Transitive", why: "The dual of 4: a world reachable in two steps must be reachable in one." },
  { text: "p → □◇p", cat: "Symmetric", why: "Axiom B. Every world w can see back to w from any world it sees." },
  { text: "◇□p → p", cat: "Symmetric", why: "The dual of B. Same frames." },
  { text: "□(□p → p) → □p", cat: "No first-order condition", why: "Löb’s axiom. It holds on frames that are transitive and conversely well-founded, with no infinite chains w₁Rw₂Rw₃…, and well-foundedness is not first-order." },
  { text: "□◇p → ◇□p", cat: "No first-order condition", why: "McKinsey’s axiom. Goldblatt and van Benthem showed that no first-order condition on frames defines it." },
];

export const lesson: LessonContent = {
  id: "p26.1.3",
  minutes: 90,
  links: {
    revisits: ["p26.1.2", "p17.2.2", "p2.5.2"],
    foreshadows: ["p26.1.4", "p26.3.1", "p26.2.1"],
  },

  puzzle: (
    <>
      <p>
        □p → p is valid on exactly the reflexive frames, and □p → □□p on exactly the transitive ones. A modal formula
        speaks about worlds from the inside, yet it seems to define a property of the whole accessibility relation. Does
        every modal formula do this, and what kind of property can it express?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these formulas by the frame condition they correspond to.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which frame condition?" />
    </>
  ),

  theory: (
    <>
      <Definition title="correspondence">
        <p>
          A modal formula φ <strong>corresponds</strong> to a condition C on frames if, for every frame F, φ is valid on F
          exactly when F satisfies C. Correspondence theory, developed by Johan van Benthem and others, asks which formulas
          have first-order correspondents.
        </p>
      </Definition>

      <Theorem title="T and reflexivity">
        <p>
          □p → p is valid on a frame (W, R) exactly when R is reflexive.
        </p>
        <p>
          <strong>Proof.</strong> If R is reflexive and □p holds at w, then wRw, so p holds at w. Conversely, suppose some w
          does not see itself. Make p true everywhere except at w. Then □p holds at w, since every world w sees is not w,
          but p fails at w.
        </p>
      </Theorem>

      <Example title="the method">
        <p>
          The converse step chose the smallest valuation that makes the antecedent true: p true exactly at the worlds w sees.
          The <strong>Sahlqvist theorem</strong> turns this trick into an algorithm. For a large class of formulas, the
          Sahlqvist formulas, it computes a first-order correspondent, and the logic they axiomatise is complete.
        </p>
      </Example>

      <Example title="beyond first-order logic">
        <p>
          Modal validity on a frame quantifies over all valuations, that is, over all sets of worlds. So it is a second-order
          condition, and sometimes it cannot be reduced. Löb&rsquo;s formula requires the frame to have no infinite ascending
          chains, which first-order logic cannot express, as compactness shows.
        </p>
      </Example>

      <Remark title="what modal logic sees">
        <p>
          Some first-order frame properties are not defined by any modal formula. Irreflexivity is one: an irreflexive
          two-cycle maps onto a single reflexive point by a p-morphism, and validity is preserved under such maps. So a
          formula valid on every irreflexive frame would also be valid on the reflexive point. Modal languages see frames
          only up to such maps.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for a formula to correspond to a frame condition?</p>,
      answer: { kind: "choice", options: ["It is valid on a frame exactly when the frame satisfies the condition", "It is true at some world of every frame", "It implies the condition in first-order logic", "It is provable in K"], correct: [0] },
    },
    {
      key: "four",
      rung: "check",
      prompt: <p>Which condition corresponds to □p → □□p?</p>,
      answer: { kind: "choice", options: ["Transitivity", "Reflexivity", "Symmetry", "Seriality"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which category does ◇□p → p belong to?</p>,
      answer: { kind: "choice", options: ["Symmetric", "Reflexive", "Transitive", "No first-order condition"], correct: [0] },
    },
    {
      key: "d",
      rung: "apply",
      prompt: <p>Which frame condition corresponds to D, □p → ◇p?</p>,
      answer: { kind: "choice", options: ["Seriality: every world sees some world", "Reflexivity", "Euclideanness", "Irreflexivity"], correct: [0] },
    },
    {
      key: "irr",
      rung: "apply",
      prompt: <p>Why can no modal formula define irreflexivity?</p>,
      answer: { kind: "choice", options: ["An irreflexive frame maps onto a reflexive point by a p-morphism, which preserves validity", "Irreflexivity is not first-order", "Every frame is reflexive", "Modal formulas cannot mention R"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that □p → □□p is valid on a frame exactly when the frame is transitive.</p>,
      answer: {
        kind: "written",
        rubric: [
          "For transitive frames: if □p at w, and wRvRu, then wRu, so p at u; hence □□p at w.",
          "For the converse, takes wRv, vRu but not wRu, and makes p true exactly at the worlds w sees.",
          "Notes □p holds at w but p fails at u, so □□p fails at w.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Find the frame condition for ◇p → □◇p, axiom 5, and prove the correspondence in one direction.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the condition: Euclidean, if wRv and wRu then vRu.",
          "Proves one direction, for example that 5 is valid on Euclidean frames.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Soundness says each system proves only formulas valid on its frames. The harder converse says it proves all of
        them. The proof builds one enormous model out of the logic itself.
      </p>
      <p>Next, completeness by canonical models.</p>
    </>
  ),
};
