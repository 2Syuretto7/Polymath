import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["relevantly valid", "classically valid only"];
const ITEMS: SortItem[] = [
  { text: "From p ∧ q, infer p.", cat: "relevantly valid", why: "The conclusion is part of the premise; relevance logics keep conjunction elimination." },
  { text: "From p ∧ ¬p, infer q.", cat: "classically valid only", why: "Explosion: q shares no variable with the premise, so relevance logics reject it." },
  { text: "From q, infer p → q.", cat: "classically valid only", why: "A positive paradox of material implication: p need have nothing to do with q." },
  { text: "From p → q and p, infer q.", cat: "relevantly valid", why: "Modus ponens is kept; the antecedent is actually used to reach the conclusion." },
  { text: "From ¬p, infer p → q.", cat: "classically valid only", why: "A negative paradox: a false antecedent would imply anything at all." },
  { text: "From p, infer p ∨ q.", cat: "relevantly valid", why: "Addition is kept in the main relevance logics; the premise is used and shares p with the conclusion." },
  { text: "From p ∨ q and ¬p, infer q.", cat: "classically valid only", why: "Anderson and Belnap reject disjunctive syllogism as a rule, since with addition it yields explosion." },
  { text: "From p → q and q → r, infer p → r.", cat: "relevantly valid", why: "Chaining conditionals keeps a thread of relevance from p through q to r." },
];

export const lesson: LessonContent = {
  id: "p17.4.3",
  minutes: 80,
  links: {
    revisits: ["p17.4.2", "m1.1.4", "p2.3.2"],
    foreshadows: ["p17.4.4", "p26.3.4", "p17.5.1"],
  },

  puzzle: (
    <>
      <p>
        Classically, &ldquo;the moon is made of cheese, and it is not&rdquo; entails &ldquo;Paris is in France&rdquo;, and
        &ldquo;2 + 2 = 5&rdquo; implies that you will win the lottery. The arguments are valid by the textbook definition, yet
        the premises have nothing to do with the conclusions. Is something wrong with the definition?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each inference: does it survive in relevance logic, or is it valid only classically?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Relevantly valid, or classically valid only?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the paradoxes of implication">
        <p>
          In classical logic a contradiction entails everything, a logical truth follows from anything, a true q makes p → q
          true, and a false p makes p → q true. C. I. Lewis tried to fix the last two with strict implication, but strict
          implication still lets an impossibility entail everything. Relevance logicians, led by Alan Anderson and Nuel
          Belnap in <em>Entailment</em> (1975), demand that the premises be genuinely used and connected to the conclusion.
        </p>
      </Definition>

      <Example title="the variable-sharing property">
        <p>
          In the relevance logic R, if A → B is a theorem then A and B share at least one propositional variable. So p ∧ ¬p →
          q and p → (q → q) are not theorems. This is a necessary condition of relevance, a syntactic test that the classical
          paradoxes fail.
        </p>
      </Example>

      <Definition title="Lewis’s argument and the reply">
        <p>
          Lewis gave a direct argument for explosion: from p ∧ ¬p infer p, hence p ∨ q; infer ¬p too; then by disjunctive
          syllogism, q. Each step looks innocent. Anderson and Belnap rejected disjunctive syllogism as a general rule: when p
          and ¬p are both in play, ruling out p does not force q. Semantically, relevance logics use frameworks with
          inconsistent or incomplete situations, such as the Routley–Meyer three-place relation, in which p and ¬p can both
          hold at a situation where q fails.
        </p>
      </Definition>

      <Remark title="costs">
        <p>
          The price is the loss of disjunctive syllogism, which ordinary reasoning seems to use constantly: it is either in
          the kitchen or the garden; not the kitchen; so the garden. Relevantists reply that it remains reliable whenever the
          information is consistent. Others, such as John Burgess, have argued that the classical notion is fine and that
          relevance is a matter of the pragmatics of assertion, not of validity.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "vsp",
      rung: "check",
      prompt: <p>What does the variable-sharing property say for the relevance logic R?</p>,
      answer: {
        kind: "choice",
        options: [
          "If A → B is a theorem, then A and B share a propositional variable.",
          "Every theorem contains every variable.",
          "No theorem contains a variable twice.",
          "A and B must be identical.",
        ],
        correct: [0],
      },
    },
    {
      key: "paradox",
      rung: "check",
      prompt: <p>Which of these is a paradox of material implication?</p>,
      answer: { kind: "choice", options: ["From q, infer p → q", "From p → q and p, infer q", "From p ∧ q, infer p", "From p → q and q → r, infer p → r"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how is &ldquo;from p ∨ q and ¬p, infer q&rdquo; classified?</p>,
      answer: { kind: "choice", options: ["Classically valid only", "Relevantly valid"], correct: [0] },
    },
    {
      key: "lewis",
      rung: "apply",
      prompt: <p>Which step of Lewis&rsquo;s argument for explosion do Anderson and Belnap reject?</p>,
      answer: { kind: "choice", options: ["Disjunctive syllogism", "Conjunction elimination", "Addition, from p to p ∨ q", "Modus ponens"], correct: [0] },
    },
    {
      key: "share",
      rung: "apply",
      prompt: <p>Which conditional fails the variable-sharing test?</p>,
      answer: { kind: "choice", options: ["(p ∧ ¬p) → q", "(p ∧ q) → p", "p → (p ∨ q)", "(p → q) → (p → q)"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it a defect of classical logic that a contradiction entails everything? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States explosion and why it seems to violate relevance.",
          "Considers a defence, such as Lewis's argument or the view that relevance is pragmatic, and the cost of rejecting disjunctive syllogism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is relevance a matter of logic, or of what it is sensible to say in conversation?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets out the view that the paradoxes are valid but conversationally pointless, as Grice might say.",
          "Sets out the relevantist view that validity itself requires a connection of content.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the paradoxes of material implication, the variable-sharing property of relevance logic, and why relevance logicians give up disjunctive syllogism.",

  glimpse: (
    <p>
      Next, paraconsistent logic: logics in which a contradiction does not entail everything, so that inconsistent theories
      need not be trivial, and the bolder view that some contradictions are true.
    </p>
  ),
};
