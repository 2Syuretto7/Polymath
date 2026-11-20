import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DiagonalIntensionViz } from "@/components/viz/DiagonalIntensionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p29.2.2",
  minutes: 90,
  links: {
    revisits: ["p29.2.1", "p15.5.1", "p26.1.1"],
    foreshadows: ["p29.3.3", "p29.4.1", "p31.1.1"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;I am here now&rsquo; cannot be false when you say it, so you know it without checking. Yet you might not have
        been here now, so it is not necessary. &lsquo;Water is H₂O&rsquo; is the reverse: necessary, but known only by
        chemistry. Is there a single framework in which both oddities become natural?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a sentence, and compare the diagonal of its matrix with the row for the actual world.</p>
      <DiagonalIntensionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="character and content">
        <p>
          David Kaplan distinguished two layers of meaning for indexicals. The <strong>character</strong> of
          &lsquo;I&rsquo; is a rule, the speaker of the context; it is fixed by linguistic competence. The{" "}
          <strong>content</strong> is what the rule delivers in a context, a particular person, and it is this content that
          is evaluated at possible worlds. &lsquo;I am here now&rsquo; is true in every context, so a priori, but its
          content in a context is contingent.
        </p>
      </Definition>

      <Definition title="the diagonal proposition">
        <p>
          Robert Stalnaker arranged truth values in a matrix: rows for possible contexts of utterance, columns for worlds of
          evaluation. The <strong>diagonal</strong> gives, for each world, whether the sentence is true as uttered in that
          very world. Stalnaker suggested that when a hearer is unsure what the words pick out, what is communicated is the
          diagonal proposition.
        </p>
      </Definition>

      <Definition title="epistemic two-dimensionalism">
        <p>
          David Chalmers and Frank Jackson extended the idea to names and natural kind terms. The{" "}
          <strong>primary</strong> or epistemic intension of &lsquo;water&rsquo; picks out, in each scenario considered as
          actual, the watery stuff there. The <strong>secondary</strong> or subjunctive intension picks out H₂O in every
          world, given that H₂O is the watery stuff here. A sentence is necessary when its secondary intension is true in
          all worlds, and, on Chalmers&rsquo;s core thesis, a priori when its primary intension is.
        </p>
      </Definition>

      <Example title="Kripke’s cases revisited">
        <p>
          &lsquo;Water is H₂O&rsquo; has a contingent primary intension, false in a Twin Earth scenario, and a necessary
          secondary one: necessary a posteriori. &lsquo;Water is the watery stuff&rsquo; is the reverse: contingent a priori.
          The appearance that water could have been XYZ is explained as the real possibility of the Twin Earth scenario
          considered as actual.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Scott Soames argues that names and kind terms carry no descriptive primary intension at all, since speakers can
          use &lsquo;water&rsquo; competently while associating quite different descriptions with it. Others accept the
          matrices as a theory of thought but deny that they belong to the semantics of public language. At stake is the
          &lsquo;golden triangle&rsquo; linking meaning, a priori reason and possibility.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "diag",
      rung: "check",
      prompt: <p>In a two-dimensional matrix, what does the diagonal represent?</p>,
      answer: { kind: "choice", options: ["Whether the sentence is true when each world is taken as the actual one and evaluated there", "The truth value in the actual world only", "Worlds where the sentence is necessary", "The sentence’s truth on every sharpening"], correct: [0] },
    },
    {
      key: "kaplan",
      rung: "check",
      prompt: <p>Which sentence did Kaplan use as an example of the contingent a priori?</p>,
      answer: { kind: "choice", options: ["I am here now.", "Water is H₂O.", "Hesperus is Phosphorus.", "2 + 2 = 4."], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose &lsquo;Water is the watery stuff&rsquo;. In how many of the three cells of the Earth row is it true?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "h2o",
      rung: "apply",
      prompt: <p>In the visualisation, is the diagonal for &lsquo;Water is H₂O&rsquo; true throughout?</p>,
      answer: { kind: "choice", options: ["No, so the sentence is a posteriori", "Yes, so the sentence is a priori", "No, so the sentence is contingent", "Yes, so the sentence is necessary"], correct: [0] },
    },
    {
      key: "sec",
      rung: "apply",
      prompt: <p>Which intension settles whether a sentence is metaphysically necessary?</p>,
      answer: { kind: "choice", options: ["The secondary, or subjunctive, intension", "The primary, or epistemic, intension", "The character", "The diagonal proposition"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does two-dimensional semantics restore the link between what is conceivable and what is possible? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how primary and secondary intensions separate a priori from necessary truth.",
          "Considers an objection, such as Soames’s denial that names have descriptive primary intensions.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is &lsquo;I am here now&rsquo; really knowable a priori? Consider an answering machine message.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the case of a recorded message heard when the speaker is elsewhere.",
          "Considers a reply, such as redefining the context as that of reception, or restricting the claim to live utterance.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Possible-worlds semantics assumes every sentence is true or false at a world. But is a man with exactly 3,000 hairs
        bald? Vague words threaten that assumption, and an ancient puzzle shows how.
      </p>
      <p>Next, the sorites.</p>
    </>
  ),
};
