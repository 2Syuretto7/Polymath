import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TrairupyaViz } from "@/components/viz/TrairupyaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.5.7",
  minutes: 90,
  links: {
    revisits: ["p20.2.1", "p20.2.2", "p20.5.6"],
    foreshadows: ["p20.6.1", "p20.6.3", "p20.7.1"],
  },

  puzzle: (
    <>
      <p>
        You see a cow. Do you see &ldquo;a cow&rdquo;, an instance of cowhood, or a unique patch of colour and shape that your
        mind then files under a word? If words name universals, and only particulars are real, how can language ever be
        about the world?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test four inferences against Dignāga&rsquo;s three marks of a good reason.</p>
      <TrairupyaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="two means of knowing">
        <p>
          <strong>Dignāga</strong> (around 480 to 540 CE), in his <em>Compendium on the Means of Knowledge</em>, cut the Nyāya
          list of pramāṇas to two, matched to two kinds of object. <strong>Perception</strong> (pratyakṣa) is free of concepts
          and grasps the <strong>particular</strong> (svalakṣaṇa), the unique, momentary real. <strong>Inference</strong>{" "}
          (anumāna) works through concepts and grasps the <strong>universal</strong> (sāmānyalakṣaṇa), which is a mental
          construction. Testimony and comparison reduce to inference.
        </p>
      </Definition>

      <Example title="the three marks">
        <p>
          A reason proves its conclusion when it has three marks (trairūpya): it is present in the subject; it is present in
          some similar cases, which have the property to be proved; and it is absent from every dissimilar case. Dignāga
          arranged all combinations in his &ldquo;wheel of reasons&rdquo;, showing which give valid, contradictory or
          inconclusive inferences.
        </p>
      </Example>

      <Definition title="meaning by exclusion">
        <p>
          If universals are not real, what does &ldquo;cow&rdquo; mean? Dignāga&rsquo;s theory of <strong>apoha</strong>:
          a word excludes. &ldquo;Cow&rdquo; picks out whatever is not a non-cow. Particulars are never captured by words, but
          they can be sorted by what they are not, and that sorting is useful because it rests on real causal differences.
        </p>
      </Definition>

      <Remark title="Dharmakīrti">
        <p>
          <strong>Dharmakīrti</strong> (seventh century) made the real that which has causal efficacy (arthakriyā), and so is
          momentary. He grounded the third mark in two real relations, identity of nature (&ldquo;this is a tree, because it
          is a śiṃśapā&rdquo;) and causation (&ldquo;there is fire, because there is smoke&rdquo;), adding proof by
          non-perception of what would be perceived. His <em>Commentary on Valid Cognition</em> shaped Indian debate with
          Nyāya, Mīmāṃsā and the Jainas, and Tibetan monastic education to this day.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "two",
      rung: "check",
      prompt: <p>Which two means of knowing does Dignāga accept?</p>,
      answer: { kind: "choice", options: ["Perception and inference", "Perception and testimony", "Inference and scripture", "Comparison and inference"], correct: [0] },
    },
    {
      key: "percep",
      rung: "check",
      prompt: <p>What does perception grasp, for Dignāga?</p>,
      answer: { kind: "choice", options: ["The unique particular, free of concepts", "Universals such as cowhood", "Words", "Inferences"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which mark fails for &ldquo;sound is impermanent, because it is knowable&rdquo;?</p>,
      answer: { kind: "choice", options: ["The third: the reason is found in a dissimilar case, space", "The first", "The second", "None"], correct: [0] },
    },
    {
      key: "apoha",
      rung: "apply",
      prompt: <p>On the apoha theory, what does the word &ldquo;cow&rdquo; do?</p>,
      answer: { kind: "choice", options: ["Excludes whatever is not a cow", "Names the universal cowhood", "Points at one particular cow", "Expresses a feeling"], correct: [0] },
    },
    {
      key: "real",
      rung: "apply",
      prompt: <p>What is Dharmakīrti&rsquo;s criterion of the real?</p>,
      answer: { kind: "choice", options: ["Causal efficacy", "Permanence", "Being named", "Being perceived by many"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can concept-free perception give us knowledge, if knowing seems to need judging something as something? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Dignāga’s view that perception grasps bare particulars without concepts.",
          "Considers the objection that knowledge requires a judgement, which needs concepts, or Dharmakīrti’s reply that perception causes such judgements.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is defining &ldquo;cow&rdquo; as &ldquo;not non-cow&rdquo; circular? How might an apoha theorist respond?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the circularity worry.",
          "Considers a reply, such as grounding exclusion in causal effects or in a learned practice rather than a prior concept.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Buddhists and Naiyāyikas each claimed that their system captured the truth, and the other&rsquo;s was simply wrong. The
        Jainas proposed something more surprising: that every claim about a complex reality is true only from some standpoint,
        and many apparently rival views can be partly right at once.
      </p>
      <p>
        Next, anekāntavāda, the Jaina doctrine of many-sidedness: the parable of the blind men and the elephant, the
        standpoints (naya), and why non-violence extends to thought.
      </p>
    </>
  ),
};
