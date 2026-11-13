import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MullerLyerViz } from "@/components/viz/MullerLyerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.5.5",
  minutes: 75,
  links: {
    revisits: ["p12.5.3", "p12.5.2", "p12.4.3"],
    foreshadows: ["p12.6.1", "p12.7.2", "p12.7.3"],
  },

  puzzle: (
    <>
      <p>
        Nothing seems more certain than that your experiences have a felt quality. Yet our senses mislead us all the time.
        Could introspection, our sense of our own minds, mislead us about consciousness itself?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the fins and then measure the lines. Notice what knowing the truth does, and does not do, to how they look.</p>
      <MullerLyerViz />
    </>
  ),

  theory: (
    <>
      <Definition title="illusionism">
        <p>
          Keith Frankish (2016) defined <strong>illusionism</strong> as the view that phenomenal consciousness, as
          philosophers understand it, is an illusion. Experiences do not have qualia: private, ineffable, intrinsic qualities.
          Introspection represents them as having such properties, and this misrepresentation is what needs explaining.
        </p>
      </Definition>

      <Example title="the illusion problem">
        <p>
          The hard problem asks how physical processes produce phenomenal properties. The illusionist replaces it with the{" "}
          <strong>illusion problem</strong>: why do our introspective systems represent our states as phenomenal? This is a
          question about mechanisms, of the easy kind. Chalmers calls the related question the meta-problem of consciousness,
          and agrees that any theory must solve it.
        </p>
      </Example>

      <Remark title="Dennett’s quining of qualia">
        <p>
          Daniel Dennett&rsquo;s &ldquo;Quining Qualia&rdquo; (1988) argued, through puzzle cases, that the idea of qualia is
          confused. Two coffee tasters both say they no longer like the house coffee. One says the taste is the same but their
          liking changed; the other says their palate changed. Dennett argued there may be no fact about which happened, and
          so no such things as qualia.
        </p>
      </Remark>

      <Remark title="the obvious objection">
        <p>
          An illusion is a way things seem, and seeming seems to be an experience. So it is objected that the illusion of
          consciousness would itself be conscious. Illusionists reply that the seeming is a representation in an introspective
          system, which need not be phenomenal, just as a computer can represent an error that does not exist.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does illusionism deny?</p>,
      answer: {
        kind: "choice",
        options: [
          "That we have experiences at all.",
          "That experiences have phenomenal properties, as philosophers conceive them.",
          "That the brain exists.",
          "That visual illusions occur.",
        ],
        correct: [1],
      },
    },
    {
      key: "who",
      rung: "check",
      prompt: <p>Who introduced the name &ldquo;illusionism&rdquo; for this view?</p>,
      answer: { kind: "choice", options: ["Keith Frankish", "René Descartes", "Thomas Nagel", "Gilbert Ryle"], correct: [0] },
    },
    {
      key: "problem",
      rung: "apply",
      prompt: <p>What problem does the illusionist put in place of the hard problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "The mind–body problem.",
          "The illusion problem: why introspection represents our states as phenomenal.",
          "The problem of other minds.",
          "The frame problem.",
        ],
        correct: [1],
      },
    },
    {
      key: "ml",
      rung: "apply",
      prompt: <p>What does the Müller-Lyer illusion illustrate for illusionists?</p>,
      answer: {
        kind: "choice",
        options: [
          "That vision is always wrong.",
          "That an appearance can persist even when we know it to be false.",
          "That lines have no length.",
          "That illusions are conscious.",
        ],
        correct: [1],
      },
    },
    {
      key: "obj",
      rung: "apply",
      prompt: <p>How do illusionists answer the objection that an illusion of consciousness must itself be conscious?</p>,
      answer: {
        kind: "choice",
        options: [
          "They accept it and give up.",
          "The seeming is a representation in an introspective system, which need not be phenomenal.",
          "They deny that anything seems any way.",
          "They say only humans have illusions.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Could you be wrong that your experiences have a felt quality? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the illusionist claim.",
          "Considers the objection that seeming is itself conscious.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If illusionism is true, does pain still matter morally? Why or why not?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that illusionists keep experiences and their functional role, such as aversion.",
          "Considers whether moral importance depends on phenomenal properties.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what illusionism claims, how the illusion problem replaces the hard problem, Dennett's coffee tasters, and the objection that an illusion of consciousness must be conscious.",

  glimpse: (
    <p>
      This completes the unit on consciousness. The next unit asks how mental states can be about things at all, and later
      lessons ask whether minds extend beyond the brain and whether machines could have them.
    </p>
  ),
};
