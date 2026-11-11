import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { InterpretViz } from "@/components/viz/InterpretViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p2.5.1",
  minutes: 80,
  links: {
    revisits: ["p2.2.3", "p2.4.2"],
    parallels: ["m20.2.2"],
    foreshadows: ["p17.2.3", "p15.1.1"],
  },

  puzzle: (
    <>
      <p>
        Is the sentence ∀x∃y Rxy true? On its own the question has no answer. If the domain is the natural numbers and R
        means &ldquo;is less than&rdquo;, it is true: every number has a larger one. If the domain is {"{1, 2, 3, 4}"}, it
        is false: nothing is larger than 4.
      </p>
      <p>
        In sentential logic, a valuation settled everything: a row of a truth table. What plays that role now, and how many
        &ldquo;rows&rdquo; are there?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A sentence of predicate logic is a pattern, waiting to be given a subject matter. An{" "}
        <strong>interpretation</strong> supplies one: which things we are talking about, and which of them each name and
        each predicate picks out. Once that is fixed, the sentence is true or false. Below, one relation symbol is read in
        six ways, and the same five sentences come out differently.
      </p>
      <InterpretViz />
    </>
  ),

  theory: (
    <>
      <Definition title="interpretation">
        <p>An interpretation consists of:</p>
        <ul>
          <li>a <strong>domain</strong>, a non-empty collection of objects;</li>
          <li>for each name, an object in the domain that it refers to;</li>
          <li>
            for each one-place predicate, the set of objects it is true of, its <strong>extension</strong>; for each two-place
            predicate, a set of ordered pairs; and so on.
          </li>
        </ul>
        <p>The identity sign always means identity; no interpretation can change it.</p>
      </Definition>

      <Definition title="truth in an interpretation">
        <ul>
          <li>An atomic sentence Fa is true if the object named by a is in the extension of F; Rab, if the pair is in the extension of R.</li>
          <li>The connectives work exactly as in truth tables.</li>
          <li>
            ∀xφ is true if φ is true whatever object in the domain x is taken to stand for. ∃xφ is true if φ is true for at
            least one object.
          </li>
        </ul>
        <p>
          To check ∀x∃y Rxy, then, run through the objects one at a time as x, and for each, look for some object to be y.
          This is the game of the last chapter, now made into a definition.
        </p>
      </Definition>

      <Example title="an infinite domain">
        <p>
          Domain: the natural numbers 0, 1, 2, &hellip;. Rxy: x &lt; y. Then ∀x∃y Rxy is true (take y = x + 1), but
          ∀x∃y Ryx is false, because nothing is less than 0. Changing the domain to all integers makes both true. Truth
          depends on the whole interpretation, domain included.
        </p>
      </Example>

      <Definition title="logical truth and its relatives">
        <ul>
          <li>A sentence is a <strong>logical truth</strong> if it is true in every interpretation, such as ∀x(Fx → Fx).</li>
          <li>It is a <strong>contradiction</strong> if it is true in none, such as ∃x(Fx ∧ ¬Fx).</li>
          <li>Two sentences are <strong>equivalent</strong> if they have the same truth value in every interpretation, such as ¬∀xFx and ∃x¬Fx.</li>
          <li>A set of sentences is <strong>satisfiable</strong> if some interpretation makes them all true.</li>
        </ul>
      </Definition>

      <Remark title="no more truth tables">
        <p>
          There are infinitely many interpretations, with domains of every size, finite and infinite. No table can list them
          all. So logical truth can no longer be checked by mechanical inspection; it has to be shown by reasoning about
          all interpretations at once, or by proof. The next lesson takes up the other side: showing that a sentence is not
          a logical truth, which needs only one interpretation.
        </p>
      </Remark>

      <Remark title="the empty domain">
        <p>
          Because domains are non-empty, ∃x(Fx ∨ ¬Fx) is a logical truth: logic assumes that something exists. Some
          logicians find this unwelcome, since it seems a matter of fact, not logic, that the world is not empty. Free logics
          drop the assumption, at the price of more complicated rules.
        </p>
      </Remark>

      <Quote source={<>Alfred Tarski, &ldquo;The Semantic Conception of Truth&rdquo; (1944)</>}>
        <p>The sentence &ldquo;snow is white&rdquo; is true if, and only if, snow is white.</p>
      </Quote>
      <p>
        Tarski showed in the 1930s how to define truth for a formal language, clause by clause, as above. His condition looks
        trivial, but it fixes what any definition of truth must deliver, and it led him to the discovery that no
        sufficiently rich language can define its own truth.
      </p>
    </>
  ),

  practice: [
    {
      key: "odd",
      rung: "check",
      prompt: <p>Domain: {"{1, 2, 3}"}. Fx: x is odd. Which of these are true? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["∃xFx", "∀xFx", "∃x¬Fx", "∀x(Fx ∨ ¬Fx)"], correct: [0, 2, 3] },
    },
    {
      key: "what",
      rung: "check",
      prompt: <p>What must an interpretation supply?</p>,
      answer: {
        kind: "choice",
        options: [
          "A non-empty domain, a referent for each name, and an extension for each predicate",
          "A truth value for each sentence letter",
          "A proof of each sentence",
          "A domain of numbers and a meaning for each quantifier",
        ],
        correct: [0],
      },
    },
    {
      key: "naturals",
      rung: "apply",
      prompt: (
        <p>
          Domain: the natural numbers 0, 1, 2, &hellip;. Rxy: x &lt; y. Which of these are true? Choose all that apply.
        </p>
      ),
      answer: { kind: "choice", options: ["∀x∃y Rxy", "∃y∀x Rxy", "∃x∀y ¬Ryx", "∀x∃y Ryx"], correct: [0, 2] },
    },
    {
      key: "logical",
      rung: "apply",
      prompt: <p>Which of these are logical truths? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["∀x(Fx → Fx)", "∃xFx → ∀xFx", "∀xFx → ∃xFx", "∃xFx ∨ ∃x¬Fx"], correct: [0, 2, 3] },
    },
    {
      key: "size",
      rung: "apply",
      prompt: <p>What is the smallest domain size in which ∃x∃y(x ≠ y ∧ Fx ∧ ¬Fy) can be true?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "build",
      rung: "prove",
      prompt: (
        <p>
          Describe precisely an interpretation (a domain and an extension for R) in which ∀x∃y Rxy is true and ∃y∀x Rxy is
          false, and check each sentence against the definition of truth.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a definite domain and a definite extension for R, for example {1, 2} with R = {(1, 2), (2, 1)}.",
          "Checks ∀x∃y Rxy object by object.",
          "Shows that no object y has Rxy for every x.",
        ],
      },
    },
    {
      key: "infinite",
      rung: "stretch",
      prompt: (
        <p>
          Let S be the conjunction of ∀x∃y Rxy, ∀x¬Rxx and ∀x∀y∀z((Rxy ∧ Ryz) → Rxz). Show that S is true when R is
          &ldquo;less than&rdquo; on the natural numbers, but false in every interpretation with a finite domain. What
          does this tell you about ¬S?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Checks the three conjuncts for < on the natural numbers.",
          "Argues that in a finite domain, following R from any object must eventually revisit an object, and transitivity then gives Raa, contradicting irreflexivity.",
          "Concludes that ¬S is true in every finite interpretation but is not a logical truth.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what an interpretation of predicate logic is, how it decides whether a quantified sentence is true, and why there can be no truth table for predicate logic.",

  glimpse: (
    <p>
      Interpretations are the subject of model theory, which Mathematical Logic and Set Theory introduces. Logic II:
      Metalogic and Beyond proves surprising results about them, such as the Löwenheim-Skolem theorem, which says that a
      theory with an infinite model has models of many different sizes. Philosophy of Language asks whether meaning is
      really just reference and extension, as interpretations assume.
    </p>
  ),
};
