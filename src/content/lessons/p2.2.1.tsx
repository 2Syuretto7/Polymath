import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SymboliseViz } from "@/components/viz/SymboliseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p2.2.1",
  minutes: 65,
  links: {
    revisits: ["p2.1.1"],
    parallels: ["m1.1.1"],
    foreshadows: ["p2.4.1", "p2.3.1"],
  },

  puzzle: (
    <>
      <p>Consider three sentences.</p>
      <ol>
        <li>You may have tea or coffee.</li>
        <li>You will pass if you work hard.</li>
        <li>You will pass only if you work hard.</li>
      </ol>
      <p>
        In the first, does &ldquo;or&rdquo; allow both? Most waiters would say no. Do the second and third say the same thing?
        Most people, asked quickly, say yes. Yet a student who works hard and fails has shown the second false and left the
        third untouched. English is full of small words like these that carry the logic of an argument and are slippery to
        pin down.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The last chapter judged arguments by their form, written with English words such as &ldquo;if&rdquo; and
        &ldquo;or&rdquo;. To study form exactly, logicians build an artificial language in which each logical word has one
        fixed meaning. The simplest is the language of <strong>sentential logic</strong>, also called propositional logic. It
        treats whole sentences as unbroken units, and studies only how they are combined.
      </p>
      <p>
        Translating from English into this language, called <strong>symbolisation</strong>, is a skill, and the only way to
        learn it is practice. Try the sentences below. Some have more than one correct answer.
      </p>
      <SymboliseViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the language of sentential logic">
        <p>The vocabulary is:</p>
        <ul>
          <li>
            <strong>sentence letters</strong> A, B, C, &hellip; (with subscripts if more are needed), each standing for a
            simple sentence;
          </li>
          <li>
            the <strong>connectives</strong> ¬ (not), ∧ (and), ∨ (or), → (if &hellip; then) and ↔ (if and only if);
          </li>
          <li>brackets ( and ).</li>
        </ul>
        <p>The <strong>sentences</strong> of the language are defined by three rules:</p>
        <ol>
          <li>Every sentence letter is a sentence.</li>
          <li>If φ is a sentence, so is ¬φ.</li>
          <li>If φ and ψ are sentences, so are (φ ∧ ψ), (φ ∨ ψ), (φ → ψ) and (φ ↔ ψ).</li>
        </ol>
        <p>
          Nothing else is a sentence. Here φ and ψ (phi and psi) are not part of the language: they are variables we use to
          talk about its sentences. We drop the outermost brackets when nothing is lost.
        </p>
      </Definition>

      <Remark title="a recursive definition">
        <p>
          The rules build long sentences out of shorter ones, just as the natural numbers are built from 0 by repeatedly adding
          1. So ((A ∧ ¬B) → C) is a sentence: A, B and C are by rule 1, then ¬B by rule 2, then (A ∧ ¬B) and the whole by rule
          3. But &ldquo;A ∧ → B&rdquo; is not, since no rule produces it. Because the definition is recursive, facts about all
          sentences can be proved by induction on how they are built.
        </p>
      </Remark>

      <Definition title="main connective">
        <p>
          The <strong>main connective</strong> of a sentence is the one added last when it is built by the rules. The main
          connective of ¬(A ∧ B) is ¬; that of ¬A ∧ B is ∧. A sentence is a negation, conjunction, disjunction, conditional or
          biconditional according to its main connective. In φ → ψ, φ is the <strong>antecedent</strong> and ψ the{" "}
          <strong>consequent</strong>.
        </p>
      </Definition>

      <Example title="a symbolisation key">
        <p>
          Before symbolising, fix a <strong>key</strong> that pairs each letter with a simple English sentence, with no logical
          words inside it. With A: Asha is at home, and B: Ben is at home:
        </p>
        <ul>
          <li>&ldquo;Asha is not at home&rdquo; is ¬A.</li>
          <li>&ldquo;Asha and Ben are both at home&rdquo; is A ∧ B.</li>
          <li>&ldquo;If Asha is at home, so is Ben&rdquo; is A → B.</li>
          <li>&ldquo;Not both of them are at home&rdquo; is ¬(A ∧ B), quite different from &ldquo;both are not&rdquo;, ¬A ∧ ¬B.</li>
        </ul>
      </Example>

      <Remark title="the tricky words">
        <ul>
          <li>
            <strong>but, although, however, yet</strong>: all become ∧. They add a note of contrast or surprise, which is not
            part of what is true or false.
          </li>
          <li>
            <strong>or</strong>: becomes ∨, read <em>inclusively</em>: &ldquo;A or B, or both&rdquo;. Where English clearly
            means &ldquo;but not both&rdquo;, write (A ∨ B) ∧ ¬(A ∧ B).
          </li>
          <li>
            <strong>if</strong> marks a sufficient condition: &ldquo;A if B&rdquo; is B → A.
          </li>
          <li>
            <strong>only if</strong> marks a necessary condition: &ldquo;A only if B&rdquo; is A → B.
          </li>
          <li>
            <strong>unless</strong>: &ldquo;A unless B&rdquo; is A ∨ B (equivalently ¬B → A).
          </li>
          <li>
            <strong>neither &hellip; nor</strong>: &ldquo;neither A nor B&rdquo; is ¬A ∧ ¬B, or ¬(A ∨ B).
          </li>
        </ul>
      </Remark>

      <Remark title="what symbolisation loses">
        <p>
          &ldquo;They married and had a child&rdquo; and &ldquo;They had a child and married&rdquo; suggest different stories,
          but A ∧ B and B ∧ A are true in exactly the same circumstances. Sentential logic captures only how the truth of a
          compound depends on the truth of its parts. Order in time, causation, and the speaker&rsquo;s attitude are lost. Some
          of what is lost belongs not to what is said but to what is suggested, a distinction the next lesson returns to.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "main",
      rung: "check",
      prompt: <p>What is the main connective of ¬A → (B ∨ C)?</p>,
      answer: { kind: "choice", options: ["¬", "→", "∨", "it has none"], correct: [1] },
    },
    {
      key: "wff",
      rung: "check",
      prompt: <p>Which of these are sentences of sentential logic (allowing outer brackets to be dropped)? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["(A ∧ B) → ¬C", "A ¬∧ B", "¬¬A", "(A ∨) B"], correct: [0, 2] },
    },
    {
      key: "only-if",
      rung: "apply",
      prompt: (
        <p>With R: it rains, and W: the match is cancelled. Symbolise &ldquo;The match is cancelled only if it rains.&rdquo;</p>
      ),
      answer: { kind: "choice", options: ["R → W", "W → R", "R ↔ W", "R ∧ W"], correct: [1] },
    },
    {
      key: "unless",
      rung: "apply",
      prompt: (
        <p>
          With R: it rains, and W: the match is cancelled. Symbolise &ldquo;The match goes ahead unless it rains.&rdquo;
          Choose all that are correct.
        </p>
      ),
      answer: { kind: "choice", options: ["¬W ∨ R", "¬R → ¬W", "W → R", "R → W"], correct: [0, 1, 2] },
    },
    {
      key: "not-both",
      rung: "apply",
      prompt: <p>With S: Sam passed, and T: Tara passed. Symbolise &ldquo;Sam and Tara did not both pass.&rdquo;</p>,
      answer: { kind: "choice", options: ["¬S ∧ ¬T", "¬(S ∧ T)", "¬S ∨ T", "¬(S ∨ T)"], correct: [1] },
    },
    {
      key: "build",
      rung: "prove",
      prompt: (
        <p>
          Show, step by step from the three rules, that ((A ∨ ¬B) ↔ ¬(C → A)) is a sentence. Then name its main connective, and
          explain why &ldquo;A ∨ ∨ B&rdquo; is not a sentence.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Builds the sentence from its letters, citing a rule at each step.",
          "Names ↔ as the main connective.",
          "Explains that no rule places two binary connectives side by side, so 'A ∨ ∨ B' cannot be produced.",
        ],
      },
    },
    {
      key: "exclusive",
      rung: "stretch",
      prompt: (
        <p>
          A menu says &ldquo;Soup or salad is included.&rdquo; Argue for an inclusive or an exclusive reading, then symbolise
          your reading. Is the exclusive sense part of what the sentence says, or only something it suggests? How might you
          tell?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a reasoned choice between the inclusive and exclusive readings.",
          "Symbolises it correctly, using (A ∨ B) ∧ ¬(A ∧ B) for the exclusive reading.",
          "Considers a test, such as whether 'and you may have both' contradicts the sentence or merely adds to it.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to symbolise 'only if', 'unless' and 'neither … nor' in sentential logic, and why 'but' becomes 'and'.",

  glimpse: (
    <p>
      Sentential logic sees whole sentences only. Later in this course, predicate logic opens them up, with symbols for names,
      properties and the words &ldquo;all&rdquo; and &ldquo;some&rdquo;. Before that come truth tables, which give each
      connective its exact meaning, and then rules of proof.
    </p>
  ),
};
