import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RevengeViz } from "@/components/viz/RevengeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p29.4.2",
  minutes: 90,
  links: {
    revisits: ["p29.4.1", "p17.5.3", "p17.5.1"],
    foreshadows: ["p30.1.1", "p31.1.1", "p32.1.1"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;This sentence is false&rsquo; cannot be true or false. Say it is neither, and the paradox seems solved. But
        now consider &lsquo;this sentence is not true&rsquo;. If it is neither true nor false, it is not true, which is what
        it says. Every cure for the liar seems to breed a new liar. Is there any escape?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a theory of truth, and see how it classifies the liar, the truth-teller and the revenge sentence.</p>
      <RevengeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="revenge">
        <p>
          A <strong>revenge paradox</strong> uses the vocabulary of a proposed solution to the liar to build a new liar that
          the solution cannot handle. If a theory says the liar is &lsquo;gappy&rsquo;, &lsquo;ungrounded&rsquo; or
          &lsquo;defective&rsquo;, consider the sentence &lsquo;this sentence is false or gappy&rsquo;.
        </p>
      </Definition>

      <Example title="Kripke’s theory">
        <p>
          Kripke&rsquo;s fixed-point construction gives the liar no truth value. But the claim that the liar is not true is
          then itself true, and cannot be expressed in the object language without paradox. Kripke admitted that &lsquo;the
          ghost of the Tarski hierarchy is still with us&rsquo;: the full theory is stated in a richer metalanguage.
        </p>
      </Example>

      <Example title="Field and Priest">
        <p>
          Hartry Field keeps the unrestricted truth schema in a logic without excluded middle, with a
          &lsquo;determinately&rsquo; operator D. The liar is not determinately true; a sentence saying of itself that it
          is not determinately true needs DD, and so on through a transfinite hierarchy. Graham Priest&rsquo;s dialetheism
          accepts that the liar is both true and false, in a logic where contradictions do not imply everything. The revenge
          sentence &lsquo;this sentence is only false&rsquo; then becomes one more true contradiction.
        </p>
      </Example>

      <Remark title="a dilemma">
        <p>
          The pattern suggests a dilemma for any theory of truth: either the language can express the theory&rsquo;s own
          central notions, and revenge produces contradiction, or it cannot, and the theory is not a theory of truth for
          the very language we speak. Some, like Tyler Burge and Michael Glanzberg, answer that &lsquo;true&rsquo; shifts with
          context, so each revenge sentence is evaluated in a new context.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What is a revenge paradox?</p>,
      answer: { kind: "choice", options: ["A new liar built from the concepts a solution to the liar uses", "A paradox about punishment", "The original liar sentence", "A sentence that is true in every model"], correct: [0] },
    },
    {
      key: "ghost",
      rung: "check",
      prompt: <p>What did Kripke say was &lsquo;still with us&rsquo;?</p>,
      answer: { kind: "choice", options: ["The ghost of the Tarski hierarchy", "The law of excluded middle", "The correspondence theory", "Russell’s paradox"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, under Kripke&rsquo;s theory, how is the revenge sentence R classified?</p>,
      answer: { kind: "choice", options: ["It has no stable value", "True", "False", "Both true and false"], correct: [0] },
    },
    {
      key: "priest",
      rung: "apply",
      prompt: <p>What is Priest&rsquo;s response to the liar called?</p>,
      answer: { kind: "choice", options: ["Dialetheism", "Deflationism", "Supervaluationism", "Contextualism"], correct: [0] },
    },
    {
      key: "field",
      rung: "apply",
      prompt: <p>How does revenge show up in Field&rsquo;s theory?</p>,
      answer: { kind: "choice", options: ["Each iteration of the determinately operator gives a new, stronger kind of defectiveness", "The truth schema fails for some sentences", "Every sentence becomes both true and false", "The theory proves its own inconsistency"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is the possibility of revenge a decisive objection to a theory of truth? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how a revenge sentence is constructed against a particular theory.",
          "Considers a reply, such as a metalanguage hierarchy, a determinacy hierarchy, dialetheism or contextualism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Must a theory of truth for a language be statable in that same language?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the idea that natural language seems able to talk about everything, including its own semantics.",
          "Considers the cost of a metalanguage, or the cost of inconsistency.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        This completes the course. Language and logic have taken us from lambda terms to the limits of truth. The next
        course turns from what we can say to what we ought to do, and asks whether reasons are the basic currency of
        ethics.
      </p>
      <p>Next, the course on graduate ethics and metaethics begins with reasons fundamentalism.</p>
    </>
  ),
};
