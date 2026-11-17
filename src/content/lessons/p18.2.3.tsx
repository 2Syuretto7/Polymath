import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TypeLevelViz } from "@/components/viz/TypeLevelViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.2.3",
  minutes: 80,
  links: {
    revisits: ["p18.1.1", "m1.4.1", "p17.5.2"],
    foreshadows: ["p18.3.2", "m20.1.1", "p18.4.4"],
  },

  puzzle: (
    <>
      <p>
        Is the class of all classes that are not members of themselves a member of itself? Either answer contradicts
        itself. Russell found this paradox in 1901, and it brought down Frege&rsquo;s system. His own way out was to say
        that the question is not false but meaningless. How can a question that seems so clear be meaningless?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Give x and y types, choose a formula, and see whether it is allowed.</p>
      <TypeLevelViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the vicious circle principle">
        <p>
          Russell and Poincaré diagnosed the paradoxes as arising from self-reference of a particular kind. Russell&rsquo;s{" "}
          <strong>vicious circle principle</strong> says that whatever involves all of a collection must not be one of the
          collection. A class defined by quantifying over all classes cannot itself be among the classes quantified over.
        </p>
      </Definition>

      <Example title="simple types">
        <p>
          Objects are sorted into <strong>types</strong>: individuals are type 0, classes of individuals type 1, classes of
          those type 2, and so on. &ldquo;x ∈ y&rdquo; is well-formed only when y is exactly one type above x. Then
          &ldquo;x ∈ x&rdquo; is ill-formed, so the Russell class cannot even be defined. The same grammar blocks
          Cantor&rsquo;s paradox of the largest cardinal, but not every paradox: the liar and Berry&rsquo;s &ldquo;the least
          integer not nameable in fewer than nineteen syllables&rdquo; concern meaning and definability rather than classes.
        </p>
      </Example>

      <Definition title="ramified types and reducibility">
        <p>
          To handle those semantic paradoxes too, <em>Principia Mathematica</em> (1910 to 1913) split each type into{" "}
          <strong>orders</strong>, according to the quantifiers used in a definition. This ramified theory blocks the liar but
          also blocks ordinary mathematics, such as the definition of the least upper bound of a set of reals. Russell
          therefore added the <strong>axiom of reducibility</strong>: every propositional function is equivalent to one of
          the lowest order. Critics, including Wittgenstein and Ramsey, said this was no truth of logic and undid the point
          of ramification.
        </p>
      </Definition>

      <Remark title="afterwards">
        <p>
          Frank Ramsey (1926) separated the logical paradoxes, handled by simple types, from the semantic ones, which he
          assigned to language, an idea Tarski&rsquo;s hierarchy later made precise. Zermelo&rsquo;s axiomatic set theory took
          another path, restricting which classes exist rather than which formulas are meaningful. Type theory survives in
          computer science, where typed programming languages and proof assistants descend from it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "vcp",
      rung: "check",
      prompt: <p>What does the vicious circle principle forbid?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whatever involves all of a collection being one of that collection.",
          "Any use of quantifiers.",
          "Classes with more than one member.",
          "Proofs by contradiction.",
        ],
        correct: [0],
      },
    },
    {
      key: "wff",
      rung: "check",
      prompt: <p>In the simple theory of types, when is &ldquo;x ∈ y&rdquo; well-formed?</p>,
      answer: {
        kind: "choice",
        options: ["When y is exactly one type above x", "When x and y have the same type", "Always", "When x is one type above y"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, if x has type 2, which type must y have for &ldquo;x ∈ y&rdquo; to be well-formed?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "russell",
      rung: "apply",
      prompt: <p>How does the theory of types deal with Russell&rsquo;s paradox?</p>,
      answer: {
        kind: "choice",
        options: [
          "“x ∈ x” is not well-formed, so the class of classes not members of themselves cannot be defined.",
          "It proves that the Russell class is a member of itself.",
          "It accepts the contradiction.",
          "It bans all infinite classes.",
        ],
        correct: [0],
      },
    },
    {
      key: "reduc",
      rung: "apply",
      prompt: <p>Why did Russell add the axiom of reducibility?</p>,
      answer: {
        kind: "choice",
        options: [
          "Ramified types blocked ordinary mathematics, such as least upper bounds, and reducibility restored it.",
          "To prove that there are infinitely many individuals.",
          "To make the liar paradox well-formed.",
          "To define negation.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it plausible that &ldquo;the class of all classes not members of themselves is a member of itself&rdquo; is meaningless rather than false? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the type-theoretic diagnosis and why it blocks the paradox.",
          "Considers an objection, such as that the sentence seems perfectly intelligible, or that “everything” should range over all types.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can the theory of types be stated without breaking its own rules? Consider the sentence &ldquo;every object belongs to some type&rdquo;.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the sentence quantifies over objects of all types at once, which the theory forbids.",
          "Considers whether this undermines the theory, or whether it can only be shown and not said.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Wittgenstein&rsquo;s <em>Tractatus</em>: the picture theory of meaning, which says a proposition represents a
      fact by sharing its form.
    </p>
  ),
};
