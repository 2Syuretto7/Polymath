import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ThreeValueViz } from "@/components/viz/ThreeValueViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.4.1",
  minutes: 80,
  links: {
    revisits: ["p17.1.3", "p2.5.1", "p17.3.3"],
    foreshadows: ["p17.4.4", "p29.3.1", "p17.5.3"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;There will be a sea battle tomorrow.&rdquo; Aristotle wondered whether this is true or false today. If it is
        already true, the battle seems fated; if already false, it seems impossible. Perhaps it is neither, yet. But
        classical logic allows only two values. What happens to logic if we add a third?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Switch between the three logics and the connectives, and see which classical laws survive.</p>
      <ThreeValueViz />
    </>
  ),

  theory: (
    <>
      <Definition title="many-valued logics">
        <p>
          A many-valued logic keeps the connectives but allows more than two truth values, each connective given by a table.
          Some values are <strong>designated</strong>: an argument is valid when every assignment that makes all the premises
          designated makes the conclusion designated. Jan Łukasiewicz introduced a three-valued logic in 1920, motivated by
          future contingents like the sea battle.
        </p>
      </Definition>

      <Example title="three logics">
        <p>
          In Kleene&rsquo;s strong logic K3 (1938) the third value U means &ldquo;undefined&rdquo;, as for a computation that
          has not halted. Only T is designated, and there are no valid formulas at all: even p → p takes the value U when p
          does. Łukasiewicz&rsquo;s Ł3 has the same ∧, ∨ and ¬ but a different conditional, with U → U = T, so p → p is valid,
          though p ∨ ¬p is not. Priest&rsquo;s LP (1979) has the same tables as K3, but reads the middle value as B,
          &ldquo;both&rdquo;, and designates it; then all classical tautologies are valid, but some classical inferences fail.
        </p>
      </Example>

      <Definition title="uses">
        <p>
          Third values have been proposed for future contingents, for sentences with empty names (&ldquo;the present king of
          France is bald&rdquo;), for borderline cases of vague predicates, for the liar sentence, and for partial functions in
          computing. Infinitely-valued logics, with values in [0, 1], underlie fuzzy logic.
        </p>
      </Definition>

      <Remark title="objections">
        <p>
          Critics reply that the third value often confuses truth with knowledge: the sea battle sentence may be true or false
          now without anyone knowing which. And truth-functionality brings trouble with vagueness: if p is borderline, p ∧ ¬p
          gets the same middle value as p, though it seems simply false. Supervaluationism keeps classical laws while allowing
          gaps.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "des",
      rung: "check",
      prompt: <p>In a many-valued logic, when is an argument valid?</p>,
      answer: {
        kind: "choice",
        options: [
          "When every assignment that makes all the premises designated makes the conclusion designated.",
          "When the conclusion is never false.",
          "When the premises have the third value.",
          "When the truth tables have three rows.",
        ],
        correct: [0],
      },
    },
    {
      key: "k3",
      rung: "check",
      prompt: <p>Why does Kleene&rsquo;s K3 have no valid formulas?</p>,
      answer: {
        kind: "choice",
        options: [
          "If every variable has the value U, every formula has the value U, which is not designated.",
          "Because it has no negation.",
          "Because it designates U.",
          "Because its conditional is classical.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, in which logic is p → p valid but p ∨ ¬p not?</p>,
      answer: { kind: "choice", options: ["Łukasiewicz Ł3", "Kleene K3", "Priest LP", "None of them"], correct: [0] },
    },
    {
      key: "imp",
      rung: "apply",
      prompt: <p>In Ł3, the conditional has value min(1, 1 − a + b), with U = ½. What is the value of U → F?</p>,
      answer: { kind: "choice", options: ["U", "T", "F", "It is undefined"], correct: [0] },
    },
    {
      key: "lp",
      rung: "apply",
      prompt: <p>In LP, what is the value of p ∧ ¬p when p has the value B?</p>,
      answer: { kind: "choice", options: ["B, which is designated", "F", "T", "U"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Should &ldquo;there will be a sea battle tomorrow&rdquo; be given a third truth value? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the fatalist worry and how a third value avoids it.",
          "Gives an objection, such as confusing truth with knowledge, or the loss of p ∨ ¬p when the battle surely either happens or not.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For a borderline case of &ldquo;tall&rdquo;, should &ldquo;Sam is tall and Sam is not tall&rdquo; have the same value as &ldquo;Sam is tall&rdquo;?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that truth-functional three-valued logics give both the middle value.",
          "Considers the intuition that the conjunction is simply false, and a non-truth-functional view such as supervaluationism.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a many-valued logic is, the idea of designated values, and how Kleene's K3, Łukasiewicz's Ł3 and Priest's LP differ.",

  glimpse: (
    <p>
      Next, intuitionistic logic: Brouwer&rsquo;s view that a statement is true only when proved, so that the law of excluded
      middle is not a law, and Kripke&rsquo;s semantics of growing knowledge.
    </p>
  ),
};
