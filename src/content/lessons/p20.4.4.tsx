import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FiveDifferencesViz } from "@/components/viz/FiveDifferencesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.4.4",
  minutes: 85,
  links: {
    revisits: ["p20.4.3", "p20.4.2", "p20.2.1"],
    foreshadows: ["p20.5.5", "p20.6.1", "p20.7.1"],
  },

  puzzle: (
    <>
      <p>
        You see a pot and a cloth, and you see that they are different. Advaita says this perception, however vivid, is
        finally false, overruled by scripture&rsquo;s teaching of oneness. But if perception can be overruled so easily, how do
        we know there is a scripture at all? We only know of it by seeing and hearing.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose each of the five differences to see what it separates.</p>
      <FiveDifferencesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="dualism">
        <p>
          <strong>Dvaita</strong> means duality. For Madhva (traditionally 1238 to 1317), reality has two kinds:{" "}
          <strong>independent</strong> (svatantra), which is God alone, Viṣṇu, and <strong>dependent</strong> (paratantra),
          which is everything else, selves and matter. Dependent things are real and eternal, but exist, act and know only by
          God&rsquo;s will.
        </p>
      </Definition>

      <Example title="the five differences">
        <p>
          Madhva lists five eternal differences: between God and selves, God and matter, one self and another, selves and
          matter, and one material thing and another. Difference is not a relation laid on things from outside, which would
          invite a regress; it is part of what each thing is.
        </p>
      </Example>

      <Definition title="perception as a witness">
        <p>
          Against Advaita, Madhva holds that perception of difference is valid knowledge, and that the self&rsquo;s own witness
          (sākṣin) gives certainty about its experience. Scripture cannot contradict sound perception, since we rely on
          perception to receive scripture at all. &ldquo;You are that&rdquo; is reread, by dividing the words differently, as
          &ldquo;you are not that&rdquo; (atat tvam asi), or as a statement of likeness and dependence.
        </p>
      </Definition>

      <Remark title="gradation of selves">
        <p>
          Selves differ in their natures, and so in their destinies. Some are fit for liberation, some for endless wandering,
          and some for darkness: a doctrine of eternal gradation (tāratamya) found almost nowhere else in Indian thought.
          Even the liberated differ in the bliss they enjoy. Critics found this harsh; defenders saw in it the seriousness
          of a world where God&rsquo;s justice and real difference both matter.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "two",
      rung: "check",
      prompt: <p>For Madhva, what is the only independent reality?</p>,
      answer: { kind: "choice", options: ["God, Viṣṇu", "Matter", "The individual self", "Ignorance"], correct: [0] },
    },
    {
      key: "five",
      rung: "check",
      prompt: <p>Which of these is not one of Madhva&rsquo;s five differences?</p>,
      answer: {
        kind: "choice",
        options: ["Between appearance and reality", "Between God and selves", "Between one self and another", "Between one material thing and another"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many differences involve God?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "percep",
      rung: "apply",
      prompt: <p>What is Madhva&rsquo;s argument against overruling perception by scripture?</p>,
      answer: {
        kind: "choice",
        options: ["We know scripture only through perception, so discrediting perception discredits scripture", "Scripture is never about the world", "Perception is infallible in every case", "Scripture was written by humans"],
        correct: [0],
      },
    },
    {
      key: "contrast",
      rung: "apply",
      prompt: <p>How does Madhva differ from Rāmānuja about selves and God?</p>,
      answer: {
        kind: "choice",
        options: ["Madhva denies any unity: selves are eternally distinct, not God’s body within one reality", "Madhva says selves are identical with God", "Madhva denies that God exists", "There is no difference between them"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Madhva right that perception of difference cannot be overruled by scripture? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Madhva’s argument that scripture is known through perception.",
          "Considers an Advaitin reply, such as that empirical perception is valid at its own level but not ultimately.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Madhva holds that some selves are by nature never liberated. Is this compatible with a just and loving God?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers whether natures not chosen by a self can make its fate just.",
          "Considers a defence, such as that God only reveals what each self eternally is.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        All the Vedāntas agree on one thing: there is a self, ātman, whether identical with brahman, its body, or its
        dependent reflection. One tradition, older than all three, denied exactly this, and began not from the self but from
        suffering.
      </p>
      <p>
        Next, the four noble truths: the Buddha&rsquo;s diagnosis of suffering and its cause, the claim that it can end, and
        the eightfold path, a middle way between indulgence and austerity.
      </p>
    </>
  ),
};
