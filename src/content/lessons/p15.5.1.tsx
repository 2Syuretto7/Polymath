import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { IndexicalViz } from "@/components/viz/IndexicalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p15.5.1",
  minutes: 80,
  links: {
    revisits: ["p15.2.1", "p15.1.1", "p15.3.2"],
    foreshadows: ["p15.5.2", "p29.2.1", "p27.2.3"],
  },

  puzzle: (
    <>
      <p>
        When Meera says &ldquo;I am hungry&rdquo; and Arjun says &ldquo;I am hungry&rdquo;, they utter the same sentence with the
        same meaning, yet one may speak truly and the other falsely. And &ldquo;I am here now&rdquo; can never be uttered falsely,
        yet it is not a necessary truth: you could have been elsewhere. What is the meaning of a word like &ldquo;I&rdquo;?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a sentence and a context of use, and see what is said in each.</p>
      <IndexicalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="indexicals">
        <p>
          <strong>Indexicals</strong> are expressions whose reference depends on the context of utterance:
          &ldquo;I&rdquo;, &ldquo;you&rdquo;, &ldquo;here&rdquo;, &ldquo;now&rdquo;, &ldquo;today&rdquo;, and demonstratives
          like &ldquo;this&rdquo; and &ldquo;that&rdquo;. Pure indexicals such as &ldquo;I&rdquo; are fixed by context alone;
          demonstratives also need an act of pointing or a speaker&rsquo;s intention.
        </p>
      </Definition>

      <Definition title="character and content">
        <p>
          David Kaplan, in &ldquo;Demonstratives&rdquo; (written in 1977), distinguished two levels of meaning. The{" "}
          <strong>character</strong> of an expression is a rule, the same in every use, taking a context to a content: the
          character of &ldquo;I&rdquo; maps a context to its agent. The <strong>content</strong> is what is said in a context: a
          proposition, which can then be evaluated at different possible worlds. Indexicals are directly referential: their
          content is just the object, not a description of it.
        </p>
      </Definition>

      <Example title="the logic of demonstratives">
        <p>
          A sentence is <strong>true in every context</strong> when its character yields a truth wherever it is used.
          &ldquo;I am here now&rdquo; is like that, since the agent of a context is at its place and time. But the content it
          expresses, that Meera is in Chennai at 9 a.m., is contingent. So being guaranteed true whenever said and being necessary
          come apart, much as Kripke separated the a priori from the necessary.
        </p>
      </Example>

      <Remark title="the essential indexical">
        <p>
          John Perry told of following a trail of sugar round a supermarket to tell the shopper with the torn bag, until he
          realised &ldquo;I am the one making the mess&rdquo;. No belief about &ldquo;the shopper with the torn bag&rdquo; or
          about John Perry would have made him stop unless he knew it was him. Self-locating beliefs seem to need indexicals,
          which raises questions about belief, action and the self.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is an indexical?</p>,
      answer: {
        kind: "choice",
        options: [
          "An expression whose reference depends on the context of use, such as “I” or “now”.",
          "A word in an index.",
          "A proper name.",
          "A word with no meaning.",
        ],
        correct: [0],
      },
    },
    {
      key: "character",
      rung: "check",
      prompt: <p>In Kaplan&rsquo;s terms, what is the character of &ldquo;I&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: ["A rule taking each context to its speaker", "The speaker in a given context", "A description of the speaker", "The speaker’s personality"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, in how many of the three contexts is &ldquo;I am here now&rdquo; true?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "contingent",
      rung: "apply",
      prompt: <p>Why is the content of &ldquo;I am here now&rdquo; contingent, though it cannot be uttered falsely?</p>,
      answer: {
        kind: "choice",
        options: [
          "What it says, for example that Meera is in Chennai at 9 a.m., could have been false: she could have been elsewhere.",
          "Because it is sometimes false when uttered.",
          "Because indexicals have no content.",
          "Because it is analytic.",
        ],
        correct: [0],
      },
    },
    {
      key: "perry",
      rung: "apply",
      prompt: <p>What does Perry&rsquo;s supermarket example show?</p>,
      answer: {
        kind: "choice",
        options: [
          "Some beliefs that guide action cannot be captured without an indexical like “I”.",
          "Sugar is hard to clean.",
          "Names are rigid designators.",
          "All beliefs are about oneself.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Do Meera and Arjun say the same thing when each says &ldquo;I am hungry&rdquo;? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses Kaplan’s distinction between character and content.",
          "Considers in what sense they say the same, sharing a character, and in what sense they differ, expressing different contents.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>An answering machine plays &ldquo;I am not here now&rdquo;. It seems true, though Kaplan&rsquo;s logic says it cannot be. What should we say?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why Kaplan’s theory makes the sentence false in every context of utterance.",
          "Considers a response, such as letting “now” refer to the time of hearing, or the context being fixed by the speaker’s intentions.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what indexicals are, Kaplan's distinction between character and content, why “I am here now” is true whenever said but not necessary, and Perry's essential indexical.",

  glimpse: (
    <p>
      The next lesson asks how far context sensitivity spreads beyond indexicals, to words like &ldquo;tall&rdquo; and
      &ldquo;know&rdquo;. Later lessons revisit the gap between necessity and a priority, and how we know what is possible.
    </p>
  ),
};
