import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { JudgesViz } from "@/components/viz/JudgesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p24.1.2",
  minutes: 85,
  links: {
    revisits: ["p24.1.1", "p7.5.1", "p5.1.2"],
    foreshadows: ["p24.1.3", "p24.3.1", "p24.4.2"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;There is no accounting for taste,&rsquo; people say, and yet nobody thinks a child&rsquo;s nursery rhyme is
        as great as Kālidāsa&rsquo;s poetry. If beauty is a matter of feeling, how can one person&rsquo;s judgement be better
        than another&rsquo;s? Hume thought both sayings are partly true, and tried to reconcile them.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Hume&rsquo;s answer appeals to true judges. Require the qualities he names, one at a time, and see whether the
        surviving critics agree.
      </p>
      <JudgesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the problem">
        <p>
          In &lsquo;Of the Standard of Taste&rsquo; (1757), Hume grants that beauty is not a quality in things but exists in
          the mind that contemplates them: sentiment, unlike judgement of fact, refers to nothing beyond itself, so every
          sentiment is in a sense right. Yet common sense also holds that whoever ranked Ogilby, a minor poet, above Milton
          would be absurd. Hume seeks a standard that reconciles the variety of taste with this.
        </p>
      </Definition>

      <Definition title="the true judge">
        <p>
          Certain qualities in objects are fitted by nature to produce pleasure, as the rules of art record, but their effect
          is easily disturbed. A good critic must have <strong>delicacy of taste</strong> (Hume tells of Sancho&rsquo;s
          kinsmen, who tasted leather and iron in wine from a barrel with a key on a leather thong at the bottom),{" "}
          <strong>practice</strong>, <strong>comparison</strong> of many works, freedom from <strong>prejudice</strong>, and{" "}
          <strong>good sense</strong>. The joint verdict of such judges is the standard of taste.
        </p>
      </Definition>

      <Example title="the test of time">
        <p>
          Hume also appeals to durable admiration: &lsquo;The same Homer, who pleased at Athens and Rome two thousand years
          ago, is still admired at Paris and at London.&rsquo; Works that survive changes of fashion, language and prejudice
          show that they please by qualities fitted to the human mind, not by accident.
        </p>
      </Example>

      <Remark title="difficulties">
        <p>
          Is the account circular? We identify true judges by their good taste, and good taste by agreement with true judges.
          Hume replies that the qualities can be recognised independently: delicacy shows in detecting real features. A second
          worry: why should I care about the verdict of judges whose pleasures are not mine? And Hume allows blameless
          variation, from age and temperament (a young person preferring Ovid, an older one Tacitus) and from national
          custom, where no standard decides.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sent",
      rung: "check",
      prompt: <p>According to Hume, where does beauty exist?</p>,
      answer: { kind: "choice", options: ["In the mind that contemplates things, as a sentiment", "In the Form of Beauty", "In the objects alone, independent of minds", "Nowhere: there is no beauty"], correct: [0] },
    },
    {
      key: "std",
      rung: "check",
      prompt: <p>What is Hume&rsquo;s standard of taste?</p>,
      answer: { kind: "choice", options: ["The joint verdict of true judges", "The majority opinion of the day", "The rules of art alone", "Each person’s own pleasure"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, require all five qualities. How many critics remain?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "sancho",
      rung: "apply",
      prompt: <p>What does the story of Sancho&rsquo;s kinsmen illustrate?</p>,
      answer: { kind: "choice", options: ["Delicacy of taste: detecting real qualities that others miss", "Freedom from prejudice", "The test of time", "That all tastes are equal"], correct: [0] },
    },
    {
      key: "circ",
      rung: "apply",
      prompt: <p>What is the circularity objection to Hume&rsquo;s account?</p>,
      answer: { kind: "choice", options: ["True judges are identified by their good taste, and good taste by their verdicts", "Hume uses circles as examples of beauty", "Hume assumes Milton is great", "The test of time takes too long"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does Hume succeed in showing that some judgements of taste are better than others? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Hume’s account of the true judge or the joint verdict.",
          "Considers an objection, such as circularity or why the verdict should bind me.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Hume&rsquo;s examples of lasting works are all European. Does the test of time favour the traditions that happened to survive and be studied?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers how survival may depend on power, preservation and canon-making rather than merit.",
          "Considers whether the test still works across traditions, for example with Sanskrit or Tamil literature.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Hume grounds the standard in human nature and in experience. Kant, a generation later, thought this could not
        explain why a judgement of beauty claims everyone&rsquo;s agreement, as if beauty were a property, while resting on
        feeling.
      </p>
      <p>Next, Kant&rsquo;s analysis of the judgement of taste, revisited.</p>
    </>
  ),
};
