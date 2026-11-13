import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import { ShipViz } from "@/components/viz/ShipViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["constitution view", "identity (monism)", "four-dimensionalism", "nihilism"];
const CASES = ["ship of Theseus", "statue and clay", "two things in one place?", "matches common sense"];
const V: CaseVerdict[][] = [
  [
    { ok: true, why: "The repaired ship is the original; the rebuilt one is a new ship constituted by the old planks." },
    { ok: true, why: "The clay constitutes the statue without being identical to it." },
    { ok: false, why: "It accepts two objects in exactly the same place, made of exactly the same matter." },
    { ok: true, why: "It keeps statues, lumps and ships, and lets them differ." },
  ],
  [
    { ok: false, why: "Identity is transitive, so it struggles to say which candidate is the original without arbitrariness." },
    { ok: true, why: "Statue and clay are one object, with modal talk depending on how it is described." },
    { ok: true, why: "Only one thing is ever in one place." },
    { ok: false, why: "It must deny that the lump existed before the statue, or reinterpret such claims." },
  ],
  [
    { ok: true, why: "The two ships are overlapping worms that share early temporal parts; ‘the ship’ is ambiguous early on." },
    { ok: true, why: "Statue and lump share a temporal part, as two roads can share a stretch." },
    { ok: true, why: "Sharing a part is not two things wholly in one place." },
    { ok: false, why: "It needs temporal parts, which many find counterintuitive." },
  ],
  [
    { ok: true, why: "There are no ships, only planks arranged ship-wise, so no question of which ship is which." },
    { ok: true, why: "There are no statues or lumps, only particles arranged statue-wise." },
    { ok: true, why: "Only simples exist, and no two share a place." },
    { ok: false, why: "It denies that ships and statues exist at all." },
  ],
];

export const lesson: LessonContent = {
  id: "p11.5.2",
  minutes: 80,
  links: {
    revisits: ["p11.5.1", "p1.4.1", "p11.2.3"],
    foreshadows: ["p11.5.3", "p27.3.1", "p27.3.2"],
  },

  puzzle: (
    <>
      <p>
        Replace a ship&rsquo;s planks one by one, and it is surely the same ship. Now build a second ship from the discarded
        planks. Which one is the ship of Theseus? Puzzles like this suggest that ordinary objects and the matter that makes
        them up come apart.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Replace the planks, then rebuild a ship from the old ones. Which ship would you call the original?</p>
      <ShipViz />
    </>
  ),

  theory: (
    <>
      <Definition title="material constitution">
        <p>
          Some matter <strong>constitutes</strong> an object when the object is made of it and shares its location. The
          question is whether constitution is identity: is a ship just its planks, or a statue just its clay?
        </p>
      </Definition>

      <Example title="the argument from different properties">
        <p>
          By Leibniz&rsquo;s law, if a and b differ in any property, they are distinct. The planks existed before the ship
          was assembled; the ship survives the loss of a plank, but the collection of planks does not. So the ship is not the
          collection, even when they occupy the same place.
        </p>
      </Example>

      <CaseMatrixViz
        theories={THEORIES}
        cases={CASES}
        verdicts={V}
        prompt="Click a cell to see how each response handles each test."
        caption="Every response pays somewhere: two things in one place, revisionary claims about identity, temporal parts, or the denial of ordinary objects."
      />

      <Remark title="the grounding problem">
        <p>
          If statue and clay are two things, made of the same particles in the same arrangement, what grounds their different
          modal properties? Critics of the constitution view press this question; its defenders reply that the difference lies
          in the kinds the objects belong to.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for matter to constitute an object?</p>,
      answer: { kind: "choice", options: ["It causes the object", "The object is made of it and shares its location", "It is identical to the object by definition", "It is part of the object’s history only"], correct: [1] },
    },
    {
      key: "leibniz",
      rung: "check",
      prompt: <p>Which principle drives the argument that the ship is not its collection of planks?</p>,
      answer: { kind: "choice", options: ["Ockham’s razor", "Leibniz’s law: things with different properties are distinct", "The principle of sufficient reason", "Hume’s fork"], correct: [1] },
    },
    {
      key: "nihil",
      rung: "apply",
      prompt: <p>How does a mereological nihilist dissolve the ship of Theseus puzzle?</p>,
      answer: {
        kind: "choice",
        options: [
          "By saying the rebuilt ship is the original",
          "By denying there are ships, only simples arranged ship-wise",
          "By appealing to temporal parts",
          "By saying both ships are identical",
        ],
        correct: [1],
      },
    },
    {
      key: "4d",
      rung: "apply",
      prompt: <p>What does a four-dimensionalist say about the statue and the lump that coincide for a while?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are wholly distinct and never overlap",
          "They are distinct worms that share some temporal parts",
          "Neither exists",
          "They are identical at all times",
        ],
        correct: [1],
      },
    },
    {
      key: "cost",
      rung: "apply",
      prompt: <p>What is the main cost of the constitution view?</p>,
      answer: {
        kind: "choice",
        options: [
          "It denies ordinary objects exist",
          "It allows two distinct objects in exactly the same place, made of the same matter",
          "It requires temporal parts",
          "It makes identity non-transitive",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Which ship is the ship of Theseus: the repaired one or the rebuilt one? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the two candidates and why each has a claim.",
          "Uses a principle, such as continuity of form or of matter, or a theory from the lesson.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "ground",
      rung: "stretch",
      prompt: <p>If the statue and the clay are made of exactly the same particles, how could they differ in what could happen to them?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the grounding problem.",
          "Considers a reply, such as sortal kinds or counterpart theory.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what material constitution is, the ship of Theseus, the argument from Leibniz's law that an object is not its matter, and how the constitution view, identity, four-dimensionalism and nihilism each respond.",

  glimpse: (
    <p>
      The next lesson studies the statue and the clay in detail. Graduate metaphysics asks when things compose a further
      thing, and examines nihilism and universalism.
    </p>
  ),
};
