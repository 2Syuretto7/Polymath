import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CarvakaViz } from "@/components/viz/CarvakaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.6.3",
  minutes: 85,
  links: {
    revisits: ["p20.2.1", "p1.1.3", "p20.1.3"],
    foreshadows: ["p20.7.1", "p20.7.4", "p20.7.5"],
  },

  puzzle: (
    <>
      <p>
        Every school you have met so far promises liberation from rebirth. Suppose there is no rebirth: consciousness arises
        from the body and ends with it, and karma is a story told by priests who profit from it. What would follow for how to
        live? And could anyone prove otherwise, using only what they can see?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Defend the claim that all smoke has fire, and hear the Cārvāka reply.</p>
      <CarvakaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Cārvāka, or Lokāyata">
        <p>
          <strong>Cārvāka</strong>, also called <strong>Lokāyata</strong>, &lsquo;confined to the world&rsquo;, was India&rsquo;s
          materialist school, traced to a legendary Bṛhaspati. Its own texts are lost; we know it mostly through opponents, such
          as Mādhava&rsquo;s fourteenth-century <em>Compendium of All Systems</em>, and the sceptic Jayarāśi&rsquo;s{" "}
          <em>Lion of the Destruction of Principles</em>.
        </p>
      </Definition>

      <Example title="only perception">
        <p>
          The Cārvāka accepts only perception as a means of knowledge. Inference needs a universal connection (vyāpti), such as
          &lsquo;wherever there is smoke, there is fire&rsquo;. Perception sees only particular cases; inference would need
          another universal connection, and so on; testimony depends on inferring the speaker&rsquo;s reliability. So no
          universal connection is ever known, and inference yields at most probability. Some later Cārvākas, such as Purandara,
          allowed inference about perceptible things, but not about the unseen, like heaven or past lives.
        </p>
      </Example>

      <Definition title="materialism">
        <p>
          Only four elements exist: earth, water, fire and air. Consciousness arises when they combine in a body, as the power
          to intoxicate arises when certain ingredients ferment, though none has it alone. When the body dies, consciousness
          ends. There is no self to be reborn, no karma carried across lives, no God, and no liberation but death.
        </p>
      </Definition>

      <Remark title="ethics and reputation">
        <p>
          The opponents&rsquo; caricature has the Cārvāka say: while life is yours, live joyously; no one escapes death&rsquo;s
          searching eye. Pleasure is the goal, and pain should be avoided, not by renouncing pleasure, as one does not stop
          eating fish for fear of bones. Behind the caricature was a serious critique of priestly authority and of beliefs
          beyond evidence, which modern Indian rationalists have reclaimed.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "means",
      rung: "check",
      prompt: <p>Which means of knowledge does the Cārvāka accept?</p>,
      answer: { kind: "choice", options: ["Perception only", "Perception and inference", "Scripture only", "All six pramāṇas"], correct: [0] },
    },
    {
      key: "mind",
      rung: "check",
      prompt: <p>How does the Cārvāka explain consciousness?</p>,
      answer: { kind: "choice", options: ["As arising from the elements combined in a body", "As an eternal self", "As a gift of the gods", "As an illusion"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which defence of the universal claim leads to an endless regress?</p>,
      answer: { kind: "choice", options: ["By inference", "By perception", "By testimony", "By a universal"], correct: [0] },
    },
    {
      key: "elements",
      rung: "apply",
      prompt: <p>How many elements does the Cārvāka accept?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "hume",
      rung: "apply",
      prompt: <p>Which later Western problem does the Cārvāka critique of inference most resemble?</p>,
      answer: { kind: "choice", options: ["Hume’s problem of induction", "The mind-body problem", "The problem of evil", "Zeno’s paradoxes"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the Cārvāka critique show that inference gives no knowledge? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument that universal connections cannot be known by perception, inference or testimony.",
          "Considers a reply, such as that the Cārvāka must use inference to argue at all, or Nyāya’s appeal to repeated observation and absence of counterexamples.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If there is no afterlife and no karma, is there any reason to be moral? How might a Cārvāka answer?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers whether morality needs reward or punishment beyond this life.",
          "Offers a reason within one life, such as the pleasures of trust and social life, or the king’s law.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The Cārvāka challenge to inference sharpened every school&rsquo;s logic. In fourteenth-century Mithilā, Gaṅgeśa answered
        it and much else in a work that reshaped Indian philosophy: a precise technical language for stating exactly what an
        inference requires.
      </p>
      <p>
        Next, Gaṅgeśa&rsquo;s new logic, Navya-Nyāya: the Jewel of Reflection on Truth, the analysis of pervasion, and the
        language of limitors that let Indian philosophers state definitions with mathematical precision.
      </p>
    </>
  ),
};
