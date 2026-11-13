import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ExplosionViz } from "@/components/viz/ExplosionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.4.4",
  minutes: 80,
  links: {
    revisits: ["p17.4.3", "p17.4.1", "p22.2.2"],
    foreshadows: ["p17.5.1", "p17.5.3", "p29.4.2"],
  },

  puzzle: (
    <>
      <p>
        Frege&rsquo;s system of arithmetic turned out to be inconsistent, and so, classically, it proved every sentence,
        including 1 = 0. Yet mathematicians had used it, and naive set theory, to reason well for years. A large database
        almost certainly contains some contradiction. Must one inconsistency really make a body of information worthless?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose premises and a conclusion, and compare classical logic with Priest&rsquo;s LP.</p>
      <ExplosionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="paraconsistency">
        <p>
          A logic is <strong>paraconsistent</strong> if explosion fails in it: p and ¬p together do not entail every q. Then a
          theory can contain a contradiction without containing everything; it is inconsistent but not{" "}
          <strong>trivial</strong>. Systems were developed by Stanisław Jaśkowski (1948), Newton da Costa (1963), and in the
          relevance tradition by Routley, Meyer and Priest.
        </p>
      </Definition>

      <Example title="LP">
        <p>
          In Priest&rsquo;s Logic of Paradox the three values are T, F and B, both true and false, with B designated. With p =
          B and q = F, both p and ¬p are designated while q is not, so explosion is invalid. All classical tautologies remain
          valid. What fails are certain inferences, notably disjunctive syllogism and modus ponens for the material
          conditional, since p and ¬p ∨ q can both be designated while q is F.
        </p>
      </Example>

      <Definition title="dialetheism">
        <p>
          Paraconsistency is a claim about consequence; <strong>dialetheism</strong> is the stronger claim that some
          contradictions are true. Graham Priest, in <em>In Contradiction</em> (1987), argues that the liar sentence, &ldquo;this
          sentence is false&rdquo;, is both true and false, and that the paradoxes of naive set theory are best handled by
          accepting their contradictory conclusions in a paraconsistent logic rather than restricting the principles.
        </p>
      </Definition>

      <Remark title="objections">
        <p>
          Many paraconsistent logicians are not dialetheists: they want only to reason sensibly with inconsistent information,
          as in databases or in the history of science. Against dialetheism, critics such as David Lewis held that a true
          contradiction is simply unintelligible, and others worry that a dialetheist cannot express pure rejection: saying
          &ldquo;p is not true&rdquo; is compatible, for them, with p being true as well.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What makes a logic paraconsistent?</p>,
      answer: {
        kind: "choice",
        options: ["A contradiction does not entail every sentence", "It has no negation", "It has infinitely many truth values", "Every contradiction is true"],
        correct: [0],
      },
    },
    {
      key: "dial",
      rung: "check",
      prompt: <p>What is dialetheism?</p>,
      answer: {
        kind: "choice",
        options: [
          "The view that some contradictions are true.",
          "The view that no contradiction entails anything.",
          "The view that every sentence is true or false.",
          "The view that logic has two values.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with premises p and ¬p and conclusion q, what counter-model does LP give?</p>,
      answer: { kind: "choice", options: ["p = B, q = F", "p = T, q = F", "p = F, q = F", "There is none"], correct: [0] },
    },
    {
      key: "ds",
      rung: "apply",
      prompt: <p>In the visualisation, choose premises p ∨ q and ¬p and conclusion q. Which is right?</p>,
      answer: {
        kind: "choice",
        options: ["Valid classically, invalid in LP", "Valid in both", "Invalid in both", "Valid in LP, invalid classically"],
        correct: [0],
      },
    },
    {
      key: "triv",
      rung: "apply",
      prompt: <p>Classically, what follows from an inconsistent theory?</p>,
      answer: { kind: "choice", options: ["Every sentence: the theory is trivial", "Nothing", "Only its axioms", "Only true sentences"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the liar sentence, &ldquo;this sentence is false&rdquo;, both true and false? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets out the reasoning that leads from the liar to its being both true and false.",
          "States Priest's dialetheist view and an objection, or an alternative such as a truth-value gap.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If you were designing a medical records system that might contain contradictory entries, would you want it to reason classically? Why?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that classical reasoning would let one contradiction support any conclusion about any patient.",
          "Considers a paraconsistent alternative, and what it costs, such as losing disjunctive syllogism.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a paraconsistent logic is, how LP blocks explosion with the value B, and the difference between paraconsistency and dialetheism.",

  glimpse: (
    <p>
      Next, the liar paradox itself: why &ldquo;this sentence is false&rdquo; threatens any language that can talk about its
      own truth, and the main ways of responding to it.
    </p>
  ),
};
