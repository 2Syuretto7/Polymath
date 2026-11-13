import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { OpenQuestionViz } from "@/components/viz/OpenQuestionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p13.3.1",
  minutes: 80,
  links: {
    revisits: ["p7.5.5", "p13.2.1", "p5.2.1"],
    foreshadows: ["p13.3.2", "p13.3.4", "p30.3.2"],
  },

  puzzle: (
    <>
      <p>
        Bentham said that good just means pleasant. If so, asking &ldquo;this is pleasant, but is it good?&rdquo; should be
        as pointless as asking &ldquo;he is unmarried, but is he a bachelor?&rdquo; Yet the first question does not feel
        pointless at all. In 1903 G. E. Moore built an argument on that feeling. What, if anything, does it show?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a proposed definition of &ldquo;good&rdquo; and ask whether the question it leaves is still open.</p>
      <OpenQuestionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the open question argument">
        <p>
          Suppose &ldquo;good&rdquo; means the same as some natural property N, such as being pleasant. Then &ldquo;x is N,
          but is x good?&rdquo; would be a closed question, answered by understanding the words alone. But for every N we try,
          a competent speaker can sensibly wonder whether N things are good. So &ldquo;good&rdquo; does not mean N, for any
          natural N.
        </p>
      </Definition>

      <Definition title="the naturalistic fallacy">
        <p>
          Moore&rsquo;s name for the error of identifying goodness with a natural property. He concluded that goodness is a
          simple, indefinable, non-natural property, known by intuition, much as yellow is a simple quality that cannot be
          defined to someone who has never seen it.
        </p>
      </Definition>

      <Example title="the paradox of analysis">
        <p>
          The argument proves too much if it is read as a test of meaning. &ldquo;A brother is a male sibling&rdquo; is a
          correct analysis, and a correct analysis should be informative. If every informative analysis leaves an open feel,
          the test would rule out all philosophical analysis, not only analyses of goodness.
        </p>
      </Example>

      <Remark title="the naturalist reply">
        <p>
          &ldquo;Water&rdquo; and &ldquo;H₂O&rdquo; differ in meaning, so &ldquo;this is water, but is it H₂O?&rdquo; is an open
          question, yet water is H₂O. Likewise goodness might be identical to a natural property even though the words differ
          in meaning. The open question argument at most shows that &ldquo;good&rdquo; is not synonymous with any natural
          term. Whether the property is natural is a further, metaphysical question.
        </p>
      </Remark>

      <Remark title="what survives">
        <p>
          Even critics grant that the openness tracks something real: calling a thing good seems to bear on choice and action
          in a way that calling it pleasant does not. Non-cognitivists, in the next lesson, take this practical character to be
          the key to moral language.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "closed",
      rung: "check",
      prompt: <p>Which of these is a closed question in Moore&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "This is pleasant, but is it good?",
          "This is a triangle, but does it have three sides?",
          "This is desired, but is it good?",
          "This is approved by society, but is it good?",
        ],
        correct: [1],
      },
    },
    {
      key: "concl",
      rung: "check",
      prompt: <p>What did Moore conclude about goodness?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is pleasure.",
          "It is a simple, indefinable, non-natural property.",
          "It does not exist.",
          "It is whatever society approves.",
        ],
        correct: [1],
      },
    },
    {
      key: "water",
      rung: "apply",
      prompt: <p>What does the water and H₂O example show about the open question argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "That water is not H₂O.",
          "That two terms can differ in meaning yet pick out the same property, so openness does not rule out identity.",
          "That chemistry is non-natural.",
          "That every question is closed.",
        ],
        correct: [1],
      },
    },
    {
      key: "paradox",
      rung: "apply",
      prompt: <p>Why does the paradox of analysis threaten the argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it shows goodness is pleasure.",
          "Because correct analyses can be informative and so feel open, so the test would condemn all analysis.",
          "Because Moore contradicted himself about yellow.",
          "Because no questions are ever open.",
        ],
        correct: [1],
      },
    },
    {
      key: "fallacy",
      rung: "apply",
      prompt: <p>A speaker says, &ldquo;Whatever evolution favours is good, by definition.&rdquo; What would Moore say?</p>,
      answer: {
        kind: "choice",
        options: [
          "That this is correct.",
          "That it commits the naturalistic fallacy, since one can sensibly ask whether what evolution favours is good.",
          "That evolution is non-natural.",
          "That goodness is defined by society instead.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the open question argument show that goodness is not a natural property? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument: any proposed natural definition leaves an open question.",
          "Raises an objection, such as the water and H₂O reply or the paradox of analysis.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Even if &ldquo;good&rdquo; is not synonymous with any natural term, does the open feel tell us something about what moral words are for?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the practical, action-guiding feel of calling something good.",
          "Connects this to a view, such as non-cognitivism or a naturalism that explains it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Moore's open question argument, what he concluded about goodness, and the two main replies: the paradox of analysis and the water and H₂O example.",

  glimpse: (
    <p>
      The next lessons take three paths from Moore. Non-cognitivists say moral words express attitudes, error theorists say
      moral claims are all false, and realists defend moral facts, natural or not.
    </p>
  ),
};
