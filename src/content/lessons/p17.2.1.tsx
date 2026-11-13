import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ModelCheckViz } from "@/components/viz/ModelCheckViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.2.1",
  minutes: 85,
  links: {
    revisits: ["p17.1.2", "p2.5.1", "p2.6.1"],
    foreshadows: ["p17.2.2", "p17.3.1", "m20.3.2"],
  },

  puzzle: (
    <>
      <p>
        In sentential logic a truth table checks every valuation: there are finitely many. In predicate logic a sentence must
        be true in every structure, of every size, finite and infinite, with every possible interpretation. Could a finite
        list of proof rules really capture truth in all of them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the relation and the property in a small structure, and see which sentences are true in it.</p>
      <ModelCheckViz />
    </>
  ),

  theory: (
    <>
      <Definition title="first-order validity">
        <p>
          A <strong>structure</strong> for a first-order language is a non-empty domain with an interpretation of each name,
          predicate and function symbol. Γ ⊨ φ means φ is true in every structure in which every member of Γ is true. Γ ⊢ φ
          means φ is derivable from Γ with the quantifier and identity rules added to the sentential ones.
        </p>
      </Definition>

      <Theorem title="soundness and completeness (Gödel, 1929)">
        <p>
          For first-order logic, Γ ⊢ φ if and only if Γ ⊨ φ. Soundness is proved, as before, by checking that each rule
          preserves truth in every structure; the quantifier rules need care with the conditions on new names. Completeness is
          the deep half.
        </p>
      </Theorem>

      <Example title="Henkin's proof">
        <p>
          As in the sentential case, it suffices that every consistent set Γ has a model. Henkin (1949) extends Γ to a maximal
          consistent set that is also <strong>witnessed</strong>: for every sentence ∃x φ(x) in the set, some sentence φ(c)
          with a name c is in the set too, using a supply of fresh names added to the language. The model is then built from
          the names themselves: the domain is the set of names, suitably identified when the set says c = d, and a predicate
          holds of names when the set says so. A truth lemma shows that this term model makes every member of the set true.
        </p>
      </Example>

      <Remark title="complete but undecidable">
        <p>
          Completeness means the valid sentences can be listed by listing all derivations, so validity is
          semi-decidable: if a sentence is valid, a search will eventually find a proof. But Church and Turing showed in 1936
          that no method decides validity: if a sentence is not valid, the search may run for ever. There are no truth tables
          for first-order logic.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "stmt",
      rung: "check",
      prompt: <p>What does Gödel&rsquo;s completeness theorem say?</p>,
      answer: {
        kind: "choice",
        options: [
          "If a first-order sentence is true in every model of Γ, it is derivable from Γ.",
          "Every true sentence of arithmetic is provable.",
          "First-order validity is decidable.",
          "Every structure is finite.",
        ],
        correct: [0],
      },
    },
    {
      key: "henkin",
      rung: "check",
      prompt: <p>What extra condition does Henkin&rsquo;s construction need beyond maximal consistency?</p>,
      answer: {
        kind: "choice",
        options: ["Every existential sentence in the set has a named witness in the set", "Every sentence is valid", "The domain is finite", "There are no names in the language"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, before changing anything, how many of the six sentences are true?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "refl",
      rung: "apply",
      prompt: <p>In the visualisation, add the three loops Raa, Rbb and Rcc to the starting structure. Which sentence becomes false?</p>,
      answer: { kind: "choice", options: ["∃x (Px ∧ ¬Rxx)", "∀x ∃y Rxy", "∀x Rxx", "∀x (Px → ∃y (Rxy ∧ ¬Py))"], correct: [0] },
    },
    {
      key: "semi",
      rung: "apply",
      prompt: <p>Which statement about first-order validity is correct?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is semi-decidable but not decidable.",
          "It is decidable by truth tables.",
          "It is not even semi-decidable.",
          "It is decidable, because completeness holds.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show semantically that ∃x ∀y Rxy ⊨ ∀y ∃x Rxy, and say what completeness then tells you.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a structure where ∃x ∀y Rxy is true, so some element a bears R to every element.",
          "Concludes that for any element b, a is an x with Rxb, so ∀y ∃x Rxy is true.",
          "Notes that by completeness the conclusion is derivable from the premise.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Henkin&rsquo;s model is built out of names, that is, out of pieces of language. Does that make it a cheat, or does it show something about what models are?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the definition of a model only requires some domain and interpretation, and names are as good as anything.",
          "Considers what it shows, for instance that consistency guarantees a model but not the intended one.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what soundness and completeness say for first-order logic, how Henkin’s witnesses let you build a model out of names, and why validity is semi-decidable but not decidable.",

  glimpse: (
    <p>
      Next, compactness, a consequence of completeness with surprising results: nonstandard models of arithmetic, and the
      impossibility of saying &ldquo;there are finitely many things&rdquo; in first-order logic.
    </p>
  ),
};
