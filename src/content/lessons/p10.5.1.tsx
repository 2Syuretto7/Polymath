import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["direct realism", "indirect realism", "idealism"];
const ITEMS: SortItem[] = [
  {
    text: "When I see a tomato, the tomato itself is what I am aware of.",
    cat: "direct realism",
    why: "Direct realism: we perceive mind-independent objects without any intermediary.",
  },
  {
    text: "When I see a tomato, I am immediately aware of a red, round sense datum, and infer the tomato from it.",
    cat: "indirect realism",
    why: "Indirect or representative realism: the immediate objects of awareness are mental items that represent the world.",
  },
  {
    text: "The tomato is nothing but a collection of ideas; to be is to be perceived.",
    cat: "idealism",
    why: "Berkeley's idealism: there is no matter behind the ideas, only minds and their ideas.",
  },
  {
    text: "Colour exists only in the mind, but the shape and size of the tomato resemble real qualities of the object.",
    cat: "indirect realism",
    why: "Locke's distinction between primary and secondary qualities is a classic form of indirect realism.",
  },
  {
    text: "A hallucination and a real perception can feel alike, but in the real case the object itself is part of the experience.",
    cat: "direct realism",
    why: "Disjunctivism, a form of direct realism: the good and bad cases have no common mental core.",
  },
  {
    text: "Physical objects are permanent possibilities of sensation.",
    cat: "idealism",
    why: "J. S. Mill's phenomenalism, a close relative of idealism: talk of objects is analysed as talk of possible experiences.",
  },
  {
    text: "We can never check our ideas against the world, because we only ever meet the ideas.",
    cat: "indirect realism",
    why: "This is the veil of perception worry that the indirect realist must answer, and that pushed Berkeley to idealism.",
  },
];

export const lesson: LessonContent = {
  id: "p10.5.1",
  minutes: 80,
  links: {
    revisits: ["p7.3.2", "p7.4.2", "p10.4.4"],
    foreshadows: ["p10.5.2", "p31.2.2", "p19.5.2"],
  },

  puzzle: (
    <>
      <p>
        A straight stick looks bent in water. A coin looks elliptical when tilted. In a vivid hallucination, you seem to see
        a dagger that is not there. In each case you are aware of something bent, elliptical or dagger-shaped, but it is not
        the stick, the coin, or any dagger. What, then, are you aware of, and is it what you are aware of in ordinary
        perception too?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each claim by the theory of perception it expresses or supports.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which theory of perception does each claim belong to?" />
    </>
  ),

  theory: (
    <>
      <Definition title="direct realism">
        <p>
          In perception we are directly aware of physical objects that exist independently of us. This is the common-sense
          view, and it makes perception a natural source of knowledge.
        </p>
      </Definition>

      <Example title="the argument from illusion">
        <p>
          In an illusion or hallucination, something appears to have a property that no physical object present has. So we
          are aware of something else: a sense datum. Since illusory and veridical experiences can be indistinguishable, we
          should say the same of veridical perception. So we are never directly aware of physical objects.
        </p>
      </Example>

      <Definition title="indirect realism and idealism">
        <p>
          Indirect realists, such as Locke, say we perceive the world by being aware of mental representations caused by it.
          This opens a gap: how do we know the representations resemble anything? Berkeley closed the gap by denying the
          world behind the ideas, holding that objects are collections of ideas, sustained by God when we are not looking.
        </p>
      </Definition>

      <Remark title="modern responses">
        <p>
          Adverbialists say that seeing red is sensing &ldquo;redly&rdquo;, a way of experiencing, not an awareness of a red
          thing. Intentionalists say experience represents the world, as a belief does, so it can misrepresent without any
          strange object. Disjunctivists deny the step from indistinguishability to sameness: a perception and a
          hallucination may seem alike from the inside yet be fundamentally different states.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dr",
      rung: "check",
      prompt: <p>What does direct realism say we are aware of in perception?</p>,
      answer: {
        kind: "choice",
        options: ["Sense data", "Mind-independent physical objects", "Only our own ideas", "Nothing at all"],
        correct: [1],
      },
    },
    {
      key: "berkeley",
      rung: "check",
      prompt: <p>Which view did Berkeley hold?</p>,
      answer: { kind: "choice", options: ["Direct realism", "Indirect realism", "Idealism", "Disjunctivism"], correct: [2] },
    },
    {
      key: "illusion",
      rung: "apply",
      prompt: <p>Which step in the argument from illusion do disjunctivists reject?</p>,
      answer: {
        kind: "choice",
        options: [
          "That illusions occur.",
          "That if two experiences are indistinguishable, they are the same kind of state.",
          "That physical objects exist.",
          "That we have experiences.",
        ],
        correct: [1],
      },
    },
    {
      key: "veil",
      rung: "apply",
      prompt: <p>What is the &ldquo;veil of perception&rdquo; problem for indirect realism?</p>,
      answer: {
        kind: "choice",
        options: [
          "That eyes are covered by eyelids.",
          "That if we are only ever aware of representations, we cannot check whether they match the world.",
          "That perception is slow.",
          "That colours do not exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "intent",
      rung: "apply",
      prompt: <p>How does an intentionalist explain the bent stick?</p>,
      answer: {
        kind: "choice",
        options: [
          "We see a bent sense datum.",
          "The experience represents the stick as bent, and this representation is false.",
          "The stick really is bent.",
          "We do not see the stick at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the argument from illusion show that we never directly perceive physical objects? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument from illusion or hallucination.",
          "Considers a response, such as intentionalism or disjunctivism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "vr",
      rung: "stretch",
      prompt: <p>In a virtual reality headset you see a mountain. Are you perceiving the screen, an image, a virtual mountain, or nothing? Which theory handles the case best?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes what each theory would say about the case.",
          "Picks a theory and gives a reason.",
          "Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend direct realism, the argument from illusion and hallucination, indirect realism and the veil of perception, Berkeley's idealism, and the modern responses of adverbialism, intentionalism and disjunctivism.",

  glimpse: (
    <p>
      The next lesson considers testimony, the source of most of what we know. Disjunctivism and the phenomenology of
      perception are developed further in later courses.
    </p>
  ),
};
