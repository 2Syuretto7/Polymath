import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EmanationViz } from "@/components/viz/EmanationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.7.5",
  minutes: 85,
  links: {
    revisits: ["p4.3.5", "p4.3.4", "p4.5.5"],
    foreshadows: ["p6.1.2", "p6.1.1", "p23.2.2"],
  },

  puzzle: (
    <>
      <p>
        If everything has a cause, what caused the first thing? And if the first thing is made of parts, what holds the
        parts together? Plotinus, writing in Rome in the third century CE, concluded that the source of everything must be
        utterly simple, so simple that nothing true can be said of it, not even that it exists. Yet he also claimed to have
        been united with it. How can a philosopher reason towards something beyond reason?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Plotinus pictures reality as levels flowing from a single source. Choose a level, and switch between reading the
        levels downwards, as the procession from the One, and upwards, as the soul&rsquo;s return.
      </p>
      <EmanationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Enneads">
        <p>
          Plotinus (204 to 270 CE) studied in Alexandria and taught in Rome. He regarded himself as an interpreter of Plato,
          though his system is new enough that historians call it Neoplatonism. His pupil Porphyry edited his 54 treatises
          into six groups of nine, the <em>Enneads</em>, and wrote a life of his teacher, which begins by saying that
          Plotinus seemed ashamed of being in a body.
        </p>
      </Definition>

      <Definition title="the three hypostases">
        <p>
          Reality has three basic levels, or hypostases. The <strong>One</strong>, also called the Good, is the first
          principle. <strong>Intellect</strong>, <em>nous</em>, is a mind whose objects are the Forms, and which thinks them
          all at once. <strong>Soul</strong> includes the soul of the world and individual souls; it thinks step by step, and
          time is its life. Below Soul come nature and bodies, and at the bottom, matter.
        </p>
      </Definition>

      <Example title="why the One must be simple">
        <p>
          Anything made of many parts depends on something that makes it one; an army or a house is one only because
          something unifies it. So the first principle, which depends on nothing, cannot have parts. It cannot even have the
          duality of a thinker and its thought, which is why it is above Intellect. Any description, even &ldquo;it is&rdquo;
          or &ldquo;it is good&rdquo;, would add something to it; so we say only what it is not, and Plotinus warns that even
          calling it the One is a way of denying multiplicity, not a name.
        </p>
      </Example>

      <Definition title="procession, or emanation">
        <p>
          The One does not choose to create, and it does not need to. Because it is perfect, it overflows, and what it
          produces turns back to contemplate it and so becomes Intellect; Intellect in turn produces Soul. Plotinus uses the
          images of light from the sun, heat from fire, cold from snow and scent from perfume. In each case the source loses
          nothing. Each level is an image of the one above, less unified and less real.
        </p>
      </Definition>

      <Remark title="matter, evil and the return">
        <p>
          Matter is where the procession gives out: it has no form at all, and Plotinus calls it evil itself, meaning a
          privation, a lack of good rather than a rival power. Augustine took over this account of evil as privation. The
          soul&rsquo;s task is to return. The civic virtues order our lives; the higher virtues purify the soul from the
          body; dialectic leads to contemplation of the Forms in Intellect; and finally, beyond thought, comes union with the
          One. Porphyry says Plotinus reached that union four times while he knew him, and placed last in the{" "}
          <em>Enneads</em> the words about the flight of the alone to the alone.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "order",
      rung: "check",
      prompt: <p>What is the order of Plotinus&rsquo; three hypostases, from highest to lowest?</p>,
      answer: {
        kind: "choice",
        options: ["Soul, Intellect, One", "One, Soul, Intellect", "One, Intellect, Soul", "Intellect, One, Soul"],
        correct: [2],
      },
    },
    {
      key: "how",
      rung: "check",
      prompt: <p>How does the One produce what comes after it?</p>,
      answer: {
        kind: "choice",
        options: [
          "By a free choice at the beginning of time.",
          "By overflowing from its perfection, without loss or need.",
          "By shaping pre-existing matter, like a craftsman.",
          "It produces nothing.",
        ],
        correct: [1],
      },
    },
    {
      key: "describe",
      rung: "apply",
      prompt: <p>Why does Plotinus hold that, strictly, the One cannot be called &ldquo;being&rdquo; or &ldquo;intelligent&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is evil.",
          "Because any such description would introduce multiplicity into what is perfectly simple.",
          "Because it does not exist at all.",
          "Because only the gods may speak of it.",
        ],
        correct: [1],
      },
    },
    {
      key: "evil",
      rung: "apply",
      prompt: <p>On Plotinus&rsquo; view, what is evil?</p>,
      answer: {
        kind: "choice",
        options: [
          "A second principle, as powerful as the One.",
          "The privation of good, found in formless matter.",
          "A product of Intellect.",
          "An illusion with no connection to matter.",
        ],
        correct: [1],
      },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>Porphyry arranged Plotinus&rsquo; writings into six groups of nine. How many treatises is that?</p>,
      answer: { kind: "numeric", value: 54 },
    },
    {
      key: "simple",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct Plotinus&rsquo; argument that the first principle of everything must be perfectly simple, and that it
          must therefore be beyond thought. Assess one of its premises.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States that whatever has parts depends on something that unifies it, so a first principle that depends on nothing has no parts.",
          "Adds that thinking involves a duality of thinker and object, so the simple first principle is beyond thinking.",
          "Assesses a premise, for example whether every unity needs an external unifier. Any thoughtful assessment earns full credit.",
        ],
      },
    },
    {
      key: "compare",
      rung: "stretch",
      prompt: (
        <p>
          Compare Plotinus&rsquo; emanation with Plato&rsquo;s image of the sun in the <em>Republic</em>, or with the idea of
          creation by a free choice. What does each picture gain, and what does it give up?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes emanation accurately: necessary, undiminishing overflow from a simple source.",
          "Compares it fairly with the chosen alternative, for example the Good as the source of being and knowability, or a creator who could have done otherwise.",
          "Identifies a gain and a cost, such as explaining why there is anything at all versus losing freedom or personality in the first principle. Any thoughtful comparison earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Plotinus' three levels of reality, why he thought the One must be simple and beyond description, how everything flows from it without loss, what he said evil is, and how the soul returns.",

  glimpse: (
    <p>
      This completes Ancient Greek Philosophy. Medieval Philosophy opens with Augustine, who learnt from the Platonists
      that evil is a privation, and the arguments for God in Philosophy of Religion owe much to the idea of a simple first
      cause.
    </p>
  ),
};
