import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { MaryViz } from "@/components/viz/MaryViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.5.2",
  minutes: 80,
  links: {
    revisits: ["p12.5.1", "p12.4.3", "p12.4.2"],
    foreshadows: ["p12.5.3", "p12.5.4", "p12.5.5"],
  },

  puzzle: (
    <>
      <p>
        Mary is a brilliant scientist who has lived all her life in a black and white room. She knows every physical fact
        about colour vision. One day she walks out and sees a ripe mango. Does she learn something new?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Look over what Mary knows, release her, and then try each physicalist reply.</p>
      <MaryViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the knowledge argument">
        <p>
          Frank Jackson (1982, 1986) argued as follows. Before release Mary knows all the physical facts about seeing colours.
          On release she learns a new fact: what it is like to see red. So not all facts are physical, and physicalism is false.
        </p>
      </Definition>

      <ArgumentStepViz
        title="Mary’s room"
        steps={[
          { claim: "Before release, Mary knows all the physical facts about colour vision.", kind: "premise", note: "Stipulated in the story." },
          {
            claim: "On release, Mary learns something new: what it is like to see red.",
            kind: "premise",
            note: "The intuition at the heart of the argument.",
            objection: "The ability and acquaintance replies say what she gains is not knowledge of a new fact.",
          },
          { claim: "So there are facts about colour experience that are not physical facts.", kind: "inference", note: "From the first two premises." },
          { claim: "So physicalism is false.", kind: "conclusion", note: "Physicalism says all facts are physical facts." },
        ]}
      />

      <Example title="the ability hypothesis">
        <p>
          Laurence Nemirow and David Lewis replied that Mary gains abilities, not information: to recognise, remember and
          imagine red. Knowing how is not knowing that, so no new fact is learnt.
        </p>
      </Example>

      <Example title="acquaintance and phenomenal concepts">
        <p>
          Earl Conee suggested that Mary becomes acquainted with a property she already knew about, as meeting a person differs
          from knowing facts about them. The phenomenal concept strategy, due to Brian Loar and others, says Mary gains a new
          concept, a way of thinking of a physical property from the inside. She learns an old fact in a new way, just as
          someone who learns that Hesperus is Phosphorus learns no new astronomical object.
        </p>
      </Example>

      <Remark title="Jackson’s change of mind">
        <p>
          Jackson later became a physicalist. He came to think that the intuition that Mary learns a new fact is mistaken,
          partly because epiphenomenal qualia could not explain why Mary says &ldquo;so that is what red looks like&rdquo;.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "concl",
      rung: "check",
      prompt: <p>What does the knowledge argument conclude?</p>,
      answer: {
        kind: "choice",
        options: ["That Mary is not conscious.", "That not all facts are physical facts.", "That colours do not exist.", "That science is complete."],
        correct: [1],
      },
    },
    {
      key: "know",
      rung: "check",
      prompt: <p>What does Mary know before her release?</p>,
      answer: {
        kind: "choice",
        options: ["Nothing about colour.", "All the physical facts about colour vision.", "What red looks like.", "Only the names of colours."],
        correct: [1],
      },
    },
    {
      key: "ability",
      rung: "apply",
      prompt: <p>According to the ability hypothesis, what does Mary gain on release?</p>,
      answer: {
        kind: "choice",
        options: [
          "A new non-physical fact.",
          "Abilities to recognise, remember and imagine red.",
          "Nothing at all.",
          "A new physical fact she had missed.",
        ],
        correct: [1],
      },
    },
    {
      key: "concept",
      rung: "apply",
      prompt: <p>Which analogy fits the phenomenal concept strategy?</p>,
      answer: {
        kind: "choice",
        options: [
          "Learning that Hesperus is Phosphorus: one object, two ways of thinking of it.",
          "Learning a new language.",
          "Discovering a new planet.",
          "Forgetting a fact.",
        ],
        correct: [0],
      },
    },
    {
      key: "premise",
      rung: "apply",
      prompt: <p>Which premise do the ability and acquaintance replies deny?</p>,
      answer: {
        kind: "choice",
        options: [
          "That Mary knows all the physical facts.",
          "That what Mary gains on release is knowledge of a new fact.",
          "That physicalism says all facts are physical.",
          "That Mary sees red.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Mary learn a new fact? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the knowledge argument.",
          "Considers at least one physicalist reply.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could Mary, knowing all the physical facts, work out what red looks like before she sees it, as Dennett claims?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Dennett’s idea that complete physical knowledge is hard to imagine.",
          "Weighs whether this undermines the intuition.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Mary's room and the knowledge argument, and the ability, acquaintance and phenomenal concept replies, saying which premise each one denies.",

  glimpse: (
    <p>
      The next lesson considers zombies, creatures physically like us with no experience at all, and Chalmers&rsquo;s hard
      problem of consciousness.
    </p>
  ),
};
