import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SupervenienceViz } from "@/components/viz/SupervenienceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.4.2",
  minutes: 80,
  links: {
    revisits: ["p12.4.1", "p12.2.3", "p11.3.1"],
    foreshadows: ["p12.4.3", "p27.1.1", "p27.4.1"],
  },

  puzzle: (
    <>
      <p>
        Two prints of the same photograph cannot differ in what they depict without differing somewhere in their ink. A
        painting cannot change in beauty without changing in its paint. Physicalists say the mind is like this: no mental
        difference without a physical difference. Is that enough to make the mind physical?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Assign mental states to six creatures with given physical states. When does supervenience fail?</p>
      <SupervenienceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="supervenience">
        <p>
          A set of properties A <strong>supervenes</strong> on a set B when there can be no difference in A without a
          difference in B. <strong>Strong</strong> supervenience: necessarily, anything with a given B-property has the same
          A-properties, across all possible worlds. <strong>Weak</strong> supervenience requires this only within each world.{" "}
          <strong>Global</strong> supervenience: any two possible worlds that are physically alike are mentally alike.
        </p>
      </Definition>

      <Example title="what supervenience allows">
        <p>
          Supervenience is compatible with multiple realisability: different physical states may realise the same mental
          state. It is also compatible with identity, and, surprisingly, with some kinds of dualism. A dualist who holds that
          non-physical experiences arise from brain states by a law of nature accepts weak supervenience in our world, though
          not strong supervenience across all worlds.
        </p>
      </Example>

      <Remark title="minimal physicalism">
        <p>
          Frank Jackson and David Lewis took global supervenience of everything on the physical as the minimal commitment of
          physicalism: a world that is a minimal physical duplicate of ours is a duplicate simpliciter. Zombie arguments attack
          exactly this, by claiming that a physical duplicate without consciousness is possible.
        </p>
      </Remark>

      <Remark title="covariation is not explanation">
        <p>
          Kim stressed that supervenience states a pattern of covariation, not why it holds. The mental might supervene on the
          physical because it is identical to it, because it is realised by it, or because a god keeps them in step. So
          supervenience names the mind-body problem rather than solving it. Recent metaphysics uses <em>grounding</em>, a
          relation of metaphysical explanation, to say what supervenience leaves out.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for the mental to supervene on the physical?</p>,
      answer: {
        kind: "choice",
        options: [
          "Mental states cause physical states.",
          "There can be no mental difference without a physical difference.",
          "Every mental state is identical to a physical state.",
          "Mental states are more important than physical ones.",
        ],
        correct: [1],
      },
    },
    {
      key: "allows",
      rung: "check",
      prompt: <p>Does supervenience allow two physically different creatures to share a mental state?</p>,
      answer: { kind: "choice", options: ["Yes", "No", "Only if they are identical", "Only for pain"], correct: [0] },
    },
    {
      key: "fail",
      rung: "apply",
      prompt: <p>Which case shows supervenience failing?</p>,
      answer: {
        kind: "choice",
        options: [
          "Two physically different creatures in the same mental state.",
          "Two physically identical creatures in different mental states.",
          "Two creatures with different mental and physical states.",
          "One creature changing physically.",
        ],
        correct: [1],
      },
    },
    {
      key: "strong",
      rung: "apply",
      prompt: <p>A dualist says experiences arise from brain states by a contingent law of nature. Which supervenience can they accept?</p>,
      answer: {
        kind: "choice",
        options: [
          "Strong supervenience across all possible worlds.",
          "Weak supervenience within our world, but not strong supervenience.",
          "No supervenience at all.",
          "Only global supervenience.",
        ],
        correct: [1],
      },
    },
    {
      key: "explain",
      rung: "apply",
      prompt: <p>Why did Kim say supervenience does not solve the mind-body problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because supervenience is false.",
          "Because it states a pattern of covariation without explaining why it holds.",
          "Because it implies dualism.",
          "Because it is too strong.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is global supervenience of the mental on the physical enough for physicalism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States global supervenience and why physicalists adopt it.",
          "Considers a challenge, such as dualist laws or the need for explanation.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "moral",
      rung: "stretch",
      prompt: <p>Many think moral properties supervene on natural ones: two situations cannot differ morally without differing naturally. Does this show moral properties are natural properties?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the distinction between supervenience and identity.",
          "Considers what might explain the supervenience in the moral case.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what supervenience is, the difference between weak, strong and global supervenience, why supervenience allows multiple realisability and even some dualism, its role as minimal physicalism, and Kim’s point that it does not explain.",

  glimpse: (
    <p>
      The next lesson considers epiphenomenalism, which accepts supervenience but denies mental causation. Metaphysics later
      develops grounding and Lewis&rsquo;s Humean supervenience.
    </p>
  ),
};
