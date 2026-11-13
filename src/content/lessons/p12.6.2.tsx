import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TwinEarthViz } from "@/components/viz/TwinEarthViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.6.2",
  minutes: 75,
  links: {
    revisits: ["p12.6.1", "p12.4.2", "p12.3.1"],
    foreshadows: ["p12.6.3", "p12.7.1", "p15.2.1"],
  },

  puzzle: (
    <>
      <p>
        Imagine a planet exactly like Earth, down to a twin of you, except that the clear liquid in its rivers is not H₂O but
        a different substance, XYZ. You and your twin think &ldquo;water is wet&rdquo; with identical brains. Are you thinking
        the same thought?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the twins row by row, and then consider the internalist reply.</p>
      <TwinEarthViz />
    </>
  ),

  theory: (
    <>
      <Definition title="internalism and externalism">
        <p>
          <strong>Internalism</strong> about content says that what a thought is about is fixed by what is inside the
          thinker&rsquo;s head (or mind), so internal duplicates think the same thoughts. <strong>Externalism</strong> says that
          some contents depend partly on the thinker&rsquo;s environment, physical or social.
        </p>
      </Definition>

      <Example title="Putnam’s Twin Earth (1975)">
        <p>
          In 1750, before chemistry, Oscar and Twin Oscar are in the same internal states. Yet Oscar&rsquo;s word
          &ldquo;water&rdquo; refers to H₂O and his twin&rsquo;s to XYZ, since each word was introduced by pointing at the
          local stuff. Putnam concluded that meaning is not fixed in the head. Later externalists applied this to thoughts:
          Oscar believes that water is wet, his twin that twater is wet.
        </p>
      </Example>

      <Example title="Burge’s arthritis (1979)">
        <p>
          Bert believes he has arthritis in his thigh, which is false, since arthritis affects only joints. In a community
          whose doctors used &ldquo;arthritis&rdquo; more widely, an internal duplicate of Bert would have a true belief. So the
          linguistic practices of a community, which Bert defers to, help fix the content of his beliefs.
        </p>
      </Example>

      <Remark title="problems for externalism">
        <p>
          <strong>Self-knowledge:</strong> if content depends on the environment, it seems you cannot know what you are
          thinking without knowing chemistry. <strong>Psychological explanation:</strong> the twins behave identically, so
          content that differs between them seems idle in explaining behaviour. Jerry Fodor and others proposed{" "}
          <strong>narrow content</strong>, shared by the twins, for psychology, while accepting wide content for truth and
          reference.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ext",
      rung: "check",
      prompt: <p>What does externalism about mental content claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Minds are made of external matter.",
          "Some contents of thought depend partly on the thinker’s environment.",
          "Thoughts can be read from outside.",
          "Only external objects are real.",
        ],
        correct: [1],
      },
    },
    {
      key: "xyz",
      rung: "check",
      prompt: <p>On Putnam&rsquo;s view, what does Twin Oscar&rsquo;s word &ldquo;water&rdquo; refer to?</p>,
      answer: { kind: "choice", options: ["H₂O", "XYZ", "Both", "Nothing"], correct: [1] },
    },
    {
      key: "why1750",
      rung: "apply",
      prompt: <p>Why is the story set in 1750?</p>,
      answer: {
        kind: "choice",
        options: [
          "So that neither twin knows the chemistry, and their internal states can be the same.",
          "Because water was different then.",
          "Because Putnam liked history.",
          "Because XYZ was discovered then.",
        ],
        correct: [0],
      },
    },
    {
      key: "burge",
      rung: "apply",
      prompt: <p>What does Burge&rsquo;s arthritis case add to Twin Earth?</p>,
      answer: {
        kind: "choice",
        options: [
          "That social and linguistic practices, not only physical surroundings, help fix content.",
          "That arthritis is a mental state.",
          "That doctors cannot be trusted.",
          "Nothing new.",
        ],
        correct: [0],
      },
    },
    {
      key: "narrow",
      rung: "apply",
      prompt: <p>What role is narrow content meant to play?</p>,
      answer: {
        kind: "choice",
        options: [
          "To fix reference to H₂O.",
          "To capture what internal duplicates share, for explaining behaviour.",
          "To deny that the twins have thoughts.",
          "To explain chemistry.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Do Oscar and Twin Oscar have different beliefs? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Twin Earth case.",
          "Considers the externalist verdict and an internalist or narrow content reply.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If you were secretly moved to Twin Earth and stayed for years, when would your word &ldquo;water&rdquo; start to refer to XYZ?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the problem of slow switching.",
          "Considers what this means for knowing one’s own thoughts.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Twin Earth and arthritis thought experiments, the difference between internalism and externalism, and the worries about self-knowledge and psychological explanation.",

  glimpse: (
    <p>
      The next lesson asks what natural relation makes a state in the head about water at all. Kripke&rsquo;s theory of naming
      gives a similar picture for proper names.
    </p>
  ),
};
