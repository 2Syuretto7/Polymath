import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ThreeNaturesViz } from "@/components/viz/ThreeNaturesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.5.6",
  minutes: 90,
  links: {
    revisits: ["p20.5.5", "p20.5.4", "p20.4.2"],
    foreshadows: ["p20.5.7", "p20.7.3", "p20.7.6"],
  },

  puzzle: (
    <>
      <p>
        In a dream you see a city, walk its streets, feel afraid, wake with your heart pounding. The city was never outside
        you, yet it had a place, a time, and real effects. What, then, does waking experience have that a dream lacks? If you
        cannot say, why believe in a world outside the mind at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>See one stream of experience under each of the three natures.</p>
      <ThreeNaturesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="mind only">
        <p>
          <strong>Yogācāra</strong>, &ldquo;the practice of yoga&rdquo;, was systematised by Asaṅga and his half-brother
          Vasubandhu around the fourth century CE. Its central claim is <strong>vijñaptimātra</strong>, &ldquo;representation
          only&rdquo;: what appear to be external objects are appearances within consciousness, with no matter behind them.
        </p>
      </Definition>

      <Example title="the Twenty Verses">
        <p>
          Realists object that without external objects, experience would not be fixed in place and time, shared between
          people, or causally effective. Vasubandhu replies with dreams, which have all three: a dream city appears at a
          particular place; beings with similar karma, like the hungry ghosts who all see a river of pus where humans see
          water, share appearances; and a dream can have physical effects. He then argues that external objects are incoherent:
          partless atoms could not combine into extended things, and atoms with parts would not be atoms.
        </p>
      </Example>

      <Definition title="the storehouse consciousness">
        <p>
          To explain continuity without a self or a world, Yogācāra adds to the six sense consciousnesses an afflicted mind
          (kliṣṭa-manas), which mistakes the stream for a self, and a <strong>storehouse consciousness</strong>{" "}
          (ālaya-vijñāna), which holds the <strong>seeds</strong> (bīja) laid down by past actions. Seeds ripen into new
          experience, which plants new seeds: karma without matter.
        </p>
      </Definition>

      <Remark title="idealism or phenomenology">
        <p>
          The three natures recast emptiness: the dependent flow of cognition is real conventionally, the split into subject
          and object is imagined, and the perfected nature is the flow free of that split. Some scholars read Yogācāra as
          metaphysical idealism, like Berkeley&rsquo;s; others as a phenomenology concerned with how experience is structured
          and how practice transforms it. Madhyamaka critics, such as Candrakīrti, charged that it gives mind an own-nature.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "claim",
      rung: "check",
      prompt: <p>What is Yogācāra&rsquo;s central claim?</p>,
      answer: { kind: "choice", options: ["Apparent external objects are appearances within consciousness", "Only matter exists", "Nothing at all exists", "The self is eternal"], correct: [0] },
    },
    {
      key: "dream",
      rung: "check",
      prompt: <p>What does Vasubandhu use dreams to show?</p>,
      answer: {
        kind: "choice",
        options: ["Experience can be fixed in place and time, shared and effective without external objects", "Dreams are always false", "Waking life is a dream of the gods", "Sleep is a path to liberation"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which nature is the split into a grasping subject and grasped objects?</p>,
      answer: { kind: "choice", options: ["The imagined nature", "The dependent nature", "The perfected nature", "None of them"], correct: [0] },
    },
    {
      key: "alaya",
      rung: "apply",
      prompt: <p>What role does the storehouse consciousness play?</p>,
      answer: { kind: "choice", options: ["It holds the seeds of past actions, which ripen into new experience", "It perceives colours", "It is the eternal self", "It stores memories of past Buddhas"], correct: [0] },
    },
    {
      key: "atoms",
      rung: "apply",
      prompt: <p>What is Vasubandhu&rsquo;s dilemma about atoms?</p>,
      answer: {
        kind: "choice",
        options: ["Partless atoms could not join to make extended things, and atoms with parts are not atoms", "Atoms are too small to see", "Atoms are made by God", "Atoms exist only in dreams"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the dream argument show that there is no external world? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument: dreams show the features of experience do not require external objects.",
          "Considers an objection, such as that possibility does not show actuality, or that waking experience is more coherent.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If there are no external objects, how can two people share a world? Is Yogācāra&rsquo;s answer convincing?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes the answer from similar karma and mutual influence of streams.",
          "Weighs it against an explanation from a common external cause.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Debates between Buddhists and Naiyāyikas, realists and idealists, raised a prior question: what are the valid means
        of knowing at all? Dignāga answered with a radically pared-down epistemology, and Dharmakīrti built it into the
        dominant system of Indian logic for centuries.
      </p>
      <p>
        Next, Dignāga and Dharmakīrti on knowledge: two means of knowing, perception without concepts, the three marks of a
        good reason, and the theory of meaning by exclusion.
      </p>
    </>
  ),
};
