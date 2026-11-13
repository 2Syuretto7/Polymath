import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CategoryTableViz } from "@/components/viz/CategoryTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.3.1",
  minutes: 80,
  links: {
    revisits: ["p8.1.3", "p4.5.1", "p7.5.2"],
    foreshadows: ["p8.3.2", "p8.3.3", "p8.3.4"],
  },

  puzzle: (
    <>
      <p>
        Aristotle listed ten categories, the most general kinds of thing that can be said: substance, quantity, quality,
        relation, place, time and so on. Kant admired the attempt but called it rhapsodic, a list picked up as Aristotle came
        across the items, with no principle to show it was complete. Hume had argued that the idea of cause has no source in
        experience. Is there a principled way to find all the concepts the mind brings to experience, and to show that the list
        is complete?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each logical form of judgement belongs to one of four headings. Guess which pure concept matches each form, then
        reveal Kant&rsquo;s answer.
      </p>
      <CategoryTableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the categories">
        <p>
          The <strong>categories</strong> are the pure concepts of the understanding: concepts not drawn from experience,
          which the understanding uses to unify what intuition gives it into the experience of objects. Kant lists twelve, in
          four groups of three: unity, plurality and totality under quantity; reality, negation and limitation under quality;
          substance, cause and community under relation; possibility, existence and necessity under modality.
        </p>
      </Definition>

      <Definition title="the metaphysical deduction">
        <p>
          The understanding, Kant says, is the faculty of judging. Logic had long catalogued the forms of judgement, which
          Kant arranges in a table of twelve. The same act that gives unity to the different representations in a judgement
          gives unity to the manifold of an intuition. So for each form of judgement there is a corresponding concept of an
          object in general. This derivation of the categories from the forms of judgement is the{" "}
          <strong>metaphysical deduction</strong>. Because the table of judgements is complete, so is the table of categories.
        </p>
      </Definition>

      <Example title="judgement and cause">
        <p>
          The hypothetical judgement, &ldquo;if <em>A</em>, then <em>B</em>&rdquo;, links a ground and its consequence. Applied
          not to propositions but to what is given in intuition, this same function of unity yields the concept of cause and
          effect: one state of things as the ground of another. Kant&rsquo;s reply to Hume begins here. The concept of cause
          is not an impression copied from experience, but a form of thought the understanding brings to experience.
        </p>
      </Example>

      <Remark title="doubts">
        <p>
          Critics have found the table of judgements less complete and less natural than Kant claimed: infinite judgements and
          singular judgements fit awkwardly, and modern logic classifies forms of judgement quite differently. Hegel praised
          the triads but thought Kant should have derived them, not found them. Even sympathetic readers often hold that the
          real work is done by the next step, the transcendental deduction, which argues that the categories must apply to
          experience.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "four",
      rung: "check",
      prompt: <p>Which are the four headings of Kant&rsquo;s table of categories? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Quantity", "Quality", "Relation", "Modality", "Place", "Time"], correct: [0, 1, 2, 3] },
    },
    {
      key: "count",
      rung: "check",
      prompt: <p>How many categories does Kant list?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "hyp",
      rung: "apply",
      prompt: <p>Which category corresponds to the hypothetical form of judgement, &ldquo;if A, then B&rdquo;?</p>,
      answer: { kind: "choice", options: ["Substance", "Cause and effect", "Community", "Necessity"], correct: [1] },
    },
    {
      key: "aristotle",
      rung: "apply",
      prompt: <p>What was Kant&rsquo;s complaint about Aristotle&rsquo;s categories?</p>,
      answer: {
        kind: "choice",
        options: [
          "That there were too few.",
          "That they were collected without a principle, so there was no way to tell the list was complete.",
          "That they were empirical.",
          "That they included substance.",
        ],
        correct: [1],
      },
    },
    {
      key: "md",
      rung: "apply",
      prompt: <p>What does the metaphysical deduction do?</p>,
      answer: {
        kind: "choice",
        options: [
          "Proves that God exists.",
          "Derives the categories from the logical forms of judgement.",
          "Shows that space is a form of intuition.",
          "Proves that the categories apply to things in themselves.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, explain how the categories are meant to answer Hume on causation.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says Hume found no impression from which the idea of necessary connection could be copied.",
          "Says for Kant cause is a pure concept the understanding brings to experience, derived from the form of hypothetical judgement, not copied from impressions. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "complete",
      rung: "stretch",
      prompt: (
        <p>
          Modern logic does not divide judgements into Kant&rsquo;s twelve forms. Does that undermine his table of categories?
          Give your view.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes the completeness of the categories rests on the completeness of the table of judgements.",
          "Considers a reply, such as that some categories, like substance and cause, may still be needed for experience even if the derivation fails.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Kant's categories are, how the metaphysical deduction derives them from the forms of judgement, how this differs from Aristotle's list, and why the concept of cause matters for the reply to Hume.",

  glimpse: (
    <p>
      The next lesson asks the harder question: by what right do these concepts apply to the objects of experience? That is
      the transcendental deduction. After it, the schematism explains how pure concepts meet sensible intuitions in time.
    </p>
  ),
};
