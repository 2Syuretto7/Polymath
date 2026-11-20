import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TypeCompositionViz } from "@/components/viz/TypeCompositionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p29.1.2",
  minutes: 90,
  links: {
    revisits: ["p29.1.1", "p15.1.1", "p15.3.2"],
    foreshadows: ["p29.1.3", "p29.2.2", "p29.3.2"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;Ann sleeps&rsquo; and &lsquo;every student sleeps&rsquo; have the same grammatical shape, a subject and a
        verb. But &lsquo;every student&rsquo; picks out no particular person. How can the meaning of each sentence be built
        from the meanings of its words in the same way?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a sentence and follow its meaning as the words combine.</p>
      <TypeCompositionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="simple types">
        <p>
          Church&rsquo;s simple theory of types (1940) starts from basic types, here e for entities and t for truth values,
          and forms function types ⟨a, b⟩. Every term has a type, and M N is allowed only when M has type ⟨a, b⟩ and N has
          type a; the result has type b. Self-application such as x x is then impossible, and every term has a normal form.
        </p>
      </Definition>

      <Definition title="Montague grammar">
        <p>
          Richard Montague claimed in &lsquo;English as a Formal Language&rsquo; (1970) that there is no important
          difference between natural and formal languages. In his framework, names have type e, common nouns and
          intransitive verbs ⟨e, t⟩, transitive verbs ⟨e, ⟨e, t⟩⟩, and determiners such as &lsquo;every&rsquo; ⟨⟨e, t⟩,
          ⟨⟨e, t⟩, t⟩⟩. Meanings combine by function application, following the syntax.
        </p>
      </Definition>

      <Example title="compositionality">
        <p>
          The <strong>principle of compositionality</strong>, often credited to Frege, says that the meaning of a complex
          expression is determined by the meanings of its parts and how they are combined. Typed λ-calculus makes this
          precise: each syntactic rule corresponds to a semantic operation, so a finite lexicon and finitely many rules
          interpret infinitely many sentences.
        </p>
      </Example>

      <Remark title="intensions">
        <p>
          Truth values are not enough for &lsquo;believes that&rsquo; or &lsquo;necessarily&rsquo;, since sentences with the
          same truth value can differ there. Montague added a type s of possible worlds, so that a proposition has type
          ⟨s, t⟩, a function from worlds to truth values, linking the semantics to the Kripke models of modal logic.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "iv",
      rung: "check",
      prompt: <p>In Montague&rsquo;s system, what type does an intransitive verb such as &lsquo;sleeps&rsquo; have?</p>,
      answer: { kind: "choice", options: ["⟨e, t⟩", "e", "t", "⟨t, e⟩"], correct: [0] },
    },
    {
      key: "comp",
      rung: "check",
      prompt: <p>What does the principle of compositionality say?</p>,
      answer: { kind: "choice", options: ["The meaning of a complex expression is determined by the meanings of its parts and their mode of combination", "Every word has exactly one meaning", "Sentences have no meanings, only words do", "Meaning is determined by use alone"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what truth value does &lsquo;every student sleeps&rsquo; have in the model?</p>,
      answer: { kind: "choice", options: ["False", "True", "It has no truth value", "It depends on the order of composition"], correct: [0] },
    },
    {
      key: "tv",
      rung: "apply",
      prompt: <p>What type does a transitive verb such as &lsquo;likes&rsquo; have?</p>,
      answer: { kind: "choice", options: ["⟨e, ⟨e, t⟩⟩", "⟨e, t⟩", "⟨⟨e, t⟩, t⟩", "e"], correct: [0] },
    },
    {
      key: "app",
      rung: "apply",
      prompt: <p>If M has type ⟨⟨e, t⟩, t⟩ and N has type ⟨e, t⟩, what is the type of M N?</p>,
      answer: { kind: "choice", options: ["t", "e", "⟨e, t⟩", "It is not well typed"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is the meaning of a sentence determined by the meanings of its parts? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the principle of compositionality.",
          "Considers an argument for it, such as productivity, or a challenge, such as idioms or context sensitivity.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why might &lsquo;every student&rsquo; be given the type ⟨⟨e, t⟩, t⟩ rather than e?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that no single entity is what ‘every student’ refers to.",
          "Explains that treating it as a function from predicates to truth values gives the right truth conditions.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Treating &lsquo;every&rsquo; as a relation between two sets opens a whole theory: which relations can a determiner in
        a natural language express?
      </p>
      <p>Next, generalised quantifiers.</p>
    </>
  ),
};
