import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ContextStandardsViz } from "@/components/viz/ContextStandardsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p10.4.3",
  minutes: 80,
  links: {
    revisits: ["p10.4.2", "p10.4.1", "p10.1.1"],
    foreshadows: ["p10.4.4", "p28.4.1", "p10.6.2"],
  },

  puzzle: (
    <>
      <p>
        In the street you say, without hesitation, that you know where you parked. In a philosophy class, after an hour on
        brains in vats, you admit you know nothing about the external world. You have not learnt anything new in between. Were
        you wrong the first time, or the second, or could both claims be true?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move through the contexts and see which alternatives become relevant, and what happens to the knowledge claim.</p>
      <ContextStandardsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="contextualism">
        <p>
          The truth conditions of &ldquo;S knows that p&rdquo; vary with the context of the person making or assessing the
          claim. In everyday contexts the standards are low and the sentence can be true; in contexts where sceptical
          possibilities are raised the standards rise, and the same sentence, about the same S, can be false.
        </p>
      </Definition>

      <Example title="the bank cases">
        <p>
          Keith DeRose&rsquo;s cases: on a relaxed Friday it is true to say &ldquo;I know the bank is open tomorrow&rdquo;;
          when a large cheque must clear and the spouse mentions that banks change their hours, it becomes false, though the
          evidence is unchanged. Contextualists, including Stewart Cohen and David Lewis, compare &ldquo;know&rdquo; to words
          like &ldquo;tall&rdquo;, &ldquo;flat&rdquo; or &ldquo;here&rdquo;, whose content shifts with context.
        </p>
      </Example>

      <Remark title="the answer to scepticism">
        <p>
          The sceptic&rsquo;s argument is sound in the seminar, where the standards are high, so &ldquo;I know I have
          hands&rdquo; is false there. But ordinary claims to knowledge, made in ordinary contexts, remain true. Closure holds
          within each context. The sceptic wins only by changing the subject.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Ordinary speakers do not seem to notice that &ldquo;know&rdquo; shifts, and they treat a sceptic as disagreeing with
          them, not as changing the topic. Critics say contextualism is a theory about the word &ldquo;know&rdquo;, not about
          knowledge. Rival views say the standards depend on the subject&rsquo;s practical stakes (pragmatic encroachment), or
          that our judgements shift only because high stakes make us less confident.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does contextualism say varies with context?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whether p is true.",
          "The truth conditions of sentences of the form “S knows that p”.",
          "The subject's evidence.",
          "The laws of logic.",
        ],
        correct: [1],
      },
    },
    {
      key: "whose",
      rung: "check",
      prompt: <p>According to contextualism, whose context sets the standards for &ldquo;S knows that p&rdquo;?</p>,
      answer: { kind: "choice", options: ["The speaker's or assessor's", "Only S's", "God's", "The majority's"], correct: [0] },
    },
    {
      key: "bank",
      rung: "apply",
      prompt: <p>In the high-stakes bank case, why does the knowledge claim become false?</p>,
      answer: {
        kind: "choice",
        options: [
          "The bank has in fact changed its hours.",
          "A new alternative, that the bank changed its hours, becomes relevant and the speaker's evidence does not rule it out.",
          "The speaker forgets their evidence.",
          "The speaker is lying.",
        ],
        correct: [1],
      },
    },
    {
      key: "analogy",
      rung: "apply",
      prompt: <p>Which word is the best analogy for &ldquo;know&rdquo; on the contextualist view?</p>,
      answer: { kind: "choice", options: ["“Tall”", "“Seven”", "“Triangle”", "“Water”"], correct: [0] },
    },
    {
      key: "sceptic",
      rung: "apply",
      prompt: <p>How does contextualism treat the sceptic&rsquo;s conclusion that we do not know we have hands?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is false in every context.",
          "It is true in high-standard contexts like the seminar, but our ordinary knowledge claims remain true in ordinary contexts.",
          "It is meaningless.",
          "It is true in every context.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does contextualism really answer the sceptic, or does it change the subject? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States how contextualism handles the sceptical argument.",
          "Considers an objection, such as that it concerns the word, not knowledge, or that speakers do not notice the shift.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "exam",
      rung: "stretch",
      prompt: <p>A doctor says &ldquo;I know this mole is harmless&rdquo; to a worried patient, and a second doctor says &ldquo;you don&rsquo;t know that without a biopsy&rdquo;. Is the second doctor contradicting the first, or raising the standard?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes the case in contextualist terms, with the biopsy making a new alternative relevant.",
          "Considers whether the doctors really disagree.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend contextualism about knowledge, the bank cases, the comparison with words like 'tall', how contextualism answers scepticism while keeping closure, and the main objections.",

  glimpse: (
    <p>
      The next lesson considers Moore&rsquo;s bolder reply: that we simply do know we have hands. Graduate epistemology asks
      whether practical stakes, rather than conversational context, shape what we know.
    </p>
  ),
};
